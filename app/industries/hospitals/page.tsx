import type { Metadata } from "next";
import Image from "next/image";

import { ImagePlaceholder } from "@/components/ui/image-placeholder/ImagePlaceholder";
import {
  BenefitStories,
  FaqList,
  SplitFeature,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { IndustryProducts } from "@/components/industries/IndustryProducts";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

const title = "Hospitales";
const description =
  "Conectá HIS, laboratorios, facturación y servicios clínicos en una capa común. Sin reemplazar lo que ya funciona.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/industries/hospitals" },
  openGraph: {
    title: `${title} | Zonda`,
    description,
    url: "/industries/hospitals",
  },
};

const benefits = [
  {
    title: "Interoperabilidad que sirve a la operación",
    copy: "HIS, LIS, RIS, ERP, facturación y sistemas externos conectados sin obligar a reemplazar cada herramienta.",
    href: "/use-cases/normalized-ai",
    cta: "Ver IA normalizada",
    // Archivo final sugerido: public/assets/industries/hospitals/benefit-1.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Sistemas hospitalarios y fuentes externas conectados a una capa común de datos."
        fill
      />
    ),
  },
  {
    title: "Registros que mantienen el contexto clínico",
    copy: "Notas, resultados, medicaciones y prestaciones disponibles en un perfil longitudinal, aunque provengan de distintos servicios.",
    href: "/use-cases/identity",
    cta: "Ver identidad",
    // Archivo final sugerido: public/assets/industries/hospitals/benefit-2.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Historia clínica hospitalaria que reúne notas, estudios, tratamientos y prestaciones."
        fill
      />
    ),
  },
  {
    title: "Una operación que se puede ver y explicar",
    copy: "Tiempos, ocupación, actividad, ingresos y excepciones conectados con los eventos que los originan.",
    href: "/use-cases/analytics",
    cta: "Ver analítica",
    // Archivo final sugerido: public/assets/industries/hospitals/benefit-3.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Tablero hospitalario que conecta actividad clínica, operación, ingresos y alertas."
        fill
      />
    ),
  },
];

const faqItems = [
  {
    question: "¿Tengo que cambiar mi HIS?",
    answer:
      "No. Zonda se integra con los sistemas actuales y crea una capa común para conectar datos, procesos y decisiones entre servicios.",
  },
  {
    question: "¿Qué estándares soporta?",
    answer:
      "FHIR R4, HL7v2, CSV, API REST; normalización LOINC e ICD-10.",
  },
  {
    question: "¿Qué sistemas puede conectar un hospital?",
    answer:
      "HIS, LIS, RIS, ERP, facturación, farmacias, catálogos de medicamentos, sistemas de financiadores y otras fuentes clínicas u operativas.",
  },
  {
    question: "¿Puede ayudar a detectar inconsistencias o riesgo?",
    answer:
      "Sí. Al vincular autorización, atención, documentación, facturación y pago, Zonda hace visibles inconsistencias y señales de riesgo para que los equipos puedan revisarlas con contexto.",
  },
  {
    question: "¿Cómo se gestionan los permisos?",
    answer:
      "Con permisos granulares por rol, servicio y sede, y auditoría de quién accedió o realizó cada acción.",
  },
];

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

const features = [
  {
    title: "Todos los sistemas siguen hablando, pero dejan de trabajar aislados",
    copy: "Un hospital no necesita una herramienta más: necesita que las que ya usa compartan contexto. Zonda conecta los datos de origen y los organiza alrededor de pacientes, profesionales, prestaciones y organizaciones.",
    details: [
      {
        title: "Conexiones que respetan tu arquitectura",
        copy: "HIS, LIS, RIS, ERP, facturación, farmacia, catálogos de medicamentos y financiadores en una misma capa operativa.",
      },
      {
        title: "Un idioma común para cada fuente",
        copy: "FHIR R4, HL7v2, CSV y APIs normalizados para que un dato pueda usarse fuera del sistema que lo originó.",
      },
      {
        title: "Sin reemplazar el HIS",
        copy: "Zonda complementa los procesos actuales y habilita nuevos flujos donde hoy hay información fragmentada.",
      },
    ],
    // Archivo final sugerido: public/assets/sectors/hospital/feature-1.png
    label:
      "Sistemas hospitalarios, laboratorios, farmacia, facturación y financiadores conectados a un modelo común.",
  },
  {
    title: "El registro clínico deja de ser texto perdido",
    copy: "La información que se genera durante la atención puede quedar disponible para el siguiente profesional, el siguiente servicio y las decisiones que ocurren después del alta.",
    details: [
      {
        title: "Notas que se vuelven información usable",
        copy: "Evoluciones y observaciones en lenguaje natural transformadas en contexto clínico estructurado.",
      },
      {
        title: "Un perfil para cada paciente",
        copy: "Resultados, medicaciones, alergias, condiciones y alertas en una lectura longitudinal.",
      },
      {
        title: "Continuidad entre servicios y sedes",
        copy: "El equipo que recibe al paciente accede al contexto relevante sin reconstruir su historia desde cero.",
      },
    ],
    // Archivo final sugerido: public/assets/sectors/hospital/feature-2.png
    label:
      "Perfil clínico hospitalario que reúne evoluciones, estudios, medicaciones y alertas del paciente.",
  },
  {
    title: "La operación hospitalaria se vuelve visible antes de que haya que preguntar",
    copy: "Los datos clínicos, operativos y financieros pueden leerse juntos para entender qué está pasando en guardia, internación, consultorios y servicios de apoyo.",
    details: [
      {
        title: "Señales para cada nivel de decisión",
        copy: "Tiempos de espera, ocupación, actividad, prestaciones e ingresos por sede, servicio o equipo.",
      },
      {
        title: "Alertas con contexto",
        copy: "Desvíos de operación, demanda o facturación que permiten ver dónde actuar y qué los explica.",
      },
      {
        title: "Trazabilidad hasta el evento",
        copy: "Desde un indicador hasta las transacciones y fuentes que lo componen, sin depender de una planilla paralela.",
      },
    ],
    // Archivo final sugerido: public/assets/sectors/hospital/feature-3.png
    label:
      "Tablero hospitalario de actividad, ocupación, tiempos de atención e ingresos con alertas explicables.",
  },
  {
    title: "Cada prestación puede verificarse antes de convertirse en una diferencia",
    copy: "Cuando autorización, atención, documentación, facturación y pago conservan su vínculo, los equipos pueden prevenir errores, débitos y situaciones de riesgo con evidencia en lugar de intuición.",
    details: [
      {
        title: "Controles dentro del flujo",
        copy: "Cobertura, autorización, documentación y reglas del financiador visibles antes de presentar una prestación.",
      },
      {
        title: "Riesgo investigable",
        copy: "Inconsistencias y comportamientos atípicos con el contexto necesario para una revisión informada.",
      },
      {
        title: "Del evento al ingreso",
        copy: "Cada importe conserva el recorrido que lo explica, desde la atención hasta el cobro y la liquidación.",
      },
    ],
    // Archivo final sugerido: public/assets/sectors/hospital/feature-4.png
    label:
      "Recorrido de una prestación hospitalaria desde la autorización y atención hasta la facturación, cobro y auditoría.",
  },
  {
    title: "Identidades, equipos y permisos que reflejan el hospital real",
    copy: "La forma en que está organizado un hospital determina cómo debe circular la información. Zonda modela esa estructura para que cada equipo pueda actuar sobre lo que le corresponde.",
    details: [
      {
        title: "Una identidad para cada persona",
        copy: "Pacientes sin duplicados y profesionales con matrícula, especialidades y credenciales conectadas.",
      },
      {
        title: "Estructura multi-sede y multi-servicio",
        copy: "Holding, entidades jurídicas, hospitales, servicios y equipos representados en su jerarquía real.",
      },
      {
        title: "Accesos trazables",
        copy: "Permisos por rol, servicio y sede con auditoría de quién vio o modificó información.",
      },
    ],
    // Archivo final sugerido: public/assets/sectors/hospital/feature-5.png
    label:
      "Estructura hospitalaria con servicios, profesionales, roles y permisos conectados a información clínica y operativa.",
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
          <dt className="text-sm font-semibold text-foreground">{item.title}</dt>
          <dd className="mt-1 text-sm leading-6 text-muted-foreground">
            {item.copy}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default function HospitalsPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        eyebrow="Hospitales"
        title="Un hospital conectado puede atender, operar y decidir mejor"
        copy={<span className="lg:block lg:max-w-[19rem]">{description}</span>}
        primary={{ label: "Hablemos", href: "/contact" }}
        secondary={{ label: "Ver interoperabilidad", href: "/developers" }}
        secondaryVariant="inverse"
        mediaClassName="overflow-visible"
        media={
          <div className="relative h-[300px] w-full sm:h-[400px] lg:h-full">
            <Image
              src="/assets/sectors/hospital/hero.png"
              alt="Ilustración del edificio de un hospital"
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
        title="Una capa común para lo que pasa dentro y fuera del hospital."
        copy="La información puede seguir al paciente entre servicios, conectar a los equipos con los sistemas que necesitan y sostener decisiones clínicas, operativas y financieras sobre el mismo contexto."
        items={benefits}
      />

      {features.map((item, index) => (
        <SplitFeature
          key={item.title}
          title={item.title}
          copy={item.copy}
          mediaSide={index % 2 === 1 ? "left" : "right"}
          media={<Shot label={item.label} />}
        >
          <FeatureDetails items={item.details} />
        </SplitFeature>
      ))}

      <FaqList items={faqItems} />

      <IndustryProducts
        title="Decisiones clínicas, operativas y financieras sobre la misma base."
        subtitle="Identidad, analítica, agentes y control de riesgo para lo que ya registra el hospital."
        keys={["identity", "analytics", "normalized-ai", "fraud-risk-prevention"]}
      />

      <CtaBanner
        title="Hacé que cada sistema sume a la misma operación"
        buttonText="Hablá con nuestro equipo"
      />
    </main>
  );
}
