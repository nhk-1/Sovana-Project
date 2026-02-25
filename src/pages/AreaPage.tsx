import { localAreas } from '../data/siteContent';
import { SectionTitle } from '../components/SectionTitle';
import { SeoHead } from '../seo/SeoHead';

export function AreaPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 md:px-8">
      <SeoHead
        title="Zone d'intervention informatique dans l'Oise | Sovana"
        description="Sovana intervient à Beauvais, Allonne, Tillé, Saint-Paul, Clermont et dans d'autres communes de l'Oise pour votre assistance informatique."
        path="/zone-intervention"
      />
      <SectionTitle
        title="Zone d’intervention : Beauvais et communes de l’Oise"
        subtitle="Notre proximité locale permet des interventions rapides, à domicile ou à distance."
      />
      <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {localAreas.map((area, index) => (
          <li
            key={area}
            className="animate-fade-up rounded-xl border border-blue-100 bg-white px-4 py-4 text-blue-900 shadow-soft"
            style={{ animationDelay: `${index * 70}ms` }}
          >
            {area}
          </li>
        ))}
      </ul>
    </main>
  );
}
