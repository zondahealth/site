import Image from 'next/image';

import { cn } from './ui/utils';

type StripProps = {
  className?: string;
  imageClassName?: string;
  src?: string;
  alt?: string;
  priority?: boolean;
  heightClassName?: string;
};

export function Strip({
  className,
  imageClassName,
  src = '/assets/shared/images/zstrip.png',
  alt = '',
  priority = false,
  heightClassName = 'h-1 sm:h-2',
}: StripProps) {
  return (
    <div
      aria-hidden={alt ? undefined : 'true'}
      className={cn(
        'relative w-full shrink-0 overflow-hidden',
        heightClassName,
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={cn('object-cover object-center', imageClassName)}
        sizes="100vw"
      />
    </div>
  );
}
