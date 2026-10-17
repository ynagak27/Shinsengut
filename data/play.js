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
    mibudera: {ja: "壬生寺",               en: "Mibu-dera temple",           map: "kyoto-genji", img: "mibu"},
    maekawa:  {ja: "壬生・前川家（屯所）", en: "The Maekawa house, Mibu",    map: "kyoto-genji", img: "mibu"},
    masuya:   {ja: "京都・四条 枡屋",      en: "The Masuya, Shijō, Kyoto",   map: "kyoto-genji"},
    gionkaisho: {ja: "祇園・町会所",       en: "The Gion meeting hall",      map: "kyoto-genji", img: "gion"},
    ikedaya:  {ja: "京都・三条木屋町 池田屋", en: "The Ikedaya, Sanjō, Kyoto", map: "kyoto-genji"},
    hamaguri: {ja: "京都御所・蛤御門",     en: "The Hamaguri Gate, Kyoto",   map: "kyoto-genji"},
    kujo:     {ja: "京都・九条河原",       en: "The riverbank at Kujō, Kyoto", map: "kyoto-genji"},
    kyoto:    {ja: "京都の町",             en: "The city of Kyoto",          map: "kyoto-genji"},
    rokkaku:  {ja: "京都・六角獄舎",       en: "The Rokkaku prison, Kyoto",  map: "kyoto-genji"},
    tennozan: {ja: "山崎・天王山",         en: "Tennōzan, Yamazaki",         map: "none", img: "unmapped"},
    fukagawa: {ja: "江戸・深川",           en: "Fukagawa, Edo",              map: "edo-keio"},
    otsu:     {ja: "近江・大津",           en: "Ōtsu, on Lake Biwa",         map: "ino-chuzu"},
    kouenji:  {ja: "壬生・光縁寺",         en: "Kōen-ji temple, Mibu",       map: "kyoto-genji", img: "mibu"},
    honganji: {ja: "京都・西本願寺",       en: "Nishi Honganji, Kyoto",      map: "kyoto-genji"},
    osakajo:  {ja: "大坂城",               en: "Osaka Castle",               map: "none", img: "unmapped"},
    sanjo:    {ja: "京都・三条大橋",       en: "The Sanjō bridge, Kyoto",    map: "kyoto-genji"},
    kodaiji:  {ja: "東山・高台寺月真院",   en: "Gesshin-in, Kōdai-ji, Higashiyama", map: "kyoto-genji"},
    fudodo:   {ja: "京都・不動堂村",       en: "Fudōdō village, Kyoto",      map: "kyoto-genji"},
    omiya:    {ja: "京都・河原町 近江屋",  en: "The Ōmiya, Kawaramachi",     map: "kyoto-genji"},
    aburanokoji: {ja: "京都・油小路",      en: "Aburanokōji, Kyoto",         map: "kyoto-genji"},
    tenmaya:  {ja: "京都・油小路 天満屋",  en: "The Tenmaya inn, Kyoto",     map: "kyoto-genji"},
    sumizome: {ja: "伏見街道・墨染",       en: "Sumizome, on the Fushimi road", map: "kyoto-genji"},
    fushimi:  {ja: "山城・伏見と淀",       en: "Fushimi and Yodo, Yamashiro", map: "ino-chuzu"},
    shinagawa:{ja: "江戸・品川",           en: "Shinagawa, Edo",             map: "ino-daizu"},
    edocastle:{ja: "江戸城",               en: "Edo Castle",                 map: "edo-keio"},
    katsunuma:{ja: "甲斐・勝沼",           en: "Katsunuma, Kai",             map: "ino-daizu"},
    nagareyama:{ja: "下総・流山",          en: "Nagareyama, Shimōsa",        map: "ino-chuzu"},
    itabashi: {ja: "中山道・板橋",         en: "Itabashi, on the Nakasendō", map: "ino-daizu"},
    sendagaya:{ja: "江戸・千駄ヶ谷",       en: "Sendagaya, Edo",             map: "edo-keio"},
    ueno:     {ja: "江戸・上野",           en: "Ueno, Edo",                  map: "edo-keio"},
    utsunomiya:{ja: "下野・宇都宮",        en: "Utsunomiya, Shimotsuke",     map: "ino-daizu"},
    shirakawa:{ja: "奥州・白河",           en: "Shirakawa, gateway to the north", map: "ino-chuzu"},
    aizu:     {ja: "会津若松",             en: "Aizu-Wakamatsu",             map: "ino-daizu"},
    sendai:   {ja: "仙台",                 en: "Sendai",                     map: "ino-chuzu"},
    washinoki:{ja: "蝦夷地・鷲ノ木",       en: "Washinoki, Ezo",             map: "ino-chuzu"},
    hakodate: {ja: "箱館",                 en: "Hakodate",                   map: "ino-chuzu"},
    matsumae:{ja: "蝦夷地・松前",          en: "Matsumae, Ezo",              map: "ino-chuzu"},
    miyako:   {ja: "陸中・宮古湾",         en: "Miyako Bay",                 map: "ino-chuzu"},
    futamata: {ja: "蝦夷地・二股口",       en: "The Futamata pass, Ezo",     map: "ino-chuzu"},
    takahata: {ja: "日野・高幡不動",       en: "Takahata Fudō, Hino",        map: "ino-daizu", img: "hino"},
    otaru:    {ja: "北海道・小樽",         en: "Otaru, Hokkaido",            map: "none", img: "unmapped"}
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
    "none":        {ja: "この場所は、当サイトの古地図の範囲外です",
                    en: "This place lies outside the site’s period maps"}
  },

  /* Words spoken in the story (poems etc.) are attributed to these people. */
  speakers: {
    hijikata: {ja: "土方歳三", en: "Hijikata Toshizō"},
    kondo:    {ja: "近藤勇",   en: "Kondō Isami"},
    ito:      {ja: "伊東甲子太郎", en: "Itō Kashitarō"}
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

    ] },

  { id: "ikedaya",
    no:    {ja: "第四章", en: "Chapter 4"},
    title: {ja: "池田屋", en: "Ikedaya"},
    span:  {ja: "1864　京都", en: "1864 · Kyoto"},
    lede:  {ja: "祇園祭の前夜、三条木屋町の旅籠。わずかな手勢で踏み込んだ一夜が、新選組を日本一名高く、そして最も憎まれる剣にした。",
            en: "The eve of the Gion festival, an inn by the Sanjō bridge. One night, and a handful of men going in through the front door, made the Shinsengumi the most famous and most hated swords in Japan."},
    cover: "ikedaya",
    end:   {ja: "第四章　池田屋　了", en: "End of Chapter 4 · Ikedaya"},
    beats: [

      { scene: "mibu", kind: "context", year: "1864",
        ja: "芹沢亡きあと、近藤と土方の隊は、京の治安を担う会津の手足となっていた。",
        en: "With Serizawa gone, Kondō and Hijikata’s corps has become Aizu’s instrument for keeping order in Kyoto." },

      { scene: "mibu", kind: "record", year: "1864",
        ja: "前年の八月十八日の政変で追われた長州系の志士たちは、市中に潜んでいた。彼らを探り出し、捕らえることが、隊の日々の務めになった。",
        en: "The Chōshū loyalists driven out in the coup of the previous summer are hiding all over the city. Tracking them down and arresting them has become the corps’ daily work.",
        src: {ja: "会津藩の記録、隊の記録", en: "Aizu domain records; the corps’ records"} },

      { scene: "masuya", kind: "record", year: "1864",
        ja: "隊の探索方は、四条で薪炭商「枡屋」を営む古高俊太郎に目をつけていた。商人の顔の裏で、長州の志士と通じているとみたのである。",
        en: "The corps’ investigators have been watching Furutaka Shuntarō, who runs a fuel shop called the Masuya in Shijō. Behind the merchant, they believe, is a man working with the Chōshū loyalists.",
        src: {ja: "隊の記録。探索には山崎烝らが当たったとされる", en: "The corps’ records; Yamazaki Susumu and others are credited with the surveillance"} },

      { scene: "masuya", kind: "record", year: "1864",
        ja: "元治元年六月五日の早朝、隊は枡屋に踏み込み、古高を捕らえた。家からは武器や書状が見つかった。",
        en: "Early on the 5th day of the 6th month, 1864, the corps raids the Masuya and arrests Furutaka. Weapons and letters are found in the house.",
        src: {ja: "隊の記録", en: "The corps’ records"} },

      { scene: "maekawa", kind: "record", year: "1864",
        ja: "古高は壬生の屯所に連行され、拷問の末に口を割った。",
        en: "Furutaka is taken to the barracks at Mibu, and under torture he talks.",
        src: {ja: "隊の記録、隊士の回想", en: "The corps’ records; members’ recollections"} },

      { scene: "maekawa", kind: "anecdote", year: "1864",
        ja: "その責めを指揮したのは、土方だったと伝わる。",
        en: "It was Hijikata, the story goes, who directed the interrogation.",
        src: {ja: "伝承", en: "Tradition"} },

      { scene: "maekawa", kind: "record", year: "1864",
        ja: "自白によれば、志士たちは風の強い日を選んで京に火を放ち、その混乱に乗じて天皇を長州へ連れ去るつもりだった。",
        en: "By his confession, the loyalists mean to set Kyoto on fire on a windy day and, in the chaos, carry the emperor off to Chōshū.",
        src: {ja: "古高の自白（隊・会津藩の記録）", en: "Furutaka’s confession, in the records of the corps and Aizu"} },

      { scene: "maekawa", kind: "context", year: "1864",
        ja: "拷問による自白である。計画が本当にそこまでのものだったのかは、今も議論がある。",
        en: "It is a confession obtained under torture, and whether the plot was really as grand as that is still debated." },

      { scene: "maekawa", kind: "record", year: "1864",
        ja: "古高の捕縛を知った同志たちが、その夜どこかに集まって善後策を話し合う、とみられた。だが、どの宿かはわからない。",
        en: "Furutaka’s comrades, learning of his arrest, are expected to meet somewhere that night to decide what to do. But no one knows which inn.",
        src: {ja: "隊の記録、永倉新八の回想", en: "The corps’ records; Nagakura Shinpachi’s memoirs"} },

      { scene: "gionkaisho", kind: "record", year: "1864",
        ja: "六月五日は祇園祭の宵宮。隊は祇園の町会所に集まり、会津藩などの兵を待った。だが約束の刻限を過ぎても、兵は来なかった。",
        en: "The 5th of the 6th month is the eve of the Gion festival. The corps gathers at the Gion meeting hall to wait for troops from Aizu and others. The agreed hour comes and goes, and no one arrives.",
        src: {ja: "隊の記録、近藤の書簡", en: "The corps’ records; Kondō’s letters"} },

      { scene: "gionkaisho", kind: "record", year: "1864",
        ja: "近藤は待つのをやめた。隊を二手に分け、自らは十名ほどで鴨川の西、木屋町から三条へ。土方は二十数名を率いて、川の東、祇園の側を探る。",
        en: "Kondō stops waiting. He splits the corps in two: he takes about ten men along the west bank of the Kamo, up Kiyamachi towards Sanjō, while Hijikata takes twenty or more through the Gion side, east of the river.",
        src: {ja: "隊の記録、永倉新八の回想", en: "The corps’ records; Nagakura Shinpachi’s memoirs"} },

      { scene: "ikedaya", kind: "record", year: "1864",
        ja: "夜も更けたころ、近藤隊は三条小橋の旅籠・池田屋にたどり着く。二階では、二十数名の志士が会合していた。",
        en: "Late in the night, Kondō’s party reaches the Ikedaya, an inn by the little Sanjō bridge. Upstairs, more than twenty loyalists are in council.",
        src: {ja: "隊の記録、近藤の書簡", en: "The corps’ records; Kondō’s letters"} },

      { scene: "ikedaya", kind: "anecdote", year: "1864", who: "kondo",
        ja: "御用改めである。",
        en: "Official inspection!",
        src: {ja: "踏み込む際の近藤の言葉として伝わる", en: "Traditionally given as Kondō’s words at the door"} },

      { scene: "ikedaya", kind: "record", year: "1864",
        ja: "応援を待たず、近藤は踏み込んだ。屋内に入ったのは近藤、沖田、永倉、藤堂ら、ほんの数名。残りは表と裏を固めた。",
        en: "Without waiting for help, Kondō goes in. Only a few go inside with him, among them Okita, Nagakura and Tōdō; the rest hold the front and back.",
        src: {ja: "近藤の書簡、永倉新八の回想", en: "Kondō’s letters; Nagakura Shinpachi’s memoirs"} },

      { scene: "ikedaya", kind: "record", year: "1864",
        ja: "暗い階段と廊下、狭い座敷での斬り合いが続いた。蒸し暑い、夏の夜だった。",
        en: "The fight runs through dark stairways and corridors and cramped rooms, on a stifling summer night.",
        src: {ja: "永倉新八の回想", en: "Nagakura Shinpachi’s memoirs"} },

      { scene: "ikedaya", kind: "record", year: "1864",
        ja: "斬り込みの最中、沖田が倒れ、運び出された。",
        en: "In the middle of the fighting, Okita collapses and is carried out.",
        src: {ja: "永倉新八の回想", en: "Nagakura Shinpachi’s memoirs"} },

      { scene: "ikedaya", kind: "context", year: "1864",
        ja: "床に血を吐いて倒れる沖田は、のちの小説やドラマの名場面である。永倉の手記は「病に倒れた」と記すのみで、蒸し暑い夜の熱中症とみる説も有力だ。",
        en: "Okita coughing blood on the floor is the most famous scene in later novels and dramas. Nagakura’s account says only that he fell ill, and heatstroke on a stifling night is a common modern reading." },

      { scene: "ikedaya", kind: "record", year: "1864",
        ja: "藤堂は暑さに鉢金を押し上げたところを、額を斬られた。",
        en: "Tōdō, pushing back his headband in the heat, takes a sword cut across the forehead.",
        src: {ja: "永倉新八の回想", en: "Nagakura Shinpachi’s memoirs"} },

      { scene: "ikedaya", kind: "record", year: "1864",
        ja: "永倉は刀が折れ、親指を割られながらも、最後まで乱戦の中で戦い続けた。着込んだ鎖帷子が命を救った。",
        en: "Nagakura fights on at the heart of it to the end, his sword snapped and his thumb split open. The chain mail under his clothes saves his life.",
        src: {ja: "永倉新八の回想", en: "Nagakura Shinpachi’s memoirs"} },

      { scene: "ikedaya", kind: "record", year: "1864",
        ja: "やがて土方隊が駆けつけ、周囲を封鎖する。形勢はここで決まった。",
        en: "Then Hijikata’s column arrives and seals off the block. That settles it.",
        src: {ja: "隊の記録", en: "The corps’ records"} },

      { scene: "ikedaya", kind: "anecdote", year: "1864",
        ja: "遅れて到着した会津などの兵を、土方はあえて中に入れなかったという。手柄を新選組だけのものにするためだった、と語られる。",
        en: "When troops from Aizu and others finally arrive, Hijikata is said to have kept them outside, so that the credit would be the corps’ alone.",
        src: {ja: "後年の伝え", en: "Later accounts"} },

      { scene: "ikedaya", kind: "record", year: "1864",
        ja: "志士側は約八名が討たれ、二十名以上が捕らえられた。隊も三名を失う。うち二名は、のちに傷がもとで死んだ。",
        en: "About eight loyalists are killed and more than twenty arrested. The corps loses three men, two of them later, of their wounds.",
        src: {ja: "隊・会津藩の記録。数は記録によって異なる", en: "Records of the corps and Aizu; the numbers vary between accounts"} },

      { scene: "ikedaya", kind: "record", year: "1864",
        ja: "近藤は故郷への手紙に、自慢の刀「虎徹」は刃こぼれ一つなかったと書き送っている。",
        en: "In a letter home, Kondō writes proudly that his sword, a Kotetsu, came through without a single nick.",
        src: {ja: "近藤の書簡", en: "Kondō’s letters"} },

      { scene: "kurodani", kind: "record", year: "1864",
        ja: "幕府と会津から褒賞が下り、隊士の募集にも人が集まった。隊はほどなく二百名規模にふくらんでいく。",
        en: "Rewards come from the shogunate and Aizu, and recruits come flooding in. The corps will soon swell to some two hundred men.",
        src: {ja: "幕府・会津藩の記録、隊の記録", en: "Records of the shogunate, Aizu and the corps"} },

      { scene: "ikedaya", kind: "context", year: "1864",
        ja: "一夜にして、新選組は日本一名高い剣となった。そして、長州の志士たちから最も憎まれる剣にもなった。",
        en: "Overnight, the Shinsengumi becomes the most famous sword in Japan, and the one Chōshū’s loyalists hate most." },

      { scene: "ikedaya", kind: "context", year: "1864",
        ja: "この夜が明治維新を遅らせたのか、それとも長州を激昂させて、かえって早めたのか。歴史家の議論は今も続いている。",
        en: "Did that night delay the Meiji Restoration, or, by enraging Chōshū, bring it closer? Historians still argue." },

      { scene: "gosho", kind: "context", year: "1864",
        ja: "怒りに燃えた長州は、ひと月あまり後、軍を率いて京へ攻め上る。",
        en: "Burning with anger, Chōshū will march its armies on Kyoto just over a month later." }

    ] },

  { id: "kinmon",
    no:    {ja: "第五章", en: "Chapter 5"},
    title: {ja: "禁門の変", en: "Kinmon"},
    span:  {ja: "1864　京都・天王山", en: "1864 · Kyoto and Tennōzan"},
    lede:  {ja: "池田屋に激昂した長州が、軍を率いて御所に迫る。都は二日にわたって燃え、新選組は初めて、銃と大砲の戦場に立つ。",
            en: "Enraged by the Ikedaya, Chōshū marches its armies on the palace. The city burns for two days, and the Shinsengumi stands for the first time on a battlefield of guns and cannon."},
    cover: "hamaguri",
    end:   {ja: "第五章　禁門の変　了", en: "End of Chapter 5 · Kinmon"},
    beats: [

      { scene: "gosho", kind: "context", year: "1864",
        ja: "前年の政変で京を追われ、池田屋で多くの同志を失った長州。その怒りは、もはや言葉では収まらなかった。",
        en: "Driven from Kyoto in the coup of the year before, and now robbed of many of its men at the Ikedaya, Chōshū is past the point of words." },

      { scene: "kyoto", kind: "record", year: "1864",
        ja: "六月から七月にかけて、長州の軍勢が京の周りに陣を敷く。伏見、山崎、嵯峨の三方から。名目は、藩主父子の赦免を朝廷に「嘆願」することだった。",
        en: "Through the 6th and 7th months, Chōshū’s forces take up positions around Kyoto, at Fushimi, Yamazaki and Saga. Their stated aim is to “petition” the court to pardon their lords.",
        src: {ja: "長州藩・会津藩の記録", en: "Records of Chōshū and Aizu"} },

      { scene: "kyoto", kind: "record", year: "1864",
        ja: "朝廷は撤兵を命じたが、長州勢は動かない。都は息を詰めて、その時を待った。",
        en: "The court orders them to withdraw. They do not move, and the city holds its breath.",
        src: {ja: "朝廷・会津藩の記録", en: "Records of the court and Aizu"} },

      { scene: "kujo", kind: "record", year: "1864",
        ja: "新選組は会津藩の指揮下に入り、京の南、九条河原に布陣した。",
        en: "The Shinsengumi is placed under Aizu’s command and posted on the riverbank at Kujō, south of the city.",
        src: {ja: "会津藩の記録、隊の記録", en: "Records of Aizu and the corps"} },

      { scene: "hamaguri", kind: "record", year: "1864",
        ja: "七月十九日未明、長州勢が御所に攻めかかる。最も激しい戦いは蛤御門で起きた。守る会津・桑名の兵は押し込まれていく。",
        en: "Before dawn on the 19th day of the 7th month, Chōshū attacks the palace. The fiercest fighting breaks out at the Hamaguri Gate, where the Aizu and Kuwana troops holding it are driven back.",
        src: {ja: "会津藩・長州藩の記録", en: "Records of Aizu and Chōshū"} },

      { scene: "hamaguri", kind: "anecdote", year: "1864",
        ja: "ふだんは閉ざされたこの門は、かつて大火のときにだけ開かれた。「焼けて口を開く蛤」にたとえて、蛤御門と呼ばれるようになったという。",
        en: "The gate, usually kept shut, is said to have been opened once during a great fire, like a clam that opens only in the heat, and so it came to be called the Clam Gate, Hamaguri-gomon.",
        src: {ja: "名の由来として伝わる話", en: "A traditional account of the name"} },

      { scene: "hamaguri", kind: "record", year: "1864",
        ja: "形勢を変えたのは、西郷吉之助の率いる薩摩の援軍だった。長州勢は崩れ、門の前で来島又兵衛が討たれる。",
        en: "What turns the day is Satsuma, its troops led by Saigō Kichinosuke. The Chōshū lines break, and their commander Kijima Matabei is killed before the gate.",
        src: {ja: "薩摩藩・長州藩の記録", en: "Records of Satsuma and Chōshū"} },

      { scene: "gosho", kind: "record", year: "1864",
        ja: "長州の若き指導者、久坂玄瑞も、御所近くの鷹司邸で自刃した。",
        en: "Kusaka Genzui, one of Chōshū’s young leaders, kills himself at the Takatsukasa residence near the palace.",
        src: {ja: "長州藩の記録", en: "Chōshū records"} },

      { scene: "kujo", kind: "record", year: "1864",
        ja: "新選組は、敗走する長州勢の追撃に加わった。",
        en: "The Shinsengumi joins the pursuit of the broken Chōshū columns.",
        src: {ja: "隊の記録", en: "The corps’ records"} },

      { scene: "kyoto", kind: "record", year: "1864",
        ja: "戦火は町に広がった。火は二日にわたって燃え続け、数万戸を焼く。世に言う「どんどん焼け」である。",
        en: "The fighting sets the city alight. Fires burn for two days and destroy tens of thousands of homes: the great fire Kyoto remembers as the Donburi-yake.",
        src: {ja: "京の町の記録", en: "Kyoto city records"} },

      { scene: "rokkaku", kind: "record", year: "1864",
        ja: "火が迫るなか、六角獄舎では、脱走を恐れた役人たちが囚人を処刑した。そのなかに、池田屋の発端となった古高俊太郎がいた。",
        en: "As the fire nears the Rokkaku prison, officials, afraid the prisoners will escape, put them to death. Among them is Furutaka Shuntarō, the man whose arrest led to the Ikedaya.",
        src: {ja: "京都町奉行所・京の記録", en: "Records of the Kyoto magistrates and the city"} },

      { scene: "tennozan", kind: "record", year: "1864",
        ja: "追撃は京の南西、天王山で終わった。尊攘派の真木和泉とその同志たちは、降伏を拒んで山上で自刃した。",
        en: "The pursuit ends on Tennōzan, the hill south-west of Kyoto. The loyalist Maki Izumi and his companions kill themselves on the hilltop rather than surrender.",
        src: {ja: "隊の記録、会津藩の記録", en: "Records of the corps and Aizu"} },

      { scene: "tennozan", kind: "context", year: "1864",
        ja: "まだ剣客の集団だった新選組にとって、野で銃と大砲が飛び交う戦は、これが初めてだった。剣の時代の終わりが、ここに見えはじめる。",
        en: "For a corps that is still a band of swordsmen, it is their first battle fought in the open with guns and cannon. The end of the age of the sword is starting to show." },

      { scene: "gosho", kind: "record", year: "1864",
        ja: "御所に弓を引いた長州は、朝敵とされた。幕府は長州を討つための兵を起こす。",
        en: "For firing on the palace, Chōshū is declared an enemy of the court, and the shogunate raises an army to punish it.",
        src: {ja: "朝廷・幕府の記録", en: "Records of the court and the shogunate"} },

      { scene: "kurodani", kind: "context", year: "1864",
        ja: "会津と新選組の立場は、このとき頂点にあった。だが長州征討はやがて、幕府に残された力を食い尽くしていく。",
        en: "Aizu and the Shinsengumi are at the height of their standing. But the campaigns against Chōshū will, in time, consume what strength the shogunate has left." }

    ] },

  { id: "yamanami",
    no:    {ja: "第六章", en: "Chapter 6"},
    title: {ja: "山南敬助", en: "Yamanami"},
    span:  {ja: "1864 – 1865　京都・江戸・大津", en: "1864 – 1865 · Kyoto, Edo and Ōtsu"},
    lede:  {ja: "名声とともに大きく、厳しくなっていく隊。「仏の山南」と呼ばれた総長は置き手紙を残して去り、追っ手の沖田とともに戻って、自らが定めた掟に従って死ぬ。",
            en: "As fame makes the corps larger and harder, its gentle general secretary leaves a note and rides away, comes back with the young man sent after him, and dies by the code he helped write."},
    cover: "mibu",
    end:   {ja: "第六章　山南敬助　了", en: "End of Chapter 6 · Yamanami"},
    beats: [

      { scene: "mibu", kind: "context", year: "1864",
        ja: "池田屋と禁門の変で、新選組は名を上げた。だが名声は、隊の内側も変えていく。",
        en: "The Ikedaya and the Kinmon battle have made the Shinsengumi famous. Fame is changing the corps from the inside, too." },

      { scene: "kurodani", kind: "record", year: "1864",
        ja: "元治元年秋、永倉新八、原田左之助、斎藤一、島田魁ら六人が、近藤の非行を書き連ねた建白書を会津藩に出す。ともに隊を興した仲間を、近藤は家来のように扱いはじめている、と。",
        en: "In the autumn of 1864, six men including Nagakura Shinpachi, Harada Sanosuke, Saitō Hajime and Shimada Kai take a written complaint about Kondō to Aizu. He has begun, they say, to treat the men who founded the corps with him as his retainers.",
        src: {ja: "永倉新八の後年の記述。当然ながら六人を好意的に描く", en: "Nagakura’s own later accounts, which naturally present the six in a good light"} },

      { scene: "kurodani", kind: "record", year: "1864",
        ja: "松平容保みずからが仲裁に立った。双方を呼び、叱り、なだめ、酒を酌み交わさせて和解させる。隊は割れずにすんだ。",
        en: "Matsudaira Katamori himself steps in. He summons both sides, scolds and soothes them, and reconciles them over sake. The corps holds together.",
        src: {ja: "永倉新八の記述", en: "Nagakura’s accounts"} },

      { scene: "kurodani", kind: "record", year: "1864",
        ja: "数週間のうちに、六人の一人、葛山武八郎が別の罪状で切腹を命じられた。",
        en: "Within weeks one of the six, Kuzuyama Takehachirō, is ordered to commit seppuku on another charge.",
        src: {ja: "隊の記録", en: "The corps’ records"} },

      { scene: "kurodani", kind: "context", year: "1864",
        ja: "建白との結びつきを疑わない者は、当時ほとんどいなかった。ただしそれは推測であり、記録で確かめられた事実ではない。",
        en: "Few at the time doubted the connection with the complaint. But it is an inference, not a documented fact." },

      { scene: "fukagawa", kind: "record", year: "1864",
        ja: "人手の足りない隊のため、近藤は秋に江戸へ下り、隊士を募った。先に江戸に入っていた藤堂平助が、深川の伊東甲子太郎の道場へ近藤を案内する。",
        en: "The corps is short of men, and in the autumn Kondō goes east to recruit. Tōdō Heisuke, already in Edo, takes him to the Fukagawa dojo of Itō Kashitarō.",
        src: {ja: "隊の記録、伊東側の記録", en: "Records of the corps and of Itō’s circle"} },

      { scene: "fukagawa", kind: "record", year: "1864",
        ja: "伊東は北辰一刀流の師範で、学者であり歌人でもあり、自らの門人を抱えていた。弟の鈴木三樹三郎、篠原泰之進らを連れて入隊し、近藤は彼を組長より上の地位に据えた。",
        en: "Itō is a Hokushin Ittō-ryū master, a scholar and a poet with followers of his own. He joins with his brother Suzuki Mikisaburō, Shinohara Taishinosuke and others, and Kondō gives him rank above the unit captains.",
        src: {ja: "隊の記録", en: "The corps’ records"} },

      { scene: "fukagawa", kind: "context", year: "1864",
        ja: "隊は人数と品格を得た。同時に、将軍よりも天皇に第一の忠誠を置く人物を、幹部として迎え入れたことにもなる。",
        en: "The corps gains numbers and polish. It also takes in, as an honoured officer, a man whose first loyalty is to the emperor rather than the shogun." },

      { scene: "mibu", kind: "record", year: "1864",
        ja: "山南敬助は、試衛館以来の古参である。北辰一刀流の免許を持ち、学問にも通じた、穏やかな年長者だった。隊では土方と並ぶ副長、のちに総長の地位にあった。",
        en: "Yamanami Keisuke has been with Kondō since the Shieikan: a licensed Hokushin Ittō-ryū swordsman, well read and even-tempered, the steady elder of the household. In the corps he was vice-commander beside Hijikata, and later general secretary.",
        src: {ja: "隊の記録、隊士の回想。生年や仙台の出自は伝承による", en: "The corps’ records; members’ recollections. His birth year and Sendai origins rest on tradition"} },

      { scene: "mibu", kind: "context", year: "1864",
        ja: "だが隊の実権は、副長の土方を通って動いていた。総長という大きな肩書きのもとで、山南は次第に脇へ押しやられていく。",
        en: "But real authority over the corps runs through Hijikata. Under his grand title, Yamanami is steadily pushed aside." },

      { scene: "mibu", kind: "anecdote", year: "1864",
        ja: "大坂で強盗と斬り合って腕を傷め、それからは剣をとることが少なくなったともいう。",
        en: "By one account he was wounded in the arm fighting robbers in Osaka, and fought less after that.",
        src: {ja: "伝承", en: "Tradition"} },

      { scene: "mibu", kind: "context", year: "1864",
        ja: "伊東の入隊は、山南にとって同じ心の持ち主を得ることだった。同じ北辰一刀流、学問の人で、尊王の志を分かち合っていた。",
        en: "In Itō, Yamanami finds a kindred spirit: a man of the same sword school and of learning, who shares his loyalty to the imperial cause." },

      { scene: "honganji", kind: "anecdote", year: "1865",
        ja: "屯所を西本願寺へ移す計画に、山南は反対したとする記録もある。",
        en: "Some accounts say he opposed the plan to move the barracks into Nishi Honganji.",
        src: {ja: "一部の記録", en: "Some accounts"} },

      { scene: "mibu", kind: "record", year: "1865",
        ja: "元治二年二月、山南は置き手紙を残して東へ去った。自らも定めた隊の掟のもとでは脱走であり、死罪である。",
        en: "In the 2nd month of 1865, Yamanami leaves a note and rides east. Under the code he helped establish, it is desertion, and the penalty is death.",
        src: {ja: "隊の記録", en: "The corps’ records"} },

      { scene: "otsu", kind: "record", year: "1865",
        ja: "追っ手に立てられたのは、試衛館でともに育った沖田総司だった。東へ向かう最初の宿場、大津で追いつかれると、山南は抵抗せずに戻った。",
        en: "The man sent after him is Okita Sōji, who grew up beside him at the Shieikan. Overtaken at Ōtsu, the first post town on the road east, Yamanami comes back without resistance.",
        src: {ja: "隊の記録、隊士の回想", en: "The corps’ records; members’ recollections"} },

      { scene: "otsu", kind: "context", year: "1865",
        ja: "逃げ切る力は、十分にあったはずだった。なぜ去り、なぜ戻ったのか。彼自身の言葉は何も残っておらず、新選組の歴史で最も答えの出ない問いになっている。",
        en: "Escape was surely within his power. Why he left, and why he came back, no letter or word of his own survives to say. It remains the most haunting question in the corps’ history." },

      { scene: "maekawa", kind: "record", year: "1865",
        ja: "二月二十三日、山南は壬生の前川家の屯所で切腹した。介錯は沖田。三十一、二歳だった。",
        en: "On the 23rd day of the 2nd month he dies by seppuku at the barracks in the Maekawa house, Mibu, with Okita as his second. He is thirty-one or thirty-two.",
        src: {ja: "隊の記録", en: "The corps’ records"} },

      { scene: "maekawa", kind: "record", year: "1865",
        ja: "伊東甲子太郎は、山南の死を悼む歌を詠んだ。",
        en: "Itō Kashitarō writes poems mourning him.",
        src: {ja: "伊東の歌", en: "Itō’s poems"} },

      { scene: "kouenji", kind: "record", year: "1865",
        ja: "子どもたちと遊んでくれた「仏の山南」を、壬生の人々ははばかることなく悼んだ。光縁寺の墓には、いまも花が絶えない。",
        en: "The people of Mibu, whose children he played with and who called him “Yamanami the Buddha”, mourn him openly. His grave at Kōen-ji still receives flowers.",
        src: {ja: "八木家・前川家の回想、光縁寺の墓所", en: "Recollections of the Yagi and Maekawa families; the grave at Kōen-ji"} },

      { scene: "kouenji", kind: "context", year: "1865",
        ja: "恋人・明里と屯所の格子窓越しに別れる場面はよく知られている。だがこれは、二十世紀の子母澤寛の半ば創作的な聞き書きが初出である。",
        en: "The farewell with his lover Akesato through the barracks’ lattice window is a famous scene. It first appears, though, in Shimozawa Kan’s twentieth-century chronicles, which blended interviews with invention." },

      { scene: "honganji", kind: "record", year: "1865",
        ja: "その春、二百名ほどにふくらんだ隊は壬生を出て、屯所を西本願寺の境内に移した。長州への同情も疑われた、門徒数百万の浄土真宗の本山である。",
        en: "That spring the corps, now some two hundred men, leaves Mibu and moves its barracks into Nishi Honganji: head temple of a sect with millions of followers, and one suspected of sympathy for Chōshū.",
        src: {ja: "隊の記録、西本願寺の記録", en: "Records of the corps and of Nishi Honganji"} },

      { scene: "honganji", kind: "context", year: "1865",
        ja: "移転は兵站の都合であると同時に、寺に対する意図的な威圧でもあった。",
        en: "The move is as much deliberate intimidation of the temple as it is logistics." },

      { scene: "honganji", kind: "anecdote", year: "1865",
        ja: "僧侶たちは境内での調練と砲声に耐えた。隊士の健康のためにと幕医・松本良順が肉食を勧め、境内で豚まで飼われたという。",
        en: "The monks endure drilling and gunfire in their grounds. The shogunate’s physician Matsumoto Ryōjun urged meat for the men’s health, and pigs, it is said, were kept on the temple grounds.",
        src: {ja: "伝え", en: "Later accounts"} },

      { scene: "honganji", kind: "record", year: "1865",
        ja: "隊は完成した形をとる。一番から十番までの組に組長を置き、一番組は沖田、二番組は永倉、三番組は斎藤。伊東は組長より上の参謀となった。",
        en: "The corps takes its mature shape: ten numbered units, each under a captain. Okita has the 1st, Nagakura the 2nd, Saitō the 3rd. Itō is staff officer, above the captains.",
        src: {ja: "隊の編成記録", en: "The corps’ rolls"} },

      { scene: "honganji", kind: "record", year: "1865",
        ja: "掟は幹部にも容赦なく適用された。新しい組長のうち、松原忠司はその秋に、谷三十郎は翌年の春に世を去る。どちらの死も、記録はその事情を語らない。",
        en: "The code spares no one, officers included. Of the new captains, Matsubara Chūji is dead by the autumn and Tani Sanjūrō the following spring, in circumstances the records do not explain.",
        src: {ja: "隊の記録", en: "The corps’ records"} },

      { scene: "honganji", kind: "context", year: "1865",
        ja: "伊東は、隊の中枢に座っている。二年後、彼は山南が見つけられなかった出口を、別のやり方で選ぶことになる。",
        en: "Itō now sits at the heart of the corps. Two years later he will take, in his own way, the exit Yamanami never found." }

    ] },

  { id: "aburanokoji",
    no:    {ja: "第七章", en: "Chapter 7"},
    title: {ja: "油小路", en: "Aburanokōji"},
    span:  {ja: "1866 – 1867　京都", en: "1866 – 1867 · Kyoto"},
    lede:  {ja: "幕府が傾き、隊がついに幕臣となった年。法度の及ばない出口から去った伊東甲子太郎と、冬の油小路で待ち受けた新選組。",
            en: "The year the shogunate began to fall and the corps at last became the shogun’s own men. Itō Kashitarō found a way out the code did not cover, and on a winter night at Aburanokōji the corps was waiting."},
    cover: "aburanokoji",
    end:   {ja: "第七章　油小路　了", en: "End of Chapter 7 · Aburanokōji"},
    beats: [

      { scene: "kyoto", kind: "record", year: "1866",
        ja: "慶応二年、坂本龍馬らの周旋で、宿敵どうしだった薩摩と長州がひそかに手を結ぶ。幕府を倒す組み合わせが、この世に生まれた。",
        en: "In 1866, brokered by Sakamoto Ryōma and others, the bitter rivals Satsuma and Chōshū form a secret alliance. The combination that will bring down the shogunate now exists.",
        src: {ja: "薩長同盟（幕末の政治史）", en: "The Satsuma–Chōshū alliance, in the political history of the period"} },

      { scene: "osakajo", kind: "record", year: "1866",
        ja: "幕府の第二次長州征討は、洋式の銃隊を持つ長州に各地で敗れた。そのさなか、将軍家茂が大坂城で二十歳の若さで没する。後を継いだ慶喜が、最後の将軍となる。",
        en: "The shogunate’s second campaign against Chōshū is beaten on every front by Chōshū’s Western-drilled riflemen. In the middle of it the shogun Iemochi dies at Osaka Castle, aged twenty. Yoshinobu succeeds him as the last shogun.",
        src: {ja: "幕府の記録", en: "Shogunate records"} },

      { scene: "sanjo", kind: "record", year: "1866",
        ja: "その秋、三条大橋の西詰に立てられた長州を朝敵とする制札が、繰り返し引き抜かれる。待ち伏せた隊は、現れた土佐藩士たちと夜の町で斬り合った。",
        en: "That autumn, the notice board at the west end of the Sanjō bridge naming Chōshū an enemy of the court keeps being torn down. The corps lies in wait, and fights the Tosa samurai who come for it in the dark streets.",
        src: {ja: "隊・会津藩の記録。人数は記録によって異なる", en: "Records of the corps and Aizu; the numbers differ between accounts"} },

      { scene: "sanjo", kind: "context", year: "1866",
        ja: "それまで中立だった土佐にも、幕府の治安部隊と公然と斬り合う若者が現れていた。風向きは変わりつつあった。",
        en: "Tosa, which had stood aside, now has young men ready to fight the shogunate’s police in the open. The wind is changing." },

      { scene: "gosho", kind: "record", year: "1867",
        ja: "慶応三年の初め、孝明天皇が急逝する。会津を信頼し、幕府の存続を望んでいた天皇だった。幕府方は、朝廷における庇護者を失う。",
        en: "Early in 1867 Emperor Kōmei dies suddenly. He had trusted Aizu and wanted the shogunate preserved. Its friends have lost their protector at court.",
        src: {ja: "朝廷の記録。公式には天然痘とされる", en: "Court records; officially smallpox"} },

      { scene: "kodaiji", kind: "record", year: "1867",
        ja: "伊東甲子太郎は好機と見た。脱隊は死罪である。そこで伊東は、朝廷とつながる寺の後ろ盾を得て、先帝の御陵を守る「御陵衛士」に自らと同志を任じさせた。",
        en: "Itō Kashitarō sees his moment. Leaving the corps means death, so he finds a door the code does not cover: with the backing of a court-connected temple, he has himself and his followers appointed Goryō Eji, guards of the late emperor’s tomb.",
        src: {ja: "隊の記録、御陵衛士側の記録", en: "Records of the corps and of the Goryō Eji"} },

      { scene: "kodaiji", kind: "record", year: "1867",
        ja: "朝廷の任命を禁じることはできない。近藤と土方は彼らを送り出した。藤堂平助、鈴木三樹三郎、篠原泰之進ら十数名、そして斎藤一。彼らは東山・高台寺の月真院に入り、「高台寺党」と呼ばれた。",
        en: "Kondō and Hijikata cannot forbid an imperial appointment, and let them go. More than a dozen leave, Tōdō Heisuke, Suzuki Mikisaburō and Shinohara Taishinosuke among them, and Saitō Hajime. They settle at Gesshin-in on the hill of Kōdai-ji and are known as the Kōdai-ji party.",
        src: {ja: "隊の記録", en: "The corps’ records"} },

      { scene: "kodaiji", kind: "context", year: "1867",
        ja: "斎藤が初めから送り込まれた間者だったのか、のちに戻ったのかは、記録からは決められない。隊の側は一貫して、彼を自分たちの密偵として語っている。",
        en: "Whether Saitō went over as a planted spy from the start, or changed sides later, the record cannot settle. The corps always presented him as its agent." },

      { scene: "fudodo", kind: "record", year: "1867",
        ja: "六月、隊士一同が幕府直参に取り立てられる。屯所は不動堂村に新築され、費用の多くは隊を追い出したい西本願寺が負担した。",
        en: "In the 6th month the whole corps is taken into the shogun’s direct service. It moves into a lavish new compound at Fudōdō, paid for largely by Nishi Honganji, glad to see it go.",
        src: {ja: "幕府の記録、隊の記録", en: "Records of the shogunate and the corps"} },

      { scene: "fudodo", kind: "context", year: "1867",
        ja: "多摩の農家の子らは、ついに、公式に武士となった。だが彼らを取り立てた徳川の世は、余命いくばくもなかった。",
        en: "The farmers’ sons of Tama are, at last and officially, samurai. The Tokugawa order that made them so has only months to live." },

      { scene: "kurodani", kind: "record", year: "1867",
        ja: "幕臣となるより伊東のあとを追いたいと、会津藩邸に離隊を嘆願した隊士たちがいた。そのうち四人がそこで命を落とす。隊は自刃と届け出たが、その事情には疑問が残る。",
        en: "Some members, who would rather follow Itō than become the shogun’s men, go to the Aizu residence to ask to be released. Four of them die there. The corps reports it as suicide; the circumstances have been questioned ever since.",
        src: {ja: "隊・会津藩の記録", en: "Records of the corps and Aizu"} },

      { scene: "nijo", kind: "record", year: "1867",
        ja: "十月、将軍慶喜は二条城で、統治の権を朝廷に返上する。大政奉還である。",
        en: "In the 10th month, at Nijō Castle, the shogun Yoshinobu formally returns governing authority to the emperor.",
        src: {ja: "幕府・朝廷の記録", en: "Records of the shogunate and the court"} },

      { scene: "nijo", kind: "context", year: "1867",
        ja: "数か月前にようやく幕臣となった新選組にとって、足元の地面そのものが動いた。",
        en: "For a corps that had become the shogun’s men only months before, the ground itself has moved." },

      { scene: "omiya", kind: "record", year: "1867",
        ja: "十一月十五日、坂本龍馬が中岡慎太郎とともに、河原町の近江屋で斬られる。嫌疑はすぐに新選組へ向かった。",
        en: "On the 15th day of the 11th month, Sakamoto Ryōma is cut down with Nakaoka Shintarō at the Ōmiya in Kawaramachi. Suspicion falls at once on the Shinsengumi.",
        src: {ja: "京の記録、土佐藩の記録", en: "Kyoto and Tosa records"} },

      { scene: "omiya", kind: "context", year: "1867",
        ja: "現在では、実行したのは幕府側の別組織・見廻組とみるのがほぼ定説である。だが隊は、当時もその後も、その代償を払い続ける。",
        en: "The evidence now points overwhelmingly to the Mimawarigumi, a rival shogunal police unit. But the corps would pay for the suspicion, then and ever after." },

      { scene: "fudodo", kind: "record", year: "1867",
        ja: "そのころ、斎藤一が隊に戻る。伊東らが近藤の暗殺を企てている、という知らせを携えて。",
        en: "Around then Saitō Hajime returns to the corps, bringing word that Itō’s group means to assassinate Kondō.",
        src: {ja: "隊の側の記録", en: "The corps’ own accounts"} },

      { scene: "aburanokoji", kind: "record", year: "1867",
        ja: "十一月十八日、近藤は伊東を酒席に招いてもてなした。夜更けの帰り道、伊東は油小路で待ち伏せていた隊士たちに斬られる。",
        en: "On the 18th day of the 11th month, Kondō invites Itō to drink with him. On his way home late that night, Itō is cut down by corps members waiting at Aburanokōji.",
        src: {ja: "隊の記録、御陵衛士側の記録", en: "Records of the corps and of the Goryō Eji"} },

      { scene: "aburanokoji", kind: "anecdote", year: "1867", who: "ito",
        ja: "奸賊ばら。",
        en: "Traitorous dogs!",
        src: {ja: "斬られた伊東が叫んだと伝わる言葉", en: "Traditionally given as Itō’s cry as he was struck"} },

      { scene: "aburanokoji", kind: "record", year: "1867",
        ja: "伊東の遺体は、そのまま冬の路上に置かれた。罠である。同志の亡骸を引き取りに来た御陵衛士七名を、四十名ほどの隊士が待ち受けていた。",
        en: "Itō’s body is left lying in the winter street as bait. When seven of the Goryō Eji come to take it home, some forty of the corps are waiting.",
        src: {ja: "隊・御陵衛士側の記録", en: "Records of the corps and of the Goryō Eji"} },

      { scene: "aburanokoji", kind: "record", year: "1867",
        ja: "衛士側は三名が討たれた。そのなかに、試衛館以来の同志、藤堂平助がいた。",
        en: "Three of the Goryō Eji are killed. One of them is Tōdō Heisuke, a comrade from the Shieikan days.",
        src: {ja: "隊の記録", en: "The corps’ records"} },

      { scene: "aburanokoji", kind: "anecdote", year: "1867",
        ja: "近藤は藤堂だけは助けたいと言い、永倉は彼を逃がそうと道を開けた。だが事情を知らない隊士が、藤堂に斬りかかったという。",
        en: "Kondō, the story goes, had asked that Tōdō be spared, and Nagakura stood aside to let him go. But a member who did not know struck him down.",
        src: {ja: "永倉新八の回想", en: "Nagakura Shinpachi’s memoirs"} },

      { scene: "aburanokoji", kind: "record", year: "1867",
        ja: "生き延びた衛士たちの憎しみは、最後まで隊を追う。数週間後に近藤を狙撃するのも、のちに板橋で近藤の正体を告げるのも、この夜の生き残りである。",
        en: "The survivors’ hatred will follow the corps to the end. Weeks later one of them fires the shot that wounds Kondō, and later another will name him to his captors at Itabashi.",
        src: {ja: "御陵衛士側の記録、新政府軍の記録", en: "Records of the Goryō Eji and the new government’s army"} },

      { scene: "gosho", kind: "context", year: "1867",
        ja: "その翌月、京は王政復古を宣言する。幕府そのものが、廃された。",
        en: "The next month Kyoto proclaims the restoration of imperial rule. The shogunate itself is abolished." }

    ] },

  { id: "tobafushimi",
    no:    {ja: "第八章", en: "Chapter 8"},
    title: {ja: "鳥羽・伏見", en: "Toba–Fushimi"},
    span:  {ja: "1867 – 1868　京都・伏見から江戸へ", en: "1867 – 1868 · Kyoto and Fushimi to Edo"},
    lede:  {ja: "幕府が廃され、戦がはじまる。銃と砲の前に、剣の隊は何ができたのか。そして、それを誰より早く悟ったのは誰だったのか。",
            en: "The shogunate is abolished and the war begins. What could a corps of swordsmen do against rifles and artillery, and who was first to see the answer?"},
    cover: "fushimi",
    end:   {ja: "第八章　鳥羽・伏見　了", en: "End of Chapter 8 · Toba–Fushimi"},
    beats: [

      { scene: "tenmaya", kind: "record", year: "1867",
        ja: "油小路から半月ほどのちの十二月七日、隊は、龍馬暗殺の黒幕と疑われた紀州藩士・三浦休太郎を護衛していた。宿は油小路の天満屋。斎藤一もそこにいた。",
        en: "On the 7th day of the 12th month, about two weeks after Aburanokōji, the corps is guarding Miura Kyūtarō, a Kii official suspected of being behind Ryōma’s murder. He is lodged at the Tenmaya inn, and Saitō Hajime is among the guards.",
        src: {ja: "隊の記録、海援隊・陸援隊側の記録", en: "Records of the corps and of Tosa’s Kaientai and Rikuentai"} },

      { scene: "tenmaya", kind: "record", year: "1867",
        ja: "二階で酒を飲んでいたところへ、龍馬の同志ら十数名が斬り込んだ。狭い座敷での斬り合いで、双方に死傷者が出る。三浦は手傷を負いながらも生き延びた。",
        en: "While they drink upstairs, some sixteen of Ryōma’s comrades burst in. In the fight in the cramped rooms both sides have men killed and wounded. Miura is hurt, but survives.",
        src: {ja: "同上。人数や隊の護衛を誰が率いたかは記録によって異なる", en: "As above; the numbers, and who led the guard, differ between accounts"} },

      { scene: "tenmaya", kind: "context", year: "1867",
        ja: "伊東の一党、土佐の者たち。新選組はいまや京で、四方に敵を抱えていた。",
        en: "Itō’s men, the men of Tosa: by now the Shinsengumi has enemies in Kyoto on every side." },

      { scene: "gosho", kind: "record", year: "1867",
        ja: "十二月九日、薩摩を中心とする兵が御所の門を固め、王政復古が宣言される。幕府は廃され、慶喜には官位と領地の返上が命じられた。",
        en: "On the 9th day of the 12th month, troops led by Satsuma take the palace gates and the restoration of imperial rule is proclaimed. The shogunate is abolished, and Yoshinobu is ordered to give up his rank and his lands.",
        src: {ja: "朝廷の記録", en: "Court records"} },

      { scene: "gosho", kind: "context", year: "1867",
        ja: "大政奉還は、慶喜が新しい政治の中心に残るための一手でもあった。王政復古は、その抜け道をふさぐクーデターだった。慶喜は兵を率いて大坂城へ退き、緊張が高まっていく。",
        en: "Handing back power had also been Yoshinobu’s way of staying at the centre of whatever came next. The restoration was a coup to close that door. He withdraws to Osaka Castle with his army, and tension builds." },

      { scene: "fushimi", kind: "record", year: "1867",
        ja: "新選組は伏見奉行所に入った。京と大坂を結ぶ要の地である。",
        en: "The corps moves into the Fushimi magistrate’s office, at the key point on the road between Kyoto and Osaka.",
        src: {ja: "隊の記録", en: "The corps’ records"} },

      { scene: "sumizome", kind: "record", year: "1867",
        ja: "十二月十八日、京での軍議から馬で戻る近藤を、墨染の道沿いの家から銃弾が襲う。弾は右肩を砕いた。近藤は馬上にとどまり、伏見まで駆け戻った。",
        en: "On the 18th day of the 12th month, Kondō is riding back from a council in Kyoto when a musket fires from a house by the road at Sumizome. The ball shatters his right shoulder. He stays in the saddle and gallops back to Fushimi.",
        src: {ja: "隊の記録", en: "The corps’ records"} },

      { scene: "sumizome", kind: "record", year: "1867",
        ja: "撃ったのは御陵衛士の生き残りだった。油小路の仇討ちである。誰が引き金を引いたかは、彼ら自身の証言でも一致しない。",
        en: "The gunmen are survivors of the Goryō Eji, taking revenge for Aburanokōji. Who actually fired is uncertain: their own accounts name different men.",
        src: {ja: "御陵衛士側の証言", en: "The Goryō Eji survivors’ own accounts"} },

      { scene: "osakajo", kind: "record", year: "1867",
        ja: "近藤は治療のため、病の重い沖田総司とともに大坂へ送られ、幕府の医師・松本良順の手当てを受けた。傷は完全には癒えず、近藤は二度と剣を思うように握ることはなかった。",
        en: "Kondō is sent to Osaka for treatment with Okita Sōji, now gravely ill, and put in the care of the shogunate’s physician Matsumoto Ryōjun. The wound never fully heals. Kondō will not hold a sword properly again.",
        src: {ja: "松本良順の記録、隊の記録", en: "Matsumoto Ryōjun’s and the corps’ records"} },

      { scene: "fushimi", kind: "context", year: "1868",
        ja: "隊を率いて戦場に出るのは、土方歳三となった。",
        en: "It is Hijikata Toshizō who will lead the corps into battle." },

      { scene: "fushimi", kind: "record", year: "1868",
        ja: "慶応四年正月三日、大坂から京へ進む幕府軍約一万五千と、薩長軍約五千が、鳥羽と伏見で衝突する。戊辰戦争のはじまりである。",
        en: "On the 3rd day of the 1st month of 1868, a shogunal army of some 15,000 marching from Osaka to Kyoto meets about 5,000 Satsuma and Chōshū troops at Toba and Fushimi. The Boshin War has begun.",
        src: {ja: "両軍の記録", en: "Records of both armies"} },

      { scene: "fushimi", kind: "record", year: "1868",
        ja: "新選組は奉行所に拠って戦った。だが高台に据えられた薩摩の砲が奉行所を炎上させ、隊は燃える市街へ押し出される。刀で銃火に挑んでも、損害が積み上がるばかりだった。",
        en: "The corps fights from the magistrate’s office, until Satsuma guns on the high ground above set it on fire and drive them into the burning streets. Charging rifles with swords achieves little but casualties.",
        src: {ja: "隊の記録、永倉新八の回想", en: "The corps’ records; Nagakura Shinpachi’s memoirs"} },

      { scene: "fushimi", kind: "context", year: "1868",
        ja: "数の差は意味をなさなかった。訓練された銃兵と、間をおかずに撃てる砲。数年前、長州が欧米の艦隊から学んだ戦い方が、ここで幕府軍に向けられていた。",
        en: "Numbers meant nothing. Drilled riflemen and guns that fired without pause: the way of war Chōshū had learned from Western fleets a few years earlier was now turned on the shogun’s army." },

      { scene: "fushimi", kind: "record", year: "1868",
        ja: "戦いの三日目、薩長の陣に錦の御旗がひるがえる。天皇の軍の旗である。幕府軍は、公式に「賊軍」となった。",
        en: "On the third day, the imperial brocade banner is raised over the Satsuma–Chōshū lines. The shogun’s army is now, officially, an army of rebels.",
        src: {ja: "両軍の記録", en: "Records of both armies"} },

      { scene: "fushimi", kind: "record", year: "1868",
        ja: "淀の千両松で、退く幕府軍は堤に踏みとどまろうとした。その戦列のなかで、試衛館以来の最年長、井上源三郎が銃弾に斃れる。",
        en: "At Senryōmatsu by Yodo, the retreating army tries to hold the river embankment. In that line, Inoue Genzaburō, the eldest of the Shieikan men, is shot and killed.",
        src: {ja: "隊の記録", en: "The corps’ records"} },

      { scene: "fushimi", kind: "anecdote", year: "1868",
        ja: "隊にいた十二歳ほどの甥・泰助は、叔父の首と刀を家に持ち帰ろうとした。だが敗走のなかでその重さに耐えられず、道ばたの寺の近くに埋めたという。その場所はいまも見つかっていない。",
        en: "His nephew Taisuke, a boy of about twelve serving with the corps, tried to carry his uncle’s head and sword home to the family. In the rout the weight was too much, and he buried them near a temple by the road. The place has never been found.",
        src: {ja: "井上家の伝え", en: "The Inoue family’s account"} },

      { scene: "fushimi", kind: "record", year: "1868",
        ja: "淀藩は敗軍に城門を閉ざし、山崎では、それまで味方だった津藩の砲台が川向こうから撃ちかけてきた。",
        en: "The Yodo domain shuts its castle gates on the beaten army, and at Yamazaki the guns of Tsu, until then on the shogun’s side, open fire on it from across the river.",
        src: {ja: "両軍の記録", en: "Records of both armies"} },

      { scene: "osakajo", kind: "record", year: "1868",
        ja: "大坂城に退いた兵たちは、やがて知る。将軍慶喜が夜陰にまぎれ、軍艦で江戸へ去ったことを。軍は、崩れた。",
        en: "Back at Osaka Castle, the soldiers learn that Yoshinobu has slipped away by night on a warship to Edo. The army falls apart.",
        src: {ja: "幕府の記録", en: "Shogunate records"} },

      { scene: "osakajo", kind: "record", year: "1868",
        ja: "新選組は負傷者・病人とともに幕府の船で東へ送られた。退却中に傷を負った山崎烝は、航海の途中で息を引き取る。",
        en: "The corps is shipped east on the shogunate’s vessels with its wounded and sick. Yamazaki Susumu, wounded in the retreat, dies on the voyage.",
        src: {ja: "隊の記録。乗船や山崎の死の様子は記録によって異なる", en: "The corps’ records; who sailed on which ship, and how Yamazaki died, differ between accounts"} },

      { scene: "shinagawa", kind: "record", year: "1868",
        ja: "生き残った者たちは江戸の南の玄関口・品川に上陸した。五年前に江戸を発った仲間のうち、井上は戦死し、近藤は肩を砕かれ、沖田は労咳で死の床にあった。",
        en: "The survivors land at Shinagawa, the southern gate of Edo. Of the friends who left Edo five years before, Inoue is dead, Kondō’s shoulder is shattered, and Okita is dying of tuberculosis.",
        src: {ja: "隊の記録", en: "The corps’ records"} },

      { scene: "shinagawa", kind: "record", year: "1868",
        ja: "土方はほどなく洋装に改め、髪を短く切った。",
        en: "Soon afterwards Hijikata changes into Western clothes and cuts his hair short.",
        src: {ja: "同時代の記録、写真", en: "Contemporary records and photographs"} },

      { scene: "shinagawa", kind: "record", year: "1868", who: "hijikata",
        ja: "戎器は砲に非ざれば不可。僕、剣を佩き槍を執り、一も用うるところなし。",
        en: "From now on, weapons must be guns. I carried a sword and a spear, and they were of no use at all.",
        src: {ja: "漢学者・依田学海の記録に残る土方の言葉", en: "Hijikata’s words as recorded by the scholar Yoda Gakkai"} },

      { scene: "shinagawa", kind: "context", year: "1868",
        ja: "剣で名を上げた隊の副長が、自分の口で剣の時代の終わりを語った。土方はここから、近代の兵を率いる指揮官へと変わっていく。",
        en: "The vice-commander of a corps that had made its name with the sword said, in his own words, that the age of the sword was over. From here Hijikata begins to turn into a commander of modern troops." }

    ] },

  { id: "nagareyama",
    no:    {ja: "第九章", en: "Chapter 9"},
    title: {ja: "甲州・流山・板橋", en: "Kōshū, Nagareyama, Itabashi"},
    span:  {ja: "1868　江戸とその周辺", en: "1868 · Edo and around it"},
    lede:  {ja: "江戸に戻った隊は、甲州で敗れ、ばらばらになっていく。流山の別れ、板橋の刑場、そして千駄ヶ谷の離れ。試衛館の仲間たちの、それぞれの最後。",
            en: "Back in Edo, the corps is beaten in Kai and begins to come apart. The parting at Nagareyama, the execution ground at Itabashi, a cottage in Sendagaya: how the friends from the Shieikan came to their ends."},
    cover: "itabashi",
    end:   {ja: "第九章　甲州・流山・板橋　了", en: "End of Chapter 9 · Kōshū, Nagareyama, Itabashi"},
    beats: [

      { scene: "edocastle", kind: "record", year: "1868",
        ja: "江戸に戻った隊は「甲陽鎮撫隊」と名を改め、新政府軍より先に甲府城を押さえるよう命じられる。近藤と土方も、変名を名乗るようになった。",
        en: "Back in Edo, the corps is renamed the Kōyō Chinbutai, the Kai Pacification Force, and ordered to secure Kōfu Castle before the new government’s army reaches it. Kondō and Hijikata take on assumed names.",
        src: {ja: "幕府の記録、隊の記録", en: "Records of the shogunate and the corps"} },

      { scene: "edocastle", kind: "context", year: "1868",
        ja: "江戸では、徳川家を守るため新政府との交渉が進んでいた。戦いをやめない者たちを江戸から遠ざけることも、その一部だったとみられている。",
        en: "In Edo, negotiations with the new government to save the Tokugawa house are under way. Sending the men who would not stop fighting away from the city is widely seen as part of that." },

      { scene: "hino", kind: "record", year: "1868",
        ja: "甲州街道を西へ進む隊は、故郷・多摩を通る。日野では佐藤彦五郎が農兵を率いて加わり、道中は歓迎と祝宴が続いた。",
        en: "Marching west on the Kōshū road, the corps passes through its home country of Tama. At Hino, Satō Hikogorō joins with a band of armed farmers, and the way is one welcome and feast after another.",
        src: {ja: "佐藤家の記録、隊の記録", en: "The Satō family’s and the corps’ records"} },

      { scene: "hino", kind: "context", year: "1868",
        ja: "五年前、無名の浪士として発った男たちが、幕臣となって帰ってきた。だがその数日の遅れのうちに、新政府軍の先鋒が甲府に入る。",
        en: "Five years before, they had left as nameless rōnin; now they came home as the shogun’s men. But in those few days’ delay, the government’s vanguard reached Kōfu first." },

      { scene: "katsunuma", kind: "record", year: "1868",
        ja: "三月六日、勝沼。数門の砲を持つだけの約百二十名が、近代的な砲を備えた約十倍の新政府軍と向き合う。戦線は二時間ほどで崩れた。",
        en: "On the 6th day of the 3rd month, at Katsunuma, some 120 men with a few guns face a government force about ten times their size, with modern artillery. Their line breaks in about two hours.",
        src: {ja: "両軍の記録。人数は記録によって異なる", en: "Records of both armies; the numbers differ between accounts"} },

      { scene: "edocastle", kind: "record", year: "1868",
        ja: "江戸に戻った近藤は、生き残りに、これからは自分の家臣として従うよう求めた。永倉新八と原田左之助はこれを拒み、隊を去る。",
        en: "Back in Edo, Kondō asks the survivors to follow him from now on as his retainers. Nagakura Shinpachi and Harada Sanosuke refuse, and leave.",
        src: {ja: "永倉新八の回想", en: "Nagakura Shinpachi’s memoirs"} },

      { scene: "edocastle", kind: "context", year: "1868",
        ja: "二人は近藤の同志として加わったのであって、家来になったつもりはなかった。試衛館の輪は、ここで初めて内側から割れた。",
        en: "They had joined as Kondō’s comrades, never as his vassals. For the first time, the Shieikan circle broke from within." },

      { scene: "nagareyama", kind: "record", year: "1868",
        ja: "近藤と土方は、新兵を集めて下総・流山で隊を立て直そうとする。四月三日、その陣を新政府軍が急襲し、包囲した。",
        en: "Kondō and Hijikata set out to rebuild with new recruits at Nagareyama in Shimōsa. On the 3rd day of the 4th month, a government force surprises their camp and surrounds it.",
        src: {ja: "両軍の記録", en: "Records of both armies"} },

      { scene: "nagareyama", kind: "record", year: "1868",
        ja: "戦えば全滅である。近藤は大久保大和と名乗ったまま、ただの鎮撫の隊長として、ひとり敵陣に出頭した。",
        en: "To fight would be to be wiped out. Kondō, still using the name Ōkubo Yamato, presents himself at the enemy camp alone, as no more than an officer keeping the peace.",
        src: {ja: "両軍の記録", en: "Records of both armies"} },

      { scene: "nagareyama", kind: "anecdote", year: "1868",
        ja: "流山での二人の別れは、いつもの出来事のように何気なかったと伝わる。土方と近藤が、再び会うことはなかった。",
        en: "Their parting at Nagareyama, it is said, was as casual as any other day. Hijikata and Kondō never saw each other again.",
        src: {ja: "後年の伝え", en: "Later accounts"} },

      { scene: "edocastle", kind: "record", year: "1868",
        ja: "土方は江戸へ急ぎ、旧幕府の首脳への嘆願を含め、あらゆる伝手を動かして近藤の助命に奔走した。",
        en: "Hijikata hurries back to Edo and uses every connection he has, including an appeal through the old shogunal leadership, to save Kondō’s life.",
        src: {ja: "勝海舟の日記ほか", en: "Katsu Kaishū’s diary and other records"} },

      { scene: "edocastle", kind: "record", year: "1868",
        ja: "四月十一日、勝海舟と西郷隆盛の交渉により、江戸城は一戦も交えず新政府に明け渡された。慶喜は謹慎に入る。",
        en: "On the 11th day of the 4th month, after talks between Katsu Kaishū and Saigō Takamori, Edo Castle is handed over to the new government without a fight. Yoshinobu goes into confinement.",
        src: {ja: "幕府・新政府の記録", en: "Records of the shogunate and the new government"} },

      { scene: "edocastle", kind: "context", year: "1868",
        ja: "百万の町は戦火を免れた。だが主君が矛を収めた以上、なお戦う者は、もう政府の兵ではない。土方はこのあと、大鳥圭介の旧幕府軍に加わって北へ向かう。",
        en: "A city of a million was spared. But with their lord laying down his arms, anyone still fighting was no longer a government’s soldier. Hijikata now joins Ōtori Keisuke’s old-shogunate army and heads north." },

      { scene: "itabashi", kind: "record", year: "1868",
        ja: "近藤は中山道最初の宿場・板橋の新政府軍本営へ送られた。そこには、かつて伊東とともに隊を去った加納道之助がいて、近藤の顔を知っていた。",
        en: "Kondō is taken to the government army’s headquarters at Itabashi, the first post town on the Nakasendō. There, among the officers, is Kanō Michinosuke, who had left the corps with Itō, and who knows his face.",
        src: {ja: "新政府軍の記録", en: "The new government army’s records"} },

      { scene: "itabashi", kind: "context", year: "1868",
        ja: "油小路の夜の生き残りが、ここで隊に追いついた。",
        en: "A survivor of the night at Aburanokōji had caught up with the corps." },

      { scene: "itabashi", kind: "record", year: "1868",
        ja: "隊に仲間を殺されたと考える土佐や薩摩の者たちは、死罪を強く求めた。龍馬殺しの嫌疑も、そこに含まれていた。",
        en: "Men of Tosa and Satsuma, who blamed the corps for the deaths of their comrades, Ryōma’s among them, pressed hard for his death.",
        src: {ja: "新政府軍の記録", en: "The new government army’s records"} },

      { scene: "itabashi", kind: "record", year: "1868",
        ja: "四月二十五日、近藤勇は板橋の刑場で斬首された。武士の作法である切腹は許されず、罪人として。満三十三歳（数えで三十五）だった。",
        en: "On the 25th day of the 4th month, Kondō Isami is beheaded at the Itabashi execution ground. He is denied seppuku, a samurai’s death, and dies as a common criminal. He is thirty-three.",
        src: {ja: "新政府軍の記録", en: "The new government army’s records"} },

      { scene: "itabashi", kind: "anecdote", year: "1868", who: "kondo", poem: true,
        ja: "孤軍援絶えて俘囚と作る<br>君恩を顧念して涙更に流る<br>一片の丹衷能く節に殉ず<br>睢陽千古是れ吾が儔",
        en: "A lone force, cut off, I am made prisoner;<br>thinking of my lord’s favour, my tears flow on.<br>A loyal heart can die for its duty —<br>the defenders of Suiyang are my kind.",
        src: {ja: "近藤の辞世として伝わる漢詩。後年の記録に拠る", en: "The poem handed down as Kondō’s farewell; from later sources"} },

      { scene: "sanjo", kind: "record", year: "1868",
        ja: "首は京へ送られ、三条河原に晒された。五年前、隊が夜の町を見回った、その川のほとりである。",
        en: "His head is sent to Kyoto and displayed on the bank of the Kamo at Sanjō, by the river the corps had patrolled on so many nights.",
        src: {ja: "京の記録", en: "Kyoto records"} },

      { scene: "ueno", kind: "record", year: "1868",
        ja: "五月十五日、開城に従わず上野の山に立てこもった彰義隊が、ただ一日で壊滅する。不忍池越しに撃ち込まれた新式の砲が、その陣地を砕いた。",
        en: "On the 15th day of the 5th month, the Shōgitai, loyalists holding Ueno hill in defiance of the surrender, are destroyed in a single day. Modern guns firing across the Shinobazu pond smash their positions.",
        src: {ja: "新政府軍の記録", en: "The new government army’s records"} },

      { scene: "ueno", kind: "record", year: "1868",
        ja: "そのなかに、永倉とともに北へ向かう途中で引き返し、この籠城に加わった原田左之助がいた。原田は傷を負い、数日後に死んだ。",
        en: "Among them is Harada Sanosuke, who had turned back from the march north with Nagakura to join the garrison. He is wounded, and dies a few days later.",
        src: {ja: "永倉新八の回想ほか。最期の様子には異説がある", en: "Nagakura Shinpachi’s memoirs and others; accounts of his death differ"} },

      { scene: "sendagaya", kind: "record", year: "1868",
        ja: "千駄ヶ谷の植木屋の離れでは、松本良順の手配でかくまわれた沖田総司が、労咳の床にあった。周りの者は、近藤の死を彼に伝えなかった。",
        en: "In a gardener’s cottage at Sendagaya, hidden there by arrangement of Matsumoto Ryōjun, Okita Sōji lies ill with tuberculosis. The people tending him do not tell him that Kondō is dead.",
        src: {ja: "松本良順の記録、沖田家の伝え", en: "Matsumoto Ryōjun’s records; the Okita family’s account"} },

      { scene: "sendagaya", kind: "anecdote", year: "1868",
        ja: "最期の日々、庭に現れる黒猫を斬ろうとして、どうしても斬れなかったという。そして死の間際まで、「先生はどうしておられる」と尋ねていたと伝わる。",
        en: "In his last days, it is said, he tried again and again to cut down a black cat that came into the garden, and could not. And to the end he kept asking how his teacher was.",
        src: {ja: "後年の回想", en: "Later reminiscence"} },

      { scene: "sendagaya", kind: "record", year: "1868",
        ja: "五月三十日、沖田総司は死んだ。二十代半ばだった。近藤の死から、ひと月あまりのちのことである。",
        en: "On the 30th day of the 5th month, Okita Sōji dies, in his mid-twenties, a little over a month after Kondō.",
        src: {ja: "沖田家の記録", en: "The Okita family’s records"} },

      { scene: "edocastle", kind: "context", year: "1868",
        ja: "試衛館から京へ上った仲間のうち、新選組の名のもとで戦い続けるのは土方と斎藤だけになった。二人はいま、北にいる。",
        en: "Of the friends who went up to Kyoto from the Shieikan, only Hijikata and Saitō still fight under the Shinsengumi’s name. Both are now in the north." }

    ] },

  { id: "aizu",
    no:    {ja: "第十章", en: "Chapter 10"},
    title: {ja: "宇都宮・会津", en: "Utsunomiya and Aizu"},
    span:  {ja: "1868　北関東から奥州へ", en: "1868 · North Kantō to the north"},
    lede:  {ja: "土方は近代の兵を率いる指揮官となり、斎藤は隊を預かる。五年前に彼らを拾い上げた会津が、戦の標的となった。そして二人は、正反対の道を選ぶ。",
            en: "Hijikata becomes a commander of modern troops; Saitō takes charge of the corps. Aizu, which had taken them in five years before, becomes the war’s target, and the two men choose opposite paths."},
    cover: "aizu",
    end:   {ja: "第十章　宇都宮・会津　了", en: "End of Chapter 10 · Utsunomiya and Aizu"},
    beats: [

      { scene: "utsunomiya", kind: "record", year: "1868",
        ja: "江戸開城を認めない数千の旧幕府兵が江戸を抜け出し、洋式歩兵を率いた大鳥圭介のもとに集まった。流山から数日後、土方はわずかな隊士を連れてこれに加わり、先鋒を任される。",
        en: "Thousands of shogunal soldiers who will not accept the surrender of Edo slip out of the city and gather under Ōtori Keisuke, who had commanded the shogunate’s Western-style infantry. A few days after Nagareyama, Hijikata joins them with a handful of the corps, and is given the vanguard.",
        src: {ja: "大鳥圭介の記録", en: "Ōtori Keisuke’s account"} },

      { scene: "utsunomiya", kind: "record", year: "1868",
        ja: "四月十九日、土方の隊は宇都宮城を攻め落とす。石田村の薬の行商人だった男が、職業軍人たちを率いていた。",
        en: "On the 19th day of the 4th month, Hijikata’s column storms and takes Utsunomiya Castle. The medicine peddler from Ishida village is leading professional soldiers.",
        src: {ja: "両軍の記録", en: "Records of both armies"} },

      { scene: "utsunomiya", kind: "anecdote", year: "1868",
        ja: "逃げ出した味方の兵を、土方はその場で斬り捨てて戦線を支えた。その夜はひそかにその兵のために涙し、のちに供養料を出したという。",
        en: "When one of his own men broke and ran, Hijikata cut him down on the spot to hold the line. That night, it is said, he wept for him in private, and later paid for his memorial.",
        src: {ja: "後年の伝え", en: "Later accounts"} },

      { scene: "utsunomiya", kind: "record", year: "1868",
        ja: "数日後、新政府軍が城を奪い返す。その戦いで土方は足に銃弾を受け、会津へ送られて傷を癒すことになった。",
        en: "Days later the government army retakes the castle. Hijikata is shot in the foot in the fighting and carried north to Aizu to recover.",
        src: {ja: "両軍の記録", en: "Records of both armies"} },

      { scene: "aizu", kind: "context", year: "1868",
        ja: "会津藩は、京で新選組を預かった藩である。新政府にとって、京で長州を討った会津は、真っ先に罰すべき「朝敵」だった。",
        en: "Aizu was the domain that had taken the Shinsengumi under its wing in Kyoto. To the new government, the Aizu that had fought Chōshū in Kyoto was the first enemy of the court to be punished." },

      { scene: "aizu", kind: "anecdote", year: "1868",
        ja: "療養中の土方は、会津の天寧寺に近藤の墓を建てたと伝わる。",
        en: "While he recovered, Hijikata is said to have raised a grave for Kondō at Tennei-ji in Aizu.",
        src: {ja: "会津の伝え", en: "Aizu tradition"} },

      { scene: "shirakawa", kind: "record", year: "1868",
        ja: "奥州街道に城を構える白河は、関東と奥州を隔てる門である。数十名にまで減った新選組は、山口次郎と名を変えた斎藤一の指揮で、ここに布陣した。",
        en: "Shirakawa, its castle on the Ōshū highway, is the gateway between the Kantō and the north. The Shinsengumi, now a few dozen men, takes its place here under Saitō Hajime, who goes by the name Yamaguchi Jirō.",
        src: {ja: "隊の記録、会津藩の記録", en: "Records of the corps and Aizu"} },

      { scene: "shirakawa", kind: "record", year: "1868",
        ja: "守る側は、はじめの攻撃を退けた。だが閏四月の末、数で劣りながら装備でまさる新政府軍が、一日で城を奪う。奪還の試みは、大きな犠牲を出してことごとく失敗した。",
        en: "The defenders throw back the first assault. But late in the leap 4th month, a smaller, better-armed government force takes the castle in a single day, and every attempt to win it back fails with heavy losses.",
        src: {ja: "両軍の記録", en: "Records of both armies"} },

      { scene: "shirakawa", kind: "context", year: "1868",
        ja: "奥州の表門が開かれた。夏のあいだに新政府軍は北へ進み、隊は追われるように会津へ退いていく。",
        en: "The north’s front door was open. Through the summer the government armies pushed on, and the corps fell back towards Aizu with them at its heels." },

      { scene: "aizu", kind: "record", year: "1868",
        ja: "八月二十一日、新政府軍は会津の東の守り、母成峠を破る。傷の癒えた土方も、斎藤の隊もそこで戦った。二日後、敵は若松の城下に迫った。",
        en: "On the 21st day of the 8th month, the government army breaks through Bonari Pass, Aizu’s eastern defence. Hijikata, now recovered, and Saitō’s men both fight there. Two days later the enemy is at the gates of Wakamatsu.",
        src: {ja: "両軍の記録", en: "Records of both armies"} },

      { scene: "aizu", kind: "context", year: "1868",
        ja: "城下では、家族が自ら命を絶ち、少年たちの白虎隊が山の上で自刃した。会津の籠城は、一か月にわたる。",
        en: "In the castle town, whole families took their own lives, and boys of the Byakkotai died by their own hands on a hillside. The siege of Aizu would last a month." },

      { scene: "aizu", kind: "record", year: "1868",
        ja: "土方は援軍を求めて北の諸藩へ向かい、旧幕府軍とともに会津を離れることになる。だが斎藤はこれを拒み、会津に残った。",
        en: "Hijikata goes north to seek help from the other domains, and will leave Aizu with the old-shogunate army. Saitō refuses, and stays in Aizu.",
        src: {ja: "隊の記録、会津藩の記録", en: "Records of the corps and Aizu"} },

      { scene: "aizu", kind: "anecdote", year: "1868",
        ja: "危急の会津を見捨てるのは義に背く。斎藤はそう言ったと伝わる。十数名が彼とともに残った。",
        en: "To abandon Aizu in its hour of need, Saitō is said to have answered, would betray everything they had stood for. About a dozen men stayed with him.",
        src: {ja: "後年の伝え", en: "Later accounts"} },

      { scene: "aizu", kind: "context", year: "1868",
        ja: "隊で最も苛烈な二人が、正反対の義務を選んだ。土方と斎藤が、再び会うことはなかった。",
        en: "The corps’ two hardest men chose opposite duties. Hijikata and Saitō never met again." },

      { scene: "aizu", kind: "record", year: "1868",
        ja: "九月、若松郊外の如来堂に陣を構えた斎藤らを、新政府軍が襲う。小部隊は四散し、斎藤らは全員討ち死にしたという報が広まった。",
        en: "In the 9th month, a government force falls on Saitō’s band at the little temple of Nyoraidō outside Wakamatsu. They are scattered, and word spreads that Saitō and his men are all dead.",
        src: {ja: "会津藩の記録。誰が戦い何人が死んだかは確かではない", en: "Aizu records; who fought there and how many died is uncertain"} },

      { scene: "aizu", kind: "record", year: "1868",
        ja: "だが斎藤は生きていた。九月二十二日、会津は降伏する。斎藤は藩士たちとともに謹慎の身となり、のちに会津の人々とともに本州北端の斗南へ移った。",
        en: "But Saitō is alive. On the 22nd day of the 9th month Aizu surrenders. He goes into captivity with the domain’s men, and later goes with the Aizu people to Tonami, at the northern tip of Honshu.",
        src: {ja: "会津藩の記録", en: "Aizu records"} },

      { scene: "sendai", kind: "record", year: "1868",
        ja: "そのころ仙台では、奥羽の諸藩の同盟が藩ごとに崩れていた。土方はここで、新政府への引き渡しを拒んだ榎本武揚の旧幕府艦隊と合流する。",
        en: "Meanwhile at Sendai, the alliance of the northern domains is collapsing one domain at a time. Here Hijikata joins the shogunal fleet of Enomoto Takeaki, which had refused to be handed over to the new government.",
        src: {ja: "旧幕府艦隊の記録", en: "Records of the old shogunal fleet"} },

      { scene: "sendai", kind: "record", year: "1868",
        ja: "軍艦八隻、将兵およそ二千。そのなかにはフランスの軍事顧問たちもいた。中隊ほどになった新選組も、この艦隊に乗り込んだ。",
        en: "Eight warships and some two thousand men, French military advisers among them. The Shinsengumi, now the size of a company, goes aboard with them.",
        src: {ja: "旧幕府艦隊の記録", en: "Records of the old shogunal fleet"} },

      { scene: "sendai", kind: "context", year: "1868",
        ja: "行き先は蝦夷地。本州に、もう戦える場所は残っていなかった。",
        en: "Their destination was Ezo. There was nowhere left to fight on Honshu." }

    ] },

  { id: "hakodate",
    no:    {ja: "第十一章", en: "Chapter 11"},
    title: {ja: "箱館", en: "Hakodate"},
    span:  {ja: "1868 – 1869　蝦夷地", en: "1868 – 1869 · Ezo"},
    lede:  {ja: "地図の果ての共和国。土方歳三は陸軍奉行並となり、最後の半年を戦い抜く。そして、隊の物語を語り継いだ人々。",
            en: "A republic at the edge of the map. Hijikata Toshizō becomes one of its army commanders and fights its last six months. And the people who kept the corps’ story alive."},
    cover: "hakodate",
    end:   {ja: "第十一章　箱館　了", en: "End of Chapter 11 · Hakodate"},
    beats: [

      { scene: "washinoki", kind: "record", year: "1868",
        ja: "明治元年十月二十日、荒れた海を渡った榎本艦隊は、箱館の北、鷲ノ木の浜に錨を下ろし、雪のなか約三千の兵を上陸させた。",
        en: "On the 20th day of the 10th month of 1868, after a stormy crossing, Enomoto’s fleet anchors off Washinoki, north of Hakodate, and puts some three thousand men ashore in the snow.",
        src: {ja: "旧幕府軍の記録", en: "Records of the old shogunate army"} },

      { scene: "washinoki", kind: "record", year: "1868",
        ja: "軍は二手に分かれて陸路を進む。大鳥圭介の隊は山あいの本道を、土方の隊は東の海沿いの道を。一週間のうちに箱館の役人は海峡の向こうへ逃れ、星形の城塞・五稜郭が彼らの手に落ちた。",
        en: "The army marches on Hakodate in two columns, Ōtori Keisuke’s through the hills and Hijikata’s along the coast to the east. Within a week the government’s officials have fled across the strait, and the star-shaped fortress of Goryōkaku is theirs.",
        src: {ja: "旧幕府軍の記録", en: "Records of the old shogunate army"} },

      { scene: "matsumae", kind: "record", year: "1868",
        ja: "蝦夷地唯一の大名・松前藩は新政府についていた。土方は約七百の兵を率いて冬の海岸を西へ進み、十一月五日、松前城を一日で落とす。城の砲は、外国船に備えて海を向いていた。",
        en: "The Matsumae domain, the only daimyō house on Ezo, has sided with the new government. Hijikata leads some seven hundred men west along the winter coast and, on the 5th day of the 11th month, takes Matsumae Castle in a single day. Its guns faced the sea, built against foreign ships.",
        src: {ja: "両軍の記録", en: "Records of both armies"} },

      { scene: "matsumae", kind: "record", year: "1868",
        ja: "その先の江差で、艦隊の旗艦、オランダ製の開陽丸が冬の嵐で座礁し、失われた。共和国は、いちばん強い艦を最初の冬に失う。",
        en: "Further on at Esashi, the fleet’s Dutch-built flagship, the Kaiyō Maru, is driven onto the rocks by a winter storm and lost. The new regime loses its strongest ship in its first winter.",
        src: {ja: "旧幕府軍の記録", en: "Records of the old shogunate army"} },

      { scene: "matsumae", kind: "anecdote", year: "1868",
        ja: "岸からその最期を見た土方は、悔しさのあまり松の木を叩いたという。その松はいまも江差で案内されている。",
        en: "Watching her founder from the shore, Hijikata is said to have struck a pine tree in frustration. The tree is still pointed out in Esashi.",
        src: {ja: "江差の伝え", en: "Esashi tradition"} },

      { scene: "hakodate", kind: "record", year: "1868",
        ja: "十二月、士官たちは入札（投票）で首脳を選び、総裁・榎本武揚のもとに新たな政権を立てた。土方は陸軍奉行並に選ばれる。",
        en: "In the 12th month, the officers choose their leaders by ballot and set up a government under its president, Enomoto Takeaki. Hijikata is elected deputy commander of the army.",
        src: {ja: "旧幕府軍の記録", en: "Records of the old shogunate army"} },

      { scene: "hakodate", kind: "context", year: "1868",
        ja: "票を投じたのは幹部だけだったが、それでも選挙である。のちに「蝦夷共和国」と呼ばれるこの政権を、港の外国人たちは事実上の政府として扱った。日野の農家の子が、その創設幹部となっていた。",
        en: "Only the officers voted, but it was an election. Foreigners in the harbour dealt with this regime, later called the Republic of Ezo, as a government in fact. A farmer’s son from Hino was one of its founders." },

      { scene: "miyako", kind: "record", year: "1869",
        ja: "明治二年三月二十五日、宮古湾。新政府艦隊の甲鉄艦を奪うため、回天が偽りの旗を掲げて湾に入り、横付けして斬り込んだ。土方はその艦上にいた。",
        en: "On the 25th day of the 3rd month of 1869, at Miyako Bay, the Kaiten sails in under a false flag to seize the government fleet’s ironclad, comes alongside, and sends a boarding party over. Hijikata is aboard.",
        src: {ja: "両軍の記録", en: "Records of both armies"} },

      { scene: "miyako", kind: "record", year: "1869",
        ja: "甲鉄艦の甲板には、ガトリング砲が待っていた。斬り込みは数分で失敗し、回天は多くの死傷者を出して離脱した。",
        en: "On the ironclad’s deck, a Gatling gun is waiting. The boarding fails within minutes, and the Kaiten fights her way out with heavy losses.",
        src: {ja: "両軍の記録", en: "Records of both armies"} },

      { scene: "futamata", kind: "record", year: "1869",
        ja: "春、新政府軍が蝦夷地に上陸する。江差から箱館への山道、二股口で、土方は数百の兵とともに胸壁と塹壕を築いて待ち構えた。",
        en: "In spring the government army lands on Ezo. On the mountain road from Esashi to Hakodate, at Futamata, Hijikata waits with a few hundred men behind earthworks and trenches dug into the hillside.",
        src: {ja: "両軍の記録", en: "Records of both armies"} },

      { scene: "futamata", kind: "record", year: "1869",
        ja: "四月、最初の攻撃は夜を徹した戦いの末に退けられた。十日ほどのちに兵を増やして押し寄せた敵も、陣地は持ちこたえた。",
        en: "In the 4th month, the first assault is beaten off after fighting through the night. When the enemy comes back about ten days later in greater strength, the line holds again.",
        src: {ja: "両軍の記録", en: "Records of both armies"} },

      { scene: "futamata", kind: "anecdote", year: "1869",
        ja: "一夜に数万発を撃ち、熱くなった銃身を桶の水で冷やした。土方は酒樽を持って兵のあいだを回り、一人一杯だけ許したという。",
        en: "They fired tens of thousands of rounds in a night and cooled the rifles with buckets of water. Hijikata, it is said, went among the men with a cask of sake and allowed each just one cup.",
        src: {ja: "参加者の後年の記録", en: "Participants’ later accounts"} },

      { scene: "futamata", kind: "record", year: "1869",
        ja: "だが、ほかの道は守り切れなかった。海沿いの道が破られ、退路を断たれるおそれが出ると、土方は五稜郭へ退くよう命じられる。",
        en: "But the other roads cannot be held. When the coast road falls and he is in danger of being cut off, Hijikata is ordered back to Goryōkaku.",
        src: {ja: "旧幕府軍の記録", en: "Records of the old shogunate army"} },

      { scene: "futamata", kind: "context", year: "1869",
        ja: "峠を失ったのではない。ほかのすべての場所で、戦が負けつつあったのである。",
        en: "He had not lost the pass. The war was being lost everywhere else." },

      { scene: "hakodate", kind: "record", year: "1869",
        ja: "そのころ土方は、十六歳ほどの小姓・市村鉄之助に、箱館を抜け出して日野の家族のもとへ包みを届けるよう命じた。中には、箱館で撮った洋装の写真と、遺髪が入っていた。",
        en: "Around then, Hijikata orders his page Ichimura Tetsunosuke, a boy of about sixteen, to slip out of Hakodate and take a package to his family in Hino. Inside are a photograph of him in Western uniform, taken in Hakodate, and a lock of his hair.",
        src: {ja: "佐藤家の記録", en: "The Satō family’s records"} },

      { scene: "hakodate", kind: "anecdote", year: "1869",
        ja: "隊とともに死にたいと拒んだ市村に、土方は、従わなければ斬ると言ったという。",
        en: "When Ichimura refused, wanting to die with the corps, Hijikata is said to have told him he would cut him down if he did not go.",
        src: {ja: "市村が語ったことを佐藤家が伝えたもの", en: "What the boy told the Satō family, as they passed it down"} },

      { scene: "hakodate", kind: "record", year: "1869",
        ja: "五月十一日、新政府軍の箱館総攻撃。港の近くの弁天台場が孤立する。そこには、新選組の最後の隊士たちがいた。",
        en: "On the 11th day of the 5th month, the government army launches its general assault on Hakodate. The Benten Daiba battery by the harbour is cut off, and in it are the last men of the Shinsengumi.",
        src: {ja: "両軍の記録", en: "Records of both armies"} },

      { scene: "hakodate", kind: "record", year: "1869",
        ja: "土方は救援の兵を率い、一本木関門から馬を進めた。そこで腹部に銃弾を受け、まもなく絶命する。満三十四歳。共和国降伏の、わずか数日前だった。",
        en: "Hijikata leads a relief force out through the Ippongi gate on horseback. There he is shot in the abdomen, and dies soon after. He is thirty-four, days before the republic surrenders.",
        src: {ja: "旧幕府軍の記録。最期の地点や様子は記録によって異なる", en: "Records of the old shogunate army; the exact spot and the details differ between accounts"} },

      { scene: "hakodate", kind: "anecdote", year: "1869", who: "hijikata", poem: true,
        ja: "よしや身は<br>蝦夷が島辺に<br>朽ちぬとも<br>魂は東の<br>君やまもらむ",
        en: "Though my body<br>rot away on the shores<br>of the isle of Ezo,<br>my spirit will guard<br>my lord in the east.",
        src: {ja: "土方の辞世として伝わる歌", en: "The poem handed down as Hijikata’s farewell"} },

      { scene: "hakodate", kind: "record", year: "1869",
        ja: "埋葬の地は意図して隠され、いまも見つかっていない。",
        en: "Where he was buried was deliberately concealed, and has never been found.",
        src: {ja: "諸記録", en: "Various records"} },

      { scene: "hakodate", kind: "record", year: "1869",
        ja: "五月十五日、弁天台場は降伏する。数日前に隊長となった相馬主計が、新選組の降伏を引き受けた。三日後の五月十八日、五稜郭も開城し、戊辰戦争は終わった。",
        en: "On the 15th day of the 5th month, Benten Daiba surrenders. Sōma Kazue, made commander of the corps only days before, surrenders the Shinsengumi. Three days later, on the 18th, Goryōkaku gives up too, and the Boshin War is over.",
        src: {ja: "両軍の記録", en: "Records of both armies"} },

      { scene: "hakodate", kind: "context", year: "1869",
        ja: "六年前、雇われ剣客の一団として江戸を発った隊は、ここで捕虜として終わった。",
        en: "The corps that had left Edo six years before as a band of hired swordsmen ended here, as prisoners of war." },

      { scene: "hino", kind: "record", year: "1869",
        ja: "市村鉄之助は包囲を抜けて本州へ渡り、日野の佐藤彦五郎の家にたどり着いた。かつて天然理心流が教えられていた、あの家である。",
        en: "Ichimura Tetsunosuke slips through the lines, crosses to the mainland, and reaches Satō Hikogorō’s house in Hino, the house where the Tennen Rishin-ryū had once been taught.",
        src: {ja: "佐藤家の記録。着いた日付は確かではない", en: "The Satō family’s records; the date he arrived is not certain"} },

      { scene: "hino", kind: "context", year: "1869",
        ja: "彼が届けた写真が、いま世界が知る土方歳三の姿である。",
        en: "The photograph he carried is the image of Hijikata Toshizō the world knows today." },

      { scene: "takahata", kind: "record", year: "1888",
        ja: "明治二十一年、日野の佐藤彦五郎や小野路村の小島鹿之助ら多摩の人々は、高幡不動尊に「殉節両雄之碑」を建てた。篆額は松平容保の筆である。",
        en: "In 1888, Satō Hikogorō of Hino, Kojima Shikanosuke of Onoji and others in Tama raise a monument to Kondō and Hijikata at Takahata Fudō, the Monument to the Two Heroes Who Died for Their Loyalty. Its title is written by Matsudaira Katamori.",
        src: {ja: "碑文", en: "The monument’s inscription"} },

      { scene: "takahata", kind: "context", year: "1888",
        ja: "明治政府にとって二人は賊だった。それでも多摩の人々は、京へ上った農家の息子たちを、身内として石に刻んだ。",
        en: "To the Meiji government the two men were rebels. Even so, the people of Tama carved them in stone as their own." },

      { scene: "otaru", kind: "record", year: "1913",
        ja: "大正二年、小樽。杉村義衛と名を変えた老剣客の回想を、小樽新聞が連載する。かつての二番組長、永倉新八である。",
        en: "In 1913, in Otaru, the Otaru Shimbun runs the recollections of an old swordsman now called Sugimura Yoshie: once Nagakura Shinpachi, captain of the 2nd unit.",
        src: {ja: "小樽新聞の連載", en: "The Otaru Shimbun series"} },

      { scene: "otaru", kind: "context", year: "1913",
        ja: "この物語の多くの場面は、この連載の語り口で初めて世に届いた。半世紀後の回想として、裏付けをとりながら読まれるべきものではあるが、それなしに隊の姿を語ることはできない。",
        en: "Many of the scenes in this story first reached the public in his telling. As a memory from half a century later, it has to be checked where it can be, but the corps cannot be told without it." },

      { scene: "aizu", kind: "record", year: "1915",
        ja: "大正四年、永倉が世を去る。その年の九月、藤田五郎と名を変えて警察官として明治を生きた斎藤一も、東京で没した。隊についてはほとんど何も語らなかったという。",
        en: "In 1915 Nagakura dies. That September, Saitō Hajime, who had lived through the Meiji years as a policeman named Fujita Gorō, dies in Tokyo. He had said almost nothing about the corps.",
        src: {ja: "諸記録", en: "Various records"} },

      { scene: "aizu", kind: "record", year: "1915",
        ja: "斎藤は会津若松の阿弥陀寺に葬られた。戊辰の会津の戦死者たちが、ようやく埋葬を許された寺である。",
        en: "He is buried at Amida-ji in Aizu-Wakamatsu, the temple where Aizu’s dead of 1868 were at last allowed to be laid to rest.",
        src: {ja: "阿弥陀寺の墓", en: "His grave at Amida-ji"} },

      { scene: "aizu", kind: "context", year: "1915",
        ja: "隊の最後の組長は、彼が見捨てることを拒んだ人々のあいだに眠っている。",
        en: "The last of the corps’ captains lies among the people he had refused to abandon." }

    ] }










  ]
};
