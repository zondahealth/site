import Image from "next/image";
import Link from "next/link";

import { Banner } from "@/components/ui/banner/banner";
import { Button } from "@/components/ui/button/button";

export function AiInfraBanner() {
  return (
    <section
      aria-label="Infraestructura de IA"
      className="mx-10"
    >
      <Banner
        variant="dark"
        className="
          isolate mx-auto flex min-h-[640px] max-w-6xl flex-col items-center
          justify-start gap-8 border-transparent px-8 pb-12 pt-16 text-center
          sm:min-h-[900px] sm:px-12 sm:pt-20
          md:min-h-[620px] md:items-start md:justify-start md:px-14 md:py-16 md:text-left
          lg:min-h-[600px] lg:items-start lg:justify-center lg:px-16 lg:py-20
        "
      >
        <Image
          src="/assets/bg/bg-deep-sea.png"
          alt=""
          aria-hidden="true"
          fill
          sizes="(min-width: 1152px) 1152px, 100vw"
          className="-z-20 scale-110 object-cover blur-md brightness-75"
        />
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0 -z-10 bg-[url('/assets/home/hygeia-banner-sm.png')]
            bg-cover bg-bottom bg-no-repeat mix-blend-lighten
            md:bg-[url('/assets/home/hygeia-banner-md.png')] md:bg-right-bottom
            lg:bg-[url('/assets/home/hygeia-banner-lg.png')] lg:bg-right
          "
        />
        <div className="flex w-full max-w-sm flex-col items-center gap-8 sm:max-w-md md:max-w-[420px] md:items-start lg:max-w-[500px] xl:max-w-[700px]">
          <h2 className="font-display text-3xl font-medium leading-tight text-primary-foreground sm:text-4xl md:text-5xl">
            De datos fragmentados a información segura que la IA puede usar.
          </h2>
          <p className="text-base leading-7 text-primary-foreground/75 sm:text-lg">
            Zonda consume datos en cualquier formato —texto libre, PDFs, CSV,
            HL7, FHIR, XML— y produce un modelo canónico normalizado (LOINC,
            ICD-10) sobre el que corren agentes de IA con contexto de salud.
          </p>
          <Button variant="inverse" asChild>
            <Link href="/use-cases/healthcare-intelligence-agents">
              Explorar agentes de inteligencia
            </Link>
          </Button>
        </div>
      </Banner>
    </section>
  );
}
