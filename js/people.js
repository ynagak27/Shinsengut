/* =====================================================================
   PEOPLE PAGE — renders data/people.js.
   people.html          → everyone, grouped (PEOPLE_GROUPS)
   people.html?p=<id>   → one biography, with links back to the map
   The text itself lives in data/people.js and data/events.js.
   ===================================================================== */

const UI = {
  site:     {en: "The Road of Shinsengumi", ja: "新選組の軌跡"},
  map:      {en: "← Back to the map", ja: "← 地図に戻る"},
  lang:     {en: "日本語", ja: "English"},
  eyebrow:  {en: "Members & associates", ja: "隊士と関係者"},
  title:    {en: "The men of the Shinsengumi", ja: "新選組の隊士"},
  lede:     {en: "The leaders, the unit captains, the officers who ran the corps, the men who fought on to Hakodate — and two outsiders without whom there would have been no Shinsengumi. Choose anyone to read his life in full.",
             ja: "局長・副長から各組の組長、隊を動かした幹部、箱館まで戦い抜いた者たち、そして彼らなしには新選組が生まれなかった二人の外部の人物まで。名前を選ぶと、その生涯を読むことができます。"},
  count:    {en: n => `${n} people`, ja: n => `${n}名`},
  all:      {en: "← All members", ja: "← 隊士一覧"},
  onMap:    {en: "Follow him on the map →", ja: "地図で足取りをたどる →"},
  appears:  {en: "Appears in", ja: "関連する出来事"},
  legend:   {en: "Legend & disputed accounts", ja: "伝承・異説"},
  prev:     {en: "Previous", ja: "前の人物"},
  next:     {en: "Next", ja: "次の人物"},
  notFound: {en: "No one by that name is in the list yet.", ja: "該当する人物はまだ登録されていません。"}
};

let lang = new URLSearchParams(location.search).get("lang") === "en" ? "en" : "ja";
const t = o => (o && o[lang] !== undefined) ? o[lang] : "";
const $ = id => document.getElementById(id);
const other = () => lang === "en" ? "ja" : "en";

/* Every link carries the language along. */
function href(page, params = {}) {
  const q = new URLSearchParams(params);
  if (lang === "en") q.set("lang", "en");
  const s = q.toString();
  return page + (s ? "?" + s : "");
}

/* Small DOM builder. Text always goes in as text, never HTML. */
function el(tag, cls, text) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text !== undefined) n.textContent = text;
  return n;
}
function paragraphs(parent, text) {
  text.split("\n\n").forEach(p => parent.appendChild(el("p", "", p)));
}
const mon = (p, cls) => el("span", "mon " + (cls || ""), p.kanji);

/* Same event order and numbering as the map (js/app.js): main-story
   events are numbered in date order, other corps events are "•", national
   events are ◇. */
EVENTS.forEach(e => { e.kind = "corps"; });
CONTEXT.forEach(e => { e.kind = "context"; });
const ALL = [...EVENTS, ...CONTEXT].sort((a, b) => a.sort.localeCompare(b.sort));
let rn = 0;
ALL.forEach(e => { e.no = e.kind === "context" ? "◇" : e.story ? ++rn : "•"; });

/* Directory order: by group, captains by unit number. */
const unitNo = p => { const m = /(\d+)\w* unit/.exec(p.role.en); return m ? +m[1] : 99; };
function groupMembers(gid) {
  const ids = Object.keys(PEOPLE).filter(id => (PEOPLE[id].group || "officers") === gid);
  if (gid === "captains") ids.sort((a, b) => unitNo(PEOPLE[a]) - unitNo(PEOPLE[b]));
  return ids;
}
const ORDER = PEOPLE_GROUPS.flatMap(g => groupMembers(g.id));

/* ---------- directory ---------- */
function renderDirectory(root) {
  document.title = `${t(UI.title)} — ${t(UI.site)}`;
  const head = el("div", "pp-head");
  head.append(el("div", "pp-eyebrow", t(UI.eyebrow)), el("h2", "pp-title", t(UI.title)), el("p", "pp-lede", t(UI.lede)));

  const jump = el("nav", "pp-jump");
  jump.setAttribute("aria-label", t(UI.title));
  head.appendChild(jump);
  root.appendChild(head);

  PEOPLE_GROUPS.forEach(g => {
    const ids = groupMembers(g.id);
    if (!ids.length) return;
    const a = el("a", "", `${t(g.label)} `);
    a.href = "#g-" + g.id;
    a.appendChild(el("span", "pp-n", ids.length));
    jump.appendChild(a);

    const sec = el("section", "pp-group");
    const h = el("h3", "pp-group-h", t(g.label));
    h.id = "g-" + g.id;
    h.appendChild(el("span", "pp-n", t(UI.count)(ids.length)));
    const grid = el("div", "pp-cards");
    ids.forEach(id => {
      const p = PEOPLE[id];
      const card = el("a", "pp-card");
      card.href = href("people.html", {p: id});
      const top = el("div", "pp-card-top");
      const names = el("div", "pp-card-names");
      names.append(el("span", "pp-card-name", t(p.name)), el("span", "pp-card-alt", p.name[other()]));
      top.append(mon(p), names);
      const meta = el("div", "pp-card-meta");
      meta.append(el("span", "", t(p.role)), el("span", "pp-card-life", p.life));
      card.append(top, meta, el("p", "pp-card-sum", t(p.summary)));
      grid.appendChild(card);
    });
    sec.append(h, grid);
    root.appendChild(sec);
  });
}

/* ---------- one biography ---------- */
function renderPerson(root, id) {
  const p = PEOPLE[id];
  if (p && window.SSG_RESUME) SSG_RESUME.save({kind: "bio", href: "people.html?p=" + id, title: p.name,
    sub: {ja: "隊士", en: "The members"}, action: {ja: "生涯を読む", en: "Read his life"}});
  document.title = `${t(p.name)} — ${t(UI.title)}`;

  const back = el("a", "pp-back", t(UI.all));
  back.href = href("people.html") + "#g-" + (p.group || "officers");
  root.appendChild(back);

  const head = el("div", "pp-bio-head");
  const names = el("div");
  names.append(
    el("div", "pp-eyebrow", t(p.role)),
    el("h2", "pp-title", t(p.name)),
    el("div", "pp-bio-alt", `${p.name[other()]}　${p.life}`)
  );
  head.append(mon(p, "big"), names);
  root.appendChild(head);

  root.appendChild(el("p", "pp-summary", t(p.summary)));

  const onMap = el("a", "hdr-btn primary pp-mapbtn", t(UI.onMap));
  onMap.href = href("map.html", {person: id});
  root.appendChild(onMap);

  (p.sections || []).forEach(s => {
    const sec = el("section", "pp-sect");
    sec.appendChild(el("h3", "", t(s.h)));
    paragraphs(sec, t(s.b));
    root.appendChild(sec);
  });

  if (p.legend) {
    const box = el("div", "legend-box pp-legend");
    box.appendChild(el("span", "lg-label", t(UI.legend)));
    paragraphs(box, t(p.legend));
    root.appendChild(box);
  }

  const evs = ALL.filter(e => e.people && e.people.includes(id));
  if (evs.length) {
    root.appendChild(el("div", "d-sub", `${t(UI.appears)} — ${evs.length}`));
    const list = el("div", "link-list");
    evs.forEach(e => {
      const a = el("a", "link-item");
      a.href = href("map.html", {ev: e.id});
      const top = el("div", "li-top");
      top.append(
        el("span", "no " + (e.kind === "context" ? "ctx" : ""), String(e.no)),
        el("span", "yr", e.year),
        el("span", "", t(e.title))
      );
      a.appendChild(top);
      if (e.roles && e.roles[id]) a.appendChild(el("div", "li-role", t(e.roles[id])));
      list.appendChild(a);
    });
    root.appendChild(list);
  }

  /* previous / next in directory order */
  const i = ORDER.indexOf(id);
  const nav = el("nav", "pp-pn");
  [[ORDER[i - 1], UI.prev, "prev"], [ORDER[i + 1], UI.next, "next"]].forEach(([nid, label, cls]) => {
    if (!nid) { nav.appendChild(el("span")); return; }
    const a = el("a", "pp-pn-" + cls);
    a.href = href("people.html", {p: nid});
    a.append(el("span", "pp-pn-label", t(label)), el("span", "pp-pn-name", t(PEOPLE[nid].name)));
    nav.appendChild(a);
  });
  root.appendChild(nav);
}

function render() {
  document.documentElement.lang = lang;
  $("h-title").textContent = t(UI.site);
  $("btn-map").textContent = t(UI.map);
  $("btn-map").href = href("map.html");
  $("h-title").href = href("index.html");
  $("btn-lang").textContent = t(UI.lang);

  const id = new URLSearchParams(location.search).get("p");
  const root = $("pp");
  root.replaceChildren();
  root.classList.toggle("pp-bio", !!id);
  if (!id) renderDirectory(root);
  else if (PEOPLE[id]) renderPerson(root, id);
  else {
    root.appendChild(el("p", "pp-lede", t(UI.notFound)));
    const a = el("a", "pp-back", t(UI.all));
    a.href = href("people.html");
    root.appendChild(a);
  }
}

$("btn-lang").onclick = () => {
  lang = lang === "ja" ? "en" : "ja";
  const q = new URLSearchParams(location.search);
  if (lang === "en") q.set("lang", "en"); else q.delete("lang");
  const s = q.toString();
  history.replaceState(null, "", location.pathname + (s ? "?" + s : "") + location.hash);
  render();
};

render();
/* the page is built after load, so jump to a #group anchor by hand */
if (location.hash) { const target = document.querySelector(location.hash); if (target) target.scrollIntoView(); }
