import Link from 'next/link';
import {
  FeaturePanel,
  FeaturePanelBackgroundStyling,
  FeaturePanelTone,
} from '@/app/components/FeaturePanel';
import { Button } from '@/app/components/ui/button';

export default function InterdomPage() {
  return (
    <div className="h-full w-full flex flex-1 flex-col bg-background space-y-16 md:space-y-26">
      {/* Hero */}
      <FeaturePanel
        className="flex w-full flex-col rounded-none"
        tone={FeaturePanelTone.SolidGreen}
        backgroundStyling={FeaturePanelBackgroundStyling.WhiteLines}
        backgroundStylingClassName="opacity-30"
        contentClassName="flex w-full items-end"
      >
        <div className="layout-shell w-full py-28 md:py-40 lg:py-48">
          <div className="max-w-4xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
              Caso de uso
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold [font-family:var(--font-display-family)] text-white max-w-3xl">
              Interdom se digitaliza
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-white/80 max-w-2xl">
              Cómo una empresa de internación domiciliaria dejó el papel y
              transformó su operación con Zonda.
            </p>
          </div>
        </div>
      </FeaturePanel>

      {/* Content placeholder */}
      <section>
        <div className="layout-shell">
          <div className="mx-auto max-w-3xl space-y-8">
            <p className="text-lg md:text-xl leading-relaxed text-neutral-700">
              Contenido en desarrollo. Próximamente se publicará la historia
              completa de cómo Interdom digitalizó su operación, dejó de perder
              información y empezó a trackear a su personal en campo con datos
              en tiempo real.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="layout-shell pb-16 md:pb-26">
          <FeaturePanel
            tone={FeaturePanelTone.SolidBlue}
            backgroundStyling={FeaturePanelBackgroundStyling.WhiteLines}
            contentClassName="flex h-full flex-col items-center justify-center gap-16 px-8 py-24 sm:px-12 sm:py-32 lg:px-20 lg:py-40"
          >
            <div className="mx-auto max-w-3xl text-center text-3xl font-bold sm:text-4xl lg:text-6xl text-white [font-family:var(--font-display-family)]">
              Hablemos
            </div>

            <Button asChild size="lg" className="min-w-48">
              <Link href="/contacto">Contactanos</Link>
            </Button>
          </FeaturePanel>
        </div>
      </section>
    </div>
  );
}
