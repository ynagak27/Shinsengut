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
   ===================================================================== */

const PEOPLE = {

  /* ------------------------------------------------------------ */
  hijikata: {
    kanji: "土", life: "1835–1869",
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
    kanji: "近", life: "1834–1868",
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
    kanji: "沖", life: "1842?–1868",
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
    kanji: "斎", life: "1844–1915",
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
    kanji: "永", life: "1839–1915",
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
    kanji: "原", life: "1840–1868",
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
  yamanami: {
    kanji: "山", life: "1833–1865",
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
    kanji: "芹", life: "c.1826–1863",
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
  }
};
