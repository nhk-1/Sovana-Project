import { FormEvent } from 'react';
import { SeoHead } from '../seo/SeoHead';
import { SectionTitle } from '../components/SectionTitle';

export function ContactPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-14 md:px-8">
      <SeoHead
        title="Contact assistance informatique Beauvais | Sovana"
        description="Contactez Sovana pour une intervention informatique à Beauvais et dans l'Oise. Demandez un rappel rapide pour votre dépannage PC."
        path="/contact"
      />
      <SectionTitle
        title="Contactez votre technicien informatique à Beauvais"
        subtitle="Décrivez votre besoin et choisissez si vous souhaitez être rappelé rapidement."
      />
      <form className="grid gap-4 rounded-2xl border border-primary/10 p-6 shadow-soft md:grid-cols-2" onSubmit={handleSubmit}>
        {['Nom', 'Prénom', 'Email', 'Téléphone', 'Ville', 'Type de service'].map((field) => (
          <label key={field} className="text-sm font-medium text-ink">
            {field}
            <input className="mt-2 w-full rounded-lg border border-primary/20 px-3 py-2" type="text" required />
          </label>
        ))}
        <label className="text-sm font-medium text-ink md:col-span-2">
          Message
          <textarea className="mt-2 w-full rounded-lg border border-primary/20 px-3 py-2" rows={5} required />
        </label>
        <label className="flex items-center gap-2 text-sm text-ink md:col-span-2">
          <input type="checkbox" className="size-4" />
          Être rappelé rapidement
        </label>
        <button className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white md:col-span-2" type="submit">
          Envoyer ma demande locale
        </button>
      </form>
    </main>
  );
}
