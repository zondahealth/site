'use client';

import type { ReactNode } from 'react';

const ACCENTS = {
  blue: {
    from: '#a7c1ff',
    mid: '#7da4ff',
    to: '#5a8dff',
  },
  green: {
    from: '#b6f0d0',
    mid: '#7bd9b3',
    to: '#a3d8e8',
  },
  purple: {
    from: '#d8b8ff',
    mid: '#bf95ff',
    to: '#9b7cff',
  },
} as const;

export type ProFeatureAccent = keyof typeof ACCENTS;

type ProFeatureProps = {
  accent: ProFeatureAccent;
  eyebrow: string;
  title: string;
  copy: string;
  bullets: string[];
  cta: string;
  phone: ReactNode;
  flip?: boolean;
};

export function ProFeature({
  accent,
  eyebrow,
  title,
  copy,
  bullets,
  cta,
  phone,
  flip = false,
}: ProFeatureProps) {
  const c = ACCENTS[accent];

  return (
    <section className="py-10">
      <div className="layout-shell">
        <div className="grid grid-cols-1 items-stretch overflow-hidden rounded-[20px] border border-[color:rgba(21,27,43,0.06)] bg-white lg:grid-cols-2">
          {/* Text side */}
          <div
            className={`flex flex-col justify-center gap-5 p-10 lg:p-14 ${
              flip ? 'lg:order-2' : 'lg:order-1'
            }`}
          >
            <p
              className="text-xs font-bold uppercase tracking-[0.12em]"
              style={{ color: c.to }}
            >
              {eyebrow}
            </p>
            <h2 className="text-balance text-3xl font-bold leading-[1.05] tracking-tight lg:text-[40px]">
              {title}
            </h2>
            <p className="max-w-[480px] text-base leading-relaxed text-[color:var(--fg-2)]">
              {copy}
            </p>
            <ul className="flex flex-col gap-2.5">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-3 text-[15px] font-medium text-[color:var(--zonda-ink)]"
                >
                  <span
                    className="inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full"
                    style={{
                      background: `linear-gradient(135deg, ${c.mid}, ${c.to})`,
                    }}
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M2.5 6.3L5 8.8L9.5 3.5"
                        stroke="#fff"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-2">
              <span
                className="cursor-pointer text-sm font-semibold"
                style={{ color: c.to }}
              >
                {cta} →
              </span>
            </div>
          </div>

          {/* Phone side */}
          <div
            className={`flex min-h-[440px] items-center justify-center p-10 lg:min-h-[540px] ${
              flip ? 'lg:order-1' : 'lg:order-2'
            }`}
            style={{
              background: `radial-gradient(ellipse 80% 70% at 30% 20%, ${c.from}, transparent 60%), radial-gradient(ellipse 80% 70% at 80% 80%, ${c.to}, transparent 60%), linear-gradient(135deg, ${c.from}, ${c.mid})`,
            }}
          >
            {phone}
          </div>
        </div>
      </div>
    </section>
  );
}
