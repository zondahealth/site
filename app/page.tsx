import type { Metadata } from "next";

import { Hero } from "@/components/home/Hero";
import { Products } from "@/components/home/Products";
import { AiInfraBanner } from "@/components/home/AiInfraBanner";
import { ResultsBanner } from "@/components/home/ResultsBanner";
import { ApiBanner } from "@/components/home/ApiBanner";
import { PossibilitiesBanner } from "@/components/home/PossibilitiesBanner";
import { SectorsBanner } from "@/components/home/SectorsBanner";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";
import Gradient from "@/components/ui/gradient/Gradient";
import { Separator } from "@/components/ui/separator/Separator";

const title =
  "Zonda Health · La infraestructura de datos de salud para Latinoamérica";
const description =
  "Zonda conecta organizaciones, profesionales y pacientes en una capa de inteligencia de salud unificada, sin reemplazar lo que ya existe.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Zonda Health",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/assets/home/hero-bg.png",
        width: 2880,
        height: 1600,
        alt: "Zonda Health",
      },
    ],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zonda Health",
  url: "https://zondahealth.com",
  email: "support@zondahealth.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Juan",
    addressCountry: "AR",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-clip bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <Separator thickness={2} />
      <Gradient
        colors={["#f6fbff", "#fffff1", "#ffffff", "#fffefa", "#f7fcff"]}
        className="flex flex-col gap-32 pt-12 sm:gap-40 sm:pt-16 lg:gap-48 lg:pt-20"
      >
        <Products />
        <AiInfraBanner />
        <ResultsBanner />
        <ApiBanner />
        <SectorsBanner />
        <PossibilitiesBanner />
        <CtaBanner
          title={
            <>
              Datos que fluyen,
              <br />
              salud que funciona
            </>
          }
          subtitle="Contanos qué querés construir o qué parte de tu operación querés ordenar."
          buttonText="Contactate"
        />
      </Gradient>
    </main>
  );
}
