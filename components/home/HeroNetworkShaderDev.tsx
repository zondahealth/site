"use client";

import { useEffect, useRef } from "react";
import { Leva, useControls } from "leva";
import ParticleWorld from "@/components/ParticleWorld";
import {
  heroNetworkShaderProps,
  heroNetworkShaderPropsForViewport,
} from "@/components/home/heroNetworkConfig";

const shaderStyle = { zIndex: 1 };

export default function HeroNetworkShaderDev({
  isMobile,
}: {
  isMobile: boolean;
}) {
  const initial = heroNetworkShaderPropsForViewport(isMobile);
  const [controls, set] = useControls("Particle", () => ({
    dustColor: heroNetworkShaderProps.dustColor,
    clusterColor: heroNetworkShaderProps.clusterColor,
    streamColor: heroNetworkShaderProps.streamColor,
    accentColor: heroNetworkShaderProps.accentColor,
    intensity: {
      value: initial.intensity ?? heroNetworkShaderProps.intensity,
      min: 0,
      max: 2,
      step: 0.01,
    },
    density: {
      value: initial.density ?? heroNetworkShaderProps.density,
      min: 0.1,
      max: 2.5,
      step: 0.01,
    },
    dustAmount: {
      value: heroNetworkShaderProps.dustAmount,
      min: 0,
      max: 2,
      step: 0.01,
    },
    atmosphereIntensity: {
      value: heroNetworkShaderProps.atmosphereIntensity,
      min: 0,
      max: 2,
      step: 0.01,
    },
    speed: {
      value: heroNetworkShaderProps.speed,
      min: 0,
      max: 3,
      step: 0.01,
    },
    vanishingX: {
      value: initial.vanishingX ?? heroNetworkShaderProps.vanishingX,
      min: 0,
      max: 1,
      step: 0.01,
    },
    horizon: {
      value: initial.horizon ?? heroNetworkShaderProps.horizon,
      min: 0,
      max: 1,
      step: 0.01,
    },
    fadeLeft: initial.fadeLeft !== null,
    fadeLeftStart: {
      value: heroNetworkShaderProps.fadeLeft[0],
      min: 0,
      max: 1,
      step: 0.01,
    },
    fadeLeftEnd: {
      value: heroNetworkShaderProps.fadeLeft[1],
      min: 0,
      max: 1,
      step: 0.01,
    },
  }));

  const previousMobile = useRef(isMobile);
  useEffect(() => {
    if (previousMobile.current === isMobile) return;
    previousMobile.current = isMobile;
    const next = heroNetworkShaderPropsForViewport(isMobile);
    set({
      intensity: next.intensity ?? heroNetworkShaderProps.intensity,
      density: next.density ?? heroNetworkShaderProps.density,
      vanishingX: next.vanishingX ?? heroNetworkShaderProps.vanishingX,
      horizon: next.horizon ?? heroNetworkShaderProps.horizon,
      fadeLeft: next.fadeLeft !== null,
    });
  }, [isMobile, set]);

  return (
    <>
      <Leva
        titleBar={{ title: "Particle world", drag: true, filter: true }}
      />
      <ParticleWorld
        {...heroNetworkShaderProps}
        dustColor={controls.dustColor}
        clusterColor={controls.clusterColor}
        streamColor={controls.streamColor}
        accentColor={controls.accentColor}
        intensity={controls.intensity}
        density={controls.density}
        dustAmount={controls.dustAmount}
        atmosphereIntensity={controls.atmosphereIntensity}
        speed={controls.speed}
        vanishingX={controls.vanishingX}
        horizon={controls.horizon}
        interactive={initial.interactive}
        fadeLeft={
          controls.fadeLeft
            ? [controls.fadeLeftStart, controls.fadeLeftEnd]
            : null
        }
        style={shaderStyle}
      />
    </>
  );
}
