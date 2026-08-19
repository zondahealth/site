import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ContactBanner } from "@/components/home/ContactBanner";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/button/button";
import {
  FeatureHero,
  FeatureHeroContent,
  FeatureHeroMedia,
} from "@/components/ui/feature-hero/feature-hero";
import { SectionIntro } from "@/components/use-cases/UseCasePrimitives";

export const metadata: Metadata = {
  title: "Interdom redujo sus costos operativos un 23% | Zonda",
  description:
    "Cómo Interdom Argentina digitalizó su operación de internación domiciliaria con Zonda, redujo costos un 23% y procesó más de un millón de registros clínicos.",
};

const metrics = [
  { value: "23%", label: "Menos costos operativos" },
  { value: "30%", label: "Menos fraude en facturación" },
  { value: "+1 M", label: "Registros clínicos procesados" },
  { value: "12", label: "Integraciones activas" },
] as const;

const platformLayers = [
  {
    title: "Herramientas listas para usar",
    copy: "Zonda digitaliza agenda, pacientes, prácticas, registros clínicos y facturación con flujos preparados para organizaciones que todavía dependen de procesos manuales.",
  },
  {
    title: "Infraestructura para construir",
    copy: "Nuestra API y la capacidad de procesamiento de Zonda permiten crear herramientas propias sobre datos ya conectados, sin tener que desarrollar desde cero la infraestructura clínica y operativa.",
  },
] as const;

const solutions = [
  {
    title: "Sistema de gestión y app móvil para profesionales",
    copy: "Cada profesional recibe su agenda, consulta el historial del paciente y registra la atención desde la app de Zonda. La información llega al equipo de coordinación en el momento, sin papel, llamadas ni una segunda carga manual.",
  },
  {
    title: "Control operativo en tiempo real",
    copy: "El monitor desarrollado por Interdom sobre Zonda reúne ubicación de profesionales y móviles, estado de las visitas, alertas y pacientes pendientes de asignación. Coordinación puede detectar desvíos y actuar antes de que impacten en la atención.",
  },
  {
    title: "Algoritmos de optimización de recorridos",
    copy: "La asignación combina especialidad, disponibilidad y eficiencia del recorrido para seleccionar al profesional adecuado. Los recorridos optimizados reducen traslados y permiten coordinar más visitas con menos intervención administrativa.",
  },
  {
    title: "Integraciones unificadas con financiadores y sistemas externos",
    copy: "Doce integraciones conectan financiadores, facturación y herramientas operativas mediante nuestra API. Las validaciones que antes eran manuales ahora se ejecutan automáticamente, reduciendo errores, débitos y tiempos de cobro.",
  },
] as const;

export default function InterdomPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <FeatureHero>
        <FeatureHeroContent>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.10em] text-foreground">
            Caso de estudio · Interdom + Zonda
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-foreground sm:text-5xl">
            Interdom redujo sus costos operativos un 23% con Zonda
          </h1>
          <p className="mt-4 text-lg leading-7 text-foreground/80">
            Interdom Argentina coordina atención médica, de enfermería y
            kinesiología en los hogares de pacientes de múltiples provincias.
            Con más de 500 profesionales en campo, necesitaba digitalizar una
            operación logística compleja sin sumar fricción para sus equipos.
          </p>
          <div className="mt-6">
            <Button variant="black" asChild>
              <Link href="#contacto">
                Agendar una llamada
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </FeatureHeroContent>
        <FeatureHeroMedia>
          <Image
            src="/assets/customer-stories/interdomxzonda.png"
            alt="Monitor operativo de Interdom construido sobre Zonda con mapa de profesionales, vehículos GPS, alertas y pacientes sin asignar"
            width={1118}
            height={976}
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="mx-auto h-auto w-full max-w-[720px] object-contain"
          />
        </FeatureHeroMedia>
      </FeatureHero>

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <dl className="grid divide-y divide-border border-y border-border sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="grid grid-cols-[5.5rem_1fr] items-baseline gap-4 py-5 sm:block sm:px-6 sm:py-7 sm:first:pl-0 sm:last:pr-0"
              >
                <dt className="text-xs font-semibold uppercase leading-snug tracking-[0.08em] text-muted-foreground sm:min-h-10">
                  {metric.label}
                </dt>
                <dd className="-order-1 font-display text-3xl font-semibold tracking-tight text-secondary sm:mt-3 sm:text-4xl">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>

          <figure className="mt-14 sm:mt-20">
            <div className="overflow-hidden rounded-[1.5rem] bg-muted">
              <Image
                src="/assets/customer-stories/inderdom-moviles.jpg"
                alt="Equipo de Interdom junto a su flota de móviles de atención domiciliaria"
                width={1140}
                height={660}
                sizes="(min-width: 1024px) 960px, calc(100vw - 48px)"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              La flota de Interdom integra seguimiento GPS con Zonda para
              coordinar recorridos y tener visibilidad de la operación en campo
              en tiempo real.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionIntro
            compact
            title="El desafío: crecer sin perder el control"
            copy="Coordinar profesionales, recorridos, visitas, registros clínicos, reclamos y facturación requería procesos manuales distribuidos entre distintas herramientas. Esa fragmentación hacía difícil conocer el estado real de la operación, detectar desvíos a tiempo y ampliar la cobertura sin aumentar al mismo ritmo la carga administrativa."
            className="max-w-3xl"
          />
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionIntro
            compact
            eyebrow="Una plataforma, dos formas de avanzar"
            title="Digitalizar hoy. Construir lo que sigue."
            copy="Interdom encontró en Zonda una base para resolver necesidades inmediatas y, al mismo tiempo, desarrollar capacidades propias. La organización usa las herramientas de gestión incluidas en la plataforma y aprovecha su API para convertir los datos operativos en productos adaptados a su forma de trabajar."
            className="max-w-3xl"
          />

          <div className="mt-10 grid border-y border-border sm:grid-cols-2 sm:divide-x sm:divide-border">
            {platformLayers.map((layer) => (
              <div
                key={layer.title}
                className="py-7 first:border-b first:border-border sm:px-8 sm:first:border-b-0 sm:first:pl-0 sm:last:pr-0"
              >
                <h3 className="font-display text-xl font-semibold leading-snug">
                  {layer.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {layer.copy}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Sobre nuestra API, Interdom construyó un monitor que combina
            ubicación, especialidades, alertas y asignaciones, además de un
            sistema automatizado de resolución de reclamos y capacidades de
            auditoría en cada punto de la organización. Esto simplifica la
            operatoria para los profesionales de la salud y el equipo
            administrativo, y brinda a los pacientes mucha más visibilidad
            sobre su atención.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionIntro
            compact
            title="Una operación conectada de punta a punta"
            className="max-w-3xl"
          />

          <div className="mt-10 divide-y divide-border">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                className="grid gap-4 py-9 first:pt-0 last:pb-0 sm:grid-cols-[3rem_1fr] sm:gap-6 sm:py-11"
              >
                <span
                  className="pt-1 text-sm font-semibold text-secondary"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold leading-snug">
                    {solution.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {solution.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionIntro
            compact
            title="Resultados visibles desde los primeros tres meses"
            copy="La combinación de gestión digital, datos conectados y herramientas propias permitió a Interdom reducir un 23% sus costos operativos y un 30% el fraude en facturación. La organización procesó más de un millón de registros clínicos y consolidó 12 integraciones activas sin trasladar la complejidad tecnológica a sus profesionales ni al equipo administrativo."
            className="max-w-3xl"
          />

          <div className="mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Image
              src="/assets/customer-stories/interdom-logo.png"
              alt="Interdom Argentina"
              width={308}
              height={103}
              className="h-10 w-auto sm:h-12"
            />
            <span className="text-2xl text-muted-foreground/50" aria-hidden="true">
              ·
            </span>
            <Logo variant="full" color="blue" className="h-8 w-auto sm:h-9" />
          </div>

          <blockquote className="mt-10 border-y border-border py-10 sm:py-12">
            <div className="grid gap-4 sm:grid-cols-[3rem_1fr] sm:gap-6">
              <span
                className="font-display text-6xl font-semibold leading-[0.75] text-secondary"
                aria-hidden="true"
              >
                “
              </span>
              <div>
                <p className="font-display text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
                  Lo que más nos sorprendió no fue la tecnología en sí, sino
                  todo lo que pudimos construir sobre ella. Procesos que
                  hacíamos a mano desde siempre, como coordinación, reclamos y
                  asignación de pacientes, de repente los teníamos integrados
                  en un solo lugar. Zonda se convirtió en el sistema nervioso
                  de nuestra operación.
                </p>
                <footer className="mt-8">
                  <p className="text-lg font-semibold text-foreground sm:text-xl">
                    Gabriel Alonso
                  </p>
                  <p className="mt-1 text-base text-muted-foreground">
                    Coordinación General de Operaciones, Interdom Argentina
                  </p>
                </footer>
              </div>
            </div>
          </blockquote>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionIntro
            compact
            eyebrow="Lo que sigue para Interdom"
            title="Convertir visibilidad en acción"
            copy="Interdom ya no opera a ciegas. Cada visita, recorrido, reclamo, decisión asistencial y movimiento financiero deja una señal conectada. El próximo paso es transformar esa memoria operativa en acción: anticipar desvíos, optimizar recursos, detectar riesgos y acompañar mejor la evolución de cada paciente. Lo que antes se perdía hoy se aprende; lo que hoy se aprende puede convertirse en una operación más inteligente, sostenible y centrada en las personas."
            className="max-w-3xl"
          />
        </div>
      </section>

      <ContactBanner />
    </main>
  );
}
