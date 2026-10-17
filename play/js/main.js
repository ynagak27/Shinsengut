'use strict';
/* global Monogatari, monogatari, PLAY */
/* =====================================================================
   PLAY page — the site's skin and extra UI around Monogatari:
   title screen, header, eyebrow, 史実/逸話 note, map credit, haiku.
   Text lives in data/play.js; UI strings are below.
   ===================================================================== */

const { $_ready } = Monogatari;

const UI = {
	site:     { ja: '新選組の軌跡', en: 'The Road of Shinsengumi' },
	rule:     { ja: '史実と、記録のない部分に限り広く知られた逸話のみで構成しています。', en: 'Built only from the record, with well-known anecdotes where the record is silent.' },
	record:   { ja: '史実', en: 'Record' },
	anecdote: { ja: '逸話', en: 'Anecdote' },
	source:   { ja: '出典', en: 'Source' },
	other:    { ja: 'English', en: '日本語' },
	map:      { ja: '← 地図に戻る', en: '← Back to the map' },
	story:    { ja: '物語を読む', en: 'Read the story' },
	heading:  { ja: '物語で体験する', en: 'Experience the story' },
	intro:    { ja: '新選組の歩みの要所を、一場面ずつ、当時の地図の上でたどります。', en: 'Key moments in the Shinsengumi’s story, one scene at a time, over the maps of the day.' },
	chapters: { ja: '章', en: 'Chapters' },
	begin:    { ja: '読みはじめる', en: 'Begin' },
	again:    { ja: '読了 · もう一度', en: 'Read · again' },
	maps:     { ja: '地図の出典', en: 'Maps' }
};

/* Language follows the rest of the site: ?lang=en, otherwise Japanese. */
function wantedLang() {
	const q = new URLSearchParams(location.search).get('lang');
	if (q) return q === 'en' ? 'English' : '日本語';
	if (location.hash === '#en') return 'English';
	return '日本語';
}
const isJa = () => monogatari.preference('Language') === '日本語';
const t = o => o[isJa() ? 'ja' : 'en'];
const siteHref = page => '../' + page + (isJa() ? '' : '?lang=en');

function el(tag, cls, html) {
	const e = document.createElement(tag);
	if (cls) e.className = cls;
	if (html !== undefined) e.innerHTML = html;
	return e;
}

/* ---------- Title screen: the chapter list ---------- */
function stamps() {
	try { return new Set(JSON.parse(localStorage.getItem('shinsengumi.stamps') || '[]')); } catch (e) { return new Set(); }
}

function startChapter(id) {
	window.PLAY_CHAPTER = id;
	const start = document.querySelector('main-menu [data-action="start"]');
	if (start) start.click();
}

/* Credits for every period map the chapters use, in the holders' own
   wording from data/oldmaps.js. */
function mapCredits() {
	const used = new Set(Object.values(PLAY.places).map(p => p.map));
	return (typeof OLD_MAPS === 'undefined' ? [] : OLD_MAPS)
		.filter(m => used.has(m.id))
		.map(m => `<p class="ss-credit"><span>${t(m.title)}</span> ${t(m.credit)}</p>`).join('');
}

function buildTitle() {
	const screen = document.querySelector('main-screen');
	if (!screen) return;
	let card = screen.querySelector('.ss-title');
	if (!card) {
		screen.prepend(el('div', 'ss-dangara'));
		card = el('div', 'ss-title');
		screen.insertBefore(card, screen.querySelector('main-menu'));
		screen.appendChild(el('div', 'ss-foot'));
	}
	const done = stamps();
	const list = PLAY.chapters.map(ch => `
		<button type="button" class="ss-ch" data-ch="${ch.id}">
			<span class="ss-chmeta">${t(ch.no)}<i>·</i>${t(ch.span)}</span>
			<span class="ss-chtitle">${t(ch.title)}</span>
			<span class="ss-chlede">${t(ch.lede)}</span>
			<span class="ss-chgo${done.has(ch.id) ? ' done' : ''}">${done.has(ch.id) ? t(UI.again) : t(UI.begin)} →</span>
		</button>`).join('');
	card.innerHTML = `
		<a class="ss-series" href="${siteHref('index.html')}">${t(UI.site)}</a>
		<h1 class="ss-h1 ss-h1-sm">${t(UI.heading)}</h1>
		<p class="ss-lede">${t(UI.intro)}</p>
		<div class="ss-key"><span class="ss-chip rec">${t(UI.record)}</span><span class="ss-chip anec">${t(UI.anecdote)}</span><span class="ss-keytext">${t(UI.rule)}</span></div>
		<div class="ss-eyebrow ss-listhead">${t(UI.chapters)}</div>
		<div class="ss-chlist">${list}</div>`;
	card.querySelectorAll('.ss-ch').forEach(b => { b.onclick = () => startChapter(b.dataset.ch); });
	const foot = screen.querySelector('.ss-foot');
	foot.innerHTML = '';
	const row = el('div', 'ss-links');
	const lb = el('button', 'ss-lang', t(UI.other));
	lb.type = 'button';
	lb.onclick = () => setLang(isJa() ? 'English' : '日本語');
	const map = el('a', 'ss-lang', t(UI.map)); map.href = siteHref('index.html');
	const story = el('a', 'ss-lang', t(UI.story)); story.href = siteHref('story.html');
	row.append(map, story, lb);
	foot.append(row, el('div', 'ss-credits', `<div class="ss-eyebrow">${t(UI.maps)}</div>${mapCredits()}`));
	document.documentElement.lang = isJa() ? 'ja' : 'en';
}

function setLang(l) {
	monogatari.preference('Language', l);
	monogatari.localize();
	const url = new URL(location.href);
	if (l === 'English') url.searchParams.set('lang', 'en'); else url.searchParams.delete('lang');
	history.replaceState(null, '', url);
	buildTitle();
	buildHud();
	updateBeat();
}

/* ---------- In-game header ---------- */
function buildHud() {
	const screen = document.querySelector('game-screen');
	if (!screen) return;
	let hud = screen.querySelector('.ss-hud');
	if (!hud) { hud = el('div', 'ss-hud'); screen.appendChild(hud); }
	hud.innerHTML = `<div class="ss-dangara"></div>
		<div class="ss-hudrow">
			<div class="ss-hudtitle"><span class="ss-hudch"></span><span class="ss-hudname"></span></div>
		</div>
		<div class="ss-progress"><span></span></div>
		<div class="ss-mapcredit"></div>`;
}

/* ---------- Eyebrow, source note, map credit and haiku for the current beat ---------- */
function ensure(parent, cls, where) {
	let n = parent.querySelector(':scope > .' + cls);
	if (!n) { n = el('div', cls); where === 'first' ? parent.prepend(n) : parent.appendChild(n); }
	return n;
}

function currentBeat() {
	const lang = monogatari.preference('Language');
	const tags = ((window.SOURCE_TAGS || {})[lang] || {})[monogatari.state('label')] || {};
	const step = monogatari.state('step');
	let beat = null;
	Object.keys(tags).map(Number).sort((a, b) => a - b).forEach(i => { if (i <= step) beat = tags[i]; });
	return beat;
}

function updateBeat() {
	const box = document.querySelector('text-box');
	const hud = document.querySelector('.ss-hud');
	if (!box) return;
	const beat = currentBeat();
	const meta = ensure(box, 'ss-meta', 'first');
	const note = ensure(box, 'ss-note');
	const poem = ensure(box, 'ss-poemtext');
	if (!beat) { meta.innerHTML = ''; note.innerHTML = ''; note.hidden = true; poem.innerHTML = ''; return; }
	const ja = isJa();
	const place = PLAY.places[beat.scene];
	const n = String(beat.n).padStart(2, '0') + ' / ' + String(beat.total).padStart(2, '0');
	meta.innerHTML = `<span class="ss-when">${beat.year}<i>·</i>${ja ? place.ja : place.en}</span><span class="ss-count">${n}</span>`;
	note.hidden = false;
	note.dataset.kind = beat.kind;
	note.innerHTML = `<span class="ss-notelabel">${beat.kind === 'record' ? t(UI.record) : t(UI.anecdote)}</span><span class="ss-notesrc">${t(UI.source)}：${ja ? beat.src.ja : beat.src.en}</span>`;
	box.classList.toggle('ss-poem', !!beat.poem);
	box.classList.toggle('ss-ja', ja);
	if (beat.poem) {
		const html = ja ? beat.ja : beat.en;
		if (poem.dataset.html !== html) { poem.dataset.html = html; poem.innerHTML = html; poem.classList.remove('in'); void poem.offsetWidth; poem.classList.add('in'); }
	} else { poem.innerHTML = ''; poem.dataset.html = ''; }
	if (hud) {
		const ch = PLAY.chapters.find(c => c.id === beat.chapter) || PLAY.chapters[0];
		hud.querySelector('.ss-hudch').textContent = t(ch.no);
		hud.querySelector('.ss-hudname').textContent = t(ch.title);
		hud.querySelector('.ss-progress span').style.width = (beat.n / beat.total * 100) + '%';
		const c = PLAY.mapCredits[place.map];
		hud.querySelector('.ss-mapcredit').textContent = ja ? c.ja : c.en;
	}
}

/* Set the language before the engine loads its saved preferences. */
monogatari.preferences({ 'Language': wantedLang() });

$_ready(() => {
	monogatari.init('#monogatari').then(() => {
		const l = wantedLang();
		if (monogatari.preference('Language') !== l) { monogatari.preference('Language', l); monogatari.localize(); }
		buildTitle();
		buildHud();
		['didUpdateState', 'didRunAction', 'didRevertAction', 'didLoadGame', 'didLocalize']
			.forEach(e => monogatari.on(e, () => setTimeout(updateBeat, 0)));
		// refresh the chapter list (and its "read" marks) on returning to it
		new MutationObserver(() => { if (document.querySelector('main-screen.active')) buildTitle(); })
			.observe(document.querySelector('main-screen'), { attributes: true, attributeFilter: ['class'] });
	});
});
