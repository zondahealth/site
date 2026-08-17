import * as React from 'react';

import { cn } from '@/components/ui/utils';

type BannerVariant = 'default' | 'muted' | 'dark';

const bannerVariants: Record<BannerVariant, string> = {
  default: 'border-border bg-card text-card-foreground',
  muted: 'border-border bg-muted text-foreground',
  dark: 'border-primary bg-primary text-primary-foreground',
};

type BannerProps = React.ComponentProps<'section'> & {
  variant?: BannerVariant;
  /** A public asset path or URL rendered as a cover background. */
  backgroundImage?: string;
  backgroundPosition?: React.CSSProperties['backgroundPosition'];
};

function Banner({
  className,
  variant = 'default',
  backgroundImage,
  backgroundPosition = 'center',
  children,
  style,
  ...props
}: BannerProps) {
  return (
    <section
      data-slot="v2-banner"
      data-variant={variant}
      className={cn(
        'relative overflow-hidden rounded-lg border bg-cover bg-no-repeat p-6 sm:p-8',
        bannerVariants[variant],
        className
      )}
      style={{
        ...style,
        ...(backgroundImage && {
          backgroundImage: `url("${backgroundImage}")`,
          backgroundPosition,
        }),
      }}
      {...props}
    >
      {children}
    </section>
  );
}

export { Banner, type BannerProps, type BannerVariant };
