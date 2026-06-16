import Image from 'next/image';
import type { CSSProperties, ReactNode } from 'react';

import { cn } from '../ui/utils';
import {
  FEATURE_PANEL_BACKGROUND_STYLES,
  FEATURE_PANEL_COLORS,
  FEATURE_PANEL_INK_COLORS,
  FeaturePanelBackgroundStyle,
  FeaturePanelColor,
  FeaturePanelInkColor,
} from './FeaturePanel.tokens';

export {
  FEATURE_PANEL_BACKGROUND_STYLES,
  FEATURE_PANEL_COLORS,
  FEATURE_PANEL_INK_COLORS,
  FeaturePanelBackgroundStyle,
  FeaturePanelColor,
  FeaturePanelInkColor,
} from './FeaturePanel.tokens';

type PanelChromeProps = {
  overlayClassName?: string;
};

type FeaturePanelBackgroundLayer = {
  src: string;
  className: string;
};

type FeaturePanelPropsBase = PanelChromeProps & {
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
  color?: FeaturePanelColor;
  inkColor?: FeaturePanelInkColor;
  background?: CSSProperties['background'];
  backgroundStyle?: FeaturePanelBackgroundStyle;
  backgroundClassName?: string;
  image?: ReactNode;
  imagePosition?: 'bleed' | 'center' | 'inset' | 'bottom';
  reverse?: boolean;
  panelSize?: 'sm' | 'md' | 'lg' | 'xl';
  imageContainerClassName?: string;
  backgroundContent?: ReactNode;
  backgroundContentClassName?: string;
  backgroundImageSrc?: string;
  backgroundImageAlt?: string;
  backgroundImageClassName?: string;
  backgroundImagePriority?: boolean;
};

type FeaturePanelColorProps = FeaturePanelPropsBase & {
  imageSrc?: never;
  imageAlt?: never;
  imageClassName?: never;
  priority?: never;
};

type FeaturePanelImageProps = FeaturePanelPropsBase & {
  imageSrc: string;
  imageAlt: string;
  imageClassName?: string;
  priority?: boolean;
};

export type FeaturePanelProps = FeaturePanelColorProps | FeaturePanelImageProps;

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
  NonNullable<FeaturePanelPropsBase['imagePosition']>,
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

function PanelChrome({ overlayClassName }: PanelChromeProps) {
  return overlayClassName ? (
    <div className={cn('absolute inset-0', overlayClassName)} />
  ) : null;
}

function BackgroundStyleLayer({
  layer,
  className,
}: {
  layer: FeaturePanelBackgroundLayer;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0',
        className
      )}
    >
      <Image
        src={layer.src}
        alt=""
        fill
        className={cn(layer.className)}
        sizes="100vw"
      />
    </div>
  );
}

function ColorImageLayer({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    <div className="pointer-events-none absolute inset-0">
      <Image
        src={src}
        alt=""
        fill
        className={cn('object-cover', className)}
        sizes="100vw"
      />
    </div>
  );
}

function hexToRgb(hex: string) {
  const cleanHex = hex.replace('#', '');
  const value =
    cleanHex.length === 3
      ? cleanHex
          .split('')
          .map((digit) => `${digit}${digit}`)
          .join('')
      : cleanHex;

  return {
    r: parseInt(value.slice(0, 2), 16),
    g: parseInt(value.slice(2, 4), 16),
    b: parseInt(value.slice(4, 6), 16),
  };
}

function brightenHex(hex: string, factor: number) {
  const { r, g, b } = hexToRgb(hex);

  return `rgb(${Math.min(Math.round(r * factor), 255)}, ${Math.min(
    Math.round(g * factor),
    255
  )}, ${Math.min(Math.round(b * factor), 255)})`;
}

function getPerceivedLuminance(hex: string) {
  const { r, g, b } = hexToRgb(hex);

  return Math.round((r * 299 + g * 587 + b * 114) / 1000);
}

export function FeaturePanel(props: FeaturePanelProps) {
  const isImagePanel = typeof props.imageSrc === 'string';
  const color = props.color ?? FeaturePanelColor.Navy;
  const inkColor = props.inkColor ?? FeaturePanelInkColor.Cream;
  const colorDefinition = FEATURE_PANEL_COLORS[color] as {
    background: string;
    imageSrc?: string;
    imageClassName?: string;
  };
  const inkColorDefinition = FEATURE_PANEL_INK_COLORS[inkColor];
  const backgroundColor = colorDefinition.background;
  const background = props.background ?? backgroundColor;
  const accentColor = brightenHex(backgroundColor, 1.9);
  const isLightBackground = getPerceivedLuminance(backgroundColor) > 140;
  const backgroundLayer = props.backgroundStyle
    ? FEATURE_PANEL_BACKGROUND_STYLES[props.backgroundStyle]
    : null;

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
      data-light-background={isLightBackground ? 'true' : undefined}
      style={
        {
          '--feature-panel-bg': backgroundColor,
          '--feature-panel-ink': inkColorDefinition.color,
          '--feature-panel-accent': accentColor,
          '--feature-panel-u-bg': backgroundColor,
          '--feature-panel-u-ink': inkColorDefinition.color,
          '--feature-panel-navy': accentColor,
        } as CSSProperties
      }
    >
      {isImagePanel ? (
        <Image
          src={props.imageSrc}
          alt={props.imageAlt ?? ''}
          fill
          priority={props.priority}
          className={cn('object-cover', props.imageClassName)}
        />
      ) : (
        <>
          <div className="absolute inset-0" style={{ background }} />
          {props.backgroundImageSrc ? (
            <div className="pointer-events-none absolute inset-0">
              <Image
                src={props.backgroundImageSrc}
                alt={props.backgroundImageAlt ?? ''}
                fill
                priority={props.backgroundImagePriority}
                className={cn(
                  'object-cover',
                  props.backgroundImageClassName
                )}
                sizes="100vw"
              />
            </div>
          ) : null}
          {colorDefinition.imageSrc && (
            <ColorImageLayer
              src={colorDefinition.imageSrc}
              className={colorDefinition.imageClassName}
            />
          )}
        </>
      )}

      {props.backgroundContent ? (
        <div
          className={cn(
            'absolute inset-0 overflow-hidden',
            props.backgroundContentClassName
          )}
        >
          {props.backgroundContent}
        </div>
      ) : null}

      {backgroundLayer && (
        <BackgroundStyleLayer
          layer={backgroundLayer}
          className={props.backgroundClassName}
        />
      )}

      <PanelChrome overlayClassName={props.overlayClassName} />

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
