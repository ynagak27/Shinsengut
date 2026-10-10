# stitch_edo.py DIR -> pairwise SIFT matches between the 4 pieces (m_2..m_5), reports overlaps
import cv2, numpy as np, sys, itertools, json
D = sys.argv[1]
ids = [2, 3, 4, 5]
imgs = {i: cv2.imread(f"{D}/m_{i}.jpg", cv2.IMREAD_GRAYSCALE) for i in ids}
sift = cv2.SIFT_create(nfeatures=40000)
feats = {}
for i, im in imgs.items():
    kp, des = sift.detectAndCompute(im, None)
    feats[i] = (np.float32([k.pt for k in kp]), des)
bf = cv2.BFMatcher()
res = {}
for a, b in itertools.permutations(ids, 2):
    pa, da = feats[a]; pb, db = feats[b]
    m = bf.knnMatch(da, db, k=2)
    good = [x for x, y in m if x.distance < 0.7 * y.distance]
    if len(good) < 30: print(a, b, "few", len(good)); continue
    A = pa[[g.queryIdx for g in good]]; B = pb[[g.trainIdx for g in good]]
    h2, mask = cv2.estimateAffinePartial2D(A, B, method=cv2.RANSAC, ransacReprojThreshold=3.0, maxIters=20000, confidence=0.999)
    h = np.vstack([h2, [0, 0, 1]]); inl = int(mask.sum())
    err = np.linalg.norm(cv2.transform(A[mask.ravel() == 1][None], h2)[0] - B[mask.ravel() == 1], axis=1)
    print(f"   rms {np.sqrt((err**2).mean()):.2f} scale {np.hypot(h2[0,0], h2[1,0]):.4f} rot {np.degrees(np.arctan2(h2[1,0], h2[0,0])):.2f}deg")
    c = cv2.perspectiveTransform(np.float32([[[1200, 1300]]]), h)[0][0]
    print(f"{a}->{b} good {len(good)} inliers {inl} centre->{c.round()}")
    if inl > 100: res[f"{a}->{b}"] = h.tolist()
json.dump(res, open(f"{D}/pairs.json", "w"))
