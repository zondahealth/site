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
import ExploreButton from '../components/ExploreButton';

const products = [
  {
    number: '01',
    title: 'Organizaciones',
    subtitle: 'CLÍNICAS, HOSPITALES Y REDES MULTI-ORGANIZACIÓN',
    description:
      'Digitalizá tu organización sin reemplazar sistemas existentes. Conocé a tus pacientes, tus empleados y, más importante, tu negocio.',
    features: [
      'Historia clínica unificada',
      'Gestión de evoluciones y base de datos',
      'Interoperabilidad en tiempo real',
    ],
    cta: 'Conocer más',
    href: '/products/organizaciones',
  },
  {
    number: '02',
    title: 'Portal Profesional',
    subtitle: 'PROFESIONALES INDEPENDIENTES',
    description:
      'Un único lugar para gestionar pacientes, registrar evoluciones, organizar la agenda y controlar la práctica — esté o no ligado a una organización.',
    features: [
      'Agenda y recordatorios automáticos',
      'Evoluciones con firma digital y firma electrónica',
    ],
    cta: 'Conocer más',
    href: '/products/profesionales',
  },
  {
    number: '03',
    title: 'Internación Domiciliaria',
    subtitle: 'EMPRESAS DE ATENCIÓN DOMICILIARIA',
    description:
      'Gestión centralizada, aplicación para profesionales en campo, auditoría en tiempo real. Sin puntos ciegos entre la administración y el domicilio del paciente.',
    features: [
      'Asignación inteligente de profesionales',
      'Auditoría de prestaciones',
    ],
    cta: 'Conocer más',
    href: '/products/internacion-domiciliaria',
  },
  {
    number: '04',
    title: 'Interoperabilidad',
    subtitle: 'EQUIPOS TÉCNICOS Y DE DATOS',
    description:
      'Conectá sistemas fragmentados. Normalizá información clínica. Habilitá modelos de pago por resultado, reportes de impacto y auditoría sin fricción — sin reemplazar lo que ya existe.',
    features: [],
    cta: 'Explorar Interoperabilidad',
    href: '/products/interoperabilidad',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pb-0 pt-0">
        <Hero />

        {/* ── EL PROBLEMA ── */}
        <section id="tesis" className="pt-20 sm:pt-28 lg:pt-36 bg-white">
          <div className="layout-shell">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 justify-start">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold [font-family:var(--font-display-family)]">
                Los sistemas de salud son complejos.{' '}
                <span className="text-zonda-blue">
                  Tenemos la infraestructura para resolverlo.
                </span>
              </h2>
              <div className="flex flex-col justify-start gap-6">
                <p className="text-2xl text-neutral-600 leading-relaxed">
                  Cada organización gestiona sus datos de forma aislada. Los
                  profesionales saltan entre plataformas que no se hablan. Los
                  pacientes atraviesan puntos de atención desconectados.
                </p>
                <p className="text-2xl font-semibold text-neutral-900 leading-relaxed">
                  No es coincidencia. Es una limitación estructural.
                  <br />Y se puede resolver.
                </p>
              </div>
            </div>
            <div className="mt-16 sm:mt-20 lg:mt-20">
              <Image
                src="/assets/base/infra.png"
                alt="Infraestructura de datos de salud"
                width={1920}
                height={1080}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>

        {/* ── CASOS DE USO ── */}
        <section>
          <FeaturePanel
            tone={FeaturePanelTone.GreenLines}
            className="rounded-none"
            darkenBackground="subtle"
            contentClassName="py-16 sm:py-20 lg:py-46 px-8 sm:px-12 lg:px-20"
          >
            <div className="layout-shell">
              <div className="flex flex-col justify-center gap-4">
                <span className="text-lg uppercase text-white font-bold">
                  Historias
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-white  max-w-2xl">
                  Equipos de salud que ya cambiaron cómo operan.
                </h2>
                <div className="flex justify-start mt-6">
                  <Button asChild size="lg" className="min-w-48">
                    <Link href="/casos-de-uso">Leer más</Link>
                  </Button>
                </div>
              </div>
            </div>
          </FeaturePanel>
        </section>
        {/* ── RESULTADOS ── */}
        <section>
          <FeaturePanel
            tone={FeaturePanelTone.DarkBlueLines}
            className="rounded-none"
            darkenBackground="medium"
            contentClassName="py-20 sm:py-28 lg:py-36"
          >
            <div className="layout-shell">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                <div className="flex flex-col items-start gap-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                    Resultados
                  </p>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white [font-family:var(--font-display-family)] leading-[1.05]">
                    Mejorá tus resultados y el servicio a tus pacientes.
                  </h2>
                  <p className="text-lg text-white font-semibold leading-relaxed">
                    Organizaciones eligen Zonda porque se integra fácilmente,
                    está operativo desde el primer día y genera trazabilidad en
                    tiempo real — adaptado a Latinoamérica.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-px">
                  {[
                    { value: '+30%', label: 'Ahorro en costos operativos' },
                    { value: '+40%', label: 'Reducción en tiempos de espera' },
                    { value: '+35%', label: 'Reducción en errores médicos' },
                    { value: '+30%', label: 'Detección de fraude' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col gap-2 border-t border-white/15 py-8 pr-6"
                    >
                      <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-vitality-yellow">
                        {stat.value}
                      </span>
                      <span className="text-base font-semibold text-white">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FeaturePanel>
        </section>

        {/* ── PLATAFORMA ── */}
        <section
          className="py-20 sm:py-28 lg:py-36"
          style={{
            background:
              'linear-gradient(to bottom, #ffffff, #ffffff 75%, #f0f5ff)',
          }}
        >
          <div className="layout-shell">
            <div className="mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 mb-4">
                Platform
              </p>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
                <h2 className="text-4xl sm:text-5xl font-bold leading-[1.08] [font-family:var(--font-display-family)]">
                  Diversas soluciones.
                  <br />
                  <span className="text-zonda-blue">
                    Bajo una misma plataforma.
                  </span>
                </h2>
              </div>
            </div>

            <div className="divide-y divide-neutral-200 border-t border-neutral-200">
              {products.map((product) => (
                <div
                  key={product.number}
                  className="grid grid-cols-1 lg:grid-cols-[280px_1fr_auto] gap-6 lg:gap-10 py-10 lg:py-12"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-neutral-400 font-mono">
                      {product.number}
                    </span>
                    <h3 className="text-2xl font-bold">{product.title}</h3>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-neutral-400 mt-1">
                      {product.subtitle}
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-base text-neutral-600 leading-relaxed max-w-xl">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-neutral-400">
                      {product.features.map((f) => (
                        <span key={f}>• {f}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-start lg:pt-1">
                    <ExploreButton
                      href={product.href}
                      title={product.cta}
                      color="black"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* API & Interoperabilidad */}
        <section id="api-interoperabilidad">
          <FeaturePanel
            tone={FeaturePanelTone.Black}
            backgroundStyling={FeaturePanelBackgroundStyling.Lines}
            className="rounded-none"
            imagePosition="bleed"
            contentClassName="py-20 sm:py-28 lg:py-36"
          >
            <div className="layout-shell">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="flex flex-col items-start gap-4">
                  <h3 className="text-5xl font-bold tracking-tight text-vitality-yellow">
                    Descubrí nuestra API
                  </h3>
                  <p className="text-lg font-semibold leading-relaxed sm:text-xl text-white">
                    Conectá sistemas fragmentados. Normalizá información
                    clínica. Habilitá modelos de pago por resultado, reportes de
                    impacto y auditoría sin fricción, sin reemplazar lo que ya
                    existe.
                  </p>
                  <ExploreButton href="/desarrolladores" title="Explorar la API" />
                </div>
                <div className="relative min-h-[20rem] lg:min-h-[28rem] overflow-hidden rounded-md">
                  <Image
                    src="/assets/base/terminal.png"
                    alt="API & Interoperabilidad"
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>
            </div>
          </FeaturePanel>
        </section>

        {/* ── CTA FINAL ── */}
        <section>
          <FeaturePanel
            tone={FeaturePanelTone.DarkBlueLines}
            darkenBackground="medium"
            className="rounded-none"
            backgroundStyling={FeaturePanelBackgroundStyling.Lines}
            contentClassName="flex h-full flex-col items-center justify-center gap-16 px-8 py-20 sm:px-12 sm:py-28 lg:px-20 lg:py-46"
          >
            <div className="mx-auto max-w-3xl text-center text-3xl font-bold sm:text-3xl lg:text-6xl text-white">
              Datos que fluyen. <br />
              <span className="text-vitality-yellow">Salud que funciona.</span>
            </div>

            <Button asChild size="lg" className="min-w-48">
              <Link href="/contacto">Contáctanos</Link>
            </Button>
          </FeaturePanel>
        </section>
      </main>
    </div>
  );
}
