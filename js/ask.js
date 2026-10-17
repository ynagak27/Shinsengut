/* =====================================================================
   ASK — the "質問する / Ask" button on every page.
   Sends the visitor's question, with what they are looking at, to the
   Worker in js/ask-config.js (worker/ask.js), and shows the answer:
   the site-based part first, then any general knowledge in a separate,
   clearly marked box. Hidden until SSG_ASK_ENDPOINT is set.
   ===================================================================== */
(function () {
  const ENDPOINT = window.SSG_ASK_ENDPOINT || "";
  if (!ENDPOINT) return;

  const BASE = /\/play\//.test(location.pathname) ? "../" : "";
  const onPlay = BASE === "../";
  const onHome = /\/(index\.html)?$/.test(location.pathname) && !onPlay;

  const UI = {
    btn:     {ja: "質問する", en: "Ask"},
    title:   {ja: "新選組について質問する", en: "Ask about the Shinsengumi"},
    close:   {ja: "閉じる", en: "Close"},
    looking: {ja: "いま見ているもの", en: "You are looking at"},
    ph:      {ja: "知りたいことを入力してください（例：池田屋事件はなぜ起きたの？）", en: "Type your question (e.g. Why did the Ikedaya raid happen?)"},
    send:    {ja: "送信", en: "Send"},
    wait:    {ja: "サイトの本文をもとに考えています…", en: "Looking through the site…"},
    outside: {ja: "サイト外の一般的な知識（当サイトの出典ではありません）", en: "General knowledge — not from this site’s sources"},
    note:    {ja: "AIによる回答です。誤りを含むことがあります。リンク先の本文でご確認ください。", en: "Answers are written by AI and can contain mistakes. Check the linked pages."},
    fail:    {ja: "回答を取得できませんでした。少し時間をおいてお試しください。", en: "No answer could be fetched. Please try again in a moment."},
    again:   {ja: "続けて質問できます", en: "You can ask a follow-up"}
  };
  const SUGGEST = {
    place:  {ja: ["この出来事はなぜ起きたの？", "その後どうなった？", "これは史実？それとも伝承？"],
             en: ["Why did this happen?", "What happened next?", "Is this documented, or legend?"]},
    person: {ja: ["どんな人物だった？", "ほかの隊士との関係は？", "最期はどうだった？"],
             en: ["What was he like?", "How did he get on with the others?", "How did his life end?"]},
    none:   {ja: ["新選組はなぜ生まれたの？", "なぜ今も人気があるの？", "土方歳三はどんな人？"],
             en: ["Why was the Shinsengumi formed?", "Why are they still so popular?", "Who was Hijikata Toshizō?"]}
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
  let root, log, input, sendBtn, ctxBox, sugBox;

  function build() {
    root = document.createElement("div");
    root.className = "ssg-ask" + (onPlay ? " on-play" : "") + (/map\.html/.test(location.pathname) ? " on-map" : "");
    root.innerHTML = `
      <button type="button" class="ssg-ask-fab" aria-haspopup="dialog"><span class="q" aria-hidden="true">問</span><span class="l"></span></button>
      <div class="ssg-ask-panel" role="dialog" aria-modal="false" hidden>
        <div class="ssg-ask-head"><div class="ssg-ask-title"></div><button type="button" class="ssg-ask-x"></button></div>
        <div class="ssg-ask-ctx"></div>
        <div class="ssg-ask-log" aria-live="polite"></div>
        <div class="ssg-ask-sug"></div>
        <form class="ssg-ask-form"><textarea rows="2" maxlength="500"></textarea><button type="submit" class="ssg-ask-send"></button></form>
        <div class="ssg-ask-note"></div>
      </div>`;
    document.body.appendChild(root);
    // keep taps inside the panel from reaching the page (the visual novel advances on taps)
    ["click", "pointerdown", "mousedown", "touchstart", "keydown", "keyup"].forEach(ev =>
      root.addEventListener(ev, e => e.stopPropagation()));
    log = root.querySelector(".ssg-ask-log");
    input = root.querySelector("textarea");
    sendBtn = root.querySelector(".ssg-ask-send");
    ctxBox = root.querySelector(".ssg-ask-ctx");
    sugBox = root.querySelector(".ssg-ask-sug");
    root.querySelector(".ssg-ask-fab").onclick = open;
    root.querySelector(".ssg-ask-x").onclick = close;
    root.querySelector("form").onsubmit = e => { e.preventDefault(); ask(input.value); };
    input.addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey && !e.isComposing) { e.preventDefault(); ask(input.value); } });
    labels();
  }

  function labels() {
    root.querySelector(".ssg-ask-fab .l").textContent = t(UI.btn);
    root.querySelector(".ssg-ask-title").textContent = t(UI.title);
    root.querySelector(".ssg-ask-x").setAttribute("aria-label", t(UI.close));
    root.querySelector(".ssg-ask-x").textContent = "×";
    input.placeholder = t(UI.ph);
    sendBtn.textContent = t(UI.send);
    root.querySelector(".ssg-ask-note").textContent = t(UI.note);
  }

  function open() {
    labels();
    const c = context();
    ctxBox.hidden = !c;
    if (c) ctxBox.innerHTML = `<span>${esc(t(UI.looking))}</span>${esc(c.title)}`;
    if (!history.length) {
      const kind = !c ? "none" : (c.kind === "person" || c.kind === "bio") ? "person" : "place";
      sugBox.innerHTML = SUGGEST[kind][lang()].map(s => `<button type="button">${esc(s)}</button>`).join("");
      sugBox.querySelectorAll("button").forEach(b => b.onclick = () => ask(b.textContent));
    }
    root.querySelector(".ssg-ask-panel").hidden = false;
    root.classList.add("open");
    setTimeout(() => input.focus(), 50);
  }
  function close() {
    root.querySelector(".ssg-ask-panel").hidden = true;
    root.classList.remove("open");
  }

  /* [ev:id] / [p:id] markers in an answer become small links to the map or a biography */
  function render(text, refs) {
    return text.split(/\n+/).filter(Boolean).map(p => {
      let h = esc(p).replace(/\[(ev|p):([\w-]+)\]/g, (m, k, id) => {
        const title = refs[k + ":" + id];
        if (!title) return "";
        const href = BASE + withLang(k === "ev" ? "map.html?ev=" + id : "people.html?p=" + id);
        return ` <a class="ssg-ref" href="${href}">${esc(title)} →</a>`;
      });
      return `<p>${h}</p>`;
    }).join("");
  }

  async function ask(q) {
    q = (q || "").trim();
    if (!q || sendBtn.disabled) return;
    sugBox.innerHTML = "";
    input.value = "";
    sendBtn.disabled = true;
    const qEl = document.createElement("div");
    qEl.className = "ssg-ask-q"; qEl.textContent = q;
    const aEl = document.createElement("div");
    aEl.className = "ssg-ask-a wait"; aEl.textContent = t(UI.wait);
    log.append(qEl, aEl);
    aEl.scrollIntoView({block: "nearest"});
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({q, lang: lang(), context: context(), history})
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.error) throw new Error(data.error || t(UI.fail));
      aEl.classList.remove("wait");
      aEl.innerHTML = render(data.answer, data.refs || {}) +
        (data.outside ? `<div class="ssg-ask-out"><div class="lbl">${esc(t(UI.outside))}</div>${render(data.outside, data.refs || {})}</div>` : "");
      history.push({role: "user", content: q}, {role: "assistant", content: data.answer + (data.outside ? "\n" + data.outside : "")});
      history = history.slice(-4);
      input.placeholder = t(UI.again);
    } catch (e) {
      aEl.classList.remove("wait");
      aEl.classList.add("err");
      aEl.textContent = e.message || t(UI.fail);
    }
    sendBtn.disabled = false;
    qEl.scrollIntoView({block: "start", behavior: "smooth"});
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build); else build();
})();
