// Professionals.jsx — improved professionals (Portal Profesional) landing page
// Keeps: yellow watercolor hero, 3 phone-mockup feature panels
// Fixes:
//  - section 3 (Registros) now has a phone mockup so it's not a half-empty panel
//  - "Tu consultorio en el bolsillo" rebuilt into a real download CTA with app preview + store buttons
//  - adds: obras-sociales chip strip, features grid, doctor testimonial, pricing teaser, FAQ
// All sections gain a small CTA / link to keep momentum.

const { useState } = React;

// ===========================================================
// PAGE ROOT
// ===========================================================
function ProfessionalsPage() {
  return (
    <div style={{ background: "#fcfcff", color: "var(--zonda-ink)", overflow: "hidden", position: "relative" }}>
      <ProHeader />
      <ProHero />
      <ProObrasSociales />
      <ProFeature
        accent="blue"
        eyebrow="Agenda + Pacientes"
        title="Agenda inteligente, pacientes informados."
        copy="Gestioná turnos, cancelaciones y seguimiento desde un calendario semanal. Te encargamos de notificar al paciente sobre cambios y recordatorios. Antes de cada encuentro, tenés toda la información en la palma de la mano: encuestas socioeconómicas, cambios de estado, chequeos básicos. Vos lo configurás, nosotros lo ejecutamos."
        bullets={[
          "Calendario semanal + lista del día",
          "Recordatorios automáticos por WhatsApp",
          "Pre-consulta con encuestas configurables"
        ]}
        cta="Ver demo de la agenda"
        phone={<PhoneAgenda />}
        flip={false}
      />
      <ProFeature
        accent="green"
        eyebrow="Multi-organización"
        title="Una sola carga, todas tus organizaciones."
        copy="Conectá las empresas con las que trabajás y usá únicamente Zonda para registrar las visitas de tus pacientes. Swiss Medical, OSDE, PAMI? No hay problema. Seguí tus finanzas en tiempo real, todo en un único lugar."
        bullets={[
          "OSDE · Swiss Medical · PAMI · Galeno",
          "Liquidación y conciliación automática",
          "Reportes por obra social en tiempo real"
        ]}
        cta="Ver obras sociales soportadas"
        phone={<PhoneOrganizaciones />}
        flip={true}
      />
      <ProFeature
        accent="purple"
        eyebrow="Registros clínicos"
        title="Registros clínicos superinteligentes."
        copy="Tomá nota como si escribieras en un papel. Nosotros nos encargamos de entender, ordenar y hacer el seguimiento clínico de tus pacientes con inteligencia artificial."
        bullets={[
          "Dictado por voz — transcripción al instante",
          "Resúmen estructurado por IA (SOAP, PHI, evolución)",
          "Búsqueda semántica en toda la historia"
        ]}
        cta="Ver cómo funciona la IA"
        phone={<PhoneRegistros />}
        flip={false}
      />
      <ProFeatureGrid />
      <ProTestimonial />
      <ProPricing />
      <ProDownload />
      <ProFAQ />
      <StaticFooter tone="dark" />
    </div>
  );
}

// ===========================================================
// HEADER
// ===========================================================
function ProHeader() {
  return (
    <header style={{ position: "absolute", inset: "0 0 auto 0", zIndex: 50, padding: "14px 0" }}>
      <div className="shell" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src="assets/blue-logo.png" alt="Zonda" style={{ height: 32, width: 32, borderRadius: 8 }} />
        </a>
        <nav style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {["Productos", "Casos de uso", "Desarrolladores", "Empresa"].map(l => (
            <a key={l} href="#" style={{ fontSize: 14, fontWeight: 700, color: "var(--zonda-ink)" }}>{l}</a>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <button className="btn btn-ghost btn-sm">Iniciar sesión</button>
          <button className="btn btn-primary btn-sm">Contactanos</button>
        </div>
      </div>
    </header>
  );
}

// ===========================================================
// HERO — yellow watercolor (unchanged motif, tightened copy + proof tags)
// ===========================================================
function ProHero() {
  return (
    <section style={{ position: "relative", overflow: "hidden" }}>
      {/* watercolor backdrop, layered */}
      <div style={{
        position: "absolute", inset: 0,
        background: "url('assets/movement-yellow.png') center/cover no-repeat",
        opacity: 1
      }} />
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 60% 50% at 15% 35%, rgba(255,247,80,0.55), transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(255,255,200,0.45), transparent 65%)"
      }} />
      <div className="shell" style={{ position: "relative", paddingTop: 160, paddingBottom: 96, minHeight: 720 }}>
        <p className="eyebrow" style={{ color: "rgba(14,60,117,.7)" }}>Portal del Profesional · Para profesionales independientes</p>
        <h1 className="text-balance" style={{
          marginTop: 24,
          fontFamily: "var(--font-sans)",
          fontSize: "clamp(56px, 7vw, 96px)",
          fontWeight: 800,
          lineHeight: .98,
          letterSpacing: "-0.02em",
          color: "var(--zonda-blue-dark)",
          maxWidth: 720
        }}>
          Gestioná tu práctica clínica como se merece la era de la IA.
        </h1>
        <p className="text-pretty" style={{
          marginTop: 32,
          fontSize: 20, fontWeight: 500, lineHeight: 1.55,
          color: "rgba(14,60,117,.85)",
          maxWidth: 540
        }}>
          Un único lugar para gestionar pacientes, registrar evoluciones, organizar la agenda y administrar las organizaciones con las que trabajás.
        </p>
        <div style={{ marginTop: 40, display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
          <button className="btn btn-lg" style={{ background: "var(--zonda-blue-dark)", color: "#fff", minWidth: 200 }}>
            Anotarme en la lista
          </button>
          <button className="btn btn-lg btn-link" style={{ color: "var(--zonda-blue-dark)" }}>
            Ver una demo en vivo →
          </button>
        </div>
        <div style={{ marginTop: 56, display: "flex", flexWrap: "wrap", gap: 32, alignItems: "center" }}>
          <ProofTag label="Gratis hasta 50 pacientes" />
          <ProofTag label="Sin tarjeta de crédito" />
          <ProofTag label="Online en 5 minutos" />
        </div>
      </div>
    </section>
  );
}

function ProofTag({ label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="10" fill="var(--zonda-blue-dark)" />
        <path d="M5.5 10.2L8.6 13L14.5 7" stroke="var(--zonda-yellow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span style={{ fontSize: 14, fontWeight: 600, color: "var(--zonda-blue-dark)" }}>{label}</span>
    </div>
  );
}

// ===========================================================
// OBRAS SOCIALES STRIP — proof bridge between hero and features
// ===========================================================
function ProObrasSociales() {
  const orgs = ["OSDE", "Swiss Medical", "PAMI", "Galeno", "Medicus", "Sancor Salud", "OMINT", "IOMA"];
  return (
    <section style={{ background: "#fcfcff", borderTop: "1px solid rgba(21,27,43,.06)", borderBottom: "1px solid rgba(21,27,43,.06)", paddingBlock: 36 }}>
      <div className="shell" style={{ display: "flex", alignItems: "center", gap: 48 }}>
        <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: "var(--fg-2)", lineHeight: 1.4, maxWidth: 160, flexShrink: 0 }}>
          Integrado con las obras sociales y prepagas de Argentina
        </p>
        <div style={{ flex: 1, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, filter: "grayscale(1)", opacity: .55 }}>
          {orgs.map(l => (
            <span key={l} style={{ fontSize: 15, fontWeight: 700, color: "rgba(21,27,43,.7)", whiteSpace: "nowrap", fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===========================================================
// FEATURE PANEL — reusable colored gradient + phone mockup
// ===========================================================
const FEATURE_ACCENTS = {
  blue:   { from: "#a7c1ff", mid: "#7da4ff", to: "#5a8dff", chip: "rgba(255,255,255,.92)", chipText: "var(--zonda-blue-dark)" },
  green:  { from: "#b6f0d0", mid: "#7bd9b3", to: "#a3d8e8", chip: "rgba(255,255,255,.92)", chipText: "#0a5c45" },
  purple: { from: "#d8b8ff", mid: "#bf95ff", to: "#9b7cff", chip: "rgba(255,255,255,.92)", chipText: "#5b2ea3" }
};

function ProFeature({ accent, eyebrow, title, copy, bullets, cta, phone, flip }) {
  const c = FEATURE_ACCENTS[accent] || FEATURE_ACCENTS.blue;
  return (
    <section style={{ paddingBlock: 40 }}>
      <div className="shell">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 0,
          alignItems: "stretch",
          borderRadius: 20,
          overflow: "hidden",
          background: "#fff",
          border: "1px solid rgba(21,27,43,.06)"
        }}>
          {/* Text side */}
          <div style={{
            order: flip ? 2 : 1,
            padding: "56px 56px 56px 48px",
            display: "flex", flexDirection: "column", justifyContent: "center", gap: 20
          }}>
            <p className="eyebrow" style={{ color: c.to }}>{eyebrow}</p>
            <h2 className="h-1 text-balance" style={{ fontSize: 40, lineHeight: 1.05 }}>{title}</h2>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--fg-2)", maxWidth: 480 }}>{copy}</p>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {bullets.map(b => (
                <li key={b} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 15, color: "var(--zonda-ink)", fontWeight: 500 }}>
                  <span style={{ width: 18, height: 18, borderRadius: 999, background: `linear-gradient(135deg, ${c.mid}, ${c.to})`, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2.5 6.3L5 8.8L9.5 3.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 8 }}>
              <a href="#" className="btn-link" style={{ color: c.to, fontSize: 14 }}>{cta} →</a>
            </div>
          </div>
          {/* Phone side */}
          <div style={{
            order: flip ? 1 : 2,
            position: "relative", overflow: "hidden",
            background: `radial-gradient(ellipse 80% 70% at 30% 20%, ${c.from}, transparent 60%), radial-gradient(ellipse 80% 70% at 80% 80%, ${c.to}, transparent 60%), linear-gradient(135deg, ${c.from}, ${c.mid})`,
            minHeight: 540,
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 40
          }}>
            {phone}
          </div>
        </div>
      </div>
    </section>
  );
}

// ===========================================================
// PHONE MOCKUP — base + 3 content variants
// ===========================================================
function PhoneFrame({ children, time = "10:54", style }) {
  return (
    <div style={{
      width: 280, height: 580,
      borderRadius: 44,
      background: "#0d0d0d",
      padding: 10,
      boxShadow: "0 30px 60px -20px rgba(7,17,48,.5), 0 0 0 1px rgba(0,0,0,.6) inset",
      position: "relative",
      ...style
    }}>
      <div style={{ width: "100%", height: "100%", borderRadius: 36, background: "#fcfcff", overflow: "hidden", position: "relative", display: "flex", flexDirection: "column" }}>
        {/* Status bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 22px 4px", fontSize: 12, fontWeight: 700, color: "var(--zonda-ink)" }}>
          <span>{time}</span>
          <div style={{ position: "absolute", left: "50%", top: 8, transform: "translateX(-50%)", width: 80, height: 22, background: "#0d0d0d", borderRadius: 999 }} />
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <SvgSignal /><SvgWifi /><SvgBattery />
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

function SvgSignal()  { return <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><rect x="0" y="6" width="2" height="4" rx="0.5" fill="currentColor"/><rect x="4" y="4" width="2" height="6" rx="0.5" fill="currentColor"/><rect x="8" y="2" width="2" height="8" rx="0.5" fill="currentColor"/><rect x="12" y="0" width="2" height="10" rx="0.5" fill="currentColor"/></svg>; }
function SvgWifi()    { return <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M7 9.5L8.5 8L7 6.5L5.5 8L7 9.5Z" fill="currentColor"/><path d="M2 4.5C3.5 3 5.2 2.2 7 2.2C8.8 2.2 10.5 3 12 4.5" stroke="currentColor" strokeWidth="1.2" fill="none"/><path d="M3.8 6.2C4.7 5.3 5.8 4.8 7 4.8C8.2 4.8 9.3 5.3 10.2 6.2" stroke="currentColor" strokeWidth="1.2" fill="none"/></svg>; }
function SvgBattery() { return <svg width="22" height="10" viewBox="0 0 22 10" fill="none"><rect x="0.5" y="0.5" width="18" height="9" rx="2" stroke="currentColor" fill="none"/><rect x="2" y="2" width="14" height="6" rx="1" fill="currentColor"/><rect x="19.5" y="3.5" width="1.5" height="3" rx="0.5" fill="currentColor"/></svg>; }

// Phone 1 — Agenda (calendar week + appointment cards)
function PhoneAgenda() {
  const days = [
    { d: "Lu", n: "22" },
    { d: "Ma", n: "23" },
    { d: "Mi", n: "24" },
    { d: "Ju", n: "25", active: true },
    { d: "Vi", n: "26" },
    { d: "Sá", n: "27" },
    { d: "Do", n: "28" }
  ];
  const appts = [
    { time: "09:00", name: "María Etería", tag: "Pre-consulta", color: "#226ffd" },
    { time: "10:30", name: "Juan Martín", tag: "Control", color: "#0dc958" },
    { time: "12:00", name: "Sofía Lugones", tag: "Primera vez", color: "#eaea00" }
  ];
  return (
    <PhoneFrame>
      <div style={{ padding: "8px 16px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 18, fontWeight: 700 }}>Abril 2026</span>
        <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(34,111,253,.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: "var(--zonda-blue)", fontWeight: 700 }}>+</div>
      </div>
      <div style={{ padding: "12px 16px 0", display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4 }}>
        {days.map((d) => (
          <div key={d.n} style={{
            display: "flex", flexDirection: "column", alignItems: "center", padding: "8px 0",
            background: d.active ? "var(--zonda-blue)" : "transparent",
            color: d.active ? "#fff" : "var(--zonda-ink)",
            borderRadius: 10
          }}>
            <span style={{ fontSize: 10, opacity: .7, fontWeight: 600 }}>{d.d}</span>
            <span style={{ fontSize: 15, fontWeight: 700, marginTop: 2 }}>{d.n}</span>
          </div>
        ))}
      </div>
      <div style={{ padding: "16px 16px 0" }}>
        <p style={{ margin: 0, fontSize: 11, fontWeight: 700, color: "var(--fg-3)", textTransform: "uppercase", letterSpacing: ".08em" }}>Jueves · 3 turnos</p>
      </div>
      <div style={{ padding: "8px 16px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
        {appts.map((a) => (
          <div key={a.time} style={{ background: "#f4f6fd", borderRadius: 12, padding: "12px 14px", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 4, height: 36, background: a.color, borderRadius: 2 }} />
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span style={{ fontSize: 13, fontWeight: 700 }}>{a.name}</span>
                <span className="mono" style={{ fontSize: 11, color: "var(--fg-2)" }}>{a.time}</span>
              </div>
              <span style={{ fontSize: 11, color: "var(--fg-2)" }}>{a.tag}</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{ borderTop: "1px solid rgba(21,27,43,.06)", padding: "10px 24px", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
        {["agenda", "pacientes", "evol", "perfil"].map((l, i) => (
          <div key={l} style={{ width: 28, height: 28, borderRadius: 8, background: i === 0 ? "var(--zonda-blue)" : "rgba(21,27,43,.06)" }} />
        ))}
      </div>
    </PhoneFrame>
  );
}

// Phone 2 — Conectar con PAMI (login screen — matches user's screenshot)
function PhoneOrganizaciones() {
  return (
    <PhoneFrame time="14:02">
      <div style={{ padding: "16px 20px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ width: 24, height: 24, borderRadius: 6, background: "rgba(21,27,43,.06)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--zonda-ink)", fontSize: 14 }}>‹</div>
      </div>
      <div style={{ padding: "24px 22px 0" }}>
        <p style={{ margin: 0, fontSize: 11, fontWeight: 700, color: "var(--fg-2)", textTransform: "uppercase", letterSpacing: ".08em" }}>Conectar organización</p>
        <h3 style={{ margin: "12px 0 0", fontSize: 22, fontWeight: 700, lineHeight: 1.15 }}>Conectar con PAMI</h3>
        <p style={{ margin: "12px 0 0", fontSize: 12, lineHeight: 1.5, color: "var(--fg-2)" }}>
          Ingresá tu usuario y contraseña de PAMI. Solo se usarán para autenticarte contra PAMI durante los flujos de atención, nunca se mostrarán en pantalla ni se compartirán con terceros.
        </p>
      </div>
      <div style={{ padding: "24px 22px 0", display: "flex", flexDirection: "column", gap: 12 }}>
        <FormField label="Usuario de PAMI" value="usuario.pami@email.com" />
        <FormField label="Contraseña" value="••••••••" />
      </div>
      <div style={{ padding: "20px 22px", marginTop: "auto" }}>
        <div style={{ background: "var(--zonda-blue)", color: "#fff", height: 44, borderRadius: 999, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 600 }}>
          Conectar con PAMI
        </div>
      </div>
    </PhoneFrame>
  );
}

function FormField({ label, value }) {
  return (
    <div>
      <p style={{ margin: 0, fontSize: 10, fontWeight: 600, color: "var(--fg-2)" }}>{label}</p>
      <div style={{ marginTop: 6, height: 38, borderRadius: 8, border: "1px solid rgba(21,27,43,.12)", padding: "0 12px", display: "flex", alignItems: "center", fontSize: 12, color: "var(--zonda-ink)", background: "#fcfcff" }}>
        {value}
      </div>
    </div>
  );
}

// Phone 3 — Registros clínicos (dictation → IA structured note)
function PhoneRegistros() {
  return (
    <PhoneFrame time="16:38">
      <div style={{ padding: "16px 20px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: 999, background: "linear-gradient(135deg,#9b7cff,#bf95ff)" }} />
          <div>
            <p style={{ margin: 0, fontSize: 12, fontWeight: 700 }}>M. Etería</p>
            <p style={{ margin: 0, fontSize: 10, color: "var(--fg-3)" }}>Evolución · hoy</p>
          </div>
        </div>
        <div style={{ width: 24, height: 24, borderRadius: 6, background: "rgba(21,27,43,.06)" }} />
      </div>
      <div style={{ padding: "16px 18px 0" }}>
        <p style={{ margin: 0, fontSize: 10, fontWeight: 700, color: "#7a3eff", textTransform: "uppercase", letterSpacing: ".08em", display: "flex", alignItems: "center", gap: 6 }}>
          <SparkleIcon /> Estructurado por IA
        </p>
      </div>
      <div style={{ padding: "8px 18px 0", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
        <SoapBlock label="Subjetivo" text="Paciente refiere dolor lumbar de 3 días tras esfuerzo. Sin irradiación." />
        <SoapBlock label="Objetivo" text="TA 130/85 · FC 78 · Maniobra Lasègue negativa bilateral." />
        <SoapBlock label="Plan" text="Ibuprofeno 400mg c/8h × 5 días. Control en 7 días." dim />
      </div>
      {/* Voice waveform recording indicator */}
      <div style={{ padding: "12px 18px", borderTop: "1px solid rgba(21,27,43,.06)", display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 36, height: 36, borderRadius: 999, background: "#7a3eff", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="14" height="16" viewBox="0 0 14 16" fill="none"><rect x="4" y="2" width="6" height="9" rx="3" fill="#fff"/><path d="M2 8.5C2 11.3 4.2 13.5 7 13.5C9.8 13.5 12 11.3 12 8.5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round"/><line x1="7" y1="13.5" x2="7" y2="15.5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round"/></svg>
        </div>
        <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 2, height: 20 }}>
          {[8, 14, 10, 18, 6, 12, 16, 9, 14, 11, 7, 13, 17, 10, 6, 12].map((h, i) => (
            <div key={i} style={{ width: 3, height: h, background: "#7a3eff", borderRadius: 2, opacity: .4 + (i % 4) * 0.15 }} />
          ))}
        </div>
        <span className="mono" style={{ fontSize: 11, color: "var(--fg-2)" }}>0:34</span>
      </div>
    </PhoneFrame>
  );
}

function SparkleIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
      <path d="M6 0L7 5L12 6L7 7L6 12L5 7L0 6L5 5L6 0Z" fill="#7a3eff" />
    </svg>
  );
}

function SoapBlock({ label, text, dim }) {
  return (
    <div style={{ background: dim ? "rgba(122,62,255,.04)" : "rgba(122,62,255,.06)", border: "1px solid rgba(122,62,255,.10)", borderRadius: 8, padding: "10px 12px" }}>
      <p style={{ margin: 0, fontSize: 9, fontWeight: 700, color: "#7a3eff", textTransform: "uppercase", letterSpacing: ".08em" }}>{label}</p>
      <p style={{ margin: "4px 0 0", fontSize: 11.5, lineHeight: 1.4, color: "var(--zonda-ink)" }}>{text}</p>
    </div>
  );
}

// ===========================================================
// FEATURE GRID — "todo lo demás que viene incluido"
// ===========================================================
const FEATURES = [
  { ic: "📋", t: "Receta electrónica", d: "Firma digital y trazabilidad. Compatible con farmacias y obras sociales." },
  { ic: "🧪", t: "Pedidos de estudios", d: "Imágenes, laboratorios, derivaciones. Enviado al paciente por WhatsApp." },
  { ic: "💬", t: "WhatsApp integrado", d: "Recordatorios, encuestas y respuestas automáticas — sin salir de Zonda." },
  { ic: "📊", t: "Reportes financieros", d: "Facturación por obra social, conciliación y proyecciones por mes." },
  { ic: "🔒", t: "Datos cifrados", d: "Cifrado end-to-end, Ley 26.529. Tu paciente, tu data, tu control." },
  { ic: "🗓", t: "Multi-consultorio", d: "Manejá varios consultorios y horarios sin duplicar carga." },
  { ic: "👥", t: "Equipo y secretaría", d: "Roles, permisos y agenda compartida con tu equipo de apoyo." },
  { ic: "📱", t: "App nativa", d: "iOS y Android. Misma data, sin retraso, también offline." },
  { ic: "🔌", t: "API + Webhooks", d: "Conectá tu propio stack — desde el sitio hasta la facturación." }
];

function ProFeatureGrid() {
  return (
    <section style={{ paddingBlock: 96, background: "#fcfcff" }}>
      <div className="shell">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 48 }}>
          <div>
            <p className="eyebrow">Plataforma completa</p>
            <h2 className="h-1" style={{ marginTop: 12, fontSize: 44, maxWidth: 720 }}>
              Todo lo demás que viene incluido.
            </h2>
          </div>
          <a href="#" className="btn-link" style={{ color: "var(--zonda-blue)", fontSize: 14 }}>Ver lista completa →</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "rgba(21,27,43,.08)", border: "1px solid rgba(21,27,43,.08)", borderRadius: 12, overflow: "hidden" }}>
          {FEATURES.map(f => (
            <div key={f.t} style={{ background: "#fcfcff", padding: "32px 28px", display: "flex", flexDirection: "column", gap: 10, minHeight: 200 }}>
              <span style={{ fontSize: 22, lineHeight: 1, marginBottom: 4 }}>{f.ic}</span>
              <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700, color: "var(--zonda-ink)" }}>{f.t}</h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: "var(--fg-2)" }}>{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===========================================================
// TESTIMONIAL — doctor quote on yellow watercolor (echoes hero)
// ===========================================================
function ProTestimonial() {
  return (
    <section style={{ paddingBlock: 40 }}>
      <div className="shell">
        <div style={{
          position: "relative", overflow: "hidden", borderRadius: 20,
          padding: "80px 80px",
          background: "url('assets/movement-yellow.png') center/cover"
        }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 80% 20%, rgba(255,255,200,0.5), transparent 60%)" }} />
          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "center" }}>
            <div>
              <p className="eyebrow" style={{ color: "rgba(14,60,117,.7)" }}>Historia</p>
              <p style={{ marginTop: 12, fontSize: 14, fontWeight: 700, color: "var(--zonda-blue-dark)" }}>Dra. Lucía Méndez</p>
              <p style={{ margin: "2px 0 0", fontSize: 13, color: "rgba(14,60,117,.7)" }}>Cardióloga · Mendoza, AR</p>
              <p className="mono" style={{ margin: "24px 0 0", fontSize: 12, color: "rgba(14,60,117,.7)" }}>USANDO ZONDA DESDE</p>
              <p className="h-display" style={{ margin: "2px 0 0", fontSize: 28, color: "var(--zonda-blue-dark)" }}>Marzo 2025</p>
            </div>
            <div>
              <svg width="42" height="32" viewBox="0 0 42 32" fill="none" style={{ marginBottom: 24, opacity: .35 }}>
                <path d="M18 0H6C2.7 0 0 2.7 0 6v12c0 3.3 2.7 6 6 6h6c-1 4-4 6-6 8h4c8-2 12-7 12-14V0zM42 0H30c-3.3 0-6 2.7-6 6v12c0 3.3 2.7 6 6 6h6c-1 4-4 6-6 8h4c8-2 12-7 12-14V0z" fill="var(--zonda-blue-dark)" />
              </svg>
              <p className="text-balance" style={{ margin: 0, fontSize: 32, lineHeight: 1.2, fontWeight: 500, color: "var(--zonda-blue-dark)", letterSpacing: "-0.01em" }}>
                Pasé de hacer mis evoluciones a las 11 de la noche a tenerlas listas antes de que el paciente salga del consultorio. Es la diferencia entre cerrar la jornada y llevarme el trabajo a casa.
              </p>
              <div style={{ marginTop: 32, display: "flex", gap: 48 }}>
                <div>
                  <p className="h-display" style={{ margin: 0, fontSize: 40, color: "var(--zonda-blue-dark)" }}>−2:30 hs</p>
                  <p style={{ margin: "4px 0 0", fontSize: 13, color: "rgba(14,60,117,.7)" }}>de trabajo administrativo por día</p>
                </div>
                <div>
                  <p className="h-display" style={{ margin: 0, fontSize: 40, color: "var(--zonda-blue-dark)" }}>+38%</p>
                  <p style={{ margin: "4px 0 0", fontSize: 13, color: "rgba(14,60,117,.7)" }}>pacientes atendidos por semana</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===========================================================
// PRICING TEASER
// ===========================================================
function ProPricing() {
  return (
    <section style={{ paddingBlock: 96, background: "#fcfcff" }}>
      <div className="shell">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p className="eyebrow">Precios</p>
          <h2 className="h-1" style={{ marginTop: 12, fontSize: 48, lineHeight: 1.05 }}>
            Empezá gratis. Pagás cuando crece.
          </h2>
          <p style={{ margin: "16px auto 0", fontSize: 17, color: "var(--fg-2)", maxWidth: 520 }}>
            Sin compromiso, sin instalación. Lo único que necesitás es tu matrícula y un café.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, maxWidth: 920, marginInline: "auto" }}>
          <PricingCard
            plan="Solo"
            priceLabel="Gratis"
            sub="Para empezar"
            feats={["Hasta 50 pacientes activos", "1 organización conectada", "Agenda + evoluciones IA", "Soporte por mail"]}
            cta="Empezar gratis"
            primary={false}
          />
          <PricingCard
            plan="Práctica"
            priceLabel="USD 24"
            sub="por mes"
            feats={["Pacientes ilimitados", "Todas las obras sociales", "Reportes financieros", "Soporte prioritario en WhatsApp", "Receta electrónica"]}
            cta="Empezar 14 días gratis"
            primary={true}
          />
        </div>
        <p style={{ margin: "32px auto 0", fontSize: 13, color: "var(--fg-3)", textAlign: "center", maxWidth: 480 }}>
          ¿Sos parte de una organización? <a href="#" style={{ color: "var(--zonda-blue)", fontWeight: 600 }}>Ver plan Equipo →</a>
        </p>
      </div>
    </section>
  );
}

function PricingCard({ plan, priceLabel, sub, feats, cta, primary }) {
  return (
    <div style={{
      borderRadius: 16,
      padding: 36,
      background: primary ? "var(--zonda-blue-dark)" : "#fff",
      color: primary ? "#fff" : "var(--zonda-ink)",
      border: primary ? "1px solid var(--zonda-blue-dark)" : "1px solid rgba(21,27,43,.10)",
      position: "relative",
      overflow: "hidden"
    }}>
      {primary && (
        <div style={{ position: "absolute", top: 0, right: 0, background: "var(--zonda-yellow)", color: "#1d1d00", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderBottomLeftRadius: 8, letterSpacing: ".08em" }}>
          MÁS ELEGIDO
        </div>
      )}
      {primary && (
        <div style={{ position: "absolute", inset: 0, background: "url('assets/dark-blue-lines.png') center/cover", opacity: .4, pointerEvents: "none" }} />
      )}
      <div style={{ position: "relative" }}>
        <p style={{ margin: 0, fontSize: 14, fontWeight: 700, color: primary ? "var(--zonda-yellow)" : "var(--zonda-blue)" }}>{plan}</p>
        <div style={{ marginTop: 12, display: "flex", alignItems: "baseline", gap: 8 }}>
          <p className="h-display" style={{ margin: 0, fontSize: 56, color: primary ? "#fff" : "var(--zonda-ink)" }}>{priceLabel}</p>
          <span style={{ fontSize: 14, color: primary ? "rgba(248,250,255,.7)" : "var(--fg-2)" }}>{sub}</span>
        </div>
        <ul style={{ margin: "28px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
          {feats.map(f => (
            <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, fontWeight: 500 }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7.2L6 10L11 4" stroke={primary ? "var(--zonda-yellow)" : "var(--zonda-blue)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {f}
            </li>
          ))}
        </ul>
        <button className="btn btn-lg" style={{
          marginTop: 32, width: "100%",
          background: primary ? "var(--zonda-yellow)" : "var(--zonda-blue-dark)",
          color: primary ? "#1d1d00" : "#fff"
        }}>
          {cta}
        </button>
      </div>
    </div>
  );
}

// ===========================================================
// DOWNLOAD — "Tu consultorio en el bolsillo" rebuilt
// ===========================================================
function ProDownload() {
  return (
    <section style={{ paddingBlock: 40 }}>
      <div className="shell">
        <div style={{
          position: "relative", overflow: "hidden", borderRadius: 20,
          background: "var(--zonda-blue-dark)",
          color: "#fff",
          padding: "0",
          minHeight: 520,
          display: "grid", gridTemplateColumns: "1.2fr 1fr",
          alignItems: "stretch"
        }}>
          <div style={{ position: "absolute", inset: 0, background: "url('assets/dark-blue-lines.png') center/cover", opacity: .85 }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 60% at 80% 50%, rgba(234,234,0,.10), transparent 60%)" }} />

          <div style={{ position: "relative", padding: "80px 64px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p className="eyebrow-on-dark" style={{ color: "var(--zonda-yellow)" }}>App móvil</p>
            <h2 className="h-display text-balance" style={{ marginTop: 16, fontSize: 64, lineHeight: .98, color: "#fff" }}>
              Tu consultorio<br />en el bolsillo.
            </h2>
            <p style={{ marginTop: 20, fontSize: 17, lineHeight: 1.6, color: "rgba(248,250,255,.82)", maxWidth: 460 }}>
              Descargá Zonda y llevá tu agenda, tus pacientes y tus registros clínicos a donde vayas. Disponible para iOS y Android.
            </p>
            <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <StoreButton store="ios" />
              <StoreButton store="android" />
            </div>
            <div style={{ marginTop: 40, display: "flex", alignItems: "center", gap: 24 }}>
              <div>
                <p className="h-display" style={{ margin: 0, fontSize: 32, color: "var(--zonda-yellow)" }}>4.8</p>
                <div style={{ display: "flex", gap: 2, marginTop: 4 }}>
                  {[0,1,2,3,4].map(i => (
                    <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 0L7.5 4L12 4.5L8.5 7L9.5 11.5L6 9L2.5 11.5L3.5 7L0 4.5L4.5 4L6 0Z" fill="var(--zonda-yellow)"/></svg>
                  ))}
                </div>
              </div>
              <div style={{ width: 1, height: 36, background: "rgba(255,255,255,.18)" }} />
              <div>
                <p className="h-display" style={{ margin: 0, fontSize: 32, color: "var(--zonda-yellow)" }}>800+</p>
                <p style={{ margin: "4px 0 0", fontSize: 12, color: "rgba(248,250,255,.7)" }}>profesionales activos</p>
              </div>
              <div style={{ width: 1, height: 36, background: "rgba(255,255,255,.18)" }} />
              <div>
                <p className="h-display" style={{ margin: 0, fontSize: 32, color: "var(--zonda-yellow)" }}>0$</p>
                <p style={{ margin: "4px 0 0", fontSize: 12, color: "rgba(248,250,255,.7)" }}>para empezar</p>
              </div>
            </div>
          </div>

          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 40px" }}>
            <div style={{ position: "absolute", width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(234,234,0,.12), transparent 70%)" }} />
            <div style={{ position: "relative", transform: "rotate(-4deg)" }}>
              <PhoneAgenda />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StoreButton({ store }) {
  if (store === "ios") {
    return (
      <a href="#" style={{
        display: "inline-flex", alignItems: "center", gap: 12,
        height: 56, padding: "0 22px", borderRadius: 12,
        background: "#fcfcff", color: "#0d0d0d",
        textDecoration: "none"
      }}>
        <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
          <path d="M15.4 13.6c0-3.6 3-5.3 3.1-5.4-1.7-2.5-4.3-2.8-5.2-2.9-2.2-.2-4.4 1.3-5.5 1.3-1.2 0-2.9-1.3-4.8-1.2-2.4.04-4.7 1.4-6 3.6-2.6 4.5-.7 11.1 1.8 14.8 1.2 1.8 2.7 3.8 4.6 3.7 1.9-.08 2.6-1.2 4.8-1.2 2.2 0 2.9 1.2 4.8 1.2 2 0 3.3-1.8 4.5-3.6 1.4-2.1 2-4.1 2-4.2-.04-.02-3.9-1.5-3.9-6m-3.5-11c1-1.2 1.7-3 1.5-4.8-1.5.06-3.3 1-4.4 2.3-1 1.1-1.8 2.9-1.6 4.6 1.6.1 3.3-.9 4.4-2.2" fill="#0d0d0d"/>
        </svg>
        <div>
          <p style={{ margin: 0, fontSize: 10, opacity: .7, lineHeight: 1 }}>Descargar en</p>
          <p style={{ margin: "3px 0 0", fontSize: 17, fontWeight: 700, lineHeight: 1 }}>App Store</p>
        </div>
      </a>
    );
  }
  return (
    <a href="#" style={{
      display: "inline-flex", alignItems: "center", gap: 12,
      height: 56, padding: "0 22px", borderRadius: 12,
      background: "#fcfcff", color: "#0d0d0d",
      textDecoration: "none"
    }}>
      <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
        <path d="M.6.6C.2 1 0 1.6 0 2.4v21.2c0 .8.2 1.4.6 1.8L12.4 13.6.6.6zm14 14.4L2.4 25.8c.4.1.8.2 1.2.2.6 0 1.2-.2 1.7-.5l15.8-9-6.5-6.5zM21.2 12L17 9.6 10.4 16l4.2 4.2 6.6-3.8c.8-.5 1.2-1.4 1.2-2.4 0-.9-.4-1.7-1.2-2zM3.6 0c-.4 0-.8.1-1.2.2L12.4 10.2 19 3.8 5.3.5C4.7.2 4.2 0 3.6 0z" fill="#0d0d0d"/>
      </svg>
      <div>
        <p style={{ margin: 0, fontSize: 10, opacity: .7, lineHeight: 1 }}>Descargar en</p>
        <p style={{ margin: "3px 0 0", fontSize: 17, fontWeight: 700, lineHeight: 1 }}>Google Play</p>
      </div>
    </a>
  );
}

// ===========================================================
// FAQ
// ===========================================================
const FAQ = [
  ["¿Necesito instalar algo en mi consultorio?", "No. Zonda funciona en el navegador y en la app móvil. Lo único que necesitás es internet — incluso desde el celular."],
  ["¿Mis datos están seguros?", "Sí. Cifrado end-to-end, almacenamiento en Argentina y cumplimiento con la Ley 26.529 de Derechos del Paciente. Tu data es tuya."],
  ["¿Cuánto tarda en estar operativo?", "5 minutos. Te registrás, conectás tus organizaciones (OSDE, Swiss Medical, PAMI, etc.) y empezás a cargar pacientes."],
  ["¿Puedo migrar mis pacientes desde otro sistema?", "Sí. Importamos desde Excel, CSV o vía API desde la mayoría de los sistemas populares en Argentina. Te asistimos en la migración sin costo."],
  ["¿Qué pasa si me quiero ir?", "Te exportás toda tu información en formato estándar (FHIR, CSV). Sin candados, sin letra chica."]
];

function ProFAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section style={{ paddingBlock: 96 }}>
      <div className="shell" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80 }}>
        <div>
          <p className="eyebrow">Dudas frecuentes</p>
          <h2 className="h-1" style={{ marginTop: 12, fontSize: 44, lineHeight: 1.05, maxWidth: 360 }}>
            ¿Algo que te frena?
          </h2>
          <p style={{ marginTop: 16, fontSize: 16, color: "var(--fg-2)", maxWidth: 360 }}>
            Si no encontrás lo que buscás, escribinos a <a href="#" style={{ color: "var(--zonda-blue)", fontWeight: 600 }}>hola@zonda.health</a>. Te respondemos en menos de un día hábil.
          </p>
        </div>
        <div>
          {FAQ.map(([q, a], i) => (
            <div key={q} style={{ borderTop: "1px solid rgba(21,27,43,.10)", borderBottom: i === FAQ.length - 1 ? "1px solid rgba(21,27,43,.10)" : "0" }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                width: "100%", textAlign: "left", padding: "20px 0",
                display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24
              }}>
                <span style={{ fontSize: 18, fontWeight: 600, color: "var(--zonda-ink)" }}>{q}</span>
                <span style={{
                  width: 28, height: 28, borderRadius: 999,
                  background: open === i ? "var(--zonda-blue)" : "rgba(21,27,43,.06)",
                  color: open === i ? "#fff" : "var(--zonda-ink)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  fontSize: 16, fontWeight: 600, flexShrink: 0,
                  transition: "all .2s"
                }}>
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <p style={{ margin: 0, padding: "0 0 20px", fontSize: 15, lineHeight: 1.6, color: "var(--fg-2)", maxWidth: 560 }}>{a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.ProfessionalsPage = ProfessionalsPage;
