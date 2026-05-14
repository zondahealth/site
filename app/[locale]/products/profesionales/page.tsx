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
    title: 'Agenda inteligente, pacientes informados',
    description:
      'Gestioná turnos, cancelaciones y seguimiento desde un calendario semanal. Nosotros nos encargamos de notificar al paciente sobre cambios y recordatorios. Antes de cada encuentro, tenés toda la información en la palma de tu mano: encuestas socioeconómicas, cambios de estado, chequeos básicos. Vos lo configurás, nosotros lo ejecutamos.',
    image: '/assets/professionals/notifications.png',
    imageClassName: 'p-6',
  },
  {
    tone: FeaturePanelTone.Green,
    title: 'Una sola carga, todas tus organizaciones',
    description:
      'Conectá las empresas con las que trabajás y usá únicamente Zonda para registrar las visitas de tus pacientes. Swiss Medical, OSDE, PAMI? No hay problema. Seguí tus finanzas en tiempo real, todo en un único lugar. ¿No soportamos tu organización? Contactanos y la integramos sin cargo extra.',
    image: '/assets/professionals/orgs.png',
  },
  {
    tone: FeaturePanelTone.Purple,
    title: 'Registros clínicos superinteligentes',
    description:
      'Tomá nota como si escribieras en un papel. Nosotros nos encargamos de entender, ordenar y hacer el seguimiento clínico de tus pacientes con inteligencia artificial.',
    image: '/assets/professionals/notas.png',
    imageClassName: 'p-6',
  },
];

export default function ProfesionalesPage() {
  return (
    <div className="space-y-16 pb-16">
      <section className="flex flex-col">
        <div className="layout-shell overflow-hidden pt-20">
          <FeaturePanel
            tone={FeaturePanelTone.Yellow}
            className="flex min-h-0 w-full flex-1 flex-col rounded-md"
            backgroundStyling={FeaturePanelBackgroundStyling.Full}
            contentClassName="grid grid-cols-1 lg:grid-cols-2 flex-1 mx-auto max-w-7xl  min-h-[clamp(30rem,100dvh,1000px)] w-full "
          >
            <div className="flex min-w-0 flex-col items-center justify-center px-6 py-24 text-center lg:items-start lg:text-left space-y-8 px-16">
              <h1 className="text-5xl font-bold [font-family:var(--font-display-family)] text-zonda-blue-dark">
                Gestioná tu práctica clínica como se merece la era de la IA.
              </h1>
              <p className="text-lg font-semibold text-zonda-blue-dark">
                Un único lugar para gestionar pacientes, registrar evoluciones,
                organizar la agenda y administrar las organizaciones con las que
                trabajás.
              </p>
            </div>

            <div className="relative md:h-full lg:pt-12">
              <div className="pointer-events-none hidden h-full w-full justify-center lg:items-end md:flex">
                <Image
                  src="/assets/doctor.png"
                  alt="Profesionales"
                  width={700}
                  height={700}
                  className="pointer-events-none max-h-none max-w-none shrink-0 object-contain object-bottom"
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
            image={section.image}
            imageAlt={section.title}
            imageClassName={section.imageClassName}
            imagePosition={idx % 2 === 1 ? 'left' : 'right'}
            tone={section.tone}
          />
        </section>
      ))}

      <section>
        <div className="layout-shell rounded-md overflow-hidden">
          <FeaturePanel
            tone={FeaturePanelTone.LightBlue}
            backgroundStyling={FeaturePanelBackgroundStyling.Full}
            panelSize="lg"
            imagePosition="center"
            image={
              <Image
                src="/assets/professionals/app-download.png"
                alt="App"
                width={600}
                height={500}
                className="pointer-events-none max-w-full object-contain"
              />
            }
            contentClassName="space-y-8 px-20 lg:px-0"
          >
            <h2 className="text-6xl font-bold lg:text-left text-center">
              Tu consultorio en el bolsillo
            </h2>
            <p className="text-lg font-semibold text-center lg:text-left ">
              Descargá Zonda y llevá tu agenda, tus pacientes y tus registros
              clínicos a donde vayas.
            </p>
          </FeaturePanel>
        </div>
      </section>
    </div>
  );
}
