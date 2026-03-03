// ══ DATA ══
const PARKS = [
  {
    id:1,
    nombre:"MP Béccar",
    barrio:"Béccar",
    municipio:"San Isidro",
    direccion:"Av. Centenario 1345, Béccar",
    estado:"planificado",
    m2:0, arboles:0, arbustos:0, herbaceas:0,
    especies:[],
    polinizadores:"Por definir",
    fechaInicio:null,
    empresa:"Por confirmar",
    referente:"Por definir",
    progreso:5,
    descripcion:"Sitio identificado en Av. Centenario 1345. Zona norte del GBA, San Isidro. En etapa inicial de relevamiento.",
    lat:-34.4720, lng:-58.5280
  },
  {
    id:2,
    nombre:"MP Pablo Podestá",
    barrio:"Pablo Podestá",
    municipio:"Tres de Febrero",
    direccion:"Pablo Podestá, Tres de Febrero",
    estado:"planificado",
    m2:0, arboles:0, arbustos:0, herbaceas:0,
    especies:[],
    polinizadores:"Por definir",
    fechaInicio:null,
    empresa:"Por confirmar",
    referente:"Por definir",
    progreso:5,
    descripcion:"Sitio identificado en Pablo Podestá, partido de Tres de Febrero. Zona oeste del GBA. En etapa de planificación.",
    lat:-34.5798, lng:-58.6097
  },
  {
    id:3,
    nombre:"MP Ribera Budge",
    barrio:"Ingeniero Budge",
    municipio:"Lomas de Zamora",
    direccion:"Camino de la Ribera Sur, Ing. Budge",
    estado:"planificado",
    m2:0, arboles:0, arbustos:0, herbaceas:0,
    especies:[],
    polinizadores:"Por definir",
    fechaInicio:null,
    empresa:"Por confirmar",
    referente:"Por definir",
    progreso:5,
    descripcion:"Sitio sobre el Camino de la Ribera Sur en Ingeniero Budge. Alto potencial para corredor ribereño.",
    lat:-34.7050, lng:-58.4850
  },
  {
    id:4,
    nombre:"MP Temperley Norte",
    barrio:"Temperley",
    municipio:"Lomas de Zamora",
    direccion:"Mirasol 3710, Temperley",
    estado:"planificado",
    m2:0, arboles:0, arbustos:0, herbaceas:0,
    especies:[],
    polinizadores:"Por definir",
    fechaInicio:null,
    empresa:"Por confirmar",
    referente:"Por definir",
    progreso:5,
    descripcion:"Sitio identificado en calle Mirasol 3710, Temperley. Partido de Lomas de Zamora.",
    lat:-34.7610, lng:-58.3900
  },
  {
    id:5,
    nombre:"MP Temperley Centro",
    barrio:"Temperley",
    municipio:"Lomas de Zamora",
    direccion:"Av. República Argentina 141, Temperley",
    estado:"planificado",
    m2:0, arboles:0, arbustos:0, herbaceas:0,
    especies:[],
    polinizadores:"Por definir",
    fechaInicio:null,
    empresa:"Por confirmar",
    referente:"Por definir",
    progreso:5,
    descripcion:"Sitio sobre Av. República Argentina 141, Temperley. Zona céntrica con alto tránsito comunitario.",
    lat:-34.7680, lng:-58.3820
  }
];

const COLORS = { planificado:'#c8a96e', ejecucion:'#7ec8e3', finalizado:'#b8f542' };
const LABELS = { planificado:'Planificado', ejecucion:'En ejecución', finalizado:'Finalizado' };
const BADGE  = { planificado:'b-plan', ejecucion:'b-ejec', finalizado:'b-fin' };

// ══ Todo dentro de window.onload para garantizar que Leaflet esté listo ══
window.addEventListener('load', function() {

  // MAP
  const lmap = L.map('leafmap', { zoomControl: false }).setView([-34.62, -58.50], 10);
  L.control.zoom({ position: 'topright' }).addTo(lmap);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap',
    maxZoom: 19
  }).addTo(lmap);

  const mLayer = L.layerGroup().addTo(lmap);
  let activeF = 'all', selId = null;

  function makeIcon(estado, sel) {
    const c = COLORS[estado] || '#c8a96e';
    const s = sel ? 48 : 38;
    return L.divIcon({
      html: `<svg xmlns='http://www.w3.org/2000/svg' width='${s}' height='${s}' viewBox='0 0 48 48'>
        <circle cx='24' cy='24' r='20' fill='${c}' opacity='0.22'/>
        <circle cx='24' cy='24' r='${sel ? 14 : 11}' fill='${c}' opacity='0.9'/>
        <circle cx='24' cy='24' r='5' fill='white' opacity='0.95'/>
      </svg>`,
      className: '', iconSize: [s, s], iconAnchor: [s/2, s/2]
    });
  }

  function renderMap(data) {
    mLayer.clearLayers();
    data.forEach(function(p) {
      const m = L.marker([p.lat, p.lng], { icon: makeIcon(p.estado, p.id === selId) });
      m.bindPopup(
        '<div class="popup-box">' +
        '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:6px;margin-bottom:3px">' +
        '<div class="popup-name">' + p.nombre + '</div>' +
        '<span class="pp-badge ' + BADGE[p.estado] + '">' + LABELS[p.estado] + '</span>' +
        '</div>' +
        '<div class="popup-loc">📍 ' + p.barrio + ' · ' + p.municipio + '</div>' +
        '<div style="font-size:.62rem;color:#b8f542;margin-bottom:10px">📌 ' + p.direccion + '</div>' +
        '<div class="popup-row">' +
        '<div class="popup-cell"><div class="popup-val">' + (p.m2 || '–') + '</div><div class="popup-lbl">m²</div></div>' +
        '<div class="popup-cell"><div class="popup-val">' + p.progreso + '%</div><div class="popup-lbl">Progreso</div></div>' +
        '</div>' +
        '<button class="popup-btn" onclick="openDetail(' + p.id + ')">Ver ficha completa →</button>' +
        '</div>',
        { maxWidth: 260 }
      );
      m.on('click', function() {
        selId = p.id;
        renderMap(getF());
        renderList(getF());
      });
      mLayer.addLayer(m);
    });

    const count = document.getElementById('mf-count');
    if (count) count.textContent = data.length + ' parques';
  }

  function renderList(data) {
    const el = document.getElementById('pp-list');
    if (!el) return;
    el.innerHTML = data.map(function(p) {
      return '<div class="pp-item' + (p.id === selId ? ' active' : '') + '" onclick="ppClick(' + p.id + ')">' +
        '<div class="pp-row">' +
        '<div class="pp-name">' + p.nombre + '</div>' +
        '<span class="pp-badge ' + BADGE[p.estado] + '">' + LABELS[p.estado] + '</span>' +
        '</div>' +
        '<div class="pp-meta">📍 ' + p.barrio + ', ' + p.municipio + '</div>' +
        '<div style="font-size:.58rem;color:#b8f542;margin-top:2px">📌 ' + p.direccion + '</div>' +
        '<div class="pp-prog"><div class="pp-prog-fill" style="width:' + p.progreso + '%"></div></div>' +
        '</div>';
    }).join('');
  }

  function getF() {
    const q = (document.getElementById('pp-srch') ? document.getElementById('pp-srch').value : '').toLowerCase();
    return PARKS.filter(function(p) {
      const okF = activeF === 'all' || p.estado === activeF;
      const okQ = !q || p.nombre.toLowerCase().includes(q) || p.barrio.toLowerCase().includes(q) || p.municipio.toLowerCase().includes(q);
      return okF && okQ;
    });
  }

  function applyF() {
    const d = getF();
    renderMap(d);
    renderList(d);
  }

  // Expose to global scope for onclick handlers
  window.ppClick = function(id) {
    const p = PARKS.find(function(x) { return x.id === id; });
    selId = id;
    renderMap(getF());
    renderList(getF());
    lmap.flyTo([p.lat, p.lng], 15, { duration: 1 });
  };

  window.setF = function(f, el) {
    activeF = f;
    document.querySelectorAll('.mf-pill').forEach(function(x) { x.classList.remove('on'); });
    el.classList.add('on');
    applyF();
  };

  // Initialize
  applyF();

  // Fit map to show all parks
  const bounds = L.latLngBounds(PARKS.map(function(p) { return [p.lat, p.lng]; }));
  lmap.fitBounds(bounds, { padding: [60, 60] });

  // Search input
  const srch = document.getElementById('pp-srch');
  if (srch) srch.addEventListener('input', applyF);

}); // end window.onload

// ══ DETAIL MODAL (fuera de onload porque no usa Leaflet) ══
window.openDetail = function(id) {
  const p = PARKS.find(function(x) { return x.id === id; });
  if (!p) return;
  const sp = (p.especies || []).length
    ? p.especies.map(function(s) { return '<span class="dm-sp">' + s + '</span>'; }).join('')
    : '<span style="color:var(--gris);font-size:.72rem">No registradas aún</span>';

  document.getElementById('dm-card').innerHTML =
    '<div class="dm-hero">🌿<button class="dm-close" onclick="closeDetail()">✕</button></div>' +
    '<div class="dm-body">' +
    '<div class="dm-badge"><span class="pp-badge ' + BADGE[p.estado] + '">' + LABELS[p.estado] + '</span></div>' +
    '<div class="dm-name">' + p.nombre + '</div>' +
    '<div class="dm-loc">📍 ' + p.barrio + ' · ' + p.municipio + '</div>' +
    '<div style="font-size:.65rem;color:#b8f542;margin-bottom:12px">📌 ' + p.direccion + '</div>' +
    '<div class="dm-desc">' + p.descripcion + '</div>' +
    '<div class="dm-prog-bar"><div class="dm-prog-fill" style="width:' + p.progreso + '%"></div></div>' +
    '<div class="dm-prog-label"><span>Progreso de implementación</span><span>' + p.progreso + '%</span></div>' +
    '<div class="dm-sec">Especies nativas</div>' +
    '<div class="dm-species">' + sp + '</div>' +
    '<div class="dm-sec">Actores</div>' +
    '<div class="dm-actors">' +
    '<div class="dm-actor"><span class="dm-key">Referente</span><span>' + p.referente + '</span></div>' +
    '<div class="dm-actor"><span class="dm-key">Financiador</span><span style="color:#c8a96e">' + p.empresa + '</span></div>' +
    (p.fechaInicio ? '<div class="dm-actor"><span class="dm-key">Fecha inicio</span><span>' + p.fechaInicio + '</span></div>' : '') +
    '</div></div>';

  document.getElementById('detail-modal').classList.add('open');
};

window.closeDetail = function() {
  document.getElementById('detail-modal').classList.remove('open');
};

document.getElementById('detail-modal').addEventListener('click', function(e) {
  if (e.target === e.currentTarget) window.closeDetail();
});

// ══ NAV SCROLL ══
window.addEventListener('scroll', function() {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 60);
});

// ══ SCROLL REVEAL ══
const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(function(el) { observer.observe(el); });

// ══ TABS ══
document.querySelectorAll('.tab-pill').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.tab-pill').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
  });
});
