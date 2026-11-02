import Image from "next/image";
import Link from "next/link";

import { isLiveRoute } from "@/lib/navigation";
import { Button } from "@/components/ui/button/button";
import { Card, CardCTA, CardMedia, CardTitle } from "@/components/ui/card/card";

function liveOr(href: string, fallback: string) {
  return isLiveRoute(href) ? href : fallback;
}

const products = [
  {
    id: "1",
    titleHighlight: "Conectá tu institución",
    title: "para una atención sin fricción",
    href: "/use-cases/multi-payer-care",
    image: "/assets/home/products/1.png",
    bleed: "x",
  },
  {
    id: "2",
    titleHighlight: "Cada caso, trazable",
    title: "de punta a punta",
    href: "/use-cases/revenue-cycle",
    image: "/assets/home/products/2.png",
  },
  {
    id: "3",
    titleHighlight: "Fraude y riesgo",
    title: "bajo control antes de que genere pérdidas",
    href: "/use-cases/fraud-risk-prevention",
    image: "/assets/home/products/3.png",
  },
  {
    id: "4",
    titleHighlight: "Ciclos de pagos claros,",
    title: "desde la práctica hasta el cobro",
    href: "/use-cases/revenue-cycle",
    image: "/assets/home/products/4.png",
  },
] as const;

const productCardBackground = "/assets/bg/bg-card-blue.png";

const imageGrowClassName =
  "origin-center transition-transform duration-300 ease-out group-hover:scale-105 group-focus-within:scale-105 motion-reduce:transform-none motion-reduce:transition-none";

/** Opaque bounds of 1.png, so the graphic meets both card edges. */
const heroCrop = {
  x: 0,
  y: 16,
  width: 794,
  height: 642,
  imageWidth: 794,
  imageHeight: 664,
} as const;

const productsHref = liveOr(
  "/solutions",
  "/use-cases/normalized-ai",
);

export function Products() {
  return (
    <section aria-label="Productos" className="px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 sm:mb-16">
          {/* DECISIÓN COPY-1: "una red de salud conectada" hasta tener un dato que respalde el superlativo. */}
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-foreground lg:text-4xl">
            Impulsado por una red de salud conectada.
            <br />
            Diseñado para cada necesidad clínica.
          </h2>
          <Button variant="black" className="mt-8" asChild>
            <Link href={productsHref}>Ver soluciones</Link>
          </Button>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {products.map((product) => (
            <Card
              key={product.id}
              hoverable
              href={product.href}
              aria-label={`${product.titleHighlight} ${product.title}`}
              className="isolate col-span-1 row-span-2 grid grid-rows-subgrid bg-transparent text-foreground [--card-hover-border:10px]"
            >
              {/* Shrinks under the hover border so the fill can't bleed
                  through the border's anti-aliased outer edge. */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit] bg-white transition-[inset] duration-150 ease-out group-hover:inset-[3px] group-focus-within:inset-[3px]"
              >
                <Image
                  src={productCardBackground}
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <CardCTA
                aria-hidden="true"
                tabIndex={-1}
                className="pointer-events-none"
              />
              <CardTitle className="pointer-events-none relative z-10 self-start">
                <span className="font-bold">{product.titleHighlight}</span>{" "}
                <span className="font-normal">{product.title}</span>
              </CardTitle>
              <CardMedia
                bleed={"bleed" in product ? product.bleed : undefined}
                className={
                  "bleed" in product
                    ? "pointer-events-none"
                    : "pointer-events-none mt-0 h-auto self-stretch overflow-visible sm:mt-0 sm:h-auto lg:mt-0 lg:h-auto"
                }
              >
                {"bleed" in product ? (
                  <div
                    className={`relative w-full overflow-hidden ${imageGrowClassName}`}
                    style={{
                      aspectRatio: `${heroCrop.width} / ${heroCrop.height}`,
                    }}
                  >
                    <Image
                      src={product.image}
                      alt=""
                      width={heroCrop.imageWidth}
                      height={heroCrop.imageHeight}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="absolute h-auto max-w-none"
                      style={{
                        width: `${(heroCrop.imageWidth / heroCrop.width) * 100}%`,
                        left: `${(-heroCrop.x / heroCrop.width) * 100}%`,
                        top: `${(-heroCrop.y / heroCrop.height) * 100}%`,
                      }}
                    />
                  </div>
                ) : (
                  <>
                    {/* Same height as the bleed graphic, which is sized to the full card width. */}
                    <div
                      aria-hidden
                      className="w-[calc(100%+2*var(--card-pad))] max-w-none shrink-0"
                      style={{
                        aspectRatio: `${heroCrop.width} / ${heroCrop.height}`,
                      }}
                    />
                    <Image
                      src={product.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className={`object-contain object-center ${imageGrowClassName}`}
                    />
                  </>
                )}
              </CardMedia>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
