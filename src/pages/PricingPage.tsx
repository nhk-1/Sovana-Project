import { PricingBox } from '../components/PricingBox';
import { PricingPackCard } from '../components/PricingPackCard';
import { SectionTitle } from '../components/SectionTitle';
import { pricing, pricingPacks } from '../data/siteContent';
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
        subtitle="Formules horaires transparentes et packs premium pour un besoin ponctuel ou complet."
      />

      <div className="mb-10 grid gap-6 md:grid-cols-2">
        <PricingBox title="Tarifs horaires" items={pricing.hourlyRates} />
        <PricingBox title="Frais de déplacement" items={pricing.travelFees} />
      </div>

      <SectionTitle
        title="Packs intervention & sécurité"
        subtitle="Des offres tout-en-un pour gagner du temps, sécuriser votre matériel et avancer sereinement."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {pricingPacks.map((pack, index) => (
          <PricingPackCard
            key={pack.name}
            name={pack.name}
            price={pack.price}
            summary={pack.summary}
            idealIf={pack.idealIf}
            includes={pack.includes}
            objective={pack.objective}
            highlight={index === 1}
            index={index}
          />
        ))}
      </div>
    </main>
  );
}
