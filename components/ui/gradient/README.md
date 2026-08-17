# Shader + Gradient components for Next.js

Drop this folder into your app (e.g. `components/halftone/`). No dependencies
beyond React — everything is plain WebGL on a canvas.

```
nextjs/
  shaders.ts          GLSL sources, generated from the studio
  useShaderCanvas.ts  shared WebGL plumbing (compile, resize, frame loop)
  Shader.tsx          <Shader variant="filaments" />
  Gradient.tsx        <Gradient colors={[...]}>…</Gradient>
```

All three modules are `'use client'` — they touch `canvas` and
`requestAnimationFrame`, so they cannot be server components.

---

## `<Shader />`

Fills its nearest positioned ancestor. **Give that ancestor
`position: relative`** or the canvas will escape to the page.

```jsx
import Shader from '@/components/halftone/Shader';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0e3c75]">
      <Shader variant="filaments" ink="#f8f9ff" bg="#0e3c75" />
      <div className="relative z-10 p-16">
        <h1>Your content sits on top</h1>
      </div>
    </section>
  );
}
```

### Variants

| `variant`   | what it is |
|-------------|------------|
| `filaments` | columns of microfilaments twisting in depth (the Stream shader) |
| `fluid`     | the same flow drawn as woven bands, DNA-like torsion |
| `duo`       | two mirrored woven bands |
| `tide`      | halftone dot field |
| `drift`     | vector-field streaks |

### Props

| prop | default | notes |
|------|---------|-------|
| `variant` | `'filaments'` | see table above |
| `ink` | `'#f8f9ff'` | the strands / dots |
| `bg` | `'#0e3c75'` | base color; the shader derives a lighter accent from it |
| `transparent` | `false` | emit alpha instead of a background — see below |
| `angle` | `0` | rotate the whole pattern, degrees |
| `shiftX`, `shiftY` | `0` | pan, in screen heights (±1 = a full height) |
| `paused` | `false` | freeze to a still frame |
| `frozenAt` | `8` | which second to freeze on |
| `maxDpr` | `1.75` | lower to `1` on heavy pages to cut fill cost |

### Transparent mode

With `transparent`, the canvas draws **only** the strands and leaves the rest
alpha-0, so anything behind shows through — including a `<Gradient>`:

```jsx
<Gradient colors={['#f8f9ff', '#226ffd', '#0e3c75']}>
  <div className="relative min-h-[70vh]">
    <Shader variant="filaments" transparent ink="#f8f9ff" />
    <h1 className="relative z-10">Strands over the gradient</h1>
  </div>
</Gradient>
```

`bg` is ignored for compositing in this mode, but the shader still uses it to
mix its internal accent — keep it near your real background.

---

## `<Gradient />`

Wraps its children and paints a soft mesh gradient behind them. Each color
becomes a point in the frame; every pixel is a gaussian-weighted blend of all
of them, which is why the falloff is non-linear instead of a straight ramp.

```jsx
import Gradient from '@/components/halftone/Gradient';

<Gradient
  colors={['#f8f9ff', '#f4f6fd', '#226ffd', '#0e3c75', '#151b2b']}
  softness={0.36}
  className="min-h-screen"
>
  <h1>Content</h1>
</Gradient>
```

### Props

| prop | default | notes |
|------|---------|-------|
| `colors` | brand ramp | 2–8 hex strings, auto-placed on a diagonal |
| `points` | — | `[{ color, x, y }]` for explicit placement (`y: 0` = top) |
| `softness` | `0.38` | blend radius — **read the note below** |
| `grain` | `0.05` | dither that kills banding on large fills |
| `className`, `style` | — | applied to the wrapper `div` |
| `canvasStyle` | — | applied to the canvas |

**Softness is the one knob that matters.** It is the gaussian sigma, so a high
value makes every point reach every pixel and the colors average into one flat
mid-tone. The wider the tonal range of your palette, the lower it must go:

- colors in a narrow band (all mid-blues) → `0.55–0.65`
- a full ramp from near-white to near-black → `0.30–0.40`

The brand presets use `0.32–0.46` for exactly this reason.

### Ready-made palettes

```js
const BRAND        = ['#f8f9ff', '#f4f6fd', '#226ffd', '#0e3c75', '#151b2b'];
const BRAND_DEEP   = ['#2a7bff', '#0e3c75', '#122a52', '#151b2b', '#0d1220'];
const BRAND_ACCENT = ['#eaea00', '#f8f9ff', '#226ffd', '#0e3c75', '#323200'];
const BRAND_MIST   = ['#f8f9ff', '#f4f6fd', '#dbe4fb', '#226ffd', '#4a556f'];
```

---

## Performance

Shader cost scales with **canvas area**. `fluid` now rejects pixels outside its
pillar and draws 22 strands across each of four overlapping layers. If a page
feels heavy:

1. `maxDpr={1}` — the single biggest lever, cuts fill by ~3× on retina.
2. Size the canvas to the section, not the viewport.
3. Use `paused` for below-the-fold instances.

Both components clamp device pixel ratio to a **minimum of 1**. Without that
floor a zoomed-out browser renders a buffer smaller than the CSS box and
stretches it back up — which visibly thins the strands, since the shader sizes
them in real pixels.

## Notes

- The shaders take no pointer input. It was removed deliberately: the
  per-frame uniform updates were expensive and the motion reads better
  self-driven.
- Nothing repeats on a loop — the motion is driven by noise sampled over time,
  so there is no seam and no cycle length.
- `shaders.ts` is generated. To pull changes from the studio, regenerate it
  rather than hand-editing.

## Exported types

```ts
import Shader, { type ShaderProps, type ShaderVariant, VARIANTS } from './Shader';
import Gradient, { type GradientProps, type GradientPoint } from './Gradient';
import { type Wallpaper } from './shaders';
import { useShaderCanvas, hexToRgb, type RGB } from './useShaderCanvas';
```

`ShaderVariant` is a union of the five variant keys, so `variant` autocompletes
and a typo is a compile error rather than a console warning.

Both components spread the rest of their props onto the underlying element
(`canvas` for `Shader`, `div` for `Gradient`), so `id`, `data-*`, event
handlers and the like are all typed and pass straight through.
