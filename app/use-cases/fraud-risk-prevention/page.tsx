import type { Metadata } from "next";
import Image from "next/image";
import {
  Activity,
  BadgeCheck,
  FileCheck2,
  Receipt,
  ShieldCheck,
  Wallet,
  type LucideIcon,
} from "lucide-react";

import {
  BenefitStories,
  CapabilityGrid,
  ChecklistSection,
  FaqList,
  FeatureShot,
  SplitFeature,
  SectionIntro,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

const title = "Fraude y prevención de riesgos en salud";
const description =
  "Zonda conecta autorización, prestación, información clínica, facturación y liquidación para evaluar cada transacción de salud y detectar actividad sospechosa antes de que se convierta en pérdida.";

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
    title: "Mirá lo que los sistemas aislados no ven",
    copy: "Relacioná datos operativos, clínicos y financieros para detectar inconsistencias que no aparecen cuando cada sistema se analiza por separado.",
    media: (
      <Image
        src="/assets/solutions/fraud/benefit-1.png"
        alt="Zonda conectando pacientes, tratamiento, turnos, pagos, ubicación, signos vitales y aseguradoras en una sola vista"
        fill
        className="object-cover"
        sizes={benefitImageSizes}
      />
    ),
  },
  {
    title: "Detectá patrones, no solo anomalías",
    copy: "Conectá la actividad de toda la red para encontrar relaciones entre profesionales, pacientes y prestadores que una transacción aislada no muestra.",
    media: (
      <Image
        src="/assets/solutions/fraud/benefit-2.png"
        alt="Búsqueda en lenguaje natural de pacientes con tratamiento activo o procedimiento agendado"
        fill
        className="object-cover"
        sizes={benefitImageSizes}
      />
    ),
  },
  {
    title: "El control se adapta al nivel de riesgo",
    copy: "Las transacciones normales siguen con mínima fricción y los controles adicionales aparecen solo cuando las señales lo justifican.",
    media: (
      <Image
        src="/assets/solutions/fraud/benefit-3.png"
        alt="Anomalía detectada por ubicación sospechosa en una transacción"
        fill
        className="object-cover"
        sizes={benefitImageSizes}
      />
    ),
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

const integrityChecks: { title: string; copy: string; icon: LucideIcon }[] = [
  {
    title: "Integridad de la autorización",
    copy: "Prestaciones fuera del período autorizado, por encima de la frecuencia aprobada, fuera del plan terapéutico o sin una autorización válida.",
    icon: ShieldCheck,
  },
  {
    title: "Integridad de la prestación",
    copy: "Si la prestación pudo ocurrir según horario, ubicación, duración y actividad del profesional: duplicadas, visitas superpuestas, recorridos imposibles y volúmenes anormales.",
    icon: BadgeCheck,
  },
  {
    title: "Integridad clínica",
    copy: "Documentación faltante, inconsistencias entre el registro clínico y la prestación, y patrones atípicos de documentación.",
    icon: FileCheck2,
  },
  {
    title: "Integridad de la facturación",
    copy: "Lo autorizado y realizado frente a lo facturado: facturación duplicada, prácticas sin respaldo, cantidades incorrectas y diferencias entre registros operativos y financieros.",
    icon: Receipt,
  },
  {
    title: "Integridad de la liquidación",
    copy: "Pagos y liquidaciones a profesionales que corresponden a transacciones válidas y a las reglas contractuales aplicables.",
    icon: Wallet,
  },
  {
    title: "Inteligencia de comportamiento",
    copy: "Patrones históricos de profesionales, prestadores, pacientes y organizaciones para detectar lo que los controles estáticos no identifican.",
    icon: Activity,
  },
];

const networkPatterns = [
  "Profesionales con volúmenes de actividad anormales.",
  "Actividad sospechosa repetida sobre los mismos pacientes.",
  "Dispositivos o ubicaciones compartidas.",
  "Concentraciones atípicas de facturación.",
  "Comportamiento coordinado entre prestadores.",
  "Patrones geográficos o temporales imposibles en utilización o facturación.",
];

const learningLoop = [
  {
    step: "Señal de riesgo",
    copy: "Una combinación de señales marca la transacción para revisión.",
  },
  {
    step: "Investigación",
    copy: "El equipo analiza el caso con la evidencia y el contexto completos.",
  },
  {
    step: "Resultado",
    copy: "Anomalías confirmadas, falsos positivos y patrones nuevos quedan registrados.",
  },
  {
    step: "Nueva regla",
    copy: "Lo aprendido ajusta los controles existentes o se convierte en una regla nueva.",
  },
  {
    step: "Mejor detección",
    copy: "El modelo de riesgo evoluciona con cada caso, en lugar de depender de controles estáticos.",
  },
];

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
        title="El fraude en salud rara vez aparece en un único dato."
        copy="Una prestación puede parecer válida, la visita estar registrada y la autorización existir. El riesgo aparece cuando esos eventos se conectan."
        items={benefits}
      />

      <SplitFeature
        id="como-funciona"
        title="Conectá cada paso de la transacción de salud"
        copy="El fraude y el riesgo operativo suelen aparecer en los huecos entre sistemas. Zonda crea una sola vista de qué se autorizó, qué ocurrió y qué se pagó finalmente. Cuando esos eventos no coinciden, la inconsistencia se convierte en una señal de riesgo."
        media={
          <FeatureShot
            src="/assets/solutions/fraud/feature-1.png"
            alt="Línea de tiempo de una visita desde procedimiento iniciado hasta datos cargados y ubicación validada"
          />
        }
      >
        <FeatureDetails
          items={[
            {
              title: "Una transacción, un recorrido",
              copy: "Autorización, prestación, evidencia clínica, facturación y liquidación vinculadas a la misma transacción.",
            },
            {
              title: "El contexto se conserva",
              copy: "Cada evento mantiene su origen, momento y relación con pacientes, profesionales y financiadores.",
            },
            {
              title: "La evidencia no se pierde",
              copy: "Podés recorrer una alerta hasta los hechos que la explican, sin reconciliar sistemas a mano.",
            },
          ]}
        />
      </SplitFeature>

      <CapabilityGrid
        title="Detectá riesgo en cada etapa de la transacción"
        copy="Zonda analiza múltiples señales en conjunto para entender el contexto detrás de cada transacción, desde la autorización hasta la liquidación."
        columns={3}
        items={integrityChecks}
      />

      <SplitFeature
        title="Convertí señales en riesgo accionable"
        copy="Una anomalía aislada no significa necesariamente fraude. Una pequeña diferencia de ubicación puede representar poco riesgo; combinada con una prestación no autorizada, actividad superpuesta y evidencia clínica inconsistente, el escenario es otro. Zonda combina las señales en una evaluación explicable y ayuda a definir qué hacer a continuación."
        media={
          <FeatureShot
            src="/assets/solutions/fraud/feature-3.png"
            alt="Score de riesgo 32 de un médico clínico con ubicación no reconocida, matrícula no verificada y actividad alta, con mayor riesgo de fraude que el 89% de los clínicos"
          />
        }
      >
        <FeatureDetails
          items={[
            {
              title: "Riesgo bajo",
              copy: "La transacción continúa sin generar fricción innecesaria.",
            },
            {
              title: "Riesgo medio",
              copy: "Se solicita validación o evidencia adicional.",
            },
            {
              title: "Riesgo alto",
              copy: "La transacción se prioriza para investigación antes del pago o la liquidación.",
            },
          ]}
        />
      </SplitFeature>

      <SplitFeature
        title="Enfocá a los equipos en las transacciones que importan"
        copy="Las organizaciones de salud procesan miles o millones de transacciones, y auditarlas una por una no escala. Zonda analiza la actividad de forma continua y prioriza los casos de mayor riesgo para que la auditoría concentre su tiempo donde genera más impacto."
        mediaSide="left"
        media={
          <FeatureShot
            src="/assets/solutions/fraud/feature-2.png"
            alt="Panel de salud que monitorea tratamientos y actividad clínica por estado del paciente"
          />
        }
      >
        <FeatureDetails
          items={[
            {
              title: "En lugar de preguntarse “¿qué deberíamos auditar?”",
              copy: "Los equipos parten de “¿por qué esta transacción presenta riesgo y qué deberíamos hacer?”.",
            },
            {
              title: "Entendé cada puntaje",
              copy: "Cada evaluación muestra los factores que elevaron o redujeron el nivel de riesgo.",
            },
          ]}
        />
      </SplitFeature>

      <section className="px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="relative isolate flex min-h-[640px] flex-col overflow-hidden rounded-[1.75rem] px-6 pt-14 text-center sm:px-12 sm:pt-16 lg:min-h-[760px] lg:px-16 lg:pt-20">
            <Image
              src="/assets/bg/hero-common-bg.png"
              alt=""
              fill
              sizes="(min-width: 1280px) 1280px, 100vw"
              className="pointer-events-none -z-10 object-cover"
            />
            <h2 className="mx-auto max-w-3xl font-display text-4xl font-semibold leading-tight tracking-[-0.04em] text-foreground sm:text-5xl">
              Investigá con todo el contexto
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-foreground/75 sm:text-lg">
              Cada transacción marcada se rastrea hasta las señales que
              generaron la alerta: autorización, prestación programada,
              evidencia de ejecución, registro clínico, facturación y
              liquidación, junto con el paciente, el profesional, horario,
              ubicación, montos, historial e investigaciones anteriores. Sin
              reconstruir el caso a mano desde sistemas desconectados.
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

      <ChecklistSection
        title="Detectá patrones, no solamente anomalías individuales"
        copy="El fraude no siempre es visible en una transacción aislada. Al conectar la actividad de toda la red, Zonda identifica relaciones que los sistemas aislados no pueden ver."
        items={networkPatterns}
      />

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <SectionIntro
            title="Convertí cada investigación en un mejor control"
            copy="Cada investigación genera información nueva. Con el tiempo, la auditoría pasa de controles estáticos a un modelo de riesgo que evoluciona continuamente."
            className="max-w-xl"
          />
          <ol className="border-l border-border/80">
            {learningLoop.map((item, index) => (
              <li
                key={item.step}
                className={
                  index === learningLoop.length - 1
                    ? "relative pt-8 pl-8"
                    : index === 0
                      ? "relative pb-8 pl-8"
                      : "relative py-8 pl-8"
                }
              >
                <span
                  className={`absolute -left-[0.45rem] flex size-4 items-center justify-center rounded-full bg-secondary ring-4 ring-background ${index === 0 ? "top-0" : "top-8"}`}
                />
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
                  {item.step}
                </p>
                <p className="mt-2 text-base leading-7 text-foreground/80">
                  {item.copy}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FaqList items={faqItems} />

      <CtaBanner
        title="De la auditoría retrospectiva a la prevención continua"
        subtitle="Conectá los datos. Detectá las señales. Entendé el riesgo. Investigá las excepciones. Prevení la pérdida."
        buttonText="Hablá con nuestro equipo"
      />
    </main>
  );
}
