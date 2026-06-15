import Image from 'next/image';
import type { ReactNode } from 'react';

import { cn } from './ui/utils';

export type CaseStudyCardProps = {
  image: string;
  imageAlt?: string;
  className?: string;
  imageClassName?: string;
  children: ReactNode;
};

export function CaseStudyCard({
  image,
  imageAlt = '',
  className,
  imageClassName,
  children,
}: CaseStudyCardProps) {
  return (
    <div className={cn('flex min-w-0 flex-1 flex-col gap-5', className)}>
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className={cn('object-cover object-center', imageClassName)}
          sizes="(min-width: 1024px) 45vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3">{children}</div>
    </div>
  );
}
