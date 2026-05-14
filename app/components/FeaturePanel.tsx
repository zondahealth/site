import Image from 'next/image';
import type { ReactNode } from 'react';

import { cn } from './ui/utils';

export enum FeaturePanelTone {
  DarkBlue = 'dark-blue',
  Blue = 'blue',
  GradientBlue = 'gradient-blue',
  GradientDeepBlue = 'gradient-deep-blue',
  GradientVitalityYellow = 'gradient-vitality-yellow',
  GradientGreen = 'gradient-green',
  Yellow = 'yellow',
  Green = 'green',
  Purple = 'purple',
  LightBlue = 'light-blue',
  SolidGrey = 'solid-grey',
  SolidNeutral = 'solid-neutral',
  SolidBlue = 'solid-blue',
  SolidYellow = 'solid-yellow',
  SolidLightYellow = 'solid-light-yellow',
  SolidGreen = 'solid-green',
  GradientBlack = 'gradient-black',
  Black = 'black',
  White = 'white',
  Lines = 'lines',
  WhiteLines = 'white-lines',
  YellowLines = 'yellow-lines',
  Squares = 'squares',
  Transparent = 'transparent',
}

export enum FeaturePanelBackgroundStyling {
  Left = 'LEFT',
  Right = 'RIGHT',
  Lines = 'LINES',
  WhiteLines = 'WHITE_LINES',
  YellowLines = 'YELLOW_LINES',
  Full = 'FULL',
  Map = 'MAP',
  Squares = 'SQUARES',
}

const toneMovementImages: Partial<Record<FeaturePanelTone, string>> = {
  [FeaturePanelTone.Blue]: '/bg/movement/blue.png',
  [FeaturePanelTone.Yellow]: '/bg/movement/yellow.png',
  [FeaturePanelTone.Green]: '/bg/movement/green.png',
  [FeaturePanelTone.Purple]: '/bg/movement/purple.webp',
  [FeaturePanelTone.LightBlue]: '/bg/movement/light-blue.webp',
  [FeaturePanelTone.Lines]: '/bg/movement/lines.png',
  [FeaturePanelTone.Squares]: '/bg/movement/squares.png',
};

const toneBackgrounds: Partial<Record<FeaturePanelTone, string>> = {
  [FeaturePanelTone.GradientBlue]: `linear-gradient(135deg,rgb(19, 105, 211) 0%,rgb(10, 34, 214) 52%, #1467f4 100%)`,
  [FeaturePanelTone.GradientDeepBlue]: `linear-gradient(135deg, #10316f 0%, #082861 50%, #003daa 100%)`,
  [FeaturePanelTone.GradientVitalityYellow]: `linear-gradient(135deg, #dddd00 0%,rgb(209, 222, 28) 52%, #c2c200 100%)`,
  [FeaturePanelTone.GradientGreen]: `linear-gradient(135deg,rgb(7, 130, 66) 0%,rgb(21, 201, 96) 52%,rgb(5, 116, 75) 100%)`,
  [FeaturePanelTone.GradientBlack]: `linear-gradient(135deg,rgb(0, 0, 0) 0%,rgb(13, 2, 59) 52%, #1a1a1a 100%)`,
  [FeaturePanelTone.Black]: `#000000`,
  [FeaturePanelTone.White]: `#ffffff`,
  [FeaturePanelTone.SolidGrey]: `#f4f6fd`,
  [FeaturePanelTone.SolidNeutral]: `#edf1fb`,
  [FeaturePanelTone.SolidBlue]: `#004ed3`,
  [FeaturePanelTone.SolidYellow]: `#e6c800`, // darker, vibrant yellow that still allows white font
  [FeaturePanelTone.SolidGreen]: `#00a878`,
  [FeaturePanelTone.SolidLightYellow]: `#fff59d`,
  [FeaturePanelTone.Transparent]: `transparent`,
};

type SharedProps = {
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
  overlayClassName?: string;
  backgroundStyling?: FeaturePanelBackgroundStyling;
  backgroundStylingClassName?: string;

  // Custom background layer (any ReactNode, rendered absolute-fill behind content)
  backgroundImage?: ReactNode;
  backgroundImageClassName?: string;

  // Two-column layout (activated when `image` is provided)
  image?: ReactNode;
  imagePosition?: 'bleed' | 'center' | 'inset' | 'bottom';
  reverse?: boolean;
  panelSize?: 'sm' | 'md' | 'lg' | 'xl';
  imageContainerClassName?: string;
};

type TonePanelProps = SharedProps & {
  tone?: FeaturePanelTone;
  imageSrc?: never;
  imageAlt?: never;
  imageClassName?: never;
  priority?: never;
};

type ImagePanelProps = SharedProps & {
  imageSrc: string;
  imageAlt: string;
  imageClassName?: string;
  priority?: boolean;
  tone?: never;
};

export type FeaturePanelProps = TonePanelProps | ImagePanelProps;

const backgroundStylingImages: Record<FeaturePanelBackgroundStyling, string> = {
  [FeaturePanelBackgroundStyling.Left]: '/bg/styling/background-left.png',
  [FeaturePanelBackgroundStyling.Right]: '/bg/styling/background-right.png',
  [FeaturePanelBackgroundStyling.Full]: '/bg/styling/background.png',
  [FeaturePanelBackgroundStyling.Map]: '/bg/styling/map.png',
  [FeaturePanelBackgroundStyling.Lines]: '/bg/styling/lines.png',
  [FeaturePanelBackgroundStyling.WhiteLines]: '/bg/styling/white-lines.png',
  [FeaturePanelBackgroundStyling.YellowLines]: '/bg/styling/yellow-lines.png',
  [FeaturePanelBackgroundStyling.Squares]: '/bg/styling/squares.png',
};

/* ── Two-column layout constants ── */

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
  NonNullable<SharedProps['imagePosition']>,
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

/* ── Component ── */

function FeaturePanelRoot(props: FeaturePanelProps) {
  const isImagePanel = 'imageSrc' in props;
  const tone = !isImagePanel
    ? (props.tone ?? FeaturePanelTone.Blue)
    : FeaturePanelTone.Blue;
  const backgroundStyling = props.backgroundStyling;
  const movementImageSrc = !isImagePanel ? toneMovementImages[tone] : undefined;
  const toneBackground = !isImagePanel ? toneBackgrounds[tone] : undefined;

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
        hasImageSlot && panelSizes[props.panelSize ?? 'md'],
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
        <>
          {toneBackground && (
            <div
              className="absolute inset-0"
              style={{ background: toneBackground }}
            />
          )}
          {movementImageSrc && (
            <Image
              src={movementImageSrc}
              alt=""
              fill
              aria-hidden="true"
              className="object-cover"
            />
          )}
        </>
      )}

      {props.backgroundImage && (
        <div className={cn('absolute inset-0', props.backgroundImageClassName)}>
          {props.backgroundImage}
        </div>
      )}

      {backgroundStyling ? (
        <div
          className={cn(
            'pointer-events-none absolute inset-0 opacity-52 mix-blend-screen',
            props.backgroundStylingClassName
          )}
        >
          <Image
            src={backgroundStylingImages[backgroundStyling]}
            alt=""
            fill
            aria-hidden="true"
            className="object-cover"
          />
        </div>
      ) : null}

      {props.overlayClassName && (
        <div className={cn('absolute inset-0', props.overlayClassName)} />
      )}

      {hasImageSlot && isBottom ? (
        /* Vertical stack: content top, image bleeding from bottom */
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
        /* Horizontal two-column: content + image side by side */
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

type FeaturePanelComponent = typeof FeaturePanelRoot & {
  GRADIENT_BLUE: FeaturePanelTone;
  GRADIENT_DEEP_BLUE: FeaturePanelTone;
  GRADIENT_VITALITY_YELLOW: FeaturePanelTone;
};

export const FeaturePanel: FeaturePanelComponent = Object.assign(
  FeaturePanelRoot,
  {
    GRADIENT_BLUE: FeaturePanelTone.GradientBlue,
    GRADIENT_DEEP_BLUE: FeaturePanelTone.GradientDeepBlue,
    GRADIENT_VITALITY_YELLOW: FeaturePanelTone.GradientVitalityYellow,
  }
);

type FeaturePanelSquareProps = FeaturePanelProps & {
  size?: 'sm' | 'md' | 'lg';
};

const squareSizes: Record<
  NonNullable<FeaturePanelSquareProps['size']>,
  string
> = {
  sm: 'w-36 sm:w-40 lg:w-44',
  md: 'w-44 sm:w-52 lg:w-60',
  lg: 'w-52 sm:w-60 lg:w-72',
};

export function FeaturePanelSquare({
  size = 'md',
  className,
  ...props
}: FeaturePanelSquareProps) {
  return (
    <FeaturePanel
      {...props}
      className={cn('aspect-square', squareSizes[size], className)}
    />
  );
}
