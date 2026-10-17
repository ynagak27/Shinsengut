# The "Ask" feature — setup

Ask is for readers who want to go deeper than the site. It is deliberately
quiet: a single line at the end of each page's content
(「本サイトの内容より深く知りたい方へ — 質問する（AI）」), not a button that
invites everyone to ask.

A question is answered in two steps by a small **Cloudflare Worker**
(`worker/ask.js`):

1. **From the site.** Claude answers only from the site's own content
   (`ask/knowledge-en.md` / `ask/knowledge-ja.md`), linking the events and
   people it used, and reports whether the site fully covers the question.
2. **From the web, only if needed.** If the site covers it only partly or not
   at all, Claude searches the web (up to 3 searches), adds only what is
   missing, and every statement is linked to a numbered source. It is told to
   prefer museums, local governments, universities and encyclopaedias over fan
   sites and fiction. When the site does cover it fully, the reader can still
   choose 「ウェブでさらに調べる」.

The Worker exists so the API key is never in the website's code. Until
`js/ask-config.js` has the Worker's address, the line stays hidden.

**Cost** (Claude Haiku 5.5, the default):
- step 1 (site): roughly a tenth of a US cent per question, with the site's
  content cached;
- step 2 (web): about 2–4 US cents, as each search costs $0.01 plus reading
  the results.

Each visitor is limited to 20 questions and 5 web look-ups a day
(`DAILY_LIMIT`, `WEB_DAILY_LIMIT`), and the monthly spend limit you set in the
Claude Console is the hard ceiling.

---

## 1. Create the API key (Claude Console)

Menu names can change slightly; look for the closest match.

1. Go to **https://platform.claude.com** and sign in, or create an account.
   This is separate from a Claude.ai subscription.
2. Open **Settings → Billing**. Add a payment method and buy a small amount of
   credit (for example $5).
3. Open **Settings → Limits** and set a **monthly spend limit** (for example $5).
   If it's reached, Ask shows a "try again later" message instead of
   charging more. Web search is switched on by default for new accounts; if
   it has been turned off, turn it back on under **Settings → Privacy / Web
   search** (or the closest match).
4. Open **Settings → API Keys** and click **Create Key**. Name it
   `shinsengumi-ask`, click **Create**, and copy the key (it starts with
   `sk-ant-`). You can only see it once, so paste it somewhere safe for step 2.5.

## 2. Create the Worker (Cloudflare dashboard)

1. Go to **https://dash.cloudflare.com** and sign in.
2. In the left menu open **Workers & Pages** (under *Compute*), click
   **Create**, choose **Create Worker** (the "Hello World" starter), name it
   `shinsengumi-ask`, and click **Deploy**.
3. Click **Edit code**. Delete everything in the editor, paste the whole of
   `worker/ask.js` from this repository, and click **Deploy**.
4. **Daily limit storage:** in the left menu open **Storage & Databases → KV**,
   click **Create**, name it `shinsengumi-ask-limits`, and click **Add**.
   Then go back to the Worker → **Settings → Bindings → Add → KV namespace**.
   Variable name: `LIMITS`; namespace: `shinsengumi-ask-limits`. Click **Deploy**
   (or **Save**).
5. **The key:** Worker → **Settings → Variables and Secrets → Add**. Type:
   **Secret**. Name: `ANTHROPIC_API_KEY`. Value: the key from step 1.4. Click
   **Deploy** (or **Save**).
6. At the top of the Worker's page, copy its address. It looks like
   `https://shinsengumi-ask.<your-name>.workers.dev`.

## 3. Switch the button on

Put the address from 2.6 into `js/ask-config.js`:

```js
window.SSG_ASK_ENDPOINT = "https://shinsengumi-ask.<your-name>.workers.dev";
```

Commit and push; the line appears on every page once GitHub Pages has
deployed.

---

## Keeping answers up to date

The AI only knows what is in `ask/knowledge-*.md`. After changing anything in
`data/`, rebuild them and commit them with the change:

```bash
node tools/ask/build_knowledge.js
```

The Worker re-reads them from the published site within about an hour.

## Optional settings (Worker → Settings → Variables and Secrets, as plain text)

| Name | Default | What it does |
|---|---|---|
| `MODEL` | `claude-haiku-5-5` | The Claude model. `claude-sonnet-5-5` writes richer answers at about 20× the token cost (searches cost the same). Use it if Haiku turns out not to support web search on your account. |
| `DAILY_LIMIT` | `20` | Questions per visitor (per IP address) per day. |
| `WEB_DAILY_LIMIT` | `5` | Web look-ups per visitor per day. |

If the site moves to a different address, add it to `ALLOWED_ORIGINS` at the top
of `worker/ask.js` and paste the file into the Worker again.
