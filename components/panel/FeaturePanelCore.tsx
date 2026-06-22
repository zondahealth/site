import Image from 'next/image';
import type { ReactNode } from 'react';

import { cn } from '../ui/utils';

export type FeaturePanelBackground = 'blue' | 'yellow' | 'white';

type PanelChromeProps = {
  overlayClassName?: string;
};

type FeaturePanelPropsBase = PanelChromeProps & {
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
  background?: FeaturePanelBackground;
  image?: ReactNode;
  imagePosition?: 'bleed' | 'center' | 'inset' | 'bottom';
  reverse?: boolean;
  panelSize?: 'sm' | 'md' | 'lg' | 'xl';
  imageContainerClassName?: string;
  backgroundContent?: ReactNode;
  backgroundContentClassName?: string;
};

type FeaturePanelContentProps = FeaturePanelPropsBase & {
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

export type FeaturePanelProps =
  | FeaturePanelContentProps
  | FeaturePanelImageProps;

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

export function FeaturePanel(props: FeaturePanelProps) {
  const isImagePanel = typeof props.imageSrc === 'string';
  const backgroundSrc = props.background
    ? `/assets/shared/bg/card/${props.background}.png`
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
    >
      {isImagePanel ? (
        <Image
          src={props.imageSrc}
          alt={props.imageAlt ?? ''}
          fill
          priority={props.priority}
          className={cn('object-cover', props.imageClassName)}
        />
      ) : backgroundSrc ? (
        <Image
          src={backgroundSrc}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      ) : null}

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
