# mosaic_edo.py DIR -> colour mosaic of the 4 pieces (layout 5|4 over 3|2), using preview-scale homographies
import cv2, numpy as np, json, sys
D = sys.argv[1]
P = {k: np.array(v) for k, v in json.load(open(f"{D}/pairs.json")).items()}
k = 5700 / 2400; S = np.diag([k, k, 1.0]); Si = np.linalg.inv(S)
T = {4: np.eye(3), 5: P["5->4"], 2: P["2->4"]}
a = P["2->4"] @ P["3->2"]; b = P["5->4"] @ P["3->5"]
pts = np.float32([[x, y] for x in np.linspace(0, 2400, 9) for y in np.linspace(0, 2597, 9)])[None]
avg = (cv2.perspectiveTransform(pts, a) + cv2.perspectiveTransform(pts, b)) / 2
print("3 chain disagreement px (preview):", np.abs(cv2.perspectiveTransform(pts, a) - cv2.perspectiveTransform(pts, b)).max().round(1))
T[3], _ = cv2.findHomography(pts[0], avg[0])
T = {i: S @ t @ Si for i, t in T.items()}
imgs = {i: cv2.imread(f"{D}/h_{i}.jpg") for i in (2, 3, 4, 5)}
cs = []
for i, im in imgs.items():
    h, w = im.shape[:2]
    cs.append(cv2.perspectiveTransform(np.float32([[0, 0], [w, 0], [w, h], [0, h]])[None], T[i])[0])
cs = np.vstack(cs); mn = cs.min(0); mx = cs.max(0)
off = np.array([[1, 0, -mn[0]], [0, 1, -mn[1]], [0, 0, 1]])
W, H = int(mx[0] - mn[0]) + 1, int(mx[1] - mn[1]) + 1
print("canvas", W, H)
acc = np.full((H, W, 3), 255, np.uint8); best = np.zeros((H, W), np.float32)
for i, im in imgs.items():
    h, w = im.shape[:2]
    wt = np.ones((h, w), np.uint8); wt[0, :] = wt[-1, :] = wt[:, 0] = wt[:, -1] = 0
    wt = cv2.distanceTransform(wt, cv2.DIST_L2, 3)
    M = off @ T[i]
    wi = cv2.warpPerspective(im, M, (W, H), flags=cv2.INTER_LINEAR, borderValue=(255, 255, 255))
    ww = cv2.warpPerspective(wt, M, (W, H), flags=cv2.INTER_LINEAR, borderValue=0)
    sel = ww > best
    acc[sel] = wi[sel]; best[sel] = ww[sel]
    del wi, ww
cv2.imwrite(f"{D}/mosaic.jpg", acc, [cv2.IMWRITE_JPEG_QUALITY, 94])
q = cv2.resize(acc, None, fx=0.25, fy=0.25, interpolation=cv2.INTER_AREA)
cv2.imwrite(f"{D}/mosaic_q.png", q)
cv2.imwrite(f"{D}/mosaic_small.jpg", cv2.resize(acc, None, fx=0.1, fy=0.1, interpolation=cv2.INTER_AREA))
json.dump({str(i): (off @ T[i]).tolist() for i in T}, open(f"{D}/stitch.json", "w"))
