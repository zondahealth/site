import { FeaturePanel, FeaturePanelTone } from '@/app/components/FeaturePanel';
import {
  IntFlow,
  IntFeatureOffice,
  IntFeatureField,
  IntFeatureAudit,
  IntStatsBand,
  IntDemoCTA,
  IntFAQ,
} from '@/app/components/idom';

export default function InternacionDomiciliariaPage() {
  return (
    <div className="pb-16">
      <section className="flex w-full flex-col">
        <FeaturePanel
          tone={FeaturePanelTone.MapPlayful}
          className="flex w-full flex-col rounded-none h-[100dvh] min-h-[30rem]"
          darkenBackground="strong"
          contentClassName="flex flex-1 flex-col items-center justify-center px-8 py-20 sm:px-12 sm:py-28 lg:px-20 lg:py-36 text-center text-white "
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold [font-family:var(--font-display-family)]">
            Todo tu equipo conectado, desde la oficina hasta el domicilio.
          </h1>
          <p className="mt-6 text-lg md:text-xl lg:text-2xl font-semibold max-w-3xl">
            Organizá visitas, coordiná profesionales y controlá cada paso de la
            atención domiciliaria desde un solo lugar. Sin planillas, sin
            llamados, sin sorpresas.
          </p>
        </FeaturePanel>
      </section>

      <IntFlow />
      <IntFeatureOffice />
      <IntFeatureField />
      <IntFeatureAudit />
      <IntStatsBand />
      <IntFAQ />
      <IntDemoCTA />
    </div>
  );
}
