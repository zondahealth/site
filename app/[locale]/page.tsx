'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  FeaturePanel,
  FeaturePanelBackgroundStyling,
  FeaturePanelTone,
} from '../components/FeaturePanel';
import { Hero } from '../components/Hero';
import { Button } from '../components/ui/button';
import { ArrowRightCircleIcon } from 'lucide-react';

const solutions = [
  {
    title: 'Portal del Profesional',
    audience: 'Para profesionales independientes',
    description:
      'Un único lugar para gestionar pacientes, registrar evoluciones, organizar la agenda y controlar la práctica — esté o no ligado a una organización.',
    cta: 'Anotarse en la lista',
    ctaHref: '/waitlist',
    tone: FeaturePanelTone.GradientBlue,
    backgroundStyling: FeaturePanelBackgroundStyling.Right,
    image: '/assets/data.png',
    textColor: 'text-white',
  },
  {
    title: 'Internación Domiciliaria',
    audience: 'Para empresas de atención domiciliaria',
    description:
      'Gestión centralizada, aplicación para profesionales en campo, LOE y auditoría en tiempo real. Todo conectado. Sin puntos ciegos entre la administración y el domicilio del paciente.',
    cta: 'Conocer más',
    ctaHref: '/solutions/home-health',
    tone: FeaturePanelTone.GradientGreen,
    backgroundStyling: FeaturePanelBackgroundStyling.Left,
    image: '/assets/data.png',
    textColor: 'text-white',
  },
  {
    title: 'API & Interoperabilidad',
    audience: 'Para organizaciones que necesitan entender sus propios datos',
    description:
      'Conectá sistemas fragmentados. Normalizá información clínica. Habilitá modelos de pago por resultado, reportes de impacto y auditoría sin fricción — sin reemplazar lo que ya existe.',
    cta: 'Explorar la API',
    ctaHref: '/docs',
    tone: FeaturePanelTone.Black,
    overlayClassName: '',
    backgroundStyling: FeaturePanelBackgroundStyling.Full,
    image: '/assets/world-rings.png',
    textColor: 'text-white',
  },
];

const steps = [
  {
    number: '01',
    title: 'Captura',
    description:
      'Datos desde cualquier fuente — aplicaciones móviles, integraciones con historias clínicas electrónicas, PDFs, Excel, dispositivos, chatbots y texto libre. En cualquier formato, desde cualquier sistema.',
  },
  {
    number: '02',
    title: 'Inteligencia',
    description:
      'Zonda identifica al paciente, normaliza semánticamente la información, construye el historial longitudinal y corre inteligencia clínica — alertas, patrones, predicción de demanda.',
  },
  {
    number: '03',
    title: 'Acción',
    description:
      'Auditoría en tiempo real, facturación automática, reportes de impacto, tableros por organización, región y profesional. Los datos limpios se exportan hacia cualquier sistema de destino.',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="space-y-32 pb-26 pt-0">
        <Hero />

        {/* ── EL PROBLEMA ── */}
        <section id="products">
          <div className="layout-shell flex flex-col gap-14">
            <div className="flex w-full flex-col gap-16 text-center">
              <div className=" text-6xl font-semibold flex flex-col gap-2">
                <span>Los sistemas de salud son complejos.</span>
                <span className="text-zonda-blue">
                  Tenemos la infraestructura para resolverlo.
                </span>
              </div>
              <p className="text-pretty text-lg font-medium leading-relaxed text-on-surface-variant sm:text-xl max-w-4xl mx-auto">
                Cada organización opera en su propio silo. Los datos clínicos no
                se transfieren. Los profesionales trabajan con múltiples
                plataformas que no se hablan entre sí. Los pacientes pasan por
                decenas de puntos de contacto invisibles para todos.
              </p>
              <span
                className="text-zonda-blue-dark font-bold text-4xl"
                style={{ fontFamily: 'var(--font-display-family)' }}
              >
                La Ineficiencia es Sistemática
              </span>
            </div>
          </div>
        </section>

        <div className="layout-shell">
          <div className="my-24 h-px w-full bg-[rgba(21,27,43,0.10)]" />
        </div>

        {/* ── LO QUE ES POSIBLE CON ZONDA ── */}
        <section>
          <div className="layout-shell flex flex-col gap-16">
            <h2 className="text-balance text-center text-3xl font-medium leading-[0.98] sm:text-4xl lg:text-5xl">
              Lo que es posible con Zonda
            </h2>
            <div className="flex w-full flex-col gap-6 text-center"></div>
            <div className="flex flex-col gap-24">
              {solutions.map((solution, i) => {
                const anchorId =
                  solution.title === 'Portal del Profesional'
                    ? 'profesionales'
                    : solution.title === 'Internación Domiciliaria'
                      ? 'internacion-domiciliaria'
                      : 'interoperabilidad';

                return (
                  <div key={solution.title} id={anchorId}>
                    <FeaturePanel
                      tone={solution.tone}
                      className={`border border-[color:rgba(21,27,43,0.08)] shadow-[0_22px_44px_-34px_rgba(17,27,43,0.18)] ${solution.textColor}`}
                      contentClassName="flex h-full flex-col items-center justify-center px-8 py-12 sm:px-12 sm:py-14 lg:px-26 lg:py-30"
                      overlayClassName={solution.overlayClassName}
                      backgroundStyling={solution.backgroundStyling}
                    >
                      <div
                        className={`grid grid-cols-1 gap-8 lg:grid-cols-2 ${i % 2 !== 0 ? 'lg:direction-rtl' : ''} ${solution.textColor}`}
                      >
                        <div
                          className={`flex flex-col items-start justify-center gap-4 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}
                        >
                          <div className="flex items-center gap-2.5">
                            <h3
                              className={`text-4xl font-bold tracking-tight ${solution.textColor}`}
                            >
                              {solution.title}
                            </h3>
                          </div>
                          <p
                            className={`text-base font-semibold sm:text-lg ${solution.textColor}`}
                          >
                            {solution.audience}
                          </p>
                          <p
                            className={`text-lg font-semibold leading-relaxed sm:text-xl ${solution.textColor}`}
                          >
                            {solution.description}
                          </p>
                          <Button
                            asChild
                            variant="link"
                            className={`text-base font-bold underline-offset-4 hover:underline ${solution.textColor}`}
                          >
                            <Link href={solution.ctaHref}>
                              {solution.cta} <ArrowRightCircleIcon />
                            </Link>
                          </Button>
                        </div>
                        <div
                          className={`relative flex min-h-[20rem] items-center justify-center lg:min-h-[24rem] ${i % 2 !== 0 ? 'lg:order-1' : ''}`}
                        >
                          <Image
                            src={solution.image}
                            alt={solution.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </FeaturePanel>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CÓMO FUNCIONA ── */}
        <section id="use-cases">
          <div className="layout-shell flex flex-col gap-16">
            <h2 className="text-balance text-center text-3xl font-medium leading-[0.98] sm:text-4xl lg:text-5xl">
              Procesá datos. Mejorá resultados.
            </h2>
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {steps.map((step) => (
                  <FeaturePanel
                    key={step.number}
                    tone={FeaturePanelTone.SolidGrey}
                    contentClassName="flex h-full flex-col items-start justify-center px-8 py-6 lg:px-10 lg:py-8 lg:max-w-sm"
                  >
                    <h3 className="mb-4 text-xl font-bold">
                      <span className="text-zonda-blue-dark">
                        {step.number}
                      </span>{' '}
                      - {step.title}
                    </h3>
                    <p className="text-on-surface-variant">
                      {step.description}
                    </p>
                  </FeaturePanel>
                ))}
              </div>
              <div className="w-full">
                <Image
                  src="/assets/how-it-works.png"
                  alt="Cómo funciona"
                  width={1774}
                  height={887}
                  className="h-auto w-full"
                  sizes="(min-width: 1280px) 1216px, 100vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── POR QUÉ ZONDA ── */}
        <section id="company">
          <div className="layout-shell flex flex-col gap-16">
            <FeaturePanel
              key="por-que-zonda"
              tone={FeaturePanelTone.Purple}
              contentClassName="flex h-full flex-col items-center justify-center px-8 py-12 sm:px-12 sm:py-14 lg:px-20 lg:py-32 text-white"
            >
              <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                <div
                  className="flex flex-col items-start justify-center gap-8"
                  id="organizaciones"
                >
                  <h3 className="text-4xl font-extrabold sm:text-5xl">
                    Mejorá tus resultados y el servicio a tus pacientes.
                  </h3>
                  <p className="text-xl font-semibold leading-relaxed">
                    Organizaciones y profesionales eligen Zonda porque se
                    integra fácilmente, está operativo desde el primer día y
                    genera trazabilidad y reportes en tiempo real, adaptado a
                    Latinoamérica.
                  </p>
                </div>
                <div className="relative flex min-h-[20rem] items-center justify-center lg:min-h-[24rem]">
                  <div className="grid grid-cols-2 gap-16">
                    {[
                      {
                        value: '+30%',
                        title: 'Ahorro en costos operativos',
                        subtitle: 'Optimización de recursos',
                      },
                      {
                        value: '+40%',
                        title: 'Reducción en tiempos de espera',
                        subtitle: 'Eficiencia mejorada',
                      },
                      {
                        value: '+35%',
                        title: 'Reducción en errores médicos',
                        subtitle: 'Mayor precisión',
                      },
                      {
                        value: '+30%',
                        title:
                          'Ahorro por detección de fraude y prácticas inapropiadas',
                        subtitle: 'Seguridad garantizada',
                      },
                    ].map((item) => (
                      <div key={item.title} className="flex flex-col gap-2">
                        <p className="text-6xl font-extrabold text-vitality-yellow">
                          {item.value}
                        </p>
                        <p className="text-xl font-bold text-white">
                          {item.title}
                        </p>
                        <p className="text-lg font-semibold text-white">
                          {item.subtitle}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FeaturePanel>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section>
          <div className="layout-shell">
            <FeaturePanel
              tone={FeaturePanelTone.SolidGrey}
              contentClassName="flex h-full flex-col items-center justify-center gap-16 px-8 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-32"
            >
              <div className="mx-auto max-w-3xl text-center text-3xl font-bold sm:text-3xl lg:text-4xl">
                Datos que fluyen. Salud que funciona.
              </div>

              <Button asChild size="lg" className="min-w-48">
                <Link href="/demo">Contáctanos</Link>
              </Button>
            </FeaturePanel>
          </div>
        </section>
      </main>
    </div>
  );
}
