import Image from 'next/image';
import type { ReactNode } from 'react';

import { cn } from './ui/utils';

export enum FeaturePanelTone {
  DarkBlue = 'dark-blue',
  Blue = 'blue',
  Yellow = 'yellow',
  Green = 'green',
  Purple = 'purple',
  LightBlue = 'light-blue',
  LightYellow = 'light-yellow',
  SolidGrey = 'solid-grey',
  SolidNeutral = 'solid-neutral',
  SolidBlue = 'solid-blue',
  SolidYellow = 'solid-yellow',
  SolidGreen = 'solid-green',
  Black = 'black',
}

export enum FeaturePanelBackgroundStyling {
  Left = 'LEFT',
  Right = 'RIGHT',
  Full = 'FULL',
}

const toneMovementImages: Partial<Record<FeaturePanelTone, string>> = {
  [FeaturePanelTone.DarkBlue]: '/bg/movement/indigo.png',
  [FeaturePanelTone.Blue]: '/bg/movement/blue.png',
  [FeaturePanelTone.Yellow]: '/bg/movement/yellow.png',
  [FeaturePanelTone.Green]: '/bg/movement/emerald.png',
  [FeaturePanelTone.Purple]: '/bg/movement/purple.webp',
  [FeaturePanelTone.LightBlue]: '/bg/movement/light-blue.webp',
  [FeaturePanelTone.LightYellow]: '/bg/movement/boca.png',
};

const toneBackgrounds: Partial<Record<FeaturePanelTone, string>> = {
  [FeaturePanelTone.SolidGrey]: `#F5F5F5`,
  [FeaturePanelTone.SolidNeutral]: `#232634`,
  [FeaturePanelTone.SolidBlue]: `#226FFD`,
  [FeaturePanelTone.SolidYellow]: `#f7c302`,
  [FeaturePanelTone.SolidGreen]: `#34D399`,
};

type SharedProps = {
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
  overlayClassName?: string;
  backgroundStyling?: FeaturePanelBackgroundStyling;
  backgroundStylingClassName?: string;
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
  [FeaturePanelBackgroundStyling.Left]: '/misc/background-left.png',
  [FeaturePanelBackgroundStyling.Right]: '/misc/background-right.png',
  [FeaturePanelBackgroundStyling.Full]: '/misc/background.png',
};

export function FeaturePanel(props: FeaturePanelProps) {
  const isImagePanel = 'imageSrc' in props;
  const tone = !isImagePanel
    ? (props.tone ?? FeaturePanelTone.Blue)
    : FeaturePanelTone.Blue;
  const backgroundStyling = props.backgroundStyling;
  const movementImageSrc = !isImagePanel ? toneMovementImages[tone] : undefined;
  const toneBackground = !isImagePanel ? toneBackgrounds[tone] : undefined;

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-md shadow-[0_28px_90px_-36px_rgba(8,18,46,0.45)]',
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

      <div className={cn('absolute inset-0', props.overlayClassName)} />

      <div className={cn('relative z-10 h-full', props.contentClassName)}>
        {props.children}
      </div>
    </div>
  );
}

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
