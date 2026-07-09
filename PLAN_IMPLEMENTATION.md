# Plan d'implémentation complet — Site Dr Flora Jullian (Chirurgie Maxillo-Faciale)

> Synthèse actionnable de l'audit technique + audit expert maxillo-facial.
> Objectif : **un seul design system (`theme-medical`)**, **un seul routing canonique
> (`/interventions/[slug]`)**, **une seule source de vérité (`lib/constants.ts`)**,
> conformité E-E-A-T / déontologique, et parcoups patient sans anxiété.

---

## 0. Décisions d'architecture (à valider avant de coder)

| Sujet | Décision |
|---|---|
| **Route canonique des actes** | `/interventions/[slug]` (data-driven, couvre les 17 actes via `floraData.services`). Unique point d'entrée. |
| **Anciennes pages `/services/*`** | Supprimées (contenu dupliqué/incohérent). Redirection `next.config` `/services(/:slug)?` → `/interventions(/:slug)?`. |
| **Taxonomie symptômes** | Conservée comme entité à part entière : 5 pages `/symptomes/[slug]` + **création d'un index `/symptomes`**. |
| **Design system** | `theme-medical` partout. Suppression du shell ancien (`#D4AF37` / `gray-900` / `font-serif` / `max-w-4xl px-4 py-12`). |
| **Source de vérité** | Tout texte, prix, RPPS, libellés (« Secrétariat Maxillo-Facial ») centralisés dans `lib/constants.ts`. |
| **Avis patients** | Suppression du faux branding Google. Remplacé par un bloc E-E-A-T honnête (diplômes, RPPS, plaque, exercice). |

---

## 1. État vérifié (juillet 2026)

**Déjà correct :**
- `components/MedicalPublicPage.tsx` ligne 116 → les cartes d'actes pointent déjà vers `/interventions/${service.slug}` ✅
- Nav `MedicalHeader` : `Interventions → /interventions`, `Symptômes → /#symptomes` ✅
- `app/interventions/[slug]/page.tsx` : `generateStaticParams` couvre les 17 slugs ✅

**Reste à corriger :**
- `app/interventions/page.tsx` et `app/interventions/[slug]/page.tsx` **n'ont ni `MedicalHeader` ni `MedicalFooter`**.
- `app/tarifs/page.tsx` et `app/a-propos/page.tsx` : **ancien design system**, sans header/footer.
- `app/services/page.tsx` et `app/symptomes/page.tsx` (index) **n'existent pas** → les breadcrumbs `/services` et `/symptomes` mènent en 404.
- `app/sitemap.ts` : **manque `/tarifs` et les 17 `/interventions/*`** ; liste encore les 4 `/services/*` bientôt supprimés.
- 4 pages `app/services/*` dupliquent `/interventions/[slug]` (contenu incohérent + claim « exclusivement en milieu hospitalier » inexact pour les dents de sagesse).
- `components/ReviewCarousel.tsx` : faux avis Google (« 4.9/5 », « 120+ avis Google », logo Google, badge « Vérifié ») + boutons morts.
- `components/FeeSimulator.tsx` : prix hardcodés (80/350/2500 €), jamais rendu, en désaccord avec `priceRange`.
- `app/contact/page.tsx` ligne 52 : libellé « Secrétariat ORL / Maxillo-Faciale » (à uniformiser).
- `app/services/dents-de-sagesse/page.tsx` ligne 93 : « exclusivement en milieu hospitalier » (inexact en libéral).
- Home : grille symptômes ne montre que **3/5** (manquent `ouverture-bouche`, `traumatisme-facial`).
- Pages symptômes pointent vers `/services/...` (bientôt redirigé, mais à corriger en `/interventions/...`).
- Code mort : `subRoutes/`, `src/templates/`, `styles/demo-styles.css`, CSS dupliqué dans `app/globals.css`.

---

## 2. Plan par phases

### P0 — Bloquants : routing, maillage, design system (cohérence)

#### P0.1 — Ajouter `MedicalHeader` + `MedicalFooter` aux pages orphelines
Ces 4 pages utilisent `theme-medical` mais sans header/footer (utilisateur « perdu ») :

- `app/interventions/page.tsx`
- `app/interventions/[slug]/page.tsx`
- `app/tarifs/page.tsx`
- `app/a-propos/page.tsx`

**Action :** en haut du composant,
```tsx
import MedicalHeader from '@/components/MedicalHeader'
import MedicalFooter from '@/components/MedicalFooter'
```
et envelopper le JSX :
```tsx
<MedicalHeader />
<main>{/* ...contenu existant... */}</main>
<MedicalFooter />
```
> Note : vérifier que le layout racine (`app/layout.tsx`) n'injecte PAS déjà header/footer globalement. Si oui, retirer le doublon. (D'après l'audit, seul `app/page.tsx` et quelques pages l'incluent explicitement — donc ajout nécessaire ici.)

#### P0.2 — Supprimer les pages `/services/*` dupliquées + redirections
- Supprimer : `app/services/chirurgie-maxillo-faciale`, `app/services/dents-de-sagesse`, `app/services/douleur-machoire`, `app/services/orthognathie` (dossiers + `page.tsx`).
- Dans `next.config.ts`, ajouter :
```ts
async redirects() {
  return [
    { source: '/services', destination: '/interventions', permanent: true },
    { source: '/services/:slug', destination: '/interventions/:slug', permanent: true },
  ]
}
```
> Sécurise tout lien externe/SEO ancien. Le contenu unique et exact à conserver (ex. détails bloc opératoire) sera migré dans `floraData` si souhaité (voir P1.3).

#### P0.3 — Créer l'index `/symptomes` (et corriger les breadcrumbs)
- **Créer `app/symptomes/page.tsx`** : page `theme-medical` avec `MedicalHeader`/`MedicalFooter`, hero + grille des 5 symptômes (depuis une liste dans `lib/constants.ts`, ex. `floraData.symptoms` ou tableau local), chaque carte → `/symptomes/[slug]`.
- Dans les 5 pages `app/symptomes/*/page.tsx`, corriger le lien de breadcrumb `href="/symptomes"` (qui 404 actuellement) → désormais valide grâce à P0.3.
- Dans ces mêmes pages, remplacer les liens internes `/services/...` par `/interventions/...` :
  - `app/symptomes/traumatisme-facial/page.tsx` ligne 115 → `/interventions/chirurgie-maxillo-faciale`
  - `app/symptomes/dents-de-sagesse-poussent/page.tsx` ligne 135 → `/interventions/dents-de-sagesse`

#### P0.4 — Sitemap complet (`app/sitemap.ts`)
Remplacer le tableau `routes` pour refléter la réalité canonique :
```ts
const routes = [
  '', '/a-propos', '/blog', '/contact', '/legal', '/parcours', '/tarifs',
  '/interventions', '/symptomes',
  ...floraData.services.map(s => `/interventions/${s.slug}`),
  ...['dents-de-sagesse-poussent','douleur-machoire','gonflement','ouverture-bouche','traumatisme-facial'].map(s => `/symptomes/${s}`),
]
```
> Supprime les 4 `/services/*` (désormais redirigés) ; ajoute `/tarifs` + 17 `/interventions/*` + index `/symptomes`.

---

### P1 — Conformité, E-E-A-T & exactitude clinique

#### P1.1 — Unifier `/tarifs` et `/a-propos` dans `theme-medical`
- Migrer les deux pages vers les tokens `theme-medical` (`bg-[#FAF9F6]`, `text-[#241F1A]`, or `#C5A065`/`#A67A3D`, cyan `#0891B2`), police Playfair/Inter.
- Supprimer `#D4AF37`, `gray-900`, `font-serif`, `max-w-4xl px-4 py-12` (passer à `max-w-6xl px-6`).
- Conserver le contenu (tarifs, parcours, bio) ; le réinjecter dans le nouveau shell avec header/footer (P0.1 couvre déjà l'enrobage).

#### P1.2 — Retirer le faux branding d'avis (`components/ReviewCarousel.tsx`)
- Supprimer : « 4.9/5 », « 120+ avis Google », logo SVG Google, badge « Vérifié », boutons morts « Consulter tous les avis » / « Laissez votre témoignage ».
- **Remplacer** par un bloc E-E-A-T honnête (depuis `floraData`) :
  - Nom + titre (« Chirurgien Maxillo-Facial »), qualification (DES/CCP), n° RPPS (`floraData.rppsNumber`), type d'exercice (Secteur 2), lieu (GHRMSA Mulhouse).
  - Option : intégrer plus tard de **vrais** avis via un CMS/Google Business Profile officiel (hors périmètre demo).

#### P1.3 — Nuancer le claim « exclusivement en milieu hospitalier »
- `app/services/dents-de-sagesse/page.tsx` ligne 93 : reformuler en affirmant exact —
  > « L'avulsion chirurgicale des dents de sagesse peut être réalisée en ambulatoire en cabinet ou en milieu hospitalier selon la complexité ; le Dr Flora Jullian opère au GHRMSA Mulhouse quand un environnement hospitalier est requis. »
- `app/services/dents-de-sagesse/page.tsx` ligne 17 (JSON-LD `description`) : aligner (enlever « réalisée en milieu hospitalier »).
- `app/symptomes/dents-de-sagesse-poussent/page.tsx` ligne 135 : « planifier l'intervention » (sans « en milieu hospitalier »).
- Garder le cadre hospitalier pour **traumatisme facial** (justifié) — `app/symptomes/traumatisme-facial/page.tsx` ligne 115 reste valable.

#### P1.4 — Afficher les 5 symptômes sur l'accueil + liens corrects
- Dans `components/MedicalPublicPage.tsx`, tableau `symptoms` (autour lignes 150-165) : ajouter `ouverture-bouche` et `traumatisme-facial` avec `link: '/symptomes/ouverture-bouche'` et `/symptomes/traumatisme-facial`.
- Idéalement rendre cette grille data-driven depuis `lib/constants.ts` (cf. P2.1).

#### P1.5 — Uniformiser le libellé « Secrétariat »
- `app/contact/page.tsx` ligne 52 : « Secrétariat ORL / Maxillo-Faciale » → **« Secrétariat Maxillo-Facial »**.
- Centraliser le libellé dans `floraContext` (ex. `context.contact.secretariatLabel`) et l'utiliser partout (footer, contact, CTA).

---

### P2 — Finitions, source unique de prix & nettoyage

#### P2.1 — Source unique de prix + intégration `FeeSimulator`
- Ajouter à `MedicalService` (`lib/types.ts`) : `consultationFee?: number; brss?: number;` (ou un champ `fees` structuré).
- Renseigner ces champs dans `floraData.services` pour les actes concernés ; sinon dériver depuis `priceRange`.
- `components/FeeSimulator.tsx` : remplacer les valeurs hardcodées par lecture depuis `floraData` (ex. 3 actes représentatifs : consultation, dents de sagesse, orthognathie).
- **Rendre** `FeeSimulator` sur la home (`MedicalPublicPage.tsx`, import déjà présent ligne 21) et/ou sur `/tarifs`.
- Corriger le décalage : FeeSimulator disait 350 € pour dents de sagesse alors que `priceRange` = « 350–600 € » → utiliser la fourchette ou une valeur unique cohérente.

#### P2.2 — Carte Google Maps réelle sur `/contact`
- Remplacer le placeholder par un `iframe` Google Maps intégré (adresse `20 Avenue du Docteur René Laennec, 68100 Mulhouse`) — ou un lien « Itinéraire » vers Google Maps. Éviter une clé API exposée ; un iframe public suffit pour la demo.

#### P2.3 — Centraliser RPPS
- `floraData.rppsNumber` existe déjà (« 10101603602 »). L'afficher de façon cohérente (footer + `/legal` + bloc E-E-A-T P1.2) via `floraContext`/`floraData`, sans hardcoder ailleurs.

#### P2.4 — Supprimer le code mort
- Supprimer `subRoutes/` (DentsDeSagessePage, DouleurMachoirePage, OrthognathiePage, BlogRenderer).
- Supprimer `src/templates/` (intégralité de `medical-chirugien-maxilo-faciale/`).
- Supprimer `styles/demo-styles.css` (jamais importé).
- `app/globals.css` : dédupliquer `@keyframes marquee`, `.bg-noise`, `.bg-precision-grid` ; garder `.font-lora` → Playfair Display (cohérent avec le reste).

#### P2.5 — Vérification build & lint
- `npm install` (si besoin) puis `npm run build` → 0 erreur, 0 route 404 attendue.
- `npm run lint` → 0 warning bloquant.
- Vérifier `wrangler.toml` (`pages_build_output_dir = ".vercel/output/static"`) compatible avec `@cloudflare/next-on-pages`.

---

## 3. Ordre d'exécution recommandé

1. **P0.1** Enrober les 4 pages orphelines (header/footer) — immédiat, zéro régression.
2. **P0.2** Supprimer `/services/*` + redirections `next.config`.
3. **P0.3** Créer `/symptomes` index + corriger breadcrumbs/liens symptômes→interventions.
4. **P0.4** Sitemap complet.
5. **P1.1** Unifier `/tarifs` + `/a-propos` (theme-medical).
6. **P1.2** Retirer faux avis Google → bloc E-E-A-T.
7. **P1.3** Nuancer claim hospitalier (dents de sagesse).
8. **P1.4** 5 symptômes sur l'accueil.
9. **P1.5** Libellé secrétariat uniforme.
10. **P2.1** Prix uniques + FeeSimulator rendu.
11. **P2.2** Carte Maps réelle.
12. **P2.3** RPPS centralisé.
13. **P2.4** Nettoyage code mort.
14. **P2.5** `build` + `lint`.

---

## 4. Vérification (Definition of Done)

- [ ] Aucune page accessible ne renvoie 404 sur les liens internes du site.
- [ ] `theme-medical` appliqué de façon cohérente sur **toutes** les pages (header/footer présents partout).
- [ ] Un seul routing d'actes : `/interventions/[slug]` (17). `/services/*` redirige.
- [ ] Index `/symptomes` existant ; les 5 symptômes visibles sur l'accueil.
- [ ] Aucun faux avis Google / branding trompeur.
- [ ] Claims cliniques exacts (dents de sagesse ≠ « exclusivement hospitalier »).
- [ ] Prix depuis `lib/constants.ts` uniquement ; `FeeSimulator` visible et cohérent.
- [ ] `sitemap.ts` couvre `/tarifs` + 17 `/interventions/*` + index symptômes.
- [ ] Code mort supprimé ; `build` + `lint` au vert.

---

## 5. Risques & points d'attention

- **Contenu unique perdu** en supprimant `/services/*` : migrer dans `floraData` le copy utile (bloc opératoire, etc.) avant suppression si on veut le conserver.
- **Redirections vs fichiers** : en App Router, `redirects()` de `next.config` prime sur le filesystem pour les chemins matchés — suppression des pages `/services/*` recommandée pour éviter toute ambiguïté.
- **Déontologie** : tout chiffre « avis » doit provenir d'une source réelle (Google Business Profile officiel) — à ne réintroduire que via intégration authentifiée.
- **Cloudflare Pages** : après build, valider le déploiement `wrangler` (sortie `.vercel/output/static`).

---

## 6. Progression (réalisé le 2026-07-08)

### ✅ Terminé
- **P0.1** — `MedicalHeader` + `MedicalFooter` ajoutés à `app/interventions/page.tsx`, `app/interventions/[slug]/page.tsx`, `app/tarifs/page.tsx` (réécrit en `theme-medical`), `app/a-propos/page.tsx` (réécrit en `theme-medical`).
- **P0.2** — Dossier `app/services/` supprimé ; redirections `/services` et `/services/:slug` → `/interventions` dans `next.config.ts`.
- **P0.3** — `app/symptomes/page.tsx` (index) créé ; les breadcrumbs JSON-LD des 5 pages symptômes (`/symptomes`) résolvent désormais. Les liens internes `/services/*` des pages symptômes passent par les redirections (à nettoyer en direct plus tard).
- **P0.4** — `app/sitemap.ts` réécrit : `/tarifs` + 17 `/interventions/*` + index `/symptomes` + 5 `/symptomes/*`.
- **P1.1** — `/tarifs` et `/a-propos` unifiés dans `theme-medical` (combinaison avec P0.1).
- **P1.3** — Claim « exclusivement en milieu hospitalier » adouci dans `app/symptomes/dents-de-sagesse-poussent/page.tsx` (le gros claim était dans la page `/services/dents-de-sagesse` supprimée).
- **P1.5** — Libellé « Secrétariat ORL / Maxillo-Faciale » → « Secrétariat Maxillo-Facial » dans `app/contact/page.tsx`.
- **Bug préexistant corrigé** — import `Tooth` inexistant dans `lucide-react` (installé) remplacé par `Cross` dans `app/interventions/page.tsx` (sinon `next build` échouait au typecheck).
- **Vérif** — `tsc --noEmit` : 0 erreur.
- **P1.2** — `ReviewCarousel` : branding Google factice retiré (4.9/5, « 120+ avis Google », logo, « Vérifié », libellé « Google Maps », boutons morts) → bloc E-E-A-T honnête (titre, conventionnement, RPPS depuis `floraData`).
- **P1.4** — Les 5 symptômes affichés sur l'accueil (`components/MedicalPublicPage.tsx`) avec icônes `Frown`/`Bandage`.

### ⏳ Restant
- **P2.1** — Prix uniques via `floraData` + rendre `FeeSimulator` (déjà importé).
- **P2.2** — Carte Google Maps réelle sur `/contact`.
- **P2.3** — RPPS centralisé (déjà dans `floraData.rppsNumber`, affiché au footer).
- **P2.4** — Supprimer code mort (`subRoutes/`, `src/templates/`, `styles/demo-styles.css`, CSS dupliqué).
- **P2.5** — `npm run build` + `lint` (à lancer dans l'environnement standard, hors shim hermit).
- **Option** — Nav `MedicalHeader` : `Symptômes` → `/symptomes` (au lieu de `/#symptomes`) ; nettoyer les liens `/services/*` en direct dans les pages symptômes.
