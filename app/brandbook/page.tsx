import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Check, Download, X } from "lucide-react";

import {
  BrandbookNav,
  type BrandbookChapter,
} from "@/components/brandbook/BrandbookNav";
import { CopyValue } from "@/components/brandbook/CopyValue";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/button/button";
import { Card, CardContent, CardCTA, CardTitle } from "@/components/ui/card/card";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";
import Glow from "@/components/ui/glow/Glow";
import { ORBIT_BORDER_COLORS } from "@/components/ui/glow/colors";
import Gradient from "@/components/ui/gradient/Gradient";
import { Separator } from "@/components/ui/separator/Separator";
import Shader from "@/components/ui/shader/Shader";
import { cn } from "@/components/ui/utils";

export const metadata: Metadata = {
  title: "Brand book",
  description:
    "Guía de marca de Zonda: esencia, logo, color, tipografía, cielos, ilustración, interfaz y voz.",
};

const chapters: BrandbookChapter[] = [
  { id: "esencia", number: "01", label: "Esencia" },
  { id: "logo", number: "02", label: "Logo" },
  { id: "color", number: "03", label: "Color" },
  { id: "tipografia", number: "04", label: "Tipografía" },
  { id: "cielos", number: "05", label: "Cielos" },
  { id: "ilustracion", number: "06", label: "Ilustración" },
  { id: "interfaz", number: "07", label: "Interfaz" },
  { id: "voz", number: "08", label: "Voz" },
  { id: "recursos", number: "09", label: "Recursos" },
];

/* ───────────────────────────── Esencia ───────────────────────────── */

const personality = [
  {
    trait: "Clara",
    is: "Directa, legible, con una jerarquía que se entiende de un vistazo.",
    isNot: "Simplista. Ordenar no es esconder la complejidad.",
  },
  {
    trait: "Segura",
    is: "Serena y precisa. Afirma lo que puede demostrar.",
    isNot: "Grandilocuente. La confianza no necesita levantar la voz.",
  },
  {
    trait: "Práctica",
    is: "Concreta y cercana. Habla el idioma de quien opera salud todos los días.",
    isNot: "Fría ni burocrática. Tampoco futurista porque sí.",
  },
];

const coverSpec = [
  ["Fondo", "Cielo de portada sobre una malla violeta, azul y celeste."],
  ["Logo", "Completo y en blanco, arriba del titular."],
  ["Titular", "Plus Jakarta Sans 600 en blanco, de 36 a 64 px, en tres líneas y con una sola palabra en Health yellow."],
  ["Bajada", "Manrope 500 en blanco, de 16 a 20 px, en un bloque angosto."],
  ["Acción", "Un solo botón: oscuro, con borde de órbita."],
  ["Ilustración", "Un grabado a una tinta, apoyado en el borde inferior."],
  ["Composición", "Texto a la izquierda e ilustración a la derecha. Centrado en móvil."],
  ["Movimiento", "El cielo queda quieto; solo se mueve el borde del botón."],
];

const principles = [
  [
    "Que la complejidad se sienta ordenada",
    "Interoperabilidad, analítica y escala operativa se traducen en piezas estructuradas y fáciles de leer.",
  ],
  [
    "Confianza antes que espectáculo",
    "Quien decide en salud tiene que percibir seriedad y claridad en la primera pantalla.",
  ],
  [
    "Amplitud sin desorden",
    "Mostramos muchas capacidades en un mismo sistema, con una jerarquía evidente y un ritmo pausado.",
  ],
  [
    "Moderna, no de moda",
    "Movimiento y color con mesura. Evitamos los recursos que envejecen rápido.",
  ],
  [
    "Pensada para dos idiomas",
    "Las composiciones y los textos tienen que funcionar igual de bien en español y en inglés.",
  ],
];

/* ────────────────────────────── Color ────────────────────────────── */

const palette = [
  {
    name: "Deep blue",
    token: "--primary",
    hex: "#0E3C75",
    onDark: true,
    role: "Estructura y confianza. Fondos institucionales, titulares, superficies oscuras.",
  },
  {
    name: "Signal blue",
    token: "--secondary",
    hex: "#226FFD",
    onDark: true,
    role: "Acción y dato vivo. Estados activos, gráficos, detalles interactivos.",
  },
  {
    name: "Health yellow",
    token: "--accent",
    hex: "#EAEA00",
    onDark: false,
    role: "El acento. Una palabra, un foco, un indicador. Nunca un fondo de lectura.",
  },
  {
    name: "Night",
    token: "--foreground",
    hex: "#151B2B",
    onDark: true,
    role: "Texto principal y la superficie más oscura del sistema.",
  },
  {
    name: "Cloud",
    token: "--muted",
    hex: "#F4F6FD",
    onDark: false,
    role: "Superficies secundarias y tarjetas en reposo.",
  },
  {
    name: "Canvas",
    token: "--background",
    hex: "#FCFCFF",
    onDark: false,
    role: "El fondo por defecto: un blanco apenas azulado.",
  },
];

const proportions = [
  { name: "Canvas", hex: "#FCFCFF", share: 52 },
  { name: "Cloud", hex: "#F4F6FD", share: 16 },
  { name: "Deep blue", hex: "#0E3C75", share: 16 },
  { name: "Night", hex: "#151B2B", share: 8 },
  { name: "Signal blue", hex: "#226FFD", share: 5 },
  { name: "Health yellow", hex: "#EAEA00", share: 3 },
];

const skyColors = [
  { name: "Violeta", hex: "#2A13C8" },
  { name: "Deep blue", hex: "#0E3C75" },
  { name: "Azul", hex: "#1A6CF5" },
  { name: "Azul claro", hex: "#1F7BF8" },
  { name: "Celeste", hex: "#1FD4F5" },
  { name: "Turquesa", hex: "#18D8F0" },
];

const orbit = [
  { token: "--orbit-1", hex: "#EEB7DC" },
  { token: "--orbit-2", hex: "#EADB7A" },
  { token: "--orbit-3", hex: "#B6A7FF" },
  { token: "--orbit-4", hex: "#74BBFF" },
  { token: "--orbit-5", hex: "#7FE0D8" },
  { token: "--orbit-6", hex: "#84C9FF" },
];

const pairings = [
  { fg: "#151B2B", bg: "#FCFCFF", label: "Night sobre Canvas" },
  { fg: "#4A556F", bg: "#F4F6FD", label: "Texto secundario sobre Cloud" },
  { fg: "#F8F9FF", bg: "#0E3C75", label: "Blanco sobre Deep blue" },
  { fg: "#EAEA00", bg: "#0E3C75", label: "Health yellow sobre Deep blue" },
  { fg: "#EAEA00", bg: "#151B2B", label: "Health yellow sobre Night" },
  { fg: "#323200", bg: "#EAEA00", label: "Oliva sobre Health yellow" },
  { fg: "#F8F9FF", bg: "#226FFD", label: "Blanco sobre Signal blue" },
  { fg: "#226FFD", bg: "#FCFCFF", label: "Signal blue sobre Canvas" },
  { fg: "#EAEA00", bg: "#FCFCFF", label: "Health yellow sobre Canvas" },
];

function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

/** WCAG 2.x relative luminance. */
function luminance(hex: string) {
  const [r, g, b] = hexToRgb(hex).map((channel) => {
    const c = channel / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrastRatio(a: string, b: string) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  // Rounded down so a pairing is never reported as better than it is.
  return Math.floor(((hi + 0.05) / (lo + 0.05)) * 10) / 10;
}

function contrastVerdict(ratio: number) {
  if (ratio >= 7) return { grade: "AAA", use: "Cualquier texto" };
  if (ratio >= 4.5) return { grade: "AA", use: "Cualquier texto" };
  if (ratio >= 3) return { grade: "AA títulos", use: "Solo 24 px o más" };
  return { grade: "No pasa", use: "No usar para texto" };
}

/* ──────────────────────────── Tipografía ─────────────────────────── */

const GLYPHS = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ abcdefghijklmnñopqrstuvwxyz 0123456789 ¿?¡!&%";

const typeScale = [
  {
    role: "Display",
    spec: "Plus Jakarta Sans 600 · 36 / 48 / 60 / 64 px · interlínea 1,05 · tracking −0,025em",
    className:
      "font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl xl:text-[4rem] xl:leading-[1.05]",
    sample: "La infraestructura de datos de salud para Latinoamérica",
  },
  {
    role: "Título",
    spec: "Plus Jakarta Sans 600 · 30 / 36 / 48 px · interlínea 1,25 · tracking −0,025em",
    className:
      "font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl",
    sample: "Soluciones para los desafíos concretos de tu operación.",
  },
  {
    role: "Subtítulo",
    spec: "Plus Jakarta Sans 600 · 24 / 30 px · tracking −0,025em",
    className: "font-display text-2xl font-semibold tracking-tight sm:text-3xl",
    sample: "Ingresos y cobranzas",
  },
  {
    role: "Bajada",
    spec: "Manrope 500 · 18 / 20 px · interlínea 1,625",
    className: "max-w-xl text-lg font-medium leading-relaxed lg:text-xl",
    sample:
      "Conectate con Zonda para desarrollar una capa de inteligencia de salud unificada, sin reemplazar lo que ya existe.",
  },
  {
    role: "Cuerpo",
    spec: "Manrope 400 · 16 px · interlínea 1,625 · texto secundario",
    className: "max-w-md text-base leading-relaxed text-muted-foreground",
    sample:
      "Seguí cada prestación desde la orden hasta el cobro, anticipá débitos y reducí los rechazos antes de presentar la factura.",
  },
  {
    role: "Etiqueta",
    spec: "Manrope 600 · 14 px",
    className: "text-sm font-semibold text-primary",
    sample: "Cómo funciona →",
  },
];

/* ────────────────────────────── Cielos ───────────────────────────── */

const skies = [
  {
    name: "Cielo de portada",
    file: "home/hero-bg.png",
    use: "El cielo por defecto. Portadas y toda pieza que presente a Zonda.",
  },
  {
    name: "Cielo de producto",
    file: "bg/hero-common-bg.png",
    use: "Portadas de casos de uso, detrás de capturas de interfaz.",
  },
  {
    name: "Cielo claro",
    file: "bg/bg-clouds-default.png",
    use: "Portadas luminosas con texto blanco y una ilustración.",
  },
  {
    name: "Cielo difuso",
    file: "bg/bg-blured-nebula.png",
    use: "Cierres y llamados a la acción. Texto oscuro con halo claro.",
  },
  {
    name: "Cielo nocturno",
    file: "bg/bg-night-nebula.png",
    use: "Piezas oscuras: tapas, presentaciones, anuncios.",
  },
  {
    name: "Cielo profundo",
    file: "bg/bg-clouds-dark-blue.png",
    use: "Banners oscuros donde el texto es protagonista.",
  },
  {
    name: "Azul calmo",
    file: "bg/bg-deep-sea.png",
    use: "El más quieto. Para lectura larga sobre fondo oscuro.",
  },
];

const heroMesh = [
  { color: "#2a13c8", x: 0.02, y: 0.52 },
  { color: "#0e3c75", x: 0.3, y: 0.9 },
  { color: "#1a6cf5", x: 0.14, y: 0.16 },
  { color: "#18d8f0", x: 0.4, y: 0.24 },
  { color: "#1f7bf8", x: 0.62, y: 0.6 },
  { color: "#1fd4f5", x: 0.96, y: 0.66 },
  { color: "#0e3c75", x: 0.6, y: 0.04 },
];

/* ─────────────────────────────── Voz ─────────────────────────────── */

const voiceRules = [
  [
    "De vos",
    "Escribimos en voseo rioplatense: conectá, contanos, seguí. En inglés, segunda persona y sin rodeos.",
  ],
  [
    "El verbo adelante",
    "Los titulares arrancan por lo que la organización puede hacer, no por lo que somos nosotros.",
  ],
  [
    "Corto y con punto",
    "Oraciones breves que cierran con punto final. Sin signos de exclamación, sin mayúsculas sostenidas.",
  ],
  [
    "Concreto antes que grandioso",
    "Nombramos a los actores y las cosas por su nombre: financiadores, prestaciones, débitos, auditoría.",
  ],
];

const voicePairs = [
  {
    say: "Conectá los financiadores una sola vez.",
    avoid: "Revolucioná tu ecosistema de salud con sinergias de próxima generación.",
    why: "Decimos qué hace el producto.",
  },
  {
    say: "Sin reemplazar lo que ya existe.",
    avoid: "Olvidate para siempre de tus sistemas obsoletos.",
    why: "Respetamos lo que la organización ya construyó.",
  },
  {
    say: "Cada número se puede seguir hasta su origen.",
    avoid: "Analítica mágica potenciada por IA de última generación.",
    why: "Prometemos evidencia, no magia.",
  },
  {
    say: "Contanos con qué sistemas trabaja tu organización.",
    avoid: "Complete el formulario y un representante se comunicará con usted.",
    why: "Cerca y sin ceremonia.",
  },
];

const vocabulary = {
  say: ["financiadores", "prestadores", "afiliados", "prestación", "red", "trazable", "conectar", "operación"],
  avoid: ["disruptivo", "revolucionario", "solución 360", "ecosistema", "de última generación", "usuarios (si son pacientes)"],
};

const cssTokens = `--background: #fcfcff;
--foreground: #151b2b;
--primary: #0e3c75;
--secondary: #226ffd;
--accent: #eaea00;
--accent-foreground: #323200;
--muted: #f4f6fd;
--muted-foreground: #4a556f;
--border: #d3dae8;
--radius: 1rem;`;

/* ──────────────────────────── Primitivas ─────────────────────────── */

function Chapter({
  id,
  number,
  title,
  lede,
  children,
}: {
  id: string;
  number: string;
  title: string;
  lede: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-28 border-t border-border py-20 first:border-t-0 first:pt-0 sm:py-28"
    >
      <p className="font-mono text-xs text-muted-foreground">{number}</p>
      <h2
        id={`${id}-title`}
        className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        {lede}
      </p>
      {children}
    </section>
  );
}

function Block({
  title,
  note,
  children,
}: {
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-16">
      <h3 className="font-display text-xl font-semibold tracking-tight">{title}</h3>
      {note ? (
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">{note}</p>
      ) : null}
      <div className="mt-6">{children}</div>
    </div>
  );
}

function RuleList({ kind, items }: { kind: "do" | "dont"; items: string[] }) {
  const Icon = kind === "do" ? Check : X;
  return (
    <div>
      <p className="text-sm font-semibold">{kind === "do" ? "Sí" : "No"}</p>
      <ul className="mt-3 grid gap-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
            <Icon
              aria-hidden="true"
              strokeWidth={2.5}
              className={cn(
                "mt-1 size-4 shrink-0",
                kind === "do" ? "text-primary" : "text-[#b42318]",
              )}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LogoTile({
  label,
  file,
  wide = false,
  className,
  children,
}: {
  label: string;
  file: string;
  /** Spans both columns and gets a taller stage. */
  wide?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <figure className={cn(wide && "sm:col-span-2")}>
      <div
        className={cn(
          "relative isolate flex min-h-44 items-center justify-center overflow-hidden rounded-lg p-8",
          wide && "sm:min-h-72",
          className,
        )}
      >
        {children}
      </div>
      {/* The caption sits outside the stage so it stays readable whatever
          the logo is shown on. */}
      <figcaption className="mt-3 flex items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>{label}</span>
        <a
          href={`/assets/logos/${file}`}
          download
          aria-label={`Descargar ${label} en PNG`}
          className="inline-flex items-center gap-1.5 rounded-md font-semibold text-foreground underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring"
        >
          PNG <Download aria-hidden="true" className="size-3.5" />
        </a>
      </figcaption>
    </figure>
  );
}

function Misuse({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <figure className="overflow-hidden rounded-lg border border-border bg-card">
      <div className="relative flex h-36 items-center justify-center overflow-hidden px-6">
        {children}
      </div>
      <figcaption className="flex items-center gap-2 border-t border-border px-4 py-3 text-sm text-muted-foreground">
        <X aria-hidden="true" strokeWidth={2.5} className="size-4 shrink-0 text-[#b42318]" />
        {label}
      </figcaption>
    </figure>
  );
}

/* ─────────────────────────────── Página ──────────────────────────── */

export default function BrandbookPage() {
  return (
    <main className="overflow-x-clip bg-background text-foreground">
      {/* Misma composición que la portada del inicio (components/home/Hero.tsx):
          es la pieza de referencia de la marca. */}
      <section aria-label="Portada" className="relative overflow-clip">
        <Gradient
          points={heroMesh}
          softness={0.34}
          grain={0.5}
          className="min-h-[640px] sm:min-h-[720px] lg:min-h-[800px]"
        >
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden="true"
          >
            <Image
              src="/assets/home/hero-bg.png"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="relative z-10 mx-auto min-h-[640px] w-full max-w-[96rem] sm:min-h-[720px] lg:min-h-[800px]">
            <div className="relative z-10 flex min-h-[640px] flex-col items-center justify-center px-6 pt-24 pb-16 text-center sm:min-h-[720px] sm:px-10 md:items-start md:px-10 md:py-28 md:text-left lg:min-h-[800px] lg:px-16 xl:px-20">
              <div className="flex w-max max-w-full flex-col items-center md:items-start">
                <Logo
                  variant="full"
                  color="white"
                  priority
                  className="mb-4 h-8 w-auto sm:h-9 lg:mb-6 lg:h-10 xl:h-11"
                />
                <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4rem] xl:leading-[1.05]">
                  Hacemos que la
                  <br /> complejidad se sienta <br />
                  <span className="text-accent">ordenada</span>
                </h1>
                <p className="mt-4 max-w-md text-base leading-relaxed font-medium text-white sm:text-lg lg:mt-6 lg:max-w-lg lg:text-xl">
                  El brand book de Zonda: todo lo que hace falta para que la
                  marca se vea y suene igual en cada pieza.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start lg:mt-10">
                  <Button variant="black" asChild>
                    <a href="#esencia">Explorar la guía</a>
                  </Button>
                </div>
              </div>
            </div>
            <Image
              src="/assets/home/hero.png"
              alt=""
              width={1378}
              height={1080}
              priority
              sizes="1400px"
              className="pointer-events-none absolute bottom-0 hidden w-auto max-w-none md:left-[28rem] md:block md:h-[min(620px,calc(100%-6.5rem))] lg:left-[28.8rem] lg:h-[min(740px,calc(100%-7rem))] xl:right-[-8rem] xl:left-auto xl:h-[min(780px,calc(100%-7rem))]"
            />
          </div>
        </Gradient>
      </section>

      <nav
        aria-label="Capítulos"
        className="border-b border-border px-6 py-5 sm:px-10 lg:hidden"
      >
        <ol className="flex flex-wrap gap-x-6 gap-y-2">
          {chapters.map(({ id, number, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="flex items-baseline gap-2 rounded-md text-sm font-medium text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="font-mono text-[11px] opacity-60">{number}</span>
                {label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28 lg:grid lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-16 lg:px-16">
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <BrandbookNav chapters={chapters} />
          </div>
        </aside>

        <div className="min-w-0">
          {/* 01 — Esencia */}
          <Chapter
            id="esencia"
            number="01"
            title="La infraestructura de datos de salud para Latinoamérica."
            lede="Zonda conecta organizaciones, profesionales y pacientes en una capa de inteligencia de salud unificada, sin reemplazar lo que ya existe. La marca hace lo mismo que el producto: toma algo enredado y lo devuelve en orden."
          >
            <Block
              title="La portada es la referencia"
              note="La portada del inicio es la pieza que define a la marca. Una pieza nueva arranca con estos mismos ingredientes y se aleja de ellos solo cuando hay un motivo."
            >
              <dl className="grid gap-px overflow-hidden rounded-lg border border-border bg-border text-sm sm:grid-cols-2">
                {coverSpec.map(([term, value]) => (
                  <div key={term} className="bg-card px-5 py-4">
                    <dt className="font-semibold">{term}</dt>
                    <dd className="mt-1 leading-6 text-muted-foreground">{value}</dd>
                  </div>
                ))}
              </dl>
            </Block>

            <Block title="Personalidad">
              <div className="grid gap-4 md:grid-cols-3">
                {personality.map(({ trait, is, isNot }) => (
                  <article key={trait} className="rounded-lg border border-border bg-card p-6">
                    <h4 className="font-display text-2xl font-semibold tracking-tight">
                      {trait}
                    </h4>
                    <dl className="mt-6 grid gap-4 text-sm leading-6">
                      <div>
                        <dt className="font-semibold">Es</dt>
                        <dd className="mt-1 text-muted-foreground">{is}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold">No es</dt>
                        <dd className="mt-1 text-muted-foreground">{isNot}</dd>
                      </div>
                    </dl>
                  </article>
                ))}
              </div>
            </Block>

            <Block title="El nombre">
              <div className="relative isolate overflow-hidden rounded-lg px-6 py-14 text-white sm:px-10 sm:py-20">
                <Image
                  src="/assets/bg/bg-clouds-default.png"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 960px, 100vw"
                  className="-z-10 object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(8,50,110,0.72),rgba(8,50,110,0.25)_70%,transparent)]"
                />
                <p className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                  Zonda es un viento.
                </p>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-white/90 sm:text-lg">
                  Baja cálido y seco desde los Andes y despeja el cielo de San
                  Juan, donde tenemos nuestra casa. De ahí sale nuestro paisaje:
                  cielos abiertos, luz y aire en movimiento. Y nuestra tarea:
                  despejar.
                </p>
              </div>
            </Block>

            <Block title="Principios de diseño">
              <ol className="grid gap-x-12 sm:grid-cols-2">
                {principles.map(([title, copy], index) => (
                  <li key={title} className="flex gap-5 border-t border-border py-6">
                    <span className="font-mono text-xs leading-7 text-muted-foreground">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="font-display text-lg font-semibold tracking-tight">
                        {title}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Block>
          </Chapter>

          {/* 02 — Logo */}
          <Chapter
            id="logo"
            number="02"
            title="Un símbolo, una palabra, mucho aire."
            lede="El logo combina el símbolo —una z de trazo redondeado con su punto, dentro de un círculo— y el nombre en minúsculas. Siempre usamos los archivos originales: no se redibuja ni se recompone."
          >
            <Block
              title="Versiones"
              note="La principal es la de la portada: blanca sobre cielo. Sobre fondos claros usamos la versión a color."
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <LogoTile
                  label="Principal · blanca sobre cielo de portada"
                  file="white-full-logo.png"
                  wide
                  className="justify-start sm:px-14"
                >
                  {/* Enlarged from the left so the logo rests on the deep
                      blue of the sky, as it does on the home hero, and never
                      on the bright flare. */}
                  <Image
                    src="/assets/home/hero-bg.png"
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 1700px, 175vw"
                    className="-z-10 origin-left scale-[1.75] object-cover"
                  />
                  <Logo variant="full" color="white" className="h-auto w-[min(100%,20rem)]" />
                </LogoTile>
                <LogoTile
                  label="A color · fondos claros"
                  file="full-logo.png"
                  className="border border-border bg-card"
                >
                  <Logo variant="full" color="brand" className="h-auto w-[min(100%,17rem)]" />
                </LogoTile>
                <LogoTile label="Blanca · fondos oscuros" file="white-full-logo.png" className="bg-primary">
                  <Logo variant="full" color="white" className="h-auto w-[min(100%,17rem)]" />
                </LogoTile>
                <LogoTile
                  label="Una tinta · negro"
                  file="black-full-logo.png"
                  className="border border-border bg-muted"
                >
                  <Logo variant="full" color="black" className="h-auto w-[min(100%,17rem)]" />
                </LogoTile>
                <LogoTile label="Una tinta · amarillo" file="yellow-full-logo.png" className="bg-foreground">
                  <Logo variant="full" color="yellow" className="h-auto w-[min(100%,17rem)]" />
                </LogoTile>
              </div>
            </Block>

            <Block
              title="Símbolo"
              note="Cuando el espacio es chico o el nombre ya está presente: avatares, favicon, íconos de app, firmas. El orbe es la versión iluminada, reservada para momentos de producto."
            >
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <LogoTile label="Azul" file="dark-blue-logo.png" className="border border-border bg-card">
                  <Logo variant="mark" color="dark-blue" className="size-20" />
                </LogoTile>
                <LogoTile label="Amarillo" file="yellow-logo.png" className="bg-foreground">
                  <Logo variant="mark" color="yellow" className="size-20" />
                </LogoTile>
                <LogoTile label="Negro" file="black-logo.png" className="bg-accent">
                  <Logo variant="mark" color="black" className="size-20" />
                </LogoTile>
                <LogoTile label="Orbe" file="zonda-glowing-orb-dark.png" className="bg-[#030a1c]">
                  <Logo variant="orb" color="dark" className="size-32 mix-blend-screen" />
                </LogoTile>
              </div>
            </Block>

            <Block
              title="Área de protección y tamaño mínimo"
              note="Alrededor del logo dejamos libre, como mínimo, la mitad de la altura del símbolo (x). Nada entra en esa zona: ni texto, ni bordes, ni otros logos."
            >
              <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
                <div className="flex items-center justify-center overflow-hidden rounded-lg border border-border bg-card px-4 py-12">
                  <div className="relative border border-dashed border-secondary p-[var(--x)] [--x:1.25rem] sm:[--x:2rem]">
                    {["left-0 top-0", "right-0 top-0", "bottom-0 left-0", "bottom-0 right-0"].map(
                      (corner) => (
                        <span
                          key={corner}
                          aria-hidden="true"
                          className={cn(
                            "absolute flex size-[var(--x)] items-center justify-center bg-secondary/10 font-mono text-[11px] text-primary",
                            corner,
                          )}
                        >
                          x
                        </span>
                      ),
                    )}
                    <Logo
                      variant="full"
                      color="brand"
                      className="h-[calc(var(--x)*2)] w-auto outline outline-1 outline-secondary/40"
                    />
                  </div>
                </div>
                <dl className="grid content-start gap-px overflow-hidden rounded-lg border border-border bg-border text-sm">
                  {[
                    ["Logo completo · pantalla", "120 px de ancho"],
                    ["Logo completo · impresión", "30 mm de ancho"],
                    ["Símbolo · pantalla", "24 px"],
                    ["Símbolo · impresión", "8 mm"],
                  ].map(([term, value]) => (
                    <div key={term} className="flex items-baseline justify-between gap-4 bg-card px-5 py-4">
                      <dt className="text-muted-foreground">{term}</dt>
                      <dd className="font-semibold">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Block>

            <Block title="Usos incorrectos">
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <Misuse label="No estirar ni comprimir">
                  <Logo variant="full" color="brand" className="h-8 w-auto scale-x-125 scale-y-[1.9]" />
                </Misuse>
                <Misuse label="No rotar">
                  <Logo variant="full" color="brand" className="h-9 w-auto -rotate-12" />
                </Misuse>
                <Misuse label="No cambiar los colores">
                  <Logo variant="full" color="brand" className="h-9 w-auto hue-rotate-[140deg]" />
                </Misuse>
                <Misuse label="No usar con poco contraste">
                  <Logo variant="full" color="yellow" className="h-9 w-auto" />
                </Misuse>
                <Misuse label="No agregar sombras ni efectos">
                  <Logo
                    variant="full"
                    color="brand"
                    className="h-9 w-auto drop-shadow-[5px_6px_0_rgba(34,111,253,0.55)]"
                  />
                </Misuse>
                <Misuse label="No apoyar la versión a color sobre cielos">
                  <Image
                    src="/assets/bg/bg-card-yellow.png"
                    alt=""
                    fill
                    sizes="320px"
                    className="object-cover"
                  />
                  <Logo variant="full" color="brand" className="relative h-9 w-auto" />
                </Misuse>
              </div>
            </Block>
          </Chapter>

          {/* 03 — Color */}
          <Chapter
            id="color"
            number="03"
            title="Azul para sostener, amarillo para señalar."
            lede="El azul carga la confianza y la estructura. El amarillo aparece poco y por eso se nota: marca una palabra, un foco, un dato. Los claros dejan espacio para pensar."
          >
            <Block title="Paleta principal" note="Tocá un valor para copiarlo.">
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {palette.map(({ name, token, hex, onDark, role }) => (
                  <article
                    key={token}
                    className="flex flex-col overflow-hidden rounded-lg border border-border bg-card"
                  >
                    <div
                      className={cn(
                        "flex h-36 items-end p-5",
                        onDark ? "text-white" : "text-foreground",
                      )}
                      style={{ backgroundColor: hex }}
                    >
                      <p className="font-display text-xl font-semibold tracking-tight">{name}</p>
                    </div>
                    <div className="flex flex-1 flex-col gap-4 border-t border-border p-5">
                      <p className="text-sm leading-6 text-muted-foreground">{role}</p>
                      <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 text-foreground">
                        <CopyValue value={hex} />
                        <CopyValue value={`rgb(${hexToRgb(hex).join(", ")})`} />
                        <CopyValue value={`var(${token})`} label={token} />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </Block>

            <Block
              title="Cielo de portada"
              note="Los colores de la malla que pinta la portada. Se usan juntos y fundidos, nunca como rellenos planos."
            >
              <div
                aria-hidden="true"
                className="h-16 rounded-lg"
                style={{
                  background: `linear-gradient(90deg, ${skyColors.map((c) => c.hex).join(", ")})`,
                }}
              />
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-foreground">
                {skyColors.map(({ name, hex }) => (
                  <li key={hex} className="flex items-center gap-2 text-xs">
                    <span
                      aria-hidden="true"
                      className="size-2.5 rounded-full"
                      style={{ backgroundColor: hex }}
                    />
                    <span className="text-muted-foreground">{name}</span>
                    <CopyValue value={hex} />
                  </li>
                ))}
              </ul>
            </Block>

            <Block
              title="Proporción en páginas de lectura"
              note="La portada es cielo de punta a punta. Debajo, donde se lee, la página es mayormente clara y el amarillo nunca supera un detalle."
            >
              <div
                role="img"
                aria-label={`Proporción de uso: ${proportions.map((p) => `${p.name} ${p.share}%`).join(", ")}`}
                className="flex h-16 overflow-hidden rounded-lg border border-border"
              >
                {proportions.map(({ name, hex, share }) => (
                  <span key={name} style={{ backgroundColor: hex, width: `${share}%` }} />
                ))}
              </div>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
                {proportions.map(({ name, hex, share }) => (
                  <li key={name} className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="size-2.5 rounded-full ring-1 ring-border"
                      style={{ backgroundColor: hex }}
                    />
                    {name} · {share}%
                  </li>
                ))}
              </ul>
            </Block>

            <Block
              title="Órbita"
              note="Seis pasteles que solo existen como luz: bordes que giran, halos y separadores. Nunca como relleno plano, ni para texto."
            >
              <div className="grid gap-4 lg:grid-cols-[1fr_1.2fr]">
                <div className="grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-border bg-border">
                  {orbit.map(({ token, hex }) => (
                    <div key={token} className="flex flex-col gap-3 bg-card p-4">
                      <span
                        aria-hidden="true"
                        className="size-9 rounded-full"
                        style={{ backgroundColor: hex }}
                      />
                      <CopyValue value={hex} className="text-foreground" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col justify-center gap-10 rounded-lg bg-foreground px-6 py-10 sm:px-10">
                  <Glow
                    colors={ORBIT_BORDER_COLORS}
                    radius={16}
                    spread={4}
                    blur={16}
                    opacity={0.7}
                    className="w-full"
                  >
                    <div className="rounded-lg bg-[#101827] px-6 py-5 text-sm text-white/80">
                      Halo: rodea un bloque que merece atención.
                    </div>
                  </Glow>
                  <div>
                    <Separator />
                    <p className="mt-4 text-sm text-white/65">
                      Separador: marca un cambio de tema sin cortar la página.
                    </p>
                  </div>
                </div>
              </div>
            </Block>

            <Block
              title="Contraste"
              note="Relación de contraste WCAG de cada combinación, calculada sobre los valores reales. Apuntamos a AA en todo texto."
            >
              <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 xl:grid-cols-3">
                {pairings.map(({ fg, bg, label }) => {
                  const ratio = contrastRatio(fg, bg);
                  const { grade, use } = contrastVerdict(ratio);
                  return (
                    <li key={label} className="flex items-center gap-4 bg-card p-4">
                      <span
                        aria-hidden="true"
                        className="flex size-14 shrink-0 items-center justify-center rounded-md font-display text-xl font-semibold ring-1 ring-border"
                        style={{ color: fg, backgroundColor: bg }}
                      >
                        Aa
                      </span>
                      <div className="min-w-0 text-sm">
                        <p className="font-semibold">{label}</p>
                        <p className="mt-0.5 text-muted-foreground">
                          {ratio.toLocaleString("es-AR")}:1 · {grade}
                        </p>
                        <p className="text-muted-foreground">{use}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Block>
          </Chapter>

          {/* 04 — Tipografía */}
          <Chapter
            id="tipografia"
            number="04"
            title="Dos familias, cada una con su trabajo."
            lede="Plus Jakarta Sans titula. Manrope explica. No sumamos una tercera: la variedad sale del tamaño y del peso, no de la cantidad de fuentes."
          >
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              <article className="rounded-lg bg-primary p-6 text-primary-foreground sm:p-8">
                <p className="font-display text-7xl font-semibold tracking-[-0.05em]">Aa</p>
                <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight">
                  Plus Jakarta Sans
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/75">
                  Titulares y cifras. Peso 600, tracking apretado.
                </p>
                <p className="mt-6 break-words font-display text-sm font-semibold leading-7 text-white/75">
                  {GLYPHS}
                </p>
              </article>
              <article className="rounded-lg border border-border bg-card p-6 sm:p-8">
                <p className="font-sans text-7xl font-medium tracking-[-0.04em]">Aa</p>
                <h3 className="mt-8 font-sans text-2xl font-semibold tracking-tight">Manrope</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Lectura e interfaz. Pesos 400, 500 y 600.
                </p>
                <p className="mt-6 break-words text-sm leading-7 text-muted-foreground">
                  {GLYPHS}
                </p>
              </article>
            </div>

            <Block
              title="Escala"
              note="Los mismos estilos que usa el sitio, empezando por el titular de la portada. Los tamaños van de móvil a escritorio."
            >
              <ul className="border-b border-border">
                {typeScale.map(({ role, spec, className, sample }) => (
                  <li
                    key={role}
                    className="grid gap-4 border-t border-border py-8 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-10"
                  >
                    <div>
                      <p className="text-sm font-semibold">{role}</p>
                      <p className="mt-1.5 font-mono text-[11px] leading-5 text-muted-foreground">
                        {spec}
                      </p>
                    </div>
                    <p className={className}>{sample}</p>
                  </li>
                ))}
              </ul>
            </Block>

            <Block title="Reglas">
              <div className="grid gap-10 sm:grid-cols-2">
                <RuleList
                  kind="do"
                  items={[
                    "Mayúscula solo al inicio de la oración y en nombres propios.",
                    "Titulares de hasta tres líneas; párrafos de 60 a 75 caracteres de ancho.",
                    "Una sola palabra en amarillo por titular, y solo sobre fondo oscuro.",
                    "Texto alineado a la izquierda. Centrado solo en portadas y cierres.",
                  ]}
                />
                <RuleList
                  kind="dont"
                  items={[
                    "Titulares en mayúsculas sostenidas o en cursiva.",
                    "Pesos por debajo de 400 o tracking abierto en titulares.",
                    "Texto en degradé o con contorno.",
                    "Texto sobre un cielo sin velo o halo que asegure el contraste.",
                  ]}
                />
              </div>
            </Block>
          </Chapter>

          {/* 05 — Cielos */}
          <Chapter
            id="cielos"
            number="05"
            title="El fondo es un cielo, no un degradé."
            lede="Nuestros fondos son cielos atravesados por viento: azules, celestes y una luz cálida que se cuela. El de la portada es el punto de partida; los demás son variaciones para cuando hace falta más calma o más noche."
          >
            <Block title="Biblioteca">
              <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {skies.map(({ name, file, use }) => (
                  <li key={file} className="overflow-hidden rounded-lg border border-border bg-card">
                    <div className="relative aspect-video">
                      <Image
                        src={`/assets/${file}`}
                        alt=""
                        fill
                        sizes="(min-width: 1280px) 320px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <p className="font-display text-base font-semibold tracking-tight">{name}</p>
                      <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{use}</p>
                      <p className="mt-3 font-mono text-[11px] text-muted-foreground">{file}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Block>

            <Block
              title="Cielos generados"
              note="Cuando el fondo tiene que adaptarse a cualquier formato, lo pintamos en código con los mismos colores."
            >
              <div className="grid gap-4 md:grid-cols-2">
                <figure>
                  <Gradient
                    points={heroMesh}
                    softness={0.34}
                    grain={0.5}
                    className="h-56 overflow-hidden rounded-lg"
                  />
                  <figcaption className="mt-3 text-sm leading-6 text-muted-foreground">
                    <span className="font-semibold text-foreground">Malla.</span> Violeta,
                    azul y celeste fundidos, con grano. Es la portada del inicio.
                  </figcaption>
                </figure>
                <figure>
                  <div className="relative h-56 overflow-hidden rounded-lg bg-primary">
                    <Shader variant="filaments" ink="#f8f9ff" bg="#0e3c75" />
                  </div>
                  <figcaption className="mt-3 text-sm leading-6 text-muted-foreground">
                    <span className="font-semibold text-foreground">Filamentos.</span> Datos
                    que fluyen, dibujados como hebras sobre Deep blue.
                  </figcaption>
                </figure>
              </div>
            </Block>

            <Block title="Reglas">
              <div className="grid gap-10 sm:grid-cols-2">
                <RuleList
                  kind="do"
                  items={[
                    "Un solo cielo por pantalla o por página impresa.",
                    "Texto sobre la zona más calma de la imagen.",
                    "Un velo o halo detrás del texto cuando el cielo es claro.",
                  ]}
                />
                <RuleList
                  kind="dont"
                  items={[
                    "Degradés lineales de dos colores o paletas ajenas al azul y la luz cálida.",
                    "Cielos como fondo de párrafos largos.",
                    "Recortar, teñir o saturar los archivos originales.",
                  ]}
                />
              </div>
            </Block>
          </Chapter>

          {/* 06 — Ilustración */}
          <Chapter
            id="ilustracion"
            number="06"
            title="Grabados clásicos con tecnología de hoy."
            lede="Ilustramos con grabado a una tinta: Hipócrates, Higía y las instituciones de la salud, dibujados como en un tratado antiguo pero con un teléfono o una tableta en la mano. Es nuestra manera de decir que modernizamos sin romper con lo que vino antes."
          >
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              <figure className="relative isolate min-h-80 overflow-hidden rounded-lg md:row-span-2 md:min-h-[34rem]">
                <Image
                  src="/assets/home/hero-bg.png"
                  alt=""
                  fill
                  sizes="(min-width: 768px) 480px, 100vw"
                  className="-z-10 object-cover"
                />
                <Image
                  src="/assets/home/hero.png"
                  alt="Grabado de Hipócrates guiñando un ojo, con un estetoscopio al cuello y un teléfono en la mano."
                  width={1378}
                  height={1080}
                  sizes="(min-width: 768px) 480px, 100vw"
                  className="absolute inset-x-0 bottom-0 h-auto w-full"
                />
                <figcaption className="p-5 text-sm font-medium text-white">
                  Personaje sobre cielo claro
                </figcaption>
              </figure>
              <figure className="relative isolate min-h-64 overflow-hidden rounded-lg bg-[linear-gradient(122deg,#021c33_0%,#022a4c_48%,#043a66_100%)]">
                <Image
                  src="/assets/home/modernize-higea.png"
                  alt="Grabado de Higía con una serpiente al hombro, usando una tableta."
                  width={1416}
                  height={989}
                  sizes="(min-width: 768px) 420px, 100vw"
                  className="absolute -bottom-4 right-0 h-[92%] w-auto max-w-none"
                />
                <figcaption className="relative p-5 text-sm font-medium text-white">
                  Tinta clara sobre azul profundo
                </figcaption>
              </figure>
              <figure className="relative min-h-64 overflow-hidden rounded-lg border border-border bg-muted">
                <Image
                  src="/assets/sectors/gov/rosada.png"
                  alt="Grabado de la fachada de la Casa Rosada."
                  width={1274}
                  height={972}
                  sizes="(min-width: 768px) 420px, 100vw"
                  className="absolute -bottom-2 right-4 h-[88%] w-auto max-w-none"
                />
                <figcaption className="relative p-5 text-sm font-medium">
                  Institución sobre Cloud
                </figcaption>
              </figure>
            </div>

            <Block title="Reglas">
              <div className="grid gap-10 sm:grid-cols-2">
                <RuleList
                  kind="do"
                  items={[
                    "Una sola tinta: azul sobre claro, celeste sobre oscuro.",
                    "Una ilustración por sección, grande y apoyada en el borde inferior.",
                    "Un gesto de humor leve —un guiño, un teléfono— y nada más.",
                    "Edificios y personajes reconocibles del sector de cada página.",
                  ]}
                />
                <RuleList
                  kind="dont"
                  items={[
                    "Ilustración vectorial plana, 3D o personajes genéricos de banco de imágenes.",
                    "Grabados a varios colores o con relleno.",
                    "Usar el grabado como textura de fondo o repetirlo en patrón.",
                    "Caricaturizar pacientes o profesionales reales.",
                  ]}
                />
              </div>
            </Block>
          </Chapter>

          {/* 07 — Interfaz */}
          <Chapter
            id="interfaz"
            number="07"
            title="Vidrio sobre cielo, y bordes que orbitan."
            lede="El producto se muestra como piezas de vidrio flotando sobre nuestros cielos. Los componentes del sitio son sobrios en reposo y se encienden con el borde de órbita cuando alguien interactúa."
          >
            <Block
              title="Imagen de producto"
              note="Mostramos fragmentos de interfaz, no pantallas enteras: una tarjeta, un estado, una conexión. Siempre con datos verosímiles de la región."
            >
              <div className="grid gap-4 md:grid-cols-2">
                <Image
                  src="/assets/home/products/1.png"
                  alt="Logos de financiadores conectados entre sí y a una pastilla de vidrio que dice «Conectado a Zonda»."
                  width={1732}
                  height={908}
                  sizes="(min-width: 768px) 480px, 100vw"
                  className="h-auto w-full rounded-lg"
                />
                <Image
                  src="/assets/solutions/fraud/zonda-floating-pills.png"
                  alt="Pastillas de vidrio con datos de salud —pacientes, tratamiento, turnos, pagos— alrededor del orbe de Zonda."
                  width={1672}
                  height={941}
                  sizes="(min-width: 768px) 480px, 100vw"
                  className="h-auto w-full rounded-lg"
                />
              </div>
            </Block>

            <Block
              title="Botones"
              note="Un solo botón principal por pantalla. El oscuro con borde de órbita es nuestra acción principal en todo el sitio."
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-wrap items-center gap-4 rounded-lg border border-border bg-card p-6 sm:p-8">
                  <Button variant="black">Agendar una demo</Button>
                  <Button variant="outline">Ver la plataforma</Button>
                  <Button variant="ghost">Cómo funciona</Button>
                </div>
                <div className="flex flex-wrap items-center gap-4 rounded-lg bg-primary p-6 sm:p-8">
                  <Button variant="black">Contactar</Button>
                  <Button variant="inverse">Ver casos</Button>
                  <Button variant="accent">Empezar</Button>
                </div>
              </div>
            </Block>

            <Block
              title="Tarjetas"
              note="Radio de 16 px y borde de 1 px en reposo. Al pasar el cursor o recibir foco aparece el borde de órbita."
            >
              <div className="grid gap-4 md:grid-cols-2">
                <Card hoverable href="/use-cases/multi-payer-care" aria-label="Multifinanciador">
                  <CardTitle>Multifinanciador</CardTitle>
                  <CardContent className="text-muted-foreground">
                    Conectate una sola vez y operá con todos tus financiadores.
                  </CardContent>
                  <CardCTA tabIndex={-1} aria-hidden="true" />
                </Card>
                <Card
                  variant="dark"
                  hoverable
                  href="/use-cases/fraud-risk-prevention"
                  aria-label="Fraude y riesgo"
                >
                  <CardTitle>Fraude y riesgo</CardTitle>
                  <CardContent className="text-primary-foreground/75">
                    Detectá inconsistencias antes del pago, con evidencia para actuar.
                  </CardContent>
                  <CardCTA tabIndex={-1} aria-hidden="true" />
                </Card>
              </div>
            </Block>

            <Block title="Forma">
              <dl className="grid gap-px overflow-hidden rounded-lg border border-border bg-border text-sm sm:grid-cols-2">
                {[
                  ["Radio de tarjetas y banners", "16 px"],
                  ["Botones y pastillas", "Radio completo"],
                  ["Borde en reposo", "1 px · #D3DAE8"],
                  ["Anillo de foco", "2 px · Health yellow"],
                  ["Ancho máximo de página", "1280 px"],
                  ["Movimiento", "200–300 ms, se apaga con «reducir movimiento»"],
                ].map(([term, value]) => (
                  <div key={term} className="flex items-baseline justify-between gap-4 bg-card px-5 py-4">
                    <dt className="text-muted-foreground">{term}</dt>
                    <dd className="text-right font-semibold">{value}</dd>
                  </div>
                ))}
              </dl>
            </Block>
          </Chapter>

          {/* 08 — Voz */}
          <Chapter
            id="voz"
            number="08"
            title="Hablamos como alguien que conoce el oficio."
            lede="Clara, segura y práctica también cuando escribe. Le hablamos a quien gestiona salud todos los días: sabe de qué se trata y no necesita que le vendan humo."
          >
            <div className="mt-12 grid gap-x-12 sm:grid-cols-2">
              {voiceRules.map(([title, copy]) => (
                <div key={title} className="border-t border-border py-6">
                  <h3 className="font-display text-lg font-semibold tracking-tight">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p>
                </div>
              ))}
            </div>

            <Block title="Así sí, así no">
              <ul className="grid gap-4">
                {voicePairs.map(({ say, avoid, why }) => (
                  <li
                    key={say}
                    className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2"
                  >
                    <div className="bg-card p-6">
                      <p className="flex items-center gap-2 text-xs font-semibold text-primary">
                        <Check aria-hidden="true" strokeWidth={2.5} className="size-4" />
                        Decimos
                      </p>
                      <p className="mt-3 font-display text-xl font-semibold leading-snug tracking-tight">
                        {say}
                      </p>
                      <p className="mt-3 text-sm text-muted-foreground">{why}</p>
                    </div>
                    <div className="bg-muted p-6">
                      <p className="flex items-center gap-2 text-xs font-semibold text-[#b42318]">
                        <X aria-hidden="true" strokeWidth={2.5} className="size-4" />
                        No decimos
                      </p>
                      <p className="mt-3 font-display text-xl font-medium leading-snug tracking-tight text-muted-foreground">
                        {avoid}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Block>

            <Block title="Vocabulario">
              <div className="grid gap-8 sm:grid-cols-2">
                {(["say", "avoid"] as const).map((kind) => (
                  <div key={kind}>
                    <p className="text-sm font-semibold">
                      {kind === "say" ? "Palabras nuestras" : "Palabras que evitamos"}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {vocabulary[kind].map((word) => (
                        <li
                          key={word}
                          className={cn(
                            "rounded-full border px-3.5 py-1.5 text-sm",
                            kind === "say"
                              ? "border-primary/25 bg-card text-foreground"
                              : "border-border bg-muted text-muted-foreground line-through decoration-[#b42318]/60",
                          )}
                        >
                          {word}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Block>
          </Chapter>

          {/* 09 — Recursos */}
          <Chapter
            id="recursos"
            number="09"
            title="Todo listo para usar."
            lede="Archivos y valores originales. Si necesitás un formato que no está acá, pedilo antes de improvisarlo."
          >
            <div className="mt-12 grid gap-4 lg:grid-cols-2">
              <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
                <h3 className="font-display text-xl font-semibold tracking-tight">Logos</h3>
                <ul className="mt-5 grid gap-px overflow-hidden rounded-md border border-border bg-border text-sm">
                  {[
                    ["Logo completo · color", "full-logo.png"],
                    ["Logo completo · blanco", "white-full-logo.png"],
                    ["Logo completo · negro", "black-full-logo.png"],
                    ["Símbolo · azul", "dark-blue-logo.png"],
                    ["Símbolo · amarillo", "yellow-logo.png"],
                    ["Orbe · fondo oscuro", "zonda-glowing-orb-dark.png"],
                    ["Orbe · fondo claro", "zonda-glowing-orb-light.png"],
                  ].map(([label, file]) => (
                    <li key={file}>
                      <a
                        href={`/assets/logos/${file}`}
                        download
                        className="flex items-center justify-between gap-4 bg-card px-4 py-3 outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
                      >
                        {label}
                        <span className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
                          PNG <Download aria-hidden="true" className="size-3.5" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <div className="rounded-lg bg-foreground p-6 text-white sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display text-xl font-semibold tracking-tight">
                      Tokens CSS
                    </h3>
                    <CopyValue value={cssTokens} label="Copiar todo" className="text-white" />
                  </div>
                  <pre className="mt-5 overflow-x-auto font-mono text-xs leading-6 text-white/75">
                    {cssTokens}
                  </pre>
                </div>
                <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    Tipografías
                  </h3>
                  <ul className="mt-4 grid gap-2 text-sm">
                    {[
                      ["Plus Jakarta Sans", "https://fonts.google.com/specimen/Plus+Jakarta+Sans"],
                      ["Manrope", "https://fonts.google.com/specimen/Manrope"],
                    ].map(([name, href]) => (
                      <li key={name}>
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-md font-semibold text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          {name} en Google Fonts
                          <ArrowUpRight aria-hidden="true" className="size-4" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Chapter>
        </div>
      </div>

      <CtaBanner
        title={<>Una misma marca, en cada punto de contacto.</>}
        subtitle="¿Vas a producir una pieza y tenés dudas? Escribinos antes de publicarla y la revisamos juntos."
        buttonText="Hablar con el equipo"
      />
    </main>
  );
}
