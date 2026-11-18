import type { NetworkShaderProps } from "@/components/NetworkShader";

export const heroNetworkShaderProps = {
  nodeColor: "#FFFFFF",
  lineColor: "#FFFFFF",
  pulseColor: "#E6F03C",
  accentColor: "#E6F03C",
  accentRatio: 0.12,
  lineOpacity: 0.4,
  intensity: 1,
  glowIntensity: 0,
  vanishingX: 0.72,
  horizon: 0.88,
  fadeLeft: [0.2, 0.6] as [number, number],
  fadeMin: 0.12,
  density: 1,
  speed: 1,
  growSeconds: 8,
} satisfies NetworkShaderProps;

export function heroNetworkShaderPropsForViewport(
  isMobile: boolean,
): NetworkShaderProps {
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
