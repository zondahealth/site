import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check, Copy } from "lucide-react";

import { Logo } from "@/components/layout/Logo";

export const metadata: Metadata = {
  title: "Brand book",
  description:
    "Guía de identidad visual de Zonda: logo, color, tipografía y principios de comunicación.",
};

const palette = [
  { name: "Deep blue", token: "--primary", hex: "#0E3C75", color: "#0e3c75", light: false },
  { name: "Signal blue", token: "--secondary", hex: "#226FFD", color: "#226ffd", light: false },
  { name: "Health yellow", token: "--accent", hex: "#EAEA00", color: "#eaea00", light: true },
  { name: "Night", token: "--foreground", hex: "#151B2B", color: "#151b2b", light: false },
  { name: "Cloud", token: "--muted", hex: "#F4F6FD", color: "#f4f6fd", light: true },
  { name: "Canvas", token: "--background", hex: "#FCFCFF", color: "#fcfcff", light: true },
];

const principles = [
  ["Claro", "Hacemos que lo complejo se entienda. Cada pieza prioriza jerarquía, contexto y lectura rápida."],
  ["Seguro", "La salud exige precisión. Usamos lenguaje directo, espacios generosos y detalles que transmiten control."],
  ["Conectado", "Mostramos sistemas, personas y datos en relación; nunca como partes aisladas."],
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#226ffd]">
      {children}
    </p>
  );
}

function Rule({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-sm leading-6 text-[#536078]">
      <Check className="mt-0.5 size-4 shrink-0 text-[#226ffd]" strokeWidth={2.5} />
      <span>{children}</span>
    </li>
  );
}

export default function BrandbookPage() {
  return (
    <main className="overflow-hidden bg-[#fcfcff] text-[#151b2b]">
      <section className="relative min-h-[690px] overflow-hidden bg-[#071126] px-6 pb-16 pt-36 text-white sm:px-10 sm:pt-40 lg:px-16 lg:pt-44">
        <div aria-hidden="true" className="absolute inset-0 opacity-90" style={{ background: "radial-gradient(circle at 76% 35%, rgba(34,111,253,.7), transparent 22%), radial-gradient(circle at 86% 65%, rgba(80,225,213,.34), transparent 18%), radial-gradient(circle at 42% 115%, rgba(42,19,200,.6), transparent 42%)" }} />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(to_top,rgba(7,17,38,.8),transparent)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex items-center justify-between border-b border-white/15 pb-5">
            <Logo variant="full" color="white" className="h-7 w-auto sm:h-8" priority />
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/60">Brand book · 01</span>
          </div>

          <div className="grid items-end gap-12 pt-20 lg:grid-cols-[1.1fr_.9fr] lg:pt-28">
            <div>
              <p className="text-sm font-semibold tracking-wide text-[#eaea00]">Identidad visual</p>
              <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
                La claridad es nuestra forma de avanzar.
              </h1>
            </div>
            <div className="max-w-md lg:justify-self-end">
              <p className="text-lg leading-8 text-white/75 sm:text-xl">
                Una guía para expresar a Zonda con consistencia: una infraestructura que ordena la complejidad de la salud.
              </p>
              <a href="#esencia" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#eaea00]">
                Explorar la guía <ArrowDown className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <Image
          src="/assets/logos/zonda-glowing-orb-dark.png"
          alt=""
          width={1254}
          height={1254}
          priority
          className="pointer-events-none absolute -bottom-72 -right-64 w-[42rem] opacity-80 mix-blend-screen sm:-bottom-96 sm:-right-72 sm:w-[58rem] lg:-bottom-[32rem] lg:right-[2%] lg:w-[67rem]"
        />
      </section>

      <nav aria-label="Índice del brand book" className="sticky top-0 z-40 border-b border-[#d3dae8] bg-[#fcfcff]/90 px-6 py-3 backdrop-blur-lg sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl gap-x-5 overflow-x-auto text-xs font-semibold text-[#536078] sm:gap-x-8">
          {[['01', 'Esencia', '#esencia'], ['02', 'Logo', '#logo'], ['03', 'Color', '#color'], ['04', 'Tipografía', '#tipografia'], ['05', 'Composición', '#composicion']].map(([number, label, href]) => (
            <a key={href} href={href} className="flex shrink-0 items-center gap-2 py-1.5 transition-colors hover:text-[#0e3c75]">
              <span className="text-[#226ffd]">{number}</span>{label}
            </a>
          ))}
        </div>
      </nav>

      <section id="esencia" className="scroll-mt-16 px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
          <div><SectionLabel>01 — Esencia</SectionLabel></div>
          <div>
            <h2 className="max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-6xl">
              Zonda traduce la complejidad del sistema de salud en decisiones claras.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#536078]">
              Nuestra identidad no busca llamar la atención por encima de todo. Busca dar confianza: mostrar que detrás de cada interacción hay un sistema sólido, humano y preparado para conectar lo que hoy está disperso.
            </p>
            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[#d3dae8] bg-[#d3dae8] sm:grid-cols-3">
              {principles.map(([title, copy], index) => (
                <article key={title} className="bg-[#fcfcff] p-6 sm:p-7">
                  <span className="font-display text-4xl font-semibold tracking-[-.05em] text-[#0e3c75]/25">0{index + 1}</span>
                  <h3 className="mt-9 font-display text-xl font-semibold tracking-tight">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#536078]">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="logo" className="scroll-mt-16 bg-[#f4f6fd] px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>02 — Marca</SectionLabel>
          <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-6xl">Una marca que se reconoce incluso en silencio.</h2>
            <p className="max-w-sm text-base leading-7 text-[#536078]">El logo es el punto de entrada a nuestro sistema. Usalo con aire, contraste y una presencia decidida.</p>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            <div className="flex min-h-72 items-center justify-center rounded-2xl bg-[#0e3c75] p-12 sm:min-h-80">
              <Logo variant="full" color="white" className="h-auto w-[min(100%,25rem)]" />
            </div>
            <div className="flex min-h-72 items-center justify-center rounded-2xl border border-[#d3dae8] bg-white p-12 sm:min-h-80">
              <Logo variant="full" color="black" className="h-auto w-[min(100%,25rem)]" />
            </div>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-[#151b2b] p-7"><Logo variant="mark" color="yellow" className="size-16" /><p className="mt-10 text-sm text-white/65">Marca sobre fondos profundos</p></div>
            <div className="rounded-2xl bg-[#eaea00] p-7"><Logo variant="mark" color="dark-blue" className="size-16" /><p className="mt-10 text-sm text-[#323200]/70">Marca sobre acento</p></div>
            <div className="rounded-2xl bg-white p-7 ring-1 ring-[#d3dae8]"><Logo variant="mark" color="dark-blue" className="size-16" /><p className="mt-10 text-sm text-[#536078]">Marca sobre fondos claros</p></div>
          </div>
          <div className="mt-10 grid gap-8 border-t border-[#d3dae8] pt-10 md:grid-cols-2">
            <div><h3 className="font-display text-xl font-semibold">Espacio de protección</h3><p className="mt-3 max-w-lg text-sm leading-6 text-[#536078]">Dejá alrededor del logo un área libre equivalente, como mínimo, al ancho de la “z” del símbolo. El aire es parte de la marca.</p></div>
            <ul className="grid gap-2"><Rule>No estirar, rotar ni alterar las proporciones.</Rule><Rule>No ubicar el logo sobre fondos con poco contraste.</Rule><Rule>No recrear la marca con tipografías o efectos.</Rule></ul>
          </div>
        </div>
      </section>

      <section id="color" className="scroll-mt-16 px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
            <div><SectionLabel>03 — Color</SectionLabel><h2 className="mt-8 font-display text-4xl font-semibold leading-[1.05] tracking-[-.045em] sm:text-5xl">Energía con criterio.</h2></div>
            <p className="max-w-2xl self-end text-lg leading-8 text-[#536078]">El azul sostiene la confianza y la estructura. El amarillo señala progreso y momentos de atención. Los tonos claros preservan espacio para pensar.</p>
          </div>
          <div className="mt-14 grid overflow-hidden rounded-2xl border border-[#d3dae8] sm:grid-cols-2 lg:grid-cols-3">
            {palette.map((swatch) => (
              <article key={swatch.name} className="group relative min-h-56 border-b border-[#d3dae8] p-6 last:border-b-0 sm:nth-[2n]:border-l lg:nth-[n+4]:border-b-0 lg:nth-[3n+2]:border-l lg:nth-[3n+3]:border-l" style={{ backgroundColor: swatch.color }}>
                <div className={swatch.light ? "text-[#151b2b]" : "text-white"}>
                  <p className="text-lg font-semibold">{swatch.name}</p>
                  <p className="mt-1 font-mono text-xs opacity-65">{swatch.token}</p>
                  <div className="absolute bottom-6 left-6 flex items-center gap-2 text-sm font-semibold"><span>{swatch.hex}</span><Copy className="size-3.5 opacity-50" /></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="tipografia" className="scroll-mt-16 bg-[#0e3c75] px-6 py-24 text-white sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>04 — Tipografía</SectionLabel>
          <div className="mt-10 grid gap-16 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
            <div><p className="font-display text-5xl font-semibold tracking-[-.06em] sm:text-7xl">Aa</p><h2 className="mt-7 font-display text-3xl font-semibold tracking-tight">Plus Jakarta Sans</h2><p className="mt-3 max-w-sm text-base leading-7 text-white/70">Nuestra voz de display: precisa, contemporánea y con la tensión justa para organizar ideas complejas.</p></div>
            <div className="border-t border-white/20 pt-8 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0"><p className="font-sans text-5xl font-medium tracking-[-.05em] sm:text-7xl">Aa</p><h2 className="mt-7 text-3xl font-semibold tracking-tight">Manrope</h2><p className="mt-3 max-w-sm text-base leading-7 text-white/70">Nuestra tipografía de lectura: abierta, sobria y cómoda en interfaces, documentos y textos extensos.</p></div>
          </div>
          <div className="mt-20 border-t border-white/20 pt-10"><p className="font-display max-w-5xl text-4xl font-semibold leading-[1.06] tracking-[-.045em] sm:text-6xl">Diseñamos infraestructura que hace que la salud funcione mejor.</p><p className="mt-7 max-w-2xl text-base leading-7 text-white/70">Titulares cortos, seguros y con ritmo. El cuerpo de texto habla con claridad, sin prometer más de lo que podemos demostrar.</p></div>
        </div>
      </section>

      <section id="composicion" className="scroll-mt-16 px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
          <div><SectionLabel>05 — Composición</SectionLabel></div>
          <div>
            <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-[-.045em] sm:text-6xl">Una interfaz serena también puede tener energía.</h2>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              <article className="rounded-2xl bg-[#151b2b] p-8 text-white"><span className="text-xs font-bold uppercase tracking-[.2em] text-[#eaea00]">Hacer</span><h3 className="mt-16 font-display text-3xl font-semibold tracking-tight">Ordenar antes de adornar.</h3><p className="mt-4 text-sm leading-6 text-white/65">Usá una jerarquía evidente, grillas simples y espacio negativo para que la información importante respire.</p></article>
              <article className="rounded-2xl border border-[#d3dae8] bg-[#f4f6fd] p-8"><span className="text-xs font-bold uppercase tracking-[.2em] text-[#226ffd]">Evitar</span><h3 className="mt-16 font-display text-3xl font-semibold tracking-tight">Decorar sin propósito.</h3><p className="mt-4 text-sm leading-6 text-[#536078]">No acumules gradientes, sombras, efectos o iconos cuando no ayudan a comprender una decisión.</p></article>
            </div>
            <p className="mt-12 max-w-2xl text-xl leading-8 text-[#536078]">En Zonda, la tecnología se ve humana cuando se vuelve legible. Ese es el estándar para cada pantalla, presentación y conversación.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#eaea00] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div><Logo variant="mark" color="dark-blue" className="size-12" /><p className="mt-8 max-w-xl font-display text-3xl font-semibold leading-tight tracking-[-.04em] text-[#323200]">Una misma visión, en cada punto de contacto.</p></div>
          <Link href="/contact" className="inline-flex items-center gap-2 self-start rounded-full bg-[#0e3c75] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 sm:self-auto">Hablemos de Zonda <ArrowUpRight className="size-4" /></Link>
        </div>
      </section>
    </main>
  );
}
