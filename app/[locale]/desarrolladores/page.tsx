import { MarketingPage } from '../../components/MarketingPage';

export default function DesarrolladoresPage() {
  return (
    <MarketingPage
      eyebrow="Navegación"
      title="Desarrolladores"
      description="Un espacio para equipos técnicos que necesitan integrar productos, exponer datos confiables y construir nuevas experiencias sobre una base interoperable."
      highlights={[
        'APIs y flujos de integración alineados con necesidades reales del sector salud.',
        'Mejor base para automatización, productos satélite y analítica.',
        'Menos fricción entre equipos de tecnología, operación y negocio.',
      ]}
      sections={[
        {
          title: 'Integración',
          description:
            'Conecta sistemas existentes y nuevos desarrollos con una arquitectura pensada para entornos reales y heterogéneos.',
        },
        {
          title: 'Datos reutilizables',
          description:
            'Trabaja sobre información normalizada y consistente para acelerar reporting, productos internos y automatizaciones.',
        },
        {
          title: 'Soporte de implementación',
          description:
            'Acompaña el paso desde la estrategia técnica hasta la puesta en producción con foco en continuidad operativa.',
        },
      ]}
      primaryCta={{ href: '/contact-us', label: 'Contactanos' }}
      secondaryCta={{ href: '/products/interoperabilidad', label: 'Ver producto' }}
    />
  );
}
