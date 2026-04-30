import { MarketingPage } from '../../../components/MarketingPage';
import { FeaturePanel } from '@/app/components/FeaturePanel';
import { FeaturePanelTone } from '@/app/components/FeaturePanel';
import { FeaturePanelBackgroundStyling } from '@/app/components/FeaturePanel';
import Image from 'next/image';

export default function InteroperabilidadPage() {
  return (
    <div>
      <section className="">
        <FeaturePanel
          className="flex min-h-0 w-full flex-1 flex-col rounded-none min-h-[clamp(30rem,100dvh,1000px)]"
          tone={FeaturePanelTone.Black}
          backgroundStyling={FeaturePanelBackgroundStyling.Full}
          contentClassName="mx-auto grid min-h-0 max-w-2xl md:max-w-7xl flex-1 grid-cols-1 grid-rows-[auto_1fr] md:grid-cols-2 md:grid-rows-1 md:items-stretch px-6 py-24"
        >
          <div className="flex min-w-0 flex-col items-center justify-center px-6 py-10 text-center md:items-start md:text-left space-y-8">
            <h1 className="text-6xl font-bold text-vitality-yellow">
              Optimizá cada dato y minuto de tu empresa de atención
              domiciliaria.
            </h1>
            <p className="text-lg font-semibold text-white">
              Gestión centralizada, aplicación para profesionales en campo, LOE
              y auditoría en tiempo real. Todo conectado. Sin puntos ciegos
              entre la administración y el domicilio del paciente.
            </p>
          </div>
          <div className="relative md:h-full pt-24">
            <Image
              src="/assets/internacion-domiciliaria.png"
              alt="Internación domiciliaria"
              width={500}
              height={500}
            />
          </div>
        </FeaturePanel>
      </section>
    </div>
  );
}
