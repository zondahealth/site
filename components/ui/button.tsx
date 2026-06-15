import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from './utils';

const buttonVariants = cva(
  'inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border [font-family:var(--font-geist-sans)] text-sm font-semibold tracking-[0.01em] transition-[box-shadow,background,background-color,filter,color,border-color] duration-200 ease-out outline-none ring-offset-[color:var(--background)] disabled:pointer-events-none disabled:opacity-45 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:ring-2 focus-visible:ring-[color:rgba(234,234,0,0.38)] focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        primary:
          'border-[color:rgba(234,234,0,0.4)] bg-[color:var(--zonda-yellow)] px-5 text-[color:var(--ds-on-tertiary-fixed)] shadow-[0_16px_36px_-24px_rgba(234,234,0,0.8)] hover:shadow-[0_0_24px_6px_rgba(234,234,0,0.16),0_18px_40px_-24px_rgba(234,234,0,0.56)] hover:brightness-[1.03] active:brightness-[0.97]',
        outline:
          'border-[color:rgba(34,111,253,0.14)] bg-[color:rgba(252,252,255,0.92)] text-[color:var(--ds-on-primary-fixed-variant)] shadow-[0_14px_34px_-28px_rgba(17,27,43,0.18)] hover:border-[color:rgba(34,111,253,0.28)] hover:bg-[color:rgba(218,226,255,0.52)] hover:text-[color:var(--ds-on-surface)]',
        ghost:
          'border-transparent text-[color:var(--ds-on-primary-fixed-variant)] hover:bg-[color:rgba(92,140,255,0.08)] hover:text-[color:var(--ds-on-surface)]',
        subtle:
          'border-[color:rgba(92,140,255,0.12)] bg-[color:rgba(92,140,255,0.08)] text-[color:var(--ds-on-primary-fixed-variant)] hover:bg-[color:rgba(92,140,255,0.14)] hover:text-[color:var(--ds-on-surface)]',
        link: 'h-auto rounded-none border-transparent px-0 py-0 text-[color:var(--ds-on-primary-fixed-variant)] shadow-none hover:text-[color:var(--ds-primary-container)]',
      },
      size: {
        sm: 'h-10 px-4',
        default: 'h-12 text-[0.95rem]',
        lg: 'h-14 px-7 text-base',
        icon: 'size-12 p-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
