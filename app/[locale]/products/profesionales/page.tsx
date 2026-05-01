import {
  FeaturePanel,
  FeaturePanelBackgroundStyling,
  FeaturePanelTone,
} from '@/app/components/FeaturePanel';
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
    <div className="space-y-32 pb-16">
      <section className="flex min-h-[clamp(30rem,100dvh,1000px)] w-full flex-col">
        <FeaturePanel
          tone={FeaturePanelTone.Yellow}
          className="flex min-h-0 w-full flex-1 flex-col rounded-none"
          backgroundStyling={FeaturePanelBackgroundStyling.Full}
          contentClassName="mx-auto grid min-h-0 max-w-2xl md:max-w-7xl flex-1 grid-cols-1 grid-rows-[auto_1fr] md:grid-cols-2 md:grid-rows-1 md:items-stretch"
        >
          <div className="flex min-w-0 flex-col items-center justify-center px-6 py-10 text-center md:items-start md:text-left space-y-8">
            <h1 className="text-6xl font-bold bg-gradient-to-tr from-zonda-blue-dark via-zonda-blue to-zonda-blue-dark bg-clip-text text-transparent">
              Gestioná tu práctica clínica como se merece la era de la IA.
            </h1>
            <p className="text-lg font-semibold text-zonda-blue-dark">
              Un único lugar para gestionar pacientes, registrar evoluciones,
              organizar la agenda y administrar las organizaciones con las que
              trabajás.
            </p>
          </div>

          <div className="relative md:h-full pt-24">
            <div className="pointer-events-none hidden h-full w-full items-end md:flex">
              <Image
                src="/assets/doctor.png"
                alt="Profesionales"
                width={750}
                height={750}
                className="pointer-events-none max-h-none max-w-none shrink-0 object-contain"
                sizes="100%"
              />
            </div>
          </div>
        </FeaturePanel>
        <div
          style={{
            height: '10px',
            width: '100%',
            background:
              'linear-gradient(90deg, #00c3ff 0%,rgb(229, 28, 255) 25%, #ffea00 50%, #00f062 75%, #7aeaff 100%)',
          }}
          aria-hidden="true"
        />
      </section>

      {sections.map((section, idx) => (
        <section key={section.title}>
          <div className="layout-shell rounded-md overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8">
            {(() => {
              const content = (
                <div className="flex min-w-0 flex-col items-center justify-end px-6  text-center md:items-start md:text-left space-y-8">
                  <h2 className="text-5xl font-bold">{section.title}</h2>
                  <p className="text-xl font-medium">{section.description}</p>
                </div>
              );
              const image = (
                <FeaturePanel
                  tone={section.tone}
                  className="flex min-h-0 w-full flex-1 flex-col rounded-md"
                  contentClassName="flex items-center justify-center"
                >
                  <div className="flex items-center justify-center w-full h-full">
                    <div className="relative aspect-square w-full">
                      <Image
                        src={section.image}
                        alt={section.title}
                        fill
                        className={`object-contain object-center pointer-events-none ${section.imageClassName ?? ''}`}
                        sizes="(min-width: 768px) 50vw, 96vw"
                      />
                    </div>
                  </div>
                </FeaturePanel>
              );
              return idx % 2 === 1 ? (
                <>
                  {image}
                  {content}
                </>
              ) : (
                <>
                  {content}
                  {image}
                </>
              );
            })()}
          </div>
        </section>
      ))}

      <section>
        <div className="layout-shell rounded-md overflow-hidden">
          <FeaturePanel
            tone={FeaturePanelTone.LightBlue}
            className="flex min-h-0 w-full flex-1 flex-col"
            backgroundStyling={FeaturePanelBackgroundStyling.Full}
            contentClassName="mx-auto grid min-h-0 max-w-2xl md:max-w-7xl flex-1 grid-cols-1 md:grid-cols-2 grid-rows-[auto_1fr] md:grid-rows-1 md:items-stretch px-4 xl:px-24 xl:py-24 py-16"
          >
            <div className="flex min-w-0 flex-col items-center justify-center py-10 text-center md:items-start md:text-left space-y-8 col-span-1">
              <h2 className="text-7xl font-bold">Descarga la Aplicación</h2>
              <p className="text-lg font-semibold">
                Accedé a Zonda desde tu celular para gestionar tu práctica
                clínica.
              </p>
            </div>
            <div className="relative md:h-full flex justify-end">
              <Image
                src="/assets/professionals/app-download.png"
                alt="App"
                width={500}
                height={500}
                className="pointer-events-none max-h-none max-w-none shrink-0 object-contain"
              />
            </div>
          </FeaturePanel>
        </div>
      </section>
    </div>
  );
}
