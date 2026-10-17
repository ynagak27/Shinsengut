/* =====================================================================
   Builds the Monogatari script from data/play.js. You should not need
   to edit this file to add or change a chapter.
   ===================================================================== */
/* global monogatari, PLAY */

/* Backgrounds: one per place, cut from the site's period maps. A place
   can share another's picture with img: "<other place>". */
const scenes = {};
Object.keys(PLAY.places).forEach(k => { scenes[k] = (PLAY.places[k].img || k) + '.webp'; });
monogatari.assets('scenes', scenes);

/* Speakers: one character per language, as Monogatari names are plain text. */
const chars = {};
Object.keys(PLAY.speakers).forEach(k => {
	chars[k + '_ja'] = { name: PLAY.speakers[k].ja, color: '#8ed8df' };
	chars[k + '_en'] = { name: PLAY.speakers[k].en, color: '#8ed8df' };
});
monogatari.characters(chars);

/* SOURCE_TAGS[lang][label][step] = the beat on screen at that step.
   main.js uses it for the eyebrow, the 史実/逸話 note and the map credit,
   which stay right when the reader taps back. */
window.SOURCE_TAGS = { '日本語': {}, 'English': {} };

function stamp(id) {
	// Records the finished chapter so the map can show it later.
	return { 'Function': {
		'Apply': () => {
			try {
				const k = 'shinsengumi.stamps';
				const s = new Set(JSON.parse(localStorage.getItem(k) || '[]'));
				s.add(id); localStorage.setItem(k, JSON.stringify([...s]));
			} catch (e) {}
			return true;
		},
		'Revert': () => true
	} };
}

function buildChapter(ch, lang) {
	const out = [];
	const tags = {};
	const ja = lang === '日本語';
	let scene = null;
	ch.beats.forEach((b, i) => {
		if (b.scene !== scene) { out.push(`show scene ${b.scene} with fadeIn`); scene = b.scene; }
		tags[out.length] = Object.assign({ n: i + 1, total: ch.beats.length, chapter: ch.id }, b);
		const text = ja ? b.ja : b.en;
		out.push(b.who ? `${b.who}${ja ? '_ja' : '_en'} ${text}` : text);
	});
	out.push(stamp(ch.id));
	out.push(`centered ${ja ? ch.end.ja : ch.end.en}`);
	out.push('end');
	window.SOURCE_TAGS[lang][ch.id] = tags;
	return out;
}

/* One label per chapter, named by its id. The engine always begins at
   'Start', which jumps to the chapter picked on the title screen
   (window.PLAY_CHAPTER, set in main.js), or the first one. */
function buildScript(lang) {
	const pick = { 'Condition': () => window.PLAY_CHAPTER || PLAY.chapters[0].id };
	PLAY.chapters.forEach(ch => { pick[ch.id] = `jump ${ch.id}`; });
	const labels = { 'Start': [{ 'Conditional': pick }] };
	PLAY.chapters.forEach(ch => { labels[ch.id] = buildChapter(ch, lang); });
	return labels;
}

monogatari.script({
	'日本語':  buildScript('日本語'),
	'English': buildScript('English')
});
