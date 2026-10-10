/* =====================================================================
   OLD_MAPS — period maps shown when the map is switched to 江戸 / Edo.
   ---------------------------------------------------------------------
   Each entry is one scanned map that has been warped onto modern
   coordinates and cut into map tiles under oldmaps/<id>/{z}/{x}/{y}.webp.
   The tiles are produced offline (see the handbook, "Old maps"); this
   file only tells the site where they are and how to credit them.

   - bounds: [south, west, north, east] — the area the tiles cover.
   - zooms:  [min, max] tile zoom levels that exist.
   - tiles:  OLD_MAP_TILES[id] (generated, in oldmaps/<id>/tiles.js)
             lists which tiles exist, so the map never asks for a
             tile that isn't there.
   - credit: shown on the map whenever this layer is on. Keep the
             holder's wording — it is a condition of reuse.
   ===================================================================== */

const OLD_MAPS = [

 {id:"kyoto-genji",
  place:{en:"Kyoto", ja:"京都"},
  bounds:[34.9325, 135.7380, 35.0371, 135.7926],
  zooms:[12, 17],
  focus:{lat:35.0040, lng:135.7600, zoom:14},
  title:{en:"Genji kaisei shinzō saiken Kyō ezu taizen (c. 1864–67)",
         ja:"『元治改正新増細見京繪圖大全』（元治・慶応頃）"},
  credit:{en:"Held by Tohoku University Main Library (Kanō Collection, 3/8432/1), CC BY. Georeferenced for this site — positions are approximate.",
          ja:"東北大学附属図書館所蔵（狩野文庫 3/8432/1）CC BY。本サイトで現代の地図に合わせて変形しています。位置は概略です。"},
  url:"https://touda.tohoku.ac.jp/collection/database/library/10010000010766"},

 {id:"edo-keio",
  place:{en:"Edo", ja:"江戸"},
  bounds:[35.6180, 139.6868, 35.7415, 139.8349],
  zooms:[12, 17],
  focus:{lat:35.6880, lng:139.7550, zoom:14},
  title:{en:"Keiō kaisei O-Edo ōezu (1867), drawn by Takai Ranzan",
         ja:"『慶応改正御江戸大絵図』（慶応3年・1867）高井蘭山 図"},
  credit:{en:"National Diet Library, Japan (call no. 特7-694), public domain. Georeferenced for this site — positions are approximate.",
          ja:"国立国会図書館デジタルコレクション（請求記号 特7-694）パブリックドメイン。本サイトで現代の地図に合わせて変形しています。位置は概略です。"},
  url:"https://dl.ndl.go.jp/pid/2543121"}

];
