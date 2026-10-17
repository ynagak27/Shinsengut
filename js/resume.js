/* =====================================================================
   RESUME — remembers where a visitor left off, so the front page can
   offer "pick up where you left off" on their next visit.

   Stored only in the visitor's own browser (localStorage), never sent
   anywhere. Each page calls SSG_RESUME.save() with a ready-made record:
     { kind,              // "play" | "playnext" | "playdone" | "person" | "event" | "map" | "story" | "basics" | "bio"
       href,              // where to send them back to, without ?lang (added on the front page)
       title:  {ja, en},  // what they were looking at
       sub:    {ja, en},  // which part of the site it is
       action: {ja, en} } // the button label
   Finished chapters are kept separately in "shinsengumi.stamps" (set by
   the play page), and "shinsengumi.chapterCount" holds how many exist.
   ===================================================================== */
(function () {
  const KEY = "shinsengumi.last";
  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function del(k) { try { localStorage.removeItem(k); } catch (e) {} }

  window.SSG_RESUME = {
    save(rec) { rec.t = Date.now(); set(KEY, JSON.stringify(rec)); },
    load() { try { return JSON.parse(get(KEY) || "null"); } catch (e) { return null; } },
    stamps() { try { return JSON.parse(get("shinsengumi.stamps") || "[]"); } catch (e) { return []; } },
    chapterCount() { return parseInt(get("shinsengumi.chapterCount") || "0", 10) || 0; },
    setChapterCount(n) { set("shinsengumi.chapterCount", String(n)); },
    clear() { del(KEY); del("shinsengumi.stamps"); },

    /* Long pages: remember which section is on screen, by its heading id. */
    watchSections(selector, make) {
      if (!("IntersectionObserver" in window)) return;
      let timer = null;
      const io = new IntersectionObserver(entries => {
        const vis = entries.filter(e => e.isIntersecting);
        if (!vis.length) return;
        const id = vis[0].target.id;
        clearTimeout(timer);
        timer = setTimeout(() => SSG_RESUME.save(make(id)), 400);
      }, { rootMargin: "0px 0px -60% 0px" });
      document.querySelectorAll(selector).forEach(el => { if (el.id) io.observe(el); });
    }
  };
})();
