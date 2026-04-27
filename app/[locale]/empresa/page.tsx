import { MarketingPage } from '../../components/MarketingPage';

export default function EmpresaPage() {
  return (
    <MarketingPage
      eyebrow="Navegación"
      title="Empresa"
      description="Zonda construye infraestructura digital para salud en América Latina con una mirada práctica: ordenar complejidad, conectar sistemas y convertir datos en operación más clara."
      highlights={[
        'Foco regional y comprensión del contexto sanitario latinoamericano.',
        'Una visión de producto orientada a interoperabilidad y resultados operativos.',
        'Trabajo cercano con organizaciones, equipos clínicos y áreas técnicas.',
      ]}
      sections={[
        {
          title: 'Propósito',
          description:
            'Hacer que la complejidad del sistema de salud pueda gestionarse con estructura, visibilidad y herramientas que realmente se adopten.',
        },
        {
          title: 'Enfoque',
          description:
            'Combinar producto, datos e integración para resolver problemas operativos concretos sin exigir reemplazos innecesarios.',
        },
        {
          title: 'Escala',
          description:
            'Diseñar una base tecnológica capaz de acompañar crecimiento organizacional, expansión territorial y nuevas líneas de servicio.',
        },
      ]}
      primaryCta={{ href: '/contact-us', label: 'Contactanos' }}
      secondaryCta={{ href: '/casos-de-uso', label: 'Ver aplicaciones' }}
    />
  );
}
