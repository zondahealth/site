import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button/button";

export const metadata: Metadata = {
  title: "Zonda en las noticias",
  description:
    "Zonda Health en los medios: inteligencia artificial e interoperabilidad para una salud más eficiente en Latinoamérica.",
  alternates: { canonical: "/news" },
  openGraph: {
    title: "Zonda en las noticias | Zonda Health",
    description:
      "La prensa cuenta cómo Zonda aplica IA e interoperabilidad para transformar la gestión de la salud.",
    url: "/news",
  },
};

// La primera nota ocupa la tapa; el resto va a «Más cobertura» en este orden.
const articles = [
  {
    outlet: "El Cronista",
    section: "Infotechnology",
    date: "22 de enero de 2026",
    isoDate: "2026-01-22",
    title:
      "Healthtech: una startup argentina aplica la IA para generar ahorros en el sistema de salud",
    description:
      "El Cronista cuenta cómo Zonda, nacida en San Juan, conecta información clínica y operativa para hacer más eficiente la gestión de la salud.",
    href: "https://www.cronista.com/infotechnology/entreprenerds/healthtech-una-startup-argentina-aplica-la-ia-para-generar-ahorros-en-el-sistema-de-salud/",
  },
  {
    outlet: "La Ribera Web",
    section: null,
    date: "25 de enero de 2026",
    isoDate: "2026-01-25",
    title:
      "Una startup argentina aplica la IA para generar ahorros en el sistema de salud",
    description:
      "Una mirada sobre la historia de Zonda y su misión de llevar infraestructura de datos de salud a toda Latinoamérica.",
    href: "https://www.lariberaweb.com/una-startup-argentina-aplica-la-ia-para-generar-ahorros-en-el-sistema-de-salud/",
  },
];

const desk = [
  {
    title: "Sobre Zonda",
    copy: "Zonda es la infraestructura de datos de salud para Latinoamérica. Conecta organizaciones, profesionales y pacientes en una capa de inteligencia unificada, sin reemplazar lo que ya existe.",
    href: "/solutions",
    cta: "Conocer la plataforma",
  },
  {
    title: "Para periodistas",
    copy: "¿Estás escribiendo sobre datos de salud, interoperabilidad o IA en la región? Contanos qué necesitás y te ponemos en contacto con el equipo.",
    href: "/contact",
    cta: "Escribirnos",
  },
  {
    title: "Kit de marca",
    copy: "Logos, colores y pautas de uso listos para descargar, para que la nota salga con la marca bien puesta.",
    href: "/brandbook",
    cta: "Abrir el brand book",
  },
];

export default function NewsPage() {
  const [lead, ...rest] = articles;

  return (
    <main lang="es" className="overflow-x-clip bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-28 sm:px-10 sm:pb-32 sm:pt-36 lg:px-16">
        {/* Cabecera de diario */}
        <header>
          <div className="flex items-baseline justify-between gap-6 pb-3 text-xs text-muted-foreground">
            <p>San Juan, Argentina</p>
            <p className="hidden sm:block">Prensa y novedades</p>
            <p>
              {articles.length} notas · 2026
            </p>
          </div>
          <div className="border-y-4 border-double border-foreground py-6 text-center sm:py-9">
            <h1 className="font-display text-[clamp(2.5rem,9vw,7rem)] font-semibold leading-none tracking-[-0.05em]">
              Zonda en las noticias
            </h1>
          </div>
          <p className="border-b border-foreground py-3 text-center text-sm text-muted-foreground">
            Lo que la prensa cuenta sobre datos, personas y organizaciones de
            salud mejor conectadas.
          </p>
        </header>

        {/* Nota de tapa */}
        <article
          aria-labelledby="lead-title"
          className="grid gap-10 border-b border-foreground py-10 sm:py-14 lg:grid-cols-12 lg:gap-0"
        >
          <div className="lg:col-span-7 lg:border-r lg:border-border lg:pr-12">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
              <span className="bg-accent px-2 py-0.5 font-semibold text-accent-foreground">
                Nota de tapa
              </span>
              <span className="font-semibold text-primary">
                {lead.outlet}
                {lead.section ? ` · ${lead.section}` : ""}
              </span>
              <time dateTime={lead.isoDate} className="text-muted-foreground">
                {lead.date}
              </time>
            </p>
            <h2
              id="lead-title"
              className="mt-6 font-display text-3xl font-semibold leading-[1.08] tracking-[-0.035em] sm:text-5xl xl:text-6xl"
            >
              {lead.title}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {lead.description}
            </p>
            <Button variant="black" asChild className="mt-9">
              <a href={lead.href} target="_blank" rel="noopener noreferrer">
                Leer la nota en {lead.outlet}
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
          </div>

          <figure className="lg:col-span-5 lg:pl-12">
            <div className="relative isolate aspect-[5/4] overflow-hidden rounded-lg">
              <Image
                src="/assets/home/hero-bg.png"
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 480px, 100vw"
                className="-z-10 object-cover"
              />
              <Image
                src="/assets/home/hero.png"
                alt="Grabado de Hipócrates guiñando un ojo, con un teléfono en la mano."
                width={1378}
                height={1080}
                priority
                sizes="(min-width: 1024px) 480px, 100vw"
                className="absolute bottom-0 left-1/2 h-auto w-[104%] max-w-none -translate-x-1/2"
              />
            </div>
            <figcaption className="mt-3 text-sm leading-6 text-muted-foreground">
              Hipócrates, al tanto de las novedades. Grabado de la casa.
            </figcaption>
          </figure>
        </article>

        {/* Más cobertura */}
        {rest.length > 0 ? (
          <section aria-labelledby="coverage-title" className="border-b border-foreground py-10 sm:py-14">
            <h2
              id="coverage-title"
              className="font-display text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              Más cobertura
            </h2>
            <ul className="mt-8">
              {rest.map((article) => (
                <li key={article.href} className="border-t border-border">
                  <a
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid gap-x-10 gap-y-3 py-7 outline-none focus-visible:ring-2 focus-visible:ring-ring md:grid-cols-[11rem_minmax(0,1fr)_auto] md:items-start"
                  >
                    <p className="text-sm leading-6">
                      <span className="block font-semibold text-primary">
                        {article.outlet}
                      </span>
                      <time dateTime={article.isoDate} className="text-muted-foreground">
                        {article.date}
                      </time>
                    </p>
                    <div>
                      <h3 className="max-w-3xl font-display text-xl font-semibold leading-snug tracking-tight underline-offset-4 group-hover:underline sm:text-2xl">
                        {article.title}
                      </h3>
                      <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">
                        {article.description}
                      </p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="inline-flex size-10 items-center justify-center rounded-full border border-foreground/80 transition-colors duration-200 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
                    >
                      <ArrowUpRight className="size-4" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {/* Mesa de prensa */}
        <section aria-label="Mesa de prensa" className="grid md:grid-cols-3">
          {desk.map(({ title, copy, href, cta }) => (
            <div
              key={title}
              className="flex flex-col border-b border-border py-8 last:border-b-0 md:border-b-0 md:border-r md:px-8 md:py-10 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <h2 className="font-display text-lg font-semibold tracking-tight">
                {title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p>
              <Link
                href={href}
                className="group mt-5 inline-flex items-center gap-2 self-start rounded-md text-sm font-semibold text-primary outline-none focus-visible:ring-2 focus-visible:ring-ring md:mt-auto md:pt-5"
              >
                {cta}
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
                />
              </Link>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
