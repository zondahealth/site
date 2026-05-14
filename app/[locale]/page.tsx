'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  FeaturePanel,
  FeaturePanelBackgroundStyling,
  FeaturePanelTone,
} from '../components/FeaturePanel';
import { Hero } from '../components/Hero';
import { ImageTitleBlock } from '../components/ImageTitleBlock';
import { Button } from '../components/ui/button';
import { ArrowRightCircleIcon } from 'lucide-react';
import ExploreButton from '../components/ExploreButton';

const caseStudies = [
  {
    title: 'Interoperabilidad',
    image: '/assets/cs/interop.png',
  },
  {
    title: 'Cambio de Paradigma',
    image: '/assets/cs/interop.png',
  },
  {
    title: 'Fraude',
    image: '/assets/cs/interop.png',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="space-y-16 md:space-y-26 pb-16 pt-0">
        <Hero />

        {/* ── EL PROBLEMA ── */}
        <section id="use-cases">
          <div className="layout-shell">
            <FeaturePanel
              panelSize="xl"
              imagePosition="bottom"
              contentClassName="text-center flex flex-col flex-1 h-full pt-14 lg:pt-24 md:px-10"
              tone={FeaturePanelTone.White}
              backgroundStyling={FeaturePanelBackgroundStyling.Full}
            >
              <div className="flex flex-col flex-1 px-4 justify-center items-center gap-8">
                <div className="text-2xl md:text-4xl font-medium text-balance md:gap-2 w-full justify-center items-center xl:pb-10">
                  <span className="">Empoderá </span>
                  <span className="text-zonda-blue">
                    Operaciones Autónomas.
                  </span>
                </div>
                <div className="w-full flex-1">
                  <Image
                    src="/assets/base/infra.png"
                    alt="Cómo funciona"
                    width={1920}
                    height={1080}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </FeaturePanel>
          </div>
        </section>

        {/* ── CASOS DE USO ── */}
        <section>
          <div className="layout-shell">
            <FeaturePanel
              tone={FeaturePanelTone.White}
              backgroundImage={
                <Image
                  src="/bg/styling/white-lines.png"
                  alt="Casos de uso"
                  fill
                  className="object-cover opacity-10"
                />
              }
              contentClassName="flex h-full flex-col items-center justify-center gap-6 px-8 py-20 sm:px-12 sm:py-28 lg:px-20 lg:py-36 text-center"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold [font-family:var(--font-display-family)]">
                Historias
              </h2>
              <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl">
                Descubrí cómo organizaciones líderes en salud usan Zonda para
                aumentar la productividad, mejorar la atención al paciente y
                optimizar sus operaciones.
              </p>
              <ExploreButton
                href="/casos-de-uso"
                title="Ver casos de uso"
                color="black"
              />
            </FeaturePanel>
          </div>
        </section>

        {/* ── LO QUE ES POSIBLE CON ZONDA ── */}
        <section>
          <div className="layout-shell flex flex-col">
            <div className="flex w-full flex-col gap-6 text-center text-white"></div>
            <div className="flex flex-col gap-32">
              {/* Organizaciones */}
              <div id="organizaciones">
                <FeaturePanel
                  tone={FeaturePanelTone.SolidBlue}
                  backgroundStyling={FeaturePanelBackgroundStyling.WhiteLines}
                  contentClassName="flex h-full flex-col items-center justify-center gap-6 px-8 py-20 sm:px-12 sm:py-28 lg:px-20 lg:py-36 text-center text-white"
                >
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight [font-family:var(--font-display-family)]">
                    Organizaciones
                  </h3>
                  <p className="text-lg font-semibold leading-relaxed sm:text-xl max-w-2xl">
                    Digitalizá tu organización sin reemplazar sistemas
                    existentes. Conocé a tus pacientes, tus empleados y, más
                    importante, tu negocio. Desbloqueá el poder de los datos con
                    Zonda.
                  </p>
                  <ExploreButton
                    href="/products/organizaciones"
                    title="Conocer más"
                    color="default"
                  />
                </FeaturePanel>
              </div>

              {/* Portal del Profesional */}
              <div id="portal-del-profesional">
                <FeaturePanel
                  tone={FeaturePanelTone.Yellow}
                  backgroundStyling={FeaturePanelBackgroundStyling.Lines}
                  contentClassName="flex h-full flex-col items-center justify-center gap-6 px-8 py-20 sm:px-12 sm:py-28 lg:px-20 lg:py-36 text-center"
                >
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight [font-family:var(--font-display-family)]">
                    Portal Profesional
                  </h3>
                  <p className="text-lg font-semibold leading-relaxed sm:text-xl max-w-2xl">
                    Un único lugar para gestionar pacientes, registrar
                    evoluciones, organizar la agenda y controlar la práctica —
                    esté o no ligado a una organización.
                  </p>
                  <ExploreButton
                    href="/platform/professional"
                    title="Conocer más"
                    color="black"
                  />
                </FeaturePanel>
              </div>

              {/* Internación Domiciliaria */}
              <div id="internacion-domiciliaria">
                <FeaturePanel
                  tone={FeaturePanelTone.SolidGreen}
                  backgroundStyling={FeaturePanelBackgroundStyling.Map}
                  contentClassName="flex h-full flex-col items-center justify-center gap-6 px-8 py-20 sm:px-12 sm:py-28 lg:px-20 lg:py-36 text-center text-white"
                >
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight [font-family:var(--font-display-family)]">
                    Internación Domiciliaria
                  </h3>
                  <p className="text-lg font-semibold leading-relaxed sm:text-xl max-w-2xl">
                    Gestión centralizada, aplicación para profesionales en campo
                    u oficina, auditoría en tiempo real. Todo conectado. Sin
                    puntos ciegos entre la administración y el domicilio del
                    paciente.
                  </p>
                  <ExploreButton
                    href="/products/internacion-domiciliaria"
                    title="Conocer más"
                    color="default"
                  />
                </FeaturePanel>
              </div>

              {/* API & Interoperabilidad */}
              <div id="api-interoperabilidad">
                <FeaturePanel
                  tone={FeaturePanelTone.Black}
                  backgroundStyling={FeaturePanelBackgroundStyling.Lines}
                  imagePosition="bleed"
                  panelSize="lg"
                  contentClassName="items-start gap-4 text-white"
                  image={
                    <Image
                      src="/assets/base/terminal.png"
                      alt="API & Interoperabilidad"
                      fill
                      className="object-cover object-right"
                      sizes="(min-width: 1024px) 80vw, 100vw"
                    />
                  }
                >
                  <h3 className="text-4xl font-bold tracking-tight">
                    Interoperabilidad
                  </h3>
                  <p className="text-lg font-semibold leading-relaxed sm:text-xl">
                    Conectá sistemas fragmentados. Normalizá información
                    clínica. Habilitá modelos de pago por resultado, reportes de
                    impacto y auditoría sin fricción — sin reemplazar lo que ya
                    existe.
                  </p>
                  <ExploreButton href="/docs" title="Explorar la API" />
                </FeaturePanel>
              </div>
            </div>
          </div>
        </section>

        {/* ── CASE STUDIES ── */}
        {/* <section id="case-studies">
          <div className="layout-shell grid grid-cols-1 gap-8 py-10 md:grid-cols-3">
            {caseStudies.map((caseStudy) => (
              <ImageTitleBlock
                key={caseStudy.title}
                title={caseStudy.title}
                image={caseStudy.image}
                imageAlt={caseStudy.title}
              />
            ))}
          </div>
        </section> */}

        {/* ── CTA FINAL ── */}
        <section>
          <div className="layout-shell">
            <FeaturePanel
              tone={FeaturePanelTone.White}
              contentClassName="flex h-full flex-col items-center justify-center gap-16 px-8 py-24 sm:px-12 sm:py-32 lg:px-20 lg:py-48"
            >
              <div className="mx-auto max-w-3xl text-center text-3xl font-bold sm:text-3xl lg:text-6xl">
                Datos que fluyen. <br />
                <span className="text-zonda-blue">Salud que funciona.</span>
              </div>

              <Button asChild size="lg" className="min-w-48">
                <Link href="/contacto">Contáctanos</Link>
              </Button>
            </FeaturePanel>
          </div>
        </section>
      </main>
    </div>
  );
}
