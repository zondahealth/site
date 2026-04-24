'use client';

import Image from 'next/image';
import {
  FeaturePanel,
  FeaturePanelBackgroundStyling,
  FeaturePanelTone,
} from '../components/FeaturePanel';
import { Hero } from '../components/Hero';
import { ArrowRightCircleIcon, Icon } from 'lucide-react';
import { Button } from '../components/ui/button';

const solutions = [
  {
    title: 'Azul',
    backgroundStyling: FeaturePanelBackgroundStyling.Left,
    tone: FeaturePanelTone.SolidBlue,
    textClassName: 'text-white',
  },
  {
    title: 'Verde',
    backgroundStyling: FeaturePanelBackgroundStyling.Full,
    tone: FeaturePanelTone.SolidGreen,
    textClassName: 'text-white',
  },
  {
    title: 'Amarillo',
    backgroundStyling: FeaturePanelBackgroundStyling.Right,
    tone: FeaturePanelTone.SolidYellow,
    textClassName: 'text-white',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <main className="space-y-24 py-26">
        <Hero />

        <section>
          <div className="layout-shell text-center gap-16 flex flex-col ">
            <h2 className="text-balance text-3xl font-medium leading-[0.98] sm:text-4xl lg:text-5xl">
              Our Solutions
            </h2>
            <div className="grid grid-cols-3 gap-16 ">
              {solutions.map((solution) => (
                <div key={solution.title} className="flex flex-col gap-8">
                  <FeaturePanel
                    tone={solution.tone}
                    backgroundStyling={solution.backgroundStyling}
                    contentClassName="flex h-full flex-col items-center justify-center gap-14 px-8 py-12 sm:px-12 sm:py-14 lg:px-20 lg:py-18 h-80"
                    overlayClassName="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_36%,rgba(5,16,44,0.24)_100%)]"
                  />
                  <h3 className="text-balance text-3xl font-medium leading-[0.98] sm:text-4xl lg:text-5xl">
                    {solution.title}
                  </h3>
                  <p className="text-balance text-sm font-medium leading-[0.98] sm:text-base lg:text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quos.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="layout-shell">
            <FeaturePanel
              tone={FeaturePanelTone.Purple}
              contentClassName="flex h-full flex-col items-center justify-center gap-14 px-8 py-12 sm:px-12 sm:py-14 lg:px-20 lg:py-18"
              overlayClassName="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_36%,rgba(5,16,44,0.24)_100%)]"
            >
              <div className="grid grid-cols-4 gap-8">
                <div className="col-span-2 flex flex-col items-start justify-center gap-4">
                  <h2 className="text-balance text-3xl font-medium leading-[0.98] sm:text-4xl lg:text-5xl text-white">
                    A Network that Gets Smarter Every Day
                  </h2>
                  <Button variant="link" className="text-white">
                    Learn More <ArrowRightCircleIcon />
                  </Button>
                </div>
                <div className="col-span-2 relative w-full h-80 flex items-center justify-center">
                  <Image
                    src="/assets/world-rings.png"
                    alt="Highway"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </FeaturePanel>
          </div>
        </section>

        <section>
          <div className="layout-shell gap-8">
            <FeaturePanel
              tone={FeaturePanelTone.Green}
              contentClassName="flex h-full flex-col items-center justify-center gap-14 px-8 py-12 sm:px-12 sm:py-14 lg:px-20 lg:py-18"
              overlayClassName="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_36%,rgba(5,16,44,0.24)_100%)]"
            >
              <div className="grid grid-cols-4 gap-8">
                <div className="col-span-2 relative w-full h-80 flex ">
                  <Image src="/assets/data.png" alt="Highway" fill />
                </div>
                <div className="col-span-2 flex flex-col items-start justify-center gap-4">
                  <h2 className="text-balance text-3xl font-medium leading-[0.98] sm:text-4xl lg:text-5xl text-white">
                    Clean, Usable and Organised Health and Organizations Data
                  </h2>
                  <Button variant="link" className="text-white">
                    Learn More <ArrowRightCircleIcon />
                  </Button>
                </div>
              </div>
            </FeaturePanel>
          </div>
        </section>
      </main>
    </div>
  );
}
