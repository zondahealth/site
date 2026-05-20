export function IntHeader() {
  return (
    <header style={{ position: 'absolute', inset: '0 0 auto 0', zIndex: 50, padding: '14px 0' }}>
      <div className="layout-shell" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="assets/blue-logo.png" alt="Zonda" style={{ height: 32, width: 32, borderRadius: 8 }} />
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {['Productos', 'Casos de uso', 'Desarrolladores', 'Empresa'].map((l) => (
            <a key={l} href="#" style={{ fontSize: 14, fontWeight: 700, color: 'var(--zonda-blue-dark)' }}>
              {l}
            </a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button className="btn btn-ghost btn-sm" style={{ color: 'var(--zonda-blue-dark)' }}>
            Iniciar sesión
          </button>
          <button className="btn btn-primary btn-sm">Agendar demo</button>
        </div>
      </div>
    </header>
  );
}
