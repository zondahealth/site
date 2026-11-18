'use client';

/**
 * NetworkShader — Zonda Health hero background
 *
 * A WebGL2 network on a perspective plane: it grows from one point into a dense
 * network, pulses travel along the connections, and the area near the cursor
 * lights up. No dependencies.
 *
 * The canvas is TRANSPARENT by default, so it sits on top of your own background
 * (sky image, gradient, video). Put it inside a container with `position: relative`
 * and it fills it absolutely, behind your content.
 *
 *   <section style={{ position: 'relative', background: 'url(/sky.jpg) center/cover' }}>
 *     <NetworkShader nodeColor="#FFFFFF" pulseColor="#E6F03C" />
 *     <div style={{ position: 'relative' }}>...hero content...</div>
 *   </section>
 */

import { CSSProperties, useEffect, useRef } from 'react';

export type NetworkShaderProps = {
  /** Node color. */
  nodeColor?: string;
  /** Connection line color. */
  lineColor?: string;
  /** Color of the pulses that travel along the connections. */
  pulseColor?: string;
  /** Color of the "special" connections (e.g. clinical referrals). */
  accentColor?: string;
  /** Share of connections that use accentColor, 0–1. */
  accentRatio?: number;
  /** Opacity of the connection lines, 0–1. */
  lineOpacity?: number;
  /** Overall brightness of the network. */
  intensity?: number;

  /** Glow on the horizon. */
  glowColor?: string;
  /** Glow strength, 0 = off. */
  glowIntensity?: number;

  /** Solid background. Leave undefined for a transparent canvas over your own background. */
  backgroundColor?: string;

  /** Network density (higher = more, smaller nodes). */
  density?: number;
  /** Speed of the pulses. 0 = still. */
  speed?: number;
  /** Seconds the network takes to grow on load. */
  growSeconds?: number;
  /** Depth fog: higher = the far network fades out sooner. */
  fog?: number;

  /** Vanishing point, horizontal: 0 = left edge, 0.5 = centre, 1 = right edge. */
  vanishingX?: number;
  /** Horizon height: 0 = bottom, 1 = top. */
  horizon?: number;
  /** Camera sway amount. */
  sway?: number;

  /** Dim the network on the left (where the copy sits). [start, end] as fractions of the width; null = off. */
  fadeLeft?: [number, number] | null;
  /** How visible the network stays inside the faded area, 0–1. */
  fadeMin?: number;

  /** Light up the network near the cursor. */
  interactive?: boolean;
  /** Film grain, 0 = off. Only drawn when backgroundColor is set. */
  grain?: number;
  /** Max device pixel ratio (performance). */
  maxDpr?: number;
  /** Respect the OS "reduce motion" setting (shows the grown network, still). */
  respectReducedMotion?: boolean;

  className?: string;
  style?: CSSProperties;
};

const DEFAULTS: Required<Omit<NetworkShaderProps, 'backgroundColor' | 'className' | 'style' | 'fadeLeft'>> & {
  fadeLeft: [number, number] | null;
} = {
  nodeColor: '#4FD1A1',
  lineColor: '#4FD1A1',
  pulseColor: '#4FD1A1',
  accentColor: '#F0A35E',
  accentRatio: 0.1,
  lineOpacity: 0.3,
  intensity: 1,
  glowColor: '#1E7A66',
  glowIntensity: 0.35,
  density: 1,
  speed: 1,
  growSeconds: 9,
  fog: 0.16,
  vanishingX: 0.7,
  horizon: 0.9,
  sway: 1,
  fadeLeft: [0.2, 0.62],
  fadeMin: 0.16,
  interactive: true,
  grain: 0.02,
  maxDpr: 2,
  respectReducedMotion: true,
};

function hexToRgb(hex: string): [number, number, number] {
  let h = hex.replace('#', '').trim();
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');
  const n = parseInt(h.slice(0, 6), 16);
  if (Number.isNaN(n)) return [1, 1, 1];
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

const VS = `#version 300 es
in vec2 p;
void main(){ gl_Position = vec4(p, 0.0, 1.0); }`;

const FS = `#version 300 es
precision highp float;
uniform vec2 uRes;
uniform float uTime, uGrow, uScale, uMouseOn;
uniform vec2 uMouse;
uniform vec3 uNode, uLine, uPulse, uAccent, uGlow, uBg;
uniform float uAccentRatio, uLineOp, uIntensity, uGlowI, uBgA, uFog;
uniform float uVX, uHorizon, uSway, uFadeL0, uFadeL1, uFadeMin, uFadeOn, uGrain;
out vec4 o;

float h21(vec2 p){ p = fract(p*vec2(123.34,456.21)); p += dot(p,p+45.32); return fract(p.x*p.y); }
vec2 h22(vec2 p){ float n = h21(p); return vec2(n, h21(p+n+17.7)); }
vec2 pt(vec2 c){ return c + 0.5 + (h22(c)-0.5)*0.72; }
float act(vec2 c){
  vec2 seed = vec2(1.5, 7.0);
  float a = length(c-seed)*0.085 + h21(c+3.7)*0.25;
  return smoothstep(a, a+0.14, uGrow);
}
vec2 seg(vec2 p, vec2 a, vec2 b){
  vec2 pa = p-a, ba = b-a;
  float t = clamp(dot(pa,ba)/dot(ba,ba), 0.0, 1.0);
  return vec2(length(pa-ba*t), t);
}

void main(){
  vec2 uv = (gl_FragCoord.xy - 0.5*uRes)/uRes.y;
  float aspect = uRes.x/uRes.y;
  vec2 sxy = gl_FragCoord.xy/uRes;

  // vanishing point / horizon in uv space
  float vx = (uVX - 0.5)*aspect;
  float hz = uHorizon - 0.5;
  vec2 q = uv - vec2(vx + sin(uTime*0.07)*0.035*uSway, 0.0);
  float z = 1.0/max(hz - q.y, 0.03);
  vec2 w = vec2(q.x*z, z)*uScale;
  vec2 fw = fwidth(w); float px = max(fw.x, fw.y);
  vec2 ic = floor(w);

  vec3 col = vec3(0.0);
  for(int j=-1;j<=1;j++){ for(int i=-1;i<=1;i++){
    vec2 c = ic + vec2(float(i), float(j));
    vec2 p = pt(c); float a = act(c);
    if(a > 0.001){
      float d = length(w-p);
      float hub = step(0.93, h21(c+21.0));
      float rr = (0.045 + px*0.5)*(1.0 + hub*1.2);
      vec3 nc = mix(uNode, vec3(1.0), hub*0.35);
      col += nc*a*((1.0-smoothstep(rr, rr+px*1.5, d))*0.95 + exp(-d*d*(40.0-hub*25.0))*(0.22+hub*0.3));
    }
    for(int k=0;k<3;k++){
      vec2 off = k==0 ? vec2(1.0,0.0) : (k==1 ? vec2(0.0,1.0) : (h21(c+9.1)>0.5 ? vec2(1.0,1.0) : vec2(1.0,-1.0)));
      float keep = step(0.3, h21(c*1.7+off*3.1));
      if(k==2) keep *= step(0.45, h21(c+2.2));
      vec2 nb = c+off;
      float e = min(a, act(nb))*keep;
      if(e <= 0.001) continue;
      vec2 s = seg(w, p, pt(nb));
      float lw = 0.004 + px*0.35;
      float ln = 1.0 - smoothstep(lw, lw+px*1.2, s.x);
      float accent = step(1.0-uAccentRatio, h21(c+off*5.3));
      vec3 lc = mix(uLine, uAccent, accent);
      vec3 pc = mix(uPulse, uAccent, accent);
      float traffic = min(step(0.5, h21(c+off*1.3)) + accent, 1.0);
      float sp = fract(uTime*(0.16+0.14*h21(c+off)) + h21(c-off*2.0));
      float dir = h21(c+off*7.7) > 0.5 ? sp : 1.0-sp;
      float pw = lw*3.0 + px;
      float pulse = exp(-pow((s.y-dir)*8.0, 2.0))*(1.0 - smoothstep(pw, pw+px*2.0, s.x));
      col += e*(lc*ln*uLineOp + pc*pulse*traffic*1.5);
    }
  }}

  float fog = exp(-z*uFog);
  float mg = uMouseOn*exp(-dot(uv-uMouse, uv-uMouse)*14.0);
  col *= fog*(1.0 + mg*2.2);
  col *= smoothstep(hz, hz-0.06, q.y);

  vec2 hg = q - vec2(0.0, hz);
  col += uGlow*exp(-(hg.x*hg.x*1.2 + hg.y*hg.y*26.0))*uGlowI;

  float dim = mix(uFadeMin, 1.0, smoothstep(uFadeL0, uFadeL1, sxy.x));
  col *= mix(1.0, dim, uFadeOn) * uIntensity;

  vec3 light = clamp(col/(1.0 + col*0.25), 0.0, 1.0);
  float la = clamp(max(light.r, max(light.g, light.b)), 0.0, 1.0);

  // premultiplied output: light over (optional) solid background
  vec3 rgb = light + uBg*uBgA*(1.0 - la);
  float alpha = la + uBgA*(1.0 - la);
  if(uBgA > 0.0){
    rgb += (h21(gl_FragCoord.xy + fract(uTime*0.37)*97.0) - 0.5)*uGrain;
  }
  o = vec4(rgb, alpha);
}`;

export default function NetworkShader(props: NetworkShaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const propsRef = useRef(props);
  propsRef.current = props;

  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const gl = el.getContext('webgl2', { antialias: false, premultipliedAlpha: true, alpha: true });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.warn('[NetworkShader]', gl.getShaderInfoLog(s));
        return null;
      }
      return s;
    };
    const vs = compile(gl.VERTEX_SHADER, VS);
    const fs = compile(gl.FRAGMENT_SHADER, FS);
    if (!vs || !fs) return;
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.bindAttribLocation(prog, 0, 'p');
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.warn('[NetworkShader]', gl.getProgramInfoLog(prog));
      return;
    }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    const names = [
      'uRes', 'uTime', 'uGrow', 'uScale', 'uMouseOn', 'uMouse', 'uNode', 'uLine', 'uPulse', 'uAccent',
      'uGlow', 'uBg', 'uAccentRatio', 'uLineOp', 'uIntensity', 'uGlowI', 'uBgA', 'uFog', 'uVX', 'uHorizon',
      'uSway', 'uFadeL0', 'uFadeL1', 'uFadeMin', 'uFadeOn', 'uGrain',
    ] as const;
    const U = Object.fromEntries(names.map((n) => [n, gl.getUniformLocation(prog, n)])) as Record<
      (typeof names)[number],
      WebGLUniformLocation | null
    >;

    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    const isReduced = () => (propsRef.current.respectReducedMotion ?? DEFAULTS.respectReducedMotion) && !!mq?.matches;

    let raf = 0;
    let last = performance.now();
    let t = 0;
    let alive = 0;
    const mouse = { x: 0, y: 0, on: 0, tx: 0, ty: 0, ton: 0 };
    let visible = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, propsRef.current.maxDpr ?? DEFAULTS.maxDpr);
      const w = Math.max(1, Math.round(el.clientWidth * dpr));
      const h = Math.max(1, Math.round(el.clientHeight * dpr));
      if (el.width !== w || el.height !== h) {
        el.width = w;
        el.height = h;
      }
      gl.viewport(0, 0, w, h);
      if (isReduced()) draw();
    };

    const draw = () => {
      const p = { ...DEFAULTS, ...stripUndefined(propsRef.current) };
      const reduced = isReduced();
      let k = reduced ? 1 : Math.min(1, alive / Math.max(0.1, p.growSeconds));
      k = 1 - Math.pow(1 - k, 2.2);

      mouse.x += (mouse.tx - mouse.x) * 0.08;
      mouse.y += (mouse.ty - mouse.y) * 0.08;
      mouse.on += ((p.interactive ? mouse.ton : 0) - mouse.on) * 0.06;

      gl.uniform2f(U.uRes, el.width, el.height);
      gl.uniform1f(U.uTime, reduced ? 30 : t);
      gl.uniform1f(U.uGrow, 2.6 * k);
      gl.uniform1f(U.uScale, 3.6 * p.density);
      gl.uniform2f(U.uMouse, mouse.x, mouse.y);
      gl.uniform1f(U.uMouseOn, mouse.on);
      gl.uniform3fv(U.uNode, hexToRgb(p.nodeColor));
      gl.uniform3fv(U.uLine, hexToRgb(p.lineColor));
      gl.uniform3fv(U.uPulse, hexToRgb(p.pulseColor));
      gl.uniform3fv(U.uAccent, hexToRgb(p.accentColor));
      gl.uniform3fv(U.uGlow, hexToRgb(p.glowColor));
      gl.uniform1f(U.uAccentRatio, Math.min(1, Math.max(0, p.accentRatio)));
      gl.uniform1f(U.uLineOp, p.lineOpacity);
      gl.uniform1f(U.uIntensity, p.intensity);
      gl.uniform1f(U.uGlowI, p.glowIntensity);
      gl.uniform1f(U.uFog, p.fog);
      gl.uniform1f(U.uVX, p.vanishingX);
      gl.uniform1f(U.uHorizon, p.horizon);
      gl.uniform1f(U.uSway, p.sway);
      const fade = propsRef.current.fadeLeft === null ? null : p.fadeLeft;
      gl.uniform1f(U.uFadeOn, fade ? 1 : 0);
      gl.uniform1f(U.uFadeL0, fade ? fade[0] : 0);
      gl.uniform1f(U.uFadeL1, fade ? fade[1] : 1);
      gl.uniform1f(U.uFadeMin, p.fadeMin);
      if (propsRef.current.backgroundColor) {
        gl.uniform3fv(U.uBg, hexToRgb(propsRef.current.backgroundColor));
        gl.uniform1f(U.uBgA, 1);
      } else {
        gl.uniform3f(U.uBg, 0, 0, 0);
        gl.uniform1f(U.uBgA, 0);
      }
      gl.uniform1f(U.uGrain, p.grain);

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (visible && !document.hidden) {
        t += dt * (propsRef.current.speed ?? DEFAULTS.speed);
        alive += dt;
        draw();
      }
      raf = requestAnimationFrame(frame);
    };

    const onMove = (ev: PointerEvent) => {
      const r = el.getBoundingClientRect();
      if (!r.height) return;
      const inside = ev.clientX >= r.left && ev.clientX <= r.right && ev.clientY >= r.top && ev.clientY <= r.bottom;
      mouse.tx = (ev.clientX - r.left - r.width / 2) / r.height;
      mouse.ty = (r.height / 2 - (ev.clientY - r.top)) / r.height;
      mouse.ton = inside ? 1 : 0;
    };
    const onLeave = () => {
      mouse.ton = 0;
    };

    const ro = new ResizeObserver(resize);
    ro.observe(el);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(el);
    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);

    resize();
    if (isReduced()) draw();
    else raf = requestAnimationFrame(frame);

    const onMotionChange = () => {
      cancelAnimationFrame(raf);
      if (isReduced()) draw();
      else {
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    };
    mq?.addEventListener?.('change', onMotionChange);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      mq?.removeEventListener?.('change', onMotionChange);
      gl.deleteBuffer(buf);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={props.className}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        pointerEvents: 'none',
        ...props.style,
      }}
    />
  );
}

function stripUndefined<T extends object>(o: T): Partial<T> {
  const out: Partial<T> = {};
  (Object.keys(o) as (keyof T)[]).forEach((k) => {
    if (o[k] !== undefined) out[k] = o[k];
  });
  return out;
}
