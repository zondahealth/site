import type { ComponentPropsWithoutRef } from "react";

import { ORBIT_BORDER_COLORS } from "@/components/ui/glow/colors";
import { cn } from "@/components/ui/utils";

interface SeparatorProps extends ComponentPropsWithoutRef<"div"> {
  /** soft halo behind the line */
  glow?: boolean;
  /** line thickness, px */
  thickness?: number;
  /** blur of the halo, px */
  blur?: number;
  /** overall strength, 0–1 */
  opacity?: number;
}

/** Ends fade to transparent so the line dissolves instead of stopping hard. */
const ramp = `linear-gradient(90deg, transparent, ${ORBIT_BORDER_COLORS.join(", ")}, transparent)`;

export function Separator({
  glow = true,
  thickness = 1,
  blur = 12,
  opacity = 1,
  className,
  style,
  ...rest
}: SeparatorProps) {
  return (
    <div
      role="separator"
      className={cn("relative isolate z-10 w-full", className)}
      style={{ height: thickness, opacity, ...style }}
      {...rest}
    >
      {glow && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -z-10"
          style={{
            top: -Math.max(thickness * 2, blur / 2),
            bottom: -Math.max(thickness * 2, blur / 2),
            background: ramp,
            filter: `blur(${blur}px) saturate(135%)`,
            opacity: 0.8,
          }}
        />
      )}
      <div className="absolute inset-0" style={{ background: ramp }} />
    </div>
  );
}
