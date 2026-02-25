import { PricingBox } from '../components/PricingBox';
import { SectionTitle } from '../components/SectionTitle';
import { pricing } from '../data/siteContent';
import { SeoHead } from '../seo/SeoHead';

export function PricingPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 md:px-8">
      <SeoHead
        title="Tarifs dépannage informatique Beauvais | Sovana"
        description="Consultez les tarifs Sovana pour une assistance informatique à domicile ou à distance à Beauvais et dans l'Oise."
        path="/tarifs"
      />
      <SectionTitle
        title="Tarifs de dépannage informatique à Beauvais"
        subtitle="Une grille de prix lisible pour vous permettre de décider sereinement."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <PricingBox title="Tarifs horaires" items={pricing.hourlyRates} />
        <PricingBox title="Frais de déplacement" items={pricing.travelFees} />
      </div>
    </main>
  );
}
