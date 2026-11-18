'use client';

/**
 * ParticleWorld — Zonda Health hero background
 *
 * A planet's horizon made of micro-particles. Each cluster of particles is an
 * institution; streams of particles travel between them. The network grows from
 * one point on load, the world turns slowly, and the area near the cursor lights up.
 * WebGL2, no dependencies.
 *
 * Transparent by default: it sits on top of your own background. Put it inside a
 * container with `position: relative` and it fills it absolutely, behind your content.
 *
 *   <section style={{ position: 'relative', background: '#0B1418' }}>
 *     <ParticleWorld />
 *     <div style={{ position: 'relative' }}>...hero content...</div>
 *   </section>
 */

import { CSSProperties, useEffect, useRef } from 'react';

export type ParticleWorldProps = {
  /** Fine dust particles that cover the surface. */
  dustColor?: string;
  /** Cluster cores and their glow (the institutions). */
  clusterColor?: string;
  /** Particles travelling between clusters. */
  streamColor?: string;
  /** Color of the "special" streams (e.g. clinical referrals). */
  accentColor?: string;
  /** Share of streams that use accentColor, 0–1. */
  accentRatio?: number;
  /** Atmosphere rim on the horizon. */
  atmosphereColor?: string;
  /** Strength of the atmosphere rim, 0 = off. */
  atmosphereIntensity?: number;
  /** Stars above the horizon, 0 = off. */
  stars?: number;

  /** Overall brightness. */
  intensity?: number;
  /** Amount of fine dust, 0 = only clusters and streams. */
  dustAmount?: number;
  /** Particle size in pixels (roughly). */
  particleSize?: number;
  /** Number of clusters: higher = more, smaller clusters. */
  density?: number;

  /** Speed of the particle streams. 0 = still. */
  speed?: number;
  /** How fast the world turns toward the viewer (radians per second). */
  rotationSpeed?: number;
  /** Seconds the network takes to grow on load. */
  growSeconds?: number;

  /** Camera height above the surface: lower = flatter horizon, higher = more curvature. */
  altitude?: number;
  /** Horizon height on screen: 0 = bottom, 1 = top. */
  horizon?: number;
  /** Horizontal centre of the curve: 0 = left edge, 0.5 = centre, 1 = right edge. */
  vanishingX?: number;

  /** Dim the effect on the left (where the copy sits). [start, end] as fractions of the width; null = off. */
  fadeLeft?: [number, number] | null;
  /** How visible the effect stays inside the faded area, 0–1. */
  fadeMin?: number;

  /** Solid background. Leave undefined for a transparent canvas over your own background. */
  backgroundColor?: string;
  /** Light up the area near the cursor. */
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

type Resolved = Required<Omit<ParticleWorldProps, 'backgroundColor' | 'className' | 'style' | 'fadeLeft'>> & {
  fadeLeft: [number, number] | null;
};

const DEFAULTS: Resolved = {
  dustColor: '#CFEFE6',
  clusterColor: '#4FD1A1',
  streamColor: '#8FF0C8',
  accentColor: '#F0A35E',
  accentRatio: 0.1,
  atmosphereColor: '#3FB892',
  atmosphereIntensity: 1,
  stars: 0.6,
  intensity: 1,
  dustAmount: 1,
  particleSize: 0.9,
  density: 1,
  speed: 1,
  rotationSpeed: 0.012,
  growSeconds: 10,
  altitude: 0.06,
  horizon: 0.84,
  vanishingX: 0.62,
  fadeLeft: [0.2, 0.6],
  fadeMin: 0.15,
  interactive: true,
  grain: 0.015,
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
uniform float uTime, uRot, uGrow, uMouseOn;
uniform vec2 uMouse;
uniform vec3 uDust, uCluster, uStream, uAccent, uAtmo, uBg;
uniform float uAccentRatio, uIntensity, uScale, uSize, uSpeed, uAlt, uHorizon, uVX;
uniform float uFadeOn, uFadeL0, uFadeL1, uFadeMin, uStars, uAtmoI, uBgA, uGrain, uDustAmt;
out vec4 o;

float h21(vec2 p){ p = fract(p*vec2(123.34,456.21)); p += dot(p,p+45.32); return fract(p.x*p.y); }
vec2 h22(vec2 p){ float n = h21(p); return vec2(n, h21(p+n+17.7)); }
float pxd(vec2 d, vec2 fw){ return length(d/max(fw, vec2(1e-6))); }
vec2 pt(vec2 c){ return c + 0.5 + (h22(c)-0.5)*0.6; }
float act(vec2 c, vec2 seed){
  float a = length(c-seed)*0.06 + h21(c+3.7)*0.3;
  return smoothstep(a, a+0.15, uGrow);
}

// one layer of micro particles; dens = local cluster density
float dustLayer(vec2 F, float dens, float prob0, float probK, float size, float salt){
  vec2 fw = fwidth(F); float pxF = max(fw.x, fw.y);
  vec2 cf = floor(F);
  float prob = h21(cf + salt);
  float thr = prob0 + probK*dens;
  float on = step(prob, thr);
  vec2 pp = cf + 0.2 + 0.6*h22(cf + salt*1.7);
  float dd = pxd(F - pp, fw);
  float sz = size*(0.55 + 0.9*h21(cf + salt + 3.3));
  float tw = 0.65 + 0.35*sin(uTime*(1.2 + 2.0*h21(cf+salt+5.1)) + 6.283*h21(cf+salt+8.4));
  float b = (0.35 + 0.65*h21(cf+salt+9.9));
  float near = exp(-dd*dd/(2.0*sz*sz))*on*tw*b;
  // level of detail: when cells get sub-pixel, fade into their average light (no shimmer)
  float avg = clamp(thr, 0.0, 1.0)*0.6*sz*sz*pxF*pxF;
  float lod = smoothstep(0.3, 0.9, pxF);
  return mix(near, min(avg, 0.25), lod);
}

void main(){
  vec2 uv = (gl_FragCoord.xy - 0.5*uRes)/uRes.y;
  vec2 sxy = gl_FragCoord.xy/uRes;
  float aspect = uRes.x/uRes.y;

  // ---------- camera over a planet ----------
  float R = 1.0;
  float alt = uAlt;
  vec3 ro = vec3(0.0, R + alt, 0.0);
  float fl = 1.4;
  float dip = acos(R/(R+alt));
  float pitch = dip + atan((uHorizon - 0.5)/fl);
  vec2 su = uv - vec2((uVX - 0.5)*aspect + sin(uTime*0.05)*0.02, 0.0);
  vec3 rd = normalize(vec3(su.x, su.y, fl));
  float cp = cos(pitch), sp = sin(pitch);
  rd = vec3(rd.x, rd.y*cp - rd.z*sp, rd.y*sp + rd.z*cp);

  float b = dot(ro, rd);
  float c = dot(ro, ro) - R*R;
  float disc = b*b - c;
  float tc = max(-b, 0.0);
  float hgt = length(ro + rd*tc) - R;

  vec3 col = vec3(0.0);
  float fh = max(fwidth(hgt), 1e-5);
  float cover = clamp(0.5 - hgt/(fh*1.5), 0.0, 1.0);
  float mg = uMouseOn*exp(-dot(uv-uMouse, uv-uMouse)*10.0);

  if(disc > 0.0 && (-b - sqrt(disc)) > 0.0){
    float th = -b - sqrt(disc);
    vec3 n = normalize(ro + rd*th);
    float u = atan(n.x, n.y);
    float v = atan(n.z, n.y) + uRot;
    vec2 W = vec2(u, v)*uScale;
    vec2 fwW = fwidth(W); float px = max(fwW.x, fwW.y);
    vec2 seed = vec2(0.10, 0.30)*uScale + vec2(0.0, 0.0);
    vec2 ic = floor(W);

    float dens = 0.0;
    float core = 0.0;
    vec3 stream = vec3(0.0);

    for(int j=-1;j<=1;j++){ for(int i=-1;i<=1;i++){
      vec2 cc = ic + vec2(float(i), float(j));
      vec2 p = pt(cc);
      float a = act(cc, seed);
      float hub = step(0.9, h21(cc+21.0));
      if(a > 0.001){
        float d = length(W - p);
        float sg = 0.24*(1.0 + hub*1.0);
        dens += a*exp(-d*d/(sg*sg))*(0.75 + hub*0.7);
        float dp = pxd(W - p, fwW);
        float cs = 1.2 + hub*1.6;
        core += a*(exp(-dp*dp/(2.0*cs*cs)) + exp(-d*d*120.0)*0.12*(1.0+hub));
      }
      // particle streams between nodes (no lines: only travelling particles)
      for(int k=0;k<3;k++){
        vec2 off = k==0 ? vec2(1.0,0.0) : (k==1 ? vec2(0.0,1.0) : (h21(cc+9.1)>0.5 ? vec2(1.0,1.0) : vec2(1.0,-1.0)));
        float keep = step(0.55, h21(cc*1.7+off*3.1));
        if(k==2) keep *= step(0.5, h21(cc+2.2));
        vec2 nb = cc + off;
        float e = min(a, act(nb, seed))*keep;
        if(e <= 0.001) continue;
        vec2 q = pt(nb);
        vec2 ba = q - p; float L = length(ba);
        vec2 dv = ba/L; vec2 nv = vec2(-dv.y, dv.x);
        vec2 pa = W - p;
        float along = dot(pa, dv);
        float perp = dot(pa, nv);
        float bulge = sin(3.14159*clamp(along/L,0.0,1.0));
        float spread = 0.018 + 0.016*bulge;
        if(along < -0.02 || along > L+0.02 || abs(perp) > spread*2.2 + px*3.0) continue;
        float es = h21(cc + off*13.7);
        float accent = step(1.0 - uAccentRatio, h21(cc + off*5.3));
        float N = L*42.0;
        float sgn = h21(cc + off*7.7) > 0.5 ? 1.0 : -1.0;
        float pos = along/L*N - sgn*uTime*uSpeed*(2.0 + 2.5*es);
        float k0 = floor(pos);
        float part = 0.0;
        for(int m=0;m<2;m++){
          float kk = k0 + float(m);
          float on = step(0.45, h21(vec2(kk, es*91.0)));
          float sk = kk + 0.5 + (h21(vec2(kk+1.3, es*57.0)) - 0.5)*0.7;
          float offA = (pos - sk)/N*L;
          float tgt = (h21(vec2(kk+3.1, es*33.0)) - 0.5)*2.0*spread;
          float offP = perp - tgt;
          float dd = pxd(dv*offA + nv*offP, fwW);
          float sz = uSize*(0.7 + 0.8*h21(vec2(kk+4.4, es*19.0)));
          part += on*exp(-dd*dd/(2.0*sz*sz))*(0.5 + 0.5*h21(vec2(kk+6.6, es)));
        }
        float ends = smoothstep(0.0, 0.18, along/L)*smoothstep(1.0, 0.82, along/L);
        stream += e*part*ends*0.55*mix(uStream, uAccent, accent);
        // faint trail glow so streams read at distance
        stream += e*ends*exp(-perp*perp/(spread*spread))*0.02*mix(uStream, uAccent, accent);
      }
    }}

    // micro particles: fine dust everywhere, denser and brighter around clusters
    float dn = clamp(dens, 0.0, 1.6);
    float d1 = dustLayer(W*22.0, dn, 0.12, 0.75, uSize*0.9, 1.0);
    float d2 = dustLayer(W*9.0, dn, 0.04, 0.35, uSize*1.5, 7.0);
    float d3 = dustLayer(W*48.0, dn, 0.06, 0.5, uSize*0.7, 13.0);
    float dust = (d1*(0.35 + 0.9*dn) + d2*(0.45 + 0.9*dn) + d3*(0.2 + 0.7*dn))*uDustAmt;

    col += uDust*dust;
    col += uCluster*core*1.1;
    col += uCluster*dn*dn*0.05;
    col += stream*1.4;

    // depth: fade toward the limb, then atmospheric haze
    float fogK = exp(-th*2.2);
    float limb = 1.0 - clamp(dot(n, -rd), 0.0, 1.0);
    col *= mix(0.3, 1.0, fogK);
    col *= cover*clamp(-hgt/(fh*6.0), 0.0, 1.0);
  }
  {
    // sky: sparse stars, fading into the atmosphere
    vec2 S = uv*160.0;
    vec2 cs = floor(S);
    float on = step(h21(cs + 41.0), 0.05);
    vec2 pp = cs + 0.2 + 0.6*h22(cs + 3.0);
    vec2 fwS = fwidth(S); float pxS = max(fwS.x, fwS.y);
    float dd = length(S - pp)/pxS;
    float tw = 0.5 + 0.5*sin(uTime*(0.8 + 1.5*h21(cs)) + 6.28*h21(cs + 2.0));
    float star = on*exp(-dd*dd/(2.0*0.6*0.6))*tw*(0.2 + 0.8*h21(cs + 9.0));
    col += uDust*star*uStars*smoothstep(0.0, 0.08, hgt)*(1.0 - cover);
  }

  // atmosphere rim around the horizon
  float hh = abs(hgt);
  float above = exp(-hh/(alt*0.09))*0.6 + exp(-hh/(alt*0.3))*0.22;
  float below = exp(-hh/(alt*0.05))*0.55 + exp(-hh/(alt*0.25))*0.12;
  col += uAtmo*mix(above, below, cover)*uAtmoI;

  col *= (1.0 + mg*1.8);
  float dim = mix(uFadeMin, 1.0, smoothstep(uFadeL0, uFadeL1, sxy.x));
  col *= mix(1.0, dim, uFadeOn)*uIntensity;

  vec3 light = clamp(col/(1.0 + col*0.3), 0.0, 1.0);
  float la = clamp(max(light.r, max(light.g, light.b)), 0.0, 1.0);
  vec3 rgb = light + uBg*uBgA*(1.0 - la);
  float alpha = la + uBgA*(1.0 - la);
  if(uBgA > 0.0) rgb += (h21(gl_FragCoord.xy + fract(uTime*0.37)*97.0) - 0.5)*uGrain;
  o = vec4(rgb, alpha);
}`;

export default function ParticleWorld(props: ParticleWorldProps) {
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
        console.warn('[ParticleWorld]', gl.getShaderInfoLog(s));
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
      console.warn('[ParticleWorld]', gl.getProgramInfoLog(prog));
      return;
    }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    const names = [
      'uRes', 'uTime', 'uRot', 'uGrow', 'uMouseOn', 'uMouse', 'uDust', 'uCluster', 'uStream', 'uAccent', 'uAtmo',
      'uBg', 'uAccentRatio', 'uIntensity', 'uScale', 'uSize', 'uSpeed', 'uAlt', 'uHorizon', 'uVX', 'uFadeOn',
      'uFadeL0', 'uFadeL1', 'uFadeMin', 'uStars', 'uAtmoI', 'uBgA', 'uGrain', 'uDustAmt',
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
    let rot = 0;
    let alive = 0;
    let visible = true;
    const mouse = { x: 0, y: 0, on: 0, tx: 0, ty: 0, ton: 0 };

    const resolve = (): Resolved => {
      const out = { ...DEFAULTS } as Resolved;
      const p = propsRef.current as Record<string, unknown>;
      (Object.keys(DEFAULTS) as (keyof Resolved)[]).forEach((k) => {
        if (p[k] !== undefined) (out as Record<string, unknown>)[k] = p[k];
      });
      return out;
    };

    const draw = () => {
      const p = resolve();
      const reduced = isReduced();
      let k = reduced ? 1 : Math.min(1, alive / Math.max(0.1, p.growSeconds));
      k = 1 - Math.pow(1 - k, 2.2);

      mouse.x += (mouse.tx - mouse.x) * 0.08;
      mouse.y += (mouse.ty - mouse.y) * 0.08;
      mouse.on += ((p.interactive ? mouse.ton : 0) - mouse.on) * 0.06;

      gl.uniform2f(U.uRes, el.width, el.height);
      gl.uniform1f(U.uTime, reduced ? 30 : t);
      gl.uniform1f(U.uRot, reduced ? 0.2 : rot);
      gl.uniform1f(U.uGrow, 4.5 * k);
      gl.uniform2f(U.uMouse, mouse.x, mouse.y);
      gl.uniform1f(U.uMouseOn, mouse.on);
      gl.uniform3fv(U.uDust, hexToRgb(p.dustColor));
      gl.uniform3fv(U.uCluster, hexToRgb(p.clusterColor));
      gl.uniform3fv(U.uStream, hexToRgb(p.streamColor));
      gl.uniform3fv(U.uAccent, hexToRgb(p.accentColor));
      gl.uniform3fv(U.uAtmo, hexToRgb(p.atmosphereColor));
      gl.uniform1f(U.uAccentRatio, Math.min(1, Math.max(0, p.accentRatio)));
      gl.uniform1f(U.uIntensity, p.intensity);
      gl.uniform1f(U.uScale, 90 * p.density);
      gl.uniform1f(U.uSize, p.particleSize);
      gl.uniform1f(U.uSpeed, p.speed);
      gl.uniform1f(U.uAlt, Math.max(0.005, p.altitude));
      gl.uniform1f(U.uHorizon, p.horizon);
      gl.uniform1f(U.uVX, p.vanishingX);
      const fade = propsRef.current.fadeLeft === null ? null : p.fadeLeft;
      gl.uniform1f(U.uFadeOn, fade ? 1 : 0);
      gl.uniform1f(U.uFadeL0, fade ? fade[0] : 0);
      gl.uniform1f(U.uFadeL1, fade ? fade[1] : 1);
      gl.uniform1f(U.uFadeMin, p.fadeMin);
      gl.uniform1f(U.uStars, p.stars);
      gl.uniform1f(U.uAtmoI, p.atmosphereIntensity);
      gl.uniform1f(U.uDustAmt, p.dustAmount);
      const bg = propsRef.current.backgroundColor;
      gl.uniform3fv(U.uBg, bg ? hexToRgb(bg) : [0, 0, 0]);
      gl.uniform1f(U.uBgA, bg ? 1 : 0);
      gl.uniform1f(U.uGrain, p.grain);

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

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

    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (visible && !document.hidden) {
        const p = propsRef.current;
        t += dt * (p.speed ?? DEFAULTS.speed);
        rot += dt * (p.rotationSpeed ?? DEFAULTS.rotationSpeed);
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
