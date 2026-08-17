// GENERATED from the Halftone wallpaper studio — GLSL fragment sources.
// Each entry: { id, badge, label, tagline, hint, fragmentSource }.

// Five shader wallpapers.
// All share a deep-navy / cream-ink palette inspired by the reference:
// dotted halftone clusters that flow alongside hand-drawn wave-lines.
// Each one reinterprets that DNA with a different interaction model.

// ──────────────────────────────────────────────────────────────
// 01 · TIDE  — the most direct take on the reference.
// Vertical wave-lines drift over a halftone field whose dot density
// peaks near each curve.  Mouse Y bends the curves; mouse X shifts
// their phase.  Clicks send a horizontal pulse rippling outward.
// ──────────────────────────────────────────────────────────────
const TIDE = `
void main(){
  vec2 uv = v_uv;
  float aspect = u_resolution.x / u_resolution.y;

  vec3 col = NAVY_DEEP * 0.85 + NAVY * 0.15;

  // five vertical wave-curves — no longer drawn, but their proximity
  // field still shapes where the halftone dots cluster, so the dot
  // patches keep their tidal, flowing rhythm.
  float bandMask = 0.0;            // proximity-to-curve, 0..1, per pixel
  // literal loop bound — Safari rejects for-loops over a const int
  for(int i = 0; i < 5; i++){
    float fi = float(i);
    float x0 = (fi + 0.5) / 5.0;
    float amp = 0.045 + 0.018 * sin(fi * 1.7 + 0.3);
    float freq = 4.5 + fi * 0.55;
    float speed = 0.22 + fi * 0.06;

    // mouse modulation
    amp  *= 1.0 + (u_mouseSmooth.y - 0.5) * 0.9;
    float phase = u_time * speed + fi + (u_mouseSmooth.x - 0.5) * 1.8;

    float xline = x0 + amp * sin(uv.y * freq + phase)
                     + amp * 0.4 * sin(uv.y * freq * 0.43 - phase * 0.7);

    float band = abs(uv.x - xline);
    bandMask = max(bandMask, smoothstep(0.16, 0.0, band));
  }

  // halftone dot field whose density is gated by:
  //   (a) proximity to a curve  (bandMask)
  //   (b) a slow drifting noise field that breaks the symmetry into patches
  // The threshold on the noise makes dots appear only in clusters, not
  // a continuous band — like the reference image.
  vec2 g = uv * vec2(aspect, 1.0) * 110.0;
  vec2 gf = fract(g) - 0.5;
  float n = fbm(uv * vec2(1.6, 2.2) + vec2(u_time * 0.04, -u_time * 0.07));
  // sharpen the noise into patches; only the brightest spots carry dots
  float patches = smoothstep(0.52, 0.82, n);
  float density = bandMask * patches;
  float radius = density * 0.30;
  float dotMask = smoothstep(radius, radius - 0.08, length(gf)) * step(0.02, density);

  float ink = clamp(dotMask, 0.0, 1.0);
  col = mix(col, INK, ink);

  // gentle vignette
  vec2 vp = uv - 0.5; vp.x *= aspect;
  col *= 1.0 - dot(vp, vp) * 0.25;

  gl_FragColor = outc(col, INK, ink);
}`;

// The ambient tidal patches are dialled back, and a soft circular
// sector of the SAME patched dots is revealed around the cursor —
// using the same noise field, so the revealed dots are stylistically
// indistinguishable from the flowing ones.
// ──────────────────────────────────────────────────────────────
const TIDE2 = `
void main(){
  vec2 uv = v_uv;
  float aspect = u_resolution.x / u_resolution.y;

  vec3 col = NAVY_DEEP * 0.85 + NAVY * 0.15;

  // five vertical wave-curves — invisible, shape the tidal dot patches
  float bandMask = 0.0;
  for(int i = 0; i < 5; i++){
    float fi = float(i);
    float x0 = (fi + 0.5) / 5.0;
    float amp = 0.045 + 0.018 * sin(fi * 1.7 + 0.3);
    float freq = 4.5 + fi * 0.55;
    float speed = 0.22 + fi * 0.06;
    amp  *= 1.0 + (u_mouseSmooth.y - 0.5) * 0.9;
    float phase = u_time * speed + fi + (u_mouseSmooth.x - 0.5) * 1.8;
    float xline = x0 + amp * sin(uv.y * freq + phase)
                     + amp * 0.4 * sin(uv.y * freq * 0.43 - phase * 0.7);
    float band = abs(uv.x - xline);
    bandMask = max(bandMask, smoothstep(0.16, 0.0, band));
  }

  // cursor reveal: a soft circular sector that exposes the same patched
  // dots wherever the pointer is. Distance is measured in aspect-correct
  // space so the revealed pool is a true circle. A gentle breathing edge
  // keeps the rim alive rather than a hard disc.
  vec2 d = uv - u_mouseSmooth; d.x *= aspect;
  float dM = length(d);
  float reveal = smoothstep(0.40, 0.015, dM);
  reveal *= 0.9 + 0.1 * sin(u_time * 1.5 - dM * 16.0);

  // ambient tide is dialled down so the cursor reveal is the star;
  // both feed the SAME patch noise so revealed dots match the flow.
  vec2 g = uv * vec2(aspect, 1.0) * 110.0;
  vec2 gf = fract(g) - 0.5;
  float n = fbm(uv * vec2(1.6, 2.2) + vec2(u_time * 0.04, -u_time * 0.07));
  float patches = smoothstep(0.52, 0.82, n);
  float field = max(bandMask * 0.22, reveal);
  float density = field * patches;
  float radius = density * 0.30;
  float dotMask = smoothstep(radius, radius - 0.08, length(gf)) * step(0.02, density);

  float ink = clamp(dotMask, 0.0, 1.0);
  col = mix(col, INK, ink);

  // gentle vignette
  vec2 vp = uv - 0.5; vp.x *= aspect;
  col *= 1.0 - dot(vp, vp) * 0.25;

  gl_FragColor = outc(col, INK, ink);
}`;
// A dense forest of thin vertical streaks that bend through a flow
// field.  The cursor warps the field locally; fast mouse motion
// stretches the streaks. Click drops a vortex.
// ──────────────────────────────────────────────────────────────
const DRIFT = `
vec2 flow(vec2 p, float t){
  // two layered curls
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

  // mouse becomes a low-frequency attractor that distorts the flow
  vec2 m = vec2(u_mouseSmooth.x * aspect, u_mouseSmooth.y);
  vec2 toM = m - p;
  float dM = length(toM);
  float pull = exp(-dM * 4.5);

  // click vortices — unrolled; Safari dislikes dynamic uniform-array indexing
  vec2 swirl = vec2(0.0);
  {
    vec3 c = u_clicks[0];
    if(c.z < 3.0){
      vec2 cp = vec2(c.x * aspect, c.y);
      vec2 d = cp - p;
      float r = length(d);
      float life = exp(-c.z * 1.4);
      vec2 perp = vec2(-d.y, d.x);
      swirl += perp / (r * r + 0.05) * life * 0.04;
    }
    c = u_clicks[1];
    if(c.z < 3.0){
      vec2 cp = vec2(c.x * aspect, c.y);
      vec2 d = cp - p;
      float r = length(d);
      float life = exp(-c.z * 1.4);
      vec2 perp = vec2(-d.y, d.x);
      swirl += perp / (r * r + 0.05) * life * 0.04;
    }
    c = u_clicks[2];
    if(c.z < 3.0){
      vec2 cp = vec2(c.x * aspect, c.y);
      vec2 d = cp - p;
      float r = length(d);
      float life = exp(-c.z * 1.4);
      vec2 perp = vec2(-d.y, d.x);
      swirl += perp / (r * r + 0.05) * life * 0.04;
    }
    c = u_clicks[3];
    if(c.z < 3.0){
      vec2 cp = vec2(c.x * aspect, c.y);
      vec2 d = cp - p;
      float r = length(d);
      float life = exp(-c.z * 1.4);
      vec2 perp = vec2(-d.y, d.x);
      swirl += perp / (r * r + 0.05) * life * 0.04;
    }
  }

  // streak coordinates: bend p through the flow field before tiling
  vec2 warp = flow(p * 1.2, u_time) * (0.18 + 0.10 * u_mouseVel)
            + toM * pull * 0.35
            + swirl;

  vec2 q = p + warp;

  // vertical thin streaks
  float streaks = abs(fract(q.x * 22.0) - 0.5);
  // make streaks broken / textured along y
  float along = fbm(vec2(q.x * 22.0 * 0.5, q.y * 4.0 + u_time * 0.2));
  float streakMask = smoothstep(0.06, 0.0, streaks) * smoothstep(0.25, 0.85, along);

  // tiny dots layered on top, density tied to flow magnitude
  vec2 g = q * 90.0;
  vec2 gf = fract(g) - 0.5;
  float flowMag = clamp(length(warp) * 1.4, 0.0, 1.0);
  float r = flowMag * 0.32;
  float dotMask = smoothstep(r, r - 0.07, length(gf)) * 0.6;

  // soft brighter halo around cursor
  float halo = exp(-dM * 8.0) * 0.20;

  float ink = clamp(streakMask + dotMask + halo, 0.0, 1.0);
  col = mix(col, INK, ink);

  // subtle blue glow where the cursor is
  col += NAVY * exp(-dM * 6.0) * 0.18;

  gl_FragColor = outc(col, INK, ink);
}`;








// ──────────────────────────────────────────────────────────────
// 03D · WEAVE DUO  — two woven bands, mirrored.
// The same fine guilloché band as Weave, drawn twice: one riding the
// upper half, one the lower half, travelling in opposite directions so
// the pair breathes symmetrically with a calm open gap between them.
// Mouse X drives both phases; the cursor glow brightens whichever band
// it's near. Pairs nicely with the centre radial dissolve.
// ──────────────────────────────────────────────────────────────
const WEAVE_DUO = `
// A configurable woven band so the two halves can look genuinely different.
//   center  vertical position      dir     travel direction (+1 / -1)
//   omega   wave frequency         thick   band half-spread
//   twist   per-line phase fan     ampS    amplitude scale
//   nl      strand count (as float, used for the loop cap via t)
float weaveBand(vec2 uv, float center, float dir, float omega,
                float thick, float twist, float ampS){
  float w      = omega + 1.5 * sin(u_time * 0.05);
  float phaseR =  dir * u_time * 0.20 + (u_mouseSmooth.x - 0.5) * 3.2;
  float phaseL = -dir * u_time * 0.16 - (u_mouseSmooth.x - 0.5) * 2.2;
  float cen    = center
               + 0.040 * sin(uv.x * 3.1 + dir * u_time * 0.5)
               + 0.028 * sin(uv.x * 5.7 - dir * u_time * 0.37);
  float ampBase = ampS * (1.0 + u_mouseVel * 0.18);

  float ink = 0.0;
  for(int i = 0; i < 56; i++){
    float t   = float(i) / 55.0;
    float yb  = cen + (t - 0.5) * thick;
    float amp = ampBase * mix(0.12, 1.0, t);
    float aR  = w * uv.x + phaseR + t * twist;
    float aL  = w * 0.82 * uv.x + phaseL + t * twist * 0.7;
    float wave = 0.62 * sin(aR) + 0.52 * sin(aL) + 0.18 * sin(2.1 * aR + 0.7);
    float y   = yb + amp * wave;
    float d   = abs(uv.y - y) * u_resolution.y;
    ink += smoothstep(1.5, 0.3, d);
  }
  return clamp(ink * 0.85, 0.0, 1.0);
}

void main(){
  vec2 uv = v_uv;
  float aspect = u_resolution.x / u_resolution.y;

  // TOP — a tight, high-frequency fine weave riding near the top edge,
  // drifting left->right, gentle amplitude.
  float top = weaveBand(uv, 0.17,  1.0, /*omega*/ 11.0, /*thick*/ 0.10,
                        /*twist*/ 0.45, /*amp*/ 0.06);

  // BOTTOM — a loose, low-frequency wide swell near the bottom edge,
  // drifting right->left, big lazy amplitude and a strong fan twist.
  float bot = weaveBand(uv, 0.84, -1.0, /*omega*/ 4.2, /*thick*/ 0.22,
                        /*twist*/ 1.6, /*amp*/ 0.20);

  float ink = max(top, bot);

  // cursor glow with a healthy base so both bands stay visible at rest
  vec2 d = uv - u_mouseSmooth; d.x *= aspect;
  float env = exp(-(d.x * d.x * 0.9 + d.y * d.y * 2.2));
  env = clamp(env * 0.9 + 0.55, 0.0, 1.0);

  float v = clamp(ink, 0.0, 1.0) * env;

  // distinct colour per band: top leans bright ink, bottom leans navy accent.
  vec3 topCol = mix(INK, NAVY, smoothstep(0.1, 0.95, uv.x) * 0.35);
  vec3 botCol = mix(NAVY, INK, smoothstep(0.1, 0.95, uv.x) * 0.30);
  vec3 strand = mix(botCol, topCol, step(bot, top));
  vec3 col = mix(NAVY_DEEP, strand, v);

  gl_FragColor = outc(col, strand, v);
}`;


// ──────────────────────────────────────────────────────────────
// 03E · STREAM — two independent columns of microfilaments.  A column is
// not a flat band: it is a narrow VOLUME.  Each filament is a helix on that
// volume — it has its own angular position and its own radius (both hashed,
// so spacing is never uniform), and the angle advances along the length at a
// rate that depends on the radius, so the bundle shears and torsions.
// Projecting those helices to 2D makes filaments bunch at the silhouette of
// the tube and disperse through its middle, which is what reads as smoke
// made of threads.  Depth comes from the helix phase: filaments on the far
// side are dimmer and softer than the ones in front.
// ──────────────────────────────────────────────────────────────
const WEAVE_STREAM = `
// Quadratic sin/cos. Input in radians. Close enough that helix silhouettes
// still bunch; a few muls instead of two trigs per filament per pixel.
vec2 sc(float a){
  vec2 t = fract(vec2(a + 1.57079633, a) * 0.15915494309 + 0.5) * 2.0 - 1.0;
  return t * (4.0 - 4.0 * abs(t));
}

// One column of filaments.  Returns vec2(ink, body alpha).
//   ang    nominal axis        cen    position across the frame
//   rBase  tube radius         twist  torsion rate along the length
//   spd    drift speed         ph     identity seed
vec2 column(vec2 p, float ang, float cen, float rBase,
            float twist, float spd, float ph){
  vec2 dirA = sc(ang);
  float al = dot(p, dirA);                      // along the column
  float ac = dot(p, vec2(-dirA.y, dirA.x));     // across it

  float ink = 0.0;
  float gate = 0.0;

  // wrap, don't return: Safari will not unroll a loop that follows a
  // return, and then rejects the shader. The cheap slab skips wander +
  // helix work for pixels that cannot hit this tube. Its margin includes the
  // wider column-level sway below, so the silhouette never gets clipped.
  if (abs(ac - cen) < rBase + 0.21) {
    float t  = u_time;

    // A broad shared spine bends the complete three-column bundle. The lower
    // frequencies make this read as column-level motion instead of filament
    // jitter, while the smaller seeded waves preserve depth between tubes.
    float flow = t * spd * 1.60;
    float c = cen;
    c += 0.040 * sin(al * 1.05 - t * 0.22);
    c += 0.022 * sin(al * 2.15 + t * 0.14 + 0.7);
    c += 0.038 * sin(al * 0.52 - flow + ph);
    c += 0.022 * sin(al * 1.21 - flow * 1.40 + ph * 2.3);
    c += 0.030 * sin(al * 0.85 - t * spd * 2.20 + ph);
    c += 0.016 * sin(al * 1.90 + t * spd * 1.50 + ph * 2.0);

    // radius swells and pinches along the length, and that profile travels
    // with the stream too — a long, narrow volume.
    float rp = 0.62 * (0.5 + 0.5 * sin(al * 0.62 - flow * 0.55 + ph * 3.0))
             + 0.38 * (0.5 + 0.5 * sin(al * 1.43 + flow * 0.31 + ph * 1.7));
    // tight floor/ceiling so the tube breathes without flaring wide
    float R = max(rBase * (0.82 + 0.28 * rp), 0.024);

    // everything that does not vary per filament, hoisted out of the loop
    float twAl    = twist * al;
    float tSpin   = t * spd * 0.55;
    float wobAmp  = 0.12 * R;
    float flowAl  = t * spd * 2.40;                 // travel along each fibre
    float o1 = fract(ph * 0.1731), o2 = fract(ph * 0.3947), o3 = fract(ph * 0.7219);

    float bound = R + wobAmp + 6.0 / u_resolution.y;
    gate = step(abs(ac - c), bound);

    if (gate > 0.0) {
      for(int i = 0; i < 12; i++){
        float fi = float(i);
        // low-discrepancy seeds: as irregular as a hash for this purpose, but
        // one multiply + one fract each instead of a full hash chain
        float h1 = fract(fi * 0.6180339887 + o1);         // angular seed
        float h2 = fract(fi * 0.7548776662 + o2);         // radial seed
        float h3 = fract(fi * 0.5698402910 + o3);         // clumping seed

        // filaments clump into a few loose bundles around the tube
        float th0 = h1 * 6.28318 + 0.85 * (h3 * 2.0 - 1.0);
        // h2*(2-h2) fills the volume almost like sqrt, without a sqrt
        float r = R * (0.22 + 0.78 * h2 * (2.0 - h2));

        // torsion + a per-filament spin so each fibre crawls along the helix
        // at its own pace instead of locking to the column
        float spin = tSpin * (0.70 + 0.90 * h1) + flowAl * (0.35 + 0.55 * h2);
        float th = th0 + twAl * (0.60 + 0.80 * h2) + spin;

        // travelling lateral wobble along the fibre — reads as flow, not jitter
        float wq = fract((al * 2.80 - flowAl * (0.85 + 0.70 * h3) + h1 * 6.37) * 0.15915494);
        float wob = wobAmp * (abs(wq * 2.0 - 1.0) * 2.0 - 1.0) * (0.65 + 0.55 * h2);

        vec2 cs = sc(th);
        float y  = c + r * cs.x + wob;
        float zc = 0.5 + 0.5 * cs.y;                 // 1 = near side, 0 = far side

        // a minority of filaments are noticeably thicker, so the bundle reads
        // as fibres of different gauge rather than one uniform hair weight
        float heavy = step(0.82, h3);
        float gauge = mix(1.0, 2.35, heavy);

        // soft brightness pulse travelling along each strand
        float pulse = 0.88 + 0.12 * (1.0 - abs(fract(al * 1.10 - flowAl * (0.55 + 0.45 * h1) + h3) * 2.0 - 1.0));

        float d = abs(ac - y) * u_resolution.y;      // distance in screen px
        float wpx = mix(1.90, 0.95, zc) * gauge;     // far filaments read softer
        ink += smoothstep(wpx, 0.22, d) * mix(0.40, 1.0, zc) * mix(1.0, 1.45, heavy) * pulse;
      }
    }
  }

  // 12 filaments vs 18: bump the saturate so the body still reads solid
  float lit = (1.0 - exp(-ink * 2.05)) * gate;
  // body alpha: how much this column occludes whatever sits behind it
  return vec2(lit, lit * 0.65);
}

void main(){
  vec2 uv = v_uv;
  float aspect = u_resolution.x / u_resolution.y;
  vec2 p = vec2(uv.x * aspect, uv.y);

  // coarse slab around the three columns (pattern space). Most of the
  // canvas never enters column() at all.
  vec2 slabDir = sc(-0.50);
  float slab = dot(p, vec2(-slabDir.y, slabDir.x));

  float ink = 0.0;
  if (slab > 0.32 && slab < 1.42) {
    // three columns close enough to read as one stream, with a little air
    // between them so the overlaps still show depth
    vec2 c1 = column(p, -0.47, 0.82, 0.095,  2.60, 0.07, 0.0);
    vec2 c2 = column(p, -0.53, 0.94, 0.110, -1.90, 0.05, 4.7);
    vec2 c3 = column(p, -0.50, 0.72, 0.085,  3.10, 0.08, 9.1);

    // layered compositing: each column is occluded by the ones in front of it,
    // so the overlaps read as depth rather than as addition
    ink = c3.x;
    ink = c2.x + ink * (1.0 - c2.y);
    ink = c1.x + ink * (1.0 - c1.y);
  }

  float v = clamp(ink, 0.0, 1.0) * 0.94;

  // filaments drift from ink to the navy accent across the diagonal
  vec3 strand = mix(INK, NAVY, smoothstep(0.0, 1.0, uv.x * 0.55 + uv.y * 0.45) * 0.6);
  vec3 col = mix(NAVY_DEEP, strand, v);

  gl_FragColor = outc(col, strand, v);
}`;


// ──────────────────────────────────────────────────────────────
// 03F · STREAM FLUID — four tightly overlapping woven layers sharing a
// common travelling spine. Their smaller independent motion keeps the weave
// alive, while the shared silhouette reads as one fluid pillar.
// ──────────────────────────────────────────────────────────────
const STREAM_FLUID = `
// Parabolic sine approximation. The weave does not need exact trigonometry,
// and this replaces hundreds of native sin() calls per pixel with cheap ALU.
float fastSin(float a){
  float x = fract(a * 0.15915494309 + 0.5) * 2.0 - 1.0;
  return x * (4.0 - 4.0 * abs(x));
}

// One woven band travelling along its own axis.
//   cen    position across the frame   thick  band spread
//   ampS   wave amplitude
//   omega  wave frequency        twist  per-strand phase fan
//   dir    travel direction      spd    drift speed        ph  seed
vec2 fluidBand(vec2 p, float cen, float thick, float ampS,
               float omega, float twist, float dir, float spd, float ph){
  // All layers use the same axis. Keeping it constant also avoids evaluating
  // two trigonometric functions for each band and pixel.
  vec2 dirA = vec2(0.8869949, -0.4617792);
  float al = dot(p, dirA);                      // along the band
  float ac = dot(p, vec2(-dirA.y, dirA.x));     // across it
  float t  = u_time;

  // Most of the motion is shared by all four layers. A smaller seeded drift
  // keeps their strands from locking together without splitting the pillar.
  float sharedFlow = t * 0.18;
  float flow = dir * t * spd;
  float c = cen;
  c += 0.060 * fastSin(al * 0.64 - sharedFlow);
  c += 0.032 * fastSin(al * 1.37 + sharedFlow * 1.45 + 0.8);
  c += 0.018 * fastSin(al * 1.05 - flow * 2.20 + ph);
  c += 0.010 * fastSin(al * 2.10 + flow * 1.50 + ph * 2.0);

  // Two travelling waves replace the former five-octave fbm width field.
  float breath = 0.62 * (0.5 + 0.5 * fastSin(al * 0.62 - sharedFlow * 0.8 + ph))
               + 0.38 * (0.5 + 0.5 * fastSin(al * 1.43 + flow * 0.7 + ph * 1.7));
  float th = thick * (0.88 + 0.18 * breath);

  float w      = omega + 1.1 * fastSin(t * 0.05);
  float phaseR =  dir * t * 0.20 + ph;
  float phaseL = -dir * t * 0.16 + ph * 1.7;

  // torsion: the per-strand phase fan itself grows and shrinks along the
  // band, and a travelling waist pinches the strands back together at
  // nodes — between nodes they splay open.  That is the DNA read.
  // the waist floor is high, so the column narrows without ever ballooning.
  float fan   = twist * (1.0 + 0.58 * fastSin(al * 0.62 - flow * 1.1 + ph));
  float waist = 0.68 + 0.32 * abs(fastSin(al * 1.65 - flow * 1.4 + ph * 0.6));

  float ink = 0.0;
  // Skip the strand loop for pixels outside this layer's maximum reach.
  if (abs(ac - c) < th * 0.58 + ampS * 1.38 + 0.018) {
    for(int i = 0; i < 22; i++){
      float q = float(i) / 21.0;
      float yb  = c + (q - 0.5) * th * waist;
      float amp = ampS * mix(0.12, 1.0, q) * waist;
      float aR  = w * al + phaseR + q * fan;
      float aL  = w * 0.82 * al + phaseL + q * fan * 0.7;
      float wave = 0.62 * fastSin(aR) + 0.52 * fastSin(aL)
                 + 0.18 * fastSin(2.1 * aR + 0.7);
      float y = yb + amp * wave;
      float d = abs(ac - y) * u_resolution.y;
      ink += smoothstep(1.65, 0.28, d);
    }
  }

  // A little more gain preserves the dense body with fewer strands.
  float lit = 1.0 - exp(-ink * 1.18);
  return vec2(lit, lit * 0.65);
}

void main(){
  vec2 uv = v_uv;
  float aspect = u_resolution.x / u_resolution.y;
  vec2 p = vec2(uv.x * aspect, uv.y);

  // Reject most of the canvas before entering any per-strand loop.
  vec2 slabDir = vec2(0.8869949, -0.4617792);
  float slab = dot(p, vec2(-slabDir.y, slabDir.x));

  float ink = 0.0;
  if (slab > 0.48 && slab < 1.50) {
    // Axes sit only 0.07 apart (previously 0.14), so their shared spine and
    // wider overlap merge the layers into one deep, braided pillar.
    vec2 b1 = fluidBand(p, 0.88, 0.20, 0.108, 4.60, 5.60,  1.0, 0.16, 0.0);
    vec2 b2 = fluidBand(p, 0.95, 0.19, 0.118, 3.40, 7.80, -1.0, 0.10, 4.7);
    vec2 b3 = fluidBand(p, 1.02, 0.20, 0.112, 5.30, 6.40, -1.0, 0.20, 9.1);
    vec2 b4 = fluidBand(p, 1.09, 0.18, 0.124, 3.90, 8.60,  1.0, 0.08, 2.3);

    // Painter order: overlaps occlude instead of adding, preserving depth.
    ink = b4.x;
    ink = b3.x + ink * (1.0 - b3.y);
    ink = b2.x + ink * (1.0 - b2.y);
    ink = b1.x + ink * (1.0 - b1.y);
  }

  float v = clamp(ink, 0.0, 1.0) * 0.94;

  vec3 strand = mix(INK, NAVY, smoothstep(0.0, 1.0, uv.x * 0.55 + uv.y * 0.45) * 0.6);
  vec3 col = mix(NAVY_DEEP, strand, v);

  gl_FragColor = outc(col, strand, v);
}`;


// Metadata for each wallpaper — used to render the hero overlays.
const WALLPAPERS = [
  {
    id: 'tide',
    badge: '01 · TIDE',
    label: 'A quiet current.',
    tagline: 'A halftone field that drifts and breathes with your cursor.',
    hint: 'MOVE TO STEER THE TIDE',
    fragmentSource: TIDE,
  },
  {
    id: 'drift',
    badge: '02 · DRIFT',
    label: 'Read the room.',
    tagline: 'A vector field that bends toward you, faster when you move.',
    hint: 'DRAG TO STIR · CLICK TO SWIRL',
    fragmentSource: DRIFT,
  },
  {
    id: 'weaveduo',
    badge: '03D · WEAVE DUO',
    label: 'Twin threads.',
    tagline: 'Two woven bands, mirrored top and bottom, breathing in opposite directions.',
    hint: 'MOVE TO WEAVE',
    fragmentSource: WEAVE_DUO,
  },
  {
    id: 'weavestream',
    badge: '03E · STREAM',
    label: 'Filament columns.',
    tagline: 'Narrow volumes of microfilaments, torsioning and crossing in depth.',
    hint: 'STREAM',
    fragmentSource: WEAVE_STREAM,
  },
  {
    id: 'streamfluid',
    badge: '03F · STREAM FLUID',
    label: 'Woven current.',
    tagline: 'The stream, drawn as Duo-style woven bands instead of filaments.',
    hint: 'STREAM FLUID',
    fragmentSource: STREAM_FLUID,
  },
];

export interface Wallpaper {
  id: string;
  badge: string;
  label: string;
  tagline: string;
  hint: string;
  fragmentSource: string;
}

export const WALLPAPERS_TYPED: Wallpaper[] = WALLPAPERS;
export { WALLPAPERS };
export default WALLPAPERS as Wallpaper[];
