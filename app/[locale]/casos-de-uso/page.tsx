import { MarketingPage } from '../../components/MarketingPage';

export default function CasosDeUsoPage() {
  return (
    <MarketingPage
      eyebrow="Navegación"
      title="Casos de uso"
      description="Zonda se adapta a distintos modelos de atención y gestión, desde redes complejas hasta operaciones especializadas que necesitan visibilidad, coordinación e interoperabilidad."
      highlights={[
        'Instituciones que necesitan ordenar operación y calidad asistencial.',
        'Financiadores que buscan trazabilidad, auditoría y mejores reportes.',
        'Equipos especializados que requieren procesos más claros y conectados.',
      ]}
      sections={[
        {
          title: 'Redes de atención',
          description:
            'Coordina sedes, especialidades y circuitos asistenciales sobre una base común de datos y procesos.',
        },
        {
          title: 'Atención domiciliaria',
          description:
            'Integra planificación, ejecución y control para organizaciones con equipos en campo y alta exigencia operativa.',
        },
        {
          title: 'Interoperabilidad regional',
          description:
            'Conecta sistemas heterogéneos para crear una infraestructura más robusta y reutilizable a escala.',
        },
      ]}
      primaryCta={{ href: '/contact-us', label: 'Contactanos' }}
      secondaryCta={{ href: '/products/interoperabilidad', label: 'Ver interoperabilidad' }}
    />
  );
}
