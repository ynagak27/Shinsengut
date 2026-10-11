/* =====================================================================
   EVENTS — 新選組の軌跡
   ---------------------------------------------------------------------
   HOW TO EDIT / 追記のしかた:
   - "sort" (YYYY-MM-DD) controls timeline order. Approximate is fine.
   - Events are numbered on the map in "sort" order. Selecting a person
     draws a line through the events that list them, in that order.
   - "people": who appears on the event card.
   - "roles": what each of them specifically did there. Add or expand
     these freely as your research deepens — one entry per person id.
   - "legend": lore/disputed details, shown in a separate styled box.
   - To add a NEW event: copy a block, give it a unique id, set sort.
   ===================================================================== */

const EVENTS = [

 {id:"serizawabirth", sort:"1826-06-01", year:"1826", coords:[36.1404,140.4360], zoom:12,
  date:{en:"c. 1826", ja:"1826年ごろ（文政9年ごろ）"},
  loc:{en:"Serizawa village, Hitachi — now Namegata, Ibaraki", ja:"常陸国行方郡芹沢村（現・茨城県行方市）"},
  title:{en:"Serizawa Kamo is born", ja:"芹沢鴨、生まれる"},
  desc:{en:"The future Serizawa Kamo is born, by most accounts a younger son of a family of country samurai in Serizawa village, near Lake Kasumigaura in the Mito domain's sphere. The family took its name from the village and claimed descent from the district's medieval warriors. He grows up in the Mito world of revere-the-emperor scholarship and sword training that will produce the assassins of the Sakurada Gate — and him.",
        ja:"のちの芹沢鴨が、霞ヶ浦に近い水戸藩の影響圏・芹沢村の郷士の家に、多くの記録によれば次男以下として生まれる。家は村の名を姓とし、この地の中世の武士の末裔を称していた。尊王の学問と剣術の稽古に満ちた水戸の世界で育つ。その世界が、のちに桜田門外の刺客たちを、そして彼を生むことになる。"},
  people:["serizawa"],
  roles:{
    serizawa:{en:"Born into a gōshi family; even his birth year is uncertain.", ja:"郷士の家に生まれる。生年さえ確かではない。"}
  },
  legend:{en:"His birth year, original name and place in the family are all disputed.",
          ja:"生年、もとの名、家のなかでの立場は、いずれも異説がある。"}},

 {id:"inouebirth", sort:"1829-04-01", year:"1829", coords:[35.6801,139.3972], zoom:15,
  date:{en:"1829", ja:"1829年（文政12年）"},
  loc:{en:"Hino, Musashi — now Hino, Tokyo", ja:"武蔵国日野（現・東京都日野市）"},
  title:{en:"Inoue Genzaburō is born", ja:"井上源三郎、生まれる"},
  desc:{en:"Inoue Genzaburō is born in Hino, the post town on the Kōshū road, into a family of the Hachiōji Thousand-Man Guard — farmers who held minor shogunal rank, kept their swords and took turns guarding the Tokugawa shrines at Nikkō. A younger son with no claim on the family's place, he will spend more than ten years earning his licence in the Tennen Rishin-ryū, the steady elder of a school full of prodigies. His descendants still keep his memory in a small museum near the old post town.",
        ja:"井上源三郎が、甲州街道の宿場・日野で、八王子千人同心の家に生まれる。千人同心は幕府の下級の身分を持つ農民で、刀を帯び、交代で日光の東照宮の警護にあたった。家督を継ぐ見込みのない次男坊の彼は、天然理心流の免許を得るまでに十年以上をかけ、天才ぞろいの一門の落ち着いた年長者となる。子孫はいまも旧宿場の近くの小さな資料館で、その記憶を伝えている。"},
  people:["inoue"],
  roles:{
    inoue:{en:"Born a younger son of a Thousand-Man Guard family.", ja:"千人同心の家の次男として生まれる。"}
  }},

 {id:"kiyokawabirth", sort:"1830-11-24", year:"1830", coords:[38.7848,140.0251], zoom:12,
  date:{en:"November 24, 1830", ja:"1830年11月24日（天保元年10月10日）"},
  loc:{en:"Kiyokawa village, Shōnai — now Shōnai, Yamagata", ja:"出羽国庄内・清川村（現・山形県庄内町）"},
  title:{en:"Kiyokawa Hachirō is born", ja:"清河八郎、生まれる"},
  desc:{en:"The man who will set the Shinsengumi's story in motion is born Saitō Motoji, the son of a wealthy sake-brewing family in the village of Kiyokawa on the Mogami river, in the Shōnai domain. He will take the village's name as his own. Restless and brilliant, he goes to Edo to study, masters both Confucian learning and the sword, and becomes one of the most daring loyalist agitators of his generation — the man who talks the shogunate into raising the Rōshigumi. A memorial museum stands in the village today.",
        ja:"新選組の物語を動かすことになる男が、庄内藩領、最上川沿いの清川村の裕福な酒造家に、斎藤元司として生まれる。のちに村の名を自らの名とする。落ち着きがなく才気にあふれた彼は江戸に出て学び、儒学と剣術をともに修め、同世代で最も大胆な尊攘の志士の一人となる。幕府を説いて浪士組を作らせたのは、この男である。村にはいま記念館が建っている。"},
  people:["kiyokawa"],
  roles:{
    kiyokawa:{en:"Born Saitō Motoji to a sake-brewing family.", ja:"酒造家に斎藤元司として生まれる。"}
  }},

 {id:"yamanamibirth", sort:"1833-03-01", year:"1833", coords:[38.2531,140.8567], zoom:12,
  date:{en:"1833 (traditional)", ja:"1833年（伝承）"},
  loc:{en:"Sendai — by tradition", ja:"仙台（伝承）"},
  title:{en:"Yamanami Keisuke is born", ja:"山南敬助、生まれる"},
  desc:{en:"By tradition Yamanami Keisuke is born in 1833 into a family of retainers of the Sendai domain, the great house of the Date in the north. Almost nothing about his early life is documented. He will make his way to Edo, train in the Chiba family's Hokushin Ittō-ryū and become a man of learning as well as the sword, before attaching himself, by one story after losing a bout, to Kondō Isami's Shieikan.",
        ja:"伝えによれば、山南敬助は1833年、北の大藩・伊達家の仙台藩の藩士の家に生まれる。その前半生はほとんど記録がない。のちに江戸へ出て千葉家の北辰一刀流を学び、剣とともに学問を修めた人となり、ある話によれば立ち合いに敗れたのを機に、近藤勇の試衛館に身を寄せることになる。"},
  people:["yamanami"],
  roles:{
    yamanami:{en:"Born, by tradition, into a Sendai retainer family.", ja:"伝えでは仙台藩士の家に生まれる。"}
  },
  legend:{en:"His Sendai origin and birth year rest on tradition; other places have been suggested.",
          ja:"仙台の出身と生年は伝承に拠り、ほかの出身地を挙げる説もある。"}},

 {id:"kondobirth", sort:"1834-10-09", year:"1834", coords:[35.6790,139.5259], zoom:14,
  date:{en:"October 9, 1834", ja:"1834年10月9日（天保5年10月9日）"},
  loc:{en:"Kami-ishihara village, Musashi — now Chōfu, Tokyo", ja:"武蔵国多摩郡上石原村（現・東京都調布市）"},
  title:{en:"Kondō Isami is born", ja:"近藤勇、生まれる"},
  desc:{en:"Miyagawa Katsugorō, the future Kondō Isami, is born the third son of a well-off farming family in Kami-ishihara, a village on the Kōshū road west of Edo. His father, Miyagawa Hisajirō, is a patron of the Tennen Rishin-ryū and keeps a practice hall in the house, so the boy grows up with the school's masters coming and going.\n\nLike Hijikata's Ishida village a few kilometres away, Kami-ishihara lies in the Tama country — land ruled directly by the shogunate, where prosperous farmers read, write, keep swords and think of themselves as the Tokugawa's own people. Nothing about the birth marks it out. But the household's love of the sword, and its ties to the school, will decide the boy's life.",
        ja:"のちの近藤勇、宮川勝五郎が、江戸の西、甲州街道沿いの上石原村の裕福な農家に三男として生まれる。父の宮川久次郎は天然理心流の後援者で、自宅に道場を構えていた。少年は流派の師範たちが出入りするなかで育つ。\n\n数キロ離れた土方の石田村と同じく、上石原も多摩の地にある。幕府の直轄地で、豊かな農民たちは読み書きをし、刀を持ち、自らを徳川の民と任じていた。この誕生に特別なところは何もない。だが、剣を愛し流派と結びついたこの家のありようが、少年の生涯を決めていく。"},
  people:["kondo"],
  roles:{
    kondo:{en:"Born Miyagawa Katsugorō, third son of the house.", ja:"宮川家の三男・勝五郎として生まれる。"}
  }},

 {id:"birth", sort:"1835-05-31", year:"1835", coords:[35.6600,139.4200], zoom:12,
  date:{en:"May 31, 1835", ja:"1835年5月31日（天保6年5月5日）"},
  loc:{en:"Ishida village, Musashi — now Hino, Tokyo", ja:"武蔵国多摩郡石田村（現・東京都日野市）"},
  title:{en:"Hijikata Toshizō is born", ja:"土方歳三、生まれる"},
  desc:{en:"Hijikata Toshizō is born the tenth and last child of a wealthy farming family on the Tama plain, west of Edo. His father dies before his birth, his mother when he is five. The Tama region is peculiar ground: legally farmland, but administered directly by the shogunate, its prosperous farmers proudly literate, sword-trained, and loyal to the Tokugawa house. Out of this soil — peasant status, samurai self-image — the future vice-commander grows. As a young man he peddles the family medicine, Ishida sanyaku, with a shinai strapped to his pack.\n\nHis sister Nobu married Satō Hikogorō, the headman of Hino, a patron of the Tennen Rishin-ryū who kept a practice hall in his own house; the school's masters came out from Edo to teach there, and it is there that Hijikata came to know Kondō Isami. Tradition says he was sent to Edo as a shop apprentice as a boy and came home after a quarrel. He also wrote haiku, and before leaving for Kyoto he gathered his poems into a small book under the pen name Hōgyoku.",
        ja:"土方歳三、武蔵国多摩の豪農の家に十人兄弟の末子として生まれる。父は出生前に、母は5歳で世を去った。多摩は特異な土地である。身分の上では農地だが幕府直轄領（天領）であり、豪農たちは読み書きを誇り、剣を学び、徳川家への忠誠心が強かった。農民の身分と武士の自意識——その土壌から未来の副長は育つ。青年期は竹刀を荷に括りつけ、家伝薬「石田散薬」を行商して歩いた。\n\n姉のノブは日野宿の名主・佐藤彦五郎に嫁いだ。彦五郎は天然理心流の後援者で、自宅に道場を構え、江戸から師範が出稽古に来ていた。土方が近藤勇と知り合ったのもこの道場である。少年のころ江戸の商家へ奉公に出たが、いさかいを起こして帰ってきたと伝わる。俳句も詠み、京へ発つ前には「豊玉」の号で自作をまとめた小さな句集を残している。"},
  people:["hijikata"],
  roles:{}},

 {id:"itobirth", sort:"1835-06-01", year:"1835", coords:[36.0943,140.3308], zoom:11,
  date:{en:"1835", ja:"1835年（天保6年）"},
  loc:{en:"Shizuku, Hitachi — now Kasumigaura, Ibaraki", ja:"常陸国志筑（現・茨城県かすみがうら市）"},
  title:{en:"Itō Kashitarō is born", ja:"伊東甲子太郎、生まれる"},
  desc:{en:"Itō Kashitarō is born Suzuki Ōkura in Shizuku, Hitachi province, the son of a minor retainer whose family soon falls on hard times. Hitachi lies next to Mito, the heartland of reverence for the emperor, and the boy absorbs its learning along with its swordsmanship. In Edo he will be adopted into the family of a Hokushin Ittō-ryū master and inherit his dōjō; his younger brother, Suzuki Mikisaburō, will follow him there and, later, into the Shinsengumi.",
        ja:"伊東甲子太郎が、常陸国志筑で、まもなく家運の傾く小禄の家臣の子・鈴木大蔵として生まれる。常陸は尊王思想の本拠・水戸の隣国であり、少年はその学問を剣術とともに吸収した。のちに江戸で北辰一刀流の師範の家の養子となって道場を継ぐ。弟の鈴木三樹三郎もそのあとを追って江戸へ、そして新選組へと従うことになる。"},
  people:["ito","suzuki"],
  roles:{
    ito:{en:"Born Suzuki Ōkura, son of a minor retainer.", ja:"小禄の家臣の子・鈴木大蔵として生まれる。"},
    suzuki:{en:"Born here two years later, in 1837.", ja:"二年後の1837年に、ここで生まれる。"}
  },
  legend:{en:"The map point is approximate: the exact site is not known or no longer exists.",
          ja:"地図上の位置はおおよそのもので、正確な場所はわかっていないか、すでに失われている。"}},

 {id:"nagakurabirth", sort:"1839-05-23", year:"1839", coords:[35.7060,139.7845], zoom:13,
  date:{en:"May 23, 1839", ja:"1839年5月23日（天保10年4月11日）"},
  loc:{en:"Matsumae domain residence, Shitaya, Edo", ja:"江戸下谷・松前藩上屋敷"},
  title:{en:"Nagakura Shinpachi is born", ja:"永倉新八、生まれる"},
  desc:{en:"Nagakura Shinpachi is born in the Edo residence of the Matsumae domain, the small northern house that guarded the strait to Ezo, the son of a retainer with a respectable stipend. He is a samurai by birth, unlike most of Kondō's circle, and will give that up to live for the sword. The domain he leaves will take him back after the war — and, forty years later, it is to the far north, to Hokkaido, that he will retire.",
        ja:"永倉新八が、蝦夷地への海峡を守る北の小藩・松前藩の江戸屋敷で、相応の禄を持つ藩士の子として生まれる。近藤一門の多くと違い、彼は生まれながらの武士であり、剣に生きるためにその身分を捨てることになる。彼が去った藩は戦後に彼を再び迎え入れ、四十年後、彼が晩年を過ごすのも北の果て、北海道である。"},
  people:["nagakura"],
  roles:{
    nagakura:{en:"Born the son of a Matsumae retainer with a 150-koku stipend.", ja:"百五十石取りの松前藩士の子として生まれる。"}
  },
  legend:{en:"The map point is approximate: the exact site is not known or no longer exists.",
          ja:"地図上の位置はおおよそのもので、正確な場所はわかっていないか、すでに失われている。"}},

 {id:"haradabirth", sort:"1840-06-01", year:"1840", coords:[33.8456,132.7655], zoom:13,
  date:{en:"1840", ja:"1840年（天保11年）"},
  loc:{en:"Matsuyama, Iyo province", ja:"伊予国松山"},
  title:{en:"Harada Sanosuke is born", ja:"原田左之助、生まれる"},
  desc:{en:"Harada Sanosuke is born in the castle town of Matsuyama on Shikoku, seat of a branch of the Tokugawa's own Matsudaira kin. He grows up to serve the domain as a chūgen, a servant below samurai rank — and, by his own oft-told story, answers a samurai's sneer that he did not know how to cut his belly by slashing it open on the spot. He survives, keeps the scar, and leaves Matsuyama to make his name with the spear.",
        ja:"原田左之助が、徳川一門・松平家の分家の居城がある四国の城下町・松山に生まれる。長じて藩の中間——武士より下の奉公人——となり、本人が繰り返し語った話によれば、腹の切り方も知らぬと嘲った侍に、その場で自分の腹を切ってみせた。彼は生き延び、傷を残し、槍で名を上げるために松山を去る。"},
  people:["harada"],
  roles:{
    harada:{en:"Born in Matsuyama; later a chūgen of the domain.", ja:"松山に生まれ、のちに藩の中間となる。"}
  },
  legend:{en:"The seppuku story comes from Harada himself and later retellings; the exact year and place are uncertain.",
          ja:"切腹の話は原田自身と後年の語り直しに拠り、正確な年と場所は確かではない。"}},

 {id:"okitabirth", sort:"1842-07-01", year:"1842", coords:[35.6584,139.7231], zoom:14,
  date:{en:"1842 or 1844", ja:"1842年または1844年（天保13年または15年）"},
  loc:{en:"Shirakawa domain residence, Azabu, Edo", ja:"江戸麻布・白河藩屋敷"},
  title:{en:"Okita Sōji is born", ja:"沖田総司、生まれる"},
  desc:{en:"Okita Sōji is born in the Edo residence of the Shirakawa domain, where his father serves as a low-ranking retainer. The father dies when the boy is small; the family's place passes to his elder sister Mitsu's husband, Okita Rintarō, and at about nine Sōji is sent to live as a pupil in Kondō Shūsuke's Shieikan. The family temple, Senshō-ji, stands a few streets away — and it is there, some twenty-five years later, that he will be buried.",
        ja:"沖田総司が、父が軽輩の藩士として仕える白河藩の江戸屋敷で生まれる。父は彼が幼いうちに亡くなり、家督は姉ミツの夫・沖田林太郎が継ぎ、九歳ほどの総司は近藤周助の試衛館に内弟子として預けられる。数筋先には沖田家の菩提寺・専称寺があり、二十数年後、彼はそこに葬られることになる。"},
  people:["okita"],
  roles:{
    okita:{en:"Born the son of a low-ranking Shirakawa retainer.", ja:"白河藩の軽輩の子として生まれる。"}
  },
  legend:{en:"His birth year is given as both 1842 and 1844, and the site of the domain residence is approximate.",
          ja:"生年は1842年とも1844年ともいわれ、屋敷の位置もおおよそのものである。"}},

 {id:"shieikan", sort:"1859-06-01", year:"1859", coords:[35.6926,139.7333], zoom:13,
  date:{en:"1859", ja:"1859年（安政6年）"},
  loc:{en:"Shieikan dojo, Ichigaya, Edo", ja:"江戸市谷・試衛館"},
  title:{en:"Hijikata enters the Tennen Rishin-ryū", ja:"土方、天然理心流に入門"},
  desc:{en:"Hijikata formally enters the Tennen Rishin-ryū — a rough, practical rural school scorned by Edo's fashionable dojos as \"potato-samurai\" fencing. The Shieikan in Ichigaya is less an institution than a household: Kondō presiding, the teenage prodigy Okita as live-in disciple, the scholarly Yamanami and professional dojo-guests like Nagakura and Harada around the dinner table. It is poor, tight-knit, and ambitious. When the shogunate calls for swordsmen in 1863, this household will answer as one.\n\nKondō, a farmer's son from Kami-ishihara, had been adopted by the school's third master, Kondō Shūsuke. In 1861 he was formally installed as fourth master, celebrated with a mock battle between two teams of the school's men at the Rokusho shrine in Fuchū. The school now had a young head, a loyal following in the villages of Tama, and very little money. Two years later the shogunate's call for swordsmen offered something none of them had: a career.",
        ja:"土方、天然理心流に正式入門。同流は「田舎剣法」「芋道場」と江戸の名門道場に侮られた、荒く実戦的な流派である。市谷の試衛館は道場というより一つの所帯だった。近藤が主宰し、内弟子の天才少年・沖田、学のある山南、食客の永倉や原田が同じ釜の飯を食う。貧しく、結束が固く、野心があった。1863年、幕府が剣客を募ったとき、この所帯は一つの塊として応じることになる。\n\n近藤は上石原村の農家の子で、流派三代目の近藤周助の養子となっていた。1861年（文久元年）には府中の六所宮で、門人たちが紅白に分かれて戦う野試合を催して四代目襲名を披露している。流派は若い宗家と、多摩の村々の忠実な門人を得たが、金はほとんどなかった。二年後、幕府が剣客を募ったとき、それは彼らの誰も持っていなかったもの——世に出る道——を差し出したのである。"},
  people:["hijikata","kondo","okita","inoue","yamanami","nagakura","harada","todo"],
  roles:{
    todo:{en:"The youngest of the circle, a Hokushin Ittō-ryū man who had drifted into Kondō's company.", ja:"一門の最年少。北辰一刀流から近藤の一門に流れてきた若者。"},
    inoue:{en:"A senior pupil of more than ten years' standing and a fellow Hino man — the steady elder of the house.", ja:"入門十年を超える古参で、同じ日野の人。一門の落ち着いた年長者。"},
    kondo:{en:"Master of the house — a farmer's son turned school head, hungry for a stage worthy of his sword.", ja:"一門の主。農民の子から宗家となり、剣にふさわしい舞台を渇望していた。"},
    okita:{en:"The live-in prodigy, already effectively head instructor while still in his teens.", ja:"住み込みの天才児。十代にして事実上の塾頭を務めた。"},
    nagakura:{en:"A dojo-guest from the Matsumae clan who found the food bad and the company excellent.", ja:"松前藩出身の食客。飯はまずいが人は良い、と居着いた。"},
    harada:{en:"The spearman of the circle — an outsider by style and temperament who fit anyway.", ja:"一門の槍担当。流派も気性も異色ながら、なぜか馴染んだ。"},
    yamanami:{en:"The educated Hokushin Ittō-ryū man, lending the rough house some polish.", ja:"北辰一刀流帰りの学識派。荒っぽい所帯に知性の重しを加えた。"}
  }},

 {id:"succession", sort:"1861-10-01", year:"1861", coords:[35.6674,139.4790], zoom:15,
  date:{en:"October 1, 1861", ja:"1861年10月1日（文久元年8月27日）"},
  loc:{en:"Rokusho shrine, Fuchū — now Ōkunitama shrine", ja:"府中・六所宮（現・大國魂神社）"},
  title:{en:"Kondō becomes fourth master", ja:"近藤、天然理心流四代目を襲名"},
  desc:{en:"To mark Kondō Isami's installation as fourth master of the Tennen Rishin-ryū, the school stages a mock battle in the grounds of the Rokusho shrine in Fuchū, the old provincial capital of Musashi. The students are divided into two armies, red and white, each with its commander, and fight a field battle with practice weapons before the families and patrons of the Tama villages.\n\nIt is the school's great public day, and the names on its roster are the future Shinsengumi: Hijikata Toshizō, Okita Sōji, Yamanami Keisuke and Inoue Genzaburō among them. Two years later the same men will march west together.",
        ja:"近藤勇の天然理心流四代目襲名を祝って、流派は武蔵国の古い国府である府中の六所宮の境内で野試合を催した。門人たちは紅白の二軍に分かれ、それぞれに大将を立て、多摩の村々の家族や後援者の前で、稽古道具を手に野戦を繰り広げた。\n\n流派の晴れの日であり、その名簿に並ぶのは、のちの新選組の面々である。土方歳三、沖田総司、山南敬助、井上源三郎の名もある。二年後、同じ男たちがそろって西へ向かう。"},
  people:["kondo","hijikata","okita","yamanami","inoue"],
  roles:{
    kondo:{en:"Installed as fourth master of the school.", ja:"流派の四代目を襲名した。"},
    hijikata:{en:"Took part in the mock battle.", ja:"野試合に加わった。"},
    okita:{en:"Took part in the mock battle, still in his teens.", ja:"まだ十代で野試合に加わった。"},
    yamanami:{en:"Took part in the mock battle.", ja:"野試合に加わった。"},
    inoue:{en:"Took part in the mock battle.", ja:"野試合に加わった。"}
  },
  legend:{en:"The roster of the mock battle survives, but the roles given to particular men in it vary between later retellings.",
          ja:"野試合の名簿は残っているが、個々の人物の役割については、後年の語り直しによって異同がある。"}},

 {id:"roshigumi", sort:"1863-03-26", year:"1863", coords:[35.7124,139.7469], zoom:15,
  date:{en:"March 26, 1863", ja:"1863年3月26日（文久3年2月8日）"},
  loc:{en:"Denzū-in temple, Koishikawa, Edo", ja:"江戸小石川・伝通院"},
  title:{en:"The Rōshigumi marches west", ja:"浪士組、京へ"},
  desc:{en:"The shogun is to visit Kyoto, the first such journey in more than two centuries, and the city is full of loyalist swordsmen. Kiyokawa Hachirō's answer has been accepted: pardon the country's masterless fighters and hire them as a guard. Some 230 men gather at Denzū-in, a Tokugawa family temple in Koishikawa, and set out along the Nakasendō, the inland highway, for the fifteen-day march to Kyoto.\n\nThe recruits are a ragged mix of rōnin, farmers' sons, gamblers and genuine fencing masters. Kondō Isami's Shieikan household signs on together — Hijikata, Okita, Yamanami, Nagakura, Harada, Inoue, Tōdō — with no rank among them beyond a minor place in the column. So does a group from Mito around Serizawa Kamo, with a pedigree and a temper to match. Neither group yet knows that the man who organised the march means to hand it to the emperor's cause the moment it arrives.",
        ja:"将軍が二百年以上ぶりに上洛することになり、京には尊攘派の志士があふれていた。清河八郎の建策——国中の浪人を赦して警護に雇う——が採用される。約230名が徳川家の菩提寺である小石川の伝通院に集まり、中山道を通って十五日の行程で京を目指した。\n\n集まったのは浪人、農家の子、博徒、本物の剣術師範まで入り混じった雑多な顔ぶれだった。近藤勇の試衛館一門——土方、沖田、山南、永倉、原田、井上、藤堂——はそろって加わったが、隊列の中でとりたてて地位があったわけではない。芹沢鴨を中心とする水戸の一派も加わった。家柄も気性もそれにふさわしい男たちである。どちらの一派も、この行軍を企てた男が、京に着くなり一同を朝廷の側に差し出すつもりでいることを、まだ知らなかった。"},
  people:["hijikata","kondo","okita","yamanami","nagakura","harada","inoue","todo","serizawa","niimi","kiyokawa"],
  roles:{
    kiyokawa:{en:"The scheme's author, travelling with the column and keeping his real plan to himself.", ja:"この企ての発案者。隊列とともに上りながら、本当の狙いは胸にしまっていた。"},
    kondo:{en:"Given a modest post arranging lodgings ahead of the column — a long way from command.", ja:"隊列の先回りをして宿割りをする程度の役。指揮官にはほど遠かった。"},
    serizawa:{en:"Already a leader of his own group; at Honjō, by Nagakura's later account, he lit a bonfire in the street when no room had been found for him.", ja:"すでに一派の頭目。永倉の後年の回想によれば、本庄宿で自分の宿が取られていなかったことに怒り、往来で大篝火を焚いた。"},
    niimi:{en:"Marched west in Serizawa's Mito group.", ja:"芹沢の水戸派の一員として西へ向かう。"},
    hijikata:{en:"An unranked recruit in Kondō's group: a farmer's son with a sword licence and no title.", ja:"近藤一門の無役の一隊士。免許はあっても肩書のない農家の子だった。"},
    okita:{en:"Not yet twenty, and already the best swordsman of Kondō's house.", ja:"まだ二十歳前だが、すでに近藤一門随一の剣の使い手。"}
  }},

 {id:"mibu", sort:"1863-04-10", year:"1863", coords:[35.0024,135.7413], zoom:14,
  date:{en:"April 1863", ja:"1863年4月（文久3年）"},
  loc:{en:"Mibu village, Kyoto", ja:"京都・壬生村"},
  title:{en:"Arrival at Mibu", ja:"壬生に到着"},
  desc:{en:"The shogunate, desperate to police a Kyoto seething with loyalist assassins, recruits masterless swordsmen into the Rōshigumi and marches them west. The scheme immediately unravels — its organizer intends to turn the men to the loyalist cause — and the militia is ordered home. Two factions refuse: Serizawa's Mito men and Kondō's Shieikan household. Petitioning the Aizu domain, the protector of Kyoto, they are taken on as the Mibu Rōshigumi: two dozen unemployed swordsmen billeted on the farming village of Mibu, mocked in town as the \"wolves of Mibu.\" It is a shabby beginning to a black-and-white legend.\n\nThe men are billeted on two leading households of Mibu, the Yagi and the Maekawa, whose houses still stand. They have a uniform made: a pale blue haori with white saw-tooth stripes at the cuffs, borrowed from the costume of the Forty-Seven Rōnin on the stage — the pattern that runs along the top of this page. After the corps' service in the August 1863 coup, they receive a new name: the Shinsengumi, the \"newly selected corps.\"",
        ja:"尊攘派志士の暗殺が横行する京都の治安に窮した幕府は、浪士を募って浪士組を結成、西へ上らせる。しかし計画は即座に破綻——発案者の清河八郎が一同を尊攘運動に転用しようとしたのだ——浪士組には江戸帰還命令が下る。これを拒んだのが芹沢の水戸派と近藤の試衛館一党だった。京都守護職・会津藩に嘆願して御預となり、「壬生浪士組」が発足する。壬生村に間借りした二十数名の浪人たち。町では「壬生狼（みぶろ）」と嘲られた。誠の旗の伝説は、このみすぼらしさから始まった。\n\n隊士たちは壬生村の有力な二軒の家、八木家と前川家に分宿した。両家の建物はいまも残っている。揃いの羽織も作られた。浅葱色の地に白い山形の段だら模様を染め抜いたもので、芝居の赤穂浪士の衣装にならったものである——このページの上端に走る模様がそれだ。1863年8月の政変での働きののち、彼らは新しい名を授かる。「新選組」である。"},
  people:["hijikata","kondo","okita","saito","nagakura","harada","yamanami","inoue","serizawa","todo","kiyokawa","niimi","katamori"],
  roles:{
    kiyokawa:{en:"Organiser of the Rōshigumi; at Mibu he reveals that he means to serve the emperor, not the shogunate, and leads most of the men back east.", ja:"浪士組の発案者。壬生で、幕府ではなく天皇に仕えるのだと本心を明かし、大半の浪士を連れて東へ戻る。"},
    niimi:{en:"One of the corps' three first commanders, with Serizawa and Kondō.", ja:"芹沢・近藤とともに、結成時の三人の局長の一人。"},
    katamori:{en:"As Protector of Kyoto, takes the men who stayed behind under Aizu's authority.", ja:"京都守護職として、京に残った浪士たちを会津藩の預かりとする。"},
    todo:{en:"Stays in Kyoto with Kondō's group; at nineteen, the youngest of the founding core.", ja:"近藤らとともに京に残る。十九歳、結成時の中核で最年少。"},
    inoue:{en:"Stays in Kyoto with Kondō's group and becomes an assistant vice-commander (副長助勤).", ja:"近藤らとともに京に残り、副長助勤となる。"},
    serizawa:{en:"Senior commander by birth and pedigree — and already a walking diplomatic incident.", ja:"家格と経歴で筆頭に座る。そしてすでに歩く不祥事だった。"},
    kondo:{en:"Junior commander, quietly building his own faction's credit with Aizu.", ja:"局長の一角。会津藩に対する近藤派の信用を静かに積み上げていく。"},
    hijikata:{en:"Begins organizing the corps' internal order — the work that will define him.", ja:"隊の内部秩序の構築に着手する。彼を定義する仕事の始まり。"}
  }},

 {id:"kiyokawadeath", sort:"1863-05-30", year:"1863", coords:[35.6555,139.7373], zoom:15,
  date:{en:"May 30, 1863", ja:"1863年5月30日（文久3年4月13日）"},
  loc:{en:"Ichinohashi bridge, Azabu, Edo", ja:"江戸麻布・一之橋"},
  title:{en:"Kiyokawa Hachirō assassinated", ja:"清河八郎、暗殺される"},
  desc:{en:"Back in Edo with the Rōshigumi men who followed him home, Kiyokawa Hachirō is still scheming — now, it is feared, for a rising against the foreigners in Yokohama. The shogunate, which paid for his corps and was then betrayed by it, decides he must be stopped. Returning from a visit in Azabu, he is cut down near the Ichinohashi bridge by a group of shogunal swordsmen. He is thirty-two.\n\nHis death settles the shape of what he started. The men he led back east are reorganised as the Shinchōgumi, a police force in Edo under the Shōnai domain. The handful who refused to follow him are in Kyoto, under Aizu, and about to become the Shinsengumi. The two halves of the Rōshigumi will spend the rest of the decade serving the same shogunate, three hundred miles apart.",
        ja:"自分に従って江戸へ戻った浪士組の面々とともに、清河八郎はなお策を巡らせていた——今度は横浜の外国人居留地を襲う挙兵ではないかと恐れられた。浪士組の費用を出しながら裏切られた幕府は、彼を止めねばならないと決める。麻布での訪問の帰り、清河は一之橋の近くで幕府方の剣客の一団に斬られた。三十二歳（数え三十四歳）だった。\n\n彼の死が、彼の始めたことの形を定める。江戸へ連れ帰られた浪士たちは、庄内藩預かりの江戸の警察組織・新徴組に再編された。彼に従わなかった一握りの者たちは京で会津藩の預かりとなり、まもなく新選組となる。浪士組の二つの半分は、その後の十年近くを、遠く離れた江戸と京で、同じ幕府のために働いて過ごすことになる。"},
  people:["kiyokawa"],
  roles:{
    kiyokawa:{en:"Killed by shogunal swordsmen, weeks after turning the Rōshigumi against the regime that had paid for it.", ja:"浪士組を、その費用を出した幕府に背かせてから数週間後、幕府方の剣客に斬られた。"}
  },
  legend:{en:"The killers are generally named as Sasaki Tadasaburō and his companions — the same Sasaki who, by later evidence, led the Mimawarigumi squad that killed Sakamoto Ryōma in 1867.",
          ja:"下手人は一般に佐々木只三郎らとされる。のちの証言によれば、1867年に坂本龍馬を斬った見廻組の一隊を率いたのも、この佐々木である。"}},

 {id:"osakasumo", sort:"1863-08-28", year:"1863", coords:[34.6984,135.4970], zoom:14,
  date:{en:"August 1863", ja:"1863年8月（文久3年7月）"},
  loc:{en:"Kitashinchi, Osaka", ja:"大坂・北新地"},
  title:{en:"Brawl with the Osaka sumo wrestlers", ja:"大坂力士との乱闘"},
  desc:{en:"On duty in Osaka, a party of the corps led by Serizawa takes a boat out on the river to cool off, then heads into the pleasure quarter of Kitashinchi. On a narrow bridge a sumo wrestler refuses to give way, and Serizawa strikes him down. That night a crowd of wrestlers armed with staves comes to the teahouse where the swordsmen are drinking. The swordsmen draw. Wrestlers are cut down, at least one fatally, and the rest scatter.\n\nThe Osaka authorities are furious, and the corps' standing hangs on the outcome. In the end the sumo stables accept a settlement, and the incident is smoothed over with a charity sumo tournament in Kyoto under the corps' sponsorship. To the corps' Aizu patrons, though, it is one more entry in a growing list of Serizawa's outrages, and the list is nearly long enough.",
        ja:"大坂出張中、芹沢率いる一隊は川で舟遊びをして涼んだのち、北新地の遊里へ向かった。狭い橋の上で道を譲らなかった力士を、芹沢が打ち倒す。その夜、棒を手にした力士たちが、隊士たちの飲んでいた茶屋に押し寄せた。隊士は抜刀し、力士側に少なくとも一人の死者を出して追い散らした。\n\n大坂の役人は激怒し、隊の立場は危うくなった。結局は相撲部屋側と和解し、隊が後援して京で勧進相撲を興行することで事は収まる。しかし会津藩から見れば、これも芹沢の乱行の一つにすぎなかった。その数は、もうじゅうぶんに積み上がりつつあった。"},
  people:["serizawa","okita","nagakura","yamanami","saito","shimada"],
  roles:{
    serizawa:{en:"Struck down the wrestler on the bridge and led the party in the fight that followed.", ja:"橋の上で力士を打ち倒し、続く乱闘でも一隊を率いた。"},
    nagakura:{en:"In the party, and the main source for the night — his memoir tells the story in detail.", ja:"一隊の一人。この夜の主な語り手で、回想録に詳しく書き残した。"},
    saito:{en:"In the party; by Nagakura's account it was Saitō's feeling unwell that brought them ashore.", ja:"一隊の一人。永倉の記述では、斎藤の気分が悪くなったことが上陸のきっかけだった。"},
    okita:{en:"In the party that fought off the wrestlers.", ja:"力士たちを撃退した一隊の一人。"},
    yamanami:{en:"In the party — an unlikely brawler, which says something about how the corps worked in its first year.", ja:"一隊の一人。乱闘には似合わない人物で、結成一年目の隊のありようを物語る。"},
    shimada:{en:"Named in the party in Nagakura's account.", ja:"永倉の記述で一隊の一人に名が挙がる。"}
  },
  legend:{en:"Almost everything known about the night — who was there, who struck first, how many wrestlers died — comes from Nagakura's recollections decades later. The settlement and the charity tournament are better attested than the details of the fight.",
          ja:"この夜について知られていること——誰がいたか、誰が先に手を出したか、力士が何人死んだか——のほとんどは、数十年後の永倉の回想に拠る。和解と勧進相撲のほうが、乱闘の細部よりも裏付けは確かである。"}},

 {id:"serizawa", sort:"1863-10-30", year:"1863", coords:[35.0035,135.7420], zoom:15,
  date:{en:"October 1863 — exact date disputed", ja:"1863年10月（文久3年9月）※日付に異説"},
  loc:{en:"Yagi residence, Mibu", ja:"壬生・八木邸"},
  title:{en:"Purge of Serizawa Kamo", ja:"芹沢鴨の粛清"},
  desc:{en:"After months of extortion, arson, and brawls that mortify the corps' Aizu patrons, the sentence comes down. On a night of driving rain, after a banquet at the Sumiya, assassins enter the Yagi house where Serizawa sleeps beside his mistress Oume. Both are killed; his lieutenant Hirayama dies in the next room. The corps blames Chōshū agents and stages a magnificent funeral. Everyone in the barracks understands. Command is now Kondō's alone, and the instrument of the purge — Hijikata's faction — becomes the corps' true spine. The Yagi family's descendants would later show visitors the sword scars in the doorframe.",
        ja:"強請、放火、乱闘——会津藩の面目を潰し続けた数ヶ月の末、処断が下る。豪雨の夜、島原・角屋の宴会の後、刺客たちは八木邸に忍び入り、愛妾お梅と眠る芹沢を襲った。二人とも斬殺され、隣室の平山五郎も殺された。隊は「長州の仕業」と称して盛大な葬儀を営む。屯所の誰もが真相を察していた。指揮権は近藤に一本化され、粛清の実行部隊——土方派——が隊の背骨となる。八木家には今も、この夜の刀傷が鴨居に残る。"},
  people:["hijikata","okita","yamanami","harada","serizawa","niimi","kondo"],
  roles:{
    kondo:{en:"Commander when the decision was taken; not usually named among the men who did the killing, but the gainer by it.", ja:"決断が下されたときの局長。手を下した者に名を挙げられることは少ないが、この粛清で最も得をした人物。"},
    niimi:{en:"Forced to commit seppuku in a Gion teahouse a few days before Serizawa was killed.", ja:"芹沢暗殺の数日前、祇園の料亭で切腹を強いられた。"},
    hijikata:{en:"Widely held to have planned and led the assassination party.", ja:"襲撃の計画者・指揮者と広く目される。"},
    okita:{en:"Named among the assassins in most accounts.", ja:"多くの記録が実行者の一人に数える。"},
    yamanami:{en:"Named among the assassins in several accounts — the gentle man's darkest night.", ja:"複数の記録が実行者に挙げる。「仏の山南」の最も暗い夜。"},
    harada:{en:"Named among the assassins in several accounts.", ja:"複数の記録が実行者に挙げる。"},
    serizawa:{en:"Killed in his sleep beside Oume after an evening of heavy drinking.", ja:"深酒の末、お梅の隣で就寝中を襲われ死亡。"}
  },
  legend:{en:"Participant lists vary across sources (some add Tōdō Heisuke or Inoue Genzaburō, some drop Yamanami), and even the date differs between accounts. The rain, the party at the Sumiya, and the survival of the Yagi children hiding under their bedding come mainly from the Yagi family's later reminiscences.",
          ja:"実行者の顔ぶれは史料によって異なり（藤堂平助や井上源三郎を加えるもの、山南を外すものもある）、日付さえ一致しない。豪雨、角屋での宴、布団をかぶって難を逃れた八木家の子供たち——これらの細部は主に後年の八木家の回想に由来する。"}},

 {id:"ikedaya", sort:"1864-07-08", year:"1864", coords:[35.0090,135.7701], zoom:15,
  date:{en:"July 8, 1864", ja:"1864年7月8日（元治元年6月5日）"},
  loc:{en:"Ikedaya inn, Sanjō-Kiyamachi, Kyoto", ja:"京都三条木屋町・池田屋"},
  title:{en:"The Ikedaya Incident", ja:"池田屋事件"},
  desc:{en:"Under torture, the arrested merchant-loyalist Furutaka Shuntarō reveals a plot: loyalist bands will fire Kyoto in the summer wind, and in the chaos carry the emperor off to Chōshū. On the night of the Gion festival's eve, the corps splits into two search columns to comb the riverside inn districts. Kondō's small party finds the conspirators — over twenty of them — in council upstairs at the Ikedaya. Rather than wait, Kondō attacks with a handful of men, announcing \"official business!\" at the door. Two hours of close-quarters slaughter follow in the dark, on stairs and in corridors, until Hijikata's column arrives and seals the block. Around eight loyalists are killed and over twenty arrested; the corps loses three, with others dying of wounds. Overnight, the Shinsengumi becomes the most famous — and most hated — sword in Japan. Historians still debate whether the raid delayed the Meiji Restoration or, by enraging Chōshū, hastened it.",
        ja:"捕縛された商人志士・古高俊太郎が拷問の末に自白する。祇園祭の宵、風の強い日を選んで京に火を放ち、混乱に乗じて天皇を長州へ動座させるという計画である。祭りの前夜、隊は二手に分かれて鴨川沿いの旅籠街を捜索。近藤隊が三条木屋町の池田屋で、二階に会合中の志士二十数名を発見する。応援を待たず、近藤はわずかな手勢で「御用改めである！」と踏み込んだ。暗闇の階段と廊下で二時間におよぶ白兵戦。やがて土方隊が到着して周辺を封鎖した。志士側は討死約8名・捕縛20名超、新選組も3名が死亡、負傷者から後日の死者も出た。一夜にして新選組は日本一有名な——そして最も憎まれる——剣となった。この事件が明治維新を遅らせたのか、長州を激昂させてかえって早めたのか、歴史家の議論は今も続く。"},
  people:["kondo","okita","nagakura","hijikata","saito","harada","inoue","todo","takeda","yamazaki","shimada","matsubara","tani"],
  roles:{
    shimada:{en:"In Hijikata's column, and listed among the men rewarded for the night.", ja:"土方隊の一員。この夜の働きで褒賞を受けた者の中に名がある。"},
    matsubara:{en:"In Hijikata's column, which searched the riverside inns before converging on the Ikedaya.", ja:"土方隊の一員。鴨川沿いの宿を探索したのち池田屋に駆けつけた。"},
    tani:{en:"In Hijikata's column; his younger brother Mantarō fought inside with Kondō.", ja:"土方隊の一員。弟の万太郎は近藤とともに屋内で戦った。"},
    yamazaki:{en:"Credited, with other investigators, with the surveillance of Furutaka Shuntarō that exposed the plot and led to the raid.", ja:"他の探索方とともに古高俊太郎を内偵し、計画の露見と襲撃につなげたとされる。"},
    todo:{en:"Went in with Kondō's handful; a sword stroke opened his forehead after he pushed back his headband in the heat.", ja:"近藤とともに踏み込んだ一人。暑さに鉢金を押し上げたところを額を斬られた。"},
    takeda:{en:"One of the handful who went in with Kondō, and rewarded for it.", ja:"近藤とともに踏み込んだわずかな手勢の一人で、恩賞を受けた。"},
    inoue:{en:"In Hijikata's column, which combed the riverside inns before converging on the Ikedaya.", ja:"土方隊に属し、鴨川沿いの旅籠を捜索したのち池田屋に合流した。"},
    kondo:{en:"Led the assault party through the front door with only a handful of men, fighting in the melee himself; his prized \"Kotetsu\" survived intact, as he proudly wrote home.", ja:"わずかな手勢で表口から突入、自ら乱戦を戦った。自慢の「虎徹」は刃こぼれ一つなかったと故郷に書き送っている。"},
    okita:{en:"Cut down several men in the opening melee, then collapsed mid-fight and was carried out (see legend note).", ja:"斬り込み直後に数名を斬り伏せるが、戦闘の途中で昏倒し運び出された（下の伝承欄を参照）。"},
    nagakura:{en:"Fought at the heart of it to the end — sword snapped, thumb split open, saved by his chain mail.", ja:"最後まで乱戦の中心で戦い続けた。刀は折れ、親指は割れ、鎖帷子が命を救った。"},
    hijikata:{en:"Commanded the second column; arrived to cordon the streets, and pointedly kept the late-coming Aizu troops outside — the credit would be the corps' alone.", ja:"別動隊を指揮。到着後は周辺を封鎖し、遅れて来た会津藩兵をあえて中に入れなかった。手柄は新選組だけのものにする、という計算である。"},
    saito:{en:"Served in Hijikata's column securing the surrounding streets (accounts of individual placements vary).", ja:"土方隊に属し周辺の制圧に当たった（各人の配置には諸説ある）。"},
    harada:{en:"Served in Hijikata's cordon squad outside the inn.", ja:"土方隊の包囲部隊として屋外を固めた。"}
  },
  legend:{en:"Okita coughing blood on the Ikedaya floor is the most famous scene in Shinsengumi fiction — and is probably not what happened. Nagakura's account says only that Okita fell ill during the fight; heatstroke on a stifling festival night is a common modern reading.",
          ja:"池田屋の床に喀血して倒れる沖田——新選組フィクション最大の名場面だが、おそらく史実ではない。永倉の手記は「戦闘中に病に倒れた」と記すのみで、蒸し暑い祭りの夜の熱中症とみる説が現在は有力である。"}},

 {id:"kinmon", sort:"1864-08-20", year:"1864", coords:[35.0243,135.7595], zoom:14,
  date:{en:"August 20, 1864", ja:"1864年8月20日（元治元年7月19日）"},
  loc:{en:"Hamaguri Gate, Kyoto Imperial Palace", ja:"京都御所・蛤御門"},
  title:{en:"The Kinmon Incident", ja:"禁門の変"},
  desc:{en:"Enraged by the Ikedaya and by its expulsion from court the previous year, Chōshū marches armies on Kyoto to \"appeal\" at the palace gates by force. The fiercest fighting erupts at the Hamaguri Gate, where Aizu and Kuwana troops buckle until Satsuma reinforcements swing the day. The Shinsengumi deploys under Aizu command and joins the pursuit of the broken Chōshū columns. The battle's cost falls on the city: fires spread for two days, burning tens of thousands of homes — the great \"Donburi-yake.\" Chōshū is declared an enemy of the court, and the shogunate's punitive expeditions against it will consume the regime's remaining strength.\n\nThe corps is first posted on the riverbank at Kujō, south of the city, then sent in pursuit as the Chōshū forces break. The chase ends on Tennōzan, the hill south-west of Kyoto where the loyalist Maki Izumi and his companions kill themselves rather than surrender. For the corps, still mostly swordsmen, it is a first taste of a battle fought with guns and cannon on open ground.",
        ja:"池田屋事件と前年の追放処分に激昂した長州藩は、武力をもって御所に「嘆願」すべく京へ軍を進めた。最激戦地は蛤御門。会津・桑名勢が押し込まれるが、薩摩の来援で形勢は逆転する。新選組は会津の指揮下で出動し、敗走する長州兵の掃討に加わった。戦いの代償を払ったのは京の町である。火災は二日間燃え広がり、数万戸を焼いた——世に言う「どんどん焼け」。長州は朝敵とされ、以後の長州征討が幕府の残る体力を食い尽くしていく。\n\n隊はまず京の南、九条河原に布陣し、長州勢が崩れると追撃に回った。追撃は京の南西にある天王山で終わる。尊攘派の真木和泉とその同志たちは、降伏を拒んでそこで自刃した。まだ剣客の集団であった隊にとって、野戦で銃と大砲が飛び交う戦を初めて経験した戦いでもあった。"},
  people:["hijikata","kondo","saito","nagakura","harada","katamori"],
  roles:{
    katamori:{en:"His Aizu troops held the palace gates against Chōshū's attack.", ja:"会津兵が長州の攻撃から御所の門を守り抜いた。"},
    kondo:{en:"Led the corps into the field under Aizu's command.", ja:"会津藩の指揮下、隊を率いて出動。"},
    hijikata:{en:"Commanded in the field beside Kondō during the pursuit operations.", ja:"近藤とともに掃討戦を指揮した。"}
  }},

 {id:"petition1864", sort:"1864-09-10", year:"1864", coords:[35.0195,135.7875], zoom:15,
  date:{en:"Autumn 1864", ja:"1864年秋（元治元年）"},
  loc:{en:"Konkai Kōmyō-ji, Kurodani — Aizu's Kyoto headquarters", ja:"黒谷・金戒光明寺（会津藩本陣）"},
  title:{en:"The petition against Kondō", ja:"近藤非行五箇条の建白"},
  desc:{en:"After the Ikedaya, Kondō is a celebrity, and some of his oldest comrades think it has gone to his head. He is treating the men who founded the corps with him as his retainers rather than his equals. Six members — Nagakura Shinpachi, Harada Sanosuke, Saitō Hajime, Shimada Kai and two others — take the extraordinary step of going over his head: they submit a written complaint, listing his faults, to the Aizu domain at its Kyoto headquarters, the temple of Konkai Kōmyō-ji in Kurodani. They stake their lives on it: if the charges are found false, they are ready to commit seppuku themselves.\n\nMatsudaira Katamori himself intervenes. He summons the two sides, scolds and soothes, and reconciles them over sake. The corps holds together. But its code does not forget: within weeks one of the six, Kuzuyama Takehachirō, is ordered to commit seppuku on another charge — and few at the time doubted the connection.",
        ja:"池田屋の後、近藤は時の人となり、古くからの同志のなかには、それが彼を増長させていると感じる者もいた。ともに隊を興した仲間を、同志ではなく家来のように扱い始めていたのである。永倉新八、原田左之助、斎藤一、島田魁ら六人は、異例の手段に出た。近藤の非行を書き連ねた建白書を、黒谷の金戒光明寺に置かれた会津藩の本陣に提出したのである。訴えが誤りとされれば自分たちが切腹する覚悟だった、と伝わる。\n\n松平容保みずからが仲裁に乗り出した。双方を呼び、叱り、なだめ、酒を酌み交わさせて和解させた。隊は割れずにすんだ。だが法度は忘れなかった。数週間のうちに六人の一人、葛山武八郎が別の罪状で切腹を命じられる。当時、この二つを結びつけて考えない者はほとんどいなかった。"},
  people:["nagakura","harada","saito","shimada","kondo","katamori"],
  roles:{
    nagakura:{en:"Led the protest — and later told the story himself in his memoir.", ja:"抗議の中心となり、のちに自らの回想録でこの一件を語った。"},
    harada:{en:"Signed the complaint.", ja:"建白書に名を連ねた。"},
    saito:{en:"Signed the complaint — the same Saitō who would later be Kondō's most trusted spy.", ja:"建白書に名を連ねた。のちに近藤の最も信頼する間者となる、あの斎藤である。"},
    shimada:{en:"Signed the complaint.", ja:"建白書に名を連ねた。"},
    kondo:{en:"Accused by his own founding comrades of treating them as retainers; reconciled with them at Katamori's order.", ja:"結成以来の同志から、自分たちを家来扱いしていると訴えられ、容保の命で和解した。"},
    katamori:{en:"Mediated in person and kept the corps from splitting.", ja:"みずから仲裁に立ち、隊の分裂を防いだ。"}
  },
  legend:{en:"Almost everything about the petition comes from Nagakura's own later accounts, which naturally present the six in a good light. The link between the protest and Kuzuyama's death is an inference, not a documented fact.",
          ja:"この建白について知られていることのほとんどは、永倉自身の後年の記述に拠り、当然ながら六人を好意的に描いている。建白と葛山の切腹の結びつきは推測であり、記録で確かめられた事実ではない。"}},

 {id:"recruit1864", sort:"1864-10-20", year:"1864", coords:[35.6800,139.7990], zoom:13,
  date:{en:"Autumn 1864", ja:"1864年秋（元治元年）"},
  loc:{en:"Fukagawa, Edo", ja:"江戸・深川"},
  title:{en:"Recruiting in Edo: Itō Kashitarō joins", ja:"江戸で隊士募集——伊東甲子太郎の入隊"},
  desc:{en:"After the Ikedaya and the Kinmon battle the Shinsengumi is famous, overstretched and short of men. In the autumn Kondō travels east to recruit, and to press the shogunate's senior officials to bring the shogun back to Kyoto. Tōdō Heisuke, who has gone ahead, brings him to the Fukagawa dōjō of Itō Kashitarō, a Hokushin Ittō-ryū master, scholar and poet with his own circle of followers.\n\nItō agrees to join, and comes west with his younger brother Suzuki Mikisaburō, Shinohara Taishinosuke and others; with other recruits gathered in Edo, the corps grows to well over a hundred men. Kondō is delighted with his catch and gives Itō rank above the unit captains. The recruitment brings the corps numbers and polish. It also brings in, as an honoured senior officer, a man whose first loyalty is to the emperor rather than the shogun.",
        ja:"池田屋と禁門の変で新選組は名を上げたが、手は広がり、人数は足りなかった。秋、近藤は隊士募集のために東へ下り、あわせて幕閣に将軍の再上洛を説いた。先に江戸へ入っていた藤堂平助が、近藤を深川の伊東甲子太郎の道場へ案内する。伊東は北辰一刀流の師範で、学者であり歌人でもあり、自らの門人を抱えていた。\n\n伊東は入隊を承諾し、弟の鈴木三樹三郎、篠原泰之進らを連れて西へ上った。江戸で集めた他の新入隊士と合わせ、隊は百数十名にふくらむ。近藤はこの人物を得たことを喜び、伊東を組長より上の地位に据えた。この募集は隊に人数と品格をもたらした。同時に、将軍よりも天皇に第一の忠誠を置く人物を、重んじられる幹部として迎え入れることにもなった。"},
  people:["kondo","todo","ito","suzuki","shinohara"],
  roles:{
    kondo:{en:"Came east to recruit and to lobby the shogunate's leaders; won Itō over and gave him senior rank.", ja:"隊士募集と幕閣への働きかけのために東下。伊東を口説き落とし、高い地位を与えた。"},
    todo:{en:"Went ahead to Edo and, through his old school, brought Kondō to Itō — the most consequential introduction of his life.", ja:"先に江戸へ入り、同門のつてで近藤を伊東に引き合わせた。生涯でいちばん大きな意味を持つ紹介だった。"},
    ito:{en:"Agreed to join with his followers and took the name Kashitarō to mark the year.", ja:"門人とともに入隊を承諾し、この年の干支にちなんで甲子太郎と名乗った。"},
    suzuki:{en:"Came west with his elder brother.", ja:"兄に従って上京。"},
    shinohara:{en:"Came west with Itō as one of his closest followers.", ja:"伊東の側近の一人として上京。"}
  }},

 {id:"yamanami", sort:"1865-03-20", year:"1865", coords:[35.0027,135.7408], zoom:15,
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

 {id:"honganji", sort:"1865-04-15", year:"1865", coords:[34.9922,135.7515], zoom:14,
  date:{en:"Spring 1865", ja:"1865年春（慶応元年）"},
  loc:{en:"Nishi Honganji temple, Kyoto", ja:"京都・西本願寺"},
  title:{en:"Headquarters at Nishi Honganji", ja:"屯所を西本願寺へ"},
  desc:{en:"Swollen with post-Ikedaya recruits to some two hundred men, the corps outgrows Mibu and moves its barracks into the compound of Nishi Honganji — head temple of a Buddhist sect with millions of adherents, and one suspected of quiet sympathy for Chōshū. The choice is deliberate intimidation as much as logistics. The monks endure drilling, gunfire, and reportedly pigs being raised and slaughtered on sacred ground for the corps' table (a menu encouraged by the physician Matsumoto Ryōjun for the men's health). The temple would eventually help finance the corps' next, purpose-built headquarters just to be rid of them.\n\nAround this time the corps takes its mature shape: ten numbered units, each under a captain, and appointed instructors in the sword, spear, jūjutsu, military science, letters, gunnery and horsemanship. The corps' code is applied to its officers as harshly as to anyone. Of the new captains, Matsubara is dead by the autumn, Tani the following spring — both in circumstances the records do not explain — and Takeda, having left the corps, is hunted down and killed in 1867.",
        ja:"池田屋以後の募集で二百名規模に膨張した隊は壬生に収まりきらず、屯所を西本願寺境内へ移す。西本願寺は数百万の門徒を抱える浄土真宗の本山であり、長州への内々の同情も疑われていた。移転は兵站であると同時に、意図的な威圧だった。僧侶たちは境内での調練と砲声に耐え、伝えられるところでは、隊の食膳のため聖域で豚まで飼育・屠殺された（幕医・松本良順が隊士の健康のため肉食を奨励したという）。寺は最終的に、彼らを追い出すために次の屯所の建設費を負担することになる。\n\nこのころ隊は完成した形をとる。一番から十番までの組それぞれに組長を置き、剣術・槍術・柔術・軍学・文学・砲術・馬術に師範を任じた。法度は幹部にも容赦なく適用された。新しい組長のうち、松原はその秋に、谷は翌年の春に世を去る——いずれも記録がその事情を語らない死である——。武田は隊を離れたのち、1867年に追われて殺された。"},
  people:["kondo","hijikata","okita","saito","nagakura","harada","matsubara","takeda","inoue","tani","todo","suzuki","ito","yamazaki","shimada","yoshimura","ogata","hattori","shinohara"],
  roles:{
    hattori:{en:"Inspector, close to Itō's circle.", ja:"監察。伊東の一門と近かった。"},
    shinohara:{en:"Inspector and jūjutsu instructor, and Itō's chief lieutenant.", ja:"監察兼柔術師範。伊東の腹心。"},
    yoshimura:{en:"Joined in 1865 in the recruiting drive in the east, and became a sword instructor.", ja:"1865年の東国での隊士募集で加わり、撃剣師範となった。"},
    ogata:{en:"Assistant vice-commander and instructor in letters.", ja:"副長助勤、文学師範。"},
    okita:{en:"Given the 1st unit — the corps' sharpest sword at its head.", ja:"一番組長に。隊随一の剣が先頭に立つ。"},
    nagakura:{en:"Given the 2nd unit.", ja:"二番組長に。"},
    saito:{en:"Given the 3rd unit.", ja:"三番組長に。"},
    matsubara:{en:"Given the 4th unit and the instructorship in jūjutsu; he would be dead by the autumn.", ja:"四番組長と柔術師範に。その秋には世を去る。"},
    takeda:{en:"Given the 5th unit and the instructorship in military science — a post the coming Western drill would soon make obsolete.", ja:"五番組長と軍学師範に。まもなく始まる洋式調練で、その職は時代遅れになっていく。"},
    inoue:{en:"Given the 6th unit.", ja:"六番組長に。"},
    tani:{en:"Given the 7th unit and the instructorship in the spear.", ja:"七番組長と槍術師範に。"},
    todo:{en:"Given the 8th unit.", ja:"八番組長に。"},
    suzuki:{en:"Given the 9th unit.", ja:"九番組長に。"},
    harada:{en:"Given the 10th unit.", ja:"十番組長に。"},
    ito:{en:"Staff officer (sanbō) above the unit captains, and instructor in letters.", ja:"組長より上位の参謀、兼文学師範。"},
    yamazaki:{en:"Inspector; when Matsumoto Ryōjun came to reform the barracks' hygiene, Yamazaki is said to have learned field medicine from him.", ja:"監察。松本良順が屯所の衛生改善に訪れた際、良順から医術を学んだと伝わる。"},
    shimada:{en:"A sergeant (gochō) leading a squad within one of the units.", ja:"伍長として、組の中の一隊を率いた。"},
    hijikata:{en:"Managed the move and the expanded corps' organization into the unit system.", ja:"移転と、拡大した隊の組織再編（組長制）を差配した。"}
  }},

 {id:"matsubaradeath", sort:"1865-10-20", year:"1865", coords:[34.9922,135.7515], zoom:15,
  date:{en:"Autumn 1865", ja:"1865年秋（慶応元年）"},
  loc:{en:"Kyoto — the corps at Nishi Honganji", ja:"京都（西本願寺屯所の時代）"},
  title:{en:"Death of Matsubara Chūji", ja:"松原忠司の死"},
  desc:{en:"Matsubara Chūji, captain of the 4th unit and the corps' jūjutsu instructor — the big, shaven-headed man the corps called its \"modern Benkei\" — dies within months of receiving his unit. The corps' records note the death and almost nothing else; some accounts say he had fallen from favour shortly before. He is the first of the new unit captains to die, and the silence around how he died says a good deal about the corps in its Honganji years.",
        ja:"四番組長で柔術師範、隊に「今弁慶」と呼ばれた頭を剃った大男・松原忠司が、組を任されてわずか数か月で世を去る。隊の記録はその死を記すだけで、ほかにはほとんど何も語らない。直前に不興を買っていたとする記録もある。新しい組長たちのなかで最初の死者であり、その死をめぐる沈黙は、西本願寺時代の隊について多くを物語っている。"},
  people:["matsubara"],
  roles:{
    matsubara:{en:"Died, in circumstances the records do not explain.", ja:"記録が事情を語らないまま世を去った。"}
  },
  legend:{en:"The famous story that he died in a double suicide with the widow of a man he had killed is Shimozawa Kan's 20th-century invention. Where he died is not recorded; the map point marks the corps' headquarters at the time.",
          ja:"殺した男の未亡人と心中したという有名な話は、20世紀の子母澤寛の創作である。どこで死んだかは記録されておらず、地図の位置は当時の屯所を示している。"}},

 {id:"hiroshima", sort:"1865-12-20", year:"1865", coords:[34.3857,132.4565], zoom:13,
  date:{en:"Winter 1865 – early 1866", ja:"1865年冬〜1866年初め（慶応元年〜2年）"},
  loc:{en:"Hiroshima", ja:"広島"},
  title:{en:"Kondō's missions to Hiroshima", ja:"近藤の広島出張"},
  desc:{en:"Its first expedition against Chōshū having ended without a battle, the shogunate is preparing a second, and first sends officials to Hiroshima, on Chōshū's border, to question the domain's envoys. Kondō goes with them, attached to the suite of the inspector-general Nagai Naomune, and takes Itō Kashitarō and Ogata Shuntarō, his most learned officers. He hopes to cross into Chōshū itself to see the enemy at first hand. Chōshū's representatives refuse him entry, and the talks go nowhere. Early in 1866 he makes a second journey with the shogunate's next delegation, with no better result.\n\nThe missions show how far the corps' commander has come: a swordsman from Tama now treated as a political agent. They also put Itō in the same rooms as Chōshū's men. That summer the shogunate's second expedition against Chōshū ends in defeat, and the balance of power in the country turns.",
        ja:"第一次長州征討を戦わずに終えた幕府は再征を準備し、まず長州との境に近い広島へ役人を送って長州藩の使者を詰問させた。近藤は大目付・永井尚志の一行に加わり、隊きっての学識ある幹部、伊東甲子太郎と尾形俊太郎を連れて行った。近藤は長州領内に入って敵を自分の目で見ることを望んだが、長州側に拒まれ、交渉は何の進展もなかった。1866年初め、幕府の次の使節にも同行したが、結果は変わらなかった。\n\nこの出張は、隊の局長がどこまで上り詰めたかを示している。多摩の剣客が、いまや政治の使者として扱われていた。同時に、伊東が長州の人間と同じ部屋に座ることにもなった。この年の夏、幕府の第二次長州征討は敗北に終わり、国の力関係は向きを変える。"},
  people:["kondo","ito","ogata"],
  roles:{
    kondo:{en:"Joined the inspector's suite and tried, without success, to be allowed into Chōshū.", ja:"大目付の一行に加わり、長州領内に入ろうとしたが果たせなかった。"},
    ito:{en:"Went as one of Kondō's two learned officers — and met Chōshū's men across the table.", ja:"近藤の学識ある幹部の一人として同行し、長州の人々と向き合った。"},
    ogata:{en:"Went with Kondō on both journeys, a sign of how far Kondō trusted him.", ja:"二度とも近藤に同行した。近藤の信頼の厚さを示す。"}
  },
  legend:{en:"Who went on which of the two journeys varies between accounts; Itō's and Ogata's presence is the best attested.",
          ja:"二度の出張それぞれに誰が同行したかは記録によって異なる。伊東と尾形の同行がもっともよく裏付けられている。"}},

 {id:"tanideath", sort:"1866-05-15", year:"1866", coords:[35.0037,135.7786], zoom:16,
  date:{en:"Spring 1866", ja:"1866年春（慶応2年4月）"},
  loc:{en:"Stone steps of the Yasaka shrine, Gion", ja:"祇園・八坂神社石段下"},
  title:{en:"Death of Tani Sanjūrō", ja:"谷三十郎の死"},
  desc:{en:"Tani Sanjūrō, captain of the 7th unit and the corps' instructor in the spear, dies suddenly near the stone steps at the foot of the Yasaka shrine in Gion, one of the busiest corners of the city. The corps' records do not say how. His family's place close to Kondō — his youngest brother had been adopted as Kondō's heir — does not survive him, and the adoption is later dissolved.",
        ja:"七番組長で槍術師範の谷三十郎が、京で最もにぎわう一角、祇園の八坂神社の石段下で急死する。隊の記録はその事情を語らない。末弟が近藤の養子に迎えられたことで近藤のそばに占めていた一家の地位も、彼の死とともに失われ、養子縁組はのちに解かれた。"},
  people:["tani"],
  roles:{
    tani:{en:"Died suddenly here; the cause is not recorded.", ja:"ここで急死した。死因は記録されていない。"}
  },
  legend:{en:"Popular accounts say he was assassinated by his own comrades and often name Saitō Hajime; no contemporary record supports it, and illness is just as possible.",
          ja:"仲間に暗殺されたとする俗説があり、しばしば斎藤一の名が挙がるが、同時代の記録の裏付けはなく、病死の可能性も同じくらいある。"}},

 {id:"sanjo", sort:"1866-10-20", year:"1866", coords:[35.0091,135.7718], zoom:15,
  date:{en:"October 1866", ja:"1866年10月（慶応2年9月）"},
  loc:{en:"Sanjō Ōhashi bridge, Kyoto", ja:"京都・三条大橋"},
  title:{en:"The Sanjō notice-board incident", ja:"三条制札事件"},
  desc:{en:"At the west end of the Sanjō bridge, where the Tōkaidō enters Kyoto, the shogunate posts a notice board naming Chōshū an enemy of the court. Someone keeps tearing it down and throwing it in the river. The corps is ordered to guard it. Over several nights some thirty men lie in wait in three squads, two of their own disguised as beggars by the bridge to watch.\n\nAfter midnight a party of about eight samurai of the Tosa domain arrives and pulls the board down. The squads close in. In the fighting in the dark streets several of the Tosa men are cut down or taken and the rest escape. Harada Sanosuke's squad is in the thick of it, and the corps is rewarded by Aizu. The incident is small, but it shows which way the wind is blowing: a domain that had stood aside, Tosa, now has young men ready to fight the shogunate's police in the open.",
        ja:"東海道が京に入る三条大橋の西詰に、幕府は長州を朝敵とする制札を立てた。ところが何者かが繰り返しこれを引き抜き、川へ投げ捨てる。新選組に警備が命じられた。三十数名が三手に分かれて幾晩も待ち伏せ、うち二人は乞食に変装して橋のたもとで見張った。\n\n深夜、土佐藩士約八名が現れて制札を引き倒した。待ち伏せの隊が取り囲み、暗い町なかでの斬り合いで土佐藩士の数名が斬られ、あるいは捕らえられ、残りは逃げ延びた。原田左之助の一隊は乱戦の中心にいて、隊は会津藩から褒賞を受けた。小さな事件だが、風向きを示している。それまで中立を保っていた土佐藩に、幕府の治安部隊と公然と斬り合う若者たちが現れていたのである。"},
  people:["harada"],
  roles:{
    harada:{en:"Led one of the squads that sprang the ambush, and was in the thick of the fighting.", ja:"待ち伏せの一隊を率い、乱戦の中心で戦った。"}
  },
  legend:{en:"The number of attackers, how many were killed or captured, and the exact placing of the squads differ between accounts.",
          ja:"襲撃者の人数、討ち取り・捕縛の数、各隊の配置は、記録によって異なる。"}},

 {id:"goryo", sort:"1867-04-24", year:"1867", coords:[35.0008,135.7813], zoom:15,
  date:{en:"April 1867", ja:"1867年4月（慶応3年3月）"},
  loc:{en:"Gesshin-in, Kōdai-ji, Higashiyama, Kyoto", ja:"京都東山・高台寺月真院"},
  title:{en:"The split: Itō founds the Goryō Eji", ja:"分離——伊東、御陵衛士を結成"},
  desc:{en:"Emperor Kōmei, the shogunate's most important friend at court, has died suddenly at the start of the year. Itō Kashitarō, who has never shared Kondō's loyalty to the shogun, sees his moment. Leaving the corps is desertion, and desertion means death, so Itō finds a door the code does not cover: with the backing of a court-connected temple he has himself and his followers appointed guards of the late emperor's tomb, the Goryō Eji. Kondō and Hijikata, unable to forbid an imperial appointment, let them go.\n\nMore than a dozen men leave, among them Tōdō Heisuke, Suzuki Mikisaburō, Shinohara Taishinosuke, Hattori Takeo — and Saitō Hajime. That summer they settle in Gesshin-in, a sub-temple of Kōdai-ji in the hills of Higashiyama, and are known in the city as the Kōdai-ji party. The two sides agree that from now on no one will move between them. Before the year is out, Itō and three of his men will be dead.",
        ja:"年の初め、朝廷における幕府の最大の味方であった孝明天皇が急逝した。もともと近藤の将軍への忠誠を共有していなかった伊東甲子太郎は、好機と見た。脱隊は脱走であり、脱走は死を意味する。そこで伊東は、法度の及ばない出口を見つける。朝廷とつながりのある寺院の後ろ盾を得て、自分と同志を先帝の御陵を守る御陵衛士に任じさせたのである。朝廷の任命を禁じることのできない近藤と土方は、彼らを送り出した。\n\n去ったのは十数名。藤堂平助、鈴木三樹三郎、篠原泰之進、服部武雄——そして斎藤一がいた。夏には東山の高台寺の塔頭・月真院に移り、町では「高台寺党」と呼ばれた。両者は、以後互いのあいだで人の移籍をしないと取り決めた。その年が終わる前に、伊東と三人の同志が命を落とすことになる。"},
  people:["ito","todo","suzuki","shinohara","hattori","saito","kondo","hijikata"],
  roles:{
    ito:{en:"Engineered an honourable exit from a corps that allowed none, and led his followers out.", ja:"脱退を許さない隊から、名誉ある出口を作り出し、同志を率いて去った。"},
    todo:{en:"Left with Itō, the man he had recruited.", ja:"自らが隊に誘った伊東とともに去った。"},
    saito:{en:"Left with Itō — as the corps' spy, it later emerged.", ja:"伊東とともに去った。のちに、隊の間者だったことがわかる。"},
    suzuki:{en:"Left with his brother.", ja:"兄とともに去った。"},
    shinohara:{en:"Left with Itō as his chief lieutenant.", ja:"伊東の第一の腹心として去った。"},
    hattori:{en:"Left with Itō's party.", ja:"伊東の一派とともに去った。"},
    kondo:{en:"Let Itō go rather than defy an imperial appointment — and kept a man inside his camp.", ja:"朝廷の任命に逆らうよりは伊東を送り出し、その陣営に自分の手の者を残した。"},
    hijikata:{en:"Agreed the terms of the split; the corps' code was not set aside, only postponed.", ja:"分離の条件を呑んだ。法度が棚上げされたのではなく、先送りされただけだった。"}
  },
  legend:{en:"Whether Saitō went over as a planted spy from the start, or changed sides later, cannot be settled from the record; the corps' own side always presented him as its agent.",
          ja:"斎藤が最初から送り込まれた間者だったのか、のちに寝返ったのかは、記録からは決められない。隊の側は一貫して彼を自分たちの密偵として語っている。"}},

 {id:"hatamoto", sort:"1867-06-25", year:"1867", coords:[34.9899,135.7480], zoom:14,
  date:{en:"June 1867", ja:"1867年6月（慶応3年）"},
  loc:{en:"Fudōdō village, Kyoto", ja:"京都・不動堂村"},
  title:{en:"Direct retainers of the shogun", ja:"幕臣に取り立てられる"},
  desc:{en:"The corps is elevated en masse into the shogun's direct service — Kondō with the standing of a yoriai-class retainer, Hijikata as a fukugoshin — and moves into a lavish new compound at Fudōdō, complete with a bathhouse said to fit thirty men, paid for in large part by Nishi Honganji's relief at their departure. For the Tama farmers it is the summit of a lifetime's climb: they are, at last and officially, samurai. The irony is total. The Tokugawa order that just ennobled them has months to live, and the rank will soon mark them not as gentlemen but as rebels.\n\nNot everyone wanted the honour. A small group of members, who had hoped to follow Itō Kashitarō out of the corps rather than become the shogun's men, went to the Aizu residence to plead to be released. Four of them died there — by their own hands, the corps reported; the circumstances have been questioned ever since.",
        ja:"隊士一同、幕府直参に取り立てられる——近藤は旗本寄合席並、土方は幕府復御新（見廻組並格）の待遇。屯所は不動堂村に新築された豪壮なもので、三十人が一度に入れたという風呂まで備え、費用の多くは「厄介払い」を喜ぶ西本願寺が負担した。多摩の農民たちにとって、これは生涯をかけた階段の頂上だった。ついに、公式に、武士になったのである。皮肉は完璧だった。彼らを士分に上げた徳川の世は余命数ヶ月であり、この身分はまもなく、栄誉ではなく「賊」の印となる。\n\nその栄誉を望まない者もいた。幕臣となるよりも伊東甲子太郎のあとを追って隊を離れたいと願った数名の隊士は、会津藩邸に出向いて離隊を嘆願した。そのうち四人がそこで命を落とす。隊は自刃と届け出たが、その事情にはその後ずっと疑問が呈されている。"},
  people:["kondo","hijikata","okita","nagakura","harada","inoue","ogata"],
  roles:{
    ogata:{en:"Made a shogunal retainer with the other senior officers.", ja:"他の幹部とともに幕臣に取り立てられた。"},
    inoue:{en:"Made a direct retainer of the shogun with the other senior officers.", ja:"他の幹部とともに幕臣に取り立てられた。"},
    kondo:{en:"Attains the dream of his life — samurai rank — months before it becomes a death sentence.", ja:"生涯の悲願・士分を得る。それが死罪状に変わる数ヶ月前に。"},
    hijikata:{en:"The medicine peddler of Ishida village is now a retainer of the shogun.", ja:"石田村の薬売りが、将軍直参となった。"}
  }},

 {id:"takedadeath", sort:"1867-07-23", year:"1867", coords:[34.9898,135.7685], zoom:14,
  date:{en:"Summer 1867", ja:"1867年夏（慶応3年）"},
  loc:{en:"Bank of the Kamo river, Kyoto", ja:"京都・鴨川べり"},
  title:{en:"Takeda Kanryūsai killed", ja:"武田観柳斎、斬られる"},
  desc:{en:"Takeda Kanryūsai, once captain of the 5th unit and the corps' instructor in military science, has left the Shinsengumi; his classical learning made obsolete by Western drill, he is suspected of seeking new patrons among the corps' enemies. In the summer of 1867 he is cut down on the bank of the Kamo river, near the Zenitori bridge, by men of the corps sent after him. For an officer who left and was suspected of dealing with the other side, the corps' code allowed only one outcome.",
        ja:"かつての五番組長で軍学師範の武田観柳斎は、新選組を離れていた。その古い学問は洋式調練によって時代遅れとなり、隊の敵方に新しい後ろ盾を求めていると疑われていた。1867年夏、彼は鴨川べりの銭取橋のあたりで、追手として送られた隊士たちに斬られる。隊を離れ、敵方と通じたと疑われた幹部に、法度が許す結末は一つしかなかった。"},
  people:["takeda"],
  roles:{
    takeda:{en:"Killed by men of the corps after leaving it.", ja:"隊を離れたのち、隊士たちに斬られた。"}
  },
  legend:{en:"The date (some accounts put it in 1866), the exact place and the killers are all uncertain; popular accounts name Saitō Hajime. The map point is approximate.",
          ja:"日付（1866年とする記録もある）、正確な場所、下手人はいずれも確かではない。俗には斎藤一の名が挙がる。地図の位置はおおよそのものである。"}},

 {id:"aburanokoji", sort:"1867-12-13", year:"1867", coords:[34.9931,135.7546], zoom:15,
  date:{en:"December 13, 1867", ja:"1867年12月13日（慶応3年11月18日）"},
  loc:{en:"Aburanokōji street, Kyoto", ja:"京都・油小路"},
  title:{en:"The Aburanokōji Incident", ja:"油小路事件"},
  desc:{en:"In 1867 the corps' brilliant, ambitious military adviser Itō Kashitarō had split off with over a dozen members — Saitō among them — to form the Goryō Eji, guards of the imperial tomb, drifting toward the loyalist camp. Saitō returns to the corps (almost certainly having been its informant all along) with word that Itō's group means to assassinate Kondō. The corps moves first: Itō is invited to a banquet, plied with drink, and cut down on his way home at Aburanokōji. His corpse is then left in the winter street as bait. When seven of his comrades come for the body, some forty Shinsengumi are waiting. Three of the Goryō Eji die in the ambush; the survivors' hatred will follow the corps to the end — one of them fires the shot that wounds Kondō weeks later, and another will identify him for the executioner at Itabashi.",
        ja:"1867年、隊の知恵袋だった野心家の参謀・伊東甲子太郎が、斎藤一を含む十数名を連れて分離し、孝明天皇の御陵を守る「御陵衛士」を結成、倒幕派へ接近していた。その斎藤が帰隊する——最初から間者だった可能性が極めて高い——伊東派が近藤暗殺を企てているとの情報とともに。隊は先手を打った。伊東を宴席に招いて酔わせ、帰路の油小路で斬殺。遺体をそのまま冬の路上に放置し、罠とした。同志の遺体を引き取りに来た御陵衛士7名を、約40名の新選組が待ち伏せる。衛士側は3名が討死。生き残った者たちの憎悪は最後まで隊を追う——数週間後に近藤を狙撃するのも、板橋で近藤の正体を刑吏に告げるのも、この夜の生存者である。"},
  people:["saito","nagakura","harada","hijikata","todo","suzuki","ito","hattori","shinohara","kondo"],
  roles:{
    kondo:{en:"Invited Itō to drink at his mistress's house on the night he was killed.", ja:"伊東が殺された夜、彼を妾宅での酒席に招いた。"},
    ito:{en:"Lured to a drinking party at Kondō's mistress's house and cut down near Aburanokōji on the way home; his body was left in the street as bait.", ja:"近藤の妾宅での酒宴に招かれ、帰途に油小路付近で斬られた。遺体はおとりとして路上に放置された。"},
    hattori:{en:"Stood his ground with a sword in each hand as the ambush closed; killed, his body covered in wounds.", ja:"待ち伏せのなか両手に刀を執って踏みとどまり、全身に傷を負って斃れた。"},
    shinohara:{en:"Fought his way out of the ambush and escaped to the Satsuma residence.", ja:"待ち伏せを斬り抜け、薩摩藩邸に逃れた。"},
    todo:{en:"Came with the Goryō Eji to recover Itō's body and was killed in the fight, aged twenty-three.", ja:"伊東の遺体を引き取りに来た御陵衛士の一人として斬り合い、二十三歳で死んだ。"},
    suzuki:{en:"Itō's younger brother; among the Goryō Eji who escaped the ambush, taking refuge in the Satsuma residence.", ja:"伊東の実弟。待ち伏せを逃れた衛士の一人で、薩摩藩邸に逃げ込んだ。"},
    saito:{en:"Returned from inside the Goryō Eji with the intelligence that set the ambush in motion — the corps' quietest and most consequential act of espionage.", ja:"御陵衛士の内部から帰隊し、襲撃の引き金となる情報をもたらした。新選組史上、最も静かで最も重大な諜報活動である。"},
    nagakura:{en:"Fought in the street battle against the Goryō Eji come to claim the body.", ja:"遺体を引き取りに来た御陵衛士との路上の戦闘に加わった。"},
    harada:{en:"Fought in the ambush; his spear is prominent in most accounts of the night.", ja:"待ち伏せの戦闘に参加。この夜の記録では彼の槍働きが目立つ。"},
    hijikata:{en:"The operation — banquet, killing, corpse-bait, ambush — bears his planning signature.", ja:"宴席、暗殺、遺体の罠、待ち伏せ——作戦全体に彼の設計の刻印がある。"}
  }},

 {id:"tenmaya", sort:"1868-01-01", year:"1868", coords:[34.9905,135.7548], zoom:15,
  date:{en:"January 1, 1868", ja:"1868年1月1日（慶応3年12月7日）"},
  loc:{en:"Tenmaya inn, Aburanokōji, Kyoto", ja:"京都油小路・天満屋"},
  title:{en:"The Tenmaya incident", ja:"天満屋事件"},
  desc:{en:"Sakamoto Ryōma has been assassinated in Kyoto, and his comrades in Tosa's Kaientai and Rikuentai are hunting for the men behind it. Their suspicion falls on Miura Kyūtarō, an official of the Kii domain, whose ship had collided with and sunk a Kaientai vessel earlier that year in a dispute Ryōma had won. The corps is asked to guard him, and a detail including Saitō Hajime is posted with him at the Tenmaya inn.\n\nOn the night of the attack the guards are drinking with Miura upstairs when some sixteen men burst in. In the fight in the cramped rooms Miura is wounded but survives; the corps has men killed and wounded, and the attackers lose men too before they withdraw. Saitō's appearance here, weeks after Aburanokōji, places him back inside the corps and at its sharp end — and the night is a reminder of how many enemies the Shinsengumi now has in Kyoto.",
        ja:"京で坂本龍馬が暗殺され、土佐の海援隊・陸援隊の同志たちは黒幕を探していた。疑いをかけられたのは紀州藩士・三浦休太郎である。その年の初め、紀州藩の船が海援隊の船に衝突して沈めており、その賠償交渉で龍馬に押し切られた経緯があった。新選組は三浦の護衛を頼まれ、斎藤一らが天満屋に詰めた。\n\n襲撃の夜、護衛たちは二階で三浦と酒を飲んでいたところへ、十数名が斬り込んだ。狭い座敷での斬り合いで三浦は手傷を負いながらも生き延びた。隊側に死傷者が出て、襲撃側にも死傷者を出して引き揚げた。油小路から数週間後のこの夜、斎藤は隊に戻り、その最前線に立っている。そしてこの夜は、新選組がいまや京にどれほど多くの敵を抱えているかを思い知らせるものでもあった。"},
  people:["saito"],
  roles:{
    saito:{en:"Commanded the guard detail at the inn and fought off the attackers.", ja:"天満屋の護衛隊を指揮し、襲撃者を撃退した。"}
  },
  legend:{en:"The numbers on each side and who led the corps' detail differ between accounts.",
          ja:"双方の人数や、隊の護衛を誰が率いていたかは、記録によって異なる。"}},

 {id:"sumizome", sort:"1868-01-12", year:"1868", coords:[34.9479,135.7682], zoom:15,
  date:{en:"January 12, 1868", ja:"1868年1月12日（慶応3年12月18日）"},
  loc:{en:"Sumizome, Fushimi", ja:"伏見・墨染"},
  title:{en:"Kondō shot at Sumizome", ja:"近藤、墨染で狙撃される"},
  desc:{en:"The shogun has returned his powers to the court and the shogunate's forces are gathering at Fushimi and Osaka. The corps has moved into the Fushimi magistrate's office. Riding back from a council in Kyoto, Kondō passes through Sumizome on the road south — and a musket fires from a house by the road. The ball smashes into his right shoulder. His escort is attacked and men are killed, but Kondō keeps his seat and his horse carries him back to Fushimi.\n\nThe gunmen are survivors of the Goryō Eji, taking revenge for Aburanokōji. Kondō is sent down to Osaka for treatment by the shogunate's physician Matsumoto Ryōjun, with the sick Okita Sōji. The wound never fully heals, and he will not hold a sword properly again. When the war begins two weeks later, it is Hijikata who leads the Shinsengumi into it.",
        ja:"将軍は大政を奉還し、幕府方の兵は伏見と大坂に集まりつつあった。新選組は伏見奉行所に入っていた。京での軍議から馬で戻る途中、墨染に差しかかった近藤を、道沿いの家から銃弾が襲う。弾は右肩を砕いた。護衛は斬りかかられて死者を出したが、近藤は馬上にとどまり、馬は彼を伏見まで運んだ。\n\n撃ったのは御陵衛士の生き残りで、油小路の仇討ちだった。近藤は幕府の医師・松本良順の治療を受けるため、病の沖田総司とともに大坂へ送られる。傷は完全には癒えず、二度と剣を思うように握ることはなかった。二週間後に戦が始まったとき、新選組を率いて戦場に出たのは土方である。"},
  people:["kondo","shinohara","okita","hijikata"],
  roles:{
    kondo:{en:"Shot through the right shoulder from ambush; stayed in the saddle, but never again fought with the sword.", ja:"待ち伏せで右肩を撃ち抜かれた。落馬はしなかったが、以後剣を取って戦うことはなかった。"},
    shinohara:{en:"Named among the Goryō Eji survivors who laid the ambush.", ja:"待ち伏せを仕掛けた御陵衛士の生き残りの一人に名が挙がる。"},
    okita:{en:"Too ill to fight, sent to Osaka with Kondō.", ja:"病で戦えず、近藤とともに大坂へ送られた。"},
    hijikata:{en:"Took command of the corps at Fushimi in Kondō's place.", ja:"近藤に代わって伏見で隊の指揮を執った。"}
  },
  legend:{en:"Who fired the shot is disputed: the Goryō Eji survivors' own accounts name different men, and Shinohara's share is not certain.",
          ja:"誰が撃ったかには異説がある。御陵衛士の生き残りたち自身の証言でも名前が異なり、篠原の役割も確かではない。"}},

 {id:"tobafushimi", sort:"1868-01-27", year:"1868", coords:[34.9291,135.7570], zoom:12,
  date:{en:"January 27–31, 1868", ja:"1868年1月27日（慶応4年1月3日）"},
  loc:{en:"Fushimi, south of Kyoto", ja:"京都南郊・伏見"},
  title:{en:"Battle of Toba–Fushimi", ja:"鳥羽・伏見の戦い"},
  desc:{en:"The Boshin War opens. A shogunal army of some 15,000 marches on Kyoto to \"clear the emperor's side of traitors\" — meaning Satsuma — and collides with 5,000 Satsuma-Chōshū troops at Toba and Fushimi. Numbers prove worthless against drilled riflemen and artillery. The Shinsengumi fights in the burning streets around the Fushimi magistrate's office, where swords against Satsuma's guns achieve little but casualties. On the third day the imperial brocade banner is raised over the Satsuma lines: the shogunal army is now, formally, an army of traitors, and its commanders' will collapses. The shogun slips away to Edo by warship. The corps retreats with the army and sails east — Hijikata, by later accounts, concluding that the age of the sword ended in those streets.\n\nAt Fushimi the corps holds the magistrate's office until Satsuma guns on the higher ground above it set it on fire. In the retreat south, the Yodo domain — whose own lord is one of the shogun's senior councillors — shuts its castle gates against the beaten army, and at Yamazaki the Tsu domain's batteries, until then on the shogun's side, open fire on it from across the river. It is along this road, at Senryōmatsu by Yodo, that Inoue Genzaburō falls.",
        ja:"戊辰戦争、開戦。「君側の奸」——すなわち薩摩——を除くべく京へ進んだ幕府軍約1万5千は、鳥羽と伏見で薩長軍約5千と衝突する。訓練された銃兵と砲兵の前に、数の優位は無意味だった。新選組は伏見奉行所周辺の燃える市街で戦うが、薩摩の銃火に刀で挑んでも損害が積み上がるばかりである。三日目、薩摩の陣に錦の御旗が翻った。幕府軍は今や公式に「賊軍」であり、指揮官たちの戦意は崩壊する。将軍慶喜は軍艦で江戸へ脱出。隊も軍とともに退き、海路東へ下った——「もう刀の時代ではない」。土方がそう悟ったのは、この市街戦だったと後に伝えられる。\n\n伏見で隊は奉行所に拠ったが、高台に据えられた薩摩の砲が奉行所を炎上させた。南へ退却する敗軍に対し、藩主が幕府の老中であるはずの淀藩は城門を閉ざし、山崎では、それまで幕府方だった津藩の砲台が川向こうから撃ちかけてきた。井上源三郎が斃れたのは、この道筋、淀の千両松である。"},
  people:["hijikata","inoue","saito","nagakura","harada","yamazaki","yoshimura","shimada"],
  roles:{
    shimada:{en:"Fought at Fushimi and in the retreat south.", ja:"伏見で戦い、南への退却にも加わった。"},
    yamazaki:{en:"Badly wounded in the retreat; died on the voyage to Edo or soon after.", ja:"退却中に深手を負い、江戸へ向かう航海中かその直後に没した。"},
    yoshimura:{en:"Fought in the battle and vanished from the record afterwards.", ja:"この戦いに加わり、その後記録から姿を消した。"},
    inoue:{en:"Shot and killed at Yodo-Senryōmatsu on January 29, the first of the Tama comrades to die in battle. His young nephew tried to carry his head home.", ja:"1月29日（慶応4年1月5日）、淀・千両松で銃弾に斃れる。多摩以来の同志で最初の戦死者。幼い甥が首を故郷へ運ぼうとした。"},
    hijikata:{en:"Commanded the corps in Kondō's absence, learning modern war the hardest way.", ja:"負傷した近藤に代わって隊を指揮。近代戦を最も苛烈な形で学んだ。"},
    saito:{en:"Fought in the street fighting around the Fushimi magistrate's office.", ja:"伏見奉行所周辺の市街戦を戦った。"},
    nagakura:{en:"Fought at Fushimi; one of the corps' steadiest hands in the rout.", ja:"伏見で奮戦。潰走の中でも最も崩れなかった一人。"},
    harada:{en:"Fought at Fushimi with the corps' forward elements.", ja:"隊の前線部隊として伏見を戦った。"}
  }},

 {id:"senryomatsu", sort:"1868-01-29", year:"1868", coords:[34.9223,135.7465], zoom:14,
  date:{en:"January 29, 1868", ja:"1868年1月29日（慶応4年1月5日）"},
  loc:{en:"Senryōmatsu, on the Yodo river south of Fushimi", ja:"伏見の南、淀川沿いの千両松"},
  title:{en:"Inoue Genzaburō falls at Senryōmatsu", ja:"井上源三郎、千両松に斃れる"},
  desc:{en:"On the third day of the Boshin War the shogunal army, driven out of Fushimi, tries to make a stand along the embankment of the Yodo river at Senryōmatsu, a stretch of pines on the road south. The Shinsengumi is in the line. Government riflemen push along the embankment and through the reed beds, and the line breaks.\n\nInoue Genzaburō, the oldest of the Shieikan men, is shot and killed. His nephew Inoue Taisuke, a boy of about twelve serving with the corps, tries to carry his uncle's head and sword back for the family, finds the weight too much in the rout, and buries them by the roadside near a temple. The place has never been found. Of the men who had marched out of Edo together, Inoue is the first to die in battle.",
        ja:"戊辰戦争三日目、伏見を追われた幕府軍は、南へ向かう道沿いの松並木、千両松の淀川堤で踏みとどまろうとした。新選組もその戦列にいた。新政府軍の銃兵は堤と葦原を伝って押し寄せ、戦列は崩れた。\n\n試衛館の仲間のうち最年長の井上源三郎が、銃弾に斃れる。隊にいた十二歳ほどの甥・井上泰助は、家族のもとへ持ち帰ろうと叔父の首と刀を抱えたが、敗走のなかでその重さに耐えられず、道ばたの寺の近くに埋めた。その場所はいまも見つかっていない。ともに江戸を発った仲間のうち、戦場で斃れた最初の一人だった。"},
  people:["inoue","hijikata"],
  roles:{
    inoue:{en:"Shot and killed in the fighting on the embankment, aged about forty.", ja:"堤の戦いで撃たれて戦死した。四十歳前後だった。"},
    hijikata:{en:"Commanding the corps in the retreat.", ja:"退却する隊を指揮していた。"}
  },
  legend:{en:"The story of Taisuke and his uncle's head comes down through the Inoue family; its outline is consistent, but the temple and exact spot vary. The modern placename Senryōmatsu-chō lies a little north of the old battle line; the map point is approximate.",
          ja:"泰助と叔父の首の話は井上家に伝わるもので、大筋は一致しているが、寺や正確な場所には異同がある。現在の千両松町は当時の戦線よりやや北にあり、地図上の位置はおおよそのものである。"}},

 {id:"shinagawa", sort:"1868-02-08", year:"1868", coords:[35.6094,139.7443], zoom:15,
  date:{en:"February 1868", ja:"1868年2月（慶応4年1月）"},
  loc:{en:"Shinagawa, Edo", ja:"江戸・品川"},
  title:{en:"Back to Edo by sea", ja:"海路、江戸へ"},
  desc:{en:"After Toba–Fushimi the shogunal army falls back on Osaka castle — and then learns that the shogun has slipped away by night on a warship to Edo. The army breaks up. The Shinsengumi, its wounded and sick among them, is shipped east aboard the shogunate's vessels. Yamazaki Susumu, wounded in the retreat, dies on the voyage. The survivors land at Shinagawa, the post town at the southern gate of Edo, and are quartered at the Kamaya inn.\n\nOf the men who had left Edo five years before, Inoue Genzaburō is dead, Kondō has a shattered shoulder and Okita is dying of tuberculosis; they are taken into the care of Matsumoto Ryōjun. Hijikata soon changes into Western clothes and cuts his hair short. By one account he tells a visitor that from now on war belongs to the gun, and that swords and spears are of no further use.",
        ja:"鳥羽・伏見の後、幕府軍は大坂城に退いたが、将軍が夜陰にまぎれて軍艦で江戸へ去ったことを知る。軍は崩れた。新選組は負傷者・病人とともに幕府の船で東へ送られた。退却中に負傷した山崎烝は、航海の途中で息を引き取る。生き残った隊士たちは江戸の南の玄関口・品川宿に上陸し、旅籠の釜屋に入った。\n\n五年前に江戸を発った仲間のうち、井上源三郎は戦死し、近藤は肩を砕かれ、沖田は労咳で死の床にあった。二人は松本良順のもとに預けられる。土方はほどなく洋装に改め、髪を短く切った。ある記録によれば、訪ねてきた人に、これからの戦は鉄砲の世だ、刀や槍はもう役に立たない、と語ったという。"},
  people:["hijikata","kondo","okita","yamazaki","nagakura","harada","saito","shimada","ogata"],
  roles:{
    ogata:{en:"Returned with the survivors.", ja:"生き残りとともに江戸へ戻った。"},
    hijikata:{en:"Brought the corps home and began remaking himself — Western dress, short hair, and a new creed of firepower.", ja:"隊を連れ帰り、自らを作り変え始める。洋装、短髪、そして火力を重んじる新しい信条。"},
    kondo:{en:"Shipped east with his wounded shoulder and placed in Matsumoto Ryōjun's care.", ja:"肩の傷を抱えて東へ送られ、松本良順に預けられた。"},
    okita:{en:"Brought back to Edo gravely ill.", ja:"重い病のまま江戸へ戻った。"},
    yamazaki:{en:"Died of his wounds on the voyage — by the most common account, buried at sea.", ja:"航海の途中で傷がもとで没した。最も広く伝わる説では水葬に付された。"},
    nagakura:{en:"Returned with the survivors.", ja:"生き残りとともに江戸へ戻った。"},
    harada:{en:"Returned with the survivors.", ja:"生き残りとともに江戸へ戻った。"},
    saito:{en:"Returned with the survivors.", ja:"生き残りとともに江戸へ戻った。"},
    shimada:{en:"Returned with the survivors.", ja:"生き残りとともに江戸へ戻った。"}
  },
  legend:{en:"Which ships carried which men, the exact landing dates, and the place and manner of Yamazaki's death vary between accounts. Hijikata's remark about the gun comes from the recollection of the scholar Yoda Gakkai.",
          ja:"どの船に誰が乗ったか、上陸の正確な日付、山崎の死の場所と様子は、記録によって異なる。鉄砲についての土方の言葉は、漢学者・依田学海の記録に拠る。"}},

 {id:"koshu", sort:"1868-03-29", year:"1868", coords:[35.6636,138.7290], zoom:11,
  date:{en:"March 29, 1868", ja:"1868年3月29日（慶応4年3月6日）"},
  loc:{en:"Katsunuma, Kai province", ja:"甲斐国・勝沼"},
  title:{en:"Defeat at Kōshū-Katsunuma", ja:"甲州勝沼の敗戦"},
  desc:{en:"Back in Edo, the corps is renamed the Kōyō Chinbutai — \"Kai Pacification Force\" — and sent to secure Kōfu castle ahead of the advancing imperial army. The march is a small tragicomedy: triumphal send-offs and feasting in the Tama homeland (Kondō traveling, critics said, like a daimyō) cost precious days, and the imperial vanguard reaches Kōfu first. At Katsunuma, some 120 men with a few guns face roughly ten times their number with modern artillery; the line holds for a couple of hours and dissolves. The defeat breaks more than a battle line. In its aftermath, Kondō asks the survivors to continue as his retainers — and Nagakura and Harada, sworn comrades but no man's vassals, walk away for good.",
        ja:"江戸に戻った隊は「甲陽鎮撫隊」と改称され、新政府軍に先んじて甲府城を押さえるべく甲州街道を進む。この行軍は小さな悲喜劇だった。故郷・多摩での祝宴と歓送に貴重な数日を費やし（近藤の道中は「大名行列のようだ」と批判された）、新政府軍の先鋒に甲府入城を先んじられる。勝沼では、数門の砲を持つだけの約120名が、近代砲兵を備えた約十倍の敵と対峙。戦線は二時間ほどで崩壊した。この敗北が壊したのは戦線だけではない。敗戦後、近藤が生き残りに「家臣として」の随従を求めると、同志ではあっても家来ではない永倉と原田は、決別して去った。"},
  people:["kondo","hijikata","nagakura","harada","saito","shimada","okita"],
  roles:{
    saito:{en:"Fought at Katsunuma, then went ahead to Aizu with the wounded.", ja:"勝沼で戦い、のちに負傷者を連れて先に会津へ向かった。"},
    shimada:{en:"Fought at Katsunuma.", ja:"勝沼で戦った。"},
    okita:{en:"By tradition, set out with the column but was too ill to go on and was left behind on the way.", ja:"伝えによれば、隊とともに出発したが病のため道半ばで留まった。"},
    kondo:{en:"Commanded as \"Ōkubo Tsuyoshi\"; blamed by critics for the fatal delays on the march.", ja:"「大久保剛」の変名で指揮。進軍の致命的な遅延は彼の責とする批判が残る。"},
    hijikata:{en:"Left mid-campaign to seek reinforcements that never materialized.", ja:"戦闘前に援軍要請へ走るが、援軍は現れなかった。"},
    nagakura:{en:"Fought the rearguard, then refused vassalage and parted with Kondō forever.", ja:"殿軍を戦い、その後「家臣たれ」との求めを拒み、近藤と永遠に袂を分かった。"},
    harada:{en:"Fought at Katsunuma and left with Nagakura to form the Seiheitai.", ja:"勝沼を戦い、永倉と共に離隊、靖兵隊を結成する。"}
  }},

 {id:"kaikoji", sort:"1868-04-01", year:"1868", coords:[34.9810,135.7782], zoom:15,
  date:{en:"1868", ja:"1868年（慶応4年）"},
  loc:{en:"Kaikō-ji, Sennyū-ji, Higashiyama", ja:"東山・泉涌寺塔頭 戒光寺"},
  title:{en:"The Goryō Eji dead laid to rest", ja:"御陵衛士、戒光寺に眠る"},
  desc:{en:"After the new government takes Kyoto, the surviving Goryō Eji recover the bodies of Itō Kashitarō, Tōdō Heisuke, Hattori Takeo and Mōnai Arinosuke, killed at Aburanokōji, and rebury them at Kaikō-ji, a sub-temple of Sennyū-ji — the temple of the imperial tombs that the Goryō Eji had been appointed to guard. The men who had left the Shinsengumi to serve the emperor lie, in the end, beside the emperors.",
        ja:"新政府が京を押さえたのち、生き残った御陵衛士たちは、油小路で斃れた伊東甲子太郎、藤堂平助、服部武雄、毛内有之助の遺体を引き取り、泉涌寺の塔頭・戒光寺に改めて葬った。泉涌寺は、御陵衛士が守るよう任じられた歴代天皇の陵がある寺である。天皇に仕えるために新選組を去った男たちは、最後に、天皇たちのそばに眠ることになった。"},
  people:["ito","todo","hattori","suzuki","shinohara"],
  roles:{
    ito:{en:"Reburied here with his comrades.", ja:"同志たちとともにここに改葬された。"},
    todo:{en:"Reburied here beside Itō.", ja:"伊東の傍らに改葬された。"},
    hattori:{en:"Reburied here beside Itō.", ja:"伊東の傍らに改葬された。"},
    suzuki:{en:"Among the survivors who reburied the dead.", ja:"死者を改葬した生き残りの一人。"},
    shinohara:{en:"Among the survivors who reburied the dead.", ja:"死者を改葬した生き残りの一人。"}
  },
  legend:{en:"The exact date of the reburial varies between accounts.",
          ja:"改葬の正確な日付は記録によって異なる。"}},

 {id:"nagareyama", sort:"1868-04-25", year:"1868", coords:[35.8563,139.9029], zoom:11,
  date:{en:"April 1868", ja:"1868年4月（慶応4年）"},
  loc:{en:"Nagareyama, Shimōsa province", ja:"下総国・流山"},
  title:{en:"Kondō surrenders at Nagareyama", ja:"近藤、流山で投降"},
  desc:{en:"Rebuilding with fresh recruits at the river town of Nagareyama, the corps is surprised and surrounded by imperial forces. Battle means annihilation. Kondō — still under his alias — walks into the enemy camp to negotiate, presenting himself as a mere pacification officer, reportedly to buy his men's escape. It nearly works — until he is recognised at the enemy's headquarters at Itabashi. Hijikata races to Edo and moves every contact he has, including an appeal through the old shogunal leadership, to save him. He and Kondō had said goodbye at Nagareyama as if it were routine. Both, the accounts suggest, knew better. The two never saw each other again.",
        ja:"流山で新兵を集めて再建中の隊は、新政府軍に急襲され包囲される。戦えば全滅。近藤は——変名のまま——ただの鎮撫隊指揮官を装い、隊士たちを逃がすためか、単身敵陣に出頭して交渉した。もう少しで通るところだった——板橋の新政府軍本営で正体を見破られるまでは。土方は江戸へ疾駆し、旧幕府首脳への嘆願を含むあらゆる伝手を動かして助命に奔走した。流山での二人の別れは、何気ない日常のようだったと伝わる。おそらく、二人とも分かっていた。二人が再び会うことはなかった。"},
  people:["kondo","hijikata","soma"],
  roles:{
    soma:{en:"One of the few who went with Kondō to the enemy camp when he gave himself up; detained for a time.", ja:"近藤の出頭に敵陣まで同行したわずかな一人。しばらく拘束された。"},
    kondo:{en:"Chose surrender over a hopeless fight — the last command decision of his life, made for his men.", ja:"勝ち目のない戦いより投降を選んだ。部下のための、生涯最後の指揮官としての決断だった。"},
    hijikata:{en:"Rode to Edo and spent everything — contacts, pride, pleading — trying to save his friend. It was not enough.", ja:"江戸へ走り、伝手も面子もかなぐり捨てて助命に奔走した。それでも足りなかった。"}
  }},

 {id:"konodai", sort:"1868-05-03", year:"1868", coords:[35.7484,139.9021], zoom:13,
  date:{en:"May 1868", ja:"1868年5月（慶応4年4月）"},
  loc:{en:"Kōnodai, Shimōsa province", ja:"下総国・国府台"},
  title:{en:"Hijikata joins Ōtori's army at Kōnodai", ja:"土方、国府台で大鳥軍に合流"},
  desc:{en:"Edo castle has been surrendered to the new government, and thousands of shogunal soldiers who refuse to accept it slip out of the city. They gather at Kōnodai, a hill across the Edo river where the shogunate had drilled troops, and organise themselves into an army under Ōtori Keisuke, a Western-trained officer who had commanded the shogunate's modern infantry.\n\nHijikata arrives days after parting from Kondō at Nagareyama, bringing a few Shinsengumi men with him. Ōtori's army has drilled riflemen and French-style officers but few experienced field commanders, and Hijikata is put in charge of its vanguard. It is the beginning of his second career: no longer the police officer of Kyoto, but a commander of modern troops in open war.",
        ja:"江戸城は新政府に明け渡され、これを認めない数千の幕府兵が江戸を抜け出した。彼らは、江戸川を渡った先の、幕府が調練に用いていた台地・国府台に集まり、幕府の洋式歩兵を率いた洋学者の士官・大鳥圭介のもとで軍に編成された。\n\n流山で近藤と別れて数日後、土方はわずかな隊士を連れてここに加わる。大鳥の軍には洋式の調練を受けた銃兵とフランス式の士官はいても、実戦経験のある指揮官は少なく、土方は先鋒の指揮を任された。第二の経歴の始まりである。もはや京の治安部隊の幹部ではなく、野戦で近代的な部隊を率いる指揮官となったのである。"},
  people:["hijikata"],
  roles:{
    hijikata:{en:"Joined Ōtori's army and was given command of its vanguard.", ja:"大鳥軍に加わり、先鋒の指揮を任された。"}
  }},

 {id:"itabashi", sort:"1868-05-17", year:"1868", coords:[35.7456,139.7194], zoom:15,
  date:{en:"May 17, 1868", ja:"1868年5月17日（慶応4年4月25日）"},
  loc:{en:"Itabashi, north of Edo", ja:"江戸北郊・板橋"},
  title:{en:"Execution of Kondō Isami", ja:"近藤勇、板橋で処刑"},
  desc:{en:"After his surrender at Nagareyama, Kondō is taken to the headquarters of the new government's army at Itabashi, the first post town on the Nakasendō. He still calls himself Ōkubo Yamato. But among the officers is Kanō Michinosuke, a former member of the corps who had left with Itō's Goryō Eji, and Kanō knows his face. Kondō is identified, interrogated and held for weeks while the victors argue over his fate.\n\nSatsuma and Tosa men, who blame the corps for the deaths of their comrades — Sakamoto Ryōma among them, wrongly as it later turned out — want him dead. On May 17 he is beheaded on the execution ground at Itabashi as a common criminal, denied the samurai's right to seppuku. He is thirty-three. His head is sent to Kyoto and displayed on the bank of the Kamo river. A memorial to him and the corps' dead now stands near the spot, raised in the Meiji era with the help of Nagakura Shinpachi.",
        ja:"流山で投降した近藤は、中山道最初の宿場・板橋に置かれた新政府軍の本営へ送られる。名乗りはなお大久保大和だった。しかし本営には、伊東の御陵衛士として隊を離れた元隊士・加納道之助（鷲雄）がいて、近藤の顔を知っていた。正体は見破られ、取り調べを受け、勝者たちがその処遇をめぐって争うあいだ、数週間にわたって留め置かれた。\n\n仲間を隊に殺されたと考える薩摩と土佐の者たち——そのなかには坂本龍馬の死も含まれていたが、のちにそれは誤りとわかる——は死罪を求めた。5月17日、近藤は板橋の刑場で、武士の切腹も許されず罪人として斬首された。三十三歳（数え三十五歳）。首は京へ送られ、三条河原に晒された。いまその近くには、明治になって永倉新八らの尽力で建てられた、近藤と隊士たちの供養塔が立っている。"},
  people:["kondo","soma","nagakura"],
  roles:{
    kondo:{en:"Identified despite his alias, and beheaded as a criminal rather than allowed seppuku.", ja:"変名を見破られ、切腹を許されず罪人として斬首された。"},
    soma:{en:"Went with Kondō into captivity and was held for a time.", ja:"近藤に従って捕らわれの身となり、しばらく拘束された。"},
    nagakura:{en:"Years later, helped raise the memorial to Kondō and the corps' dead at Itabashi.", ja:"後年、板橋の近藤と隊士たちの供養塔建立に尽力した。"}
  },
  legend:{en:"Kondō's death poem, and accounts of his calm at the execution ground, come from later sources. Where his body lies is uncertain: besides Itabashi, a grave at Ryūgen-ji in Mitaka is said by family tradition to hold remains recovered by his relatives.",
          ja:"近藤の辞世や、刑場での落ち着いた態度についての話は後年の記録に拠る。遺体がどこに眠るかも確かではない。板橋のほか、三鷹の龍源寺の墓には、親族がひそかに持ち帰った遺体が葬られていると家に伝わる。"}},

 {id:"shirakawa", sort:"1868-06-20", year:"1868", coords:[37.1324,140.2137], zoom:13,
  date:{en:"June – July 1868", ja:"1868年6月〜7月（慶応4年閏4月〜6月）"},
  loc:{en:"Shirakawa, gateway to the north", ja:"奥州の玄関口・白河"},
  title:{en:"The corps at Shirakawa", ja:"白河口の戦い"},
  desc:{en:"Shirakawa, with its castle on the Ōshū highway, is the gate between the Kantō plain and the north. As the new government's army advances on Aizu, the northern domains and Aizu make their stand here, and the Shinsengumi — reduced to a few dozen men, with Hijikata recovering from his wound — fights under Saitō Hajime, now going by the name Yamaguchi Jirō.\n\nThe defenders hold the town at first and throw back an early assault. Then a smaller, better-armed government force takes the castle in a single day's fighting, and repeated attempts to retake it fail with heavy losses. The north's front door is open. Over the summer the government armies push on, and the corps falls back towards Aizu with them at its heels.",
        ja:"奥州街道に城を構える白河は、関東平野と奥州を隔てる門である。新政府軍が会津に迫るなか、奥羽諸藩と会津はここで迎え撃った。数十名にまで減った新選組は、傷の癒えない土方に代わり、山口次郎と名を変えた斎藤一の指揮で戦った。\n\n守備側は当初、町を保ち、最初の攻撃を退けた。しかしその後、より少数ながら装備にまさる新政府軍が一日の戦いで城を奪い、奪還の試みは大きな犠牲を出してことごとく失敗する。奥州の表門は開かれた。夏のあいだに新政府軍はさらに進み、隊は追われるように会津へ退いていった。"},
  people:["saito"],
  roles:{
    saito:{en:"Commanded the corps in the fighting, as Yamaguchi Jirō.", ja:"山口次郎の名で、隊を率いて戦った。"}
  }},

 {id:"okitadeath", sort:"1868-07-19", year:"1868", coords:[35.6800,139.7120], zoom:12,
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

 {id:"utsunomiya", sort:"1868-05-11", year:"1868", coords:[36.5551,139.8853], zoom:11,
  date:{en:"May 1868", ja:"1868年5月（慶応4年4月）"},
  loc:{en:"Utsunomiya Castle, Shimotsuke", ja:"下野国・宇都宮城"},
  title:{en:"Hijikata storms Utsunomiya castle", ja:"宇都宮城の戦い"},
  desc:{en:"Attached now to Ōtori Keisuke's old-shogunate column, Hijikata leads a vanguard against Utsunomiya castle and takes it by storm — the medicine peddler commanding professional soldiers, and well. The victory shows his new creed in action: firepower, discipline, momentum. A grim anecdote survives: when a soldier broke and ran, Hijikata cut him down on the spot to hold the line, then reportedly wept for him that night and paid for his memorial — the old corps' code, exported to a modern battlefield. Days later, in the fighting when imperial forces retake the castle, Hijikata is shot in the foot and carried north to Aizu to recover.",
        ja:"大鳥圭介率いる旧幕府軍に加わった土方は、先鋒を率いて宇都宮城を強襲、これを陥落させる。薬の行商人が職業軍人たちを指揮し、しかも巧みに指揮したのである。火力、規律、勢い——彼の新しい信条がここで実を結んだ。苛烈な逸話が残る。逃げ出した兵をその場で斬り捨てて戦線を支え、その夜は人知れずその兵のために涙し、後に供養料を出したという——局中法度の掟が、近代の戦場に持ち込まれた瞬間である。数日後、新政府軍の城奪回戦で足に銃創を負い、会津へ後送された。"},
  people:["hijikata"],
  roles:{
    hijikata:{en:"Led the vanguard that stormed the castle; wounded in the foot days later when it was retaken.", ja:"先鋒を率いて城を攻略。数日後の奪回戦で足を負傷した。"}
  }},

 {id:"aizu", sort:"1868-10-06", year:"1868", coords:[37.4877,139.9294], zoom:10,
  date:{en:"Autumn 1868", ja:"1868年秋（慶応4年〜明治元年）"},
  loc:{en:"Aizu-Wakamatsu", ja:"会津若松"},
  title:{en:"The Aizu campaign", ja:"会津戦争"},
  desc:{en:"Aizu — the domain that took in the masterless swordsmen of Mibu five years earlier — is the imperial coalition's designated villain, and its punishment is total war. Hijikata, recovered from his wound, fights in the doomed defensive campaign as the ring closes on Wakamatsu castle. The remnant Shinsengumi under Saitō fights at Bonari Pass and beyond. When the strategic decision comes to fall back and continue the war from the north, Saitō refuses: to abandon Aizu in its extremity, he reportedly says, would betray everything the corps had claimed to stand for. About a dozen men stay with him. He and Hijikata — the corps' two hardest men, choosing opposite duties — never meet again.",
        ja:"会津——五年前、壬生の浪士たちを拾い上げたその藩が、新政府の「朝敵」の筆頭として、殲滅戦の対象となった。傷の癒えた土方は、若松城への包囲が狭まる中、絶望的な防衛戦を戦う。斎藤率いる新選組の残余は母成峠などで防戦した。やがて戦略上、北へ退いて戦争を継続する決定が下ると、斎藤は拒む。「今、危急の会津を見捨てるのは、隊が掲げてきたすべてへの背信である」と。十数名が彼と共に残った。新選組で最も苛烈な二人の男が、正反対の義務を選び——二度と相まみえることはなかった。"},
  people:["hijikata","saito","katamori","ogata","shimada"],
  roles:{
    ogata:{en:"Last clearly recorded with the corps here; what became of him afterwards is unknown.", ja:"隊とともにいたことが確かに記録されているのはここが最後で、その後の消息はわからない。"},
    shimada:{en:"Fought through the Aizu campaign, then went north with Hijikata.", ja:"会津の戦いを戦い抜き、土方とともに北へ向かった。"},
    katamori:{en:"Defends Tsuruga castle through a month-long siege and surrenders in November 1868.", ja:"一か月にわたる籠城の末、1868年11月に鶴ヶ城を開城する。"},
    hijikata:{en:"Fought the defensive campaign, then moved north to continue the war with Enomoto's forces.", ja:"防衛戦を戦い、榎本軍と合流して戦争を継続すべく北へ向かった。"},
    saito:{en:"Refused to leave, fought Aizu's last battles with a dozen men, and shared the domain's surrender and exile.", ja:"退去を拒否。十数名と会津最後の戦いを戦い抜き、降伏と流謫の運命を藩と分かち合った。"}
  }},

 {id:"sendai", sort:"1868-10-12", year:"1868", coords:[38.2682,140.8694], zoom:10,
  date:{en:"October 1868", ja:"1868年10月（明治元年）"},
  loc:{en:"Sendai", ja:"仙台"},
  title:{en:"Hijikata joins Enomoto's fleet", ja:"土方、仙台で榎本艦隊に合流"},
  desc:{en:"At Sendai, as the northern alliance collapses domain by domain, Hijikata boards the runaway shogunal fleet of Admiral Enomoto Takeaki — eight warships that refused to be handed over to the new government, carrying some two thousand soldiers, French military advisers among them. In the councils aboard, the one-time farm boy is treated as a proven field commander; there is an account of officers proposing him for overall command of land operations. The fleet weighs anchor for Ezo (Hokkaido), carrying the last armed remnant of the Tokugawa order — the Shinsengumi now a company-sized unit among them — toward one final improvisation: a republic at the edge of the map.",
        ja:"奥羽越列藩同盟が藩ごとに崩れていく中、土方は仙台で榎本武揚率いる旧幕府艦隊と合流する。新政府への引き渡しを拒んだ軍艦八隻、将兵約二千、そこにはフランス軍事顧問団の姿もあった。艦上の軍議で、かつての農家の子は歴戦の指揮官として遇される。陸戦の総指揮に土方を推す声があったという記録も残る。艦隊は錨を上げ、蝦夷地へ——中隊規模となった新選組を含む、徳川体制最後の武装勢力を乗せて、地図の果ての「共和国」という最後の即興へと向かった。"},
  people:["hijikata","shimada","mori","ono"],
  roles:{
    shimada:{en:"Sailed north with Hijikata.", ja:"土方とともに北へ渡った。"},
    mori:{en:"Came north with the party of the Kuwana lord, Matsudaira Sadaaki, who sailed with the fleet.", ja:"艦隊とともに渡った桑名藩主・松平定敬の一行に従って北へ来た。"},
    ono:{en:"Followed his domain's heir, the former senior councillor Ogasawara Nagamichi, who sailed with the fleet.", ja:"艦隊とともに渡った唐津藩世子で元老中の小笠原長行に従った。"},
    hijikata:{en:"Joined the fleet's leadership councils as a field commander of proven reputation.", ja:"歴戦の指揮官として艦隊首脳の軍議に加わった。"}
  }},

 {id:"nyoraido", sort:"1868-10-20", year:"1868", coords:[37.5091,139.8913], zoom:13,
  date:{en:"October 1868", ja:"1868年10月（慶応4年9月）"},
  loc:{en:"Nyoraidō, outside Aizu-Wakamatsu", ja:"会津若松郊外・如来堂"},
  title:{en:"Saitō's last stand at Nyoraidō", ja:"如来堂の戦い"},
  desc:{en:"Hijikata has gone north; Saitō and the men who would not abandon Aizu have stayed. With the castle town under siege, they hold a position at the small temple of Nyoraidō outside Wakamatsu. In October a government force falls on them. The little band is overwhelmed and scattered, and word spreads that Saitō and his men have all been killed.\n\nThey have not. Saitō and several others survive and fight on until Aizu surrenders in November, then go with the domain's men into captivity. When the defeated domain is moved north to the bleak lands of Tonami, at the tip of Honshu, Saitō goes with it. He will spend the rest of his long life among Aizu people — his wife was from an Aizu family — and later serve the new government as a Tokyo policeman under the name Fujita Gorō.",
        ja:"土方は北へ去り、会津を見捨てることを拒んだ斎藤らは残った。城下が包囲されるなか、彼らは若松郊外の小さな堂・如来堂に陣を構えた。10月、新政府軍がこれを襲う。小部隊は圧倒されて四散し、斎藤らは全員討ち死にしたという報が広まった。\n\nだが彼らは死んでいなかった。斎藤ほか数名は生き延び、11月の会津降伏まで戦い続け、藩士たちとともに謹慎の身となった。敗れた会津藩が本州北端の荒涼とした斗南の地へ移されると、斎藤もそれに従った。彼は長い余生を会津の人々のあいだで送り——妻も会津の家の出だった——のちには藤田五郎の名で、新政府の東京の警察官として仕えることになる。"},
  people:["saito"],
  roles:{
    saito:{en:"Held Nyoraidō until the band was overrun; reported dead, he survived to share Aizu's surrender and exile.", ja:"隊が崩れるまで如来堂を守った。戦死と伝えられたが生き延び、会津の降伏と移封をともにした。"}
  },
  legend:{en:"Who fought at Nyoraidō, and how many died, is uncertain; the report of Saitō's death that circulated shows how confused the news was even then.",
          ja:"如来堂で誰が戦い、何人が死んだかは確かではない。斎藤戦死の報が流れたこと自体、当時でさえ情報がいかに混乱していたかを示している。"}},

 {id:"washinoki", sort:"1868-12-03", year:"1868", coords:[42.1091,140.5247], zoom:12,
  date:{en:"December 3, 1868", ja:"1868年12月3日（明治元年10月20日）"},
  loc:{en:"Washinoki, Ezo", ja:"蝦夷地・鷲ノ木"},
  title:{en:"Landing at Washinoki", ja:"鷲ノ木上陸"},
  desc:{en:"After a stormy crossing from the north of Honshu, Enomoto's fleet anchors in the bay at Washinoki, on the coast north of Hakodate, and puts some three thousand men ashore in snow. Rather than attack Hakodate from the sea, the army marches on it overland in two columns: Ōtori Keisuke's by the main road through the hills, and Hijikata's by the coast road to the east.\n\nThe Shinsengumi — now a mix of Kyoto veterans and men who joined in the north, including retainers of the Kuwana and Karatsu domains — lands with the army. Within a week, after brief fighting, both columns reach Hakodate, the new government's officials flee across the strait, and the star fortress of Goryōkaku is in the fleet's hands.",
        ja:"本州北部から荒れた海を渡った榎本艦隊は、箱館の北の海岸にある鷲ノ木の湾に錨を下ろし、雪のなか約三千の兵を上陸させた。軍は海から箱館を攻めるのではなく、二手に分かれて陸路を進む。大鳥圭介の隊は山あいの本道を、土方の隊は東の海沿いの道を行った。\n\n京都以来の古参と、桑名藩や唐津藩の藩士など北で加わった者たちが混じり合ったいまの新選組も、軍とともに上陸した。一週間のうちに、短い戦闘を経て両隊は箱館に達し、新政府の役人は海峡の向こうへ逃れ、星形の城塞・五稜郭は艦隊の手に落ちた。"},
  people:["hijikata","shimada","mori","ono"],
  roles:{
    hijikata:{en:"Led the column that took the coast road to Hakodate.", ja:"海沿いの道を箱館へ進む一隊を率いた。"},
    shimada:{en:"Landed with the corps.", ja:"隊とともに上陸した。"},
    mori:{en:"Landed with the corps' Kuwana men.", ja:"隊の桑名藩士たちとともに上陸した。"},
    ono:{en:"Landed with the corps.", ja:"隊とともに上陸した。"}
  }},

 {id:"goryokaku", sort:"1869-01-27", year:"1868", coords:[41.7967,140.7570], zoom:12,
  date:{en:"December 1868 – January 1869", ja:"1868年12月〜1869年1月（明治元年）"},
  loc:{en:"Goryōkaku fortress, Hakodate", ja:"箱館・五稜郭"},
  title:{en:"The Republic of Ezo", ja:"蝦夷共和国"},
  desc:{en:"The fleet lands on Ezo in early winter. Hijikata commands one of the two columns that converge on Hakodate and the Western-style star fortress of Goryōkaku, and then the winter campaign that takes Matsumae and clears the island. In January 1869 the officers hold Japan's first election — votes among themselves, but an election — and constitute the \"Republic of Ezo\" under President Enomoto. Hijikata is chosen as a magistrate of the army, effectively a vice-minister of war. Foreign observers in the harbor take the new government seriously enough to deal with it de facto. The peddler of Ishida sanyaku has become a founding officer of a republic; it will last five months.",
        ja:"初冬、艦隊は蝦夷地に上陸する。土方は箱館と洋式の星形城塞・五稜郭へ向かう二隊のうち一隊を指揮し、続く冬季作戦で松前を落として全島を平定した。1869年1月（明治元年12月）、士官たちによる日本初の「入札」（選挙）が行われ——投票権は幹部のみとはいえ、選挙である——総裁・榎本武揚の下に「蝦夷共和国」が成立する。土方は陸軍奉行並に選出された。実質的な陸軍次官である。港の外国人観察者たちは、この新政権を事実上の政府として遇した。石田散薬の行商人が、共和国の創設幹部となったのだ。その共和国の寿命は、五ヶ月だった。"},
  people:["hijikata","shimada","mori","ono","soma"],
  roles:{
    soma:{en:"Rejoined the corps at Hakodate after his release.", ja:"釈放ののち、箱館で隊に復帰した。"},
    shimada:{en:"One of Hijikata's closest followers in the last campaign.", ja:"最後の戦いで土方に最も近く従った一人。"},
    mori:{en:"Kuwana retainer who took command of the reformed corps as a chief officer (頭取).", ja:"再編された隊を頭取として率いた桑名藩士。"},
    ono:{en:"Chief officer of the corps, then on Hijikata's staff.", ja:"隊の頭取、のち土方の幕僚。"},
    hijikata:{en:"Led the landing column and the winter conquest of Matsumae; elected army magistrate in Japan's first (officers-only) election.", ja:"上陸部隊の一翼と松前平定の冬季作戦を指揮。日本初の（幹部限定の）選挙で陸軍奉行並に選出された。"}
  }},

 {id:"matsumae", sort:"1868-12-18", year:"1868", coords:[41.4299,140.1084], zoom:13,
  date:{en:"December 18, 1868", ja:"1868年12月18日（明治元年11月5日）"},
  loc:{en:"Matsumae castle, Ezo", ja:"蝦夷地・松前城"},
  title:{en:"The capture of Matsumae", ja:"松前城攻略"},
  desc:{en:"Hakodate and Goryōkaku have fallen to the fleet's army after only brief fighting, but the Matsumae domain, the only daimyō house on Ezo, has declared for the new government. Hijikata leads a column of some seven hundred men west along the winter coast. Matsumae castle — rebuilt only fifteen years earlier to face foreign ships at sea — has its guns pointed the wrong way, and Hijikata's men take it from the landward side in a single day. The domain's lord flees across the strait.\n\nThe campaign goes on to Esashi, where disaster strikes not on land but at sea: the Kaiyō Maru, the fleet's great Dutch-built flagship, sent up the coast in support, is driven onto the rocks by a winter storm and lost. Hijikata is said to have watched her go down from the shore. Ezo is now in the fleet's hands, but the republic has lost its strongest ship before its first election.",
        ja:"箱館と五稜郭は短い戦闘ののち旧幕府軍の手に落ちたが、蝦夷地唯一の大名である松前藩は新政府方についた。土方は約七百の兵を率い、冬の海岸沿いを西へ進む。わずか十五年前に外国船に備えて築き直された松前城は、砲を海に向けており、陸側からの攻撃には弱かった。土方の兵は一日でこれを落とし、藩主は海峡を越えて逃れた。\n\n軍はさらに江差へ進む。だが災厄は陸ではなく海からやってきた。援護のため沿岸を回ってきた艦隊の旗艦、オランダ製の開陽丸が、冬の嵐で岩礁に乗り上げ、失われたのである。土方は岸からその最期を見つめていたという。蝦夷地は旧幕府軍の手に入ったが、共和国は最初の選挙の前に、いちばん強い艦を失った。"},
  people:["hijikata"],
  roles:{
    hijikata:{en:"Commanded the column that took Matsumae castle and pressed on to Esashi.", ja:"松前城を落とし、江差まで進んだ部隊を指揮した。"}
  },
  legend:{en:"The story that Hijikata, watching the Kaiyō Maru founder, struck a pine tree in grief belongs to tradition; the tree is still pointed out in Esashi.",
          ja:"開陽丸の座礁を見た土方が、悔しさのあまり松の木を叩いたという話は伝承である。その松はいまも江差で案内されている。"}},

 {id:"miyako", sort:"1869-05-06", year:"1869", coords:[39.6414,141.9723], zoom:9,
  date:{en:"May 6, 1869", ja:"1869年5月6日（明治2年3月25日）"},
  loc:{en:"Miyako Bay, Rikuchū", ja:"陸中・宮古湾"},
  title:{en:"Raid on Miyako Bay", ja:"宮古湾海戦"},
  desc:{en:"The new government's fleet — anchored by the French-built ironclad Kōtetsu, against which Ezo has no answer — masses at Miyako Bay for the final push north. The republic gambles on audacity: three ships will slip in at dawn under false colors, lay alongside the ironclad, and take her by boarding — an abordage out of the age of sail, attempted against a modern warship. Storms strip the attack to a single ship, the Kaiten, with Hijikata aboard. She comes alongside; the boarding party leaps down onto the ironclad's deck — where a Gatling gun meets them. The raid fails in minutes with heavy losses, the Kaiten fighting her way out. Even enemy officers, the accounts say, spoke of the attempt with a kind of awe; Hijikata's composure through the slaughter enters legend.",
        ja:"新政府艦隊——蝦夷側に対抗手段のない仏製甲鉄艦「甲鉄」を旗艦に——最終攻勢のため宮古湾に集結する。共和国は大胆さに賭けた。三隻が偽旗を掲げて夜明けの湾に忍び入り、甲鉄に横付けして移乗白兵で奪い取る——帆船時代の接舷斬り込み（アボルダージュ）を、近代軍艦相手に敢行するのである。嵐が攻撃隊を回天一隻に減らした。土方はその艦上にいた。回天は甲鉄に接舷、斬り込み隊が敵甲板に飛び降りる——そこにガトリング砲が待っていた。襲撃は数分で失敗し、多数の死傷者を出して回天は離脱する。敵将校たちすらこの攻撃を畏敬をもって語ったと伝わり、修羅場での土方の沈着は伝説となった。"},
  people:["hijikata"],
  roles:{
    hijikata:{en:"Aboard the Kaiten as the senior land officer; held the operation together through its bloody failure and withdrawal.", ja:"陸軍側の最上級者として回天に乗艦。血みどろの失敗と離脱の間、部隊の崩壊を食い止めた。"}
  }},

 {id:"futamata", sort:"1869-05-24", year:"1869", coords:[41.9454,140.5456], zoom:12,
  date:{en:"May 24 – June 4, 1869", ja:"1869年5月24日〜6月4日（明治2年4月13日〜24日）"},
  loc:{en:"Futamata pass, on the road from Esashi to Hakodate", ja:"江差から箱館への道・二股口"},
  title:{en:"Hijikata holds the pass at Futamata", ja:"二股口の戦い"},
  desc:{en:"The new government's army lands on Ezo in the spring of 1869 and advances on Hakodate by several roads. On the mountain road from Esashi, at the pass of Futamata, Hijikata waits with a few hundred men behind lines of earthworks and trenches dug into the hillside. The first assault comes on May 24 and is beaten off after fighting through the night. Ten days later the enemy returns in greater strength, and again the line holds.\n\nIt is the finest defensive action of Hijikata's career: his men, firing in relays from cover, hold a far larger force for days on end, and the earthworks can still be traced in the woods today. But the other roads are not held. When the coastal route falls and his position is in danger of being cut off, Hijikata is ordered back to Goryōkaku. He has not lost the pass. He leaves it because the war is being lost everywhere else.",
        ja:"1869年春、新政府軍は蝦夷地に上陸し、いくつもの道から箱館へ迫った。江差からの山道にある二股口では、土方が数百の兵を率い、山腹に掘った胸壁と塹壕の線で待ち構えていた。5月24日の最初の攻撃は、夜を徹した戦いの末に撃退された。十日後、敵は兵力を増やして再び押し寄せたが、陣地はまたも持ちこたえた。\n\n土方の生涯で最もみごとな防御戦である。物陰から交代で撃ち続ける兵たちは、はるかに大きな敵を何日にもわたって食い止めた。その胸壁の跡は、いまも林の中にたどることができる。しかし他の道は守り切れなかった。海沿いの道が破られ、退路を断たれるおそれが出ると、土方は五稜郭への撤退を命じられる。峠を失ったのではない。他のすべての場所で、戦が負けつつあったから去ったのである。"},
  people:["hijikata"],
  roles:{
    hijikata:{en:"Held the pass against two major assaults and withdrew undefeated when the rest of the front collapsed.", ja:"二度の大攻勢から陣地を守り抜き、他の戦線が崩れると、敗れないまま退いた。"}
  },
  legend:{en:"Famous details — tens of thousands of rounds fired in a single night, rifles too hot to hold being cooled with buckets of water, Hijikata passing among the men with a cask of sake but allowing each only one cup — come from participants' later accounts and may have grown with retelling.",
          ja:"一夜に数万発を撃った、熱くなった銃身を桶の水で冷やした、土方が酒樽を持って兵のあいだを回り、一人一杯だけ許した——といった有名な話は、参加者の後年の記録に拠り、語り継がれるうちに膨らんだ部分もあるかもしれない。"}},

 {id:"death", sort:"1869-06-20", year:"1869", coords:[41.7737,140.7269], zoom:13,
  date:{en:"June 20, 1869", ja:"1869年6月20日（明治2年5月11日）"},
  loc:{en:"Ippongi gate, Hakodate", ja:"箱館・一本木関門"},
  title:{en:"Hijikata killed at Hakodate", ja:"土方歳三、箱館に散る"},
  desc:{en:"The imperial general assault on Hakodate. The town falls street by street; a detachment is cut off at the Benten battery near the harbor — among them the last men of the Shinsengumi. Hijikata gathers a relief force and rides out through the Ippongi gate toward the fighting, by most accounts driving his men forward from horseback in the open, and is shot through the lower abdomen. He dies within hours, age 34, days before the republic's surrender. He had sent his photograph, a strand of hair, and his sword back to his family in Hino — a man settling his affairs. His burial place was deliberately concealed and has never been found. The death poem attributed to him: though his body rot on the isle of Ezo, his spirit would guard his lord in the east.",
        ja:"新政府軍、箱館総攻撃。市街は一区画ずつ陥落し、港近くの弁天台場に一隊が孤立する——その中に新選組最後の隊士たちがいた。土方は救援部隊を率いて一本木関門から戦場へ馬を進め、遮蔽もない中で馬上から兵を叱咤していたところを、腹部に銃弾を受けた。数時間のうちに絶命。満34歳、共和国降伏の数日前だった。彼はすでに写真と遺髪と愛刀を日野の家族へ送り届けていた——身辺を整えた男の死である。埋葬地は意図的に秘され、今日まで発見されていない。伝えられる辞世——たとひ身は蝦夷の島辺に朽ちぬとも、魂は東の君やまもらむ。"},
  people:["hijikata","ono","shimada","soma"],
  roles:{
    soma:{en:"Cut off with the corps; within days of Hijikata's death he was its commander.", ja:"隊とともに孤立し、土方の死から数日のうちに隊長となった。"},
    ono:{en:"Fighting near Ippongi with Hijikata on his last day; his account is a main source for how Hijikata fell.", ja:"最期の日、一本木付近で土方とともに戦った。その記録は土方の死を伝える主要な史料である。"},
    shimada:{en:"Holding Benten Daiba with the corps — the position Hijikata rode out to relieve.", ja:"隊とともに弁天台場を守っていた。土方が救援に向かったのがこの台場である。"},
    hijikata:{en:"Killed riding to the relief of the corps' last cut-off men — in death as in life, the enforcer who would not abandon his own.", ja:"孤立した最後の隊士たちの救援に向かう馬上で斃れた。生においても死においても、身内を見捨てぬ執行者だった。"}
  },
  legend:{en:"Multiple accounts of his final ride differ in detail (the exact spot, his last words, who recovered his body). The concealed grave has produced a century and a half of theories, none proven.",
          ja:"最期の突撃の細部（正確な地点、最期の言葉、遺体の収容者）は記録によって異なる。秘匿された埋葬地をめぐっては一世紀半にわたり諸説が唱えられてきたが、いずれも証明されていない。"}},

 {id:"benten", sort:"1869-06-24", year:"1869", coords:[41.7742,140.7041], zoom:15,
  date:{en:"June 24, 1869", ja:"1869年6月24日（明治2年5月15日）"},
  loc:{en:"Benten Daiba fort, Hakodate harbour", ja:"箱館港・弁天台場"},
  title:{en:"The last of the Shinsengumi: Benten Daiba", ja:"新選組の終わり——弁天台場"},
  desc:{en:"Benten Daiba is a stone gun battery built out into Hakodate harbour to defend it against foreign warships. When the new government's general assault takes the town, the battery's garrison — including the last men of the Shinsengumi — is cut off. Hijikata dies riding to its relief. For four more days the fort holds out under bombardment from land and sea, its food and water running out.\n\nIts commander is Nagai Naomune, the shogunate's former inspector-general — the official Kondō had accompanied to Hiroshima four years earlier. On June 24 Nagai surrenders the battery, and with it the Shinsengumi, now led by Sōma Kazue, who has taken command only days before. The corps that had marched out of Edo six years earlier as a band of hired swordsmen ends here, as prisoners of war. Goryōkaku itself surrenders three days later.",
        ja:"弁天台場は、外国軍艦から箱館港を守るために海に突き出して築かれた石造りの砲台である。新政府軍の総攻撃で市街が落ちると、新選組の最後の隊士たちを含む台場の守備隊は孤立した。土方はその救援に向かう途中で斃れる。台場はさらに四日間、陸と海からの砲撃に耐えたが、食料も水も尽きていった。\n\n台場の指揮官は、元大目付の永井尚志——四年前、近藤が広島へ随行したあの幕府の役人である。6月24日、永井は台場を明け渡した。新選組もともに降った。数日前に隊長となったばかりの相馬主計が、その降伏を引き受けた。六年前、雇われ剣客の一団として江戸を発った隊は、ここで捕虜として終わる。五稜郭が降伏するのは、その三日後である。"},
  people:["soma","shimada"],
  roles:{
    soma:{en:"Took command of the corps in its last days and surrendered it with the battery.", ja:"最後の数日に隊長となり、台場とともに隊を降伏させた。"},
    shimada:{en:"Held the battery with the corps to the end and went into captivity.", ja:"最後まで隊とともに台場を守り、捕虜となった。"}
  },
  legend:{en:"Sōma's exact title and the date he took command vary between sources; the letter of the physician Takamatsu Ryōun is often cited for his appointment.",
          ja:"相馬の正確な肩書きと隊長に就いた日付は史料によって異なる。その就任については、医師・高松凌雲の書簡がよく引かれる。"}},

 {id:"ichimura", sort:"1869-07-15", year:"1869", coords:[35.6774,139.3998], zoom:15,
  date:{en:"Summer 1869", ja:"1869年夏（明治2年）"},
  loc:{en:"Satō Hikogorō's house, Hino", ja:"日野・佐藤彦五郎家"},
  title:{en:"A photograph comes home to Hino", ja:"写真、日野へ帰る"},
  desc:{en:"Weeks before his death, Hijikata ordered his young page Ichimura Tetsunosuke, a boy of about sixteen, to leave Hakodate on a foreign ship and carry a package to his family in Hino. Ichimura refused, wanting to die with the corps, and gave way only when Hijikata threatened to cut him down. He slipped through the lines, crossed to the mainland, and made his way south to the house of Satō Hikogorō, Hijikata's brother-in-law, where the Tennen Rishin-ryū had been taught all those years before.\n\nHe brought a photograph of Hijikata in Western uniform, taken in Hakodate, a lock of his hair, and a few lines of writing. The photograph is the image of Hijikata the world knows today. The Satō family hid Ichimura for a time and kept what he carried, and the family's descendants in Hino, who run a small museum in the house, still look after Hijikata's memory.",
        ja:"死の数週間前、土方は十六歳ほどの小姓・市村鉄之助に、外国船で箱館を脱出し、日野の家族に包みを届けるよう命じた。市村は隊とともに死にたいと拒み、従わなければ斬ると言われてようやく承知した。彼は包囲を抜けて本州へ渡り、南へ下って、土方の義兄・佐藤彦五郎の家にたどり着く。かつて天然理心流が教えられていた、あの家である。\n\n彼が携えていたのは、箱館で撮られた洋装の土方の写真、遺髪、そしてわずかな書き付けだった。その写真こそ、今日世界が知る土方の姿である。佐藤家はしばらく市村をかくまい、届けられた品を守った。日野の佐藤家の子孫はいまも家の一角で小さな資料館を営み、土方の記憶を伝えている。"},
  people:["hijikata"],
  roles:{
    hijikata:{en:"Sent his photograph and a lock of his hair home before the end, by a boy he refused to let die with him.", ja:"最期の前に、ともに死なせることを拒んだ少年に託して、写真と遺髪を故郷へ送った。"}
  },
  legend:{en:"The scene in which Hijikata threatened to cut Ichimura down if he refused comes from the Satō family's account of what the boy told them. The date of his arrival in Hino is not certain.",
          ja:"拒めば斬ると土方が迫った場面は、少年が語ったことを佐藤家が伝えたものである。日野に着いた日付は確かではない。"}},

 {id:"morideath", sort:"1869-12-15", year:"1869", coords:[35.0641,136.6986], zoom:13,
  date:{en:"Winter 1869", ja:"1869年冬（明治2年）"},
  loc:{en:"Remembered in Kuwana", ja:"桑名に記憶される"},
  title:{en:"Mori Tsunekichi gives his life for Kuwana", ja:"森常吉、桑名のために死す"},
  desc:{en:"After the surrender at Hakodate, the new government demands that each rebel domain name the men responsible for its resistance. For Kuwana, Mori Tsunekichi — the senior retainer who had followed his lord north and served as a chief officer of the Shinsengumi in Ezo — accepts that role. In the winter of 1869 he is put to death in Tokyo, by most accounts ordered to commit seppuku, so that his domain can be pardoned. He is remembered in Kuwana, the castle town on Ise Bay, for that sacrifice.",
        ja:"箱館の降伏後、新政府は抵抗した各藩に、その責任者を差し出すよう求めた。桑名藩では、主君に従って北へ渡り、蝦夷地で新選組の頭取を務めた重臣・森常吉がその役を引き受ける。1869年冬、彼は東京で、多くの記録によれば切腹を命じられて死に、藩は赦された。伊勢湾に臨む城下町・桑名で、彼はその犠牲によって記憶されている。"},
  people:["mori"],
  roles:{
    mori:{en:"Took responsibility for Kuwana's resistance and was put to death in Tokyo.", ja:"桑名藩の抵抗の責めを負い、東京で死を賜った。"}
  },
  legend:{en:"He died in Tokyo; the map point marks Kuwana, where he is remembered. The manner and date of his death, and the claim that he was the only man put to death for the Hakodate war, need checking against the full record.",
          ja:"彼が死んだのは東京で、地図の位置は彼が記憶される桑名を示している。死の様子と日付、そして箱館戦争で処刑された唯一の人物だという説は、史料に当たって確かめる必要がある。"}},

 {id:"tonami", sort:"1870-06-01", year:"1870", coords:[40.5240,141.3060], zoom:11,
  date:{en:"1870", ja:"1870年（明治3年）"},
  loc:{en:"Tonami domain — Gonohe, northern Honshu", ja:"斗南藩（現・青森県五戸町）"},
  title:{en:"Exile to Tonami", ja:"斗南への移住"},
  desc:{en:"After its surrender Aizu was abolished. In 1870 the new government allowed the house of Matsudaira to survive as the tiny domain of Tonami, at the cold northern tip of Honshu, and some seventeen thousand people of Aizu moved there. The land was poor, the winters brutal, and many families went hungry; it is remembered in Aizu as a second punishment after the war.\n\nSaitō Hajime, who had refused to abandon Aizu in 1868, went north with its people and lived for a time at Gonohe. Four years later, when the domains had been abolished altogether, he left for Tokyo and a new career in the police.",
        ja:"降伏後、会津藩は取り潰された。1870年（明治3年）、新政府は松平家の存続を本州北端の寒冷な地の小藩・斗南藩として認め、会津の人々約一万七千人がそこへ移った。土地はやせ、冬は過酷で、多くの家族が飢えた。会津では、戦に続く二度目の罰として記憶されている。\n\n1868年に会津を見捨てることを拒んだ斎藤一も、会津の人々とともに北へ移り、しばらく五戸に暮らした。廃藩置県で藩そのものがなくなったのち、彼は東京へ出て、警察官として新しい道を歩み始める。"},
  people:["saito","katamori"],
  roles:{
    saito:{en:"Went north with the people of Aizu and lived for a time at Gonohe.", ja:"会津の人々とともに北へ移り、しばらく五戸に暮らした。"},
    katamori:{en:"His house survived as the domain of Tonami, under his infant son.", ja:"彼の家は幼い息子を藩主とする斗南藩として存続した。"}
  }},

 {id:"niijima", sort:"1870-11-01", year:"1870", coords:[34.3748,139.2550], zoom:12,
  date:{en:"1870–1872", ja:"1870〜1872年（明治3〜5年）"},
  loc:{en:"Niijima, Izu islands", ja:"伊豆諸島・新島"},
  title:{en:"Sōma Kazue in exile on Niijima", ja:"相馬主計、新島へ流される"},
  desc:{en:"Sōma Kazue, the man who surrendered the Shinsengumi at Benten Daiba, is sentenced to exile on Niijima, one of the Izu islands south of Tokyo Bay. He spends about two years there. By local tradition he teaches reading and writing to the island's children and marries a local woman. Pardoned in 1872, he returns to the mainland with her and serves briefly as a government official.\n\nIn 1875 he takes his own life, aged thirty-two. Why, he never explained. He had been the last commander of the corps for a few days; it may be that he carried that for the rest of his short life.",
        ja:"弁天台場で新選組の降伏を引き受けた相馬主計は、東京湾の南に浮かぶ伊豆諸島の新島への流罪を言い渡され、約二年をそこで過ごした。島の伝えでは、子どもたちに読み書きを教え、島の女性を妻に迎えたという。1872年（明治5年）に赦免されると、妻とともに本土へ戻り、しばらく官吏を務めた。\n\n1875年（明治8年）、相馬は自ら命を絶つ。三十二歳だった。その理由を彼は語らなかった。数日だけ隊の最後の隊長だったこと——それを短い余生のあいだずっと背負い続けていたのかもしれない。"},
  people:["soma"],
  roles:{
    soma:{en:"Exiled here for about two years; by tradition he taught the island's children.", ja:"約二年をここで流人として過ごした。伝えでは島の子どもたちに学問を教えた。"}
  },
  legend:{en:"His teaching and marriage on Niijima come from island tradition; the reasons for his suicide are unknown.",
          ja:"新島での教育や結婚は島の伝えに拠る。自害の理由はわかっていない。"}},

 {id:"katamorinikko", sort:"1880-03-01", year:"1880", coords:[36.7581,139.5987], zoom:13,
  date:{en:"1880", ja:"1880年（明治13年）"},
  loc:{en:"Nikkō Tōshō-gū", ja:"日光東照宮"},
  title:{en:"Katamori at Nikkō", ja:"容保、日光東照宮宮司となる"},
  desc:{en:"Released from confinement, Matsudaira Katamori, the former Protector of Kyoto who had taken the masterless swordsmen of Mibu under his wing, is appointed chief priest of the Tōshō-gū at Nikkō — the great shrine to Tokugawa Ieyasu, founder of the shogunate. The man branded an enemy of the court in 1868 spends his last years tending the memory of the dynasty he had served.\n\nHe died in Tokyo in 1893. Among his belongings was found a letter from Emperor Kōmei, written thirty years before, thanking him for his loyalty. He had kept it all his life, and had never shown it to anyone.",
        ja:"謹慎を解かれた松平容保——かつて京都守護職として壬生の浪士たちを預かった人物——は、徳川幕府の祖・家康を祀る日光東照宮の宮司に任じられた。1868年に朝敵とされた男は、仕えた王朝の記憶を守ることに晩年を捧げた。\n\n容保は1893年（明治26年）に東京で没した。遺品のなかから、三十年前に孝明天皇が彼の忠誠を嘉して与えた宸翰が見つかった。彼は生涯それを身につけ、誰にも見せなかったのである。"},
  people:["katamori"],
  roles:{
    katamori:{en:"Chief priest of the Tōshō-gū in his last years.", ja:"晩年、東照宮の宮司を務めた。"}
  }},

 {id:"kabato", sort:"1882-06-01", year:"1882", coords:[43.3387,141.6692], zoom:12,
  date:{en:"1882–1886", ja:"1882〜1886年（明治15〜19年）"},
  loc:{en:"Kabato prison, Tsukigata, Hokkaido", ja:"北海道月形・樺戸集治監"},
  title:{en:"Nagakura teaches at Kabato prison", ja:"永倉、樺戸集治監で剣術を教える"},
  desc:{en:"Kabato was one of the great prisons built in the 1880s to hold the Meiji government's convicts — among them many of its political enemies — and to put them to work opening up the interior of Hokkaido. Its guards had to be trained, and for about four years their sword instructor was Sugimura Yoshie, the former Nagakura Shinpachi, captain of the Shinsengumi's second unit.\n\nThe building that housed the prison's offices is now a museum. For Nagakura it was a steady post far from Kyoto, in the government service of the regime he had once fought, teaching the sword to men who would never need it the way he had.",
        ja:"樺戸は、明治政府が囚人——その多くは政府の敵であった者たち——を収容し、北海道内陸の開拓に従事させるために1880年代に建てた大監獄の一つである。看守たちには訓練が必要で、約四年にわたってその剣術師範を務めたのが、杉村義衛——かつての新選組二番組長・永倉新八だった。\n\n監獄の本庁舎だった建物は、いま博物館になっている。永倉にとってそれは、京から遠く離れた安定した勤め口であり、かつて戦った政府に仕えて、彼のようには剣を必要としないであろう者たちに剣を教える日々だった。"},
  people:["nagakura"],
  roles:{
    nagakura:{en:"Sword instructor to the prison's guards for about four years.", ja:"約四年にわたり看守たちの剣術師範を務めた。"}
  }},

 {id:"takahata", sort:"1888-07-01", year:"1888", coords:[35.6618,139.4108], zoom:15,
  date:{en:"1888", ja:"1888年（明治21年）"},
  loc:{en:"Takahata Fudō temple, Hino", ja:"日野・高幡不動尊"},
  title:{en:"A monument to the two heroes", ja:"殉節両雄之碑"},
  desc:{en:"Twenty years after Kondō's execution and Hijikata's death, their families and friends in Tama — led by Satō Hikogorō of Hino and Kojima Shikanosuke of Ono-ji village, who had backed the corps from the start — raise a great stone monument at Takahata Fudō, the great temple near Hijikata's home village. Its title, \"Monument to the Two Heroes Who Died for Their Loyalty,\" was written by Matsudaira Katamori.\n\nIt was a bold thing to do. To the Meiji government the two men were rebels, and by local tradition permission was hard to win. That the people of Hino did it anyway, in stone, shows how they remembered the farmers' sons who had gone to Kyoto: not as murderers of loyalists, but as their own.",
        ja:"近藤の処刑と土方の死から二十年。最初から隊を支えてきた日野の佐藤彦五郎や小野路村の小島鹿之助を中心に、多摩の家族や友人たちは、土方の生まれた村に近い大寺・高幡不動尊に大きな石碑を建てた。「殉節両雄之碑」——忠義に殉じた二人の英雄の碑——の篆額は、松平容保の筆である。\n\nそれは大胆な行いだった。明治政府にとって二人は賊であり、地元の伝えでは、許しを得るのは容易ではなかったという。それでも日野の人々が石に刻んでそれを成し遂げたことは、京へ上った農家の息子たちを、彼らがどう記憶していたかを示している。志士を斬った人斬りとしてではなく、自分たちの身内として、である。"},
  people:["kondo","hijikata","katamori"],
  roles:{
    kondo:{en:"One of the two men commemorated.", ja:"顕彰された二人のうちの一人。"},
    hijikata:{en:"One of the two men commemorated, near his home village.", ja:"顕彰された二人のうちの一人。碑は彼の生まれた村の近くに建つ。"},
    katamori:{en:"Wrote the monument's title in his own hand.", ja:"碑の篆額を自ら書いた。"}
  }},

 {id:"shimada1900", sort:"1900-03-20", year:"1900", coords:[34.9918,135.7515], zoom:15,
  date:{en:"1900", ja:"1900年（明治33年）"},
  loc:{en:"Nishi Honganji, Kyoto", ja:"京都・西本願寺"},
  title:{en:"Shimada Kai, the last guard", ja:"島田魁、西本願寺の守衛として"},
  desc:{en:"After his release from captivity, Shimada Kai, the giant sergeant who had followed Hijikata to Hakodate, came back to Kyoto. He tried his hand at small businesses without much success, and then found work as a night guard at Nishi Honganji — the temple whose courtyards the corps had filled with drilling men and gunfire thirty years before.\n\nHe kept the corps' memory there for the rest of his life, and kept the diary in which he had recorded its movements from Kyoto to Hakodate. He died in 1900, aged seventy-two, still in the temple's service.",
        ja:"捕虜の身から解かれた島田魁——土方に従って箱館まで行った大男の伍長——は京へ戻った。小商いを試みたがうまくいかず、やがて西本願寺の夜警の職を得る。三十年前、隊が調練の兵と銃声で境内を満たした、あの寺である。\n\n彼はそこで生涯、隊の記憶を守り、京から箱館までの隊の動きを記した日記を手放さなかった。1900年（明治33年）、七十二歳で、なお寺に仕えたまま世を去った。"},
  people:["shimada"],
  roles:{
    shimada:{en:"Served as a guard at the temple in his last years.", ja:"晩年、寺の守衛を務めた。"}
  },
  legend:{en:"Accounts differ on whether he died at the temple while on duty, as a popular story has it, or at home.",
          ja:"よく語られるように勤務中に寺で亡くなったのか、自宅で亡くなったのかについては、記録によって異なる。"}},

 {id:"otaru", sort:"1913-03-17", year:"1913", coords:[43.2046,141.0020], zoom:13,
  date:{en:"1913", ja:"1913年（大正2年）"},
  loc:{en:"Otaru, Hokkaido", ja:"北海道・小樽"},
  title:{en:"Nagakura tells the story", ja:"永倉新八、語る"},
  desc:{en:"Forty-four years after Hakodate, the Shinsengumi is remembered in Japan, if at all, as a band of murderers who fought the Restoration. In Otaru, a port town in Hokkaido, a reporter for the Otaru Shimbun sits down with an old swordsman living in the town: Sugimura Yoshie, born Nagakura Shinpachi, captain of the 2nd unit. Through the spring of 1913 the paper runs his recollections in instalments, from the Shieikan to the end.\n\nNagakura is one of a handful of survivors who left accounts: Shimada Kai kept a diary; Nishimura Kanefumi, who had watched the corps from Nishi Honganji, wrote a history from the Kyoto side; Nagakura had already written a memoir of his own. His newspaper story, though, is the voice in which most of the corps' famous scenes first reached the public, and almost every later history and novel draws on it. He dies in 1915, aged seventy-five.",
        ja:"箱館から四十四年。新選組は世間で思い出されるとしても、維新に刃向かった人斬り集団としてだった。北海道の港町・小樽で、小樽新聞の記者が、町に暮らす一人の老剣客のもとを訪ねる。杉村義衛——かつての永倉新八、二番組長である。1913年（大正2年）春、新聞は試衛館から最後までの彼の回想を連載した。\n\n記録を残した生き残りは永倉だけではない。島田魁は日記をつけ、西本願寺の寺侍として隊を間近に見た西村兼文は京の側から歴史を書き、永倉自身もすでに手記をまとめていた。それでも、隊の有名な場面の多くが初めて世に届いたのはこの連載の語り口によってであり、のちの歴史書や小説のほとんどがこれに拠っている。永倉は1915年（大正4年）、七十五歳（数え七十七歳）で世を去った。"},
  people:["nagakura","shimada"],
  roles:{
    nagakura:{en:"Told the corps' story to the Otaru Shimbun in 1913 — the source behind most of its famous scenes.", ja:"1913年、小樽新聞に隊の物語を語った。有名な場面の多くの出どころである。"},
    shimada:{en:"His diary of the corps' movements from Kyoto to Hakodate is the other great survivor's record.", ja:"京都から箱館までの隊の動きを記した日記は、生き残りが残したもう一つの重要な記録である。"}
  },
  legend:{en:"Nagakura was telling the story half a century later, as the corps' chief survivor and with his own reputation to protect. Historians treat his account as indispensable and as needing to be checked wherever possible.",
          ja:"永倉が語ったのは半世紀後のことであり、隊の代表的な生き残りとして、自分の名誉を守る立場にもあった。歴史家は彼の証言を欠かせないものとしつつ、できるかぎり裏付けをとるべきものとして扱っている。"}},

 {id:"fujitagoro", sort:"1915-09-28", year:"1915", coords:[37.5006,139.9191], zoom:15,
  date:{en:"September 28, 1915", ja:"1915年9月28日（大正4年）"},
  loc:{en:"Amida-ji, Aizu-Wakamatsu", ja:"会津若松・阿弥陀寺"},
  title:{en:"Saitō Hajime laid to rest in Aizu", ja:"斎藤一、会津に眠る"},
  desc:{en:"Fujita Gorō — Saitō Hajime — dies in Tokyo at the age of seventy-one, nine months after Nagakura. He had served the Meiji state as a policeman and a school guard and lived quietly among the people of Aizu, saying almost nothing of the Shinsengumi.\n\nHe is buried at Amida-ji in Aizu-Wakamatsu, the temple where the domain's war dead of 1868 were finally allowed to be buried after months lying where they fell. The last captain of the corps lies among the people he had refused to abandon.",
        ja:"藤田五郎——斎藤一——が東京で七十一歳で世を去る。永倉の死から九か月後のことだった。明治国家に警察官として、また学校の守衛として仕え、会津の人々のあいだで静かに暮らし、新選組についてはほとんど何も語らなかった。\n\n彼は会津若松の阿弥陀寺に葬られた。1868年の会津の戦死者たちが、倒れた場所に何か月も放置されたのち、ようやく埋葬を許された寺である。隊の最後の組長は、彼が見捨てることを拒んだ人々のあいだに眠っている。"},
  people:["saito"],
  roles:{
    saito:{en:"Died in Tokyo as Fujita Gorō and was buried in Aizu.", ja:"藤田五郎として東京で没し、会津に葬られた。"}
  }}
];
