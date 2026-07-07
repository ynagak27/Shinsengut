/* =====================================================================
   EVENTS — 新選組・土方歳三の軌跡
   ---------------------------------------------------------------------
   HOW TO EDIT / 追記のしかた:
   - "sort" (YYYY-MM-DD) controls timeline order. Approximate is fine.
   - "route": true  = a point on Hijikata's personal journey (numbered,
                      connected by the route line).
     "route": false = a corps event off his path (shown with †).
   - "people": who appears on the event card.
   - "roles": what each of them specifically did there. Add or expand
     these freely as your research deepens — one entry per person id.
   - "legend": lore/disputed details, shown in a separate styled box.
   - To add a NEW event: copy a block, give it a unique id, set sort.
   ===================================================================== */

const EVENTS = [

 {id:"birth", sort:"1835-05-31", year:"1835", route:true, coords:[35.6600,139.4200], zoom:12,
  date:{en:"May 31, 1835", ja:"1835年5月31日（天保6年5月5日）"},
  loc:{en:"Ishida village, Musashi — now Hino, Tokyo", ja:"武蔵国多摩郡石田村（現・東京都日野市）"},
  title:{en:"Born in Ishida village", ja:"石田村に生まれる"},
  desc:{en:"Hijikata Toshizō is born the tenth and last child of a wealthy farming family on the Tama plain, west of Edo. His father dies before his birth, his mother when he is five. The Tama region is peculiar ground: legally farmland, but administered directly by the shogunate, its prosperous farmers proudly literate, sword-trained, and loyal to the Tokugawa house. Out of this soil — peasant status, samurai self-image — the future vice-commander grows. As a young man he peddles the family medicine, Ishida sanyaku, with a shinai strapped to his pack.",
        ja:"土方歳三、武蔵国多摩の豪農の家に十人兄弟の末子として生まれる。父は出生前に、母は5歳で世を去った。多摩は特異な土地である。身分の上では農地だが幕府直轄領（天領）であり、豪農たちは読み書きを誇り、剣を学び、徳川家への忠誠心が強かった。農民の身分と武士の自意識——その土壌から未来の副長は育つ。青年期は竹刀を荷に括りつけ、家伝薬「石田散薬」を行商して歩いた。"},
  people:["hijikata"],
  roles:{}},

 {id:"shieikan", sort:"1859-06-01", year:"1859", route:true, coords:[35.6926,139.7333], zoom:13,
  date:{en:"1859", ja:"1859年（安政6年）"},
  loc:{en:"Shieikan dojo, Ichigaya, Edo", ja:"江戸市谷・試衛館"},
  title:{en:"Joins the Shieikan dojo", ja:"試衛館に入門"},
  desc:{en:"Hijikata formally enters the Tennen Rishin-ryū — a rough, practical rural school scorned by Edo's fashionable dojos as \"potato-samurai\" fencing. The Shieikan in Ichigaya is less an institution than a household: Kondō presiding, the teenage prodigy Okita as live-in disciple, the scholarly Yamanami and professional dojo-guests like Nagakura and Harada around the dinner table. It is poor, tight-knit, and ambitious. When the shogunate calls for swordsmen in 1863, this household will answer as one.",
        ja:"土方、天然理心流に正式入門。同流は「田舎剣法」「芋道場」と江戸の名門道場に侮られた、荒く実戦的な流派である。市谷の試衛館は道場というより一つの所帯だった。近藤が主宰し、内弟子の天才少年・沖田、学のある山南、食客の永倉や原田が同じ釜の飯を食う。貧しく、結束が固く、野心があった。1863年、幕府が剣客を募ったとき、この所帯は一つの塊として応じることになる。"},
  people:["hijikata","kondo","okita","yamanami","nagakura","harada"],
  roles:{
    kondo:{en:"Master of the house — a farmer's son turned school head, hungry for a stage worthy of his sword.", ja:"一門の主。農民の子から宗家となり、剣にふさわしい舞台を渇望していた。"},
    okita:{en:"The live-in prodigy, already effectively head instructor while still in his teens.", ja:"住み込みの天才児。十代にして事実上の塾頭を務めた。"},
    nagakura:{en:"A dojo-guest from the Matsumae clan who found the food bad and the company excellent.", ja:"松前藩出身の食客。飯はまずいが人は良い、と居着いた。"},
    harada:{en:"The spearman of the circle — an outsider by style and temperament who fit anyway.", ja:"一門の槍担当。流派も気性も異色ながら、なぜか馴染んだ。"},
    yamanami:{en:"The educated Hokushin Ittō-ryū man, lending the rough house some polish.", ja:"北辰一刀流帰りの学識派。荒っぽい所帯に知性の重しを加えた。"}
  }},

 {id:"mibu", sort:"1863-04-10", year:"1863", route:true, coords:[35.0024,135.7413], zoom:14,
  date:{en:"April 1863", ja:"1863年4月（文久3年）"},
  loc:{en:"Mibu village, Kyoto", ja:"京都・壬生村"},
  title:{en:"Arrival at Mibu", ja:"壬生に到着"},
  desc:{en:"The shogunate, desperate to police a Kyoto seething with loyalist assassins, recruits masterless swordsmen into the Rōshigumi and marches them west. The scheme immediately unravels — its organizer intends to turn the men to the loyalist cause — and the militia is ordered home. Two factions refuse: Serizawa's Mito men and Kondō's Shieikan household. Petitioning the Aizu domain, the protector of Kyoto, they are taken on as the Mibu Rōshigumi: two dozen unemployed swordsmen billeted on the farming village of Mibu, mocked in town as the \"wolves of Mibu.\" It is a shabby beginning to a black-and-white legend.",
        ja:"尊攘派志士の暗殺が横行する京都の治安に窮した幕府は、浪士を募って浪士組を結成、西へ上らせる。しかし計画は即座に破綻——発案者の清河八郎が一同を尊攘運動に転用しようとしたのだ——浪士組には江戸帰還命令が下る。これを拒んだのが芹沢の水戸派と近藤の試衛館一党だった。京都守護職・会津藩に嘆願して御預となり、「壬生浪士組」が発足する。壬生村に間借りした二十数名の浪人たち。町では「壬生狼（みぶろ）」と嘲られた。誠の旗の伝説は、このみすぼらしさから始まった。"},
  people:["hijikata","kondo","okita","saito","nagakura","harada","yamanami","serizawa"],
  roles:{
    serizawa:{en:"Senior commander by birth and pedigree — and already a walking diplomatic incident.", ja:"家格と経歴で筆頭に座る。そしてすでに歩く不祥事だった。"},
    kondo:{en:"Junior commander, quietly building his own faction's credit with Aizu.", ja:"局長の一角。会津藩に対する近藤派の信用を静かに積み上げていく。"},
    hijikata:{en:"Begins organizing the corps' internal order — the work that will define him.", ja:"隊の内部秩序の構築に着手する。彼を定義する仕事の始まり。"}
  }},

 {id:"serizawa", sort:"1863-10-30", year:"1863", route:true, coords:[35.0035,135.7420], zoom:15,
  date:{en:"October 1863 — exact date disputed", ja:"1863年10月（文久3年9月）※日付に異説"},
  loc:{en:"Yagi residence, Mibu", ja:"壬生・八木邸"},
  title:{en:"Purge of Serizawa Kamo", ja:"芹沢鴨の粛清"},
  desc:{en:"After months of extortion, arson, and brawls that mortify the corps' Aizu patrons, the sentence comes down. On a night of driving rain, after a banquet at the Sumiya, assassins enter the Yagi house where Serizawa sleeps beside his mistress Oume. Both are killed; his lieutenant Hirayama dies in the next room. The corps blames Chōshū agents and stages a magnificent funeral. Everyone in the barracks understands. Command is now Kondō's alone, and the instrument of the purge — Hijikata's faction — becomes the corps' true spine. The Yagi family's descendants would later show visitors the sword scars in the doorframe.",
        ja:"強請、放火、乱闘——会津藩の面目を潰し続けた数ヶ月の末、処断が下る。豪雨の夜、島原・角屋の宴会の後、刺客たちは八木邸に忍び入り、愛妾お梅と眠る芹沢を襲った。二人とも斬殺され、隣室の平山五郎も殺された。隊は「長州の仕業」と称して盛大な葬儀を営む。屯所の誰もが真相を察していた。指揮権は近藤に一本化され、粛清の実行部隊——土方派——が隊の背骨となる。八木家には今も、この夜の刀傷が鴨居に残る。"},
  people:["hijikata","okita","yamanami","harada","serizawa"],
  roles:{
    hijikata:{en:"Widely held to have planned and led the assassination party.", ja:"襲撃の計画者・指揮者と広く目される。"},
    okita:{en:"Named among the assassins in most accounts.", ja:"多くの記録が実行者の一人に数える。"},
    yamanami:{en:"Named among the assassins in several accounts — the gentle man's darkest night.", ja:"複数の記録が実行者に挙げる。「仏の山南」の最も暗い夜。"},
    harada:{en:"Named among the assassins in several accounts.", ja:"複数の記録が実行者に挙げる。"},
    serizawa:{en:"Killed in his sleep beside Oume after an evening of heavy drinking.", ja:"深酒の末、お梅の隣で就寝中を襲われ死亡。"}
  },
  legend:{en:"Participant lists vary across sources (some add Tōdō Heisuke or Inoue Genzaburō, some drop Yamanami), and even the date differs between accounts. The rain, the party at the Sumiya, and the survival of the Yagi children hiding under their bedding come mainly from the Yagi family's later reminiscences.",
          ja:"実行者の顔ぶれは史料によって異なり（藤堂平助や井上源三郎を加えるもの、山南を外すものもある）、日付さえ一致しない。豪雨、角屋での宴、布団をかぶって難を逃れた八木家の子供たち——これらの細部は主に後年の八木家の回想に由来する。"}},

 {id:"ikedaya", sort:"1864-07-08", year:"1864", route:true, coords:[35.0090,135.7701], zoom:15,
  date:{en:"July 8, 1864", ja:"1864年7月8日（元治元年6月5日）"},
  loc:{en:"Ikedaya inn, Sanjō-Kiyamachi, Kyoto", ja:"京都三条木屋町・池田屋"},
  title:{en:"The Ikedaya Incident", ja:"池田屋事件"},
  desc:{en:"Under torture, the arrested merchant-loyalist Furutaka Shuntarō reveals a plot: loyalist bands will fire Kyoto in the summer wind, and in the chaos carry the emperor off to Chōshū. On the night of the Gion festival's eve, the corps splits into two search columns to comb the riverside inn districts. Kondō's small party finds the conspirators — over twenty of them — in council upstairs at the Ikedaya. Rather than wait, Kondō attacks with a handful of men, announcing \"official business!\" at the door. Two hours of close-quarters slaughter follow in the dark, on stairs and in corridors, until Hijikata's column arrives and seals the block. Around eight loyalists are killed and over twenty arrested; the corps loses three, with others dying of wounds. Overnight, the Shinsengumi becomes the most famous — and most hated — sword in Japan. Historians still debate whether the raid delayed the Meiji Restoration or, by enraging Chōshū, hastened it.",
        ja:"捕縛された商人志士・古高俊太郎が拷問の末に自白する。祇園祭の宵、風の強い日を選んで京に火を放ち、混乱に乗じて天皇を長州へ動座させるという計画である。祭りの前夜、隊は二手に分かれて鴨川沿いの旅籠街を捜索。近藤隊が三条木屋町の池田屋で、二階に会合中の志士二十数名を発見する。応援を待たず、近藤はわずかな手勢で「御用改めである！」と踏み込んだ。暗闇の階段と廊下で二時間におよぶ白兵戦。やがて土方隊が到着して周辺を封鎖した。志士側は討死約8名・捕縛20名超、新選組も3名が死亡、負傷者から後日の死者も出た。一夜にして新選組は日本一有名な——そして最も憎まれる——剣となった。この事件が明治維新を遅らせたのか、長州を激昂させてかえって早めたのか、歴史家の議論は今も続く。"},
  people:["kondo","okita","nagakura","hijikata","saito","harada"],
  roles:{
    kondo:{en:"Led the assault party through the front door with only a handful of men, fighting in the melee himself; his prized \"Kotetsu\" survived intact, as he proudly wrote home.", ja:"わずかな手勢で表口から突入、自ら乱戦を戦った。自慢の「虎徹」は刃こぼれ一つなかったと故郷に書き送っている。"},
    okita:{en:"Cut down several men in the opening melee, then collapsed mid-fight and was carried out (see legend note).", ja:"斬り込み直後に数名を斬り伏せるが、戦闘の途中で昏倒し運び出された（下の伝承欄を参照）。"},
    nagakura:{en:"Fought at the heart of it to the end — sword snapped, thumb split open, saved by his chain mail.", ja:"最後まで乱戦の中心で戦い続けた。刀は折れ、親指は割れ、鎖帷子が命を救った。"},
    hijikata:{en:"Commanded the second column; arrived to cordon the streets, and pointedly kept the late-coming Aizu troops outside — the credit would be the corps' alone.", ja:"別動隊を指揮。到着後は周辺を封鎖し、遅れて来た会津藩兵をあえて中に入れなかった。手柄は新選組だけのものにする、という計算である。"},
    saito:{en:"Served in Hijikata's column securing the surrounding streets (accounts of individual placements vary).", ja:"土方隊に属し周辺の制圧に当たった（各人の配置には諸説ある）。"},
    harada:{en:"Served in Hijikata's cordon squad outside the inn.", ja:"土方隊の包囲部隊として屋外を固めた。"}
  },
  legend:{en:"Okita coughing blood on the Ikedaya floor is the most famous scene in Shinsengumi fiction — and is probably not what happened. Nagakura's account says only that Okita fell ill during the fight; heatstroke on a stifling festival night is a common modern reading.",
          ja:"池田屋の床に喀血して倒れる沖田——新選組フィクション最大の名場面だが、おそらく史実ではない。永倉の手記は「戦闘中に病に倒れた」と記すのみで、蒸し暑い祭りの夜の熱中症とみる説が現在は有力である。"}},

 {id:"kinmon", sort:"1864-08-20", year:"1864", route:true, coords:[35.0243,135.7595], zoom:14,
  date:{en:"August 20, 1864", ja:"1864年8月20日（元治元年7月19日）"},
  loc:{en:"Hamaguri Gate, Kyoto Imperial Palace", ja:"京都御所・蛤御門"},
  title:{en:"The Kinmon Incident", ja:"禁門の変"},
  desc:{en:"Enraged by the Ikedaya and by its expulsion from court the previous year, Chōshū marches armies on Kyoto to \"appeal\" at the palace gates by force. The fiercest fighting erupts at the Hamaguri Gate, where Aizu and Kuwana troops buckle until Satsuma reinforcements swing the day. The Shinsengumi deploys under Aizu command and joins the pursuit of the broken Chōshū columns. The battle's cost falls on the city: fires spread for two days, burning tens of thousands of homes — the great \"Donburi-yake.\" Chōshū is declared an enemy of the court, and the shogunate's punitive expeditions against it will consume the regime's remaining strength.",
        ja:"池田屋事件と前年の追放処分に激昂した長州藩は、武力をもって御所に「嘆願」すべく京へ軍を進めた。最激戦地は蛤御門。会津・桑名勢が押し込まれるが、薩摩の来援で形勢は逆転する。新選組は会津の指揮下で出動し、敗走する長州兵の掃討に加わった。戦いの代償を払ったのは京の町である。火災は二日間燃え広がり、数万戸を焼いた——世に言う「どんどん焼け」。長州は朝敵とされ、以後の長州征討が幕府の残る体力を食い尽くしていく。"},
  people:["hijikata","kondo","saito","nagakura","harada"],
  roles:{
    kondo:{en:"Led the corps into the field under Aizu's command.", ja:"会津藩の指揮下、隊を率いて出動。"},
    hijikata:{en:"Commanded in the field beside Kondō during the pursuit operations.", ja:"近藤とともに掃討戦を指揮した。"}
  }},

 {id:"yamanami", sort:"1865-03-20", year:"1865", route:true, coords:[35.0027,135.7408], zoom:15,
  date:{en:"March 20, 1865", ja:"1865年3月20日（元治2年2月23日）"},
  loc:{en:"Mibu barracks, Kyoto", ja:"京都・壬生屯所"},
  title:{en:"Yamanami's seppuku", ja:"山南敬助の切腹"},
  desc:{en:"The general secretary leaves a note and rides east — desertion, under the code he helped establish, and punishable by death. The pursuer sent after him is Okita Sōji, the young man he half-raised, and Yamanami returns from Ōtsu without resistance, though escape was surely within his power. On March 20 he dies by seppuku at the barracks, Okita serving as his second. Why he left, and why he came back, remain the corps' most haunting questions: disillusionment with its hardening character, protest at the planned move to Nishi Honganji, or something more private. The people of Mibu, whose children knew him as \"Yamanami the Buddha,\" grieved openly.",
        ja:"総長・山南敬助、置き手紙を残して東へ去る。自ら定めた局中法度の下では脱走であり、死罪である。追っ手に選ばれたのは、彼が半ば育てた沖田総司だった。山南は大津で追いつかれると抵抗せず戻る——逃げ切る力は十分あったはずだった。3月20日、屯所にて切腹。介錯は沖田。なぜ去り、なぜ戻ったのか。苛烈化する隊への幻滅か、西本願寺移転への抗議か、より私的な何かか——新選組史で最も答えの出ない問いである。「仏の山南」と慕った壬生の人々は、その死をはばかることなく悼んだ。"},
  people:["yamanami","okita","hijikata","kondo"],
  roles:{
    yamanami:{en:"Returned without resistance and died by the code he had helped write.", ja:"抵抗なく戻り、自ら作った法度に従って死んだ。"},
    okita:{en:"Sent as the pursuer — perhaps deliberately, as the one man Yamanami would never fight — and served as his second.", ja:"追っ手に立てられ——山南が決して刃を向けぬ相手として、あえて選ばれたか——介錯を務めた。"},
    hijikata:{en:"As enforcer of the code, bears history's blame for the death; whether he sought it or grieved it is unrecorded.", ja:"法度の執行者として、この死の責めを歴史から負う。望んだのか悼んだのか、記録は語らない。"}
  },
  legend:{en:"The farewell with his lover Akesato through the barracks' lattice window first appears in Shimozawa Kan's 20th-century semi-fictional chronicles.",
          ja:"恋人・明里との格子窓越しの別れは、子母澤寛による20世紀の半ば創作的な聞き書きが初出である。"}},

 {id:"honganji", sort:"1865-04-15", year:"1865", route:true, coords:[34.9922,135.7515], zoom:14,
  date:{en:"Spring 1865", ja:"1865年春（慶応元年）"},
  loc:{en:"Nishi Honganji temple, Kyoto", ja:"京都・西本願寺"},
  title:{en:"Headquarters at Nishi Honganji", ja:"屯所を西本願寺へ"},
  desc:{en:"Swollen with post-Ikedaya recruits to some two hundred men, the corps outgrows Mibu and moves its barracks into the compound of Nishi Honganji — head temple of a Buddhist sect with millions of adherents, and one suspected of quiet sympathy for Chōshū. The choice is deliberate intimidation as much as logistics. The monks endure drilling, gunfire, and reportedly pigs being raised and slaughtered on sacred ground for the corps' table (a menu encouraged by the physician Matsumoto Ryōjun for the men's health). The temple would eventually help finance the corps' next, purpose-built headquarters just to be rid of them.",
        ja:"池田屋以後の募集で二百名規模に膨張した隊は壬生に収まりきらず、屯所を西本願寺境内へ移す。西本願寺は数百万の門徒を抱える浄土真宗の本山であり、長州への内々の同情も疑われていた。移転は兵站であると同時に、意図的な威圧だった。僧侶たちは境内での調練と砲声に耐え、伝えられるところでは、隊の食膳のため聖域で豚まで飼育・屠殺された（幕医・松本良順が隊士の健康のため肉食を奨励したという）。寺は最終的に、彼らを追い出すために次の屯所の建設費を負担することになる。"},
  people:["kondo","hijikata","okita","saito","nagakura","harada"],
  roles:{
    hijikata:{en:"Managed the move and the expanded corps' organization into the unit system.", ja:"移転と、拡大した隊の組織再編（組長制）を差配した。"}
  }},

 {id:"hatamoto", sort:"1867-06-25", year:"1867", route:true, coords:[34.9899,135.7480], zoom:14,
  date:{en:"June 1867", ja:"1867年6月（慶応3年）"},
  loc:{en:"Fudōdō village, Kyoto", ja:"京都・不動堂村"},
  title:{en:"Direct retainers of the shogun", ja:"幕臣に取り立てられる"},
  desc:{en:"The corps is elevated en masse into the shogun's direct service — Kondō with the standing of a yoriai-class retainer, Hijikata as a fukugoshin — and moves into a lavish new compound at Fudōdō, complete with a bathhouse said to fit thirty men, paid for in large part by Nishi Honganji's relief at their departure. For the Tama farmers it is the summit of a lifetime's climb: they are, at last and officially, samurai. The irony is total. The Tokugawa order that just ennobled them has months to live, and the rank will soon mark them not as gentlemen but as rebels.",
        ja:"隊士一同、幕府直参に取り立てられる——近藤は旗本寄合席並、土方は幕府復御新（見廻組並格）の待遇。屯所は不動堂村に新築された豪壮なもので、三十人が一度に入れたという風呂まで備え、費用の多くは「厄介払い」を喜ぶ西本願寺が負担した。多摩の農民たちにとって、これは生涯をかけた階段の頂上だった。ついに、公式に、武士になったのである。皮肉は完璧だった。彼らを士分に上げた徳川の世は余命数ヶ月であり、この身分はまもなく、栄誉ではなく「賊」の印となる。"},
  people:["kondo","hijikata","okita","saito","nagakura","harada"],
  roles:{
    kondo:{en:"Attains the dream of his life — samurai rank — months before it becomes a death sentence.", ja:"生涯の悲願・士分を得る。それが死罪状に変わる数ヶ月前に。"},
    hijikata:{en:"The medicine peddler of Ishida village is now a retainer of the shogun.", ja:"石田村の薬売りが、将軍直参となった。"}
  }},

 {id:"aburanokoji", sort:"1867-12-13", year:"1867", route:false, coords:[34.9931,135.7546], zoom:15,
  date:{en:"December 13, 1867", ja:"1867年12月13日（慶応3年11月18日）"},
  loc:{en:"Aburanokōji street, Kyoto", ja:"京都・油小路"},
  title:{en:"The Aburanokōji Incident", ja:"油小路事件"},
  desc:{en:"In 1867 the corps' brilliant, ambitious military adviser Itō Kashitarō had split off with over a dozen members — Saitō among them — to form the Goryō Eji, guards of the imperial tomb, drifting toward the loyalist camp. Saitō returns to the corps (almost certainly having been its informant all along) with word that Itō's group means to assassinate Kondō. The corps moves first: Itō is invited to a banquet, plied with drink, and cut down on his way home at Aburanokōji. His corpse is then left in the winter street as bait. When seven of his comrades come for the body, some forty Shinsengumi are waiting. Three of the Goryō Eji die in the ambush; the survivors' hatred will follow the corps to the end — one of them fires the shot that wounds Kondō weeks later, and another will identify him for the executioner at Itabashi.",
        ja:"1867年、隊の知恵袋だった野心家の参謀・伊東甲子太郎が、斎藤一を含む十数名を連れて分離し、孝明天皇の御陵を守る「御陵衛士」を結成、倒幕派へ接近していた。その斎藤が帰隊する——最初から間者だった可能性が極めて高い——伊東派が近藤暗殺を企てているとの情報とともに。隊は先手を打った。伊東を宴席に招いて酔わせ、帰路の油小路で斬殺。遺体をそのまま冬の路上に放置し、罠とした。同志の遺体を引き取りに来た御陵衛士7名を、約40名の新選組が待ち伏せる。衛士側は3名が討死。生き残った者たちの憎悪は最後まで隊を追う——数週間後に近藤を狙撃するのも、板橋で近藤の正体を刑吏に告げるのも、この夜の生存者である。"},
  people:["saito","nagakura","harada","hijikata"],
  roles:{
    saito:{en:"Returned from inside the Goryō Eji with the intelligence that set the ambush in motion — the corps' quietest and most consequential act of espionage.", ja:"御陵衛士の内部から帰隊し、襲撃の引き金となる情報をもたらした。新選組史上、最も静かで最も重大な諜報活動である。"},
    nagakura:{en:"Fought in the street battle against the Goryō Eji come to claim the body.", ja:"遺体を引き取りに来た御陵衛士との路上の戦闘に加わった。"},
    harada:{en:"Fought in the ambush; his spear is prominent in most accounts of the night.", ja:"待ち伏せの戦闘に参加。この夜の記録では彼の槍働きが目立つ。"},
    hijikata:{en:"The operation — banquet, killing, corpse-bait, ambush — bears his planning signature.", ja:"宴席、暗殺、遺体の罠、待ち伏せ——作戦全体に彼の設計の刻印がある。"}
  }},

 {id:"tobafushimi", sort:"1868-01-27", year:"1868", route:true, coords:[34.9291,135.7570], zoom:12,
  date:{en:"January 27–31, 1868", ja:"1868年1月27日（慶応4年1月3日）"},
  loc:{en:"Fushimi, south of Kyoto", ja:"京都南郊・伏見"},
  title:{en:"Battle of Toba–Fushimi", ja:"鳥羽・伏見の戦い"},
  desc:{en:"The Boshin War opens. A shogunal army of some 15,000 marches on Kyoto to \"clear the emperor's side of traitors\" — meaning Satsuma — and collides with 5,000 Satsuma-Chōshū troops at Toba and Fushimi. Numbers prove worthless against drilled riflemen and artillery. The Shinsengumi fights in the burning streets around the Fushimi magistrate's office, where swords against Satsuma's guns achieve little but casualties. On the third day the imperial brocade banner is raised over the Satsuma lines: the shogunal army is now, formally, an army of traitors, and its commanders' will collapses. The shogun slips away to Edo by warship. The corps retreats with the army and sails east — Hijikata, by later accounts, concluding that the age of the sword ended in those streets.",
        ja:"戊辰戦争、開戦。「君側の奸」——すなわち薩摩——を除くべく京へ進んだ幕府軍約1万5千は、鳥羽と伏見で薩長軍約5千と衝突する。訓練された銃兵と砲兵の前に、数の優位は無意味だった。新選組は伏見奉行所周辺の燃える市街で戦うが、薩摩の銃火に刀で挑んでも損害が積み上がるばかりである。三日目、薩摩の陣に錦の御旗が翻った。幕府軍は今や公式に「賊軍」であり、指揮官たちの戦意は崩壊する。将軍慶喜は軍艦で江戸へ脱出。隊も軍とともに退き、海路東へ下った——「もう刀の時代ではない」。土方がそう悟ったのは、この市街戦だったと後に伝えられる。"},
  people:["hijikata","saito","nagakura","harada"],
  roles:{
    hijikata:{en:"Commanded the corps in Kondō's absence, learning modern war the hardest way.", ja:"負傷した近藤に代わって隊を指揮。近代戦を最も苛烈な形で学んだ。"},
    saito:{en:"Fought in the street fighting around the Fushimi magistrate's office.", ja:"伏見奉行所周辺の市街戦を戦った。"},
    nagakura:{en:"Fought at Fushimi; one of the corps' steadiest hands in the rout.", ja:"伏見で奮戦。潰走の中でも最も崩れなかった一人。"},
    harada:{en:"Fought at Fushimi with the corps' forward elements.", ja:"隊の前線部隊として伏見を戦った。"}
  }},

 {id:"koshu", sort:"1868-03-29", year:"1868", route:true, coords:[35.6636,138.7290], zoom:11,
  date:{en:"March 29, 1868", ja:"1868年3月29日（慶応4年3月6日）"},
  loc:{en:"Katsunuma, Kai province", ja:"甲斐国・勝沼"},
  title:{en:"Defeat at Kōshū-Katsunuma", ja:"甲州勝沼の敗戦"},
  desc:{en:"Back in Edo, the corps is renamed the Kōyō Chinbutai — \"Kai Pacification Force\" — and sent to secure Kōfu castle ahead of the advancing imperial army. The march is a small tragicomedy: triumphal send-offs and feasting in the Tama homeland (Kondō traveling, critics said, like a daimyō) cost precious days, and the imperial vanguard reaches Kōfu first. At Katsunuma, some 120 men with a few guns face roughly ten times their number with modern artillery; the line holds for a couple of hours and dissolves. The defeat breaks more than a battle line. In its aftermath, Kondō asks the survivors to continue as his retainers — and Nagakura and Harada, sworn comrades but no man's vassals, walk away for good.",
        ja:"江戸に戻った隊は「甲陽鎮撫隊」と改称され、新政府軍に先んじて甲府城を押さえるべく甲州街道を進む。この行軍は小さな悲喜劇だった。故郷・多摩での祝宴と歓送に貴重な数日を費やし（近藤の道中は「大名行列のようだ」と批判された）、新政府軍の先鋒に甲府入城を先んじられる。勝沼では、数門の砲を持つだけの約120名が、近代砲兵を備えた約十倍の敵と対峙。戦線は二時間ほどで崩壊した。この敗北が壊したのは戦線だけではない。敗戦後、近藤が生き残りに「家臣として」の随従を求めると、同志ではあっても家来ではない永倉と原田は、決別して去った。"},
  people:["kondo","hijikata","nagakura","harada"],
  roles:{
    kondo:{en:"Commanded as \"Ōkubo Tsuyoshi\"; blamed by critics for the fatal delays on the march.", ja:"「大久保剛」の変名で指揮。進軍の致命的な遅延は彼の責とする批判が残る。"},
    hijikata:{en:"Left mid-campaign to seek reinforcements that never materialized.", ja:"戦闘前に援軍要請へ走るが、援軍は現れなかった。"},
    nagakura:{en:"Fought the rearguard, then refused vassalage and parted with Kondō forever.", ja:"殿軍を戦い、その後「家臣たれ」との求めを拒み、近藤と永遠に袂を分かった。"},
    harada:{en:"Fought at Katsunuma and left with Nagakura to form the Seiheitai.", ja:"勝沼を戦い、永倉と共に離隊、靖兵隊を結成する。"}
  }},

 {id:"nagareyama", sort:"1868-04-25", year:"1868", route:true, coords:[35.8563,139.9029], zoom:11,
  date:{en:"April 1868", ja:"1868年4月（慶応4年）"},
  loc:{en:"Nagareyama, Shimōsa province", ja:"下総国・流山"},
  title:{en:"Parting at Nagareyama", ja:"流山の別れ"},
  desc:{en:"Rebuilding with fresh recruits at the river town of Nagareyama, the corps is surprised and surrounded by imperial forces. Battle means annihilation. Kondō — still under his alias — walks into the enemy camp to negotiate, presenting himself as a mere pacification officer, reportedly to buy his men's escape. It nearly works. Then a former Goryō Eji man attached to the imperial staff looks at the prisoner's face and names him: Kondō Isami of the Shinsengumi. Hijikata races to Edo and moves every contact he has — including an appeal through the old shogunal leadership — to save him. On May 17, Kondō is beheaded as a common criminal at Itabashi, denied seppuku; his head is salted and displayed in Kyoto. He and Hijikata had said goodbye at Nagareyama as if it were routine. Both, the accounts suggest, knew better.",
        ja:"流山で新兵を集めて再建中の隊は、新政府軍に急襲され包囲される。戦えば全滅。近藤は——変名のまま——ただの鎮撫隊指揮官を装い、隊士たちを逃がすためか、単身敵陣に出頭して交渉した。もう少しで通るところだった。だが新政府軍に随行していた元御陵衛士が捕虜の顔を見て告げる。「新選組局長、近藤勇である」と。土方は江戸へ疾駆し、旧幕府首脳への嘆願を含むあらゆる伝手を動かして助命に奔走した。5月17日、近藤は板橋で斬首される。切腹は許されず、罪人としての死だった。首は塩漬けにされ京で晒された。流山での二人の別れは、何気ない日常のようだったと伝わる。おそらく、二人とも分かっていた。"},
  people:["kondo","hijikata"],
  roles:{
    kondo:{en:"Chose surrender over a hopeless fight — the last command decision of his life, made for his men.", ja:"勝ち目のない戦いより投降を選んだ。部下のための、生涯最後の指揮官としての決断だった。"},
    hijikata:{en:"Rode to Edo and spent everything — contacts, pride, pleading — trying to save his friend. It was not enough.", ja:"江戸へ走り、伝手も面子もかなぐり捨てて助命に奔走した。それでも足りなかった。"}
  }},

 {id:"okitadeath", sort:"1868-07-19", year:"1868", route:false, coords:[35.6800,139.7120], zoom:12,
  date:{en:"July 19, 1868", ja:"1868年7月19日（慶応4年5月30日）"},
  loc:{en:"Sendagaya, Edo", ja:"江戸・千駄ヶ谷"},
  title:{en:"Death of Okita Sōji", ja:"沖田総司の死"},
  desc:{en:"While Hijikata fights in the north, the corps' brightest sword dies quietly in a gardener's cottage in Sendagaya, where he has been hidden under the care arranged by the physician Matsumoto Ryōjun. Those tending him have kept Kondō's execution secret; Okita is said to have asked after his master to the end. He is about 26. A famous story from his last days has him repeatedly trying, and failing, to cut down a black cat that crossed the garden — the swordsman measuring, in the only units he knew, how little of himself remained.",
        ja:"土方が北の戦線にある頃、隊で最も輝いた剣が、千駄ヶ谷の植木屋の離れで静かに尽きた。幕医・松本良順の手配で匿われていたのである。周囲の者は近藤処刑の報を最後まで隠し、総司は死の間際まで「先生はどうしておられる」と尋ねたと伝わる。享年27（満25、6歳）。最晩年の逸話に、庭に現れる黒猫を斬ろうとして、どうしても斬れなかった、という話がある——剣士が、自分に残されたものの少なさを、彼の知る唯一の尺度で測っていたのだ。"},
  people:["okita"],
  roles:{
    okita:{en:"Died in hiding, unaware that the master he kept asking after was already two months dead.", ja:"潜伏先で死去。案じ続けた師が二ヶ月前に世を去っていたことを、知らぬままに。"}
  },
  legend:{en:"The black cat story comes from later reminiscence and may be embellished; it has become inseparable from his legend.",
          ja:"黒猫の逸話は後年の回想に由来し脚色の可能性があるが、いまや沖田伝説と不可分のものとなっている。"}},

 {id:"utsunomiya", sort:"1868-05-11", year:"1868", route:true, coords:[36.5551,139.8853], zoom:11,
  date:{en:"May 1868", ja:"1868年5月（慶応4年4月）"},
  loc:{en:"Utsunomiya Castle, Shimotsuke", ja:"下野国・宇都宮城"},
  title:{en:"Storming Utsunomiya Castle", ja:"宇都宮城の戦い"},
  desc:{en:"Attached now to Ōtori Keisuke's old-shogunate column, Hijikata leads a vanguard against Utsunomiya castle and takes it by storm — the medicine peddler commanding professional soldiers, and well. The victory shows his new creed in action: firepower, discipline, momentum. A grim anecdote survives: when a soldier broke and ran, Hijikata cut him down on the spot to hold the line, then reportedly wept for him that night and paid for his memorial — the old corps' code, exported to a modern battlefield. Days later, in the fighting when imperial forces retake the castle, Hijikata is shot in the foot and carried north to Aizu to recover.",
        ja:"大鳥圭介率いる旧幕府軍に加わった土方は、先鋒を率いて宇都宮城を強襲、これを陥落させる。薬の行商人が職業軍人たちを指揮し、しかも巧みに指揮したのである。火力、規律、勢い——彼の新しい信条がここで実を結んだ。苛烈な逸話が残る。逃げ出した兵をその場で斬り捨てて戦線を支え、その夜は人知れずその兵のために涙し、後に供養料を出したという——局中法度の掟が、近代の戦場に持ち込まれた瞬間である。数日後、新政府軍の城奪回戦で足に銃創を負い、会津へ後送された。"},
  people:["hijikata"],
  roles:{
    hijikata:{en:"Led the vanguard that stormed the castle; wounded in the foot days later when it was retaken.", ja:"先鋒を率いて城を攻略。数日後の奪回戦で足を負傷した。"}
  }},

 {id:"aizu", sort:"1868-10-06", year:"1868", route:true, coords:[37.4877,139.9294], zoom:10,
  date:{en:"Autumn 1868", ja:"1868年秋（慶応4年〜明治元年）"},
  loc:{en:"Aizu-Wakamatsu", ja:"会津若松"},
  title:{en:"The Aizu campaign", ja:"会津戦争"},
  desc:{en:"Aizu — the domain that took in the masterless swordsmen of Mibu five years earlier — is the imperial coalition's designated villain, and its punishment is total war. Hijikata, recovered from his wound, fights in the doomed defensive campaign as the ring closes on Wakamatsu castle. The remnant Shinsengumi under Saitō fights at Bonari Pass and beyond. When the strategic decision comes to fall back and continue the war from the north, Saitō refuses: to abandon Aizu in its extremity, he reportedly says, would betray everything the corps had claimed to stand for. About a dozen men stay with him. He and Hijikata — the corps' two hardest men, choosing opposite duties — never meet again.",
        ja:"会津——五年前、壬生の浪士たちを拾い上げたその藩が、新政府の「朝敵」の筆頭として、殲滅戦の対象となった。傷の癒えた土方は、若松城への包囲が狭まる中、絶望的な防衛戦を戦う。斎藤率いる新選組の残余は母成峠などで防戦した。やがて戦略上、北へ退いて戦争を継続する決定が下ると、斎藤は拒む。「今、危急の会津を見捨てるのは、隊が掲げてきたすべてへの背信である」と。十数名が彼と共に残った。新選組で最も苛烈な二人の男が、正反対の義務を選び——二度と相まみえることはなかった。"},
  people:["hijikata","saito"],
  roles:{
    hijikata:{en:"Fought the defensive campaign, then moved north to continue the war with Enomoto's forces.", ja:"防衛戦を戦い、榎本軍と合流して戦争を継続すべく北へ向かった。"},
    saito:{en:"Refused to leave, fought Aizu's last battles with a dozen men, and shared the domain's surrender and exile.", ja:"退去を拒否。十数名と会津最後の戦いを戦い抜き、降伏と流謫の運命を藩と分かち合った。"}
  }},

 {id:"sendai", sort:"1868-10-12", year:"1868", route:true, coords:[38.2682,140.8694], zoom:10,
  date:{en:"October 1868", ja:"1868年10月（明治元年）"},
  loc:{en:"Sendai", ja:"仙台"},
  title:{en:"Joining Enomoto's fleet", ja:"榎本艦隊と合流"},
  desc:{en:"At Sendai, as the northern alliance collapses domain by domain, Hijikata boards the runaway shogunal fleet of Admiral Enomoto Takeaki — eight warships that refused to be handed over to the new government, carrying some two thousand soldiers, French military advisers among them. In the councils aboard, the one-time farm boy is treated as a proven field commander; there is an account of officers proposing him for overall command of land operations. The fleet weighs anchor for Ezo (Hokkaido), carrying the last armed remnant of the Tokugawa order — the Shinsengumi now a company-sized unit among them — toward one final improvisation: a republic at the edge of the map.",
        ja:"奥羽越列藩同盟が藩ごとに崩れていく中、土方は仙台で榎本武揚率いる旧幕府艦隊と合流する。新政府への引き渡しを拒んだ軍艦八隻、将兵約二千、そこにはフランス軍事顧問団の姿もあった。艦上の軍議で、かつての農家の子は歴戦の指揮官として遇される。陸戦の総指揮に土方を推す声があったという記録も残る。艦隊は錨を上げ、蝦夷地へ——中隊規模となった新選組を含む、徳川体制最後の武装勢力を乗せて、地図の果ての「共和国」という最後の即興へと向かった。"},
  people:["hijikata"],
  roles:{
    hijikata:{en:"Joined the fleet's leadership councils as a field commander of proven reputation.", ja:"歴戦の指揮官として艦隊首脳の軍議に加わった。"}
  }},

 {id:"goryokaku", sort:"1868-12-04", year:"1868", route:true, coords:[41.7967,140.7570], zoom:12,
  date:{en:"December 1868 – January 1869", ja:"1868年12月〜1869年1月（明治元年）"},
  loc:{en:"Goryōkaku fortress, Hakodate", ja:"箱館・五稜郭"},
  title:{en:"The Republic of Ezo", ja:"蝦夷共和国"},
  desc:{en:"The fleet lands on Ezo in early winter. Hijikata commands one of the two columns that converge on Hakodate, takes the Western-style star fortress of Goryōkaku, then leads the brutal winter campaign along the gale-swept Matsumae coast that clears the island. In December the officers hold Japan's first election — votes among themselves, but an election — and constitute the \"Republic of Ezo\" under President Enomoto. Hijikata is chosen as a magistrate of the army, effectively a vice-minister of war. Foreign observers in the harbor take the new government seriously enough to deal with it de facto. The peddler of Ishida sanyaku has become a founding officer of a republic; it will last five months.",
        ja:"初冬、艦隊は蝦夷地に上陸する。土方は箱館へ向かう二隊のうち一隊を指揮し、洋式の星形城塞・五稜郭を接収。さらに吹雪の松前海岸を進む苛烈な冬季作戦を率いて全島を平定した。12月、士官たちによる日本初の「入札」（選挙）が行われ——投票権は幹部のみとはいえ、選挙である——総裁・榎本武揚の下に「蝦夷共和国」が成立する。土方は陸軍奉行並に選出された。実質的な陸軍次官である。港の外国人観察者たちは、この新政権を事実上の政府として遇した。石田散薬の行商人が、共和国の創設幹部となったのだ。その共和国の寿命は、五ヶ月だった。"},
  people:["hijikata"],
  roles:{
    hijikata:{en:"Led the landing column and the winter conquest of Matsumae; elected army magistrate in Japan's first (officers-only) election.", ja:"上陸部隊の一翼と松前平定の冬季作戦を指揮。日本初の（幹部限定の）選挙で陸軍奉行並に選出された。"}
  }},

 {id:"miyako", sort:"1869-05-06", year:"1869", route:true, coords:[39.6414,141.9723], zoom:9,
  date:{en:"May 6, 1869", ja:"1869年5月6日（明治2年3月25日）"},
  loc:{en:"Miyako Bay, Rikuchū", ja:"陸中・宮古湾"},
  title:{en:"Raid on Miyako Bay", ja:"宮古湾海戦"},
  desc:{en:"The new government's fleet — anchored by the French-built ironclad Kōtetsu, against which Ezo has no answer — masses at Miyako Bay for the final push north. The republic gambles on audacity: three ships will slip in at dawn under false colors, lay alongside the ironclad, and take her by boarding — an abordage out of the age of sail, attempted against a modern warship. Storms strip the attack to a single ship, the Kaiten, with Hijikata aboard. She comes alongside; the boarding party leaps down onto the ironclad's deck — where a Gatling gun meets them. The raid fails in minutes with heavy losses, the Kaiten fighting her way out. Even enemy officers, the accounts say, spoke of the attempt with a kind of awe; Hijikata's composure through the slaughter enters legend.",
        ja:"新政府艦隊——蝦夷側に対抗手段のない仏製甲鉄艦「甲鉄」を旗艦に——最終攻勢のため宮古湾に集結する。共和国は大胆さに賭けた。三隻が偽旗を掲げて夜明けの湾に忍び入り、甲鉄に横付けして移乗白兵で奪い取る——帆船時代の接舷斬り込み（アボルダージュ）を、近代軍艦相手に敢行するのである。嵐が攻撃隊を回天一隻に減らした。土方はその艦上にいた。回天は甲鉄に接舷、斬り込み隊が敵甲板に飛び降りる——そこにガトリング砲が待っていた。襲撃は数分で失敗し、多数の死傷者を出して回天は離脱する。敵将校たちすらこの攻撃を畏敬をもって語ったと伝わり、修羅場での土方の沈着は伝説となった。"},
  people:["hijikata"],
  roles:{
    hijikata:{en:"Aboard the Kaiten as the senior land officer; held the operation together through its bloody failure and withdrawal.", ja:"陸軍側の最上級者として回天に乗艦。血みどろの失敗と離脱の間、部隊の崩壊を食い止めた。"}
  }},

 {id:"death", sort:"1869-06-20", year:"1869", route:true, coords:[41.7737,140.7269], zoom:13,
  date:{en:"June 20, 1869", ja:"1869年6月20日（明治2年5月11日）"},
  loc:{en:"Ippongi gate, Hakodate", ja:"箱館・一本木関門"},
  title:{en:"Death at Hakodate", ja:"箱館に散る"},
  desc:{en:"The imperial general assault on Hakodate. The town falls street by street; a detachment is cut off at the Benten battery near the harbor — among them the last men of the Shinsengumi. Hijikata gathers a relief force and rides out through the Ippongi gate toward the fighting, by most accounts driving his men forward from horseback in the open, and is shot through the lower abdomen. He dies within hours, age 34, days before the republic's surrender. He had sent his photograph, a strand of hair, and his sword back to his family in Hino — a man settling his affairs. His burial place was deliberately concealed and has never been found. The death poem attributed to him: though his body rot on the isle of Ezo, his spirit would guard his lord in the east.",
        ja:"新政府軍、箱館総攻撃。市街は一区画ずつ陥落し、港近くの弁天台場に一隊が孤立する——その中に新選組最後の隊士たちがいた。土方は救援部隊を率いて一本木関門から戦場へ馬を進め、遮蔽もない中で馬上から兵を叱咤していたところを、腹部に銃弾を受けた。数時間のうちに絶命。満34歳、共和国降伏の数日前だった。彼はすでに写真と遺髪と愛刀を日野の家族へ送り届けていた——身辺を整えた男の死である。埋葬地は意図的に秘され、今日まで発見されていない。伝えられる辞世——たとひ身は蝦夷の島辺に朽ちぬとも、魂は東の君やまもらむ。"},
  people:["hijikata"],
  roles:{
    hijikata:{en:"Killed riding to the relief of the corps' last cut-off men — in death as in life, the enforcer who would not abandon his own.", ja:"孤立した最後の隊士たちの救援に向かう馬上で斃れた。生においても死においても、身内を見捨てぬ執行者だった。"}
  },
  legend:{en:"Multiple accounts of his final ride differ in detail (the exact spot, his last words, who recovered his body). The concealed grave has produced a century and a half of theories, none proven.",
          ja:"最期の突撃の細部（正確な地点、最期の言葉、遺体の収容者）は記録によって異なる。秘匿された埋葬地をめぐっては一世紀半にわたり諸説が唱えられてきたが、いずれも証明されていない。"}}
];
