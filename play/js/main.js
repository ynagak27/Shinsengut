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
	story:    { ja: '物語を読む', en: 'Read the story' }
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

/* ---------- Title screen ---------- */
function buildTitle() {
	const screen = document.querySelector('main-screen');
	if (!screen) return;
	const ch = PLAY.chapters[0];
	let card = screen.querySelector('.ss-title');
	if (!card) {
		screen.prepend(el('div', 'ss-dangara'));
		card = el('div', 'ss-title');
		screen.insertBefore(card, screen.querySelector('main-menu'));
		screen.appendChild(el('div', 'ss-foot'));
	}
	card.innerHTML = `
		<a class="ss-series" href="${siteHref('index.html')}">${t(UI.site)}</a>
		<div class="ss-eyebrow">${t(ch.no)}</div>
		<h1 class="ss-h1">${t(ch.title)}</h1>
		<div class="ss-span">${t(ch.span)}</div>
		<p class="ss-lede">${t(ch.lede)}</p>
		<div class="ss-key"><span class="ss-chip rec">${t(UI.record)}</span><span class="ss-chip anec">${t(UI.anecdote)}</span><span class="ss-keytext">${t(UI.rule)}</span></div>`;
	const foot = screen.querySelector('.ss-foot');
	foot.innerHTML = '';
	const row = el('div', 'ss-links');
	const lb = el('button', 'ss-lang', t(UI.other));
	lb.type = 'button';
	lb.onclick = () => setLang(isJa() ? 'English' : '日本語');
	const map = el('a', 'ss-lang', t(UI.map)); map.href = siteHref('index.html');
	const story = el('a', 'ss-lang', t(UI.story)); story.href = siteHref('story.html');
	row.append(map, story, lb);
	foot.append(row, el('p', 'ss-credit', t(PLAY.fullCredit)));
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
	const ch = PLAY.chapters[0];
	hud.innerHTML = `<div class="ss-dangara"></div>
		<div class="ss-hudrow">
			<div class="ss-hudtitle"><span class="ss-hudch">${t(ch.no)}</span><span class="ss-hudname">${t(ch.title)}</span></div>
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
	});
});
