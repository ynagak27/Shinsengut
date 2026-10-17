/* =====================================================================
   ASK — for readers who want to go deeper than the site.

   Not a prominent button: a quiet line at the end of each page's content
   (「本サイトの内容より深く知りたい方へ」). It opens a panel where the
   question is answered in two steps by the Worker in js/ask-config.js:
     1. from the site's own content (with links to the events and people used);
     2. only if the site doesn't fully cover it, from the wider web, with
        every source listed. A reader can also choose step 2 themselves.
   Hidden until SSG_ASK_ENDPOINT is set.
   ===================================================================== */
(function () {
  const ENDPOINT = window.SSG_ASK_ENDPOINT || "";
  if (!ENDPOINT) return;

  const onPlay = /\/play\//.test(location.pathname);
  const BASE = onPlay ? "../" : "";
  const onHome = !onPlay && /\/(index\.html)?$/.test(location.pathname);

  /* where the quiet line goes on each page: [selector, "append" | "after"] */
  const SLOTS = [
    ["#detail", "append"],          // map: under the open event, person or intro
    ["#pp", "append"],              // people: under the list or a biography
    ["article.story > .story-ctas", "after"],   // story and basics pages
    [".home .everything", "after"], // front page
    ["main-screen .ss-foot", "append"]          // play: the chapter list
  ];

  const UI = {
    lead:    {ja: "本サイトの内容より深く知りたい方へ", en: "Want to go further than this site covers?"},
    entry:   {ja: "質問する（AI）", en: "Ask a question (AI)"},
    title:   {ja: "さらに深く調べる", en: "Go deeper"},
    how:     {ja: "まず本サイトの内容から答え、サイトにない部分はウェブで調べて出典とともに示します。", en: "Answers come from this site first. Anything it doesn’t cover is looked up on the web, with sources."},
    close:   {ja: "閉じる", en: "Close"},
    looking: {ja: "いま見ているもの", en: "You are looking at"},
    ph:      {ja: "知りたいことを入力してください", en: "Type your question"},
    send:    {ja: "送信", en: "Send"},
    waitS:   {ja: "本サイトの内容を確認しています…", en: "Checking this site…"},
    waitW:   {ja: "ウェブで調べています…", en: "Searching the web…"},
    fromSite:{ja: "本サイトの内容から", en: "From this site"},
    fromWeb: {ja: "ウェブで調べた内容（本サイトの出典ではありません）", en: "From the web — not this site’s sources"},
    sources: {ja: "出典", en: "Sources"},
    moreWeb: {ja: "ウェブでさらに調べる", en: "Search the web for more"},
    noWeb:   {ja: "信頼できる情報源は見つかりませんでした。", en: "No reliable sources were found."},
    note:    {ja: "AIによる回答です。誤りを含むことがあります。リンク先でご確認ください。", en: "Answers are written by AI and can contain mistakes. Check the linked pages and sources."},
    fail:    {ja: "回答を取得できませんでした。少し時間をおいてお試しください。", en: "No answer could be fetched. Please try again in a moment."},
    again:   {ja: "続けて質問できます", en: "You can ask a follow-up"}
  };

  const lang = () => (document.documentElement.lang === "en" ? "en" : "ja");
  const t = o => o[lang()];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;"}[c]));
  const withLang = h => lang() === "en" ? h + (h.includes("?") ? "&" : "?") + "lang=en" : h;

  /* what the reader is looking at: the place js/resume.js recorded for this page */
  function context() {
    if (onHome || !window.SSG_RESUME) return null;
    const r = SSG_RESUME.load();
    if (!r || !r.title || Date.now() - (r.t || 0) > 6 * 3600 * 1000) return null;
    return { sub: t(r.sub || {ja: "", en: ""}), title: t(r.title), ref: r.href, kind: r.kind };
  }

  let history = [];
  let root, panel, log, input, sendBtn, ctxBox;

  /* ---------- the quiet line at the end of each page ---------- */
  function placeEntries() {
    for (const [sel, where] of SLOTS) {
      document.querySelectorAll(sel).forEach(host => {
        const parent = where === "after" ? host.parentNode : host;
        let entry = where === "after" ? (host.nextElementSibling && host.nextElementSibling.classList.contains("ssg-ask-entry") ? host.nextElementSibling : null)
                                       : host.querySelector(":scope > .ssg-ask-entry");
        if (!entry) {
          entry = document.createElement("div");
          entry.className = "ssg-ask-entry" + (onPlay ? " on-play" : "");
          entry.innerHTML = `<span class="lead"></span><button type="button" class="ssg-ask-open"></button>`;
          entry.querySelector("button").onclick = e => { e.stopPropagation(); open(); };
          if (where === "after") parent.insertBefore(entry, host.nextSibling); else parent.appendChild(entry);
        }
        if (entry.dataset.lang !== lang()) {
          entry.dataset.lang = lang();
          entry.querySelector(".lead").textContent = t(UI.lead);
          entry.querySelector("button").textContent = t(UI.entry) + " →";
        }
      });
    }
  }

  /* ---------- the panel ---------- */
  function build() {
    root = document.createElement("div");
    root.className = "ssg-ask";
    root.innerHTML = `
      <div class="ssg-ask-panel" role="dialog" aria-modal="false" hidden>
        <div class="ssg-ask-head"><div class="ssg-ask-title"></div><button type="button" class="ssg-ask-x">×</button></div>
        <div class="ssg-ask-how"></div>
        <div class="ssg-ask-ctx"></div>
        <div class="ssg-ask-log" aria-live="polite"></div>
        <form class="ssg-ask-form"><textarea rows="2" maxlength="500"></textarea><button type="submit" class="ssg-ask-send"></button></form>
        <div class="ssg-ask-note"></div>
      </div>`;
    document.body.appendChild(root);
    // keep taps inside the panel from reaching the page (the visual novel advances on taps)
    ["click", "pointerdown", "mousedown", "touchstart", "keydown", "keyup"].forEach(ev =>
      root.addEventListener(ev, e => e.stopPropagation()));
    panel = root.querySelector(".ssg-ask-panel");
    log = root.querySelector(".ssg-ask-log");
    input = root.querySelector("textarea");
    sendBtn = root.querySelector(".ssg-ask-send");
    ctxBox = root.querySelector(".ssg-ask-ctx");
    root.querySelector(".ssg-ask-x").onclick = close;
    root.querySelector("form").onsubmit = e => { e.preventDefault(); ask(input.value); };
    input.addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey && !e.isComposing) { e.preventDefault(); ask(input.value); } });

    placeEntries();
    let timer = null;
    new MutationObserver(() => { clearTimeout(timer); timer = setTimeout(placeEntries, 60); })
      .observe(document.body, { childList: true, subtree: true });
    new MutationObserver(placeEntries).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
  }

  function open() {
    root.querySelector(".ssg-ask-title").textContent = t(UI.title);
    root.querySelector(".ssg-ask-x").setAttribute("aria-label", t(UI.close));
    root.querySelector(".ssg-ask-how").textContent = t(UI.how);
    root.querySelector(".ssg-ask-note").textContent = t(UI.note);
    if (!history.length) input.placeholder = t(UI.ph);
    sendBtn.textContent = t(UI.send);
    const c = context();
    ctxBox.hidden = !c;
    if (c) ctxBox.innerHTML = `<span>${esc(t(UI.looking))}</span>${esc(c.title)}`;
    panel.hidden = false;
    setTimeout(() => input.focus(), 50);
  }
  function close() { panel.hidden = true; }

  /* site answers: [ev:id] / [p:id] become small links; web answers: [[n]] become numbered source links */
  function renderSite(text, refs) {
    return text.split(/\n+/).filter(Boolean).map(p => `<p>${esc(p).replace(/\[(ev|p):([\w-]+)\]/g, (m, k, id) => {
      const title = refs[k + ":" + id];
      if (!title) return "";
      const href = BASE + withLang(k === "ev" ? "map.html?ev=" + id : "people.html?p=" + id);
      return ` <a class="ssg-ref" href="${href}">${esc(title)} →</a>`;
    })}</p>`).join("");
  }
  function renderWeb(text, sources) {
    const body = text.split(/\n+/).filter(Boolean).map(p => `<p>${esc(p).replace(/\[\[(\d+)\]\]/g, (m, n) => {
      const s = sources[n - 1];
      return s ? `<a class="ssg-cite" href="${esc(s.url)}" target="_blank" rel="noopener">${n}</a>` : "";
    })}</p>`).join("");
    const list = sources.length ? `<div class="srcs"><div class="lbl">${esc(t(UI.sources))}</div><ol>${sources.map(s => {
      let host = ""; try { host = new URL(s.url).hostname.replace(/^www\./, ""); } catch (e) {}
      return `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.title)}</a> <span>${esc(host)}</span></li>`;
    }).join("")}</ol></div>` : "";
    return body + list;
  }

  async function call(payload) {
    const res = await fetch(ENDPOINT, { method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(payload) });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || data.error) throw new Error(data.error || t(UI.fail));
    return data;
  }

  async function web(q, siteAnswer, box) {
    box.className = "ssg-ask-web wait";
    box.textContent = t(UI.waitW);
    try {
      const data = await call({ mode: "web", q, lang: lang(), context: context(), history, siteAnswer });
      box.className = "ssg-ask-web";
      box.innerHTML = `<div class="lbl">${esc(t(UI.fromWeb))}</div>` +
        (data.answer ? renderWeb(data.answer, data.sources || []) : `<p>${esc(t(UI.noWeb))}</p>`);
      return data.answer || "";
    } catch (e) {
      box.className = "ssg-ask-web err";
      box.textContent = e.message || t(UI.fail);
      return "";
    }
  }

  async function ask(q) {
    q = (q || "").trim();
    if (!q || sendBtn.disabled) return;
    input.value = "";
    sendBtn.disabled = true;
    const qEl = document.createElement("div");
    qEl.className = "ssg-ask-q"; qEl.textContent = q;
    const aEl = document.createElement("div");
    aEl.className = "ssg-ask-a wait"; aEl.textContent = t(UI.waitS);
    log.append(qEl, aEl);
    qEl.scrollIntoView({block: "nearest"});
    let remembered = "";
    try {
      const data = await call({ mode: "site", q, lang: lang(), context: context(), history });
      aEl.className = "ssg-ask-a";
      aEl.innerHTML = `<div class="lbl">${esc(t(UI.fromSite))}</div>${renderSite(data.answer, data.refs || {})}`;
      remembered = data.answer;
      if (data.coverage === "partial" || data.coverage === "none") {
        // the site doesn't fully cover it: go on to the web
        const box = document.createElement("div"); aEl.after(box);
        const w = await web(q, data.answer, box);
        if (w) remembered += "\n" + w;
      } else if (data.coverage === "full") {
        // covered: the reader can still choose to search the web
        const more = document.createElement("button");
        more.type = "button"; more.className = "ssg-ask-more"; more.textContent = t(UI.moreWeb) + " →";
        more.onclick = async () => { const box = document.createElement("div"); more.replaceWith(box); await web(q, data.answer, box); };
        aEl.after(more);
      }
      history.push({role: "user", content: q}, {role: "assistant", content: remembered});
      history = history.slice(-4);
      input.placeholder = t(UI.again);
    } catch (e) {
      aEl.className = "ssg-ask-a err";
      aEl.textContent = e.message || t(UI.fail);
    }
    sendBtn.disabled = false;
    qEl.scrollIntoView({block: "start", behavior: "smooth"});
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build); else build();
})();
