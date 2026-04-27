import { MarketingPage } from '../../../components/MarketingPage';

export default function OrganizacionesPage() {
  return (
    <MarketingPage
      eyebrow="Producto"
      title="Organizaciones"
      description="Una capa operativa para instituciones, redes y financiadores que necesitan coordinar procesos, datos y equipos con trazabilidad real de punta a punta."
      highlights={[
        'Visibilidad completa sobre operación, calidad y desempeño.',
        'Procesos administrativos y clínicos alineados en una misma plataforma.',
        'Escala organizacional sin perder control ni contexto.',
      ]}
      sections={[
        {
          title: 'Coordinación central',
          description:
            'Ordena sedes, equipos y circuitos asistenciales con una base común que reduce trabajo manual y duplicación.',
        },
        {
          title: 'Trazabilidad',
          description:
            'Sigue cada evento relevante del proceso de atención y operación, desde la admisión hasta la auditoría y el reporte.',
        },
        {
          title: 'Control ejecutivo',
          description:
            'Convierte la operación diaria en métricas accionables para dirección, auditoría, gestión de recursos y calidad asistencial.',
        },
      ]}
      primaryCta={{ href: '/contact-us', label: 'Contactanos' }}
      secondaryCta={{ href: '/casos-de-uso', label: 'Ver casos de uso' }}
    />
  );
}
