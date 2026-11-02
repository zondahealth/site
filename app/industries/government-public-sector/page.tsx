import type { Metadata } from "next";
import Image from "next/image";
import {
  FileBarChart,
  FileCheck,
  MessagesSquare,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

import { ImagePlaceholder } from "@/components/ui/image-placeholder/ImagePlaceholder";
import { Card, CardContent, CardCTA, CardTitle } from "@/components/ui/card/card";
import {
  BenefitStories,
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

const strongClassName = "font-semibold text-foreground";

function Shot({ label }: { label: string }) {
  return (
    <ImagePlaceholder
      width={1200}
      height={900}
      label={label}
      className="rounded-[1.5rem]"
    />
  );
}

const benefitImageSizes =
  "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

const proposal = [
  {
    title: "Conectamos lo que ya existe",
    copy: "Unimos historias clínicas dispersas entre hospitales, CAPS, laboratorios y financiadores, sin reemplazar los sistemas.",
    src: "/assets/sectors/gov/benefit-1.png",
    alt: "Eslabones de una cadena unidos, ilustración de sistemas ya existentes conectados a Zonda",
  },
  {
    title: "Digitalizamos lo que falta",
    copy: "Incorporamos CAPS, profesionales y procesos que todavía se consolidan a mano.",
    src: "/assets/sectors/gov/benefit-2.png",
    alt: "Documentos en papel que pasan a una historia clínica digital en una computadora",
  },
  {
    title: "Convertimos datos en capacidad de mando",
    copy: "Analítica, automatización y agentes para que auditorías, derivaciones y autorizaciones no consuman a los equipos.",
    src: "/assets/sectors/gov/benefit-3.png",
    alt: "Una mano organiza documentos en un archivo, ilustración de capacidad de mando sobre los datos de la red",
  },
];

const agents: {
  title: string;
  copy: string;
  href: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Auditoría",
    copy: "Revisa prestaciones y deriva las excepciones.",
    href: "/use-cases/fraud-risk-prevention",
    icon: ShieldCheck,
  },
  {
    title: "Autorizaciones",
    copy: "Analiza antecedentes, cobertura y reglas.",
    href: "/use-cases/multi-payer-care",
    icon: FileCheck,
  },
  {
    title: "Gestión",
    copy: "Responde preguntas sobre la jurisdicción.",
    href: "/use-cases/normalized-ai",
    icon: MessagesSquare,
  },
  {
    title: "Salud poblacional",
    copy: "Prioriza pacientes que requieren intervención.",
    href: "/use-cases/population-segmentation",
    icon: Users,
  },
  {
    title: "Reportes",
    copy: "Genera informes y señala desvíos.",
    href: "/use-cases/analytics",
    icon: FileBarChart,
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
              src="/assets/sectors/gov/rosada.png"
              alt="Ilustración de la Casa Rosada con la bandera argentina"
              width={1619}
              height={972}
              priority
              sizes="(min-width: 1024px) 90vw, 100vw"
              className="absolute bottom-0 left-1/2 h-auto w-[min(980px,145%)] max-w-none -translate-x-1/2 translate-y-[12%] sm:w-[min(1120px,130%)] md:h-[112%] md:w-auto lg:left-[-6rem] lg:h-auto lg:w-[min(1240px,82vw)] lg:translate-x-0"
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
        bullets={[
          "Interoperabilidad HL7 FHIR",
          "Identidad única del paciente",
          "Normalización clínica y APIs",
          "Una historia longitudinal, disponible para los actores de la red",
        ]}
        media={
          // Archivo final sugerido: public/assets/industries/government-public-sector/red.png
          <Shot label="Hospitales, CAPS, laboratorios, farmacias y obras sociales conectados a un nodo central Zonda, con una historia clínica unificada." />
        }
      />

      <SplitFeature
        id="digitalizacion"
        title="Donde todavía no hay tecnología, Zonda la provee."
        copy="Digitalizamos donde hace falta e integramos desde el primer día."
        mediaSide="left"
        bullets={[
          <>
            <strong className={strongClassName}>CAPS y efectores.</strong>{" "}
            Historia clínica, admisión, turnos, prestaciones, farmacia,
            enfermería y app profesional.
          </>,
          <>
            <strong className={strongClassName}>Derivaciones trazables.</strong>{" "}
            Solicitud, documentación, priorización, seguimiento y
            contrarreferencia al equipo de origen.
          </>,
        ]}
        media={
          // Archivo final sugerido: public/assets/industries/government-public-sector/digitalizacion.png
          <Shot label="Historia clínica de un CAPS junto a una derivación con prioridad, asignación y contrarreferencia." />
        }
      />

      <SplitFeature
        id="centro-de-comando"
        title="Saber qué está pasando. Antes de tener que preguntar."
        bullets={[
          <>
            <strong className={strongClassName}>Operación.</strong> Demanda,
            ocupación, turnos, producción y derivaciones.
          </>,
          <>
            <strong className={strongClassName}>Recursos.</strong> Gasto,
            medicamentos, prestaciones y recupero.
          </>,
          <>
            <strong className={strongClassName}>Población.</strong> Crónicos,
            riesgo, territorio y utilización de servicios.
          </>,
          <>
            <strong className={strongClassName}>Alertas.</strong> Desvíos,
            saturación, anomalías y tendencias.
          </>,
        ]}
        media={
          // Archivo final sugerido: public/assets/industries/government-public-sector/comando.png
          <Shot label="Centro de comando de una red sanitaria: demanda, ocupación, gasto en medicamentos, población y una alerta de saturación." />
        }
      >
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
        bullets={[
          <>
            <strong className={strongClassName}>Sector público prestador.</strong>{" "}
            Detectar cobertura recuperable, documentar, facturar y seguir el
            cobro.
          </>,
          <>
            <strong className={strongClassName}>
              Financiadores y obras sociales.
            </strong>{" "}
            Validar con reglas, detectar duplicados y priorizar la auditoría
            humana.
          </>,
        ]}
        media={
          // Archivo final sugerido: public/assets/industries/government-public-sector/auditoria.png
          <Shot label="Circuito de recupero: una prestación detectada, su documentación, la factura y el seguimiento del cobro." />
        }
      >
        <p className="mt-8 font-display text-5xl font-semibold tracking-[-0.04em] text-primary">
          −60%
        </p>
        <p className="mt-2 max-w-xs text-sm font-semibold">
          en costos de auditoría prestacional
        </p>
        <p className="mt-1 max-w-sm text-sm leading-6 text-muted-foreground">
          Resultado reportado en una implementación con una red de salud
          pública de Argentina.
        </p>
      </SplitFeature>

      <SplitFeature
        id="salud-poblacional"
        title="Pasar de atender episodios a gestionar poblaciones."
        copy="Ejemplo con diabetes: de los pacientes identificados al seguimiento de resultados."
        bullets={[
          "Pacientes identificados y controles pendientes",
          "Laboratorios fuera de rango",
          "Riesgo y prioridad de atención",
          "Contacto del equipo y medición de resultados",
        ]}
        media={
          // Archivo final sugerido: public/assets/industries/government-public-sector/poblacion.png
          <Shot label="Cohorte de diabetes con controles pendientes, un laboratorio fuera de rango y la prioridad de atención." />
        }
      >
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
        bullets={[
          <>
            <strong className={strongClassName}>Afiliados.</strong> Padrón,
            elegibilidad y cobertura.
          </>,
          <>
            <strong className={strongClassName}>Prestadores.</strong> Registro,
            cartilla y convenios.
          </>,
          <>
            <strong className={strongClassName}>Autorizaciones.</strong>{" "}
            Prácticas, internaciones, medicamentos y alto costo.
          </>,
          <>
            <strong className={strongClassName}>Auditoría y gasto.</strong>{" "}
            Reglas, débitos, costo por afiliado y cohortes de alto costo.
          </>,
        ]}
        media={
          // Archivo final sugerido: public/assets/industries/government-public-sector/obra-social.png
          <Shot label="Vista de una obra social provincial: padrón de afiliados, cartilla de prestadores, una autorización y el costo por patología." />
        }
      />

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            title="Una vez conectados los datos, la inteligencia puede trabajar."
            copy="Agentes con contexto de la red y revisión humana en las decisiones sensibles."
            className="max-w-3xl"
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {agents.map((agent, index) => {
              const Icon = agent.icon;
              return (
                <li
                  key={agent.title}
                  className={`flex lg:col-span-2 ${index === 3 ? "lg:col-start-2" : ""}`}
                >
                  <Card
                    variant="muted"
                    hoverable
                    href={agent.href}
                    aria-label={agent.title}
                    className="w-full"
                  >
                    <Icon
                      aria-hidden="true"
                      className="size-5 text-primary"
                      strokeWidth={1.75}
                    />
                    <CardTitle className="mt-5">{agent.title}</CardTitle>
                    <CardContent>{agent.copy}</CardContent>
                    <CardCTA
                      aria-hidden="true"
                      tabIndex={-1}
                      className="pointer-events-none"
                    />
                  </Card>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <CtaBanner
        title="Empezá por un problema concreto."
        subtitle="Identificamos en 30 minutos dónde hay mayor oportunidad de integrar, automatizar o recuperar recursos."
        buttonText="Conectar mi red"
      />
    </main>
  );
}
