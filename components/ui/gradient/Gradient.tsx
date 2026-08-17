'use client';

// <Gradient /> — a soft mesh gradient that wraps its content.
//
//   <Gradient colors={['#f8f9ff', '#226ffd', '#0e3c75', '#151b2b']}>
//     <h1>Hello</h1>
//   </Gradient>
//
// Each color becomes a point in the frame; every pixel is a gaussian-weighted
// blend of all of them, which is what makes the falloff non-linear and soft.

import { useMemo, type CSSProperties, type ReactNode, type ComponentPropsWithoutRef } from 'react';
import { useShaderCanvas, hexToRgb } from './useShaderCanvas';

export interface GradientPoint {
  color: string;
  /** 0..1 across the frame */
  x: number;
  /** 0..1 down the frame — 0 is the TOP */
  y: number;
}

export interface GradientProps extends Omit<ComponentPropsWithoutRef<'div'>, 'style' | 'color'> {
  /** 2–8 hex strings, auto-placed on a diagonal ramp */
  colors?: string[];
  /** explicit placement, overrides `colors` */
  points?: GradientPoint[];
  /**
   * Blend radius (the gaussian sigma). LOWER it when your colors span a wide
   * tonal range, or every point reaches every pixel and they average into one
   * flat mid-tone. Narrow palette: 0.55–0.65. White-to-black ramp: 0.30–0.40.
   */
  softness?: number;
  /** subtle dither that kills banding on large fills */
  grain?: number;
  style?: CSSProperties;
  canvasStyle?: CSSProperties;
  children?: ReactNode;
}

// default placement: a diagonal ramp from top-left to bottom-right, with the
// points pushed off-axis so the blend never looks like a linear gradient
const LAYOUTS: Record<number, Array<[number, number]>> = {
  2: [[0.14, 0.10], [0.86, 0.90]],
  3: [[0.10, 0.08], [0.82, 0.42], [0.32, 0.94]],
  4: [[0.08, 0.06], [0.88, 0.30], [0.26, 0.72], [0.94, 0.98]],
  5: [[0.08, 0.04], [0.62, 0.02], [0.92, 0.34], [0.34, 0.74], [0.96, 1.00]],
  6: [[0.06, 0.04], [0.54, 0.00], [0.94, 0.26], [0.20, 0.52], [0.66, 0.78], [0.96, 1.00]],
  7: [[0.05, 0.04], [0.42, 0.00], [0.80, 0.16], [0.14, 0.40], [0.58, 0.60], [0.96, 0.72], [0.36, 0.98]],
  8: [[0.05, 0.03], [0.38, 0.00], [0.72, 0.12], [0.96, 0.30], [0.12, 0.44], [0.52, 0.62], [0.84, 0.80], [0.30, 0.98]],
};

const FRAG = `
uniform vec2  g_pts[8];
uniform vec3  g_cols[8];
uniform int   g_count;
uniform float g_soft;
uniform float g_grain;

float gHash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

void main(){
  float asp = u_resolution.x / u_resolution.y;
  vec2 p = vec2(v_uv.x * asp, v_uv.y);
  float sigma = max(0.06, g_soft);

  vec3 col = vec3(0.0);
  float wsum = 0.0;
  float n = float(g_count);
  // unrolled — Safari rejects loop-index uniform-array access and break-on-uniform
  float m; vec2 q; float d; float w;
  m = step(0.5, n); q = vec2(g_pts[0].x * asp, g_pts[0].y); d = distance(p, q); w = (exp(-(d * d) / (2.0 * sigma * sigma)) + 0.0001) * m; col += w * g_cols[0]; wsum += w;
  m = step(1.5, n); q = vec2(g_pts[1].x * asp, g_pts[1].y); d = distance(p, q); w = (exp(-(d * d) / (2.0 * sigma * sigma)) + 0.0001) * m; col += w * g_cols[1]; wsum += w;
  m = step(2.5, n); q = vec2(g_pts[2].x * asp, g_pts[2].y); d = distance(p, q); w = (exp(-(d * d) / (2.0 * sigma * sigma)) + 0.0001) * m; col += w * g_cols[2]; wsum += w;
  m = step(3.5, n); q = vec2(g_pts[3].x * asp, g_pts[3].y); d = distance(p, q); w = (exp(-(d * d) / (2.0 * sigma * sigma)) + 0.0001) * m; col += w * g_cols[3]; wsum += w;
  m = step(4.5, n); q = vec2(g_pts[4].x * asp, g_pts[4].y); d = distance(p, q); w = (exp(-(d * d) / (2.0 * sigma * sigma)) + 0.0001) * m; col += w * g_cols[4]; wsum += w;
  m = step(5.5, n); q = vec2(g_pts[5].x * asp, g_pts[5].y); d = distance(p, q); w = (exp(-(d * d) / (2.0 * sigma * sigma)) + 0.0001) * m; col += w * g_cols[5]; wsum += w;
  m = step(6.5, n); q = vec2(g_pts[6].x * asp, g_pts[6].y); d = distance(p, q); w = (exp(-(d * d) / (2.0 * sigma * sigma)) + 0.0001) * m; col += w * g_cols[6]; wsum += w;
  m = step(7.5, n); q = vec2(g_pts[7].x * asp, g_pts[7].y); d = distance(p, q); w = (exp(-(d * d) / (2.0 * sigma * sigma)) + 0.0001) * m; col += w * g_cols[7]; wsum += w;
  col /= max(wsum, 0.0001);

  // dither: large smooth fills band badly in 8-bit, this hides it
  col += (gHash(gl_FragCoord.xy) - 0.5) * g_grain * 0.12;

  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`;

const BRAND = ['#f8f9ff', '#f4f6fd', '#226ffd', '#0e3c75', '#151b2b'];

export default function Gradient({
  colors = BRAND,
  points,
  softness = 0.38,
  grain = 0.05,
  className,
  style,
  canvasStyle,
  children,
  ...rest
}: GradientProps) {
  const stops = useMemo<GradientPoint[]>(() => {
    if (points && points.length) return points.slice(0, 8);
    const list = colors.slice(0, 8);
    const layout = LAYOUTS[list.length] ?? LAYOUTS[4];
    return list.map((color, i) => ({ color, x: layout[i][0], y: layout[i][1] }));
  }, [colors, points]);

  // packed into the flat arrays the shader expects, rebuilt only when stops change
  const packed = useMemo(() => {
    const pts = new Float32Array(16);
    const cols = new Float32Array(24);
    stops.forEach((s, i) => {
      pts[i * 2] = s.x; pts[i * 2 + 1] = s.y;
      const [r, g, b] = hexToRgb(s.color);
      cols[i * 3] = r; cols[i * 3 + 1] = g; cols[i * 3 + 2] = b;
    });
    return { pts, cols, count: stops.length };
  }, [stops]);

  const canvasRef = useShaderCanvas(FRAG, {
    ink: [1, 1, 1],
    bg: [0, 0, 0],
    extra: (gl, prog) => {
      gl.uniform2fv(gl.getUniformLocation(prog, 'g_pts'), packed.pts);
      gl.uniform3fv(gl.getUniformLocation(prog, 'g_cols'), packed.cols);
      gl.uniform1i(gl.getUniformLocation(prog, 'g_count'), packed.count);
      gl.uniform1f(gl.getUniformLocation(prog, 'g_soft'), softness);
      gl.uniform1f(gl.getUniformLocation(prog, 'g_grain'), grain);
    },
  });

  return (
    <div
      className={className}
      style={{ position: 'relative', isolation: 'isolate', ...style }}
      {...rest}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          display: 'block', zIndex: -1, ...canvasStyle,
        }}
      />
      {children}
    </div>
  );
}
