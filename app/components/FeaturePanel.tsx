import Image from 'next/image';
import type { ReactNode } from 'react';

import {
  BACKGROUNDS,
  extractSolidColor,
  SPOTLIGHT_GRADIENTS,
} from './ui/colors';
import type { SpotlightSize } from './ui/colors';
import { cn } from './ui/utils';

export enum FeaturePanelTone {
  DarkBlue = 'dark-blue',
  Blue = 'blue',
  BlueLines = 'blue-lines',
  DarkBlueLines = 'dark-blue-lines',
  GradientBlue = 'gradient-blue',
  GradientDeepBlue = 'gradient-deep-blue',
  GradientVitalityYellow = 'gradient-vitality-yellow',
  GradientGreen = 'gradient-green',
  Yellow = 'yellow',
  YellowBlueLines = 'yellow-blue-lines',
  Green = 'green',
  GreenLines = 'green-lines',
  MalLightGreen = 'mal-light-green',
  Purple = 'purple',
  LightBlue = 'light-blue',
  MapBlack = 'map-black',
  MapGreen = 'map-green',
  MapPlayful = 'map-playful',
  SolidGrey = 'solid-grey',
  SolidNeutral = 'solid-neutral',
  SolidBlue = 'solid-blue',
  SolidYellow = 'solid-yellow',
  SolidLightYellow = 'solid-light-yellow',
  SolidGreen = 'solid-green',
  SolidDarkBlue = 'solid-dark-blue',
  SolidDarkGreen = 'solid-dark-green',
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
  [FeaturePanelTone.BlueLines]: '/bg/movement/blue-lines.png',
  [FeaturePanelTone.DarkBlueLines]: '/bg/movement/dark-blue-lines.png',
  [FeaturePanelTone.Yellow]: '/bg/movement/yellow.png',
  [FeaturePanelTone.YellowBlueLines]: '/bg/movement/yellow-blue-lines.png',
  [FeaturePanelTone.Green]: '/bg/movement/green.png',
  [FeaturePanelTone.GreenLines]: '/bg/movement/green-lines.png',
  [FeaturePanelTone.MalLightGreen]: '/bg/movement/mal-light-green.png',
  [FeaturePanelTone.Purple]: '/bg/movement/purple.webp',
  [FeaturePanelTone.LightBlue]: '/bg/movement/light-blue.webp',
  [FeaturePanelTone.MapBlack]: '/bg/movement/map-black.png',
  [FeaturePanelTone.MapGreen]: '/bg/movement/map-green.png',
  [FeaturePanelTone.MapPlayful]: '/bg/movement/map-playful.png',
  [FeaturePanelTone.Lines]: '/bg/movement/blue-lines.png',
  [FeaturePanelTone.YellowLines]: '/bg/movement/yellow-blue-lines.png',
};

const toneColors: Partial<
  Record<
    FeaturePanelTone,
    {
      background?: string;
      spotlightColor: string;
    }
  >
> = {
  [FeaturePanelTone.Black]: {
    background: BACKGROUNDS.black,
    spotlightColor: BACKGROUNDS.black,
  },
  [FeaturePanelTone.MapBlack]: { spotlightColor: BACKGROUNDS.black },
  [FeaturePanelTone.GradientBlack]: {
    background: BACKGROUNDS['gradient-black'],
    spotlightColor: BACKGROUNDS.black,
  },
  [FeaturePanelTone.DarkBlue]: {
    spotlightColor: BACKGROUNDS['visual-darkblue'],
  },
  [FeaturePanelTone.DarkBlueLines]: {
    background: BACKGROUNDS.darkblue,
    spotlightColor: BACKGROUNDS['darkblue'],
  },
  [FeaturePanelTone.GradientDeepBlue]: {
    background: BACKGROUNDS['dark-blue'],
    spotlightColor: BACKGROUNDS['visual-darkblue'],
  },
  [FeaturePanelTone.SolidDarkBlue]: {
    background: BACKGROUNDS['solid-dark-blue'],
    spotlightColor: BACKGROUNDS['visual-darkblue'],
  },
  [FeaturePanelTone.Blue]: { spotlightColor: BACKGROUNDS.blue },
  [FeaturePanelTone.BlueLines]: { spotlightColor: BACKGROUNDS.blue },
  [FeaturePanelTone.SolidBlue]: {
    background: BACKGROUNDS.blue,
    spotlightColor: BACKGROUNDS.blue,
  },
  [FeaturePanelTone.GradientBlue]: {
    background: BACKGROUNDS['gradient-blue'],
    spotlightColor: BACKGROUNDS.blue,
  },
  [FeaturePanelTone.Lines]: { spotlightColor: BACKGROUNDS.blue },
  [FeaturePanelTone.WhiteLines]: { spotlightColor: BACKGROUNDS.blue },
  [FeaturePanelTone.Yellow]: { spotlightColor: BACKGROUNDS.yellow },
  [FeaturePanelTone.YellowLines]: { spotlightColor: BACKGROUNDS.yellow },
  [FeaturePanelTone.YellowBlueLines]: { spotlightColor: BACKGROUNDS.yellow },
  [FeaturePanelTone.SolidYellow]: {
    background: BACKGROUNDS.yellow,
    spotlightColor: BACKGROUNDS.yellow,
  },
  [FeaturePanelTone.GradientVitalityYellow]: {
    background: BACKGROUNDS['gradient-vitality-yellow'],
    spotlightColor: BACKGROUNDS.yellow,
  },
  [FeaturePanelTone.SolidLightYellow]: {
    background: BACKGROUNDS['light-yellow'],
    spotlightColor: BACKGROUNDS['light-yellow'],
  },
  [FeaturePanelTone.Green]: { spotlightColor: BACKGROUNDS.green },
  [FeaturePanelTone.GreenLines]: {
    spotlightColor: BACKGROUNDS['vitality-green'],
  },
  [FeaturePanelTone.MapGreen]: { spotlightColor: BACKGROUNDS.green },
  [FeaturePanelTone.MapPlayful]: { spotlightColor: BACKGROUNDS.green },
  [FeaturePanelTone.SolidGreen]: {
    background: BACKGROUNDS.green,
    spotlightColor: BACKGROUNDS.green,
  },
  [FeaturePanelTone.GradientGreen]: {
    background: BACKGROUNDS['gradient-green'],
    spotlightColor: BACKGROUNDS.green,
  },
  [FeaturePanelTone.SolidDarkGreen]: {
    background: BACKGROUNDS['dark-green'],
    spotlightColor: BACKGROUNDS['dark-green'],
  },
  [FeaturePanelTone.MalLightGreen]: {
    spotlightColor: BACKGROUNDS['vitality-green'],
  },
  [FeaturePanelTone.Purple]: { spotlightColor: BACKGROUNDS.purple },
  [FeaturePanelTone.LightBlue]: { spotlightColor: BACKGROUNDS['light-blue'] },
  [FeaturePanelTone.SolidGrey]: {
    background: BACKGROUNDS.grey,
    spotlightColor: BACKGROUNDS.grey,
  },
  [FeaturePanelTone.SolidNeutral]: {
    background: BACKGROUNDS.neutral,
    spotlightColor: BACKGROUNDS.neutral,
  },
  [FeaturePanelTone.White]: {
    background: BACKGROUNDS.white,
    spotlightColor: BACKGROUNDS.white,
  },
  [FeaturePanelTone.Transparent]: {
    background: BACKGROUNDS.transparent,
    spotlightColor: BACKGROUNDS.transparent,
  },
};

type BackgroundLighten = boolean | 'subtle' | 'medium' | 'strong';
type BackgroundDarken = boolean | 'subtle' | 'medium' | 'strong';

const backgroundLightenClasses: Record<
  Exclude<BackgroundLighten, boolean>,
  string
> = {
  subtle: 'bg-white/25',
  medium: 'bg-white/45',
  strong: 'bg-white/65',
};

const backgroundDarkenClasses: Record<
  Exclude<BackgroundDarken, boolean>,
  string
> = {
  subtle: 'bg-black/15',
  medium: 'bg-black/35',
  strong: 'bg-black/55',
};

type SharedProps = {
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
  overlayClassName?: string;
  lightenBackground?: BackgroundLighten;
  lightenBackgroundClassName?: string;
  darkenBackground?: BackgroundDarken;
  darkenBackgroundClassName?: string;
  spotlight?: SpotlightSize;
  spotlightColor?: string;
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
  [FeaturePanelBackgroundStyling.Map]: '/bg/movement/map-green.png',
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
    ? (props.tone ?? FeaturePanelTone.White)
    : FeaturePanelTone.White;
  const backgroundStyling = props.backgroundStyling;
  const movementImageSrc = !isImagePanel ? toneMovementImages[tone] : undefined;
  const toneColor = !isImagePanel ? toneColors[tone] : undefined;
  const toneBackground = toneColor?.background;
  const toneSpotlightColor = toneColor?.spotlightColor;
  const spotlightBackground =
    props.spotlight &&
    SPOTLIGHT_GRADIENTS[props.spotlight](
      props.spotlightColor ??
        toneSpotlightColor ??
        (toneBackground ? extractSolidColor(toneBackground) : '#000000')
    );
  const backgroundLighten =
    props.lightenBackground === true ? 'medium' : props.lightenBackground;
  const backgroundDarken =
    props.darkenBackground === true ? 'medium' : props.darkenBackground;

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

      {spotlightBackground ? (
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: spotlightBackground }}
        />
      ) : null}

      {backgroundLighten && (
        <div
          className={cn(
            'pointer-events-none absolute inset-0',
            backgroundLightenClasses[backgroundLighten],
            props.lightenBackgroundClassName
          )}
        />
      )}

      {backgroundDarken && (
        <div
          className={cn(
            'pointer-events-none absolute inset-0',
            backgroundDarkenClasses[backgroundDarken],
            props.darkenBackgroundClassName
          )}
        />
      )}

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
