import Image from "next/image";
import Link from "next/link";

import { isLiveRoute } from "@/lib/navigation";
import { Button } from "@/components/ui/button/button";
import { Card, CardCTA, CardMedia, CardTitle } from "@/components/ui/card/card";

const mockupImageClassName =
  "pointer-events-none h-full w-auto max-w-full object-contain transition-transform duration-300 ease-out group-hover:-translate-y-2 motion-reduce:transform-none motion-reduce:transition-none";

function liveOr(href: string, fallback: string) {
  return isLiveRoute(href) ? href : fallback;
}

const products = [
  {
    id: "1",
    titleHighlight: "Conectá tu institución",
    title: "para una atención sin fricción",
    href: "/use-cases/multi-payer-care",
    image: "/assets/home/products/dumas-verificado.png",
    imageWidth: 1045,
    imageHeight: 1506,
    imageClassName: mockupImageClassName,
  },
  {
    id: "2",
    titleHighlight: "Cada caso, trazable",
    title: "de punta a punta",
    href: "/use-cases/revenue-cycle",
    image: "/assets/home/products/flowchart.png",
    imageWidth: 1448,
    imageHeight: 1086,
    imageClassName: mockupImageClassName,
  },
  {
    id: "3",
    titleHighlight: "Fraude y riesgo",
    title: "bajo control antes de que genere pérdidas",
    href: "/use-cases/fraud-risk-prevention",
    image: "/assets/home/products/trust-index.png",
    imageWidth: 892,
    imageHeight: 987,
    imageClassName: mockupImageClassName,
  },
  {
    id: "4",
    titleHighlight: "De notas a datos clínicos",
    title: "listos para usar",
    href: liveOr(
      "/use-cases/normalized-ai",
      "/use-cases/healthcare-intelligence-agents",
    ),
  },
] as const;

const productsHref = liveOr(
  "/solutions",
  "/use-cases/healthcare-intelligence-agents",
);

export function Products() {
  return (
    <section aria-label="Productos" className="px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {products.map((product) => (
            <Card
              key={product.id}
              variant="dark"
              hoverable
              href={product.href}
              aria-label={`${product.titleHighlight} ${product.title}`}
              className="isolate col-span-1 row-span-2 grid grid-rows-subgrid bg-transparent"
            >
              {/* Shrinks under the hover border so the dark fill can't bleed
                  through the border's anti-aliased outer edge. */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit] bg-foreground transition-[inset] duration-150 ease-out group-hover:inset-[3px] group-focus-within:inset-[3px]"
              >
                <Image
                  src="/assets/bg/bg-card-dark-blue.png"
                  alt=""
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="scale-110 object-cover blur-xl"
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
              <CardMedia className="pointer-events-none h-[280px] overflow-visible sm:h-[400px] lg:h-[480px]">
                {"image" in product ? (
                  <Image
                    src={product.image}
                    alt=""
                    {...("fill" in product
                      ? { fill: true }
                      : {
                          width: product.imageWidth,
                          height: product.imageHeight,
                        })}
                    className={product.imageClassName}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                ) : null}
              </CardMedia>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
