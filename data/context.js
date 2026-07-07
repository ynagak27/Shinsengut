/* =====================================================================
   CONTEXT — 時代の動き（日本史・維新志士の動向）
   ---------------------------------------------------------------------
   National events shown on the timeline alongside the Shinsengumi's
   movements: the shogunate's decline, and what the ishin shishi
   (imperial loyalists of Satsuma, Chōshū, Tosa...) were doing.

   Same schema as EVENTS, minus "route". They appear as ◇ diamonds and
   can be toggled on/off. They MAY reference corps members via
   people/roles (e.g. Harada at Ueno). Add freely as research grows.
   ===================================================================== */

const CONTEXT = [

 {id:"perry", sort:"1853-07-08", year:"1853", coords:[35.2450,139.7200], zoom:10,
  date:{en:"July 1853", ja:"1853年7月（嘉永6年）"},
  loc:{en:"Uraga, Edo Bay", ja:"江戸湾・浦賀沖"},
  title:{en:"Perry's Black Ships arrive", ja:"黒船来航"},
  desc:{en:"Commodore Perry's squadron steams into Edo Bay and forces open a country closed for two centuries. The shogunate's helplessness before the ships shatters its authority and ignites the movement that defines the next fifteen years: sonnō-jōi, \"revere the emperor, expel the barbarians.\" Every actor in the Shinsengumi's story — the corps itself, the shishi it hunted, the domains that destroyed the shogunate — is set in motion by this moment. Hijikata is eighteen, selling medicine in Tama.",
        ja:"ペリー艦隊、江戸湾に来航。二百年の鎖国が武力を背景にこじ開けられる。黒船を前にした幕府の無力は、その権威を根底から揺るがし、以後十五年を規定する運動——尊皇攘夷——に火をつけた。新選組の物語のすべての登場者——隊そのもの、隊が狩った志士たち、幕府を倒す雄藩——が、この瞬間から動き出す。土方歳三、このとき18歳。多摩で薬を売っていた。"},
  people:[], roles:{}},

 {id:"sakuradamon", sort:"1860-03-24", year:"1860", coords:[35.6790,139.7527], zoom:14,
  date:{en:"March 24, 1860", ja:"1860年3月24日（安政7年3月3日）"},
  loc:{en:"Sakurada Gate, Edo Castle", ja:"江戸城・桜田門外"},
  title:{en:"Assassination at the Sakurada Gate", ja:"桜田門外の変"},
  desc:{en:"Rōnin from Mito — the ideological homeland of Serizawa Kamo — cut down the shogunate's strongman, Great Elder Ii Naosuke, in the snow outside Edo castle, in revenge for his purges and his treaties with the West. The lesson lands across Japan: a handful of committed swordsmen can decapitate the state. Political terror becomes a standard instrument, and Kyoto will soon fill with men holding that conviction — creating precisely the disorder the Shinsengumi will be hired to suppress.",
        ja:"水戸——芹沢鴨の思想的故郷——の浪士たちが、江戸城桜田門外の雪の中で幕府の最高実力者・大老井伊直弼を斬殺する。安政の大獄と開国への報復だった。この事件が全国に教えたことは一つ——覚悟を決めた剣士が数名いれば、国家の首は取れる。政治テロは常套手段となり、京都はやがてその信念を抱く男たちで溢れる。新選組が鎮圧のために雇われる「無秩序」そのものが、ここで生まれた。"},
  people:[], roles:{}},

 {id:"namamugi", sort:"1862-09-14", year:"1862", coords:[35.4850,139.6650], zoom:12,
  date:{en:"September 14, 1862", ja:"1862年9月14日（文久2年8月21日）"},
  loc:{en:"Namamugi village, Tōkaidō", ja:"東海道・生麦村"},
  title:{en:"The Namamugi Incident", ja:"生麦事件"},
  desc:{en:"Satsuma samurai in the daimyō's procession cut down a British merchant who fails to dismount. The reprisal — the Royal Navy's bombardment of Kagoshima a year later — teaches Satsuma the actual balance of power, and the domain pivots from \"expel the barbarians\" to buying British ships and guns. This quiet conversion of the loyalist camp from xenophobia to modernization is the strategic story of the decade: the Shinsengumi will fight the 1860s with swords against enemies who drew this lesson early.",
        ja:"薩摩藩の大名行列を横切った英国商人を、供の藩士が斬殺する。一年後の報復——英国艦隊による鹿児島砲撃（薩英戦争）——は薩摩に現実の力の差を教え、藩は「攘夷」から英国製の艦船と銃の購入へと転換した。尊攘陣営が排外主義から近代化へと静かに転向していくこと——それがこの十年の戦略的本筋である。新選組は、この教訓をいち早く得た敵を相手に、刀で1860年代を戦うことになる。"},
  people:[], roles:{}},

 {id:"coup818", sort:"1863-09-30", year:"1863", coords:[35.0254,135.7621], zoom:14,
  date:{en:"September 30, 1863", ja:"1863年9月30日（文久3年8月18日）"},
  loc:{en:"Kyoto Imperial Palace", ja:"京都御所"},
  title:{en:"The Coup of 8/18", ja:"八月十八日の政変"},
  desc:{en:"Aizu and Satsuma, in a dawn palace coup, expel Chōshū's troops and its allied radical nobles from Kyoto, breaking loyalist control of the court overnight. The Mibu Rōshigumi turns out under arms to guard the palace approaches — its first real deployment. For its service that day, the corps receives from the court of the protector of Kyoto a new name: Shinsengumi, \"the newly selected corps.\" The exiled Chōshū radicals scatter into hiding across the city; hunting them down becomes the corps' daily work, and leads directly to the Ikedaya.",
        ja:"会津と薩摩が未明の宮中クーデターで長州兵と急進派公卿を京から追放し、朝廷における尊攘派の支配を一夜で覆す。壬生浪士組も武装して御所警備に出動した——初めての本格的な出役である。この日の働きにより、隊は「新選組」の名を下賜される。追放された長州系志士たちは市中に潜伏し、その探索と捕縛が隊の日常業務となる。その先にあったのが、池田屋だった。"},
  people:["kondo","hijikata","serizawa"],
  roles:{
    serizawa:{en:"Led the corps to the palace; an anecdote has him facing down Aizu troops who barred the way, iron fan in hand.", ja:"隊を率いて御所へ。行く手を阻んだ会津兵を鉄扇片手に一喝したという逸話が残る。"},
    kondo:{en:"Marched with the corps in its first deployment under arms.", ja:"初の武装出動に隊とともに参加。"},
    hijikata:{en:"Marched with the corps; the day's service won it the name Shinsengumi.", ja:"隊とともに出動。この日の働きが「新選組」の名をもたらした。"}
  }},

 {id:"satcho", sort:"1866-03-07", year:"1866", coords:[35.0260,135.7590], zoom:14,
  date:{en:"March 1866", ja:"1866年3月（慶応2年1月）"},
  loc:{en:"Kyoto (Satsuma residence)", ja:"京都・薩摩藩邸"},
  title:{en:"The Satsuma–Chōshū Alliance", ja:"薩長同盟"},
  desc:{en:"In deepest secrecy, brokered by the Tosa rōnin Sakamoto Ryōma and Nakaoka Shintarō, the bitter rivals Satsuma and Chōshū — enemies since the coup of 8/18 and the Kinmon fighting — form a covert alliance. Satsuma will front British weapons purchases for blockaded Chōshū; each pledges the other support against the shogunate. Nothing about the corps' Kyoto patrols is different the next morning, yet everything is decided: the combination that will destroy the shogunate now exists. The Shinsengumi never manages to lay hands on Ryōma, though it hunts him.",
        ja:"土佐脱藩浪士・坂本龍馬と中岡慎太郎の周旋により、犬猿の仲だった薩摩と長州——八月十八日の政変と禁門の変以来の仇敵同士——が極秘の同盟を結ぶ。薩摩名義で封鎖下の長州のために英国製武器を購入し、互いに対幕府で支援し合うという密約である。翌朝の新選組の市中巡察は何ひとつ変わらない。だが、すべてはこの夜に決した。幕府を倒す組み合わせが、この世に存在してしまったのだ。隊は龍馬を追い続けたが、ついにその手が届くことはなかった。"},
  people:[], roles:{}},

 {id:"taisei", sort:"1867-11-09", year:"1867", coords:[35.0142,135.7481], zoom:14,
  date:{en:"November 9, 1867", ja:"1867年11月9日（慶応3年10月14日）"},
  loc:{en:"Nijō Castle, Kyoto", ja:"京都・二条城"},
  title:{en:"Return of power to the emperor", ja:"大政奉還"},
  desc:{en:"Shogun Tokugawa Yoshinobu, maneuvering to preempt an armed overthrow, formally returns governing authority to the emperor at Nijō castle — betting that no one else can actually govern, and that a new council of lords will have to hand power back to him in practice. The Satsuma-Chōshū men understand the maneuver perfectly and prepare to close the loophole by force. For the Shinsengumi, elevated to shogunal retainers mere months earlier, the ground itself has moved: the institution they finally belong to has, on paper, just voted itself out of existence.",
        ja:"将軍徳川慶喜、武力倒幕の機先を制すべく、二条城にて統治権を朝廷に奉還する。実際に統治できる者は他になく、諸侯会議は結局自分に実権を委ねるほかない——という賭けだった。薩長の男たちはこの手をを完全に読み切り、武力でその抜け道を塞ぐ準備に入る。数ヶ月前にようやく幕臣となった新選組にとって、足元の地面そのものが動いた。ついに帰属を果たした組織が、書類の上では、たったいま自らを消滅させたのである。"},
  people:[], roles:{}},

 {id:"ryoma", sort:"1867-12-10", year:"1867", coords:[35.0053,135.7687], zoom:15,
  date:{en:"December 10, 1867", ja:"1867年12月10日（慶応3年11月15日）"},
  loc:{en:"Ōmiya, Kawaramachi, Kyoto", ja:"京都河原町・近江屋"},
  title:{en:"Assassination of Sakamoto Ryōma", ja:"近江屋事件（坂本龍馬暗殺）"},
  desc:{en:"A month after the return of power he helped engineer, Sakamoto Ryōma is assassinated with Nakaoka Shintarō in his room above the Ōmiya soy merchant's shop. Suspicion falls immediately on the Shinsengumi — a scabbard at the scene is attributed to Harada Sanosuke, and Kondō is later interrogated about the killing before his execution. The evidence now points overwhelmingly to the Mimawarigumi, a rival shogunal police unit, but the corps pays reputationally then and ever after: history's most beloved shishi, laid at its door.",
        ja:"自ら演出した大政奉還の一ヶ月後、坂本龍馬は醤油商・近江屋の二階で中岡慎太郎とともに暗殺された。嫌疑は即座に新選組へ向かう——現場に残された刀の鞘は原田左之助のものとされ、近藤勇は処刑前にこの件でも訊問を受けた。現在では実行犯は見廻組（幕府側の別組織）でほぼ確定しているが、隊は当時もその後も代償を払い続けた。史上最も愛された志士の死が、新選組の玄関先に置かれたのである。"},
  people:["harada"],
  roles:{
    harada:{en:"Falsely implicated by a scabbard left at the scene; the accusation followed the corps for decades.", ja:"現場に残された鞘から実行犯の濡れ衣を着せられた。この嫌疑は数十年にわたり隊につきまとった。"}
  }},

 {id:"osei", sort:"1868-01-03", year:"1868", coords:[35.0254,135.7621], zoom:14,
  date:{en:"January 3, 1868", ja:"1868年1月3日（慶応3年12月9日）"},
  loc:{en:"Kyoto Imperial Palace", ja:"京都御所"},
  title:{en:"Proclamation of imperial restoration", ja:"王政復古の大号令"},
  desc:{en:"Satsuma-led forces seize the palace gates and a rump council proclaims the restoration of direct imperial rule — abolishing the shogunate outright and stripping Yoshinobu of office and lands. It is the coup that closes the loophole of the peaceful handover. Yoshinobu withdraws to Osaka with his army, tempers fray for three weeks, and provocations (including Satsuma-sponsored rōnin terror in Edo) do their work: the march that ends at Toba–Fushimi begins.",
        ja:"薩摩を中心とする軍が御所の門を制圧し、少数の会議が王政復古——幕府の廃絶、慶喜の辞官納地——を宣言する。大政奉還の「抜け道」を塞ぐクーデターだった。慶喜は軍を率いて大坂城へ退き、三週間の緊張と挑発（薩摩が江戸で仕掛けた浪士による攪乱工作を含む）が導火線に火をつける。鳥羽・伏見に終わる進軍が、ここに始まった。"},
  people:[], roles:{}},

 {id:"edocastle", sort:"1868-05-03", year:"1868", coords:[35.6852,139.7528], zoom:13,
  date:{en:"May 3, 1868", ja:"1868年5月3日（慶応4年4月11日）"},
  loc:{en:"Edo Castle", ja:"江戸城"},
  title:{en:"Bloodless surrender of Edo", ja:"江戸無血開城"},
  desc:{en:"Negotiated between Katsu Kaishū for the shogunate and Saigō Takamori for the imperial army, Edo — the largest city on earth — changes hands without a battle. Yoshinobu retires into watched seclusion. The settlement saves a million townspeople and dooms the irreconcilables: with the legitimate leadership standing down, men like Hijikata who fight on are no longer soldiers of a government but rebels by definition. The war's remaining course — Ueno, Aizu, Hakodate — is the story of those who could not accept the surrender.",
        ja:"幕府側・勝海舟と新政府軍・西郷隆盛の交渉により、地上最大の都市・江戸は一戦も交えず引き渡された。慶喜は謹慎に入る。この決着は百万の市民を救うと同時に、非妥協派の運命を封じた。正統な指導部が矛を収めた以上、なお戦う土方らはもはや政府の兵ではなく、定義上の「賊」である。以後の戦争——上野、会津、箱館——は、この開城を受け入れられなかった者たちの物語だ。"},
  people:[], roles:{}},

 {id:"ueno", sort:"1868-07-04", year:"1868", coords:[35.7148,139.7710], zoom:13,
  date:{en:"July 4, 1868", ja:"1868年7月4日（慶応4年5月15日）"},
  loc:{en:"Kan'ei-ji, Ueno, Edo", ja:"江戸・上野寛永寺"},
  title:{en:"Battle of Ueno", ja:"上野戦争"},
  desc:{en:"The Shōgitai — thousands of shogunal loyalists garrisoning the great temple hill of Ueno in defiance of the surrender — are destroyed in a single day. Ōmura Masujirō's plan uses Armstrong guns firing across the Shinobazu pond to methodically demolish the position: a demonstration, weeks after Edo's peaceful handover, of exactly what resistance now costs. Among the dead of the following days is Harada Sanosuke of the Shinsengumi, who had turned back from the march north and joined the doomed garrison.",
        ja:"彰義隊——開城に服さず上野の山（寛永寺）に立て籠もった数千の旧幕臣たち——は、たった一日で壊滅した。大村益次郎の作戦は、不忍池越しにアームストロング砲を撃ち込み、陣地を計画的に粉砕するというもの。無血開城の数週間後、「抵抗の代価」を見せつける示威だった。数日後の死者の中に、新選組の原田左之助がいる。北への行軍から引き返し、この勝ち目のない籠城に加わっていたのだった。"},
  people:["harada"],
  roles:{
    harada:{en:"Turned back from the northern march — perhaps to see his wife and son — joined the Shōgitai, and was mortally wounded; he died two days later, aged 28.", ja:"北上の途中で引き返し——妻子に会うためだったとも言われる——彰義隊に加わって重傷を負い、二日後に死亡した。享年29（満28歳）。"}
  }},

 {id:"surrender", sort:"1869-06-27", year:"1869", coords:[41.7967,140.7570], zoom:12,
  date:{en:"June 27, 1869", ja:"1869年6月27日（明治2年5月18日）"},
  loc:{en:"Goryōkaku, Hakodate", ja:"箱館・五稜郭"},
  title:{en:"Surrender of Goryōkaku — the Boshin War ends", ja:"五稜郭開城——戊辰戦争終結"},
  desc:{en:"A week after Hijikata's death, Enomoto surrenders Goryōkaku and the Republic of Ezo dissolves. The Boshin War is over; the Meiji state's authority now runs unbroken from Kyushu to Ezo. The epilogue is stranger than the war: within a few years Enomoto and other republic leaders are pardoned and serving the Meiji government as ministers and admirals, while Saitō Hajime patrols Tokyo as a policeman. The order the Shinsengumi died for became, with remarkable speed, a memory its survivors administered.",
        ja:"土方の死から一週間後、榎本武揚は五稜郭を開城し、蝦夷共和国は消滅した。戊辰戦争は終わり、明治国家の権威は九州から蝦夷地まで貫徹する。だが後日談は戦争より数奇である。数年のうちに榎本ら共和国首脳は赦免され、明治政府の大臣や提督として仕え、斎藤一は警察官として東京の街を巡回していた。新選組が殉じた秩序は、驚くべき速さで、生き残りたちが管理する「記憶」となったのである。"},
  people:[], roles:{}}
];
