import { IntHeader } from './IntHeader';
import { IntHero } from './IntHero';
import { IntLogos } from './IntLogos';
import { IntFlow } from './IntFlow';
import { IntFeatureOffice } from './IntFeatureOffice';
import { IntFeatureField } from './IntFeatureField';
import { IntFeatureAudit } from './IntFeatureAudit';
import { IntStatsBand } from './IntStatsBand';
import { IntTestimonial } from './IntTestimonial';
import { IntDemoCTA } from './IntDemoCTA';
import { IntFAQ } from './IntFAQ';

export function InternacionPage() {
  return (
    <div style={{ background: '#fcfcff', color: 'var(--zonda-ink)', overflow: 'hidden', position: 'relative' }}>
      <IntHeader />
      <IntHero />
      <IntLogos />
      <IntFlow />
      <IntFeatureOffice />
      <IntFeatureField />
      <IntFeatureAudit />
      <IntStatsBand />
      <IntTestimonial />
      <IntDemoCTA />
      <IntFAQ />
    </div>
  );
}
