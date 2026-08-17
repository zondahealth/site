import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/components/ui/utils';
import Glow, { ORBIT_BORDER_COLORS } from '@/components/ui/glow/Glow';
import styles from './button.module.css';

const buttonVariants = cva(
  'inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-transparent font-semibold tracking-[-0.01em] transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none disabled:pointer-events-none disabled:opacity-45 focus-visible:ring-2 focus-visible:ring-[#eaea00] focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-px [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground shadow-[0_1px_2px_rgba(8,40,97,0.18)] hover:brightness-90',
        black: `border-2 text-[#f8f9ff] ${styles.black}`,
        accent:
          'bg-accent text-accent-foreground shadow-[inset_0_1px_0_rgba(255,255,210,0.62)] hover:brightness-[1.04] hover:shadow-[inset_0_1px_0_rgba(255,255,210,0.74),0_0_28px_8px_rgba(234,234,0,0.4)] active:brightness-[0.96]',
        outline:
          'border-secondary bg-transparent text-secondary hover:bg-muted',
        ghost: 'bg-transparent text-primary hover:bg-muted',
        inverse: 'bg-card text-primary hover:bg-muted',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        default: 'h-[3.2rem] px-7 text-base',
        lg: 'h-14 px-8 text-base',
        icon: 'size-11 p-0',
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

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  const isOrbit = variant === 'black';

  const button = (
    <Comp
      data-slot="v2-button"
      className={cn(buttonVariants({ variant, size, className: isOrbit ? undefined : className }))}
      {...props}
    />
  );

  if (!isOrbit) {
    return button;
  }

  return (
    <Glow
      className={cn('inline-flex', className)}
      colors={ORBIT_BORDER_COLORS}
      radius={999}
      // Buttons need a tight highlight rather than the broad ambient glow
      // used by cards and banners.
      spread={4}
      blur={7}
      opacity={0.5}
      showOnHover
      glow={!props.disabled}
    >
      {button}
    </Glow>
  );
}

export { Button, buttonVariants, type ButtonProps };
