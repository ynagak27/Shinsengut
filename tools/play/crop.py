"""Cut a scene background for play/ from the period-map tiles in oldmaps/.

Usage (from the repo root):
    python3 tools/play/crop.py <layer> <zoom> <lat> <lng> <out.webp> [width height]

Examples used for Chapters 1 and 2:
    python3 tools/play/crop.py edo-keio  16 35.6926 139.7333 play/assets/scenes/ichigaya.webp
    python3 tools/play/crop.py edo-keio  16 35.7137 139.7467 play/assets/scenes/denzuin.webp
    python3 tools/play/crop.py ino-daizu 15 35.6726 139.3949 play/assets/scenes/hino.webp
    python3 tools/play/crop.py ino-daizu 15 35.6687 139.4789 play/assets/scenes/fuchu.webp
    python3 tools/play/crop.py ino-daizu 15 35.6433 139.5373 play/assets/scenes/tama.webp
    python3 tools/play/crop.py ino-chuzu 10 36.05 139.25 play/assets/scenes/nakasendo.webp --paper
    python3 tools/play/crop.py kyoto-genji 17 35.0010 135.7440 play/assets/scenes/mibu.webp --paper
    python3 tools/play/crop.py kyoto-genji 16 35.0160 135.7790 play/assets/scenes/kurodani.webp --paper
    python3 tools/play/crop.py kyoto-genji 17 35.0142 135.7481 play/assets/scenes/nijo.webp --paper
    python3 tools/play/crop.py kyoto-genji 17 35.0254 135.7621 play/assets/scenes/gosho.webp --paper
    python3 tools/play/crop.py edo-keio  16 35.6555 139.7373 play/assets/scenes/azabu.webp

The image is centred on lat/lng (default 1024x1536, portrait for phones).
Layers and zooms are those listed in data/oldmaps.js. Positions on the
Inō sheets are approximate, so nudge lat/lng until the place name sits
near the centre. Missing tiles are left dark. Add --paper to fill gaps and the map's
masked edges with its own paper colour instead (useful for the Kyoto
map, which is a tilted scan). Needs Pillow.
"""
import math
import os
import sys

from PIL import Image

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'oldmaps')


def to_px(lat, lng, z):
    n = 2 ** z
    x = (lng + 180) / 360 * n * 256
    y = (1 - math.asinh(math.tan(math.radians(lat))) / math.pi) / 2 * n * 256
    return x, y


def crop(layer, z, lat, lng, out, w=1024, h=1536, paper=False):
    cx, cy = to_px(lat, lng, z)
    x0, y0 = int(cx - w / 2), int(cy - h / 2)
    img = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    got = miss = 0
    for tx in range(x0 // 256, (x0 + w) // 256 + 1):
        for ty in range(y0 // 256, (y0 + h) // 256 + 1):
            p = os.path.join(ROOT, layer, str(z), str(tx), f'{ty}.webp')
            if not os.path.exists(p):
                miss += 1
                continue
            got += 1
            tile = Image.open(p).convert('RGBA')
            img.paste(tile, (tx * 256 - x0, ty * 256 - y0), tile)
    if paper:
        # the paper colour: the median of the map's light, opaque pixels
        data = img.get_flattened_data() if hasattr(img, 'get_flattened_data') else img.getdata()
        px = [p for p in data if p[3] > 250 and sum(p[:3]) > 540]
        px.sort(key=lambda p: sum(p[:3]))
        r, g, b, _ = px[len(px) // 2] if px else (226, 214, 186, 255)
        ground = Image.new('RGBA', (w, h), (r, g, b, 255))
    else:
        ground = Image.new('RGBA', (w, h), (16, 21, 29, 255))
    ground.alpha_composite(img)
    ground.convert('RGB').save(out, quality=82)
    print(f'{out}: {got} tiles, {miss} missing')


if __name__ == '__main__':
    a = [x for x in sys.argv[1:] if x != '--paper']
    paper = '--paper' in sys.argv
    if len(a) < 5:
        sys.exit(__doc__)
    size = (int(a[5]), int(a[6])) if len(a) >= 7 else (1024, 1536)
    crop(a[0], int(a[1]), float(a[2]), float(a[3]), a[4], *size, paper=paper)
