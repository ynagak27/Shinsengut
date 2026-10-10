# fullmosaic.py DIR -> assemble the full-res quadrants and stitch with the homographies found at preview scale
import cv2, numpy as np, json, sys
D = sys.argv[1]
k = 6350 / 3807
full = {}
for i in (3, 4, 5, 6):
    im = np.zeros((4380, 6350), np.uint8)
    for x, y in ((0, 0), (3175, 0), (0, 2190), (3175, 2190)):
        p = cv2.imread(f"{D}/parts/q{i}_{x}_{y}.jpg", cv2.IMREAD_GRAYSCALE)
        im[y:y + p.shape[0], x:x + p.shape[1]] = p
    full[i] = im
T = {int(a): np.array(b) for a, b in json.load(open(f"{D}/mosaic766_T.json")).items()}
S = np.diag([k, k, 1.0])
W, H = int(round(6350 * k)), int(round(4561 * k))
acc = np.full((H, W), 255, np.uint8); best = np.zeros((H, W), np.float32)
for i, im in full.items():
    h, w = im.shape
    wt = np.ones((h, w), np.uint8); wt[0, :] = wt[-1, :] = wt[:, 0] = wt[:, -1] = 0
    wt = cv2.distanceTransform(wt, cv2.DIST_L2, 3)
    M = S @ T[i] @ np.linalg.inv(S)
    wi = cv2.warpPerspective(im, M, (W, H), flags=cv2.INTER_LINEAR, borderValue=255)
    ww = cv2.warpPerspective(wt, M, (W, H), flags=cv2.INTER_LINEAR, borderValue=0)
    sel = ww > best
    acc[sel] = wi[sel]; best[sel] = ww[sel]
    del wi, ww
cv2.imwrite(f"{D}/mosaic766_full.png", acc)
print(W, H, "scale", k)
