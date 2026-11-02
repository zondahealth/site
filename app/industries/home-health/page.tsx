import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";

import { Pending } from "@/components/ui/pending/Pending";
import {
  BenefitStories,
  FaqList,
  RelatedLinks,
  SectionIntro,
  SplitFeature,
  StatSlot,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";
import { cn } from "@/components/ui/utils";

const title = "Internación domiciliaria (Home Health)";
const description =
  "Organizá visitas, coordiná profesionales y controlá cada paso de la atención domiciliaria desde un solo lugar. Sin planillas, sin llamados, sin sorpresas.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/industries/home-health" },
  openGraph: {
    title: `${title} | Zonda`,
    description,
    url: "/industries/home-health",
  },
};

const interdomHref = "/customer-stories/interdom";

const benefitImageSizes =
  "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

const benefits = [
  {
    title: "El día, en una sola pantalla",
    copy: "Visitas, rutas y profesionales se asignan juntos. Sin planillas, sin llamados y sin duplicar el trabajo.",
    src: "/assets/sectors/idom/benefit-1.png",
    alt: "Ilustración de una notebook, el día de visitas en una sola pantalla",
  },
  {
    title: "De la visita al cobro",
    copy: "Lo que se registra en el domicilio sigue en el mismo flujo: validación, facturación y cobro. Sin volver a cargar nada.",
    src: "/assets/sectors/idom/benefit-2.png",
    alt: "Ilustración de una mano con billetes, de la visita al cobro",
  },
  {
    title: "Cada visita, lista para auditar",
    copy: "Ubicación, horario y prestaciones quedan registrados al instante, antes de presentarlos a la obra social.",
    src: "/assets/sectors/idom/benefit-3.png",
    alt: "Ilustración de una lupa sobre un ojo, cada visita lista para auditar",
  },
];

const steps = [
  {
    place: "Oficina central",
    name: "Asignación",
    copy: "Desde una sola pantalla se asignan las visitas del día a cada profesional, con la mejor ruta y sin duplicaciones.",
  },
  {
    place: "App del profesional",
    name: "Aviso",
    copy: "El profesional recibe en su celular los datos del paciente, la dirección y las indicaciones antes de salir.",
  },
  {
    place: "Domicilio del paciente",
    name: "Visita",
    copy: "Se confirma la llegada automáticamente, se registra todo lo realizado y el paciente firma desde el celular.",
  },
  {
    place: "Tiempo real",
    name: "Control",
    copy: "Cada visita queda registrada al instante con ubicación, horario y detalle. Lista para presentar a la obra social.",
  },
];

const visits = [
  { time: "10:00", name: "M. Etería", zone: "Palermo", status: "Hecha" },
  { time: "11:30", name: "R. Velazco", zone: "Belgrano", status: "Hecha" },
  { time: "13:00", name: "P. Funes", zone: "Núñez", status: "En curso" },
  { time: "14:30", name: "L. Quiroga", zone: "Belgrano", status: "Próx." },
  { time: "16:00", name: "S. Otero", zone: "Cabildo", status: "Agendada" },
] as const;

const services = [
  { label: "Toma de signos", done: true },
  { label: "Curación de úlcera", done: true },
  { label: "Insulina basal", done: false },
  { label: "Aspiración", done: false },
];

const auditEvents = [
  {
    time: "13:38",
    title: "Profesional sale de oficina",
    detail: "GPS verificado",
  },
  {
    time: "13:42",
    title: "Llega al domicilio · Cabildo 3214",
    detail: "Geofence 50m · OK",
  },
  {
    time: "13:42 – 14:08",
    title: "Visita en curso (26 min)",
    detail: "Dentro del rango",
  },
  {
    time: "14:05",
    title: "Firma digital del paciente capturada",
    detail: "Hash 0x4a9...c3f",
  },
  {
    time: "14:09",
    title: "Prestaciones registradas (4 de 4)",
    detail: "Match con prescripción",
  },
  {
    time: "14:12",
    title: "LOE #2841 emitida",
    detail: "Enviada a OSDE",
    badge: "LOE",
  },
  {
    time: "14:15",
    title: "Visita confirmada · Lista para auditoría",
    detail: "Tiempo medio: 27 min",
  },
];

const results = [
  { value: "+30%", label: "Menos costos operativos" },
  { value: "+40%", label: "Menos tiempo de espera para el paciente" },
  { value: "+35%", label: "Menos errores en la atención" },
  { value: "+30%", label: "Más control sobre irregularidades" },
];

const faqItems = [
  {
    question: "¿Funciona sin internet?",
    answer:
      "Sí. La app guarda todo lo que hace el profesional en el celular y lo sube cuando vuelve a tener señal. Nunca se pierde información ni se frena el trabajo.",
    open: true,
  },
  {
    question: "¿Se conecta con nuestro sistema de facturación?",
    answer: <Pending>RESPUESTA A COMPLETAR</Pending>,
  },
  {
    question: "¿Sirve para cualquier obra social?",
    answer: <Pending>RESPUESTA A COMPLETAR</Pending>,
  },
  {
    question: "¿Cada persona ve solo lo que le corresponde?",
    answer: <Pending>RESPUESTA A COMPLETAR</Pending>,
  },
  {
    question: "¿Cuánto tarda ponerlo en marcha?",
    answer: <Pending>PLAZO A DEFINIR</Pending>,
  },
];

const relatedLinks = [
  { label: "Operaciones digitales", href: "/use-cases/operations" },
  { label: "Fraude", href: "/use-cases/fraud-risk-prevention" },
  { label: "Financiadores", href: "/industries/payers" },
];

const panelClassName =
  "overflow-hidden rounded-[1.5rem] border border-border/80 bg-white shadow-[0_24px_70px_rgba(14,60,117,0.09)]";

const statusClassName: Record<(typeof visits)[number]["status"], string> = {
  Hecha: "bg-emerald-50 text-emerald-700",
  "En curso": "bg-[#e8f1ff] text-secondary",
  "Próx.": "bg-amber-50 text-amber-700",
  Agendada: "bg-muted text-muted-foreground",
};

function DispatchBoard() {
  return (
    <div className={panelClassName}>
      <div className="flex items-center gap-3 border-b border-border/70 bg-[#f8fafe] px-4 py-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </span>
        <span className="truncate rounded-full bg-white px-3 py-1 font-mono text-[11px] text-muted-foreground">
          app.zonda.health/dispatch
        </span>
      </div>
      <div className="grid gap-5 p-4 sm:p-5">
        <div className="rounded-2xl bg-primary px-5 py-4 text-white">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">
            Ruta
          </p>
          <p className="mt-1 font-display text-2xl font-semibold tracking-[-0.03em]">
            Aguirre
          </p>
          <p className="mt-1 text-sm text-white/75">3 visitas · ETA 16:40</p>
        </div>
        <div>
          <div className="flex items-baseline justify-between gap-3">
            <p className="text-sm font-semibold text-foreground">
              Visitas — Jueves 16/04
            </p>
            <p className="text-xs font-medium text-muted-foreground">
              14 asignadas
            </p>
          </div>
          <ul className="mt-3 divide-y divide-border/70">
            {visits.map((visit) => (
              <li
                key={`${visit.time}-${visit.name}`}
                className="grid grid-cols-[3.25rem_1fr_auto] items-center gap-3 py-3"
              >
                <span className="font-mono text-xs text-muted-foreground">
                  {visit.time}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-foreground">
                    {visit.name}
                  </span>
                  <span className="block truncate text-xs text-muted-foreground">
                    {visit.zone}
                  </span>
                </span>
                <span
                  className={cn(
                    "rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em]",
                    statusClassName[visit.status],
                  )}
                >
                  {visit.status === "Hecha" ? "✓ Hecha" : visit.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function VisitApp() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[320px] rounded-[2.4rem] border border-[#151b2b] bg-[#151b2b] p-2 shadow-[0_24px_70px_rgba(14,60,117,0.16)]">
        <div className="overflow-hidden rounded-[1.9rem] bg-white">
          <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[11px] font-semibold text-foreground">
            <span>10:54</span>
            <span className="flex items-center gap-1.5" aria-hidden="true">
              <span className="tracking-[0.12em]">●●●</span>
              <span className="tracking-[0.12em] text-foreground/35">●●●●</span>
            </span>
          </div>
          <div className="px-5 pt-4 pb-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-secondary">
              Visita en curso
            </p>
            <p className="mt-2 font-display text-2xl font-semibold tracking-[-0.03em] text-foreground">
              María Etería
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              LOE #2841 · 13:42
            </p>
            <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-emerald-700">
              <Check aria-hidden="true" className="size-3" strokeWidth={2.6} />
              En ubicación
            </p>
            <p className="mt-3 text-sm text-foreground">
              Av. Cabildo 3214 · 5°B
            </p>
            <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Prestaciones
            </p>
            <ul className="mt-2 grid gap-2">
              {services.map((service) => (
                <li
                  key={service.label}
                  className="flex items-center gap-2.5 text-sm text-foreground"
                >
                  <span
                    className={cn(
                      "flex size-4 shrink-0 items-center justify-center rounded-full border",
                      service.done
                        ? "border-emerald-600 bg-emerald-600 text-white"
                        : "border-border bg-white text-transparent",
                    )}
                  >
                    <Check aria-hidden="true" className="size-2.5" strokeWidth={3} />
                  </span>
                  {service.label}
                </li>
              ))}
            </ul>
            <p className="mt-5 rounded-full bg-primary py-2.5 text-center text-sm font-semibold text-white">
              Confirmar visita
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AuditTimeline() {
  return (
    <div className={panelClassName}>
      <div className="flex flex-col items-start gap-3 border-b border-border/70 px-5 py-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground">
            Visita · María Etería · LOE #2841
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            16 Abr 2026 · Internación domiciliaria nivel 2
          </p>
        </div>
        <span className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-emerald-700">
          ✓ Auditada
        </span>
      </div>
      <ol className="px-5 py-4">
        {auditEvents.map((event, index) => (
          <li key={event.time + event.title} className="flex gap-3">
            <span className="flex flex-col items-center">
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white">
                <Check aria-hidden="true" className="size-3" strokeWidth={3} />
              </span>
              {index < auditEvents.length - 1 ? (
                <span className="my-1 w-px flex-1 bg-emerald-200" />
              ) : null}
            </span>
            <div className={index < auditEvents.length - 1 ? "min-w-0 pb-4" : "min-w-0"}>
              <p className="font-mono text-[11px] text-muted-foreground">
                {event.time}
              </p>
              <p className="mt-0.5 text-sm font-semibold text-foreground">
                {event.title}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">{event.detail}</p>
              {"badge" in event ? (
                <span className="mt-2 inline-flex rounded-md border border-border bg-[#f8fafe] px-2 py-1 text-[10px] font-semibold tracking-[0.12em] text-primary">
                  {event.badge}
                </span>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function HomeHealthPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        eyebrow="Internación domiciliaria (Home Health)"
        title="Todo tu equipo conectado, desde la oficina hasta el domicilio"
        copy={description}
        primary={{ label: "Hablemos", href: "/contact" }}
        secondary={{ label: "Leer el caso Interdom", href: interdomHref }}
        secondaryVariant="inverse"
        mediaClassName="overflow-visible"
        media={
          <div className="relative h-[340px] w-full sm:h-[460px] lg:h-full">
            <Image
              src="/assets/sectors/idom/hero.png"
              alt="Ilustración de una ambulancia y una camioneta de internación domiciliaria"
              width={1619}
              height={972}
              priority
              sizes="(min-width: 1024px) 980px, 100vw"
              className="absolute top-1/2 left-1/2 h-auto w-full max-w-none -translate-x-1/2 -translate-y-1/2 object-contain sm:w-[min(640px,100%)] lg:left-auto lg:w-[calc(50vw+2.5rem)] lg:translate-x-0 lg:right-[calc(min(80rem,100vw)/2-50vw+0.5rem)]"
            />
          </div>
        }
      />

      <BenefitStories
        title="Coordiná. Cobrá. Controlá."
        copy="De la oficina al domicilio, cada paso de la internación queda en un solo lugar."
        items={benefits.map((item) => ({
          title: item.title,
          copy: item.copy,
          media: (
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
              sizes={benefitImageSizes}
            />
          ),
        }))}
      />

      <section
        id="como-funciona"
        className="scroll-mt-24 px-6 py-20 sm:px-10 sm:py-28 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            title="Cómo funciona"
            copy={
              <>
                De la oficina al domicilio en cuatro pasos.
                <br />
                Una sola plataforma para todo el recorrido. Sin papeles, sin
                llamados.
              </>
            }
            className="max-w-3xl"
          />
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.name} className="border-t border-border pt-6">
                <span className="font-display text-sm font-semibold tracking-[0.08em] text-secondary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {step.place}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.03em] text-foreground">
                  {step.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {step.copy}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <SplitFeature
        eyebrow="Oficina · Coordinación"
        title="Organizá todas las visitas del día desde una sola pantalla."
        copy="Asigná profesionales según zona, disponibilidad y especialidad. Si alguien se enferma o surge una urgencia, reasigná en un click. Todo queda registrado."
        bullets={[
          "Vista de mapa o lista para organizar el día",
          "Reasignación rápida ante urgencias",
          "Sabé cuánto tiene cada profesional en tiempo real",
        ]}
        media={<DispatchBoard />}
      />

      <SplitFeature
        eyebrow="En campo · App móvil"
        title="El profesional registra la visita desde el domicilio."
        copy="Recibe la visita asignada, sigue la mejor ruta, registra lo que hizo hablándole al teléfono y obtiene la firma del paciente. Todo desde la app, incluso sin internet."
        mediaSide="left"
        bullets={[
          "Funciona sin conexión y se sincroniza después",
          "Dicta la evolución por voz y la IA la organiza",
          "Confirma presencia automáticamente por ubicación",
        ]}
        media={<VisitApp />}
      />

      <SplitFeature
        eyebrow="Control · Auditoría"
        title="Auditoría lista antes de que cierre el día."
        copy="Sabé exactamente qué se hizo, dónde y cuándo. Si algo no coincide, te enterás enseguida, antes de que se convierta en un problema con la obra social."
        bullets={[
          "Registro automático con ubicación y horario exacto",
          "Checklist de prestaciones realizadas",
          "Reporte listo para facturar y auditar",
        ]}
        media={<AuditTimeline />}
      />

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            centered
            title="Resultados reales"
            copy="Lo que logran las empresas que usan Zonda."
            className="mx-auto max-w-3xl text-center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((result) => (
              <StatSlot
                key={result.label}
                value={result.value}
                label={result.label}
              />
            ))}
          </div>
        </div>
      </section>

      <FaqList
        title="Preguntas frecuentes."
        copy={
          <>
            ¿Tenés otra consulta? Escribinos a{" "}
            <a
              href="mailto:support@zondahealth.com"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              support@zondahealth.com
            </a>
            .
          </>
        }
        items={faqItems}
      />

      <CtaBanner
        title="Tu operación, optimizada."
        subtitle="Desde el primer día."
        buttonText="Contáctanos"
      />

      <RelatedLinks links={relatedLinks} />
    </main>
  );
}
