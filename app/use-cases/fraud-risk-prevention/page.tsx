import type { Metadata } from "next";
import Image from "next/image";

import {
  BenefitStories,
  FaqList,
  SplitFeature,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

const title = "Fraude y prevención de riesgos en salud";
const description =
  "Conectá cada evento clínico, operativo y financiero para detectar inconsistencias antes de que se conviertan en pérdida.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "prevención de fraude en salud",
    "detección de riesgo",
    "integridad de pagos en salud",
    "auditoría de prestaciones",
  ],
  alternates: { canonical: "/use-cases/fraud-risk-prevention" },
  openGraph: {
    title: `${title} | Zonda`,
    description,
    url: "/use-cases/fraud-risk-prevention",
  },
};

const benefitImageSizes =
  "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

const benefits = [
  {
    title: "Mirá lo que los sistemas desconectados no ven",
    copy: "Relacioná datos operativos, clínicos y financieros para detectar inconsistencias que no aparecen cuando cada sistema se analiza por separado.",
    media: (
      <Image
        src="/assets/solutions/fraud/zonda-floating-pills.png"
        alt="Zonda conectando pacientes, tratamiento, turnos, pagos, ubicación, signos vitales y aseguradoras en una sola vista"
        fill
        className="object-cover"
        sizes={benefitImageSizes}
      />
    ),
  },
  {
    title: "Investigá con todo el contexto",
    copy: "Dale al equipo de auditoría una vista única de la transacción, las señales detrás de la alerta y la evidencia para decidir.",
    media: (
      <Image
        src="/assets/solutions/fraud/search.png"
        alt="Búsqueda en lenguaje natural de pacientes con tratamiento activo o procedimiento agendado"
        fill
        className="object-cover"
        sizes={benefitImageSizes}
      />
    ),
  },
  {
    title: "Concentrá los controles donde el riesgo es mayor",
    copy: "Evaluá las transacciones de forma continua y reservá los controles adicionales para los casos que realmente lo justifican.",
    media: (
      <Image
        src="/assets/solutions/fraud/anomaly.png"
        alt="Anomalía detectada por ubicación sospechosa en una transacción"
        fill
        className="object-cover"
        sizes={benefitImageSizes}
      />
    ),
  },
];

const splitImageClassName = "h-auto w-full rounded-[1.5rem] object-cover";
const splitImageSizes = "(min-width: 1024px) 50vw, 100vw";

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

const faqItems = [
  {
    question: "¿Qué es la prevención de fraude en salud?",
    answer:
      "Es la capacidad de detectar inconsistencias, comportamientos atípicos y riesgos operativos antes de que generen pérdidas financieras o afecten la atención.",
  },
  {
    question: "¿Qué tipos de fraude puede detectar Zonda?",
    answer:
      "Inconsistencias entre autorización, prestación del servicio, documentación clínica, facturación, liquidación y comportamiento de las transacciones.",
  },
  {
    question: "¿Cómo calcula Zonda el riesgo de una transacción?",
    answer:
      "Combina señales explicables con el contexto completo de la transacción. Cada puntaje muestra los factores que contribuyeron a su nivel de riesgo.",
  },
  {
    question:
      "¿Funciona con nuestros sistemas actuales? ¿Hay que reemplazar software?",
    answer:
      "Sí funciona, y no hay que reemplazar nada: Zonda conecta los sistemas existentes y crea una capa unificada de transacciones por encima.",
  },
  {
    question: "¿Cómo conecta Zonda autorización, facturación y liquidación?",
    answer:
      "Normaliza los eventos de cada sistema y los vincula a la misma transacción de salud, preservando sus tiempos y relaciones.",
  },
  {
    question: "¿Se pueden personalizar las reglas de riesgo?",
    answer:
      "Sí. Los controles pueden reflejar los contratos, políticas, flujos y prioridades de riesgo de cada organización.",
  },
  {
    question: "¿Cómo reduce el fraude sin sumar fricción administrativa?",
    answer:
      "Las transacciones de bajo riesgo siguen automáticamente. Los controles adicionales aparecen solo cuando las señales conectadas lo justifican.",
  },
];

export default function FraudRiskPreventionPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        title="Detectá el fraude antes de que se convierta en pérdida"
        copy={description}
        primary={{ label: "Hablá con nuestro equipo", href: "/contact" }}
        secondary={{ label: "Ver cómo funciona", href: "#como-funciona" }}
        secondaryVariant="inverse"
        mediaClassName="overflow-visible"
        contentClassName="lg:pt-32 lg:pb-20"
        media={
          <div className="relative h-[340px] w-full sm:h-[480px] lg:h-full">
            <Image
              src="/assets/solutions/fraud/hero.png"
              alt="Hipócrates con linterna y gorra de detective junto a la alerta Anomalía Detectada"
              width={1369}
              height={1009}
              priority
              sizes="(min-width: 1024px) 820px, 90vw"
              className="absolute bottom-0 left-1/2 h-auto w-full max-w-none -translate-x-1/2 sm:w-[620px] lg:left-auto lg:w-[min(800px,calc(50vw+1rem))] lg:translate-x-0 lg:right-[calc(min(0px,(80rem-100vw)/2)+1rem)]"
            />
          </div>
        }
      />

      <BenefitStories
        title="Lo que necesitás para adelantarte al fraude en salud."
        copy="Zonda conecta la evidencia que explica una prestación para que los equipos puedan prevenir pérdidas sin sumar fricción a cada transacción legítima."
        items={benefits}
      />

      <SplitFeature
        id="como-funciona"
        title="Conectá cada paso de la transacción de salud"
        copy="El fraude y el riesgo operativo suelen aparecer en los huecos entre sistemas. Zonda crea una sola vista de qué se autorizó, qué pasó, qué se documentó, qué se facturó y qué se pagó finalmente."
        media={
          <Image
            src="/assets/solutions/fraud/timeline.png"
            alt="Línea de tiempo de una visita desde procedimiento iniciado hasta datos cargados y ubicación validada"
            width={1000}
            height={1000}
            sizes={splitImageSizes}
            className={splitImageClassName}
          />
        }
      >
        <FeatureDetails
          items={[
            { title: "Una transacción, un recorrido", copy: "Autorización, atención, documentación, facturación, cobro y liquidación vinculados a la misma prestación." },
            { title: "El contexto se conserva", copy: "Cada evento mantiene su origen, momento y relación con pacientes, profesionales y financiadores." },
            { title: "La evidencia no se pierde", copy: "Podés recorrer una alerta hasta los hechos que la explican, sin reconciliar sistemas a mano." },
          ]}
        />
      </SplitFeature>

      <SplitFeature
        title="Detectá riesgo a partir de múltiples señales"
        copy="Evaluá la integridad de la transacción desde la autorización hasta la liquidación y sumá contexto de comportamiento para ver patrones que ningún sistema individual puede revelar."
        mediaSide="left"
        media={
          <Image
            src="/assets/solutions/fraud/health-panel.png"
            alt="Panel de salud que monitorea tratamientos y actividad clínica por estado del paciente"
            width={1000}
            height={1000}
            sizes={splitImageSizes}
            className={splitImageClassName}
          />
        }
      >
        <FeatureDetails
          items={[
            { title: "Verificá cómo se realizó", copy: "Presencia, horario, ubicación y firma digital cuando corresponda al proceso." },
            { title: "Contrastá lo documentado", copy: "Prestaciones, prescripciones, autorizaciones y documentación clínica en el mismo contexto." },
            { title: "Reconocé patrones", copy: "Desvíos de actividad y facturación por sede, profesional, práctica o financiador." },
          ]}
        />
      </SplitFeature>

      <SplitFeature
        title="Convertí señales en riesgo accionable"
        copy="Una anomalía aislada no significa necesariamente fraude. Zonda combina señales y contexto para construir una evaluación de riesgo explicable para cada transacción: cada puntaje muestra los factores que lo explican."
        media={
          <Image
            src="/assets/solutions/fraud/fraud-score.png"
            alt="Score de riesgo 32 de un médico clínico con ubicación no reconocida, matrícula no verificada y actividad alta, con mayor riesgo de fraude que el 89% de los clínicos"
            width={1445}
            height={1088}
            sizes={splitImageSizes}
            className={splitImageClassName}
          />
        }
      >
        <FeatureDetails
          items={[
            { title: "Separá señal de decisión", copy: "Una anomalía inicia una revisión; el contexto determina si realmente requiere intervención." },
            { title: "Entendé cada puntaje", copy: "Cada evaluación muestra los factores que elevaron o redujeron el nivel de riesgo." },
            { title: "Llevá cada caso al equipo correcto", copy: "Priorizá la revisión de los casos con mayor impacto y dejá fluir el resto de la operación." },
          ]}
        />
      </SplitFeature>

      <section className="px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="relative isolate flex min-h-[640px] flex-col overflow-hidden rounded-[1.75rem] bg-[#1f8fd6] px-6 pt-14 text-center sm:px-12 sm:pt-16 lg:min-h-[760px] lg:px-16 lg:pt-20">
            <Image
              src="/assets/bg/bg-clouds-default.png"
              alt=""
              fill
              sizes="(min-width: 1280px) 1280px, 100vw"
              className="pointer-events-none -z-10 object-cover"
            />
            <h2 className="mx-auto max-w-3xl font-display text-4xl font-semibold leading-tight tracking-[-0.04em] text-foreground sm:text-5xl">
              Investigá con todo el contexto
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-foreground/75 sm:text-lg">
              Entendé la transacción, el motivo por el que fue marcada y la
              evidencia que la respalda desde una sola vista operativa.
            </p>
            <div className="mx-auto mt-auto w-full max-w-4xl pt-10 sm:pt-14">
              <Image
                src="/assets/solutions/fraud/transaction-context.png"
                alt="Análisis de riesgo de una transacción de alto riesgo con puntaje 87, señales de riesgo conectadas y línea de tiempo de la transacción"
                width={1278}
                height={823}
                sizes="(min-width: 1280px) 896px, 100vw"
                className="block h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <FaqList items={faqItems} />

      <CtaBanner
        title="¿Listo para ver el riesgo que se te estaba escapando?"
        subtitle="Conectá las transacciones de salud, detectá inconsistencias antes y enfocá a tus equipos en los casos que importan."
        buttonText="Hablá con nuestro equipo"
      />
    </main>
  );
}
