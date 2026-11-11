import Link from "next/link";

import { Button } from "@/components/ui/button/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder/ImagePlaceholder";
import { Pending } from "@/components/ui/pending/Pending";

const changes = [
  {
    before: "Cada área consultaba un sistema distinto para el mismo caso",
    after: "Admisión, auditoría y facturación trabajan sobre el mismo dato",
  },
  {
    before: "Los débitos se descubrían cuando llegaba la liquidación",
    after: "Las inconsistencias se ven antes de presentar",
  },
  {
    before: "Sumar un financiador nuevo era un proyecto de meses",
    after: "Se conecta como una fuente más",
  },
] as const;

export function ProofSection() {
  return (
    <section aria-labelledby="proof-title" className="px-6 sm:px-10 md:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
        <ImagePlaceholder
          width={560}
          height={680}
          label="Retrato en lineart (mismo grabado que Hipócrates/Higea) de la persona real de Interdom que da la cita, en su lugar de trabajo. Opcional: al hacer click abre un video de 30–60 s con subtítulos."
        />

        <figure>
          <h2 id="proof-title" className="font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Cómo cambió la operación de Interdom
          </h2>

          <dl className="mt-10 divide-y divide-foreground/10 border-y border-foreground/10">
            {changes.map(({ before, after }) => (
              <div key={before} className="grid gap-2 py-5 sm:grid-cols-2 sm:gap-8">
                <dt className="text-sm leading-relaxed text-muted-foreground">
                  <span className="mb-1 block font-mono text-[11px] uppercase tracking-[0.14em]">Antes</span>
                  {before}
                </dt>
                <dd className="text-sm font-medium leading-relaxed text-foreground">
                  <span className="mb-1 block font-mono text-[11px] uppercase tracking-[0.14em] text-[#174C62]">Con Zonda</span>
                  {after}
                </dd>
              </div>
            ))}
          </dl>

          <blockquote className="mt-10 font-display text-xl font-medium leading-snug tracking-tight text-foreground sm:text-2xl">
            <Pending>
              “[Cita real sobre cómo cambió el trabajo del equipo. Ej: ‘Dejamos
              de discutir qué dato era el correcto y empezamos a resolver los
              casos.’]”
            </Pending>
          </blockquote>
          <figcaption className="mt-4 text-sm text-muted-foreground">
            <Pending>[Nombre Apellido]</Pending>, <Pending>[Cargo]</Pending> ·
            Interdom
          </figcaption>

          <Button variant="black" className="mt-8" asChild>
            <Link href="/customer-stories/interdom">Leer el caso completo</Link>
          </Button>
        </figure>
      </div>
    </section>
  );
}
