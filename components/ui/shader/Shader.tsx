'use client';

// <Shader /> — a full-bleed animated shader background.
//
//   <Shader variant="filaments" />
//   <Shader variant="fluid" ink="#f8f9ff" bg="#0e3c75" />
//   <Shader variant="filaments" transparent />        // alpha, no background
//   <Shader variant="duo" angle={20} shiftX={0.3} />
//
// Fills its nearest positioned ancestor. Give that ancestor `position:relative`.

import type { CSSProperties, ComponentPropsWithoutRef } from 'react';
import { useShaderCanvas, hexToRgb } from '../gradient/useShaderCanvas';
import { WALLPAPERS, type Wallpaper } from './shaders';

export const VARIANTS = {
  filaments: 'weavestream',   // columns of microfilaments — the Stream shader
  fluid: 'streamfluid',       // the same flow drawn as woven bands
  duo: 'weaveduo',            // two mirrored woven bands
  tide: 'tide',               // halftone field
  drift: 'drift',             // vector-field streaks
} as const;

export type ShaderVariant = keyof typeof VARIANTS;

export interface ShaderProps extends Omit<ComponentPropsWithoutRef<'canvas'>, 'style'> {
  variant?: ShaderVariant;
  /** the strands / dots */
  ink?: string;
  /** base color; the shader derives a lighter accent from it */
  bg?: string;
  /** emit alpha instead of a background, so what is behind shows through */
  transparent?: boolean;
  /** rotate the whole pattern, in degrees */
  angle?: number;
  /** pan, in screen heights (±1 = a full height) */
  shiftX?: number;
  shiftY?: number;
  /** freeze to a still frame */
  paused?: boolean;
  /** which second to freeze on */
  frozenAt?: number;
  /** cap device-pixel ratio; 1 is the default because filaments are fill-bound */
  maxDpr?: number;
  style?: CSSProperties;
}

export default function Shader({
  variant = 'filaments',
  ink = '#f8f9ff',
  bg = '#0e3c75',
  transparent = false,
  angle = 0,
  shiftX = 0,
  shiftY = 0,
  paused = false,
  frozenAt = 8,
  maxDpr = 1,
  className,
  style,
  ...rest
}: ShaderProps) {
  const id: string = VARIANTS[variant] ?? variant;
  const wp: Wallpaper | undefined = WALLPAPERS.find((w) => w.id === id);

  const canvasRef = useShaderCanvas(
    wp ? wp.fragmentSource : '',
    { ink: hexToRgb(ink), bg: hexToRgb(bg), angle, shiftX, shiftY, paused, frozenAt },
    {
      transparent,
      maxDpr,
      adaptive: true,
      // Fluid has several overlapping layers; a smaller buffer saves fill-rate
      // on wide screens while the dense weave hides the slight upscale.
      maxPixels: id === 'streamfluid' ? 900_000 : 1_200_000,
    },
  );

  if (!wp) {
    console.error(
      `[Shader] unknown variant "${variant}". Use one of: ${Object.keys(VARIANTS).join(', ')}`,
    );
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        display: 'block', pointerEvents: 'none',
        ...style,
      }}
      {...rest}
    />
  );
}
