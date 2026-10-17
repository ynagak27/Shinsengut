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
   - A new chapter is a new block in PLAY.chapters; it appears on the
     title screen in this order.
   - Use “curly quotes” or 「」 inside text; a plain ' ends the string.
   - In a poem, <br> starts a new line (Japanese is set vertically).
   ===================================================================== */

const PLAY = {

  /* Places used as scenes: label, and which period map (an id from
     data/oldmaps.js) the background is cut from. */
  places: {
    ichigaya: {ja: "江戸・市谷",           en: "Ichigaya, Edo",              map: "edo-keio"},
    tama:     {ja: "多摩・上石原村",       en: "Kami-Ishihara, Tama",        map: "ino-daizu"},
    hino:     {ja: "多摩・日野",           en: "Hino, Tama",                 map: "ino-daizu"},
    fuchu:    {ja: "府中・六所宮",         en: "Rokusho shrine, Fuchū",      map: "ino-daizu"},
    denzuin:  {ja: "小石川・伝通院",       en: "Denzū-in, Koishikawa",       map: "edo-keio"},
    nakasendo:{ja: "中山道",               en: "The Nakasendō",              map: "ino-chuzu"},
    mibu:     {ja: "京都・壬生村",         en: "Mibu village, Kyoto",        map: "kyoto-genji"},
    azabu:    {ja: "江戸・麻布 一之橋",    en: "Ichinohashi, Azabu, Edo",    map: "edo-keio"},
    kurodani: {ja: "京都・黒谷 金戒光明寺", en: "Kurodani, Kyoto",            map: "kyoto-genji"},
    nijo:     {ja: "京都・二条城",         en: "Nijō castle, Kyoto",         map: "kyoto-genji"},
    gosho:    {ja: "京都御所",             en: "The Imperial Palace, Kyoto", map: "kyoto-genji"}
  },

  /* Short credit shown under the header while a map is on screen. The
     full wording comes from data/oldmaps.js and is on the title screen. */
  mapCredits: {
    "edo-keio":    {ja: "地図：『慶応改正御江戸大絵図』（1867）国立国会図書館",
                    en: "Map: Keiō kaisei O-Edo ōezu (1867), National Diet Library"},
    "ino-daizu":   {ja: "地図：伊能忠敬『大日本沿海輿地全図（大図）』国立国会図書館",
                    en: "Map: Inō Tadataka, large-scale sheets, National Diet Library"},
    "ino-chuzu":   {ja: "地図：伊能忠敬『日本沿海輿地図（中図）』東京国立博物館",
                    en: "Map: Inō Tadataka, medium-scale map, Tokyo National Museum"},
    "kyoto-genji": {ja: "地図：『元治改正新増細見京繪圖大全』東北大学附属図書館",
                    en: "Map: Genji kaisei Kyō ezu taizen, Tohoku University Library"}
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

    ] },

  { id: "mibu",
    no:    {ja: "第二章", en: "Chapter 2"},
    title: {ja: "壬生", en: "Mibu"},
    span:  {ja: "1863　中山道・京都", en: "1863 · The Nakasendō and Kyoto"},
    lede:  {ja: "将軍警護の浪士組として京へ上った試衛館の一同。だが着いた先で計画は崩れる。京に残った一握りの者たちが、新選組となる。",
            en: "The Shieikan men march to Kyoto to guard the shogun, and the plan falls apart on arrival. The handful who stay become the Shinsengumi."},
    cover: "mibu",
    end:   {ja: "第二章　壬生　了", en: "End of Chapter 2 · Mibu"},
    beats: [

      { scene: "nakasendo", kind: "record", year: "1863",
        ja: "文久三年二月八日、浪士組約230名は伝通院を発ち、中山道を京へ向かった。十五日の行程である。近藤の役目は、隊列の先回りをして宿を割り振ることだった。",
        en: "On the 8th day of the 2nd month, 1863, some 230 men of the Rōshigumi leave Denzū-in and take the Nakasendō for Kyoto, a fifteen-day march. Kondō’s job is to ride ahead of the column and arrange lodgings.",
        src: {ja: "浪士組の記録", en: "Rōshigumi records"} },

      { scene: "nakasendo", kind: "anecdote", year: "1863",
        ja: "本庄宿で自分の宿が取られていなかったことに怒った芹沢鴨は、往来で大篝火を焚いたという。",
        en: "At Honjō, the story goes, Serizawa Kamo found no room had been kept for him and lit a great bonfire in the street.",
        src: {ja: "永倉新八の後年の回想", en: "Nagakura Shinpachi’s later account"} },

      { scene: "mibu", kind: "record", year: "1863",
        ja: "二月二十三日、浪士組は京に着き、都の西の外れ、壬生村の寺や郷士の屋敷に分宿した。",
        en: "On the 23rd day of the 2nd month the Rōshigumi reach Kyoto and are lodged in the temples and farmhouses of Mibu, a village on the city’s western edge.",
        src: {ja: "浪士組の記録", en: "Rōshigumi records"} },

      { scene: "mibu", kind: "record", year: "1863",
        ja: "到着するや、発案者の清河八郎は本心を明かす。浪士組は幕府ではなく、朝廷の攘夷のために働くのだと。一同の名で朝廷に建白書が出された。",
        en: "As soon as they arrive, the scheme’s author, Kiyokawa Hachirō, shows his hand: the Rōshigumi will serve the emperor’s cause of expelling the foreigners, not the shogunate. A petition goes to the court in all their names.",
        src: {ja: "浪士組の記録", en: "Rōshigumi records"} },

      { scene: "mibu", kind: "record", year: "1863",
        ja: "幕府は浪士組に江戸帰還を命じ、大半は清河に従って東へ戻った。これを拒んだのが、芹沢の水戸派と近藤の試衛館一党。二十数名だった。",
        en: "The shogunate orders the Rōshigumi back to Edo, and most follow Kiyokawa east. Two groups refuse: Serizawa’s Mito men and Kondō’s Shieikan household, two dozen or so in all.",
        src: {ja: "浪士組の記録", en: "Rōshigumi records"} },

      { scene: "azabu", kind: "record", year: "1863",
        ja: "四月十三日、江戸に戻った清河は、麻布一之橋の近くで幕府方の剣客に斬られた。三十二歳。彼が連れ帰った浪士たちは、新徴組に再編される。",
        en: "On the 13th day of the 4th month, back in Edo, Kiyokawa is cut down near the Ichinohashi bridge in Azabu by shogunal swordsmen. He is thirty-two. The men he led home are reorganised as the Shinchōgumi.",
        src: {ja: "幕府方の記録", en: "Shogunate records"} },

      { scene: "azabu", kind: "anecdote", year: "1863",
        ja: "下手人は一般に、佐々木只三郎らとされる。",
        en: "The killers are generally named as Sasaki Tadasaburō and his companions.",
        src: {ja: "のちの証言による通説", en: "The usual view, from later testimony"} },

      { scene: "kurodani", kind: "record", year: "1863",
        ja: "京に残った者たちは、京都守護職・会津藩主の松平容保に嘆願する。黒谷の金戒光明寺に本陣を置く会津藩は、彼らを預かりとした。「壬生浪士組」の始まりである。",
        en: "The men who stayed petition Matsudaira Katamori, lord of Aizu and Protector of Kyoto, whose headquarters is the temple of Konkai Kōmyō-ji at Kurodani. Aizu takes them under its charge. The Mibu Rōshigumi begins.",
        src: {ja: "会津藩の記録", en: "Aizu domain records"} },

      { scene: "kurodani", kind: "anecdote", year: "1863",
        ja: "容保が守護職を受けるとき、家臣たちは「薪を背負って火を消しに行くようなもの」と諫めたという。",
        en: "When Katamori accepted the post, his retainers are said to have warned him it was like carrying firewood to put out a fire.",
        src: {ja: "会津側でよく知られた伝承", en: "A well-known tradition on the Aizu side"} },

      { scene: "nijo", kind: "record", year: "1863",
        ja: "三月四日、将軍家茂が京に入る。将軍の上洛は1634年以来のことだった。壬生の浪士たちの最初の務めは、その行列の警護である。",
        en: "On the 4th day of the 3rd month the shogun Iemochi enters Kyoto, the first shogun to come since 1634. The Mibu men’s first duty is to guard his processions.",
        src: {ja: "幕府の記録", en: "Shogunate records"} },

      { scene: "mibu", kind: "record", year: "1863",
        ja: "隊士たちは壬生村の有力な二軒、八木家と前川家に分宿した。両家の建物はいまも残っている。",
        en: "The men are billeted on two leading households of Mibu, the Yagi and the Maekawa. Both houses still stand.",
        src: {ja: "八木家・前川家（現存）", en: "The Yagi and Maekawa houses, still standing"} },

      { scene: "mibu", kind: "record", year: "1863",
        ja: "揃いの羽織が作られる。浅葱色の地に、袖口を白い山形の段だら模様で染め抜いたもの。",
        en: "A uniform is made: a pale blue haori, its cuffs dyed with white saw-tooth stripes.",
        src: {ja: "隊士の回想", en: "Members’ recollections"} },

      { scene: "mibu", kind: "anecdote", year: "1863",
        ja: "その意匠は、芝居で赤穂浪士が着る衣装にならったものとされる。",
        en: "The design is said to copy the costume of the Forty-Seven Rōnin on the stage.",
        src: {ja: "よく知られた説", en: "A widely repeated explanation"} },

      { scene: "mibu", kind: "anecdote", year: "1863",
        ja: "町の人々は、壬生に住みついた乱暴な浪人たちを「壬生狼（みぶろ）」と呼んで恐れたという。",
        en: "Townspeople are said to have called the rough men camped at Mibu the “wolves of Mibu”, miburo.",
        src: {ja: "京に伝わる呼び名", en: "A nickname handed down in Kyoto"} },

      { scene: "gosho", kind: "record", year: "1863",
        ja: "八月十八日未明、会津と薩摩が長州勢と急進派の公家を京から追い出す。壬生浪士組も武装して御所の警備に出た。初めての本格的な出動である。",
        en: "Before dawn on the 18th day of the 8th month, Aizu and Satsuma drive Chōshū’s troops and the radical nobles out of Kyoto. The Mibu Rōshigumi turn out under arms to guard the palace. It is their first real deployment.",
        src: {ja: "会津藩の記録", en: "Aizu domain records"} },

      { scene: "gosho", kind: "anecdote", year: "1863",
        ja: "門で行く手を阻んだ会津兵を、芹沢が鉄扇を手に一喝したという。",
        en: "At the gate, the story goes, Serizawa faced down the Aizu guards who barred the way, an iron fan in his hand.",
        src: {ja: "よく知られた逸話", en: "A well-known story"} },

      { scene: "gosho", kind: "record", year: "1863",
        ja: "この日の働きののち、隊は新しい名を与えられる。「新選組」である。",
        en: "After that day’s service, the corps is given a new name: the Shinsengumi.",
        src: {ja: "会津藩の記録。命名の時期と経緯には諸説あり", en: "Aizu domain records; the exact date and how the name was given are debated"} }

    ] }

  ]
};
