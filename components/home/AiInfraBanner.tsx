import Image from "next/image";
import Link from "next/link";

import { Banner } from "@/components/ui/banner/banner";
import { Button } from "@/components/ui/button/button";

export function AiInfraBanner() {
  return (
    <section aria-label="Infraestructura de IA" className="mx-4 sm:mx-10">
      <Banner
        variant="dark"
        className="
          isolate mx-auto flex w-full max-w-7xl flex-col items-center justify-start gap-2
          border-transparent bg-[#022a4c] px-6 pt-12 pb-0 text-center
          sm:px-10 sm:pt-14 sm:pb-0
          md:px-12 md:pt-16 md:pb-0
          lg:min-h-[900px] lg:items-start lg:justify-center lg:gap-8 lg:px-16 lg:py-20 lg:text-left
        "
      >
        <div className="relative z-10 flex w-full max-w-sm flex-col items-center gap-6 sm:max-w-md sm:gap-8 md:max-w-lg lg:max-w-[520px] lg:items-start xl:max-w-[560px]">
          <h2 className="font-display text-4xl font-medium leading-[1.08] text-primary-foreground lg:text-5xl xl:text-6xl">
            De datos fragmentados a información segura que la IA puede usar.
          </h2>
          <p className="text-lg leading-7 text-primary-foreground/75 sm:text-xl lg:text-2xl lg:leading-8">
            Traé los datos como estén. Zonda los deja listos para que la IA
            haga el resto.
          </p>
          <Button variant="black" asChild>
            <Link href="/use-cases/normalized-ai">
              Explorar agentes de inteligencia
            </Link>
          </Button>
        </div>
        <Image
          src="/assets/home/modernize-higea.png"
          alt=""
          width={1416}
          height={989}
          sizes="(min-width: 1024px) 920px, 80vw"
          className="pointer-events-none relative z-0 -mb-8 mt-2 h-auto w-[108%] max-w-none select-none sm:-mb-12 sm:mt-4 sm:w-[92%] sm:max-w-[540px] md:-mb-16 md:mt-6 md:w-[82%] md:max-w-[680px] lg:absolute lg:top-0 lg:bottom-auto lg:left-[24rem] lg:m-0 lg:h-full lg:w-auto lg:max-w-none lg:translate-none xl:left-[26rem]"
        />
      </Banner>
    </section>
  );
}
