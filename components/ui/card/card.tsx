"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/components/ui/utils";
import styles from "./card.module.css";

type CardVariant = "default" | "muted" | "dark";

const cardVariants: Record<CardVariant, string> = {
  default: "border-border bg-card text-card-foreground",
  muted: "border-border bg-muted text-foreground",
  dark: "border-primary bg-primary text-primary-foreground",
};

const CardContext = React.createContext<CardVariant>("default");

type CardProps = React.ComponentProps<"section"> & {
  variant?: CardVariant;
  /** A public asset path or URL rendered as a cover background. */
  backgroundImage?: string;
  backgroundPosition?: React.CSSProperties["backgroundPosition"];
  hoverable?: boolean;
  /** Makes the whole card clickable and navigates here, like next/link's Link. */
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
};

function Card({
  className,
  variant = "default",
  backgroundImage,
  backgroundPosition = "center",
  hoverable = false,
  href,
  target,
  children,
  style,
  "aria-label": ariaLabel,
  ...props
}: CardProps) {
  return (
    <CardContext.Provider value={variant}>
      <section
        data-slot="v2-card"
        data-variant={variant}
        data-hoverable={hoverable || undefined}
        className={cn(
          "relative overflow-hidden rounded-lg border bg-cover bg-no-repeat p-6 sm:p-8 [--card-pad:1.5rem] sm:[--card-pad:2rem]",
          "group",
          hoverable &&
            `group ${styles.hoverable} ${variant === "dark" ? styles.hoverableDark : ""}`,
          cardVariants[variant],
          hoverable && "!border-transparent bg-clip-padding",
          className,
        )}
        style={{
          ...style,
          ...(backgroundImage && {
            backgroundImage: `url("${backgroundImage}")`,
            backgroundPosition,
          }),
        }}
        {...props}
      >
        {href && (
          <Link
            href={href}
            target={target}
            aria-label={ariaLabel}
            data-slot="v2-card-link"
            className="absolute inset-0 z-0 rounded-[inherit] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
        )}
        {children}
        <span aria-hidden="true" className={styles.hoverBorder} />
      </section>
    </CardContext.Provider>
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="v2-card-title"
      className={cn(
        "max-w-[85%] pr-12 text-lg font-semibold leading-snug tracking-[-0.03em] md:text-xl lg:text-2xl",
        className,
      )}
      {...props}
    />
  );
}

type CardContentProps = React.ComponentProps<"div"> & {
  /** Lift and slightly enlarge the content while its card is hovered. */
  floatOnHover?: boolean;
};

function CardContent({
  className,
  floatOnHover = false,
  ...props
}: CardContentProps) {
  return (
    <div
      data-slot="v2-card-content"
      className={cn(
        "mt-5 text-[0.95rem] leading-7 text-inherit/75",
        floatOnHover &&
          "origin-bottom transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none",
        className,
      )}
      {...props}
    />
  );
}

type CardMediaProps = React.ComponentProps<"div"> & {
  /**
   * `bottom` breaks out of the card padding, flush with the sides and bottom edge.
   * `x` breaks out of the horizontal padding so the media reaches both side edges.
   * Otherwise the media is centered.
   */
  bleed?: "bottom" | "x";
};

function CardMedia({ className, bleed, ...props }: CardMediaProps) {
  return (
    <div
      data-slot="v2-card-media"
      className={cn(
        "relative mt-auto h-[200px] w-full shrink-0 overflow-hidden sm:h-[300px] lg:h-[350px]",
        bleed === "bottom"
          ? "max-h-[200px] min-h-0 self-end sm:max-h-[240px] lg:max-h-[400px] w-[calc(100%+2*var(--card-pad))] max-w-none -ml-[var(--card-pad)] -mb-[var(--card-pad)]"
          : bleed === "x"
            ? "h-auto w-[calc(100%+2*var(--card-pad))] max-w-none -mx-[var(--card-pad)] overflow-visible sm:h-auto lg:h-auto"
            : "flex items-center justify-center rounded-md",
        className,
      )}
      {...props}
    />
  );
}

function CardCTA({
  className,
  children,
  ...props
}: React.ComponentProps<"button">) {
  const variant = React.useContext(CardContext);

  return (
    <button
      type="button"
      data-slot="v2-card-cta"
      className={cn(
        "absolute right-6 top-6 z-10 inline-flex size-9 items-center justify-center rounded-full outline-none transition-[background-color,color,transform] duration-200 ease-out hover:translate-x-0.5 group-hover:translate-x-0.5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-45 disabled:hover:translate-x-0 sm:right-8 sm:top-8",
        variant === "dark"
          ? "bg-card text-primary hover:bg-muted group-hover:bg-muted focus-visible:ring-offset-primary"
          : "bg-primary text-primary-foreground hover:brightness-90 group-hover:brightness-90",
        className,
      )}
      {...props}
    >
      {children ?? <ArrowRight aria-hidden="true" />}
    </button>
  );
}

export {
  Card,
  CardTitle,
  CardContent,
  CardMedia,
  CardCTA,
  type CardProps,
  type CardContentProps,
  type CardMediaProps,
  type CardVariant,
};
