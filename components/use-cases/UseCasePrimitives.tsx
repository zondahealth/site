import type { ComponentProps, ReactNode } from "react";
import Link from "next/link";
import { Check, ChevronDown, type LucideIcon } from "lucide-react";

import { isLiveRoute } from "@/lib/navigation";
import { Button } from "@/components/ui/button/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card/card";
import {
  FeatureHero,
  FeatureHeroContent,
  FeatureHeroMedia,
  FeaturePanelBleed,
  SOLUTION_HERO_BACKGROUND,
} from "@/components/ui/feature-hero/feature-hero";
import {
  Story,
  StoryCTA,
  StoryList,
  StoryMedia,
  StoryTitle,
} from "@/components/ui/story/story";
import { cn } from "@/components/ui/utils";

type SectionIntroProps = {
  eyebrow?: string;
  title: ReactNode;
  copy?: ReactNode;
  inverse?: boolean;
  centered?: boolean;
  compact?: boolean;
  className?: string;
  titleClassName?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  copy,
  inverse = false,
  centered = false,
  compact = false,
  className,
  titleClassName,
}: SectionIntroProps) {
  return (
    <header className={cn(centered && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "font-semibold uppercase tracking-[0.18em]",
            compact ? "text-[10px]" : "text-xs",
            inverse ? "text-[#77dcff]" : "text-secondary",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display font-semibold leading-tight tracking-[-0.035em]",
          compact ? "mt-3 text-2xl sm:text-3xl" : "mt-4 text-4xl sm:text-5xl",
          inverse ? "text-white" : "text-foreground",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={cn(
            compact
              ? "mt-3 text-sm leading-6"
              : "mt-5 text-base leading-8 sm:text-lg",
            inverse ? "text-white/65" : "text-muted-foreground",
          )}
        >
          {copy}
        </p>
      ) : null}
    </header>
  );
}

type ProductVisualProps = {
  label: string;
  children: ReactNode;
  inverse?: boolean;
  filename?: string;
  className?: string;
  bodyClassName?: string;
};

export function ProductVisual({
  label,
  children,
  inverse = false,
  filename,
  className,
  bodyClassName,
}: ProductVisualProps) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-[1.5rem] border shadow-[0_24px_70px_rgba(14,60,117,0.09)]",
        inverse
          ? "border-white/12 bg-white/[0.06]"
          : "border-border/80 bg-white",
        className,
      )}
    >
      <figcaption
        className={cn(
          "flex min-h-14 flex-wrap items-center justify-between gap-3 border-b px-5 py-3",
          inverse
            ? "border-white/10 bg-black/10 text-white"
            : "border-border/70 bg-[#f8fafe] text-foreground",
        )}
      >
        <span className="text-xs font-semibold">{label}</span>
        {filename ? (
          <span
            className={cn(
              "rounded-full border border-dashed px-3 py-1 font-mono text-[9px]",
              inverse
                ? "border-white/20 text-white/45"
                : "border-border text-muted-foreground",
            )}
          >
            Placeholder · {filename}
          </span>
        ) : null}
      </figcaption>
      <div className={cn("p-5 sm:p-7", bodyClassName)}>{children}</div>
    </figure>
  );
}

export function MetricSlot({
  label,
  supportText = "Verified customer metric",
}: {
  label: string;
  supportText?: string;
}) {
  return (
    <div className="flex min-h-44 flex-col justify-between rounded-2xl border border-border/80 bg-white p-6 shadow-[0_10px_30px_rgba(14,60,117,0.04)]">
      <span className="font-display text-5xl font-semibold tracking-[-0.04em] text-primary/25">
        —
      </span>
      <div>
        <p className="text-sm font-semibold text-foreground">{label}</p>
        <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
          {supportText}
        </p>
      </div>
    </div>
  );
}

export function StatSlot({
  value,
  label,
  supportText,
}: {
  value: string;
  label: string;
  supportText?: string;
}) {
  return (
    <div className="flex min-h-44 flex-col justify-between rounded-2xl border border-border/80 bg-white p-6 shadow-[0_10px_30px_rgba(14,60,117,0.04)]">
      <span className="font-display text-5xl font-semibold tracking-[-0.04em] text-primary">
        {value}
      </span>
      <div>
        <p className="text-sm font-semibold text-foreground">{label}</p>
        {supportText ? (
          <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
            {supportText}
          </p>
        ) : null}
      </div>
    </div>
  );
}

type CtaLink = {
  label: string;
  href: string;
};

function destination(href?: string) {
  if (!href || href === "#") return undefined;
  return isLiveRoute(href) ? href : undefined;
}

export function InlineLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  if (!isLiveRoute(href)) return <>{children}</>;
  return (
    <Link
      href={href}
      className="font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring"
    >
      {children}
    </Link>
  );
}

const storyBodyClassName = "group flex flex-col gap-3 outline-none";

export function BenefitStories({
  title,
  copy,
  items,
  inverse = false,
}: {
  title: string;
  copy?: string;
  items: {
    title: string;
    copy: string;
    href?: string;
    cta?: string;
    media: ReactNode;
  }[];
  inverse?: boolean;
}) {
  return (
    <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          centered
          inverse={inverse}
          title={title}
          copy={copy}
          className="max-w-4xl text-center mx-auto"
        />

        <StoryList className="mt-14">
          {items.map((item) => {
            const href = destination(item.href);
            const body = (
              <>
                <StoryMedia
                  className={cn("aspect-[3/2]", inverse && "bg-white/[0.04]")}
                >
                  {item.media}
                </StoryMedia>
                <StoryTitle className={inverse ? "text-white" : undefined}>
                  {item.title}
                </StoryTitle>
                <p
                  className={cn(
                    "text-sm leading-7",
                    inverse ? "text-white/65" : "text-muted-foreground",
                  )}
                >
                  {item.copy}
                </p>
                {item.cta ? (
                  <StoryCTA className={inverse ? "text-white" : undefined}>
                    {item.cta}
                  </StoryCTA>
                ) : null}
              </>
            );

            if (!href) {
              return (
                <li key={item.title} data-slot="story-item">
                  <div data-slot="story" className={storyBodyClassName}>
                    {body}
                  </div>
                </li>
              );
            }

            return (
              <Story key={item.title} href={href}>
                {body}
              </Story>
            );
          })}
        </StoryList>
      </div>
    </section>
  );
}

export function SplitFeature({
  eyebrow,
  title,
  copy,
  bullets,
  bulletIcons,
  media,
  mediaSide = "right",
  id,
  inverse = false,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  copy?: ReactNode;
  bullets?: ReactNode[];
  bulletIcons?: LucideIcon[];
  media: ReactNode;
  mediaSide?: "left" | "right";
  id?: string;
  inverse?: boolean;
  children?: ReactNode;
}) {
  const textOnEnd = mediaSide === "left";

  return (
    <section
      id={id}
      className={cn(
        "px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24",
        id && "scroll-mt-24",
      )}
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className={textOnEnd ? "lg:order-2" : undefined}>
          <SectionIntro
            compact
            inverse={inverse}
            eyebrow={eyebrow}
            title={title}
            copy={copy}
            className="max-w-lg"
          />
          {bullets && bullets.length > 0 ? (
            <ul className="mt-6 grid max-w-lg gap-3">
              {bullets.map((bullet, index) => {
                const Icon = bulletIcons?.[index] ?? Check;

                return (
                  <li
                    key={index}
                    className={cn(
                      "flex items-center gap-2.5 text-sm leading-6",
                      inverse ? "text-white/80" : "text-foreground/80",
                    )}
                  >
                    <Icon
                      aria-hidden="true"
                      className={cn(
                        "size-4 shrink-0",
                        inverse ? "text-[#eaea00]" : "text-secondary",
                      )}
                      strokeWidth={2.4}
                    />
                    <span>{bullet}</span>
                  </li>
                );
              })}
            </ul>
          ) : null}
          {children}
        </div>
        <div className={textOnEnd ? "lg:order-1" : undefined}>{media}</div>
      </div>
    </section>
  );
}

export function ChecklistSection({
  eyebrow,
  title,
  copy,
  items,
}: {
  eyebrow?: string;
  title: ReactNode;
  copy?: ReactNode;
  items: ReactNode[];
}) {
  return (
    <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <SectionIntro
          eyebrow={eyebrow}
          title={title}
          copy={copy}
          className="max-w-xl"
        />
        <ul className="grid gap-4">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 rounded-2xl border border-border/80 bg-white p-5 text-base leading-7 text-foreground/80"
            >
              <Check
                aria-hidden="true"
                className="mt-1 size-4 shrink-0 text-secondary"
                strokeWidth={2.4}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Testimonial({
  quote,
  name,
  role,
  compact = false,
  className,
}: {
  quote: ReactNode;
  name: ReactNode;
  role: ReactNode;
  compact?: boolean;
  className?: string;
}) {
  return (
    <blockquote
      className={cn(
        "border-y border-border",
        compact ? "py-8" : "mt-10 py-10 sm:py-12",
        className,
      )}
    >
      <div className="grid gap-4 sm:grid-cols-[3rem_1fr] sm:gap-6">
        <span
          className="font-display text-6xl font-semibold leading-[0.75] text-secondary"
          aria-hidden="true"
        >
          “
        </span>
        <div>
          <p
            className={cn(
              "font-display font-medium leading-relaxed text-foreground",
              compact ? "text-lg sm:text-xl" : "text-xl sm:text-2xl",
            )}
          >
            {quote}
          </p>
          <footer className={compact ? "mt-6" : "mt-8"}>
            <p
              className={cn(
                "font-semibold text-foreground",
                compact ? "text-base sm:text-lg" : "text-lg sm:text-xl",
              )}
            >
              {name}
            </p>
            <p className="mt-1 text-base text-muted-foreground">{role}</p>
          </footer>
        </div>
      </div>
    </blockquote>
  );
}

export function CapabilityGrid({
  title,
  items,
  inverse = false,
}: {
  title?: string;
  items: {
    title: string;
    copy?: string;
    href?: string;
    icon: LucideIcon;
  }[];
  inverse?: boolean;
}) {
  return (
    <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {title ? (
          <SectionIntro inverse={inverse} title={title} className="max-w-3xl" />
        ) : null}
        <div
          className={cn(
            "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
            title && "mt-12",
          )}
        >
          {items.map((item) => {
            const Icon = item.icon;
            const href = destination(item.href);

            return (
              <Card
                key={item.title}
                variant="muted"
                hoverable={Boolean(href)}
                href={href}
                className={
                  inverse
                    ? "border-white/12 bg-white/[0.045] text-white"
                    : undefined
                }
              >
                <Icon
                  aria-hidden="true"
                  className={cn(
                    "size-5",
                    inverse ? "text-[#eaea00]" : "text-primary",
                  )}
                  strokeWidth={1.75}
                />
                <CardTitle className="mt-5">{item.title}</CardTitle>
                {item.copy ? (
                  <CardContent
                    className={inverse ? "text-white/65" : undefined}
                  >
                    {item.copy}
                  </CardContent>
                ) : null}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function FaqList({
  title = "Tus preguntas, respondidas",
  copy,
  items,
  inverse = false,
}: {
  title?: string;
  copy?: ReactNode;
  items: {
    question: string;
    answer: ReactNode;
    /** Plain-text answer for JSON-LD when `answer` is rich content without placeholders. */
    jsonLdAnswer?: string;
    jsonLd?: boolean;
    open?: boolean;
  }[];
  inverse?: boolean;
}) {
  const jsonLdItems = items.flatMap((item) => {
    if (item.jsonLd === false) return [];
    const answer =
      item.jsonLdAnswer ??
      (typeof item.answer === "string" ? item.answer : undefined);
    if (!answer) return [];
    return [{ question: item.question, answer }];
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: jsonLdItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          centered
          inverse={inverse}
          title={title}
          copy={copy}
          className="max-w-3xl"
        />

        <div
          className={cn(
            "mt-12 divide-y border-y",
            inverse
              ? "divide-white/10 border-white/10"
              : "divide-border/80 border-border/80",
          )}
        >
          {items.map((item) => (
            <details key={item.question} className="group" open={item.open}>
              <summary
                className={cn(
                  "flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left font-display text-base font-semibold outline-none focus-visible:ring-2 sm:text-lg [&::-webkit-details-marker]:hidden",
                  inverse
                    ? "text-white focus-visible:ring-[#eaea00]"
                    : "focus-visible:ring-ring",
                )}
              >
                {item.question}
                <span
                  className={cn(
                    "flex size-8 shrink-0 items-center justify-center rounded-full border",
                    inverse
                      ? "border-white/15 bg-white/[0.06] text-white"
                      : "border-border bg-white text-primary",
                  )}
                >
                  <ChevronDown className="size-4 transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none" />
                </span>
              </summary>
              <p
                className={cn(
                  "max-w-3xl pb-6 pr-12 text-sm leading-7 sm:text-base",
                  inverse ? "text-white/70" : "text-muted-foreground",
                )}
              >
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
      {jsonLdItems.length > 0 ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      ) : null}
    </section>
  );
}

function CtaAnchor({ href, ...props }: ComponentProps<"a"> & { href: string }) {
  if (/^https?:/.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
    );
  }
  return <Link href={href} {...props} />;
}

export function RelatedLinks({
  title,
  links,
  widthClassName = "max-w-7xl",
  inverse = false,
}: {
  title?: string;
  links: { label: string; href: string }[];
  widthClassName?: string;
  inverse?: boolean;
}) {
  const visible = links.filter((link) => isLiveRoute(link.href));
  if (visible.length === 0) return null;

  return (
    <nav
      aria-label={title ?? "Páginas relacionadas"}
      className="px-6 py-10 sm:px-10 lg:px-16"
    >
      {title ? (
        <SectionIntro
          compact
          inverse={inverse}
          title={title}
          className={cn("mx-auto", widthClassName)}
        />
      ) : null}
      <ul
        className={cn(
          "mx-auto flex flex-wrap gap-3",
          widthClassName,
          title && "mt-6",
        )}
      >
        {visible.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            <Link
              href={link.href}
              className={cn(
                "inline-flex rounded-full border px-4 py-2 text-sm transition-colors",
                inverse
                  ? "border-white/15 text-white hover:bg-white/10"
                  : "border-border hover:bg-muted",
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function UseCaseHero({
  eyebrow,
  title,
  copy,
  primary,
  secondary,
  media,
  bleedSrc = null,
  secondaryVariant = "outline",
  backgroundSrc = SOLUTION_HERO_BACKGROUND,
  inverse = false,
  mediaClassName,
  gridClassName,
  contentClassName,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  copy: ReactNode;
  primary: CtaLink;
  secondary?: CtaLink;
  media: ReactNode;
  /** Optional side-bleed image rendered on the right of the hero. */
  bleedSrc?: string | null;
  secondaryVariant?: "outline" | "inverse";
  backgroundSrc?: string;
  /** Light text and accent buttons for dark backgrounds. */
  inverse?: boolean;
  mediaClassName?: string;
  gridClassName?: string;
  contentClassName?: string;
}) {
  const primaryHref = destination(primary.href);
  const secondaryHref = destination(secondary?.href);

  return (
    <FeatureHero
      backgroundSrc={backgroundSrc}
      className={inverse ? "text-white" : undefined}
      gridClassName={gridClassName}
    >
      {bleedSrc ? <FeaturePanelBleed src={bleedSrc} side="right" /> : null}
      <FeatureHeroContent className={contentClassName}>
        <div>
          {eyebrow ? (
            <p
              className={cn(
                "mb-2 text-sm font-semibold uppercase tracking-[0.10em]",
                inverse ? "text-[#eaea00]" : "text-foreground",
              )}
            >
              {eyebrow}
            </p>
          ) : null}
          <h1
            className={cn(
              "font-display text-5xl font-semibold leading-[1.04] tracking-[-0.045em]",
              inverse ? "text-white" : "text-foreground",
            )}
          >
            {title}
          </h1>
          <p
            className={cn(
              "mt-2 text-lg leading-7",
              inverse ? "text-white/72" : "text-foreground/80",
            )}
          >
            {copy}
          </p>
          {primaryHref || secondaryHref ? (
            <div className="mt-4 flex flex-wrap gap-3">
              {primaryHref ? (
                <Button variant="black" asChild>
                  <CtaAnchor href={primaryHref}>{primary.label}</CtaAnchor>
                </Button>
              ) : null}
              {secondary && secondaryHref ? (
                <Button variant={secondaryVariant} asChild>
                  <CtaAnchor href={secondaryHref}>{secondary.label}</CtaAnchor>
                </Button>
              ) : null}
            </div>
          ) : null}
        </div>
      </FeatureHeroContent>
      <FeatureHeroMedia className={mediaClassName}>{media}</FeatureHeroMedia>
    </FeatureHero>
  );
}
