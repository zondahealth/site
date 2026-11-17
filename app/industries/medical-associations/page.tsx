import type { Metadata } from "next";
import Image from "next/image";

import {
  BenefitStories,
  FaqList,
  FeatureShot,
  SplitFeature,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { IndustryProducts } from "@/components/industries/IndustryProducts";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

const title = "Asociaciones médicas";
const description =
  "Una plataforma para representar a los profesionales, operar con todos los financiadores y seguir cada prestación hasta su liquidación.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/industries/medical-associations" },
  openGraph: {
    title: `${title} | Zonda`,
    description,
    url: "/industries/medical-associations",
  },
};

const benefitImageSizes =
  "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

const benefits = [
  {
    title: "Un padrón que acompaña a cada socio",
    copy: "Credenciales, matrículas, especialidades y vínculos de trabajo en una identidad que se mantiene actualizada.",
    href: "/use-cases/identity",
    cta: "Ver identidad",
    media: (
      <Image
        src="/assets/industries/medical-associations/benefit-1.png"
        alt="Padrón de profesionales con matrículas, especialidades, credenciales y vencimientos."
        fill
        className="object-cover"
        sizes={benefitImageSizes}
      />
    ),
  },
  {
    title: "Una sola conexión para todos los financiadores",
    copy: "Los socios trabajan sobre un flujo común aunque cada cobertura tenga reglas, autorizaciones y nomencladores distintos.",
    href: "/use-cases/multi-payer-care",
    cta: "Ver atención multi-financiador",
    media: (
      <Image
        src="/assets/industries/medical-associations/benefit-2.png"
        alt="Profesional y asociación conectados a múltiples financiadores en un flujo común."
        fill
        className="object-cover"
        sizes={benefitImageSizes}
      />
    ),
  },
  {
    title: "Liquidaciones que se pueden explicar",
    copy: "Prestaciones, convenios, respuestas y pagos conectados para saber qué corresponde liquidar a cada profesional.",
    href: "/use-cases/revenue-cycle",
    cta: "Ver ciclo de ingresos",
    media: (
      <Image
        src="/assets/industries/medical-associations/benefit-3.png"
        alt="Liquidación a profesionales vinculada a prestaciones, convenios, respuestas y pagos."
        fill
        className="object-cover"
        sizes={benefitImageSizes}
      />
    ),
  },
];

const features = [
  {
    title: "La asociación conoce a cada profesional más allá de una planilla",
    copy: "El padrón no es sólo una lista de socios. Es la base para credencializar, ofrecer mejores herramientas y habilitar a cada profesional a operar con la información correcta.",
    details: [
      [
        "Un perfil por profesional",
        "Matrícula, especialidades, credenciales, sedes y organizaciones en una misma identidad.",
      ],
      [
        "Vencimientos visibles",
        "Alertas para documentación y credenciales que requieren seguimiento antes de afectar la operación.",
      ],
      [
        "Servicios que llegan al socio",
        "La asociación puede habilitar herramientas y accesos sin reconstruir datos en cada alta.",
      ],
    ],
    label:
      "Perfil profesional de una asociación con matrícula, especialidades, credenciales y estado de habilitación.",
  },
  {
    title: "Todos los financiadores, una operación para los socios",
    copy: "La asociación puede centralizar convenios y conexiones con obras sociales y prepagas para que los profesionales no tengan que aprender un circuito distinto por cada cobertura.",
    details: [
      [
        "Convenios en un solo lugar",
        "Las condiciones, prácticas y reglas de cada financiador forman parte de la operación compartida.",
      ],
      [
        "Una carga por prestación",
        "El profesional registra una vez y el flujo aplica lo que necesita cada cobertura.",
      ],
      [
        "Validaciones antes de presentar",
        "Autorizaciones, requisitos y documentación visibles cuando todavía es posible resolverlos.",
      ],
    ],
    label:
      "Asociación médica conectada a obras sociales y prepagas con convenios, autorizaciones y prácticas.",
  },
  {
    title: "De la prestación al pago del profesional, sin perder el hilo",
    copy: "La asociación puede acompañar todo el ciclo: lo que se realizó, se presentó, fue aceptado o observado, se cobró y corresponde liquidar a cada socio.",
    details: [
      [
        "Facturación centralizada",
        "Las prestaciones de los socios se organizan y presentan con su vínculo al financiador y al convenio.",
      ],
      [
        "Diferencias con contexto",
        "Débitos, observaciones y reclamos conservan la prestación y la regla que los explican.",
      ],
      [
        "Liquidación trazable",
        "Cada importe pagado a un profesional se puede recorrer hasta la atención y la respuesta que lo originaron.",
      ],
    ],
    label:
      "Recorrido trazable de una prestación desde la atención, facturación y cobro hasta la liquidación al profesional.",
  },
  {
    title: "Mejor servicio para los socios, mejor control para la asociación",
    copy: "Cuando los datos, los convenios y los procesos están conectados, la asociación puede ofrecer herramientas concretas y detectar dónde hace falta acompañar o intervenir.",
    details: [
      [
        "Operación digital para cada socio",
        "Agenda, pacientes, registros y prestaciones para quienes todavía trabajan con papel o sistemas aislados.",
      ],
      [
        "Señales para cuidar el ciclo",
        "Desvíos, inconsistencias y excepciones visibles antes de convertirse en pérdidas o reclamos.",
      ],
      [
        "Información para decidir",
        "Actividad, ingresos y desempeño por profesional, práctica, financiador o período.",
      ],
    ],
    label:
      "Tablero de asociación médica con actividad de socios, prestaciones, ingresos y alertas operativas.",
  },
];

const faqItems = [
  {
    question:
      "¿Los socios tienen que usar un sistema distinto por financiador?",
    answer:
      "No. La asociación puede centralizar las conexiones y reglas para que los socios trabajen sobre un flujo común.",
  },
  {
    question: "¿Podemos mantener nuestro sistema de facturación actual?",
    answer:
      "Sí. Zonda puede complementar los sistemas existentes mediante API, conectores o intercambio de archivos.",
  },
  {
    question: "¿Qué pasa con los socios que todavía trabajan en papel?",
    answer:
      "Pueden empezar con herramientas simples para agenda, pacientes y registros, mientras la asociación mantiene el contexto operativo y administrativo conectado.",
  },
  {
    question: "¿Cómo se calcula una liquidación?",
    answer:
      "La prestación, el convenio, la respuesta del financiador y el cobro mantienen su vínculo para que cada liquidación pueda entenderse y auditarse.",
  },
];

function Details({ items }: { items: string[][] }) {
  return (
    <dl className="mt-8 grid max-w-lg gap-6">
      {items.map(([title, copy]) => (
        <div key={title}>
          <dt className="text-sm font-semibold text-foreground">{title}</dt>
          <dd className="mt-1 text-sm leading-6 text-muted-foreground">
            {copy}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default function MedicalAssociationsPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        eyebrow="Asociaciones médicas"
        title="Tus socios, sus convenios y sus ingresos, conectados"
        copy={description}
        primary={{ label: "Hablemos", href: "/contact" }}
        mediaClassName="overflow-visible"
        media={
          <div className="relative h-[420px] w-full sm:h-[520px] lg:h-full">
            <Image
              src="/assets/industries/medical-associations/hero.png"
              alt="Hipócrates conversando con un grupo de médicos alrededor de una mesa"
              width={1871}
              height={882}
              priority
              sizes="(min-width: 1024px) 1680px, 100vw"
              className="absolute top-1/2 left-1/2 h-auto w-[min(130.24%,722px)] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain object-left sm:w-[min(103.84%,950px)] lg:top-auto lg:bottom-0 lg:left-[-1rem] lg:h-[75.68%] lg:w-auto lg:translate-x-0 lg:translate-y-[2%]"
            />
          </div>
        }
      />
      <BenefitStories
        title="Una asociación puede hacer mucho más por sus profesionales."
        copy="Zonda conecta el padrón, los convenios y el ciclo de ingresos para que la asociación ofrezca una mejor operación a sus socios y mantenga visibilidad de punta a punta."
        items={benefits}
      />
      {features.map((feature, index) => (
        <SplitFeature
          key={feature.title}
          title={feature.title}
          copy={feature.copy}
          mediaSide={index % 2 ? "left" : "right"}
          media={
            <FeatureShot
              src={`/assets/industries/medical-associations/feature-${index + 1}.png`}
              alt={feature.label}
            />
          }
        >
          <Details items={feature.details} />
        </SplitFeature>
      ))}
      <FaqList items={faqItems} />
      <IndustryProducts
        title="Del padrón del socio a la liquidación."
        subtitle="Identidad, financiadores, ingresos y operación digital para toda la asociación."
        keys={["identity", "multi-payer-care", "revenue-cycle", "operations"]}
      />
      <CtaBanner
        title="Convertí la representación profesional en una operación conectada"
        subtitle="Una sola plataforma para acompañar a los socios, operar con financiadores y seguir cada ingreso hasta su liquidación."
        buttonText="Hablá con nuestro equipo"
      />
    </main>
  );
}
