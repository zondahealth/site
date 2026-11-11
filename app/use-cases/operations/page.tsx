import type { Metadata } from "next";
import Image from "next/image";

import Glow from "@/components/ui/glow/Glow";
import { ORBIT_BORDER_COLORS } from "@/components/ui/glow/colors";
import { ImagePlaceholder } from "@/components/ui/image-placeholder/ImagePlaceholder";
import {
  BenefitStories,
  FaqList,
  InlineLink,
  SplitFeature,
  Testimonial,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

// DECISIÓN DEL FOUNDER (OPS-1): confirmar que /use-cases/operations queda como caso de uso "Operaciones digitales". Si se descarta, borrar la ruta y redirigir a /industries/home-health.

const title = "Operaciones digitales para organizaciones de salud";
const description =
  "Una plataforma para que profesionales, equipos y organizaciones gestionen la atención, la operación y los ingresos en un mismo flujo.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/use-cases/operations" },
  openGraph: {
    title: `${title} | Zonda`,
    description,
    url: "/use-cases/operations",
  },
};

const benefits = [
  {
    title: "Para quienes atienden",
    copy: "Agenda, pacientes y registros clínicos para trabajar en consultorio, en campo o entre ambos, sin volver a cargar la misma información.",
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Profesional con agenda, historial del paciente y registro clínico en un mismo flujo."
        fill
      />
    ),
  },
  {
    title: "Para quienes coordinan",
    copy: "Una vista compartida de agendas, equipos, permisos, estados y alertas para que la operación no dependa de llamadas ni planillas.",
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Equipo de coordinación con agendas, estados y alertas operativas."
        fill
      />
    ),
  },
  {
    title: "Para quienes necesitan conectarse",
    copy: "Conectá financiadores y sistemas actuales, o construí herramientas propias sobre la infraestructura y la API de Zonda.",
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Zonda conectando sistemas actuales, financiadores y herramientas propias."
        fill
      />
    ),
  },
];

const faqItems = [
  {
    question: "¿Zonda es para profesionales o para organizaciones?",
    answer:
      "Para ambos. Los profesionales tienen herramientas para atender y registrar; las organizaciones, para coordinar agendas, equipos, permisos, validaciones y el ciclo de pagos.",
  },
  {
    question: "¿Sirve tanto en consultorio como para atención en campo?",
    answer:
      "Sí. El profesional puede consultar su agenda, acceder al contexto del paciente y completar el registro desde donde brinda la atención. La organización conserva visibilidad del estado de cada caso.",
  },
  {
    question: "¿La organización puede operar con varios financiadores?",
    answer:
      "Sí. Zonda concentra en un solo flujo las validaciones, autorizaciones, prácticas, documentación, facturación y respuestas de cada financiador.",
  },
  {
    question: "¿Tenemos que reemplazar nuestro sistema actual?",
    answer:
      "No necesariamente. Zonda puede complementar tus sistemas actuales y conectarse por API, conectores o intercambio de archivos. También puede ser la capa operativa principal cuando necesitás un flujo unificado.",
  },
  {
    question: "¿Podemos desarrollar herramientas propias?",
    answer:
      "Sí. La API de Zonda permite que los equipos de tecnología construyan experiencias, automatizaciones y tableros propios sobre los mismos datos clínicos y operativos que usa la plataforma.",
  },
];

const splitImageClassName = "rounded-[1.5rem]";

function FeatureDetails({
  items,
}: {
  items: { title: string; copy: string }[];
}) {
  return (
    <dl className="mt-8 grid max-w-lg gap-6">
      {items.map((item) => (
        <div key={item.title}>
          <dt className="text-sm font-semibold text-foreground">{item.title}</dt>
          <dd className="mt-1 text-sm leading-6 text-muted-foreground">
            {item.copy}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default function OperationsPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        eyebrow="Operaciones conectadas"
        title="Una operación de salud, conectada de punta a punta"
        copy={description}
        primary={{ label: "Hablá con nuestro equipo", href: "/contact" }}
        secondary={{ label: "Explorar la plataforma", href: "#profesionales" }}
        secondaryVariant="inverse"
        mediaClassName="overflow-visible"
        media={
          <div className="flex h-full w-full items-center justify-center px-4 pt-20 pb-6 sm:px-6 sm:pt-24">
            <Glow
              className="w-full max-w-[640px]"
              colors={ORBIT_BORDER_COLORS}
              radius={40}
              spread={14}
              blur={22}
              opacity={0.35}
            >
              <Image
                src="/assets/solutions/ops/hero.png"
                alt="Profesional con la ficha del paciente, sus equipos de trabajo y los tratamientos recibidos en Zonda"
                width={1402}
                height={1122}
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full object-contain"
              />
            </Glow>
          </div>
        }
      />

      <BenefitStories
        title="Una base común para toda la atención."
        copy="Zonda conecta el trabajo de quien atiende con las decisiones de quien coordina, valida y cobra. Cada equipo usa las herramientas que necesita, sobre la misma información."
        items={benefits}
      />

      <SplitFeature
        id="profesionales"
        title="Atendé con el contexto del paciente siempre a mano"
        copy="Para profesionales que trabajan en consultorio, en domicilio o en campo. Zonda reúne la agenda, el historial y el estado de cada paciente para que la atención avance sin tareas administrativas repetidas."
        media={<ImagePlaceholder width={1000} height={1000} label="Profesional con agenda, resumen del paciente y registro clínico estructurado." className={splitImageClassName} />}
      >
        <FeatureDetails
          items={[
            { title: "Registrá como hablás", copy: "Cargá evoluciones y observaciones en lenguaje natural; Zonda las estructura para que el equipo pueda usarlas." },
            { title: "Consultá el contexto", copy: "El recorrido del paciente, sus tratamientos, pendientes y alertas antes y después de cada atención." },
            { title: "Actualizá el estado", copy: "Una visita, práctica o seguimiento queda visible para coordinación en tiempo real." },
          ]}
        />
      </SplitFeature>

      <SplitFeature
        title="Coordiná la operación sin perseguir la información"
        copy="Convertí la atención diaria en una operación visible y gestionable. Los responsables pueden organizar personas y recursos, mientras cada profesional recibe solo lo que necesita para trabajar."
        mediaSide="left"
        media={<ImagePlaceholder width={1000} height={1000} label="Organización coordinando una agenda, equipos y alertas de atención." className={splitImageClassName} />}
      >
        <FeatureDetails
          items={[
            { title: "Organizá el día", copy: "Agendas, disponibilidad, asignaciones y cobertura de equipos desde un mismo lugar." },
            { title: "Definí cómo trabaja cada equipo", copy: "Roles, sedes y permisos para que cada persona vea y haga lo que le corresponde." },
            { title: "Intervení a tiempo", copy: "Estados, demoras y alertas operativas para anticiparte a los problemas." },
          ]}
        />
      </SplitFeature>

      <SplitFeature
        title="Un solo flujo para tratamientos, prácticas y cobros"
        copy="La relación con financiadores no debería crear un circuito manual por cada cobertura. Zonda conecta la atención con las reglas y respuestas necesarias para que la prestación llegue preparada al cobro."
        media={<ImagePlaceholder width={1000} height={1000} label="Flujo de validación, autorización, prestación, facturación y cobro por financiador." className={splitImageClassName} />}
      >
        <FeatureDetails
          items={[
            { title: "Validá antes de avanzar", copy: "Cobertura, autorizaciones y condiciones de cada tratamiento o práctica." },
            { title: "Aplicá las reglas correctas", copy: "Documentación, frecuencia y nomenclador según cada financiador." },
            { title: "Seguí cada ingreso", copy: "Cada prestación, desde su realización hasta la facturación, el cobro y la liquidación." },
          ]}
        />
      </SplitFeature>

      <SplitFeature
        title="Sumá Zonda a tu operación actual o construí sobre ella"
        copy="No hace falta empezar de cero. Zonda puede complementar los sistemas que tu organización ya usa o convertirse en la capa que unifica los nuevos procesos."
        mediaSide="left"
        media={<ImagePlaceholder width={1000} height={1000} label="Diagrama de Zonda conectando sistemas clínicos, equipos, financiadores y herramientas propias por API." className={splitImageClassName} />}
      >
        <FeatureDetails
          items={[
            { title: "Conectá lo que ya existe", copy: "HCE, ERP, facturación, sistemas de financiadores y otras fuentes de datos." },
            { title: "Elegí el intercambio adecuado", copy: "API, conectores, eventos o archivos, según el proceso que necesites resolver." },
            { title: "Construí sobre la plataforma", copy: "Productos internos, automatizaciones y tableros propios sobre la API de Zonda." },
          ]}
        />
      </SplitFeature>

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-[-0.035em] text-foreground sm:text-5xl">De la atención al ingreso, sin perder el hilo</h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">Una prestación conserva su contexto clínico y operativo a medida que avanza por la organización.</p>
          </div>
          <ol className="border-l border-border/80">
            <li className="relative pb-8 pl-8">
              <span className="absolute -left-[0.45rem] top-0 flex size-4 items-center justify-center rounded-full bg-secondary ring-4 ring-background" />
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">Atención</p>
              <p className="mt-2 text-base leading-7 text-foreground/80">La atención registrada queda disponible para coordinación, auditoría y facturación sin una segunda carga.</p>
            </li>
            <li className="relative py-8 pl-8">
              <span className="absolute -left-[0.45rem] top-8 flex size-4 items-center justify-center rounded-full bg-secondary ring-4 ring-background" />
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">Control</p>
              <p className="mt-2 text-base leading-7 text-foreground/80">Las excepciones y pendientes se detectan antes de convertirse en demoras, débitos o trabajo manual.</p>
            </li>
            <li className="relative pt-8 pl-8">
              <span className="absolute -left-[0.45rem] top-8 flex size-4 items-center justify-center rounded-full bg-secondary ring-4 ring-background" />
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">Gestión</p>
              <p className="mt-2 text-base leading-7 text-foreground/80">La organización puede medir el estado de la operación y el ciclo de pagos con información actualizada.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Testimonial
            quote="Lo que más nos sorprendió no fue la tecnología en sí, sino todo lo que pudimos construir sobre ella.”"
            name="Gabriel Alonso"
            role={
              <>
                Coordinación General de Operaciones, Interdom Argentina (
                <InlineLink href="/customer-stories/interdom">
                  caso publicado
                </InlineLink>
                )
              </>
            }
          />
        </div>
      </section>

      <FaqList items={faqItems} />

      <CtaBanner
        title="Convertí procesos aislados en una operación conectada"
        buttonText="Hablá con nuestro equipo"
      />
    </main>
  );
}
