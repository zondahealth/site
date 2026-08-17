import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button/button";
import { Card, CardCTA, CardMedia, CardTitle } from "@/components/ui/card/card";

// Height follows the media slot; width follows the screenshot aspect ratio so
// inner UI isn't cropped when the card gets narrower. Extra 1.5rem covers hover.
const mockupImageClassName =
  "pointer-events-none absolute top-3 left-0 right-0 mx-auto h-[calc(100%+1.5rem)] w-fit max-w-full object-contain object-top";

const products = [
  {
    id: "1",
    titleHighlight: "Conecta tu institución",
    bgImage: "/assets/bg/card-bg-yellow-blue-green.png",
    title: "para una atención sin fricción",
    image: "/assets/home/products/card-1-object.png",
    imageWidth: 1014,
    imageHeight: 1221,
    bleed: "bottom" as const,
    imageClassName: mockupImageClassName,
  },
  {
    id: "2",
    titleHighlight: "Cada caso, trazable",
    title: "de punta a punta",
    bgImage: "/assets/bg/card-bg-yellow-blue-green.png",
    image: "/assets/home/products/card-2-object.png",
    contentBgImage: "/assets/home/products/card-2-inner-bg.svg",
    contentBgImageClassName: "-inset-x-12 bg-[length:130%_auto]",
    imageWidth: 839,
    imageHeight: 998,
    bleed: "bottom" as const,
    imageClassName: mockupImageClassName,
  },
  {
    id: "3",
    bgImage: "/assets/bg/card-bg-yellow-blue-green.png",
    titleHighlight: "Fraude y riesgo",
    title: "bajo control antes de que genere pérdidas",
    image: "/assets/home/products/card-3-object.png",
    imageWidth: 1038,
    imageHeight: 897,
    bleed: "bottom" as const,
    imageClassName:
      "pointer-events-none absolute left-0 right-0 mx-auto h-[calc(100%+1.5rem)] w-full max-w-full object-cover object-top",
  },
  {
    id: "4",
    titleHighlight: "De notas a datos clínicos",
    title: "listos para usar",
    bgImage: "/assets/bg/card-bg-yellow-blue-green.png",
    image: "/assets/home/products/card-4-object.png",
    imageWidth: 1048,
    imageHeight: 1120,
    bleed: "bottom" as const,
    imageClassName: mockupImageClassName,
  },
] as const;

export function Products() {
  return (
    <section aria-label="Productos" className="px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 sm:mb-16">
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-foreground lg:text-4xl">
            Impulsado por la red de salud más conectada.
            <br />
            Diseñado para cada necesidad clínica.
          </h2>
          <Button variant="black" className="mt-8" asChild>
            <Link href="#productos">Ver productos</Link>
          </Button>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {products.map((product) => (
            <Card
              key={product.id}
              hoverable
              backgroundImage={product.bgImage}
              className="col-span-1 row-span-2 grid grid-rows-subgrid"
            >
              <CardCTA aria-label={`${product.title} — ver más`} />
              <CardTitle className="relative z-10 self-start">
                <span className="font-bold">{product.titleHighlight}</span>{" "}
                <span className="font-normal">{product.title}</span>
              </CardTitle>
              <CardMedia
                floatOnHover
                bleed={"bleed" in product ? product.bleed : undefined}
                contentBgImage={
                  "contentBgImage" in product ? product.contentBgImage : null
                }
                contentBgImageClassName={
                  "contentBgImageClassName" in product
                    ? product.contentBgImageClassName
                    : undefined
                }
              >
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
