import type { Metadata } from "next";
import Image from "next/image";

import {
  BenefitStories,
  FeatureShot,
  SplitFeature,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

const title = "Segmentación poblacional en salud";
const description =
  "Entendé y priorizá a pacientes y afiliados por riesgo, condición, territorio o cobertura, sobre datos clínicos y operativos que se actualizan con la población.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/use-cases/population-segmentation" },
  openGraph: {
    title: `${title} | Zonda`,
    description,
    url: "/use-cases/population-segmentation",
  },
};

const benefitImageSizes =
  "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

const benefits = [
  {
    title: "Una sola foto de toda tu población",
    copy: "Zonda une historias clínicas, turnos, laboratorios, encuestas y padrones en un perfil por paciente, con identidad unificada.",
    media: (
      <Image
        src="/assets/solutions/segmentation/benefit-1.png"
        alt="Perfil unificado de una paciente conectado a medicación, historia clínica, hospital, turnos, vacunas y signos vitales"
        fill
        className="object-cover"
        sizes={benefitImageSizes}
      />
    ),
  },
  {
    title: "Segmentos que se actualizan solos",
    copy: "Definí criterios una vez —edad, diagnóstico, resultados, última consulta o zona— y cada segmento se recalcula cuando cambia la información.",
    media: (
      <Image
        src="/assets/solutions/segmentation/benefit-2.png"
        alt="Segmento dinámico con criterios de edad, diabetes ICD-10 E11 y sin consulta en más de 180 días, con 1.284 pacientes"
        fill
        className="object-cover"
        sizes={benefitImageSizes}
      />
    ),
  },
  {
    title: "Del segmento a la acción",
    copy: "Convertí un grupo priorizado en campañas, turnos, visitas o seguimientos desde la plataforma o vía API.",
    media: (
      <Image
        src="/assets/solutions/segmentation/benefit-3.png"
        alt="El segmento de pacientes de alto riesgo dispara campaña enviada, turnos programados y seguimiento iniciado"
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

export default function PopulationSegmentationPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        title="Conocé a tu población antes de que llegue a la guardia"
        copy={description}
        primary={{ label: "Hablemos", href: "/contact" }}
        secondary={{ label: "Ver la API", href: "/developers" }}
        secondaryVariant="inverse"
        mediaClassName="overflow-visible"
        media={
          <div className="flex w-full items-center justify-center px-[8.4%] pt-16 pb-6 sm:pt-20 lg:pt-24 lg:pb-10">
            <div className="relative w-full">
              <Image
                src="/assets/solutions/segmentation/hero.png"
                alt="Mapa de una provincia con departamentos coloreados según el nivel de riesgo"
                width={1254}
                height={1254}
                priority
                sizes="(min-width: 1024px) 47vw, 84vw"
                className="h-auto w-full"
              />
              <Image
                src="/assets/solutions/segmentation/hero-pop1.png"
                alt="Zona Norte, bajo riesgo: 312.540 personas, 14% de 60 años o más y 22% con hipertensión o diabetes"
                width={588}
                height={289}
                sizes="(min-width: 1024px) 220px, 38vw"
                className="pointer-events-none absolute top-[16%] left-0 z-10 w-[65%] max-w-[240px] -translate-x-[36%] drop-shadow-lg"
              />
              <Image
                src="/assets/solutions/segmentation/hero-pop2.png"
                alt="Zona Sur, riesgo medio: 184.210 personas, 20% de 60 años o más y 27% con hipertensión o diabetes"
                width={580}
                height={280}
                sizes="(min-width: 1024px) 220px, 38vw"
                className="pointer-events-none absolute bottom-[14%] left-0 z-10 w-[65%] max-w-[240px] -translate-x-[32%] drop-shadow-lg"
              />
              <Image
                src="/assets/solutions/segmentation/hero-pop3.png"
                alt="Zona CABA y Conurbano, alto riesgo: 1.248.320 personas, 28% de 60 años o más y 34% con hipertensión o diabetes"
                width={587}
                height={291}
                sizes="(min-width: 1024px) 220px, 38vw"
                className="pointer-events-none absolute top-[42%] right-0 z-10 w-[60%] max-w-[240px] translate-x-[28%] -translate-y-1/2 drop-shadow-lg"
              />
            </div>
          </div>
        }
      />

      <BenefitStories
        title="Lo que necesitás para planificar mejor."
        copy="Pasá de una lista de afiliados a una lectura viva de la población: quién necesita seguimiento, dónde están las brechas y qué intervención puede hacer una diferencia."
        items={benefits}
      />

      <SplitFeature
        title="Segmentá con datos que ya tenés"
        copy="Los datos de tu población ya existen, pero están repartidos en sistemas que no se hablan. Zonda los conecta y los normaliza para que puedas cruzarlos con confianza."
        media={
          <FeatureShot
            src="/assets/solutions/segmentation/feature-1.png"
            alt="Paciente unificada conectada a medicación, historia clínica, hospital, turnos, vacunas y signos vitales"
          />
        }
      >
        <FeatureDetails
          items={[
            {
              title: "Incorporá cada fuente",
              copy: "Historias clínicas, laboratorios, padrones de financiadores, encuestas y planillas.",
            },
            {
              title: "Hablá un idioma común",
              copy: "Diagnósticos, resultados y prestaciones normalizados para poder compararlos y combinarlos.",
            },
            {
              title: "Reconocé a cada persona",
              copy: "Deduplicación e identidad unificada aunque un paciente aparezca en distintas fuentes.",
            },
          ]}
        />
      </SplitFeature>

      <SplitFeature
        title="Encontrá las cohortes que necesitan atención"
        copy="Explorá la población por riesgo, condición, territorio o cobertura. Empezá con una pregunta amplia y llegá hasta cada paciente que explica el resultado."
        mediaSide="left"
        media={
          <FeatureShot
            src="/assets/solutions/segmentation/feature-2.png"
            alt="Panel de salud con 248 pacientes, 1.320 procedimientos y la evolución del estado clínico"
          />
        }
      >
        <FeatureDetails
          items={[
            {
              title: "Preguntá en lenguaje natural",
              copy: "Por ejemplo: pacientes con diabetes sin consulta reciente en una zona determinada.",
            },
            {
              title: "Cruzá lo clínico y lo operativo",
              copy: "Historias clínicas, turnos, laboratorios y padrones responden como una misma población.",
            },
            {
              title: "Llegá al detalle",
              copy: "De una tendencia o segmento al perfil de las personas que lo componen.",
            },
          ]}
        />
      </SplitFeature>

      <SplitFeature
        title="Activá cada segmento"
        copy="Un segmento sirve cuando pone en marcha una acción concreta. Zonda permite llevar la priorización a los equipos, los pacientes y los sistemas que ya usás."
        media={
          <FeatureShot
            src="/assets/solutions/segmentation/feature-3.png"
            alt="Segmento de riesgo cardiovascular con recordatorio enviado, campaña de prevención incluida y flujo completado"
          />
        }
      >
        <FeatureDetails
          items={[
            {
              title: "Acompañá a cada grupo",
              copy: "Recordatorios, encuestas preconsulta y campañas adaptadas a la necesidad detectada.",
            },
            {
              title: "Priorizá la capacidad disponible",
              copy: "Turnos prioritarios, visitas domiciliarias o seguimientos para quienes más los necesitan.",
            },
            {
              title: "Conectá tus propios flujos",
              copy: "Exportá a FHIR, CSV o webhook para activar herramientas y procesos existentes.",
            },
          ]}
        />
      </SplitFeature>

      <CtaBanner
        title="Convertí datos poblacionales en acciones de cuidado"
        buttonText="Hablá con nuestro equipo"
      />
    </main>
  );
}
