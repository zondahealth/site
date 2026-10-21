import Image from "next/image";
import * as React from "react";

import { cn } from "@/components/ui/utils";

const FEATURE_HERO_GRADIENT =
  "linear-gradient(33deg, var(--Minted-400, #42F0CD) 0%, var(--Sky-400, #51D2FB) 50%, var(--Sky-450, #0DADF2) 100%)";

const SOLUTION_HERO_BACKGROUND = "/assets/bg/hero-common-bg.png";

type FeatureHeroProps = React.ComponentProps<"section"> & {
  /** Public asset used as a full-bleed background. Falls back to the gradient. */
  backgroundSrc?: string;
};

type FeaturePanelBleedProps = React.ComponentProps<"div"> & {
  /** Public asset path used as a side-bleed background. */
  src: string;
  /** Which edge the panel anchors to. Never wider than 50%. */
  side?: "left" | "right";
};

function FeaturePanelBleed({
  src,
  side = "right",
  className,
  ...props
}: FeaturePanelBleedProps) {
  return (
    <div
      data-slot="feature-panel-bleed"
      data-side={side}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-y-0 z-0 flex w-1/2 max-w-[50%] items-center",
        side === "left" ? "left-0 justify-start" : "right-0 justify-end",
        className,
      )}
      {...props}
    >
      <img
        src={src}
        alt=""
        className="h-auto max-h-full w-auto max-w-full object-contain"
      />
    </div>
  );
}

function isFeaturePanelBleed(
  child: React.ReactNode,
): child is React.ReactElement<FeaturePanelBleedProps> {
  return React.isValidElement(child) && child.type === FeaturePanelBleed;
}

function FeatureHero({
  className,
  style,
  children,
  backgroundSrc,
  ...props
}: FeatureHeroProps) {
  const childArray = React.Children.toArray(children);
  const bleed = childArray.find(isFeaturePanelBleed);
  const slots = childArray.filter((child) => !isFeaturePanelBleed(child));

  return (
    <section
      data-slot="feature-hero"
      className={cn("relative isolate overflow-hidden text-foreground", className)}
      style={
        backgroundSrc
          ? style
          : { background: FEATURE_HERO_GRADIENT, ...style }
      }
      {...props}
    >
      {backgroundSrc ? (
        <Image
          src={backgroundSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          className="pointer-events-none object-cover"
        />
      ) : null}
      {bleed}
      <div className="relative z-10 mx-auto grid min-h-[700px] w-full max-w-6xl grid-cols-1 [grid-template-areas:'media'_'content'] lg:grid-cols-2 lg:[grid-template-areas:'content_media']">
        {slots}
      </div>
    </section>
  );
}

function FeatureHeroContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="feature-hero-content"
      className={cn(
        "relative z-10 flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-16 lg:py-28 lg:pt-40 [grid-area:content]",
        className,
      )}
      {...props}
    />
  );
}

function FeatureHeroMedia({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="feature-hero-media"
      className={cn(
        "relative flex h-full min-h-0 w-full items-center justify-center overflow-hidden p-0 [grid-area:media]",
        className,
      )}
      {...props}
    />
  );
}

export {
  FeatureHero,
  FeatureHeroContent,
  FeatureHeroMedia,
  FeaturePanelBleed,
  FEATURE_HERO_GRADIENT,
  SOLUTION_HERO_BACKGROUND,
  type FeatureHeroProps,
  type FeaturePanelBleedProps,
};
