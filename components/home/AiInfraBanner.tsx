import Image from "next/image";
import Link from "next/link";

import { Banner } from "@/components/ui/banner/banner";
import { Button } from "@/components/ui/button/button";

export function AiInfraBanner() {
  return (
    <section aria-labelledby="ai-title" className="mx-4 sm:mx-10">
      <Banner
        variant="dark"
        className="mx-auto w-full max-w-7xl border-transparent bg-[#022a4c] px-6 pt-14 pb-[24rem] text-primary-foreground sm:px-10 sm:pt-16 sm:pb-[28rem] md:px-12 md:pb-[34rem] lg:min-h-[520px] lg:px-16 lg:py-20"
        style={{
          backgroundImage:
            "linear-gradient(122deg, #021c33 0%, #022a4c 48%, #043a66 100%)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-3/4 lg:hidden"
          style={{
            background:
              "radial-gradient(ellipse 80% 90% at 50% 100%, rgba(27,96,160,0.55) 0%, rgba(13,72,128,0.28) 42%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 hidden lg:block"
          style={{
            background:
              "radial-gradient(ellipse 72% 86% at 100% 118%, rgba(27,96,160,0.55) 0%, rgba(13,72,128,0.28) 42%, transparent 70%)",
          }}
        />
        <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center gap-6 text-center lg:mx-0 lg:max-w-[26.4rem] lg:items-start lg:py-4 lg:text-left xl:max-w-lg">
          <h2
            id="ai-title"
            className="font-display text-4xl font-medium leading-[1.08] text-primary-foreground lg:text-5xl"
          >
            Datos de salud, tratados como datos de salud.
          </h2>
          <p className="text-lg leading-7 text-primary-foreground/75 sm:text-xl">
            Zonda deja los datos de tu organización listos para que la IA
            pueda usarlos.
          </p>
          <Button variant="black" asChild>
            <Link href="/use-cases/normalized-ai">Ver IA sobre datos de salud</Link>
          </Button>
        </div>
        <Image
          src="/assets/home/modernize-higea.png"
          alt=""
          width={1416}
          height={989}
          sizes="(min-width: 1280px) 700px, (min-width: 1024px) 68vw, 92vw"
          className="pointer-events-none absolute -bottom-6 left-1/2 h-[380px] w-auto max-w-none -translate-x-1/2 select-none sm:-bottom-8 sm:h-[440px] md:h-[540px] lg:-right-6 lg:-bottom-14 lg:left-auto lg:h-auto lg:w-[64%] lg:max-w-[40rem] lg:translate-x-0 xl:-right-10 xl:-bottom-20 xl:h-auto xl:w-[62%] xl:max-w-none"
        />
      </Banner>
    </section>
  );
}
