import type { Metadata } from "next";
import Image from "next/image";

import {
  BenefitStories,
  FaqList,
  FeatureShot,
  InlineLink,
  SplitFeature,
  Testimonial,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

const title = "Ciclo de ingresos en salud";
const description =
  "Cuando la información clínica, operativa y financiera permanece conectada, cobrar deja de depender de perseguir datos entre sistemas.";

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

const benefits = [
  {
    title: "Menos sorpresas cuando ya es tarde",
    copy: "Las señales que merecen atención se hacen visibles mientras todavía es posible resolverlas con contexto.",
    media: (
      <Image
        src="/assets/solutions/payments/benefit-1.png"
        alt="Profesional conectado a documentación, medicación y prácticas, con señales que no pasan la validación"
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
      />
    ),
  },
  {
    title: "Una operación que no pide volver a cargar lo mismo",
    copy: "Los datos generados en la atención, la agenda y las coberturas siguen su recorrido sin trasladarlos entre sistemas.",
    media: (
      <Image
        src="/assets/solutions/payments/benefit-2.png"
        alt="Movimientos de ingreso y egreso actualizados automáticamente en los últimos minutos"
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
      />
    ),
  },
  {
    title: "Claridad sobre cada importe",
    copy: "Detrás de cada monto queda visible una prestación, una decisión, una respuesta y un destino.",
    media: (
      <Image
        src="/assets/solutions/payments/benefit-3.png"
        alt="Sesión liquidada de Juan Dumas por $12.003, con el número de cuenta confirmado"
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
      />
    ),
  },
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

export default function RevenueCyclePage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        title="Cada atención, encaminada hasta su resultado"
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
        title="Una atención que llega preparada al siguiente paso"
        copy="La visita no termina al cerrar la agenda. Su contexto —quién atendió, dónde, bajo qué cobertura y con qué respaldo— sigue disponible para que el resto del proceso pueda avanzar sin reconstruirlo."
        items={benefits}
      />

      <SplitFeature
        id="como-funciona"
        title="La información conserva su contexto"
        copy="Cada prestación se vuelve parte de un registro vivo: paciente, profesional, financiador, práctica y evidencia permanecen relacionados durante todo el recorrido. Así, lo financiero puede entender lo asistencial sin pedir explicaciones de nuevo."
        media={
          <FeatureShot
            src="/assets/solutions/payments/feature-1.png"
            alt="Profesional en el centro de un flujo conectado con documentación, medicación, institución, agenda, prácticas y mensajes"
          />
        }
      >
        <FeatureDetails
          items={[
            {
              title: "Una prestación con identidad",
              copy: "Paciente, profesional, práctica, cobertura y documentación vinculados desde el momento de atención.",
            },
            {
              title: "El recorrido no se corta",
              copy: "La información sigue disponible para coordinación, auditoría, facturación y liquidación.",
            },
            {
              title: "El contexto acompaña la decisión",
              copy: "Cada equipo puede entender qué pasó sin reconstruir la historia entre planillas y mensajes.",
            },
          ]}
        />
      </SplitFeature>

      <SplitFeature
        title="La confianza se construye antes"
        copy="Las reglas de cada financiador forman parte de la operación, no de una checklist paralela. Cuando algo necesita revisión, aparece con el motivo y el contexto para resolverlo antes de que se convierta en una diferencia posterior."
        mediaSide="left"
        media={
          <FeatureShot
            src="/assets/solutions/payments/feature-2.png"
            alt="Póliza de Médica Salud con cobertura verificada, autorización aprobada y servicio autorizado"
          />
        }
      >
        <FeatureDetails
          items={[
            {
              title: "Cobertura y autorización visibles",
              copy: "La prestación se contrasta con las condiciones que aplican a esa persona y ese financiador.",
            },
            {
              title: "Reglas dentro del flujo",
              copy: "Nomenclador, documentación, frecuencia y presentación se aplican sin trasladarlas a una planilla aparte.",
            },
            {
              title: "Lo habitual avanza; lo excepcional encuentra contexto",
              copy: "La operación no debería detenerse por cada excepción. Zonda deja que el flujo continúe donde hay certeza y concentra la intervención humana donde realmente aporta valor.",
            },
          ]}
        />
      </SplitFeature>

      <SplitFeature
        title="El ingreso sigue siendo entendible después de facturar"
        copy="Presentar no cierra la historia. Zonda mantiene visible qué ocurrió con cada prestación y permite entender el recorrido completo hasta su resolución y liquidación."
        media={
          <FeatureShot
            src="/assets/solutions/payments/feature-3.png"
            alt="Panel de Médica Salud con ingresos, egresos y categorías como reembolsos, nómina y facturas"
          />
        }
      >
        <FeatureDetails
          items={[
            {
              title: "Seguimiento de punta a punta",
              copy: "Realización, facturación, presentación, respuesta, débito, cobro y liquidación en el mismo recorrido.",
            },
            {
              title: "Respuestas con contexto",
              copy: "Cada devolución o diferencia conserva el vínculo con la prestación que la originó.",
            },
            {
              title: "Liquidaciones entendibles",
              copy: "La información que explica un ingreso también permite determinar qué corresponde liquidar.",
            },
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
              Las reglas de tu operación, centralizadas en un solo lugar.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-foreground/75 sm:text-lg">
              Cada organización puede definir convenios, reglas de facturación y
              criterios de liquidación para sus prestadores. Zonda los mantiene
              conectados a la operación para que cada prestación se procese
              según las condiciones que le corresponden.
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

      <FaqList items={faqItems} />

      <CtaBanner
        title="Cada atención puede llegar más lejos"
        subtitle="Conectá atención, validación, facturación, cobro y liquidación en un recorrido que conserva el contexto de principio a fin."
        buttonText="Hablá con nuestro equipo"
      />
    </main>
  );
}
