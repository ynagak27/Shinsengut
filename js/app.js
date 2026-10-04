/* =====================================================================
   APP — rendering & interaction. Content lives in /data/*.js.
   You should rarely need to touch this file to add content.
   ===================================================================== */

/* ---------- UI strings ---------- */
const STR = {
  title:{en:"The Road of Shinsengumi, the last group of Samurai",ja:"新選組の軌跡"},
  subtitle:{en:"The Shinsengumi's demon vice-commander — from Tama to Hakodate, 1835–1869",
            ja:"新選組「鬼の副長」— 多摩から箱館へ 1835–1869"},
  people:{en:"The men of the Shinsengumi",ja:"新選組の隊士"},
  tour:{en:"Guided tour",ja:"順路をたどる"},
  context:{en:"Historical events",ja:"時代の動き"},
  fit:{en:"Full route",ja:"全体を表示"},
  lang:{en:"日本語",ja:"English"},
  next:{en:"Next →",ja:"次へ →"},
  prev:{en:"← Back",ja:"← 前へ"},
  exit:{en:"Explore freely",ja:"自由に見る"},
  whoWasThere:{en:"Who was there — and what they did",ja:"関与した隊士 — その働き"},
  appearsIn:{en:"Appears in",ja:"関連する出来事"},
  aside:{en:"off Hijikata's route",ja:"土方の進路外"},
  contextTag:{en:"national event",ja:"時代の動き"},
  legendLabel:{en:"Legend & disputed accounts",ja:"伝承・異説"},
  introTitle:{en:"Follow the journey",ja:"軌跡をたどる"},
  introBody:{en:"Tap any numbered point on the map or the timeline to open an event, or tap a name above to follow one man through the whole story — the map dims to just his path, and his page gives his life in full.\n\nThe ◇ diamonds are the great events of the age — Perry's ships, the Satsuma–Chōshū alliance, the fall of Edo — set beside the corps' own movements. Toggle them with \"Historical events.\" The guided tour walks the route in order, from a Tama farmhouse to the gates of Hakodate.",
             ja:"地図やタイムラインの番号をタップすると出来事の詳細が開きます。上の隊士名をタップすれば、その人物の物語を最初から追えます——地図はその足取りだけに絞られ、人物ページには生涯が詳しく記されます。\n\n◇印は時代の大事件です——黒船、薩長同盟、江戸開城——を隊の動きと並べて配置しています。「時代の動き」で表示を切り替えられます。「順路をたどる」では、多摩の農家から箱館の関門まで、時系列で旅をご案内します。"},
  stepOf:{en:(a,b)=>`${a} / ${b}`,ja:(a,b)=>`${a} / ${b}`}
};

/* ---------- state ---------- */
let lang="ja";
let selId=null, selPerson=null, tourIdx=-1, showContext=true;
const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const t=o=>(o&&o[lang]!==undefined)?o[lang]:"";

/* ---------- merge + order all timeline items ---------- */
EVENTS.forEach(e=>{e.kind="corps";});
CONTEXT.forEach(e=>{e.kind="context"; e.route=false;});
const ALL=[...EVENTS,...CONTEXT].sort((a,b)=>a.sort.localeCompare(b.sort));
const byId=id=>ALL.find(e=>e.id===id);

/* route numbering (only Hijikata's path gets numbers) */
let rn=0;
ALL.forEach(e=>{
  if(e.kind==="corps"&&e.route) e.no=(++rn);
  else if(e.kind==="context") e.no="◇";
  else e.no="†";
});

/* ---------- map ---------- */
/* Google Maps has no built-in HTML marker like Leaflet's divIcon, so we
   roll a small OverlayView that positions a real DOM node (our .pin,
   unchanged from the old Leaflet markup) at a lat/lng each frame.
   google.maps.OverlayView doesn't exist until the "maps" library has
   loaded, so this class is defined lazily inside initMap(), not here. */
let HtmlMarker;
function defineHtmlMarker(){
  HtmlMarker=class extends google.maps.OverlayView{
    constructor(pos,html,onClick){ super(); this.pos=pos; this.html=html; this.onClick=onClick; this.div=null; }
    onAdd(){
      this.div=document.createElement("div");
      this.div.style.position="absolute";
      this.div.style.transform="translate(-50%,-50%)";
      this.div.innerHTML=this.html;
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

let map,routeLine;
const routePts=EVENTS.filter(e=>e.route).sort((a,b)=>a.sort.localeCompare(b.sort))
  .map(e=>({lat:e.coords[0],lng:e.coords[1]}));

const markers={};
function buildMarkers(){
  if(!map) return;
  Object.values(markers).forEach(m=>m.setMap(null));
  ALL.forEach(e=>{
    if(e.kind==="context" && !showContext) return;
    const cls = e.kind==="context" ? "ctx" : (e.route ? "" : "aside");
    const html=`<div class="pin ${cls}" data-ev="${e.id}">${e.no}<span class="tt">${t(e.title)}</span></div>`;
    const m=new HtmlMarker({lat:e.coords[0],lng:e.coords[1]},html,()=>selectEvent(e.id,true));
    m.setMap(map);
    markers[e.id]=m;
  });
  paintStates();
}
function fitAll(){
  if(!map) return;
  const bounds=new google.maps.LatLngBounds();
  routePts.forEach(p=>bounds.extend(p));
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
    /* "greedy" (one-finger pan) suits a full-screen map; on mobile the
       map sits mid-page now, so "cooperative" lets a one-finger swipe
       scroll the page through it instead of hijacking the pan. */
    gestureHandling:isMobile?"cooperative":"greedy"
  });
  routeLine=new google.maps.Polyline({
    path:routePts, map, strokeOpacity:0,
    icons:[{icon:{path:"M 0,-1 0,1",strokeOpacity:.65,strokeColor:"#8ed8df",scale:2},offset:"0",repeat:"10px"}]
  });
  buildMarkers();
  fitAll();
  /* Google Maps sizes its canvas once at creation and won't notice a
     container resize on its own. The CSS now sizes #map with dvh/clamp
     instead of vh, which is far more stable across the mobile browser
     chrome showing/hiding — but still watch the container directly in
     case fonts or other content shift layout right after load. */
  if(window.ResizeObserver){
    let lastW=0,lastH=0,debounceId=null;
    new ResizeObserver(entries=>{
      const {width,height}=entries[0].contentRect;
      if(width<100||height<100) return;
      if(Math.abs(width-lastW)<2 && Math.abs(height-lastH)<2) return;
      lastW=width; lastH=height;
      clearTimeout(debounceId);
      debounceId=setTimeout(()=>{
        if(!map) return;
        google.maps.event.trigger(map,"resize");
        if(selId) flyTo(byId(selId)); else fitAll();
      },150);
    }).observe($("map"));
  }
}

/* ---------- helpers ---------- */
const $=id=>document.getElementById(id);
function monBtn(pid){const p=PEOPLE[pid];return `<span class="mon">${p.kanji}</span>`;}

/* ---------- header ---------- */
function renderHeader(){
  $("h-title").innerHTML=`${t(STR.title)}<span class="sub">${t(STR.subtitle)}</span>`;
  $("btn-tour").textContent=t(STR.tour);
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
function renderPeople(){
  $("people-grid").innerHTML=Object.entries(PEOPLE).map(([id,p])=>`
    <button class="p-chip" data-p="${id}" aria-pressed="${selPerson===id}">
      ${monBtn(id)}<span class="pn">${t(p.name)}</span>
    </button>`).join("");
  $("people-grid").querySelectorAll(".p-chip").forEach(b=>b.onclick=()=>selectPerson(b.dataset.p));
}

/* ---------- timeline ---------- */
function renderTimeline(){
  $("timeline").innerHTML=ALL.filter(e=>e.kind!=="context"||showContext).map(e=>{
    const mark = e.kind==="context" ? `<span class="ctxmark">◇</span>` :
                 e.route ? e.no : `<span class="aside">†</span>`;
    return `<button class="t-chip ${e.kind==="context"?"ctx":""}" data-ev="${e.id}">
      <span class="t-yr">${mark}${e.year}</span>
      <span class="t-ti">${t(e.title)}</span>
    </button>`;
  }).join("");
  $("timeline").querySelectorAll(".t-chip").forEach(b=>b.onclick=()=>selectEvent(b.dataset.ev,true));
}

/* ---------- detail: person ---------- */
function renderPersonDetail(pid){
  const p=PEOPLE[pid];
  const evs=ALL.filter(e=>e.people&&e.people.includes(pid));
  let html=`
    <div class="eyebrow">${t(p.role)}</div>
    <div class="d-title">${t(p.name)}</div>
    <div class="life">${p.life}</div>
    <div class="summary">${t(p.summary)}</div>`;
  (p.sections||[]).forEach(s=>{
    html+=`<div class="d-sect-h">${t(s.h)}</div><p class="d-body">${t(s.b)}</p>`;
  });
  if(p.legend){
    html+=`<div class="legend-box"><span class="lg-label">${t(STR.legendLabel)}</span>${t(p.legend)}</div>`;
  }
  html+=`<div class="d-sub">${t(STR.appearsIn)} — ${evs.length}</div><div class="link-list">`;
  evs.forEach(e=>{
    const noCls = e.kind==="context"?"ctx":e.route?"":"aside";
    const noTxt = e.kind==="context"?"◇":e.route?e.no:"†";
    const role = e.roles&&e.roles[pid] ? `<div class="li-role">${t(e.roles[pid])}</div>` : "";
    html+=`<button class="link-item" data-ev="${e.id}">
      <div class="li-top"><span class="no ${noCls}">${noTxt}</span><span class="yr">${e.year}</span><span>${t(e.title)}</span></div>
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
  else if(!e.route) tag=`<span class="aside-tag">† ${t(STR.aside)}</span>`;
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
    <p class="d-body">${t(STR.introBody)}</p>`;
}

function renderDetail(){
  if(selPerson) renderPersonDetail(selPerson);
  else if(selId) renderEventDetail(selId);
  else renderIntro();
}

/* ---------- paint selection / dimming ---------- */
function paintStates(){
  const related = selPerson ? new Set(ALL.filter(e=>e.people&&e.people.includes(selPerson)).map(e=>e.id)) : null;
  document.querySelectorAll(".pin").forEach(el=>{
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

/* ---------- guided tour (Hijikata's route + asides, chronological) ---------- */
let TOUR=[];
function rebuildTour(){ TOUR=ALL.filter(e=>e.kind!=="context"); }
function renderTour(){
  $("tourbar").classList.toggle("on",tourIdx>=0);
  if(tourIdx<0) return;
  $("tri-track").innerHTML=TOUR.map((_,i)=>
    `<div class="tri${i<tourIdx?" done":i===tourIdx?" here":""}"></div>`).join("");
  $("tour-step").textContent=STR.stepOf[lang](tourIdx+1,TOUR.length);
  $("tour-prev").disabled=tourIdx===0;
  $("tour-next").disabled=tourIdx===TOUR.length-1;
}
function startTour(){ rebuildTour(); tourIdx=0; renderTour(); selectEvent(TOUR[0].id,true); }
function stepTour(d){ tourIdx=Math.min(Math.max(tourIdx+d,0),TOUR.length-1); renderTour(); selectEvent(TOUR[tourIdx].id,true); }
function exitTour(){ tourIdx=-1; renderTour(); }

/* ---------- context toggle ---------- */
function toggleContext(){
  showContext=!showContext;
  if(!showContext && selId && byId(selId).kind==="context"){ selId=null; }
  renderHeader(); renderTimeline(); buildMarkers(); renderDetail();
  $("timeline").querySelectorAll(".t-chip").forEach(b=>b.onclick=()=>selectEvent(b.dataset.ev,true));
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
  renderHeader(); renderPeople(); renderTimeline(); renderDetail(); buildMarkers(); renderTour();
}
renderAll();
initMap();
