'use client';

import {
  IdomHero,
  IntFlow,
  IntFeatureOffice,
  IntFeatureField,
  IntFeatureAudit,
  IntStatsBand,
  IntDemoCTA,
  IntFAQ,
} from '@/components/idom';

export default function InternacionDomiciliariaPage() {
  return (
    <div className="pb-16">
      <IdomHero />

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
