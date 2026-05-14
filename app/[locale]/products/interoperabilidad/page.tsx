import { FeaturePanel } from '@/app/components/FeaturePanel';
import { FeaturePanelTone } from '@/app/components/FeaturePanel';
import { FeaturePanelBackgroundStyling } from '@/app/components/FeaturePanel';
import { InfoSection, type InfoSectionData } from '@/app/components/InfoSection';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';

const sections: InfoSectionData[] = [
  {
    title: 'La plataforma',
    description:
      'Zonda fue diseñado como infraestructura de integración. Una capa segura, escalable y extensible que permite conectar sistemas, procesar datos con inteligencia artificial y construir aplicaciones sobre una base unificada.',
    items: [
      {
        label: 'Procesamiento AI',
        text: 'Modelos integrados que procesan, clasifican y extraen información clínica estructurada a partir de cualquier fuente de datos, en tiempo real.',
      },
      {
        label: 'Analíticas operativas',
        text: 'Observabilidad completa sobre el flujo de datos, volumen de transacciones y performance de cada integración activa.',
      },
      {
        label: 'Platform as a Service',
        text: 'APIs abiertas, webhooks y SDKs que permiten a organizaciones de salud desarrollar soluciones propias sobre la infraestructura de Zonda.',
      },
    ],
  },
  {
    title: 'Formas de conectar',
    image: '/assets/interop/flow.png',

    description:
      'Arquitectura cloud-native con cifrado en tránsito y at rest, gestión granular de permisos y aislamiento multi-tenant. La seguridad es responsabilidad de la plataforma, no del integrador.',
    items: [
      {
        label: 'Zonda Connectors',
        text: 'Conectores nativos para los sistemas más utilizados en salud. Configuración declarativa, activación inmediata e intercambio de datos sin desarrollo custom.',
      },
      {
        label: 'REST APIs',
        text: 'Interfaz RESTful documentada con OpenAPI. Autenticación estándar, rate limiting inteligente y compatibilidad con cualquier stack tecnológico.',
      },
      {
        label: 'FileSystems & DataDrop',
        text: 'Ingesta masiva a través de filesystems seguros y DataDrop. Soporte nativo para HL7, FHIR, CSV y formatos arbitrarios con transformación automática.',
      },
    ],
  },
  {
    title: 'Modelo canónico',
    description:
      'Zonda consume datos en cualquier formato — texto plano, PDFs, CSVs, HL7, FHIR, XMLs — y produce un único modelo de datos canónico. Un output estructurado, normalizado y listo para ser consumido por cualquier sistema downstream.',
    items: [
      {
        label: 'LOINC',
        text: 'Normalización automática de observaciones y resultados de laboratorio bajo el estándar LOINC. Mapeo semántico de terminología propietaria a códigos universales.',
      },
      {
        label: 'ICD-10',
        text: 'Clasificación y codificación de diagnósticos bajo ICD-10. Extracción de códigos a partir de texto clínico libre mediante procesamiento de lenguaje natural.',
      },
      {
        label: 'Output flexible',
        text: 'Exporta el modelo canónico al formato que necesites — JSON, FHIR, CSV, HL7 o esquemas custom. Un único input, múltiples outputs adaptados a cada consumidor.',
      },
    ],
  },
  {
    title: 'Seguridad e Identidad',
    description:
      'Zonda modela la estructura del negocio de salud. Provee identidad unificada para profesionales, pacientes y miembros de cada organización, con roles definidos y permisos granulares.',
    items: [
      {
        label: 'Inbound OAuth2',
        text: 'Aplicaciones externas se autentican contra Zonda vía OAuth 2.0 para operar sobre las APIs de la plataforma con tokens scoped y flujos estándar.',
      },
      {
        label: 'Outbound OAuth2',
        text: 'Zonda actúa como cliente OAuth 2.0 al conectarse a sistemas de terceros, delegando autenticación sin exponer credenciales del usuario final.',
      },
      {
        label: 'Integración adaptativa',
        text: 'Capacidad de integración en cada nivel de la arquitectura. Desde conectores out-of-the-box hasta extensiones programáticas sobre la API.',
      },
    ],
  },
];

export default function InteroperabilidadPage() {
  return (
    <div className="h-full w-full flex flex-1 flex-col">
      {/* Hero */}
      <FeaturePanel
        className="flex flex-1 min-h-0 w-full flex-col rounded-none min-h-[clamp(30rem,100dvh,1000px)]"
        tone={FeaturePanelTone.Black}
        backgroundStyling={FeaturePanelBackgroundStyling.Full}
        contentClassName="flex flex-1 min-h-0 w-full h-full items-center justify-center"
      >
        <div className="flex flex-1 w-full h-full flex-col items-center justify-center px-6 py-10 text-center md:items-start md:text-left space-y-8 max-w-2xl md:max-w-7xl mx-auto">
          <h1 className="font-bold text-vitality-yellow flex flex-col gap-2 [font-family:var(--font-display-family)]">
            <span className="text-vitality-yellow text-5xl md:text-7xl lg:text-8xl">
              Interoperabilidad
            </span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white">
            Cualquier Sistema.
            <br />
            Cualquier Fuente de Datos.
            <br />
            Cualquier Formato.
          </p>
        </div>
      </FeaturePanel>

      {/* Sections */}
      {sections.map((section, i) => (
        <InfoSection key={section.title} section={section} index={i} variant="dark" />
      ))}

      {/* CTA */}
      <section className="bg-black">
        <div className="layout-shell py-20 md:py-28">
          <FeaturePanel
            tone={FeaturePanelTone.Black}
            backgroundStyling={FeaturePanelBackgroundStyling.YellowLines}
            contentClassName="flex h-full flex-col items-center justify-center gap-16 px-8 py-24 sm:px-12 sm:py-32 lg:px-20 lg:py-48"
          >
            <div className="mx-auto max-w-3xl text-center text-3xl font-bold sm:text-3xl lg:text-6xl text-white [font-family:var(--font-display-family)]">
              Conectá tus sistemas. <br />
              <span className="text-vitality-yellow">Integrá tu empresa.</span>
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
