import type { Metadata } from "next";
import Image from "next/image";

import { IndustryProducts } from "@/components/industries/IndustryProducts";
import {
  BenefitStories,
  FeatureShot,
  SectionIntro,
  SplitFeature,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

const title = "Gobiernos y sector público";
const description =
  "Infraestructura digital para que provincias, municipios y obras sociales provinciales operen un sistema de salud conectado.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/industries/government-public-sector" },
  openGraph: {
    title: `${title} | Zonda`,
    description,
    url: "/industries/government-public-sector",
  },
};

function FeatureDetails({ items }: { items: string[][] }) {
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

const benefitImageSizes =
  "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

const proposal = [
  {
    title: "Conectamos lo que ya existe",
    copy: "Unimos historias clínicas dispersas entre hospitales, CAPS, laboratorios y financiadores, sin reemplazar los sistemas.",
    src: "/assets/industries/government-public-sector/benefit-1.png",
    alt: "Eslabones de una cadena unidos, ilustración de sistemas ya existentes conectados a Zonda",
  },
  {
    title: "Digitalizamos lo que falta",
    copy: "Incorporamos CAPS, profesionales y procesos que todavía se consolidan a mano.",
    src: "/assets/industries/government-public-sector/benefit-2.png",
    alt: "Documentos en papel que pasan a una historia clínica digital en una computadora",
  },
  {
    title: "Convertimos datos en capacidad de mando",
    copy: "Analítica, automatización y agentes para que auditorías, derivaciones y autorizaciones no consuman a los equipos.",
    src: "/assets/industries/government-public-sector/benefit-3.png",
    alt: "Una mano organiza documentos en un archivo, ilustración de capacidad de mando sobre los datos de la red",
  },
];

export default function GovernmentPublicSectorPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        title="La infraestructura digital para operar un sistema de salud conectado"
        copy="Soluciones para gobiernos provinciales, municipios y obras sociales provinciales."
        primary={{ label: "Hablemos", href: "/contact" }}
        mediaClassName="overflow-visible"
        media={
          <div className="relative h-[460px] w-full sm:h-[560px] md:h-[720px] lg:h-full">
            <Image
              src="/assets/industries/government-public-sector/rosada.png"
              alt="Ilustración de la Casa Rosada con la bandera argentina"
              width={1619}
              height={972}
              priority
              sizes="(min-width: 1024px) 90vw, 100vw"
              className="absolute bottom-0 left-1/2 h-auto w-[min(784px,116%)] max-w-none -translate-x-1/2 translate-y-[12%] sm:w-[min(896px,104%)] md:h-[90%] md:w-auto lg:left-[-6rem] lg:h-auto lg:w-[min(992px,65.6vw)] lg:translate-x-0"
            />
          </div>
        }
      />

      <BenefitStories
        title="Conectar. Digitalizar. Gobernar."
        copy="La salud pública funciona como una red. Sus sistemas, todavía no."
        items={proposal.map((item) => ({
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

      <section className="px-6 pt-16 sm:px-10 sm:pt-20 lg:px-16 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            title="Poné a Zonda a trabajar para el beneficio de la Gente"
            copy="Provincias conectan la red y recuperan recursos. Los municipios digitalizan hospitales y CAPS. Las obras sociales provinciales controlan prestaciones, autorizaciones y gasto."
            className="max-w-4xl"
            titleClassName="text-5xl sm:text-6xl"
          />
        </div>
      </section>

      <SplitFeature
        id="red-interoperable"
        title="Conectamos la información sanitaria sin reemplazar lo que ya funciona."
        copy="Hospitales, CAPS, laboratorios, farmacias y obras sociales se suman a la misma red. Cada integración agrega información."
        media={
          <FeatureShot
            src="/assets/industries/government-public-sector/feature-1.png"
            alt="Hospitales, CAPS, laboratorios, farmacias y obras sociales conectados a un nodo central Zonda, con una historia clínica unificada."
          />
        }
      >
        <FeatureDetails
          items={[
            [
              "Interoperabilidad",
              "HL7, FHIR, APIs y otras fuentes conectadas a una misma red.",
            ],
            [
              "Una identidad para cada paciente",
              "La información de una persona se relaciona aunque provenga de distintos efectores.",
            ],
            [
              "Historia longitudinal",
              "El contexto clínico queda disponible para los actores autorizados de la red.",
            ],
          ]}
        />
      </SplitFeature>

      <SplitFeature
        id="digitalizacion"
        title="Donde todavía no hay tecnología, Zonda la provee."
        copy="Digitalizamos donde hace falta e integramos desde el primer día."
        mediaSide="left"
        media={
          <FeatureShot
            src="/assets/industries/government-public-sector/feature-2.png"
            alt="Historia clínica de un CAPS junto a una derivación con prioridad, asignación y contrarreferencia."
          />
        }
      >
        <FeatureDetails
          items={[
            [
              "CAPS y efectores",
              "Historia clínica, admisión, turnos, prestaciones, farmacia, enfermería y app profesional.",
            ],
            [
              "Derivaciones trazables",
              "Solicitud, documentación, priorización, seguimiento y contrarreferencia al equipo de origen.",
            ],
          ]}
        />
      </SplitFeature>

      <SplitFeature
        id="centro-de-comando"
        title="Saber qué está pasando. Antes de tener que preguntar."
        media={
          <FeatureShot
            src="/assets/industries/government-public-sector/feature-3.png"
            alt="Centro de comando de una red sanitaria: demanda, ocupación, gasto en medicamentos, población y una alerta de saturación."
          />
        }
      >
        <FeatureDetails
          items={[
            [
              "Operación",
              "Demanda, ocupación, turnos, producción y derivaciones.",
            ],
            ["Recursos", "Gasto, medicamentos, prestaciones y recupero."],
            [
              "Población y alertas",
              "Crónicos, riesgo, territorio, saturación y anomalías.",
            ],
          ]}
        />
        <blockquote className="mt-8 max-w-lg border-l-2 border-secondary pl-4">
          <p className="font-display text-lg font-medium leading-snug tracking-[-0.02em]">
            “¿Qué hospitales aumentaron más su gasto en medicamentos este
            trimestre y qué explica el desvío?”
          </p>
          <footer className="mt-3 text-sm text-muted-foreground">
            Zonda AI responde sobre la información de la red.
          </footer>
        </blockquote>
      </SplitFeature>

      <SplitFeature
        id="auditoria"
        title="Controlar prestaciones. Recuperar recursos."
        copy="Un primer circuito permite medir el retorno antes de escalar."
        mediaSide="left"
        media={
          <FeatureShot
            src="/assets/industries/government-public-sector/feature-4.png"
            alt="Circuito de recupero: una prestación detectada, su documentación, la factura y el seguimiento del cobro."
          />
        }
      >
        <FeatureDetails
          items={[
            [
              "Sector público prestador",
              "Detectar cobertura recuperable, documentar, facturar y seguir el cobro.",
            ],
            [
              "Financiadores y obras sociales",
              "Validar con reglas, detectar duplicados y priorizar la auditoría humana.",
            ],
          ]}
        />
        <p className="mt-8 font-display text-5xl font-semibold tracking-[-0.04em] text-primary">
          −60%
        </p>
        <p className="mt-2 max-w-xs text-sm font-semibold">
          en costos de auditoría prestacional
        </p>
        <p className="mt-1 max-w-sm text-sm leading-6 text-muted-foreground">
          Resultado reportado en una implementación con una red de salud pública
          de Argentina.
        </p>
      </SplitFeature>

      <SplitFeature
        id="salud-poblacional"
        title="Pasar de atender episodios a gestionar poblaciones."
        copy="Ejemplo con diabetes: de los pacientes identificados al seguimiento de resultados."
        media={
          <FeatureShot
            src="/assets/industries/government-public-sector/feature-5.png"
            alt="Cohorte de diabetes con controles pendientes, un laboratorio fuera de rango y la prioridad de atención."
          />
        }
      >
        <FeatureDetails
          items={[
            [
              "Pacientes y controles",
              "Pacientes identificados y controles pendientes.",
            ],
            [
              "Riesgo y prioridad",
              "Laboratorios fuera de rango y prioridad de atención.",
            ],
            ["Seguimiento", "Contacto del equipo y medición de resultados."],
          ]}
        />
        <p className="mt-6 max-w-lg text-sm leading-6 text-muted-foreground">
          El mismo circuito aplica a hipertensión, enfermedad cardiovascular,
          EPOC, materno-infantil y adultos mayores.
        </p>
      </SplitFeature>

      <SplitFeature
        id="obra-social"
        title="Afiliados, prestadores y prestaciones sobre la misma red."
        copy="Una red transaccional trazable para toda la relación prestacional."
        mediaSide="left"
        media={
          <FeatureShot
            src="/assets/industries/government-public-sector/feature-6.png"
            alt="Vista de una obra social provincial: padrón de afiliados, cartilla de prestadores, una autorización y el costo por patología."
          />
        }
      >
        <FeatureDetails
          items={[
            ["Afiliados", "Padrón, elegibilidad y cobertura."],
            ["Prestadores", "Registro, cartilla y convenios."],
            [
              "Autorizaciones",
              "Prácticas, internaciones, medicamentos y alto costo.",
            ],
            [
              "Auditoría y gasto",
              "Reglas, débitos, costo por afiliado y cohortes de alto costo.",
            ],
          ]}
        />
      </SplitFeature>

      <IndustryProducts
        title="Una vez conectados los datos, la inteligencia puede trabajar."
        subtitle="Agentes con contexto de la red y revisión humana en las decisiones sensibles."
        keys={[
          "fraud-risk-prevention",
          "multi-payer-care",
          "normalized-ai",
          "population-segmentation",
        ]}
      />

      <CtaBanner
        title="Empezá por un problema concreto."
        subtitle="Identificamos en 30 minutos dónde hay mayor oportunidad de integrar, automatizar o recuperar recursos."
        buttonText="Conectar mi red"
      />
    </main>
  );
}
