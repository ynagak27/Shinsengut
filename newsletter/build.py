"""Build one newsletter email from an issue file.

    python3 newsletter/build.py issue.json out_dir/

writes out_dir/email.html (for Gmail's htmlBody) and out_dir/email.txt (the
plain-text alternative). The issue file looks like:

{
  "series": "新選組週報 第1話 · THE SHINSENGUMI WEEKLY #1",
  "subject": "【新選組週報 第1話】… — The Shinsengumi Weekly #1: …",
  "title": {"ja": "…", "en": "…"},
  "date":  {"ja": "1861年（文久元年）", "en": "1861"},
  "ja": {"paras": ["…", "…"], "people": [["近藤勇", "…"]], "legend": "…", "next": "…"},
  "en": {"paras": ["…", "…"], "people": [["Kondō Isami", "…"]], "legend": "…", "next": "…"},
  "links": [{"ja": "地図で見る", "en": "See it on the map", "url": "https://…"}]
}

Inline styles only: email clients ignore <style> blocks and most CSS.
"""
import html, json, os, sys

SITE = "https://ynagak27.github.io/Shinsengut/"
MONO = "font-family:Menlo,Consolas,monospace"
e = html.escape


def section(lang, s, links, date):
    ja = lang == "ja"
    font = "" if ja else "font-family:Georgia,'Times New Roman',serif;"
    lh = "2" if ja else "1.75"
    out = [f'<div style="padding:24px 28px 8px;{font}" lang="{lang}">',
           f'<div style="{MONO};font-size:11px;color:#4d8f98;letter-spacing:2px">{"" if ja else "ENGLISH · "}{e(date)}</div>']
    out += [f'<p style="font-size:16px;line-height:{lh};margin:14px 0">{e(p)}</p>' for p in s["paras"]]
    if s.get("people"):
        out.append(f'<h3 style="font-size:16px;color:#4d8f98;border-bottom:1px solid #e3dccb;padding-bottom:4px;margin:26px 0 10px">{"人物" if ja else "The people"}</h3>')
        out += [f'<p style="font-size:15px;line-height:{lh};margin:6px 0"><b>{e(n)}</b> — {e(r)}</p>' for n, r in s["people"]]
    if s.get("legend"):
        out.append('<div style="border:1px dashed #c8452e;background:#fcf2ee;padding:12px 14px;margin:22px 0;'
                   f'font-size:14px;line-height:{lh};color:#5a3a30"><div style="{MONO};font-size:11px;letter-spacing:2px;'
                   f'color:#c8452e;margin-bottom:4px">{"伝承と史実" if ja else "LEGEND AND RECORD"}</div>{e(s["legend"])}</div>')
    if links:
        out.append('<p style="margin:20px 0;line-height:2.6">' + " ".join(
            f'<a href="{e(l["url"])}" style="display:inline-block;background:#10151d;color:#8ed8df;text-decoration:none;'
            f'padding:9px 14px;border-radius:3px;font-size:14px;margin:0 6px 6px 0">{e(l[lang])} →</a>' for l in links) + '</p>')
    if s.get("next"):
        out.append(f'<p style="font-size:14px;color:#6b7280;margin:18px 0">{"次回：" if ja else "Next time: "}{e(s["next"])}</p>')
    out.append('</div>')
    return "\n".join(out)


def build(issue):
    links = issue.get("links", [])
    parts = [
        '<div style="background:#f4efe3;padding:24px 0;font-family:\'Hiragino Mincho ProN\',\'Yu Mincho\',Georgia,serif;color:#1d232c">',
        '<div style="max-width:640px;margin:0 auto;background:#fffdf7;border:1px solid #e3dccb">',
        '<div style="background:#10151d;padding:18px 24px">',
        f'<div style="{MONO};font-size:11px;letter-spacing:3px;color:#8ed8df">{e(issue["series"])}</div>',
        f'<div style="font-size:22px;font-weight:bold;color:#ece5d3;margin-top:6px;line-height:1.4">{e(issue["title"]["ja"])}</div>',
        f'<div style="font-size:14px;color:#8b96a8;margin-top:4px">{e(issue["title"]["en"])}</div>',
        '</div><div style="height:6px;background:#8ed8df"></div>',
        section("ja", issue["ja"], links, issue["date"]["ja"]),
        '<div style="margin:0 28px;border-top:2px solid #e3dccb"></div>',
        section("en", issue["en"], links, issue["date"]["en"]),
        '<div style="background:#10151d;color:#8b96a8;font-size:12px;line-height:1.7;padding:16px 24px;font-family:Arial,sans-serif">',
        f'新選組の軌跡 · <a href="{SITE}" style="color:#8ed8df">ynagak27.github.io/Shinsengut</a><br>',
        'テスト配信です。感想は返信でお寄せください。 · This is a test issue — reply with any feedback.',
        '</div></div></div>']
    text = [issue["series"], issue["title"]["ja"], issue["title"]["en"], ""]
    for lang in ("ja", "en"):
        s = issue[lang]
        text += [issue["date"][lang], ""] + [p + "\n" for p in s["paras"]]
        if s.get("people"):
            text += ["人物" if lang == "ja" else "The people"] + [f"・{n} — {r}" for n, r in s["people"]] + [""]
        if s.get("legend"):
            text += [("伝承と史実: " if lang == "ja" else "Legend and record: ") + s["legend"], ""]
        text += [f'{l[lang]}: {l["url"]}' for l in links]
        if s.get("next"):
            text += ["", ("次回：" if lang == "ja" else "Next time: ") + s["next"]]
        text += ["", "—" * 20, ""]
    text += [SITE, "テスト配信です。感想は返信でお寄せください。 / This is a test issue — reply with any feedback."]
    return "\n".join(parts), "\n".join(text)


if __name__ == "__main__":
    issue = json.load(open(sys.argv[1], encoding="utf-8"))
    os.makedirs(sys.argv[2], exist_ok=True)
    h, t = build(issue)
    open(os.path.join(sys.argv[2], "email.html"), "w", encoding="utf-8").write(h)
    open(os.path.join(sys.argv[2], "email.txt"), "w", encoding="utf-8").write(t)
    print("subject:", issue["subject"])
    print("html chars:", len(h), "text chars:", len(t))
