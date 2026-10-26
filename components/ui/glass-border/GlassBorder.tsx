"use client";

import { useLayoutEffect, useRef, type ComponentProps } from "react";

import { cn } from "@/components/ui/utils";
import styles from "./glass-border.module.css";

/**
 * Thick double-layer cyan glass border.
 *
 * Geometry is taken from a 1254×1254 reference and stored as a fraction of
 * the framed window width, so every layer scales together:
 *
 *   outer ice stroke   5px   → 0.399%
 *   aqua glass band   35px   → 2.791%
 *   saturated inner    2px   → 0.159%
 *   white hairline     1px   → 0.080%
 *   total             43px   → 3.429%   (about 3.5%)
 *   outer radius     125px   → 9.968%
 *   inner radius      85px   → outer radius minus the stroke and the band
 */
const REFERENCE = 1254;

const LAYER = {
  outer: 5 / REFERENCE,
  band: 35 / REFERENCE,
  inner: 2 / REFERENCE,
  hair: 1 / REFERENCE,
  radius: 125 / REFERENCE,
} as const;

const SIDE =
  LAYER.outer + LAYER.band + LAYER.inner + LAYER.hair;

function px(value: number) {
  return `${Math.round(value * 100) / 100}px`;
}

type GlassBorderProps = ComponentProps<"div"> & {
  /** Stretch to the parent's width. The border stays 3.5% of that width. */
  fullWidth?: boolean;
};

function GlassBorder({
  className,
  children,
  fullWidth = false,
  ...props
}: GlassBorderProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const content = contentRef.current;
    if (!root || !content) return;

    const apply = () => {
      const parentWidth = root.parentElement?.clientWidth ?? 0;
      const contentWidth = content.getBoundingClientRect().width;
      if (contentWidth <= 0 && parentWidth <= 0) return;

      // A stretched frame already has a definite border-box, so padding
      // lives inside it and the measured width does not grow.
      const windowWidth = fullWidth
        ? root.clientWidth
        : Math.min(
            contentWidth / (1 - SIDE * 2),
            parentWidth > 0 ? parentWidth : Number.POSITIVE_INFINITY,
          );

      if (!Number.isFinite(windowWidth) || windowWidth <= 0) return;

      const next: Record<string, string> = {
        "--gb-w": px(windowWidth),
        "--gb-outer": px(windowWidth * LAYER.outer),
        "--gb-band": px(windowWidth * LAYER.band),
        "--gb-inner": px(windowWidth * LAYER.inner),
        "--gb-hair": px(windowWidth * LAYER.hair),
        "--gb-total": px(windowWidth * SIDE),
        "--gb-radius": px(windowWidth * LAYER.radius),
      };

      for (const [name, value] of Object.entries(next)) {
        if (root.style.getPropertyValue(name) !== value) {
          root.style.setProperty(name, value);
        }
      }
    };

    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(fullWidth ? root : content);
    if (root.parentElement) observer.observe(root.parentElement);
    return () => observer.disconnect();
  }, [fullWidth]);

  return (
    <div
      ref={rootRef}
      data-slot="glass-border"
      className={cn(styles.root, fullWidth && styles.full, className)}
      {...props}
    >
      <div ref={contentRef} className={styles.content}>
        {children}
      </div>
      <div aria-hidden="true" className={styles.frame}>
        <span className={cn(styles.ring, styles.outerStroke)} />
        <span className={cn(styles.ring, styles.band)} />
        <span className={cn(styles.ring, styles.innerStroke)} />
        <span className={cn(styles.ring, styles.highlight)} />
        <span className={styles.diffusion} />
      </div>
    </div>
  );
}

export { GlassBorder, type GlassBorderProps };
