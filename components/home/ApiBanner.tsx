import Image from "next/image";
import Link from "next/link";

import { Banner } from "@/components/ui/banner/banner";
import { Button } from "@/components/ui/button/button";
import Glow from "@/components/ui/glow/Glow";
import { ORBIT_BORDER_COLORS } from "@/components/ui/glow/colors";
import { DOCS_URL } from "@/lib/navigation";

function ApiActions({ size }: { size?: "sm" | "default" }) {
  return (
    <>
      <Button variant="black" size={size} asChild>
        <Link href="/developers">Ver API</Link>
      </Button>
      <Button variant="accent" size={size} asChild>
        <a href={DOCS_URL} target="_blank" rel="noopener noreferrer">
          Documentación
        </a>
      </Button>
    </>
  );
}

export function ApiBanner() {
  return (
    <section aria-label="API" className="px-6 py-8 sm:px-10 md:px-16">
      <Glow
        className="mx-auto w-full max-w-7xl bg-transparent"
        colors={ORBIT_BORDER_COLORS}
        radius={16}
        opacity={0.7}
      >
        <Banner
          variant="dark"
          className="relative w-full border-transparent bg-[#010614] p-0 text-center sm:p-0"
        >
          <Image
            src="/assets/home/api-banner-md.png"
            alt=""
            width={1197}
            height={1315}
            sizes="(min-width: 1024px) 1px, 100vw"
            className="pointer-events-none h-auto w-full select-none lg:hidden"
          />
          <Image
            src="/assets/home/api-banner-lg.png"
            alt=""
            width={1672}
            height={941}
            sizes="(min-width: 1024px) 80rem, 1px"
            className="pointer-events-none hidden h-auto w-full select-none lg:block"
          />
          <div className="absolute inset-x-0 top-0 z-10 flex flex-col items-center px-5 pt-5 sm:px-10 sm:pt-8 lg:px-14 lg:pt-8 2xl:px-16 2xl:pt-16">
            <div className="flex w-full max-w-xl flex-col items-center gap-1 sm:gap-3 lg:gap-3 2xl:gap-5">
              <h2
                className="overflow-visible bg-clip-text py-[0.08em] font-display text-lg font-medium leading-tight tracking-tight text-transparent sm:text-3xl lg:text-4xl 2xl:text-5xl"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, #ffffff 0%, #d7e7f6 100%)",
                }}
              >
                Construí salud digital sobre una sola plataforma
              </h2>
              <p className="text-sm leading-4 text-white/70 sm:text-base sm:leading-7 md:text-lg">
                Vos construís la experiencia. Nosotros nos ocupamos de los datos.
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:hidden">
                <ApiActions size="sm" />
              </div>
              <div className="hidden flex-wrap justify-center gap-3 sm:flex">
                <ApiActions />
              </div>
            </div>
          </div>
        </Banner>
      </Glow>
    </section>
  );
}
