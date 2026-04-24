import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from './utils';

const buttonVariants = cva(
  'inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border-transparent [font-family:var(--font-geist-sans)] text-sm font-semibold tracking-[0.01em] transition-[box-shadow,background,background-color,filter,color,border-color] duration-200 ease-out outline-none ring-offset-white disabled:pointer-events-none disabled:opacity-45 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:ring-2 focus-visible:ring-zonda-blue/30 focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        primary:
          'px-5 bg-gradient-to-br from-[var(--zonda-blue)] to-[var(--zonda-blue-dark)] text-white shadow-[0_18px_40px_-22px_rgba(5,62,170,0.9)] hover:from-[var(--zonda-yellow)] hover:to-[#ddb204] hover:text-[var(--zonda-dark)] hover:shadow-[0_0_0_1px_rgba(247,195,2,0.35),0_20px_44px_-16px_rgba(247,195,2,0.5)] hover:brightness-[1.02] active:brightness-[0.98]',
        outline:
          'border-zonda-blue/15 bg-white/85 text-zonda-blue-dark shadow-[0_14px_34px_-26px_rgba(5,62,170,0.7)] hover:border-zonda-blue/35 hover:bg-zonda-blue/5 hover:text-zonda-blue',
        ghost:
          'text-zonda-blue-dark hover:bg-zonda-blue/8 hover:text-zonda-blue',
        subtle:
          'bg-zonda-blue/8 text-zonda-blue-dark hover:bg-zonda-blue/12 hover:text-zonda-blue-dark',
        link: 'h-auto rounded-none border-transparent px-0 py-0 text-zonda-blue-dark shadow-none hover:text-zonda-blue',
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
