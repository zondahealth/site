import type { Metadata } from "next";
import Image from "next/image";

import { ImagePlaceholder } from "@/components/ui/image-placeholder/ImagePlaceholder";
import { BenefitStories, FaqList, SplitFeature, UseCaseHero } from "@/components/use-cases/UseCasePrimitives";
import { IndustryProducts } from "@/components/industries/IndustryProducts";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

const title = "Financiadores (obras sociales, prepagas y aseguradoras)";
const description = "Una capa común para conocer a los afiliados, conectar a la red de prestadores y seguir cada práctica con contexto clínico, operativo y financiero.";
export const metadata: Metadata = { title, description, alternates: { canonical: "/industries/payers" }, openGraph: { title: `${title} | Zonda`, description, url: "/industries/payers" } };

const benefits = [
  { title: "Una población que se puede conocer", copy: "Perfiles, antecedentes, coberturas y actividad reunidos para entender a cada afiliado más allá de una transacción.", href: "/use-cases/population-segmentation", cta: "Ver segmentación", media: <ImagePlaceholder width={1280} height={720} label="Perfil de afiliado con cobertura, antecedentes, prácticas y señales de riesgo." fill /> },
  { title: "Una red de prestadores con contexto", copy: "Hospitales, clínicas y médicos particulares conectados a credenciales, prácticas y desempeño.", href: "/use-cases/identity", cta: "Ver identidad", media: <ImagePlaceholder width={1280} height={720} label="Red de hospitales y profesionales conectados a credenciales y actividad." fill /> },
  { title: "Cada práctica, visible de punta a punta", copy: "Autorización, atención, documentación, facturación y pago vinculados para decidir antes y no después.", href: "/use-cases/fraud-risk-prevention", cta: "Ver fraude", media: <ImagePlaceholder width={1280} height={720} label="Práctica de salud trazable desde autorización hasta facturación y pago." fill /> },
];

const features = [
  { title: "Pedí y recibí información con el contexto del afiliado", copy: "La relación con el paciente no tiene por qué empezar de cero en cada atención. Zonda permite reunir y compartir información relevante entre los sistemas y organizaciones que participan en su cuidado.", details: [["Perfil longitudinal", "Historial clínico, coberturas, prácticas y eventos relevantes reunidos alrededor de cada afiliado."], ["Información entre organizaciones", "Intercambio de datos e historial clínico cuando intervienen prestadores u otros financiadores."], ["Acceso con propósito", "Permisos y trazabilidad para saber qué información se consultó, compartió o actualizó."]], label: "Perfil longitudinal de un afiliado con historial, cobertura y datos compartidos entre organizaciones." },
  { title: "La red de prestadores deja de ser una caja negra", copy: "Desde hospitales hasta profesionales particulares, cada integrante de la red puede conectarse a las reglas, la información y los procesos que necesita el financiador.", details: [["Una red que refleja la realidad", "Hospitales, clínicas, servicios y profesionales vinculados a sus credenciales, especialidades y relaciones."], ["Reglas en el punto de atención", "Cobertura, autorizaciones y condiciones disponibles cuando se registra una práctica."], ["Desempeño que se puede entender", "Actividad, prácticas y respuestas visibles por prestador, región, plan o especialidad."]], label: "Red de prestadores con hospitales, clínicas y médicos conectados a reglas, credenciales y actividad." },
  { title: "Cada práctica conserva la evidencia que la explica", copy: "Cuando todos los eventos permanecen vinculados, el financiador puede validar, auditar y resolver excepciones con información concreta, no con reconstrucciones manuales.", details: [["Validación antes de avanzar", "Autorización, cobertura, documentación y condiciones de la práctica dentro del mismo flujo."], ["Riesgo investigable", "Inconsistencias y señales de fraude con la evidencia y los eventos que las explican."], ["Del servicio al pago", "La práctica se puede seguir desde la atención hasta la respuesta, el débito, el cobro y la liquidación."]], label: "Práctica de salud con autorización, evidencia clínica, factura, respuesta y pago conectados." },
  { title: "Las decisiones se apoyan en señales concretas", copy: "La información de afiliados, prestadores y prácticas se vuelve útil cuando permite detectar riesgos, priorizar programas y actuar antes de que el costo o el problema crezcan.", details: [["Alertas con contexto", "Desvíos de consumo, actividad o atención que muestran dónde actuar y por qué."], ["Segmentación para prevenir", "Cohortes por condición, riesgo, territorio o cobertura para diseñar intervenciones concretas."], ["Analítica trazable", "Cada indicador puede recorrerse hasta las transacciones, eventos y fuentes que lo componen."]], label: "Tablero de financiador con alertas, segmentación de afiliados y análisis por prestador, región y plan." },
];

const faqItems = [
  { question: "¿Los prestadores tienen que usar Zonda?", answer: "No necesariamente. La información puede llegar mediante integraciones; quienes usan la plataforma pueden además operar sobre reglas y procesos compartidos." },
  { question: "¿Puede conectarse con otros financiadores?", answer: "Zonda permite integrar e intercambiar información entre las organizaciones que participan en la atención, conservando el contexto y la trazabilidad de cada dato." },
  { question: "¿Cómo ayuda a la toma de decisiones?", answer: "Conecta perfiles, prácticas, prestadores y resultados en una misma capa para habilitar alertas, segmentación y analítica trazable." },
  { question: "¿Reemplaza los sistemas actuales?", answer: "No. Complementa los sistemas de autorizaciones, gestión y pagos existentes para conectar datos y procesos que hoy están dispersos." },
];

function Details({ items }: { items: string[][] }) { return <dl className="mt-8 grid max-w-lg gap-6">{items.map(([title, copy]) => <div key={title}><dt className="text-sm font-semibold text-foreground">{title}</dt><dd className="mt-1 text-sm leading-6 text-muted-foreground">{copy}</dd></div>)}</dl>; }

export default function PayersPage() { return <main lang="es" className="overflow-hidden bg-background text-foreground">
  <UseCaseHero eyebrow="Financiadores (obras sociales, prepagas y aseguradoras)" title="Conocé la atención que reciben tus afiliados, de punta a punta" copy={description} primary={{ label: "Hablemos", href: "/contact" }} secondary={{ label: "Ver analítica", href: "/use-cases/analytics" }} secondaryVariant="inverse" mediaClassName="overflow-visible" media={<div className="relative h-[340px] w-full sm:h-[460px] lg:h-full"><Image src="/assets/sectors/payers/hero.png" alt="Grupo de médicos y organizaciones de salud conectados" width={1427} height={1099} priority sizes="(min-width: 1024px) 720px, 90vw" className="absolute bottom-0 left-1/2 h-auto w-[min(100%,560px)] max-w-none -translate-x-1/2 object-contain sm:w-[640px] lg:left-[-2.25rem] lg:w-[720px] lg:translate-x-0" /></div>} />
  <BenefitStories title="Una red conectada permite tomar mejores decisiones." copy="Zonda une afiliados, prestadores, prácticas y resultados para que el financiador pueda gestionar la atención, no sólo revisar pagos." items={benefits} />
  {features.map((feature, index) => <SplitFeature key={feature.title} title={feature.title} copy={feature.copy} mediaSide={index % 2 ? "left" : "right"} media={<ImagePlaceholder width={1200} height={900} label={feature.label} className="rounded-[1.5rem]" />}><Details items={feature.details} /></SplitFeature>)}
  <FaqList items={faqItems} />
  <IndustryProducts title="Cada práctica, con el contexto para decidir." subtitle="Riesgo, población, analítica e identidad sobre afiliados y prestadores." keys={["fraud-risk-prevention", "population-segmentation", "analytics", "identity"]} />
  <CtaBanner title="Convertí la información de tu red en capacidad de decisión" subtitle="Afiliados, prestadores, prácticas y alertas sobre una misma base trazable." buttonText="Hablá con nuestro equipo" />
</main>; }
