# contentmask.py: where a scanned survey sheet actually has drawing (ink, hills, water), as opposed to blank paper.
# Returns uint8 0/255 at full image size. Work is done at 1/8 scale.
import cv2, numpy as np
def content_mask(img_bgr, radius_px=220, scale=8):
    small = cv2.resize(img_bgr, (img_bgr.shape[1] // scale, img_bgr.shape[0] // scale), interpolation=cv2.INTER_AREA)
    lab = cv2.cvtColor(small, cv2.COLOR_BGR2LAB).astype(np.float32)
    bg = cv2.medianBlur(cv2.resize(small, None, fx=0.25, fy=0.25), 31)
    bg = cv2.resize(bg, (small.shape[1], small.shape[0]), interpolation=cv2.INTER_LINEAR)
    bgl = cv2.cvtColor(bg, cv2.COLOR_BGR2LAB).astype(np.float32)
    dark = bgl[..., 0] - lab[..., 0]              # how much darker than the paper around it
    ink = (dark > 45).astype(np.uint8)            # text, road lines, hill outlines; not the pale washes
    # keep only places with a cluster of strokes (a village, a road), not a lone speck
    dens = cv2.blur(ink.astype(np.float32), (9, 9))
    ink = (dens > 0.04).astype(np.uint8)
    r = max(1, radius_px // scale)
    m = cv2.dilate(ink, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2 * r + 1, 2 * r + 1)))
    m = cv2.morphologyEx(m, cv2.MORPH_CLOSE, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2 * r + 1, 2 * r + 1)))
    return cv2.resize(m * 255, (img_bgr.shape[1], img_bgr.shape[0]), interpolation=cv2.INTER_NEAREST)
if __name__ == "__main__":
    import sys
    im = cv2.imread(sys.argv[1]); m = content_mask(im)
    o = cv2.resize(im, None, fx=0.12, fy=0.12); mm = cv2.resize(m, (o.shape[1], o.shape[0]))
    o[mm == 0] = (o[mm == 0] * 0.3).astype(np.uint8)
    cv2.imwrite(sys.argv[2], o)
