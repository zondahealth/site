'use client';

import { useLanguage } from '@/app/components/LanguageProvider';
import { IntFeatureShell } from './IntFeatureShell';

function AuditTimeline() {
  const { raw, t } = useLanguage();
  const eventCopy = raw<{ l: string; mono: string }[]>(
    'site.products.idom.ui.auditEvents'
  );
  const events = [
    { t: '13:38' },
    { t: '13:42' },
    { t: '13:42 – 14:08' },
    { t: '14:05' },
    { t: '14:09' },
    { t: '14:12', flag: 'LOE' },
    { t: '14:15' },
  ] as const;

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
      <div
        style={{
          padding: '20px 24px',
          borderBottom: '1px solid rgba(21,27,43,.06)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          background: '#f7f8fc',
        }}
      >
        <div>
          <p style={{ margin: 0, fontSize: 14, fontWeight: 700 }}>
            {t('site.products.idom.ui.visitTitle')}
          </p>
          <p className="font-mono" style={{ margin: 0, fontSize: 11, color: 'var(--fg-3)' }}>
            {t('site.products.idom.ui.visitMeta')}
          </p>
        </div>
        <span
          style={{
            padding: '4px 10px',
            borderRadius: 999,
            background: 'rgba(13,201,88,.15)',
            color: '#0a7a4a',
            fontSize: 11,
            fontWeight: 700,
          }}
        >
          {t('site.products.idom.ui.audited')}
        </span>
      </div>
      <div style={{ padding: 24, display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            left: 88,
            top: 24,
            bottom: 24,
            width: 2,
            background: 'linear-gradient(180deg, #0dc958, rgba(13,201,88,.2))',
          }}
        />
        {events.map((e, i) => (
          <div
            key={i}
            style={{
              display: 'grid',
              gridTemplateColumns: '60px 28px 1fr',
              gap: 12,
              padding: '10px 0',
              alignItems: 'start',
            }}
          >
            <span className="font-mono" style={{ fontSize: 11, color: 'var(--fg-2)', paddingTop: 2 }}>
              {e.t}
            </span>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', paddingTop: 4 }}>
              <span
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 999,
                  background: '#0dc958',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: 9,
                  fontWeight: 700,
                  boxShadow: '0 0 0 4px #fcfcff, 0 0 0 5px rgba(13,201,88,.3)',
                }}
              >
                ✓
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
              <div>
                <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: 'var(--zonda-ink)' }}>
                  {eventCopy[i].l}
                </p>
                <p className="font-mono" style={{ margin: '2px 0 0', fontSize: 10, color: 'var(--fg-3)' }}>
                  {eventCopy[i].mono}
                </p>
              </div>
              {'flag' in e && e.flag && (
                <span
                  style={{
                    padding: '2px 8px',
                    borderRadius: 4,
                    background: 'var(--zonda-yellow)',
                    color: '#1d1d00',
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: '.06em',
                  }}
                >
                  {e.flag}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function IntFeatureAudit() {
  const { raw, t } = useLanguage();

  return (
    <IntFeatureShell
      eyebrow={t('site.products.idom.audit.eyebrow')}
      title={t('site.products.idom.audit.title')}
      copy={t('site.products.idom.audit.copy')}
      bullets={raw<string[]>('site.products.idom.audit.bullets')}
      visual={<AuditTimeline />}
      flip={false}
    />
  );
}
