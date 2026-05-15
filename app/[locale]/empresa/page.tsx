import Link from 'next/link';
import {
  FeaturePanel,
  FeaturePanelBackgroundStyling,
  FeaturePanelTone,
} from '@/app/components/FeaturePanel';
import { Button } from '@/app/components/ui/button';
import ExploreButton from '@/app/components/ExploreButton';

export default function EmpresaPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <FeaturePanel
        className="flex w-full flex-col rounded-none h-[100dvh] min-h-[30rem]"
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

      {/* ── QUÉ HACEMOS ── */}
      <section className="py-20 sm:py-28 lg:py-36 bg-white">
        <div className="layout-shell">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 mb-10">
            Misión
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] [font-family:var(--font-display-family)]">
              Qué hacemos
            </h2>
            <div className="flex flex-col justify-start gap-6">
              <p className="text-2xl text-neutral-600 leading-relaxed">
                Zonda desarrolló un conjunto de herramientas orientadas a acercar
                tecnología especializada a organizaciones de salud
                latinoamericanas. Una plataforma de gestión donde se administran
                pacientes, turnos, tratamientos y profesionales en un solo
                sistema — y una API robusta que integra software existente y
                permite compartir datos de forma segura y estandarizada.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-16 lg:mt-24 border-t border-neutral-200 pt-12">
            {[
              {
                value: '−30%',
                label:
                  'Reducción de errores médicos con IA aplicada a datos clínicos',
              },
              {
                value: '−15%',
                label:
                  'En tiempos de diagnóstico gracias a alertas automáticas y perfiles de salud',
              },
              {
                value: '−30%',
                label:
                  'De tareas administrativas liberadas para profesionales de salud',
              },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2">
                <p className="text-4xl lg:text-5xl font-bold text-zonda-blue [font-family:var(--font-display-family)]">
                  {stat.value}
                </p>
                <p className="text-base text-neutral-600 leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DE DÓNDE VENIMOS ── */}
      <section className="py-20 sm:py-28 lg:py-36 bg-white">
        <div className="layout-shell">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 mb-10">
            Origen
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] [font-family:var(--font-display-family)]">
              De dónde venimos
            </h2>
            <div className="flex flex-col justify-start gap-8">
              <p className="text-xl text-neutral-600 leading-relaxed">
                Zonda nació en San Juan, como resultado de tres generaciones y
                más de 25 años de experiencia en gestión de salud dentro de una
                empresa familiar. La necesidad de impulsar el crecimiento hizo
                evidente que faltaba una herramienta que no existía: un sistema
                capaz de conectar todas las áreas de una organización con
                múltiples prestadores y amplia cobertura geográfica.
              </p>
              <p className="text-xl font-semibold text-neutral-900 leading-relaxed">
                La implementación de tecnología interoperable podría generar un
                ahorro de casi el 10% del gasto en salud en América Latina
                hacia 2030 — unos US$&nbsp;30.000 millones. Esa es la
                oportunidad que Zonda está construyendo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HISTORIAS ── */}
      <section>
        <FeaturePanel
          tone={FeaturePanelTone.YellowBlueLines}
          className="rounded-none"
          contentClassName="py-28 sm:py-36 lg:py-48"
        >
          <div className="layout-shell">
            <div className="flex flex-col items-center text-center gap-10">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black [font-family:var(--font-display-family)] max-w-3xl">
                Historias de nuestros clientes
              </h2>
              <Button asChild size="lg" className="min-w-48">
                <Link href="/casos-de-uso">Ver casos de uso</Link>
              </Button>
            </div>
          </div>
        </FeaturePanel>
      </section>

      {/* ── PRENSA ── */}
      <section className="py-20 sm:py-28 lg:py-36 bg-white">
        <div className="layout-shell">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 mb-10">
            Prensa
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold [font-family:var(--font-display-family)] mb-12">
            En los medios
          </h2>

          <div className="divide-y divide-neutral-200 border-t border-neutral-200">
            {[
              {
                source: 'El Cronista — Infotechnology',
                title:
                  'Healthtech: una startup argentina aplica la IA para generar ahorros en el sistema de salud',
                href: 'https://www.cronista.com/infotechnology/entreprenerds/healthtech-una-startup-argentina-aplica-la-ia-para-generar-ahorros-en-el-sistema-de-salud/',
              },
              {
                source: 'Ecosistema Startup',
                title:
                  'Startup argentina aplica IA en salud para reducir costos',
                href: 'https://ecosistemastartup.com/startup-argentina-aplica-ia-en-salud-para-reducir-costos/',
              },
            ].map((article) => (
              <a
                key={article.href}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 lg:gap-10 py-10 lg:py-12 items-center"
              >
                <div className="flex flex-col gap-2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-neutral-400">
                    {article.source}
                  </p>
                  <p className="text-xl md:text-2xl font-bold group-hover:text-zonda-blue transition-colors">
                    {article.title}
                  </p>
                </div>
                <div className="flex items-center">
                  <ExploreButton
                    href={article.href}
                    title="Leer nota"
                    color="black"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section>
        <FeaturePanel
          tone={FeaturePanelTone.DarkBlueLines}
          darkenBackground="medium"
          className="rounded-none"
          backgroundStyling={FeaturePanelBackgroundStyling.Lines}
          contentClassName="flex h-full flex-col items-center justify-center gap-16 px-8 py-28 sm:px-12 sm:py-36 lg:px-20 lg:py-48"
        >
          <div className="mx-auto max-w-3xl text-center text-3xl font-bold sm:text-3xl lg:text-6xl text-white [font-family:var(--font-display-family)]">
            Hablemos
          </div>

          <Button asChild size="lg" className="min-w-48">
            <Link href="/contacto">Contactanos</Link>
          </Button>
        </FeaturePanel>
      </section>
    </div>
  );
}
