export interface BlogSection {
  title: string;
  text: string;
}

export interface BlogArticle {
  subtitle: string;
  sections: BlogSection[];
}

export const blogContent: Record<string, BlogArticle> = {
  'parcours-orthognathique': {
    subtitle: "De la première consultation à la stabilisation post-opératoire",
    sections: [
      {
        title: "1. La Phase Préparatoire",
        text: "Cette étape dure généralement 12 à 18 mois. L'orthodontiste aligne les dents sur chaque mâchoire de manière indépendante pour préparer le geste chirurgical. Une simulation 3D est réalisée pour définir les objectifs précis du déplacement osseux."
      },
      {
        title: "2. L'Intervention Chirurgicale",
        text: "L'opération se déroule sous anesthésie générale, au GHRMSA. Elle consiste à repositionner les bases osseuses. Les incisions sont exclusivement réalisées à l'intérieur de la bouche, ne laissant aucune cicatrice visible sur le visage."
      },
      {
        title: "3. La Récupération",
        text: "Une hospitalisation de 2 à 3 jours est nécessaire. La reprise d'une alimentation normale est progressive. Le bénéfice fonctionnel (mastication, respiration) et esthétique est immédiat, bien que l'oedème mette quelques semaines à se résorber totalement."
      },
    ]
  },
  'conseils-dents-de-sagesse': {
    subtitle: "Maximiser votre confort et accélérer la guérison",
    sections: [
      {
        title: "I. La gestion du froid",
        text: "Appliquez des poches de glace sur les joues pendant les 48 premières heures. Le froid limite l'inflammation et réduit significativement le gonflement post-opératoire."
      },
      {
        title: "II. L'alimentation adaptée",
        text: "Privilégiez les aliments mous et tièdes ou froids (glaces, yaourts, purées tiédies). Évitez tout aliment petit et dur (riz, semoule, pépins) qui pourrait se loger dans les zones de cicatrisation."
      },
      {
        title: "III. L'hygiène bucco-dentaire",
        text: "Ne faites pas de bains de bouche vigoureux le premier jour pour laisser le caillot se stabiliser. Reprenez un brossage doux avec une brosse à dents post-opératoire dès le lendemain."
      },
    ]
  },
  'precision-3d': {
    subtitle: "La technologie au service de la sécurité chirurgicale",
    sections: [
      {
        title: "La modélisation numérique",
        text: "À partir d'un scanner 3D du patient, nous reconstruisons virtuellement l'anatomie faciale. Cela permet de simuler différents scénarios chirurgicaux et de choisir celui offrant le meilleur équilibre fonctionnel."
      },
      {
        title: "Guides de coupe sur mesure",
        text: "L'impression 3D permet de créer des guides chirurgicaux personnalisés. Ces instruments, stérilisés et utilisés au bloc, reportent exactement la planification virtuelle sur le patient."
      },
      {
        title: "Résultats prévisibles",
        text: "Cette approche réduit le temps opératoire et augmente la prévisibilité des résultats, particulièrement dans les cas complexes de dysmorphoses faciales ou de reconstructions post-traumatiques."
      },
    ]
  },
};
