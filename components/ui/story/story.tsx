import * as React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { cn } from '@/components/ui/utils';

function StoryList({ className, ...props }: React.ComponentProps<'ul'>) {
  return (
    <ul
      data-slot="story-list"
      className={cn(
        'grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3',
        className
      )}
      {...props}
    />
  );
}

type StoryProps = Omit<React.ComponentProps<typeof Link>, "href"> & {
  href?: React.ComponentProps<typeof Link>["href"];
  itemClassName?: string;
};

function Story({
  className,
  itemClassName,
  children,
  href,
  ...props
}: StoryProps) {
  const classes = cn("group flex flex-col gap-3 outline-none", className);

  if (href == null || href === "" || href === "#") {
    return (
      <li data-slot="story-item" className={itemClassName}>
        <article data-slot="story" className={classes}>
          {children}
        </article>
      </li>
    );
  }

  return (
    <li data-slot="story-item" className={itemClassName}>
      <Link data-slot="story" href={href} className={classes} {...props}>
        {children}
      </Link>
    </li>
  );
}

function StoryMedia({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="story-media"
      className={cn(
        'relative aspect-video w-full overflow-hidden rounded-2xl bg-muted transition-[filter] duration-300',
        'group-hover:brightness-[0.97]',
        'group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-background',
        className
      )}
      {...props}
    />
  );
}

function StoryTitle({ className, ...props }: React.ComponentProps<'h3'>) {
  return (
    <h3
      data-slot="story-title"
      className={cn(
        'font-display text-lg font-semibold leading-snug tracking-tight text-foreground sm:text-xl',
        className
      )}
      {...props}
    />
  );
}

function StoryCTA({ className, children, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="story-cta"
      className={cn(
        'inline-flex items-center gap-2.5 self-start text-sm font-medium text-foreground',
        className
      )}
      {...props}
    >
      <span className="inline-flex size-6 items-center justify-center rounded-full border border-foreground/80 transition-colors duration-200 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
        <ArrowRight
          aria-hidden="true"
          className="size-3.5 transition-transform duration-200 group-hover:translate-x-px"
          strokeWidth={2}
        />
      </span>
      {children}
    </span>
  );
}

export { StoryList, Story, StoryMedia, StoryTitle, StoryCTA, type StoryProps };
