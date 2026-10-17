/* =====================================================================
   APP — rendering & interaction. Content lives in /data/*.js.
   You should rarely need to touch this file to add content.
   ===================================================================== */

/* ---------- UI strings ---------- */
const STR = {
  title:{en:"The Road of Shinsengumi, the last group of Samurai",ja:"新選組の軌跡"},
  subtitle:{en:"The rise and fall of the shogun's last swordsmen — from Tama to Hakodate, 1863–1869",
            ja:"幕府最後の剣客集団の興亡 — 多摩から箱館へ 1863–1869"},
  people:{en:"The men of the Shinsengumi",ja:"新選組の隊士"},
  home:{en:"← Other ways in",ja:"← ほかの入口"},
  tour:{en:"Guided tour",ja:"順路をたどる"},
  tourPerson:{en:p=>`Follow ${p.name.en.split(" ")[0]}`,ja:p=>`${p.name.ja}の足取り`},
  context:{en:"Historical events",ja:"時代の動き"},
  fit:{en:"Show all",ja:"全体を表示"},
  lang:{en:"日本語",ja:"English"},
  next:{en:"Next →",ja:"次へ →"},
  prev:{en:"← Back",ja:"← 前へ"},
  exit:{en:"Explore freely",ja:"自由に見る"},
  whoWasThere:{en:"Who was there — and what they did",ja:"関与した隊士 — その働き"},
  appearsIn:{en:"Appears in",ja:"関連する出来事"},
  contextTag:{en:"national event",ja:"時代の動き"},
  legendLabel:{en:"Legend & disputed accounts",ja:"伝承・異説"},
  introTitle:{en:"Follow the journey",ja:"軌跡をたどる"},
  introBody:{en:"Tap any numbered point on the map or the timeline to open an event, or tap a name above to follow one man through the whole story — the map adds every event of his life, from his birth, dims the rest and draws his path, and his page gives his life in full. Without a name selected, the map shows the corps' main story.\n\nThe ◇ diamonds are the great events of the age — Perry's ships, the Satsuma–Chōshū alliance, the fall of Edo — set beside the corps' own story. Toggle them with \"Historical events.\" The guided tour walks through the corps' main story, from the Shieikan to the surrender at Hakodate and the survivors who told the tale. Choose a person first, and it follows his life instead, from his birth to his grave.",
             ja:"地図やタイムラインの番号をタップすると出来事の詳細が開きます。上の隊士名をタップすれば、その人物の物語を最初から追えます——地図には生まれから始まるその人物の出来事がすべて加わり、ほかは薄くなって足取りが線で結ばれ、人物ページには生涯が詳しく記されます。隊士を選ばないときは、新選組の本筋が表示されます。\n\n◇印は時代の大事件です——黒船、薩長同盟、江戸開城——を隊の歩みと並べて配置しています。「時代の動き」で表示を切り替えられます。「順路をたどる」では、試衛館から箱館での降伏、そして物語を語り残した生き残りたちまで、新選組の本筋をご案内します。先に隊士を選ぶと、その人物の生涯——生まれてから墓所まで——をたどる案内に変わります。"},
  stepOf:{en:(a,b)=>`${a} / ${b}`,ja:(a,b)=>`${a} / ${b}`},
  eraNow:{en:"Today",ja:"現代"},
  eraEdo:{en:"Edo era",ja:"江戸"},
  eraLabel:{en:"Map era",ja:"地図の時代"},
  eraOnly:{en:"Period maps so far:",ja:"江戸期の地図（公開中）:"},
  eraGo:{en:p=>`Show ${p}`,ja:p=>`${p}へ`},
  allMembers:{en:n=>`All ${n} members →`,ja:n=>`隊士一覧（${n}名）→`},
  bioPage:{en:"Open his page →",ja:"人物ページを開く →"}
};

/* ---------- state ---------- */
let lang=new URLSearchParams(location.search).get("lang")==="en"?"en":"ja";
let selId=null, selPerson=null, tourIdx=-1, tourPerson=null, showContext=true;
/* whose path the map is showing: the selected person, or the person being toured */
const focusPerson=()=>selPerson||tourPerson;
const href=(page,params={})=>{const q=new URLSearchParams(params); if(lang==="en") q.set("lang","en"); const s=q.toString(); return page+(s?"?"+s:"");};
const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const t=o=>(o&&o[lang]!==undefined)?o[lang]:"";

/* ---------- merge + order all timeline items ---------- */
EVENTS.forEach(e=>{e.kind="corps";});
CONTEXT.forEach(e=>{e.kind="context";});
const ALL=[...EVENTS,...CONTEXT].sort((a,b)=>a.sort.localeCompare(b.sort));
const byId=id=>ALL.find(e=>e.id===id);

/* Main-story events (story:true) are numbered in date order; the corps'
   other events — births, side incidents, later lives — are "•", and only
   appear when a person they belong to is selected. National events are ◇. */
let rn=0;
ALL.forEach(e=>{ e.no = e.kind==="context" ? "◇" : e.story ? ++rn : "•"; });

/* ---------- map ---------- */
/* Google Maps has no built-in HTML marker like Leaflet's divIcon, so we
   roll a small OverlayView that positions a real DOM node (our .pin,
   unchanged from the old Leaflet markup) at a lat/lng each frame.
   google.maps.OverlayView doesn't exist until the "maps" library has
   loaded, so this class is defined lazily inside initMap(), not here. */
let HtmlMarker;
function defineHtmlMarker(){
  HtmlMarker=class extends google.maps.OverlayView{
    constructor(pos,html,onClick){ super(); this.pos=pos; this.html=html; this.onClick=onClick; this.div=null; this.visible=true; }
    setVisible(v){ this.visible=v; if(this.div) this.div.style.display=v?"":"none"; }
    onAdd(){
      this.div=document.createElement("div");
      this.div.style.position="absolute";
      this.div.style.transform="translate(-50%,-50%)";
      this.div.innerHTML=this.html;
      this.div.style.display=this.visible?"":"none";
      this.div.addEventListener("click",ev=>{ev.stopPropagation(); this.onClick&&this.onClick();});
      this.getPanes().overlayMouseTarget.appendChild(this.div);
    }
    draw(){
      const pt=this.getProjection().fromLatLngToDivPixel(this.pos);
      if(this.div&&pt){ this.div.style.left=pt.x+"px"; this.div.style.top=pt.y+"px"; }
    }
    onRemove(){ if(this.div){ this.div.remove(); this.div=null; } }
  };
}

const MAP_STYLE=[
  {elementType:"geometry",stylers:[{color:"#10151d"}]},
  {elementType:"labels.text.fill",stylers:[{color:"#8b96a8"}]},
  {elementType:"labels.text.stroke",stylers:[{color:"#10151d"}]},
  {elementType:"labels.icon",stylers:[{visibility:"off"}]},
  {featureType:"administrative",elementType:"geometry",stylers:[{color:"#2a3646"}]},
  {featureType:"administrative.country",elementType:"labels.text.fill",stylers:[{color:"#8b96a8"}]},
  {featureType:"landscape",elementType:"geometry",stylers:[{color:"#141a24"}]},
  {featureType:"poi",stylers:[{visibility:"off"}]},
  {featureType:"road",elementType:"geometry",stylers:[{color:"#1e2836"}]},
  {featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#10151d"}]},
  {featureType:"road.highway",elementType:"geometry",stylers:[{color:"#2a3646"}]},
  {featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},
  {featureType:"transit",stylers:[{visibility:"off"}]},
  {featureType:"water",elementType:"geometry",stylers:[{color:"#0c1118"}]},
  {featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#4d8f98"}]}
];

let map,pathLine;
/* What the map and timeline show: the main story (and ◇ if on); with a
   person selected or toured, also every event of his life; and always the
   selected event, wherever it came from. */
function visible(e){
  if(e.kind==="context") return showContext;
  if(e.story||e.id===selId) return true;
  const fp=focusPerson();
  return !!(fp&&e.people&&e.people.includes(fp));
}
const shown=()=>ALL.filter(visible);
const ll=e=>({lat:e.coords[0],lng:e.coords[1]});

const markers={};
function buildMarkers(){
  if(!map) return;
  Object.values(markers).forEach(m=>m.setMap(null));
  ALL.forEach(e=>{
    const cls = e.kind==="context" ? "ctx" : e.story ? "" : "minor";
    const html=`<div class="pin ${cls}" data-ev="${e.id}">${e.no}<span class="tt">${t(e.title)}</span></div>`;
    const m=new HtmlMarker({lat:e.coords[0],lng:e.coords[1]},html,()=>selectEvent(e.id,true));
    m.setMap(map);
    markers[e.id]=m;
  });
  paintStates();
}
/* ---------- pin clustering ---------- */
/* Pins closer than CLUSTER_PX on screen merge into one bubble showing how
   many events it holds; tapping it zooms in until they come apart. Done by
   hand because our pins are custom overlays, not google.maps.Marker. The
   selected event always keeps its own pin, and while a person is selected
   their events only cluster with each other, never with the dimmed rest. */
const CLUSTER_PX=34;
let clusterMarkers=[];
function recluster(){
  if(!map||!map.getProjection()) return;
  const proj=map.getProjection(), scale=2**map.getZoom();
  const fp=focusPerson();
  const isRel=e=>!fp||!!(e.people&&e.people.includes(fp));
  const groups=[], vis=shown();
  const visIds=new Set(vis.map(e=>e.id));
  Object.entries(markers).forEach(([id,m])=>{ if(!visIds.has(id)) m.setVisible(false); });
  vis.forEach(e=>{
    const m=markers[e.id]; if(!m) return;
    if(e.id===selId){ m.setVisible(true); return; }
    const w=proj.fromLatLngToPoint(new google.maps.LatLng(e.coords[0],e.coords[1]));
    groups.push({x:w.x*scale,y:w.y*scale,rel:isRel(e),items:[e]});
  });
  /* merge the closest overlapping pair until none overlap; a merged group
     sits at its members' average position */
  for(;;){
    let best=null;
    for(let i=0;i<groups.length;i++) for(let j=i+1;j<groups.length;j++){
      const a=groups[i], c=groups[j];
      if(a.rel!==c.rel) continue;
      const d=Math.hypot(a.x-c.x,a.y-c.y);
      if(d<CLUSTER_PX&&(!best||d<best.d)) best={i,j,d};
    }
    if(!best) break;
    const a=groups[best.i], c=groups.splice(best.j,1)[0], n=a.items.length, k=c.items.length;
    a.x=(a.x*n+c.x*k)/(n+k); a.y=(a.y*n+c.y*k)/(n+k);
    a.items.push(...c.items);
  }
  clusterMarkers.forEach(c=>c.setMap(null));
  clusterMarkers=[];
  groups.forEach(g=>{
    const solo=g.items.length===1;
    g.items.sort((a,b)=>a.sort.localeCompare(b.sort));
    g.items.forEach(e=>markers[e.id].setVisible(solo));
    if(solo) return;
    const lat=g.items.reduce((a,e)=>a+e.coords[0],0)/g.items.length;
    const lng=g.items.reduce((a,e)=>a+e.coords[1],0)/g.items.length;
    const list=g.items.slice(0,6).map(e=>`${e.no} ${t(e.title)}`).join("<br>")+(g.items.length>6?"<br>…":"");
    const html=`<div class="pin cluster${g.rel?"":" dim"}">${g.items.length}<span class="tt">${list}</span></div>`;
    const c=new HtmlMarker({lat,lng},html,()=>{
      const z0=map.getZoom(), b=new google.maps.LatLngBounds();
      g.items.forEach(e=>b.extend(ll(e)));
      map.fitBounds(b,80);
      google.maps.event.addListenerOnce(map,"idle",()=>{
        if(map.getZoom()<=z0) map.setZoom(z0+2);
        else if(map.getZoom()>17) map.setZoom(17);
      });
    });
    c.setMap(map);
    clusterMarkers.push(c);
  });
}

/* Frame the current selection: an event, a person's whole path, or everything. */
function frame(){
  if(selId) flyTo(byId(selId));
  else if(selPerson) fitPerson(selPerson);
  else fitAll();
}
function fitPerson(pid){
  const pts=shown().filter(e=>e.people&&e.people.includes(pid));
  if(!pts.length) return fitAll();
  if(pts.length===1) return flyTo(pts[0]);
  const bounds=new google.maps.LatLngBounds();
  pts.forEach(e=>bounds.extend(ll(e)));
  map.fitBounds(bounds,60);
}
function fitAll(){
  if(!map) return;
  const bounds=new google.maps.LatLngBounds();
  shown().forEach(e=>bounds.extend(ll(e)));
  map.fitBounds(bounds,60);
}

async function initMap(){
  try{
    await google.maps.importLibrary("maps");
  }catch(err){
    console.error("Google Maps failed to load — check js/config.js for a valid API key.",err);
    return;
  }
  defineHtmlMarker();
  const isMobile=window.matchMedia("(max-width:880px)").matches;
  map=new google.maps.Map($("map"),{
    center:{lat:35.6,lng:137.5}, zoom:6,
    styles:MAP_STYLE,
    disableDefaultUI:true, zoomControl:true,
    /* on phones the bottom edge holds the old-map credit, so zoom goes top-right */
    zoomControlOptions:{position:isMobile?google.maps.ControlPosition.RIGHT_TOP:google.maps.ControlPosition.RIGHT_BOTTOM},
    /* "greedy" (one-finger pan) suits a full-screen map; on mobile the
       map sits mid-page now, so "cooperative" lets a one-finger swipe
       scroll the page through it instead of hijacking the pan. */
    gestureHandling:isMobile?"cooperative":"greedy"
  });
  /* dashed line through the selected person's events, in date order (see paintStates) */
  pathLine=new google.maps.Polyline({
    path:[], map, strokeOpacity:0,
    icons:[{icon:{path:"M 0,-1 0,1",strokeOpacity:.65,strokeColor:"#8ed8df",scale:2},offset:"0",repeat:"10px"}]
  });
  buildMarkers();
  map.addListener("zoom_changed",recluster);
  google.maps.event.addListenerOnce(map,"idle",recluster);
  buildEraUI();
  frame();
  /* Re-fit the view when the container changes size (rotation, crossing
     the mobile breakpoint) so the selection stays framed. */
  if(window.ResizeObserver){
    let debounceId=null;
    new ResizeObserver(()=>{
      clearTimeout(debounceId);
      debounceId=setTimeout(frame,150);
    }).observe($("map"));
  }
}

/* ---------- Edo-era map layer ---------- */
/* Each OLD_MAPS entry (data/oldmaps.js) is a scanned period map already
   warped and cut into tiles under oldmaps/<id>/. Switching to 江戸 lays
   them over the modern map; the switch and the credit line are Google
   Maps custom controls, so they only exist once the map has loaded. */
let era="now", eraUI=null;
const oldLayers=[];
function oldBounds(m){ return new google.maps.LatLngBounds({lat:m.bounds[0],lng:m.bounds[1]},{lat:m.bounds[2],lng:m.bounds[3]}); }
function buildEraUI(){
  const index=typeof OLD_MAP_TILES!=="undefined"?OLD_MAP_TILES:{};
  OLD_MAPS.forEach(m=>{
    const have=index[m.id];
    oldLayers.push(new google.maps.ImageMapType({
      name:m.id, tileSize:new google.maps.Size(256,256), opacity:.95,
      minZoom:m.zooms[0], maxZoom:m.zooms[1],
      getTileUrl:(c,z)=>{
        if(z<m.zooms[0]||z>m.zooms[1]) return null;
        const col=have&&have[z]&&have[z][c.x];
        if(have&&!(col&&col.includes(c.y))) return null;   // tile outside the map's shape
        return `oldmaps/${m.id}/${z}/${c.x}/${c.y}.webp`;
      }
    }));
  });
  const box=document.createElement("div");
  box.className="era-ui";
  box.innerHTML=`<div class="era-switch" role="group"><button type="button" data-era="now"></button><button type="button" data-era="edo"></button></div><div class="era-hint" hidden></div>`;
  box.querySelectorAll("[data-era]").forEach(b=>b.onclick=()=>setEra(b.dataset.era));
  const credit=document.createElement("div");
  credit.className="era-credit"; credit.hidden=true;
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(box);
  map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(credit);
  eraUI={box,credit};
  map.addListener("idle",renderEra);
  renderEra();
}
function setEra(e){
  era=e;
  map.overlayMapTypes.clear();
  if(era==="edo") oldLayers.forEach(l=>map.overlayMapTypes.push(l));
  /* no old-map tiles exist past their max zoom, so cap zooming while they're on */
  map.setOptions({maxZoom:era==="edo"?Math.max(...OLD_MAPS.map(m=>m.zooms[1])):null});
  renderEra();
}
function renderEra(){
  if(!eraUI) return;
  eraUI.box.querySelector(".era-switch").setAttribute("aria-label",t(STR.eraLabel));
  eraUI.box.querySelectorAll("[data-era]").forEach(b=>{
    b.textContent=t(b.dataset.era==="edo"?STR.eraEdo:STR.eraNow);
    b.setAttribute("aria-pressed",b.dataset.era===era);
  });
  const view=map.getBounds();
  const shown=era==="edo"&&view?OLD_MAPS.filter(m=>view.intersects(oldBounds(m))&&map.getZoom()>=m.zooms[0]&&map.getZoom()<=m.zooms[1]):[];
  /* credit line for whichever old maps are on screen */
  eraUI.credit.replaceChildren(...shown.flatMap((m,i)=>{
    const a=document.createElement("a");
    a.href=m.url; a.target="_blank"; a.rel="noopener"; a.textContent=t(m.title);
    return [...(i?[document.createElement("br")]:[]), a, document.createTextNode(" "+t(m.credit))];
  }));
  eraUI.credit.hidden=!shown.length;
  /* Edo is on but no old map is in view: say where they exist and offer to go there */
  const hint=eraUI.box.querySelector(".era-hint");
  hint.hidden=!(era==="edo"&&!shown.length);
  if(!hint.hidden){
    const label=document.createElement("span"); label.textContent=t(STR.eraOnly);
    hint.replaceChildren(label,...OLD_MAPS.map(m=>{
      const b=document.createElement("button"); b.type="button"; b.className="era-go";
      b.textContent=t(STR.eraGo)(t(m.place));
      b.onclick=()=>{ map.setCenter({lat:m.focus.lat,lng:m.focus.lng}); map.setZoom(m.focus.zoom); };
      return b;
    }));
  }
}

/* ---------- helpers ---------- */
const $=id=>document.getElementById(id);
function monBtn(pid){const p=PEOPLE[pid];return `<span class="mon">${p.kanji}</span>`;}

/* ---------- header ---------- */
function renderHeader(){
  $("h-title").innerHTML=`${t(STR.title)}<span class="sub">${t(STR.subtitle)}</span>`;
  $("h-title").href=href("index.html");
  $("btn-home").textContent=t(STR.home);
  $("btn-home").href=href("index.html");
  $("btn-tour").textContent=tourLabel();
  $("btn-context").textContent=t(STR.context);
  $("btn-context").classList.toggle("off",!showContext);
  $("btn-context").setAttribute("aria-pressed",showContext);
  $("btn-fit").textContent=t(STR.fit);
  $("btn-lang").textContent=t(STR.lang);
  $("people-label").textContent=t(STR.people);
  $("tour-next").textContent=t(STR.next);
  $("tour-prev").textContent=t(STR.prev);
  $("tour-exit").textContent=t(STR.exit);
  document.documentElement.lang=lang;
}

/* ---------- people row ---------- */
/* Only the core cast (PEOPLE_ON_MAP in data/people.js) sits here; the
   full roster lives on people.html, one link away. */
function renderPeople(){
  $("people-grid").innerHTML=PEOPLE_ON_MAP.map(id=>`
    <button class="p-chip" data-p="${id}" aria-pressed="${selPerson===id}">
      ${monBtn(id)}<span class="pn">${t(PEOPLE[id].name)}</span>
    </button>`).join("")+
    `<a class="p-all" href="${href("people.html")}">${t(STR.allMembers)(Object.keys(PEOPLE).length)}</a>`;
  $("people-grid").querySelectorAll(".p-chip").forEach(b=>b.onclick=()=>selectPerson(b.dataset.p));
}

/* ---------- timeline ---------- */
let timelineKey="";
function renderTimeline(){
  const vis=shown();
  timelineKey=vis.map(e=>e.id).join();
  $("timeline").innerHTML=vis.map(e=>{
    const mark = e.kind==="context" ? `<span class="ctxmark">◇</span>` :
                 `<span>${e.no}</span>`;
    return `<button class="t-chip ${e.kind==="context"?"ctx":e.story?"":"minor"}" data-ev="${e.id}">
      <span class="t-yr">${mark}${e.year}</span>
      <span class="t-ti">${t(e.title)}</span>
    </button>`;
  }).join("");
  $("timeline").querySelectorAll(".t-chip").forEach(b=>b.onclick=()=>selectEvent(b.dataset.ev,true));
}
/* re-render the timeline only when what it should show has changed */
function syncTimeline(){ if(shown().map(e=>e.id).join()!==timelineKey) renderTimeline(); }

/* ---------- detail: person ---------- */
function renderPersonDetail(pid){
  const p=PEOPLE[pid];
  const evs=ALL.filter(e=>e.people&&e.people.includes(pid));
  let html=`
    <div class="eyebrow">${t(p.role)}</div>
    <div class="d-title">${t(p.name)}</div>
    <div class="life">${p.life}<a class="bio-link" href="${href("people.html",{p:pid})}">${t(STR.bioPage)}</a></div>
    <div class="summary">${t(p.summary)}</div>`;
  (p.sections||[]).forEach(s=>{
    html+=`<div class="d-sect-h">${t(s.h)}</div><p class="d-body">${t(s.b)}</p>`;
  });
  if(p.legend){
    html+=`<div class="legend-box"><span class="lg-label">${t(STR.legendLabel)}</span>${t(p.legend)}</div>`;
  }
  html+=`<div class="d-sub">${t(STR.appearsIn)} — ${evs.length}</div><div class="link-list">`;
  evs.forEach(e=>{
    const noCls = e.kind==="context"?"ctx":"";
    const role = e.roles&&e.roles[pid] ? `<div class="li-role">${t(e.roles[pid])}</div>` : "";
    html+=`<button class="link-item" data-ev="${e.id}">
      <div class="li-top"><span class="no ${noCls}">${e.no}</span><span class="yr">${e.year}</span><span>${t(e.title)}</span></div>
      ${role}
    </button>`;
  });
  html+=`</div>`;
  $("detail").innerHTML=html;
  $("detail").scrollTop=0;
  $("detail").querySelectorAll(".link-item").forEach(b=>b.onclick=()=>selectEvent(b.dataset.ev,true));
}

/* ---------- detail: event ---------- */
function renderEventDetail(id){
  const e=byId(id);
  let tag="";
  if(e.kind==="context") tag=`<span class="ctx-tag">◇ ${t(STR.contextTag)}</span>`;
  let html=`
    <div class="eyebrow">${t(e.date)}${tag}</div>
    <div class="d-title">${t(e.title)}</div>
    <div class="d-loc">${t(e.loc)}</div>
    <p class="d-body">${t(e.desc)}</p>`;
  if(e.legend){
    html+=`<div class="legend-box"><span class="lg-label">${t(STR.legendLabel)}</span>${t(e.legend)}</div>`;
  }
  const ppl=e.people||[];
  if(ppl.length){
    html+=`<div class="d-sub">${t(STR.whoWasThere)}</div><div class="role-list">`;
    ppl.forEach(pid=>{
      const roleTxt = e.roles&&e.roles[pid] ? `<div class="role-text">${t(e.roles[pid])}</div>` : "";
      html+=`<div class="role-item">
        <div class="role-head">${monBtn(pid)}<button data-p="${pid}">${t(PEOPLE[pid].name)}</button></div>
        ${roleTxt}
      </div>`;
    });
    html+=`</div>`;
  }
  $("detail").innerHTML=html;
  $("detail").scrollTop=0;
  $("detail").querySelectorAll("[data-p]").forEach(b=>b.onclick=()=>selectPerson(b.dataset.p));
}

/* ---------- detail: intro ---------- */
function renderIntro(){
  $("detail").innerHTML=`
    <div class="intro-seal">誠</div>
    <div class="d-title">${t(STR.introTitle)}</div>
    ${lang==="en"?`<a class="basics-link" href="basics.html"><b>New to the Shinsengumi?</b> Start with the basics →</a>`:""}
    <p class="d-body">${t(STR.introBody)}</p>`;
}

function renderDetail(){
  if(selPerson) renderPersonDetail(selPerson);
  else if(selId) renderEventDetail(selId);
  else renderIntro();
}

/* ---------- paint selection / dimming ---------- */
function paintStates(){
  syncTimeline();
  const fp=focusPerson();
  if(pathLine) pathLine.setPath(fp ? shown().filter(e=>e.people&&e.people.includes(fp)).map(ll) : []);
  const related = fp ? new Set(ALL.filter(e=>e.people&&e.people.includes(fp)).map(e=>e.id)) : null;
  $("btn-tour").textContent=tourLabel();
  document.querySelectorAll(".pin[data-ev]").forEach(el=>{
    const id=el.dataset.ev;
    el.classList.toggle("sel",id===selId);
    el.classList.toggle("dim",!!related&&!related.has(id));
  });
  $("timeline").querySelectorAll(".t-chip").forEach(el=>{
    const id=el.dataset.ev;
    el.classList.toggle("active",id===selId);
    el.classList.toggle("dim",!!related&&!related.has(id));
  });
  $("people-grid").querySelectorAll(".p-chip").forEach(el=>{
    el.classList.toggle("active",el.dataset.p===selPerson);
    el.setAttribute("aria-pressed",el.dataset.p===selPerson);
  });
  recluster();
}

/* ---------- interactions ---------- */
function flyTo(e){
  if(!map) return;
  const pos={lat:e.coords[0],lng:e.coords[1]};
  if(reduced) map.setCenter(pos); else map.panTo(pos);
  map.setZoom(e.zoom);
}
function selectEvent(id,move){
  selId=id; selPerson=null;
  const e=byId(id);
  if(move) flyTo(e);
  if(tourIdx>=0){const i=TOUR.indexOf(e); if(i>=0) tourIdx=i; renderTour();}
  renderDetail(); paintStates();
  const chip=$("timeline").querySelector(`[data-ev="${id}"]`);
  if(chip) chip.scrollIntoView({inline:"center",block:"nearest",behavior:reduced?"auto":"smooth"});
}
function selectPerson(id){
  selPerson = selPerson===id ? null : id;
  if(selPerson) selId=null;
  renderDetail(); paintStates();
}

/* ---------- guided tour ---------- */
/* With no one selected, the tour walks the corps' main story (events
   marked story:true in data/events.js). With a person selected, it walks
   that person's whole path instead, birth to grave. */
let TOUR=[];
const tourLabel=()=>selPerson?STR.tourPerson[lang](PEOPLE[selPerson]):t(STR.tour);
function rebuildTour(){
  tourPerson=selPerson;
  TOUR = tourPerson ? shown().filter(e=>e.people&&e.people.includes(tourPerson)) : ALL.filter(e=>e.story);
}
function renderTour(){
  $("tourbar").classList.toggle("on",tourIdx>=0);
  if(tourIdx<0) return;
  $("tri-track").innerHTML=TOUR.map((_,i)=>
    `<div class="tri${i<tourIdx?" done":i===tourIdx?" here":""}"></div>`).join("");
  $("tour-step").textContent=(tourPerson?PEOPLE[tourPerson].name[lang].split(" ")[0]+" · ":"")+STR.stepOf[lang](tourIdx+1,TOUR.length);
  $("tour-prev").disabled=tourIdx===0;
  $("tour-next").disabled=tourIdx===TOUR.length-1;
}
function startTour(){ rebuildTour(); if(!TOUR.length) return; tourIdx=0; renderTour(); selectEvent(TOUR[0].id,true); }
function stepTour(d){ tourIdx=Math.min(Math.max(tourIdx+d,0),TOUR.length-1); renderTour(); selectEvent(TOUR[tourIdx].id,true); }
function exitTour(){ tourIdx=-1; tourPerson=null; renderTour(); paintStates(); }

/* ---------- context toggle ---------- */
function toggleContext(){
  showContext=!showContext;
  if(!showContext && selId && byId(selId).kind==="context"){ selId=null; }
  renderHeader(); renderTimeline(); buildMarkers(); renderDetail();
}

/* ---------- wiring ---------- */
$("btn-lang").onclick=()=>{lang=lang==="ja"?"en":"ja"; renderAll();};
$("btn-tour").onclick=startTour;
$("btn-context").onclick=toggleContext;
$("btn-fit").onclick=fitAll;
$("tour-next").onclick=()=>stepTour(1);
$("tour-prev").onclick=()=>stepTour(-1);
$("tour-exit").onclick=exitTour;

function renderAll(){
  renderHeader(); renderPeople(); renderTimeline(); renderDetail(); buildMarkers(); renderTour(); renderEra();
}
/* Deep links: map.html?ev=<event>, ?person=<id>, or ?tour=1 to start the guided tour */
{
  const q=new URLSearchParams(location.search);
  if(byId(q.get("ev"))){ selId=q.get("ev"); if(byId(selId).kind==="context") showContext=true; }
  else if(PEOPLE[q.get("person")]) selPerson=q.get("person");
}
renderAll();
if(new URLSearchParams(location.search).get("tour")==="1" && !selId && !selPerson) startTour();
if(selId){
  /* centre the deep-linked event's chip without scrolling the page */
  const tl=$("timeline"), chip=tl.querySelector(`[data-ev="${selId}"]`);
  if(chip) tl.scrollLeft+=chip.getBoundingClientRect().left-tl.getBoundingClientRect().left-(tl.clientWidth-chip.offsetWidth)/2;
}
initMap();
