import type { Metadata } from "next";
import Image from "next/image";

import {
  BenefitStories,
  FeatureShot,
  SectionIntro,
  SplitFeature,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { IndustryProducts } from "@/components/industries/IndustryProducts";
import { IndustryResults } from "@/components/industries/IndustryResults";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

const title = "Internación domiciliaria (Home Health)";
const description =
  "Organizá visitas, coordiná profesionales y controlá cada paso de la atención domiciliaria desde un solo lugar. Sin planillas, sin llamados, sin sorpresas.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/industries/home-health" },
  openGraph: {
    title: `${title} | Zonda`,
    description,
    url: "/industries/home-health",
  },
};

const benefitImageSizes =
  "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

const benefits = [
  {
    title: "El día, en una sola pantalla",
    copy: "Visitas, rutas y profesionales se asignan juntos. Sin planillas, sin llamados y sin duplicar el trabajo.",
    src: "/assets/industries/home-health/benefit-1.png",
    alt: "Ilustración de una notebook, el día de visitas en una sola pantalla",
  },
  {
    title: "De la visita al cobro",
    copy: "Lo que se registra en el domicilio sigue en el mismo flujo: validación, facturación y cobro. Sin volver a cargar nada.",
    src: "/assets/industries/home-health/benefit-2.png",
    alt: "Ilustración de una mano con billetes, de la visita al cobro",
  },
  {
    title: "Cada visita, lista para auditar",
    copy: "Ubicación, horario y prestaciones quedan registrados al instante, antes de presentarlos a la obra social.",
    src: "/assets/industries/home-health/benefit-3.png",
    alt: "Ilustración de una lupa sobre un ojo, cada visita lista para auditar",
  },
];

const steps = [
  {
    place: "Oficina central",
    name: "Asignación",
    copy: "Desde una sola pantalla se asignan las visitas del día a cada profesional, con la mejor ruta y sin duplicaciones.",
  },
  {
    place: "App del profesional",
    name: "Aviso",
    copy: "El profesional recibe en su celular los datos del paciente, la dirección y las indicaciones antes de salir.",
  },
  {
    place: "Domicilio del paciente",
    name: "Visita",
    copy: "Se confirma la llegada automáticamente, se registra todo lo realizado y el paciente firma desde el celular.",
  },
  {
    place: "Tiempo real",
    name: "Control",
    copy: "Cada visita queda registrada al instante con ubicación, horario y detalle. Lista para presentar a la obra social.",
  },
];

const results = [
  { value: "+30%", label: "Menos costos operativos" },
  { value: "+40%", label: "Menos tiempo de espera para el paciente" },
  { value: "+35%", label: "Menos errores en la atención" },
  { value: "+30%", label: "Más control sobre irregularidades" },
] as const;

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

export default function HomeHealthPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        eyebrow="Internación domiciliaria (Home Health)"
        title="Todo tu equipo conectado, desde la oficina hasta el domicilio"
        copy={description}
        primary={{ label: "Hablemos", href: "/contact" }}
        mediaClassName="overflow-visible"
        media={
          <div className="relative h-[340px] w-full sm:h-[460px] lg:h-full">
            <Image
              src="/assets/industries/home-health/hero.png"
              alt="Ilustración de una ambulancia y una camioneta de internación domiciliaria"
              width={1619}
              height={972}
              priority
              sizes="(min-width: 1024px) 980px, 100vw"
              className="absolute top-1/2 left-1/2 h-auto w-full max-w-none -translate-x-1/2 -translate-y-1/2 object-contain sm:w-[min(640px,100%)] lg:left-auto lg:w-[calc(50vw+2.5rem)] lg:translate-x-0 lg:right-[calc(min(80rem,100vw)/2-50vw+0.5rem)]"
            />
          </div>
        }
      />

      <BenefitStories
        title="Coordiná. Cobrá. Controlá."
        copy="De la oficina al domicilio, cada paso de la internación queda en un solo lugar."
        items={benefits.map((item) => ({
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

      <section
        id="como-funciona"
        className="scroll-mt-24 px-6 py-20 sm:px-10 sm:py-28 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            title="Cómo funciona"
            copy={
              <>
                De la oficina al domicilio en cuatro pasos.
                <br />
                Una sola plataforma para todo el recorrido. Sin papeles, sin
                llamados.
              </>
            }
            className="max-w-3xl"
          />
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.name} className="border-t border-border pt-6">
                <span className="font-display text-sm font-semibold tracking-[0.08em] text-secondary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {step.place}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.03em] text-foreground">
                  {step.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {step.copy}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <SplitFeature
        title="Organizá todas las visitas del día desde una sola pantalla."
        copy="Asigná profesionales según zona, disponibilidad y especialidad. Si alguien se enferma o surge una urgencia, reasigná en un click. Todo queda registrado."
        media={
          <FeatureShot
            src="/assets/industries/home-health/feature-1.png"
            alt="Panel de coordinación para asignar visitas, rutas y profesionales durante el día."
          />
        }
      >
        <FeatureDetails
          items={[
            {
              title: "El día, a la vista",
              copy: "Vista de mapa o lista para organizar las visitas, rutas y equipos.",
            },
            {
              title: "Reasignación ante urgencias",
              copy: "Si cambia el día, las visitas pueden pasar rápido al profesional indicado.",
            },
            {
              title: "Capacidad en tiempo real",
              copy: "Sabé cuánto trabajo tiene cada profesional antes de asignar la próxima visita.",
            },
          ]}
        />
      </SplitFeature>

      <SplitFeature
        title="El profesional registra la visita desde el domicilio."
        copy="Recibe la visita asignada, sigue la mejor ruta, registra lo que hizo hablándole al teléfono y obtiene la firma del paciente. Todo desde la app, incluso sin internet."
        mediaSide="left"
        media={
          <FeatureShot
            src="/assets/industries/home-health/feature-2.png"
            alt="Aplicación móvil del profesional con la visita, datos del paciente, ubicación, prestaciones y firma."
          />
        }
      >
        <FeatureDetails
          items={[
            {
              title: "Sin conexión, sin interrupciones",
              copy: "La app funciona sin internet y sincroniza la información cuando vuelve la señal.",
            },
            {
              title: "Registro en lenguaje natural",
              copy: "El profesional dicta la evolución por voz y Zonda la organiza.",
            },
            {
              title: "Presencia confirmada",
              copy: "La ubicación permite confirmar la llegada y el momento de la atención.",
            },
          ]}
        />
      </SplitFeature>

      <SplitFeature
        title="Auditoría lista antes de que cierre el día."
        copy="Sabé exactamente qué se hizo, dónde y cuándo. Si algo no coincide, te enterás enseguida, antes de que se convierta en un problema con la obra social."
        media={
          <FeatureShot
            src="/assets/industries/home-health/feature-3.png"
            alt="Línea de tiempo auditable de una visita con ubicación, horario, prestaciones, firma y estado de presentación."
          />
        }
      >
        <FeatureDetails
          items={[
            {
              title: "Registro verificable",
              copy: "Ubicación, horario y detalle de la visita quedan registrados automáticamente.",
            },
            {
              title: "Prestaciones confirmadas",
              copy: "Lo realizado en el domicilio queda asociado a la visita y a la documentación correspondiente.",
            },
            {
              title: "Información lista para presentar",
              copy: "El reporte queda disponible para facturar y auditar antes del cierre del día.",
            },
          ]}
        />
      </SplitFeature>

      <IndustryResults
        title="Resultados reales"
        subtitle="Lo que logran las empresas que usan Zonda."
        results={results}
      />

      <IndustryProducts
        title="De la visita al cobro, sin volver a cargar nada."
        subtitle="Operación, ingresos, auditoría y financiadores conectados a cada atención domiciliaria."
        keys={[
          "operations",
          "revenue-cycle",
          "fraud-risk-prevention",
          "multi-payer-care",
        ]}
      />

      <CtaBanner
        title="Tu operación, optimizada."
        subtitle="Desde el primer día."
        buttonText="Contáctanos"
      />
    </main>
  );
}
