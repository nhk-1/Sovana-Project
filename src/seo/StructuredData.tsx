export function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Sovana',
    description: 'Dépannage informatique à Beauvais et dans l’Oise, à domicile ou à distance.',
    areaServed: ['Beauvais', 'Oise', 'Hauts-de-France'],
    slogan: 'Votre partenaire numérique de confiance.',
    serviceType: [
      'Dépannage informatique Beauvais',
      'Assistance informatique Oise',
      'Réparation ordinateur Beauvais',
      'Informaticien à domicile Beauvais',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Beauvais',
      addressRegion: 'Oise',
      addressCountry: 'FR',
    },
    telephone: '+33-6-00-00-00-00',
    url: 'https://www.sovana.fr',
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
