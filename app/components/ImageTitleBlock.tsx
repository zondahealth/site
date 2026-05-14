import Image from 'next/image';
import type { ReactNode } from 'react';

import { cn } from './ui/utils';

export type ImageTitleBlockProps = {
  title: ReactNode;
  image: string;
  imageAlt?: string;
  className?: string;
  imageClassName?: string;
  imageWrapperClassName?: string;
  titleClassName?: string;
  priority?: boolean;
};

export function ImageTitleBlock({
  title,
  image,
  imageAlt,
  className,
  imageClassName,
  imageWrapperClassName,
  titleClassName,
  priority,
}: ImageTitleBlockProps) {
  return (
    <div className={cn('flex min-w-0 flex-col gap-4', className)}>
      <div
        className={cn(
          'relative aspect-square w-full overflow-hidden rounded-md',
          imageWrapperClassName
        )}
      >
        <Image
          src={image}
          alt={imageAlt ?? (typeof title === 'string' ? title : '')}
          fill
          priority={priority}
          className={cn(
            'pointer-events-none object-cover object-center',
            imageClassName
          )}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
      </div>
      <h3 className={cn('text-2xl font-bold', titleClassName)}>{title}</h3>
    </div>
  );
}
