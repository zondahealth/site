'use client';

// Shared WebGL plumbing for the shader components: compiles a fragment
// shader, sizes the canvas to its container, and runs the frame loop.
// No dependencies beyond React.

import { useEffect, useRef, type RefObject } from 'react';

export type RGB = [number, number, number];

export interface ShaderUniforms {
  ink: RGB;
  bg: RGB;
  angle?: number;
  shiftX?: number;
  shiftY?: number;
  paused?: boolean;
  frozenAt?: number;
  /** components with their own uniforms (Gradient) set them here, per frame */
  extra?: (gl: WebGLRenderingContext, prog: WebGLProgram) => void;
}

export interface ShaderCanvasOptions {
  transparent?: boolean;
  maxDpr?: number;
  /** drop internal resolution when frames run long (Shader backgrounds) */
  adaptive?: boolean;
  /** cap the backing-store pixel count; strand width still uses CSS×dpr */
  maxPixels?: number;
}

// Every shader in shaders.ts is written against this preamble.
export const FRAG_PREAMBLE = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
varying vec2 v_uv;
uniform vec2 u_resolution;
uniform float u_time;
uniform vec3 u_ink;
uniform vec3 u_bg;
uniform float u_transparent;

// declared so the shaders that reference them still compile; the components
// do not wire pointer input (it costs a lot and these shaders drift on their own)
uniform vec2 u_mouse;
uniform vec2 u_mouseSmooth;
uniform float u_mouseVel;
uniform vec3 u_clicks[4];

#define INK u_ink
#define NAVY min(u_bg * 1.9, vec3(1.0))
#define NAVY_DEEP u_bg

// Transparent mode writes premultiplied alpha. Safari ignores
// premultipliedAlpha:false and composites the canvas as premultiplied,
// which made the strands invisible when we emitted straight alpha.
vec4 outc(vec3 col, vec3 lineCol, float cov){
  float a = clamp(cov, 0.0, 1.0);
  float t = step(0.5, u_transparent);
  return vec4(mix(col, lineCol * a, t), mix(1.0, a, t));
}

float hash11(float p){ p = fract(p*0.1031); p *= p+33.33; p *= p+p; return fract(p); }
float hash21(vec2 p){ vec3 q = fract(vec3(p.xyx)*0.1031); q += dot(q, q.yzx+33.33); return fract((q.x+q.y)*q.z); }
vec2  hash22(vec2 p){ vec3 q = fract(vec3(p.xyx)*vec3(0.1031,0.1030,0.0973)); q += dot(q, q.yzx+33.33); return fract((q.xx+q.yz)*q.zy); }

float vnoise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  // GLSL ES 1.00 (Safari) has no int→float coercion — use .0 literals
  float a = hash21(i), b = hash21(i+vec2(1.0,0.0)), c = hash21(i+vec2(0.0,1.0)), d = hash21(i+vec2(1.0,1.0));
  vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(a,b,u.x), mix(c,d,u.x), u.y);
}
float fbm(vec2 p){
  float v = 0.0, a = 0.5;
  for(int i=0;i<5;i++){ v += a*vnoise(p); p *= 2.02; a *= 0.5; }
  return v;
}
`;

const VERT = `
precision highp float;
attribute vec2 a_pos;
uniform float u_angle;
uniform vec2 u_shift;
uniform vec2 u_resolution;
varying vec2 v_uv;
void main(){
  vec2 uv = a_pos * 0.5 + 0.5;
  float asp = u_resolution.x / u_resolution.y;
  vec2 p = uv - 0.5; p.x *= asp;
  float s = sin(u_angle), c = cos(u_angle);
  p = vec2(p.x * c - p.y * s, p.x * s + p.y * c);
  p -= u_shift;
  p.x /= asp;
  v_uv = p + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}`;

function resolveCssColor(color: string): string {
  const c = String(color).trim();
  if (c.startsWith('#') || typeof document === 'undefined') return c;
  const m = c.match(/^var\(\s*(--[\w-]+)(?:\s*,\s*(.+))?\s*\)$/);
  if (!m) return c;
  const value = getComputedStyle(document.documentElement).getPropertyValue(m[1]).trim();
  return value || (m[2] ? m[2].trim() : c);
}

export function hexToRgb(hex: string): RGB {
  const h = resolveCssColor(hex).replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  const n = parseInt(full, 16);
  if (!Number.isFinite(n)) return [0, 0, 0];
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

/**
 * Compiles `fragmentSource` and drives it. `uniforms` is read every frame
 * through a ref, so changing colors/angle never recompiles the shader.
 */
export function useShaderCanvas(
  fragmentSource: string,
  uniforms: ShaderUniforms,
  {
    transparent = false,
    maxDpr = 1.75,
    adaptive = false,
    maxPixels,
  }: ShaderCanvasOptions = {},
): RefObject<HTMLCanvasElement | null> {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const uniRef = useRef<ShaderUniforms>(uniforms);
  uniRef.current = uniforms;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const contextOpts: WebGLContextAttributes = {
      alpha: true,
      // Safari composites canvases as premultiplied regardless of this flag
      premultipliedAlpha: true,
      antialias: false,
      // copying the buffer every frame is expensive and we never read pixels
      preserveDrawingBuffer: false,
      depth: false,
      stencil: false,
    };
    const gl = (canvas.getContext('webgl', contextOpts)
      || canvas.getContext('experimental-webgl', contextOpts)) as WebGLRenderingContext | null;
    if (!gl) { console.error('[shader] WebGL unavailable'); return; }

    const compile = (type: number, src: string): WebGLShader | null => {
      const sh = gl.createShader(type);
      if (!sh) return null;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        console.error('[shader] compile error:', gl.getShaderInfoLog(sh));
        return null;
      }
      return sh;
    };
    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG_PREAMBLE + '\n' + fragmentSource);
    if (!vs || !fs) return;

    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error('[shader] link error:', gl.getProgramInfoLog(prog));
      return;
    }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, 'a_pos');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const loc = (n: string) => gl.getUniformLocation(prog, n);
    const uRes = loc('u_resolution'), uTime = loc('u_time'), uInk = loc('u_ink');
    const uBg = loc('u_bg'), uTransp = loc('u_transparent');
    const uAngle = loc('u_angle'), uShift = loc('u_shift');
    const uMouse = loc('u_mouse'), uMouseS = loc('u_mouseSmooth');
    const uMouseV = loc('u_mouseVel'), uClicks = loc('u_clicks');

    // framebuffer already holds premultiplied rgba; blending would
    // multiply coverage a second time
    gl.disable(gl.BLEND);

    // lookW/H drive strand width (CSS × dpr). The backing store can be
    // smaller when adaptive quality or maxPixels kicks in; the browser
    // upscales, thickness stays the same.
    let lookW = 1, lookH = 1;
    let quality = 1;
    let sizeDirty = true;

    const applySize = () => {
      const dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, maxDpr));
      const cssW = Math.max(1, canvas.clientWidth);
      const cssH = Math.max(1, canvas.clientHeight);
      lookW = Math.max(1, Math.round(cssW * dpr));
      lookH = Math.max(1, Math.round(cssH * dpr));
      let w = lookW * quality;
      let h = lookH * quality;
      if (maxPixels && w * h > maxPixels) {
        const s = Math.sqrt(maxPixels / (w * h));
        w *= s;
        h *= s;
      }
      w = Math.max(1, Math.round(w));
      h = Math.max(1, Math.round(h));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      sizeDirty = false;
    };

    const ro = new ResizeObserver(() => { sizeDirty = true; });
    ro.observe(canvas);
    applySize();

    const zeros = new Float32Array(12);
    const start = performance.now();
    let last = start;
    let ema = 16.6;
    let frames = 0;
    let visible = true;
    let raf = 0;
    let needsDraw = true;

    const frame = (now: number) => {
      raf = 0;
      if (!visible) return;
      raf = requestAnimationFrame(frame);

      const u = uniRef.current;
      const dt = now - last;
      last = now;

      if (adaptive && dt > 0 && dt < 80) {
        ema = ema * 0.9 + dt * 0.1;
        frames++;
        if (frames % 45 === 0) {
          const next = ema > 22 ? Math.max(0.5, quality === 1 ? 0.75 : 0.5)
            : ema < 14 ? Math.min(1, quality === 0.5 ? 0.75 : 1)
            : quality;
          if (next !== quality) {
            quality = next;
            sizeDirty = true;
          }
        }
      }

      if (u.paused && !needsDraw && !sizeDirty) return;

      if (sizeDirty) applySize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform2f(uRes, lookW, lookH);
      gl.uniform1f(uTime, u.paused ? (u.frozenAt ?? 0) : (now - start) / 1000);
      gl.uniform3fv(uInk, u.ink);
      gl.uniform3fv(uBg, u.bg);
      gl.uniform1f(uTransp, transparent ? 1 : 0);
      gl.uniform1f(uAngle, ((u.angle ?? 0) * Math.PI) / 180);
      gl.uniform2f(uShift, u.shiftX ?? 0, u.shiftY ?? 0);
      gl.uniform2f(uMouse, 0.5, 0.5);
      gl.uniform2f(uMouseS, 0.5, 0.5);
      gl.uniform1f(uMouseV, 0);
      if (uClicks) gl.uniform3fv(uClicks, zeros);
      if (u.extra) u.extra(gl, prog);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      needsDraw = false;
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && raf === 0) raf = requestAnimationFrame(frame);
    });
    io.observe(canvas);

    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      raf = 0;
      ro.disconnect();
      io.disconnect();
      gl.deleteProgram(prog); gl.deleteShader(vs); gl.deleteShader(fs); gl.deleteBuffer(buf);
    };
  }, [fragmentSource, transparent, maxDpr, adaptive, maxPixels]);

  return canvasRef;
}
