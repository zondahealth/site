import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button/button";

const modules = [
  {
    title: "Multifinanciador",
    copy: "Conectate una sola vez y operá con todos tus financiadores: cobertura, autorizaciones y reglas disponibles en el mismo flujo.",
    href: "/use-cases/multi-payer-care",
    image: "/assets/home/products/1.png",
    imageAlt:
      "Institución conectada a financiadores como OSDE, Medicus, Sura, Omint y Medifé.",
  },
  {
    title: "Ingresos y cobranzas",
    copy: "Seguí cada prestación desde la orden hasta el cobro, anticipá débitos y reducí los rechazos antes de presentar la factura.",
    href: "/use-cases/revenue-cycle",
    image: "/assets/home/products/2.png",
    imageAlt:
      "Liquidación de una sesión médica, con el profesional, el monto y la cuenta verificada.",
  },
  {
    title: "Fraude y riesgo",
    copy: "Detectá prestaciones duplicadas, consumos fuera de patrón e inconsistencias antes del pago, con evidencia para que tu equipo actúe.",
    href: "/use-cases/fraud-risk-prevention",
    image: "/assets/home/products/3.png",
    imageAlt: "Alerta de anomalía con un monto y una ubicación sospechosa.",
  },
  {
    title: "Operaciones digitales",
    copy: "Digitalizá procesos que todavía viven en papel y conectá a tus equipos con herramientas simples para gestionar cada caso.",
    href: "/use-cases/operations",
    image: "/assets/home/products/4.png",
    imageAlt:
      "Panel de una red de clínicas con ingresos, egresos y el detalle de cada transacción.",
  },
] as const;

export function PlatformFlow() {
  return (
    <section aria-labelledby="platform-title" className="px-6 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col items-start gap-6">
          <h2 id="platform-title" className="max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Soluciones para los desafíos concretos de tu operación.
          </h2>
          <Button variant="black" asChild>
            <Link href="/solutions">Ver la plataforma</Link>
          </Button>
        </header>

        <ol className="mt-16 lg:mt-24">
          {modules.map(({ title, copy, href, image, imageAlt }) => (
            <li key={title} className="grid gap-8 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-16">
              <div className="flex flex-col pt-4 lg:pt-6">
                <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                  {copy}
                </p>
                <Link href={href} className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#164a7c]">
                  Cómo funciona
                  <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <Image
                src={image}
                alt={imageAlt}
                width={1732}
                height={908}
                sizes="(min-width: 1024px) 720px, 100vw"
                className="h-auto w-full rounded-lg"
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
