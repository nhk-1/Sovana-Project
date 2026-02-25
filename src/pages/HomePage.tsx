import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/SectionTitle';
import { ServiceCard } from '../components/ServiceCard';
import { localAreas, pricing, services } from '../data/siteContent';
import { PricingBox } from '../components/PricingBox';
import { SeoHead } from '../seo/SeoHead';

export function HomePage() {
  return (
    <>
      <SeoHead
        title="Dépannage informatique à Beauvais et dans l’Oise | Sovana"
        description="Sovana accompagne les particuliers à Beauvais et dans l’Oise pour le dépannage PC, la suppression de virus, le WiFi et l'assistance informatique à domicile."
        path="/"
      />

      <section className="mx-auto max-w-6xl px-4 pb-16 pt-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-6 animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">Expert local à Beauvais</p>
            <h1 className="text-4xl font-bold leading-tight text-blue-950 md:text-5xl">
              Dépannage informatique à Beauvais et dans l’Oise
            </h1>
            <p className="text-lg leading-8 text-slate-700">
              Intervention rapide à domicile ou à distance pour tous vos besoins informatiques. Un accompagnement
              professionnel, clair et rassurant.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="rounded-xl bg-blue-900 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800">
                Demander une intervention
              </Link>
              <Link to="/tarifs" className="rounded-xl border border-blue-900 px-6 py-3 text-sm font-semibold text-blue-900 hover:bg-blue-50">
                Voir les tarifs
              </Link>
            </div>
          </div>
          <div className="animate-fade-up rounded-3xl border border-blue-100 bg-blue-50/70 p-8 shadow-soft [animation-delay:120ms]">
            <p className="text-lg font-semibold text-blue-950">Pourquoi choisir Sovana ?</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
              <li>• Expert informatique basé à Beauvais</li>
              <li>• Intervention à domicile dans l’Oise</li>
              <li>• Service personnalisé et pédagogique</li>
              <li>• Transparence totale sur les tarifs</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-8">
        <SectionTitle
          title="Services informatiques pour particuliers à Beauvais"
          subtitle="Des prestations orientées résultats pour résoudre rapidement vos problèmes informatiques au quotidien."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
        <div className="mt-6">
          <Link to="/services" className="text-sm font-semibold text-blue-900 hover:text-blue-700">
            Voir tous les services détaillés →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-8">
        <SectionTitle
          title="Tarifs clairs et transparents"
          subtitle="Une visibilité immédiate des prix, sans surprise, pour renforcer la confiance dès le premier contact."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <PricingBox title="Tarifs horaires" items={pricing.hourlyRates} />
          <PricingBox title="Frais de déplacement" items={pricing.travelFees} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-8">
        <SectionTitle title="Zone d’intervention dans l’Oise" subtitle="Nous intervenons rapidement sur les communes suivantes :" />
        <div className="flex flex-wrap gap-3">
          {localAreas.map((area) => (
            <span key={area} className="rounded-full border border-blue-200 px-4 py-2 text-sm text-blue-900 transition hover:bg-blue-50">
              {area}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
