# wcmp.py GCPJSON MOSAIC_COLOR WATER_RENDER clat clng z OUT [x0 y0 x1 y1 scale]
# modern water = light grey fill, old map's blue water (warped by the current fit) = orange outline, GCPs = green
import sys, math, numpy as np, cv2
sys.path.insert(0, __file__.rsplit("/", 1)[0])
from fit import load, models
from ll import proj
gj, mos, wr, clat, clng, z, out = sys.argv[1], sys.argv[2], sys.argv[3], float(sys.argv[4]), float(sys.argv[5]), int(sys.argv[6]), sys.argv[7]
names, old, mm, ll = load(gj)
inv = models(old, mm)
base = cv2.imread(wr); H, W = base.shape[:2]
cx, cy = proj(clat, clng, z); s = 256 * 2 ** z; R = 6378137.0
xs = cx + np.arange(W) - W / 2; ys = cy + np.arange(H) - H / 2
MX, MY = np.meshgrid((xs / s - 0.5) * 2 * math.pi * R, (0.5 - ys / s) * 2 * math.pi * R)
src = inv(np.c_[MX.ravel(), MY.ravel()]).astype(np.float32)
mx = src[:, 0].reshape(H, W); my = src[:, 1].reshape(H, W)
m = cv2.imread(mos)
mi = m.astype(np.int16)
ow = (((mi[..., 0] - mi[..., 2]) > -8) & (mi[..., 1] > 120)).astype(np.uint8) * 255   # the old map's water is tinted blue-green, paper is yellow
ow = cv2.morphologyEx(ow, cv2.MORPH_OPEN, np.ones((7, 7), np.uint8))
ow = cv2.morphologyEx(ow, cv2.MORPH_CLOSE, np.ones((9, 9), np.uint8))
w = cv2.remap(ow, mx, my, cv2.INTER_NEAREST, borderMode=cv2.BORDER_CONSTANT, borderValue=0)
mw = (base[..., 0] > 180) & (base[..., 1] < 90) & (base[..., 2] < 90)
o = np.full((H, W, 3), 255, np.uint8); o[mw] = (200, 200, 200)
e = cv2.dilate(cv2.Canny(w, 50, 150), np.ones((2, 2), np.uint8)); o[e > 0] = (0, 120, 255)
for (ox, oy), (gx, gy), n in zip(old, mm, names):
    px = (gx / (2 * math.pi * R) + 0.5) * s - cx + W / 2; py = (0.5 - gy / (2 * math.pi * R)) * s - cy + H / 2
    cv2.circle(o, (int(px), int(py)), 6, (0, 170, 0), 2)
if len(sys.argv) > 8:
    x0, y0, x1, y1 = map(int, sys.argv[8:12]); sc = float(sys.argv[12])
    o = o[y0:y1, x0:x1]
    # grid every 50 render px, labelled in render coords
    for gx in range((x0 // 50 + 1) * 50, x1, 50): cv2.line(o, (gx - x0, 0), (gx - x0, y1 - y0), (235, 225, 225), 1)
    for gy in range((y0 // 50 + 1) * 50, y1, 50): cv2.line(o, (0, gy - y0), (x1 - x0, gy - y0), (235, 225, 225), 1)
    o = cv2.resize(o, None, fx=sc, fy=sc, interpolation=cv2.INTER_AREA)
cv2.imwrite(out, o)
