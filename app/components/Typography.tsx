import React, { CSSProperties, HTMLAttributes } from 'react';
import clsx from 'clsx';

export enum HeadingVariant {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
}

interface HeadingProps {
  variant?: HeadingVariant;
  style?: CSSProperties | undefined;
  children: React.ReactNode;
  className?: string;
}

/**
 * Heading — renders h1–h4 depending on `variant`
 */
export const Heading: React.FC<HeadingProps> = ({
  variant = HeadingVariant.H1,
  children,
  style,
  className,
}) => {
  const Tag = variant;
  const base = 'font-bold';
  const styles = {
    h1: 'text-4xl lg:text-5xl xl:text-6xl',
    h2: 'text-2xl lg:text-3xl xl:text-4xl',
    h3: 'text-xl lg:text-2xl xl:text-3xl',
    h4: 'text-lg lg:text-xl xl:text-2xl',
  };

  return (
    <Tag style={style} className={clsx(base, styles[variant], className)}>
      {children}
    </Tag>
  );
};

/**
 * Subtitle — smaller than headings, bolder than body
 */
export const Subtitle: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => (
  <p className={clsx('text-lg font-medium', className)}>{children}</p>
);

/**
 * Description — muted secondary text
 */
export const Description: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => (
  <p className={clsx('text-base', className)}>{children}</p>
);

/**
 * Body — default paragraph text
 */
export const Body: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => (
  <p className={clsx('text-base', className)}>{children}</p>
);

/**
 * SmallText — tiny text for captions or notes
 */
export const SmallText: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => (
  <p className={clsx('text-sm', className)}>{children}</p>
);
