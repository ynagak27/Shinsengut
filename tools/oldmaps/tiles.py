# tiles.py GCPJSON MOSAIC OUTDIR zmin zmax
# Warps the stitched old map into Web Mercator XYZ tiles (WebP with alpha) using a thin-plate spline
# fitted to the GCPs. The GCP file's "source" block says how GCP pixels relate to MOSAIC pixels
# (gcp_to_mosaic) and whether to keep colour (else the scan is toned to washi/sumi).
import sys, math, json, os, numpy as np, cv2
sys.path.insert(0, __file__.rsplit("/", 1)[0])
from fit import load
from clipmask import clip_alpha
from scipy.interpolate import RBFInterpolator
from PIL import Image
Image.MAX_IMAGE_PIXELS = None
gj, mos, outdir, zmin, zmax = sys.argv[1], sys.argv[2], sys.argv[3], int(sys.argv[4]), int(sys.argv[5])
src_info = json.load(open(gj))["source"]
K = src_info["gcp_to_mosaic"]; COLOR = src_info.get("color", False)
GW, GH = round(src_info["mosaic_width"] / K), round(src_info["mosaic_height"] / K)   # GCP-pixel extent
R = 6378137.0; ORIGIN = math.pi * R
names, old, mm, ll = load(gj)
inv = RBFInterpolator(mm, old * K, kernel="thin_plate_spline", degree=1)   # merc -> mosaic px
fwd = RBFInterpolator(old, mm, kernel="thin_plate_spline", degree=1)       # GCP px -> merc (bbox only)
Q = 4
ca = clip_alpha(gj, (GH // Q, GW // Q), scale=1 / Q)                       # clip mask at 1/Q of GCP px
ys, xs = np.nonzero(ca > 0)
pts = np.c_[xs, ys].astype(float) * Q
mb = fwd(pts[:: max(1, len(pts) // 20000)])
minx, miny = mb.min(0); maxx, maxy = mb.max(0)
full = cv2.imread(mos, cv2.IMREAD_COLOR if COLOR else cv2.IMREAD_GRAYSCALE)
if COLOR:
    full = cv2.cvtColor(full, cv2.COLOR_BGR2RGB)
else:
    # tone: scan paper (~235) -> washi, ink -> sumi
    lut_in = np.clip((np.arange(256) - 45) / (228 - 45), 0, 1)
    paper = np.array([233, 224, 200], float); ink = np.array([38, 30, 24], float)
pyr = [full]
for _ in range(zmax - zmin + 1):
    pyr.append(cv2.resize(pyr[-1], (pyr[-1].shape[1] // 2, pyr[-1].shape[0] // 2), interpolation=cv2.INTER_AREA))
def tile_range(z):
    n = 2 ** z; size = 2 * ORIGIN / n
    return int((minx + ORIGIN) // size), int((maxx + ORIGIN) // size), int((ORIGIN - maxy) // size), int((ORIGIN - miny) // size), size
count = 0; total_bytes = 0
meta = {"bounds_merc": [minx, miny, maxx, maxy], "zooms": [zmin, zmax]}
for z in range(zmin, zmax + 1):
    x0, x1, y0, y1, size = tile_range(z)
    for tx in range(x0, x1 + 1):
        for ty in range(y0, y1 + 1):
            px = (np.arange(256) + 0.5) / 256 * size
            GX, GY = np.meshgrid(-ORIGIN + tx * size + px, ORIGIN - ty * size - px)
            src = inv(np.c_[GX.ravel(), GY.ravel()]).astype(np.float32)
            sx = src[:, 0].reshape(256, 256); sy = src[:, 1].reshape(256, 256)
            a = cv2.remap(ca, sx / K / Q, sy / K / Q, cv2.INTER_LINEAR, borderMode=cv2.BORDER_CONSTANT, borderValue=0)
            if a.max() <= 0.01:
                continue
            # pick the pyramid level whose pixel size matches this tile's sampling step
            step = np.median(np.hypot(np.diff(sx, axis=1), np.diff(sy, axis=1)))
            L = int(max(0, min(len(pyr) - 1, math.floor(math.log2(max(step, 1.0))))))
            img = pyr[L]; f = 2 ** L
            g = cv2.remap(img, (sx + 0.5) / f - 0.5, (sy + 0.5) / f - 0.5, cv2.INTER_CUBIC, borderMode=cv2.BORDER_CONSTANT, borderValue=(255, 255, 255) if COLOR else 255)
            if COLOR:
                rgb = g
            else:
                t = lut_in[g][..., None]
                rgb = (ink + (paper - ink) * t).clip(0, 255).astype(np.uint8)
            rgba = np.dstack([rgb, (a * 255).astype(np.uint8)])
            d = os.path.join(outdir, str(z), str(tx)); os.makedirs(d, exist_ok=True)
            fn = os.path.join(d, f"{ty}.webp")
            Image.fromarray(rgba, "RGBA").save(fn, "WEBP", quality=70 if COLOR else 72, method=6)
            count += 1; total_bytes += os.path.getsize(fn)
    print("z", z, "tiles so far", count, "MB", round(total_bytes / 1e6, 1), flush=True)
lat = lambda y: math.degrees(math.atan(math.sinh(y / R))); lng = lambda x: math.degrees(x / R)
meta["bounds_latlng"] = [lat(miny), lng(minx), lat(maxy), lng(maxx)]
json.dump(meta, open(os.path.join(outdir, "meta.json"), "w"), indent=1)
print(meta)
