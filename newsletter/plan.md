# Newsletter plan — 新選組週報 / The Shinsengumi Weekly

An experiment: weekly emails that go deeper than the site, sent first to one
reader (the site's author, yuta.nagasaki27@gmail.com) to see how they feel
before anyone else subscribes. Every issue is Japanese first, then English,
in one HTML email built with `build.py`.

## Two series

### A. The serial — 新選組週報（第N話） · every Saturday 9:00 JST

One main-story event per issue, in order: the events marked `story:true` in
`data/events.js`, sorted by `sort`. Episode N is the Nth of them.

1 succession · 2 roshigumi · 3 mibu · 4 serizawa · 5 ikedaya · 6 kinmon ·
7 petition1864 · 8 recruit1864 · 9 yamanami · 10 honganji · 11 goryo ·
12 hatamoto · 13 aburanokoji · 14 sumizome · 15 tobafushimi · 16 shinagawa ·
17 koshu · 18 nagareyama · 19 itabashi · 20 shirakawa · 21 utsunomiya ·
22 okitadeath · 23 aizu · 24 sendai · 25 washinoki · 26 goryokaku ·
27 miyako · 28 death · 29 benten · 30 takahata · 31 otaru

(If the order in events.js has changed, follow events.js.)

Subject: `【新選組週報 第N話】<Japanese title> — The Shinsengumi Weekly #N: <English title>`

To find N: search Gmail for sent mail with `subject:新選組週報` and count the
episodes already sent; N = that count + 1. Never send the same episode twice.

### B. "Follow one man" — 新選組をたどる · a short welcome course

Five parts, the course a new subscriber would get on signing up. The first
course follows Hijikata Toshizō (sent 11–15 Oct 2026, daily 9:00 JST):

1. 石田村から試衛館へ / From Ishida village to the Shieikan (1835–1862) — birth, shieikan, succession
2. 鬼の副長 / The demon vice-commander (1863–1866) — roshigumi, mibu, serizawa, ikedaya, kinmon, yamanami, honganji
3. 京の終わり / The end of Kyoto (1867–1868) — goryo, hatamoto, aburanokoji, sumizome, tobafushimi, senryomatsu, shinagawa
4. 北へ / North (1868) — koshu, nagareyama, konodai, utsunomiya, aizu, sendai
5. 蝦夷地 / Ezo (1868–1869) — washinoki, matsumae, goryokaku, miyako, futamata, death, ichimura, takahata

Subject: `【新選組をたどる｜土方歳三 n/5】<Japanese title> — Following Hijikata n/5: <English title>`

Later courses (not scheduled yet): Saitō, Okita, Kondō, Nagakura.

## How to write an issue

- **Source material:** the event(s) in `data/events.js` (desc, roles, legend),
  the people in `data/people.js`, and general knowledge. Go about three times
  deeper than the site: the scene, the people, what led to it, what it changed.
- **Length:** Japanese about 1,800–2,500 characters; English about 900–1,200
  words. The two versions say the same thing.
- **Structure:**
  1. Opening scene, a short vivid paragraph that drops the reader in;
  2. the story, 4–7 paragraphs;
  3. "人物 / The people": two or three people with a line each on their part;
  4. "伝承と史実 / Legend and record": what is tradition, what is disputed;
  5. "地図で見る / On the map": buttons to `index.html?ev=<id>` (and
     `?person=<id>` for course B);
  6. "次回 / Next time": one line teasing the next issue.
- **Accuracy:** the site's rule applies. Facts that rest on tradition or
  one late memoir are said to; do not invent dialogue, numbers or names.
  When sources disagree, say so. Gregorian dates first, with the old-calendar
  date in Japanese where known.
- **Tone:** narrative history, not a textbook; no modern slang; no emoji.
- **Links:** live site https://ynagak27.github.io/Shinsengut/ — event
  `index.html?ev=<id>`, person `index.html?person=<id>`, biography
  `people.html?p=<id>`.
- **Footer:** say it is a test issue, invite a reply with feedback.

## Sending

Use the Gmail connector's `send_message` with `to: ["yuta.nagasaki27@gmail.com"]`,
the subject above, `htmlBody` = the contents of `email.html` and `body` = the
contents of `email.txt`, both produced by:

    python3 newsletter/build.py issue.json /tmp/issue/

where `issue.json` is the issue you wrote (format at the top of `build.py`).
Send exactly one email per run.
