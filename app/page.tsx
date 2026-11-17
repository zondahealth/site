import type { Metadata } from "next";

import { Hero } from "@/components/home/Hero";
import { AiInfraBanner } from "@/components/home/AiInfraBanner";
import { ApiBanner } from "@/components/home/ApiBanner";
import { AudiencePaths } from "@/components/home/AudiencePaths";
import { PlatformFlow } from "@/components/home/PlatformFlow";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";
import Gradient from "@/components/ui/gradient/Gradient";

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
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){
  var imgs=document.querySelectorAll("[data-hero-asset]");
  var pending=[];
  for(var i=0;i<imgs.length;i++){
    if(imgs[i].complete) continue;
    if(getComputedStyle(imgs[i]).display==="none") continue;
    pending.push(imgs[i]);
  }
  if(!pending.length) return;
  if(!document.getElementById("hero-loading-veil")){
    var veil=document.createElement("div");
    veil.id="hero-loading-veil";
    veil.setAttribute("aria-hidden","true");
    document.body.appendChild(veil);
  }
  function hide(){
    var node=document.getElementById("hero-loading-veil");
    if(node) node.remove();
  }
  function settled(img){
    var loaded=img.complete?Promise.resolve():new Promise(function(resolve){
      img.addEventListener("load",function(){resolve();},{once:true});
      img.addEventListener("error",function(){resolve();},{once:true});
    });
    return loaded.then(function(){return img.decode?img.decode().catch(function(){}):null;});
  }
  Promise.all(pending.map(settled)).then(hide);
  setTimeout(hide,12000);
})();`,
        }}
      />
      <Gradient
        colors={["#f6fbff", "#fffff1", "#ffffff", "#fffefa", "#f7fcff"]}
        className="flex flex-col gap-40 pt-24 sm:gap-48 sm:pt-28 lg:gap-56 lg:pt-36"
      >
        <PlatformFlow />
        <section aria-labelledby="testimonials-title" className="px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 id="testimonials-title" className="font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Organizaciones que ya trabajan con Zonda
            </h2>
            <Testimonials className="mt-12" />
          </div>
        </section>
        <AiInfraBanner />
        <AudiencePaths />
        <ApiBanner />
        <CtaBanner
          title={<>Datos que fluyen. Salud que funciona.</>}
          subtitle="Contanos con qué sistemas trabaja tu organización y te mostramos cómo se vería tu operación sobre Zonda."
          buttonText="Agendar una demo"
        />
      </Gradient>
    </main>
  );
}
