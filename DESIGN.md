---
name: Zonda Health Brand Identity
colors:
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
  h1:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: '0'
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
  data-mono:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: -0.01em
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

This design system is engineered for a high-tech healthtech environment where clinical precision meets cutting-edge data science. The brand personality is authoritative yet energetic, designed to evoke feelings of technological advancement, speed, and absolute clarity.

The visual style is a fusion of **High-Contrast Bold** and **Minimalism**. It now uses a bright, near-white foundation so the product feels crisp, legible, and trustworthy at first glance, while saturated cobalt and sharp yellow accents provide the energy. Inspired by the clarity of top-tier fintech platforms, the aesthetic prioritizes information density without sacrificing legibility, using vibrant accents to guide the user's eye through complex health metrics.

## Colors

The color strategy for this design system is built on a "Clinical Paper + Signal Color" philosophy. The foundation is a cool, bright neutral that keeps the interface open, credible, and easy to scan, while still leaving room for strong color punctuation.

The **Primary Blue** acts as the core brand driver, used for navigation emphasis, links, and status indicators. The **Tertiary and Accent Yellows** are reserved for high-impact moments: critical data points, active toggle states, and primary call-to-actions. These hits create urgency without overwhelming the page. Secondary blues are used to create depth within the light interface, providing subtle layering for containers and non-critical interactive elements.

## Typography

Space Grotesk is the sole typeface for this design system, chosen for its technical, geometric construction and distinctive "tech" personality. Its eccentricities—like the flared terminals and idiosyncratic curves—give the healthtech platform a futuristic, scientific edge.

Headlines should be set with tight letter-spacing to emphasize the bold, high-impact nature of the brand. For data-heavy views, use the `label-caps` style to categorize information with institutional authority. While Space Grotesk is a proportional font, its geometric nature allows it to perform exceptionally well for numerical health data, providing the rhythmic clarity of a monospaced font with the readability of a modern sans-serif.

## Layout & Spacing

This design system utilizes a rigorous **Fixed Grid** model. The layout is structured on a 12-column grid system for desktop, ensuring that complex medical data dashboards remain aligned and scannable.

The spacing rhythm is strictly based on an 8px base unit. This ensures a mathematical consistency that mirrors the precision of the health sciences. For information-dense components, like patient records or lab results, the 'sm' (12px) and 'xs' (4px) units should be used to pack data efficiently while maintaining a clean, systematic appearance. Wide 'xl' (80px) vertical margins are reserved for high-impact landing areas to provide "breathable" luxury amidst the technical density.

## Elevation & Depth

In this design system, depth is communicated through **Tonal Layers** and crisp borders rather than heavy shadows. Because the background is light, elevation is achieved by stepping surfaces through cool whites and pale blue-grays.

- **Level 0 (Base):** Near-white background (#fcfcff).
- **Level 1 (Cards/Containers):** Soft paper neutral (#f4f6fd) with a subtle 1px border using a low-opacity Primary Blue.
- **Level 2 (Modals/Popovers):** Bright neutral (#fdfdff) with a slightly stronger shadow and border to maintain clarity.
- **Glow Effects:** Critical interactive elements or active states may use a restrained yellow glow to simulate signal intensity without darkening the whole interface.

## Shapes

The shape language is defined by a consistent 8px (0.5rem) corner radius. This "Rounded" level strikes a balance between the clinical coldness of sharp corners and the overly playful nature of fully rounded pill shapes.

This 8px radius applies to buttons, input fields, cards, and modal windows, creating a cohesive visual thread. Small utility elements like tags or badges may use a "rounded-xl" (1.5rem) setting to create a distinct pill shape, specifically for status indicators to help them stand out against the more rigid, rectangular structure of data containers.

## Components

### Buttons

Primary buttons use the high-impact Tertiary Yellow (#eaea00) with dark text for maximum contrast and "clickability." Secondary buttons are outlined in Primary Blue with a bright neutral fill. All buttons feature a 1px border and the 8px corner radius.

### Input Fields

Inputs are designed with a bright neutral background (#fdfdff) and a subtle Primary Blue border. On focus, the border transitions to the vibrant Accent Yellow, signaling an active data-entry state.

### Cards

Cards are the workhorse of the design system. Inspired by Plaid, they feature generous internal padding (24px) and clear, structured typography. Data points within cards should use the `data-mono` type style.

### Chips & Badges

Used for health status (e.g., "Normal", "Critical"). "Critical" badges should utilize the Accent Yellow as a background, while "Normal" status should use a subtle Primary Blue.

### Lists

Lists are separated by 1px borders in a muted version of the Neutral color, ensuring that row-based medical data is easily scannable without adding unnecessary visual bulk.
