import type { Metadata } from "next";
import Image from "next/image";
import {
  CircleDollarSign,
  FileSearch,
  FlaskConical,
  HeartPulse,
  Stethoscope,
  Users,
  Workflow,
} from "lucide-react";

import { ImagePlaceholder } from "@/components/ui/image-placeholder/ImagePlaceholder";
import {
  BenefitStories,
  SplitFeature,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

const title = "IA normalizada: datos clínicos listos para usar";
const description =
  "Zonda entiende cualquier formato de datos, lo interpreta, lo protege y lo transforma en información lista para usar, como quieras y donde quieras.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/use-cases/normalized-ai" },
  openGraph: {
    title: `${title} | Zonda`,
    description,
    url: "/use-cases/normalized-ai",
  },
};

const benefitImageSizes =
  "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

const agentBenefits = [
  {
    title: "Conversá con tus datos sobre el riesgo clínico",
    copy: "Conectá historial de tratamiento, visitas y eventos clínicos para identificar pacientes que pueden necesitar apoyo proactivo.",
    media: (
      <Image
        src="/assets/solutions/ai/benefit-1.png"
        alt="Ilustración de dos manos armando un rompecabezas, datos clínicos conectados"
        fill
        sizes={benefitImageSizes}
        className="object-cover"
      />
    ),
  },
  {
    title: "De notas a datos clínicos listos para usar",
    copy: "Zonda entiende las notas de los clínicos y las transforma en datos estructurados listos para analizar, sin agregar overhead a los médicos y reduciendo la energía que tienen que dedicarle a eso.",
    media: (
      <Image
        src="/assets/solutions/ai/benefit-2.png"
        alt="Ilustración de notas en papel que pasan a una notebook, de notas a datos listos para usar"
        fill
        sizes={benefitImageSizes}
        className="object-cover"
      />
    ),
  },
  {
    title: "Zonda entiende cualquier tipo de dato",
    copy: "Consume PDFs, texto, audio, FHIR, HL7, CSV y XML como llegan, sin plantillas fijas, y los deja listos para usar.",
    media: (
      <Image
        src="/assets/solutions/ai/benefit-3.png"
        alt="Ilustración de piezas sueltas que se unen en un rompecabezas, cualquier tipo de dato"
        fill
        sizes={benefitImageSizes}
        className="object-cover"
      />
    ),
  },
];

const splitImageClassName = "h-auto w-full rounded-[1.5rem] object-cover";
const splitImageSizes = "(min-width: 1024px) 50vw, 100vw";

export default function NormalizedAiPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        title="Convertí datos fragmentados en inteligencia accionable"
        copy={description}
        primary={{ label: "Hablá con nuestro equipo", href: "/contact" }}
        secondary={{
          label: "Ver el modelo de datos",
          href: "/developers#modelo-canonico",
        }}
        secondaryVariant="inverse"
        mediaClassName="overflow-visible"
        media={
          <div className="flex h-full w-full items-end justify-center px-4 pt-28 sm:px-6 sm:pt-32 lg:justify-start lg:px-0">
            <Image
              src="/assets/solutions/ai/hero.png"
              alt="Tablero de prestaciones por estado, con el agente pidiendo las prestaciones de PAMI pendientes de facturación"
              width={1512}
              height={772}
              priority
              sizes="(min-width: 1024px) 70vw, 100vw"
              className="h-auto w-full max-w-none lg:w-[1000px] lg:shrink-0"
            />
          </div>
        }
      />

      <BenefitStories
        title="Lo que necesitás para convertir datos de salud en inteligencia."
        copy="Los agentes operan sobre datos de salud conectados. Entienden las relaciones entre pacientes, profesionales, tratamientos, operaciones y procesos financieros, no solo registros sueltos."
        items={agentBenefits}
      />

      <SplitFeature
        eyebrow="La capa que falta"
        title="Los datos de salud existen. La inteligencia, no."
        copy="Las organizaciones ya recolectan enormes volúmenes de información clínica, operativa y financiera. El problema es que esos datos viven en sistemas que nunca fueron diseñados para trabajar juntos."
        media={
          <Image
            src="/assets/solutions/ai/dashboard-centra-nube.png"
            alt="Panel de Médica Salud con ingresos, egresos y categorías como reembolsos, nómina y facturas"
            width={1254}
            height={1254}
            sizes={splitImageSizes}
            className={splitImageClassName}
          />
        }
      />

      <SplitFeature
        eyebrow="Inteligencia en acción"
        title="Hacé una pregunta compleja de salud"
        mediaSide="left"
        copy="Dales a tus equipos un solo lugar para explorar qué está pasando, por qué está pasando y dónde tienen que actuar, sin armar cada dataset a mano."
        bulletIcons={[HeartPulse, Workflow, CircleDollarSign]}
        bullets={[
          "¿Qué pacientes están en riesgo de interrumpir su tratamiento?",
          "¿Dónde se está trabando la operación asistencial?",
          "¿Por qué cambió el reintegro?",
        ]}
        media={
          <Image
            src="/assets/solutions/payments/assistant-window.png"
            alt="Asistente Zonda respondiendo que encontró 24 tratamientos que requieren seguimiento"
            width={1254}
            height={1254}
            sizes={splitImageSizes}
            className={splitImageClassName}
          />
        }
      />

      <SplitFeature
        id="como-funciona"
        eyebrow="Cómo funciona"
        title="Cualquier documento se vuelve un registro médico"
        copy="Zonda recibe lo que ya tenés —un PDF, una nota o un texto— y lo transforma en información ordenada, asociada al paciente y lista para consultar."
        bulletIcons={[FlaskConical, Stethoscope, FileSearch, Users]}
        bullets={[
          "Conoce LOINC, así los resultados de laboratorio se entienden en cualquier lado.",
          "Conoce ICD-10, así un diagnóstico escrito en texto queda ordenado.",
          "Cada dato muestra de qué documento salió, para revisarlo y corregirlo.",
          "La decisión clínica sigue en el equipo.",
        ]}
        media={
          <ImagePlaceholder
            width={1000}
            height={1000}
            label="un PDF o una nota clínica que se convierte en la ficha del paciente: resultados, signos y conceptos, cada uno con el documento de origen"
            className="rounded-[1.5rem]"
          />
        }
      />

      <SplitFeature
        title="Resúmenes mensuales y anuales"
        copy="Zonda resume cómo evolucionó el paciente mes a mes y a lo largo del año, para que familiares y clínicos vean qué cambió y cómo sigue el cuidado, sin recorrer cada registro."
        mediaSide="left"
        media={
          <ImagePlaceholder
            width={1000}
            height={1000}
            label="grilla de snapshots mensuales de un año y, al abrir un período, la evolución del paciente vinculada a los registros de origen; al lado, la síntesis anual"
            className="rounded-[1.5rem]"
          />
        }
      />

      <CtaBanner
        variant="night"
        title="Hacele a tus datos las preguntas que importan"
        buttonText="Hablá con nuestro equipo"
      />
    </main>
  );
}
