export const CATEGORY_SLUGS: Record<string, string> = {
  'Chirurgie Orthognathique': 'chirurgie-orthognathique',
  'Chirurgie Stomatologique': 'chirurgie-stomatologique',
  'Rhinoplastie': 'rhinoplastie',
  'Chirurgie Esthétique': 'chirurgie-esthetique',
  'Dermatochirurgie': 'dermatochirurgie',
};

export const CATEGORY_ORDER = [
  'Chirurgie Stomatologique',
  'Chirurgie Orthognathique',
  'Rhinoplastie',
  'Dermatochirurgie',
  'Chirurgie Esthétique',
];

export const CATEGORY_META: Record<string, { icon: string; subtitle: string }> = {
  'Chirurgie Orthognathique': {
    icon: 'Bone',
    subtitle: "Réalignement des mâchoires pour corriger l'occlusion, la fonction et le visage.",
  },
  'Chirurgie Stomatologique': {
    icon: 'Cross',
    subtitle: "Chirurgie des dents, des kystes et des tissus de la cavité buccale.",
  },
  'Rhinoplastie': {
    icon: 'Wind',
    subtitle: "Chirurgie fonctionnelle et esthétique du nez, à ciel ouvert ou médicale.",
  },
  'Chirurgie Esthétique': {
    icon: 'Sparkles',
    subtitle: "Rajeunissement et harmonie du visage par la chirurgie plastique de la face.",
  },
  'Dermatochirurgie': {
    icon: 'Scissors',
    subtitle: "Exérèse et reconstruction des lésions cutanées du visage.",
  },
};

export const SYMPTOM_CATEGORIES = [
  { id: 'all',               label: 'Tous les symptômes', emoji: '🔍' },
  { id: 'dents-gencives',    label: 'Dents & gencives',   emoji: '🦷' },
  { id: 'machoire-atm',      label: 'Mâchoire & ATM',     emoji: '🦴' },
  { id: 'visage-trauma',     label: 'Visage & traumatisme',emoji: '👁️' },
  { id: 'chirurgie-cutanee', label: 'Chirurgie cutanée',  emoji: '🔬' },
  { id: 'glandes-cou',       label: 'Glandes & cou',      emoji: '💉' },
] as const;

// Ordre stratégique : volume de recherche Google × conversion en acte rémunérateur.
// Les slugs non listés ici s'affichent après, triés par urgence.
export const SYMPTOM_PRIORITY: string[] = [
  'dents-de-sagesse-poussent',
  'douleur-machoire',
  'nez-bouche-devie',
  'decalage-machoires',
  'gonflement',
  'abces-dentaire',
  'grain-de-beaute-suspect',
  'fracture-dent',
  'nez-fracture',
  'traumatisme-facial',
  'ouverture-bouche',
  'bruxisme-grincement-dents',
  'kyste-gencive-bouche',
  'canine-incluse-dent-qui-ne-pousse-pas',
  'perte-dents',
  'luxation-machoire',
  'cellulite-cervico-faciale',
  'sinusite-dentaire',
  'nevralgie-trijumeau-douleur-electrique',
  'fracture-pommette',
];

export function getProcedureBodyLocation(category?: string): string {
  if (!category) return 'Tête et cou';
  const map: Record<string, string> = {
    'Chirurgie Orthognathique': 'Mâchoire',
    'Chirurgie Stomatologique': 'Cavité buccale',
    'Rhinoplastie': 'Nez',
    'Chirurgie Esthétique': 'Visage',
    'Dermatochirurgie': 'Peau du visage',
  };
  return map[category] || 'Tête et cou';
}

export function getSymptomBodyLocation(category?: string): string {
  if (!category) return 'Tête et cou';
  const map: Record<string, string> = {
    'dents-gencives': 'Cavité buccale',
    'machoire-atm': 'Mâchoire',
    'visage-trauma': 'Visage',
    'chirurgie-cutanee': 'Peau du visage',
    'glandes-cou': 'Cou',
  };
  return map[category] || 'Tête et cou';
}

export function getIcd10(category?: string): string | undefined {
  if (!category) return undefined;
  const map: Record<string, string> = {
    'dents-gencives': 'K00-K14',
    'machoire-atm': 'K07.6',
    'visage-trauma': 'S00-S09',
    'chirurgie-cutanee': 'C44',
    'glandes-cou': 'K11',
  };
  return map[category];
}

export function sortByPriority<T extends { slug: string; urgencyLevel: 'urgent' | 'soon' | 'programmed' }>(items: T[]): T[] {
  const urgencyWeight = { urgent: 0, soon: 1, programmed: 2 };
  return [...items].sort((a, b) => {
    const ia = SYMPTOM_PRIORITY.indexOf(a.slug);
    const ib = SYMPTOM_PRIORITY.indexOf(b.slug);
    const pa = ia === -1 ? SYMPTOM_PRIORITY.length + urgencyWeight[a.urgencyLevel] : ia;
    const pb = ib === -1 ? SYMPTOM_PRIORITY.length + urgencyWeight[b.urgencyLevel] : ib;
    return pa - pb;
  });
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function formatPriceRange(s: { fee?: number; feeMax?: number; isReimbursed?: boolean }): string {
  const fmt = (n: number) => n.toLocaleString('fr-FR') + ' €';
  if (s.fee && s.feeMax) return `${fmt(s.fee)} – ${fmt(s.feeMax)}`;
  if (s.fee) return `À partir de ${fmt(s.fee)}`;
  if (s.isReimbursed) return 'Prise en charge Sécu';
  return 'Sur devis';
}
