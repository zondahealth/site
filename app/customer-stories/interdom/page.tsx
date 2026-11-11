import type { ReactNode } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ImageIcon } from "lucide-react";

import { Logo } from "@/components/layout/Logo";
import { testimonials } from "@/components/testimonials/stories";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";
import { cn } from "@/components/ui/utils";

export const metadata: Metadata = {
  title: "Interdom redujo sus costos operativos un 23%",
  description:
    "Cómo Interdom Argentina digitalizó su operación de internación domiciliaria con Zonda, redujo costos un 23% y procesó más de un millón de registros clínicos.",
};

const metrics = [
  {
    value: "23%",
    label: "menos costos operativos",
    context: "Sin doble carga entre el campo y la coordinación, y con menos validaciones manuales.",
  },
  {
    value: "30%",
    label: "menos fraude en facturación",
    context: "Cada prestación queda registrada en el momento y se valida contra la misma base.",
  },
  {
    value: "+1 M",
    label: "registros clínicos procesados",
    context: "Visitas, evoluciones y novedades que hoy forman una memoria operativa consultable.",
  },
  {
    value: "12",
    label: "integraciones activas",
    context: "Financiadores, facturación y herramientas operativas conectadas una sola vez.",
  },
] as const;

const facts = [
  { label: "Organización", value: "Interdom Argentina" },
  { label: "Industria", value: "Internación domiciliaria" },
  { label: "Especialidades", value: "Medicina, enfermería y kinesiología" },
  { label: "Alcance", value: "Múltiples provincias de Argentina" },
  { label: "Con Zonda", value: "Monitor operativo, app de campo, integraciones y API" },
] as const;

const frictions = [
  "Información repartida entre herramientas que no se hablaban entre sí.",
  "Lo que pasaba en cada hogar llegaba a coordinación con demora, o no llegaba.",
  "Validaciones y facturación que dependían de volver a cargar los mismos datos.",
] as const;

const capabilities = [
  {
    number: "01",
    title: "Trabajo de campo, sin papel",
    copy: "Cada profesional recibe su agenda, consulta el historial y registra la atención desde la app. La información llega a coordinación en el momento, sin una segunda carga manual.",
  },
  {
    number: "02",
    title: "Visibilidad para decidir a tiempo",
    copy: "El monitor operativo reúne profesionales, móviles, visitas, alertas y pacientes pendientes de asignación para detectar desvíos antes de que impacten en la atención.",
  },
  {
    number: "03",
    title: "Una red que se conecta una vez",
    copy: "Las integraciones con financiadores, facturación y herramientas operativas comparten una misma base, reduciendo validaciones manuales, errores y tiempos de cobro.",
  },
] as const;

const otherStories = testimonials.filter((story) => story.id !== "interdom" && story.href);

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring";

/** Reserved slot for a photo or capture that still has to be produced. */
function MediaPlaceholder({
  label,
  spec,
  tone = "light",
  className,
}: {
  label: string;
  spec: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Imagen pendiente: ${label}`}
      className={cn(
        "flex flex-col items-center justify-center gap-3 rounded-[1.75rem] border border-dashed p-8 text-center",
        tone === "light"
          ? "border-[#b9c6e4] bg-[repeating-linear-gradient(135deg,#f4f6fd_0px,#f4f6fd_12px,#eef2fb_12px,#eef2fb_24px)] text-muted-foreground"
          : "border-white/20 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_12px,rgba(255,255,255,0.06)_12px,rgba(255,255,255,0.06)_24px)] text-white/55",
        className,
      )}
    >
      <ImageIcon aria-hidden="true" className="size-6 opacity-70" />
      <p className="text-sm font-semibold">{label}</p>
      <p className="max-w-xs text-xs leading-5 opacity-80">{spec}</p>
    </div>
  );
}

function Chapter({
  number,
  eyebrow,
  title,
  children,
}: {
  number: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-border pt-10 sm:pt-12">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
        <span className="tabular-nums">{number}</span>
        <span aria-hidden="true" className="mx-2 text-border">
          /
        </span>
        {eyebrow}
      </p>
      <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-[2.75rem]">
        {title}
      </h2>
      <div className="mt-7 max-w-2xl space-y-6 text-lg leading-8 text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

export default function InterdomPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#071126] px-6 pb-16 pt-32 text-white sm:px-10 sm:pb-20 sm:pt-40 lg:px-16">
        <div className="absolute inset-x-0 top-0 -z-10 h-[620px] bg-[radial-gradient(60%_60%_at_78%_0%,rgba(34,111,253,0.35),transparent_70%)]" />

        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <Link href="/customer-stories" className={cn("text-sm font-semibold text-white/60 transition-colors hover:text-white", focusRing)}>
              ← Historias de clientes
            </Link>
            <div className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5">
              <Image src="/assets/customer-stories/interdom-logo.png" alt="Interdom Argentina" width={308} height={103} className="h-6 w-auto brightness-0 invert" />
              <span aria-hidden="true" className="h-4 w-px bg-white/20" />
              <Logo variant="full" inverted className="h-5 w-auto" />
            </div>
          </div>

          <div className="mt-16 grid gap-10 sm:mt-20 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#74d9ff]">
                Caso de estudio · Internación domiciliaria
              </p>
              <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1] tracking-[-0.055em] sm:text-6xl lg:text-[5.25rem]">
                Una operación de salud que ya no trabaja a ciegas.
              </h1>
            </div>
            <div className="lg:pb-3">
              <p className="text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                Interdom conectó en una sola plataforma lo que sucede entre pacientes, profesionales, móviles, financiadores y coordinación. El resultado: 23% menos costos operativos.
              </p>
              <a href="#historia" className={cn("mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white", focusRing)}>
                Leer la historia <ArrowDown aria-hidden="true" className="size-4" />
              </a>
            </div>
          </div>

          <figure className="mt-14 sm:mt-20">
            <div className="overflow-hidden rounded-[2rem] ring-1 ring-white/10">
              <Image
                src="/assets/customer-stories/interdom-moviles.jpg"
                alt="Equipo de Interdom junto a su flota de móviles de atención domiciliaria"
                width={1140}
                height={660}
                priority
                sizes="(min-width: 1280px) 1216px, 100vw"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-4 text-sm text-white/45">
              Equipo de Interdom junto a su flota de atención domiciliaria.
            </figcaption>
          </figure>

          <dl className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] bg-white/10 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col bg-[#0a1630] p-6 sm:p-8">
                <dt className="order-2 mt-2 text-sm leading-5 text-white/60">{metric.label}</dt>
                <dd className="order-1 font-display text-4xl font-semibold tracking-[-0.045em] text-[#7bddff] sm:text-5xl">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Story */}
      <div id="historia" className="scroll-mt-24 px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-24">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Image src="/assets/customer-stories/interdom-logo.png" alt="Interdom Argentina" width={308} height={103} className="h-10 w-auto" />
            <dl className="mt-8 divide-y divide-border border-y border-border">
              {facts.map((fact) => (
                <div key={fact.label} className="py-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground/80">{fact.label}</dt>
                  <dd className="mt-1.5 text-sm font-medium leading-6 text-foreground">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <Link href="/contact?origen=interdom" className={cn("mt-8 inline-flex items-center gap-2 text-sm font-semibold underline decoration-secondary decoration-2 underline-offset-4 transition-colors hover:text-secondary", focusRing)}>
              Hablemos de tu operación <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </aside>

          <article className="space-y-20 sm:space-y-24">
            <Chapter number="01" eyebrow="El punto de partida" title="Crecer sin perder de vista cada visita, cada profesional y cada decisión.">
              <p>
                Interdom coordina atención médica, enfermería y kinesiología en los hogares de sus pacientes, en distintas provincias del país. A medida que la operación crecía, también crecía la distancia entre lo que pasaba en cada domicilio y lo que coordinación alcanzaba a ver.
              </p>
              <p>
                El trabajo se sostenía con procesos manuales repartidos entre distintas herramientas. Entender el estado real de la operación llevaba tiempo, y actuar a tiempo dependía del esfuerzo de las personas más que del sistema.
              </p>
              <ul className="!mt-10 space-y-4 border-l-2 border-secondary/30 pl-6">
                {frictions.map((friction) => (
                  <li key={friction} className="text-base leading-7 text-foreground">
                    {friction}
                  </li>
                ))}
              </ul>
            </Chapter>

            <Chapter number="02" eyebrow="El cambio" title="Una capa compartida para toda la operación.">
              <p>
                En lugar de sumar otra herramienta, Interdom eligió unificar la información sobre la que trabajan todas. Zonda convirtió datos dispersos en una operación conectada: pacientes, profesionales, móviles y financiadores sobre una misma base.
              </p>
              <p>
                Las herramientas listas para usar resuelven lo cotidiano. La API le permite a Interdom construir productos propios, como su monitor operativo, sobre la misma información.
              </p>
            </Chapter>
          </article>
        </div>
      </div>

      {/* Product showcase */}
      <section className="px-6 sm:px-10 lg:px-16">
        <figure className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#0b1d35] px-5 pt-10 sm:px-12 sm:pt-16 lg:px-20 lg:pt-20">
            <div className="absolute inset-0 bg-[radial-gradient(55%_65%_at_50%_100%,rgba(101,216,255,0.35),transparent_70%)]" />
            <Image
              src="/assets/customer-stories/interdomxzonda.png"
              alt="Monitor operativo de Interdom construido sobre Zonda: mapa en vivo de pacientes por especialidad, pacientes sin profesional asignado y alertas"
              width={1118}
              height={976}
              sizes="(min-width: 1280px) 1056px, 100vw"
              className="relative mx-auto -mb-[6%] h-auto w-full max-w-5xl drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
            />
          </div>
          <figcaption className="mx-auto mt-5 max-w-2xl text-center text-sm leading-6 text-muted-foreground">
            El monitor operativo de Interdom, construido con la API de Zonda: pacientes por especialidad en un mapa en vivo, asignaciones pendientes y alertas en una sola vista.
          </figcaption>
        </figure>
      </section>

      {/* How it works today */}
      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-24">
          <div aria-hidden="true" className="hidden lg:block" />
          <div>
            <Chapter number="03" eyebrow="Cómo trabaja hoy" title="El sistema deja de ser una barrera y empieza a mover el trabajo.">
              <p>
                Lo que antes había que reconstruir al final del día, hoy se ve mientras sucede. Tres piezas sostienen ese cambio.
              </p>
            </Chapter>

            <div className="mt-12 divide-y divide-border border-y border-border">
              {capabilities.map((capability) => (
                <div key={capability.number} className="grid gap-3 py-8 sm:grid-cols-[3.5rem_minmax(0,0.9fr)_minmax(0,1.1fr)] sm:gap-8 sm:py-10">
                  <p className="text-sm font-semibold tabular-nums text-secondary">{capability.number}</p>
                  <h3 className="font-display text-xl font-semibold leading-tight tracking-[-0.03em] sm:text-2xl">{capability.title}</h3>
                  <p className="text-base leading-7 text-muted-foreground">{capability.copy}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              <MediaPlaceholder
                label="App de campo de Interdom"
                spec="Captura de la app que usan los profesionales: agenda del día o registro de una visita. Vertical, 4:5."
                className="aspect-[4/5]"
              />
              <MediaPlaceholder
                label="Profesional de Interdom en una visita"
                spec="Foto real de enfermería o kinesiología en un domicilio, con consentimiento del paciente. Vertical, 4:5."
                className="aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-muted px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
        <figure className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <MediaPlaceholder
            label="Retrato de Gabriel Alonso"
            spec="Foto en las oficinas de Interdom, luz natural, sin logos superpuestos. Vertical, 4:5."
            className="aspect-[4/5] w-full max-w-sm lg:max-w-none"
          />
          <blockquote>
            <span aria-hidden="true" className="block font-display text-7xl leading-none text-secondary/40 sm:text-8xl">
              “
            </span>
            <p className="-mt-4 font-display text-3xl font-medium leading-[1.15] tracking-[-0.04em] sm:text-5xl">
              Zonda se convirtió en el sistema nervioso de nuestra operación.
            </p>
            <footer className="mt-10 flex items-center gap-4 text-sm leading-6">
              <span aria-hidden="true" className="h-px w-10 bg-secondary" />
              <div>
                <p className="font-semibold text-foreground">Gabriel Alonso</p>
                <p className="text-muted-foreground">Coordinación General de Operaciones, Interdom Argentina</p>
              </div>
            </footer>
          </blockquote>
        </figure>
      </section>

      {/* Results */}
      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-24">
          <div aria-hidden="true" className="hidden lg:block" />
          <div>
            <Chapter number="04" eyebrow="El resultado" title="Una operación más eficiente, medida en números.">
              <p>
                Con la información conectada, el ahorro dejó de depender de esfuerzos puntuales y pasó a ser parte de cómo funciona la operación.
              </p>
            </Chapter>

            <dl className="mt-12 grid gap-x-10 sm:grid-cols-2">
              {metrics.map((metric) => (
                <div key={metric.label} className="flex flex-col border-t border-border py-8">
                  <dt className="order-2 mt-3 text-base font-semibold text-foreground">{metric.label}</dt>
                  <dd className="order-1 font-display text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-6xl">{metric.value}</dd>
                  <dd className="order-3 mt-2 max-w-sm text-sm leading-6 text-muted-foreground">{metric.context}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* What's next */}
      <section className="bg-[#0b1d35] px-6 py-20 text-white sm:px-10 sm:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#74d9ff]">
            <span className="tabular-nums">05</span>
            <span aria-hidden="true" className="mx-2 text-white/25">/</span>
            Lo que sigue
          </p>
          <div>
            <h2 className="max-w-3xl font-display text-3xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl">
              Convertir visibilidad en acción.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              Cada visita, recorrido, reclamo y decisión asistencial deja una señal conectada. El próximo paso para Interdom es transformar esa memoria operativa en acción: anticipar desvíos, optimizar recursos y acompañar mejor la evolución de cada paciente.
            </p>
          </div>
        </div>
      </section>

      {/* More stories */}
      {otherStories.length > 0 && (
        <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-end justify-between gap-6">
              <h2 className="font-display text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">Más historias de clientes</h2>
              <Link href="/customer-stories" className={cn("hidden text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground sm:inline-flex", focusRing)}>
                Ver todas
              </Link>
            </div>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {otherStories.map((story) => (
                <li key={story.id}>
                  <Link
                    href={story.href!}
                    className={cn("group flex h-full flex-col justify-between gap-10 rounded-[1.5rem] border border-border p-7 transition-colors hover:border-secondary/40 hover:bg-muted sm:p-8", focusRing)}
                  >
                    <div>
                      {story.summary && (
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">{story.summary}</p>
                      )}
                      <p className="mt-4 font-display text-xl font-semibold leading-snug tracking-[-0.03em] sm:text-2xl">{story.title}</p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                      Leer historia
                      <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaBanner title="Construyamos lo que sigue en tu organización." buttonText="Hablemos" />
    </main>
  );
}
