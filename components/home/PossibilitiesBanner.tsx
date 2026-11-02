import Link from "next/link";

import { Testimonials } from "@/components/testimonials/Testimonials";
import { isLiveRoute } from "@/lib/navigation";

export function PossibilitiesBanner() {
  return (
    <section
      id="historias"
      aria-label="Historias"
      className="scroll-mt-24 px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 sm:mb-14">
          <h2 className="font-display max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Mirá lo que es posible con Zonda.
          </h2>
        </header>

        {/* DECISIÓN: confirmar autorización de AMS y PAMI para ser nombrados */}
        <Testimonials />

        {isLiveRoute("/customer-stories") ? (
          <Link
            href="/customer-stories"
            className="mt-10 inline-flex rounded-sm text-sm font-semibold text-secondary underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring sm:text-base"
          >
            Ver todas las historias →
          </Link>
        ) : null}
      </div>
    </section>
  );
}
