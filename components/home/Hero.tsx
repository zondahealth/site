"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef, useState, type PointerEvent } from "react";
import { HeroNetworkLayer } from "@/components/home/HeroNetworkLayer";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/button/button";

const IMAGE_SPOT_RADIUS = 420;
const HERO_VEIL_ID = "hero-loading-veil";

function pendingHeroAssets(root: ParentNode) {
  return [...root.querySelectorAll<HTMLImageElement>("[data-hero-asset]")].filter(
    (img) => !img.complete && getComputedStyle(img).display !== "none",
  );
}

function showHeroVeil() {
  if (document.getElementById(HERO_VEIL_ID)) return;
  const veil = document.createElement("div");
  veil.id = HERO_VEIL_ID;
  veil.setAttribute("aria-hidden", "true");
  document.body.appendChild(veil);
}

function hideHeroVeil() {
  document.getElementById(HERO_VEIL_ID)?.remove();
}

export function Hero() {
  const revealRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const pending = pendingHeroAssets(section);
    if (pending.length === 0) {
      hideHeroVeil();
      setReady(true);
      return;
    }

    showHeroVeil();
    let left = pending.length;
    let cancelled = false;
    const cleanups: Array<() => void> = [];
    const done = () => {
      left -= 1;
      if (cancelled || left > 0) return;
      Promise.all(
        pending.map((img) => img.decode?.().catch(() => undefined)),
      ).then(() => {
        if (!cancelled) setReady(true);
      });
    };
    pending.forEach((img) => {
      let settled = false;
      const finish = () => {
        if (settled) return;
        settled = true;
        done();
      };
      img.addEventListener("load", finish);
      img.addEventListener("error", finish);
      cleanups.push(() => {
        img.removeEventListener("load", finish);
        img.removeEventListener("error", finish);
      });
      if (img.complete) finish();
    });
    const timeout = window.setTimeout(() => {
      if (!cancelled) setReady(true);
    }, 12000);

    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
      cleanups.forEach((cleanup) => cleanup());
      hideHeroVeil();
    };
  }, []);

  useLayoutEffect(() => {
    if (!ready) return;
    hideHeroVeil();
  }, [ready]);

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
      ref={sectionRef}
      aria-label="Hero"
      aria-busy={!ready}
      className="relative overflow-clip"
      onPointerMove={onPointerMove}
    >
      <div className="relative isolate overflow-hidden bg-background min-h-[640px] sm:min-h-[720px] md:h-[min(100svh,680px)] md:min-h-[560px] lg:h-[min(100svh,960px)] lg:min-h-[800px] xl:h-[min(100svh,1040px)] xl:min-h-[880px]">
        <div
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
          aria-hidden="true"
        >
          <Image
            src="/assets/home/hero-nebula.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            data-hero-asset=""
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
        <HeroNetworkLayer />
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
        </div>
      </div>
    </section>
  );
}
