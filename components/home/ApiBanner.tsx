import Link from "next/link";

import { Banner } from "@/components/ui/banner/banner";
import { Button } from "@/components/ui/button/button";
import Glow, { ORBIT_BORDER_COLORS } from "@/components/ui/glow/Glow";

export function ApiBanner() {
  return (
    <section aria-label="API" className="px-6 py-8 sm:px-10 md:px-16">
      <Glow
        className="mx-auto w-full max-w-5xl bg-transparent"
        colors={ORBIT_BORDER_COLORS}
        radius={16}
        opacity={0.7}
      >
        <Banner
          variant="dark"
          className="
          flex min-h-[640px] w-full flex-col items-center
          justify-start gap-8 border-transparent bg-[url('/assets/home/api-banner-md.png')]
          bg-cover bg-bottom bg-no-repeat px-8 pb-12 pt-16 text-center
          sm:min-h-[900px] sm:px-12 sm:pt-20
          md:min-h-[900px]
          lg:min-h-[640px] lg:bg-[url('/assets/home/api-banner-lg.png')] lg:px-16 lg:pt-20
        "
        >
          <div className="flex w-full max-w-xl flex-col items-center gap-8">
            <h2
              className="overflow-visible bg-clip-text py-[0.08em] font-display text-3xl font-medium leading-tight tracking-tight text-transparent sm:text-5xl"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #ffffff 0%, #d7e7f6 100%)",
              }}
            >
              Construí salud digital sobre una sola plataforma
            </h2>
            <Button variant="inverse" asChild>
              <Link href="#api">Ver API</Link>
            </Button>
          </div>
        </Banner>
      </Glow>
    </section>
  );
}
