import { BACKGROUNDS } from '../ui/colors';

export enum FeaturePanelTone {
  Black = 'black',
  DarkBlue = 'dark-blue',
  GradientBlack = 'gradient-black',
  GradientBlue = 'gradient-blue',
  GradientDeepBlue = 'gradient-deep-blue',
  GradientGreen = 'gradient-green',
  GradientVitalityYellow = 'gradient-vitality-yellow',
  SolidBlue = 'solid-blue',
  SolidDarkBlue = 'solid-dark-blue',
  SolidDarkGreen = 'solid-dark-green',
  SolidGreen = 'solid-green',
  SolidGrey = 'solid-grey',
  SolidLightYellow = 'solid-light-yellow',
  SolidNeutral = 'solid-neutral',
  SolidYellow = 'solid-yellow',
  Transparent = 'transparent',
  White = 'white',
  Yellow = 'yellow',
}

export enum FeaturePanelPattern {
  CornersBlack = 'corners-black',
  CornersWhite = 'corners-white',
  FullBlack = 'full-black',
  FullBlue = 'full-blue',
  FullMap = 'full-map',
  FullWhite = 'full-white',
  SideLarge = 'side-large',
  SideMap = 'side-map',
  SideShort = 'side-short',
}

type PanelColorDefinition = {
  background: string;
};

export const FEATURE_PANEL_COLORS = {
  [FeaturePanelTone.Black]: {
    background: BACKGROUNDS.black,
  },
  [FeaturePanelTone.DarkBlue]: {
    background: BACKGROUNDS.darkblue,
  },
  [FeaturePanelTone.GradientBlack]: {
    background: BACKGROUNDS['gradient-black'],
  },
  [FeaturePanelTone.GradientBlue]: {
    background: BACKGROUNDS['gradient-blue'],
  },
  [FeaturePanelTone.GradientDeepBlue]: {
    background: BACKGROUNDS['dark-blue'],
  },
  [FeaturePanelTone.GradientGreen]: {
    background: BACKGROUNDS['gradient-green'],
  },
  [FeaturePanelTone.GradientVitalityYellow]: {
    background: BACKGROUNDS['gradient-vitality-yellow'],
  },
  [FeaturePanelTone.SolidBlue]: {
    background: BACKGROUNDS.blue,
  },
  [FeaturePanelTone.SolidDarkBlue]: {
    background: BACKGROUNDS['solid-dark-blue'],
  },
  [FeaturePanelTone.SolidDarkGreen]: {
    background: BACKGROUNDS['dark-green'],
  },
  [FeaturePanelTone.SolidGreen]: {
    background: BACKGROUNDS.green,
  },
  [FeaturePanelTone.SolidGrey]: {
    background: BACKGROUNDS.grey,
  },
  [FeaturePanelTone.SolidLightYellow]: {
    background: BACKGROUNDS['light-yellow'],
  },
  [FeaturePanelTone.SolidNeutral]: {
    background: BACKGROUNDS.neutral,
  },
  [FeaturePanelTone.SolidYellow]: {
    background: BACKGROUNDS.yellow,
  },
  [FeaturePanelTone.Transparent]: {
    background: BACKGROUNDS.transparent,
  },
  [FeaturePanelTone.White]: {
    background: BACKGROUNDS.white,
  },
  [FeaturePanelTone.Yellow]: {
    background: BACKGROUNDS.yellow,
  },
} satisfies Record<FeaturePanelTone, PanelColorDefinition>;

export const FEATURE_PANEL_PATTERN_IMAGES: Record<
  FeaturePanelPattern,
  string
> = {
  [FeaturePanelPattern.CornersBlack]: '/bg/lines/corners-black.png',
  [FeaturePanelPattern.CornersWhite]: '/bg/lines/corners-white.png',
  [FeaturePanelPattern.FullBlack]: '/bg/lines/full-black.png',
  [FeaturePanelPattern.FullBlue]: '/bg/lines/full-blue.png',
  [FeaturePanelPattern.FullMap]: '/bg/lines/full-map.png',
  [FeaturePanelPattern.FullWhite]: '/bg/lines/full-white.png',
  [FeaturePanelPattern.SideLarge]: '/bg/lines/side-large.png',
  [FeaturePanelPattern.SideMap]: '/bg/lines/side-map.png',
  [FeaturePanelPattern.SideShort]: '/bg/lines/side-short.png',
};
