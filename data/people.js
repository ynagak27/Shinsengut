/* =====================================================================
   PEOPLE — 新選組の隊士
   ---------------------------------------------------------------------
   HOW TO EDIT / 追記のしかた:
   - Every text field is bilingual: {en:"...", ja:"..."}.
   - "summary" is the short lede shown at the top of the person page.
   - "sections" is an ordered list of {h: heading, b: body} blocks —
     add as many as you like (e.g. a new section on swordsmanship,
     family, letters, graves...). Paragraph breaks: use "\n\n".
   - "legend" is for popular lore that is NOT well documented
     (fiction, later embellishment, disputed accounts). Keep it honest.
   - To add a NEW person: copy a block, give it a new key (e.g. todo:),
     and reference that key from events' people/roles lists.
   - "group" decides where they're listed on people.html (see
     PEOPLE_GROUPS at the bottom). Only the ids in PEOPLE_ON_MAP get a
     button on the map page; everyone else is reached from people.html
     or from the events that name them.
   ===================================================================== */

const PEOPLE = {

  /* ------------------------------------------------------------ */
  hijikata: {
    kanji: "土", life: "1835–1869", group: "leaders",
    name: {en: "Hijikata Toshizō", ja: "土方歳三"},
    role: {en: "Vice-commander (fukuchō)", ja: "副長"},
    summary: {
      en: "The organizational genius of the Shinsengumi. A farmer's son from the Tama hills, he built and enforced the corps' iron discipline as its \"demon vice-commander,\" then reinvented himself as a modern field commander in the Boshin War, fighting to the very last battle at Hakodate.",
      ja: "新選組の組織を作り上げた実務の天才。多摩の農家に生まれ、「鬼の副長」として鉄の規律で隊を支えた。戊辰戦争では近代戦の指揮官へと変貌し、箱館の最後の戦いまで戦い抜いた。"
    },
    sections: [
      { h: {en: "Early life", ja: "生い立ち"},
        b: {en: "Hijikata was born on May 31, 1835, the youngest of ten children of a prosperous farming family in Ishida village, Musashi province (now Hino, Tokyo). His father died before he was born and his mother when he was five; he was raised largely by an elder brother and his wife. Sent to Edo as a boy to apprentice at a dry-goods shop, he quit after quarrels and returned home — an early sign of a pride that would not bend.\n\nAs a young man he traveled the Tama countryside peddling the family patent medicine, Ishida sanyaku, and picked up sword lessons wherever he went. In 1859 he formally entered the Tennen Rishin-ryū school of Kondō Isami, whose Shieikan dojo in Edo was closely tied to the Tama farming elite. He was famously good-looking, and composed amateur haiku under the pen name Hōgyoku (豊玉).",
            ja: "1835年5月31日（天保6年5月5日）、武蔵国多摩郡石田村（現・東京都日野市）の豪農の家の末子（十人兄弟の末っ子）として生まれる。父は生まれる前に、母は5歳のときに亡くし、兄夫婦に育てられた。少年期に江戸の呉服店へ奉公に出されるが、諍いを起こして帰郷したと伝わる。曲げられない気性は早くから表れていた。\n\n青年期は家伝薬「石田散薬」を行商しながら多摩一円を歩き、行く先々で剣術を学んだ。1859年（安政6年）、近藤勇の天然理心流に正式入門。江戸市谷の試衛館は多摩の豪農層と深い結びつきを持っていた。美男として知られ、「豊玉」の号で俳句もひねった。"} },
      { h: {en: "In the Shinsengumi", ja: "新選組時代"},
        b: {en: "In Kyoto, Hijikata became the corps' architect. As vice-commander he drafted and enforced its notorious internal code — desertion, private quarrels, and unauthorized fundraising were all punishable by seppuku — and personally ran interrogations, including the brutal questioning of Furutaka Shuntarō that triggered the Ikedaya raid. Members feared him; discipline, and the corps' fighting reputation, were his creations.\n\nHis letters home tell another story: playful boasts about being besieged by love letters from Kyoto's geisha quarters, and pride in the corps' rise. The severity was a chosen instrument, not the whole man. His loyalty to Kondō — the friend he made commander and kept there — was the fixed axis of his life.",
            ja: "京都で土方は新選組という組織そのものの設計者となった。副長として「局中法度」を定めて厳格に運用し（士道不覚悟・勝手な離隊・私闘などは切腹）、古高俊太郎への苛烈な取り調べなど尋問も自ら行った。隊士に恐れられたが、新選組の規律と戦闘力は彼の作品だった。\n\n一方、故郷への手紙には、祇園や島原の女性から恋文が山と届くと冗談めかして自慢するなど、茶目っ気のある素顔がのぞく。冷酷さは道具であって、人格のすべてではなかった。近藤勇への忠誠——友を局長に押し上げ、支え続けること——が生涯の軸だった。"} },
      { h: {en: "The Boshin War and death", ja: "戊辰戦争と最期"},
        b: {en: "Toba–Fushimi changed him. Watching swords lose to massed rifle fire, he is said to have concluded that the age of the blade was over — and he remade himself accordingly. At Utsunomiya he took a castle by storm; in the north he commanded mixed old-shogunate units with a coolness that impressed professional soldiers. The famous photograph of him in Western uniform, hair cropped, dates from this final phase.\n\nIn the Republic of Ezo he was elected an army magistrate. On June 20, 1869, during the final assault on Hakodate, he was shot through the lower torso while riding to relieve a cut-off unit near the Ippongi gate, and died at 34. A death poem attributed to him reads: \"Though my body may rot on the isle of Ezo, my spirit guards my lord in the East.\"",
            ja: "鳥羽・伏見の戦いが彼を変えた。刀槍が銃火の前に無力である現実を見て、「もう刀の時代ではない」と悟ったと伝わる。以後は洋式軍の指揮官として自己を作り直し、宇都宮城を攻略、北方戦線では旧幕府の混成部隊を冷静に指揮して玄人の軍人たちをも感嘆させた。断髪・洋装の有名な写真はこの最晩年のものである。\n\n蝦夷共和国では陸軍奉行並に選出。1869年6月20日（明治2年5月11日）、新政府軍の箱館総攻撃のさなか、孤立した部隊の救援に馬を駆るうち一本木関門付近で腹部に銃弾を受け、戦死した。満34歳。「たとひ身は蝦夷の島辺に朽ちぬとも魂は東の君やまもらむ」の辞世が伝えられる。"} },
      { h: {en: "Character", ja: "人物像"},
        b: {en: "Contemporaries describe a man of two registers: merciless in enforcing the code, yet organized, literate, and quietly humorous in private. His haiku collection, Hōgyoku Hokku-shū, survives — the verses are earnest and endearingly mediocre, a farmer's son reaching for the culture of the class he fought to join. He never married; the corps was his household.",
            ja: "同時代の証言が伝えるのは二つの顔である。法度の執行では容赦がない一方、私的には几帳面で、文事を好み、静かなユーモアがあった。俳句集『豊玉発句集』が現存するが、その句は真剣で、そして微笑ましいほど凡庸だ——武士という身分に手を伸ばした農家の子の背伸びがそこにある。生涯独身。新選組こそが彼の家だった。"} }
    ]
  },

  /* ------------------------------------------------------------ */
  kondo: {
    kanji: "近", life: "1834–1868", group: "leaders",
    name: {en: "Kondō Isami", ja: "近藤勇"},
    role: {en: "Commander (kyokuchō)", ja: "局長"},
    summary: {
      en: "Commander of the Shinsengumi and fourth master of the Tennen Rishin-ryū. A farmer's son with a samurai's ambitions, he rose from a suburban dojo to audiences with daimyō and court officials — and was executed as a rebel when the world he served collapsed.",
      ja: "新選組局長、天然理心流四代目宗家。武士に憧れた農家の子は、場末の道場から大名や公家に意見する立場まで登りつめ、仕えた世界の崩壊とともに「賊」として処刑された。"
    },
    sections: [
      { h: {en: "Early life", ja: "生い立ち"},
        b: {en: "Born Miyagawa Katsugorō in 1834 to a farming family in Kami-Ishihara, Musashi (now Chōfu, Tokyo), he showed such promise with the sword that Kondō Shūsuke, third master of the Tennen Rishin-ryū, adopted him as heir. He succeeded as fourth master in 1861, running the Shieikan dojo in Ichigaya — a school whose paying students were mostly Tama farmers, and whose live-in disciples (Okita, Yamanami, Hijikata among them) would become the nucleus of the Shinsengumi.\n\nA famous anecdote holds that his mouth was so large he could fit his fist inside it — a party trick he reportedly linked, laughing, to tales of the warrior Katō Kiyomasa.",
            ja: "1834年（天保5年）、武蔵国多摩郡上石原村（現・調布市）の農家に宮川勝五郎として生まれる。剣才を見込まれて天然理心流三代目・近藤周助の養子となり、1861年（文久元年）に四代目宗家を継承。市谷の試衛館道場を営んだ。門人の多くは多摩の農民で、食客として住み込んだ沖田・山南・土方らが後の新選組の中核となる。\n\n口が大きく、拳を口に入れて見せるのが得意だったという逸話が残る。加藤清正の故事になぞらえて笑っていたと伝わる。"} },
      { h: {en: "In the Shinsengumi", ja: "新選組時代"},
        b: {en: "After the Serizawa purge, Kondō was the corps' undisputed commander and its public face. The Ikedaya raid — which he led in person, sword in hand, announcing himself at the door — made him a national figure. He prized a blade he believed to be a Nagasone Kotetsu; it was almost certainly a well-made fake, which he never learned, writing home proudly that \"my Kotetsu\" had survived the Ikedaya unscathed.\n\nAs the corps rose, so did his ambitions: he cultivated contacts among Aizu officials and court nobles and argued policy in memorials — a farmer lecturing the aristocracy on the defense of the realm. In 1867 he attained the rank of direct shogunal retainer, the dream of his life, mere months before the shogunate fell.",
            ja: "芹沢派粛清の後、近藤は名実ともに新選組の頭であり、その「顔」だった。池田屋事件では自ら刀を取り、「御用改めである」と名乗って斬り込み、一夜にして天下に名を知られた。愛刀は長曽祢虎徹と信じていたが、まず間違いなく出来のよい贋作で、本人は最後まで知らず「今度の一件で虎徹は無事」と誇らしげに故郷へ書き送っている。\n\n隊の地位が上がるにつれ、会津藩要路や公家との交際を広げ、建白書で国事を論じるようになった——農民の子が公家に国防を説いたのである。1867年（慶応3年）、悲願の幕臣取り立てを果たすが、それは幕府瓦解のわずか数ヶ月前だった。"} },
      { h: {en: "Downfall and execution", ja: "最期"},
        b: {en: "In December 1867 he was shot in the shoulder by remnants of the Goryō Eji, and commanded no troops at Toba–Fushimi. He led the renamed corps to defeat at Kōshū-Katsunuma under the alias Ōkubo Tsuyoshi, then, surrounded at Nagareyama in April 1868, chose surrender over a hopeless battle — reportedly to spare his remaining men. Identified at the enemy camp by a former comrade from the Itō faction, he was beheaded at Itabashi on May 17, 1868, denied a samurai's seppuku. His head was displayed on the banks of the Kamo river in Kyoto.",
            ja: "1867年12月、御陵衛士の残党に狙撃されて肩を負傷し、鳥羽・伏見では指揮を執れなかった。甲陽鎮撫隊と改称した隊を率いて「大久保剛（のち大和）」の変名で甲州勝沼に敗れ、1868年4月、流山で新政府軍に包囲されると、残る隊士を救うためか、抗戦せず投降を選んだ。しかし敵陣で元御陵衛士の隊士に正体を見破られ、5月17日、板橋で斬首された。武士としての切腹は許されず、首は京都・三条河原に晒された。"} },
      { h: {en: "Character", ja: "人物像"},
        b: {en: "Generous, gregarious, and a natural orator, Kondō inspired a loyalty in his core followers that outlasted his death — Hijikata fought on for a year in his name, and Nagakura, who had once petitioned against his arrogance, built his grave monument decades later. Critics inside and outside the corps found him vain and increasingly grand; both things were true of a man improvising a samurai identity in a collapsing order.",
            ja: "豪放で人好きがし、弁も立った。中核の隊士たちが彼に捧げた忠誠は死後も続き、土方は一年間その名のもとに戦い続け、かつて彼の「大名気取り」を非難する建白書を出した永倉でさえ、数十年後に近藤の墓碑を建てた。虚栄的で尊大になっていったという批判も内外にあった——崩れゆく秩序の中で「武士」を即興で生きた男には、どちらも真実だったのだろう。"} }
    ]
  },

  /* ------------------------------------------------------------ */
  okita: {
    kanji: "沖", life: "1842?–1868", group: "captains",
    name: {en: "Okita Sōji", ja: "沖田総司"},
    role: {en: "Captain, 1st unit", ja: "一番隊組長"},
    summary: {
      en: "The prodigy of the Shieikan and captain of the first unit — by most accounts the finest sword in the Shinsengumi. Cheerful and childlike off duty, lethal on it, he was cut down not by an enemy but by tuberculosis, dying in hiding at around 26.",
      ja: "試衛館の天才児にして一番隊組長。多くの証言が新選組随一と認めた剣士。平時は子供好きの陽気な青年、戦いでは非情の剣。敵の刃ではなく労咳に倒れ、潜伏先で25、6歳の生涯を閉じた。"
    },
    sections: [
      { h: {en: "Early life", ja: "生い立ち"},
        b: {en: "Okita was born around 1842 (his exact birth year is uncertain) in the Edo residence of the Shirakawa domain, the son of a low-ranking domain retainer. Orphaned young, he entered the Shieikan as a live-in student at about nine, raised half as Kondō's little brother. His talent was freakish: tradition holds he earned his full license in his teens and served as the dojo's head instructor while barely an adult. His signature technique was the sandan-zuki, a three-stage thrust said to land its strikes almost simultaneously.",
            ja: "1842年頃（生年には異説あり）、江戸の白河藩屋敷に藩士の子として生まれる。幼くして両親を失い、9歳前後で試衛館に内弟子として入門。近藤の弟のように育てられた。剣才は突出しており、十代で免許皆伝、若くして塾頭（師範代）を務めたと伝わる。得意技は三段突き——三度の突きがほぼ同時に見えたという。"} },
      { h: {en: "In the Shinsengumi", ja: "新選組時代"},
        b: {en: "As captain of the first unit — the corps' spearhead — Okita took part in its hardest assignments, including the Serizawa purge and the Ikedaya raid, where he cut down several men in the opening melee before collapsing mid-fight. He was also a feared instructor: multiple accounts agree that the sunny young man turned short-tempered and merciless the moment he picked up a practice sword.\n\nHis tuberculosis advanced through the corps' last Kyoto years. By the Boshin War he could no longer fight; he was evacuated from Osaka by sea and hidden with a gardener's family in Sendagaya, Edo, under the care arranged through the shogunal physician Matsumoto Ryōjun.",
            ja: "隊の切り込み役である一番隊の組長として、芹沢鴨の粛清、池田屋事件など最も苛烈な任務に加わった。池田屋では乱戦の口火で数人を斬り伏せたのち、戦闘の途中で昏倒している。また稽古では恐れられた師範で、「普段は冗談ばかりの明るい青年が、竹刀を持つと人が変わったように短気で容赦がなかった」という証言が複数残る。\n\n労咳（結核）は京都末期に進行し、戊辰戦争ではもはや戦えなかった。大坂から海路江戸へ後送され、幕医・松本良順の計らいで千駄ヶ谷の植木屋に匿われた。"} },
      { h: {en: "Death", ja: "最期"},
        b: {en: "Okita died on July 19, 1868, still in hiding. Those around him kept Kondō's execution from him; he is said to have asked after his master to the end. He was about 26. His grave stands at Senshō-ji temple in Azabu, Tokyo — for many years closed to the public because of the crowds his legend drew.",
            ja: "1868年7月19日（慶応4年5月30日）、潜伏先で死去。周囲は近藤の処刑を最後まで告げず、総司は死の間際まで「先生はどうしておられる」と尋ねたと伝わる。享年27（満25、6歳）。墓は東京・麻布の専称寺にあり、あまりの参拝者の多さに長く一般公開が制限されてきた。"} },
      { h: {en: "Character and legend", ja: "人物像と伝説"},
        b: {en: "The historical Okita, per those who knew him, was plain-faced, dark-skinned, tall and wiry, fond of jokes and of playing with the neighborhood children at Mibu. The beautiful, doomed youth of novels, manga, and film is a later creation — though the core of the legend, the once-in-a-generation talent extinguished young, is fully historical.",
            ja: "実像の沖田は、知人の証言によれば色黒で平たい顔、長身痩躯、冗談好きで、壬生では近所の子供たちとよく遊んでいたという。小説・漫画・映画が描く美貌の薄命剣士は後世の創作である。ただし伝説の核——若くして消えた不世出の才——は、まぎれもない史実だ。"} }
    ],
    legend: {
      en: "The famous image of Okita coughing blood and collapsing at the Ikedaya comes mainly from later fiction. Nagakura's memoir records only that Okita fell ill during the fight (possibly heatstroke); whether his tuberculosis was already symptomatic in 1864 is medically doubtful given he lived four more years.",
      ja: "「池田屋で喀血して昏倒した」という有名な場面は、主に後世の創作に由来する。永倉新八の手記は「戦闘中に病に倒れた」と記すのみで（暑気あたり説もある）、1864年時点で結核が発症していたかは、その後4年生きたことを考えると医学的に疑わしい。"
    }
  },

  /* ------------------------------------------------------------ */
  saito: {
    kanji: "斎", life: "1844–1915", group: "captains",
    name: {en: "Saitō Hajime", ja: "斎藤一"},
    role: {en: "Captain, 3rd unit", ja: "三番隊組長"},
    summary: {
      en: "Captain of the third unit, the corps' most enigmatic figure — swordsman, kenjutsu instructor, and probable internal spy. He chose to fall with Aizu rather than retreat, survived anyway, and lived a second life as a Meiji policeman, dying in 1915 reportedly seated upright in meditation.",
      ja: "三番隊組長にして新選組で最も謎の多い男。剣士、撃剣師範、そしておそらくは間者。会津と運命を共にする道を選びながら生き残り、明治の警察官として第二の人生を生きた。1915年、床の間で結跏趺坐したまま絶命したと伝わる。"
    },
    sections: [
      { h: {en: "Early life", ja: "生い立ち"},
        b: {en: "Born Yamaguchi Hajime in Edo in 1844, the son of a former ashigaru who had purchased low retainer status. His youth is poorly documented; a family tradition holds that he fled Edo for Kyoto around 1862 after killing a hatamoto in a quarrel. His sword style is variously given as Ittō-ryū lineage or Mugai-ryū — itself a mark of how little he told anyone.",
            ja: "1844年（弘化元年）、江戸に山口一（はじめ）として生まれる。父は御家人株を買った元足軽だった。若年期の記録は乏しく、1862年頃、口論の末に旗本を斬って江戸から京へ逃れたという家伝が残る。流派は一刀流系とも無外流とも言われ、その不確かさ自体が、彼が何も語らなかった証拠である。"} },
      { h: {en: "In the Shinsengumi", ja: "新選組時代"},
        b: {en: "Saitō joined at the founding, became captain of the third unit, and served as a kenjutsu instructor. The corps used him for its darkest work: he is linked (with varying evidence) to several internal executions, and when Itō Kashitarō's faction split off in 1867, Saitō went with them — almost certainly as Kondō and Hijikata's informant, returning just before the corps ambushed the faction at Aburanokōji. If the loyalty of the Shinsengumi had a blade's edge, it was Saitō.",
            ja: "結成時からの隊士で、三番隊組長、撃剣師範を務めた。隊は最も暗い仕事に彼を使った。複数の内部粛清への関与が（確度はさまざまに）伝えられ、1867年に伊東甲子太郎一派が分離した際には共に御陵衛士へ移り——ほぼ確実に近藤・土方の間者として——油小路の襲撃直前に帰隊している。新選組の「忠義」に刃があるとすれば、それが斎藤一だった。"} },
      { h: {en: "Aizu and after", ja: "会津、そしてその後"},
        b: {en: "When Hijikata moved north from Aizu in 1868, Saitō refused to follow, reportedly saying that to abandon Aizu now would betray all righteousness. He fought through the domain's last campaign with a remnant of the corps, survived its surrender, and shared its exile.\n\nHe took the name Fujita Gorō, married Takagi Tokio — a daughter of an Aizu retainer, with the former Aizu lord's house standing as go-between — and joined the Tokyo Metropolitan Police. In the Satsuma Rebellion of 1877 he fought at Tabaruzaka as a police officer, on the government side: the last man of the Shinsengumi crossing swords with Satsuma one final time. He later worked as a guard and clerk at the Tokyo Higher Normal School for Women, and died on September 28, 1915. Family tradition says he died seated formally in the alcove of his home.",
            ja: "1868年、土方が会津から北へ転じたとき、斎藤は従わなかった。「今、会津を見捨てるのは義にあらず」と言ったと伝わる。新選組の残兵を率いて会津戦争を最後まで戦い、降伏後の苦難も藩と分かち合った。\n\n藤田五郎と改名し、会津藩士の娘・高木時尾と結婚（媒酌には旧藩主松平家が関わった）、警視庁に奉職する。1877年（明治10年）の西南戦争では警察官として田原坂を戦った——新選組最後の男が、最後にもう一度薩摩と刃を交えたのである。晩年は東京女子高等師範学校の守衛・庶務を務め、1915年9月28日死去。床の間で正座（結跏趺坐）したまま絶命したと家族は伝えている。"} }
    ],
    legend: {
      en: "The \"left-handed thrust\" universally associated with Saitō is fiction, popularized by 20th-century novelists (notably Shiba Ryōtarō's Moeyo Ken). No contemporary source describes his technique. Likewise, treat any detailed account of his Shinsengumi assassinations with caution — he left almost no testimony, which is precisely why fiction found him irresistible.",
      ja: "斎藤の代名詞となった「左片手一本突き」は創作であり、20世紀の小説（特に司馬遼太郎『燃えよ剣』）によって広まった。同時代史料に彼の剣技を記したものはない。暗殺への関与の詳細な記述も同様に慎重に扱うべきで、彼自身がほとんど何も語らなかったからこそ、フィクションは彼に惹かれたのである。"
    }
  },

  /* ------------------------------------------------------------ */
  nagakura: {
    kanji: "永", life: "1839–1915", group: "captains",
    name: {en: "Nagakura Shinpachi", ja: "永倉新八"},
    role: {en: "Captain, 2nd unit", ja: "二番隊組長"},
    summary: {
      en: "Captain of the second unit and, by the reckoning of his peers, possibly the strongest pure swordsman in the corps. He fought through the Ikedaya at Kondō's side, told Kondō to his face when he thought him wrong, and survived it all to become the Shinsengumi's great memoirist.",
      ja: "二番隊組長。隊内の評では沖田と並ぶ、あるいは勝るとも言われた純粋な剣の腕。池田屋では近藤と共に死線を潜り、近藤が誤っていると思えば面と向かって諫め、そして生き延びて新選組最大の語り部となった。"
    },
    sections: [
      { h: {en: "Early life", ja: "生い立ち"},
        b: {en: "Born in 1839 in the Edo residence of the Matsumae domain, son of a 150-koku retainer. Sword-mad from childhood, he earned full license in Shindō Munen-ryū, then walked away from his hereditary stipend — effectively deserting his domain — to live for training. He drifted between dojos as a professional guest and settled at the Shieikan, where the food was reportedly poor but the company suited him.",
            ja: "1839年（天保10年）、江戸の松前藩邸に150石取り藩士の子として生まれる。幼少から剣に熱中し、神道無念流の免許皆伝を得ると、家督も俸禄も捨てて（事実上の脱藩）修行の暮らしに入った。食客として道場を渡り歩き、試衛館に落ち着く。飯はまずかったが、人が合ったという。"} },
      { h: {en: "In the Shinsengumi", ja: "新選組時代"},
        b: {en: "At the Ikedaya, Nagakura was one of the handful who stormed the inn with Kondō and one of the two still fighting at the end — his sword snapped, his palm split open, his life saved by his armor. The following year, disgusted by what he saw as Kondō's growing lordliness, he and several comrades submitted a formal grievance to the Aizu domain — an astonishing act of insubordination that he survived, and that tells you the corps' bonds were those of sworn brothers, not master and servant.\n\nHe fought at Toba–Fushimi and Kōshū-Katsunuma; when Kondō afterwards demanded the survivors serve him as retainers, Nagakura refused — comrades, not vassals — and left with Harada to form the Seiheitai and keep fighting the new government in the north Kantō.",
            ja: "池田屋では近藤と共に斬り込んだ数名のうちの一人で、最後まで戦い続けた二人のうちの一人だった——刀は折れ、左手の親指は割れ、鎖帷子が命を救った。翌年には、近藤の「大名気取り」に我慢ならず、同志数名と会津藩に非行五ヶ条の建白書を提出する。驚くべき「造反」だが処罰されなかった。新選組の絆が主従ではなく同志のものであったことを物語る一件である。\n\n鳥羽・伏見、甲州勝沼を戦い、その後、近藤が生き残りに「家臣として仕えよ」と求めると拒絶。「我らは同志であって家来ではない」。原田と共に離隊して靖兵隊を結成し、北関東で新政府軍への抗戦を続けた。"} },
      { h: {en: "The long afterlife", ja: "長い戦後"},
        b: {en: "Pardoned after the war, he returned to Matsumae service, married a domain physician's daughter, and took the name Sugimura Yoshie. He taught kendo to police and prison guards in Hokkaido, and in 1876 raised the monument to Kondō and Okita that still stands at Itabashi. In old age in Otaru he dictated his memories to a newspaper — the accounts published as Shinsengumi Tenmatsuki — which remain, with all their old man's embellishments, the single most vivid inside source on the corps. He died in 1915, the same year as Saitō. A cherished family story has the elderly Nagakura, jostled by street toughs outside a movie theater, freezing them in place with a single glare.",
            ja: "赦免後、松前藩に帰参し、藩医の娘と結婚して杉村義衛と改名。北海道で警察官や監獄の看守に剣道を教え、1876年（明治9年）には板橋に近藤・沖田らの供養碑を建立した（現存）。小樽での晩年、新聞記者に半生を口述し、これが『新選組顛末記』として世に出る。老人の誇張を差し引いてもなお、新選組内部の最も生々しい一次証言である。1915年、斎藤一と同じ年に死去。晩年、映画館の前で地回りに絡まれた老永倉が、一睨みで相手をすくみ上がらせたという逸話が家族に伝わる。"} }
    ]
  },

  /* ------------------------------------------------------------ */
  harada: {
    kanji: "原", life: "1840–1868", group: "captains",
    name: {en: "Harada Sanosuke", ja: "原田左之助"},
    role: {en: "Captain, 10th unit", ja: "十番隊組長"},
    summary: {
      en: "Captain of the tenth unit and the corps' great spearman — hot-blooded, quick to laugh, quick to fight, with a seppuku scar on his belly he showed off as a party piece. One of the few members with a wife and child, he died at 28 fighting a battle he had no obligation to join.",
      ja: "十番隊組長、新選組随一の槍の遣い手。血の気が多く、よく笑い、よく喧嘩し、腹には自慢の切腹の傷跡があった。妻子を持った数少ない隊士の一人。加わる義理もなかった戦いに身を投じ、28歳で死んだ。"
    },
    sections: [
      { h: {en: "Early life", ja: "生い立ち"},
        b: {en: "Born in 1840 in Matsuyama, Iyo province, Harada served the Matsuyama domain as a chūgen — a servant rank beneath samurai. Mocked by a samurai for not knowing how seppuku was done, the young Harada reportedly slashed his own abdomen on the spot to prove he did; he survived, kept the scar, and told the story with relish for the rest of his life. He left the domain, learned Hōzōin-ryū spearmanship, and drifted to the Shieikan circle.",
            ja: "1840年（天保11年）、伊予松山に生まれ、松山藩に中間（武士未満の奉公人身分）として仕えた。「切腹の作法も知るまい」と武士に嘲られ、その場で本当に腹を切って見せたと伝わる。一命は取り留め、以後この傷跡を生涯の自慢の種として語った。藩を離れて宝蔵院流の槍を修め、試衛館の面々と交わるようになる。"} },
      { h: {en: "In the Shinsengumi", ja: "新選組時代"},
        b: {en: "Harada fought in nearly every major action of the Kyoto years — the Serizawa purge, the Ikedaya (in Hijikata's cordon squad), the Kinmon fighting, the Sanjō notice-board incident, the Aburanokōji ambush. Rumor even attached his name to Sakamoto Ryōma's assassination, on the thin evidence of a scabbard left at the scene; the true culprits were almost certainly the Mimawarigumi. In Kyoto he married a local woman, Masa, and had a son — a settled domestic life almost no one else in the corps attempted.",
            ja: "京都時代のほぼすべての主要な戦闘に加わった——芹沢粛清、池田屋（土方の包囲隊）、禁門の変、三条制札事件、油小路の待ち伏せ。坂本龍馬暗殺の際には現場に残された鞘から実行犯の噂まで立てられた（実際の下手人はほぼ確実に見廻組である）。京都では町人の娘・まさと結婚して一子をもうけた。隊内でほとんど誰も持たなかった家庭を、彼は持っていた。"} },
      { h: {en: "Death at Ueno", ja: "上野に死す"},
        b: {en: "After splitting from Kondō with Nagakura in 1868, Harada was to march north with the Seiheitai — but turned back at Edo, some say to see his wife and son once more. He joined the Shōgitai instead, fought in the one-day Battle of Ueno on July 4, 1868, and was mortally wounded; he died two days later, aged 28. His wife and son learned of his death only later; the son died young.",
            ja: "1868年、永倉と共に近藤のもとを離れて靖兵隊として北上するはずだったが、江戸で引き返した——妻子にもう一度会うためだったとも言われる。そのまま彰義隊に加わり、7月4日の上野戦争で重傷を負い、二日後に死亡した。享年29（満28歳）。妻まさと息子が死を知ったのは後のことで、息子も早世した。"} }
    ],
    legend: {
      en: "A persistent legend claims Harada survived Ueno and reappeared decades later as a mounted bandit chief in Manchuria. It is romantic nonsense — but its existence says something about how little anyone wanted this particular man to be dead.",
      ja: "「原田は上野で死なず、後年、満州で馬賊の頭目になっていた」という伝説が根強く残る。もちろん史実ではない——だが、この男の死をどれほど誰も認めたくなかったかを、この伝説は物語っている。"
    }
  },

  /* ------------------------------------------------------------ */
  inoue: {
    kanji: "井", life: "1829–1868", group: "captains",
    name: {en: "Inoue Genzaburō", ja: "井上源三郎"},
    role: {en: "Captain, 6th unit", ja: "六番組組長"},
    summary: {
      en: "The quiet elder of the Shieikan circle. A Hino man from a family of part-time shogunal guards, he spent more than a decade earning a sword licence that came easily to younger men, followed Kondō and Hijikata to Kyoto as their senior, and was killed at Yodo in the first days of the Boshin War — the first of the original Tama comrades to die in battle.",
      ja: "試衛館一門の物静かな年長者。八王子千人同心の家に生まれた日野の人で、若い仲間がたやすく手にした免許を十年以上かけて得た。兄貴分として近藤・土方に従い京へ上り、戊辰戦争の初戦、淀で戦死した。多摩以来の同志のなかで、戦場に斃れた最初の一人である。"
    },
    sections: [
      { h: {en: "A Hino family of guards", ja: "日野の千人同心の家"},
        b: {en: "Inoue was born in 1829 in Hino, the post town on the Kōshū road a few kilometres from Hijikata's village of Ishida. His family belonged to the Hachiōji Thousand-Man Guard (Hachiōji sennin dōshin), a peculiar institution of the Tama region: some thousand households of farmers who held minor shogunal rank, kept their swords and their fields, and took turns on guard duty, most famously at the Tokugawa shrines at Nikkō. They were not quite samurai and not quite peasants — exactly the in-between class that would later fill the Shinsengumi's ranks.\n\nHe was a younger son, with no claim on the family's position. His elder brother Matsugorō inherited it, and the brothers stayed close; Matsugorō's later journey to Kyoto would leave one of the few eyewitness glimpses of the corps' first months.",
            ja: "1829年（文政12年）、甲州道中の宿場・日野宿に生まれる。土方の生まれた石田村からは数キロの距離である。生家は八王子千人同心の家だった。多摩地方特有の制度で、千戸ほどの農家が幕府の下級の身分を与えられ、刀を差し田畑を耕しながら、交代で警備に就いた。日光東照宮の火の番が最もよく知られる。武士とも農民とも言い切れない——のちに新選組を満たすことになる、まさにその中間の階層である。\n\n次男以下であったため家督の望みはなく、家は兄の松五郎が継いだ。兄弟の仲は良く、のちに松五郎が京へ上った際の記録は、結成直後の隊を外から見た数少ない証言の一つとなる。"} },
      { h: {en: "The Shieikan's elder", ja: "試衛館の年長者"},
        b: {en: "As a youth Inoue entered the Tennen Rishin-ryū under Kondō Shūsuke, the master who would adopt Kondō Isami. The school's real base was not its small Edo dojo but the farming houses of Tama, where Shūsuke and his successors gave lessons on circuit; the Hino headman Satō Hikogorō kept a practice hall in his own home. Inoue trained there and in Edo for well over a decade before receiving his full licence, around 1860 — slowly, by the standards of younger men like Okita.\n\nThat slowness became part of his character in later memory: not a gifted swordsman but a dependable one, older than Kondō and Hijikata, quietly loyal, the one who kept the house running. In the Shieikan's crowded, rowdy years he was something like an elder brother to the younger men, and tradition — affectionate, if hard to document — remembers him as the steady presence everyone took for granted.",
            ja: "少年期に、のちに近藤勇を養子とする近藤周助のもとで天然理心流に入門した。同流の本当の地盤は江戸の小さな道場ではなく多摩の農家で、周助ら歴代の師は出稽古で村々を回った。日野宿名主の佐藤彦五郎は自宅に道場を構えていた。井上はここと江戸とで十年以上修行を重ね、免許を得たのは1860年頃とされる。沖田のような若者と比べれば、遅い歩みである。\n\nその遅さは、後世の人物像の一部にもなった。天才肌ではないが確かな剣。近藤や土方より年長で、静かに忠実で、所帯を回す役を担った人。騒がしい試衛館時代、彼は若い仲間たちの兄貴分のような存在だったと伝えられる。記録で裏付けるのは難しいが、愛情をこめて語り継がれてきた姿である。"} },
      { h: {en: "Kyoto", ja: "京都時代"},
        b: {en: "In early 1863 Inoue marched west with the Rōshigumi and was one of the Shieikan men who stayed behind in Kyoto with Kondō when the rest returned to Edo. In the new corps he served as an assistant to the vice-commander (fukuchō jokin), the band of officers between the leadership and the rank and file.\n\nOn the night of the Ikedaya incident in July 1864 he was in Hijikata's column, which searched the riverside inns before converging on the Ikedaya to seal the area. When the corps was reorganized into numbered units in 1865, he took command of the 6th unit. In 1867 he was among the officers made direct retainers of the shogunate. He was never one of the corps' famous swordsmen or schemers; his role was the less visible work of an officer who could be relied on.",
            ja: "1863年（文久3年）初め、浪士組とともに西へ上り、本隊が江戸へ引き返した後も近藤とともに京に残った試衛館一門の一人となった。新しい組織では副長助勤を務めた。幹部と平隊士のあいだに立つ士官の役である。\n\n1864年7月（元治元年6月）の池田屋事件の夜は土方隊に属し、鴨川沿いの旅籠を捜索したのち池田屋に合流して周辺を固めた。1865年に隊が番組に再編されると、六番組の組長となる。1867年には、隊の幹部たちとともに幕臣に取り立てられた。名の轟く剣客でも策士でもない。彼の役目は、頼りになる士官としての目立たない仕事だった。"} },
      { h: {en: "Death at Yodo", ja: "淀に斃れる"},
        b: {en: "When war came in January 1868, the corps fought first at Fushimi and then fell back south with the retreating shogunal army. On January 29, 1868, in the fighting along the Yodo river embankment at Senryōmatsu, Inoue was shot and killed. He was about forty.\n\nHis nephew Inoue Taisuke, a boy of about twelve serving with the corps, tried to carry his uncle's head and sword away from the field so they could be taken home. The weight was too much for him in the rout; he is said to have buried them near a temple on the way, at a spot that has never been identified. In Hino, the family raised a memorial at Hōsen-ji, and his descendants still keep his memory in a small family museum near the old post town.",
            ja: "1868年1月（慶応4年）に戦端が開かれると、隊はまず伏見で戦い、敗走する幕府軍とともに南へ退いた。1868年1月29日（慶応4年1月5日）、淀・千両松の淀川堤の戦闘で、井上は銃弾を受けて戦死した。四十歳前後だった。\n\n隊に加わっていた十二歳ほどの甥・井上泰助が、叔父の首と刀を故郷へ持ち帰ろうと戦場から運び出した。しかし敗走のなかでその重さに耐えきれず、途中の寺の近くに埋めたと伝わる。その場所は今もわかっていない。日野では宝泉寺に墓が建てられ、子孫は旧宿場に近い自宅の資料館で、いまもその記憶を守っている。"} }
    ],
    legend: {
      en: "The story of Taisuke and his uncle's head comes down through the Inoue family and later retellings; its outline is consistent, but details such as the exact temple vary and cannot be checked. So does the popular picture of Inoue as a plodding swordsman: his late licence is documented, but \"slow\" may say more about the prodigies around him than about him.",
      ja: "泰助が叔父の首を運んだ話は井上家とその後の語りによって伝えられたもので、大筋は一致しているが、寺の名など細部には異同があり確かめようがない。「剣の上達が遅い人」という通俗的な人物像も同様である。免許取得が遅かったことは記録にあるが、「遅い」という印象は、本人よりも周囲の天才たちを物語っているのかもしれない。"
    }
  },

  /* ------------------------------------------------------------ */
  yamanami: {
    kanji: "山", life: "1833–1865", group: "leaders",
    name: {en: "Yamanami Keisuke", ja: "山南敬助"},
    role: {en: "General secretary (sōchō)", ja: "総長"},
    summary: {
      en: "The corps' gentle, scholarly general secretary — a licensed Hokushin Ittō-ryū swordsman whom the people of Mibu called \"Yamanami the Buddha.\" Increasingly at odds with the corps' direction, he deserted, returned without resistance, and died by its code, mourned even by those who enforced it.",
      ja: "新選組総長。北辰一刀流の免許を持つ学識の人で、壬生の人々に「仏の山南」と慕われた。隊の方向性への違和感を深めて脱走し、抵抗なく戻り、自らも作った法度に従って死んだ。処断した側さえ、彼の死を悼んだ。"
    },
    sections: [
      { h: {en: "Early life", ja: "生い立ち"},
        b: {en: "Traditionally said to have been born in 1833 to a retainer family of the Sendai domain, Yamanami trained in Hokushin Ittō-ryū — the great modernizing sword school of the Chiba family — before joining the Shieikan circle. One account has him losing a bout to Kondō and, in the custom of wandering swordsmen, attaching himself to the man who beat him. Educated and even-tempered, he was the intellectual counterweight in a house of fighters.",
            ja: "1833年（天保4年）、仙台藩士の家に生まれたと伝えられる。千葉家の北辰一刀流を学んで免許を得たのち、試衛館の一門に加わった。近藤との試合に敗れ、武者修行の習いに従って敗れた相手の門に身を寄せたという逸話が残る。学があり温厚で、剣客揃いの一門における知性の側の重しだった。"} },
      { h: {en: "In the Shinsengumi", ja: "新選組時代"},
        b: {en: "A founding member and participant in the Serizawa purge, Yamanami held the grand title of general secretary — yet real authority flowed through Hijikata, and Yamanami found himself progressively sidelined. His unease seems to have been more than personal: sources suggest he opposed the corps' hardening character, and by some accounts the planned move into Nishi Honganji, the head temple of a sect with millions of common adherents. In February 1865 he left a note and rode east.",
            ja: "結成以来の同志で芹沢粛清にも加わり、「総長」という最高位の肩書を持ちながら、実権は土方に集まり、山南は次第に閑職へ追いやられていった。彼の憂鬱は個人的な不遇だけではなかったらしい。隊の苛烈化への反対、また一説には、庶民数百万の信仰を集める西本願寺への屯所移転計画への異議が伝えられる。1865年2月（元治2年）、置き手紙を残して東へ去った。"} },
      { h: {en: "Death", ja: "最期"},
        b: {en: "Overtaken at Ōtsu by Okita — sent, perhaps deliberately, as the pursuer he would never fight — Yamanami returned without resistance. On March 20, 1865, he died by seppuku at the Mibu barracks with Okita as his second. Tradition holds that his lover, Akesato of the Shimabara quarter, was allowed a farewell through the lattice window the night before. The Mibu townspeople, whose children he had befriended, mourned him deeply; his grave at Kōen-ji still receives flowers.",
            ja: "大津で追っ手の沖田総司に追いつかれると——決して刃を向けられぬ相手をあえて差し向けたとも言われる——山南は抵抗せず戻った。1865年3月20日（元治2年2月23日）、壬生の屯所で切腹。介錯は沖田が務めた。前夜、島原の恋人・明里との格子越しの今生の別れが許されたと伝わる。子供たちと遊ぶ彼を知る壬生の人々は深くその死を悼み、光縁寺の墓には今も花が絶えない。"} }
    ],
    legend: {
      en: "The window farewell with Akesato appears first in Shimozawa Kan's 20th-century writings, which blended interviews with invention; treat it as beloved legend rather than record. The deeper puzzle — why a man who helped write the code chose a death it prescribed, when escape was surely within his ability — remains genuinely open.",
      ja: "明里との窓越しの別れの場面は、聞き書きと創作を織り交ぜた子母澤寛の20世紀の著作に初出であり、記録というより愛された伝承として扱うべきである。より深い謎——法度を作った側の人間が、逃げ切る力は十分あったはずなのに、なぜその法度の定める死を選んだのか——は、今も本当に解かれていない。"
    }
  },

  /* ------------------------------------------------------------ */
  serizawa: {
    kanji: "芹", life: "c.1826–1863", group: "leaders",
    name: {en: "Serizawa Kamo", ja: "芹沢鴨"},
    role: {en: "Founding commander", ja: "筆頭局長"},
    summary: {
      en: "The corps' violent founding commander: a Mito man of genuine samurai birth and sonnō-jōi pedigree whose drunken outrages — extortion, arson, assault — shamed the corps' Aizu patrons until his own comrades were ordered to destroy him.",
      ja: "新選組草創期の筆頭局長。水戸の正真正銘の武士であり尊攘運動の年季も本物だったが、酒乱と乱暴——強請、放火、暴行——が庇護者・会津藩の面目を潰し続け、ついに同志の手で葬られた。"
    },
    sections: [
      { h: {en: "Origins", ja: "出自"},
        b: {en: "Serizawa's early life is genuinely obscure — even his birth year (around 1826) and original name are uncertain, though he came of samurai stock in the Mito domain, the ideological furnace of the sonnō-jōi movement. He is generally identified with a man active in Mito's radical loyalist bands of the early 1860s, and he carried the movement's credentials into the Rōshigumi, where his rank and seniority made him the natural senior commander. He famously carried an enormous iron-ribbed fan inscribed \"a warrior of utmost loyalty and patriotism.\"",
            ja: "芹沢の前半生は本当に謎が多い。生年（1826年頃）も本名も確定しない。ただし尊皇攘夷思想の発火点・水戸藩の武士の出であることは確かで、1860年代初頭の水戸の過激な尊攘組織で活動した人物と同一視されるのが通説である。浪士組ではその家格と経歴から自然と筆頭格に座った。「尽忠報国之士 芹沢鴨」と刻んだ鉄扇を常に携えていた。"} },
      { h: {en: "The Mibu months", ja: "壬生での日々"},
        b: {en: "In Kyoto, Serizawa's faction and Kondō's shared command of the new corps — and Serizawa's conduct rapidly became its liability. He extorted money from merchants at swordpoint; when the Yamatoya silk merchant resisted, he had the warehouse burned in the middle of the city. He brawled with sumo wrestlers in Osaka, leaving dead men behind. Each outrage landed on the desk of the Aizu domain, the corps' patron and guarantor. In the autumn of 1863 Aizu's patience ended, and the order — explicit or understood — passed to Kondō's faction.",
            ja: "京都では芹沢派と近藤派が新しい隊を共同で率いたが、芹沢の行状はたちまち組織の重荷となった。商家に刀を突きつけて金を強請り、生糸商・大和屋が拒むと市中で蔵に火を放った。大坂では力士たちと乱闘し、死者まで出した。不始末の報せはそのたびに庇護者・会津藩に届いた。1863年秋、会津の堪忍袋の緒が切れ、——明示か黙認かはともかく——処断の命が近藤派に下った。"} },
      { h: {en: "Assassination", ja: "暗殺"},
        b: {en: "On a night of driving rain in the autumn of 1863 (accounts differ on the exact date), after a party at the Sumiya in Shimabara, Serizawa was cut down as he slept at the Yagi house in Mibu, along with his companion Oume; his lieutenant Hirayama Gorō died in the next room. The corps blamed Chōshū assassins and gave him a grand funeral. The killers were his own comrades — most accounts name Hijikata, Okita, Yamanami, and Harada, in varying combinations. With the purge, command passed undivided to Kondō, and the Shinsengumi as history knows it began.",
            ja: "1863年秋の豪雨の夜（正確な日付には異説がある）、島原・角屋での宴会の後、壬生の八木邸で就寝中の芹沢は、愛妾お梅もろとも斬殺された。隣室では平山五郎が殺された。隊は「長州人の仕業」と称して盛大な葬儀を営んだが、実行者は同じ屯所の同志たち——多くの記録は土方・沖田・山南・原田らの名を（組み合わせを変えつつ）挙げる。この粛清により指揮権は近藤に一本化され、歴史の知る「新選組」がここに始まった。"} }
    ],
    legend: {
      en: "Serizawa is history's designated villain, and much of the surviving detail comes from the winning faction's descendants and from the Yagi family's later reminiscences. The outrages are well attested; the cartoonish brute is partly narrative convenience. Some historians read him as a genuine radical who considered the corps his movement, not Kondō's.",
      ja: "芹沢は歴史の「悪役」に配役された男であり、現存する逸話の多くは勝った側の系譜と、後年の八木家の回想に由来する。乱暴狼藉の数々はよく裏付けられているが、漫画的な粗暴漢像には物語上の都合も混じる。彼を、新選組を近藤のものではなく自らの運動と考えていた本物の過激派と読み直す歴史家もいる。"
    }
  },
  /* ------------------------------------------------------------ */
  todo: {
    kanji: "藤", life: "1844–1867", group: "captains",
    name: {en: "Tōdō Heisuke", ja: "藤堂平助"},
    role: {en: "Captain, 8th unit", ja: "八番組組長"},
    summary: {en: "The youngest of the original Shieikan circle, nicknamed \"Sakigake-sensei\" — Mr. First-In — for always charging first. He took a sword cut across the forehead at the Ikedaya, brought Itō Kashitarō into the corps, then left with him, and was killed at Aburanokōji fighting the men he had marched beside for four years.",
     ja: "試衛館以来の同志のなかで最年少。いつも真っ先に斬り込むことから「魁先生」と呼ばれた。池田屋で額を斬られ、伊東甲子太郎を隊に引き入れ、やがて伊東とともに隊を去り、油小路で、四年間ともに歩んだ仲間たちと斬り合って死んだ。"},
    sections: [
      { h: {en: "Origins", ja: "生い立ち"},
        b: {en: "Tōdō was born in Edo in 1844. He claimed — or it was claimed for him — to be an unacknowledged son of the lord of the Tsu domain, whose family name he shared; the story was never proven, and it may have been no more than a way for a young man of uncertain birth to stand a little taller among swordsmen. What is clearer is that he trained in Hokushin Ittō-ryū, the polished Edo school of the Chiba family, before drifting into the rough company of Kondō's Shieikan.\n\nHe was barely nineteen when the Rōshigumi marched west in 1863, the youngest of the men who would form the core of the Shinsengumi.",
            ja: "1844年（弘化元年）、江戸に生まれる。伊勢津藩主・藤堂家の落胤だと称した、あるいはそう噂されたが、証明されたことはない。出自のはっきりしない若者が剣客たちのなかで少しでも胸を張るための話だったのかもしれない。確かなのは、千葉家の洗練された江戸の流派・北辰一刀流を学んだのち、近藤の試衛館の荒っぽい一門に加わったことである。\n\n1863年（文久3年）に浪士組が西へ上ったとき、彼はようやく十九歳。のちの新選組の中核をなす面々のなかで最も若かった。"} },
      { h: {en: "First through the door", ja: "魁先生"},
        b: {en: "In Kyoto Tōdō served as an assistant vice-commander and earned his nickname by always being first into a fight. At the Ikedaya in July 1864 he was one of the handful of men who went in with Kondō. In the stifling heat he pushed back his protective headband, and a sword stroke opened his forehead; he fought on half-blinded by blood and was carried out with the wound that marked him for the rest of his short life.\n\nThat autumn he went ahead to Edo to prepare a recruiting drive, and through his old ties in Hokushin Ittō-ryū circles he brought Kondō an important catch: Itō Kashitarō, a learned swordsman with his own following. When the corps was reorganized in 1865, Tōdō took command of the 8th unit.",
            ja: "京都では副長助勤を務め、いつも真っ先に斬り込むことからその異名がついた。1864年7月（元治元年6月）の池田屋では、近藤とともに踏み込んだわずかな手勢の一人だった。蒸し暑さに鉢金を押し上げたところへ刀を受けて額を割られ、流れる血で目もよく見えぬまま戦い続け、深手を負って運び出された。この傷は短い生涯の終わりまで残った。\n\nその秋、隊士募集の準備のため一足先に江戸へ下り、北辰一刀流の旧縁を通じて近藤に大きな人材を引き合わせる。自らの門弟を持つ学識ある剣客、伊東甲子太郎である。1865年に隊が再編されると、八番組の組長となった。"} },
      { h: {en: "With Itō", ja: "伊東とともに"},
        b: {en: "Itō's arrival changed the corps. He was a scholar of the imperial cause, and his views drifted steadily away from Kondō's loyalty to the shogunate. In the spring of 1867 Itō left to found the Goryō Eji, guards of the late Emperor Kōmei's tomb, taking more than a dozen men with him. Tōdō went with him. Whether he went from conviction, from loyalty to the man he had recruited, or from old ties to their shared sword school, no one can now say.",
            ja: "伊東の加入は隊を変えた。伊東は尊王の学者でもあり、その考えは近藤の幕府への忠義から次第に離れていった。1867年（慶応3年）春、伊東は孝明天皇の御陵を守る「御陵衛士」を結成して隊を離れ、十数名がこれに従った。藤堂もその一人だった。思想に共鳴したのか、自ら引き入れた人への義理か、同じ流派の縁か。今となっては誰にもわからない。"} },
      { h: {en: "Aburanokōji", ja: "油小路"},
        b: {en: "On December 13, 1867, Itō was invited to a drinking party at Kondō's mistress's house, cut down on his way home, and his body left in the street at Aburanokōji as bait. When the Goryō Eji came to recover it, the Shinsengumi was waiting. Tōdō died in the fight that followed, at twenty-three. He is buried with Itō and the other fallen of the Goryō Eji at Kaikō-ji, a sub-temple of Sennyū-ji in eastern Kyoto.",
            ja: "1867年12月13日（慶応3年11月18日）、伊東は近藤の妾宅での酒宴に招かれ、その帰途に斬られた。遺体は油小路の路上に放置され、おとりとされた。御陵衛士が引き取りに来たところを、新選組が待ち構えていた。続く斬り合いのなかで藤堂は死んだ。二十三歳だった。伊東ら御陵衛士の殉難者とともに、東山・泉涌寺の塔頭、戒光寺に眠る。"} }
    ],
    legend: {en: "Nagakura Shinpachi later wrote that Kondō wanted Tōdō spared, and that Nagakura himself opened a way for him to escape — only for another member, not knowing the order, to cut him down from behind. It is a moving story, told by a man who was there, but it comes from a memoir written decades later and cannot be checked. The Tsu-domain parentage is likewise unproven.",
     ja: "近藤は藤堂を生かすよう命じ、永倉新八自身が逃げ道を開けたが、その命を知らない別の隊士が背後から斬った——のちに永倉はそう書き残した。現場にいた人の胸を打つ証言だが、数十年後の回想録に拠るもので、確かめようがない。津藩主の落胤説も同様に証明されていない。"}
  },
  /* ------------------------------------------------------------ */
  takeda: {
    kanji: "武", life: "?–1867", group: "captains",
    name: {en: "Takeda Kanryūsai", ja: "武田観柳斎"},
    role: {en: "Captain, 5th unit; military instructor", ja: "五番組組長・軍学師範"},
    summary: {en: "The corps' instructor in traditional military science and one of its most ambitious officers. He fought at the Ikedaya and rose to captain the 5th unit, but when the corps turned to Western drill his learning became obsolete, his standing collapsed, and he left — and was killed by the corps in 1867.",
     ja: "隊の軍学師範であり、最も野心的な幹部の一人。池田屋で戦い五番組組長にまで昇ったが、隊が西洋式の調練に切り替えると彼の軍学は時代遅れとなり、立場は崩れた。隊を離れ、1867年、隊の手で討たれた。"},
    sections: [
      { h: {en: "A military scholar", ja: "軍学者"},
        b: {en: "Takeda came from Izumo province, on the Sea of Japan coast, and made his way as a teacher of Kōshū-style military science — the classical Japanese art of armies, formations and strategy, descended from the campaigns of the Takeda clan of Kai. He joined the corps in Kyoto in 1863, after the Rōshigumi had split, and his learning gave him a place few rank-and-file swordsmen could claim: he became the corps' instructor in military science, and later also taught letters. In a corps of swordsmen, he was the man who could talk about armies.",
            ja: "日本海側の出雲国の出身で、甲州流軍学——甲斐武田氏の兵法に由来する、軍勢・陣形・戦略を説く日本古来の兵学——の師として身を立てた。浪士組分裂後の1863年（文久3年）、京都で入隊。その学識によって、並の剣客には得られない地位を得た。隊の軍学師範であり、のちには文学師範も兼ねた。剣客ばかりの隊のなかで、軍勢を語ることのできる男だった。"} },
      { h: {en: "Rise", ja: "栄達"},
        b: {en: "He was one of the handful of men who went into the Ikedaya with Kondō in July 1864 and was rewarded accordingly. When the corps was reorganized in 1865 he was given the 5th unit. Contemporaries and later writers alike portray him as an assiduous courtier of Kondō's favour, and he seems to have made enemies among men who valued plain dealing.",
            ja: "1864年7月の池田屋では、近藤とともに踏み込んだわずかな手勢の一人であり、相応の恩賞を受けた。1865年の再編では五番組を任される。同時代人にも後世の書き手にも、近藤の歓心を熱心に求めた人物として描かれ、実直を重んじる隊士たちのあいだに敵を作ったらしい。"} },
      { h: {en: "Obsolete", ja: "時代遅れ"},
        b: {en: "From 1865 the corps began training in Western-style drill and firearms, and the shogunate itself was rebuilding its army on French lines. Kōshū-style military science, Takeda's whole claim to rank, became a relic almost overnight. His influence waned; he is said to have sought new patrons outside the corps, including, by some accounts, among its enemies. Sometime in 1866 or early 1867 he left.\n\nIn the summer of 1867 he was killed on the bank of the Kamo river near the Zenitori bridge, by men of the corps sent after him. For an officer who had left and was suspected of dealing with the other side, the Shinsengumi's code allowed only one outcome.",
            ja: "1865年頃から隊は西洋式の調練と銃砲の訓練を始め、幕府自身もフランス式に軍を作り直しつつあった。武田の地位の拠りどころだった甲州流軍学は、ほとんど一夜にして過去の遺物となった。影響力は衰え、隊の外に新たな後ろ盾を求めたと言われ、一説には敵方にまで近づいたという。1866年から1867年初めのあいだに、彼は隊を去った。\n\n1867年（慶応3年）夏、鴨川の銭取橋付近で、差し向けられた隊士たちの手にかかって死んだ。隊を離れ、敵方との内通を疑われた幹部に、新選組の掟が許す結末は一つしかなかった。"} }
    ],
    legend: {en: "Which members killed Takeda is not recorded with certainty; popular accounts name Saitō Hajime, but that rests on later tradition. Later fiction also made much of his personal life, with little basis in the record. His exact date of birth is unknown.",
     ja: "武田を討った隊士が誰だったかは確かな記録がない。通俗的には斎藤一の名が挙がるが、後世の伝承に拠る。私生活をめぐる後年の創作も多いが、記録上の根拠は乏しい。生年も不明である。"}
  },
  /* ------------------------------------------------------------ */
  tani: {
    kanji: "谷", life: "?–1866", group: "captains",
    name: {en: "Tani Sanjūrō", ja: "谷三十郎"},
    role: {en: "Captain, 7th unit; spear instructor", ja: "七番組組長・槍術師範"},
    summary: {en: "A spearman from a samurai family of Bitchū Matsuyama who joined with his two younger brothers. He captained the 7th unit and taught the spear; his youngest brother was adopted by Kondō as heir. He died suddenly in Gion in 1866, and how he died is still argued over.",
     ja: "備中松山の武士の家に生まれた槍の名手で、二人の弟とともに入隊した。七番組組長として槍術を教え、末弟は近藤の養子に迎えられた。1866年、祇園で急死。その死因は今も議論が分かれる。"},
    sections: [
      { h: {en: "Three brothers", ja: "谷三兄弟"},
        b: {en: "Tani came from a samurai family of the Bitchū Matsuyama domain, in what is now Okayama prefecture. The family lost its position and the brothers made their living by their skills; Sanjūrō and his brother Mantarō were spearmen, and Mantarō ran a dōjō in Osaka. The three brothers — Sanjūrō, Mantarō and the youngest, Masatake — all joined the Shinsengumi in its Kyoto years.\n\nTheir home domain had an unusual connection to the regime the corps served: its lord, Itakura Katsukiyo, was one of the shogunate's senior councillors (rōjū) through much of the 1860s. Whether that tie helped the brothers find a place in a shogunal police corps is not recorded, but men from Matsuyama had reason to see the shogunate's cause as their own.",
            ja: "現在の岡山県にあたる備中松山藩の武士の家の出身。家は禄を失い、兄弟は腕一本で身を立てた。三十郎と弟の万太郎は槍の遣い手で、万太郎は大坂で道場を開いていた。三十郎・万太郎・末弟の昌武の三兄弟は、そろって京都時代の新選組に加わった。\n\n郷里の藩は、隊が仕えた政権と特別なつながりを持っていた。藩主の板倉勝静は、1860年代の大半を通じて幕府の老中を務めていたのである。その縁が兄弟の入隊を後押ししたかどうかは記録にないが、松山の人間にとって幕府の大義は他人事ではなかったはずだ。"} },
      { h: {en: "Captain and kinsman", ja: "組長、そして近藤の縁者"},
        b: {en: "Sanjūrō's standing rose quickly. Around this time the corps formalised its training by appointing instructors in each discipline — swordsmanship, spear, jūjutsu, military science, letters, gunnery and horsemanship — so that a captain was often also a teacher. When the corps was reorganized in 1865 Tani received the 7th unit and served as its instructor in the spear, the weapon of choice for holding a narrow street or doorway. That year Kondō, who had no son, adopted the youngest brother Masatake as his heir under the name Kondō Shūhei — a remarkable honour that bound the Tani family to the commander himself.",
            ja: "三十郎の地位は急速に上がった。この頃、隊は撃剣・槍術・柔術・軍学・文学・砲術・馬術と分野ごとに師範を置いて訓練を制度化しており、組長が師範を兼ねることも多かった。1865年の再編で七番組を任され、槍術師範を務めた。槍は狭い路地や戸口を押さえるのに最も頼りになる武器だった。同じ年、男子のいない近藤は末弟の昌武を養子に迎え、近藤周平と名乗らせる。谷家を局長その人に結びつける、異例の厚遇だった。"} },
      { h: {en: "Death in Gion", ja: "祇園での急死"},
        b: {en: "In the spring of 1866 Tani died suddenly near the stone steps of the Yasaka shrine in Gion. The records of the corps do not explain how. After his death, the Tani family's place close to Kondō did not last; Shūhei's adoption was later dissolved.",
            ja: "1866年（慶応2年）春、祇園・八坂神社の石段下付近で急死した。隊の記録はその理由を語らない。彼の死後、近藤のそばにあった谷家の立場は長く続かず、周平の養子縁組ものちに解消された。"} }
    ],
    legend: {en: "Because his death was sudden and unexplained, rumour filled the gap. Popular accounts say he was assassinated by his own comrades, and Saitō Hajime is often named — but no contemporary record supports this, and illness remains just as possible. Stories that he was disliked and incompetent come largely from later writers.",
     ja: "急死で説明がないため、噂がその空白を埋めた。通俗的には同志の手で暗殺されたとされ、斎藤一の名がよく挙げられるが、同時代の記録による裏付けはなく、病死の可能性も同じくらいある。嫌われ者で無能だったという話も、多くは後世の書き手による。"}
  },
  /* ------------------------------------------------------------ */
  matsubara: {
    kanji: "松", life: "?–1865", group: "captains",
    name: {en: "Matsubara Chūji", ja: "松原忠司"},
    role: {en: "Captain, 4th unit; jūjutsu instructor", ja: "四番組組長・柔術師範"},
    summary: {en: "A big, shaven-headed jūjutsu master from Osaka, known for his kindness, who captained the 4th unit. He died in 1865, and the circumstances are lost under one of the most enduring legends of the corps.",
     ja: "坊主頭の大男で、大坂の柔術の達人。人の好さで知られ、四番組を率いた。1865年に死去。その経緯は、新選組でも指折りの根強い伝説の下に埋もれている。"},
    sections: [
      { h: {en: "The \"modern Benkei\"", ja: "今弁慶"},
        b: {en: "Matsubara was a master of Sekiguchi-ryū jūjutsu from the Osaka area who joined the corps in its early Kyoto days. Sekiguchi-ryū was one of the oldest schools of jūjutsu, founded in the early Edo period and taught across western Japan — a respectable pedigree for a fighter whose art relied on throws, locks and close grappling rather than the sword. A large man who kept his head shaved, he was nicknamed after Benkei, the giant warrior-monk of medieval legend. He was remembered as good-natured and generous — in a corps known for its severity, a man people liked.",
            ja: "大坂方面の関口流柔術の達人で、京都時代の初期に入隊した。関口流は江戸時代初期に興った最古級の柔術流派の一つで、西日本に広く伝わった。刀ではなく投げ・関節・組み討ちを拠りどころとする武術家にとって、申し分のない系譜である。大柄で頭を丸めていたことから、中世の伝説の怪僧・弁慶になぞらえて「今弁慶」と呼ばれた。人柄は穏やかで面倒見がよく、厳しさで知られた隊のなかで、人に好かれる人物として記憶されている。"} },
      { h: {en: "Captain", ja: "組長"},
        b: {en: "When the corps was reorganized in 1865, Matsubara was given command of the 4th unit and served as the corps' instructor in jūjutsu, the art of fighting unarmed or close in. In these years the corps formalised its training by appointing instructors in each discipline — swordsmanship, spear, jūjutsu, military science, letters, gunnery and horsemanship — so that a captain was often also a teacher. Beyond these appointments, the record of Matsubara's service is thin.",
            ja: "1865年の再編で四番組の組長となり、素手や組み討ちの武術である柔術の師範を務めた。この時期、隊は撃剣・槍術・柔術・軍学・文学・砲術・馬術と分野ごとに師範を置いて訓練を制度化しており、組長が師範を兼ねることも多かった。こうした役職のほかには、彼の働きを伝える記録は乏しい。"} },
      { h: {en: "Death", ja: "最期"},
        b: {en: "Matsubara died in the autumn of 1865. Contemporary records note the death but say little about its cause, and some accounts suggest he had fallen from favour shortly before. Into that silence stepped one of the corps' most famous stories.",
            ja: "1865年（慶応元年）秋、松原は死去した。同時代の記録は死を伝えるのみで原因をほとんど語らず、直前に不興を買っていたとする記述もある。その沈黙のなかに、隊でも指折りの有名な物語が入り込んだ。"} }
    ],
    legend: {en: "The \"Mibu double suicide\" story — that Matsubara killed a man in a quarrel, fell in love with his widow while caring for her, and died with her — was popularised by Shimozawa Kan in the 20th century. It is a powerful tale, but it has no support in contemporary records and should be read as fiction built around a real man's unexplained death.",
     ja: "「壬生心中」——松原が喧嘩で人を斬り、その未亡人の面倒を見るうちに恋に落ち、ともに死んだという話——は、20世紀に子母澤寛によって広められた。心を打つ物語だが、同時代の記録による裏付けはなく、ある人物の説明のつかない死をもとに作られた創作として読むべきものである。"}
  },
  /* ------------------------------------------------------------ */
  suzuki: {
    kanji: "鈴", life: "1837–1919", group: "captains",
    name: {en: "Suzuki Mikisaburō", ja: "鈴木三樹三郎"},
    role: {en: "Captain, 9th unit", ja: "九番組組長"},
    summary: {en: "Itō Kashitarō's younger brother, who joined with him in 1864 and captained the 9th unit. He left with Itō for the Goryō Eji, survived the ambush at Aburanokōji that killed his brother, fought against the shogunate in the Boshin War, and lived on into the 20th century.",
     ja: "伊東甲子太郎の実弟。1864年に兄とともに入隊し、九番組を率いた。兄に従って御陵衛士となり、兄の命を奪った油小路の待ち伏せを生き延び、戊辰戦争では幕府と戦う側に回り、20世紀まで生きた。"},
    sections: [
      { h: {en: "Itō's brother", ja: "伊東の弟"},
        b: {en: "Suzuki was born in 1837 in Shizuku, Hitachi province, the younger brother of the man who would become Itō Kashitarō; the family name was Suzuki, and Itō took his new name on being adopted into a dōjō family in Edo. When Itō joined the Shinsengumi in the autumn of 1864, Mikisaburō came with him.",
            ja: "1837年（天保8年）、常陸国志筑に生まれる。のちの伊東甲子太郎の実弟である。生家の姓は鈴木で、兄は江戸の道場の家に養子に入って伊東を名乗った。1864年秋に伊東が新選組に加わると、三樹三郎も兄に従った。"} },
      { h: {en: "Captain", ja: "組長"},
        b: {en: "In the 1865 reorganization he received the 9th unit. His position owed a great deal to his brother, whose learning and following made him one of the most important men in the corps; Mikisaburō's own record in these years is modest.",
            ja: "1865年の再編で九番組を任される。この地位は、学識と門人を背景に隊の重鎮となった兄に負うところが大きかった。この時期の三樹三郎自身の事績は控えめである。"} },
      { h: {en: "The Goryō Eji and after", ja: "御陵衛士、そしてその後"},
        b: {en: "In 1867 he left with Itō to form the Goryō Eji. On the night of December 13, 1867, when the survivors came to recover Itō's body at Aburanokōji and were ambushed, Mikisaburō was among those who escaped; he found refuge in the Satsuma domain's residence. The survivors of the Goryō Eji took their revenge where they could — Kondō was shot and wounded from ambush a few weeks later — and in the Boshin War that followed they fought on the side of the new government.\n\nSuzuki lived until 1919, long enough to see the Shinsengumi pass from living memory into legend.",
            ja: "1867年、兄とともに隊を離れ御陵衛士となる。1867年12月13日夜、伊東の遺体を引き取りに来た衛士たちが油小路で待ち伏せを受けたとき、三樹三郎は脱出した一人で、薩摩藩邸に逃れた。御陵衛士の生き残りは機をうかがって報復し——数週間後、近藤は待ち伏せの銃撃で負傷する——続く戊辰戦争では新政府側に立って戦った。\n\n鈴木は1919年（大正8年）まで生きた。新選組が生きた記憶から伝説へと移っていくのを見届けるほどに。"} }
    ]
  },
  /* ------------------------------------------------------------ */
  ito: {
    kanji: "伊", life: "1835–1867", group: "officers",
    name: {en: "Itō Kashitarō", ja: "伊東甲子太郎"},
    role: {en: "Staff officer (sanbō)", ja: "参謀"},
    summary: {en: "The most learned man ever to join the Shinsengumi: a Mito-trained scholar and master swordsman who brought his own following into the corps in 1864, rose at once to staff officer, and within three years had split it — founding the imperial tomb guards known as the Goryō Eji. He was lured to a party by Kondō and cut down on the way home at Aburanokōji.",
     ja: "新選組に加わった最大の学識者。水戸学を修めた学者にして剣の達人で、1864年に自らの門人を率いて入隊し、ただちに参謀となった。三年を経ずして隊を割り、天皇陵を守る「御陵衛士」を結成する。近藤の酒宴に招かれ、その帰途、油小路で斬られた。"},
    sections: [
      { h: {en: "Scholar and swordsman", ja: "学者にして剣客"},
        b: {en: "Itō was born in 1835 in Shizuku, Hitachi province (now part of Kasumigaura in Ibaraki), as Suzuki Ōkura, the son of a minor retainer whose family fell on hard times. Hitachi lay next to the Mito domain, the intellectual heart of the sonnō-jōi movement, and Itō absorbed its learning — the study of Japanese history as a story of loyalty to the emperor — alongside its swordsmanship.\n\nHe went to Edo and trained in Hokushin Ittō-ryū at the Fukagawa dōjō of Itō Seiichi. He did so well that the family adopted him as heir; he married into it, took the name Itō, and inherited the school. By his late twenties he was a dōjō master with his own students, a published poet and a man of political convictions — an unusual combination in an age when most swordsmen were one thing or the other.",
            ja: "1835年（天保6年）、常陸国志筑（現・茨城県かすみがうら市）に、困窮した下級の家臣の子・鈴木大蔵として生まれる。常陸は尊皇攘夷運動の思想的中心・水戸藩の隣国で、伊東はその学問——日本の歴史を天皇への忠義の物語として読む水戸学——を剣とともに身につけた。\n\n江戸へ出て、深川の伊東精一の道場で北辰一刀流を修める。腕を見込まれて婿養子となり、伊東姓を名乗って道場を継いだ。二十代後半にして門人を持つ道場主であり、歌を詠み、政治的な信念を持つ人物となっていた。剣客の多くがそのどれか一つにすぎなかった時代には、珍しい取り合わせである。"} },
      { h: {en: "Into the corps", ja: "入隊"},
        b: {en: "In the autumn of 1864, after the Ikedaya had made the Shinsengumi famous, Kondō went east to recruit. Tōdō Heisuke, who had trained in the same school, brought him to Itō. Itō agreed to join and came west with his younger brother Suzuki Mikisaburō and several of his own followers. Because the year was a kinoe-ne (甲子) year in the sixty-year calendar, he took the name Kashitarō to mark it.\n\nKondō gave him an extraordinary welcome: the new post of staff officer (sanbō), outranking the unit captains, and the instructorship in letters. In 1865 and 1866 Itō went with Kondō on the shogunate's missions to Hiroshima to question envoys of Chōshū — work that called for learning and argument, not swordsmanship.",
            ja: "1864年（元治元年）秋、池田屋で名を上げた新選組の近藤は、隊士募集のため東へ下った。同じ流派の縁を持つ藤堂平助が、近藤を伊東に引き合わせる。伊東は入隊を承諾し、実弟の鈴木三樹三郎と自らの門人数名を連れて西へ上った。この年が六十干支の甲子（きのえね）の年にあたることから、「甲子太郎」と名を改めた。\n\n近藤は破格の待遇で迎えた。組長たちの上に立つ新設の「参謀」の職と、文学師範である。1865年から翌年にかけて、伊東は長州の使者を詰問する幕府の広島派遣に近藤とともに加わった。剣ではなく、学識と弁論が求められる仕事だった。"} },
      { h: {en: "The split", ja: "分離"},
        b: {en: "Itō's loyalties were not Kondō's. Kondō served the shogunate; Itō, the Mito scholar, served the emperor, and by 1866 the two causes were visibly pulling apart. Rather than desert — which the corps punished with death — Itō found an honourable exit. In the spring of 1867, with the backing of a court-connected temple, he and more than a dozen men left to become the Goryō Eji, guards of the tomb of the late Emperor Kōmei. Based at a sub-temple of Kōdai-ji in eastern Kyoto, they were also called the Kōdai-ji party.\n\nAmong those who followed him were Tōdō Heisuke and — as the corps would later reveal — Saitō Hajime, who was in fact Kondō's spy. In the months that followed, Itō petitioned the court with proposals for national policy and moved in loyalist circles that the Shinsengumi had been formed to suppress.",
            ja: "伊東の忠誠の向かう先は、近藤のそれとは違っていた。近藤は幕府に仕え、水戸学者の伊東は天皇に仕えた。1866年には、二つの大義がはっきりと分かれ始めていた。脱走すれば隊は死をもって罰する。伊東は脱走ではなく、名分の立つ出口を見つけた。1867年（慶応3年）春、朝廷とつながりのある寺の後ろ盾を得て、十数名とともに隊を離れ、亡き孝明天皇の御陵を守る「御陵衛士」となったのである。東山・高台寺の塔頭を屯所としたことから「高台寺党」とも呼ばれた。\n\n伊東に従った者のなかには藤堂平助、そして——のちに明らかになるように、実は近藤の間者だった——斎藤一がいた。その後の数か月、伊東は国策について朝廷に建白し、新選組がまさに取り締まるために作られた尊攘派の人脈のなかを動いた。"} },
      { h: {en: "Aburanokōji", ja: "油小路"},
        b: {en: "Saitō returned to the corps in the late autumn of 1867 with the report that Itō was plotting to kill Kondō. On December 13, 1867, Kondō invited Itō to drink at his mistress's house. Itō went — whether from confidence, courtesy or a misjudgment of his old comrades. On his way home, near Aburanokōji, he was speared and cut down. His body was left in the street to draw out the Goryō Eji, and when they came to recover it, the Shinsengumi was waiting.\n\nItō was thirty-two. He is buried with Tōdō, Hattori and the other dead of that night at Kaikō-ji, a sub-temple of Sennyū-ji, near the imperial tombs he had sworn to guard.",
            ja: "1867年晩秋、斎藤は「伊東が近藤の暗殺を企てている」との報を携えて隊に戻った。1867年12月13日（慶応3年11月18日）、近藤は伊東を妾宅での酒宴に招く。伊東は応じた。自信からか、礼儀からか、かつての同志への見込み違いからか。帰途、油小路の近くで槍を受け、斬り倒された。遺体は御陵衛士をおびき出すため路上に放置され、引き取りに来た衛士たちを新選組が待ち構えていた。\n\n伊東、三十二歳（数え三十三歳）。藤堂・服部らその夜の死者とともに、自らが守ると誓った御陵に近い泉涌寺の塔頭・戒光寺に眠る。"} }
    ],
    legend: {en: "Whether Itō really planned to assassinate Kondō is unproven; the claim comes from the Shinsengumi side, through Saitō, and served to justify the killing. His famous dying words — \"Traitors!\" — come from later retellings. Many historians see him less as a schemer than as a man of real convictions who tried, and failed, to leave the corps without breaking its law.",
     ja: "伊東が本当に近藤暗殺を企てていたかは証明されていない。この話は斎藤を経た新選組側からのもので、暗殺を正当化する役割を果たした。「奸賊ばら」という有名な最期の言葉も後年の語りによる。伊東を策士というより、隊の法度を破らずに隊を去ろうとして果たせなかった、信念の人とみる歴史家も多い。"}
  },
  /* ------------------------------------------------------------ */
  shinohara: {
    kanji: "篠", life: "1828–1911", group: "officers",
    name: {en: "Shinohara Tainoshin", ja: "篠原泰之進"},
    role: {en: "Inspector, then Goryō Eji", ja: "監察、のち御陵衛士"},
    summary: {en: "Itō's right-hand man: a tough, older fighter from Kyushu who joined with him in 1864, served as an inspector and jūjutsu instructor, left with him for the Goryō Eji, survived the night Itō was killed — and lived on into the 20th century, leaving one of the few accounts written from the other side of the corps' great split.",
     ja: "伊東の片腕。九州出身の年長の猛者で、1864年に伊東とともに入隊し、監察と柔術師範を務めた。伊東に従って御陵衛士となり、伊東が殺された夜を生き延び、20世紀まで生きた。隊の大分裂を「向こう側」から記した数少ない記録を残している。"},
    sections: [
      { h: {en: "From Kyushu to Edo", ja: "九州から江戸へ"},
        b: {en: "Shinohara was born in 1828 in Chikugo province in northern Kyushu, of humble origins. He made his way to Edo, served in the households of samurai, and became a capable fighter with the spear and in jūjutsu. Somewhere along the way he fell in with Itō Kashitarō's circle, and when Itō joined the Shinsengumi in 1864, Shinohara — seven years older and a man of the world — came with him.",
            ja: "1828年（文政11年）、九州北部の筑後国に生まれる。出自は低かった。江戸へ出て武家奉公をしながら、槍と柔術に優れた遣い手となった。いつしか伊東甲子太郎の一門と交わり、1864年に伊東が新選組に加わると、七つ年上で世故に長けた篠原も行動をともにした。"} },
      { h: {en: "In the corps", ja: "隊での働き"},
        b: {en: "In the Shinsengumi he served as an inspector and investigator — the officers who watched the members and gathered intelligence in the city — and as one of the corps' jūjutsu instructors. He was Itō's most dependable lieutenant, and in 1867 he went with him to found the Goryō Eji.",
            ja: "新選組では諸士取調役兼監察——隊士を監視し、市中で情報を集める役——を務め、柔術師範の一人でもあった。伊東の最も頼れる腹心であり、1867年には伊東とともに御陵衛士の結成に加わった。"} },
      { h: {en: "Survivor", ja: "生き残った者"},
        b: {en: "On the night of December 13, 1867, when the Goryō Eji came to recover Itō's body at Aburanokōji and fell into the Shinsengumi's ambush, Shinohara was among those who fought their way out, escaping to the Satsuma domain's residence. The survivors did not forget: a few weeks later Kondō was ambushed and shot through the shoulder near Fushimi, and Shinohara is named among the men responsible. In the Boshin War he fought on the new government's side.\n\nIn the Meiji era he took the name Hata Shigechika and served in minor official posts. He died in 1911, aged about eighty-three. His diary and recollections — a rare view of the Shinsengumi from Itō's side — remain an important source for historians.",
            ja: "1867年12月13日夜、伊東の遺体を引き取りに来た御陵衛士が油小路で新選組の待ち伏せに遭ったとき、篠原は斬り抜けて薩摩藩邸に逃れた一人だった。生き残った者たちは忘れなかった。数週間後、近藤は伏見近くで待ち伏せを受けて肩を撃ち抜かれる。その実行者の一人として篠原の名が挙がっている。戊辰戦争では新政府軍の側で戦った。\n\n明治に入ると秦林親（はた しげちか）と名乗り、下級の官職に就いた。1911年（明治44年）、八十三歳ほどで没する。彼の日記と回想は、伊東の側から新選組を見た貴重な証言として、いまも歴史家の重要な史料である。"} }
    ]
  },
  /* ------------------------------------------------------------ */
  hattori: {
    kanji: "服", life: "1832–1867", group: "officers",
    name: {en: "Hattori Takeo", ja: "服部武雄"},
    role: {en: "Goryō Eji", ja: "御陵衛士"},
    summary: {en: "A powerful two-sword fighter from Akō who joined the corps, followed Itō into the Goryō Eji, and died at Aburanokōji fighting alone against many — a last stand that even his enemies remembered with respect.",
     ja: "赤穂出身の二刀流の剛の者。新選組に加わり、伊東に従って御陵衛士となり、油小路で多勢を相手に一人戦って死んだ。その最期は、敵方にさえ敬意をもって記憶された。"},
    sections: [
      { h: {en: "Origins", ja: "生い立ち"},
        b: {en: "Hattori was born in 1832 in the Akō domain of Harima province, famous throughout Japan as the home of the Forty-Seven Rōnin. He was a big, strong man and a skilled swordsman who fought with two swords at once — a rare style that demanded both strength and long training. He joined the Shinsengumi in its Kyoto years and served as an inspector, and he was close to Itō Kashitarō's circle.",
            ja: "1832年（天保3年）、四十七士の故郷として全国に知られる播磨国赤穂に生まれる。大柄で膂力に優れ、両手に刀を執る二刀流の遣い手だった。力と長年の修練をともに要する、珍しい流儀である。京都時代に新選組に加わって監察を務め、伊東甲子太郎の一門と近かった。"} },
      { h: {en: "The last stand", ja: "最期の奮戦"},
        b: {en: "In 1867 he left with Itō to join the Goryō Eji. On the night of December 13, 1867, he was among the men who went to Aburanokōji to recover Itō's body. When the Shinsengumi sprang its ambush, Hattori stood his ground with a sword in each hand while those around him fell or fled. He was overwhelmed in the end; his body was found covered in wounds.\n\nShinsengumi survivors, Nagakura Shinpachi among them, later spoke of his courage that night with open admiration. He was thirty-five, and he lies with Itō and Tōdō at Kaikō-ji.",
            ja: "1867年、伊東とともに隊を離れ御陵衛士に加わる。1867年12月13日夜、伊東の遺体を引き取りに油小路へ向かった一人だった。新選組が待ち伏せを仕掛けると、周囲の者が斃れ、あるいは逃れるなか、服部は両手に刀を執って踏みとどまった。最後には力尽き、その遺体は無数の傷に覆われていたという。\n\n永倉新八をはじめ新選組の生き残りたちは、後年、その夜の服部の勇戦を率直な賞賛をこめて語った。享年三十五（数え三十六）。伊東・藤堂とともに戒光寺に眠る。"} }
    ],
    legend: {en: "The details of Hattori's last fight — how many he faced, how long he held out — come mainly from Shinsengumi survivors' later recollections, which may have grown in the telling. That he fought hard and died with many wounds is consistently reported.",
     ja: "服部の最期の戦いの細部——何人を相手にし、どれほど持ちこたえたか——は、主に新選組の生き残りの後年の回想に拠り、語られるうちに膨らんだ可能性がある。激しく戦い、多くの傷を負って死んだことは、どの記録でも一致している。"}
  },
  /* ------------------------------------------------------------ */
  yamazaki: {
    kanji: "崎", life: "?–1868", group: "officers",
    name: {en: "Yamazaki Susumu", ja: "山崎烝"},
    role: {en: "Inspector (kansatsu)", ja: "諸士調役兼監察"},
    summary: {en: "The corps' eyes and ears: an Osaka man who became its chief of intelligence, credited with the surveillance that led to the Ikedaya raid, and who later learned field medicine. Wounded in the retreat from Toba–Fushimi, he died on the way to Edo.",
     ja: "隊の目と耳。大坂の人で、隊の諜報の要となり、池田屋事件につながる探索の功労者とされる。のちには戦場医療も学んだ。鳥羽・伏見からの退却中に負傷し、江戸へ向かう途中で没した。"},
    sections: [
      { h: {en: "An Osaka man", ja: "大坂の人"},
        b: {en: "Yamazaki came from Osaka; by tradition he was the son of an acupuncturist, and his birth year is uncertain. He joined the Shinsengumi in its first Kyoto year, one of the recruits drawn from the Kansai region rather than from Tama, and his knowledge of the merchant cities of Osaka and Kyoto proved more valuable than any sword.",
            ja: "大坂の出身で、伝えによれば鍼医の子。生年ははっきりしない。京都時代の最初の年に入隊した、多摩ではなく上方出身の隊士の一人である。大坂・京の町人社会に通じていたことが、どんな剣の腕よりも役に立った。"} },
      { h: {en: "The inspector", ja: "監察"},
        b: {en: "By 1864 he was serving as an inspector and investigator (shoshi shirabeyaku ken kansatsu) — the officers who watched the corps' own members and gathered intelligence in the city. In the weeks before the Ikedaya incident, Yamazaki and other investigators are credited with the surveillance of the merchant Furutaka Shuntarō, whose arrest and confession revealed the loyalist plot. The corps' most famous night began with his quiet work.\n\nThe inspectors were the least visible and most feared officers in the corps. They reported directly to the leadership, and their findings could mean expulsion or death for a member who broke the code. Yamazaki held the post for the rest of the corps' time in Kyoto.",
            ja: "1864年（元治元年）には諸士調役兼監察——隊士自身を監視し、市中で情報を集める役——を務めていた。池田屋事件に先立つ数週間、山崎ら探索方は商人・古高俊太郎を内偵したとされ、その捕縛と自白が尊攘派の計画を明るみに出した。隊の最も有名な一夜は、彼の目立たない仕事から始まったのである。\n\n監察は隊でいちばん目立たず、いちばん恐れられた役だった。幹部に直接報告し、その調べは法度を破った隊士にとって除隊か死を意味しえた。山崎は京都時代の終わりまでこの職にあった。"} },
      { h: {en: "The corps' doctor", ja: "隊の医者"},
        b: {en: "When the shogunate's physician Matsumoto Ryōjun visited the corps in 1865 to inspect its health, he found the barracks full of sick men and set about reforming its hygiene. Yamazaki is said to have studied under him, learning the dressing of wounds and basic surgery, and to have served thereafter as the corps' medic — a man whom Ryōjun reportedly called the Shinsengumi's own doctor.",
            ja: "1865年（慶応元年）、幕府の医師・松本良順が隊の衛生状態を視察に訪れると、屯所は病人であふれていた。良順は衛生の改善に乗り出す。山崎はその良順に学び、傷の手当てや簡単な外科を身につけ、以後は隊の医療を担ったと伝わる。良順が「新選組の医者」と呼んだとも言われる。"} },
      { h: {en: "Death", ja: "最期"},
        b: {en: "In the fighting at Toba–Fushimi in January 1868, Yamazaki was badly wounded during the retreat south of Kyoto. He was taken aboard the shogunate's ships that carried the defeated army from Osaka back to Edo, and died on the voyage or shortly after arriving; by the most common account he was buried at sea.",
            ja: "1868年1月（慶応4年）の鳥羽・伏見の戦いで、山崎は京の南への退却中に深手を負った。敗軍を大坂から江戸へ運ぶ幕府の艦船に収容されたが、航海中、あるいは江戸到着の直後に没した。最も広く伝わる説では、水葬に付されたという。"} }
    ],
    legend: {en: "Much of Yamazaki's popular image — the master spy in disguise, the acupuncturist's son, the burial at sea — rests on later tradition, and the exact place and date of his death are disputed. His role in the Furutaka surveillance is widely credited but the surviving records name several investigators.",
     ja: "変装の名人の密偵、鍼医の子、水葬——山崎の通俗的な像の多くは後世の伝承に拠り、没した場所と日付にも異説がある。古高俊太郎の内偵での役割は広く認められているが、現存する記録には複数の探索方の名が見える。"}
  },
  /* ------------------------------------------------------------ */
  yoshimura: {
    kanji: "吉", life: "?–1868", group: "officers",
    name: {en: "Yoshimura Kan'ichirō", ja: "吉村貫一郎"},
    role: {en: "Inspector; sword instructor", ja: "諸士調役兼監察・撃剣師範"},
    summary: {en: "A swordsman from the Nanbu domain of Morioka who joined in 1865 and rose to inspector and sword instructor. He vanished from the record after Toba–Fushimi; a century and a half later, a bestselling novel turned him into the most loved figure in the Shinsengumi story.",
     ja: "南部盛岡藩出身の剣客。1865年に入隊し、監察と撃剣師範にまで進んだ。鳥羽・伏見の後に記録から姿を消す。百数十年後、ベストセラー小説が彼を新選組物語でもっとも愛される人物の一人に変えた。"},
    sections: [
      { h: {en: "From Nanbu", ja: "南部から"},
        b: {en: "Yoshimura came from the Nanbu domain of Morioka, in the far north of Honshu, where he is generally said to have been a low-ranking retainer. He left the domain and joined the Shinsengumi in 1865, in one of the recruiting drives that brought new men from the east after the Ikedaya made the corps famous.",
            ja: "本州北端の南部盛岡藩の出身で、身分の低い藩士だったとされる。藩を離れ、1865年（慶応元年）に新選組に加わった。池田屋事件で名を上げた隊が東国で行った隊士募集の一つで、新たに上ってきた一人である。"} },
      { h: {en: "In the corps", ja: "隊での働き"},
        b: {en: "His skill with the sword quickly earned him a place among the corps' instructors in swordsmanship, and he served as an inspector and investigator. These appointments place him among the trusted middle officers of the corps' later Kyoto years.",
            ja: "剣の腕を認められてほどなく撃剣師範の一人となり、諸士調役兼監察も務めた。これらの職から、京都時代後期の隊で信頼された中堅の幹部だったことがわかる。"} },
      { h: {en: "Disappearance", ja: "消息不明"},
        b: {en: "After the battle of Toba–Fushimi in January 1868, Yoshimura disappears from the record. He may have been killed in the fighting or in the retreat; no reliable account of his end survives.",
            ja: "1868年1月の鳥羽・伏見の戦いの後、吉村は記録から姿を消す。戦闘あるいは退却のなかで斃れたのかもしれないが、その最期を伝える確かな記録は残っていない。"} }
    ],
    legend: {en: "Yoshimura is best known today through Asada Jirō's novel Mibu Gishiden (2000) and its film and television adaptations: a poor samurai who left his family to earn money for them, and who died by seppuku at the Nanbu domain's Osaka residence after Toba–Fushimi. That story is fiction, built on the handful of facts above. It has shaped how many readers picture the whole corps.",
     ja: "吉村は今日、浅田次郎の小説『壬生義士伝』（2000年）とその映画・ドラマ化で最もよく知られている。家族を養う金を稼ぐために国を出た貧しい侍で、鳥羽・伏見の後に大坂の南部藩蔵屋敷で切腹した——という物語である。これは上記のわずかな事実をもとに作られた創作だが、多くの読者が思い描く新選組全体の姿を形づくってきた。"}
  },
  /* ------------------------------------------------------------ */
  ogata: {
    kanji: "尾", life: "?–?", group: "officers",
    name: {en: "Ogata Shuntarō", ja: "尾形俊太郎"},
    role: {en: "Inspector; instructor in letters", ja: "諸士調役兼監察・文学師範"},
    summary: {en: "A learned man from Higo (Kumamoto) who served the corps from its early Kyoto years as an officer, inspector and teacher of letters, travelled with Kondō on the shogunate's missions to Hiroshima, and followed the corps as far as Aizu — where he slips out of the record.",
     ja: "肥後（熊本）出身の学識ある人物。京都時代初期から幹部・監察・文学師範として仕え、幕府の広島派遣に近藤とともに加わり、会津まで隊に従った。そこで記録から姿を消す。"},
    sections: [
      { h: {en: "A scholar among swordsmen", ja: "剣客のなかの学者"},
        b: {en: "Ogata came from Higo province in Kyushu. He joined the Shinsengumi early in its Kyoto period and was valued less for his sword than for his learning: he served as an assistant vice-commander, as an inspector and investigator, and as one of the corps' instructors in letters — the men who could read, write and argue in the formal language of politics.",
            ja: "九州の肥後国の出身。京都時代の早い時期に入隊し、剣よりも学識を重んじられた。副長助勤、諸士調役兼監察、そして文学師範——政治の正式な言葉で読み、書き、論じることのできる者——の一人を務めた。"} },
      { h: {en: "Close to Kondō", ja: "近藤の側近"},
        b: {en: "In 1865 and 1866 he accompanied Kondō and Itō on the shogunate's missions to Hiroshima to question envoys of Chōshū, a sign of how far Kondō trusted him. He remained with the corps through the fall of the shogunate, the retreat to Edo and the march north.",
            ja: "1865年から翌年にかけて、長州の使者を詰問する幕府の広島派遣に近藤・伊東とともに加わった。近藤の信頼の厚さを示している。幕府の崩壊、江戸への撤退、北への転戦まで隊にとどまった。"} },
      { h: {en: "Into silence", ja: "沈黙へ"},
        b: {en: "Ogata is last clearly recorded with the corps in Aizu in 1868. What happened to him afterwards is not known with certainty.",
            ja: "尾形が隊とともにいたことがはっきり記録されているのは、1868年の会津が最後である。その後どうなったかは確かにはわかっていない。"} }
    ],
    legend: {en: "Some researchers have argued that Ogata returned to Kumamoto and lived on quietly under another name into the Meiji era. The theory is interesting but not proven, and the absence of any account from him — for a man so close to Kondō — is itself one of the small mysteries of the corps.",
     ja: "尾形は熊本に戻り、別の名で明治まで静かに生きたとする研究者もいる。興味深い説だが証明はされていない。近藤のこれほど近くにいた人物が何の証言も残していないこと自体が、隊の小さな謎の一つである。"}
  },
  /* ------------------------------------------------------------ */
  shimada: {
    kanji: "島", life: "1828–1900", group: "hakodate",
    name: {en: "Shimada Kai", ja: "島田魁"},
    role: {en: "Sergeant (gochō); officer at Hakodate", ja: "伍長、箱館では幹部"},
    summary: {en: "A giant of a man who joined in 1863, served as a sergeant through the Kyoto years, followed Hijikata all the way to Hakodate, and survived. He spent his last years as a guard at Nishi Honganji — the corps' old headquarters — and his diary is one of the most important records of the Shinsengumi.",
     ja: "1863年に入隊した巨漢。京都時代を通じて伍長を務め、土方に従って箱館まで戦い抜き、生き延びた。晩年はかつての屯所・西本願寺の守衛として過ごした。彼の日記は新選組の最も重要な記録の一つである。"},
    sections: [
      { h: {en: "Origins", ja: "生い立ち"},
        b: {en: "Shimada was born in 1828 in Mino province, in what is now Gifu prefecture. He grew into an exceptionally large and strong man — the sort others remembered first by his size — and trained as a swordsman in Edo, where he came to know Nagakura Shinpachi. In 1863 he joined the newly formed corps in Kyoto.",
            ja: "1828年（文政11年）、現在の岐阜県にあたる美濃国に生まれる。並外れた大柄で力の強い男に育ち、人々にはまずその体格で記憶された。江戸で剣術を修め、永倉新八と知り合った。1863年（文久3年）、結成まもない京都の隊に加わった。"} },
      { h: {en: "The sergeant", ja: "伍長"},
        b: {en: "Through the Kyoto years Shimada served as a sergeant (gochō), one of the non-commissioned officers who led small squads on patrol under the unit captains. He took part in the corps' surveillance of the loyalist underground and in its major actions. He was steady, loyal and well liked — never one of the famous names, but one of the men the corps ran on.",
            ja: "京都時代を通じて伍長を務めた。組長の下で小隊を率いて巡察する下士官である。尊攘派の地下組織の探索や、隊の主な出動に加わった。実直で忠実で、人に好かれた。名の知れた一人ではなかったが、隊を支えた男たちの一人だった。"} },
      { h: {en: "To the end", ja: "最後まで"},
        b: {en: "When the shogunate fell, Shimada stayed. He fought at Toba–Fushimi, at Katsunuma, in the north, and finally at Hakodate, where he was one of Hijikata's closest followers and an officer of the much-reduced corps. He surrendered with the corps at Benten Daiba in 1869 and was held as a prisoner.",
            ja: "幕府が倒れても、島田は隊を去らなかった。鳥羽・伏見、勝沼、北関東から東北、そして最後の箱館で戦った。箱館では土方の最も身近な部下の一人であり、人数の減った隊の幹部でもあった。1869年（明治2年）、弁天台場で隊とともに降伏し、捕虜となった。"} },
      { h: {en: "Keeper of memory", ja: "記憶を守った人"},
        b: {en: "After his release Shimada settled in Kyoto and found work as a guard at Nishi Honganji, the great temple where the corps had once kept its headquarters. He kept the memory of his dead comrades for the rest of his life. He died in 1900, aged seventy-two.\n\nThe diary he kept — covering the corps' movements from Kyoto to Hakodate — is one of the core sources on which every history of the Shinsengumi depends.",
            ja: "釈放後は京都に住み、かつて隊が屯所を置いた大寺院・西本願寺の守衛となった。生涯、死んだ同志たちの記憶を守り続けた。1900年（明治33年）、七十二歳で没する。\n\n京都から箱館までの隊の動きを記した彼の日記は、あらゆる新選組史が拠りどころとする根本史料の一つである。"} }
    ],
    legend: {en: "Popular stories make Shimada a gentle giant with a sweet tooth, or have him hauling Nagakura over a wall in a single heave. They suit his size and his reputation, but they come from later anecdote rather than record.",
     ja: "甘いもの好きの気のいい大男、あるいは永倉を片手で塀の上に引き上げた——通俗的な逸話は島田をそう描く。体格と評判にはよく似合うが、記録ではなく後年の逸話に拠るものである。"}
  },
  /* ------------------------------------------------------------ */
  soma: {
    kanji: "相", life: "1843–1875", group: "hakodate",
    name: {en: "Sōma Kazue", ja: "相馬主計"},
    role: {en: "Last commander of the Shinsengumi", ja: "新選組最後の隊長"},
    summary: {en: "A Kasama man who joined late, stood beside Kondō at Nagareyama when Kondō gave himself up, fought on to Hakodate, and became the last commander of the Shinsengumi in its final days — signing its surrender. Exiled, pardoned, he took his own life in 1875.",
     ja: "笠間の人。遅れて入隊し、流山で近藤が投降したときそのそばにいた。箱館まで戦い、最後の数日に新選組最後の隊長となって降伏を受け入れた。流罪ののち赦されたが、1875年に自ら命を絶った。"},
    sections: [
      { h: {en: "A late recruit", ja: "遅れて来た隊士"},
        b: {en: "Sōma was born in 1843 in the Kasama domain of Hitachi province. He joined the Shinsengumi late, in its last Kyoto period, and so missed the corps' famous early years — but he would see its very end.",
            ja: "1843年（天保14年）、常陸国笠間藩に生まれる。京都時代末期に遅れて入隊したため、隊の名高い初期を知らない。しかし、その最期を見届けることになる。"} },
      { h: {en: "Nagareyama", ja: "流山"},
        b: {en: "In April 1868, when the new government's army surrounded the corps at Nagareyama and Kondō decided to give himself up under an assumed name, Sōma was one of the few men who went with him to the enemy camp. He was detained for a time; Kondō was recognised and executed.",
            ja: "1868年4月（慶応4年）、新政府軍が流山の隊を包囲し、近藤が偽名のまま出頭すると決めたとき、相馬は敵陣まで同行したわずかな者の一人だった。相馬はしばらく拘束され、近藤は正体を見破られて処刑された。"} },
      { h: {en: "The last commander", ja: "最後の隊長"},
        b: {en: "Sōma made his way north and joined the corps again at Hakodate. In the last days of the campaign in May 1869, with Hijikata dead and the corps' remaining officers falling or captured, he became its commander. When the defenders of Benten Daiba gave up, it fell to him to surrender the Shinsengumi.",
            ja: "相馬は北へ向かい、箱館で再び隊に加わる。1869年5月（明治2年）、戦いの最後の数日、土方は戦死し、残る幹部も次々に斃れ、あるいは捕らえられるなかで、相馬が隊長となった。弁天台場の守備兵が降伏したとき、新選組の降伏を引き受けたのは彼だった。"} },
      { h: {en: "After", ja: "その後"},
        b: {en: "He was sentenced to exile on the island of Niijima. Pardoned in 1872, he served briefly as an official, then in 1875 took his own life. Why is not known.",
            ja: "新島への流罪を言い渡され、1872年（明治5年）に赦免される。一時は官吏として勤めたが、1875年（明治8年）、自ら命を絶った。理由はわかっていない。"} }
    ],
    legend: {en: "Sōma's exact title and the date he took command at Hakodate vary between sources, and the reasons for his suicide have attracted speculation — from disgrace at work to the weight of being the man who surrendered the corps — none of it documented.",
     ja: "箱館で隊長となった正確な役名と日付は史料によって異なる。自死の理由もさまざまに推測されてきた——職務上の不面目から、隊を降伏させた者としての重荷まで——が、いずれも記録はない。"}
  },
  /* ------------------------------------------------------------ */
  mori: {
    kanji: "森", life: "1826–1869", group: "hakodate",
    name: {en: "Mori Tsunekichi", ja: "森常吉"},
    role: {en: "Chief officer (tōdori) of the corps at Hakodate", ja: "箱館新選組頭取"},
    summary: {en: "A senior retainer of the Kuwana domain who followed his lord to Hakodate, took command of the Shinsengumi there as its chief officer, and after the surrender accepted responsibility for Kuwana's part in the war — dying for it in 1869.",
     ja: "桑名藩の重臣。藩主に従って箱館へ渡り、そこで新選組の頭取として隊を率いた。降伏後、桑名藩の戦争の責任を一身に負い、1869年に命を落とした。"},
    sections: [
      { h: {en: "A Kuwana retainer", ja: "桑名藩士"},
        b: {en: "Mori was a senior retainer of the Kuwana domain, whose lord Matsudaira Sadaaki was Katamori's younger brother and had served as the shogunate's governor of Kyoto — the corps' other great patron. When Sadaaki fled north rather than submit, Mori and a band of Kuwana men went with him, all the way to Hakodate.",
            ja: "桑名藩の重臣。藩主・松平定敬は会津の容保の実弟で、京都所司代として新選組のもう一つの大きな後ろ盾だった。定敬が恭順せず北へ逃れると、森ら桑名藩士の一団も従い、箱館まで渡った。"} },
      { h: {en: "Chief officer", ja: "頭取"},
        b: {en: "At Hakodate the Kuwana men were enrolled in the Shinsengumi, and Mori became one of its chief officers (tōdori). A man of rank and age, he gave the corps — by then a mix of Kyoto veterans and newcomers from the north — a commander of standing in the last campaign.",
            ja: "箱館で桑名藩士たちは新選組に編入され、森はその頭取の一人となった。身分も年齢もある人物として、京都以来の古参と北国の新参が入り混じった最後の隊に、重みのある指揮官をもたらした。"} },
      { h: {en: "Responsibility", ja: "責任"},
        b: {en: "After the surrender in 1869, the new government demanded that each rebel domain name the men responsible. Mori accepted that role for Kuwana. In the winter of 1869 he was put to death — by most accounts ordered to commit seppuku — so that his domain could be pardoned. He is remembered in Kuwana for that sacrifice.",
            ja: "1869年の降伏後、新政府は反抗した各藩に責任者を差し出すよう求めた。森は桑名藩の責任者としてそれを引き受け、1869年冬、藩の赦免と引き換えに死を賜った。多くの記録によれば切腹を命じられたという。桑名ではいまもその献身が記憶されている。"} }
    ],
    legend: {en: "Sources differ on Mori's exact title in the corps and on the date and manner of his death; he is often described as the only man put to death for the Hakodate war, a claim worth checking against the full record.",
     ja: "隊での正確な役名や、死の日付と形には史料により異同がある。箱館戦争で処刑された唯一の人物とされることが多いが、全体の記録と照らし合わせて確かめるべき点である。"}
  },
  /* ------------------------------------------------------------ */
  ono: {
    kanji: "野", life: "1836–1911", group: "hakodate",
    name: {en: "Ōno Uchū", ja: "大野右仲"},
    role: {en: "Chief officer (tōdori), then on Hijikata's staff", ja: "頭取、のち陸軍奉行添役"},
    summary: {en: "A Karatsu retainer who came north with his domain's heir, joined the Shinsengumi as a chief officer, and served on Hijikata's staff in Hakodate. He was with Hijikata on his last day, and his account is one of the main sources for how Hijikata died.",
     ja: "唐津藩士。藩の世子に従って北へ下り、新選組の頭取となり、箱館では土方の幕僚を務めた。土方の最期の日もそばにいた。その記録は、土方の死を伝える主要な史料の一つである。"},
    sections: [
      { h: {en: "From Karatsu", ja: "唐津から"},
        b: {en: "Ōno was a retainer of the Karatsu domain in northern Kyushu. His domain's heir, Ogasawara Nagamichi, had been one of the shogunate's senior councillors and refused to submit to the new government; Ōno followed him north into the war.",
            ja: "九州北部・唐津藩の藩士。藩の世子・小笠原長行は幕府の老中を務めた人物で、新政府への恭順を拒んだ。大野は長行に従い、北の戦場へ向かった。"} },
      { h: {en: "With Hijikata", ja: "土方とともに"},
        b: {en: "In the north he joined the Shinsengumi as one of its chief officers (tōdori), and at Hakodate he served under Hijikata, who had become one of the army's senior commanders. On the last day of Hijikata's life, May 11 by the old calendar (June 20, 1869), Ōno was in the fighting with him near Ippongi. He survived the war.",
            ja: "北方で新選組の頭取の一人として加わり、箱館では陸軍奉行並となった土方のもとで働いた。土方の生涯最後の日——明治2年5月11日（1869年6月20日）——大野は一本木付近で土方とともに戦っていた。彼は戦争を生き延びた。"} },
      { h: {en: "The witness", ja: "証言者"},
        b: {en: "After the war Ōno served in the Meiji government and lived until 1911. His written account of the Hakodate campaign records Hijikata's final hours from close by, and every modern telling of Hijikata's death draws on it.",
            ja: "戦後は明治政府に仕え、1911年（明治44年）まで生きた。彼が書き残した箱館戦争の記録は土方の最期を間近から伝えており、土方の死を語る現代の叙述はみなこれに拠っている。"} }
    ],
    legend: {en: "Ōno's account is invaluable but not the only one, and the various witnesses disagree on details of Hijikata's death — where exactly he fell and what he said. Ōno's title and duties also differ between sources.",
     ja: "大野の記録はかけがえのないものだが唯一のものではなく、土方の最期の細部——どこで斃れ、何を言ったか——については証言者のあいだで食い違いがある。大野自身の役名や職務も史料によって異なる。"}
  },
  /* ------------------------------------------------------------ */
  niimi: {
    kanji: "新", life: "1836–1863", group: "leaders",
    name: {en: "Niimi Nishiki", ja: "新見錦"},
    role: {en: "Commander, Serizawa faction", ja: "局長（芹沢派）"},
    summary: {en: "Serizawa Kamo's chief lieutenant: a Mito swordsman who briefly shared command of the corps with Serizawa and Kondō, was demoted for misconduct, and was forced to commit seppuku in a Gion teahouse in the autumn of 1863 — the first blow of the purge that destroyed his faction.",
     ja: "芹沢鴨の右腕。水戸の剣客で、一時は芹沢・近藤とともに局長として隊を率いたが、不行跡により降格され、1863年秋、祇園の料亭で切腹を強いられた。芹沢派を滅ぼした粛清の最初の一撃である。"},
    sections: [
      { h: {en: "Serizawa's man", ja: "芹沢の腹心"},
        b: {en: "Niimi came, like Serizawa, from the Mito region and its radical loyalist circles, and was a skilled swordsman of Shintō Munen-ryū. He travelled to Kyoto with Serizawa in the Rōshigumi and stayed with him when the rest returned east. His real name and early life are uncertain.",
            ja: "芹沢と同じく水戸周辺の過激な尊攘派の出身で、神道無念流の遣い手だった。浪士組として芹沢とともに京へ上り、本隊が東へ戻った後も芹沢とともに残った。本名や前半生ははっきりしない。"} },
      { h: {en: "Three commanders", ja: "三人の局長"},
        b: {en: "In the corps' first months its command was shared among three commanders: Serizawa, Kondō and Niimi. It was an uneasy arrangement between two factions with very different habits. Niimi was soon demoted to vice-commander, and the Serizawa faction's extortion and violence in the city were steadily turning the corps' Aizu patrons against them.",
            ja: "結成直後の数か月、隊は芹沢・近藤・新見の三人の局長によって率いられた。気風のまるで違う二つの派閥の、不安定な共存である。新見はほどなく副長に降格された。芹沢派の市中での強請や乱暴は、庇護者の会津藩を確実に彼らから離反させつつあった。"} },
      { h: {en: "Death in Gion", ja: "祇園での死"},
        b: {en: "In the autumn of 1863 Niimi was confronted at a teahouse in Gion with charges of misconduct and forced to commit seppuku. A few days later Serizawa himself was killed at the Yagi house in Mibu. Niimi's death removed Serizawa's strongest supporter first — whether by design or not, it cleared the way for everything that followed.",
            ja: "1863年（文久3年）秋、新見は祇園の料亭で不行跡を問われ、切腹を強いられた。その数日後、芹沢自身が壬生の八木邸で殺される。新見の死は、まず芹沢の最も強い支えを取り除いた。意図されたものかどうかはともかく、それがその後のすべてへの道を開いた。"} }
    ],
    legend: {en: "Niimi's identity has been debated; some researchers identify him with a Mito man named Niinomi Kumetarō. The exact charges against him, and who pressed them, come mostly from accounts by the winning side.",
     ja: "新見の素性には議論があり、水戸の新家粂太郎と同一人物とする研究者もいる。彼が問われた罪状や、誰がそれを突きつけたかは、主に勝った側の記録に拠っている。"}
  },
  /* ------------------------------------------------------------ */
  katamori: {
    kanji: "容", life: "1836–1893", group: "associates",
    name: {en: "Matsudaira Katamori", ja: "松平容保"},
    role: {en: "Lord of Aizu; Protector of Kyoto", ja: "会津藩主・京都守護職"},
    summary: {en: "The lord of Aizu who accepted the thankless post of Protector of Kyoto in 1862, took the Shinsengumi under his authority, and won the deep trust of Emperor Kōmei — only to be branded a rebel after the emperor's death, besieged in his own castle, and defeated. He outlived the corps by a quarter of a century.",
     ja: "1862年に損な役回りの京都守護職を引き受け、新選組を配下に置き、孝明天皇の厚い信頼を得た会津藩主。しかし天皇の死後は朝敵とされ、自らの城で包囲され、敗れた。隊が滅んだ後も四半世紀を生きた。"},
    sections: [
      { h: {en: "A reluctant guardian", ja: "気の進まぬ守護者"},
        b: {en: "Katamori was born in Edo in 1836, a son of the lord of the small Takasu domain, and was adopted into the ruling house of Aizu, which he inherited in 1852. Aizu was bound to the shogunate by the precepts of its founder, Hoshina Masayuki, who had charged his descendants to serve the Tokugawa above all.\n\nIn 1862 the shogunate created a new post — Protector of Kyoto (Kyōto shugoshoku) — to restore order in a capital overrun by loyalist assassins, and pressed it on Katamori. His senior retainers warned him that it would ruin the domain. He accepted anyway, out of duty, and in early 1863 entered Kyoto with a thousand Aizu troops.",
            ja: "1836年（天保7年）、美濃高須藩主の子として江戸に生まれ、会津松平家に養子に入って1852年に家督を継いだ。会津藩は藩祖・保科正之の家訓によって、何よりも徳川家に尽くすよう定められていた。\n\n1862年（文久2年）、尊攘派の暗殺が横行する都の治安を回復するため、幕府は「京都守護職」を新設し、容保にその就任を迫った。家老たちは藩を滅ぼすと諫めたが、容保は義によってこれを受け、1863年初め、千人の藩兵を率いて京に入った。"} },
      { h: {en: "Patron of the Shinsengumi", ja: "新選組の庇護者"},
        b: {en: "When the Rōshigumi fell apart in the spring of 1863, the men who stayed behind in Kyoto under Kondō and Serizawa were placed under Aizu's authority. It was Aizu that gave the corps its legitimacy, its pay and, after the coup of August 18, 1863, its name: Shinsengumi. Katamori's men demanded order of their new auxiliaries, and Aizu's patience with Serizawa's outrages ran out that autumn.\n\nFrom then on the corps was Aizu's instrument in the streets of Kyoto: it reported to Aizu, fought beside Aizu at the Ikedaya and in the Kinmon incident, and rose with Aizu's standing.",
            ja: "1863年春に浪士組が瓦解すると、近藤・芹沢のもとで京に残った者たちは会津藩の預かりとなった。隊に正統性と給金を与え、八月十八日の政変の後に「新選組」の名を与えたのは会津である。容保の家臣たちは新たな配下に規律を求め、その秋、芹沢の乱行に対する会津の忍耐は尽きた。\n\n以後、新選組は都の路上における会津の手足となった。会津に報告し、池田屋や禁門の変では会津とともに戦い、会津の地位とともに浮き沈みした。"} },
      { h: {en: "The emperor's trust", ja: "天皇の信頼"},
        b: {en: "Emperor Kōmei, who distrusted the radicals of Chōshū, came to rely on Katamori more than on any other lord. In 1863 he sent him a personal letter of thanks and a poem — an extraordinary mark of favour that Katamori kept close for the rest of his life. When Chōshū troops attacked the palace in the Kinmon incident of 1864, Katamori's Aizu forces held the gates.",
            ja: "長州の過激派を嫌った孝明天皇は、どの大名よりも容保を頼りにするようになる。1863年、天皇は容保に感謝の宸翰と御製を賜った。破格の厚遇であり、容保は生涯それを肌身離さず持ち続けたという。1864年の禁門の変で長州軍が御所に迫ったとき、門を守り抜いたのは容保の会津兵だった。"} },
      { h: {en: "Defeat and survival", ja: "敗北と生存"},
        b: {en: "Kōmei's sudden death in early 1867 removed Katamori's protector at court. Within a year the shogunate had fallen, and Aizu — the domain that had policed Kyoto for the Tokugawa — was declared an enemy of the court. In the autumn of 1868 the new government's armies besieged Tsuruga castle for a month; the town burned, and the youths of the Byakkotai and many others died. Katamori surrendered in November 1868.\n\nHe was spared. After years of confinement he became chief priest of the Tōshō-gū shrine at Nikkō, dedicated to the first Tokugawa shogun, and died in 1893. The emperor's letter was found among his belongings.",
            ja: "1867年初めの孝明天皇の急死で、容保は朝廷における後ろ盾を失った。一年のうちに幕府は倒れ、徳川のために都の治安を担った会津は朝敵とされる。1868年秋、新政府軍は鶴ヶ城を一か月にわたって包囲し、城下は焼け、白虎隊の少年たちをはじめ多くの者が死んだ。1868年11月（明治元年9月）、容保は降伏した。\n\n命は助けられた。長い謹慎ののち、初代将軍を祀る日光東照宮の宮司となり、1893年（明治26年）に没する。遺品のなかから、孝明天皇の宸翰が見つかった。"} }
    ]
  },
  /* ------------------------------------------------------------ */
  kiyokawa: {
    kanji: "清", life: "1830–1863", group: "associates",
    name: {en: "Kiyokawa Hachirō", ja: "清河八郎"},
    role: {en: "Founder of the Rōshigumi", ja: "浪士組の発案者"},
    summary: {en: "The brilliant, restless schemer who talked the shogunate into recruiting masterless swordsmen to guard Kyoto — and then, the moment they arrived, tried to turn them against it. The men who refused to follow him became the Shinsengumi. He was assassinated in Edo weeks later.",
     ja: "幕府を説いて浪士を募らせ京の警護に当たらせた、才気あふれる落ち着きのない策士。そして到着するや、その浪士たちを幕府に背かせようとした。彼に従わなかった者たちが新選組となる。数週間後、江戸で暗殺された。"},
    sections: [
      { h: {en: "Scholar and agitator", ja: "学者にして扇動者"},
        b: {en: "Kiyokawa was born in 1830 in the Shōnai region of Dewa province, the son of a wealthy sake-brewing family. He went to Edo to study, mastered both Confucian learning and Hokushin Ittō-ryū swordsmanship, and opened a school that taught both. By 1860 he was at the centre of a circle of young men dedicated to expelling the foreigners, among them Yamaoka Tesshū.\n\nIn 1861 he killed a man who had provoked him in the street and became a fugitive, travelling the country and building connections with radical loyalists in Kyushu and Kyoto.",
            ja: "1830年（天保元年）、出羽国庄内の裕福な酒造家に生まれる。江戸に出て学び、儒学と北辰一刀流の剣の両方を修めて、双方を教える塾を開いた。1860年には、山岡鉄舟らとともに攘夷を志す若者たちの集まりの中心にいた。\n\n1861年（文久元年）、路上で挑発してきた町人を斬って追われる身となり、諸国を巡って九州や京の尊攘派と人脈を築いた。"} },
      { h: {en: "The Rōshigumi", ja: "浪士組"},
        b: {en: "In 1862 Kiyokawa proposed a bold idea to the shogunate through sympathetic officials: pardon the masterless samurai and swordsmen roaming the country and recruit them as a corps to guard the shogun on his coming visit to Kyoto. The shogunate, short of reliable men and alarmed by the chaos in the capital, agreed. In early 1863 some 230 recruits — Kondō Isami and his Shieikan circle and Serizawa Kamo's Mito group among them — set out along the Nakasendō.",
            ja: "1862年（文久2年）、清河は理解ある幕臣を通じて大胆な策を幕府に建言する。諸国を流浪する浪人や剣客を赦し、将軍上洛の警護にあたる組として募るというのである。信頼できる人手に乏しく、都の混乱に危機感を抱いていた幕府はこれを容れた。1863年初め、近藤勇の試衛館一門や芹沢鴨の水戸派を含む約230名が、中山道を西へ向かった。"} },
      { h: {en: "The turn", ja: "変心"},
        b: {en: "The day after the Rōshigumi reached Kyoto and settled in Mibu, Kiyokawa revealed his real aim: the corps would serve the emperor and the cause of expelling the foreigners, not the shogunate. He had a petition to that effect submitted to the court. Alarmed, the shogunate recalled the Rōshigumi to Edo.\n\nMost of the men went back with him. But a small group refused — Kondō's men and Serizawa's — insisting that they had come to guard the shogun and would stay to do so. Taken under the authority of Aizu, they became the Shinsengumi. Kiyokawa's plan had created the very corps that would spend the next five years hunting men like him.",
            ja: "浪士組が京に着き壬生に落ち着いた翌日、清河は本当の狙いを明かす。この組は幕府ではなく、天皇と攘夷の大義のために働くのだ、と。その趣旨の建白書が朝廷に提出された。驚いた幕府は浪士組を江戸へ呼び戻す。\n\n大半は清河とともに帰った。だが近藤の一門と芹沢の一派という小さな集団が、将軍警護のために来たのだから残ってその務めを果たすと言い張った。会津藩の預かりとなった彼らが、新選組となる。清河の策は、その後五年にわたって彼のような人間を狩ることになる隊そのものを生み出したのである。"} },
      { h: {en: "Assassination", ja: "暗殺"},
        b: {en: "Back in Edo, Kiyokawa was assassinated on May 30, 1863 (the 4th month by the old calendar) near the Ichinohashi bridge in Azabu, cut down by a group of shogunal swordsmen. He was thirty-two. The men he had led back to Edo were reorganised as the Shinchōgumi, a police force under the Shōnai domain — his own home province.",
            ja: "江戸に戻った清河は、1863年5月30日（文久3年4月13日）、麻布一ノ橋付近で幕府方の剣客の一団に斬られた。三十二歳（数え三十四歳）だった。彼が江戸へ連れ帰った浪士たちは、郷里の庄内藩の預かりとして新徴組に再編された。"} }
    ],
    legend: {en: "Kiyokawa remains hard to judge: a principled loyalist to some, an opportunist who used the shogunate's money to raise a force for its enemies to others. The traditional story that he announced his plan in a dramatic speech to the assembled men at Mibu's Shintoku-ji is well established in outline, though accounts of what he said differ.",
     ja: "清河の評価はいまも定まらない。信念ある尊攘家とみる者もいれば、幕府の金で敵方の兵を集めた機会主義者とみる者もいる。壬生の新徳寺に集めた浪士たちを前に計画を宣言したという伝統的な話は、大筋ではよく裏付けられているが、彼が何を語ったかについては記録により異なる。"}
  }
};

/* ---------- how people are listed ---------- */
/* The people page (people.html) lists everyone, grouped by "group" above.
   Unit captains sort by unit number; everyone else keeps file order. */
const PEOPLE_GROUPS = [
  {id: "leaders",    label: {en: "Leaders",       ja: "局長・副長・総長"}},
  {id: "captains",   label: {en: "Unit captains", ja: "組長"}},
  {id: "officers",   label: {en: "Officers",      ja: "幹部"}},
  {id: "hakodate",   label: {en: "Hakodate",      ja: "箱館"}},
  {id: "associates", label: {en: "Associates",    ja: "関係者"}}
];

/* The map page's sidebar shows only these; everyone else is one tap
   away on the people page (and from any event that names them). */
const PEOPLE_ON_MAP = ["hijikata", "kondo", "okita", "saito", "nagakura", "harada", "yamanami", "serizawa"];
