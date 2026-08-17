import type { ReactNode } from "react";

import { cn } from "@/components/ui/utils";

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  inverse?: boolean;
  centered?: boolean;
  className?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  copy,
  inverse = false,
  centered = false,
  className,
}: SectionIntroProps) {
  return (
    <header className={cn(centered && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.18em]",
            inverse ? "text-[#77dcff]" : "text-secondary",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl",
          inverse ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={cn(
            "mt-5 text-base leading-8 sm:text-lg",
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
