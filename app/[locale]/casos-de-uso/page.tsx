import Image from 'next/image';
import Link from 'next/link';
import {
  FeaturePanel,
  FeaturePanelBackgroundStyling,
  FeaturePanelTone,
} from '@/app/components/FeaturePanel';
import { CaseStudyCard } from '@/app/components/CaseStudyCard';
import { Button } from '@/app/components/ui/button';
import ExploreButton from '@/app/components/ExploreButton';

const caseStudies = [
  {
    slug: 'interdom',
    title: 'Interdom',
    titleLow: 'se digitaliza',
    description:
      'Interdom empresa de Internación Domiciliaria, utiliza zonda para digitalizar su operación, trackear pacientes, profesionales y mejorar la eficiencia operativa.',
    image: '/assets/cs/interdom.jpg',
  },
  {
    slug: 'fraude',
    title: 'Detectando',
    titleLow: 'Fraude',
    description:
      'Como usando zonda para analizar reclamos de pacientes integrandolo a la operatoria del dia a dia',
    image: '/assets/cs/fraude.jpeg',
  },
];

export default function CasosDeUsoPage() {
  return (
    <div className="h-full w-full flex flex-1 flex-col bg-background space-y-16 md:space-y-26">
      {/* Hero */}
      <section className="flex flex-col">
          <FeaturePanel
            tone={FeaturePanelTone.White}
            backgroundImage={
              <Image
                src="/bg/styling/white-lines.png"
                alt="Casos de uso"
                fill
                className="object-cover opacity-10"
              />
            }
            className="flex w-full flex-col rounded-none h-[100dvh] min-h-[30rem]"
            contentClassName="flex-1 mx-auto max-w-7xl w-full gap-16 lg:gap-32 flex flex-col items-center justify-center py-26"
          >
            <div className="layout-shell space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold [font-family:var(--font-display-family)] text-center text-black">
                Historias de nuestros clientes
              </h1>
              <p className="text-xl md:text-2xl text-center">
                Organizaciones de salud que transformaron su operación con
                Zonda.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 md:gap-20 px-26">
              {caseStudies.map((caseStudy, index) => (
                <CaseStudyCard
                  key={index}
                  image={caseStudy.image}
                  imageAlt={caseStudy.description}
                  children={
                    <div className="flex flex-1 flex-col items-start gap-4">
                      <h2 className="text-xl md:text-2xl font-bold">
                        <span className="text-zonda-blue">
                          {caseStudy.title}
                        </span>{' '}
                        {caseStudy.titleLow}
                      </h2>
                      <p className="flex-1 text-lg md:text-xl text-neutral-600">
                        {caseStudy.description}
                      </p>
                      <ExploreButton
                        href={`/casos-de-uso/${caseStudy.slug}`}
                        title="Ver caso"
                        color="black"
                      />
                    </div>
                  }
                />
              ))}
            </div>
          </FeaturePanel>
      </section>

      {/* CTA */}
      <section>
        <div className="layout-shell pb-16 md:pb-26">
          <FeaturePanel
            tone={FeaturePanelTone.Yellow}
            backgroundStyling={FeaturePanelBackgroundStyling.YellowLines}
            contentClassName="flex h-full flex-col items-center justify-center gap-16 px-8 py-24 sm:px-12 sm:py-32 lg:px-20 lg:py-40"
          >
            <div className="mx-auto max-w-3xl text-center text-3xl font-bold sm:text-4xl lg:text-6xl tqext-zonda-blue [font-family:var(--font-display-family)]">
              Ayudá a tu organización a crecer y ser más eficiente.
            </div>

            <Button asChild size="lg" className="min-w-48">
              <Link href="/contacto">Contactanos</Link>
            </Button>
          </FeaturePanel>
        </div>
      </section>
    </div>
  );
}
