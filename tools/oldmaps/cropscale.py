# cropscale.py IMG x0 y0 x1 y1 OUT scale step  -> grid in source coords, output scaled
import sys
from PIL import Image, ImageDraw
src, x0, y0, x1, y1, out = sys.argv[1], *map(int, sys.argv[2:6]), sys.argv[6]
s = float(sys.argv[7]); step = int(sys.argv[8])
im = Image.open(src).convert("RGB").crop((x0, y0, x1, y1))
im = im.resize((int(im.width * s), int(im.height * s)), Image.LANCZOS)
d = ImageDraw.Draw(im)
for x in range((x0 // step + 1) * step, x1, step):
    X = (x - x0) * s; d.line([(X, 0), (X, im.height)], fill=(255, 0, 0)); d.text((X + 2, 2), str(x), fill=(255, 0, 0))
for y in range((y0 // step + 1) * step, y1, step):
    Y = (y - y0) * s; d.line([(0, Y), (im.width, Y)], fill=(0, 0, 255)); d.text((2, Y + 2), str(y), fill=(0, 0, 255))
im.save(out)
