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

const title = "Farmacias";
const description =
  "Conectá identidad, cobertura, tratamientos y dispensas para que cada retiro tenga el contexto que necesita.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/industries/pharmacies" },
  openGraph: { title: `${title} | Zonda`, description, url: "/industries/pharmacies" },
  robots: { index: false },
};

const benefits = [
  { title: "Cada paciente, identificado", copy: "Una identidad y cobertura consistentes entre sucursales, profesionales y financiadores.", href: "/use-cases/identity", cta: "Ver identidad", media: <ImagePlaceholder width={1280} height={720} label="Paciente con identidad, cobertura e historial de dispensas unificados." fill /> },
  { title: "Tratamientos con continuidad", copy: "El historial de tratamientos y dispensas permite detectar cuándo una persona necesita seguimiento.", href: "/use-cases/automation", cta: "Ver automatización", media: <ImagePlaceholder width={1280} height={720} label="Tratamiento crónico con historial de dispensas y próximo seguimiento." fill /> },
  { title: "Coberturas sin vueltas", copy: "La información del financiador acompaña el proceso antes de dispensar.", href: "/use-cases/multi-payer-care", cta: "Ver atención multi-financiador", media: <ImagePlaceholder width={1280} height={720} label="Validación de cobertura y condiciones de dispensa en una farmacia." fill /> },
];

const features = [
  { title: "Cada retiro empieza con el contexto del paciente", copy: "La farmacia puede reconocer a la persona, entender su cobertura y consultar su historial sin volver a pedir o reconstruir los mismos datos.", details: [["Una identidad entre sucursales", "El mismo paciente conserva su información aunque se atienda en distintos puntos de la red."], ["Cobertura visible", "Plan y condiciones del financiador disponibles dentro del proceso de atención."], ["Historial que acompaña", "Tratamientos y dispensas anteriores disponibles para orientar la próxima atención."]], label: "Perfil de paciente de farmacia con identidad, cobertura y dispensas anteriores." },
  { title: "Los tratamientos no se pierden después de la primera dispensa", copy: "Cuando el historial está conectado, el equipo puede identificar tratamientos que requieren continuidad y acompañar a cada paciente antes de que se interrumpa el cuidado.", details: [["Seguimiento de tratamientos", "Una lectura de las dispensas y los tratamientos que necesitan una próxima acción."], ["Señales para el equipo", "Alertas para revisar casos con información pendiente o continuidad en riesgo."], ["Información para el paciente", "La farmacia puede organizar recordatorios y comunicaciones según el proceso de cada persona."]], label: "Panel de seguimiento de tratamientos con dispensas, alertas y próximos pasos." },
  { title: "La dispensa conserva el registro de lo que ocurrió", copy: "Cada operación puede mantener vinculados paciente, cobertura, medicamento, profesional y evento de origen para que la información siga siendo útil después del mostrador.", details: [["Validación antes de dispensar", "La cobertura y las condiciones necesarias se revisan con contexto."], ["Trazabilidad de la operación", "Cada dispensa queda conectada con el paciente, el tratamiento y la respuesta del financiador."], ["Datos para decidir", "La actividad puede analizarse por sucursal, financiador, período o población atendida."]], label: "Dispensa de farmacia conectada a paciente, medicamento, cobertura y trazabilidad de la operación." },
];

const faqItems = [
  { question: "¿Tengo que cambiar mi sistema de farmacia?", answer: "No necesariamente. Zonda puede complementar los sistemas actuales y conectar la información que hoy está repartida entre atención, cobertura y operación." },
  { question: "¿Cómo se valida una cobertura?", answer: "La información del financiador puede estar disponible dentro del flujo de atención para que el equipo conozca las condiciones antes de dispensar." },
  { question: "¿Qué información queda registrada?", answer: "La dispensa puede conservar su vínculo con el paciente, tratamiento, cobertura y los eventos que explican la operación." },
];

function Details({ items }: { items: string[][] }) { return <dl className="mt-8 grid max-w-lg gap-6">{items.map(([title, copy]) => <div key={title}><dt className="text-sm font-semibold text-foreground">{title}</dt><dd className="mt-1 text-sm leading-6 text-muted-foreground">{copy}</dd></div>)}</dl>; }

export default function PharmaciesPage() {
  return <main lang="es" className="overflow-hidden bg-background text-foreground">
    <UseCaseHero eyebrow="Farmacias" title="Cada dispensa, con el contexto que necesita" copy={description} primary={{ label: "Hablemos", href: "/contact" }} mediaClassName="overflow-visible" media={<div className="relative h-[340px] w-full sm:h-[440px] lg:h-full"><Image src="/assets/sectors/pharma/hero.png" alt="Higía tomando un frasco del botiquín, con la serpiente de la medicina" width={1398} height={793} priority sizes="(min-width: 1024px) 1180px, 100vw" className="absolute bottom-0 left-1/2 h-auto w-[min(112%,560px)] max-w-none -translate-x-1/2 translate-y-[6%] sm:w-[min(100%,720px)] sm:translate-y-[8%] lg:left-[-9rem] lg:w-[1180px] lg:translate-x-0 lg:translate-y-[14%]" /></div>} />
    <BenefitStories title="Una farmacia conectada puede acompañar mejor." copy="Zonda une la información que ayuda a atender, validar y seguir cada tratamiento sin sumar pasos innecesarios al mostrador." items={benefits} />
    {features.map((feature, index) => <SplitFeature key={feature.title} title={feature.title} copy={feature.copy} mediaSide={index % 2 ? "left" : "right"} media={<ImagePlaceholder width={1000} height={1000} label={feature.label} className="rounded-[1.5rem]" />}><Details items={feature.details} /></SplitFeature>)}
    <FaqList items={faqItems} />
    <IndustryProducts title="Cada dispensa, con el contexto del paciente." subtitle="Identidad, coberturas, seguimiento y analítica en el mismo flujo." keys={["identity", "multi-payer-care", "automation", "analytics"]} />
    <CtaBanner title="Conectá cada dispensa con el cuidado que sigue" subtitle="Identidad, coberturas, tratamientos y operación sobre una misma base de información." buttonText="Hablá con nuestro equipo" />
  </main>;
}
