/* =====================================================================
   STORY PAGE — renders data/story.js. The text itself lives there.
   ===================================================================== */

const UI = {
  site:    {en: "The Road of Shinsengumi", ja: "新選組の軌跡"},
  map:     {en: "← Back to the map", ja: "← 地図に戻る"},
  lang:    {en: "日本語", ja: "English"},
  toShort: {en: "Read the short version", ja: "概要だけ読む"},
  toLong:  {en: "Read the full story", ja: "全文を読む"},
  toc:     {en: "Contents", ja: "目次"},
  explore: {en: "Explore the map →", ja: "地図でたどる →"},
  play:    {en: "Experience the story →", ja: "物語で体験する →"}
};

let lang = new URLSearchParams(location.search).get("lang") === "en" ? "en" : "ja";
/* ?v=short opens the short version (the front page links to it) */
let mode = new URLSearchParams(location.search).get("v") === "short" ? "short" : "long";
const t = o => (o && o[lang] !== undefined) ? o[lang] : "";
const $ = id => document.getElementById(id);

/* Paragraphs are built as text, not HTML, so nothing in the story can
   break the page. "\n\n" in the data starts a new paragraph. */
function paragraphs(parent, text) {
  text.split("\n\n").forEach(p => {
    const el = document.createElement("p");
    el.textContent = p;
    parent.appendChild(el);
  });
}

function render() {
  document.documentElement.lang = lang;
  const mapHref = "map.html" + (lang === "en" ? "?lang=en" : "");
  $("h-title").href = "index.html" + (lang === "en" ? "?lang=en" : "");

  $("h-title").textContent = t(UI.site);
  $("btn-map").textContent = t(UI.map);
  $("btn-map").href = mapHref;
  $("btn-lang").textContent = t(UI.lang);
  $("s-eyebrow").textContent = t(STORY.eyebrow);
  $("s-title").textContent = t(STORY.title);
  $("s-lede").textContent = t(STORY.lede);
  $("s-basics").hidden = lang !== "en";
  $("s-toc-label").textContent = t(UI.toc);
  $("btn-explore").textContent = t(UI.explore);
  $("btn-explore").href = mapHref;
  $("btn-play").textContent = t(UI.play);
  $("btn-play").href = "play/" + (lang === "en" ? "?lang=en" : "");

  $("btn-version").textContent = mode === "long" ? t(UI.toShort) : t(UI.toLong);
  $("btn-version").setAttribute("aria-pressed", mode === "short");
  $("s-long").hidden = mode !== "long";
  $("s-short").hidden = mode !== "short";

  const toc = $("s-toc"), chapters = $("s-chapters");
  toc.replaceChildren();
  chapters.replaceChildren();
  STORY.long.forEach((ch, i) => {
    const id = "ch-" + (i + 1);

    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#" + id;
    a.textContent = t(ch.h);
    li.appendChild(a);
    toc.appendChild(li);

    const sec = document.createElement("section");
    sec.className = "chapter";
    const h = document.createElement("h3");
    h.id = id;
    const no = document.createElement("span");
    no.className = "ch-no";
    no.textContent = String(i + 1).padStart(2, "0");
    h.append(no, t(ch.h));
    sec.appendChild(h);
    paragraphs(sec, t(ch.b));
    chapters.appendChild(sec);
  });

  const short = $("s-short");
  short.replaceChildren();
  STORY.short.forEach(p => paragraphs(short, t(p)));
  remember();
}

/* Remember the section on screen, so the front page can offer to pick
   up here next time (js/resume.js; stored only in this browser). */
function storyPlace(id) {
  const i = id ? parseInt(id.slice(3), 10) - 1 : -1;
  return {kind: "story", href: "story.html" + (id ? "#" + id : ""),
          title: STORY.long[i] ? STORY.long[i].h : STORY.title,
          sub: {ja: "「新選組とは」を読む", en: "Reading “Who were the Shinsengumi?”"},
          action: {ja: "続きを読む", en: "Continue reading"}};
}
function remember() {
  if (!window.SSG_RESUME) return;
  if (mode === "short") {
    SSG_RESUME.save({kind: "story", href: "story.html?v=short", title: {ja: "新選組とは（短縮版）", en: "Who were the Shinsengumi? (short version)"},
      sub: {ja: "「新選組とは」を読む", en: "Reading the story"}, action: {ja: "もう一度読む", en: "Read it again"}});
  } else {
    if (!location.hash) SSG_RESUME.save(storyPlace(null));
    SSG_RESUME.watchSections("#s-chapters h3", storyPlace);
  }
}

$("btn-lang").onclick = () => {
  lang = lang === "ja" ? "en" : "ja";
  const q = new URLSearchParams(location.search);
  if (lang === "en") q.set("lang", "en"); else q.delete("lang");
  history.replaceState(null, "", q.toString() ? "?" + q : location.pathname);
  render();
};
$("btn-version").onclick = () => {
  mode = mode === "long" ? "short" : "long";
  render();
  $("s-title").scrollIntoView({block: "start"});
};

render();
/* the sections are built by script, so jump to a #ch-N link ourselves */
if (location.hash && document.getElementById(location.hash.slice(1))) document.getElementById(location.hash.slice(1)).scrollIntoView();
