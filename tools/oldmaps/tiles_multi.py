# tiles_multi.py OUTDIR zmin zmax GCPJSON:IMAGE [GCPJSON:IMAGE ...]
# Several georeferenced sheets cut into ONE tile set. Where sheets overlap, each pixel comes from the
# sheet in which it lies furthest from the frame edge, so edge furniture (compass roses, margins) loses.
import sys, math, json, os, numpy as np, cv2
sys.path.insert(0, __file__.rsplit("/", 1)[0])
from fit import load, make_inv
from contentmask import content_mask
from scipy.interpolate import RBFInterpolator
from PIL import Image
Image.MAX_IMAGE_PIXELS = None
args = sys.argv[1:]
LAND = None
if args[0].startswith("--land="):
    # --land=mask.png:mask.json:buffer_m — fade the layer out more than buffer_m metres offshore (modern coast)
    lp, lj, lb = args.pop(0)[7:].split(":")
    lm = cv2.imread(lp, cv2.IMREAD_GRAYSCALE); li = json.load(open(lj))
    b0, b1, b2, b3 = li["merc_bounds"]; mpp = (b2 - b0) / lm.shape[1]
    sea_dist = cv2.distanceTransform((lm == 0).astype(np.uint8), cv2.DIST_L2, 5) * mpp   # metres from land
    LAND = dict(dist=sea_dist.astype(np.float32), b=(b0, b1, b2, b3), buf=float(lb), mpp=mpp)
outdir, zmin, zmax = args[0], int(args[1]), int(args[2])
sys.argv = [sys.argv[0]] + args
R = 6378137.0; ORIGIN = math.pi * R
sheets = []
# first pass: each sheet's median colour; the shared target is their average
_meds = []
for arg in sys.argv[4:]:
    _im = cv2.imread(arg.split(":")[1])
    _meds.append(np.median(cv2.cvtColor(_im[::8, ::8], cv2.COLOR_BGR2LAB).reshape(-1, 3), axis=0))
PAPER = np.mean(_meds, axis=0).astype(np.float32)
print("paper target LAB", PAPER.round(), flush=True)
gb = [np.inf, np.inf, -np.inf, -np.inf]
for arg in sys.argv[4:]:
    gj, imgp = arg.split(":")
    j = json.load(open(gj)); K = j["source"]["gcp_to_mosaic"]
    names, old, mm, ll = load(gj)
    inv = make_inv(gj, K)
    fwd = RBFInterpolator(old, mm, kernel="thin_plate_spline", degree=1)
    img = cv2.cvtColor(cv2.imread(imgp), cv2.COLOR_BGR2RGB)
    # tone-match: shift each sheet so its paper (the median colour) lands on one shared washi tone,
    # so neighbouring sheets photographed under different light don't show a seam
    lab = cv2.cvtColor(img, cv2.COLOR_RGB2LAB).astype(np.float32)
    med = np.median(lab[::8, ::8].reshape(-1, 3), axis=0)
    lab += (PAPER - med)                            # PAPER = mean of all sheets' medians (computed below)
    img = cv2.cvtColor(np.clip(lab, 0, 255).astype(np.uint8), cv2.COLOR_LAB2RGB)
    poly = (np.array(j["clip_polygon"], float) * K).astype(np.int32)
    m = np.zeros(img.shape[:2], np.uint8); cv2.fillPoly(m, [poly], 255)
    if j.get("content_mask"):                                  # fade out blank, unsurveyed paper
        m &= content_mask(cv2.cvtColor(img, cv2.COLOR_RGB2BGR))
    for hx, hy, hr in j.get("clip_holes", []):                 # compass roses and other furniture
        cv2.circle(m, (int(hx * K), int(hy * K)), int(hr * K), 0, -1)
    dist = cv2.distanceTransform(m, cv2.DIST_L2, 5).astype(np.float32)   # px inside the kept area
    feather = j.get("feather_px", 12)
    corners = fwd(np.array(j["clip_polygon"], float))
    mg = 0.1 * max(np.ptp(corners[:, 0]), np.ptp(corners[:, 1]))   # warps can bulge past the corners
    sb = (corners[:, 0].min() - mg, corners[:, 1].min() - mg, corners[:, 0].max() + mg, corners[:, 1].max() + mg)
    gb = [min(gb[0], corners[:, 0].min()), min(gb[1], corners[:, 1].min()), max(gb[2], corners[:, 0].max()), max(gb[3], corners[:, 1].max())]
    pyr = [img]
    for _ in range(4): pyr.append(cv2.resize(pyr[-1], (pyr[-1].shape[1] // 2, pyr[-1].shape[0] // 2), interpolation=cv2.INTER_AREA))
    sheets.append(dict(inv=inv, pyr=pyr, dist=dist, name=gj, feather=feather, bbox=sb))
minx, miny, maxx, maxy = gb
_u = (np.arange(256, dtype=np.float32)) / 255 * 16          # output pixel p (centre p+0.5) -> grid index
UP, VP = np.meshgrid(_u, _u)
count = 0; total = 0
for z in range(zmin, zmax + 1):
    n = 2 ** z; size = 2 * ORIGIN / n
    x0, x1 = int((minx + ORIGIN) // size), int((maxx + ORIGIN) // size)
    y0, y1 = int((ORIGIN - maxy) // size), int((ORIGIN - miny) // size)
    for tx in range(x0, x1 + 1):
        for ty in range(y0, y1 + 1):
            tb = (-ORIGIN + tx * size, ORIGIN - (ty + 1) * size, -ORIGIN + (tx + 1) * size, ORIGIN - ty * size)
            live = [s for s in sheets if not (s["bbox"][2] < tb[0] or s["bbox"][0] > tb[2] or s["bbox"][3] < tb[1] or s["bbox"][1] > tb[3])]
            if not live: continue
            px = (np.arange(256) + 0.5) / 256 * size
            GX, GY = np.meshgrid(-ORIGIN + tx * size + px, ORIGIN - ty * size - px)
            # the warp is smooth: evaluate it on a 17x17 grid of pixel centres 0.5..255.5 and interpolate
            cg = np.linspace(0.5, 255.5, 17) / 256 * size
            CX, CY = np.meshgrid(-ORIGIN + tx * size + cg, ORIGIN - ty * size - cg)
            cpts = np.c_[CX.ravel(), CY.ravel()]
            best = np.zeros((256, 256), np.float32); cover = np.zeros((256, 256), np.float32)
            acc = np.zeros((256, 256, 3), np.float32); wsum = np.zeros((256, 256), np.float32)
            for s in live:
                csrc = np.asarray(s["inv"](cpts), np.float32)
                sx = cv2.remap(csrc[:, 0].reshape(17, 17).copy(), UP, VP, cv2.INTER_LINEAR, borderMode=cv2.BORDER_REPLICATE)
                sy = cv2.remap(csrc[:, 1].reshape(17, 17).copy(), UP, VP, cv2.INTER_LINEAR, borderMode=cv2.BORDER_REPLICATE)
                d = cv2.remap(s["dist"], sx, sy, cv2.INTER_LINEAR, borderMode=cv2.BORDER_CONSTANT, borderValue=0) / s["feather"]
                if d.max() <= 0: continue
                step = np.median(np.hypot(np.diff(sx, axis=1), np.diff(sy, axis=1)))
                L = int(max(0, min(len(s["pyr"]) - 1, math.floor(math.log2(max(step, 1.0))))))
                f = 2 ** L
                g = cv2.remap(s["pyr"][L], (sx + 0.5) / f - 0.5, (sy + 0.5) / f - 0.5, cv2.INTER_CUBIC, borderMode=cv2.BORDER_REPLICATE)
                # blend overlapping sheets, each weighted by how deep inside its own kept area the pixel is
                w = np.clip(d, 0, None) ** 2
                acc += g.astype(np.float32) * w[..., None]; wsum += w
                best = np.maximum(best, d)
                cover += np.clip(d, 0, 1)           # where two sheets both fade at a shared edge, their fades add up
            if best.max() <= 0: continue
            rgb = (acc / np.maximum(wsum, 1e-6)[..., None]).clip(0, 255).astype(np.uint8)
            a = np.clip(cover, 0, 1)                 # dist is already in feather units
            if LAND is not None:
                b0, b1, b2, b3 = LAND["b"]
                lx = ((GX - b0) / LAND["mpp"]).astype(np.float32); ly = ((b3 - GY) / LAND["mpp"]).astype(np.float32)
                sd = cv2.remap(LAND["dist"], lx, ly, cv2.INTER_LINEAR, borderMode=cv2.BORDER_CONSTANT, borderValue=1e9)   # outside the mask: treat as open sea
                a = a * np.clip((LAND["buf"] - sd) / (LAND["buf"] * 0.5), 0, 1)
                if a.max() <= 0.01: continue
            d = os.path.join(outdir, str(z), str(tx)); os.makedirs(d, exist_ok=True)
            fn = os.path.join(d, f"{ty}.webp")
            Image.fromarray(np.dstack([rgb, (a * 255).astype(np.uint8)]), "RGBA").save(fn, "WEBP", quality=72, method=6)
            count += 1; total += os.path.getsize(fn)
    print("z", z, "tiles", count, "MB", round(total / 1e6, 1), flush=True)
lat = lambda y: math.degrees(math.atan(math.sinh(y / R))); lng = lambda x: math.degrees(x / R)
print("bounds_latlng", [lat(miny), lng(minx), lat(maxy), lng(maxx)])
