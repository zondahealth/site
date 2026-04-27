import { MarketingPage } from '../../../components/MarketingPage';

export default function InternacionDomiciliariaPage() {
  return (
    <MarketingPage
      eyebrow="Producto"
      title="Internación domiciliaria"
      description="Una operación coordinada para equipos de atención en domicilio, con trazabilidad clínica, control administrativo y seguimiento en tiempo real de cada visita."
      highlights={[
        'Trabajo de campo y backoffice conectados en una sola operación.',
        'Seguimiento de prestaciones, auditoría y documentación sin puntos ciegos.',
        'Mayor control sobre tiempos, calidad y continuidad de atención.',
      ]}
      sections={[
        {
          title: 'Operación en terreno',
          description:
            'Facilita el trabajo de profesionales en domicilio con información clara, acceso al contexto del paciente y seguimiento de cada intervención.',
        },
        {
          title: 'Auditoría continua',
          description:
            'Permite validar prestaciones, documentación y cumplimiento operativo con trazabilidad desde el origen.',
        },
        {
          title: 'Gestión integral',
          description:
            'Conecta planificación, ejecución y control para que la atención domiciliaria escale con menos fricción y más previsibilidad.',
        },
      ]}
      primaryCta={{ href: '/contact-us', label: 'Contactanos' }}
      secondaryCta={{ href: '/empresa', label: 'Conocer Zonda' }}
    />
  );
}
