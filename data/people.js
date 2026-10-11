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
    summary: {en: "The organiser of the Shinsengumi. A farmer's son from the Tama hills, he built and enforced the corps' iron discipline as its \"demon vice-commander,\" kept Kondō at its head, and then remade himself as a modern field commander in the Boshin War, fighting on for a year after his friend's death to the last battle at Hakodate.",
     ja: "新選組の組織者。多摩の農家に生まれ、「鬼の副長」として隊の鉄の規律を作り上げて守らせ、近藤を頭に戴き続けた。戊辰戦争では近代的な野戦指揮官に生まれ変わり、友の死後も一年にわたって戦い続け、箱館の最後の戦いで斃れた。"},
    sections: [
      { h: {en: "Ishida village", ja: "石田村"},
        b: {en: "Hijikata was born on May 31, 1835, the youngest of ten children of a prosperous farming family in Ishida village, Musashi province — today part of Hino, west of Tokyo. His father died of tuberculosis before he was born, and his mother when he was five; he was brought up by his elder brother's household. Family tradition says he was sent to Edo as a boy to apprentice in a large dry-goods shop and came home after a quarrel, the first of several attempts to make a merchant of him that did not take.\n\nAs a young man he travelled the Tama countryside selling the family's patent remedy for bruises and sprains, Ishida sanyaku, with practice gear tied to his pack. His sister Nobu had married Satō Hikogorō, the headman of the post town of Hino, who kept a practice hall for the Tennen Rishin-ryū in his own house. The school's masters came out from Edo to teach there, and there Hijikata came to know Kondō Isami, a year his senior, and the boy prodigy Okita Sōji. In 1859 he formally entered the school under its third master, Kondō Shūsuke.",
            ja: "1835年5月31日（天保6年5月5日）、武蔵国多摩郡石田村（現・東京都日野市）の豪農の家に、十人きょうだいの末子として生まれた。父は彼が生まれる前に労咳で亡くなり、母も五歳のときに世を去ったため、兄の家で育てられる。家伝によれば、少年のころ江戸の大店に奉公に出されたが、いさかいを起こして帰ってきた。彼を商人にしようとする試みは、その後もうまくいかなかった。\n\n青年期には、打ち身やくじきに効く家伝薬「石田散薬」を売って多摩の村々を歩き、荷には稽古道具を括りつけていたという。姉のノブは日野宿の名主・佐藤彦五郎に嫁いでおり、彦五郎は自宅に天然理心流の道場を構えていた。江戸から師範が出稽古に来るその道場で、土方は一つ年上の近藤勇や、少年の天才・沖田総司と知り合う。1859年（安政6年）、三代目・近藤周助のもとで正式に入門した。"} },
      { h: {en: "To Kyoto", ja: "京へ"},
        b: {en: "When the shogunate called for swordsmen to guard the shogun in Kyoto in 1863, Hijikata went west with the rest of Kondō's household as an unranked recruit in the Rōshigumi. When the column turned back, he was among those who stayed, and within months he held the title of vice-commander beside Yamanami Keisuke, with Kondō as one of three commanders.\n\nThe arrangement did not last. The faction of Serizawa Kamo was disgracing the corps, and in the autumn of 1863 Serizawa's lieutenant Niimi Nishiki was forced to commit seppuku and Serizawa himself was killed in his bed at the Yagi house. Most accounts place Hijikata at the head of the killers. From then on the corps belonged to Kondō's household — and its daily running belonged to Hijikata.",
            ja: "1863年（文久3年）、幕府が将軍警護のために京へ剣客を募ると、土方は近藤一門の一人として、無役の浪士組隊士として西へ上った。浪士組が江戸へ引き返したとき、彼は京に残った者の一人となり、数か月のうちに山南敬助と並ぶ副長の地位に就いていた。近藤は三人の局長の一人だった。\n\nこの体制は長続きしなかった。芹沢鴨の一派が隊の名を汚しており、1863年秋、芹沢の腹心・新見錦が切腹を命じられ、芹沢自身も八木家で寝込みを襲われて殺された。多くの記録は、その刺客の先頭に土方を置いている。以後、隊は近藤一門のものとなり、日々の運営は土方の手に握られた。"} },
      { h: {en: "The demon vice-commander", ja: "鬼の副長"},
        b: {en: "In Kyoto Hijikata became the corps' architect. He organised it into numbered units under captains with appointed instructors, ran its intelligence work through the inspectors, and enforced its internal code — under which leaving the corps, private quarrels and raising money without authority could all mean seppuku. Members who broke it died, officers among them: the general secretary Yamanami in 1865, the captain Takeda Kanryūsai in 1867. Hijikata is remembered as the man who demanded those deaths. The nickname \"demon vice-commander\" fits the record, even if the word was later writers' as much as his men's.\n\nOn the night of the Ikedaya in July 1864, he commanded the second search column and arrived to seal off the streets, keeping the late-coming Aizu troops outside so that the credit would be the corps' alone. In 1867, when the corps was made direct retainers of the shogun, the medicine peddler of Ishida village became a shogunal retainer himself.",
            ja: "京で土方は隊の設計者となった。番号を振った組に組長を置き、各種の師範を任じ、監察を通じて情報を集め、局中の法度を守らせた。脱走、私の闘争、勝手な金策は、いずれも切腹に値した。法度を破った者は、幹部であっても死んだ。1865年には総長の山南が、1867年には組長の武田観柳斎が命を落としている。その死を求めた人物として記憶されているのが土方である。「鬼の副長」という呼び名は、隊士たちのものというより後世の書き手のものでもあるが、記録にはよく合っている。\n\n1864年7月の池田屋の夜、彼は第二の探索隊を率い、駆けつけて周囲の通りを固めた。遅れてきた会津藩兵は外に留め、手柄を隊だけのものにした。1867年、隊が幕臣に取り立てられると、石田村の薬売りは自身も将軍の家臣となった。"} },
      { h: {en: "Letters home", ja: "故郷への手紙"},
        b: {en: "Hijikata's letters to his family and friends in Tama show a different man. In one from 1863 he lists, with obvious pleasure, the women of Shimabara, Gion and Osaka who had sent him love letters, and adds a mock-solemn haiku about women who make a patriot forget his duty. Before leaving for Kyoto he had gathered his own verse into a small collection under the pen name Hōgyoku. The poems are earnest and mostly unremarkable — the best known, \"a plum blossom: even one bloom, it is still plum,\" has been teased by readers ever since.\n\nWhat the letters show above all is how much he wanted the people of Hino to know that their boys were doing well. The severity in Kyoto was an instrument he chose. His loyalty to Kondō, the friend he kept at the head of the corps, never wavered.",
            ja: "多摩の家族や友人に宛てた土方の手紙には、別の顔が見える。1863年のある手紙では、島原・祇園・大坂の女たちから恋文が届いたことを、いかにも得意げに書き並べ、「報国の心ころわするる婦人かな」と、おどけた句まで添えている。京へ発つ前には、自作の句を「豊玉」の号で小さな句集にまとめていた。句は真面目で、たいていは平凡である。最も知られた「梅の花一輪咲いても梅は梅」は、以来ずっと読者にからかわれてきた。\n\n手紙が何より示しているのは、自分たち日野の若者がうまくやっていることを、故郷の人々に知ってほしいという強い思いである。京での苛烈さは、彼が選び取った道具だった。隊の頭に据え続けた友・近藤への忠誠は、一度も揺らがなかった。"} },
      { h: {en: "The Hino circle", ja: "日野の後ろ盾"},
        b: {en: "The corps never forgot where it came from, and neither did Tama. Hijikata's brother-in-law Satō Hikogorō, the headman of Hino, and Kojima Shikanosuke, headman of the village of Ono-ji, sent money, news and recruits west, and received in return the long letters that now tell us most of what we know about the corps' first years. When the Kōyō Chinbutai marched through Tama in 1868, Satō raised a small company of local men to go with it, and after the defeat at Katsunuma he had to go into hiding.\n\nThese men were Hijikata's real public. Everything he did in Kyoto, he did partly so that Hino would hear of it.",
            ja: "隊は故郷を決して忘れなかったし、多摩もまた隊を忘れなかった。土方の義兄で日野宿名主の佐藤彦五郎と、小野路村名主の小島鹿之助は、金や知らせや新しい隊士を西へ送り、そのお返しに長い手紙を受け取った。隊の最初の数年についていま私たちが知っていることの多くは、その手紙が伝えている。1868年に甲陽鎮撫隊が多摩を通ったとき、佐藤は地元の若者で小隊（春日隊）を作って加わり、勝沼の敗戦後は身を隠さねばならなかった。\n\nこの人々こそ、土方の本当の観客だった。京での彼の行いの一つ一つは、日野に聞かせるためでもあった。"} },
      { h: {en: "The new war", ja: "新しい戦"},
        b: {en: "The war that began at Toba–Fushimi in January 1868 changed him. With Kondō disabled by a gunshot wound, Hijikata led the corps through the fighting at Fushimi and the rout down the Yodo river, where Inoue Genzaburō was killed. Back in Edo he cut his hair, changed into Western clothes, and told a visitor that from now on war belonged to the gun.\n\nThe next months were defeats. On the march to Kōshū he went to seek reinforcements that never came; at Nagareyama, when Kondō chose to give himself up, the two said goodbye as if it were routine. Hijikata rode to Edo and tried every contact he had to save his friend, without success. He then joined the old shogunate's forces heading north, led the vanguard that stormed Utsunomiya castle, and was shot in the foot when the government army retook it. Recovering in Aizu, he is said to have raised a grave for Kondō at the temple of Tennei-ji.",
            ja: "1868年1月、鳥羽・伏見で始まった戦が彼を変えた。近藤が銃創で動けないなか、土方は伏見での戦いと淀川沿いの敗走を指揮した。井上源三郎はこの敗走のなかで戦死する。江戸に戻ると彼は髪を切り、洋装に改め、訪ねてきた人に、これからの戦は鉄砲の世だと語った。\n\nその後の数か月は敗北の連続だった。甲州への行軍では来ない援軍を求めて奔走し、流山で近藤が投降を選んだとき、二人はいつもと変わらぬ様子で別れた。土方は江戸へ駆け、あらゆる伝手を使って友の命を救おうとしたが、かなわなかった。その後、北へ向かう旧幕府軍に加わり、宇都宮城を攻め落とす先鋒を率い、新政府軍が城を奪い返す戦いで足を撃たれた。会津で療養するあいだ、天寧寺に近藤の墓を建てたと伝わる。"} },
      { h: {en: "The north and Ezo", ja: "奥羽から蝦夷へ"},
        b: {en: "When Aizu's defence collapsed in the autumn of 1868, Hijikata went north to Sendai and joined the fleet of Enomoto Takeaki, while Saitō Hajime and others stayed to fight for Aizu. In Ezo he commanded the column that took Hakodate and Goryōkaku, then led the winter campaign that captured Matsumae castle and cleared the island. When the officers voted for the leaders of their new Republic of Ezo in January 1869, he was chosen as a magistrate of the army, its second-highest land commander.\n\nThat spring, when the government army landed, he held the mountain pass at Futamata against two major assaults and gave it up only when the other roads had fallen. In the weeks before the end, he sent his young page Ichimura Tetsunosuke through the lines with his photograph and a lock of his hair for his family in Hino.",
            ja: "1868年秋に会津の守りが崩れると、斎藤一らが会津のために残って戦うなか、土方は北の仙台へ向かい、榎本武揚の艦隊に加わった。蝦夷地では箱館と五稜郭を取る一隊を率い、続いて冬の作戦で松前城を落として全島を平定した。1869年1月、士官たちが新しい「蝦夷共和国」の首脳を入札で選んだとき、彼は陸軍奉行並、陸軍で二番目の地位に選ばれた。\n\nその春、新政府軍が上陸すると、彼は二股口の峠を守って二度の大攻勢を退け、他の道が破られてはじめてそこを去った。最期の数週間前、彼は小姓の市村鉄之助に、自分の写真と遺髪を託し、包囲を抜けて日野の家族のもとへ届けさせている。"} },
      { h: {en: "Death at Hakodate", ja: "箱館に死す"},
        b: {en: "On June 20, 1869, the government army made its general assault on Hakodate. The town fell quickly, and the battery at Benten Daiba, held in part by the last men of the Shinsengumi, was cut off. Hijikata gathered a small force and rode out through the Ippongi gate to relieve it. By most accounts he was urging his men forward from horseback when he was shot through the abdomen. He died within hours, aged thirty-four. The republic surrendered a week later.\n\nHis body was buried secretly by his comrades, and the place has never been found. A death poem is attributed to him: though his body might rot on the island of Ezo, his spirit would guard his lord in the east.",
            ja: "1869年6月20日（明治2年5月11日）、新政府軍は箱館に総攻撃をかけた。市街はたちまち落ち、新選組の最後の隊士たちが守る弁天台場は孤立した。土方はわずかな兵を集め、救援のために一本木関門から馬で打って出た。多くの記録によれば、馬上から兵を励まして進むところを、腹部を撃ち抜かれた。数時間のうちに息を引き取る。三十四歳（数え三十五歳）だった。共和国はその一週間後に降伏した。\n\n遺体は仲間の手でひそかに葬られ、その場所はいまも見つかっていない。辞世として伝わる歌がある。「たとひ身は蝦夷の島根に朽ちぬとも魂は東の君やまもらむ」。"} },
      { h: {en: "Character", ja: "人物像"},
        b: {en: "Contemporaries describe a man of two registers: merciless in enforcing the code, yet organised, literate and quietly humorous in private. Those who served under him in the north, many of them professional soldiers with no tie to the old corps, came to respect him as a commander who stayed calm under fire and did not waste his men. He never married; the corps was his household. His photograph in Western uniform, the one Ichimura carried home, has made him the most recognisable face of his generation.",
            ja: "同時代の人々が伝えるのは二つの顔である。法度の執行には容赦がなく、一方で私生活では几帳面で、読み書きに通じ、静かなユーモアを持っていた。北の戦場で彼の下に仕えた者の多くは、旧新選組とは縁のない職業軍人だったが、砲火のなかでも落ち着き、兵を無駄に死なせない指揮官として彼を敬うようになった。生涯妻を娶らず、隊が彼の家だった。市村が持ち帰った洋装の写真によって、彼はその世代で最もよく知られた顔となっている。"} },
      { h: {en: "His sword", ja: "愛刀"},
        b: {en: "Hijikata's best-known sword is a blade by Izumi-no-kami Kanesada, a smith of the Aizu domain's line, said to have been given to him in Kyoto. Family tradition holds that it was among the things sent home to Hino in his last weeks, and a Kanesada blade associated with him is kept today at the museum in his birthplace.",
            ja: "土方の愛刀として最も知られるのは、会津の刀工の系譜に連なる和泉守兼定の一振りで、京で贈られたものといわれる。家の伝えでは、最期の数週間に日野へ送り届けられた品の一つで、彼ゆかりの兼定はいまも生家跡の資料館に伝わっている。"} },
      { h: {en: "Remembered", ja: "記憶"},
        b: {en: "For decades after 1869 Hijikata was officially a rebel. In 1888 his family and friends in Tama nevertheless raised a great monument to him and Kondō at Takahata Fudō near his home, its title written by Matsudaira Katamori. In Hakodate, a memorial marks the area near the Ippongi gate where he fell, and visitors still leave flowers there.\n\nThe Hijikata family kept his belongings and opened a small museum at the site of his birthplace in Ishida. His fame beyond the circle of enthusiasts came later, above all through Shiba Ryōtarō's novel Moeyo Ken in the 1960s, which made the farmer's son who became a soldier one of the best-loved figures of Japanese history.",
            ja: "1869年から何十年ものあいだ、土方は公には賊だった。それでも1888年、多摩の家族や友人たちは、生まれた村に近い高幡不動尊に、彼と近藤をたたえる大きな碑を建てた。篆額は松平容保の筆である。箱館では、彼が斃れた一本木関門の付近に碑が立ち、いまも花を手向ける人が絶えない。\n\n土方家は遺品を守り、石田の生家跡に小さな資料館を開いた。彼の名が愛好家の輪を越えて広く知られるようになったのはのちのことで、とりわけ1960年代の司馬遼太郎の小説『燃えよ剣』が、兵士となった農家の子を日本史で最も愛される人物の一人にした。"} }
    ],
    legend: {en: "The famous five articles of the corps' code survive only in later accounts, and the claim that Hijikata wrote them is tradition. So is the scene in which he personally tortured Furutaka Shuntarō before the Ikedaya. The death poem is attributed to him by later writers, and the many theories about where his body lies — at Goryōkaku, in a Hakodate temple, or elsewhere — remain unproven.",
     ja: "有名な五箇条の局中法度は後世の記録にしか残っておらず、それを土方が書いたというのも伝承である。池田屋の前に彼自ら古高俊太郎を拷問したという場面も同様である。辞世の歌は後世の書き手が彼のものとしたもので、遺体の眠る場所——五稜郭、箱館の寺、あるいは別の場所——についての多くの説も、いまだ証明されていない。"}
  },

  /* ------------------------------------------------------------ */
  kondo: {
    kanji: "近", life: "1834–1868", group: "leaders",
    name: {en: "Kondō Isami", ja: "近藤勇"},
    role: {en: "Commander (kyokuchō)", ja: "局長"},
    summary: {en: "Commander of the Shinsengumi and fourth master of the Tennen Rishin-ryū. A farmer's son with a samurai's ambitions, he rose from a suburban dōjō to audiences with daimyō and court nobles and to the rank of a shogunal retainer — and was beheaded as a criminal when the order he served collapsed.",
     ja: "新選組局長、天然理心流四代目宗家。武士の志を抱いた農家の子は、江戸郊外の道場から大名や公家と言葉を交わす立場へ、さらに幕臣の地位へと上り詰めた。そして仕えた体制が崩れたとき、罪人として斬首された。"},
    sections: [
      { h: {en: "A farmer's son", ja: "農家の子"},
        b: {en: "Kondō was born Miyagawa Katsugorō on October 9, 1834, the third son of a well-off farming family in Kami-ishihara village, Musashi province — today part of Chōfu, west of Tokyo. His father was a patron of the Tennen Rishin-ryū and kept a practice hall at home, and the boy took to the sword early. A story told in the family has the teenage Katsugorō and his brother, woken by burglars, waiting until the thieves were leaving with their loads before falling on them — a show of judgment that impressed the school's third master, Kondō Shūsuke.\n\nIn 1849 Shūsuke adopted him as his heir. He took the name Kondō Isami, married Matsui Tsune, the daughter of a samurai family in Edo, in 1860, and in 1861 was installed as fourth master with a mock battle among the school's students at the Rokusho shrine in Fuchū. His daughter Tama was born the following year.",
            ja: "1834年10月9日（天保5年10月9日）、武蔵国多摩郡上石原村（現・調布市）の裕福な農家に、三男・宮川勝五郎として生まれた。父は天然理心流の後援者で自宅に道場を構えており、少年は早くから剣に親しんだ。家に伝わる話では、十代の勝五郎と兄は夜盗に気づいても動かず、盗人が荷を担いで出ていく間際に襲いかかったという。この判断の確かさが、流派三代目の近藤周助を感心させた。\n\n1849年（嘉永2年）、周助は彼を養子に迎える。近藤勇と名乗り、1860年に江戸の武家の娘・松井つねを妻とし、1861年には府中の六所宮で門人たちによる野試合を催して四代目を襲名した。翌年には娘のたまが生まれている。"} },
      { h: {en: "The Shieikan", ja: "試衛館"},
        b: {en: "The Shieikan, the school's small dōjō at Ichigaya in Edo, was poor and its students were mostly farmers from Tama, where the masters taught on circuit. But Kondō drew around him an unusual household: the boy prodigy Okita Sōji as a live-in pupil, the scholarly Yamanami Keisuke, guests from other schools such as Nagakura Shinpachi and Harada Sanosuke, the steady Inoue Genzaburō, and Hijikata Toshizō from Ishida village. When the shogunate called for swordsmen in 1863, Kondō signed on with all of them.",
            ja: "江戸市谷にあった流派の小さな道場・試衛館は貧しく、門人の多くは師範が出稽古に回る多摩の農民だった。だが近藤のまわりには、珍しい顔ぶれの一門が集まっていた。内弟子の天才少年・沖田総司、学のある山南敬助、永倉新八や原田左之助のような他流の食客、実直な井上源三郎、そして石田村の土方歳三である。1863年に幕府が剣客を募ると、近藤は彼らとともにそろって応じた。"} },
      { h: {en: "Household", ja: "家族"},
        b: {en: "Kondō left a wife and a small daughter in Edo when he went west. Tsune kept the house and the school going in his absence, and his letters to her and to the Tama patrons are full of instructions about family and money. By a story often told, he chose her for her plain looks and good sense rather than beauty, saying that a beautiful wife would be a distraction for a man with work to do.\n\nTheir daughter Tama later married Kondō Yūgorō, a son of the Miyagawa family who had been adopted as Kondō's heir, and who became fifth master of the Tennen Rishin-ryū. The school survived its most famous master.",
            ja: "西へ上るとき、近藤は江戸に妻と幼い娘を残した。つねは留守のあいだ家と道場を守り、彼が妻や多摩の後援者に送った手紙には、家のことや金のことについての指図が多く書かれている。よく語られる話では、近藤は美しさではなく、地味な顔立ちと分別を見込んでつねを選び、仕事のある男に美人の妻は気が散るだけだと言ったという。\n\n娘のたまは、のちに近藤の跡継ぎとして養子に入った宮川家の近藤勇五郎と結婚し、勇五郎は天然理心流の五代目となった。流派は、その最も名高い宗家のあとも生き続けたのである。"} },
      { h: {en: "Commander", ja: "局長"},
        b: {en: "In Kyoto Kondō's group refused to return east with the Rōshigumi and was taken under the protection of Aizu. After the death of Serizawa Kamo in the autumn of 1863, Kondō was the corps' undisputed commander and its public face. The Ikedaya raid of July 1864, which he led in person, sword in hand, made him famous across the country. He wrote home proudly that his treasured blade, which he believed to be by the master smith Kotetsu, had come through the fight undamaged.\n\nSuccess changed him, or so some of his oldest comrades thought. That autumn six of them, Nagakura Shinpachi among them, complained in writing to Aizu that Kondō was treating his fellow founders as retainers, and Matsudaira Katamori himself had to reconcile them. Kondō went east to recruit and brought back the learned Itō Kashitarō, whom he gave senior rank; he cultivated Aizu officials and court nobles, and in 1865 and 1866 travelled to Hiroshima with the shogunate's envoys to question Chōshū. In 1867 he was made a direct retainer of the shogun — the dream of his life, months before the shogunate fell.",
            ja: "京で近藤一門は浪士組とともに東へ帰ることを拒み、会津藩の預かりとなった。1863年秋に芹沢鴨が死ぬと、近藤は名実ともに隊の局長となり、その顔となった。1864年7月の池田屋事件では、自ら刀を手に斬り込みを率い、その名は国中に知れ渡る。名工・虎徹の作と信じていた愛刀が、戦いのあとも無事だったことを、彼は誇らしげに故郷へ書き送っている。\n\n成功は彼を変えた——少なくとも古くからの同志のなかにはそう考える者がいた。その秋、永倉新八ら六人が、近藤が同志を家来のように扱っていると会津藩に書面で訴え、松平容保みずからが和解させねばならなかった。近藤は隊士募集のために東へ下り、学識ある伊東甲子太郎を連れ帰って高い地位を与えた。会津の重臣や公家に近づき、1865年と1866年には長州詰問の幕府の使者に随って広島へ赴いた。1867年、彼は幕臣に取り立てられる。生涯の夢がかなったのは、幕府が倒れるわずか数か月前のことだった。"} },
      { h: {en: "A farmer in politics", ja: "政治に関わる農民"},
        b: {en: "Kondō was more than a sword. From 1864 he wrote memorials to the shogunate's officials on national policy, arguing for a hard line against Chōshū and for the shogun's presence in Kyoto, and he moved in the company of Aizu's senior retainers and of court nobles. His letters home describe these meetings with evident pride. Some of the corps' own men, and many outsiders, found it absurd that the head of a police unit raised from rōnin should lecture the great on policy; Kondō saw it as the natural consequence of service. His calligraphy, in the confident hand of a man who had taught himself to write like a samurai, survives in several letters and scrolls.",
            ja: "近藤は剣だけの人ではなかった。1864年からは幕府の役人に国の方針について建白書を書き、長州への強硬策や将軍の在京を説いた。会津の重臣や公家とも交わり、故郷への手紙では、そうした会見のことを誇らしげに書いている。浪人から成る治安部隊の長が、お偉方に政策を説くことを、隊士の一部や多くの外部の人々は滑稽だと考えた。近藤にとっては、務めを果たしていれば当然のことだった。武士らしく書くことを独学で身につけた人の、自信に満ちた筆跡は、いくつもの手紙や書幅に残っている。"} },
      { h: {en: "The fall", ja: "転落"},
        b: {en: "The last months in Kyoto were violent. In December 1867 the corps killed Itō and ambushed his followers at Aburanokōji; days later, survivors of Itō's group shot Kondō from ambush at Sumizome, smashing his right shoulder. He could not fight at Toba–Fushimi and sailed back to Edo with the wounded.\n\nIn Edo the corps was renamed the Kōyō Chinbutai and sent to hold Kōfu castle, with Kondō commanding under the name Ōkubo Tsuyoshi. The march through the Tama homeland turned into a celebration, the government army reached Kōfu first, and at Katsunuma the little force was broken in a few hours. Afterwards, when Kondō asked the survivors to serve him as his retainers, Nagakura and Harada refused and left.",
            ja: "京での最後の数か月は血なまぐさかった。1867年12月、隊は伊東を殺し、油小路でその同志たちを待ち伏せした。数日後、伊東派の生き残りが墨染で近藤を狙撃し、右肩を砕いた。鳥羽・伏見では戦えず、彼は負傷者とともに海路江戸へ戻った。\n\n江戸で隊は甲陽鎮撫隊と改称され、甲府城を押さえるよう命じられた。近藤は大久保剛の名で指揮を執った。多摩の故郷を通る行軍は祝宴に変わり、新政府軍が先に甲府に入り、勝沼で小さな軍勢は数時間で崩れた。その後、近藤が生き残りに自分の家臣となるよう求めると、永倉と原田はこれを拒んで去っていった。"} },
      { h: {en: "Nagareyama and Itabashi", ja: "流山から板橋へ"},
        b: {en: "Rebuilding with new recruits at Nagareyama in April 1868, the corps was surrounded. Kondō, now calling himself Ōkubo Yamato, went to the enemy camp to give himself up, reportedly to give his men the chance to get away. At the government army's headquarters at Itabashi he was recognised by Kanō Michinosuke, a former member who had left with Itō's Goryō Eji.\n\nOn May 17, 1868, after weeks of argument among his captors, he was beheaded at Itabashi as a common criminal, denied the samurai's right to seppuku. He was thirty-three. His head was taken to Kyoto and displayed on the bank of the Kamo river. Graves and memorials to him stand at Itabashi, at Ryūgen-ji in Mitaka near his birthplace, and at Tennei-ji in Aizu.",
            ja: "1868年4月、新たな隊士を集めて流山で再起を図っていた隊は、包囲された。いまは大久保大和と名乗る近藤は、隊士たちを逃がすためと伝わるが、自ら敵陣に出頭した。新政府軍の板橋の本営で、伊東の御陵衛士として隊を去った元隊士・加納道之助に見破られる。\n\n捕らえた側が数週間にわたって議論したのち、1868年5月17日（慶応4年4月25日）、近藤は板橋で、武士の切腹も許されず罪人として斬首された。三十三歳（数え三十五歳）。首は京へ運ばれ、三条河原に晒された。墓や供養塔は板橋、生家に近い三鷹の龍源寺、そして会津の天寧寺にある。"} },
      { h: {en: "Character", ja: "人物像"},
        b: {en: "Generous, gregarious and a natural speaker, Kondō inspired a loyalty in his closest followers that outlasted him: Hijikata fought on for a year after his death, and Nagakura, who had once protested against his arrogance, helped raise the memorial at Itabashi eight years later. Critics inside and outside the corps found him vain and increasingly grand. Both things were true of a farmer's son improvising a samurai's life in an order that was falling apart. A famous party trick has him putting his whole fist into his mouth, in imitation, he said, of the great general Katō Kiyomasa.",
            ja: "気前がよく、人好きで、生まれついての話し上手だった近藤は、側近たちに死後まで続く忠誠を抱かせた。土方は彼の死後一年にわたって戦い続け、かつてその傲慢を訴えた永倉も、八年後には板橋の供養塔の建立に力を尽くした。隊の内外の批判者は彼を虚栄心が強く、ますます尊大になっていくと見た。崩れゆく体制のなかで武士の生き方を即興で作り上げていった農家の子にとって、どちらも真実だった。拳をまるごと口に入れてみせる宴会芸は有名で、加藤清正にあやかったものだと本人は言っていたという。"} },
      { h: {en: "Remembered", ja: "記憶"},
        b: {en: "Kondō has several graves. One stands near the execution ground at Itabashi, raised in 1876 with the help of Nagakura Shinpachi and the physician Matsumoto Ryōjun. Another, at Ryūgen-ji in Mitaka near his birthplace, is said by family tradition to hold his body, recovered secretly by his relatives. A third, at Tennei-ji in Aizu, is the grave Hijikata is said to have raised. In 1888 the people of Tama put up the monument at Takahata Fudō to him and Hijikata together. A marker now stands at his birthplace in Chōfu.",
            ja: "近藤の墓はいくつもある。一つは板橋の刑場の近くにあり、1876年に永倉新八と医師・松本良順の尽力で建てられた。生家に近い三鷹の龍源寺の墓には、親族がひそかに持ち帰った遺体が眠ると家に伝わる。会津の天寧寺の墓は、土方が建てたといわれるものである。1888年には多摩の人々が、彼と土方をともにたたえる碑を高幡不動尊に建てた。調布の生家跡には、いま標柱が立っている。"} }
    ],
    legend: {en: "His treasured \"Kotetsu\" was almost certainly not by Kotetsu; forgeries of the famous smith were everywhere, and there is no sign Kondō ever knew. The burglar story and the fist-in-mouth trick come from family and later anecdote. Several places claim his head, which disappeared from Kyoto after it was displayed; none of the claims can be proven.",
     ja: "愛刀「虎徹」は、ほぼ間違いなく虎徹の作ではない。名工の偽物はいたるところに出回っており、近藤がそれを知っていた形跡もない。夜盗の話や拳を口に入れる芸は、家の言い伝えや後年の逸話に拠る。晒されたのち京から消えた首については、いくつもの寺がその埋葬を伝えているが、いずれも証明はできない。"}
  },

  /* ------------------------------------------------------------ */
  okita: {
    kanji: "沖", life: "1842?–1868", group: "captains",
    name: {en: "Okita Sōji", ja: "沖田総司"},
    role: {en: "Captain, 1st unit", ja: "一番隊組長"},
    summary: {en: "The prodigy of the Shieikan and captain of the first unit — by most accounts the finest sword in the Shinsengumi. Cheerful and boyish off duty, fierce on it, he was cut down not by an enemy but by tuberculosis, dying in hiding in Edo at about twenty-five.",
     ja: "試衛館の天才剣士にして一番組長。多くの証言によれば新選組随一の剣の使い手である。非番のときは明るく子どもっぽく、務めに就けば苛烈だった。彼を斃したのは敵ではなく労咳で、江戸に潜んだまま二十代半ばで世を去った。"},
    sections: [
      { h: {en: "A boy at the Shieikan", ja: "試衛館の少年"},
        b: {en: "Okita was born in the Edo residence of the Shirakawa domain, where his father served as a low-ranking retainer; his birth year is given as 1842 or 1844. His father died when he was small, and the family's position passed to the husband of his elder sister Mitsu, Okita Rintarō. Mitsu, who largely raised him, would remain the person he wrote to most.\n\nAt about nine he entered the Shieikan as a live-in pupil and grew up in Kondō's house, half disciple and half younger brother. His talent was out of the ordinary. He is said to have earned his full licence in his teens and to have acted as the dōjō's head instructor, travelling to teach the farmers of Tama in place of his masters while still a young man.",
            ja: "白河藩の江戸屋敷で、軽輩の藩士の子として生まれた。生年は1842年とも1844年ともいう。幼くして父を亡くし、家督は姉ミツの夫・沖田林太郎が継いだ。彼を育てたのは主にこのミツで、のちに彼が最も多く手紙を書き送った相手も姉だった。\n\n九歳ほどで試衛館の内弟子となり、近藤の家で、弟子とも弟ともつかぬ存在として育つ。その才は並外れていた。十代で免許を得て塾頭を務め、まだ若いうちから師に代わって多摩の農村へ出稽古に通ったと伝わる。"} },
      { h: {en: "To Kyoto", ja: "京へ"},
        b: {en: "He went west with Kondō's household in the Rōshigumi in 1863 — while his brother-in-law Rintarō, who had also enrolled, returned east with Kiyokawa and served in Edo in the Shinchōgumi. At Mibu the Yagi family's children remembered the young swordsman who played tag and blind man's buff with them in the temple grounds. He is named in most accounts among the men who killed Serizawa Kamo that autumn.\n\nAt the Ikedaya in July 1864 he was one of the handful who went in with Kondō. He cut down several men in the first fighting and then collapsed and had to be carried out. In March 1865 he was the rider sent after Yamanami Keisuke, the man who had been like an elder brother to him, and he served as Yamanami's second at his seppuku.",
            ja: "1863年、近藤一門とともに浪士組に加わって西へ上った。同じく浪士組に名を連ねた義兄の林太郎は、清河とともに江戸へ戻り、新徴組に加わっている。壬生では、八木家の子どもたちが、寺の境内で鬼ごっこや目隠し鬼をして遊んでくれた若い剣士のことを覚えていた。その秋の芹沢鴨暗殺では、多くの記録が彼を刺客の一人に挙げている。\n\n1864年7月の池田屋では、近藤とともに斬り込んだ数人の一人だった。最初の斬り合いで数人を斬ったのち倒れ、運び出された。1865年3月には、兄のように慕った山南敬助を追う使者となり、その切腹では介錯を務めた。"} },
      { h: {en: "Captain of the first unit", ja: "一番組長"},
        b: {en: "When the corps was organised into units in 1865, Okita took the first — the unit that went in first. He was also one of its instructors in swordsmanship, and accounts agree that the sunny young man became short-tempered and severe the moment he took up a practice sword; members found his lessons rougher than Kondō's. Tradition credits him with a three-stage thrust, the sandan-zuki, in which the strikes landed almost as one.",
            ja: "1865年に隊が組に編成されると、沖田は一番組——真っ先に斬り込む組——を任された。剣術師範の一人でもあり、明るい若者が竹刀を握ったとたんに短気で厳しくなったことは、多くの証言が一致して伝えている。隊士たちは、彼の稽古は近藤のそれより荒いと感じていた。伝承によれば、三度の突きがほとんど一度に届く「三段突き」を得意としたという。"} },
      { h: {en: "Illness", ja: "病"},
        b: {en: "Tuberculosis, the disease that had killed so many in Edo, took hold of him in the corps' last Kyoto years. By the end of 1867 he could no longer serve. After Kondō was shot at Sumizome in January 1868 the two were sent down to Osaka together to be treated by the shogunate's physician Matsumoto Ryōjun, and Okita sailed back to Edo with the wounded after Toba–Fushimi.\n\nIn Edo he was placed in Ryōjun's care. By tradition he set out with the Kōyō Chinbutai in March but could go no further than the first stages of the road. He was then hidden in the house of a gardener in Sendagaya, on the outskirts of the city, as the new government's army occupied Edo.",
            ja: "江戸で多くの命を奪っていた労咳が、京都時代の終わりに彼を捉えた。1867年の暮れには、もう務めを果たせなかった。1868年1月に近藤が墨染で狙撃されると、二人はそろって大坂へ送られ、幕府の医師・松本良順の治療を受ける。鳥羽・伏見の後、沖田は負傷者とともに海路江戸へ戻った。\n\n江戸では良順の手に預けられた。伝えによれば、3月に甲陽鎮撫隊とともに出発したが、街道の最初の宿場より先へは進めなかったという。その後、新政府軍が江戸を押さえるなか、彼は郊外の千駄ヶ谷にある植木屋の家にかくまわれた。"} },
      { h: {en: "Death", ja: "最期"},
        b: {en: "Okita died there on July 19, 1868. Those caring for him had kept Kondō's execution, two months earlier, from him; he is said to have asked after his master to the end. He was about twenty-five. He is buried at Senshō-ji, a temple in Azabu associated with his family; for years the grave was closed to the public because of the numbers his legend drew.",
            ja: "1868年7月19日（慶応4年5月30日）、沖田はその家で息を引き取った。看病する人々は、二か月前の近藤の処刑を彼に伏せていた。最後まで師のことを尋ねていたという。二十五歳前後だった。墓は沖田家ゆかりの麻布・専称寺にある。その伝説が呼び寄せる人の多さゆえに、長いあいだ墓は非公開とされていた。"} },
      { h: {en: "Family and letters", ja: "家族と手紙"},
        b: {en: "Several of Okita's letters survive, most of them to Satō Hikogorō in Hino and to his family: short, cheerful, apologetic about not writing more, full of greetings to people at home. They show a young man who stayed close to the Tama circle that had raised him.\n\nHis sister Mitsu and her husband Rintarō went north with the Shinchōgumi to the Shōnai domain when Edo fell, and settled there. Mitsu lived until 1907 and was one of the few people who could still describe her brother as he had been.",
            ja: "沖田の手紙はいくつか残っている。多くは日野の佐藤彦五郎やその家族に宛てたもので、短く、明るく、筆無精を詫び、故郷の人々への挨拶にあふれている。彼を育てた多摩の人々と、最後まで近しくあり続けた若者の姿がそこにある。\n\n姉のミツと夫の林太郎は、江戸が落ちると新徴組とともに北の庄内藩へ移り、そこに落ち着いた。ミツは1907年（明治40年）まで生き、在りし日の弟の姿を語ることのできた数少ない一人だった。"} },
      { h: {en: "The man and the legend", ja: "実像と伝説"},
        b: {en: "Those who knew him remembered a tall, wiry young man with a dark complexion and a plain face, fond of jokes and of children, who laughed easily and was serious only with a sword in his hand. The beautiful, doomed youth of novels, manga and film is a later creation. The core of the legend — a once-in-a-generation talent extinguished before he was thirty — is entirely historical.",
            ja: "彼を知る人々が覚えていたのは、背が高く痩せた、色の浅黒い平凡な顔立ちの青年だった。冗談と子どもが好きで、よく笑い、真剣になるのは剣を手にしたときだけだった。小説や漫画や映画に描かれる、美しく薄命の若者は後世の創作である。とはいえ伝説の芯——一世代に一人の才能が、三十を前に消えた——は、まぎれもない史実である。"} },
      { h: {en: "In fiction", ja: "物語のなかの沖田"},
        b: {en: "Okita's modern image was made in the 20th century. Shimozawa Kan's chronicles of the corps in the late 1920s collected memories and added colour; Shiba Ryōtarō's novels of the 1960s gave him the gentle, ironic, doomed character that films, television and later manga built on. By the end of the century he had become one of the most portrayed figures of the era — usually played by an actor much better-looking than the man his contemporaries described.",
            ja: "沖田の現代的なイメージは20世紀に作られた。1920年代末の子母澤寛の新選組三部作は人々の記憶を集め、色を添えた。1960年代の司馬遼太郎の小説は、彼に穏やかで皮肉っぽく、死を運命づけられた人物像を与え、映画やテレビ、のちの漫画がそれを土台にした。世紀の終わりには、幕末で最も多く描かれる人物の一人となっていた。たいていは、同時代人が語った本人よりずっと美しい俳優が演じている。"} }
    ],
    legend: {en: "The image of Okita coughing blood at the Ikedaya comes from later fiction; Nagakura says only that he fell ill during the fight, and heatstroke is a common modern reading. The sandan-zuki, the black cat he failed to cut in his last days, and the beautiful face all belong to tradition or invention. Even his birth year is uncertain.",
     ja: "池田屋で血を吐く沖田の姿は後世の創作に由来する。永倉は戦いの最中に病に倒れたとしか書いておらず、現代では熱中症とみる説が多い。三段突き、最晩年に斬れなかった黒猫、美しい顔立ちは、いずれも伝承か創作である。生年さえ確かではない。"}
  },

  /* ------------------------------------------------------------ */
  saito: {
    kanji: "斎", life: "1844–1915", group: "captains",
    name: {en: "Saitō Hajime", ja: "斎藤一"},
    role: {en: "Captain, 3rd unit", ja: "三番隊組長"},
    summary: {en: "Captain of the third unit and the corps' most enigmatic figure — swordsman, instructor, and Kondō's spy inside Itō's breakaway group. He chose to stay and fight for Aizu rather than go north, survived its fall, and lived a second life as the Tokyo policeman Fujita Gorō, dying in 1915.",
     ja: "三番組長にして、隊で最も謎めいた人物。剣客であり、師範であり、伊東派に送り込まれた近藤の間者でもあった。北へ去るより会津のために残って戦うことを選び、その落城を生き延び、東京の警察官・藤田五郎として第二の人生を送って1915年に世を去った。"},
    sections: [
      { h: {en: "Origins", ja: "生い立ち"},
        b: {en: "Saitō was born in Edo in 1844 as Yamaguchi Hajime. His father had been a foot soldier of the Akashi domain who bought his way into the lowest rank of shogunal retainers. Almost nothing is known of his youth. A family tradition says that around 1862 he killed a man of hatamoto rank in a quarrel and fled to Kyoto, where he sheltered with a swordsman's family. Even his sword school is uncertain; sources name an Ittō-ryū lineage or Mugai-ryū. He seems to have known the men of the Shieikan before any of them went west.",
            ja: "1844年、江戸で山口一として生まれた。父はもと明石藩の足軽で、御家人株を買って幕府の最下級の家臣となった人である。少年時代のことはほとんどわかっていない。家の伝えによれば、1862年ごろ口論から旗本を斬り、京へ逃れて剣客の家に身を寄せたという。流派さえはっきりせず、一刀流系とも無外流ともいわれる。一門が上洛する前から、試衛館の人々とは顔見知りだったらしい。"} },
      { h: {en: "The third unit", ja: "三番組"},
        b: {en: "He joined the newly formed corps in Kyoto in 1863, still in his teens, and was soon an assistant vice-commander. At the Ikedaya in 1864 he served in Hijikata's column; that autumn he was one of the six members who signed the complaint against Kondō to Aizu. When the corps was organised into units in 1865 he took the third, and he was one of its instructors in swordsmanship.\n\nThe corps used him for its darkest work. He is linked, on evidence of varying strength, to several of its internal killings. Whether or not each attribution is true, the leadership trusted him with matters it trusted to few others.",
            ja: "1863年、京で結成されたばかりの隊に十代で加わり、まもなく副長助勤となる。1864年の池田屋では土方隊に属し、その秋には近藤を会津藩に訴えた六人の一人として建白書に名を連ねた。1865年に隊が組に編成されると三番組長となり、剣術師範も務めた。\n\n隊は彼に最も暗い仕事を任せた。隊内での幾つかの粛清に、根拠の強弱はあれ、その名が結びつけられている。一つ一つが事実かどうかはともかく、幹部はほかの者にはめったに任せないことを彼に任せていた。"} },
      { h: {en: "The spy", ja: "間者"},
        b: {en: "In the spring of 1867 Saitō left with Itō Kashitarō's party to become one of the Goryō Eji, the guards of the late emperor's tomb. In late autumn he came back, carrying word that Itō meant to kill Kondō. Within weeks the corps had killed Itō and ambushed his followers at Aburanokōji. Saitō returned to duty under a new name, Yamaguchi Jirō, and a few weeks later commanded the corps' guard over the Kii official Miura Kyūtarō when Tosa men attacked them at the Tenmaya inn.",
            ja: "1867年春、斎藤は伊東甲子太郎の一派とともに隊を去り、先帝の御陵を守る御陵衛士の一人となった。晩秋、伊東が近藤の暗殺を企てているという報を携えて戻ってくる。数週間のうちに、隊は伊東を殺し、油小路でその同志たちを待ち伏せした。斎藤は山口次郎と名を改めて隊務に戻り、その数週間後には、紀州藩士・三浦休太郎の護衛を率いて、天満屋で土佐の者たちの襲撃を受けている。"} },
      { h: {en: "For Aizu", ja: "会津のために"},
        b: {en: "Saitō fought at Toba–Fushimi and at Katsunuma, then went ahead to Aizu with the corps' wounded. With Hijikata injured, he commanded the corps at Shirakawa in the summer of 1868 and in the fighting that followed. When the leaders decided that autumn to leave Aizu and continue the war from the north, Saitō refused, reportedly saying that to abandon Aizu in its extremity would betray all that was right. A handful of men stayed with him. Attacked at Nyoraidō outside Wakamatsu, the group was scattered and reported wiped out, but Saitō survived and fought on until Aizu surrendered in November.\n\nHe went into captivity with the domain's men, and when the defeated domain was moved to Tonami, at the northern tip of Honshu, he went with it.",
            ja: "斎藤は鳥羽・伏見と勝沼で戦い、隊の負傷者を連れて先に会津へ向かった。土方が負傷しているあいだ、1868年夏の白河とそれに続く戦いで隊を率いた。その秋、首脳たちが会津を離れて北で戦い続けることを決めると、斎藤はこれを拒んだ。会津の危急に際してこれを見捨てるのは義に背く、と言ったと伝わる。わずかな者が彼とともに残った。若松郊外の如来堂で襲われた一隊は四散し、全滅したと伝えられたが、斎藤は生き延び、11月の会津降伏まで戦い続けた。\n\n藩士たちとともに謹慎の身となり、敗れた藩が本州北端の斗南へ移されると、斎藤もそれに従った。"} },
      { h: {en: "Fujita Gorō", ja: "藤田五郎"},
        b: {en: "Saitō spent the rest of his life among Aizu people. Under the name Fujita Gorō he married Takagi Tokio, the daughter of an Aizu retainer, in 1874, with the domain's former lord Matsudaira Katamori standing as the senior go-between. That year he joined the new Tokyo police. In the Satsuma Rebellion of 1877 he served with the police units sent to Kyushu and was wounded in action — fighting Satsuma once more, this time on the government's side.\n\nAfter leaving the police he worked as a guard and clerk at the Tokyo Higher Normal School and then at the Women's Higher Normal School. He died in Tokyo on September 28, 1915, and is buried at Amida-ji in Aizu-Wakamatsu. Family tradition says he died seated formally in the alcove of his home.",
            ja: "斎藤は余生を会津の人々のあいだで送った。藤田五郎の名で、1874年（明治7年）に会津藩士の娘・高木時尾と結婚する。上仲人を務めたのは旧藩主・松平容保だった。同じ年、彼は創設まもない東京の警視庁に入る。1877年の西南戦争では、九州へ送られた警視隊に加わって戦い、負傷した。今度は政府の側として、もう一度薩摩と戦ったのである。\n\n警察を退いたのちは、東京高等師範学校、ついで女子高等師範学校で守衛や庶務の仕事に就いた。1915年（大正4年）9月28日に東京で没し、会津若松の阿弥陀寺に葬られている。家の伝えでは、自宅の床の間で正座したまま息を引き取ったという。"} },
      { h: {en: "The silent survivor", ja: "語らなかった生き残り"},
        b: {en: "Unlike Nagakura, Saitō left no memoir, gave no interviews and, as far as anyone knows, never told the corps' story to an outsider. What survives of his own voice comes from his family and a few acquaintances, and amounts to very little. He and Tokio had three sons; the eldest, Tsutomu, became an army officer. In Tokyo he was remembered as a tall, quiet man who drank, kept to himself, and went to Aizu gatherings.\n\nThat silence is why he has been reinvented so often. Novelists, film-makers and manga artists have made him a cynic, a killer, a sentimental loyalist and a master of a sword technique no one ever saw him use. The record supports only a few things firmly: that he served the corps in its most confidential work, that he chose Aizu over his own survival in 1868, and that he lived out his life among the people he had chosen.",
            ja: "永倉と違って、斎藤は回想録を残さず、聞き書きにも応じず、知られるかぎり、隊の話を外部の人間に語ったこともなかった。彼自身の言葉として残っているのは、家族やわずかな知人が伝えたものだけで、それもごくわずかである。時尾とのあいだに三人の息子があり、長男の勉は陸軍の将校になった。東京では、背が高く寡黙で、酒をたしなみ、人付き合いは少なく、会津の人々の集まりには顔を出す人として記憶されていた。\n\nその沈黙ゆえに、彼は何度も作り直されてきた。小説家や映画作家や漫画家は、彼を皮肉屋に、人斬りに、情に厚い忠義者に、誰も使うところを見たことのない剣技の達人に仕立てた。記録がはっきり裏付けるのは、わずかなことだけである。隊の最も機密の仕事に携わったこと、1868年に自らの生き残りより会津を選んだこと、そして自ら選んだ人々のあいだで生涯を終えたこと。"} }
    ],
    legend: {en: "The \"left-handed thrust\" associated with Saitō is fiction, popularised by 20th-century novels and manga; no contemporary source describes his technique. Treat detailed accounts of his killings within the corps with caution — he left almost no testimony of his own, which is exactly why fiction found him so irresistible. Whether he went into the Goryō Eji as a planted spy from the start is also unproven.",
     ja: "斎藤といえば左片手突き、というイメージは、20世紀の小説や漫画が広めた創作で、彼の剣技を記した同時代の史料はない。隊内での粛清についての詳しい話も、慎重に扱うべきである。彼はほとんど何も語り残さなかった。だからこそ創作者たちは彼に惹きつけられたのである。御陵衛士に最初から間者として送り込まれていたのかどうかも、証明されてはいない。"}
  },

  /* ------------------------------------------------------------ */
  nagakura: {
    kanji: "永", life: "1839–1915", group: "captains",
    name: {en: "Nagakura Shinpachi", ja: "永倉新八"},
    role: {en: "Captain, 2nd unit", ja: "二番隊組長"},
    summary: {en: "Captain of the second unit and, by his peers' reckoning, perhaps the strongest pure swordsman in the corps. He fought through the Ikedaya at Kondō's side, told Kondō to his face when he thought him wrong, refused to become his retainer, and survived everything to become the Shinsengumi's great storyteller.",
     ja: "二番組長。仲間たちの見立てでは、純粋な剣の腕では隊で最も強かったかもしれない。池田屋では近藤の傍らで戦い抜き、近藤が誤っていると思えば面と向かって言い、その家臣となることを拒み、すべてを生き延びて新選組の偉大な語り部となった。"},
    sections: [
      { h: {en: "A Matsumae swordsman", ja: "松前藩の剣客"},
        b: {en: "Nagakura was born on May 23, 1839, in the Edo residence of the Matsumae domain, the son of a retainer with a stipend of 150 koku — a respectable samurai house. Sword-mad from boyhood, he trained in Shindō Munen-ryū and earned his full licence in his late teens. Then, unwilling to spend his life at a desk, he left the domain's service to live for the sword — in effect deserting his hereditary place. He travelled from dōjō to dōjō to test himself, and settled as a guest at Kondō's Shieikan, where, he later wrote, the food was poor but the company suited him.",
            ja: "1839年5月23日（天保10年4月11日）、松前藩の江戸屋敷で、百五十石取りの藩士の子として生まれた。れっきとした武士の家である。幼いころから剣に夢中で、神道無念流を学び、十代の終わりに免許を得た。そして机に向かって一生を送ることを嫌い、剣に生きるために藩を離れる。代々の家禄を事実上捨てたのである。腕を試すために道場を渡り歩き、近藤の試衛館に食客として落ち着いた。のちに彼は、飯はまずいが仲間は性に合った、と書いている。"} },
      { h: {en: "Kyoto", ja: "京都"},
        b: {en: "He went west in the Rōshigumi in 1863, stayed in Kyoto with Kondō, and became an assistant vice-commander. He was in the party that brawled with the Osaka sumo wrestlers that summer. At the Ikedaya in July 1864 he was one of the handful who went in with Kondō and one of the few still fighting at the end: his sword was broken, his hand cut open, and his chain mail saved his life.\n\nThat autumn, disgusted by what he saw as Kondō's growing lordliness, he led five comrades in submitting a written complaint to Aizu, risking their lives on it. Katamori reconciled the two sides. It says much about the corps that Nagakura survived the protest and kept his rank: its core was still a band of sworn comrades, not a lord and his servants. In 1865 he took command of the second unit, and he fought in the street battle at Aburanokōji in 1867.",
            ja: "1863年、浪士組の一員として西へ上り、近藤とともに京に残って副長助勤となった。その夏、大坂で力士と乱闘した一隊にも加わっている。1864年7月の池田屋では、近藤とともに斬り込んだ数人の一人で、最後まで戦っていた数少ない一人だった。刀は折れ、手を斬られ、鎖帷子に命を救われた。\n\nその秋、近藤のますます殿様じみた振る舞いに嫌気がさし、五人の同志とともに、命を懸けて会津藩に建白書を出した。容保が双方を和解させる。永倉が処罰されずに地位を保ったことは、この隊のありようをよく物語っている。その核は、まだ主君と家来ではなく、誓い合った同志の集まりだったのである。1865年には二番組長となり、1867年には油小路の市街戦で戦った。"} },
      { h: {en: "The war and the break", ja: "戦と決別"},
        b: {en: "Nagakura fought at Fushimi in January 1868 and in the rearguard at Katsunuma. Afterwards, when Kondō asked the survivors to serve him as his retainers, he refused: he had joined as Kondō's comrade, not his vassal. With Harada Sanosuke he left to form a new unit, the Seiheitai, and fought on against the new government in the north Kantō and towards Aizu. He never saw Kondō again.",
            ja: "1868年1月、永倉は伏見で戦い、勝沼では殿軍を務めた。その後、近藤が生き残りに自分の家臣となるよう求めると、彼はこれを拒んだ。近藤の同志として加わったのであって、家来になったのではない、と。原田左之助とともに隊を離れて靖兵隊を作り、北関東から会津方面で新政府軍と戦い続けた。近藤とは二度と会うことはなかった。"} },
      { h: {en: "Sugimura Yoshie", ja: "杉村義衛"},
        b: {en: "Pardoned after the war, Nagakura returned to the service of the Matsumae domain and was adopted into the family of a domain physician, Sugimura, taking the name Sugimura Yoshie. In 1876, with the help of the physician Matsumoto Ryōjun, he raised the memorial at Itabashi to Kondō, Hijikata and the corps' dead. He later spent several years teaching swordsmanship to the guards of Kabato prison in Hokkaido, lived for a time in Tokyo, and settled in old age in Otaru.\n\nHe wrote his memories down more than once. A manuscript account of the corps' early years, lost for over a century, was rediscovered in 1998. In 1913 the Otaru Shimbun ran his recollections as a newspaper serial, and that story — vivid, partisan and indispensable — became the source of most of the corps' famous scenes. He died in Otaru on January 5, 1915, aged seventy-five, the same year as Saitō.",
            ja: "戦後赦された永倉は松前藩に帰参し、藩医・杉村家の養子となって杉村義衛と名乗った。1876年（明治9年）には医師・松本良順の助けを得て、板橋に近藤、土方と隊士たちの供養塔を建てている。のちには北海道の樺戸集治監で数年にわたり看守に剣術を教え、東京で暮らした時期を経て、晩年は小樽に落ち着いた。\n\n彼は自らの記憶を一度ならず書き残している。隊の初期を記した手記は百年以上行方がわからなかったが、1998年に再発見された。1913年（大正2年）には小樽新聞がその回想を連載し、生き生きとして、身びいきもあり、それでいて欠かすことのできないその物語が、隊の有名な場面の多くの出どころとなった。1915年（大正4年）1月5日、小樽で没する。七十五歳。斎藤と同じ年だった。"} },
      { h: {en: "A daughter in Kyoto", ja: "京の娘"},
        b: {en: "In Kyoto Nagakura had a companion, Kotsune, a woman of the Shimabara quarter, and with her a daughter, Iso, born around the end of the corps' Kyoto years. Kotsune died soon afterwards, and when Nagakura left with the corps the child was left in the care of others. By family accounts he looked for her for decades, and found her late in life: she had become an actress. It is one of the few stories of the corps' men that ends with something recovered rather than lost.",
            ja: "京で永倉には、島原の女性・小常という伴侶がいて、京都時代の終わりごろに娘の磯が生まれた。小常はまもなく亡くなり、隊とともに京を去るとき、子は人に預けられた。家の伝えによれば、永倉は何十年も娘を探し続け、晩年になって見つけ出した。娘は女優になっていた。隊の男たちの物語のなかで、失われたものではなく取り戻されたもので終わる、数少ない話の一つである。"} },
      { h: {en: "Character", ja: "人物像"},
        b: {en: "Frank to the point of rudeness, loyal to his comrades rather than to rank, and proud of his sword to the end, Nagakura is the corps' most human witness. A family story has him as an old man, jostled by young toughs outside a theatre in Otaru, freezing them where they stood with a single look.",
            ja: "無礼すれすれに率直で、身分より仲間に忠実で、最後まで剣を誇りとした永倉は、隊の最も人間味のある証人である。家の伝えでは、老いた彼が小樽の劇場の前で若いならず者たちに絡まれ、ひと睨みでその場に立ちすくませたという。"} }
    ],
    legend: {en: "Nagakura's recollections are the backbone of Shinsengumi history and also its most coloured source: written decades later by a survivor with his own reputation to protect, they sometimes enlarge his part and soften his comrades' faults. His story of trying to let Tōdō Heisuke escape at Aburanokōji is a well-known example that cannot be checked.",
     ja: "永倉の回想は新選組史の背骨であると同時に、最も色のついた史料でもある。数十年後に、自分の名誉を守る立場にある生き残りが書いたもので、自分の役割を大きく、仲間の欠点を和らげて描くことがある。油小路で藤堂平助を逃がそうとしたという話は、その確かめようのない例としてよく知られている。"}
  },

  /* ------------------------------------------------------------ */
  harada: {
    kanji: "原", life: "1840–1868", group: "captains",
    name: {en: "Harada Sanosuke", ja: "原田左之助"},
    role: {en: "Captain, 10th unit", ja: "十番隊組長"},
    summary: {en: "Captain of the tenth unit and the corps' great spearman — hot-blooded, quick to laugh and quick to fight, with a scar across his belly from a seppuku attempt that he showed off at parties. One of the few members with a wife and child, he died at twenty-eight in a battle he had no obligation to join.",
     ja: "十番組長にして隊随一の槍の使い手。血の気が多く、よく笑い、すぐに喧嘩をした。腹には切腹しかけたときの傷があり、宴席でそれを見せびらかした。妻子を持った数少ない隊士の一人で、加わる義務もなかった戦で二十八歳の命を落とした。"},
    sections: [
      { h: {en: "The scar", ja: "腹の傷"},
        b: {en: "Harada was born in 1840 in Matsuyama, in Iyo province on the island of Shikoku, and served the Matsuyama domain as a chūgen — an attendant, below samurai rank. The story he told all his life was that a samurai once mocked him as a man who did not even know how to cut his belly, and that the young Harada drew his blade and slashed his own abdomen on the spot to show him. He survived, and is said to have taken as his crest a circle with a single line through it, after the scar.",
            ja: "1840年（天保11年）、四国の伊予国松山に生まれ、松山藩に中間——武士より下の奉公人——として仕えた。生涯語り続けた話がある。ある侍に、腹の切り方も知らぬ下郎と嘲られ、若い原田はその場で刀を抜いて自分の腹を切ってみせた、というのである。彼は生き延び、その傷にちなんで「丸に一文字」を家紋にしたと伝わる。"} },
      { h: {en: "The spear", ja: "槍"},
        b: {en: "He left the domain, and in Osaka is said to have learned the spear from Tani Sanjūrō, later a fellow captain in the corps. Drifting east, he joined the circle of fighters around Kondō's Shieikan as a guest, and went west with them in the Rōshigumi in 1863.",
            ja: "藩を去った原田は、大坂で、のちに隊で同じく組長となる谷三十郎から槍を学んだと伝わる。東へ流れて試衛館の食客となり、1863年、一門とともに浪士組に加わって西へ上った。"} },
      { h: {en: "Kyoto", ja: "京都"},
        b: {en: "Harada fought in nearly every major action of the Kyoto years: the killing of Serizawa, the cordon outside the Ikedaya, the Kinmon fighting, the ambush at the Sanjō bridge in 1866, where his squad fell on Tosa men tearing down the shogunate's notice board, and the street battle at Aburanokōji. In 1864 he was one of the six who protested against Kondō to Aizu. From 1865 he commanded the tenth unit.\n\nIn Kyoto he married a local woman, Masa, and had a son, Shigeru, living with them outside the barracks with the leadership's permission — a settled domestic life that almost no one else in the corps attempted.",
            ja: "原田は京都時代の主な戦いのほとんどに加わった。芹沢暗殺、池田屋の包囲、禁門の変、1866年の三条大橋——幕府の制札を引き倒す土佐の者たちに彼の隊が斬りかかった——そして油小路の市街戦である。1864年には、近藤を会津藩に訴えた六人の一人だった。1865年からは十番組を率いた。\n\n京では町家の娘・まさと結婚して息子・茂をもうけ、幹部の許しを得て屯所の外で家族とともに暮らした。隊のなかで、ほかにほとんど誰も望まなかった落ち着いた家庭の暮らしである。"} },
      { h: {en: "Ryōma", ja: "龍馬暗殺"},
        b: {en: "When Sakamoto Ryōma and Nakaoka Shintarō were assassinated in Kyoto in December 1867, suspicion fell on the Shinsengumi, and on Harada in particular: a scabbard found at the scene was said to be his, and the dying Nakaoka was reported to have heard the attackers use a word of the Iyo dialect. The evidence was thin. Later testimony points to the Mimawarigumi, another shogunal police unit, as the killers.",
            ja: "1867年12月、坂本龍馬と中岡慎太郎が京で暗殺されると、疑いは新選組に、とりわけ原田に向けられた。現場に残された鞘が彼のものだとされ、瀕死の中岡が、刺客の口から伊予の言葉を聞いたと伝えられたからである。証拠は薄かった。後年の証言は、もう一つの幕府の治安組織・見廻組を下手人としている。"} },
      { h: {en: "Death at Ueno", ja: "上野に死す"},
        b: {en: "After Katsunuma in 1868, Harada left Kondō with Nagakura to form the Seiheitai. But on the march north he turned back towards Edo — some say to see his wife and son once more. There he joined the Shōgitai, the force of shogunal loyalists holding Ueno, and was badly wounded in the one-day Battle of Ueno on July 4, 1868. He died two days later, aged twenty-eight. Masa and Shigeru, far away in Kyoto, learned of it only later.",
            ja: "1868年の勝沼の後、原田は永倉とともに近藤のもとを去り、靖兵隊に加わった。だが北への行軍の途中で江戸へ引き返す。妻子にもう一度会うためだったともいう。江戸で上野に立てこもる旧幕臣の彰義隊に加わり、1868年7月4日（慶応4年5月15日）の一日だけの上野戦争で深手を負った。二日後に死去、二十八歳（数え二十九歳）だった。遠く京にいたまさと茂がそれを知ったのは、のちのことである。"} },
      { h: {en: "Masa", ja: "まさ"},
        b: {en: "Masa outlived her husband by more than sixty years. She raised their son in Kyoto, and in old age her memories of Harada were recorded by the writer Shimozawa Kan: a cheerful, affectionate man who came home from the barracks to play with the baby, and who left for the east in 1868 promising that he would send for them. Hers is one of the very few accounts of a Shinsengumi man at home rather than at work.",
            ja: "まさは夫より六十年以上長く生きた。京で息子を育て、晩年には作家の子母澤寛がその思い出を聞き書きしている。そこに語られるのは、屯所から帰ると赤ん坊をあやした、明るく情の深い男であり、1868年に、必ず呼び寄せると約束して東へ発った男である。仕事の場ではなく家庭での新選組隊士の姿を伝える、ごく数少ない証言の一つである。"} }
    ],
    legend: {en: "A persistent legend holds that Harada survived Ueno, crossed to the continent and reappeared decades later as a mounted bandit chief in Manchuria. It is romance, not history — but it says something about how little anyone wanted this particular man to be dead. The seppuku story, the crest, his training under Tani and his joining the Shōgitai all rest largely on later accounts.",
     ja: "原田は上野を生き延びて大陸へ渡り、数十年後に満州の馬賊の頭目として現れた、という伝説が根強く語られている。歴史ではなく物語だが、誰もがこの男だけは死んでいてほしくないと思ったことを物語っている。切腹の話、家紋、谷のもとでの修業、彰義隊への参加も、多くは後年の記録に拠る。"}
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
    summary: {en: "The corps' gentle, scholarly general secretary — a licensed Hokushin Ittō-ryū swordsman whom the people of Mibu called \"Yamanami the Buddha.\" Increasingly at odds with the corps' direction, he left it, came back without resistance when he was overtaken, and died by its code, mourned even by those who enforced it.",
     ja: "隊の温厚で学識ある総長。北辰一刀流の免許を持つ剣客で、壬生の人々には「仏の山南」と慕われた。隊の行く末としだいに相容れなくなって隊を去り、追いつかれると抗わずに戻り、隊の法度によって死んだ。それを執行した者たちでさえ、その死を悼んだ。"},
    sections: [
      { h: {en: "Origins", ja: "生い立ち"},
        b: {en: "Yamanami's early life is thinly documented. By tradition he was born in 1833 into a retainer family of the Sendai domain in the north. He trained in Hokushin Ittō-ryū, the polished, modern sword school of the Chiba family in Edo, and was also well read — a man who could argue a point of scholarship as well as fence. One story has him losing a bout to Kondō and, as wandering swordsmen sometimes did, attaching himself to the man who had beaten him. By the early 1860s he was a guest at the Shieikan, the even-tempered elder among its fighters.",
            ja: "山南の前半生はほとんど記録がない。伝えによれば、1833年（天保4年）に北の仙台藩の藩士の家に生まれた。江戸の千葉家が率いる洗練された新しい流派・北辰一刀流を学び、学問にも通じていた。剣だけでなく学問の議論もできる人物だったのである。ある話では、近藤との立ち合いに敗れ、諸国を巡る剣客がときにそうしたように、自分を負かした相手のもとに身を寄せたという。1860年代の初めには試衛館の食客となっており、荒くれ者たちのなかで落ち着いた年長者だった。"} },
      { h: {en: "Vice-commander", ja: "副長"},
        b: {en: "He went west with Kondō's household in 1863 and in the corps' first months held the title of vice-commander alongside Hijikata. He is named in several accounts among the men who killed Serizawa Kamo that autumn — the gentle man's darkest night. In the reorganisation that followed he was given the grand title of general secretary, ranking beside Hijikata, but real authority over the corps' running flowed through Hijikata, and Yamanami was steadily sidelined. By one account he was wounded in the arm in a fight with robbers in Osaka and fought less after that.",
            ja: "1863年、近藤一門とともに西へ上り、隊の最初の数か月は土方と並んで副長を務めた。その秋の芹沢鴨暗殺では、いくつかの記録が彼を刺客の一人に挙げている。温厚な人物にとって最も暗い夜である。続く改編で彼は総長という重い肩書きを与えられ、土方と並ぶ地位に就いたが、隊の運営の実権は土方の手を通り、山南はしだいに脇へ追いやられていった。ある記録によれば、大坂で強盗と斬り合って腕を負傷し、それ以後はあまり刀を取らなくなったという。"} },
      { h: {en: "At odds", ja: "隔たり"},
        b: {en: "When Itō Kashitarō arrived in late 1864, Yamanami found a kindred spirit: a fellow Hokushin Ittō-ryū man and a scholar who shared his loyalty to the imperial cause. His unease with the corps seems to have been more than personal. Sources suggest that he opposed its hardening character, and by some accounts the plan to move the barracks into Nishi Honganji, the head temple of a sect with millions of common believers.",
            ja: "1864年の暮れに伊東甲子太郎が加わると、山南は気の合う相手を見つけた。同じ北辰一刀流の出で、尊王の志を同じくする学者である。隊に対する彼の違和感は、個人的なものにとどまらなかったらしい。隊がしだいに苛烈になっていくことに反対し、記録によっては、数百万の門徒を抱える本山・西本願寺へ屯所を移す計画にも反対していたという。"} },
      { h: {en: "Leaving and returning", ja: "脱走と帰還"},
        b: {en: "In March 1865 Yamanami left a note and rode east — desertion under the corps' code, which he had helped to establish, and punishable by death. The man sent after him was Okita Sōji, who had grown up beside him at the Shieikan. At Ōtsu, the first post town on the road east, Okita caught up with him, and Yamanami came back without resistance, though escape was surely within his power.\n\nOn March 20, 1865, he died by seppuku at the corps' barracks in the Maekawa house at Mibu, with Okita as his second. He was thirty-one or thirty-two. Itō Kashitarō wrote poems in his memory. The people of Mibu, whose children he had befriended, mourned him openly, and his grave at the temple of Kōen-ji in Mibu still receives flowers.",
            ja: "1865年3月、山南は書き置きを残して東へ馬を走らせた。自らも定めるのに関わった法度のもとでは脱走であり、死に値する。追っ手に送られたのは、試衛館でともに育った沖田総司だった。東海道最初の宿場・大津で沖田は彼に追いつき、山南は逃げる力は十分にあったはずなのに、抗うことなく戻った。\n\n1865年3月20日（元治2年2月23日）、山南は壬生の屯所・前川邸で、沖田の介錯により切腹した。三十一、二歳だった。伊東甲子太郎は彼を悼む歌を詠んでいる。子どもたちと親しんでいた壬生の人々はその死を公然と悲しみ、壬生の光縁寺にある墓には、いまも花が絶えない。"} },
      { h: {en: "Remembered at Mibu", ja: "壬生の記憶"},
        b: {en: "Yamanami is buried at Kōen-ji, a small temple in Mibu that became the corps' burial place for members who died in its Kyoto years. His name is on the temple's register of the dead, and for a century and a half people have come to leave flowers at his grave. Of all the corps' leaders, he is the one the townspeople of Mibu remembered with the most affection, and the one whose death the corps itself seems most to have regretted.",
            ja: "山南は壬生の小さな寺・光縁寺に葬られている。京都時代に亡くなった隊士たちの埋葬の寺となったところである。寺の過去帳にもその名があり、百五十年にわたって、人々はその墓に花を手向けてきた。隊の幹部のうちで、壬生の町の人々に最も親しみをもって記憶されたのは彼であり、隊自身がその死を最も悔やんだように見えるのも彼である。"} }
    ],
    legend: {en: "Why he left, and why he came back, are the corps' most haunting questions; no letter or statement of his survives to answer them. The farewell with his lover Akesato of Shimabara through the lattice window of the barracks first appears in Shimozawa Kan's 20th-century chronicles, which blended interviews with invention. His birth year, his Sendai origins and the Osaka wound all rest on tradition.",
     ja: "なぜ去り、なぜ戻ったのか。それは隊の歴史で最も心に残る問いだが、答えとなる彼自身の手紙や言葉は残っていない。島原の明里と屯所の格子窓越しに別れを交わしたという場面は、聞き書きと創作を織り交ぜた20世紀の子母澤寛の著作に初めて現れる。生年、仙台の出身、大坂での負傷も、いずれも伝承に拠る。"}
  },

  /* ------------------------------------------------------------ */
  serizawa: {
    kanji: "芹", life: "c.1826–1863", group: "leaders",
    name: {en: "Serizawa Kamo", ja: "芹沢鴨"},
    role: {en: "Founding commander", ja: "筆頭局長"},
    summary: {en: "The corps' violent founding commander: a Mito man of samurai birth and radical loyalist pedigree whose drunken outrages — extortion, arson, assault — shamed the corps' Aizu patrons until his own comrades were ordered to destroy him.",
     ja: "隊の荒々しい初代筆頭局長。武士の家に生まれ、水戸の尊攘急進派の経歴を持つ。酒に任せた乱行——押し借り、放火、暴行——が会津藩の面目を潰し、ついには同志たちに彼を討てとの命が下った。"},
    sections: [
      { h: {en: "Mito", ja: "水戸"},
        b: {en: "Serizawa's early life is obscure; even his birth year, around 1826, and his original name are uncertain. He came from a family of country samurai in Serizawa village in Hitachi province, within the orbit of the Mito domain — the intellectual home of the movement to revere the emperor and expel the foreigners, and of the men who had assassinated the shogunate's chief minister at the Sakurada Gate in 1860. He is generally identified with a man who served in Mito's radical loyalist bands in the early 1860s, was imprisoned for violence, and was released in a general amnesty in 1862.",
            ja: "芹沢の前半生ははっきりしない。生年（1826年ごろ）ももとの名も確かではない。常陸国芹沢村の郷士の家の出で、水戸藩の影響圏にあった。水戸は尊王攘夷の思想の本拠であり、1860年に桜田門外で大老を斬った者たちの郷里でもある。一般には、1860年代初めに水戸の尊攘派の一団で活動し、乱暴をはたらいて投獄され、1862年の大赦で放たれた人物と同一視されている。"} },
      { h: {en: "The Rōshigumi", ja: "浪士組"},
        b: {en: "With that pedigree he joined the Rōshigumi in 1863 as the leader of a small Mito group that included Niimi Nishiki and Hirayama Gorō. On the march, by Nagakura's account, he lit a bonfire in the street at Honjō when Kondō, arranging the lodgings, had failed to find him a room. In Kyoto his group and Kondō's were the two that refused to go back east, and under Aizu's protection Serizawa became the senior of the corps' three commanders. He carried a great iron-ribbed war fan inscribed \"a man of utmost loyalty and patriotism.\"",
            ja: "その経歴をもって、1863年、芹沢は新見錦や平山五郎らを含む水戸の小集団の頭として浪士組に加わった。永倉の記述によれば、行軍の途中、本庄宿で宿割りの近藤が彼の宿を取り損ねると、往来で大篝火を焚いたという。京で東へ戻ることを拒んだのは、彼の一派と近藤の一派だった。会津藩の預かりのもと、芹沢は三人の局長の筆頭となる。「尽忠報国之士 芹沢鴨」と刻んだ大きな鉄扇を持ち歩いていた。"} },
      { h: {en: "The Mibu months", ja: "壬生の日々"},
        b: {en: "In Kyoto, Serizawa's conduct quickly became the corps' liability. He forced loans from merchants; when the silk merchant Yamatoya refused, he had its storehouse burned in the middle of the city. He led the brawl in Osaka in which sumo wrestlers were killed, and by tradition wrecked the rooms of the Sumiya, the great house of entertainment in Shimabara, when he was displeased with its service. Each outrage reached the Aizu domain, the corps' patron and guarantor.\n\nYet he also led the corps at its first great moment, the coup of September 1863 that drove Chōshū from Kyoto, when, by one well-known anecdote, he faced down the Aizu guards who barred the way with nothing but his iron fan. Within weeks of it, Aizu's patience ran out.",
            ja: "京で芹沢の振る舞いはたちまち隊の重荷となった。商家から金を押し借りし、生糸商の大和屋が拒むと、町の真ん中でその土蔵を焼かせた。大坂では力士との乱闘を率いて死者を出し、伝えによれば、島原の揚屋・角屋のもてなしが気に入らず、座敷を打ち壊したともいう。乱行の一つ一つが、隊の後ろ盾である会津藩の耳に届いた。\n\nそれでも、隊が初めて大舞台に立った八月十八日の政変（1863年9月）で隊を率いたのも彼だった。よく知られた逸話では、行く手を阻む会津藩兵の前に、鉄扇一本で立ちはだかったという。だがそれから数週間のうちに、会津藩の堪忍袋の緒は切れた。"} },
      { h: {en: "Assassination", ja: "暗殺"},
        b: {en: "In the autumn of 1863 his lieutenant Niimi was forced to commit seppuku in a Gion teahouse. A few days later, on a night of driving rain after a party at the Sumiya, Serizawa was cut down as he slept at the Yagi house in Mibu, beside his companion Oume, who was killed with him; Hirayama died in the next room. The corps blamed Chōshū assassins and gave Serizawa a grand funeral. The killers were his own comrades — most accounts name Hijikata, Okita, Yamanami and Harada, in varying combinations. With his death, command passed undivided to Kondō, and the Shinsengumi as history knows it began.",
            ja: "1863年秋、腹心の新見が祇園の茶屋で切腹させられた。その数日後、角屋での宴のあと、激しい雨の夜に、芹沢は壬生の八木家で眠っているところを斬られた。傍らにいたお梅もともに殺され、平山は隣の部屋で死んだ。隊は長州の刺客の仕業として、芹沢の葬儀を盛大に営んだ。手を下したのは同志たちである。多くの記録は、組み合わせに異同はあれ、土方、沖田、山南、原田の名を挙げる。彼の死によって指揮は近藤ひとりのものとなり、歴史の知る新選組が始まった。"} },
      { h: {en: "Grave", ja: "墓所"},
        b: {en: "Serizawa and Hirayama Gorō are buried together at Mibu-dera, the temple next to the corps' first barracks, where the corps' members once drilled and where the Mibu people's summer kyōgen plays are still performed. For years the corps' official story — that Chōshū assassins had killed them — went unchallenged in public; the truth came out only when the survivors began to talk.",
            ja: "芹沢と平山五郎は、隊の最初の屯所の隣にある壬生寺にともに葬られている。かつて隊士たちが調練に励み、いまも壬生狂言が演じられる寺である。長州の刺客に殺されたという隊の公式の説明は、何年ものあいだ表立って疑われることがなかった。真相が明らかになったのは、生き残りたちが語り始めてからである。"} }
    ],
    legend: {en: "Serizawa is history's designated villain, and much of the detail comes from the winning faction and from the Yagi family's later reminiscences. The outrages are well attested; the cartoonish brute is partly narrative convenience. Some historians read him as a genuine radical who saw the corps as his movement, not Kondō's. The Sumiya story, the fan at the palace gate, his identification with the Mito prisoner, and a famous death poem said to have been written in his own blood in prison are all tradition.",
     ja: "芹沢は歴史上の「悪役」に仕立てられており、細部の多くは勝った側の一派や八木家の後年の回想に由来する。乱行そのものはよく裏付けられているが、戯画化された乱暴者という像は、物語の都合による部分もある。隊を近藤のものではなく自らの運動とみなした、本物の急進派と見る歴史家もいる。角屋の話、御所の門前での鉄扇、水戸の獄にいた人物との同一視、獄中で血をもって書いたという有名な辞世の歌は、いずれも伝承である。"}
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
