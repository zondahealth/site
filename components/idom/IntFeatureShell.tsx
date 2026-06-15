import type { ReactNode } from 'react';

type IntFeatureShellProps = {
  eyebrow: string;
  title: string;
  copy: string;
  bullets: string[];
  visual: ReactNode;
  flip?: boolean;
};

export function IntFeatureShell({
  eyebrow,
  title,
  copy,
  bullets,
  visual,
  flip = false,
}: IntFeatureShellProps) {
  return (
    <section className="py-24">
      <div className="layout-shell">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div className={`text-center lg:text-left ${flip ? 'lg:order-2' : 'lg:order-1'}`}>
            <p className="font-mono text-[11px] font-semibold tracking-[0.08em] text-[#0a7a4a]">
              {eyebrow}
            </p>
            <h2 className="mx-auto mt-4 max-w-[480px] text-balance text-3xl font-bold leading-[1.05] tracking-tight lg:mx-0 lg:text-[44px]">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-[480px] text-[17px] leading-relaxed text-[color:var(--fg-2)] lg:mx-0">
              {copy}
            </p>
            <ul className="mx-auto mt-7 flex max-w-[480px] flex-col gap-3 lg:mx-0">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-3 text-left text-[15px] font-medium text-[color:var(--zonda-ink)]"
                >
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0dc958]">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
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
          </div>
          <div className={flip ? 'lg:order-1' : 'lg:order-2'}>{visual}</div>
        </div>
      </div>
    </section>
  );
}
