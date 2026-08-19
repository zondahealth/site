"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { Logo } from "@/components/layout/Logo";
import Gradient from "@/components/ui/gradient/Gradient";

const IMAGE_SPOT_RADIUS = 420;

export function Hero() {
  const revealRef = useRef<HTMLImageElement>(null);

  function setImageSpot(x: number, y: number) {
    const el = revealRef.current;
    if (!el) return;
    el.style.setProperty("--sx", `${x}px`);
    el.style.setProperty("--sy", `${y}px`);
    el.style.opacity = "1";
  }

  function onPointerMove(e: PointerEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setImageSpot(e.clientX - rect.left, e.clientY - rect.top);
  }

  return (
    <section
      aria-label="Hero"
      className="relative overflow-x-clip"
      onPointerMove={onPointerMove}
    >
      <Gradient
        points={[
          { color: "#2a13c8", x: 0.02, y: 0.52 },
          { color: "var(--primary)", x: 0.3, y: 0.9 },
          { color: "#1a6cf5", x: 0.14, y: 0.16 },
          { color: "#18d8f0", x: 0.4, y: 0.24 },
          { color: "#1f7bf8", x: 0.62, y: 0.6 },
          { color: "#1fd4f5", x: 0.96, y: 0.66 },
          { color: "var(--primary)", x: 0.6, y: 0.04 },
        ]}
        softness={0.34}
        grain={0.5}
        className="min-h-[760px] md:h-[min(100svh,800px)] md:min-h-[600px]"
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
          <img
            ref={revealRef}
            src="/assets/home/hero-revealed.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-left-top opacity-0 transition-opacity duration-500 ease-out"
            style={{
              WebkitMaskImage: `radial-gradient(circle ${IMAGE_SPOT_RADIUS}px at var(--sx, -999px) var(--sy, -999px), #000 0%, rgba(0,0,0,0.9) 25%, rgba(0,0,0,0.42) 55%, transparent 100%)`,
              maskImage: `radial-gradient(circle ${IMAGE_SPOT_RADIUS}px at var(--sx, -999px) var(--sy, -999px), #000 0%, rgba(0,0,0,0.9) 25%, rgba(0,0,0,0.42) 55%, transparent 100%)`,
            }}
          />
        </div>
        <div className="relative mx-auto flex min-h-[760px] max-w-7xl flex-col overflow-visible md:h-full md:min-h-0">
          <div
            className="pointer-events-none relative z-[5] order-2 mt-auto flex w-full shrink-0 justify-center overflow-visible pt-10 sm:pt-12 md:absolute md:inset-y-0 md:left-3/4 md:right-0 md:mt-0 md:block md:w-auto md:pt-0 lg:inset-0"
            aria-hidden="true"
          >
            <Image
              src="/assets/home/heracles-aurora.png"
              alt=""
              width={2356}
              height={1792}
              priority
              sizes="(min-width: 1280px) 900px, (min-width: 1024px) 820px, (min-width: 768px) 760px, 520px"
              className="relative h-auto w-[520px] max-w-[calc(100vw-2rem)] opacity-60 md:absolute md:bottom-0 md:left-[-150px] md:w-[760px] md:max-w-none md:opacity-85 lg:left-auto lg:-right-[350px] lg:w-[820px] xl:-right-[260px] xl:w-[900px]"
            />
          </div>
          <div className="relative z-10 order-1 flex flex-col items-center px-6 pt-24 text-center sm:px-10 md:absolute md:inset-0 md:h-full md:items-start md:justify-end md:px-10 md:pb-20 md:pt-32 md:text-left lg:px-16 lg:pb-24 xl:pt-40">
            <Logo
              variant="full"
              color="white"
              priority
              className="mb-4 h-8 w-auto sm:h-9"
            />
            <h1 className="font-display max-w-xl text-4xl font-semibold tracking-tight text-white sm:max-w-[32rem] sm:text-5xl md:max-w-[61%] lg:text-6xl xl:max-w-xl">
              La Infrastructura de
              <br /> Datos de Salud <br />
              para <span className="text-accent">Latinoamérica</span>
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white font-medium sm:text-lg md:max-w-[55%] lg:max-w-[52%] xl:max-w-md">
              Conectate con zonda para desarrollar una capa de inteligencia de
              salud unificada sin reemplazar lo que ya existe.
            </p>
          </div>
        </div>
      </Gradient>
    </section>
  );
}
