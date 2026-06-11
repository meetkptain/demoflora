# 🚀 AUDIT & PLAN D'IMPLÉMENTATION : OPTIMISATION "SERVER-FIRST" (ACTION 2)

## 🔍 L'AUDIT DU PROBLÈME ACTUEL

### 1. Le Diagnostic Technique
Actuellement, le fichier `components/MedicalPublicPage.tsx` contient `379 lignes` de code et pèse lourd en HTML/CSS. 
Tout en haut de ce fichier, on trouve la directive : **`'use client';`**.

### 2. Pourquoi ce `'use client'` est là ?
Il est obligatoire à cause d'**un seul élément interactif** situé à la toute fin du fichier (lignes 350-370) : le **Sticky Contact Button** (le bouton qui apparaît en bas de l'écran sur mobile quand on fait défiler la page).
Pour fonctionner, ce bouton utilise :
*   `useState` : Pour savoir s'il doit être visible ou caché, et si le secrétariat est ouvert.
*   `useEffect` : Pour écouter l'événement de "scroll" (défilement) de la fenêtre et calculer l'heure actuelle.

### 3. Les Dommages Collatéraux (L'impact sur la Performance)
À cause de ce petit bouton, Next.js est forcé d'envoyer **l'intégralité des 379 lignes** de la page d'accueil (le Hero, les icônes, les textes des services, la carte) sous forme de JavaScript au téléphone du patient. 
*   **Conséquence :** Le téléphone doit calculer tout le rendu. Le Total Blocking Time (TBT) augmente. Le site met 1 à 2 secondes de plus à s'afficher sur une connexion 3G. Cloudflare Pages ne peut pas mettre le HTML pré-calculé en cache de manière optimale.

---

## 🛠️ LE PLAN D'IMPLÉMENTATION (La "Chirurgie" du Code)

L'objectif est d'isoler l'interactivité (le bouton) pour rendre 95% de la page d'accueil statique (Server Component).

### ÉTAPE 1 : Créer le composant isolé `StickyContact.tsx`
Je vais créer un nouveau fichier dans `components/`. Ce fichier contiendra **exclusivement** la logique du bouton flottant.

*   **Le Code :** Il inclura le `'use client';`, les `useState`, le `useEffect` pour le scroll et le calcul des horaires d'ouverture.
*   **Les Props :** Il recevra en paramètre le numéro de téléphone et l'email du Dr Jullian.

### ÉTAPE 2 : Nettoyer `MedicalPublicPage.tsx`
Je vais opérer la page d'accueil pour la transformer en Server Component :

*   **Suppression 1 :** Retirer la directive `'use client';` de la première ligne.
*   **Suppression 2 :** Supprimer les imports de `useState` et `useEffect` (devenus inutiles).
*   **Suppression 3 :** Effacer toute la logique Javascript des horaires et du scroll (lignes 30 à 60 environ).
*   **Suppression 4 :** Retirer le code HTML du bouton sticky en bas de page.

### ÉTAPE 3 : Greffer le nouveau composant
À l'endroit exact où j'ai supprimé l'ancien code HTML du bouton sticky en bas de `MedicalPublicPage.tsx`, je vais importer et injecter le nouveau composant :
`<StickyContact phone={context.contact.phone} email={context.contact.email} />`

---

## 🏆 RÉSULTAT ATTENDU

Une fois cette opération réalisée :
1.  **Cloudflare Pages** va pré-générer tout le HTML de la page d'accueil (Hero, Services, Praticien) sur ses serveurs.
2.  Le navigateur du patient affichera la page **instantanément** (Baisse drastique du LCP et du FCP).
3.  En tâche de fond, un minuscule fichier JavaScript de 2 Ko sera téléchargé uniquement pour activer le bouton de contact en bas de page.
4.  L'audit Lighthouse affichera un score de performance proche de 100/100 (si testé sans extensions Chrome).
