import {
  FeaturePanel,
  FeaturePanelBackgroundStyling,
  FeaturePanelTone,
} from '@/app/components/FeaturePanel';
import {
  InfoSection,
  type InfoSectionData,
} from '@/app/components/InfoSection';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';

const sections: InfoSectionData[] = [
  {
    title: 'Experiencia del paciente',
    description:
      'Brindá a los pacientes la misma visibilidad y experiencia fluida que esperan de los mejores proveedores de servicios. Reducí visitas perdidas y aumentá la satisfacción.',
    items: [
      {
        label: 'Recordatorios automáticos',
        text: 'Notificaciones vía SMS, WhatsApp o llamada con recordatorios de visita y ETAs en tiempo real. Sin intervención manual.',
      },
      {
        label: 'Confirmación directa',
        text: 'El paciente confirma, reprograma o cancela directamente desde la notificación. Feedback capturado sin fricciones.',
      },
      {
        label: 'Visibilidad Completa',
        text: 'Portal del paciente con historial de visitas, próximos turnos, profesional asignado y estado de su plan de atención.',
      },
    ],
  },

  {
    title: 'Facturación y pagos',
    description:
      'Se acabó el control manual. Zonda identifica qué profesionales, aseguradoras y pacientes intervienen en cada prestación, se conecta con las aseguradoras con las que trabajás y procesa la facturación cuando corresponde.',
    items: [
      {
        label: 'Conexión con aseguradoras',
        text: 'Integración directa con los sistemas de las aseguradoras con las que operás. Envío automático de prestaciones, autorizaciones y liquidaciones.',
      },
      {
        label: 'Exportación de formatos',
        text: 'Generación automática en el formato que cada pagador requiere — SIP, SISA, formatos propietarios o esquemas custom definidos por contrato.',
      },
      {
        label: 'Detección preventiva',
        text: 'Identificación de inconsistencias y potenciales débitos antes de que ocurran. Alertas tempranas sobre rechazos, duplicaciones y errores de codificación.',
      },
    ],
  },
  {
    title: 'Tu propio sistema sobre Zonda',
    description:
      'Elegí qué necesitás. todo es posible y lo más importante: rápido. Construí sobre Zonda sin empezar de cero.',
    items: [
      {
        label: 'Registros clínicos inteligentes',
        text: 'Historia clínica electrónica con evoluciones estructuradas, prescripciones, indicaciones y trazabilidad completa de cada acto médico.',
      },
      {
        label: 'Detección de fraude',
        text: 'Modelos de AI que identifican patrones anómalos en prestaciones, facturación y asistencia. Alertas en tiempo real para auditoría proactiva.',
      },
      {
        label: 'Analíticas avanzadas',
        text: 'Dashboards operativos, métricas de calidad asistencial, indicadores de cumplimiento y reportes configurables para cada nivel de la organización.',
      },
    ],
  },
];

export default function InternacionDomiciliariaPage() {
  return (
    <div className="flex flex-col space-y-20">
      <section className="flex w-full flex-col">
        <FeaturePanel
          tone={FeaturePanelTone.SolidGreen}
          className="flex w-full flex-col rounded-none h-[100dvh] min-h-[30rem]"
          backgroundStyling={FeaturePanelBackgroundStyling.Map}
          lightenBackground="medium"
          contentClassName="flex flex-1 flex-col items-center justify-center px-8 py-20 sm:px-12 sm:py-28 lg:px-20 lg:py-36 text-center text-zonda-blue-dark "
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold [font-family:var(--font-display-family)]">
            Optimizá cada dato y minuto de tu empresa.
          </h1>
          <p className="mt-6 text-lg md:text-xl lg:text-2xl font-semibold max-w-3xl">
            Gestión centralizada, aplicación para profesionales en campo, LOE y
            auditoría en tiempo real. Todo conectado. Sin puntos ciegos entre la
            administración y el domicilio del paciente.
          </p>
        </FeaturePanel>
      </section>

      {/* Scheduling */}
      <section>
        <div className="layout-shell">
          <FeaturePanel
            tone={FeaturePanelTone.SolidLightYellow}
            backgroundStyling={FeaturePanelBackgroundStyling.Lines}
            lightenBackground="medium"
            panelSize="lg"
            contentClassName="items-start gap-8 text-white"
            imageContainerClassName="min-h-[30rem]"
            image={
              <Image
                src="/assets/id/relations.png"
                alt="Gestión centralizada"
                fill
                className="object-contain"
              />
            }
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zonda-blue-dark font-space-grotesk">
              Gestión centralizada desde la oficina o en campo
            </h2>
            <p className="text-md md:text-lg leading-relaxed  text-zonda-blue-dark">
              La plataforma configurable de Zonda permite que el control de la
              agenda esté donde lo necesites, coordinación centralizada desde la
              oficina o gestión autónoma por parte del profesional en campo,
              maximizando la eficiencia operativa.
            </p>
          </FeaturePanel>
        </div>
      </section>

      {/* Sections */}
      <div className="">
        {sections.map((section, i) => (
          <div key={section.title} className="pt-4">
            <InfoSection section={section} index={i} />
          </div>
        ))}
      </div>

      {/* ── POR QUÉ ZONDA ── */}
      <section id="company">
        <div className="layout-shell flex flex-col gap-16">
          <FeaturePanel
            key="por-que-zonda"
            tone={FeaturePanelTone.SolidBlue}
            lightenBackground="subtle"
            backgroundStyling={FeaturePanelBackgroundStyling.Lines}
            contentClassName="flex h-full flex-col items-center justify-center px-8 py-12 sm:px-12 sm:py-14 lg:px-20 lg:py-32 text-white"
          >
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              <div
                className="flex flex-col items-start justify-center gap-8"
                id="organizaciones"
              >
                <h3 className="text-4xl font-extrabold sm:text-5xl text-vitality-yellow">
                  Mejorá tus resultados y el servicio a tus pacientes.
                </h3>
                <p className="text-xl font-bold leading-relaxed text-white">
                  Organizaciones y profesionales eligen Zonda porque se integra
                  fácilmente, está operativo desde el primer día y genera
                  trazabilidad y reportes en tiempo real, adaptado a
                  Latinoamérica.
                </p>
              </div>
              <div className="relative flex min-h-[20rem] items-center justify-center lg:min-h-[24rem]">
                <div className="grid grid-cols-2 gap-16">
                  {[
                    {
                      value: '+30%',
                      title: 'Ahorro en costos operativos',
                      subtitle: 'Optimización de recursos',
                    },
                    {
                      value: '+40%',
                      title: 'Reducción en tiempos de espera',
                      subtitle: 'Eficiencia mejorada',
                    },
                    {
                      value: '+35%',
                      title: 'Reducción en errores médicos',
                      subtitle: 'Mayor precisión',
                    },
                    {
                      value: '+30%',
                      title:
                        'Ahorro por detección de fraude y prácticas inapropiadas',
                      subtitle: 'Seguridad garantizada',
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex flex-col gap-2">
                      <p className="text-6xl font-extrabold text-vitality-yellow">
                        {item.value}
                      </p>
                      <p className="text-xl font-bold text-white">
                        {item.title}
                      </p>
                      <p className="text-lg font-semibold text-white">
                        {item.subtitle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FeaturePanel>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="layout-shell">
          <FeaturePanel
            tone={FeaturePanelTone.SolidGrey}
            backgroundStyling={FeaturePanelBackgroundStyling.WhiteLines}
            contentClassName="flex h-full flex-col items-center justify-center gap-16 px-8 py-24 sm:px-12 sm:py-32 lg:px-20 lg:py-48"
          >
            <div className="mx-auto max-w-3xl text-center text-3xl font-bold sm:text-3xl lg:text-6xl [font-family:var(--font-display-family)]">
              Tu operación, optimizada. <br />
              <span className="text-zonda-blue">Desde el primer día.</span>
            </div>

            <Button asChild size="lg" className="min-w-48">
              <Link href="/contacto">Contáctanos</Link>
            </Button>
          </FeaturePanel>
        </div>
      </section>
    </div>
  );
}
