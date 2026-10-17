/* =====================================================================
   PLAY — 物語で体験する (play/index.html): key moments told as a
   visual novel, one chapter at a time.
   ---------------------------------------------------------------------
   THE RULE / 方針:
   - kind:"record"   史実 = what the record shows.
   - kind:"anecdote" 逸話 = a well-known traditional story, used ONLY
     where the record is silent. Shown in the dashed lore box.
   - Nothing is invented. A person speaks only words that are recorded
     or traditionally attributed to them (who: + poem: for verse).
   - Every beat names its source in src:{ja, en}.

   HOW TO EDIT / 追記のしかた:
   - Each beat is one tap: {scene, kind, year, ja, en, src}.
   - scene: a key of PLAY.places. Its background is
     play/assets/scenes/<scene>.webp, cut from the period maps in
     oldmaps/ with tools/play/crop.py (see the README).
   - Use “curly quotes” or 「」 inside text; a plain ' ends the string.
   - In a poem, <br> starts a new line (Japanese is set vertically).
   ===================================================================== */

const PLAY = {

  /* Places used as scenes: label, and which map the background comes from. */
  places: {
    ichigaya: {ja: "江戸・市谷",       en: "Ichigaya, Edo",          map: "edo"},
    tama:     {ja: "多摩・上石原村",   en: "Kami-Ishihara, Tama",    map: "ino"},
    hino:     {ja: "多摩・日野",       en: "Hino, Tama",             map: "ino"},
    fuchu:    {ja: "府中・六所宮",     en: "Rokusho shrine, Fuchū",  map: "ino"},
    denzuin:  {ja: "小石川・伝通院",   en: "Denzū-in, Koishikawa",   map: "edo"}
  },

  /* Short credit shown under the header; the full wording (from
     data/oldmaps.js) is on the title screen. */
  mapCredits: {
    edo: {ja: "地図：『慶応改正御江戸大絵図』（1867）国立国会図書館",
          en: "Map: Keiō kaisei O-Edo ōezu (1867), National Diet Library"},
    ino: {ja: "地図：伊能忠敬『大日本沿海輿地全図（大図）』国立国会図書館",
          en: "Map: Inō Tadataka, large-scale sheets, National Diet Library"}
  },
  fullCredit: {
    ja: "地図：国立国会図書館デジタルコレクション『慶応改正御江戸大絵図』（請求記号 特7-694）、伊能忠敬『大日本沿海輿地全図（大図）』明治6年写（請求記号 WB39-6）パブリックドメイン。本サイトで現代の地図に合わせて変形。位置は概略です。",
    en: "Maps: National Diet Library, Japan — Keiō kaisei O-Edo ōezu (1867, call no. 特7-694) and Inō Tadataka, Dai Nihon enkai yochi zenzu, large scale, 1873 copy (call no. WB39-6). Public domain. Georeferenced for this site; positions are approximate."
  },

  /* Words spoken in the story (poems etc.) are attributed to these people. */
  speakers: {
    hijikata: {ja: "土方歳三", en: "Hijikata Toshizō"}
  },

  chapters: [

  { id: "shieikan",
    no:    {ja: "第一章", en: "Chapter 1"},
    title: {ja: "試衛館", en: "Shieikan"},
    span:  {ja: "1848 – 1863　江戸・多摩", en: "1848 – 1863 · Edo and Tama"},
    lede:  {ja: "多摩の農家の子らが、江戸市谷の小さな道場に集まる。のちの新選組の始まり。",
            en: "Farmers’ sons from Tama gather at a small dojo in Ichigaya, Edo. This is where the Shinsengumi begins."},
    cover: "ichigaya",
    end:   {ja: "第一章　試衛館　了", en: "End of Chapter 1 · Shieikan"},
    beats: [

      { scene: "ichigaya", kind: "record", year: "1840s",
        ja: "江戸・市谷。天然理心流の剣術道場。のちに「試衛館」の名で知られる。道場主は三代目、近藤周助。",
        en: "Ichigaya, Edo. A dojo of the Tennen Rishin-ryū sword school, later known as the Shieikan. Its master is the school’s third head, Kondō Shūsuke.",
        src: {ja: "新宿区による試衛館跡の解説", en: "Shinjuku City notes on the Shieikan site"} },

      { scene: "ichigaya", kind: "anecdote", year: "1840s",
        ja: "「試衛館」という名は、主に後年の回想録に見えるもの。当時の呼び名がそのままだったかは、はっきりしない。",
        en: "The name “Shieikan” comes mainly from memoirs written years later. What the dojo was called at the time is not certain.",
        src: {ja: "名称は後年の史料による。諸説あり", en: "The name appears in later accounts; views differ"} },

      { scene: "tama", kind: "record", year: "1848",
        ja: "嘉永元年、多摩・上石原村の農家の三男、宮川勝五郎が入門する。翌年、周助の養子となる。のちの近藤勇である。",
        en: "In 1848 Miyagawa Katsugorō, the third son of a farming family in Kami-Ishihara, Tama, joins the school. The next year Shūsuke adopts him. He will become Kondō Isami.",
        src: {ja: "新宿区の解説、近藤家の記録", en: "Shinjuku City notes; Kondō family records"} },

      { scene: "tama", kind: "anecdote", year: "1848",
        ja: "勇は拳を丸ごと口に入れることができ、加藤清正にならったと語られる。",
        en: "Isami could fit his whole fist in his mouth, the story goes, just as the warlord Katō Kiyomasa was said to.",
        src: {ja: "よく知られた逸話", en: "A well-known traditional story"} },

      { scene: "ichigaya", kind: "record", year: "1852",
        ja: "嘉永五年、白河藩士の家に生まれた少年、沖田総司が内弟子として入る。九歳ほどだった。やがて道場随一の遣い手となる。",
        en: "In 1852 Okita Sōji, a boy of about nine from a Shirakawa domain family, moves in as a live-in student. He grows into the finest swordsman in the dojo.",
        src: {ja: "新宿区の解説、沖田家の記録", en: "Shinjuku City notes; Okita family records"} },

      { scene: "hino", kind: "record", year: "1850s",
        ja: "多摩・日野。名主の佐藤彦五郎は天然理心流の門人で、屋敷に道場を開いていた。近藤は江戸からここへ出稽古に通う。",
        en: "Hino, in Tama. The village headman, Satō Hikogorō, is a Tennen Rishin-ryū student with a dojo at his home. Kondō travels out from Edo to teach there.",
        src: {ja: "佐藤彦五郎新選組資料館", en: "Satō Hikogorō Shinsengumi Museum, Hino"} },

      { scene: "hino", kind: "record", year: "1859",
        ja: "彦五郎の妻は、石田村の土方家の娘。その弟が土方歳三である。歳三は安政六年に正式に入門した。",
        en: "Hikogorō’s wife is a daughter of the Hijikata family of Ishida village. Her younger brother is Hijikata Toshizō, who formally joins the school in 1859.",
        src: {ja: "入門年は安政六年が通説。異説あり", en: "1859 is the usual date; one account gives 1851"} },

      { scene: "hino", kind: "anecdote", year: "1850s",
        ja: "入門前の歳三は、家伝の薬「石田散薬」を売り歩き、防具を担いで行く先々の道場で稽古を願ったという。",
        en: "Before he enrolled, Toshizō sold his family’s medicine, Ishida powder, and is said to have carried his practice armour on his rounds, asking to train at every dojo he passed.",
        src: {ja: "日野に伝わる逸話", en: "A story handed down in Hino"} },

      { scene: "fuchu", kind: "record", year: "1861",
        ja: "文久元年、府中の六所宮で、門人たちが紅白に分かれて戦う野試合が催され、勇の天然理心流四代目襲名が披露された。",
        en: "In 1861, at the Rokusho shrine in Fuchū, the school’s men fight a mock battle in two teams to celebrate Isami becoming the fourth head of Tennen Rishin-ryū.",
        src: {ja: "天然理心流の記録", en: "Tennen Rishin-ryū records"} },

      { scene: "ichigaya", kind: "record", year: "1860s",
        ja: "道場には他流の剣客も身を寄せ、同じ釜の飯を食った。永倉新八、藤堂平助、山南敬助、原田左之助。",
        en: "Swordsmen from other schools stay at the dojo and eat at the same table: Nagakura Shinpachi, Tōdō Heisuke, Yamanami Keisuke and Harada Sanosuke.",
        src: {ja: "永倉新八の回想録", en: "Nagakura Shinpachi’s memoirs"} },

      { scene: "ichigaya", kind: "anecdote", year: "1860s",
        ja: "山南は近藤に試合を挑んで敗れ、その腕に感服して道場にとどまったと伝わる。",
        en: "Yamanami is said to have come to challenge Kondō, lost, and stayed on out of respect.",
        src: {ja: "よく知られた逸話。確かな史料はない", en: "A well-known story with no firm record"} },

      { scene: "denzuin", kind: "record", year: "1863",
        ja: "文久三年、幕府は将軍上洛の警護のため浪士を募る。約230名が小石川の伝通院に集まり、試衛館の一同もそろって加わった。二月八日、浪士組は中山道を京へ発った。",
        en: "In 1863 the shogunate calls for masterless samurai to guard the shogun on his journey to Kyoto. Some 230 men gather at Denzū-in in Koishikawa, the Shieikan household among them. On the 8th day of the 2nd month the Rōshigumi set out along the Nakasendō.",
        src: {ja: "浪士組の記録", en: "Rōshigumi records"} },

      { scene: "denzuin", kind: "record", year: "1863", who: "hijikata", poem: true,
        ja: "梅の花<br>一輪咲いても<br>梅は梅",
        en: "A plum blossom —<br>even with one flower open,<br>it is still the plum.",
        src: {ja: "土方の句集『豊玉発句集』（文久三年、上洛前にまとめられた）", en: "Hijikata’s own haiku collection, compiled in 1863 before leaving for Kyoto"} }

    ] }

  ]
};
