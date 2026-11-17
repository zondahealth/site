import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import { UseCaseHero } from "@/components/use-cases/UseCasePrimitives";

const description =
  "Lo que la prensa cuenta sobre cómo Zonda aplica IA e interoperabilidad para hacer más eficiente la gestión de la salud.";

export const metadata: Metadata = {
  title: "Zonda en las noticias",
  description,
  alternates: { canonical: "/news" },
  openGraph: {
    title: "Zonda en las noticias | Zonda Health",
    description,
    url: "/news",
  },
};

const articles = [
  {
    outlet: "El Cronista",
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
    date: "25 de enero de 2026",
    isoDate: "2026-01-25",
    title:
      "Una startup argentina aplica la IA para generar ahorros en el sistema de salud",
    description:
      "Una mirada sobre la historia de Zonda y su misión de llevar infraestructura de datos de salud a toda Latinoamérica.",
    href: "https://www.lariberaweb.com/una-startup-argentina-aplica-la-ia-para-generar-ahorros-en-el-sistema-de-salud/",
  },
];

export default function NewsPage() {
  return (
    <main lang="es" className="min-h-screen bg-background text-foreground">
      <UseCaseHero
        eyebrow="Prensa"
        title="Zonda en las noticias"
        copy={description}
        primary={{ label: "Conocer la plataforma", href: "/solutions" }}
      >
        <ul className="mt-12 grid w-full gap-6 text-left md:grid-cols-2">
          {articles.map((article) => (
            <li key={article.href}>
              <a
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-lg border border-foreground bg-card p-6 outline-none transition-shadow hover:shadow-[0_16px_45px_rgba(21,27,43,0.1)] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 sm:p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                  {article.outlet} ·{" "}
                  <time dateTime={article.isoDate}>{article.date}</time>
                </p>
                <h2 className="mt-4 font-display text-xl font-semibold leading-snug tracking-[-0.025em] sm:text-2xl">
                  {article.title}
                </h2>
                <p className="mt-3 text-base leading-7 text-muted-foreground">
                  {article.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold">
                  Leer la nota en {article.outlet}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </UseCaseHero>
    </main>
  );
}
