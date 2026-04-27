import { MarketingPage } from '../../../components/MarketingPage';

export default function InteroperabilidadPage() {
  return (
    <MarketingPage
      eyebrow="Producto"
      title="Interoperabilidad"
      description="La infraestructura para conectar sistemas fragmentados, normalizar información clínica y administrativa, y mover datos útiles sin reemplazar lo que ya existe."
      highlights={[
        'Intercambio seguro y estructurado entre sistemas diversos.',
        'Normalización de datos para analítica, auditoría y operación.',
        'Una base lista para integraciones, automatización y nuevos servicios.',
      ]}
      sections={[
        {
          title: 'Conectividad',
          description:
            'Integra sistemas legados, aplicaciones nuevas y fuentes externas para que la información fluya de forma consistente.',
        },
        {
          title: 'Modelo de datos',
          description:
            'Unifica estructuras dispares y reduce ambigüedad para que cada dato pueda reutilizarse con valor clínico y operativo.',
        },
        {
          title: 'Escalabilidad',
          description:
            'Prepara a la organización para sumar productos, reportes y nuevas integraciones sin rehacer la base tecnológica.',
        },
      ]}
      primaryCta={{ href: '/desarrolladores', label: 'Explorar desarrolladores' }}
      secondaryCta={{ href: '/contact-us', label: 'Contactanos' }}
    />
  );
}
