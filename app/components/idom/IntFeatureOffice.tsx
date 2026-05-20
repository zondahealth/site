'use client';

import { useLanguage } from '@/app/components/LanguageProvider';
import { IntFeatureShell } from './IntFeatureShell';
import { RoutePin } from './RoutePin';

function DispatchDashboard() {
  const { t } = useLanguage();

  return (
    <div
      style={{
        borderRadius: 12,
        overflow: 'hidden',
        border: '1px solid rgba(21,27,43,.08)',
        background: '#fcfcff',
        boxShadow: '0 30px 60px -30px rgba(7,17,48,.18)',
      }}
    >
      {/* Chrome */}
      <div
        style={{
          padding: '10px 14px',
          borderBottom: '1px solid rgba(21,27,43,.06)',
          background: '#f7f8fc',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <div style={{ display: 'flex', gap: 5 }}>
          <span style={{ width: 9, height: 9, borderRadius: 999, background: '#ff5f57' }} />
          <span style={{ width: 9, height: 9, borderRadius: 999, background: '#ffbd2e' }} />
          <span style={{ width: 9, height: 9, borderRadius: 999, background: '#28c941' }} />
        </div>
        <span className="font-mono" style={{ fontSize: 10, color: 'var(--fg-3)' }}>
          app.zonda.health/dispatch
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]" style={{ minHeight: 380 }}>
        {/* Map side */}
        <div style={{ position: 'relative', minHeight: 220, background: "url('/bg/movement/map-green.png') center/cover" }}>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg,rgba(13,46,55,.20),rgba(13,46,55,.45))',
            }}
          />
          <svg viewBox="0 0 400 380" width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
            <path
              d="M50 80 C 120 100, 160 160, 180 220 S 280 320, 350 280"
              stroke="#eaea00"
              strokeWidth="3"
              fill="none"
              strokeDasharray="8 5"
            />
            <RoutePin x={50} y={80} color="#eaea00" />
            <RoutePin x={180} y={220} color="#fcfcff" tone="dark" status="ok" />
            <RoutePin x={350} y={280} color="#0dc958" current />
          </svg>
          <div
            style={{
              position: 'absolute',
              left: 12,
              top: 12,
              background: 'rgba(13,46,55,.85)',
              color: '#fff',
              padding: '6px 10px',
              borderRadius: 6,
            }}
          >
            <p className="font-mono" style={{ margin: 0, fontSize: 10, color: 'var(--zonda-yellow)' }}>
              {t('site.products.idom.ui.route')}
            </p>
            <p style={{ margin: 0, fontSize: 11, fontWeight: 600 }}>
              {t('site.products.idom.ui.routeEta')}
            </p>
          </div>
        </div>
        {/* List side */}
        <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
            <p style={{ margin: 0, fontSize: 12, fontWeight: 700 }}>
              {t('site.products.idom.ui.visitListTitle')}
            </p>
            <p className="font-mono" style={{ margin: 0, fontSize: 10, color: 'var(--fg-3)' }}>
              {t('site.products.idom.ui.assigned')}
            </p>
          </div>
          {[
            { time: '10:00', name: 'M. Etería', area: 'Palermo', status: 'done' },
            { time: '11:30', name: 'R. Velazco', area: 'Belgrano', status: 'done' },
            { time: '13:00', name: 'P. Funes', area: 'Núñez', status: 'ongoing' },
            { time: '14:30', name: 'L. Quiroga', area: 'Belgrano', status: 'next' },
            { time: '16:00', name: 'S. Otero', area: 'Cabildo', status: 'scheduled' },
          ].map((v) => (
            <div
              key={v.name}
              style={{
                padding: '8px 10px',
                borderRadius: 6,
                background: v.status === 'ongoing' ? 'rgba(13,201,88,.12)' : 'rgba(21,27,43,.03)',
                border: v.status === 'ongoing' ? '1px solid rgba(13,201,88,.3)' : '1px solid transparent',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <span className="font-mono" style={{ fontSize: 10, color: 'var(--fg-2)', minWidth: 32 }}>
                {v.time}
              </span>
              <div style={{ flex: 1 }}>
                <p style={{ margin: 0, fontSize: 11, fontWeight: 600 }}>{v.name}</p>
                <p className="font-mono" style={{ margin: 0, fontSize: 9, color: 'var(--fg-3)' }}>
                  {v.area}
                </p>
              </div>
              <span
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  padding: '2px 6px',
                  borderRadius: 4,
                  background:
                    v.status === 'done'
                      ? 'rgba(13,201,88,.18)'
                      : v.status === 'ongoing'
                        ? '#0dc958'
                        : v.status === 'next'
                          ? 'rgba(234,234,0,.22)'
                          : 'rgba(21,27,43,.06)',
                  color:
                    v.status === 'done'
                      ? '#0a7a4a'
                      : v.status === 'ongoing'
                        ? '#fff'
                        : v.status === 'next'
                          ? '#7a7a00'
                          : 'var(--fg-2)',
                }}
              >
                {t(`site.products.idom.ui.${v.status}`)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function IntFeatureOffice() {
  const { raw, t } = useLanguage();

  return (
    <IntFeatureShell
      eyebrow={t('site.products.idom.office.eyebrow')}
      title={t('site.products.idom.office.title')}
      copy={t('site.products.idom.office.copy')}
      bullets={raw<string[]>('site.products.idom.office.bullets')}
      visual={<DispatchDashboard />}
      flip={false}
    />
  );
}
