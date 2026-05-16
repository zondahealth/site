import { FeaturePanel, FeaturePanelTone } from '@/app/components/FeaturePanel';
import { PhoneAgenda } from '@/app/components/professionals/PhoneAgenda';
import { PhoneOrganizaciones } from '@/app/components/professionals/PhoneOrganizaciones';
import { PhoneRegistros } from '@/app/components/professionals/PhoneRegistros';
import { ProFeature } from '@/app/components/professionals/ProFeature';
import { ProTestimonial } from '@/app/components/professionals/ProTestimonial';
import { ProDownload } from '@/app/components/professionals/ProDownload';
import { ProFAQ } from '@/app/components/professionals/ProFAQ';
import Image from 'next/image';

export default function ProfesionalesPage() {
  return (
    <div className="pb-16">
      {/* Hero — unchanged */}
      <section className="flex flex-col">
        <FeaturePanel
          tone={FeaturePanelTone.Yellow}
          className="flex w-full flex-col rounded-none h-[100dvh] min-h-[30rem]"
          contentClassName="grid grid-cols-1 lg:grid-cols-2 flex-1 mx-auto max-w-7xl w-full"
        >
          <div className="flex min-w-0 flex-col items-center justify-center px-6 py-24 text-center lg:items-start lg:text-left space-y-8 px-16">
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold [font-family:var(--font-display-family)] text-zonda-blue-dark">
              Gestioná tu práctica clínica como se merece la era de la IA.
            </h1>
            <p className="text-md md:text-lg lg:text-2xl font-semibold text-zonda-blue-dark">
              Un único lugar para gestionar pacientes, registrar evoluciones,
              organizar la agenda y administrar las organizaciones con las que
              trabajás.
            </p>
          </div>

          <div className="relative hidden lg:block h-full overflow-visible">
            <Image
              src="/assets/doctor.png"
              alt="Profesionales"
              width={700}
              height={700}
              className="pointer-events-none absolute bottom-0 left-0 h-[85%] w-auto max-w-none object-contain object-bottom"
              sizes="100%"
            />
          </div>
        </FeaturePanel>
      </section>

      <ProTestimonial />

      {/* <ProObrasSociales /> */}

      <ProFeature
        accent="blue"
        eyebrow="Agenda + Pacientes"
        title="Agenda inteligente, pacientes informados."
        copy="Gestioná turnos, cancelaciones y seguimiento desde un calendario semanal. Te encargamos de notificar al paciente sobre cambios y recordatorios. Antes de cada encuentro, tenés toda la información en la palma de la mano: encuestas socioeconómicas, cambios de estado, chequeos básicos. Vos lo configurás, nosotros lo ejecutamos."
        bullets={[
          'Calendario semanal + lista del día',
          'Recordatorios automáticos por WhatsApp',
          'Pre-consulta con encuestas configurables',
        ]}
        cta="Ver demo de la agenda"
        phone={<PhoneAgenda />}
      />

      <ProFeature
        accent="green"
        eyebrow="Multi-organización"
        title="Una sola carga, todas tus organizaciones."
        copy="Conectá las empresas con las que trabajás y usá únicamente Zonda para registrar las visitas de tus pacientes. Swiss Medical, OSDE, PAMI? No hay problema. Seguí tus finanzas en tiempo real, todo en un único lugar."
        bullets={[
          'OSDE · Swiss Medical · PAMI · Galeno',
          'Liquidación y conciliación automática',
          'Reportes por obra social en tiempo real',
        ]}
        cta="Ver obras sociales soportadas"
        phone={<PhoneOrganizaciones />}
        flip
      />

      <ProFeature
        accent="purple"
        eyebrow="Registros clínicos"
        title="Registros clínicos superinteligentes."
        copy="Tomá nota como si escribieras en un papel. Nosotros nos encargamos de entender, ordenar y hacer el seguimiento clínico de tus pacientes con inteligencia artificial."
        bullets={[
          'Dictado por voz — transcripción al instante',
          'Resúmen estructurado por IA (SOAP, PHI, evolución)',
          'Búsqueda semántica en toda la historia',
        ]}
        cta="Ver cómo funciona la IA"
        phone={<PhoneRegistros />}
      />

      <ProDownload />
      <ProFAQ />
    </div>
  );
}
