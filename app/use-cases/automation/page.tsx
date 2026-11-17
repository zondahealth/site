import type { Metadata } from "next";
import Image from "next/image";

import {
  BenefitStories,
  FaqList,
  FeatureShot,
  InlineLink,
  SplitFeature,
  Testimonial,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

const title = "Automatización para organizaciones de salud";
const description =
  "Zonda conecta datos, decisiones y acciones para que la operación avance en el momento indicado, sin depender de mover información entre planillas y sistemas.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/use-cases/automation" },
  openGraph: {
    title: `${title} | Zonda`,
    description,
    url: "/use-cases/automation",
  },
};

const benefitImageSizes =
  "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

const benefits = [
  {
    title: "Datos que llegan listos para operar",
    copy: "Información de sistemas, financiadores, profesionales y organizaciones ordenada alrededor de pacientes, prestaciones, coberturas y equipos.",
    media: (
      <Image
        src="/assets/solutions/automation/benefit-1.png"
        alt="Datos de atención, cobertura y operación conectados alrededor de una prestación."
        fill
        sizes={benefitImageSizes}
        className="object-cover"
      />
    ),
  },
  {
    title: "Decisiones que no esperan una revisión manual",
    copy: "Cuando cambia una visita, llega un resultado, se aprueba una cobertura o falta información, el flujo adecuado puede continuar con contexto.",
    media: (
      <Image
        src="/assets/solutions/automation/benefit-2.png"
        alt="Evento clínico u operativo que activa una decisión y la siguiente acción."
        fill
        sizes={benefitImageSizes}
        className="object-cover"
      />
    ),
  },
  {
    title: "Procesos que se conectan entre sí",
    copy: "Validar, solicitar lo pendiente, asignar, notificar y actualizar estados puede formar parte de un mismo recorrido.",
    media: (
      <Image
        src="/assets/solutions/automation/benefit-3.png"
        alt="Secuencia conectada de validación, asignación, comunicación y actualización de estado."
        fill
        sizes={benefitImageSizes}
        className="object-cover"
      />
    ),
  },
];

const faqItems = [
  {
    question: "¿Qué procesos puedo automatizar?",
    answer:
      "Cualquier proceso que dependa de información conectada y reglas claras: validaciones, asignaciones, comunicaciones, conciliaciones, reclamos, presentaciones, reportes y seguimiento de excepciones.",
  },
  {
    question: "¿Necesito un equipo técnico?",
    answer:
      "No necesariamente para empezar. Zonda puede acompañar flujos listos para operar. Un equipo técnico permite además integrar sistemas propios y construir automatizaciones sobre la API.",
  },
  {
    question: "¿Se conecta con mis sistemas actuales?",
    answer:
      "Sí. Zonda se conecta con sistemas clínicos, administrativos y financieros existentes, incorpora sus datos a un modelo común y habilita acciones mediante API, conectores y eventos.",
  },
  {
    question: "¿Qué pasa cuando un caso no cumple una regla?",
    answer:
      "El flujo puede detenerse, pedir información, derivar el caso al equipo indicado o ejecutar una alternativa configurada. La excepción conserva el contexto necesario para resolverla.",
  },
];

function FeatureDetails({
  items,
}: {
  items: { title: string; copy: string }[];
}) {
  return (
    <dl className="mt-8 grid max-w-lg gap-6">
      {items.map((item) => (
        <div key={item.title}>
          <dt className="text-sm font-semibold text-foreground">
            {item.title}
          </dt>
          <dd className="mt-1 text-sm leading-6 text-muted-foreground">
            {item.copy}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default function AutomationPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        eyebrow="Automatización"
        title="Lo que hoy hacés a mano, que se haga solo"
        copy={description}
        primary={{ label: "Hablemos", href: "/contact" }}
        mediaClassName="overflow-visible"
        media={
          <div className="relative h-[440px] w-full sm:h-[520px] lg:h-full">
            <Image
              src="/assets/solutions/automation/hero.png"
              alt="Médico con estetoscopio junto a un brazo robótico que automatiza una tarea"
              width={1378}
              height={981}
              priority
              sizes="(min-width: 1024px) 70vw, 100vw"
              className="absolute bottom-0 left-1/2 h-auto w-[115%] max-w-none -translate-x-1/2 translate-y-[4%] sm:w-[122%] lg:w-[882px] lg:-translate-x-[calc(50%-2.25rem)] lg:translate-y-[2%]"
            />
          </div>
        }
      />

      <BenefitStories
        title="Menos administración. Más atención."
        copy="Zonda no automatiza tareas aisladas: convierte información dispersa en una operación capaz de actuar, con personas interviniendo donde hace falta criterio."
        items={benefits}
      />

      <SplitFeature
        title="Construí sobre una operación ya conectada"
        copy="No hace falta empezar de cero. La API de Zonda permite incorporar datos y acciones de tus sistemas actuales a una capa común, con identidades, permisos y trazabilidad consistentes."
        media={
          <FeatureShot
            src="/assets/solutions/automation/feature-1.png"
            alt="Sistemas clínicos, administrativos y financieros conectados a pacientes, profesionales, coberturas y prestaciones."
          />
        }
      >
        <FeatureDetails
          items={[
            {
              title: "Conectá tus sistemas",
              copy: "Incorporá datos y acciones de las herramientas que ya forman parte de tu operación.",
            },
            {
              title: "Usá información normalizada",
              copy: "Pacientes, profesionales, organizaciones, catálogos y prestaciones relacionados en entidades reutilizables.",
            },
            {
              title: "Convertí eventos en acciones",
              copy: "Una visita confirmada, un dato incompleto, una autorización o un pago pueden disparar la respuesta adecuada.",
            },
          ]}
        />
      </SplitFeature>

      <SplitFeature
        title="Operación con financiadores que sigue el mismo hilo"
        mediaSide="left"
        copy="Las validaciones, presentaciones, respuestas, conciliaciones y reclamos pueden seguir reglas consistentes y mantener su vínculo con la prestación original."
        media={
          <FeatureShot
            src="/assets/solutions/automation/feature-2.png"
            alt="Prestación conectada a validación, presentación, respuesta del financiador, conciliación y reclamo."
          />
        }
      >
        <FeatureDetails
          items={[
            {
              title: "Controles antes de avanzar",
              copy: "Verificaciones y requisitos aplicados cuando todavía es posible corregir información.",
            },
            {
              title: "Respuestas y reclamos con contexto",
              copy: "Cada diferencia conserva el vínculo con la prestación y la regla que la originó.",
            },
            {
              title: "Trazabilidad hasta el pago",
              copy: "La operación financiera se puede recorrer desde la atención hasta el ingreso.",
            },
          ]}
        />
      </SplitFeature>

      <SplitFeature
        title="Coordinación de la atención que encuentra el siguiente paso"
        copy="Las reglas operativas pueden ayudar a encontrar qué hacer según especialidad, disponibilidad, cobertura, ubicación o prioridad, sin perder el contexto de cada caso."
        media={
          <FeatureShot
            src="/assets/solutions/automation/feature-3.png"
            alt="Visita que se asigna, se confirma y se reasigna según disponibilidad, ubicación y prioridad."
          />
        }
      >
        <FeatureDetails
          items={[
            {
              title: "Asigná y reasigná",
              copy: "Profesionales según especialidad, disponibilidad, ubicación y condiciones de la atención.",
            },
            {
              title: "Seguí los casos que lo requieren",
              copy: "Los cambios y excepciones llegan al equipo indicado para que pueda intervenir a tiempo.",
            },
            {
              title: "Coordiná entre equipos",
              copy: "Instituciones, profesionales y equipos internos pueden trabajar sobre el mismo estado del caso.",
            },
          ]}
        />
      </SplitFeature>

      <SplitFeature
        title="Comunicación y reportes que acompañan el proceso"
        mediaSide="left"
        copy="Las comunicaciones y los reportes responden a lo que está ocurriendo en la operación, no a que alguien recuerde actualizar una lista o enviar un mensaje."
        media={
          <FeatureShot
            src="/assets/solutions/automation/feature-4.png"
            alt="Evento de atención que activa una comunicación, actualiza un tablero y deja trazabilidad del resultado."
          />
        }
      >
        <FeatureDetails
          items={[
            {
              title: "Comunicaciones a tiempo",
              copy: "Recordatorios, confirmaciones, solicitudes de información y seguimiento posterior según el estado del proceso.",
            },
            {
              title: "Visibilidad sin fin de mes",
              copy: "Actividad, ingresos y excepciones disponibles por financiador, equipo o período mientras la operación ocurre.",
            },
            {
              title: "Información lista para decidir",
              copy: "Segmentos y reportes que permiten detectar casos específicos y actuar antes.",
            },
          ]}
        />
      </SplitFeature>

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Testimonial
            quote="Procesos que hacíamos a mano desde siempre, como coordinación, reclamos y asignación de pacientes, de repente los teníamos integrados en un solo lugar.”"
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
        title="Tu operación, con el nivel de autonomía que necesitás"
        subtitle="Empezá conectando un proceso, usá flujos ya resueltos o construí reglas y experiencias propias sobre la API de Zonda."
        buttonText="Hablá con nuestro equipo"
      />
    </main>
  );
}
