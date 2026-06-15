'use client';

import { useEffect, useRef } from 'react';

export type ShaderId = 'tide' | 'low-tide' | 'drift';

type Rgb = readonly [number, number, number];
type ResolvedColor = {
  rgb: Rgb;
  alpha: number;
};

type ShaderDefinition = {
  id: ShaderId;
  num: string;
  name: string;
  fragment: string;
};

type TopographicShaderBackgroundProps = {
  shaderId: ShaderId;
  className?: string;
  animated?: boolean;
  inkColor?: string | Rgb;
  bgColor?: string | Rgb;
  backgroundOpacity?: number;
  lineColor?: Rgb;
  lineOpacity?: number;
  staticFrame?: number;
};

const DEFAULT_INK = '#f4f1ea';
const DEFAULT_BG = '#072351';
const DEFAULT_LINE_COLOR = [0.96, 0.95, 0.92] as const;

const FRAGMENT_PREAMBLE = `#version 300 es
precision highp float;

in vec2 v_uv;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_mouseSmooth;
uniform float u_mouseVel;
uniform vec3 u_clicks[4];
uniform vec3 u_ink;
uniform vec3 u_bg;
uniform float u_lineOpacity;
uniform float u_backgroundOpacity;

out vec4 fragColor;

#define gl_FragColor fragColor
#define NAVY (min(u_bg * 1.9, vec3(1.0)))
#define NAVY_DEEP u_bg
#define INK u_ink

float hash11(float p){ p = fract(p*0.1031); p *= p+33.33; p *= p+p; return fract(p); }
float hash21(vec2 p){ vec3 q = fract(vec3(p.xyx)*0.1031); q += dot(q, q.yzx+33.33); return fract((q.x+q.y)*q.z); }
vec2  hash22(vec2 p){ vec3 q = fract(vec3(p.xyx)*vec3(0.1031,0.1030,0.0973)); q += dot(q, q.yzx+33.33); return fract((q.xx+q.yz)*q.zy); }

float vnoise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  float a = hash21(i), b = hash21(i+vec2(1,0)), c = hash21(i+vec2(0,1)), d = hash21(i+vec2(1,1));
  vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(a,b,u.x), mix(c,d,u.x), u.y);
}

float fbm(vec2 p){
  float v = 0.0, a = 0.5;
  for(int i=0;i<5;i++){ v += a*vnoise(p); p *= 2.02; a *= 0.5; }
  return v;
}
`;

const SHADER_FRAGMENTS: Record<ShaderId, string> = {
  tide: `
void main(){
  vec2 uv = v_uv;
  float aspect = u_resolution.x / u_resolution.y;

  vec3 col = NAVY_DEEP * 0.85 + NAVY * 0.15;

  float bandMask = 0.0;
  const int N = 5;
  for(int i = 0; i < N; i++){
    float fi = float(i);
    float x0 = (fi + 0.5) / float(N);
    float amp = 0.045 + 0.018 * sin(fi * 1.7 + 0.3);
    float freq = 4.5 + fi * 0.55;
    float speed = 0.22 + fi * 0.06;

    amp *= 1.0 + (u_mouseSmooth.y - 0.5) * 0.9;
    float phase = u_time * speed + fi + (u_mouseSmooth.x - 0.5) * 1.8;

    float xline = x0 + amp * sin(uv.y * freq + phase)
                    + amp * 0.4 * sin(uv.y * freq * 0.43 - phase * 0.7);

    float band = abs(uv.x - xline);
    bandMask = max(bandMask, smoothstep(0.16, 0.0, band));
  }

  vec2 g = uv * vec2(aspect, 1.0) * 110.0;
  vec2 gf = fract(g) - 0.5;
  float n = fbm(uv * vec2(1.6, 2.2) + vec2(u_time * 0.04, -u_time * 0.07));
  float patches = smoothstep(0.52, 0.82, n);
  float density = bandMask * patches;
  float radius = density * 0.30;
  float dotMask = smoothstep(radius, radius - 0.08, length(gf)) * step(0.02, density);

  float ink = clamp(dotMask * u_lineOpacity, 0.0, 1.0);
  col = mix(col, INK, ink);

  vec2 vp = uv - 0.5; vp.x *= aspect;
  col *= 1.0 - dot(vp, vp) * 0.25;

  gl_FragColor = u_backgroundOpacity < 0.999
    ? vec4(INK, ink)
    : vec4(col, 1.0);
}`,
  'low-tide': `
void main(){
  vec2 uv = v_uv;
  float aspect = u_resolution.x / u_resolution.y;

  vec3 col = NAVY_DEEP * 0.85 + NAVY * 0.15;

  float bandMask = 0.0;
  const int N = 5;
  for(int i = 0; i < N; i++){
    float fi = float(i);
    float x0 = (fi + 0.5) / float(N);
    float amp = 0.045 + 0.018 * sin(fi * 1.7 + 0.3);
    float freq = 4.5 + fi * 0.55;
    float speed = 0.22 + fi * 0.06;
    amp *= 1.0 + (u_mouseSmooth.y - 0.5) * 0.9;
    float phase = u_time * speed + fi + (u_mouseSmooth.x - 0.5) * 1.8;
    float xline = x0 + amp * sin(uv.y * freq + phase)
                    + amp * 0.4 * sin(uv.y * freq * 0.43 - phase * 0.7);
    float band = abs(uv.x - xline);
    bandMask = max(bandMask, smoothstep(0.16, 0.0, band));
  }

  vec2 d = uv - u_mouseSmooth; d.x *= aspect;
  float dM = length(d);
  float reveal = smoothstep(0.40, 0.015, dM);
  reveal *= 0.9 + 0.1 * sin(u_time * 1.5 - dM * 16.0);

  vec2 g = uv * vec2(aspect, 1.0) * 110.0;
  vec2 gf = fract(g) - 0.5;
  float n = fbm(uv * vec2(1.6, 2.2) + vec2(u_time * 0.04, -u_time * 0.07));
  float patches = smoothstep(0.52, 0.82, n);
  float field = max(bandMask * 0.22, reveal);
  float density = field * patches;
  float radius = density * 0.30;
  float dotMask = smoothstep(radius, radius - 0.08, length(gf)) * step(0.02, density);

  float ink = clamp(dotMask * u_lineOpacity, 0.0, 1.0);
  col = mix(col, INK, ink);

  vec2 vp = uv - 0.5; vp.x *= aspect;
  col *= 1.0 - dot(vp, vp) * 0.25;

  gl_FragColor = u_backgroundOpacity < 0.999
    ? vec4(INK, ink)
    : vec4(col, 1.0);
}`,
  drift: `
vec2 flow(vec2 p, float t){
  float a = fbm(p * 1.5 + vec2(0.0, t * 0.10));
  float b = fbm(p * 1.5 + vec2(7.3, -t * 0.10));
  vec2 f = vec2(a - 0.5, b - 0.5) * 2.0;
  return f;
}

void main(){
  vec2 uv = v_uv;
  float aspect = u_resolution.x / u_resolution.y;
  vec2 p = vec2(uv.x * aspect, uv.y);

  vec3 col = NAVY_DEEP;

  vec2 m = vec2(u_mouseSmooth.x * aspect, u_mouseSmooth.y);
  vec2 toM = m - p;
  float dM = length(toM);
  float pull = exp(-dM * 4.5);

  vec2 swirl = vec2(0.0);
  for(int i = 0; i < 4; i++){
    vec3 c = u_clicks[i];
    if(c.z < 3.0){
      vec2 cp = vec2(c.x * aspect, c.y);
      vec2 d = cp - p;
      float r = length(d);
      float life = exp(-c.z * 1.4);
      vec2 perp = vec2(-d.y, d.x);
      swirl += perp / (r * r + 0.05) * life * 0.04;
    }
  }

  vec2 warp = flow(p * 1.2, u_time) * (0.18 + 0.10 * u_mouseVel)
            + toM * pull * 0.35
            + swirl;

  vec2 q = p + warp;

  float streaks = abs(fract(q.x * 22.0) - 0.5);
  float along = fbm(vec2(q.x * 22.0 * 0.5, q.y * 4.0 + u_time * 0.2));
  float streakMask = smoothstep(0.06, 0.0, streaks) * smoothstep(0.25, 0.85, along);

  vec2 g = q * 90.0;
  vec2 gf = fract(g) - 0.5;
  float flowMag = clamp(length(warp) * 1.4, 0.0, 1.0);
  float r = flowMag * 0.32;
  float dotMask = smoothstep(r, r - 0.07, length(gf)) * 0.6;

  float halo = exp(-dM * 8.0) * 0.20;

  float ink = clamp((streakMask + dotMask + halo) * u_lineOpacity, 0.0, 1.0);
  col = mix(col, INK, ink);

  col += NAVY * exp(-dM * 6.0) * 0.18;

  gl_FragColor = u_backgroundOpacity < 0.999
    ? vec4(INK, ink)
    : vec4(col, 1.0);
}`,
};

export const TOPOGRAPHIC_SHADERS: ShaderDefinition[] = [
  { id: 'tide', num: '01', name: 'Tide', fragment: FRAGMENT_PREAMBLE + SHADER_FRAGMENTS.tide },
  { id: 'low-tide', num: '01B', name: 'Low Tide', fragment: FRAGMENT_PREAMBLE + SHADER_FRAGMENTS['low-tide'] },
  { id: 'drift', num: '02', name: 'Drift', fragment: FRAGMENT_PREAMBLE + SHADER_FRAGMENTS.drift },
];

const VERTEX_SHADER = `#version 300 es
precision highp float;

const vec2 POSITIONS[3] = vec2[3](
  vec2(-1.0, -1.0),
  vec2(3.0, -1.0),
  vec2(-1.0, 3.0)
);

out vec2 v_uv;

void main(){
  vec2 position = POSITIONS[gl_VertexID];
  v_uv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

function hexToRgb(hex: string): Rgb | null {
  const match = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
  if (!match) return null;

  const value = parseInt(match[1], 16);
  return [
    ((value >> 16) & 255) / 255,
    ((value >> 8) & 255) / 255,
    (value & 255) / 255,
  ];
}

function cssRgbToColor(color: string): ResolvedColor | null {
  const match = /^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+)\s*)?\)$/i.exec(color.trim());
  if (!match) return null;

  const red = Number(match[1]);
  const green = Number(match[2]);
  const blue = Number(match[3]);
  const alpha = match[4] === undefined ? 1 : Number(match[4]);

  if (![red, green, blue, alpha].every(Number.isFinite)) return null;

  return {
    rgb: [
      Math.max(0, Math.min(255, red)) / 255,
      Math.max(0, Math.min(255, green)) / 255,
      Math.max(0, Math.min(255, blue)) / 255,
    ],
    alpha: Math.max(0, Math.min(1, alpha)),
  };
}

function resolveColor(color: string | Rgb | undefined, fallback: string | Rgb): ResolvedColor {
  const value = color ?? fallback;
  if (typeof value !== 'string') return { rgb: value, alpha: 1 };

  const hex = hexToRgb(value);
  if (hex) return { rgb: hex, alpha: 1 };

  return cssRgbToColor(value) ?? resolveColor(undefined, fallback);
}

function compileShader(gl: WebGL2RenderingContext, type: number, source: string) {
  if (gl.isContextLost()) return null;

  const shader = gl.createShader(type);
  if (!shader) return null;

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(shader);
    if (info) console.warn(info);
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

function createProgram(gl: WebGL2RenderingContext, fragment: string) {
  const vertexShader = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
  const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragment);
  if (!vertexShader || !fragmentShader) {
    if (vertexShader) gl.deleteShader(vertexShader);
    if (fragmentShader) gl.deleteShader(fragmentShader);
    return null;
  }

  const program = gl.createProgram();
  if (!program) {
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
    return null;
  }

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const info = gl.getProgramInfoLog(program);
    if (info) console.warn(info);
    gl.deleteProgram(program);
    return null;
  }

  return program;
}

function getCanvasPoint(canvas: HTMLCanvasElement, event: PointerEvent) {
  const rect = canvas.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width;
  const y = 1 - (event.clientY - rect.top) / rect.height;

  return [
    Math.max(0, Math.min(1, x)),
    Math.max(0, Math.min(1, y)),
  ] as const;
}

export function TopographicShaderBackground({
  shaderId,
  className,
  animated = true,
  inkColor,
  bgColor = DEFAULT_BG,
  backgroundOpacity = 1,
  lineColor,
  lineOpacity = 1,
  staticFrame = 64,
}: TopographicShaderBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shaderIdRef = useRef(shaderId);
  const animatedRef = useRef(animated);
  const inkColorRef = useRef(resolveColor(inkColor ?? lineColor, DEFAULT_INK));
  const bgColorRef = useRef(resolveColor(bgColor, DEFAULT_BG));
  const backgroundOpacityRef = useRef(backgroundOpacity);
  const lineOpacityRef = useRef(lineOpacity);
  const staticFrameRef = useRef(staticFrame);

  useEffect(() => { shaderIdRef.current = shaderId; }, [shaderId]);
  useEffect(() => { animatedRef.current = animated; }, [animated]);
  useEffect(() => { inkColorRef.current = resolveColor(inkColor ?? lineColor, DEFAULT_INK); }, [inkColor, lineColor]);
  useEffect(() => { bgColorRef.current = resolveColor(bgColor, DEFAULT_BG); }, [bgColor]);
  useEffect(() => { backgroundOpacityRef.current = backgroundOpacity; }, [backgroundOpacity]);
  useEffect(() => { lineOpacityRef.current = lineOpacity; }, [lineOpacity]);
  useEffect(() => { staticFrameRef.current = staticFrame; }, [staticFrame]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl2', {
      alpha: true,
      antialias: false,
      depth: false,
      powerPreference: 'low-power',
      premultipliedAlpha: false,
      stencil: false,
    });

    if (!gl) return;

    let raf = 0;
    let active = true;
    let visible = animated;
    let needsResize = true;
    let hasDrawnStatic = false;
    let program: WebGLProgram | null = null;
    let activeShaderId: ShaderId | null = null;
    let lastFrame = performance.now();
    const startedAt = performance.now();
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mouse = { x: 0.5, y: 0.5 };
    const smoothMouse = { x: 0.5, y: 0.5 };
    const previousMouse = { x: 0.5, y: 0.5 };
    let mouseVelocity = 0;
    const clicks = new Float32Array(12).fill(99);
    let clickIndex = 0;

    let loc: Record<string, WebGLUniformLocation | null> = {};

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const maxDpr = animatedRef.current ? 1.5 : 1;
      const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
      const width = Math.max(1, Math.round(rect.width * dpr));
      const height = Math.max(1, Math.round(rect.height * dpr));

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      gl.viewport(0, 0, width, height);
    };

    const cacheUniforms = (prog: WebGLProgram) => {
      loc = {};
      for (const name of [
        'u_time', 'u_resolution', 'u_mouse', 'u_mouseSmooth',
        'u_mouseVel', 'u_clicks[0]', 'u_ink', 'u_bg', 'u_lineOpacity',
        'u_backgroundOpacity',
      ]) {
        loc[name] = gl.getUniformLocation(prog, name);
      }
    };

    const selectProgram = () => {
      if (activeShaderId === shaderIdRef.current && program) return true;

      const definition = TOPOGRAPHIC_SHADERS.find((shader) => shader.id === shaderIdRef.current);
      if (!definition) return false;

      const nextProgram = createProgram(gl, definition.fragment);
      if (!nextProgram) return false;

      if (program) gl.deleteProgram(program);
      program = nextProgram;
      activeShaderId = definition.id;
      cacheUniforms(nextProgram);

      return true;
    };

    const onPointerMove = (event: PointerEvent) => {
      const [x, y] = getCanvasPoint(canvas, event);
      mouse.x = x;
      mouse.y = y;
    };

    const onPointerDown = (event: PointerEvent) => {
      const [x, y] = getCanvasPoint(canvas, event);
      const offset = (clickIndex % 4) * 3;
      clicks[offset] = x;
      clicks[offset + 1] = y;
      clicks[offset + 2] = 0;
      clickIndex++;
    };

    const draw = (now: number) => {
      raf = 0;
      if (!active || gl.isContextLost()) return;

      if (needsResize) {
        resize();
        needsResize = false;
      }

      if (!selectProgram() || !program) {
        scheduleFrame();
        return;
      }

      const isAnimated = animatedRef.current;
      const delta = isAnimated ? Math.min(0.05, (now - lastFrame) / 1000) : 0;
      lastFrame = now;

      if (isAnimated) {
        const ease = 1 - Math.exp(-delta * 7);
        smoothMouse.x += (mouse.x - smoothMouse.x) * ease;
        smoothMouse.y += (mouse.y - smoothMouse.y) * ease;

        const vx = (mouse.x - previousMouse.x) / Math.max(0.001, delta);
        const vy = (mouse.y - previousMouse.y) / Math.max(0.001, delta);
        const velocity = Math.min(8, Math.hypot(vx, vy));
        mouseVelocity += (velocity - mouseVelocity) * (1 - Math.exp(-delta * 4));
        previousMouse.x = mouse.x;
        previousMouse.y = mouse.y;

        for (let i = 0; i < 4; i++) clicks[i * 3 + 2] += delta;
      }

      const timeScale = reducedMotion.matches ? 0.08 : 1;
      const time = isAnimated ? ((now - startedAt) / 1000) * timeScale : staticFrameRef.current / 24;

      gl.useProgram(program);
      gl.uniform1f(loc.u_time, time);
      gl.uniform2f(loc.u_resolution, canvas.width, canvas.height);
      gl.uniform2f(loc.u_mouse, mouse.x, mouse.y);
      gl.uniform2f(loc.u_mouseSmooth, smoothMouse.x, smoothMouse.y);
      gl.uniform1f(loc.u_mouseVel, reducedMotion.matches ? 0 : mouseVelocity);
      gl.uniform3fv(loc['u_clicks[0]'], clicks);
      gl.uniform3fv(loc.u_ink, inkColorRef.current.rgb);
      gl.uniform3fv(loc.u_bg, bgColorRef.current.rgb);
      gl.uniform1f(loc.u_lineOpacity, lineOpacityRef.current * inkColorRef.current.alpha);
      gl.uniform1f(loc.u_backgroundOpacity, backgroundOpacityRef.current);
      gl.drawArrays(gl.TRIANGLES, 0, 3);

      if (isAnimated) {
        if (visible) raf = window.requestAnimationFrame(draw);
      } else {
        hasDrawnStatic = true;
        if (program) { gl.deleteProgram(program); program = null; }
      }
    };

    const scheduleFrame = () => {
      if (!active || raf) return;
      if (animatedRef.current) {
        lastFrame = performance.now();
        raf = window.requestAnimationFrame(draw);
      } else if (!hasDrawnStatic) {
        raf = window.requestAnimationFrame(draw);
      }
    };

    const onContextLost = (event: Event) => {
      event.preventDefault();
      window.cancelAnimationFrame(raf);
      raf = 0;
      program = null;
      activeShaderId = null;
      loc = {};
    };

    const onContextRestored = () => {
      if (!active) return;
      needsResize = true;
      hasDrawnStatic = false;
      scheduleFrame();
    };

    canvas.addEventListener('webglcontextlost', onContextLost);
    canvas.addEventListener('webglcontextrestored', onContextRestored);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) scheduleFrame();
      },
      { threshold: 0 }
    );
    intersectionObserver.observe(canvas);

    const resizeObserver = new ResizeObserver(() => {
      needsResize = true;
      hasDrawnStatic = false;
      scheduleFrame();
    });
    resizeObserver.observe(canvas);

    if (animated) {
      window.addEventListener('pointermove', onPointerMove, { passive: true });
      window.addEventListener('pointerdown', onPointerDown, { passive: true });
    }

    resize();
    if (visible) scheduleFrame();

    return () => {
      active = false;
      window.cancelAnimationFrame(raf);
      intersectionObserver.disconnect();
      resizeObserver.disconnect();
      canvas.removeEventListener('webglcontextlost', onContextLost);
      canvas.removeEventListener('webglcontextrestored', onContextRestored);
      if (animated) {
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerdown', onPointerDown);
      }
      if (program) gl.deleteProgram(program);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
    />
  );
}

export function StaticTopographicShaderBackground({
  shaderId = 'drift',
  className,
  inkColor,
  bgColor,
  backgroundOpacity,
  lineColor,
  lineOpacity,
  staticFrame,
}: Partial<
  Pick<
    TopographicShaderBackgroundProps,
    'shaderId' | 'className' | 'inkColor' | 'bgColor' | 'backgroundOpacity' | 'lineColor' | 'lineOpacity' | 'staticFrame'
  >
>) {
  return (
    <TopographicShaderBackground
      shaderId={shaderId}
      className={className}
      animated={false}
      inkColor={inkColor}
      bgColor={bgColor}
      backgroundOpacity={backgroundOpacity}
      lineColor={lineColor}
      lineOpacity={lineOpacity}
      staticFrame={staticFrame}
    />
  );
}
