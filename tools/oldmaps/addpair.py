# addpair.py GCPJSON clat clng z W H  name oldRx oldRy newRx newRy [name ...]
# A pair = where a feature of the OLD map currently lands on the render (oldR) and where that feature really is (newR).
# The old-map pixel comes from the current fit's inverse at oldR, so no reading of the old sheet is needed.
import sys, json, math, numpy as np
sys.path.insert(0, __file__.rsplit("/", 1)[0])
from fit import load, models
from ll import px2ll, proj
gj = sys.argv[1]; clat, clng, z, W, H = float(sys.argv[2]), float(sys.argv[3]), int(sys.argv[4]), int(sys.argv[5]), int(sys.argv[6])
args = sys.argv[7:]
names, old, mm, ll = load(gj); inv = models(old, mm)
R = 6378137.0
j = json.load(open(gj))
for i in range(0, len(args), 5):
    n = args[i]; ox, oy, nx, ny = map(float, args[i + 1:i + 5])
    la, lo = px2ll(clat, clng, z, W, H, ox, oy)
    m = np.array([[math.radians(lo) * R, math.log(math.tan(math.pi / 4 + math.radians(la) / 2)) * R]])
    op = inv(m)[0]
    la2, lo2 = px2ll(clat, clng, z, W, H, nx, ny)
    j["gcps"].append([n, round(float(op[0])), round(float(op[1])), "LL", round(la2, 6), round(lo2, 6)])
    print(n, op.round(), (round(la2, 5), round(lo2, 5)))
json.dump(j, open(gj, "w"), indent=1, ensure_ascii=False)
