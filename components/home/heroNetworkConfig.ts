import type { ParticleWorldProps } from "@/components/ParticleWorld";

export const heroNetworkShaderProps = {
  dustColor: "#FFFFFF",
  clusterColor: "#FFFFFF",
  streamColor: "#E6F03C",
  accentColor: "#E6F03C",
  accentRatio: 0.12,
  atmosphereColor: "#FFFFFF",
  atmosphereIntensity: 0.4,
  stars: 0.15,
  intensity: 1,
  dustAmount: 0.85,
  density: 1,
  speed: 0.25,
  rotationSpeed: 0.003,
  vanishingX: 0.72,
  horizon: 0.86,
  fadeLeft: [0.2, 0.6] as [number, number],
  fadeMin: 0.12,
  growSeconds: 8,
} satisfies ParticleWorldProps;

export function heroNetworkShaderPropsForViewport(
  isMobile: boolean,
): ParticleWorldProps {
  if (!isMobile) return heroNetworkShaderProps;
  return {
    ...heroNetworkShaderProps,
    fadeLeft: null,
    vanishingX: 0.5,
    horizon: 0.28,
    density: 0.8,
    intensity: 0.7,
    interactive: false,
  };
}
