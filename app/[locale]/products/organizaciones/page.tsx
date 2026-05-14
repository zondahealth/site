import {
  FeaturePanel,
  FeaturePanelBackgroundStyling,
  FeaturePanelTone,
} from '@/app/components/FeaturePanel';
import { ImageSection } from '@/app/components/ImageSection';
import Image from 'next/image';

const sections = [
  {
    tone: FeaturePanelTone.Blue,
    title: 'Ingestá datos desde cualquier fuente',
    description:
      'Historias clínicas, evoluciones, turnos, encuestas, dispositivos y más. Zonda centraliza toda la información de tus pacientes y profesionales en un único lugar, sin importar de dónde venga. Conectá sistemas existentes, cargá datos manualmente o automatizá la ingesta. Toda tu operación en un solo panel.',
    image: '/assets/orgs/hero.png',
    imageClassName: 'p-6',
  },
  {
    tone: FeaturePanelTone.Purple,
    title: 'Detectá patrones, anomalías y fraude',
    description:
      'Dashboards interactivos que se adaptan a lo que necesitás ver. Identificación automática de tendencias en datos clínicos, alertas en tiempo real cuando algo se sale de rango, y reportes personalizados por región, unidad o profesional. Visualizá la evolución de cada paciente, detectá inconsistencias y tomá decisiones con datos, no con intuición.',
    image: '/assets/orgs/hero.png',
    imageClassName: 'p-6',
  },
  {
    tone: FeaturePanelTone.Green,
    title: 'Roles claros, equipos organizados, múltiples entidades',
    description:
      'Definí la estructura de tu organización: equipos, profesionales, pacientes, sedes y permisos. Si operás con más de una entidad jurídica, gestioná todo desde un mismo lugar sin perder trazabilidad. Exportá datos en el formato que necesites, compartí reportes con stakeholders y mantené el compliance sin esfuerzo.',
    image: '/assets/orgs/hero.png',
  },
];

export default function OrganizacionesPage() {
  return (
    <div className="space-y-32 pb-16">
      <section className="flex min-h-[clamp(30rem,100dvh,1000px)] w-full flex-col">
        <div className="layout-shell overflow-hidden pt-20">
          <FeaturePanel
            tone={FeaturePanelTone.Blue}
            className="flex min-h-0 w-full flex-1 flex-col rounded-md"
            backgroundStyling={FeaturePanelBackgroundStyling.Full}
            contentClassName="grid grid-cols-1 lg:grid-cols-2 flex-1 pt-24 lg:py-12"
          >
            <div className="flex min-w-0 flex-col items-center justify-center px-16 lg:px-12 lg:py-24 text-center lg:items-start lg:text-left">
              <h1 className="font-bold gap-4 lg:gap-6 flex flex-col">
                <span className="bg-gradient-to-tr from-zonda-blue-dark to-black bg-clip-text text-transparent text-4xl md:text-5xl">
                  Visibilidad total de tu operación de salud.
                </span>
                <span className="text-zonda-blue-dark text-3xl md:text-4xl">
                  Cero puntos ciegos.
                </span>
              </h1>
            </div>

            <div className="relative md:h-full">
              <div className="pointer-events-none h-full w-full justify-center flex">
                <Image
                  src="/assets/orgs/hero.png"
                  alt="Organizaciones"
                  width={500}
                  height={500}
                  className="pointer-events-none h-auto w-[min(450px,48vw)] max-h-none max-w-none shrink-0 object-cover object-bottom lg:w-[min(500px,45vw)] xl:w-[500px]"
                  sizes="100%"
                />
              </div>
            </div>
          </FeaturePanel>
        </div>
      </section>

      {sections.map((section, idx) => (
        <section key={section.title}>
          <ImageSection
            title={section.title}
            description={section.description}
          />
        </section>
      ))}
    </div>
  );
}
