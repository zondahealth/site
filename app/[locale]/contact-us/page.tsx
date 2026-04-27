import { MarketingPage } from '../../components/MarketingPage';

export default function ContactUsPage() {
  return (
    <MarketingPage
      eyebrow="Contacto"
      title="Hablemos de tu operación de salud"
      description="Si estás evaluando infraestructura, interoperabilidad o una nueva capa operativa para profesionales y organizaciones, este es el mejor punto de partida para conversar con el equipo."
      highlights={[
        'Conversaciones enfocadas en operación, datos e implementación.',
        'Acompañamiento para instituciones, financiadores y equipos técnicos.',
        'Un primer intercambio claro para entender alcance, tiempos y prioridades.',
      ]}
      sections={[
        {
          title: 'Ventas consultivas',
          description:
            'Exploramos el contexto operativo, los sistemas actuales y los objetivos del proyecto para identificar el mejor punto de entrada.',
        },
        {
          title: 'Implementación',
          description:
            'Alineamos prioridades técnicas y operativas para que el despliegue tenga una base realista desde el principio.',
        },
        {
          title: 'Contacto directo',
          description:
            'También podés escribirnos a support@zondahealth.com para iniciar la conversación con el equipo.',
        },
      ]}
      primaryCta={{ href: 'mailto:support@zondahealth.com', label: 'Escribir al equipo' }}
      secondaryCta={{ href: '/empresa', label: 'Conocer la empresa' }}
    />
  );
}
