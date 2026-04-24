'use client';

import Image from 'next/image';
import { useState } from 'react';

export function Hero() {
  const [aura, setAura] = useState({ x: 0, y: 0, active: false });

  return (
    <section
      className="relative isolate h-[100dvh] min-h-[42rem] overflow-hidden bg-zonda-blue-dark pt-16 sm:pt-20 lg:pt-24"
      onMouseMove={({ clientX, clientY, currentTarget }) => {
        const rect = currentTarget.getBoundingClientRect();
        setAura({
          x: clientX - rect.left,
          y: clientY - rect.top,
          active: true,
        });
      }}
      onMouseLeave={() => {
        setAura((current) => ({ ...current, active: false }));
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 18% 22%, color-mix(in srgb, var(--color-zonda-blue) 42%, transparent), transparent 28%),
            radial-gradient(circle at 82% 18%, color-mix(in srgb, var(--color-vitality-yellow) 12%, transparent), transparent 22%),
            radial-gradient(circle at 56% 78%, color-mix(in srgb, var(--color-zonda-yellow) 14%, transparent), transparent 28%),
            linear-gradient(
              135deg,
              color-mix(in srgb, var(--color-zonda-blue-dark) 92%, var(--color-zonda-dark) 8%) 0%,
              color-mix(in srgb, var(--color-zonda-blue) 72%, var(--color-zonda-blue-dark) 28%) 48%,
              color-mix(in srgb, var(--color-zonda-blue-dark) 96%, var(--color-zonda-dark) 4%) 100%
            )
          `,
        }}
      />
      <div
        className="absolute inset-0 opacity-18 mix-blend-screen"
        style={{
          backgroundImage: "url('/misc/background.png')",
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_36%,rgba(5,16,44,0.18)_100%)]" />
      <div
        className="pointer-events-none absolute size-[16rem] rounded-full transition-[opacity,transform] duration-200 ease-out"
        style={{
          left: aura.x,
          top: aura.y,
          opacity: aura.active ? 0.46 : 0,
          transform: `translate(-50%, -50%) scale(${aura.active ? 1 : 0.94})`,
          background: `
            radial-gradient(
              circle,
              color-mix(in srgb, white 10%, transparent) 0%,
              color-mix(in srgb, var(--color-zonda-yellow) 8%, transparent) 18%,
              color-mix(in srgb, var(--color-zonda-yellow) 5%, transparent) 38%,
              color-mix(in srgb, var(--color-vitality-yellow) 2.5%, transparent) 54%,
              transparent 70%
            )
          `,
          mixBlendMode: 'screen',
          filter: 'blur(16px)',
        }}
      />

      <div className="relative z-10 mx-auto flex h-full min-h-[42rem] max-w-7xl flex-col items-center px-4 sm:px-6 md:flex-row md:items-stretch lg:px-8">
        {/* Left Section */}
        <div className="flex w-full flex-col items-start justify-center py-8 md:w-1/2 md:py-0">
          <h1 className="mb-4 max-w-[12ch] text-4xl font-extrabold leading-[1.02] text-vitality-yellow sm:text-5xl lg:text-6xl">
            Intelligence for LATAM Healthcare
          </h1>
          <p className="mb-6 max-w-xl text-lg leading-8 text-[color:oklch(0.96_0.01_258_/_0.88)]">
            We unify fragmented healthcare information into a structured,
            navigable stream, helping teams move from patient-level detail to
            organization-wide decisions with clarity, speed, and control.
          </p>
        </div>

        {/* Right Section */}
        <div className="mt-12 flex w-full items-center justify-center md:mt-0 md:w-1/2">
          <div className="relative aspect-[4/3] w-full max-w-[42rem]">
            <Image
              src="/misc/world-rings.png"
              alt="Illustrated globe representing connected healthcare intelligence across Latin America."
              fill
              className="object-contain drop-shadow-[0_18px_38px_rgba(8,18,46,0.42)]"
              sizes="(max-width: 768px) 72vw, 28rem"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
