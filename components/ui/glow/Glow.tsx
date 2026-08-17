"use client";

// <Glow /> — wraps content in a dissolved rainbow glow.
//
//   <Glow>
//     <div className="rounded-[28px] bg-[#0b0a2b] p-10">…</div>
//   </Glow>
//
// Same wrapping API as <Gradient />, but pure CSS — no canvas, no WebGL.
//
// Three ingredients make the "dissolved" look:
//   1. a conic-gradient of pastels (the rainbow)
//   2. a heavy filter: blur() to smear the colors together
//   3. the glow layer is LARGER than the content (negative inset), so the
//      color bleeds out past the edges instead of stopping at them
//
// Two stacked layers: a tight saturated one for the edge, and a wider softer
// one for the far bleed. One layer alone reads either as a hard ring or as
// an undefined haze.

import type { CSSProperties, ReactNode, ComponentPropsWithoutRef } from "react";

import { cn } from "@/components/ui/utils";
import styles from "./glow.module.css";

export interface GlowProps extends Omit<
  ComponentPropsWithoutRef<"div">,
  "style" | "color"
> {
  /** turn the effect off without unwrapping — handy for a prop-driven card */
  glow?: boolean;
  /** the conic ramp. Give 3+ hex strings; the first is repeated to close the loop. */
  colors?: string[];
  /** corner rounding, px. MUST match the content's own radius or the glow squares off. */
  radius?: number;
  /** how far the glow extends past the content, px */
  spread?: number;
  /** blur of the inner layer, px. The far layer scales from this. */
  blur?: number;
  /** overall strength, 0–1 */
  opacity?: number;
  /** where the conic ramp starts, degrees */
  angle?: number;
  /** glow layers stay hidden until hover / focus-within */
  showOnHover?: boolean;
  style?: CSSProperties;
  children?: ReactNode;
}

const PASTEL = [
  "#ffd5c2",
  "#ffc8e6",
  "#d8c2ff",
  "#c2d9ff",
  "#c2fff0",
  "#fff3c2",
];

/** Same stops as the hoverable card / black-button orbit border. */
export const ORBIT_BORDER_COLORS = [
  "var(--orbit-1)",
  "var(--orbit-2)",
  "var(--orbit-3)",
  "var(--orbit-4)",
  "var(--orbit-5)",
  "var(--orbit-6)",
];

const conic = (colors: string[], from: number) =>
  `conic-gradient(from ${from}deg, ${[...colors, colors[0]].join(", ")})`;

export default function Glow({
  glow = true,
  colors = PASTEL,
  radius = 28,
  spread = 28,
  blur = 40,
  opacity = 1,
  angle = 0,
  showOnHover = false,
  className,
  style,
  children,
  ...rest
}: GlowProps) {
  const layer: CSSProperties = {
    position: "absolute",
    zIndex: -1,
    borderRadius: radius,
    pointerEvents: "none",
  };

  const layerStyle = (strength: number, extra: CSSProperties): CSSProperties => ({
    ...layer,
    ...extra,
    ...(showOnHover
      ? { ["--layer-opacity" as string]: strength * opacity }
      : { opacity: strength * opacity }),
  });

  return (
    <div
      // isolation keeps the negative z-index layers behind the content but
      // still inside this element — without it they escape to the page root.
      // w-fit is the default so a flex/grid parent does not stretch the
      // wrapper (and smear the glow). Override with className, e.g. w-full.
      className={cn(
        "relative isolate w-fit",
        showOnHover && styles.hover,
        className
      )}
      style={{
        borderRadius: radius,
        ...style,
      }}
      {...rest}
    >
      {glow && (
        <>
          <div
            aria-hidden="true"
            data-glow-layer=""
            style={layerStyle(0.9, {
              inset: -spread,
              background: conic(colors, angle),
              filter: `blur(${blur}px) saturate(135%)`,
            })}
          />
          <div
            aria-hidden="true"
            data-glow-layer=""
            style={layerStyle(0.55, {
              inset: -Math.round(spread * 0.36),
              background: conic(colors, angle + 180),
              filter: `blur(${Math.round(blur * 1.75)}px) saturate(120%)`,
            })}
          />
        </>
      )}
      {children}
    </div>
  );
}
