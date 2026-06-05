/* =============================================================================
   Zonda Health — Topographic shader backgrounds
   Five procedural fragment shaders. Pure GLSL ES 3.00 (WebGL2).

   Shared contract (all five) — uniforms set by app.js:
     u_time          float   seconds since load (scaled for reduced-motion)
     u_resolution    vec2    framebuffer size in px
     u_mouse         vec2    smoothed cursor in framebuffer px, y-up
     u_click         vec3    last click: xy framebuffer px, z = click time (s)
     u_primaryColor  vec3    line color, linear 0..1 (from CSS var / swatch)
     u_lineOpacity   float   resting line alpha
     u_mouseStrength  float  interaction gain (0 = none)
     u_density       float   isoline-count multiplier
   Shader 03 additionally reads u_trail[8] (xy px, z = sample time).
   Shader 05 additionally reads u_spring  (JS-integrated damped impulse).

   Output is STRAIGHT-ALPHA: rgb = line color, a = coverage. The canvas is
   transparent and composited over the near-white page — exactly like the
   reference PNG (faint lines floating on paper, large negative space).

   Performance notes (apply to all):
     • One fullscreen triangle, no vertex work, no textures, no FBOs.
     • Gradient ("Perlin") noise — at most ~4 evals/pixel, no FBM stacks.
     • Contours are analytic + fwidth-antialiased: one cheap derivative, no
       supersampling. No loops > 8, no raymarching.
   ========================================================================== */

/* Common preamble prepended to every shader body. Kept inline (not #include)
   so each assembled shader in the code drawer is complete & copy-pasteable. */
const COMMON = `#version 300 es
precision highp float;

uniform float u_time;
uniform vec2  u_resolution;
uniform vec2  u_mouse;          // framebuffer px, y-up
uniform vec3  u_click;          // xy px, z = click time
uniform vec3  u_primaryColor;   // line color 0..1
uniform float u_lineOpacity;    // resting alpha
uniform float u_mouseStrength;  // interaction gain
uniform float u_density;        // isoline multiplier

out vec4 fragColor;

// -- cheap gradient (Perlin-style) noise: 1 eval ~ 4 hashes ------------------
vec2 hash2(vec2 p){
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}
float gnoise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);           // smootherstep weights
  return mix(mix(dot(hash2(i + vec2(0,0)), f - vec2(0,0)),
                 dot(hash2(i + vec2(1,0)), f - vec2(1,0)), u.x),
             mix(dot(hash2(i + vec2(0,1)), f - vec2(0,1)),
                 dot(hash2(i + vec2(1,1)), f - vec2(1,1)), u.x), u.y);
}

// -- analytic anti-aliased contour line --------------------------------------
// 'field' increments by 1 between adjacent isolines. Returns ~1 ON a line,
// fading to 0 between. 'widthPx' is the half-thickness in screen pixels, so
// lines stay hairline-thin and crisp at any zoom / devicePixelRatio.
float contourLine(float field, float widthPx){
  float d  = 0.5 - abs(fract(field) - 0.5);   // 0 on the line, 0.5 between
  float aa = fwidth(field);                    // field units per pixel
  return 1.0 - smoothstep(widthPx * aa, (widthPx + 1.0) * aa, d);
}

// helper: pixel coord -> centered, aspect-correct, y-up space
vec2 view(vec2 fragPx){ return (fragPx - 0.5 * u_resolution) / u_resolution.y; }

// -- drifting points layer ---------------------------------------------------
// soft round dot of given radius (view-space units)
float pointDot(vec2 p, vec2 c, float radius){
  float d = length(p - c);
  return 1.0 - smoothstep(radius * 0.72, radius, d);
}
// A scatter of small dots, each travelling along its OWN random heading at its
// own pace, twinkling, and lifting toward the cursor. Returns coverage 0..1.
// 'pos' is the (optionally warped) view-space position to sample at; 'm' is the
// view-space cursor. Wraps toroidally so dots recycle into frame.
float driftPoints(vec2 pos, vec2 m, float t, float strength){
  float points = 0.0;
  for(int i = 0; i < 64; i++){
    float fi = float(i);
    vec2 seed = hash2(vec2(fi * 17.13, fi * 3.71));
    vec2 c = vec2(seed.x * 0.92, seed.y * 0.58);
    c += 0.018 * vec2(sin(t * 0.13 + fi * 1.7), cos(t * 0.11 + fi * 2.1));

    // each point travels along its own heading, at its own pace
    float ang = hash2(vec2(fi * 5.21, fi * 9.47)).x * 6.2831853;
    vec2  vel = vec2(cos(ang), sin(ang)) * (0.6 + 0.9 * seed.y);
    c += vel * t * 0.02;

    c.x = mod(c.x + 1.15, 2.3) - 1.15;
    c.y = mod(c.y + 0.78, 1.56) - 0.78;

    float twinkle     = 0.72 + 0.28 * sin(t * 0.34 + fi * 2.6);
    float cursorLift  = 1.0 + exp(-dot(c - m, c - m) * 18.0) * 0.65 * strength;
    points += pointDot(pos, c, 0.0048 + 0.0012 * fract(fi * 0.37)) * twinkle * cursorLift;
  }
  return min(points, 1.0);
}
`;

/* ---------------------------------------------------------------------------
   01 — LIQUID TOPOGRAPHY
   Concept .......... infinite flowing contour lines drifting like an
                      underwater current; cursor is a soft gravitational well
                      that bends the lines around it.
   Interaction ...... mouse warps space toward the cursor (attraction field);
                      click emits an expanding ripple of rings that decays.
   Performance ...... 3 noise evals (2 for a single domain-warp pass + 1 detail
                      + 1 coverage mask = 4 total). No FBM.
   ------------------------------------------------------------------------- */
const LIQUID = `
void main(){
  vec2 p = view(gl_FragCoord.xy);
  vec2 m = view(u_mouse);
  float t = u_time;

  // slow global drift — the "current"
  vec2 q = p * 1.6 + vec2(t * 0.015, t * 0.020);

  // gravitational well: pull space toward the cursor, bending nearby lines
  vec2  toM  = p - m;
  float well = exp(-dot(toM, toM) * 3.0);
  q -= normalize(toM + 1e-4) * well * 0.45 * u_mouseStrength;

  // click ripple: rings expanding from the click point, fading with age
  vec2  cm  = view(u_click.xy);
  float age = u_time - u_click.z;
  float cd  = length(p - cm);
  float ripple = sin(cd * 22.0 - age * 7.0)
               * exp(-cd * 3.0) * exp(-age * 1.6) * u_mouseStrength;

  // single domain-warp pass → organic, fluid isolines
  float w1 = gnoise(q * 0.9 + t * 0.03);
  float h  = gnoise(q + vec2(w1 * 1.1, w1 * 0.8));
  h += 0.10 * gnoise(q * 2.3 - t * 0.02);     // faint high-freq texture
  h += ripple * 0.12;

  float line = contourLine(h * (7.0 * u_density), 0.65);

  // organic negative space: blank out broad regions via a low-freq mask
  float cover = smoothstep(0.20, 0.62, gnoise(p * 0.5 + 11.0) * 0.5 + 0.5);
  line *= mix(cover, 1.0, well);              // keep lines whole under cursor

  float points = driftPoints(p, m, t, u_mouseStrength);
  float alpha  = line * u_lineOpacity + points * 0.5;
  vec3  color  = mix(u_primaryColor, vec3(0.86, 0.94, 1.0), points * 0.35);
  fragColor = vec4(color, alpha);
}
`;

/* ---------------------------------------------------------------------------
   02 — MAGNETIC CONTOURS
   Concept .......... sparse contour loops that read like a magnetic field —
                      tight near invisible poles, vast empty space between.
   Interaction ...... the cursor is a magnetic pole; nearby loops curve toward
                      it. Click spawns a temporary pole that fades out.
   Performance ...... no noise in the field math (just 1 tiny wobble eval);
                      equipotentials of smoothed 1/r² are nearly free.
   ------------------------------------------------------------------------- */
const MAGNETIC = `
// smoothed inverse-square potential of a pole of charge q at c.
// Softening (0.06) rounds the singularity so the bullseye stays open, not
// packed solid — that keeps the loops sparse and readable.
float pole(vec2 p, vec2 c, float q){
  return q / (dot(p - c, p - c) + 0.06);
}
void main(){
  vec2 p = view(gl_FragCoord.xy);
  vec2 m = view(u_mouse);
  float t = u_time;

  // two poles slowly orbiting → the field morphs over time
  vec2 a = 0.50 * vec2(cos(t * 0.07),        sin(t * 0.09));
  vec2 b = 0.62 * vec2(cos(t * 0.05 + 2.0),  sin(t * 0.06 + 1.0));

  float pot = pole(p, a, 0.16) + pole(p, b, -0.13);
  pot += pole(p, m, 0.16 * u_mouseStrength);          // cursor pole

  // click: a temporary disturbance pole that decays
  float age = u_time - u_click.z;
  pot += pole(p, view(u_click.xy), 0.40 * exp(-age * 1.2) * u_mouseStrength);

  pot += 0.012 * gnoise(p * 3.0 + t * 0.04);          // organic wobble on loops

  // equipotential contours. A LOW multiplier keeps only a handful of loops
  // around each pole; the weak far field never reaches the next isoline, so
  // most of the frame stays empty — the sparse "magnetic" read.
  float line = contourLine(pot * (2.6 * u_density), 0.6);

  float points = driftPoints(p, m, t, u_mouseStrength);
  float alpha  = line * u_lineOpacity + points * 0.5;
  vec3  color  = mix(u_primaryColor, vec3(0.86, 0.94, 1.0), points * 0.35);
  fragColor = vec4(color, alpha);
}
`;

/* ---------------------------------------------------------------------------
   03 — INTERACTIVE SAND GARDEN
   Concept .......... raked-sand parallel lines, almost static, extremely low
                      contrast — a zen garden viewed from above.
   Interaction ...... the cursor rakes a temporary trail (8-sample history,
                      each fading by age) that displaces the sand; click stirs
                      a circular disturbance.
   Performance ...... field is one wave + one noise; the trail is an 8-iter
                      loop of exp() (the only loop in the set), cheap because
                      the base field costs almost nothing.
   ------------------------------------------------------------------------- */
const SAND = `
#define TRAIL 8
uniform vec3 u_trail[TRAIL];    // xy px, z = sample time (-1 = empty slot)

void main(){
  vec2 p = view(gl_FragCoord.xy);
  float t = u_time;

  // near-horizontal raked lines with a gentle organic wave
  float wave = 0.06 * gnoise(vec2(p.x * 1.3, t * 0.03))
             + 0.03 * sin(p.x * 2.0 + t * 0.05);
  float base = p.y + wave;

  // rake trail: each recent cursor sample pushes the sand, fading spatially
  // (gaussian) and temporally (age) — so the trail slowly heals
  float disp = 0.0;
  for(int i = 0; i < TRAIL; i++){
    vec3 s = u_trail[i];
    if(s.z < 0.0) continue;
    vec2  sp  = view(s.xy);
    float age = u_time - s.z;
    disp += exp(-dot(p - sp, p - sp) * 9.0) * exp(-age * 0.8);
  }
  base += disp * 0.10 * u_mouseStrength;

  // click: circular ripple in the sand that settles
  vec2  cm   = view(u_click.xy);
  float cage = u_time - u_click.z;
  float cd   = length(p - cm);
  base += sin(cd * 26.0) * exp(-cd * 4.0) * exp(-cage * 1.0) * 0.05 * u_mouseStrength;

  // dense, fine, low-contrast raking
  float line = contourLine(base * (26.0 * u_density), 0.5);

  float points = driftPoints(p, view(u_mouse), t, u_mouseStrength);
  float alpha  = line * u_lineOpacity + points * 0.5;
  vec3  color  = mix(u_primaryColor, vec3(0.86, 0.94, 1.0), points * 0.35);
  fragColor = vec4(color, alpha);
}
`;

/* ---------------------------------------------------------------------------
   04 — AURORA CONTOUR FIELD
   Concept .......... smooth layered bands of contour lines in continuous
                      flowing motion, like light fabric or slow aurora.
   Interaction ...... the cursor pushes the waves radially outward; click
                      injects localized turbulence that decays.
   Performance ...... 1 sine layer + 2 noise evals (1 flow + 1 click-gated
                      turbulence). Continuous motion, no accumulation.
   ------------------------------------------------------------------------- */
const AURORA = `
void main(){
  vec2 p = view(gl_FragCoord.xy);
  vec2 m = view(u_mouse);
  float t = u_time;

  // cursor pushes the field outward (soft fabric displacement)
  vec2  toM  = p - m;
  float push = exp(-dot(toM, toM) * 2.5) * 0.35 * u_mouseStrength;
  vec2  pp   = p + normalize(toM + 1e-4) * push;

  // layered smooth bands in continuous flow
  float band = pp.y * 2.2
             + 0.35 * sin(pp.x * 1.7 + t * 0.25)
             + 0.25 * gnoise(pp * 1.2 + t * 0.05);

  // click: localized turbulence, fading
  vec2  cm  = view(u_click.xy);
  float age = u_time - u_click.z;
  band += gnoise(pp * 4.0) * 0.45
        * exp(-length(p - cm) * 3.0) * exp(-age * 1.3) * u_mouseStrength;

  float line = contourLine(band * (6.0 * u_density), 0.7);

  // breathing negative space so it never fills the whole frame
  float cover = smoothstep(0.15, 0.6, gnoise(p * 0.45 + 4.0) * 0.5 + 0.5);
  line *= mix(cover, 1.0, push * 2.0);

  float points = driftPoints(pp, m, t, u_mouseStrength);
  float alpha  = line * u_lineOpacity + points * 0.5;
  vec3  color  = mix(u_primaryColor, vec3(0.86, 0.94, 1.0), points * 0.35);
  fragColor = vec4(color, alpha);
}
`;

/* ---------------------------------------------------------------------------
   05 — ELASTIC MESH TOPOGRAPHY
   Concept .......... very sparse contours over an invisible elastic sheet.
   Interaction ...... the cursor stretches/compresses nearby lines; click
                      fires a spring impulse that rings outward and SETTLES
                      with natural damping (u_spring is integrated in JS).
   Performance ...... 1 noise eval + analytic stretch + 1 sine ring. The
                      spring physics live on the CPU as a single scalar.
   ------------------------------------------------------------------------- */
const ELASTIC = `
uniform float u_spring;         // damped impulse amplitude from JS (≈0 at rest)

void main(){
  vec2 p = view(gl_FragCoord.xy);
  vec2 m = view(u_mouse);

  // elastic stretch: warp space outward from the cursor like a pulled sheet
  vec2  toM     = p - m;
  float stretch = exp(-dot(toM, toM) * 4.0);
  vec2  pe = p + toM * stretch * 0.5 * u_mouseStrength;

  // spring impulse: a ring from the click point, amplitude = damped u_spring
  vec2  cm  = view(u_click.xy);
  float cd  = length(p - cm);
  float ring = sin(cd * 14.0 - u_time * 4.0) * exp(-cd * 2.0) * u_spring;

  // very sparse base field
  float h = gnoise(pe * 1.1);
  h += ring * 0.15;

  float line = contourLine(h * (5.0 * u_density), 0.7);

  // sparse coverage → lots of empty sheet
  float cover = smoothstep(0.30, 0.7, gnoise(p * 0.6 + 21.0) * 0.5 + 0.5);
  line *= mix(cover, 1.0, stretch);

  float points = driftPoints(pe, m, u_time, u_mouseStrength);
  float alpha  = line * u_lineOpacity + points * 0.5;
  vec3  color  = mix(u_primaryColor, vec3(0.86, 0.94, 1.0), points * 0.35);
  fragColor = vec4(color, alpha);
}
`;

/* Registry consumed by app.js. `frag` is the complete, copy-pasteable shader. */
const SHADERS = [
  { id: 'liquid',   num: '01', name: 'Liquid Topography',     mood: 'Calm · premium · fintech',
    frag: COMMON + LIQUID,
    concept: 'Infinite flowing contour lines drift like an underwater current. The cursor is a soft gravitational well that bends nearby lines around it.',
    interaction: 'Move — lines deform smoothly toward the cursor (attraction field). Click — an expanding ring ripple radiates out and fades.',
    performance: '4 noise evals/pixel (one domain-warp pass + detail + coverage mask). No FBM, no loops.' },

  { id: 'magnetic', num: '02', name: 'Magnetic Contours',     mood: 'Technical · intelligent · data',
    frag: COMMON + MAGNETIC,
    concept: 'Sparse contour loops that read like a magnetic field — tight near invisible poles, vast empty space between. The field slowly morphs as the poles orbit.',
    interaction: 'Move — the cursor acts as a magnetic pole; nearby loops curve toward it. Click — a temporary disturbance pole spawns and decays.',
    performance: 'Equipotentials of smoothed 1/r² — essentially free. One tiny noise wobble keeps the loops organic.' },

  { id: 'elastic',  num: '05', name: 'Elastic Mesh Topography', mood: 'Fidget-fun · interactive · portfolio',
    frag: COMMON + ELASTIC,
    concept: 'Very sparse contours over an invisible elastic sheet — lots of empty space to stretch.',
    interaction: 'Move — the cursor stretches and compresses nearby lines. Click — a spring impulse rings outward and settles with natural damping.',
    performance: '1 noise eval + analytic stretch + 1 sine ring. The spring physics run on the CPU as a single damped scalar (u_spring).' },
];

window.SHADERS = SHADERS;
