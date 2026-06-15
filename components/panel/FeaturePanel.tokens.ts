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
  Tide = 'tide',
  LowTide = 'low-tide',
  Drift = 'drift',
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
