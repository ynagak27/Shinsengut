# ndl_fetch.py PID CANVAS OUT.jpg  -> assemble a half-resolution image from IIIF level-1 tiles
import sys, json, math, subprocess, os, concurrent.futures as cf
import numpy as np
from PIL import Image
pid, cv, out = sys.argv[1], sys.argv[2], sys.argv[3]
base = f"https://dl.ndl.go.jp/api/iiif/{pid}/{cv}"
info = json.loads(subprocess.check_output(["curl", "-sS", "-m", "60", "--retry", "4", base + "/info.json"]))
W, H = info["width"], info["height"]; S = 2; T = 1024 * S
tmp = out + ".parts"; os.makedirs(tmp, exist_ok=True)
jobs = []
for y in range(0, H, T):
    for x in range(0, W, T):
        w, h = min(T, W - x), min(T, H - y)
        jobs.append((x, y, w, h, math.ceil(w / S), math.ceil(h / S)))
def get(j):
    x, y, w, h, sw, sh = j
    fn = f"{tmp}/{x}_{y}.jpg"
    for a in range(6):
        if os.path.exists(fn) and os.path.getsize(fn) > 1000: return fn
        subprocess.run(["curl", "-sS", "-m", "120", "-o", fn, f"{base}/{x},{y},{w},{h}/{sw},{sh}/0/default.jpg"])
    return fn
with cf.ThreadPoolExecutor(6) as ex: list(ex.map(get, jobs))
canvas = Image.new("RGB", (math.ceil(W / S), math.ceil(H / S)), "white")
for x, y, w, h, sw, sh in jobs:
    canvas.paste(Image.open(f"{tmp}/{x}_{y}.jpg").convert("RGB"), (x // S, y // S))
canvas.save(out, quality=93)
print(out, canvas.size, len(jobs), "tiles")
