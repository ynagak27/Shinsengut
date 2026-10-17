/* =====================================================================
   PLAY — 物語で体験する (play/index.html): key moments told as a
   visual novel, one chapter at a time.
   ---------------------------------------------------------------------
   THE RULE / 方針:
   - kind:"record"   史実 = what the record shows.
   - kind:"anecdote" 逸話 = a well-known traditional story, used ONLY
     where the record is silent. Shown in the dashed lore box.
   - kind:"context"  解説 = narration that connects or explains the
     beats around it. It adds no new facts, so it needs no src.
   - Nothing is invented. A person speaks only words that are recorded
     or traditionally attributed to them (who: + poem: for verse).
   - Every record and anecdote names its source in src:{ja, en}.

   HOW TO EDIT / 追記のしかた:
   - Each beat is one tap: {scene, kind, year, ja, en, src}.
   - scene: a key of PLAY.places. Its background is
     play/assets/scenes/<scene>.webp (or <img>.webp if the place sets img),
     cut from the period maps in
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
    ishida:   {ja: "多摩・石田村（日野の隣村）", en: "Ishida village, next to Hino", map: "ino-daizu", img: "hino"},
    fuchu:    {ja: "府中・六所宮",         en: "Rokusho shrine, Fuchū",      map: "ino-daizu"},
    denzuin:  {ja: "小石川・伝通院",       en: "Denzū-in, Koishikawa",       map: "edo-keio"},
    nakasendo:{ja: "中山道",               en: "The Nakasendō",              map: "ino-chuzu"},
    mibu:     {ja: "京都・壬生村",         en: "Mibu village, Kyoto",        map: "kyoto-genji"},
    azabu:    {ja: "江戸・麻布 一之橋",    en: "Ichinohashi, Azabu, Edo",    map: "edo-keio"},
    kurodani: {ja: "京都・黒谷 金戒光明寺", en: "Kurodani, Kyoto",            map: "kyoto-genji"},
    nijo:     {ja: "京都・二条城",         en: "Nijō castle, Kyoto",         map: "kyoto-genji"},
    gosho:    {ja: "京都御所",             en: "The Imperial Palace, Kyoto", map: "kyoto-genji"},
    osaka:    {ja: "大坂・北新地",         en: "Kitashinchi, Osaka",         map: "none", img: "unmapped"},
    nakadachiuri: {ja: "京都・中立売あたり", en: "Nakadachiuri, Kyoto",      map: "kyoto-genji"},
    gion:     {ja: "京都・祇園",           en: "Gion, Kyoto",                map: "kyoto-genji"},
    shimabara:{ja: "京都・島原",           en: "Shimabara, Kyoto",           map: "kyoto-genji"},
    yagi:     {ja: "壬生・八木家",         en: "The Yagi house, Mibu",       map: "kyoto-genji", img: "mibu"},
    mibudera: {ja: "壬生寺",               en: "Mibu-dera temple",           map: "kyoto-genji", img: "mibu"}
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
                    en: "Map: Genji kaisei Kyō ezu taizen, Tohoku University Library"},
    "none":        {ja: "大坂は、当サイトの古地図の範囲外です",
                    en: "Osaka lies outside the site’s period maps"}
  },

  /* Words spoken in the story (poems etc.) are attributed to these people. */
  speakers: {
    hijikata: {ja: "土方歳三", en: "Hijikata Toshizō"}
  },

  chapters: [

  { id: "shieikan",
    no:    {ja: "第一章", en: "Chapter 1"},
    title: {ja: "試衛館", en: "Shieikan"},
    span:  {ja: "1834 – 1863　多摩・江戸", en: "1834 – 1863 · Tama and Edo"},
    lede:  {ja: "多摩の農家の子らが、江戸市谷の小さな道場に集まる。のちの新選組の始まり。",
            en: "Farmers’ sons from Tama gather at a small dojo in Ichigaya, Edo. This is where the Shinsengumi begins."},
    cover: "ichigaya",
    end:   {ja: "第一章　試衛館　了", en: "End of Chapter 1 · Shieikan"},
    beats: [

      { scene: "tama", kind: "context", year: "1830s",
        ja: "新選組の物語は、城ではなく、江戸の西に広がる多摩の農村から始まる。",
        en: "The story of the Shinsengumi begins not in a castle but in the farm villages of Tama, west of Edo." },

      { scene: "tama", kind: "record", year: "1830s",
        ja: "多摩は幕府が直接治める天領だった。豊かな農家の人々は読み書きに通じ、俳句をたしなみ、剣術を学ぶ者も多かった。自分たちは徳川の民だという誇りがあった。",
        en: "Tama is shogunal land, ruled directly by the Tokugawa. Its well-off farmers read and write, compose haiku, and many train with the sword. They think of themselves as the shogun’s own people.",
        src: {ja: "多摩の地域史", en: "Local history of Tama"} },

      { scene: "tama", kind: "context", year: "1830s",
        ja: "身分の固まった時代、農民が生まれによって侍になることはない。剣の腕は、彼らが侍の世界に近づくほとんど唯一の道だった。",
        en: "In the fixed class order of the day, no farmer is born a samurai. Skill with the sword is almost the only way to come close to that world." },

      { scene: "tama", kind: "record", year: "1834",
        ja: "天保五年、上石原村の農家、宮川家に三男の勝五郎が生まれる。のちの近藤勇である。父の久次郎は天然理心流の後援者で、屋敷に稽古場を持ち、流派の師範たちが出入りしていた。",
        en: "In 1834 a third son, Katsugorō, is born to the Miyagawa, a farming family in Kami-Ishihara. He will become Kondō Isami. His father, Hisajirō, is a patron of the Tennen Rishin-ryū sword school with a practice hall in the house, and the school’s masters come and go.",
        src: {ja: "宮川家（近藤家）の記録", en: "Miyagawa (Kondō) family records"} },

      { scene: "ichigaya", kind: "record", year: "1840s",
        ja: "天然理心流は、実戦を重んじる荒々しい剣だった。江戸・市谷の道場を三代目の近藤周助が守り、門人の多くは師範が出稽古に回る多摩の農民だった。",
        en: "The Tennen Rishin-ryū is a rough, practical style built for real fighting. Its Edo dojo in Ichigaya is kept by the third head, Kondō Shūsuke, but most of its students are Tama farmers, taught by masters who travel out to the villages.",
        src: {ja: "天然理心流の記録、新宿区の解説", en: "Tennen Rishin-ryū records; Shinjuku City notes"} },

      { scene: "ichigaya", kind: "anecdote", year: "1840s",
        ja: "江戸の名門道場からは「田舎剣法」「芋道場」と侮られていたという。",
        en: "The fashionable Edo schools are said to have sneered at it as “country fencing”, a “potato dojo”.",
        src: {ja: "よく知られた評判", en: "A well-known jibe"} },

      { scene: "ichigaya", kind: "anecdote", year: "1840s",
        ja: "この道場は「試衛館」の名で知られる。ただしこの名は主に後年の回想録に見えるもので、当時の呼び名がそのままだったかは、はっきりしない。",
        en: "The dojo is known as the Shieikan. The name, though, comes mainly from memoirs written years later; what it was called at the time is not certain.",
        src: {ja: "名称は後年の史料による。諸説あり", en: "The name appears in later accounts; views differ"} },

      { scene: "tama", kind: "anecdote", year: "1848",
        ja: "宮川家に盗賊が押し入ったとき、少年の勝五郎は慌てず機をうかがい、兄とともに追い払ったという。その胆力が周助の目にとまったと語られる。",
        en: "When burglars broke into the Miyagawa house, the story goes, the boy Katsugorō kept his head, waited for his moment and drove them off with his brother. It was this nerve that caught Shūsuke’s eye.",
        src: {ja: "よく知られた逸話", en: "A well-known story"} },

      { scene: "tama", kind: "record", year: "1848",
        ja: "嘉永元年、勝五郎は天然理心流に入門し、翌年、跡継ぎのいない周助の養子となる。農家の子が、流派を継ぐ道を歩みはじめた。",
        en: "In 1848 Katsugorō joins the school, and the next year the childless Shūsuke adopts him as his heir. A farmer’s son is now on the path to leading a sword school.",
        src: {ja: "新宿区の解説、近藤家の記録", en: "Shinjuku City notes; Kondō family records"} },

      { scene: "tama", kind: "anecdote", year: "1848",
        ja: "勇は拳を丸ごと口に入れることができ、加藤清正にならったと語られる。",
        en: "Isami could fit his whole fist in his mouth, the story goes, just as the warlord Katō Kiyomasa was said to.",
        src: {ja: "よく知られた逸話", en: "A well-known traditional story"} },

      { scene: "ichigaya", kind: "record", year: "1852",
        ja: "沖田総司は白河藩江戸屋敷の軽輩の家に生まれた。父は早くに亡くなり、家は姉ミツの夫・林太郎が継ぐ。九歳ほどの総司は、試衛館に内弟子として預けられた。",
        en: "Okita Sōji is born into a low-ranking family of the Shirakawa domain in Edo. His father dies young and the family’s place passes to his sister Mitsu’s husband, Rintarō. At about nine, Sōji is sent to live at the Shieikan as a live-in pupil.",
        src: {ja: "沖田家の記録、新宿区の解説", en: "Okita family records; Shinjuku City notes"} },

      { scene: "ichigaya", kind: "record", year: "1850s",
        ja: "道場で育った総司は、やがて一門随一の遣い手となる。近藤は彼を弟のように扱った。",
        en: "Raised in the dojo, Sōji grows into the best swordsman of the household. Kondō treats him like a younger brother.",
        src: {ja: "永倉新八の回想", en: "Nagakura Shinpachi’s memoirs"} },

      { scene: "ishida", kind: "record", year: "1835",
        ja: "天保六年、日野の隣、石田村の豪農・土方家に、十人きょうだいの末っ子として歳三が生まれる。父は彼が生まれる前に、母は五歳のときに亡くなった。",
        en: "In 1835 Toshizō is born in Ishida, the village next to Hino, the youngest of ten children of the wealthy Hijikata family. His father has died before his birth; his mother dies when he is five.",
        src: {ja: "土方家の記録", en: "Hijikata family records"} },

      { scene: "ishida", kind: "anecdote", year: "1840s",
        ja: "少年の歳三は江戸へ奉公に出たが、店でいさかいを起こして帰ってきたと伝わる。",
        en: "As a boy, Toshizō is said to have been sent to Edo as a shop apprentice, and to have come home after a quarrel.",
        src: {ja: "土方家に伝わる話", en: "A story kept by the Hijikata family"} },

      { scene: "ishida", kind: "anecdote", year: "1850s",
        ja: "家伝の薬「石田散薬」を売り歩くとき、歳三は防具を担いで行き、行く先々の道場で稽古を願ったという。",
        en: "Selling the family’s medicine, Ishida powder, Toshizō is said to have carried his practice armour on his rounds, asking to train at every dojo he passed.",
        src: {ja: "日野に伝わる逸話", en: "A story handed down in Hino"} },

      { scene: "hino", kind: "record", year: "1850s",
        ja: "歳三の姉ノブは、日野の名主・佐藤彦五郎に嫁いでいた。彦五郎は天然理心流の門人で、屋敷に道場を開き、江戸から師範を招いていた。歳三が近藤と出会ったのは、この道場である。",
        en: "Toshizō’s sister Nobu has married Satō Hikogorō, headman of Hino. Hikogorō is a Tennen Rishin-ryū student with a dojo in his own house, where masters come out from Edo to teach. It is here that Toshizō meets Kondō.",
        src: {ja: "佐藤彦五郎新選組資料館", en: "Satō Hikogorō Shinsengumi Museum, Hino"} },

      { scene: "hino", kind: "record", year: "1850s",
        ja: "日野からは井上源三郎も通っていた。八王子千人同心の家の次男で、十年以上かけて免許を得た、実直な兄弟子である。",
        en: "Inoue Genzaburō trains here too: a younger son of a Hachiōji Thousand-Man Guard family in Hino, who takes more than ten years to earn his licence. He is the steady elder of a school full of prodigies.",
        src: {ja: "井上家の記録", en: "Inoue family records"} },

      { scene: "hino", kind: "record", year: "1859",
        ja: "安政六年、歳三は正式に天然理心流に入門する。二十四歳、遅い入門だった。",
        en: "In 1859 Toshizō formally enters the Tennen Rishin-ryū. He is twenty-four, a late start.",
        src: {ja: "入門年は安政六年が通説。異説あり", en: "1859 is the usual date; one account gives 1851"} },

      { scene: "fuchu", kind: "record", year: "1861",
        ja: "文久元年、府中の六所宮で、近藤の四代目襲名を祝う野試合が催された。門人たちは紅白の二軍に分かれ、多摩の村々の家族や後援者の前で戦った。",
        en: "In 1861, at the Rokusho shrine in Fuchū, a mock battle celebrates Kondō becoming the school’s fourth head. The students split into red and white armies and fight before the families and patrons of the Tama villages.",
        src: {ja: "天然理心流の記録", en: "Tennen Rishin-ryū records"} },

      { scene: "fuchu", kind: "record", year: "1861",
        ja: "残された名簿には、土方、沖田、山南、井上の名がある。二年後、同じ顔ぶれがそろって西へ向かうことになる。",
        en: "The surviving roster lists Hijikata, Okita, Yamanami and Inoue. Two years later the same men will march west together.",
        src: {ja: "野試合の名簿。各人の役割は後年の伝えで異なる", en: "The mock battle’s roster; the roles given to each man vary in later retellings"} },

      { scene: "ichigaya", kind: "record", year: "1860s",
        ja: "試衛館には、他流の剣客も身を寄せていた。松前藩士の子で神道無念流の永倉新八、北辰一刀流の山南敬助と藤堂平助、槍の原田左之助。皆が同じ釜の飯を食った。",
        en: "Swordsmen from other schools live at the Shieikan too: Nagakura Shinpachi, a Matsumae samurai’s son trained in the Shintō Munen-ryū; Yamanami Keisuke and Tōdō Heisuke of the Hokushin Ittō-ryū; Harada Sanosuke with his spear. All eat at the same table.",
        src: {ja: "永倉新八の回想録", en: "Nagakura Shinpachi’s memoirs"} },

      { scene: "ichigaya", kind: "anecdote", year: "1860s",
        ja: "学識のある山南は、近藤に試合を挑んで敗れ、その腕に感服して道場にとどまったと伝わる。",
        en: "The scholarly Yamanami is said to have come to challenge Kondō, lost, and stayed on out of respect.",
        src: {ja: "よく知られた逸話。確かな史料はない", en: "A well-known story with no firm record"} },

      { scene: "ichigaya", kind: "context", year: "1860s",
        ja: "農家の子もいれば、藩士の子もいる。生まれはばらばらだが、剣と近藤のもとで一つの所帯になっていた。貧しく、結束が固く、野心があった。",
        en: "Some are farmers’ sons, some samurai’s sons. Their births differ, but around the sword and around Kondō they have become one household: poor, close-knit and ambitious." },

      { scene: "denzuin", kind: "record", year: "1863",
        ja: "そのころ国は揺れていた。1853年のペリー来航以来、幕府の権威は傾き、「尊皇攘夷」を唱える志士たちが京で幕府寄りの人々を斬っていた。幕府には、京を守る者が必要だった。",
        en: "Meanwhile the country is in turmoil. Since Perry’s warships arrived in 1853 the shogunate’s authority has been failing, and loyalist radicals crying “revere the emperor, expel the barbarians” are killing its supporters in Kyoto. The shogunate needs men to keep order there.",
        src: {ja: "幕末の政治史", en: "Political history of the period"} },

      { scene: "denzuin", kind: "record", year: "1863",
        ja: "文久三年、幕府は将軍上洛の警護に浪士を募る。約230名が小石川の伝通院に集まり、試衛館の一同もそろって加わった。",
        en: "In 1863 the shogunate calls for masterless swordsmen to guard the shogun on his journey to Kyoto. Some 230 men gather at Denzū-in in Koishikawa, and the whole Shieikan household signs on together.",
        src: {ja: "浪士組の記録", en: "Rōshigumi records"} },

      { scene: "denzuin", kind: "context", year: "1863",
        ja: "生まれによって侍になれない彼らにとって、それは行いによって侍になる道だった。",
        en: "For men who could never be samurai by birth, it is a chance to become samurai by deed." },

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
        ja: "文久三年二月八日、浪士組約230名は伝通院を発ち、中山道を京へ向かった。十五日の行程である。",
        en: "On the 8th day of the 2nd month, 1863, some 230 men of the Rōshigumi leave Denzū-in and take the Nakasendō for Kyoto, a fifteen-day march.",
        src: {ja: "浪士組の記録", en: "Rōshigumi records"} },

      { scene: "nakasendo", kind: "record", year: "1863",
        ja: "顔ぶれは浪人、農家の子、博徒、剣術師範まで雑多だった。水戸の芹沢鴨を中心とする一派は、家柄でも気性でも際立っていた。",
        en: "The recruits are a ragged mix of rōnin, farmers’ sons, gamblers and real fencing masters. A group from Mito around Serizawa Kamo stands out, for its pedigree and its temper.",
        src: {ja: "浪士組の名簿、永倉新八の回想", en: "Rōshigumi rolls; Nagakura Shinpachi’s memoirs"} },

      { scene: "nakasendo", kind: "record", year: "1863",
        ja: "近藤勇に与えられたのは、隊列の先回りをして宿を割り振る役だった。一門を率いる道場主としては、低い扱いである。",
        en: "Kondō Isami is given the job of riding ahead of the column to arrange lodgings: a lowly post for the head of a sword school with his own following.",
        src: {ja: "浪士組の記録", en: "Rōshigumi records"} },

      { scene: "nakasendo", kind: "anecdote", year: "1863",
        ja: "本庄宿で、近藤は芹沢の宿を取り忘れた。怒った芹沢は往来で大篝火を焚き、宿場は騒然となる。近藤は平身低頭して詫び、ようやく事を収めたという。",
        en: "At Honjō, the story goes, Kondō forgot to book Serizawa a room. Furious, Serizawa built a huge bonfire in the street and the post town was in uproar. Kondō bowed low and apologised until the matter was settled.",
        src: {ja: "永倉新八の後年の回想", en: "Nagakura Shinpachi’s later account"} },

      { scene: "nakasendo", kind: "context", year: "1863",
        ja: "芹沢が騒ぎを起こし、近藤が頭を下げて収める。この構図は、京に入ってからも繰り返されることになる。",
        en: "Serizawa makes trouble; Kondō swallows his pride and smooths it over. The pattern will repeat itself many times once they reach Kyoto." },

      { scene: "mibu", kind: "record", year: "1863",
        ja: "二月二十三日、浪士組は京に着き、都の西の外れ、壬生村の寺や郷士の屋敷に分宿した。",
        en: "On the 23rd day of the 2nd month the Rōshigumi reach Kyoto and are lodged in the temples and farmhouses of Mibu, a village on the city’s western edge.",
        src: {ja: "浪士組の記録", en: "Rōshigumi records"} },

      { scene: "mibu", kind: "record", year: "1863",
        ja: "浪士組を発案したのは、出羽庄内出身の尊攘派の策士、清河八郎だった。到着するや、彼は一同を集めて本心を明かす。浪士組は幕府ではなく、朝廷の攘夷のために働くのだと。",
        en: "The Rōshigumi was the idea of Kiyokawa Hachirō, a loyalist schemer from Shōnai in the north. As soon as they arrive he gathers the men and shows his hand: they will serve the emperor’s cause of expelling the foreigners, not the shogunate.",
        src: {ja: "浪士組の記録", en: "Rōshigumi records"} },

      { scene: "mibu", kind: "record", year: "1863",
        ja: "一同の名で朝廷に建白書が出された。驚いた幕府は浪士組に江戸帰還を命じ、大半は清河に従って東へ戻る。",
        en: "A petition goes to the court in all their names. The alarmed shogunate orders the Rōshigumi back to Edo, and most follow Kiyokawa east.",
        src: {ja: "浪士組の記録", en: "Rōshigumi records"} },

      { scene: "mibu", kind: "record", year: "1863",
        ja: "これを拒んだのが、芹沢の水戸派と近藤の試衛館一党、合わせて二十数名だった。将軍を警護するという本来の務めを果たすため、というのが近藤らの言い分である。",
        en: "Two groups refuse: Serizawa’s Mito men and Kondō’s Shieikan household, two dozen or so in all. Kondō’s position is that they came to guard the shogun, and that is what they will do.",
        src: {ja: "浪士組の記録、近藤の書簡", en: "Rōshigumi records; Kondō’s letters"} },

      { scene: "mibu", kind: "context", year: "1863",
        ja: "残ったのは、気性の荒い水戸の一派と、多摩の剣術道場の一門。出自も肌合いも違う、二つの集団の寄り合いだった。",
        en: "What is left is an uneasy pairing: a hot-tempered group from Mito and a fencing school from the farm villages of Tama, two bands with little in common." },

      { scene: "azabu", kind: "record", year: "1863",
        ja: "四月十三日、江戸に戻った清河は、麻布一之橋の近くで幕府方の剣客に斬られた。三十二歳。彼が連れ帰った浪士たちは新徴組に再編され、江戸の警備につく。",
        en: "On the 13th day of the 4th month, back in Edo, Kiyokawa is cut down near the Ichinohashi bridge in Azabu by shogunal swordsmen. He is thirty-two. The men he led home become the Shinchōgumi, a police force in Edo.",
        src: {ja: "幕府方の記録", en: "Shogunate records"} },

      { scene: "azabu", kind: "anecdote", year: "1863",
        ja: "下手人は一般に、佐々木只三郎らとされる。",
        en: "The killers are generally named as Sasaki Tadasaburō and his companions.",
        src: {ja: "のちの証言による通説", en: "The usual view, from later testimony"} },

      { scene: "kurodani", kind: "record", year: "1863",
        ja: "京都守護職は、尊攘派の暗殺が横行する都を鎮めるため、幕府が新たに設けた職である。就いたのは若い会津藩主、松平容保。千名を率いて京に入り、黒谷の金戒光明寺に本陣を置いていた。",
        en: "The Protector of Kyoto is a new post, created by the shogunate to restore order in a capital terrorised by loyalist assassins. It has gone to the young lord of Aizu, Matsudaira Katamori, who has entered Kyoto with a thousand men and made his headquarters at Konkai Kōmyō-ji in Kurodani.",
        src: {ja: "会津藩の記録", en: "Aizu domain records"} },

      { scene: "kurodani", kind: "anecdote", year: "1863",
        ja: "容保が守護職を受けるとき、家臣たちは「薪を背負って火を消しに行くようなもの」と諫めたという。",
        en: "When Katamori accepted the post, his retainers are said to have warned him it was like carrying firewood to put out a fire.",
        src: {ja: "会津側でよく知られた伝承", en: "A well-known tradition on the Aizu side"} },

      { scene: "kurodani", kind: "record", year: "1863",
        ja: "京に残った者たちは容保に嘆願し、会津藩の預かりとなる。「壬生浪士組」の始まりである。局長には芹沢、新見錦、近藤の三人が並んだ。",
        en: "The men who stayed petition Katamori and are taken under Aizu’s charge: the Mibu Rōshigumi is born. It has three commanders: Serizawa, Niimi Nishiki and Kondō.",
        src: {ja: "会津藩の記録、隊の記録", en: "Aizu domain records; the corps’ records"} },

      { scene: "kurodani", kind: "context", year: "1863",
        ja: "家格で筆頭に座ったのは芹沢だった。近藤の一門は、まだ従う側にいた。",
        en: "By rank and pedigree, Serizawa sits at the top. Kondō’s household is still the junior partner." },

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
        src: {ja: "会津藩の記録。命名の時期と経緯には諸説あり", en: "Aizu domain records; the exact date and how the name was given are debated"} },

      { scene: "gosho", kind: "context", year: "1863",
        ja: "名と務めを得た新選組。だがその内側には、芹沢という火種がくすぶり続けていた。",
        en: "The Shinsengumi now has a name and a duty. Inside it, the problem of Serizawa is still smouldering." }

    ] },

  { id: "serizawa",
    no:    {ja: "第三章", en: "Chapter 3"},
    title: {ja: "芹沢鴨", en: "Serizawa"},
    span:  {ja: "1863　京都・大坂", en: "1863 · Kyoto and Osaka"},
    lede:  {ja: "新選組の初代筆頭局長は、水戸の急進派で、酒乱だった。乱行が重なり、会津藩の忍耐が尽きたとき、同志たちが彼を討つ。",
            en: "The corps’ first senior commander was a Mito radical and a dangerous drunk. When his outrages exhausted Aizu’s patience, his own comrades came for him."},
    cover: "mibu",
    end:   {ja: "第三章　芹沢鴨　了", en: "End of Chapter 3 · Serizawa"},
    beats: [

      { scene: "mibu", kind: "context", year: "1863",
        ja: "新選組の名を得る前から、壬生の屯所の内側では一つの問題が膨らんでいた。筆頭局長、芹沢鴨である。時を少し戻して、1863年の夏から。",
        en: "Even before the corps had its name, a problem was growing inside the Mibu barracks: its senior commander, Serizawa Kamo. We go back a little, to the summer of 1863." },

      { scene: "mibu", kind: "record", year: "1863",
        ja: "芹沢は常陸国、霞ヶ浦に近い芹沢村の郷士の家の出。尊王の教えの本場である水戸の世界で育ち、神道無念流を学んだ。学があり、筆が立ち、歌も詠んだ。",
        en: "Serizawa came from a family of country samurai in Serizawa village, near Lake Kasumigaura in Hitachi. He grew up in the world of Mito, home of the doctrine of reverence for the emperor, and trained in the Shintō Munen-ryū. He was educated, wrote a fine hand and composed verse.",
        src: {ja: "芹沢家の伝え、隊士の回想。生年や家のことには異説あり", en: "Family tradition and members’ recollections; his birth year and family details are disputed"} },

      { scene: "mibu", kind: "anecdote", year: "1863",
        ja: "水戸の急進派として投獄され、死罪を言い渡されたが、1862年の大赦で放たれたとされる。獄中で指を噛み切り、血で辞世を書いたという話も伝わる。",
        en: "He is identified with a Mito radical who was jailed and condemned to death, then freed in the amnesty of 1862. A story has him biting his finger and writing a death poem in blood in his cell.",
        src: {ja: "伝承。この志士との同一視には異説あり", en: "Tradition; his identification with that activist is debated"} },

      { scene: "mibu", kind: "record", year: "1863",
        ja: "彼は「尽忠報国之士 芹沢鴨」と刻んだ大きな鉄扇を持ち歩いていた。",
        en: "He carried a great iron war fan inscribed “Serizawa Kamo, a man of utmost loyalty and patriotism”.",
        src: {ja: "隊士・八木家の回想", en: "Recollections of members and the Yagi family"} },

      { scene: "yagi", kind: "record", year: "1863",
        ja: "隊が宿を借りた八木家の人々は、二つの芹沢を覚えていた。素面のときは家の者に礼儀正しく、子どもとも気さくに遊ぶ男。酔えば物を壊し、人を脅す男。",
        en: "The Yagi family, who housed the corps, remembered two Serizawas: one who, sober, was courteous to the household and played easily with the children, and one who, drunk, smashed things and threatened people.",
        src: {ja: "八木家の後年の回想", en: "The Yagi family’s later recollections"} },

      { scene: "mibu", kind: "record", year: "1863",
        ja: "隊には厳しい掟があった。士道に背くこと、隊を脱けること、勝手に金策すること、勝手に訴訟を扱うことを禁じ、背けば切腹。この掟を守らせる役を担ったのが、副長の土方である。",
        en: "The corps had a strict code. It forbade straying from the way of the samurai, deserting, raising money on one’s own account and taking up private lawsuits, on pain of seppuku. Enforcing it fell to the vice-commander, Hijikata.",
        src: {ja: "永倉新八の回想。成立の時期には諸説あり", en: "Nagakura Shinpachi’s memoirs; when it was drawn up is debated"} },

      { scene: "mibu", kind: "record", year: "1863",
        ja: "芹沢はその掟を、自ら破り続けた。商家から金を押し借りし、断られれば脅した。",
        en: "Serizawa broke the code himself, again and again. He forced loans out of merchants and threatened those who refused.",
        src: {ja: "隊士の回想、京の商家の記録", en: "Members’ recollections; Kyoto merchants’ records"} },

      { scene: "osaka", kind: "record", year: "1863",
        ja: "七月、大坂に出張した隊の一行は、芹沢に率いられて北新地の遊里へ向かう。狭い橋で道を譲らなかった力士を、芹沢が打ち倒した。",
        en: "In the 7th month, on duty in Osaka, a party led by Serizawa heads for the pleasure quarter of Kitashinchi. On a narrow bridge a sumo wrestler will not give way, and Serizawa strikes him down.",
        src: {ja: "永倉新八の回想", en: "Nagakura Shinpachi’s memoirs"} },

      { scene: "osaka", kind: "record", year: "1863",
        ja: "その夜、棒を手にした力士たちが、隊士の飲む茶屋に押し寄せる。隊士は抜刀し、力士側に死者を出して追い散らした。",
        en: "That night wrestlers armed with staves descend on the teahouse where the swordsmen are drinking. The swordsmen draw, and wrestlers are cut down and killed before the rest scatter.",
        src: {ja: "永倉新八の回想", en: "Nagakura Shinpachi’s memoirs"} },

      { scene: "osaka", kind: "context", year: "1863",
        ja: "誰がいたか、誰が先に手を出したか、力士が何人死んだか。この夜の細部のほとんどは、数十年後の永倉の回想にしか残っていない。",
        en: "Who was there, who struck first, how many wrestlers died: almost every detail of that night survives only in Nagakura’s recollections, written decades later." },

      { scene: "osaka", kind: "record", year: "1863",
        ja: "大坂の役人は激怒した。結局は相撲部屋と和解し、隊が後援して京で勧進相撲を興行することで、事は収まる。",
        en: "The Osaka authorities are furious. In the end the sumo stables accept a settlement, smoothed over with a charity tournament in Kyoto under the corps’ sponsorship.",
        src: {ja: "和解と興行の記録", en: "Records of the settlement and the tournament"} },

      { scene: "nakadachiuri", kind: "record", year: "1863",
        ja: "八月、生糸商の大和屋が金の求めを断ると、芹沢はその土蔵を焼き払わせた。守るべき都の真ん中での焼き討ちである。",
        en: "In the 8th month the silk merchant Yamatoya refuses Serizawa’s demand for money, and he has its storehouse burned to the ground: arson in the middle of the city the corps is meant to protect.",
        src: {ja: "京の記録、隊士の回想。日付は八月十三日とされる", en: "Kyoto records; members’ recollections. The date is usually given as the 13th day of the 8th month"} },

      { scene: "shimabara", kind: "anecdote", year: "1863",
        ja: "島原の揚屋・角屋のもてなしが気に入らず、座敷を打ち壊したとも伝わる。",
        en: "He is also said to have wrecked the rooms of the Sumiya, the great house of entertainment in Shimabara, when its service displeased him.",
        src: {ja: "伝承", en: "Tradition"} },

      { scene: "kurodani", kind: "record", year: "1863",
        ja: "乱行の一つ一つが、隊の後ろ盾である会津藩の耳に届いた。芹沢は八月十八日の政変では隊を率いた男であり、同時に、都で商家を焼く男だった。",
        en: "Each outrage reaches the Aizu domain, the corps’ patron. Serizawa is the man who led the corps at the palace on the 18th day of the 8th month, and the man burning merchants’ storehouses in the city.",
        src: {ja: "会津藩の記録", en: "Aizu domain records"} },

      { scene: "kurodani", kind: "anecdote", year: "1863",
        ja: "会津藩から近藤らに、芹沢を処断せよとの内意が伝えられたとされる。その命の形は、記録によって異なる。",
        en: "Word is said to have come from Aizu to Kondō and his men that Serizawa must be dealt with. How that order was given differs between accounts.",
        src: {ja: "通説。命令の形は史料によって異なる", en: "The usual view; accounts differ on the form of the order"} },

      { scene: "gion", kind: "record", year: "1863",
        ja: "最初に消えたのは、芹沢の腹心で局長の一人だった新見錦である。すでに副長に降格されていた新見は、九月、祇園の料亭で乱行を問われ、切腹させられた。",
        en: "The first to go is Serizawa’s right hand, Niimi Nishiki, once one of the three commanders. Already demoted to vice-commander, he is confronted in a Gion teahouse in the 9th month with charges of misconduct, and made to commit seppuku.",
        src: {ja: "隊の記録、永倉新八の回想。罪状や詰め寄った者は主に勝った側の記録による", en: "The corps’ records; Nagakura’s memoirs. The charges and who pressed them come mainly from the winning side"} },

      { scene: "gion", kind: "context", year: "1863",
        ja: "新見の死は、まず芹沢の最も強い支えを取り除いた。意図されたものかどうかはともかく、その数日後の夜への道が開かれた。",
        en: "Niimi’s death removes Serizawa’s strongest supporter first. Whether by design or not, it clears the way for what happens a few nights later." },

      { scene: "shimabara", kind: "anecdote", year: "1863",
        ja: "九月半ば、島原の角屋で隊の宴が開かれた。芹沢は深く酔い、激しい雨のなか壬生へ戻ったという。",
        en: "In the middle of the 9th month the corps holds a party at the Sumiya in Shimabara. Serizawa drinks heavily and returns to Mibu through driving rain, the story goes.",
        src: {ja: "主に八木家の後年の回想", en: "Mainly the Yagi family’s later recollections"} },

      { scene: "yagi", kind: "anecdote", year: "1863",
        ja: "その夜、芹沢のそばにはお梅がいた。芹沢の借金の取り立てに八木家を訪れた呉服商の妾で、やがて芹沢の愛人となった女である。",
        en: "That night Oume is with him. She had first come to the Yagi house to collect a debt Serizawa owed a cloth merchant, whose mistress she was, and had become Serizawa’s lover.",
        src: {ja: "八木家の回想", en: "The Yagi family’s recollections"} },

      { scene: "yagi", kind: "record", year: "1863",
        ja: "刺客たちは八木家に入り、眠る芹沢とお梅を斬った。隣室の平山五郎も殺された。家の別の場所で寝ていた平間重助は逃げ延び、ついに捕まらなかった。",
        en: "Assassins enter the Yagi house and cut down Serizawa and Oume as they sleep. Hirayama Gorō is killed in the next room. Hirama Jūsuke, asleep elsewhere in the house, escapes and is never caught.",
        src: {ja: "八木家の回想、永倉新八の回想。日付には異説あり", en: "Recollections of the Yagi family and Nagakura; the date differs between accounts"} },

      { scene: "yagi", kind: "record", year: "1863",
        ja: "多くの記録は、襲撃を率いたのを土方とし、沖田、山南、原田の名を挙げる。顔ぶれは史料によって異なり、藤堂や井上を加えるもの、山南を外すものもある。",
        en: "Most accounts say Hijikata led the attack and name Okita, Yamanami and Harada. The lists vary: some add Tōdō or Inoue, some leave out Yamanami.",
        src: {ja: "諸記録。顔ぶれは一致しない", en: "Various accounts, which do not agree"} },

      { scene: "yagi", kind: "anecdote", year: "1863",
        ja: "八木家の子どもたちは、布団をかぶって難を逃れたという。",
        en: "The Yagi children, it is said, survived by hiding under their bedding.",
        src: {ja: "八木家の回想", en: "The Yagi family’s recollections"} },

      { scene: "yagi", kind: "record", year: "1863",
        ja: "八木家の建物はいまも残り、この夜の刀傷が鴨居に見られる。",
        en: "The Yagi house still stands, and sword cuts from that night can be seen in its lintel.",
        src: {ja: "八木家住宅（現存）", en: "The Yagi house, still standing"} },

      { scene: "mibudera", kind: "record", year: "1863",
        ja: "隊は長州の刺客の仕業として、芹沢の葬儀を盛大に営んだ。芹沢と平山は、屯所の隣の壬生寺にともに葬られている。",
        en: "The corps blames Chōshū assassins and gives Serizawa a grand funeral. He and Hirayama are buried together at Mibu-dera, next to the barracks.",
        src: {ja: "隊の記録、壬生寺の墓所", en: "The corps’ records; the graves at Mibu-dera"} },

      { scene: "mibudera", kind: "context", year: "1863",
        ja: "屯所の誰もが、真相を察していた。それが公に語られるのは、生き残りたちが口を開く、ずっと後のことである。",
        en: "Everyone in the barracks understood what had happened. It would be said openly only much later, when the survivors began to talk." },

      { scene: "mibu", kind: "record", year: "1863",
        ja: "指揮は近藤ひとりのものとなった。芹沢派の最年少、野口健司も数か月後に切腹を命じられ、半年のうちに一派は跡形もなくなる。",
        en: "Command now belongs to Kondō alone. Noguchi Kenji, the youngest of Serizawa’s men, is ordered to commit seppuku a few months later, and within half a year the faction has ceased to exist.",
        src: {ja: "隊の記録", en: "The corps’ records"} },

      { scene: "mibu", kind: "context", year: "1863",
        ja: "芹沢は、歴史の「悪役」として語られてきた。だがその細部の多くは勝った側の記録と八木家の回想によるもので、隊を自らの運動とみなした本物の急進派として彼を見る歴史家もいる。",
        en: "History has cast Serizawa as the villain. Much of the detail, though, comes from the winning side and the Yagi family’s memories, and some historians see in him a genuine radical who thought of the corps as his movement, not Kondō’s." },

      { scene: "mibu", kind: "context", year: "1863",
        ja: "近藤が局長、土方が掟を握る。歴史の知る新選組が、ここから始まる。",
        en: "Kondō in command, Hijikata holding the code: the Shinsengumi that history knows begins here." }

    ] }


  ]
};
