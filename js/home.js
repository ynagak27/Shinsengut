/* =====================================================================
   FRONT PAGE (index.html) — three ways in, by familiarity.
   Every text field is bilingual {en, ja}. Links get ?lang=en added
   automatically in English. To add or reorder a path, edit PATHS.
   ===================================================================== */

const UI = {
  site:    {ja: "新選組の軌跡", en: "The Road of Shinsengumi"},
  lang:    {ja: "English", en: "日本語"},
  eyebrow: {ja: "1863 – 1869　多摩から箱館へ", en: "1863 – 1869 · From Tama to Hakodate"},
  name:    {ja: "新選組の軌跡", en: "The Road of Shinsengumi"},
  lede:    {ja: "多摩の農家の子らが幕府の剣となり、主君が戦いをやめたあとも、最後まで戦い抜いた。その足跡を、当時の地図と物語でたどります。",
            en: "Farmers’ sons who became the shogun’s swordsmen, and fought on to the very end after their own lord had given up. Their road, on the maps of their day."},
  ask:     {ja: "新選組を、どのくらいご存じですか？", en: "How well do you know the Shinsengumi?"},
  all:     {ja: "サイトのすべて", en: "Everything on the site"},
  foot:    {ja: "史実と伝承を区別して記しています。", en: "Documented history is kept apart from later legend throughout."}
};

/* level: how many of the three marks are filled */
const PATHS = [
  { level: 1,
    tag:   {ja: "はじめて", en: "New to them"},
    title: {ja: "名前を聞いたことがある程度", en: "I’ve only just heard of them"},
    desc:  {ja: "まずは数分で全体像を。そのあと第一章から、物語を一場面ずつたどってください。",
            en: "Start with ten minutes of background, then follow the story from Chapter 1, one scene at a time."},
    go:    {href: {ja: "story.html?v=short", en: "basics.html"},
            label: {ja: "まず概要を読む", en: "Read the basics"}},
    more:  [ {href: "play/", label: {ja: "物語で体験する（第一章から）", en: "Then: Experience the story, from Chapter 1"}} ] },

  { level: 2,
    tag:   {ja: "ひととおり", en: "Know the outline"},
    title: {ja: "おおまかな流れは知っている", en: "I know the outline"},
    desc:  {ja: "試衛館から箱館まで、十一の章で要所を当時の古地図の上に。通して読むなら全文も。",
            en: "Eleven chapters of key moments, from the Shieikan to Hakodate, over the period maps. Or the whole story in one read."},
    go:    {href: "play/", label: {ja: "物語で体験する", en: "Experience the story"}},
    more:  [ {href: "story.html", label: {ja: "全文を読む", en: "Read the full story"}},
             {href: "map.html?tour=1", label: {ja: "地図で順路をたどる", en: "Take the guided tour on the map"}} ] },

  { level: 3,
    tag:   {ja: "くわしく", en: "Know them well"},
    title: {ja: "よく知っている", en: "I know them well"},
    desc:  {ja: "すべての出来事を地図の上に。隊士一人ひとりの生涯をたどり、史実と伝承・異説を見分けながら。",
            en: "Every event on the map. Follow any member from birth to grave, with legend and disputed accounts marked as such."},
    go:    {href: "map.html", label: {ja: "地図を開く", en: "Open the map"}},
    more:  [ {href: "people.html", label: {ja: "隊士一覧", en: "All the members"}} ] }
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

  $("paths").innerHTML = PATHS.map(p => `
    <article class="path">
      <div class="path-tag"><span class="marks" aria-hidden="true">${[1, 2, 3].map(i => `<i class="${i <= p.level ? "on" : ""}"></i>`).join("")}</span>${esc(t(p.tag))}</div>
      <h4 class="path-title">${esc(t(p.title))}</h4>
      <p class="path-desc">${esc(t(p.desc))}</p>
      <a class="hdr-btn primary path-go" href="${link(p.go.href)}">${esc(t(p.go.label))} →</a>
      <ul class="path-more">${p.more.map(m => `<li><a href="${link(m.href)}">${esc(t(m.label))}</a></li>`).join("")}</ul>
    </article>`).join("");

  $("all").innerHTML = ALL.filter(a => !a.only || a.only === lang)
    .map(a => `<li><a href="${link(a.href)}">${esc(t(a.label))}</a></li>`).join("");
}

$("btn-lang").onclick = () => {
  lang = lang === "ja" ? "en" : "ja";
  history.replaceState(null, "", lang === "en" ? "?lang=en" : location.pathname);
  render();
};

render();
