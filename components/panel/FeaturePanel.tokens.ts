export enum FeaturePanelColor {
  Navy = 'navy',
  Ink = 'ink',
  Teal = 'teal',
  Plum = 'plum',
  Forest = 'forest',
  Slate = 'slate',
  Gold = 'gold',
  Paper = 'paper',
  BluePurpleGradient = 'bluePurpleGradient',
  BlueYellowGradient = 'blueYellowGradient',
  BlueGreenGradient = 'blueGreenGradient',
  White = 'white',
  DarkBlue = 'darkBlue',
  Yellow = 'yellow',
}

export enum FeaturePanelInkColor {
  Cream = 'cream',
  White = 'white',
  Amber = 'amber',
  Sky = 'sky',
  Azure = 'azure',
  Mint = 'mint',
  Coral = 'coral',
}

export enum FeaturePanelBackgroundStyle {
  Wave = 'wave',
  FullDrift = 'fullDrift',
  WaveBlueLeft = 'waveBlueLeft',
}

type PanelColorDefinition = {
  background: string;
  imageSrc?: string;
  imageClassName?: string;
};

type PanelInkColorDefinition = {
  color: string;
};

type PanelBackgroundStyleDefinition = {
  src: string;
  className: string;
};

export const FEATURE_PANEL_COLORS = {
  [FeaturePanelColor.Navy]: {
    background: '#072351',
  },
  [FeaturePanelColor.Ink]: {
    background: '#0a0a12',
  },
  [FeaturePanelColor.Teal]: {
    background: '#06303a',
  },
  [FeaturePanelColor.Plum]: {
    background: '#241032',
  },
  [FeaturePanelColor.Forest]: {
    background: '#08271c',
  },
  [FeaturePanelColor.Slate]: {
    background: '#171f2e',
  },
  [FeaturePanelColor.Gold]: {
    background: '#d8b53a',
  },
  [FeaturePanelColor.Paper]: {
    background: '#f4f5f7',
  },
  [FeaturePanelColor.BluePurpleGradient]: {
    background: '#072351',
    imageSrc: '/assets/background-gradients/blue-purple-gradient.png',
    imageClassName: 'object-cover',
  },
  [FeaturePanelColor.BlueYellowGradient]: {
    background: '#d8b53a',
    imageSrc: '/assets/background-gradients/blue-yellow-gradient.png',
    imageClassName: 'object-cover',
  },
  [FeaturePanelColor.BlueGreenGradient]: {
    background: '#06303a',
    imageSrc: '/assets/background-gradients/bluegreen.png',
    imageClassName: 'object-cover',
  },
  [FeaturePanelColor.White]: {
    background: '#f4f5f7',
  },
  [FeaturePanelColor.DarkBlue]: {
    background: '#072351',
  },
  [FeaturePanelColor.Yellow]: {
    background: '#d8b53a',
  },
} satisfies Record<FeaturePanelColor, PanelColorDefinition>;

export const FEATURE_PANEL_INK_COLORS = {
  [FeaturePanelInkColor.Cream]: {
    color: '#f4f1ea',
  },
  [FeaturePanelInkColor.White]: {
    color: '#ffffff',
  },
  [FeaturePanelInkColor.Amber]: {
    color: '#e6a93c',
  },
  [FeaturePanelInkColor.Sky]: {
    color: '#8fc7f0',
  },
  [FeaturePanelInkColor.Azure]: {
    color: '#2f7fc4',
  },
  [FeaturePanelInkColor.Mint]: {
    color: '#8fe0c0',
  },
  [FeaturePanelInkColor.Coral]: {
    color: '#f0876b',
  },
} satisfies Record<FeaturePanelInkColor, PanelInkColorDefinition>;

export const FEATURE_PANEL_BACKGROUND_STYLES = {
  [FeaturePanelBackgroundStyle.Wave]: {
    src: '/assets/styling/wave.png',
    className: 'object-cover',
  },
  [FeaturePanelBackgroundStyle.FullDrift]: {
    src: '/assets/styling/full-drift.png',
    className: 'object-cover',
  },
  [FeaturePanelBackgroundStyle.WaveBlueLeft]: {
    src: '/assets/styling/wave-blue-left.png',
    className: 'object-cover',
  },
} satisfies Record<
  FeaturePanelBackgroundStyle,
  PanelBackgroundStyleDefinition
>;
