export const BACKGROUNDS = {
  black: '#000000',
  darkblue: '#053a72',
  'visual-darkblue': '#07264b',
  'solid-dark-blue': '#0e3c4a',
  'vitality-yellow': 'var(--color-vitality-yellow)',
  'vitality-green': '#9bed25',
  white: '#ffffff',
  blue: '#004ed3',
  'dark-blue': 'linear-gradient(135deg, #10316f 0%, #082861 50%, #003daa 100%)',
  'gradient-blue':
    'linear-gradient(135deg, rgb(19,105,211) 0%, rgb(10,34,214) 52%, #1467f4 100%)',
  green: '#00a878',
  'dark-green': '#005348',
  'gradient-green':
    'linear-gradient(135deg, rgb(7,130,66) 0%, rgb(21,201,96) 52%, rgb(5,116,75) 100%)',
  'gradient-black':
    'linear-gradient(135deg, rgb(0,0,0) 0%, rgb(13,2,59) 52%, #1a1a1a 100%)',
  'gradient-vitality-yellow':
    'linear-gradient(135deg,rgb(242, 255, 0) 0%, rgb(230, 245, 31) 52%,rgba(255, 234, 72, 0.76) 100%)',
  yellow: '#ffe066',
  'light-yellow': '#fff59d',
  grey: '#f4f6fd',
  neutral: '#edf1fb',
  purple: '#7c3aed',
  'light-blue': '#5c8cff',
  transparent: 'transparent',
} as const;

export const LINE_COLORS = {
  white: [1, 1, 1] as const,
  black: [0, 0, 0] as const,
} as const;

export type NamedBackground = keyof typeof BACKGROUNDS;
export type NamedLineColor = keyof typeof LINE_COLORS;
export type SpotlightSize = 'sm' | 'md' | 'lg';

export const SPOTLIGHT_GRADIENTS: Record<
  SpotlightSize,
  (color: string) => string
> = {
  sm: (color) =>
    `radial-gradient(ellipse at center, ${color} 0%, ${color} 20%, transparent 55%)`,
  md: (color) =>
    `radial-gradient(ellipse at center, ${color} 0%, ${color} 35%, transparent 70%)`,
  lg: (color) =>
    `radial-gradient(ellipse at center, ${color} 0%, ${color} 50%, transparent 85%)`,
};

export function extractSolidColor(background: string): string {
  const hex = background.match(/#[0-9a-fA-F]{3,8}/);
  if (hex) return hex[0];

  const rgb = background.match(/rgb\([^)]+\)/);
  if (rgb) return rgb[0];

  return background;
}
