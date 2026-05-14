import Link from 'next/link';

import { Button } from './ui/button';

export function NotFoundPage() {
  return (
    <main className="min-h-screen bg-background pb-20 pt-32 text-foreground">
      <section className="layout-shell flex flex-col items-center justify-center gap-10 text-center">
        <div className="flex max-w-3xl flex-col items-center gap-5">
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-[color:rgba(21,27,43,0.58)]">
            Error 404
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-[0.95] sm:text-5xl lg:text-6xl">
            Esta página no existe
          </h1>
          <p className="max-w-2xl text-pretty text-lg font-medium leading-relaxed text-on-surface-variant sm:text-xl">
            Es posible que el enlace esté desactualizado o que la página haya
            sido movida. Podés volver al inicio o contactar al equipo si
            necesitás ayuda para encontrar algo específico.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/">Volver al inicio</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contacto">Contactanos</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
