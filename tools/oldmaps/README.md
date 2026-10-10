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

## How the Edo map was made (`edo-keio`)

The source is the National Diet Library scan of 『慶応改正御江戸大絵図』 (1867),
[pid 2543121](https://dl.ndl.go.jp/pid/2543121), which is public domain. It's a
colour scan, photographed in four overlapping pieces (images 2–5).

1. **Download.** `ndl_fetch.py 2543121 R000000<n> h_<n>.jpg` builds each
   half-resolution piece from NDL's 1024-px image tiles. NDL refuses to send
   large images in one piece.
2. **Stitch.**
   - `stitch_edo.py` matches the pieces using shift, rotation and scale only.
     A full perspective fit skews on narrow overlaps. It also ignores false
     matches on the colour chart and ruler in every photo.
   - `mosaic_edo.py` merges the pieces into `mosaic.jpg`, 11187×11550 px.
3. **Control points** (`edo-keio.gcps.json`). Here the old-map pixels are
   pixels of the full mosaic, so `gcp_to_mosaic` is 1.
   - Control points come from gates, bridges, Sensō-ji and Zōjō-ji, plus
     "pairs" made with `addpair.py`. A pair says: this feature currently lands
     at render pixel A, but really belongs at B. That lets you fix a drift
     straight from a comparison image, with no need to find the spot on the
     old sheet.
   - `wcmp.py` compares the old map's blue water with modern water (render a
     water-only Google map with `GMSTYLE=water`).
   - `warpcol.py` produces the warped colour image for side-by-side checks.
4. **Clip.** `clip_polygon` is the map's printed frame, minus the compass box
   and the calendar text panel.
5. **Tile and index:** `tiles.py` (it keeps the colour, because `color` is
   true), then `index_tiles.py edo-keio`.

To improve the alignment somewhere, add or fix control points, then re-run
steps 5 and 6.

To add a new map:
1. Repeat steps 1–6 for it.
2. Add an entry to `data/oldmaps.js` with the credit wording the holder
   requires.
3. Add a `<script>` tag for its `tiles.js` in `index.html`.

## How the Inō layer was made (`ino-chuzu`)

The source is the Tokyo National Museum's 伊能忠敬『日本沿海輿地図（中図）』
(P-2906). Its images come from ColBase, and the record for each sheet is
`colbaseapi/v2/collection_items/tnm/P-2906-<n>`. The images are free to use,
commercial use included, as long as the source is credited. Four of the eight
sheets are used:

| Sheet | Covers | Landmarks used to align it |
| --- | --- | --- |
| 5 | Kinki–Chūbu | Capes, Ōtsu, Atsuta |
| 4 | Kantō | Bōsō and Miura capes, Fuji, Izu, Ōshima, Inawashiro |
| 3 | Tōhoku | Capes and islands |
| 2 | Hokkaidō | Hakodate-yama, Esan, Sōya, Okushiri |

1. Each sheet is a single JPEG, 3000 px tall, about 220–260 m per pixel. That
   suits zoom levels 5–11.
2. Each sheet has its own control-point file, `ino-chuzu-sheet<n>.gcps.json`.
   Its `clip_polygon` is the sheet's printed frame.
3. `tiles_multi.py OUT 5 11 sheet5.json:img5 sheet4.json:img4 ...` cuts all the
   sheets into one tile set. Where sheets overlap, each pixel comes from the
   sheet it lies furthest inside. That keeps compass roses and margins from
   covering a neighbouring sheet.
4. Index the tiles with `index_tiles.py ino-chuzu`.
