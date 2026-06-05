'use client';

import { useEffect, useRef } from 'react';

export type ShaderId =
  | 'liquid'
  | 'magnetic'
  | 'sand'
  | 'aurora'
  | 'elastic'
  | 'vdrift';

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
  lineColor?: readonly [number, number, number];
  lineOpacity?: number;
  staticFrame?: number;
};

const COMMON = `#version 300 es
precision highp float;

uniform float u_time;
uniform vec2  u_resolution;
uniform vec2  u_mouse;
uniform vec3  u_click;
uniform vec3  u_primaryColor;
uniform float u_lineOpacity;
uniform float u_mouseStrength;
uniform float u_density;

out vec4 fragColor;

vec2 hash2(vec2 p){
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}
float gnoise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(dot(hash2(i + vec2(0,0)), f - vec2(0,0)),
                 dot(hash2(i + vec2(1,0)), f - vec2(1,0)), u.x),
             mix(dot(hash2(i + vec2(0,1)), f - vec2(0,1)),
                 dot(hash2(i + vec2(1,1)), f - vec2(1,1)), u.x), u.y);
}
float contourLine(float field, float widthPx){
  float d  = 0.5 - abs(fract(field) - 0.5);
  float aa = fwidth(field);
  return 1.0 - smoothstep(widthPx * aa, (widthPx + 1.0) * aa, d);
}
vec2 view(vec2 fragPx){ return (fragPx - 0.5 * u_resolution) / u_resolution.y; }

float pointDot(vec2 p, vec2 c, float radius){
  float d = length(p - c);
  return 1.0 - smoothstep(radius * 0.72, radius, d);
}
float driftPoints(vec2 pos, vec2 m, float t, float strength){
  float pts = 0.0;
  for(int i = 0; i < 24; i++){
    float fi = float(i);
    vec2 seed = hash2(vec2(fi * 17.13, fi * 3.71));
    vec2 c = vec2(seed.x * 0.92, seed.y * 0.58);
    c += 0.018 * vec2(sin(t * 0.13 + fi * 1.7), cos(t * 0.11 + fi * 2.1));
    float ang = hash2(vec2(fi * 5.21, fi * 9.47)).x * 6.2831853;
    vec2  vel = vec2(cos(ang), sin(ang)) * (0.6 + 0.9 * seed.y);
    c += vel * t * 0.02;
    c.x = mod(c.x + 1.15, 2.3) - 1.15;
    c.y = mod(c.y + 0.78, 1.56) - 0.78;
    float twinkle = 0.72 + 0.28 * sin(t * 0.34 + fi * 2.6);
    float cursorLift = 1.0 + exp(-dot(c - m, c - m) * 18.0) * 0.65 * strength;
    pts += pointDot(pos, c, 0.006 + 0.0018 * fract(fi * 0.37)) * twinkle * cursorLift;
  }
  return min(pts, 1.0);
}
`;

const SHADER_FRAGMENTS: Record<ShaderId, string> = {
  liquid: `
void main(){
  vec2 p = view(gl_FragCoord.xy);
  vec2 m = view(u_mouse);
  float t = u_time;

  vec2 q = p * 1.6 + vec2(t * 0.015, t * 0.020);
  vec2  toM  = p - m;
  float well = exp(-dot(toM, toM) * 3.0);
  q -= normalize(toM + 1e-4) * well * 0.45 * u_mouseStrength;

  vec2  cm  = view(u_click.xy);
  float age = u_time - u_click.z;
  float cd  = length(p - cm);
  float ripple = sin(cd * 22.0 - age * 7.0)
               * exp(-cd * 3.0) * exp(-age * 1.6) * u_mouseStrength;

  float w1 = gnoise(q * 0.9 + t * 0.03);
  float h  = gnoise(q + vec2(w1 * 1.1, w1 * 0.8));
  h += 0.10 * gnoise(q * 2.3 - t * 0.02);
  h += ripple * 0.12;

  float line = contourLine(h * (7.0 * u_density), 0.65);
  float cover = smoothstep(0.20, 0.62, gnoise(p * 0.5 + 11.0) * 0.5 + 0.5);
  line *= mix(cover, 1.0, well);

  float points = driftPoints(p, m, t, u_mouseStrength);
  float alpha  = line * u_lineOpacity + points * 0.5;
  vec3  color  = mix(u_primaryColor, vec3(0.86, 0.94, 1.0), points * 0.35);
  fragColor = vec4(color, alpha);
}
`,
  magnetic: `
float pole(vec2 p, vec2 c, float q){
  return q / (dot(p - c, p - c) + 0.06);
}
void main(){
  vec2 p = view(gl_FragCoord.xy);
  vec2 m = view(u_mouse);
  float t = u_time;

  vec2 a = 0.50 * vec2(cos(t * 0.07),        sin(t * 0.09));
  vec2 b = 0.62 * vec2(cos(t * 0.05 + 2.0),  sin(t * 0.06 + 1.0));

  float pot = pole(p, a, 0.16) + pole(p, b, -0.13);
  pot += pole(p, m, 0.16 * u_mouseStrength);

  float age = u_time - u_click.z;
  pot += pole(p, view(u_click.xy), 0.40 * exp(-age * 1.2) * u_mouseStrength);
  pot += 0.012 * gnoise(p * 3.0 + t * 0.04);

  float line = contourLine(pot * (2.6 * u_density), 0.6);

  float points = driftPoints(p, m, t, u_mouseStrength);
  float alpha  = line * u_lineOpacity + points * 0.5;
  vec3  color  = mix(u_primaryColor, vec3(0.86, 0.94, 1.0), points * 0.35);
  fragColor = vec4(color, alpha);
}
`,
  sand: `
#define TRAIL 8
uniform vec3 u_trail[TRAIL];

void main(){
  vec2 p = view(gl_FragCoord.xy);
  vec2 m = view(u_mouse);
  float t = u_time;

  float wave = 0.06 * gnoise(vec2(p.x * 1.3, t * 0.03))
             + 0.03 * sin(p.x * 2.0 + t * 0.05);
  float base = p.y + wave;

  float disp = 0.0;
  for(int i = 0; i < TRAIL; i++){
    vec3 s = u_trail[i];
    if(s.z < 0.0) continue;
    vec2  sp  = view(s.xy);
    float age = u_time - s.z;
    disp += exp(-dot(p - sp, p - sp) * 9.0) * exp(-age * 0.8);
  }
  base += disp * 0.10 * u_mouseStrength;

  vec2  cm   = view(u_click.xy);
  float cage = u_time - u_click.z;
  float cd   = length(p - cm);
  base += sin(cd * 26.0) * exp(-cd * 4.0) * exp(-cage * 1.0) * 0.05 * u_mouseStrength;

  float line = contourLine(base * (26.0 * u_density), 0.5);

  float points = driftPoints(p, m, t, u_mouseStrength);
  float alpha  = line * u_lineOpacity + points * 0.5;
  vec3  color  = mix(u_primaryColor, vec3(0.86, 0.94, 1.0), points * 0.35);
  fragColor = vec4(color, alpha);
}
`,
  aurora: `
void main(){
  vec2 p = view(gl_FragCoord.xy);
  vec2 m = view(u_mouse);
  float t = u_time;

  vec2  toM  = p - m;
  float push = exp(-dot(toM, toM) * 2.5) * 0.35 * u_mouseStrength;
  vec2  pp   = p + normalize(toM + 1e-4) * push;

  float band = pp.y * 2.2
             + 0.35 * sin(pp.x * 1.7 + t * 0.25)
             + 0.25 * gnoise(pp * 1.2 + t * 0.05);

  vec2  cm  = view(u_click.xy);
  float age = u_time - u_click.z;
  band += gnoise(pp * 4.0) * 0.45
        * exp(-length(p - cm) * 3.0) * exp(-age * 1.3) * u_mouseStrength;

  float line = contourLine(band * (6.0 * u_density), 0.7);
  float cover = smoothstep(0.15, 0.6, gnoise(p * 0.45 + 4.0) * 0.5 + 0.5);
  line *= mix(cover, 1.0, push * 2.0);

  float points = driftPoints(pp, m, t, u_mouseStrength);
  float alpha  = line * u_lineOpacity + points * 0.5;
  vec3  color  = mix(u_primaryColor, vec3(0.86, 0.94, 1.0), points * 0.35);
  fragColor = vec4(color, alpha);
}
`,
  elastic: `
uniform float u_spring;

void main(){
  vec2 p = view(gl_FragCoord.xy);
  vec2 m = view(u_mouse);
  float t = u_time;

  vec2  toM     = p - m;
  float stretch = exp(-dot(toM, toM) * 4.0);
  vec2  pe = p + toM * stretch * 0.5 * u_mouseStrength;

  vec2  cm  = view(u_click.xy);
  float cd  = length(p - cm);
  float ring = sin(cd * 14.0 - t * 4.0) * exp(-cd * 2.0) * u_spring;

  vec2 drift = vec2(t * 0.018, t * -0.012)
             + 0.08 * vec2(sin(t * 0.11), cos(t * 0.09));
  float h = gnoise(pe * 1.1 + drift);
  h += 0.035 * sin((pe.x * 1.4 + pe.y * 0.7) + t * 0.16);
  h += ring * 0.15;

  float line = contourLine(h * (5.0 * u_density), 0.7);
  float cover = smoothstep(0.30, 0.7, gnoise(p * 0.6 + 21.0 + drift * 0.35) * 0.5 + 0.5);
  line *= mix(cover, 1.0, stretch);

  float points = driftPoints(pe, m, t, u_mouseStrength);
  float alpha  = line * u_lineOpacity + points * 0.5;
  vec3  color  = mix(u_primaryColor, vec3(0.86, 0.94, 1.0), points * 0.35);
  fragColor = vec4(color, alpha);
}
`,
  vdrift: `
float stipple(vec2 p, float cell, float prob, float radPx){
  vec2 g = p / cell;
  vec2 id = floor(g - 0.5);
  float best = 1e9;

  for(int j = 0; j < 2; j++){
    for(int i = 0; i < 2; i++){
      vec2 c = id + vec2(i, j);
      vec2 jit = hash2(c) * 0.5 + 0.5;
      float gate = fract(sin(dot(c, vec2(91.7, 47.3))) * 9123.17);
      if(gate < prob){
        best = min(best, length(p - (c + jit) * cell));
      }
    }
  }

  float d = best * u_resolution.y;
  return 1.0 - smoothstep(radPx, radPx + 1.0, d);
}

void main(){
  vec2 p = view(gl_FragCoord.xy);
  vec2 m = view(u_mouse);
  float t = u_time;

  float drift = t * 0.11;
  float swayA = 0.22 * sin(t * 0.18);
  float swayB = 0.30 * cos(t * 0.14);

  float warp = 0.30 * gnoise(vec2(p.x * 0.70 + swayA,       p.y * 2.0 + drift))
             + 0.13 * gnoise(vec2(p.x * 1.60 + 7.0 + swayB, p.y * 1.4 - drift * 0.7));

  float undulate = 0.16 * sin(p.y * 2.7 + p.x * 1.0 + t * 0.50)
                 + 0.09 * sin(p.y * 1.5 - p.x * 0.6 - t * 0.33 + 1.7);

  vec2 toM = p - m;
  float bend = (p.x - m.x) * exp(-dot(toM, toM) * 3.0) * 1.1 * u_mouseStrength;

  float xf = p.x + warp + undulate + bend;
  float lines = contourLine(xf * (3.2 * u_density), 2.6);

  float cluster = gnoise(p * 0.7 + 11.0) * 0.5 + 0.5;
  cluster = smoothstep(0.50, 0.92, cluster);
  float prob = clamp(0.07 + 0.50 * cluster, 0.0, 1.0);
  float dots = stipple(p, 0.038, prob, 1.8);

  float ink = clamp(lines + dots, 0.0, 1.0);
  fragColor = vec4(u_primaryColor, ink * clamp(u_lineOpacity * 3.0, 0.40, 1.0));
}
`,
};

export const TOPOGRAPHIC_SHADERS: ShaderDefinition[] = [
  { id: 'liquid', num: '01', name: 'Liquid Topography', fragment: COMMON + SHADER_FRAGMENTS.liquid },
  { id: 'magnetic', num: '02', name: 'Magnetic Contours', fragment: COMMON + SHADER_FRAGMENTS.magnetic },
  { id: 'sand', num: '03', name: 'Interactive Sand Garden', fragment: COMMON + SHADER_FRAGMENTS.sand },
  { id: 'aurora', num: '04', name: 'Aurora Contour Field', fragment: COMMON + SHADER_FRAGMENTS.aurora },
  { id: 'elastic', num: '05', name: 'Elastic Mesh Topography', fragment: COMMON + SHADER_FRAGMENTS.elastic },
  { id: 'vdrift', num: '06', name: 'Vertical Drift', fragment: COMMON + SHADER_FRAGMENTS.vdrift },
];

const VERTEX_SHADER = `#version 300 es
precision highp float;
const vec2 POSITIONS[3] = vec2[3](
  vec2(-1.0, -1.0),
  vec2(3.0, -1.0),
  vec2(-1.0, 3.0)
);
void main(){
  gl_Position = vec4(POSITIONS[gl_VertexID], 0.0, 1.0);
}
`;

const TRAIL_LENGTH = 8;
const LINE_COLOR = [0.5, 0.72, 1] as const;

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
  const x = (event.clientX - rect.left) * (canvas.width / rect.width);
  const y = (rect.bottom - event.clientY) * (canvas.height / rect.height);

  return [x, y] as const;
}

export function TopographicShaderBackground({
  shaderId,
  className,
  animated = true,
  lineColor = LINE_COLOR,
  lineOpacity = 0.36,
  staticFrame = 64,
}: TopographicShaderBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shaderIdRef = useRef(shaderId);
  const animatedRef = useRef(animated);
  const lineColorRef = useRef(lineColor);
  const lineOpacityRef = useRef(lineOpacity);
  const staticFrameRef = useRef(staticFrame);

  useEffect(() => { shaderIdRef.current = shaderId; }, [shaderId]);
  useEffect(() => { animatedRef.current = animated; }, [animated]);
  useEffect(() => { lineColorRef.current = lineColor; }, [lineColor]);
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
    // Animated starts visible (Hero is above the fold); static waits for IO
    let visible = animated;
    let needsResize = true;
    let hasDrawnStatic = false;
    let program: WebGLProgram | null = null;
    let activeShaderId: ShaderId | null = null;
    let spring = 0;
    let springVelocity = 0;
    let lastFrame = performance.now();
    const startedAt = performance.now();
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mouse = { x: 0, y: 0 };
    const smoothMouse = { x: 0, y: 0 };
    const click = { x: 0, y: 0, time: -10 };
    const trail = Array.from({ length: TRAIL_LENGTH }, () => ({ x: 0, y: 0, time: -1 }));
    let trailIndex = 0;

    // Pre-allocate — avoids GC pressure from per-frame allocation
    const trailData = new Float32Array(TRAIL_LENGTH * 3);

    // Cached uniform locations — avoids per-frame string lookups
    let loc: Record<string, WebGLUniformLocation | null> = {};

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      // Decorative backgrounds: 1.5x for animated, 1x for static (visually indistinguishable)
      const maxDpr = animatedRef.current ? 1.5 : 1;
      const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
      const width = Math.max(1, Math.round(rect.width * dpr));
      const height = Math.max(1, Math.round(rect.height * dpr));

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        mouse.x = width * 0.5;
        mouse.y = height * 0.5;
        smoothMouse.x = mouse.x;
        smoothMouse.y = mouse.y;
        click.x = mouse.x;
        click.y = mouse.y;
      }

      gl.viewport(0, 0, width, height);
    };

    const cacheUniforms = (prog: WebGLProgram) => {
      loc = {};
      for (const name of [
        'u_time', 'u_resolution', 'u_mouse', 'u_click',
        'u_primaryColor', 'u_lineOpacity', 'u_mouseStrength',
        'u_density', 'u_spring', 'u_trail[0]',
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
      trail[trailIndex] = { x, y, time: (performance.now() - startedAt) / 1000 };
      trailIndex = (trailIndex + 1) % TRAIL_LENGTH;
    };

    const onPointerDown = (event: PointerEvent) => {
      const [x, y] = getCanvasPoint(canvas, event);
      click.x = x;
      click.y = y;
      click.time = (performance.now() - startedAt) / 1000;
      springVelocity += 1.15;
    };

    const draw = (now: number) => {
      raf = 0;
      if (!active) return;

      if (gl.isContextLost()) return;

      // Only recalc layout when size actually changed (ResizeObserver sets this flag)
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
        smoothMouse.x += (mouse.x - smoothMouse.x) * 0.12;
        smoothMouse.y += (mouse.y - smoothMouse.y) * 0.12;
        springVelocity += -spring * 32 * delta;
        springVelocity *= Math.exp(-5.5 * delta);
        spring += springVelocity * delta;
      }

      const timeScale = reducedMotion.matches ? 0.08 : 0.62;
      const time = isAnimated ? ((now - startedAt) / 1000) * timeScale : staticFrameRef.current;

      trail.forEach((point, index) => {
        trailData[index * 3] = point.x;
        trailData[index * 3 + 1] = point.y;
        trailData[index * 3 + 2] = isAnimated ? point.time * timeScale : -1;
      });

      gl.useProgram(program);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(loc['u_time'], time);
      gl.uniform2f(loc['u_resolution'], canvas.width, canvas.height);
      gl.uniform2f(loc['u_mouse'], smoothMouse.x, smoothMouse.y);
      gl.uniform3f(loc['u_click'], click.x, click.y, click.time * timeScale);
      gl.uniform3f(loc['u_primaryColor'], ...lineColorRef.current);
      gl.uniform1f(loc['u_lineOpacity'], lineOpacityRef.current);
      gl.uniform1f(
        loc['u_mouseStrength'],
        isAnimated ? (reducedMotion.matches ? 0.25 : 0.86) : 0
      );
      gl.uniform1f(loc['u_density'], 1.05);
      gl.uniform1f(loc['u_spring'], spring);
      gl.uniform3fv(loc['u_trail[0]'], trailData);
      gl.drawArrays(gl.TRIANGLES, 0, 3);

      if (isAnimated) {
        // Only continue the loop if the canvas is on-screen
        if (visible) {
          raf = window.requestAnimationFrame(draw);
        }
      } else {
        // Static: free shader resources but keep context (losing it clears the canvas)
        hasDrawnStatic = true;
        if (program) { gl.deleteProgram(program); program = null; }
      }
    };

    const scheduleFrame = () => {
      if (!active) return;
      if (raf) return;
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

    // Pause animation when off-screen; defer static draws until visible
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) scheduleFrame();
      },
      { threshold: 0 }
    );
    intersectionObserver.observe(canvas);

    // Replace per-frame getBoundingClientRect() with event-driven resize
    const resizeObserver = new ResizeObserver(() => {
      needsResize = true;
    });
    resizeObserver.observe(canvas);

    // Only attach pointer listeners for interactive (animated) mode
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
  shaderId = 'elastic',
  className,
  lineColor,
  lineOpacity,
  staticFrame,
}: Partial<
  Pick<
    TopographicShaderBackgroundProps,
    'shaderId' | 'className' | 'lineColor' | 'lineOpacity' | 'staticFrame'
  >
>) {
  return (
    <TopographicShaderBackground
      shaderId={shaderId}
      className={className}
      animated={false}
      lineColor={lineColor}
      lineOpacity={lineOpacity}
      staticFrame={staticFrame}
    />
  );
}
