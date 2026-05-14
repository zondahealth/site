import Image from 'next/image';
import type { ReactNode } from 'react';

import { FeaturePanel, FeaturePanelTone } from './FeaturePanel';
import { cn } from './ui/utils';

export type ImageSectionProps = {
  title: ReactNode;
  description?: ReactNode;
  image?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
  tone?: FeaturePanelTone;
  backgroundImage?: string;
  backgroundImageAlt?: string;
  backgroundImageClassName?: string;
  className?: string;
  contentClassName?: string;
  imageClassName?: string;
};

export function ImageSection({
  title,
  description,
  image,
  imageAlt,
  imagePosition = 'right',
  tone,
  backgroundImage,
  backgroundImageAlt,
  backgroundImageClassName,
  className,
  contentClassName,
  imageClassName,
}: ImageSectionProps) {
  const content = (
    <div
      className={cn(
        'flex min-w-0 flex-col items-center justify-end px-12 md:px-6 text-center md:items-start md:text-left space-y-4 py-6 md:py-6 sm:py-16',
        contentClassName
      )}
    >
      <h2 className="text-4xl md:text-3xl lg:text-4xl font-bold">{title}</h2>
      {description ? (
        <p className="md:text-md lg:text-md font-medium">{description}</p>
      ) : null}
    </div>
  );

  const imageContent = image ? (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative aspect-square w-full">
        <Image
          src={image}
          alt={imageAlt ?? (typeof title === 'string' ? title : '')}
          fill
          className={cn(
            'pointer-events-none object-contain object-center',
            imageClassName
          )}
          sizes="(min-width: 700px) 45vw, 96vw"
        />
      </div>
    </div>
  ) : null;

  const imagePanel = backgroundImage ? (
    <FeaturePanel
      imageSrc={backgroundImage}
      imageAlt={
        backgroundImageAlt ??
        imageAlt ??
        (typeof title === 'string' ? title : '')
      }
      imageClassName={cn(
        'object-cover object-center',
        backgroundImageClassName
      )}
      className="flex aspect-square min-h-0 w-full flex-1 flex-col rounded-md"
      contentClassName="flex items-center justify-center"
    >
      {imageContent}
    </FeaturePanel>
  ) : (
    <FeaturePanel
      tone={tone ?? FeaturePanelTone.White}
      className="flex aspect-square min-h-0 w-full flex-1 flex-col rounded-md"
      contentClassName="flex items-center justify-center"
    >
      {imageContent}
    </FeaturePanel>
  );

  return (
    <div
      className={cn(
        'layout-shell grid grid-cols-1 lg:gap-8 overflow-hidden rounded-md bg-white md:grid-cols-2',
        className
      )}
    >
      {imagePosition === 'left' ? (
        <>
          {imagePanel}
          {content}
        </>
      ) : (
        <>
          {content}
          {imagePanel}
        </>
      )}
    </div>
  );
}
