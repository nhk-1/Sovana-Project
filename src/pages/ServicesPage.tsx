import { SectionTitle } from '../components/SectionTitle';
import { ServiceCard } from '../components/ServiceCard';
import { services } from '../data/siteContent';
import { SeoHead } from '../seo/SeoHead';

export function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 md:px-8">
      <SeoHead
        title="Services de dépannage informatique à Beauvais | Sovana"
        description="Découvrez nos services de dépannage informatique à domicile à Beauvais : virus, WiFi, optimisation PC et assistance à distance dans l'Oise."
        path="/services"
      />
      <SectionTitle
        title="Services de dépannage informatique à Beauvais et dans l’Oise"
        subtitle="Chaque intervention est pensée pour être rapide, transparente et adaptée à votre niveau."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <ServiceCard key={service.title} title={service.title} description={service.description} />
        ))}
      </div>
    </main>
  );
}
