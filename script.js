:root {
  --lima:   #b8f542;
  --oscuro: #0f1a0c;
  --verde:  #1a3a1e;
  --blanco: #f4f1eb;
  --gris:   #8a9e8f;
  --card-bg: rgba(255,255,255,0.07);
  --card-border: rgba(255,255,255,0.12);
}

* { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior: smooth; }
body {
  font-family: 'DM Sans', sans-serif;
  background: var(--oscuro);
  color: var(--blanco);
  overflow-x: hidden;
}

/* ── NAV ── */
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 48px;
  transition: all .3s;
}
nav.scrolled {
  background: rgba(15,26,12,0.92);
  backdrop-filter: blur(16px);
  padding: 14px 48px;
  border-bottom: 1px solid rgba(255,255,255,.08);
}
.nav-logo {
  display: flex; align-items: center; gap: 10px;
  font-family: 'Instrument Serif', serif;
  font-size: 1.15rem;
  color: var(--blanco);
  text-decoration: none;
}
.nav-links {
  display: flex; align-items: center; gap: 28px;
  list-style: none;
}
.nav-links a {
  color: rgba(244,241,235,.75);
  text-decoration: none;
  font-size: .82rem;
  letter-spacing: .02em;
  transition: color .2s;
}
.nav-links a:hover { color: var(--blanco); }
.nav-cta {
  background: var(--lima);
  color: var(--oscuro) !important;
  padding: 9px 22px;
  border-radius: 100px;
  font-weight: 600;
  font-size: .8rem !important;
  transition: opacity .2s !important;
}
.nav-cta:hover { opacity: .85; }

/* ── HERO ── */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
}
.hero-bg {
  position: absolute; inset: 0;
  background:
    linear-gradient(to bottom, rgba(15,26,12,.35) 0%, rgba(15,26,12,.1) 40%, rgba(15,26,12,.8) 85%, var(--oscuro) 100%),
    url('https://images.unsplash.com/photo-1587578855933-de8a845b7ef4?w=1800&q=80') center/cover no-repeat;
  transform: scale(1.04);
  animation: heroZoom 12s ease-out forwards;
}
@keyframes heroZoom {
  from { transform: scale(1.08); }
  to   { transform: scale(1.0); }
}

/* Hero body: 2 columnas — izquierda contenido, derecha instituciones */
.hero-body {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 40px;
  align-items: end;
  padding: 0 48px 48px;
}
.hero-content { position: relative; }

.hero-tag {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,.18);
  border-radius: 100px;
  padding: 6px 14px;
  font-size: .72rem;
  letter-spacing: .06em;
  text-transform: uppercase;
  margin-bottom: 24px;
  animation: fadeUp .8s ease both;
}
.hero-tag-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--lima); animation: blink 2s infinite;
}
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:.3} }

h1 {
  font-family: 'Instrument Serif', serif;
  font-size: clamp(2.8rem, 6vw, 5.5rem);
  line-height: 1.05;
  font-weight: 400;
  margin-bottom: 24px;
  animation: fadeUp .8s .15s ease both;
}
h1 em { font-style: italic; color: var(--lima); }

.hero-sub {
  font-size: 1.05rem;
  color: rgba(244,241,235,.75);
  max-width: 520px;
  line-height: 1.65;
  margin-bottom: 36px;
  font-weight: 300;
  animation: fadeUp .8s .3s ease both;
}
.hero-btns {
  display: flex; gap: 14px; align-items: center;
  animation: fadeUp .8s .45s ease both;
}

.btn-primary {
  background: var(--lima);
  color: var(--oscuro);
  padding: 14px 28px;
  border-radius: 100px;
  font-weight: 600;
  font-size: .88rem;
  text-decoration: none;
  transition: opacity .2s;
}
.btn-primary:hover { opacity: .85; }

.btn-ghost-hero {
  color: var(--blanco);
  border: 1px solid rgba(255,255,255,.3);
  padding: 13px 28px;
  border-radius: 100px;
  font-size: .88rem;
  text-decoration: none;
  transition: all .2s;
}
.btn-ghost-hero:hover { background: rgba(255,255,255,.08); }

.btn-dark {
  background: var(--oscuro);
  color: var(--blanco);
  border: 1px solid rgba(255,255,255,.2);
  padding: 12px 26px;
  border-radius: 100px;
  font-size: .84rem;
  font-weight: 500;
  text-decoration: none;
  display: inline-block;
  transition: all .2s;
}
.btn-dark:hover { border-color: var(--lima); color: var(--lima); }

/* Hero cards (bottom strip) */
.hero-cards {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  border-top: 1px solid rgba(255,255,255,.1);
}
.hero-card {
  background: rgba(15,26,12,.85);
  backdrop-filter: blur(20px);
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  border-right: 1px solid rgba(255,255,255,.08);
}
.hero-card:last-child { border-right: none; }
.hero-card-label {
  font-size: .65rem; text-transform: uppercase;
  letter-spacing: .1em; color: var(--gris);
}
.hero-card-title { font-family: 'Instrument Serif', serif; font-size: 1.15rem; }
.hero-card-body { font-size: .78rem; color: rgba(244,241,235,.65); line-height: 1.5; }
.hero-card-link {
  font-size: .72rem; color: var(--lima);
  text-decoration: none; display: flex; align-items: center; gap: 4px;
  margin-top: 4px; transition: gap .2s;
}
.hero-card-link:hover { gap: 8px; }
.hero-stat { text-align: center; justify-content: center; align-items: center; }
.hero-stat-num {
  font-family: 'Instrument Serif', serif;
  font-size: 3rem; color: var(--lima); line-height: 1;
}
.hero-stat-desc {
  font-size: .72rem; color: rgba(244,241,235,.6);
  text-transform: uppercase; letter-spacing: .06em; line-height: 1.4;
}

/* ── HERO ALIADOS PANEL (derecha del hero) ── */
.hero-aliados {
  background: rgba(15,26,12,.82);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(184,245,66,.2);
  border-radius: 20px;
  padding: 28px 28px 24px;
}
.hero-aliados-label {
  font-size: .58rem;
  text-transform: uppercase;
  letter-spacing: .14em;
  color: var(--lima);
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(184,245,66,.15);
}
.hero-aliados-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.hero-aliados-col { display: flex; flex-direction: column; gap: 6px; }
.hero-aliados-cat {
  font-size: .54rem; text-transform: uppercase; letter-spacing: .1em;
  color: rgba(184,245,66,.7); margin-bottom: 4px;
  padding-bottom: 5px; border-bottom: 1px solid rgba(184,245,66,.12);
}
.hero-aliados-tag {
  font-size: .74rem; color: rgba(244,241,235,.85);
  background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.09);
  border-radius: 7px; padding: 6px 10px; line-height: 1.3;
}

@keyframes fadeUp {
  from { opacity:0; transform: translateY(20px); }
  to   { opacity:1; transform: translateY(0); }
}

/* ── ABOUT ── */
.about {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 80px; padding: 120px 48px;
  align-items: start;
  background: var(--blanco); color: var(--oscuro);
}
.about-tabs { display: flex; gap: 8px; margin-bottom: 28px; flex-wrap: wrap; }
.tab-pill {
  background: rgba(15,26,12,.07);
  border: 1px solid rgba(15,26,12,.15);
  border-radius: 100px; padding: 7px 18px;
  font-size: .76rem; cursor: pointer; transition: all .2s;
  font-family: 'DM Sans', sans-serif; color: var(--oscuro);
}
.tab-pill.active, .tab-pill:hover {
  background: var(--oscuro); color: var(--blanco); border-color: var(--oscuro);
}
.about-eyebrow {
  font-size: .65rem; text-transform: uppercase;
  letter-spacing: .12em; color: var(--gris); margin-bottom: 12px;
}
.about-headline {
  font-family: 'Instrument Serif', serif;
  font-size: clamp(1.6rem, 2.5vw, 2.4rem);
  font-weight: 400; line-height: 1.2; margin-bottom: 20px;
}
.about-body {
  font-size: .9rem; color: rgba(15,26,12,.7);
  line-height: 1.75; margin-bottom: 32px;
}
.refi-tag {
  display: inline-flex; align-items: center; gap: 6px;
  background: rgba(15,26,12,.08); border: 1px solid rgba(15,26,12,.15);
  border-radius: 100px; padding: 5px 14px;
  font-size: .72rem; font-weight: 500; color: var(--oscuro);
}

/* Stat cards */
.stat-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.stat-card {
  border-radius: 20px; overflow: hidden;
  position: relative; aspect-ratio: 1; background: var(--verde);
}
.stat-card.accent { background: var(--lima); }
.stat-card-photo {
  width: 100%; height: 100%; object-fit: cover;
  display: flex; align-items: center; justify-content: center;
}
.stat-card-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,.7) 0%, transparent 60%);
  display: flex; flex-direction: column;
  justify-content: flex-end; padding: 24px;
}
.stat-card-num {
  font-family: 'Instrument Serif', serif;
  font-size: 2.8rem; color: var(--blanco); line-height: 1;
}
.stat-card-lbl {
  font-size: .72rem; color: rgba(244,241,235,.75);
  text-transform: uppercase; letter-spacing: .06em;
}
.stat-card-arrow {
  position: absolute; top: 16px; right: 20px;
  font-size: 1.2rem; color: rgba(255,255,255,.5);
}

/* ── NOSOTROS ── */
.nosotros-section { background: var(--oscuro); padding: 120px 48px; }
.nosotros-inner {
  max-width: 1100px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 80px; align-items: center;
}
.nosotros-img { position: relative; border-radius: 20px; overflow: hidden; }
.nosotros-img img { width: 100%; height: 480px; object-fit: cover; display: block; border-radius: 20px; }
.nosotros-img-badge {
  position: absolute; bottom: 20px; left: 20px;
  background: rgba(15,26,12,.85); backdrop-filter: blur(10px);
  border: 1px solid rgba(184,245,66,.2); border-radius: 100px;
  padding: 6px 16px; font-size: .7rem; color: var(--lima); letter-spacing: .06em;
}
.nosotros-pills { display: flex; flex-wrap: wrap; gap: 8px; }
.nosotros-pill {
  background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.12);
  border-radius: 100px; padding: 6px 14px;
  font-size: .75rem; color: rgba(244,241,235,.8);
}

/* ── MAPA ── */
.map-section { background: var(--oscuro); padding: 100px 48px; }
.map-header { text-align: center; margin-bottom: 40px; }
.map-headline {
  font-family: 'Instrument Serif', serif;
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 400; line-height: 1.1; margin-bottom: 16px;
}
.map-headline em { font-style: italic; color: var(--lima); }
.map-desc {
  font-size: .88rem; color: rgba(244,241,235,.6);
  max-width: 480px; margin: 0 auto; line-height: 1.65;
}
.map-filters { display: flex; align-items: center; gap: 10px; margin-bottom: 28px; flex-wrap: wrap; }
.mf-pill {
  background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.12);
  border-radius: 100px; padding: 7px 18px;
  font-size: .78rem; color: rgba(244,241,235,.7);
  cursor: pointer; transition: all .2s; font-family: 'DM Sans', sans-serif;
}
.mf-pill.on, .mf-pill:hover { background: var(--lima); color: var(--oscuro); border-color: var(--lima); }
.mf-count { margin-left: auto; font-size: .72rem; color: var(--gris); text-transform: uppercase; letter-spacing: .08em; }
.map-body { display: grid; grid-template-columns: 1fr 340px; gap: 24px; height: 520px; }
#leafmap { border-radius: 16px; overflow: hidden; height: 100%; }
.park-panel {
  background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08);
  border-radius: 16px; overflow: hidden; display: flex; flex-direction: column;
}
.pp-search { padding: 16px; border-bottom: 1px solid rgba(255,255,255,.08); }
.pp-search input {
  width: 100%; background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.1); border-radius: 8px;
  padding: 9px 14px; color: var(--blanco);
  font-size: .82rem; font-family: 'DM Sans', sans-serif;
}
.pp-search input::placeholder { color: var(--gris); }
#pp-list { flex: 1; overflow-y: auto; padding: 8px; }
.pp-item { padding: 12px 14px; border-radius: 10px; cursor: pointer; transition: background .15s; margin-bottom: 4px; }
.pp-item:hover { background: rgba(255,255,255,.06); }
.pp-item-name { font-size: .84rem; font-weight: 500; }
.pp-item-muni { font-size: .72rem; color: var(--gris); margin-top: 2px; }
.pp-badge {
  display: inline-block; padding: 2px 10px; border-radius: 100px;
  font-size: .62rem; font-weight: 600; text-transform: uppercase;
  letter-spacing: .06em; margin-top: 6px;
}
.badge-planificado { background: rgba(138,158,143,.2); color: var(--gris); }
.badge-ejecucion   { background: rgba(184,245,66,.15); color: var(--lima); }
.badge-finalizado  { background: rgba(26,58,30,.4); color: #6ec97a; }

/* ── DETAIL MODAL ── */
.detail-modal {
  display: none; position: fixed; inset: 0;
  background: rgba(0,0,0,.7); z-index: 900;
  align-items: center; justify-content: center; padding: 24px;
}
.detail-modal.open { display: flex; }
.dm-card {
  background: var(--oscuro); border: 1px solid rgba(255,255,255,.1);
  border-radius: 24px; padding: 40px;
  max-width: 560px; width: 100%; max-height: 90vh; overflow-y: auto;
}

/* ── IMPACTO ── */
.impact { background: var(--oscuro); padding: 120px 48px; }
.impact-top {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 60px; align-items: start; margin-bottom: 64px;
}
.impact-headline {
  font-family: 'Instrument Serif', serif;
  font-size: clamp(2.2rem, 4vw, 3.8rem);
  font-weight: 400; line-height: 1.1;
}
.impact-headline em { font-style: italic; color: var(--lima); }
.impact-sub { font-size: .9rem; color: rgba(244,241,235,.65); line-height: 1.75; padding-top: 8px; }
.impact-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; }
.impact-card {
  background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.07);
  padding: 36px 28px; transition: background .2s;
}
.impact-card:hover { background: rgba(255,255,255,.07); }
.impact-card.light { background: rgba(184,245,66,.06); border-color: rgba(184,245,66,.15); }
.impact-icon { font-size: 1.8rem; margin-bottom: 16px; }
.impact-num {
  font-family: 'Instrument Serif', serif;
  font-size: 2.6rem; color: var(--lima); line-height: 1; margin-bottom: 12px;
}
.impact-label { font-size: .8rem; color: rgba(244,241,235,.6); line-height: 1.55; }

/* ── VISIÓN ── */
.vision { background: var(--oscuro); padding: 100px 48px; }
.vision-header { text-align: center; margin-bottom: 56px; }
.vision-hero { position: relative; border-radius: 20px; overflow: hidden; margin-bottom: 20px; }
.vision-hero-img { width: 100%; height: 480px; object-fit: cover; display: block; }
.vision-hero-caption {
  position: absolute; bottom: 0; left: 0; right: 0;
  background: linear-gradient(transparent, rgba(15,26,12,.9));
  padding: 40px 32px 28px; display: flex; gap: 16px; align-items: flex-end;
}
.vision-tag {
  background: var(--lima); color: var(--oscuro);
  padding: 4px 12px; border-radius: 100px;
  font-size: .68rem; font-weight: 600; white-space: nowrap;
}
.vision-hero-caption p { font-size: .82rem; color: rgba(244,241,235,.8); line-height: 1.5; }
.vision-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
.vision-card { border-radius: 16px; overflow: hidden; position: relative; }
.vision-card img { width: 100%; aspect-ratio: 4/3; object-fit: cover; display: block; transition: transform 0.3s ease; }
.vision-card:hover img { transform: scale(1.03); }
.vision-card-info {
  position: absolute; bottom: 0; left: 0; right: 0;
  background: linear-gradient(transparent, rgba(15,26,12,.85));
  padding: 32px 16px 16px;
}
.vision-card-tag { font-size: .62rem; text-transform: uppercase; letter-spacing: .1em; color: var(--lima); margin-bottom: 4px; }
.vision-card-desc { font-size: .75rem; color: rgba(244,241,235,.8); line-height: 1.4; }

/* ── PLANIFICACIÓN ── */
.plan-section { background: var(--oscuro); padding: 100px 48px; }
.plan-header { text-align: center; margin-bottom: 48px; }
.plan-table-wrap { overflow-x: auto; }
.plan-table { width: 100%; border-collapse: collapse; font-size: .82rem; }
.plan-table th {
  text-align: left; padding: 14px 16px;
  border-bottom: 1px solid rgba(255,255,255,.1);
  font-weight: 500; color: var(--gris);
  font-size: .7rem; text-transform: uppercase; letter-spacing: .08em;
}
.plan-table th span { font-weight: 400; display: block; }
.plan-table td { padding: 14px 16px; border-bottom: 1px solid rgba(255,255,255,.05); }
.park-name { font-weight: 500; }
.muni { color: var(--gris); font-size: .78rem; }
.fase-done { background: rgba(184,245,66,.15); color: var(--lima); padding: 3px 10px; border-radius: 100px; font-size: .7rem; font-weight: 600; }
.fase-active { background: rgba(255,200,50,.15); color: #f5c842; padding: 3px 10px; border-radius: 100px; font-size: .7rem; font-weight: 600; }
.fase-pend { background: rgba(255,255,255,.05); color: var(--gris); padding: 3px 10px; border-radius: 100px; font-size: .7rem; }

/* ── FASES ── */
.phases { background: var(--verde); padding: 100px 48px; }
.phases-header { text-align: center; margin-bottom: 56px; }
.phases-eyebrow { font-size: .65rem; text-transform: uppercase; letter-spacing: .12em; color: var(--lima); margin-bottom: 12px; }
.phases-title { font-family: 'Instrument Serif', serif; font-size: clamp(1.8rem, 3vw, 2.8rem); font-weight: 400; line-height: 1.15; }
.phases-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 2px; }
.phase-item { background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.08); padding: 32px 24px; transition: background .2s; }
.phase-item:hover { background: rgba(255,255,255,.09); }
.phase-num { font-family: 'Instrument Serif', serif; font-size: 3rem; color: rgba(184,245,66,.3); line-height: 1; margin-bottom: 16px; }
.phase-title { font-size: .88rem; font-weight: 600; margin-bottom: 8px; }
.phase-desc { font-size: .78rem; color: rgba(244,241,235,.6); line-height: 1.55; }

/* ── CTA FINAL ── */
.cta-section {
  position: relative; padding: 120px 48px; overflow: hidden;
  background: linear-gradient(rgba(15,26,12,.7), rgba(15,26,12,.8)),
    url('https://images.unsplash.com/photo-1448375240586-882707db888b?w=1600&q=80') center/cover no-repeat;
  text-align: center;
}
.cta-title { font-family: 'Instrument Serif', serif; font-size: clamp(2.5rem, 5vw, 4.5rem); font-weight: 400; line-height: 1.1; max-width: 700px; margin: 0 auto 24px; }
.cta-title em { font-style: italic; color: var(--lima); }
.cta-sub { font-size: .95rem; color: rgba(244,241,235,.65); max-width: 480px; margin: 0 auto 40px; line-height: 1.65; }
.cta-btns { display: flex; flex-direction: column; align-items: center; gap: 14px; }

/* ── CONTACTO ── */
.contact-section { background: var(--oscuro); padding: 100px 48px; }
.contact-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1.2fr; gap: 80px; align-items: start; }
.contact-left h2 { font-family: 'Instrument Serif', serif; font-size: clamp(2rem, 3vw, 2.8rem); font-weight: 400; line-height: 1.15; margin-bottom: 20px; }
.contact-left h2 em { font-style: italic; color: var(--lima); }
.contact-left p { font-size: .88rem; color: rgba(244,241,235,.65); line-height: 1.7; margin-bottom: 28px; }
.contact-info-row { display: flex; align-items: center; gap: 12px; font-size: .84rem; margin-bottom: 14px; color: rgba(244,241,235,.75); }
.contact-info-row a { color: var(--lima); text-decoration: none; }
.contact-info-row a:hover { text-decoration: underline; }

.contact-form { background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08); border-radius: 20px; padding: 40px; }
.contact-form h3 { font-family: 'Instrument Serif', serif; font-size: 1.5rem; font-weight: 400; margin-bottom: 6px; }
.form-sub { font-size: .8rem; color: var(--gris); margin-bottom: 28px; }
.form-group { margin-bottom: 18px; }
.form-group label { display: block; font-size: .75rem; font-weight: 500; margin-bottom: 6px; color: rgba(244,241,235,.75); text-transform: uppercase; letter-spacing: .06em; }
.form-group input, .form-group select, .form-group textarea {
  width: 100%; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1);
  border-radius: 10px; padding: 11px 14px; color: var(--blanco);
  font-size: .85rem; font-family: 'DM Sans', sans-serif; transition: border-color .2s;
}
.form-group input:focus, .form-group select:focus, .form-group textarea:focus { outline: none; border-color: var(--lima); }
.form-group textarea { height: 110px; resize: vertical; }
.form-group select option { background: var(--oscuro); }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.form-submit { width: 100%; background: var(--lima); color: var(--oscuro); border: none; padding: 14px; border-radius: 10px; font-size: .88rem; font-weight: 700; cursor: pointer; font-family: 'DM Sans', sans-serif; transition: opacity .2s; }
.form-submit:hover { opacity: .85; }
.form-success { background: rgba(184,245,66,.1); border: 1px solid rgba(184,245,66,.2); border-radius: 12px; padding: 20px; text-align: center; margin-bottom: 20px; }
.form-success .check { font-size: 2rem; margin-bottom: 8px; }
.form-success p { font-size: .84rem; color: var(--lima); }

/* ── FOOTER ── */
footer { background: #080f07; border-top: 1px solid rgba(255,255,255,.07); }
.footer-top { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; padding: 72px 48px 48px; }
.footer-brand p { font-size: .82rem; color: rgba(244,241,235,.45); line-height: 1.65; margin-top: 12px; max-width: 260px; }
.footer-col h4 { font-size: .7rem; text-transform: uppercase; letter-spacing: .1em; color: var(--lima); margin-bottom: 16px; }
.footer-col ul { list-style: none; }
.footer-col li { margin-bottom: 10px; }
.footer-col a { font-size: .82rem; color: rgba(244,241,235,.45); text-decoration: none; transition: color .2s; }
.footer-col a:hover { color: var(--blanco); }
.footer-bottom { display: flex; justify-content: space-between; align-items: center; padding: 20px 48px; border-top: 1px solid rgba(255,255,255,.06); font-size: .72rem; color: rgba(244,241,235,.35); flex-wrap: wrap; gap: 8px; }

/* ── FLOATING WHATSAPP ── */
#wa-float { position: fixed; bottom: 28px; right: 28px; width: 56px; height: 56px; background: #25D366; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 20px rgba(37,211,102,.4); z-index: 400; transition: transform .2s, box-shadow .2s; }
#wa-float:hover { transform: scale(1.08); box-shadow: 0 6px 28px rgba(37,211,102,.55); }

/* ── REVEAL ANIMATION ── */
.reveal { opacity: 0; transform: translateY(28px); transition: opacity .7s ease, transform .7s ease; }
.reveal.visible { opacity: 1; transform: none; }

/* ── RESPONSIVE ── */
/* ── EQUIPO ── */
.equipo-section { padding: 100px 48px; }
.equipo-inner { max-width: 1200px; margin: 0 auto; }
.equipo-header { text-align: center; margin-bottom: 56px; }
.equipo-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.equipo-card { text-align: center; }
.equipo-photo {
  width: 100%; aspect-ratio: 1/1; border-radius: 16px;
  background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1);
  display: flex; align-items: center; justify-content: center;
  font-size: 3rem; margin-bottom: 16px; overflow: hidden;
}
.equipo-photo img { width: 100%; height: 100%; object-fit: cover; }
.equipo-name { font-family: 'Instrument Serif', serif; font-size: 1.1rem; font-weight: 400; margin-bottom: 4px; }
.equipo-role { font-size: .75rem; color: var(--gris); text-transform: uppercase; letter-spacing: .06em; }

@media (max-width: 1024px) {
  .hero-body { grid-template-columns: 1fr; padding: 0 24px 40px; }
  .hero-aliados { margin-top: 24px; }
  .hero-aliados-grid { grid-template-columns: repeat(4, 1fr); }
  .about { grid-template-columns: 1fr; gap: 48px; padding: 80px 24px; }
  .nosotros-inner { grid-template-columns: 1fr; gap: 40px; }
  .equipo-grid { grid-template-columns: 1fr 1fr; gap: 20px; }
  .equipo-section { padding: 80px 24px; }
  .map-body { grid-template-columns: 1fr; height: auto; }
  #leafmap { height: 360px; }
  .impact-top { grid-template-columns: 1fr; gap: 32px; }
  .impact-grid { grid-template-columns: 1fr 1fr; }
  .vision-grid { grid-template-columns: 1fr 1fr; }
  .phases-grid { grid-template-columns: 1fr 1fr; }
  .contact-inner { grid-template-columns: 1fr; gap: 48px; }
  .footer-top { grid-template-columns: 1fr 1fr; gap: 32px; padding: 48px 24px 32px; }
  nav { padding: 16px 24px; }
  nav.scrolled { padding: 12px 24px; }
}
@media (max-width: 768px) {
  .nav-links { display: none; }
  .hero-cards { grid-template-columns: 1fr; }
  .hero-aliados-grid { grid-template-columns: 1fr 1fr; }
  .equipo-grid { grid-template-columns: 1fr; }
  .stat-cards { grid-template-columns: 1fr 1fr; }
  .impact-grid { grid-template-columns: 1fr; }
  .vision-grid { grid-template-columns: 1fr 1fr; }
  .phases-grid { grid-template-columns: 1fr; }
  .form-row { grid-template-columns: 1fr; }
  .footer-top { grid-template-columns: 1fr; }
  .footer-bottom { flex-direction: column; text-align: center; padding: 16px 24px; }
  h1 { font-size: 2.6rem; }
}
