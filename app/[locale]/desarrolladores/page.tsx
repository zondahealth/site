import Image from 'next/image';
import Link from 'next/link';
import {
  FeaturePanel,
  FeaturePanelBackgroundStyling,
  FeaturePanelTone,
} from '@/app/components/FeaturePanel';
import { Button } from '@/app/components/ui/button';
import ExploreButton from '@/app/components/ExploreButton';

export default function DesarrolladoresPage() {
  return (
    <div className="h-full w-full flex flex-1 flex-col bg-black">
      {/* Hero */}
      <FeaturePanel
        className="flex w-full flex-col rounded-none h-[100dvh] min-h-[30rem]"
        tone={FeaturePanelTone.Black}
        backgroundStyling={FeaturePanelBackgroundStyling.Lines}
        contentClassName="flex flex-1 min-h-0 w-full h-full items-center justify-center"
      >
        <div className="flex flex-1 w-full h-full flex-col items-center justify-center px-6 py-10 text-center md:items-start md:text-left space-y-8 max-w-2xl md:max-w-7xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-vitality-yellow">
            Desarrolladores
          </p>
          <h1 className="font-bold text-white flex flex-col gap-2 [font-family:var(--font-display-family)]">
            <span className="text-5xl md:text-7xl lg:text-8xl">
              Construí sobre Zonda
            </span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white max-w-2xl">
            APIs abiertas, autenticación con Personal Access Tokens y una
            plataforma pensada para que tu equipo técnico integre, automatice y
            escale sin fricciones.
          </p>
          <ExploreButton
            href="https://zondahealth.readme.io/reference/getpatients"
            title="Explorar la API"
          />
        </div>
      </FeaturePanel>

      {/* Rainbow divider */}
      <div
        className="h-1.5 w-full"
        style={{
          background:
            'linear-gradient(90deg, #ff6b6b, #ffa94d, #ffd43b, #69db7c, #4dabf7, #9775fa, #f06595)',
        }}
      />

      {/* Terminal + Features */}
      <section>
        <div className="layout-shell flex flex-col items-center gap-16 py-20 md:py-28">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-lg">
            <Image
              src="/assets/base/terminal.png"
              alt="Zonda API Terminal"
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 w-full">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-bold text-vitality-yellow">
                API con Personal Access Token
              </h3>
              <p className="text-base leading-relaxed text-neutral-400">
                Autenticá con un PAT y empezá a consumir la API de Zonda en
                minutos. Generá tu token, hacé tu primer request y construí
                desde ahí.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-bold text-vitality-yellow">
                Modelá tu organización
              </h3>
              <p className="text-base leading-relaxed text-neutral-400">
                Creá y administrá múltiples organizaciones desde la API. Definí
                estructuras, asigná roles y gestioná permisos de forma
                programática.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-bold text-vitality-yellow">
                Mové datos de cualquier lado
              </h3>
              <p className="text-base leading-relaxed text-neutral-400">
                Conectá cualquier fuente — HL7, FHIR, CSV, PDFs o sistemas
                propietarios. Zonda normaliza todo en un modelo canónico listo
                para consumir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — Usá la API */}
      <section className="bg-black">
        <div className="layout-shell py-20 md:py-28">
          <FeaturePanel
            tone={FeaturePanelTone.Black}
            backgroundStyling={FeaturePanelBackgroundStyling.WhiteLines}
            contentClassName="flex h-full flex-col items-center justify-center gap-16 px-8 py-24 sm:px-12 sm:py-32 lg:px-20 lg:py-40 text-vitality-yellow"
          >
            <div className="mx-auto max-w-3xl text-center text-3xl font-bold sm:text-4xl lg:text-6xl [font-family:var(--font-display-family)]">
              Usá la API
            </div>

            <Button asChild size="lg" className="min-w-48">
              <Link href="https://zondahealth.readme.io/reference/getpatients">
                Documentación
              </Link>
            </Button>
          </FeaturePanel>
        </div>
      </section>
    </div>
  );
}
