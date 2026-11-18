"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { heroNetworkShaderPropsForViewport } from "@/components/home/heroNetworkConfig";

const NetworkShader = dynamic(() => import("@/components/NetworkShader"), {
  ssr: false,
});

const HeroNetworkShaderDev =
  process.env.NODE_ENV === "development"
    ? dynamic(() => import("@/components/home/HeroNetworkShaderDev"), {
        ssr: false,
      })
    : null;

function useIsNarrowViewport() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return isMobile;
}

export function HeroNetworkLayer() {
  const isMobile = useIsNarrowViewport();
  if (isMobile === null) return null;

  if (HeroNetworkShaderDev) {
    return <HeroNetworkShaderDev isMobile={isMobile} />;
  }

  return (
    <NetworkShader
      {...heroNetworkShaderPropsForViewport(isMobile)}
      style={{ zIndex: 1 }}
    />
  );
}
