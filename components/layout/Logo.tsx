import Image from "next/image";

import { cn } from "@/components/ui/utils";

const logos = {
  mark: {
    black: {
      src: "/assets/logos/black-logo.png",
      width: 541,
      height: 541,
    },
    yellow: {
      src: "/assets/logos/yellow-logo.png",
      width: 541,
      height: 541,
    },
    blue: {
      src: "/assets/logos/blue-logo.png",
      width: 541,
      height: 541,
    },
    "dark-blue": {
      src: "/assets/logos/dark-blue-logo.png",
      width: 541,
      height: 541,
    },
    dark: {
      src: "/assets/logos/dark-logo.png",
      width: 541,
      height: 541,
    },
    gray: {
      src: "/assets/logos/gray-logo.png",
      width: 541,
      height: 541,
    },
  },
  full: {
    black: {
      src: "/assets/logos/black-full-logo.png",
      width: 1825,
      height: 370,
    },
    white: {
      src: "/assets/logos/white-full-logo.png",
      width: 1825,
      height: 370,
    },
    blue: {
      src: "/assets/logos/blue-full-logo.png",
      width: 1825,
      height: 370,
    },
    yellow: {
      src: "/assets/logos/yellow-full-logo.png",
      width: 1825,
      height: 370,
    },
    brand: {
      src: "/assets/logos/full-logo.png",
      width: 1825,
      height: 370,
    },
  },
  orb: {
    light: {
      src: "/assets/logos/zonda-glowing-orb-light.png",
      width: 1254,
      height: 1254,
    },
    dark: {
      src: "/assets/logos/zonda-glowing-orb-dark.png",
      width: 1254,
      height: 1254,
    },
  },
} as const;

const defaultColors = {
  mark: { light: "black", dark: "yellow" },
  full: { light: "black", dark: "white" },
  orb: { light: "light", dark: "dark" },
} as const;

type Logos = typeof logos;
export type LogoVariant = keyof Logos;
export type LogoColor<V extends LogoVariant = LogoVariant> = keyof Logos[V];

type BaseLogoProps = {
  className?: string;
  /** Version for dark backgrounds. Ignored when `color` is set. */
  inverted?: boolean;
  priority?: boolean;
};

export type LogoProps =
  | (BaseLogoProps & { variant?: "mark"; color?: LogoColor<"mark"> })
  | (BaseLogoProps & { variant: "full"; color?: LogoColor<"full"> })
  | (BaseLogoProps & { variant: "orb"; color?: LogoColor<"orb"> });

type LogoAsset = { src: string; width: number; height: number };

function getLogo(variant: LogoVariant, color: string): LogoAsset {
  return (logos[variant] as Record<string, LogoAsset>)[color];
}

export function Logo({
  className,
  variant = "mark",
  color,
  inverted = false,
  priority = false,
}: LogoProps) {
  const theme = inverted ? "dark" : "light";
  const logo = getLogo(variant, color ?? defaultColors[variant][theme]);

  return (
    <Image
      src={logo.src}
      alt="zonda"
      width={logo.width}
      height={logo.height}
      priority={priority}
      className={cn(
        "shrink-0 object-contain",
        variant === "full" ? "h-7 w-auto" : "size-7",
        className
      )}
    />
  );
}
