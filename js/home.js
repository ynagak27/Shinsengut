/* =====================================================================
   FRONT PAGE (index.html) — ways in, by what the visitor wants to do.
   Each card starts from a need ("I want to…"), not from a page of the
   site. Every text field is bilingual {en, ja}; links get ?lang=en added
   automatically in English. Edit NEEDS to add, reword or reorder.
   ===================================================================== */

const UI = {
  site:    {ja: "新選組の軌跡", en: "The Road of Shinsengumi"},
  lang:    {ja: "English", en: "日本語"},
  eyebrow: {ja: "1863 – 1869　多摩から箱館へ", en: "1863 – 1869 · From Tama to Hakodate"},
  name:    {ja: "新選組の軌跡", en: "The Road of Shinsengumi"},
  lede:    {ja: "多摩の農家の子らが幕府の剣となり、主君が戦いをやめたあとも、最後まで戦い抜いた。その足跡を、当時の地図と物語でたどります。",
            en: "Farmers’ sons who became the shogun’s swordsmen, and fought on to the very end after their own lord had given up. Their road, on the maps of their day."},
  ask:     {ja: "何をしてみたいですか？", en: "What would you like to do?"},
  all:     {ja: "サイトのすべて", en: "Everything on the site"},
  everyone:{ja: "ほかの隊士 →", en: "Everyone else →"},
  foot:    {ja: "史実と伝承を区別して記しています。", en: "Documented history is kept apart from later legend throughout."}
};

/* who appears as a quick pick on "Follow one man's life" */
const PICKS = [
  {id: "hijikata", ja: "土方歳三", en: "Hijikata Toshizō"},
  {id: "kondo",    ja: "近藤勇",   en: "Kondō Isami"},
  {id: "okita",    ja: "沖田総司", en: "Okita Sōji"},
  {id: "saito",    ja: "斎藤一",   en: "Saitō Hajime"},
  {id: "nagakura", ja: "永倉新八", en: "Nagakura Shinpachi"},
  {id: "yamanami", ja: "山南敬助", en: "Yamanami Keisuke"}
];

const NEEDS = [
  { id: "who",
    want:  {ja: "どんな人たちだったのか、まず知りたい", en: "Find out who they were"},
    desc:  {ja: "どんな時代に生き、誰と戦い、なぜいまも語り継がれるのか。全体像を数分で。",
            en: "The country they lived in, who they fought, and why they are still remembered. The essentials, before anything else."},
    hint:  {ja: "はじめての方に · 数分で読めます", en: "Start here if you’re new · about 10 minutes"},
    go:    {href: {ja: "story.html?v=short", en: "basics.html"}, label: {ja: "概要を読む", en: "Read the basics"}} },

  { id: "live",
    want:  {ja: "その場に立ち会うように、体験したい", en: "Live through the key moments"},
    desc:  {ja: "試衛館の稽古場、池田屋の階段、箱館の最後の戦い。十一の章を、当時の古地図の上で一場面ずつ。",
            en: "The practice hall at the Shieikan, the stairs of the Ikedaya, the last fight at Hakodate. Eleven chapters, one scene at a time, over the maps of the day."},
    hint:  {ja: "全十一章 · タップで読み進める", en: "11 chapters · tap to read on"},
    go:    {href: "play/", label: {ja: "物語で体験する", en: "Experience the story"}} },

  { id: "follow",
    want:  {ja: "一人の隊士の生涯を追いたい", en: "Follow one man’s life"},
    desc:  {ja: "名前を選ぶと、生まれから最期までの足取りが地図の上に現れ、その生涯を読むことができます。",
            en: "Choose a name, and his road from birth to grave appears on the map, with his life story alongside."},
    picks: true },

  { id: "places",
    want:  {ja: "ゆかりの地を見たい・訪ねたい", en: "See where it happened"},
    desc:  {ja: "すべての出来事を、その場所に。幕末の古地図でも現在の地図でも。京都・日野・箱館を訪ねる前にも。",
            en: "Every event pinned to its place, on 1860s maps or today’s streets. Useful before a visit to Kyoto, Hino or Hakodate."},
    hint:  {ja: "地図 · 古地図と現在の地図", en: "Map · period maps and today’s"},
    go:    {href: "map.html", label: {ja: "地図を開く", en: "Open the map"}},
    more:  {href: "map.html?tour=1", label: {ja: "順路にそって案内してもらう", en: "Or be guided, stop by stop"}} },

  { id: "read",
    want:  {ja: "始まりから終わりまで、通して読みたい", en: "Read the whole story"},
    desc:  {ja: "多摩の村から箱館の最期、そして語り継いだ生き残りたちまで。ひと続きの物語として。",
            en: "From the farm villages of Tama to the last stand at Hakodate and the survivors who told the tale, as one continuous account."},
    hint:  {ja: "読み物 · 短い版もあります", en: "A long read · short version too"},
    go:    {href: "story.html", label: {ja: "物語を読む", en: "Read the story"}},
    more:  {href: "story.html?v=short", label: {ja: "短い版を読む", en: "Read the short version"}} }
];

const ALL = [
  {href: "map.html",    label: {ja: "地図", en: "The map"}},
  {href: "story.html",  label: {ja: "新選組とは（物語）", en: "Who were the Shinsengumi? (the story)"}},
  {href: "play/",       label: {ja: "物語で体験する", en: "Experience the story"}},
  {href: "people.html", label: {ja: "隊士", en: "The members"}},
  {href: "basics.html", label: {en: "Shinsengumi basics"}, only: "en"}
];

let lang = new URLSearchParams(location.search).get("lang") === "en" ? "en" : "ja";
const t = o => (o && o[lang] !== undefined) ? o[lang] : "";
const $ = id => document.getElementById(id);

/* add ?lang=en (keeping any other query) in English */
function link(h) {
  const raw = typeof h === "string" ? h : t(h);
  if (lang !== "en") return raw;
  return raw + (raw.includes("?") ? "&" : "?") + "lang=en";
}

function esc(s) { return s.replace(/[&<>"]/g, c => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;"}[c])); }

function card(n) {
  const body = n.picks
    ? `<div class="picks">${PICKS.map(p => `<a class="pick" href="${link("map.html?person=" + p.id)}">${esc(p[lang])}</a>`).join("")}</div>
       <a class="need-more" href="${link("people.html")}">${esc(t(UI.everyone))}</a>`
    : `<a class="hdr-btn primary need-go" href="${link(n.go.href)}">${esc(t(n.go.label))} →</a>
       ${n.more ? `<a class="need-more" href="${link(n.more.href)}">${esc(t(n.more.label))}</a>` : ""}`;
  return `
    <article class="need need-${n.id}">
      <div class="need-pre">${lang === "ja" ? "" : "I want to"}</div>
      <h4 class="need-want">${esc(t(n.want))}</h4>
      <p class="need-desc">${esc(t(n.desc))}</p>
      ${n.hint ? `<div class="need-hint">${esc(t(n.hint))}</div>` : ""}
      <div class="need-act">${body}</div>
    </article>`;
}

function render() {
  document.documentElement.lang = lang;
  $("h-title").textContent = t(UI.site);
  $("btn-lang").textContent = t(UI.lang);
  $("h-eyebrow").textContent = t(UI.eyebrow);
  $("h-name").textContent = t(UI.name);
  $("h-lede").textContent = t(UI.lede);
  $("h-ask").textContent = t(UI.ask);
  $("h-all").textContent = t(UI.all);
  $("h-foot").textContent = t(UI.foot);
  $("paths").innerHTML = NEEDS.map(card).join("");
  $("all").innerHTML = ALL.filter(a => !a.only || a.only === lang)
    .map(a => `<li><a href="${link(a.href)}">${esc(t(a.label))}</a></li>`).join("");
}

$("btn-lang").onclick = () => {
  lang = lang === "ja" ? "en" : "ja";
  history.replaceState(null, "", lang === "en" ? "?lang=en" : location.pathname);
  render();
};

render();
