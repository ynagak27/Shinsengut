/* Builds ask/knowledge-en.md and ask/knowledge-ja.md: the site's own
   content, as plain text, for the "Ask" feature (worker/ask.js reads them
   from the published site and gives them to the AI as its reference).

   Run from the repo root after changing anything in data/:
       node tools/ask/build_knowledge.js
   and commit the two files with your change. */
const fs = require('fs');
const vm = require('vm');
const path = require('path');

const root = path.join(__dirname, '..', '..');
const ctx = {};
vm.createContext(ctx);
for (const f of ['people', 'events', 'context', 'story']) {
  const src = fs.readFileSync(path.join(root, 'data', f + '.js'), 'utf8')
    .replace(/^const (\w+)\s*=/gm, 'this.$1 =');
  vm.runInContext(src, ctx, { filename: f + '.js' });
}
const { PEOPLE, EVENTS, CONTEXT, STORY } = ctx;

function build(L) {
  const t = o => (o && o[L]) || '';
  const out = [];
  const H = { en: {
      head: '# The Road of Shinsengumi — site content',
      note: 'Everything below is the website\'s own text. Event ids are in [ev:id], people ids in [p:id]. "Legend" lines are disputed or later traditions, not documented fact.',
      events: '## Events (in date order)', nat: '## National events (context)', people: '## People', story: '## The story page',
      where: 'Where', when: 'When', who: 'People', legend: 'Legend & disputed', role: 'Role', life: 'Life' },
    ja: {
      head: '# 新選組の軌跡 — サイトの内容',
      note: '以下はすべて当サイトの本文です。出来事のIDは [ev:id]、人物のIDは [p:id]。「伝承・異説」は確かな史実ではなく、異説や後世の伝えです。',
      events: '## 出来事（年代順）', nat: '## 時代の動き', people: '## 人物', story: '## 物語ページ',
      where: '場所', when: '日付', who: '人物', legend: '伝承・異説', role: '役職', life: '生没年' } }[L];
  out.push(H.head, '', H.note, '');

  const ev = e => {
    out.push(`### ${t(e.title)} [ev:${e.id}]`);
    out.push(`${H.when}: ${t(e.date) || e.year} · ${H.where}: ${t(e.loc)}`);
    if (e.people && e.people.length) {
      out.push(`${H.who}: ` + e.people.map(p => {
        const name = PEOPLE[p] ? t(PEOPLE[p].name) : p;
        const r = e.roles && e.roles[p] ? ' — ' + t(e.roles[p]) : '';
        return `${name} [p:${p}]${r}`;
      }).join('; '));
    }
    out.push(t(e.desc).replace(/\n\n/g, '\n'));
    if (e.legend) out.push(`${H.legend}: ${t(e.legend)}`);
    out.push('');
  };
  out.push(H.events, '');
  [...EVENTS].sort((a, b) => a.sort.localeCompare(b.sort)).forEach(ev);
  out.push(H.nat, '');
  [...CONTEXT].sort((a, b) => a.sort.localeCompare(b.sort)).forEach(ev);

  out.push(H.people, '');
  for (const [id, p] of Object.entries(PEOPLE)) {
    out.push(`### ${t(p.name)} [p:${id}]`);
    out.push(`${H.role}: ${t(p.role)} · ${H.life}: ${p.life || ''}`);
    if (p.summary) out.push(t(p.summary));
    (p.sections || []).forEach(s => out.push(`**${t(s.h)}** ${t(s.b).replace(/\n\n/g, '\n')}`));
    if (p.legend) out.push(`${H.legend}: ${t(p.legend)}`);
    out.push('');
  }

  out.push(H.story, '');
  STORY.long.forEach(c => out.push(`### ${t(c.h)}`, t(c.b).replace(/\n\n/g, '\n'), ''));
  return out.join('\n');
}

fs.mkdirSync(path.join(root, 'ask'), { recursive: true });
for (const L of ['en', 'ja']) {
  const text = build(L);
  fs.writeFileSync(path.join(root, 'ask', `knowledge-${L}.md`), text);
  console.log(`ask/knowledge-${L}.md: ${text.length} characters`);
}
