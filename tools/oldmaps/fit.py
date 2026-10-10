# fit.py GCPJSON -> prints residuals; module: load(path) -> (names, old_px[N,2], merc[N,2]); tps(...)
import json, sys, math, numpy as np
sys.path.insert(0, __file__.rsplit("/", 1)[0])
from ll import px2ll
R = 6378137.0
def merc(lat, lng):
    return np.array([math.radians(lng) * R, math.log(math.tan(math.pi / 4 + math.radians(lat) / 2)) * R])
def load(path):
    j = json.load(open(path))
    names, old, mm, ll = [], [], [], []
    for n, ox, oy, r, gx, gy in j["gcps"]:
        if r == "LL":   # coordinates given directly as lat, lng
            lat, lng = gx, gy
        else:
            c = j["renders"][r]
            lat, lng = px2ll(c[0], c[1], c[2], c[3], c[4], gx, gy)
        names.append(n); old.append([ox, oy]); mm.append(merc(lat, lng)); ll.append((lat, lng))
    return names, np.array(old, float), np.array(mm), ll
def models(old, mm, smooth=0.0):
    from scipy.interpolate import RBFInterpolator
    inv = RBFInterpolator(mm, old, kernel="thin_plate_spline", smoothing=smooth, degree=1)   # merc -> old px
    return inv
if __name__ == "__main__":
    names, old, mm, ll = load(sys.argv[1])
    # affine residuals tell us which points disagree with the rest
    A = np.c_[mm, np.ones(len(mm))]
    coef, *_ = np.linalg.lstsq(A, old, rcond=None)
    res = A @ coef - old
    # scale: metres per old-map pixel
    print("m per old px ~", 1 / np.sqrt(abs(np.linalg.det(coef[:2]))))
    for n, r, l in zip(names, res, ll):
        print(f"{n:28s} {l[0]:.5f},{l[1]:.5f}  affine resid {np.hypot(*r):6.1f}px")
