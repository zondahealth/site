import { MarketingPage } from '../../../components/MarketingPage';

export default function ProfesionalesPage() {
  return (
    <MarketingPage
      eyebrow="Producto"
      title="Profesionales"
      description="Una experiencia unificada para profesionales de la salud que necesitan ordenar agenda, consultas, evolución clínica y seguimiento sin depender de múltiples herramientas desconectadas."
      highlights={[
        'Agenda, pacientes e historia clínica en un único flujo de trabajo.',
        'Seguimiento longitudinal de cada persona atendida.',
        'Herramientas pensadas para una práctica clínica más ágil y clara.',
      ]}
      sections={[
        {
          title: 'Agenda operativa',
          description:
            'Centraliza turnos, disponibilidad, recordatorios y seguimiento diario para que la práctica sea predecible y fácil de sostener.',
        },
        {
          title: 'Registro clínico',
          description:
            'Documenta consultas, evoluciones y decisiones médicas con contexto completo, sin volver a cargar información en distintos sistemas.',
        },
        {
          title: 'Continuidad asistencial',
          description:
            'Mantiene una visión longitudinal del paciente para tomar mejores decisiones clínicas y reducir fricción en cada contacto.',
        },
      ]}
      primaryCta={{ href: '/contact-us', label: 'Contactanos' }}
      secondaryCta={{ href: '/desarrolladores', label: 'Ver integraciones' }}
    />
  );
}
