import {
  FeaturePanel,
  FeaturePanelBackgroundStyling,
  FeaturePanelTone,
} from '@/app/components/FeaturePanel';
import Image from 'next/image';

export default function InternacionDomiciliariaPage() {
  return (
    <div>
      <section>
        <FeaturePanel
          className="flex min-h-0 w-full flex-1 flex-col rounded-none min-h-[clamp(30rem,100dvh,1000px)]"
          tone={FeaturePanelTone.GradientGreen}
          backgroundStyling={FeaturePanelBackgroundStyling.Map}
          contentClassName="flex mx-auto grid min-h-0 max-w-2xl md:max-w-7xl flex-1 grid-cols-1 grid-rows-[auto_1fr] md:grid-cols-2 md:grid-rows-1 md:items-stretch px-6 gap-12"
        >
          <div className="flex min-w-0 flex-col items-center justify-center px-6 py-10 text-center md:items-start md:text-left space-y-8 ">
            <h1 className="text-6xl font-bold">
              Optimizá cada dato y minuto de tu empresa de atención
              domiciliaria.
            </h1>
            <p className="text-xl font-bold">
              Gestión centralizada, aplicación para profesionales en campo, LOE
              y auditoría en tiempo real. Todo conectado. Sin puntos ciegos
              entre la administración y el domicilio del paciente.
            </p>
          </div>
          <div className="relative flex h-full w-full items-center justify-center md:justify-end">
            <div className="pointer-events-none hidden h-full w-full items-end md:flex">
              <Image
                src="/assets/id/hero.png"
                alt="Profesionales"
                width={750}
                height={750}
                className="pointer-events-none max-h-none max-w-none shrink-0 object-contain"
                sizes="100%"
              />
            </div>
          </div>
        </FeaturePanel>
      </section>
    </div>
  );
}
