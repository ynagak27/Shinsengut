# warpcol.py GCPJSON MOSAIC_COLOR clat clng z W H OUT -> the old map warped (colour) into a render's pixel frame
import sys, math, numpy as np, cv2
sys.path.insert(0, __file__.rsplit("/", 1)[0])
from fit import load, models
from ll import proj
gj, mos = sys.argv[1], sys.argv[2]; clat, clng, z, W, H = float(sys.argv[3]), float(sys.argv[4]), int(sys.argv[5]), int(sys.argv[6]), int(sys.argv[7]); out = sys.argv[8]
names, old, mm, ll = load(gj); inv = models(old, mm)
cx, cy = proj(clat, clng, z); s = 256 * 2 ** z; R = 6378137.0
xs = cx + np.arange(W) - W / 2; ys = cy + np.arange(H) - H / 2
MX, MY = np.meshgrid((xs / s - 0.5) * 2 * math.pi * R, (0.5 - ys / s) * 2 * math.pi * R)
src = inv(np.c_[MX.ravel(), MY.ravel()]).astype(np.float32)
m = cv2.imread(mos)
w = cv2.remap(m, src[:, 0].reshape(H, W), src[:, 1].reshape(H, W), cv2.INTER_LINEAR, borderMode=cv2.BORDER_CONSTANT, borderValue=(255, 255, 255))
cv2.imwrite(out, w)
