import Link from 'next/link';
import {
  FeaturePanel,
  FeaturePanelBackgroundStyling,
  FeaturePanelTone,
} from '@/app/components/FeaturePanel';
import { Button } from '@/app/components/ui/button';

export default function EmpresaPage() {
  return (
    <div className="h-full w-full flex flex-1 flex-col bg-background space-y-16 md:space-y-26">
      {/* Hero */}
      <FeaturePanel
        className="flex flex-1 min-h-0 w-full flex-col rounded-none min-h-[clamp(30rem,100dvh,1000px)]"
        tone={FeaturePanelTone.GradientBlue}
        backgroundStyling={FeaturePanelBackgroundStyling.Full}
        backgroundStylingClassName="opacity-30"
        contentClassName="flex flex-1 min-h-0 w-full h-full items-center justify-center"
      >
        <div className="flex flex-1 w-full h-full flex-col items-center justify-center px-6 py-10 text-center md:items-start md:text-left space-y-8 max-w-2xl md:max-w-7xl mx-auto">
          <h1 className="font-bold [font-family:var(--font-display-family)] text-vitality-yellow">
            <span className="text-5xl md:text-7xl lg:text-8xl">
              Tecnología para que la salud funcione mejor
            </span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white max-w-2xl">
            Zonda construye infraestructura digital para organizaciones de salud
            en América Latina. Conectamos sistemas, ordenamos datos y hacemos
            que la operación sea más clara.
          </p>
        </div>
      </FeaturePanel>

      {/* Qué hacemos */}
      <section>
        <div className="layout-shell">
          <div className="mx-auto max-w-4xl space-y-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold [font-family:var(--font-display-family)]">
              Qué hacemos
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-neutral-700">
              Zonda desarrolló un conjunto de herramientas orientadas a acercar
              tecnología especializada a organizaciones de salud
              latinoamericanas. Una plataforma de gestión donde se administran
              pacientes, turnos, tratamientos y profesionales en un solo sistema
              — y una API robusta que integra software existente y permite
              compartir datos de forma segura y estandarizada.
            </p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 pt-4">
              <div className="flex flex-col gap-2">
                <p className="text-3xl font-bold text-zonda-blue [font-family:var(--font-display-family)]">
                  −30%
                </p>
                <p className="text-sm text-neutral-600">
                  reducción de errores médicos con IA aplicada a datos clínicos
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-3xl font-bold text-zonda-blue [font-family:var(--font-display-family)]">
                  −15%
                </p>
                <p className="text-sm text-neutral-600">
                  en tiempos de diagnóstico gracias a alertas automáticas y
                  perfiles de salud
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-3xl font-bold text-zonda-blue [font-family:var(--font-display-family)]">
                  −30%
                </p>
                <p className="text-sm text-neutral-600">
                  de tareas administrativas liberadas para profesionales de
                  salud
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Origen */}
      <section>
        <div className="layout-shell">
          <div className="mx-auto max-w-4xl space-y-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold [font-family:var(--font-display-family)]">
              De dónde venimos
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-neutral-700">
              Zonda nació en San Juan, como resultado de tres generaciones y más
              de 25 años de experiencia en gestión de salud dentro de una
              empresa familiar. La necesidad de impulsar el crecimiento hizo
              evidente que faltaba una herramienta que no existía: un sistema
              capaz de conectar todas las áreas de una organización con
              múltiples prestadores y amplia cobertura geográfica.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-neutral-700">
              La implementación de tecnología interoperable podría generar un
              ahorro de casi el 10% del gasto en salud en América Latina hacia
              2030 — unos US$&nbsp;30.000 millones. Esa es la oportunidad que
              Zonda está construyendo.
            </p>
          </div>
        </div>
      </section>

      {/* Historias de clientes */}
      <section>
        <div className="layout-shell">
          <FeaturePanel
            tone={FeaturePanelTone.Yellow}
            backgroundStyling={FeaturePanelBackgroundStyling.WhiteLines}
            contentClassName="flex h-full flex-col items-center justify-center gap-16 px-8 py-24 sm:px-12 sm:py-32 lg:px-20 lg:py-40"
          >
            <div className="mx-auto max-w-3xl text-center text-3xl font-bold sm:text-4xl lg:text-6xl text-black [font-family:var(--font-display-family)]">
              Historias de nuestros clientes
            </div>

            <Button asChild size="lg" className="min-w-48">
              <Link href="/casos-de-uso">Ver casos de uso</Link>
            </Button>
          </FeaturePanel>
        </div>
      </section>

      {/* Prensa */}
      <section>
        <div className="layout-shell">
          <div className="mx-auto max-w-4xl space-y-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold [font-family:var(--font-display-family)]">
              En los medios
            </h2>
            <a
              href="https://www.cronista.com/infotechnology/entreprenerds/healthtech-una-startup-argentina-aplica-la-ia-para-generar-ahorros-en-el-sistema-de-salud/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-lg border border-neutral-200 bg-white p-6 md:p-8 transition-colors hover:border-zonda-blue"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
                El Cronista — Infotechnology
              </p>
              <p className="text-xl md:text-2xl font-bold group-hover:text-zonda-blue transition-colors">
                Healthtech: una startup argentina aplica la IA para generar
                ahorros en el sistema de salud
              </p>
              <p className="mt-3 text-sm text-neutral-500">
                Leer nota completa →
              </p>
            </a>
            <a
              href="https://ecosistemastartup.com/startup-argentina-aplica-ia-en-salud-para-reducir-costos/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-lg border border-neutral-200 bg-white p-6 md:p-8 transition-colors hover:border-zonda-blue"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
                Ecosistema Startup
              </p>
              <p className="text-xl md:text-2xl font-bold group-hover:text-zonda-blue transition-colors">
                Startup argentina aplica IA en salud para reducir costos
              </p>
              <p className="mt-3 text-sm text-neutral-500">
                Leer nota completa →
              </p>
            </a>
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
            <div className="mx-auto max-w-3xl text-center text-3xl font-bold sm:text-4xl lg:text-6xl text-vitality-yellow [font-family:var(--font-display-family)]">
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
