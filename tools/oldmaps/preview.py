# preview.py GCPJSON MOSAIC RENDER.png clat clng z OUT [alpha] -> old map warped onto a Google render, blended
import sys, math, numpy as np, cv2
sys.path.insert(0, __file__.rsplit("/", 1)[0])
from fit import load, models
from ll import proj
from clipmask import clip_alpha
gj, mos, rp, clat, clng, z, out = sys.argv[1], sys.argv[2], sys.argv[3], float(sys.argv[4]), float(sys.argv[5]), int(sys.argv[6]), sys.argv[7]
alpha = float(sys.argv[8]) if len(sys.argv) > 8 else 0.5
names, old, mm, ll = load(gj)
inv = models(old, mm)
base = cv2.imread(rp); H, W = base.shape[:2]
cx, cy = proj(clat, clng, z); s = 256 * 2 ** z; R = 6378137.0
xs = cx + np.arange(W) - W / 2; ys = cy + np.arange(H) - H / 2
mx = (xs / s - 0.5) * 2 * math.pi * R; my = (0.5 - ys / s) * 2 * math.pi * R
MX, MY = np.meshgrid(mx, my)
src = inv(np.c_[MX.ravel(), MY.ravel()]).astype(np.float32)
mapx = src[:, 0].reshape(H, W); mapy = src[:, 1].reshape(H, W)
m = cv2.imread(mos, cv2.IMREAD_GRAYSCALE)
w = cv2.remap(m, mapx, mapy, cv2.INTER_LINEAR, borderMode=cv2.BORDER_CONSTANT, borderValue=255)
ca = clip_alpha(gj, m.shape)
a = cv2.remap(ca, mapx, mapy, cv2.INTER_LINEAR, borderMode=cv2.BORDER_CONSTANT, borderValue=0) * alpha
inside = a > 0
wc = cv2.cvtColor(w, cv2.COLOR_GRAY2BGR)
# tint the old map sepia so it is distinguishable from the base
wc = (wc * np.array([0.75, 0.9, 1.0])).astype(np.uint8)
outimg = base.copy()
A = a[..., None]
outimg = (base * (1 - A) + wc * A).astype(np.uint8)
# mark GCPs: green = where the GCP says, red = where TPS sends the old px (should coincide)
for (ox, oy), (gx, gy) in zip(old, mm):
    px = (gx / (2 * math.pi * R) + 0.5) * s - cx + W / 2; py = (0.5 - gy / (2 * math.pi * R)) * s - cy + H / 2
    cv2.circle(outimg, (int(px), int(py)), 6, (0, 200, 0), 2)
cv2.imwrite(out, outimg)
