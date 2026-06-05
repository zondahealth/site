import type { ReactNode } from 'react';

import type { ShaderId } from './shaders/TopographicShaderBackground';
import { StaticTopographicShaderBackground } from './shaders/TopographicShaderBackground';
import {
  BACKGROUNDS,
  extractSolidColor,
  LINE_COLORS,
  SPOTLIGHT_GRADIENTS,
} from './ui/colors';
import type {
  NamedBackground,
  NamedLineColor,
  SpotlightSize,
} from './ui/colors';
import { cn } from './ui/utils';

type Darken = 'subtle' | 'medium' | 'strong';

const darkenClasses: Record<Darken, string> = {
  subtle: 'bg-black/15',
  medium: 'bg-black/35',
  strong: 'bg-black/55',
};

type ShaderFeaturePanelProps = {
  shaderId?: ShaderId;
  lineColor?: NamedLineColor | readonly [number, number, number];
  lineOpacity?: number;
  staticFrame?: number;
  shaderClassName?: string;
  backgroundColor?: NamedBackground | (string & {});
  darken?: Darken;
  /** Radial clear zone in the center — lines dissolve outward. */
  spotlight?: SpotlightSize;
  /** Color of the spotlight center. Defaults to a solid fallback from backgroundColor. */
  spotlightColor?: string;
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function ShaderFeaturePanel({
  shaderId = 'elastic',
  lineColor,
  lineOpacity,
  staticFrame,
  shaderClassName,
  backgroundColor,
  darken,
  spotlight,
  spotlightColor,
  children,
  className,
  contentClassName,
}: ShaderFeaturePanelProps) {
  const resolvedColor =
    typeof lineColor === 'string' ? LINE_COLORS[lineColor] : lineColor;
  const resolvedBg =
    backgroundColor && backgroundColor in BACKGROUNDS
      ? BACKGROUNDS[backgroundColor as NamedBackground]
      : backgroundColor;

  const spotlightBg =
    spotlight &&
    SPOTLIGHT_GRADIENTS[spotlight](
      spotlightColor ?? (resolvedBg ? extractSolidColor(resolvedBg) : '#000000')
    );

  return (
    <div className={cn('relative overflow-hidden rounded-md', className)}>
      {resolvedBg && (
        <div className="absolute inset-0" style={{ background: resolvedBg }} />
      )}

      <StaticTopographicShaderBackground
        shaderId={shaderId}
        className={cn('absolute inset-0 h-full w-full', shaderClassName)}
        lineColor={resolvedColor}
        lineOpacity={lineOpacity}
        staticFrame={staticFrame}
      />

      {spotlightBg && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: spotlightBg }}
        />
      )}

      {darken && (
        <div
          className={cn(
            'pointer-events-none absolute inset-0',
            darkenClasses[darken]
          )}
        />
      )}

      <div className={cn('relative z-10', contentClassName)}>{children}</div>
    </div>
  );
}
