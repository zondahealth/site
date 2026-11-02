"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, type PointerEvent } from "react";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/button/button";
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
      className="relative overflow-clip"
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
        className="min-h-[640px] sm:min-h-[720px] md:h-[min(100svh,680px)] md:min-h-[560px] lg:h-[min(100svh,960px)] lg:min-h-[800px] xl:h-[min(100svh,1040px)] xl:min-h-[880px]"
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
            className="absolute inset-0 h-full w-full object-cover object-left-top opacity-0 transition-opacity duration-500 ease-out motion-reduce:transition-none"
            style={{
              WebkitMaskImage: `radial-gradient(circle ${IMAGE_SPOT_RADIUS}px at var(--sx, -999px) var(--sy, -999px), #000 0%, rgba(0,0,0,0.9) 25%, rgba(0,0,0,0.42) 55%, transparent 100%)`,
              maskImage: `radial-gradient(circle ${IMAGE_SPOT_RADIUS}px at var(--sx, -999px) var(--sy, -999px), #000 0%, rgba(0,0,0,0.9) 25%, rgba(0,0,0,0.42) 55%, transparent 100%)`,
            }}
          />
        </div>
        <div className="relative z-10 mx-auto h-full min-h-[640px] w-full max-w-[96rem] overflow-visible sm:min-h-[720px]">
          <div className="relative z-10 flex min-h-[640px] h-full flex-col items-center justify-center px-6 pt-24 pb-16 text-center sm:min-h-[720px] sm:px-10 md:items-start md:px-10 md:py-28 md:text-left lg:px-16 xl:px-20">
            <div className="flex w-max max-w-full flex-col items-center md:items-start">
              <Logo
                variant="full"
                color="white"
                priority
                className="mb-4 h-8 w-auto sm:h-9 lg:mb-6 lg:h-10 xl:h-11"
              />
              <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4rem] xl:leading-[1.05]">
                La infraestructura de
                <br /> datos de salud <br />
                para <span className="text-accent">Latinoamérica</span>
              </h1>
              <p className="mt-4 max-w-md text-base leading-relaxed font-medium text-white sm:text-lg lg:mt-6 lg:max-w-lg lg:text-xl xl:max-w-lg">
                Conectate con Zonda para desarrollar una capa de inteligencia de
                salud unificada, sin reemplazar lo que ya existe.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start lg:mt-10">
                <Button variant="black" asChild>
                  <Link href="/contact">Contactar</Link>
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
  );
}
