import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { ArrowRightCircleIcon } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from './ui/utils';

export type ImageCtaBlockProps = {
  img: string | StaticImageData;
  title: ReactNode;
  sub: ReactNode;
  ctaText: string;
  link: string;
  alt?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function ImageCtaBlock({
  img,
  title,
  sub,
  ctaText,
  link,
  alt,
  className,
  imageClassName,
  priority,
}: ImageCtaBlockProps) {
  return (
    <article
      className={cn(
        'grid h-full min-w-0 grid-rows-[auto_1fr_auto] gap-5 text-left',
        className
      )}
    >
      <div className="relative aspect-[1.68/1] w-full overflow-hidden rounded-md bg-surface-container">
        <Image
          src={img}
          alt={alt ?? (typeof title === 'string' ? title : '')}
          fill
          priority={priority}
          className={cn(
            'pointer-events-none object-cover object-center',
            imageClassName
          )}
          sizes="(min-width: 1024px) 42vw, (min-width: 768px) 50vw, 100vw"
        />
      </div>

      <div className="flex min-w-0 flex-col gap-4">
        <h3 className="w-full text-3xl font-bold leading-[1.12] text-on-surface md:text-[1.7rem] lg:text-3xl">
          {title}
        </h3>
        <p className="max-w-[38ch] text-lg leading-relaxed text-on-surface md:text-base lg:text-lg">
          {sub}
        </p>
      </div>

      <Link
        href={link}
        className="inline-flex w-fit items-center gap-2 text-lg font-bold text-on-surface transition-colors hover:text-zonda-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vitality-yellow focus-visible:ring-offset-4 focus-visible:ring-offset-background"
      >
        <ArrowRightCircleIcon className="size-6 shrink-0" aria-hidden="true" />
        <span>{ctaText}</span>
      </Link>
    </article>
  );
}

export default ImageCtaBlock;
