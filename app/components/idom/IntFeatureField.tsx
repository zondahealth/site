import { IntFeatureShell } from './IntFeatureShell';

function PhoneVisitContent() {
  return (
    <div style={{ padding: '12px 12px 0', flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <p className="font-mono" style={{ margin: 0, fontSize: 9, color: 'var(--fg-3)', letterSpacing: '.06em' }}>
        VISITA EN CURSO
      </p>
      <div>
        <p style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>María Etería</p>
        <p className="font-mono" style={{ margin: '2px 0 0', fontSize: 9, color: 'var(--fg-2)' }}>
          LOE #2841 · 13:42
        </p>
      </div>
      <div
        style={{
          background: 'rgba(13,201,88,.10)',
          border: '1px solid rgba(13,201,88,.3)',
          borderRadius: 8,
          padding: '8px 10px',
        }}
      >
        <p style={{ margin: 0, fontSize: 9, fontWeight: 700, color: '#0a7a4a' }}>✓ EN UBICACIÓN</p>
        <p style={{ margin: '2px 0 0', fontSize: 10, color: 'var(--zonda-ink)' }}>Av. Cabildo 3214 · 5°B</p>
      </div>
      <div style={{ marginTop: 6, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <p style={{ margin: 0, fontSize: 10, fontWeight: 700, color: 'var(--fg-2)' }}>PRESTACIONES</p>
        {(
          [
            ['Toma de signos', true],
            ['Curación de úlcera', true],
            ['Insulina basal', false],
            ['Aspiración', false],
          ] as const
        ).map(([l, done]) => (
          <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11 }}>
            <span
              style={{
                width: 14,
                height: 14,
                borderRadius: 4,
                border: '1.5px solid ' + (done ? '#0dc958' : 'rgba(21,27,43,.2)'),
                background: done ? '#0dc958' : 'transparent',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {done && <span style={{ fontSize: 9, color: '#fff' }}>✓</span>}
            </span>
            <span
              style={{
                color: done ? 'var(--fg-3)' : 'var(--zonda-ink)',
                textDecoration: done ? 'line-through' : 'none',
              }}
            >
              {l}
            </span>
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: 'auto',
          background: 'var(--zonda-blue)',
          color: '#fff',
          padding: '10px 0',
          borderRadius: 999,
          textAlign: 'center',
          fontSize: 11,
          fontWeight: 700,
          marginBottom: 12,
        }}
      >
        Confirmar visita
      </div>
    </div>
  );
}

function PhoneRecordContent() {
  return (
    <div style={{ padding: '12px 12px 0', flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <p className="font-mono" style={{ margin: 0, fontSize: 9, color: '#0a7a4a', letterSpacing: '.06em' }}>
        ● GRABANDO EVOLUCIÓN
      </p>
      <p style={{ margin: 0, fontSize: 14, fontWeight: 700, lineHeight: 1.3 }}>
        &quot;Paciente con buena tolerancia a la dieta. Saturación 96. Sin dolor reportado...&quot;
      </p>
      <div
        style={{
          marginTop: 8,
          padding: 10,
          background: 'rgba(122,62,255,.06)',
          border: '1px solid rgba(122,62,255,.15)',
          borderRadius: 8,
        }}
      >
        <p style={{ margin: 0, fontSize: 9, fontWeight: 700, color: '#7a3eff', letterSpacing: '.06em' }}>
          ✦ IA ESTRUCTURÓ
        </p>
        <div style={{ marginTop: 6, display: 'flex', flexDirection: 'column', gap: 4 }}>
          <p style={{ margin: 0, fontSize: 10, color: 'var(--zonda-ink)' }}>
            <strong>Sat:</strong> 96%
          </p>
          <p style={{ margin: 0, fontSize: 10, color: 'var(--zonda-ink)' }}>
            <strong>Tolerancia:</strong> Buena
          </p>
          <p style={{ margin: 0, fontSize: 10, color: 'var(--zonda-ink)' }}>
            <strong>Dolor:</strong> No
          </p>
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3 }}>
        {[12, 20, 14, 26, 8, 18, 22, 14, 20, 10, 16, 24, 12, 18].map((h, i) => (
          <div
            key={i}
            style={{
              width: 3,
              height: h,
              background: '#0dc958',
              borderRadius: 2,
              opacity: 0.35 + (i % 5) * 0.15,
            }}
          />
        ))}
      </div>
      <div style={{ marginBottom: 12, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16 }}>
        <span style={{ width: 36, height: 36, borderRadius: 999, background: 'rgba(21,27,43,.06)' }} />
        <span
          style={{
            width: 48,
            height: 48,
            borderRadius: 999,
            background: '#0dc958',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: 16,
          }}
        >
          ■
        </span>
        <span style={{ width: 36, height: 36, borderRadius: 999, background: 'rgba(21,27,43,.06)' }} />
      </div>
    </div>
  );
}

function FieldPhone({ variant }: { variant: 'visit' | 'record' }) {
  return (
    <div
      style={{
        width: 180,
        height: 380,
        borderRadius: 30,
        background: '#0d0d0d',
        padding: 6,
        boxShadow: '0 25px 50px -15px rgba(7,17,48,.5)',
        position: 'relative',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 24,
          background: '#fcfcff',
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: 6,
            transform: 'translateX(-50%)',
            width: 50,
            height: 14,
            background: '#0d0d0d',
            borderRadius: 999,
          }}
        />
        <div style={{ padding: '30px 14px 0', display: 'flex', justifyContent: 'space-between', fontSize: 10, fontWeight: 700 }}>
          <span>10:54</span>
          <span>●●● ●●●●</span>
        </div>
        {variant === 'visit' ? <PhoneVisitContent /> : <PhoneRecordContent />}
      </div>
    </div>
  );
}

function FieldPhoneCluster() {
  return (
    <div
      style={{
        position: 'relative',
        aspectRatio: '4/3',
        maxHeight: 420,
        borderRadius: 16,
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #d4f0dd 0%, #93d7c0 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
      }}
    >
      <div
        style={{ position: 'absolute', inset: 0, background: "url('/bg/movement/map-green.png') center/cover", opacity: 0.15 }}
      />
      <div style={{ position: 'relative' }}>
        <FieldPhone variant="visit" />
      </div>
    </div>
  );
}

export function IntFeatureField() {
  return (
    <IntFeatureShell
      eyebrow="EN CAMPO · APP MÓVIL"
      title="El profesional tiene todo lo que necesita en su celular."
      copy="Recibe la visita asignada, sigue la mejor ruta, registra lo que hizo hablándole al teléfono y obtiene la firma del paciente. Todo desde la app, incluso sin internet."
      bullets={[
        'Funciona sin conexión y se sincroniza después',
        'Dicta la evolución por voz y la IA la organiza',
        'Confirma presencia automáticamente por ubicación',
      ]}
      visual={<FieldPhoneCluster />}
      flip={true}
    />
  );
}
