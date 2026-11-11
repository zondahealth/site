import type { ComponentProps, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { isLiveRoute } from "@/lib/navigation";
import { Button } from "@/components/ui/button/button";
import Glow from "@/components/ui/glow/Glow";
import { ORBIT_BORDER_COLORS } from "@/components/ui/glow/colors";
import { cn } from "@/components/ui/utils";

type CtaBannerVariant = "default" | "dark";

const PANEL_BACKGROUNDS: Record<CtaBannerVariant, string> = {
  default: "/assets/bg/bg-blured-nebula.png",
  dark: "/assets/bg/bg-clouds-black.png",
};

const PANEL_FALLBACK_COLORS: Record<CtaBannerVariant, string> = {
  default: "bg-[#5cc8f5]",
  dark: "bg-[#04060c]",
};

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
  const lightText = variant === "dark";
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
          {/* Soft halo behind the copy so it doesn't blend into the background */}
          <div
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute inset-0 -z-10",
              lightText
                ? "bg-[radial-gradient(ellipse_60%_55%_at_50%_42%,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.2)_45%,transparent_75%)]"
                : "bg-[radial-gradient(ellipse_60%_55%_at_50%_42%,rgba(255,255,255,0.75)_0%,rgba(255,255,255,0.4)_45%,transparent_75%)]",
            )}
          />
          <h2
            className={cn(
              "mx-auto max-w-4xl font-display text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl",
              lightText
                ? "text-white [text-shadow:0_0_32px_rgba(0,0,0,0.45)]"
                : "text-foreground [text-shadow:0_0_32px_rgba(255,255,255,0.8)]",
            )}
          >
            {title}
          </h2>
          {subtitle ? (
            <p
              className={cn(
                "mx-auto mt-7 max-w-2xl text-base leading-8 sm:text-lg",
                lightText
                  ? "text-white/80 [text-shadow:0_0_20px_rgba(0,0,0,0.5)]"
                  : "text-foreground/90 [text-shadow:0_0_20px_rgba(255,255,255,0.9)]",
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
