import Image from 'next/image';
import type { CSSProperties, ReactNode } from 'react';

import {
  StaticTopographicShaderBackground,
  type ShaderId,
} from './shaders/TopographicShaderBackground';
import { BACKGROUNDS } from './ui/colors';
import { cn } from './ui/utils';

type VisualFeatureCardColor =
  | 'black'
  | 'darkblue'
  | 'vitality-yellow'
  | 'vitality-green';

type VisualFeatureCardWaves =
  | 'none'
  | 'elastic'
  | 'elastic-inverted'
  | 'elastic-alt'
  | 'liquid'
  | 'liquid-inverted'
  | 'liquid-alt'
  | 'vdrift'
  | 'vdrift-inverted'
  | 'vdrift-alt';

type VisualFeatureCardLineColor = 'default' | 'black' | 'white';
type VisualFeatureCardGlow = boolean;

type ImagePlacement = 'top' | 'bottom' | 'center';

export type VisualFeatureCardProps = {
  title: ReactNode;
  description: ReactNode;
  image?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  imagePlacement?: ImagePlacement;
  imageClassName?: string;
  imageSizes?: string;
  priority?: boolean;
  color?: VisualFeatureCardColor;
  waves?: VisualFeatureCardWaves;
  lineColor?: VisualFeatureCardLineColor;
  glow?: VisualFeatureCardGlow;
  showWaves?: boolean;
  className?: string;
  mediaClassName?: string;
  mediaInnerClassName?: string;
  contentClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  style?: CSSProperties;
};

const colorBackgrounds: Record<VisualFeatureCardColor, string> = {
  black: BACKGROUNDS.black,
  darkblue: BACKGROUNDS['visual-darkblue'],
  'vitality-yellow': BACKGROUNDS['vitality-yellow'],
  'vitality-green': BACKGROUNDS['vitality-green'],
};

const waveSettings: Record<
  Exclude<VisualFeatureCardWaves, 'none'>,
  {
    shaderId: ShaderId;
    staticFrame: number;
    inverted?: boolean;
  }
> = {
  elastic: { shaderId: 'elastic', staticFrame: 64 },
  'elastic-inverted': { shaderId: 'elastic', staticFrame: 64, inverted: true },
  'elastic-alt': { shaderId: 'elastic', staticFrame: 128 },
  liquid: { shaderId: 'liquid', staticFrame: 64 },
  'liquid-inverted': { shaderId: 'liquid', staticFrame: 64, inverted: true },
  'liquid-alt': { shaderId: 'liquid', staticFrame: 128 },
  vdrift: { shaderId: 'vdrift', staticFrame: 64 },
  'vdrift-inverted': { shaderId: 'vdrift', staticFrame: 64, inverted: true },
  'vdrift-alt': { shaderId: 'vdrift', staticFrame: 128 },
};

const lineColors: Record<
  VisualFeatureCardLineColor,
  readonly [number, number, number] | undefined
> = {
  default: undefined,
  black: [0.08, 0.11, 0.17],
  white: [0.98, 0.99, 1],
};

const glowClasses: Record<VisualFeatureCardColor, string> = {
  black:
    'bg-[radial-gradient(680px_420px_at_52%_35%,rgba(92,101,124,0.42),transparent_62%),radial-gradient(circle_at_50%_36%,rgba(252,252,255,0.08),transparent_28%)]',
  darkblue:
    'bg-[radial-gradient(680px_420px_at_52%_35%,rgba(34,111,253,0.42),transparent_62%),radial-gradient(circle_at_50%_36%,rgba(178,197,255,0.12),transparent_28%)]',
  'vitality-yellow':
    'bg-[radial-gradient(680px_420px_at_52%_35%,rgba(255,255,154,0.5),transparent_62%),radial-gradient(circle_at_50%_36%,rgba(252,252,255,0.12),transparent_28%)]',
  'vitality-green':
    'bg-[radial-gradient(680px_420px_at_52%_35%,rgba(190,232,112,0.48),transparent_62%),radial-gradient(circle_at_50%_36%,rgba(252,252,255,0.1),transparent_28%)]',
};

const placementClasses: Record<ImagePlacement, string> = {
  top: 'items-start pt-0',
  bottom: 'items-end pb-0',
  center: 'items-center py-8 sm:py-10',
};

const imagePlacementClasses: Record<ImagePlacement, string> = {
  top: '-mt-10 sm:-mt-14',
  bottom: '-mb-10 sm:-mb-14',
  center: '',
};

export function VisualFeatureCard({
  title,
  description,
  image,
  imageSrc,
  imageAlt = '',
  imagePlacement = 'center',
  imageClassName,
  imageSizes = '(min-width: 1024px) 45vw, 100vw',
  priority,
  color = 'darkblue',
  waves = 'elastic',
  lineColor = 'default',
  glow = false,
  showWaves = true,
  className,
  mediaClassName,
  mediaInnerClassName,
  contentClassName,
  titleClassName,
  descriptionClassName,
  style,
}: VisualFeatureCardProps) {
  const hasImage = image || imageSrc;
  const wave = waves === 'none' ? null : waveSettings[waves];
  const shaderLineColor = lineColors[lineColor];
  const isFlatLineColor = lineColor !== 'default';
  const glowClassName = glow ? glowClasses[color] : null;

  return (
    <article
      className={cn('flex min-w-0 flex-col gap-5 sm:gap-6', className)}
      style={style}
    >
      <div
        className={cn(
          'relative flex aspect-[16/9] w-full overflow-hidden rounded-md',
          hasImage ? placementClasses[imagePlacement] : 'items-center',
          mediaClassName
        )}
        style={{ background: colorBackgrounds[color] }}
      >
        {glowClassName ? (
          <div className={cn('pointer-events-none absolute inset-0', glowClassName)} />
        ) : null}

        {showWaves && wave ? (
          <StaticTopographicShaderBackground
            shaderId={wave.shaderId}
            lineColor={shaderLineColor}
            lineOpacity={isFlatLineColor ? 1 : undefined}
            staticFrame={wave.staticFrame}
            className={cn(
              'pointer-events-none absolute inset-0 h-full w-full',
              wave.inverted && '-scale-x-100',
              isFlatLineColor ? 'opacity-100' : 'opacity-70 mix-blend-screen'
            )}
          />
        ) : null}

        {hasImage ? (
          <div
            className={cn(
              'relative z-10 mx-auto flex h-[112%] w-[86%] max-w-[34rem] justify-center',
              imagePlacementClasses[imagePlacement],
              mediaInnerClassName
            )}
          >
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority={priority}
                className={cn(
                  'pointer-events-none object-contain object-center',
                  imageClassName
                )}
                sizes={imageSizes}
              />
            ) : (
              image
            )}
          </div>
        ) : null}
      </div>

      <div className={cn('flex flex-col gap-3', contentClassName)}>
        <h3
          className={cn(
            'text-pretty text-2xl font-semibold leading-tight text-foreground sm:text-[1.7rem]',
            titleClassName
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            'max-w-[68ch] text-base leading-relaxed text-on-surface-variant sm:text-lg',
            descriptionClassName
          )}
        >
          {description}
        </p>
      </div>
    </article>
  );
}
