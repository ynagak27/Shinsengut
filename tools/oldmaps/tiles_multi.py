# tiles_multi.py OUTDIR zmin zmax GCPJSON:IMAGE [GCPJSON:IMAGE ...]
# Several georeferenced sheets cut into ONE tile set. Where sheets overlap, each pixel comes from the
# sheet in which it lies furthest from the frame edge, so edge furniture (compass roses, margins) loses.
import sys, math, json, os, numpy as np, cv2
sys.path.insert(0, __file__.rsplit("/", 1)[0])
from fit import load
from scipy.interpolate import RBFInterpolator
from PIL import Image
Image.MAX_IMAGE_PIXELS = None
outdir, zmin, zmax = sys.argv[1], int(sys.argv[2]), int(sys.argv[3])
R = 6378137.0; ORIGIN = math.pi * R
sheets = []
gb = [np.inf, np.inf, -np.inf, -np.inf]
for arg in sys.argv[4:]:
    gj, imgp = arg.split(":")
    j = json.load(open(gj)); K = j["source"]["gcp_to_mosaic"]
    names, old, mm, ll = load(gj)
    inv = RBFInterpolator(mm, old * K, kernel="thin_plate_spline", degree=1)
    fwd = RBFInterpolator(old, mm, kernel="thin_plate_spline", degree=1)
    img = cv2.cvtColor(cv2.imread(imgp), cv2.COLOR_BGR2RGB)
    poly = (np.array(j["clip_polygon"], float) * K).astype(np.int32)
    m = np.zeros(img.shape[:2], np.uint8); cv2.fillPoly(m, [poly], 255)
    dist = cv2.distanceTransform(m, cv2.DIST_L2, 5).astype(np.float32)   # px inside the frame
    corners = fwd(np.array(j["clip_polygon"], float))
    gb = [min(gb[0], corners[:, 0].min()), min(gb[1], corners[:, 1].min()), max(gb[2], corners[:, 0].max()), max(gb[3], corners[:, 1].max())]
    pyr = [img]
    for _ in range(4): pyr.append(cv2.resize(pyr[-1], (pyr[-1].shape[1] // 2, pyr[-1].shape[0] // 2), interpolation=cv2.INTER_AREA))
    sheets.append(dict(inv=inv, pyr=pyr, dist=dist, name=gj))
minx, miny, maxx, maxy = gb
count = 0; total = 0
for z in range(zmin, zmax + 1):
    n = 2 ** z; size = 2 * ORIGIN / n
    x0, x1 = int((minx + ORIGIN) // size), int((maxx + ORIGIN) // size)
    y0, y1 = int((ORIGIN - maxy) // size), int((ORIGIN - miny) // size)
    for tx in range(x0, x1 + 1):
        for ty in range(y0, y1 + 1):
            px = (np.arange(256) + 0.5) / 256 * size
            GX, GY = np.meshgrid(-ORIGIN + tx * size + px, ORIGIN - ty * size - px)
            pts = np.c_[GX.ravel(), GY.ravel()]
            best = np.zeros((256, 256), np.float32); rgb = np.zeros((256, 256, 3), np.uint8)
            for s in sheets:
                src = s["inv"](pts).astype(np.float32)
                sx = src[:, 0].reshape(256, 256); sy = src[:, 1].reshape(256, 256)
                d = cv2.remap(s["dist"], sx, sy, cv2.INTER_LINEAR, borderMode=cv2.BORDER_CONSTANT, borderValue=0)
                if d.max() <= 0: continue
                step = np.median(np.hypot(np.diff(sx, axis=1), np.diff(sy, axis=1)))
                L = int(max(0, min(len(s["pyr"]) - 1, math.floor(math.log2(max(step, 1.0))))))
                f = 2 ** L
                g = cv2.remap(s["pyr"][L], (sx + 0.5) / f - 0.5, (sy + 0.5) / f - 0.5, cv2.INTER_CUBIC, borderMode=cv2.BORDER_REPLICATE)
                sel = d > best
                rgb[sel] = g[sel]; best[sel] = d[sel]
            if best.max() <= 0: continue
            a = np.clip(best / 12.0, 0, 1)          # ~12 source px feather at the outer frame
            d = os.path.join(outdir, str(z), str(tx)); os.makedirs(d, exist_ok=True)
            fn = os.path.join(d, f"{ty}.webp")
            Image.fromarray(np.dstack([rgb, (a * 255).astype(np.uint8)]), "RGBA").save(fn, "WEBP", quality=72, method=6)
            count += 1; total += os.path.getsize(fn)
    print("z", z, "tiles", count, "MB", round(total / 1e6, 1), flush=True)
lat = lambda y: math.degrees(math.atan(math.sinh(y / R))); lng = lambda x: math.degrees(x / R)
print("bounds_latlng", [lat(miny), lng(minx), lat(maxy), lng(maxx)])
