import Image from "next/image";
import Link from "next/link";

import { Banner } from "@/components/ui/banner/banner";
import { Button } from "@/components/ui/button/button";
import Glow from "@/components/ui/glow/Glow";
import { ORBIT_BORDER_COLORS } from "@/components/ui/glow/colors";
const screenshotAlt =
  "Editor con GET /v2/patients/{id}/timeline en TypeScript y la respuesta JSON de una alerta de interacción medicamentosa.";

export function ApiBanner() {
  return (
    <section aria-labelledby="api-title" className="px-6 py-8 sm:px-10 md:px-16">
      <Glow
        className="mx-auto w-full max-w-7xl bg-transparent"
        colors={ORBIT_BORDER_COLORS}
        radius={16}
        opacity={0.7}
      >
        <Banner
          variant="dark"
          className="w-full border-transparent bg-[#010614] px-6 pt-14 pb-0 text-center sm:px-10 sm:pt-16 sm:pb-0 lg:px-14 lg:pt-20 lg:pb-0"
        >
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4">
            <h2 id="api-title" className="font-display text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl xl:text-5xl">
              Construí sobre los datos de toda tu red.
            </h2>
            <p className="text-base leading-7 text-white/70 md:text-lg">
              Tus equipos de tecnología acceden a la misma información unificada desde sus propios sistemas, con una sola API.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <Button variant="black" asChild>
                <Link href="/developers">Ver API</Link>
              </Button>
            </div>
          </div>

          <div className="relative -mx-6 mt-10 flex justify-center sm:-mx-10 lg:-mx-14">
            <Image
              src="/assets/home/api-banner-md.png"
              alt={screenshotAlt}
              width={930}
              height={828}
              sizes="(min-width: 1024px) 0px, 860px"
              className="pointer-events-none h-auto w-full max-w-[860px] select-none lg:hidden"
            />
            <Image
              src="/assets/home/api-banner-lg.png"
              alt={screenshotAlt}
              width={1290}
              height={537}
              sizes="(min-width: 1024px) 1180px, 0px"
              className="pointer-events-none hidden h-auto w-full max-w-[1180px] select-none lg:block"
            />
          </div>
        </Banner>
      </Glow>
    </section>
  );
}
