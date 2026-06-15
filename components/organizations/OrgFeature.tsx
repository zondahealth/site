import type { ReactNode } from 'react';

type OrgFeatureProps = {
  eyebrow: string;
  title: string;
  copy: string;
  bullets: string[];
  cta: string;
  visual: ReactNode;
  flip?: boolean;
};

export function OrgFeature({
  eyebrow,
  title,
  copy,
  bullets,
  cta,
  visual,
  flip = false,
}: OrgFeatureProps) {
  return (
    <section className="py-24">
      <div className="layout-shell">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div className={flip ? 'lg:order-2' : 'lg:order-1'}>
            <p className="font-mono text-[11px] font-semibold tracking-[0.08em] text-[color:var(--zonda-blue)]">
              {eyebrow}
            </p>
            <h2 className="mt-4 max-w-[480px] text-balance text-3xl font-bold leading-[1.05] tracking-tight lg:text-[44px]">
              {title}
            </h2>
            <p className="mt-5 max-w-[480px] text-[17px] leading-relaxed text-[color:var(--fg-2)]">
              {copy}
            </p>
            <ul className="mt-7 flex flex-col gap-3">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-3 text-[15px] font-medium text-[color:var(--zonda-ink)]"
                >
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[color:var(--zonda-blue)]">
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
            <div className="mt-7">
              <span className="cursor-pointer text-sm font-semibold text-[color:var(--zonda-blue)]">
                {cta} →
              </span>
            </div>
          </div>
          <div className={flip ? 'lg:order-1' : 'lg:order-2'}>{visual}</div>
        </div>
      </div>
    </section>
  );
}
