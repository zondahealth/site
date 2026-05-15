'use client';

import Link from 'next/link';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="pt-0">
        <div className="relative flex h-[100dvh] min-h-[30rem] flex-col overflow-hidden bg-zonda-blue-dark sm:p-12 lg:p-16">
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
                  <Link href="/contacto">Hablemos</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
