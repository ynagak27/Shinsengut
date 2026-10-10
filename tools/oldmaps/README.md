# Old-map tiling tools

These scripts turn a scanned period map into the tiles under `oldmaps/<id>/`.
The site never runs them. You only need them to add or re-align an old map.

Needs Python 3 with `numpy scipy opencv-python-headless pillow`.

## How the Kyoto map was made (`kyoto-genji`)

1. **Download.** The source is Tohoku University's IIIF images of
   『元治改正新増細見京繪圖大全』, record 10010000010766. Images 3–6 are the
   four photos of the folded sheet.
2. **Stitch** (`stitch.py`, then `fullmosaic.py`). The four photos are matched
   where they overlap and merged into one sheet. The photo-to-sheet transforms
   are saved in `kyoto-genji.stitch.json`.
3. **Control points** (`kyoto-genji.gcps.json`). About 35 places appear on both
   the old map and today's map: street crossings (Karasuma × Sanjō), bridges,
   temples and shrines. Each point records:
   - its position on the old sheet, in pixels of the 6350-px-wide preview
     mosaic;
   - where that place is today, either as a pixel on a Google Maps
     screenshot (the `renders` entries) or as a direct `LL` lat/lng.
4. **Check** (`fit.py`, `preview.py`). `fit.py` lists every point. A point that
   sits far from the others usually means a wrong match. `preview.py` blends
   the warped map over a screenshot so you can judge it by eye.
5. **Cut tiles** (`tiles.py`):
   - A thin-plate spline bends the sheet so every control point lands exactly
     on its modern position.
   - The map is clipped to the area the points cover. `clip_exclude` drops
     points that should not widen that area, such as Fushimi, which is tiny
     on this sheet.
   - The result is written as WebP tiles for zooms 12–17.
6. **Index** (`index_tiles.py <id>`, run from the repo root). This writes
   `oldmaps/<id>/tiles.js`, so the site only requests tiles that exist.

To improve the alignment somewhere, add or fix control points, then re-run
steps 5 and 6.

To add a new map:
1. Repeat steps 1–6 for it.
2. Add an entry to `data/oldmaps.js` with the credit wording the holder
   requires.
3. Add a `<script>` tag for its `tiles.js` in `index.html`.
