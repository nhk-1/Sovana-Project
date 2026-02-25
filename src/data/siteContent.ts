export const navigation = [
  { label: 'Accueil', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Tarifs', path: '/tarifs' },
  { label: 'Zone d’intervention', path: '/zone-intervention' },
  { label: 'Contact', path: '/contact' },
];

export type ServiceItem = {
  title: string;
  description: string;
  objective: string;
  illustration: string;
  includes: string[];
};

export const services: ServiceItem[] = [
  {
    title: 'Assistance informatique à distance',
    description: 'Intervention rapide sans déplacement, idéale pour les problèmes courants.',
    objective: 'Rapidité, efficacité, rentabilité.',
    illustration: '🖥️',
    includes: [
      'Ordinateur lent',
      'Problèmes logiciels',
      'Configuration messagerie (Outlook, Gmail, etc.)',
      'Suppression virus et logiciels indésirables',
      'Nettoyage et optimisation système',
      'Paramétrage imprimante',
      'Mise à jour système',
      'Aide ponctuelle à l’utilisation',
    ],
  },
  {
    title: 'Intervention informatique à domicile',
    description: 'Déplacement dans un rayon de 20 km autour de Beauvais.',
    objective: 'Proximité et confiance.',
    illustration: '🏠',
    includes: [
      'Installation box internet / WiFi',
      'Problèmes réseau domestique',
      'Mise en service ordinateur neuf',
      'Installation imprimante',
      'Diagnostic complet système',
      'Dépannage matériel',
      'Optimisation performances',
      'Assistance personnalisée',
    ],
  },
  {
    title: 'Installation & mise en service complète',
    description: 'Accompagnement clé en main lors de l’achat d’un nouvel équipement.',
    objective: 'Simplicité et sérénité.',
    illustration: '⚙️',
    includes: [
      'Installation PC fixe ou portable',
      'Transfert de données',
      'Installation logiciels essentiels',
      'Configuration messagerie',
      'Paramétrage imprimante',
      'Synchronisation smartphone / ordinateur',
      'Mise en place sauvegardes',
    ],
  },
  {
    title: 'Sécurité & protection des données',
    description: 'Protection des appareils et des informations personnelles.',
    objective: 'Tranquillité et prévention.',
    illustration: '🔒',
    includes: [
      'Installation antivirus',
      'Nettoyage virus / malwares',
      'Paramétrage pare-feu',
      'Mise en place sauvegarde automatique',
      'Configuration cloud sécurisé',
      'Conseils en cybersécurité domestique',
    ],
  },
  {
    title: 'Accompagnement & formation personnalisée',
    description: 'Approche pédagogique adaptée aux seniors et débutants.',
    objective: 'Autonomie et compréhension.',
    illustration: '🎓',
    includes: [
      'Initiation à l’utilisation d’un ordinateur',
      'Comprendre internet et les emails',
      'Sécurité en ligne',
      'Utilisation smartphone / tablette',
      'Formation personnalisée à domicile',
    ],
  },
  {
    title: 'Services pour indépendants et petites structures',
    description: 'Accompagnement ponctuel ou installation.',
    objective: 'Fiabilité et efficacité.',
    illustration: '💼',
    includes: [
      'Installation poste de travail',
      'Configuration réseau basique',
      'Sécurisation poste',
      'Optimisation système',
      'Assistance ponctuelle',
      'Conseils d’achat matériel',
    ],
  },
];

export const pricing = {
  hourlyRates: ['Intervention à domicile : 65€/h', 'Assistance à distance : 55€/h', 'Diagnostic : 35€'],
<<<<<<< codex/develop-local-seo-strategy-for-sovana-website-2coo3n
  travelFees: ['Déplacement gratuit jusqu’à 20 km autour de Beauvais', 'Au-delà : 0,70€/km'],
};


export type PricingPackItem = {
  name: string;
  price: string;
  summary: string;
  idealIf: string[];
  includes: string[];
  objective: string;
};

export const pricingPacks: PricingPackItem[] = [
  {
    name: 'Pack PC Sérénité',
    price: '149 €',
    summary: 'Pour un ordinateur plus rapide, plus propre et sécurisé.',
    idealIf: ['Votre ordinateur est lent', 'Vous avez peur des virus', 'Vous voulez repartir sur une base saine'],
    includes: [
      'Diagnostic complet du système',
      'Nettoyage et optimisation',
      'Suppression des menaces éventuelles',
      'Vérification sécurité',
      'Conseils personnalisés',
      '30 minutes d’explication claire',
    ],
    objective: 'Retrouver un ordinateur performant et sécurisé, sans stress.',
  },
  {
    name: 'Pack Installation Complète',
    price: '189 €',
    summary: 'Vous venez d’acheter un nouvel ordinateur ? Nous nous occupons de tout.',
    idealIf: [],
    includes: [
      'Mise en service complète',
      'Transfert de vos données',
      'Installation des logiciels essentiels',
      'Configuration email et imprimante',
      'Paramétrage des mises à jour',
      '1 heure d’accompagnement personnalisé',
    ],
    objective: 'Un ordinateur prêt à l’emploi, parfaitement configuré.',
  },
  {
    name: 'Pack Sécurité & Sauvegarde',
    price: '169 €',
    summary: 'Pour protéger durablement vos données.',
    idealIf: [],
    includes: [
      'Installation antivirus fiable',
      'Nettoyage des menaces',
      'Mise en place d’une sauvegarde automatique',
      'Paramétrage cloud sécurisé',
      'Explication du fonctionnement',
    ],
    objective: 'Protéger vos informations personnelles et éviter les mauvaises surprises.',
  },
];

=======
  travelFees: ['Déplacement gratuit jusqu’à 15 km autour de Beauvais', 'Au-delà : 0,70€/km'],
};

>>>>>>> main
export const localAreas = ['Beauvais', 'Allonne', 'Tillé', 'Saint-Paul', 'Clermont (Oise)', 'Autres communes de l’Oise'];
