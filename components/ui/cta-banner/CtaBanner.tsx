import type { ComponentProps, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { isLiveRoute } from "@/lib/navigation";
import { Button } from "@/components/ui/button/button";
import Glow from "@/components/ui/glow/Glow";
import { ORBIT_BORDER_COLORS } from "@/components/ui/glow/colors";
import { cn } from "@/components/ui/utils";

type CtaBannerVariant = "default" | "dark" | "night";

const PANEL_BACKGROUNDS: Record<CtaBannerVariant, string> = {
  default: "/assets/bg/bg-blured-nebula.png",
  dark: "/assets/bg/bg-clouds-black.png",
  night: "/assets/bg/bg-night-nebula.png",
};

const PANEL_FALLBACK_COLORS: Record<CtaBannerVariant, string> = {
  default: "bg-[#5cc8f5]",
  dark: "bg-[#04060c]",
  night: "bg-[#0b1f4d]",
};

const LIGHT_TEXT_VARIANTS = new Set<CtaBannerVariant>(["dark", "night"]);

type CtaBannerProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  buttonText?: string;
  buttonHref?: string;
  variant?: CtaBannerVariant;
};

function destination(href?: string) {
  if (!href || href === "#") return undefined;
  return isLiveRoute(href) ? href : undefined;
}

function CtaAnchor({ href, ...props }: ComponentProps<"a"> & { href: string }) {
  if (/^mailto:/.test(href)) return <a href={href} {...props} />;
  if (/^https?:/.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
    );
  }
  return <Link href={href} {...props} />;
}

export function CtaBanner({
  title,
  subtitle,
  buttonText,
  buttonHref = "/contact",
  variant = "default",
}: CtaBannerProps) {
  const lightText = LIGHT_TEXT_VARIANTS.has(variant);
  const primaryHref = buttonText ? destination(buttonHref) : undefined;

  return (
    <section className="px-6 pt-8 pb-24 sm:px-10 sm:pt-10 sm:pb-32 lg:px-16 lg:pt-12 lg:pb-40">
      <Glow
        className="mx-auto w-full max-w-7xl bg-transparent"
        colors={ORBIT_BORDER_COLORS}
        radius={16}
        spread={4}
        blur={16}
        opacity={0.7}
      >
        <div
          className={cn(
            "relative isolate flex min-h-[630px] w-full flex-col items-center justify-center overflow-hidden rounded-lg px-8 py-20 text-center sm:min-h-[720px] sm:px-12 lg:px-16",
            PANEL_FALLBACK_COLORS[variant],
          )}
        >
          <Image
            src={PANEL_BACKGROUNDS[variant]}
            alt=""
            aria-hidden="true"
            fill
            sizes="(min-width: 1280px) 1280px, 100vw"
            className={cn(
              "-z-10 object-cover",
              variant === "default" ? undefined : "scale-110 blur-md",
            )}
          />
          <h2
            className={cn(
              "mx-auto max-w-4xl font-display text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl",
              lightText ? "text-white" : "text-foreground",
            )}
          >
            {title}
          </h2>
          {subtitle ? (
            <p
              className={cn(
                "mx-auto mt-7 max-w-2xl text-base leading-8 sm:text-lg",
                lightText ? "text-white/70" : "text-foreground/75",
              )}
            >
              {subtitle}
            </p>
          ) : null}
          {primaryHref ? (
            <div className="mt-9 flex justify-center">
              <Button variant="black" size="lg" asChild>
                <CtaAnchor href={primaryHref}>{buttonText}</CtaAnchor>
              </Button>
            </div>
          ) : null}
        </div>
      </Glow>
    </section>
  );
}
