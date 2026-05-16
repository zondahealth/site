import {
  FeaturePanel,
  FeaturePanelBackgroundStyling,
  FeaturePanelTone,
} from '@/app/components/FeaturePanel';

export function ProTestimonial() {
  return (
    <section className="py-10">
      <div className="layout-shell">
        <FeaturePanel
          tone={FeaturePanelTone.YellowBlueLines}
          className="rounded-md"
          darkenBackground="subtle"
          contentClassName="px-10 py-16 lg:px-20 lg:py-20"
        >
          <svg
            width="42"
            height="32"
            viewBox="0 0 42 32"
            fill="none"
            className="mb-6 opacity-35"
          >
            <path
              d="M18 0H6C2.7 0 0 2.7 0 6v12c0 3.3 2.7 6 6 6h6c-1 4-4 6-6 8h4c8-2 12-7 12-14V0zM42 0H30c-3.3 0-6 2.7-6 6v12c0 3.3 2.7 6 6 6h6c-1 4-4 6-6 8h4c8-2 12-7 12-14V0z"
              fill="var(--zonda-blue-dark)"
            />
          </svg>
          <p className="max-w-3xl text-balance text-2xl font-bold leading-snug tracking-tight text-white lg:text-[32px] lg:leading-[1.25]">
            Antes usaba tres apps distintas para armar mi recorrido, ver la
            agenda y registrar las sesiones. Ahora con Zonda tengo todo en una
            sola — organizo mi día en minutos y me enfoco en mis pacientes.
          </p>
          <div className="mt-10">
            <p className="text-2xl font-bold text-white lg:text-3xl">
              Laura García
            </p>
            <p className="mt-1 text-base text-white/80">
              Kinesióloga · Buenos Aires, AR
            </p>
          </div>
        </FeaturePanel>
      </div>
    </section>
  );
}
