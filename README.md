# 新選組の軌跡 — The Road of Shinsengumi, the last group of Samurai

An interactive bilingual (JA/EN) map + timeline of the Shinsengumi, told through
Hijikata Toshizō's journey, with the era's national events running alongside.

Self-hosted, no build step, no framework. Open `index.html` on any static host
(GitHub Pages, Netlify, an S3 bucket, or just a local server).

The map itself is the real Google Maps JavaScript API (custom dark styling, not
the default look), so you'll need a Google Maps API key — see below.

---

## Google Maps API key

1. In the [Google Cloud Console](https://console.cloud.google.com/google/maps-apis),
   create (or pick) a project and enable the **Maps JavaScript API**.
2. Create an API key, then restrict it (Credentials → your key → Application
   restrictions → **Websites**) to the domain(s) you deploy to — e.g.
   `yourname.github.io/*` and `localhost:8000/*` for local testing. Maps
   JavaScript API keys are meant to live in client-side code; the website
   restriction is what keeps it from being used elsewhere.
3. Copy `js/config.example.js` to `js/config.js` and paste your key in:
   ```js
   const GOOGLE_MAPS_API_KEY = "your-key-here";
   ```
   `js/config.js` is gitignored, so your key never gets committed.
4. Billing must be enabled on the Cloud project (Google requires a linked
   billing account for the Maps JS API), but the free monthly credit covers
   normal personal-site traffic.

---

## Running it

Because it loads separate `data/*.js` files, most browsers won't run it from a
raw `file://` open — use a tiny local server:

```bash
cd shinsengumi
python3 -m http.server 8000
# then visit http://localhost:8000
```

To publish: push the whole folder to a GitHub repo and turn on Pages, or drag the
folder onto Netlify. That's the entire deploy.

---

## File layout

```
shinsengumi/
├── index.html        ← shell only; you rarely touch this
├── css/style.css     ← all styling
├── js/app.js         ← rendering & interaction; you rarely touch this
└── data/
    ├── people.js     ← the biographies  ← EDIT THESE
    ├── events.js     ← Shinsengumi / Hijikata events  ← EDIT THESE
    └── context.js    ← national history & ishin shishi  ← EDIT THESE
```

**The whole point of the split: all content lives in `data/`.** As your reading of
the Shinsengumi books and documents turns up more, you add it there and never have
to understand the app code.

Every text field is bilingual: `{en:"...", ja:"..."}`. Leave one side blank while
drafting if you like — the app just shows the empty string.

---

## Adding to a person (`data/people.js`)

Each person is a keyed block. The two things you'll do most:

**Expand a biography** — add another section. Sections render in order, each with a
heading and body. Use `\n\n` for paragraph breaks inside a body.

```js
sections: [
  { h:{en:"Swordsmanship", ja:"剣術"},
    b:{en:"Long paragraph...\n\nSecond paragraph...",
       ja:"長い段落…\n\n第二段落…"} },
  // ...add as many as you like
]
```

**Flag lore vs. fact** — the optional `legend` field renders in a dashed red box,
kept visually separate from the documented narrative. Use it for anything from
Shiba Ryōtarō / Shimozawa Kan / later fiction that "everyone knows" but isn't in
primary sources.

```js
legend:{en:"The left-handed thrust is a novelist's invention...",
        ja:"左片手突きは小説家の創作で…"}
```

**Add a brand-new person** — copy any block, give it a new key (e.g. `itou:`),
then reference that key from any event's `people` / `roles`.

---

## Adding an event (`data/events.js`)

```js
{id:"unique_id", sort:"1864-07-08", year:"1864",
 route:true,                        // true = on Hijikata's numbered path
 coords:[35.0090,135.7701], zoom:15,
 date:{en:"July 8, 1864", ja:"1864年7月8日"},
 loc:{en:"...", ja:"..."},
 title:{en:"...", ja:"..."},
 desc:{en:"Full narrative...", ja:"物語…"},   // \n\n for paragraphs
 people:["kondo","okita","hijikata"],
 roles:{                            // what each person specifically did
   kondo:{en:"Led the assault party...", ja:"斬り込みを率い…"},
   okita:{en:"Fell mid-fight...", ja:"戦闘中に倒れ…"}
 },
 legend:{en:"...optional...", ja:"…任意…"}
}
```

- `sort` (YYYY-MM-DD) sets timeline order — approximate dates are fine.
- `route:true` puts a numbered pin on Hijikata's journey and connects it to the
  route line. `route:false` marks a corps event off his personal path (shown as †,
  e.g. Okita's death, the Aburanokōji ambush).
- `roles` is optional per person; add or deepen these as research fills in who did
  what. They show both on the event card and under that person's "appears in" list.

---

## Adding national history (`data/context.js`)

Same schema, minus `route`. These render as ◇ diamonds and toggle on/off with the
"Historical events / 時代の動き" button. They can still reference corps members
(e.g. Harada at Ueno, the corps receiving its name at the 8/18 coup) via
`people` / `roles`.

Use this file for the parallel track you wanted: what the shogunate and the
ishin shishi (Satsuma, Chōshū, Tosa loyalists — Ryōma, Katsura, Saigō...) were
doing at each moment.

---

## Verification note

Coordinates and dates were compiled from standard secondary sources as a research
starting point. Some are approximate historical sites (the Shieikan, Fudōdō
barracks) and a few dates are genuinely debated (Serizawa's assassination). Treat
this as a first draft to correct against your primary reading — that's exactly what
the `data/` split is for.

---

## Ideas for later

- Split into more journeys (Saitō's survivor path; Kondō's rise-and-fall) with a
  journey-picker.
- Site photographs on event cards (add an `img` field + a render line).
- Era-date display toggle (元治元年 ↔ Gregorian) — dates are already stored in both.
- A "relationships" view drawing the bonds between people.
