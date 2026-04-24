'use client';

import Link from 'next/link';

import { Button } from './ui/button';

export function Hero() {
  return (
    <section>
      <div className="layout-shell">
        <div className="relative aspect-[16/10] min-h-[20rem] overflow-hidden rounded-md border border-white/10 bg-zonda-blue-dark shadow-[0_36px_120px_-42px_rgba(8,18,46,0.6)] sm:min-h-[22rem] lg:min-h-[26rem]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/bg/waves/waves.mov"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            // Play at half speed for a slower effect
            ref={(el) => {
              if (el) {
                el.playbackRate = 0.9;
              }
            }}
          />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,20,54,0.26)_0%,rgba(10,26,72,0.34)_38%,rgba(7,17,48,0.56)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(230,255,26,0.08),transparent_24%),radial-gradient(circle_at_50%_75%,rgba(34,111,253,0.1),transparent_32%)]" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center sm:px-10">
            <div className="max-w-3xl">
              <h1 className="text-balance [font-family:var(--font-display-family)] text-4xl font-bold leading-[0.96] text-white sm:text-5xl lg:text-7xl">
                Intelligence for{' '}
                <span className="text-[color:var(--color-vitality-yellow)]">
                  LATAM Healthcare
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-8 text-white/82 sm:text-lg">
                We unify fragmented healthcare information into a structured,
                navigable stream, helping teams move from patient-level detail
                to organization-wide decisions with clarity, speed, and control.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="min-w-44">
                  <Link href="/get-started">Get Started</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="min-w-44 border-white/18 bg-white/10 text-white shadow-none hover:border-white/28 hover:bg-white/16 hover:text-white"
                >
                  <Link href="/about">See Platform</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
