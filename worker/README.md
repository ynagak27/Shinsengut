# The "Ask" feature — setup

Visitors can ask questions on any page (the 「質問する / Ask」 button). The page
sends the question to a small **Cloudflare Worker** (`worker/ask.js`), which adds
the site's own content (`ask/knowledge-en.md` / `ask/knowledge-ja.md`) and asks
Claude. Answers come from the site first; anything from general knowledge is
shown separately and marked as not from the site's sources.

The Worker exists so the API key is never in the website's code. Until
`js/ask-config.js` has the Worker's address, the button stays hidden.

**Cost:** the default model is Claude Haiku 5.5. With the site's content cached,
a question costs roughly a tenth of a US cent. Each visitor is limited to 20
questions a day (change with `DAILY_LIMIT`), and the monthly spend limit you set
in the Claude Console is the hard ceiling.

---

## 1. Create the API key (Claude Console)

Menu names can change slightly; look for the closest match.

1. Go to **https://platform.claude.com** and sign in, or create an account.
   This is separate from a Claude.ai subscription.
2. Open **Settings → Billing**. Add a payment method and buy a small amount of
   credit (for example $5).
3. Open **Settings → Limits** and set a **monthly spend limit** (for example $5).
   If it's reached, the Ask button shows a "try again later" message instead
   of charging more.
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

Commit and push; the button appears on every page once GitHub Pages has
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
| `MODEL` | `claude-haiku-5-5` | The Claude model. `claude-sonnet-5-5` writes richer answers at about 20× the cost. |
| `DAILY_LIMIT` | `20` | Questions per visitor (per IP address) per day. |

If the site moves to a different address, add it to `ALLOWED_ORIGINS` at the top
of `worker/ask.js` and paste the file into the Worker again.
