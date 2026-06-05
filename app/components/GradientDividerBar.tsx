import { cn } from './ui/utils';

type GradientDividerBarVariant = 'dynamic' | 'signal' | 'cool';

type GradientDividerBarProps = {
  variant?: GradientDividerBarVariant;
  className?: string;
};

const gradientDividerBarVariants: Record<GradientDividerBarVariant, string> = {
  dynamic:
    'bg-[linear-gradient(90deg,rgba(34,111,253,0.96)_0%,rgba(68,183,255,0.98)_18%,rgba(96,220,184,0.96)_38%,rgba(234,234,0,0.92)_56%,rgba(113,156,255,0.98)_76%,rgba(28,94,218,0.96)_100%)] shadow-[0_-1px_0_rgba(248,250,255,0.2),0_-10px_26px_-22px_rgba(96,220,184,0.62)]',
  signal:
    'bg-[linear-gradient(90deg,rgba(14,60,117,0.98)_0%,rgba(34,111,253,0.98)_24%,rgba(234,234,0,0.94)_46%,rgba(205,205,0,0.9)_58%,rgba(92,140,255,0.98)_78%,rgba(14,60,117,0.98)_100%)] shadow-[0_-1px_0_rgba(248,250,255,0.18),0_-10px_26px_-22px_rgba(234,234,0,0.7)]',
  cool:
    'bg-[linear-gradient(90deg,rgba(8,40,97,0.98)_0%,rgba(34,111,253,0.98)_20%,rgba(82,184,255,0.96)_42%,rgba(122,230,213,0.92)_61%,rgba(92,140,255,0.98)_82%,rgba(21,27,43,0.96)_100%)] shadow-[0_-1px_0_rgba(248,250,255,0.16),0_-10px_26px_-22px_rgba(82,184,255,0.58)]',
};

export function GradientDividerBar({
  variant = 'dynamic',
  className,
}: GradientDividerBarProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none relative z-20 h-1.5 w-full shrink-0 sm:h-2',
        gradientDividerBarVariants[variant],
        className
      )}
    />
  );
}
