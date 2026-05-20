'use client';

import { useLanguage } from '@/app/components/LanguageProvider';

function AreaChart() {
  return (
    <svg
      viewBox="0 0 480 140"
      width="100%"
      height="120"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="ac-blue" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#226ffd" stopOpacity=".35" />
          <stop offset="1" stopColor="#226ffd" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="ac-yel" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#eaea00" stopOpacity=".30" />
          <stop offset="1" stopColor="#eaea00" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0, 28, 56, 84, 112].map((y) => (
        <line
          key={y}
          x1="40"
          x2="480"
          y1={y + 8}
          y2={y + 8}
          stroke="rgba(21,27,43,.05)"
        />
      ))}
      {/* Expected band */}
      <path
        d="M40,60 C100,55 160,52 220,50 C280,48 340,52 400,55 C440,57 480,55 480,55 L480,90 C440,88 400,85 340,87 C280,89 220,92 160,90 C100,88 40,85 40,85 Z"
        fill="rgba(34,111,253,.10)"
        stroke="rgba(34,111,253,.25)"
        strokeDasharray="2 2"
      />
      {/* Actual line */}
      <path
        d="M40,70 L104,65 L168,72 L232,68 L296,118 L360,76 L424,72"
        stroke="#226ffd"
        strokeWidth="2"
        fill="none"
      />
      {/* Anomaly spike */}
      <circle
        cx="296"
        cy="118"
        r="6"
        fill="#eaea00"
        stroke="#7a7a00"
        strokeWidth="1.5"
      />
      <text x="306" y="118" fontSize="9" fill="#7a7a00" fontWeight="700">
        +38% var.
      </text>
      {/* Data points */}
      {[
        [40, 70],
        [104, 65],
        [168, 72],
        [232, 68],
        [360, 76],
        [424, 72],
      ].map(([x, y]) => (
        <circle
          key={x}
          cx={x}
          cy={y}
          r="2.5"
          fill="#fcfcff"
          stroke="#226ffd"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  );
}

const alertColors = [
  {
    color: '#eaea00',
  },
  {
    color: '#ff9433',
  },
  {
    color: '#0dc958',
  },
];

type Alert = { severity: string; text: string; time: string };

export function PatternsDashboard() {
  const { raw, t } = useLanguage();
  const alerts = raw<Alert[]>('site.products.organizations.patterns.alerts');

  return (
    <div className="overflow-hidden rounded-xl border border-[color:rgba(21,27,43,0.08)] bg-[#fcfcff] p-6 shadow-[0_30px_60px_-30px_rgba(7,17,48,0.12)]">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[13px] font-bold">
            {t('site.products.organizations.patterns.title')}
          </p>
          <p className="font-mono text-[10px] text-[color:var(--fg-3)]">
            {t('site.products.organizations.patterns.subtitle')}
          </p>
        </div>
        <span className="rounded-full border border-[color:rgba(234,234,0,0.5)] bg-[color:rgba(234,234,0,0.18)] px-2 py-0.5 text-[10px] font-bold text-[#7a7a00]">
          {t('site.products.organizations.patterns.alertCount')}
        </span>
      </div>

      {/* Chart */}
      <div className="mb-3 rounded-lg border border-[color:rgba(21,27,43,0.06)] bg-gradient-to-b from-[#f7f8fc] to-[#fcfcff] p-4">
        <p className="mb-2 font-mono text-[10px] text-[color:var(--fg-3)]">
          {t('site.products.organizations.patterns.caption')}
        </p>
        <AreaChart />
      </div>

      {/* Alert rows */}
      <div className="flex flex-col gap-1.5">
        {alerts.map((a, index) => (
          <div
            key={a.text}
            className="flex items-center gap-2.5 rounded-md bg-[#f7f8fc] px-3 py-2.5"
            style={{ borderLeft: `3px solid ${alertColors[index].color}` }}
          >
            <div className="flex-1">
              <p className="text-xs font-semibold">{a.text}</p>
              <p className="font-mono text-[9px] text-[color:var(--fg-3)]">
                {a.time}
              </p>
            </div>
            <span
              className="text-[10px] font-bold uppercase"
              style={{ color: alertColors[index].color }}
            >
              {a.severity}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
