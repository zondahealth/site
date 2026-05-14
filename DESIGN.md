---
name: Zonda Health Brand Identity
colors:
  brand-blue: '#226ffd'
  brand-blue-dark: '#0e3c75'
  accent-yellow: '#eaea00'
  ink: '#151b2b'
  paper: '#fcfcff'
  surface: '#f7f8fc'
  surface-dim: '#eef1f8'
  surface-bright: '#fcfcff'
  surface-container-lowest: '#fdfdff'
  surface-container-low: '#f4f6fd'
  surface-container: '#edf1fb'
  surface-container-high: '#e5ebfa'
  surface-container-highest: '#dde5f7'
  on-surface: '#151b2b'
  on-surface-variant: '#4a556f'
  inverse-surface: '#1d2434'
  inverse-on-surface: '#f7f8fc'
  outline: '#9aa6bc'
  outline-variant: '#d3dae8'
  surface-tint: '#5c8cff'
  primary: '#226ffd'
  on-primary: '#f8f9ff'
  primary-container: '#5c8cff'
  on-primary-container: '#082861'
  inverse-primary: '#0055d2'
  secondary: '#5d74ab'
  on-secondary: '#f8f9ff'
  secondary-container: '#dce6ff'
  on-secondary-container: '#294b84'
  tertiary: '#cdcd00'
  on-tertiary: '#323200'
  tertiary-container: '#b1b100'
  on-tertiary-container: '#424200'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b2c5ff'
  on-primary-fixed: '#001848'
  on-primary-fixed-variant: '#0040a1'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174c'
  on-secondary-fixed-variant: '#003daa'
  tertiary-fixed: '#eaea00'
  tertiary-fixed-dim: '#cdcd00'
  on-tertiary-fixed: '#1d1d00'
  on-tertiary-fixed-variant: '#494900'
  background: '#fcfcff'
  on-background: '#151b2b'
  surface-variant: '#dde5f7'
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '0.96'
    letterSpacing: '0'
  h1:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: '0'
  h2:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: '0'
  h3:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: '0'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: '0'
  data-mono:
    fontFamily: Geist Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: '0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  grid_columns: '12'
  grid_gutter: 24px
  grid_margin: 32px
---

## Brand & Style

This design system is engineered for a high-tech health infrastructure brand where clinical operations, regional networks, and data products feel precise, legible, and connected. The personality is clear, assured, practical, and technically credible. It should feel modern without drifting into vague futurism.

The visual lane is **Plaid-like infrastructure clarity adapted for healthcare**: near-white pages, dark-blue authority, vivid blue product signal, and a controlled yellow spark. The references are layered product screens, map systems, network diagrams, globe/ring motifs, floating identity cards, and engraved or line-art healthcare illustrations. The page should look like a real operating system for health data, not a generic SaaS landing page.

White remains the default environment. Dark blue appears as a decisive panel, hero field, footer, or high-contrast product moment. Yellow is a vibrant accent, not the main brand field.

## Colors

The color strategy is **White Infrastructure + Blue System + Yellow Signal**.

- **Paper / Surface:** `#fcfcff`, `#f7f8fc`, and blue-tinted containers keep the interface bright and professional.
- **Default Blue:** `#226ffd` is the primary brand color. Use it for core actions, product strokes, active navigation, links, diagrams, map paths, controls, and key highlights.
- **Dark Blue:** `#0e3c75`, `#151b2b`, and related deep blues provide authority and contrast. Use them for hero panels, footers, text, dense product moments, and high-trust sections.
- **Vibrant Yellow:** `#eaea00` is the accent. Use it for short emphasis, logo treatments, selected metric values, focus rings, signal lines, and occasional campaign-level panels. Keep it scarce so it stays valuable.

Avoid letting purple, green, pink, or multicolor gradients become brand-defining. They can appear inside imported product artwork or isolated feature panels, but the durable system should read as white, blue, dark blue, and yellow.

## Typography

Manrope is the primary interface and body typeface. It gives the brand a calm, operational voice and keeps Spanish and English copy readable across marketing and product pages.

Space Grotesk is reserved for large display moments, especially hero headlines or oversized product statements that need a more technical edge. Geist Sans is acceptable for compact controls. Geist Mono should be used only for code, identifiers, coordinates, IDs, and tabular data where the monospaced structure improves scanning.

Headlines should rely on scale, weight, and line height rather than decorative effects. Avoid gradient text as a brand habit. Labels may use uppercase for short metadata, but body copy should stay sentence case and easy to scan.

## Layout & Spacing

This design system uses a rigorous grid, but the composition should feel like an assembled product ecosystem rather than a stack of generic sections. Use a 12-column desktop grid, clear alignments, and strong section pacing. Large visual modules should combine real product imagery, floating cards, maps, or network diagrams with concise copy.

The spacing rhythm is based on an 8px unit. Dense product surfaces can use `xs` and `sm` spacing, while brand sections should use larger rhythm so the page has confidence and air. Prefer fewer, more decisive visual panels over many identical card grids.

## Elevation & Depth

Depth is communicated through **tonal layers, crisp borders, and composited assets** rather than heavy shadows. Because the background is light, elevation is achieved by stepping surfaces through cool whites and pale blue-grays, then using restrained blue or yellow signal lines.

- **Level 0 (Base):** Near-white background (#fcfcff).
- **Level 1 (Containers):** Soft paper neutral (#f4f6fd) with a subtle 1px blue-tinted border.
- **Level 2 (Overlays):** Bright neutral (#fdfdff) with a controlled shadow and stronger border to maintain clarity.
- **Dark Field:** Dark blue panels may carry video, wave textures, network rings, or engraved assets when a section needs weight.
- **Signal Effects:** Yellow may glow or pulse only for focused emphasis, never as ambient decoration across the whole page.

## Shapes

The shape language balances product precision with friendly healthcare accessibility. Large feature panels use modest 8px corners. Floating identity cards and system chips can use larger radii when they are behaving like overlaid UI artifacts.

Buttons are allowed to be pill-shaped because the current product language uses rounded, high-confidence actions. Cards and panels should not all become soft blobs. Keep structural modules more squared so the brand still feels precise.

## Imagery & Art Direction

The visual language should feel like infrastructure made visible:

- Product maps, phone mockups, dashboards, patient lists, identity cards, and routing overlays.
- Blue linework, rings, paths, and network diagrams over white or dark-blue fields.
- Transparent PNG compositions that can float over sections without boxed stock-photo treatment.
- Engraved or guilloche-style medical figures, globes, and verification motifs when the story is trust, identity, or interoperability.
- Real interface details at inspection quality. Do not blur important product screens into atmosphere.

Avoid generic doctors in stock-photo rooms, abstract gradient blobs, empty dashboard placeholders, and healthcare cliches that could belong to any clinic software.

## Components

### Buttons

Primary buttons should default to Brand Blue (#226ffd) with light text. Use Dark Blue (#0e3c75) for heavier or more institutional actions. Yellow buttons are reserved for accent CTAs, launch moments, or short high-energy sections where the surrounding field is dark blue or otherwise controlled.

Secondary buttons are outlined in Primary Blue with a bright neutral fill. Ghost and link buttons should use blue or dark blue text. Focus rings may use yellow because it is a strong accessibility signal.

### Input Fields

Inputs use a bright neutral background (#fdfdff) and a subtle blue-tinted border. On focus, use Brand Blue for the border and a restrained yellow ring only when extra visibility is needed.

### Cards

Cards are not the default answer. Use them for repeated items, identity panels, product snippets, and floating proof points. Inspired by Plaid, cards should feel like real interface fragments: named people, IDs, locations, network permissions, scores, dates, and status states. Data points can use the `data-mono` style.

### Chips & Badges

Use chips and badges for states, permissions, specialties, and operational labels. Blue is the default status color. Yellow is for warnings, highlighted proof points, and selected metrics. Do not rely on color alone for critical meaning.

### Lists

Lists are separated by 1px borders in a muted version of the Neutral color, ensuring that row-based medical data is easily scannable without adding unnecessary visual bulk.

### Feature Panels

Feature panels can carry the brand's expressive range: white product compositions, blue gradients, dark-blue wave fields, yellow campaign moments, and line-art assets. Their content should still be structured and inspectable. A panel earns its color by making a specific product capability easier to understand.
