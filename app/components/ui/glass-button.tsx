import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from './utils';

const glassButtonVariants = cva(
  "inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-lg text-xs font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-3.5 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent relative overflow-hidden backdrop-blur-md border border-white/30 shadow-lg hover:shadow-xl active:scale-95 transform-gpu cursor-pointer",
  {
    variants: {
      variant: {
        default: 'bg-white/15 hover:bg-white/25 text-white border-white/30',
        blue: 'bg-blue-500/15 hover:bg-blue-500/25 text-blue-100 border-blue-400/30',
        purple:
          'bg-purple-500/15 hover:bg-purple-500/25 text-purple-100 border-purple-400/30',
        green:
          'bg-green-500/15 hover:bg-green-500/25 text-green-100 border-green-400/30',
        orange:
          'bg-orange-500/15 hover:bg-orange-500/25 text-orange-100 border-orange-400/30',
        pink: 'bg-pink-500/15 hover:bg-pink-500/25 text-pink-100 border-pink-400/30',
        dark: 'bg-black/15 hover:bg-black/25 text-white border-white/15',
        light: 'bg-white/25 hover:bg-white/35 text-gray-800 border-white/40',
      },
      size: {
        sm: 'h-7 px-2 py-1 text-xs rounded-lg',
        default: 'h-8 px-2.5 py-1.5 text-xs rounded-lg',
        lg: 'h-10 px-3 py-2 text-sm rounded-lg',
        xl: 'h-12 px-4 py-2.5 text-base rounded-lg',
        icon: 'size-8 rounded-lg',
      },
      glow: {
        none: '',
        subtle: 'shadow-[0_0_20px_rgba(255,255,255,0.1)]',
        medium: 'shadow-[0_0_30px_rgba(255,255,255,0.2)]',
        strong: 'shadow-[0_0_40px_rgba(255,255,255,0.3)]',
        blue: 'shadow-[0_0_30px_rgba(59,130,246,0.3)]',
        purple: 'shadow-[0_0_30px_rgba(147,51,234,0.3)]',
        green: 'shadow-[0_0_30px_rgba(34,197,94,0.3)]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      glow: 'subtle',
    },
  }
);

interface GlassButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof glassButtonVariants> {
  asChild?: boolean;
  children: React.ReactNode;
}

const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  (
    { className, variant, size, glow, asChild = false, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref}
        data-slot="glass-button"
        className={cn(glassButtonVariants({ variant, size, glow, className }))}
        {...props}
      >
        {/* Liquid glass effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-inherit" />

        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700 ease-out rounded-inherit" />

        {/* Content */}
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </Comp>
    );
  }
);

GlassButton.displayName = 'GlassButton';

export { GlassButton, glassButtonVariants };
export type { GlassButtonProps };
