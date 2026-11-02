import type { Metadata } from "next";
import Image from "next/image";
import { CircleDollarSign, Fingerprint } from "lucide-react";

import { Pending } from "@/components/ui/pending/Pending";
import {
  BenefitStories,
  CapabilityGrid,
  FaqList,
  SplitFeature,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

const title = "Atención multi-financiador en salud";
const description =
  "Conectá tu organización con todos tus financiadores desde un solo lugar. Las reglas y las prestaciones de cada uno quedan en Zonda, también para los profesionales de tu red.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/use-cases/multi-payer-care" },
  openGraph: {
    title: `${title} | Zonda`,
    description,
    url: "/use-cases/multi-payer-care",
  },
};

const revenueCycleHref = "/use-cases/revenue-cycle";

const benefitImageSizes =
  "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

const benefits = [
  {
    title: "Dejá de operar un proceso por financiador",
    copy: "Cada obra social y prepaga tiene portales, autorizaciones y requisitos propios. Tu organización se conecta una vez y Zonda absorbe esa diferencia.",
    media: (
      <Image
        src="/assets/solutions/multipayer/connected.png"
        alt="Financiadores como PAMI, OSDE, Sura, Medicus y Medifé conectados entre sí en una sola red"
        fill
        className="object-cover"
        sizes={benefitImageSizes}
      />
    ),
  },
  {
    title: "Las reglas aplican en toda la red",
    copy: "Sedes, especialidades y profesionales trabajan de la misma manera. Zonda sabe qué cobertura, autorización y documentación pide cada financiador.",
    media: (
      <Image
        src="/assets/solutions/multipayer/pami-rule-applied.png"
        alt="PAMI conectado como financiador en 24 sedes, con una regla de autorización aplicada a 186 profesionales en toda la red"
        fill
        className="object-cover"
        sizes={benefitImageSizes}
      />
    ),
  },
  {
    title: "Las prestaciones llegan listas para cobrar",
    copy: "Lo que falta se ve antes de cerrar la atención. La organización no se entera del error cuando ya hay un débito.",
    media: (
      <Image
        src="/assets/solutions/multipayer/anomaly.png"
        alt="Anomalía detectada en una prestación de -$22,237.18, categorizada como ubicación sospechosa"
        fill
        className="object-cover"
        sizes={benefitImageSizes}
      />
    ),
  },
];

const capabilities = [
  {
    title: "Identidad",
    copy: "Paciente, profesional y cobertura correctos.",
    href: "/use-cases/identity",
    icon: Fingerprint,
  },
  {
    title: "Ciclo de ingresos",
    copy: "La prestación sigue hacia facturación, cobro y liquidación.",
    href: revenueCycleHref,
    icon: CircleDollarSign,
  },
];

const faqItems = [
  {
    question: "¿Qué es la atención multi-financiador?",
    answer:
      "Es la forma en que una organización opera prestaciones con muchas obras sociales y prepagas desde una sola conexión. Cada financiador mantiene sus reglas y sistemas. Zonda las aplica para toda la red.",
  },
  {
    question:
      "¿La organización tiene que integrar cada financiador por separado?",
    answer:
      "No. Se conecta una vez. Sedes y profesionales trabajan sobre esa conexión, sin un circuito administrativo distinto para cada financiador.",
  },
  {
    question: "¿Y el profesional?",
    answer:
      "Registra la atención una sola vez. Zonda identifica la cobertura y pide solo lo que ese financiador exige.",
  },
  {
    question: "¿Zonda reemplaza los sistemas de cada financiador?",
    answer:
      "No. Cada financiador puede mantener sus propios sistemas y procesos. Zonda crea la capa común que conecta esa diversidad.",
  },
  {
    question: "¿Qué pasa si falta un requisito?",
    answer:
      "La prestación queda en borrador hasta completar lo necesario. La organización y el profesional ven la excepción en el momento, no después de facturar.",
  },
  {
    question: "¿Sirve para un profesional que trabaja por su cuenta?",
    answer:
      "Sí. Un clínico también puede conectar los financiadores con los que trabaja y operar de la misma manera, sin depender de la red de una clínica.",
  },
  {
    question: "¿Qué financiadores están soportados hoy?",
    answer: (
      <Pending>
        LISTA A CONFIRMAR — el sitio actual menciona OSDE, Swiss Medical, PAMI y
        Galeno en el Portal Profesional
      </Pending>
    ),
  },
];

const splitImageClassName = "h-auto w-full rounded-[1.5rem] object-cover";
const splitImageSizes = "(min-width: 1024px) 50vw, 100vw";

export default function MultiPayerCarePage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        backgroundSrc="/assets/bg/hero-common-bg.png"
        eyebrow="Atención multi-financiador"
        title="Todos tus financiadores, una sola conexión"
        copy={description}
        primary={{ label: "Hablá con nuestro equipo", href: "/contact" }}
        mediaClassName="overflow-visible"
        media={
          <div className="flex h-full w-full items-center justify-center px-2 pt-16 pb-4 sm:pt-20 lg:px-0 lg:pt-24">
            <Image
              src="/assets/solutions/multipayer/hero.png"
              alt="Red de financiadores conectada a Zonda, con Omint, PAMI, OSDE, Sura, Medicus y Medifé"
              width={1448}
              height={1086}
              priority
              sizes="(min-width: 1024px) 62vw, 100vw"
              className="h-auto w-full max-w-none lg:w-[88%]"
            />
          </div>
        }
      />

      <BenefitStories
        title="Lo que tu organización necesita para operar con muchos financiadores."
        items={benefits}
      />

      <SplitFeature
        id="como-funciona"
        eyebrow="El problema"
        title="Cada financiador pide algo distinto. Tu organización no debería hablar con cada uno por separado."
        copy="Una clínica o una red convive con muchas obras sociales y prepagas. Eso hoy significa integraciones, autorizaciones y presentaciones distintas para cada una. La carga se multiplica en administración y también en cada profesional."
        media={
          <Image
            src="/assets/solutions/multipayer/connected-data.png"
            alt="Zonda en el centro de una red de datos clínicos: historia clínica, equipo, sedes, vacunas, laboratorio, medicación y estudios"
            width={1254}
            height={1254}
            sizes={splitImageSizes}
            className={splitImageClassName}
          />
        }
      />

      <SplitFeature
        eyebrow="Para la organización"
        title="Conectá los financiadores una sola vez"
        copy="La organización da de alta sus financiadores en Zonda. A partir de ahí, sedes y profesionales operan sobre esa conexión. Cada financiador conserva sus propios sistemas. Elegibilidad, autorizaciones, nomencladores, documentación, frecuencias y validaciones quedan del lado de Zonda."
        mediaSide="left"
        media={
          <Image
            src="/assets/solutions/multipayer/connected-integration-x.png"
            alt="Profesional rodeado de documentación, medicación, sedes, turnos, vacunas y mensajes, con algunas integraciones sin resolver"
            width={1254}
            height={1254}
            sizes={splitImageSizes}
            className={splitImageClassName}
          />
        }
      />

      <SplitFeature
        eyebrow="Para el profesional"
        title="Quien atiende registra una sola vez"
        copy="El clínico no entra a un portal distinto por financiador. Documenta la atención y Zonda muestra solo lo que falta para esa cobertura. La conexión ya la hizo la organización. Si trabaja por su cuenta, puede conectar sus financiadores del mismo modo."
        media={
          <Image
            src="/assets/solutions/multipayer/doctor-register-vitals.png"
            alt="La Dra. Ferrari registra signos vitales desde el celular, con PAMI conectado y la factura lista"
            width={1254}
            height={1254}
            sizes={splitImageSizes}
            className={splitImageClassName}
          />
        }
      />

      <section className="px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="relative flex min-h-[640px] flex-col overflow-hidden rounded-[1.75rem] bg-[#071a3a] px-6 pt-14 text-center sm:px-12 sm:pt-16 lg:min-h-[760px] lg:px-16 lg:pt-20">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              Validación en origen
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
              La red ve lo que falta antes de cerrar
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Cuando un profesional registra una prestación, Zonda identifica el
              financiador de la organización, aplica sus reglas y deja la
              atención en borrador si falta un requisito. Administración ve el
              mismo estado.
            </p>
            <div className="mx-auto mt-auto w-full max-w-7xl pt-10 sm:pt-14">
              <Image
                src="/assets/solutions/multipayer/dashboard-multifinanciador.png"
                alt="Vista de la prestación #4201 con cobertura identificada, reglas aplicadas, atención registrada y requisitos validados antes de cerrar y enviar al ciclo de ingresos"
                width={1668}
                height={943}
                sizes="(min-width: 1280px) 1280px, 100vw"
                className="block h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <CapabilityGrid title="Lo que lo hace posible" items={capabilities} />

      <FaqList items={faqItems} />

      <CtaBanner
        variant="night"
        title="Un solo proceso para todos tus financiadores"
        buttonText="Hablá con nuestro equipo"
      />
    </main>
  );
}
