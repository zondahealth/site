import type { Metadata } from "next";
import Image from "next/image";

import { LOGIN_URL } from "@/lib/navigation";
import {
  BenefitStories,
  FaqList,
  FeatureShot,
  SectionIntro,
  SplitFeature,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { IndustryProducts } from "@/components/industries/IndustryProducts";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

const title = "Atención primaria";
const description =
  "Pasá de papel, llamados y registros dispersos a una operación digital desde el primer día: agenda, pacientes, consultas, equipos y seguimiento en un solo lugar.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/industries/primary-care" },
  openGraph: {
    title: `${title} | Zonda`,
    description,
    url: "/industries/primary-care",
  },
};

const benefitImageSizes =
  "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

const benefits = [
  {
    title: "Pacientes informados",
    copy: "Recordatorios por WhatsApp y encuestas pre-consulta configurables.",
    href: "/use-cases/automation",
    cta: "Ver automatización",
    media: (
      <Image
        src="/assets/industries/primary-care/benefit-1.png"
        alt="Ilustración de pacientes informados con recordatorios y encuestas pre-consulta."
        fill
        className="object-cover"
        sizes={benefitImageSizes}
      />
    ),
  },
  {
    title: "Menos tiempo administrativo",
    copy: "Dictado por voz y resumen estructurado (SOAP).",
    href: "/use-cases/normalized-ai",
    cta: "Ver IA normalizada",
    media: (
      <Image
        src="/assets/industries/primary-care/benefit-2.png"
        alt="Ilustración de dictado por voz y resumen clínico estructurado."
        fill
        className="object-cover"
        sizes={benefitImageSizes}
      />
    ),
  },
  {
    title: "Prevención basada en datos",
    copy: "Detectá pacientes sin control o con riesgo creciente.",
    href: "/use-cases/population-segmentation",
    cta: "Ver segmentación",
    media: (
      <Image
        src="/assets/industries/primary-care/benefit-3.png"
        alt="Ilustración de prevención basada en datos y segmentación de pacientes."
        fill
        className="object-cover"
        sizes={benefitImageSizes}
      />
    ),
  },
];

const faqItems = [
  {
    question: "¿Necesito instalar algo en mi consultorio?",
    answer: "No. Funciona en el navegador y en la app móvil.",
  },
  {
    question: "¿Puedo migrar mis pacientes desde otro sistema?",
    answer: "Sí, desde planillas, CSV u otros sistemas.",
  },
  {
    question: "¿Mis datos están seguros?",
    answer:
      "Cifrado en tránsito y en reposo, permisos granulares y aislamiento multi-tenant.",
  },
];

const features = [
  {
    title: "Ordená la atención de todos los días",
    copy: "Zonda reúne las tareas que hoy viven entre una agenda, una libreta y los mensajes del equipo para que el día pueda gestionarse desde una sola plataforma.",
    label:
      "Agenda de atención primaria con turnos, profesionales y estados de pacientes del día.",
  },
  {
    title: "La historia clínica se construye mientras se atiende",
    copy: "El profesional puede dejar una evolución en lenguaje natural y Zonda la convierte en información que el equipo puede encontrar y usar después.",
    label:
      "Perfil de paciente de atención primaria con evolución clínica estructurada, antecedentes y próximos controles.",
  },
  {
    title: "La prevención empieza cuando la población deja de ser una lista",
    copy: "Una vez que la información de cada consulta queda conectada, el centro puede ver a quién le falta un control y dónde conviene intervenir primero.",
    label:
      "Panel de salud poblacional con pacientes sin control, cohortes de riesgo y acciones de seguimiento.",
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

export default function PrimaryCarePage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        eyebrow="Atención primaria"
        title="Una atención primaria digital, desde el primer día"
        copy={description}
        primary={{ label: "Hablemos", href: "/contact" }}
        // DECISIÓN NAV-2: confirmar URL de la app; si no se confirma, apuntar a /contact.
        secondary={{ label: "Crear mi perfil profesional", href: LOGIN_URL }}
        secondaryVariant="inverse"
        mediaClassName="overflow-visible"
        media={
          <div className="relative h-[300px] w-full sm:h-[400px] lg:h-full">
            <Image
              src="/assets/industries/primary-care/salita.png"
              alt="Ilustración de un centro de salud de atención primaria"
              width={1774}
              height={887}
              priority
              sizes="(min-width: 1024px) 1200px, 100vw"
              className="absolute top-1/2 left-1/2 h-auto w-[min(100%,680px)] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain sm:w-[min(100%,820px)] lg:top-[62%] lg:left-0 lg:w-[min(1200px,calc(50vw+11rem))] lg:translate-x-0 lg:-translate-y-1/2"
            />
          </div>
        }
      />

      <BenefitStories
        title="Todo lo necesario para que la información no se pierda."
        copy="Zonda ordena el día, conserva el contexto clínico y convierte cada atención en una oportunidad de seguimiento."
        items={benefits}
      />

      <section className="px-6 pt-16 sm:px-10 sm:pt-20 lg:px-16 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            title="Del papel a una operación que el equipo puede compartir"
            copy="Empezá por digitalizar la agenda y el registro. Después, la misma información permite coordinar equipos, seguir pacientes y sostener procesos preventivos."
            className="max-w-4xl"
            titleClassName="text-5xl sm:text-6xl"
          />
        </div>
      </section>

      {features.map((item, index) => (
        <SplitFeature
          key={item.label}
          title={item.title}
          copy={item.copy}
          mediaSide={index % 2 === 1 ? "left" : "right"}
          media={
            <FeatureShot
              src={`/assets/industries/primary-care/feature-${index + 1}.png`}
              alt={item.label}
            />
          }
        >
          <FeatureDetails
            items={[
              {
                title: "Agenda y pacientes",
                copy: "Turnos, disponibilidad y contexto del paciente antes de la consulta.",
              },
              {
                title: "Equipo coordinado",
                copy: "Cada consulta, derivación o pendiente queda visible para quienes tienen que actuar.",
              },
              {
                title: "Información reutilizable",
                copy: "Lo registrado sirve para la próxima atención, el seguimiento y la prevención.",
              },
            ]}
          />
        </SplitFeature>
      ))}

      <SplitFeature
        title="Una misma base para distintas formas de atención primaria"
        copy="Desde un consultorio hasta un CAPS o programa de crónicos, Zonda se adapta a la escala de cada equipo."
        media={
          <FeatureShot
            src="/assets/industries/primary-care/feature-4.png"
            alt="Centros de salud, consultorios y programas de medicina familiar conectados a la misma operación digital."
          />
        }
      >
        <FeatureDetails
          items={[
            {
              title: "Centros de salud y CAPS",
              copy: "Para equipos, consultorios y pacientes que necesitan una vista común.",
            },
            {
              title: "Consultorios y médicos de cabecera",
              copy: "Para ordenar el día, registrar mejor y dar continuidad a cada persona atendida.",
            },
            {
              title: "Medicina familiar y crónicos",
              copy: "Para seguir poblaciones y sostener planes de cuidado en el tiempo.",
            },
          ]}
        />
      </SplitFeature>

      <FaqList items={faqItems} />

      <IndustryProducts
        title="Del registro del día al seguimiento de la población."
        subtitle="Operación digital, automatización, agentes y segmentación para el equipo de atención."
        keys={[
          "operations",
          "automation",
          "normalized-ai",
          "population-segmentation",
        ]}
      />

      <CtaBanner
        title="Empezá a digitalizar la atención que ya brindás"
        subtitle="Ordená la operación cotidiana hoy y construí una base para prevenir, coordinar y crecer mañana."
        buttonText="Hablá con nuestro equipo"
      />
    </main>
  );
}
