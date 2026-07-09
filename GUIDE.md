# Guide de maintenance du site Dr Flora Jullian

## Architecture rapide

```
lib/           ← DONNEES (tu modifies ici 90% du temps)
  site.ts         Identite, contact, horaires, adresse
  constants.ts    Services (interventions) + tarifs
  symptoms.ts     Symptomes (50 fiches)
  glossary.ts     Lexique patient (tooltips)
  reviews.ts      Avis patients (carrousel homepage)
  faq.ts          FAQ generales (homepage)
  blog-content.ts Contenu des articles de blog
  categories.ts   Ordre des categories, priorites, helpers
  seo.ts          URL de base, reseaux sociaux, priorites sitemap
  context.ts      Pont entre site.ts et les composants (auto)
  types.ts        Interfaces TypeScript (auto)

app/           ← PAGES (tu ne touches que pour ajouter une page)
components/    ← COMPOSANTS (tu ne touches que pour le design)
public/        ← IMAGES (drjullian.webp, planning-3d.webp, etc.)
```

---

## 1. Modifier les informations du cabinet

**Fichier** : `lib/site.ts`

### Changer le telephone, email ou adresse

```ts
contact: {
  phone: "03 89 64 62 00",     // ← modifier ici
  email: "secr-orl@ghrmsa.fr", // ← modifier ici
},
address: {
  street: "20 Avenue du Docteur René Laennec",
  city: "Mulhouse",
  postalCode: "68100",
  // ...
},
```

Impacte automatiquement : header, footer, sticky contact mobile, page contact, schema.org.

### Changer les horaires

```ts
hours: [
  { day: "Lun — Jeu", open: "08h30 – 16h30" },
  { day: "Vendredi", open: "08h30 – 12h00" },
  // Ajouter une ligne pour le samedi :
  // { day: "Samedi", open: "09h00 – 12h00" },
],
```

### Changer les stats de la homepage

```ts
stats: [
  { number: '17+', label: 'Interventions chirurgicales' },
  { number: '50+', label: 'Symptômes pris en charge' },
  // ...
],
```

### Changer la citation du docteur

```ts
doctor: {
  // ...
  quote: "La chirurgie maxillo-faciale est à la croisée..."
},
```

### Changer la photo

Remplacer le fichier `public/drjullian.webp` (garder le meme nom). Format recommande : WebP, 800x800px.

---

## 2. Gerer les interventions (services)

**Fichier** : `lib/constants.ts` — tableau `services[]`

### Modifier un tarif

Chaque service a ses donnees de prix au meme endroit :

```ts
{
  id: "4", name: "Avulsion des dents de sagesse", slug: "dents-de-sagesse",
  // ...
  fee: 350,            // Honoraires bas de fourchette (€)
  feeMax: 600,         // Honoraires haut de fourchette (€, optionnel)
  brss: 150,           // Base de remboursement Secu (€, optionnel)
  isReimbursed: true,  // Remboursable Secu ?
  // ...
}
```

Le texte affiche sur le site est genere automatiquement :

| Donnees                           | Texte affiche               |
|-----------------------------------|-----------------------------|
| `fee: 350, feeMax: 600`          | "350 € – 600 €"           |
| `fee: 350` (sans feeMax)         | "A partir de 350 €"        |
| `isReimbursed: true` (sans fee)  | "Prise en charge Secu"     |
| rien                              | "Sur devis"                 |

Tu ne dois jamais ecrire le texte du prix a la main — modifie uniquement `fee`, `feeMax`, `brss`.

### Ajouter une nouvelle intervention

Ajouter un objet dans le tableau `services[]` :

```ts
{
  id: "18",
  name: "Nom de l'intervention",
  slug: "nom-de-lintervention",          // URL : /interventions/nom-de-lintervention
  category: "Chirurgie Stomatologique",   // Doit etre dans CATEGORY_ORDER (voir section 6)
  description: "Description courte (1-2 phrases).",
  details: "Description detaillee (paragraphe).",
  recovery: "Suites operatoires attendues.",
  risks: ["Risque 1", "Risque 2"],
  timeline: [
    { day: "J+1", event: "Premier controle." },
    { day: "J+7", event: "Retrait des fils." },
  ],
  anesthesia: "Locale",                  // ou "Generale" ou "Locale ou Generale"
  location: "Cabinet / GHRMSA Mulhouse",
  stay: "Ambulatoire",                   // ou "Hospitalisation (2-3 nuits)"
  fee: 500,                              // Optionnel
  feeMax: 800,                           // Optionnel
  brss: 200,                             // Optionnel (si Secu rembourse)
  isReimbursed: true,                    // true ou false
  faq: [
    { question: "Question ?", answer: "Reponse." },
  ],
  relatedSymptoms: ["slug-du-symptome"], // Slugs depuis symptoms.ts
  indications: ["Indication 1"],
  outcome: "Resultat attendu.",
  preparation: "Bilan pre-operatoire.",
},
```

La page `/interventions/nom-de-lintervention` est generee automatiquement. Le service apparait aussi dans :
- la page `/tarifs` (si la categorie est dans `CATEGORY_ORDER`)
- le simulateur (si `fee` est renseigne)
- la page `/interventions` (listing)
- le sitemap

### Supprimer une intervention

Supprimer l'objet du tableau `services[]`. Tout disparait automatiquement.

---

## 3. Gerer les symptomes

**Fichier** : `lib/symptoms.ts` — tableau `symptomData[]`

### Ajouter un symptome

```ts
{
  id: "s51",
  slug: "mon-nouveau-symptome",           // URL : /symptomes/mon-nouveau-symptome
  title: "Titre du symptome",
  headline: "sous-titre court",
  metaDescription: "Description SEO (155 caracteres max).",
  urgencyLevel: "programmed",             // "urgent" | "soon" | "programmed"
  category: "dents-gencives",             // Voir categories disponibles ci-dessous
  intro: "Texte d'introduction (2-3 phrases).",
  causes: [
    "Cause possible 1",
    "Cause possible 2",
  ],
  consultSigns: [
    "Signe qui doit amener a consulter",
  ],
  faq: [
    { question: "Question ?", answer: "Reponse." },
  ],
  relatedSymptoms: ["slug-autre-symptome"],   // Optionnel
  relatedIntervention: {                       // Optionnel
    slug: "slug-du-service",
    label: "Voir l'intervention associee",
    description: "Texte explicatif.",
  },
},
```

### Categories de symptomes disponibles

| ID                | Label               |
|-------------------|---------------------|
| `dents-gencives`  | Dents & gencives    |
| `machoire-atm`    | Machoire & ATM      |
| `visage-trauma`   | Visage & traumatisme|
| `chirurgie-cutanee`| Chirurgie cutanee  |
| `glandes-cou`     | Glandes & cou       |

Definies dans `lib/categories.ts` → `SYMPTOM_CATEGORIES`.

### Niveaux d'urgence

| Valeur        | Badge affiche          | Couleur |
|---------------|------------------------|---------|
| `urgent`      | Urgence                | Rouge   |
| `soon`        | Sous 7 j.              | Orange  |
| `programmed`  | Programme              | Vert    |

### Modifier la priorite d'affichage des symptomes

**Fichier** : `lib/categories.ts` → `SYMPTOM_PRIORITY`

Les symptomes sont affiches dans cet ordre sur `/symptomes`. Ajouter le slug en haut = plus visible :

```ts
export const SYMPTOM_PRIORITY: string[] = [
  'dents-de-sagesse-poussent',  // Position 1 = le plus visible
  'douleur-machoire',
  // ...
];
```

Les symptomes non listes apparaissent apres, tries par urgence.

---

## 4. Gerer le glossaire medical (tooltips)

**Fichier** : `lib/glossary.ts`

Les termes du glossaire apparaissent automatiquement comme tooltips (desktop) ou bottom-sheets (mobile) partout ou ils sont mentionnes dans le texte des interventions et des symptomes.

### Ajouter un terme

```ts
export const medicalGlossary: Record<string, { title: string; definition: string }> = {
  // ...termes existants...
  monterme: {
    title: "Mon terme medical",
    definition: "Explication rassurante en langage patient.",
  },
};
```

La cle (`monterme`) est le mot recherche dans les textes. La recherche est insensible a la casse et detecte aussi les pluriels (`montermes`).

Le terme apparaitra automatiquement dans :
- les pages `/interventions/[slug]` (description, details, FAQ)
- les pages `/symptomes/[slug]` (intro, causes, FAQ)

---

## 5. Gerer les avis patients

**Fichier** : `lib/reviews.ts`

```ts
export const reviews = [
  {
    id: '1',
    author: 'Sophie M.',
    initials: 'SM',             // Affiche dans l'avatar
    text: "Texte de l'avis.",
    date: 'Mai 2026',
  },
  // Ajouter un avis : copier/coller un bloc et modifier
];
```

Les avis sont affiches en carrousel defilant sur la homepage.

---

## 6. Gerer les categories d'interventions

**Fichier** : `lib/categories.ts`

### Ordre d'affichage

```ts
export const CATEGORY_ORDER = [
  'Chirurgie Stomatologique',    // Affichee en premier
  'Chirurgie Orthognathique',
  'Rhinoplastie',
  'Dermatochirurgie',
  'Chirurgie Esthétique',        // Affichee en dernier
];
```

Cet ordre impacte : page `/interventions`, page `/tarifs`, simulateur.

### Ajouter une nouvelle categorie

1. Ajouter le nom dans `CATEGORY_ORDER`
2. Ajouter les metadonnees dans `CATEGORY_META` :

```ts
export const CATEGORY_META: Record<string, { icon: string; subtitle: string }> = {
  // ...
  'Ma Nouvelle Categorie': {
    icon: 'Heart',                    // Nom d'icone Lucide
    subtitle: "Description courte.",
  },
};
```

3. Ajouter le slug dans `CATEGORY_SLUGS` :

```ts
export const CATEGORY_SLUGS: Record<string, string> = {
  // ...
  'Ma Nouvelle Categorie': 'ma-nouvelle-categorie',
};
```

4. Creer des services avec `category: "Ma Nouvelle Categorie"` dans `constants.ts`

---

## 7. Gerer le blog

### Metadonnees des articles

**Fichier** : `lib/constants.ts` → `posts[]` (dans `floraData`)

```ts
posts: [
  {
    id: "p1",
    title: "Titre de l'article",
    slug: "mon-article",                    // URL : /blog/mon-article
    category: "intervention",               // "intervention" | "conseil" | "cas_clinique"
    featured_image_url: "/planning-3d.webp",
    reading_time_minutes: 6,
    published_at: "2026-06-01",
  },
],
```

### Contenu des articles

**Fichier** : `lib/blog-content.ts`

```ts
export const blogContent: Record<string, BlogArticle> = {
  'mon-article': {                           // Meme slug que dans posts[]
    subtitle: "Sous-titre de l'article",
    sections: [
      { title: "Titre de section", text: "Contenu de la section." },
      { title: "Deuxieme section", text: "Suite du contenu." },
    ],
  },
};
```

### Ajouter un article

1. Ajouter les metadonnees dans `constants.ts` → `posts[]`
2. Ajouter le contenu dans `blog-content.ts`
3. Ajouter l'image dans `public/`

---

## 8. Gerer la FAQ generale

**Fichier** : `lib/faq.ts`

```ts
export const generalFaqs: FaqItem[] = [
  {
    question: "Comment se deroule la premiere consultation ?",
    answer: "Diagnostic approfondi, analyse imagerie...",
  },
  // Ajouter une FAQ : copier/coller un bloc
];
```

Affichee sur la homepage dans la section FAQ.

---

## 9. Modifier le SEO

**Fichier** : `lib/seo.ts`

### Changer l'URL du site

```ts
baseUrl: "https://dr-flora-jullian.fr",
```

### Ajouter un reseau social

```ts
sameAs: [
  "https://www.ghrmsa.fr",
  "https://www.instagram.com/drflorajullian",  // ← ajouter ici
],
```

### Ajuster les priorites du sitemap

```ts
sitemap: {
  priorities: {
    home: 1.0,           // 0.0 a 1.0 — plus c'est haut, plus Google crawle
    interventions: 0.8,
    // ...
  },
},
```

---

## 10. Modifier la charte graphique

### Couleurs principales

Les couleurs sont utilisees directement dans les classes Tailwind (pas de config centralisee) :

| Couleur     | Code        | Usage                      |
|-------------|-------------|----------------------------|
| Fond        | `#FAF9F6`   | Background general         |
| Texte       | `#241F1A`   | Titres                     |
| Texte body  | `#423C35`   | Paragraphes                |
| Or/Accent   | `#A67A3D`   | Labels, ornements          |
| Or clair    | `#C5A065`   | Boutons secondaires        |
| Teal        | `#0891B2`   | Liens, hover, badges Secu  |
| Bordures    | `#E8DFD1`   | Cartes, separateurs        |
| Sombre      | `#241F1A`   | Boutons principaux, footer |

### Police

- **Titres** : `font-lora` (Lora, serif)
- **Corps** : police systeme sans-serif (definie dans `layout.tsx`)

---

## 11. Ajouter une image

Placer le fichier dans `public/`. Formats recommandes :
- **Photos** : WebP, largeur 800-1200px
- **Icones** : SVG

Utiliser dans le code :
```tsx
<Image src="/mon-image.webp" alt="Description" width={800} height={600} />
```

---

## 12. Checklist apres modification

1. Lancer le serveur de dev : `npm run dev`
2. Verifier la page modifiee dans le navigateur
3. Verifier sur mobile (DevTools → mode responsive)
4. Tester les liens internes
5. Builder pour verifier les erreurs : `npm run build`

---

## Recap : quel fichier modifier ?

| Je veux...                          | Fichier                  |
|-------------------------------------|--------------------------|
| Changer un tarif                    | `lib/constants.ts`       |
| Ajouter une intervention            | `lib/constants.ts`       |
| Ajouter un symptome                 | `lib/symptoms.ts`        |
| Ajouter un mot au glossaire         | `lib/glossary.ts`        |
| Ajouter un avis patient             | `lib/reviews.ts`         |
| Ajouter un article de blog          | `lib/constants.ts` + `lib/blog-content.ts` |
| Changer le telephone/email          | `lib/site.ts`            |
| Changer les horaires                | `lib/site.ts`            |
| Changer l'URL du site               | `lib/seo.ts`             |
| Ajouter une FAQ generale            | `lib/faq.ts`             |
| Ajouter une categorie               | `lib/categories.ts`      |
| Changer l'ordre des categories      | `lib/categories.ts`      |
| Changer la priorite des symptomes   | `lib/categories.ts`      |
| Changer la photo du docteur         | `public/drjullian.webp`  |
