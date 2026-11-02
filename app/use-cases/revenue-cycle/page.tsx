import type { Metadata } from "next";
import Image from "next/image";
import { BarChart3, Cog, ShieldCheck, Workflow } from "lucide-react";

import {
  BenefitStories,
  CapabilityGrid,
  FaqList,
  InlineLink,
  MetricSlot,
  SplitFeature,
  Testimonial,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

const title = "Ciclo de ingresos en salud";
const description =
  "Conectá atención, validación, facturación, cobro y liquidación en un único flujo.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/use-cases/revenue-cycle" },
  openGraph: {
    title: `${title} | Zonda`,
    description,
    url: "/use-cases/revenue-cycle",
  },
};

const multiPayerHref = "/use-cases/multi-payer-care";

const benefits = [
  {
    title: "Reducí débitos evitables",
    copy: "Validá cada prestación contra las reglas del financiador antes de presentarla, no cuando el débito ya fue aplicado.",
    media: (
      <Image
        src="/assets/solutions/payments/doctor-connected.png"
        alt="Profesional conectado a documentación, medicación y prácticas, con señales que no pasan la validación"
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
      />
    ),
  },
  {
    title: "Eliminá la carga repetitiva",
    copy: "Conectá los datos que ya existen y automatizá los procesos que hoy requieren carga manual entre sistemas.",
    media: (
      <Image
        src="/assets/solutions/payments/updated.png"
        alt="Movimientos de ingreso y egreso actualizados automáticamente en los últimos minutos"
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
      />
    ),
  },
  {
    title: "Sabé dónde está cada ingreso",
    copy: "Seguí qué fue realizado, facturado, presentado, aprobado, debitado, cobrado y liquidado.",
    media: (
      <Image
        src="/assets/solutions/payments/settled.png"
        alt="Sesión liquidada de Juan Dumas por $12.003, con el número de cuenta confirmado"
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
      />
    ),
  },
];

const capabilities = [
  {
    title: "Atención multi-financiador",
    copy: "Prestaciones que nacen bien registradas.",
    href: multiPayerHref,
    icon: Workflow,
  },
  {
    title: "Fraude y riesgo",
    copy: "Señales pre-pago.",
    href: "/use-cases/fraud-risk-prevention",
    icon: ShieldCheck,
  },
  { title: "Automatización", href: "/use-cases/automation", icon: Cog },
  { title: "Analítica", href: "/use-cases/analytics", icon: BarChart3 },
];

const faqItems = [
  {
    question: "¿Qué es el ciclo de ingresos en salud?",
    answer:
      "Es el recorrido de una prestación desde la atención hasta la facturación, el cobro y la liquidación. Zonda conecta cada etapa en un único flujo.",
  },
  {
    question: "¿Cómo evita Zonda los débitos?",
    answer:
      "Aplica las reglas de cada financiador —nomenclador, cobertura, autorización, documentación, frecuencia y presentación— antes de facturar.",
  },
  {
    question: "¿Reemplaza al sistema de facturación o al ERP?",
    answer:
      "No. Zonda conecta la atención con los sistemas existentes y mantiene la trazabilidad de cada transacción a lo largo del ciclo.",
  },
  {
    question: "¿Puede trabajar con múltiples financiadores?",
    answer:
      "Sí. Cada financiador puede tener reglas, sistemas y formas de presentación distintas. Zonda absorbe esa complejidad en un flujo común.",
  },
  {
    question: "¿Qué pasa cuando una prestación no está lista?",
    answer:
      "Queda como excepción. El equipo interviene solo en lo que falta —autorización, documentación o inconsistencia— mientras el resto avanza.",
  },
  {
    question: "¿Qué visibilidad da sobre la plata?",
    answer:
      "Podés ver cuánto se realizó, cuánto se facturó, cuánto se aprobó, dónde hay débitos, cuánto falta cobrar y qué corresponde liquidar.",
  },
  {
    question: "¿Incluye la liquidación a profesionales?",
    answer:
      "Sí. El mismo dato que origina la facturación puede usarse para determinar qué corresponde liquidar a cada profesional.",
  },
];

export default function RevenueCyclePage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        eyebrow="Ciclo de ingresos"
        title="De cada prestación realizada a cada ingreso cobrado"
        copy={description}
        primary={{ label: "Hablá con nuestro equipo", href: "/contact" }}
        media={
          <div className="flex h-full w-full items-center justify-center px-4 pt-20 pb-6 sm:px-6 sm:pt-24">
            <Image
              src="/assets/solutions/payments/hero.png"
              alt="Sesión liquidada con ubicación, profesional y pago automático cuando la ubicación de la póliza coincide con la de la visita"
              width={1071}
              height={1342}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-auto w-auto max-h-[min(560px,100%)] max-w-full object-contain"
            />
          </div>
        }
      />

      <BenefitStories
        title="Lo que necesitás para que cada prestación cuente."
        items={benefits}
      />

      <div className="px-6 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <MetricSlot
            label="reducción de débitos"
            supportText="Métrica a definir"
          />
          <MetricSlot
            label="días menos de cobro"
            supportText="Métrica a definir"
          />
          <MetricSlot
            label="prestaciones automatizadas sin intervención"
            supportText="Métrica a definir"
          />
        </div>
      </div>

      <SplitFeature
        id="como-funciona"
        eyebrow="Transacción de origen"
        title="Todo empieza con una prestación bien registrada"
        copy="Cada prestación genera una transacción que conecta paciente, profesional, financiador, práctica y documentación. Zonda estructura esa información desde el origen y la mantiene durante todo el ciclo."
        media={
          <Image
            src="/assets/solutions/payments/connected-professional.png"
            alt="Profesional en el centro de un flujo conectado con documentación, medicación, institución, agenda, prácticas y mensajes"
            width={1254}
            height={1254}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-auto w-full rounded-[1.5rem] object-cover"
          />
        }
      />

      <SplitFeature
        eyebrow="Inteligencia pre-facturación"
        title="Detectá problemas antes de facturar"
        copy="Las reglas que determinan si una prestación puede cobrarse no deberían vivir en planillas. Zonda las aplica —nomenclador, cobertura, autorización, documentación, frecuencia y presentación— y detiene las inconsistencias antes de que lleguen a facturación."
        mediaSide="left"
        media={
          <Image
            src="/assets/solutions/payments/session-authorized.png"
            alt="Póliza de Médica Salud con cobertura verificada, autorización aprobada y servicio autorizado"
            width={1254}
            height={1254}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-auto w-full rounded-[1.5rem] object-cover"
          />
        }
      />

      <SplitFeature
        eyebrow="Flujo del ingreso"
        title="Seguí la plata, no las planillas"
        copy="La presentación no es el final. Zonda mantiene conectada cada prestación con la respuesta del financiador, los débitos, el cobro y la liquidación correspondiente, incluida la liquidación a profesionales."
        media={
          <Image
            src="/assets/solutions/payments/dashboard-payment.png"
            alt="Panel de Médica Salud con ingresos, egresos y categorías como reembolsos, nómina y facturas"
            width={1254}
            height={1254}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-auto w-full rounded-[1.5rem] object-cover"
          />
        }
      />

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
              Automatizá lo normal. Intervení en lo excepcional.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-foreground/75 sm:text-lg">
              Entendé la prestación, el motivo por el que se detuvo y la
              evidencia necesaria para resolverla desde una sola vista
              operativa.
            </p>
            <div className="mx-auto mt-auto w-full max-w-7xl pt-10 sm:pt-14">
              <Image
                src="/assets/solutions/payments/policy-config.png"
                alt="Configuración de una póliza de cobro: si el profesional es kinesiólogo, atiende en hospital, la prestación es rehabilitación y la cobertura es PAMI, el precio por sesión es $18.500"
                width={1672}
                height={815}
                sizes="(min-width: 1280px) 1280px, 100vw"
                className="block h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Testimonial
            compact
            quote="Las validaciones que antes eran manuales ahora se ejecutan automáticamente, reduciendo errores, débitos y tiempos de cobro.”"
            name="Interdom"
            role={
              <InlineLink href="/customer-stories/interdom">
                caso publicado
              </InlineLink>
            }
          />
        </div>
      </section>

      <CapabilityGrid title="Lo que lo hace posible" items={capabilities} />

      <FaqList items={faqItems} />

      <CtaBanner
        title="Hacé que cada prestación cuente"
        subtitle="Conectá atención, validación, facturación, cobro y liquidación. Automatizá lo normal e intervení solo en lo excepcional."
        buttonText="Hablá con nuestro equipo"
      />
    </main>
  );
}
