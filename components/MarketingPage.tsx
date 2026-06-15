import Link from 'next/link';

import { Button } from './ui/button';

type MarketingSection = {
  title: string;
  description: string;
};

type MarketingPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
  sections: MarketingSection[];
  primaryCta?: {
    href: string;
    label: string;
  };
  secondaryCta?: {
    href: string;
    label: string;
  };
};

export function MarketingPage({
  eyebrow,
  title,
  description,
  highlights,
  sections,
  primaryCta,
  secondaryCta,
}: MarketingPageProps) {
  return (
    <main className="min-h-screen bg-background pb-20 pt-32 text-foreground">
      <section className="layout-shell flex flex-col gap-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-start">
          <div className="flex flex-col gap-6">
            <p className="text-sm font-medium uppercase tracking-[0.12em] text-[color:rgba(21,27,43,0.58)]">
              {eyebrow}
            </p>
            <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[0.95] sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="max-w-3xl text-pretty text-lg font-medium leading-relaxed text-on-surface-variant sm:text-xl">
              {description}
            </p>

            {(primaryCta || secondaryCta) && (
              <div className="flex flex-col gap-3 sm:flex-row">
                {primaryCta && (
                  <Button asChild size="lg">
                    <Link href={primaryCta.href}>{primaryCta.label}</Link>
                  </Button>
                )}
                {secondaryCta && (
                  <Button asChild size="lg" variant="outline">
                    <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                  </Button>
                )}
              </div>
            )}
          </div>

          <div className="rounded-[1.5rem] border border-[color:rgba(21,27,43,0.08)] bg-[color:rgba(244,246,253,0.94)] p-8 shadow-[0_20px_44px_-34px_rgba(17,27,43,0.18)]">
            <p className="text-sm font-medium uppercase tracking-[0.12em] text-[color:rgba(21,27,43,0.58)]">
              Puntos clave
            </p>
            <ul className="mt-6 flex flex-col gap-4">
              {highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-base font-medium leading-relaxed text-on-surface-variant"
                >
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-zonda-blue" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-[1.5rem] border border-[color:rgba(21,27,43,0.08)] bg-[color:rgba(253,253,255,0.96)] p-8 shadow-[0_18px_34px_-30px_rgba(17,27,43,0.16)]"
            >
              <h2 className="text-2xl font-semibold leading-tight text-foreground">
                {section.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-on-surface-variant">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
