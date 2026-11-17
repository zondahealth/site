import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { testimonials } from "@/components/testimonials/stories";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";
import { cn } from "@/components/ui/utils";

export const metadata: Metadata = {
  title: "Interdom redujo sus costos operativos un 23%",
  description:
    "Cómo Interdom Argentina digitalizó su operación de internación domiciliaria con Zonda, redujo costos un 23% y procesó más de un millón de registros clínicos.",
};

const metrics = [
  { value: "23%", label: "menos costos operativos" },
  { value: "30%", label: "menos fraude en facturación" },
  { value: "+1 M", label: "registros clínicos procesados" },
  { value: "12", label: "integraciones activas" },
] as const;

const facts = [
  { label: "Organización", value: "Interdom Argentina" },
  { label: "Industria", value: "Internación domiciliaria" },
  { label: "Especialidades", value: "Medicina, enfermería y kinesiología" },
  { label: "Alcance", value: "Múltiples provincias de Argentina" },
  {
    label: "Con Zonda",
    value: "Monitor operativo, app de campo, integraciones y API",
  },
] as const;

const frictions = [
  "Información repartida entre herramientas que no se hablaban entre sí.",
  "Lo que pasaba en cada hogar llegaba a coordinación con demora, o no llegaba.",
  "Validaciones y facturación que dependían de volver a cargar los mismos datos.",
] as const;

const otherStories = testimonials.filter(
  (story) => story.id !== "interdom" && story.href,
);

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring";

export default function InterdomPage() {
  return (
    <main lang="es" className="bg-background text-foreground">
      <article>
        {/* Encabezado de la nota */}
        <header className="px-6 pb-12 pt-32 sm:px-10 sm:pb-16 sm:pt-40 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/customer-stories"
              className={cn(
                "inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground",
                focusRing,
              )}
            >
              <ArrowLeft aria-hidden="true" className="size-4" />
              Historias de clientes
            </Link>
            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
              Caso de estudio · Internación domiciliaria
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Una operación de salud que ya no trabaja a ciegas.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
              Interdom conectó en una sola plataforma lo que sucede entre
              pacientes, profesionales, móviles, financiadores y coordinación.
              El resultado: 23% menos costos operativos.
            </p>
          </div>
        </header>

        <figure className="px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-lg border border-foreground">
              <Image
                src="/assets/customer-stories/interdom-moviles.jpg"
                alt="Equipo de Interdom junto a su flota de móviles de atención domiciliaria"
                width={1140}
                height={660}
                priority
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 text-sm text-muted-foreground">
              Equipo de Interdom junto a su flota de atención domiciliaria.
            </figcaption>
          </div>
        </figure>

        {/* Cuerpo */}
        <div className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-16">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <Image
                src="/assets/customer-stories/interdom-logo.png"
                alt="Interdom Argentina"
                width={308}
                height={103}
                className="h-8 w-auto"
              />
              <dl className="mt-8 space-y-5 border-t border-foreground pt-6">
                {facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium leading-6">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-foreground pt-6 lg:grid-cols-1">
                {metrics.map((metric) => (
                  <div key={metric.label} className="flex flex-col">
                    <dt className="order-2 text-sm leading-5 text-muted-foreground">
                      {metric.label}
                    </dt>
                    <dd className="order-1 font-display text-3xl font-semibold tracking-[-0.04em]">
                      {metric.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>

            <div className="max-w-2xl space-y-6 text-lg leading-8 text-foreground/80 [&_h2]:!mt-14 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:leading-tight [&_h2]:tracking-[-0.035em] [&_h2]:text-foreground sm:[&_h2]:text-3xl [&_h3]:!mt-10 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-[-0.025em] [&_h3]:text-foreground">
              <h2 className="!mt-0">El punto de partida</h2>
              <p>
                Interdom coordina atención médica, enfermería y kinesiología en
                los hogares de sus pacientes, en distintas provincias del país.
                A medida que la operación crecía, también crecía la distancia
                entre lo que pasaba en cada domicilio y lo que coordinación
                alcanzaba a ver.
              </p>
              <p>
                El trabajo se sostenía con procesos manuales repartidos entre
                distintas herramientas. Entender el estado real de la operación
                llevaba tiempo, y actuar a tiempo dependía del esfuerzo de las
                personas más que del sistema:
              </p>
              <ul className="list-disc space-y-2 pl-6 marker:text-secondary">
                {frictions.map((friction) => (
                  <li key={friction}>{friction}</li>
                ))}
              </ul>

              <h2>Una capa compartida para toda la operación</h2>
              <p>
                En lugar de sumar otra herramienta, Interdom eligió unificar la
                información sobre la que trabajan todas. Zonda convirtió datos
                dispersos en una operación conectada: pacientes, profesionales,
                móviles y financiadores sobre una misma base.
              </p>
              <p>
                Las herramientas listas para usar resuelven lo cotidiano. La API
                le permite a Interdom construir productos propios, como su
                monitor operativo, sobre la misma información.
              </p>

              <figure className="!my-12">
                <div className="overflow-hidden rounded-lg border border-foreground bg-[#0b1d35] px-6 pt-8 sm:px-10 sm:pt-10">
                  <Image
                    src="/assets/customer-stories/interdomxzonda.png"
                    alt="Monitor operativo de Interdom construido sobre Zonda: mapa en vivo de pacientes por especialidad, pacientes sin profesional asignado y alertas"
                    width={1118}
                    height={976}
                    sizes="(min-width: 1024px) 672px, 100vw"
                    className="-mb-[4%] h-auto w-full"
                  />
                </div>
                <figcaption className="mt-3 text-sm leading-6 text-muted-foreground">
                  El monitor operativo de Interdom, construido con la API de
                  Zonda: pacientes por especialidad en un mapa en vivo,
                  asignaciones pendientes y alertas en una sola vista.
                </figcaption>
              </figure>

              <h2>Cómo trabaja hoy</h2>
              <p>
                Lo que antes había que reconstruir al final del día, hoy se ve
                mientras sucede. Tres piezas sostienen ese cambio.
              </p>
              <h3>Trabajo de campo, sin papel</h3>
              <p>
                Cada profesional recibe su agenda, consulta el historial y
                registra la atención desde la app. La información llega a
                coordinación en el momento, sin una segunda carga manual.
              </p>
              <h3>Visibilidad para decidir a tiempo</h3>
              <p>
                El monitor operativo reúne profesionales, móviles, visitas,
                alertas y pacientes pendientes de asignación para detectar
                desvíos antes de que impacten en la atención.
              </p>
              <h3>Una red que se conecta una vez</h3>
              <p>
                Las integraciones con financiadores, facturación y herramientas
                operativas comparten una misma base, reduciendo validaciones
                manuales, errores y tiempos de cobro.
              </p>

              <figure className="!my-12 border-l-4 border-secondary pl-6 sm:pl-8">
                <blockquote className="font-display text-2xl font-medium leading-snug tracking-[-0.03em] text-foreground sm:text-3xl">
                  “Zonda se convirtió en el sistema nervioso de nuestra
                  operación.”
                </blockquote>
                <figcaption className="mt-4 text-base leading-6">
                  <span className="font-semibold text-foreground">
                    Gabriel Alonso
                  </span>
                  <span className="block text-sm text-muted-foreground">
                    Coordinación General de Operaciones, Interdom Argentina
                  </span>
                </figcaption>
              </figure>

              <h2>El resultado</h2>
              <p>
                Con la información conectada, el ahorro dejó de depender de
                esfuerzos puntuales y pasó a ser parte de cómo funciona la
                operación. Sin doble carga entre el campo y la coordinación,
                los costos operativos bajaron un 23%. Como cada prestación
                queda registrada en el momento y se valida contra la misma
                base, el fraude en facturación cayó un 30%.
              </p>
              <p>
                Hoy Interdom procesó más de un millón de registros clínicos
                (visitas, evoluciones y novedades que forman una memoria
                operativa consultable) y tiene 12 integraciones activas con
                financiadores, facturación y herramientas operativas.
              </p>

              <h2>Lo que sigue</h2>
              <p>
                Cada visita, recorrido, reclamo y decisión asistencial deja una
                señal conectada. El próximo paso para Interdom es transformar
                esa memoria operativa en acción: anticipar desvíos, optimizar
                recursos y acompañar mejor la evolución de cada paciente.
              </p>
            </div>
          </div>
        </div>
      </article>

      {otherStories.length > 0 && (
        <section className="border-t border-foreground px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <div className="flex items-end justify-between gap-6">
              <h2 className="font-display text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
                Más historias de clientes
              </h2>
              <Link
                href="/customer-stories"
                className={cn(
                  "hidden text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground sm:inline-flex",
                  focusRing,
                )}
              >
                Ver todas
              </Link>
            </div>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2">
              {otherStories.map((story) => (
                <li key={story.id}>
                  <Link
                    href={story.href!}
                    className={cn(
                      "group flex h-full flex-col justify-between gap-10 rounded-lg border border-foreground bg-card p-6 transition-shadow hover:shadow-[0_16px_45px_rgba(21,27,43,0.1)] sm:p-8",
                      focusRing,
                    )}
                  >
                    <div>
                      {story.summary && (
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                          {story.summary}
                        </p>
                      )}
                      <p className="mt-4 font-display text-xl font-semibold leading-snug tracking-[-0.025em] sm:text-2xl">
                        {story.title}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold">
                      Leer la historia
                      <ArrowRight
                        aria-hidden="true"
                        className="size-4 transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaBanner
        title="Construyamos lo que sigue en tu organización."
        buttonText="Hablemos"
      />
    </main>
  );
}
