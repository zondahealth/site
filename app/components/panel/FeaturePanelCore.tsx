import Image from 'next/image';
import type { CSSProperties } from 'react';
import type { ReactNode } from 'react';

import { cn } from '../ui/utils';
import {
  FEATURE_PANEL_COLORS,
  FEATURE_PANEL_PATTERN_IMAGES,
  FeaturePanelPattern,
  FeaturePanelTone,
} from './FeaturePanel.tokens';

export {
  FEATURE_PANEL_COLORS,
  FEATURE_PANEL_PATTERN_IMAGES,
  FeaturePanelPattern,
  FeaturePanelTone,
} from './FeaturePanel.tokens';

type PanelChromeProps = {
  overlayClassName?: string;
};

type PanelContentProps = {
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
};

function PanelChrome({ overlayClassName }: PanelChromeProps) {
  return overlayClassName ? (
    <div className={cn('absolute inset-0', overlayClassName)} />
  ) : null;
}

type FeaturePanelPatternPlacement =
  | 'full'
  | 'left'
  | 'right'
  | 'both'
  | 'corners'
  | 'corners-inverted';

type FeaturePanelPatternSize = 'short' | 'large';

type SharedFeaturePanelProps = PanelContentProps &
  PanelChromeProps & {
    tone?: FeaturePanelTone;
    background?: CSSProperties['background'];
    pattern?: FeaturePanelPattern;
    patterns?: FeaturePanelPattern[];
    patternPlacement?: FeaturePanelPatternPlacement;
    patternSize?: FeaturePanelPatternSize;
    patternClassName?: string;
    patternClassNames?: Partial<Record<FeaturePanelPattern, string>>;
    backgroundImageSrc?: string;
    backgroundImageAlt?: string;
    backgroundImage?: ReactNode;
    backgroundImageClassName?: string;
    backgroundImagePriority?: boolean;
    image?: ReactNode;
    imagePosition?: 'bleed' | 'center' | 'inset' | 'bottom';
    reverse?: boolean;
    panelSize?: 'sm' | 'md' | 'lg' | 'xl';
    imageContainerClassName?: string;
  };

type FeaturePanelToneProps = SharedFeaturePanelProps & {
  imageSrc?: never;
  imageAlt?: never;
  imageClassName?: never;
  priority?: never;
};

type FeaturePanelImageProps = SharedFeaturePanelProps & {
  backgroundImageSrc?: never;
  backgroundImageAlt?: never;
  backgroundImagePriority?: never;
  imageSrc: string;
  imageAlt: string;
  imageClassName?: string;
  priority?: boolean;
};

export type FeaturePanelProps = FeaturePanelToneProps | FeaturePanelImageProps;

const panelSizes = {
  sm: 'lg:h-[28rem]',
  md: 'lg:h-[36rem]',
  lg: 'lg:h-[44rem]',
  xl: 'lg:h-[52rem]',
};

const panelPaddings = {
  sm: 'px-8 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-20',
  md: 'px-8 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-20',
  lg: 'px-8 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-20',
  xl: 'px-8 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-28',
};

type ImagePositionKey = Exclude<
  NonNullable<SharedFeaturePanelProps['imagePosition']>,
  'bottom'
>;

const imageSlotStyles: Record<
  ImagePositionKey,
  {
    cell: string;
    wrapperDefault: string;
    wrapperReverse: string;
    mobile: string;
  }
> = {
  bleed: {
    cell: 'relative overflow-hidden',
    wrapperDefault: 'lg:absolute lg:inset-y-0 lg:left-0 lg:w-[140%]',
    wrapperReverse: 'lg:absolute lg:inset-y-0 lg:right-0 lg:w-[140%]',
    mobile: 'absolute inset-x-0 top-0 h-[140%] lg:inset-auto lg:h-auto',
  },
  center: {
    cell: 'relative',
    wrapperDefault: 'flex h-full items-center justify-center',
    wrapperReverse: 'flex h-full items-center justify-center',
    mobile: '',
  },
  inset: {
    cell: 'relative',
    wrapperDefault: 'flex h-full items-center justify-center p-6 lg:p-10',
    wrapperReverse: 'flex h-full items-center justify-center p-6 lg:p-10',
    mobile: '',
  },
};

const patternPlacementStyles: Record<
  FeaturePanelPatternPlacement,
  {
    layers: Array<{
      className: string;
      imageClassName?: string;
    }>;
  }
> = {
  full: {
    layers: [{ className: 'inset-0', imageClassName: 'object-cover' }],
  },
  left: {
    layers: [
      {
        className: 'inset-y-0 left-0',
        imageClassName: 'object-cover object-left',
      },
    ],
  },
  right: {
    layers: [
      {
        className: 'inset-y-0 right-0',
        imageClassName: 'object-cover object-right',
      },
    ],
  },
  both: {
    layers: [
      {
        className: 'inset-y-0 left-0',
        imageClassName: 'object-cover object-left',
      },
      {
        className: 'inset-y-0 right-0',
        imageClassName: 'object-cover object-right scale-x-[-1]',
      },
    ],
  },
  corners: {
    layers: [{ className: 'inset-0', imageClassName: 'object-cover' }],
  },
  'corners-inverted': {
    layers: [
      {
        className: 'inset-0',
        imageClassName: 'object-cover rotate-180',
      },
    ],
  },
};

const patternSizeStyles: Record<FeaturePanelPatternSize, string> = {
  short: 'w-[34%] min-w-[14rem] max-w-[26rem]',
  large: 'w-[52%] min-w-[18rem] max-w-[44rem]',
};

export function FeaturePanel(props: FeaturePanelProps) {
  const isImagePanel = 'imageSrc' in props;
  const tone = props.tone ?? FeaturePanelTone.White;
  const toneColor = FEATURE_PANEL_COLORS[tone];
  const background = props.background ?? toneColor.background;

  const patterns = [
    ...(props.pattern ? [props.pattern] : []),
    ...(props.patterns ?? []),
  ];
  const patternPlacement = props.patternPlacement ?? 'full';
  const patternSize = props.patternSize ?? 'large';
  const placement = patternPlacementStyles[patternPlacement];

  const hasImageSlot = props.image != null;
  const reverse = props.reverse ?? false;
  const isBottom = props.imagePosition === 'bottom';
  const isBleed = props.imagePosition === 'bleed';
  const pos =
    hasImageSlot && !isBottom
      ? imageSlotStyles[(props.imagePosition ?? 'center') as ImagePositionKey]
      : null;

  const sizeKey = props.panelSize ?? 'md';
  const basePadding = panelPaddings[sizeKey];
  const isXl = sizeKey === 'xl';
  const gridPadding = hasImageSlot
    ? cn(
        basePadding,
        isBleed && (isXl ? 'pb-0 lg:pb-28' : 'pb-0 lg:pb-20'),
        isBleed && !reverse && 'lg:pr-0',
        isBleed && reverse && 'lg:pl-0'
      )
    : undefined;

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-md',
        hasImageSlot && panelSizes[sizeKey],
        props.className
      )}
    >
      {isImagePanel ? (
        <Image
          src={props.imageSrc ?? ''}
          alt={props.imageAlt ?? ''}
          fill
          priority={props.priority}
          className={cn('object-cover', props.imageClassName)}
        />
      ) : (
        <div className="absolute inset-0" style={{ background }} />
      )}

      {props.backgroundImageSrc && (
        <Image
          src={props.backgroundImageSrc}
          alt={props.backgroundImageAlt ?? ''}
          fill
          priority={props.backgroundImagePriority}
          className={cn('object-cover', props.backgroundImageClassName)}
        />
      )}

      {props.backgroundImage && (
        <div className={cn('absolute inset-0', props.backgroundImageClassName)}>
          {props.backgroundImage}
        </div>
      )}

      {patterns.flatMap((pattern, index) =>
        placement.layers.map((layer, layerIndex) => (
          <div
            key={`${pattern}-${index}-${layerIndex}`}
            className={cn(
              'pointer-events-none absolute opacity-50 mix-blend-screen',
              layer.className,
              patternPlacement !== 'full' &&
                patternPlacement !== 'corners' &&
                patternPlacement !== 'corners-inverted' &&
                patternSizeStyles[patternSize],
              props.patternClassName,
              props.patternClassNames?.[pattern]
            )}
          >
            <Image
              src={FEATURE_PANEL_PATTERN_IMAGES[pattern]}
              alt=""
              fill
              aria-hidden="true"
              className={cn('object-cover', layer.imageClassName)}
            />
          </div>
        ))
      )}

      <PanelChrome
        overlayClassName={props.overlayClassName}
      />

      {hasImageSlot && isBottom ? (
        <div className="relative z-10 flex h-full flex-col">
          <div
            className={cn(
              'px-8 pt-10 sm:px-10 sm:pt-14 lg:px-14 lg:pt-16',
              props.contentClassName
            )}
          >
            {props.children}
          </div>
          <div
            className={cn(
              'relative flex-1 overflow-hidden',
              props.imageContainerClassName
            )}
          >
            {props.image}
          </div>
        </div>
      ) : hasImageSlot ? (
        <div
          className={cn(
            'relative z-10 grid h-full grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8',
            gridPadding
          )}
        >
          <div
            className={cn(
              'order-1 flex flex-col justify-center',
              reverse ? 'lg:order-2' : 'lg:order-1',
              props.contentClassName
            )}
          >
            {props.children}
          </div>
          <div
            className={cn(
              pos!.cell,
              'order-2',
              reverse ? 'lg:order-1' : 'lg:order-2',
              'min-h-[16rem] lg:min-h-0',
              props.imageContainerClassName
            )}
          >
            <div
              className={cn(
                isBleed && pos!.mobile,
                reverse ? pos!.wrapperReverse : pos!.wrapperDefault
              )}
            >
              {props.image}
            </div>
          </div>
        </div>
      ) : (
        <div className={cn('relative z-10 h-full', props.contentClassName)}>
          {props.children}
        </div>
      )}
    </div>
  );
}
