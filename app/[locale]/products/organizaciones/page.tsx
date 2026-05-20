import {
  FeaturePanel,
  FeaturePanelBackgroundStyling,
  FeaturePanelTone,
} from '@/app/components/FeaturePanel';
import { OrgFeature } from '@/app/components/organizations/OrgFeature';
import { IngestaDiagram } from '@/app/components/organizations/IngestaDiagram';
import { PatternsDashboard } from '@/app/components/organizations/PatternsDashboard';
import { RolesVisual } from '@/app/components/organizations/RolesVisual';
import { OrgUseCases } from '@/app/components/organizations/OrgUseCases';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/app/components/ui/button';

export default function OrganizacionesPage() {
  return (
    <div className="pb-16">
      {/* Hero — unchanged */}
      <section className="flex w-full flex-col">
        <FeaturePanel
          className="flex w-full flex-col rounded-none h-[100dvh] min-h-[30rem]"
          tone={FeaturePanelTone.DarkBlueLines}
          darkenBackground="medium"
          backgroundStyling={FeaturePanelBackgroundStyling.Lines}
          contentClassName="grid grid-cols-1 lg:grid-cols-2 flex-1 pt-24 lg:py-12 mx-auto max-w-7xl w-full"
        >
          <div className="flex min-w-0 flex-col items-center justify-end lg:justify-center px-16 lg:px-12 lg:py-24 text-center lg:items-start lg:text-left">
            <h1 className="font-bold gap-4 lg:gap-6 flex flex-col text-white">
              <span className="text-6xl lg:text-7xl font-bold [font-family:var(--font-display-family)] text-vitality-yellow">
                Visibilidad total de tu operación de salud.
              </span>
              <span className="text-white text-4xl md:text-5xl">
                Cero puntos ciegos.
              </span>
            </h1>
          </div>

          <div className="flex items-center justify-center px-8 py-4 lg:relative lg:block lg:h-full lg:min-w-0 lg:overflow-visible lg:px-0 lg:py-0">
            <Image
              src="/assets/orgs/hero.png"
              alt="Organizaciones"
              width={700}
              height={700}
              className="pointer-events-none min-h-[340px] max-h-[40vh] w-auto object-contain lg:absolute lg:top-1/2 lg:left-0 lg:-translate-y-1/2 lg:min-h-0 lg:max-h-none lg:h-[60%] xl:h-[85%] lg:max-w-none"
              sizes="100%"
            />
          </div>
        </FeaturePanel>
      </section>

      <OrgFeature
        eyebrow="CAPÍTULO 01 · INGESTA"
        title="Ingestá datos desde cualquier fuente."
        copy="Historias clínicas, evoluciones, turnos, encuestas, dispositivos y más. Zonda centraliza toda la información de tus pacientes y profesionales en un único lugar — sin importar de dónde venga."
        bullets={[
          'FHIR R4 · HL7v2 · CSV · API REST',
          'Mapeo automático de esquemas legacy',
          'Ingesta manual o automatizada por webhook',
        ]}
        cta="Ver integraciones soportadas"
        visual={<IngestaDiagram />}
      />

      <OrgFeature
        eyebrow="CAPÍTULO 02 · INTELIGENCIA"
        title="Detectá patrones, anomalías y fraude."
        copy="Dashboards interactivos que se adaptan a lo que necesitás ver. Identificación automática de tendencias en datos clínicos, alertas en tiempo real cuando algo se sale de rango, y reportes personalizados por región, unidad o profesional."
        bullets={[
          'Alertas configurables en tiempo real',
          'Detección automática de outliers',
          'Reportes exportables a PDF, Excel, FHIR',
        ]}
        cta="Ver casos de detección de fraude"
        visual={<PatternsDashboard />}
        flip
      />

      <OrgFeature
        eyebrow="CAPÍTULO 03 · GOBIERNO"
        title="Roles claros. Equipos organizados. Múltiples entidades."
        copy="Definí la estructura de tu organización: equipos, profesionales, pacientes, sedes y permisos. Si operás con más de una entidad jurídica, gestioná todo desde un mismo lugar sin perder trazabilidad."
        bullets={[
          'Permisos granulares por rol y sede',
          'Auditoría completa de quién hizo qué y cuándo',
          'Compartí reportes con stakeholders sin romper el compliance',
        ]}
        cta="Ver matriz de permisos completa"
        visual={<RolesVisual />}
      />

      <OrgUseCases />

      {/* CTA */}
      <section className="py-10">
        <div className="layout-shell">
          <FeaturePanel
            tone={FeaturePanelTone.DarkBlueLines}
            contentClassName="flex h-full flex-col items-center justify-center gap-16 px-8 py-24 sm:px-12 sm:py-32 lg:px-20 lg:py-48"
          >
            <div className="mx-auto max-w-3xl text-center text-3xl font-bold sm:text-3xl lg:text-6xl text-white [font-family:var(--font-display-family)]">
              Conectá tu operación. <br />
              <span className="text-vitality-yellow">Agendá una demo.</span>
            </div>

            <Button asChild size="lg" className="min-w-48" variant="primary">
              <Link href="/contacto">Contáctanos</Link>
            </Button>
          </FeaturePanel>
        </div>
      </section>
    </div>
  );
}
