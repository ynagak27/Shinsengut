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
  lede:    {ja: "多摩の農家に生まれた若者たちが、幕府の剣となって京を守り、主君が戦いをやめたあとも最後まで戦い抜いた。その足跡を、当時の地図と物語でたどります。",
            en: "Farmers’ sons who became the shogun’s swordsmen, and fought on to the very end after their own lord had given up. Their road, on the maps of their day."},
  ask:     {ja: "新選組の道のりを、どのように巡りますか？", en: "How would you like to travel their road?"},
  all:     {ja: "サイト内のページ", en: "Everything on the site"},
  everyone:{ja: "ほかの隊士を見る →", en: "Everyone else →"},
  foot:    {ja: "史実と、後世の伝承・異説は区別して記しています。", en: "Documented history is kept apart from later legend throughout."},
  back:    {ja: "おかえりなさい · 前回の続きから", en: "Welcome back · pick up where you left off"},
  read:    {ja: (n, all) => `物語で体験する：全${all}章中 ${n}章を読了`, en: (n, all) => `Experience the story: ${n} of ${all} chapters read`},
  forget:  {ja: "記録を消す", en: "Forget where I was"},
  local:   {ja: "この記録は、お使いのブラウザの中にだけ保存されています。", en: "This is saved only in your own browser."}
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
    want:  {ja: "新選組を知る", en: "Find out who they were"},
    desc:  {ja: "どんな時代に生まれ、誰と戦い、なぜいまも語り継がれているのか。まずは概要からどうぞ。",
            en: "The country they lived in, who they fought, and why they are still remembered. The essentials, before anything else."},
    hint:  {ja: "はじめての方はこちらから · 約8分で読めます", en: "Start here if you’re new · about 10 minutes"},
    go:    {href: {ja: "story.html", en: "basics.html"}, label: {ja: "「新選組とは」を読む", en: "Read the basics"}},
    more:  {href: {ja: "story.html?v=short", en: "story.html"}, label: {ja: "短縮版を読む（約1分）", en: "Then the story, in about 8 minutes"}} },

  { id: "live",
    want:  {ja: "名場面を体験する", en: "Live through the key moments"},
    desc:  {ja: "試衛館での日々、池田屋事件、そして箱館での最後の戦い。全十一章を、当時の古地図とともに一場面ずつたどります。",
            en: "The practice hall at the Shieikan, the stairs of the Ikedaya, the last fight at Hakodate. Eleven chapters, one scene at a time, over the maps of the day."},
    hint:  {ja: "全十一章 · タップで進みます", en: "11 chapters · tap to read on"},
    go:    {href: "play/", label: {ja: "物語で体験する", en: "Experience the story"}} },

  { id: "follow",
    want:  {ja: "隊士の生涯をたどる", en: "Follow one man’s life"},
    desc:  {ja: "隊士を選ぶと、生まれてから最期までの足跡が地図上に表示され、その生涯を読むことができます。",
            en: "Choose a name, and his road from birth to grave appears on the map, with his life story alongside."},
    picks: true },

  { id: "free",
    want:  {ja: "自由に見て回る", en: "Explore on my own"},
    desc:  {ja: "案内は必要ないという方へ。すべての出来事・隊士・ゆかりの地を、地図の上で好きな順番にご覧ください。一部の地域は幕末の古地図でも見られます。",
            en: "No guidance needed? Every event, every member and every place they knew, on the map in any order you like. Some areas can be seen on the maps of the 1860s."},
    hint:  {ja: "順路なし · すべてを自由に", en: "No set route · everything open"},
    go:    {href: "map.html", label: {ja: "地図を自由に見る", en: "Explore freely"}},
    more:  {href: "#all", label: {ja: "ページ一覧から選ぶ", en: "Or pick any page"}} }
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
  if (lang !== "en" || raw.startsWith("#")) return raw;
  const [path, hash] = raw.split("#");
  return path + (path.includes("?") ? "&" : "?") + "lang=en" + (hash ? "#" + hash : "");
}

/* "Pick up where you left off": shown when js/resume.js has a record
   from an earlier visit in this browser. */
function renderResume() {
  const box = $("resume");
  const R = window.SSG_RESUME;
  const last = R && R.load();
  if (!last || !last.href || !last.title) { box.hidden = true; return; }
  const done = R.stamps().length, all = R.chapterCount();
  box.hidden = false;
  box.innerHTML = `
    <div class="resume-pre">${esc(t(UI.back))}</div>
    <div class="resume-row">
      <div class="resume-text">
        <div class="resume-sub">${esc(t(last.sub || {}))}</div>
        <div class="resume-title">${esc(t(last.title))}</div>
        ${done && all ? `<div class="resume-prog"><span class="bar"><span style="width:${Math.round(done / all * 100)}%"></span></span>${esc(UI.read[lang](done, all))}</div>` : ""}
      </div>
      <a class="hdr-btn primary resume-go" href="${link(last.href)}">${esc(t(last.action || {ja: "続きへ", en: "Continue"}))} →</a>
    </div>
    <div class="resume-foot"><span>${esc(t(UI.local))}</span><button type="button" id="btn-forget">${esc(t(UI.forget))}</button></div>`;
  $("btn-forget").onclick = () => { R.clear(); renderResume(); };
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
  renderResume();
  $("all").innerHTML = ALL.filter(a => !a.only || a.only === lang)
    .map(a => `<li><a href="${link(a.href)}">${esc(t(a.label))}</a></li>`).join("");
}

$("btn-lang").onclick = () => {
  lang = lang === "ja" ? "en" : "ja";
  history.replaceState(null, "", lang === "en" ? "?lang=en" : location.pathname);
  render();
};

render();
