import Image from 'next/image';
import type { ReactNode } from 'react';

import {
  FeaturePanel,
  type FeaturePanelProps,
} from './FeaturePanelCore';
import {
  TopographicShaderBackground,
  type TopographicShaderBackgroundProps,
} from '../shaders/TopographicShaderBackground';
import { cn } from '../ui/utils';

type ShaderLayerProps = Pick<
  TopographicShaderBackgroundProps,
  | 'shaderId'
  | 'animated'
  | 'inkColor'
  | 'bgColor'
  | 'backgroundOpacity'
  | 'lineColor'
  | 'lineOpacity'
  | 'staticFrame'
  | 'angle'
>;

export type ShaderFeaturePanelProps = Omit<
  FeaturePanelProps,
  'backgroundContent' | 'backgroundContentClassName'
> &
  ShaderLayerProps & {
    backgroundImageSrc?: string;
    backgroundImageAlt?: string;
    backgroundImageClassName?: string;
    backgroundImagePriority?: boolean;
    shaderClassName?: string;
    shaderOverlay?: ReactNode;
  };

export function ShaderFeaturePanel({
  shaderId,
  animated = true,
  inkColor,
  bgColor,
  backgroundOpacity = 0,
  lineColor,
  lineOpacity = 1,
  staticFrame = 64,
  angle = 0,
  backgroundImageSrc,
  backgroundImageAlt = '',
  backgroundImageClassName,
  backgroundImagePriority,
  shaderClassName = 'absolute inset-0 h-full w-full touch-none',
  shaderOverlay,
  ...panelProps
}: ShaderFeaturePanelProps) {
  return (
    <FeaturePanel
      {...(panelProps as FeaturePanelProps)}
      backgroundContent={
        <>
          {backgroundImageSrc ? (
            <div className="pointer-events-none absolute inset-0">
              <Image
                src={backgroundImageSrc}
                alt={backgroundImageAlt}
                fill
                priority={backgroundImagePriority}
                className={cn('object-cover', backgroundImageClassName)}
                sizes="100vw"
              />
            </div>
          ) : null}
          <TopographicShaderBackground
            shaderId={shaderId}
            animated={animated}
            inkColor={inkColor}
            bgColor={bgColor}
            backgroundOpacity={backgroundOpacity}
            lineColor={lineColor}
            lineOpacity={lineOpacity}
            staticFrame={staticFrame}
            angle={angle}
            className={shaderClassName}
          />
          {shaderOverlay}
        </>
      }
    />
  );
}
