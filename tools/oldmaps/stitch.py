import cv2, numpy as np, sys, json
D = sys.argv[1]
imgs = {i: cv2.imread(f"{D}/full766_{i}.jpg", cv2.IMREAD_GRAYSCALE) for i in (3,4,5,6)}
sift = cv2.SIFT_create(nfeatures=40000)
S = 0.5
feats = {}
for i, im in imgs.items():
    sm = cv2.resize(im, None, fx=S, fy=S, interpolation=cv2.INTER_AREA)
    kp, des = sift.detectAndCompute(sm, None)
    feats[i] = (np.float32([k.pt for k in kp]) / S, des)
    print(i, len(kp))
bf = cv2.BFMatcher()
def H(a, b):  # maps a -> b
    pa, da = feats[a]; pb, db = feats[b]
    m = bf.knnMatch(da, db, k=2)
    good = [x for x, y in m if x.distance < 0.7 * y.distance]
    A = pa[[g.queryIdx for g in good]]; B = pb[[g.trainIdx for g in good]]
    h, mask = cv2.findHomography(A, B, cv2.RANSAC, 4.0)
    inl = mask.ravel().astype(bool)
    err = np.linalg.norm(cv2.perspectiveTransform(A[inl][None], h)[0] - B[inl], axis=1)
    print(f"{a}->{b}: good {len(good)} inliers {inl.sum()} rms {np.sqrt((err**2).mean()):.2f}px")
    return h
H34 = H(3, 4); H64 = H(6, 4); H53 = H(5, 3); H56 = H(5, 6)
T = {4: np.eye(3), 3: H34, 6: H64, 5: H34 @ H53}
# consistency: 5 via 6 vs via 3
alt = H64 @ H56
h, w = imgs[5].shape
c = np.float32([[0,0],[w,0],[w,h],[0,h],[w/2,h/2]])[None]
print("5 chain disagreement px:", np.linalg.norm(cv2.perspectiveTransform(c, T[5])[0]-cv2.perspectiveTransform(c, alt)[0], axis=1).round(1))
T[5] = None
# average the two chains by fitting a homography to both
pts = np.float32([[x, y] for x in np.linspace(0, w, 9) for y in np.linspace(0, h, 9)])[None]
avg = (cv2.perspectiveTransform(pts, H34 @ H53) + cv2.perspectiveTransform(pts, alt)) / 2
T[5], _ = cv2.findHomography(pts[0], avg[0])
corners = []
for i in imgs:
    h, w = imgs[i].shape
    corners.append(cv2.perspectiveTransform(np.float32([[0,0],[w,0],[w,h],[0,h]])[None], T[i])[0])
corners = np.vstack(corners); mn = corners.min(0); mx = corners.max(0)
off = np.array([[1,0,-mn[0]],[0,1,-mn[1]],[0,0,1]])
W, Hh = int(mx[0]-mn[0])+1, int(mx[1]-mn[1])+1
print("canvas", W, Hh)
acc = np.zeros((Hh, W), np.float32); best = np.zeros((Hh, W), np.float32)
for i in imgs:
    im = imgs[i]; h, w = im.shape
    # weight = distance from photo edge, so each canvas pixel comes from the photo where it sits most centrally
    wt = np.ones((h, w), np.uint8); wt[0,:]=wt[-1,:]=wt[:,0]=wt[:,-1]=0
    wt = cv2.distanceTransform(wt, cv2.DIST_L2, 3)
    M = off @ T[i]
    wi = cv2.warpPerspective(im, M, (W, Hh), flags=cv2.INTER_LINEAR, borderValue=255)
    ww = cv2.warpPerspective(wt, M, (W, Hh), flags=cv2.INTER_LINEAR, borderValue=0)
    sel = ww > best
    acc[sel] = wi[sel]; best[sel] = ww[sel]
cv2.imwrite(f"{D}/mosaic766.png", acc.astype(np.uint8))
cv2.imwrite(f"{D}/mosaic766_small.jpg", cv2.resize(acc.astype(np.uint8), None, fx=0.25, fy=0.25, interpolation=cv2.INTER_AREA))
json.dump({str(i): (off @ T[i]).tolist() for i in imgs}, open(f"{D}/mosaic766_T.json", "w"))
