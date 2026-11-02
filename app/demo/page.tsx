import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button/button";
import {
  Card,
  CardContent,
  CardCTA,
  CardTitle,
} from "@/components/ui/card/card";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";
import { ImagePlaceholder } from "@/components/ui/image-placeholder/ImagePlaceholder";
import { Pending } from "@/components/ui/pending/Pending";
import { StoryMedia } from "@/components/ui/story/story";

export const metadata: Metadata = {
  title: "Demo",
  robots: { index: false },
};

const colors = [
  {
    name: "background",
    swatch: "bg-background",
    fg: "text-foreground",
    hex: "#fcfcff",
  },
  {
    name: "foreground",
    swatch: "bg-foreground",
    fg: "text-background",
    hex: "#151b2b",
  },
  {
    name: "card",
    swatch: "bg-card",
    fg: "text-card-foreground",
    hex: "#fdfdff",
  },
  {
    name: "primary",
    swatch: "bg-primary",
    fg: "text-primary-foreground",
    hex: "#0e3c75",
  },
  {
    name: "secondary",
    swatch: "bg-secondary",
    fg: "text-secondary-foreground",
    hex: "#226ffd",
  },
  {
    name: "muted",
    swatch: "bg-muted",
    fg: "text-muted-foreground",
    hex: "#f4f6fd",
  },
  {
    name: "accent",
    swatch: "bg-accent",
    fg: "text-accent-foreground",
    hex: "#eaea00",
  },
  {
    name: "border",
    swatch: "bg-border",
    fg: "text-foreground",
    hex: "#d3dae8",
  },
  {
    name: "ring",
    swatch: "bg-ring",
    fg: "text-accent-foreground",
    hex: "#eaea00",
  },
] as const;

const buttonVariants = [
  "primary",
  "black",
  "accent",
  "outline",
  "ghost",
  "inverse",
] as const;

const buttonSizes = ["sm", "default", "lg", "icon"] as const;

const cardVariants = ["default", "muted", "dark"] as const;

export default function DemoPage() {
  // DECISIÓN DEMO-1: el design system no se indexa y queda oculto en producción.
  if (
    process.env.NODE_ENV === "production" &&
    process.env.NEXT_PUBLIC_SHOW_DEMO !== "true"
  ) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background px-6 py-12 text-foreground sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-16">
        <header className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
            Design system
          </p>
          <h1 className="font-display text-4xl font-medium tracking-tight sm:text-5xl">
            Demo
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            Token colors from{" "}
            <code className="text-foreground">globals.css</code> and component
            variants under <code className="text-foreground">components/</code>.
          </p>
        </header>

        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="font-display text-2xl font-medium tracking-tight">
              Colors
            </h2>
            <p className="text-sm text-muted-foreground">
              Mapped via Tailwind <code>@theme</code> in globals.css
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {colors.map((color) => (
              <div
                key={color.name}
                className="overflow-hidden rounded-lg border border-border"
              >
                <div
                  className={`flex h-24 items-end p-3 ${color.swatch} ${color.fg}`}
                >
                  <span className="text-sm font-semibold">{color.name}</span>
                </div>
                <div className="flex items-center justify-between bg-card px-3 py-2 text-sm text-muted-foreground">
                  <code className="text-foreground">{color.swatch}</code>
                  <span>{color.hex}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="font-display text-2xl font-medium tracking-tight">
              Button
            </h2>
            <p className="text-sm text-muted-foreground">
              Variants × sizes from <code>components/button</code>
            </p>
          </div>

          <div className="space-y-8 rounded-lg border border-border bg-card p-6 sm:p-8">
            {buttonVariants.map((variant) => (
              <div key={variant} className="space-y-3">
                <p className="text-sm font-medium text-muted-foreground">
                  {variant}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  {buttonSizes.map((size) => (
                    <Button
                      key={`${variant}-${size}`}
                      variant={variant}
                      size={size}
                    >
                      {size === "icon" ? "→" : `${variant} / ${size}`}
                    </Button>
                  ))}
                  <Button variant={variant} disabled>
                    disabled
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-border bg-primary p-6 sm:p-8">
            <p className="mb-4 text-sm font-medium text-primary-foreground/70">
              On primary surface
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="inverse">inverse</Button>
              <Button variant="accent">accent</Button>
              <Button variant="outline">outline</Button>
              <Button
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                ghost
              </Button>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="font-display text-2xl font-medium tracking-tight">
              Card
            </h2>
            <p className="text-sm text-muted-foreground">
              Variants from <code>components/card</code>
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {cardVariants.map((variant) => (
              <Card key={variant} variant={variant} hoverable>
                <CardCTA aria-label={`${variant} card action`} />
                <CardTitle>{variant}</CardTitle>
                <CardContent floatOnHover>
                  Hoverable card with CTA. Uses the {variant} surface token set.
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {cardVariants.map((variant) => (
              <Card key={`static-${variant}`} variant={variant}>
                <CardTitle>Static {variant}</CardTitle>
                <CardContent>
                  Same variant without hover border or CTA.
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="font-display text-2xl font-medium tracking-tight">
              CtaBanner
            </h2>
            <p className="text-sm text-muted-foreground">
              Variants <code>default</code>, <code>dark</code> y <code>night</code>{" "}
              from <code>components/ui/cta-banner</code>
            </p>
          </div>

          {(["default", "dark", "night"] as const).map((variant) => (
            <div key={variant} className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">
                {variant}
              </p>
              <CtaBanner
                variant={variant}
                title="Hacé que cada prestación cuente"
                subtitle="Conectá atención, validación, facturación, cobro y liquidación."
                buttonText="Hablá con nuestro equipo"
              />
            </div>
          ))}
        </section>

        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="font-display text-2xl font-medium tracking-tight">
              ImagePlaceholder
            </h2>
            <p className="text-sm text-muted-foreground">
              Mantiene la relación de aspecto del asset final y muestra el
              tamaño junto con la descripción.
            </p>
          </div>

          <ImagePlaceholder
            width={1200}
            height={1245}
            label="Hero de caso de uso. Figura principal a la derecha del título, sobre el fondo del hero."
          />

          <StoryMedia className="max-w-3xl">
            <ImagePlaceholder
              fill
              width={1280}
              height={720}
              label="Beneficio. Escena de producto en formato video, dentro de la tarjeta de la historia."
            />
          </StoryMedia>

          <ImagePlaceholder
            width={1000}
            height={1000}
            label="Sección dividida. Visual cuadrado junto al texto de la funcionalidad."
          />

          <p className="text-sm text-muted-foreground">
            Copy pendiente: <Pending>dato del founder</Pending>
          </p>
        </section>
      </div>
    </main>
  );
}
