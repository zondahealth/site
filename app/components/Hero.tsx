'use client';

import Link from 'next/link';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="pt-20">
      <div className="layout-shell">
        <div className="relative flex min-h-[max(30rem,calc(98dvh-5rem))] flex-col overflow-hidden rounded-md bg-zonda-blue-dark sm:p-12 lg:p-16">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/bg/styling/waves.mov"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            ref={(el) => {
              if (el) el.playbackRate = 0.9;
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,20,54,0.26)_0%,rgba(10,26,72,0.34)_38%,rgba(7,17,48,0.56)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(230,255,26,0.08),transparent_24%),radial-gradient(circle_at_50%_75%,rgba(34,111,253,0.1),transparent_32%)]" />

          <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center px-6 text-center sm:px-10">
            <h1 className="w-full max-w-3xl text-balance [font-family:var(--font-display-family)] text-4xl font-bold leading-[0.96] text-[color:rgba(248,250,255,0.96)] sm:text-5xl lg:text-7xl">
              La infraestructura de datos de salud para{' '}
              <span className="text-[color:var(--color-vitality-yellow)]">
                Latinoamérica
              </span>
            </h1>
            <div className="max-w-3xl">
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg font-bold leading-relaxed text-[color:rgba(248,250,255,0.82)] sm:text-xl">
                Zonda conecta organizaciones, profesionales y pacientes en una
                capa de inteligencia clínica unificada sin reemplazar lo que ya
                existe.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="min-w-44">
                  <Link href="/platform">Ver la plataforma</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="min-w-44 !text-white border-[color:rgba(178,197,255,0.2)] bg-[color:rgba(17,19,28,0.24)] shadow-none hover:!text-white hover:border-[color:rgba(178,197,255,0.34)] hover:bg-[color:rgba(25,27,36,0.48)]"
                >
                  <Link href="/contact">Contactanos</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
