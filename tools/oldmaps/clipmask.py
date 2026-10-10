# clip mask in old-map pixel space: convex hull of trusted GCPs, buffered, feathered -> float alpha [0..1]
import json, numpy as np, cv2
def clip_alpha(gcpjson, shape, buffer=420, feather=110, scale=1.0):
    j = json.load(open(gcpjson))
    ex = set(j.get("clip_exclude", []))
    pts = (np.array([[g[1], g[2]] for g in j["gcps"] if g[0] not in ex], float) * scale).astype(np.int32)
    buffer = int(buffer * scale); feather = feather * scale
    hull = cv2.convexHull(pts)
    m = np.zeros(shape, np.uint8)
    cv2.fillConvexPoly(m, hull, 255)
    k = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2 * buffer + 1, 2 * buffer + 1))
    m = cv2.dilate(m, k)
    d = cv2.distanceTransform((m > 0).astype(np.uint8), cv2.DIST_L2, 5)
    return np.clip(d / feather, 0, 1).astype(np.float32)
