import { floraContext } from './context';
import { medicalGlossary } from './glossary';
import { symptomData } from './symptoms';
import { MedicalData } from './types';

export { floraContext, medicalGlossary, symptomData };

export const floraData: MedicalData = {
  rppsNumber: "10101603602",
  conventionnement: "Secteur 2 (Adhérent OPTAM)",
  slogan: "Chirurgien Maxillo-Facial de référence au GHRMSA. Expertise hospitalière & libérale à Mulhouse.",
  doctors: [{
    fullname: "Dr Flora Jullian",
    title: "Chirurgien Maxillo-Facial & Stomatologue",
    photoUrl: "/drjullian.webp",
    qualifications: [
      "D.I.U. Chirurgie Orthognathique (Faculté Lyon-Sud)",
      "D.U. Chirurgie Plastique de la Face (Lyon Sud)",
      "D.U. Microchirurgie (Université de Strasbourg)"
    ],
    experience: [
      "Praticienne Hospitalière au GHRMSA (Mulhouse)",
      "Ancienne Assistante spécialiste aux Hôpitaux de Strasbourg"
    ]
  }],
  services: [
    {
      id: "0", name: "Première consultation", slug: "consultation",
      category: "Consultation",
      description: "Consultation spécialisée en chirurgie maxillo-faciale avec le Dr Flora Jullian.",
      fee: 80, brss: 23, isReimbursed: true,
    },
    {
      id: "1", name: "Ostéotomie bimaxillaire", slug: "osteotomie-bimaxillaire",
      category: "Chirurgie Orthognathique",
      description: "Correction simultanée des deux mâchoires (Le Fort I & OSBM) pour réaligner l'occlusion et le visage.",
      details: "Intervention de chirurgie orthognathique associant une ostéotomie de type Le Fort I (maxillaire supérieur) et une Ostéotomie Sagittale Bilatérale de la Mandibule (OSBM). Planifiée virtuellement en 3D grâce à l'imagerie Cone Beam pré-opératoire.",
      recovery: "Gonflement (œdème) normal et transitoire pendant 10 à 15 jours. Alimentation semi-liquide, fraîche ou tiède pendant les 3 premières semaines.",
      risks: ["Hémorragie (rare et contrôlée)", "Infection post-opératoire (prévenue par antibiothérapie)", "Troubles temporaires de la sensibilité (paresthésie des nerfs alvéolaire inférieur ou infra-orbitaire, généralement transitoire)", "Asymétrie résiduelle (très exceptionnelle)"],
      timeline: [
        { day: "J+1", event: "Sortie d'hospitalisation, début de l'alimentation semi-liquide/mixée." },
        { day: "J+7", event: "Premier contrôle post-opératoire clinique et radiologique." },
        { day: "M+1", event: "Reprise progressive des activités sportives." },
        { day: "M+6", event: "Consolidation osseuse complète et résultat stabilisé." }
      ],
      anesthesia: "Générale", location: "Hôpital (GHRMSA Mulhouse)", stay: "Hospitalisation (2-3 nuits)",
      fee: 2500, feeMax: 4500, brss: 600, isReimbursed: true,
      faq: [
        { question: "Dans quel délai reprend-on le travail après une ostéotomie bimaxillaire ?", answer: "Un arrêt de 3 à 4 semaines est recommandé. 80% des patients reprennent le travail sédentaire à 3 semaines, 4 à 6 semaines pour un travail physique." },
        { question: "Faut-il un traitement orthodontique avant et après l'intervention ?", answer: "Oui. Un pré-traitement de 12 à 18 mois prépare les arcades dentaires, suivi d'un post-traitement de 6 à 12 mois pour stabiliser l'occlusion." },
        { question: "L'ostéotomie bimaxillaire est-elle prise en charge par la Sécurité Sociale ?", answer: "Oui, pour une indication fonctionnelle (trouble de l'occlusion, apnées du sommeil, douleurs ATM)." }
      ],
      relatedSymptoms: ["decalage-machoires", "malocclusion-occlusion-dentaire", "douleur-machoire", "bruxisme-grincement-dents", "oreille-atm", "luxation-machoire", "nevralgie-trijumeau-douleur-electrique"],
      indications: ["Décalage important des mâchoires (classe II ou III squelettique)", "Béance antérieure", "Syndrome d'apnée obstructive du sommeil", "Douleurs chroniques de l'ATM"],
      outcome: "Correction durable de l'occlusion dentaire et du profil facial.",
      preparation: "Consultation pré-opératoire avec orthodontiste, bilan d'imagerie 3D (Cone Beam), bilan sanguin."
    },
    {
      id: "2", name: "Ostéotomie mono-maxillaire", slug: "osteotomie-mono-maxillaire",
      category: "Chirurgie Orthognathique",
      description: "Correction chirurgicale isolée d'une seule mâchoire (maxillaire ou mandibule).",
      details: "Réalignement isolé du maxillaire supérieur (Le Fort I) ou de la mandibule (OSBM) pour traiter une asymétrie ou une malocclusion unilatérale.",
      recovery: "Gonflement 7 à 12 jours, alimentation adaptée (mixée puis molle) pendant 2 à 3 semaines.",
      risks: ["Hémorragie", "Infection", "Troubles sensitifs temporaires du nerf V3"],
      timeline: [
        { day: "J+1", event: "Sortie, mise en place d'une alimentation molle tiède." },
        { day: "J+7", event: "Contrôle de cicatrisation et réglage de l'élastodontie." },
        { day: "M+2", event: "Consolidation osseuse complète." }
      ],
      anesthesia: "Générale", location: "Hôpital (GHRMSA Mulhouse)", stay: "Hospitalisation (2-3 nuits)",
      isReimbursed: true,
      faq: [
        { question: "Quelle est la différence avec une ostéotomie bimaxillaire ?", answer: "L'ostéotomie mono-maxillaire ne corrige qu'une seule mâchoire (maxillaire ou mandibule), là où la bimaxillaire agit sur les deux." },
        { question: "L'ostéotomie mono-maxillaire est-elle prise en charge par la Sécurité Sociale ?", answer: "Oui, lorsqu'elle est réalisée pour une indication fonctionnelle." },
        { question: "Combien de temps dure la convalescence ?", answer: "Un arrêt de 2 à 3 semaines est généralement suffisant." }
      ],
      relatedSymptoms: ["decalage-machoires", "malocclusion-occlusion-dentaire"],
      indications: ["Malocclusion unilatérale (classe II ou III modérée)", "Asymétrie légère à modérée du visage"],
      outcome: "Correction ciblée de l'occlusion et du profil.",
      preparation: "Consultation pré-opératoire, bilan d'imagerie 3D (Cone Beam), bilan sanguin."
    },
    {
      id: "3", name: "Chirurgie des asymétries faciales", slug: "chirurgie-asymetries-faciales",
      category: "Chirurgie Orthognathique",
      description: "Traitement chirurgical des dysharmonies et dissymétries des mâchoires.",
      details: "Combinaison d'ostéotomies correctrices guidées par simulation numérique 3D et de greffes pour rééquilibrer le tiers inférieur du visage.",
      recovery: "Gonflement 10 à 15 jours, suivi orthodontique post-opératoire étroit sur plusieurs mois.",
      risks: ["Asymétrie résiduelle", "Troubles sensitifs temporaires", "Infection"],
      timeline: [
        { day: "J+1", event: "Hospitalisation de surveillance post-opératoire." },
        { day: "J+10", event: "Contrôle clinique de la cicatrisation muqueuse." },
        { day: "M+6", event: "Évaluation finale du résultat morphologique." }
      ],
      anesthesia: "Générale", location: "Hôpital (GHRMSA Mulhouse)", stay: "Hospitalisation (2-3 nuits)",
      isReimbursed: true,
      faq: [
        { question: "Peut-on corriger une asymétrie faciale sans chirurgie ?", answer: "Les asymétries mineures peuvent être atténuées par des injections ou un traitement orthodontique. Pour les asymétries squelettiques modérées à sévères, la chirurgie reste le seul traitement définitif." },
        { question: "Combien de temps faut-il pour voir le résultat final ?", answer: "Le résultat final s'apprécie à 6 mois." },
        { question: "La chirurgie des asymétries faciales est-elle remboursée ?", answer: "Oui lorsqu'il existe une gêne fonctionnelle." }
      ],
      relatedSymptoms: ["decalage-machoires"],
      indications: ["Latérodéviation de la mâchoire", "Asymétrie faciale d'origine squelettique", "Dysharmonie du tiers inférieur du visage"],
      outcome: "Rééquilibrage durable de l'harmonie faciale.",
      preparation: "Simulation numérique 3D pré-opératoire, bilan d'imagerie, consultation d'anesthésie."
    },
    {
      id: "4", name: "Avulsion des dents de sagesse", slug: "dents-de-sagesse",
      category: "Chirurgie Stomatologique",
      description: "Avulsion chirurgicale sécurisée des troisièmes molaires guidée par imagerie 3D.",
      details: "Ablation des troisièmes molaires incluses, enclavées ou en malposition sous anesthésie locale ou générale. L'imagerie 3D (Cone Beam) pré-opératoire est systématique.",
      recovery: "Inconfort et douleurs modérées parfaitement soulagés par des antalgiques prescrits, gonflement des joues transitoire de 3 à 5 jours.",
      risks: ["Alvéolite (retard de cicatrisation bénin)", "Diminution temporaire de la sensibilité tactile", "Hémorragie mineure (contrôlée par compression)"],
      timeline: [
        { day: "J+1", event: "Début des bains de bouche doux, alimentation tiède/froide." },
        { day: "J+7", event: "Contrôle de cicatrisation et retrait éventuel des fils." }
      ],
      anesthesia: "Locale ou Générale", location: "Cabinet / GHRMSA Mulhouse", stay: "Ambulatoire",
      fee: 350, feeMax: 600, brss: 150, isReimbursed: true,
      faq: [
        { question: "L'extraction des dents de sagesse est-elle douloureuse ?", answer: "L'intervention se déroule sous anesthésie locale ou générale, donc sans douleur. 90% des patients décrivent une douleur modérée à faible en post-opératoire." },
        { question: "Faut-il extraire les quatre dents de sagesse en même temps ?", answer: "C'est la recommandation la plus fréquente : une seule intervention pour un seul arrêt de travail." },
        { question: "Quand peut-on reprendre une alimentation normale ?", answer: "L'alimentation semi-liquide est recommandée les 3 premiers jours. Retour progressif sur 7 à 10 jours." }
      ],
      relatedSymptoms: ["dents-de-sagesse-poussent", "ouverture-bouche", "saignement-buccal", "alveolite-apres-extraction", "douleur-apres-extraction", "abces-dentaire", "dent-sensible-froid-chaud", "mauvaise-haleine", "canine-incluse-dent-qui-ne-pousse-pas", "frein-langue-court", "dent-fissuree-fendue"],
      indications: ["Dents de sagesse incluses ou enclavées", "Dents de sagesse responsables de douleurs ou d'infections", "Kyste ou lésion dentaire associé", "Traitement orthodontique nécessitant l'avulsion"],
      outcome: "Suppression définitive des douleurs et du risque infectieux.",
      preparation: "Bilan radiologique (panoramique dentaire + Cone Beam si nécessaire), consultation d'anesthésie."
    },
    {
      id: "5", name: "Chirurgie des kystes maxillaires", slug: "kystes-maxillaires",
      category: "Chirurgie Stomatologique",
      description: "Exérèse des kystes des mâchoires et des maxillaires.",
      details: "Ablation des lésions kystiques bénignes avec conservation dentaire quand cela est possible.",
      recovery: "Guérison en 1 à 2 semaines, fils résorbables ou retrait à J+7.",
      risks: ["Récidive", "Infection", "Lésion dentaire adjacente"],
      timeline: [{ day: "J+7", event: "Contrôle radiologique et clinique." }],
      anesthesia: "Locale ou Générale", location: "Cabinet / GHRMSA Mulhouse", stay: "Ambulatoire",
      isReimbursed: true,
      faq: [
        { question: "Un kyste maxillaire est-il toujours bénin ?", answer: "Dans la très grande majorité des cas, oui. L'exérèse permet une analyse anatomopathologique systématique." },
        { question: "Faut-il extraire la dent qui est dans le kyste ?", answer: "Pas toujours. Lorsque c'est possible, le Dr Jullian pratique une kystectomie avec conservation dentaire." },
        { question: "La chirurgie des kystes maxillaires est-elle douloureuse ?", answer: "Les suites sont peu douloureuses et les antalgiques simples suffisent généralement." }
      ],
      relatedSymptoms: ["gonflement", "kyste-gencive-bouche", "fistule-bouton-gencive", "sinusite-dentaire", "communication-bucco-sinusienne"],
      indications: ["Kyste dentaire ou odontogène diagnostiqué à la radiographie", "Gonflement persistant", "Lésion osseuse découverte fortuitement"],
      outcome: "Exérèse complète de la lésion avec conservation du capital dentaire.",
      preparation: "Bilan radiologique (Cone Beam), bilan sanguin."
    },
    {
      id: "6", name: "Greffe osseuse pré-implantaire", slug: "greffe-osseuse-pre-implantaire",
      category: "Chirurgie Stomatologique",
      description: "Comblement des défauts osseux avant pose d'implants.",
      details: "Reconstruction du volume osseux de la mâchoire pour permettre la pose ultérieure d'implants dentaires.",
      recovery: "Gonflement léger 3 à 5 jours, alimentation molle 1 semaine.",
      risks: ["Résorption du greffon", "Infection", "Douleur"],
      timeline: [
        { day: "J+7", event: "Contrôle de la zone greffée." },
        { day: "M+3", event: "Évaluation pour la pose d'implants." }
      ],
      anesthesia: "Locale ou Générale", location: "Cabinet / GHRMSA Mulhouse", stay: "Ambulatoire",
      isReimbursed: true,
      faq: [
        { question: "La greffe osseuse est-elle douloureuse ?", answer: "Les suites sont marquées par un gonflement modéré et une gêne pendant quelques jours." },
        { question: "Combien de temps faut-il attendre avant de poser l'implant ?", answer: "La consolidation osseuse nécessite 3 à 6 mois selon la taille du défaut comblé." },
        { question: "D'où provient l'os utilisé pour la greffe ?", answer: "L'os peut être prélevé sur place ou au niveau de la symphyse mentonnière." }
      ],
      relatedSymptoms: ["perte-dents", "mobilite-dentaire", "gencive-qui-recule", "dent-de-lait-adulte", "peri-implantite"],
      indications: ["Perte osseuse après extraction dentaire", "Défaut osseux congénital", "Volume osseux insuffisant pour implants"],
      outcome: "Reconstruction du volume osseux nécessaire aux implants.",
      preparation: "Bilan radiologique 3D (Cone Beam), évaluation du site donneur."
    },
    {
      id: "9", name: "Septoplastie", slug: "septoplastie",
      category: "Rhinoplastie",
      description: "Correction de la déviation de la cloison nasale.",
      details: "Chirurgie fonctionnelle recentrant la cloison pour libérer le passage de l'air sans modifier l'esthétique.",
      recovery: "Bouchon nasal 24-48h, retour rapide à la vie normale en 1 semaine.",
      risks: ["Saignement", "Perforation septale", "Syndrome du nez vide"],
      timeline: [
        { day: "J+2", event: "Retrait des mèches." },
        { day: "J+10", event: "Contrôle de la respiration." }
      ],
      anesthesia: "Générale", location: "Clinique / GHRMSA Mulhouse", stay: "Ambulatoire",
      isReimbursed: true,
      faq: [
        { question: "La septoplastie est-elle douloureuse ?", answer: "Les suites sont marquées par une congestion nasale et une gêne légère." },
        { question: "Peut-on ronfler moins après une septoplastie ?", answer: "Oui. En rétablissant un flux d'air nasal normal, la septoplastie réduit les ronflements liés à l'obstruction nasale." },
        { question: "La septoplastie est-elle remboursée par la Sécurité Sociale ?", answer: "Oui, intégralement, car il s'agit d'un acte fonctionnel." }
      ],
      relatedSymptoms: ["nez-bouche-devie"],
      indications: ["Obstruction nasale chronique par déviation de la cloison", "Respiration buccale obligatoire", "Ronflements liés à l'obstruction nasale"],
      outcome: "Restauration durable d'une respiration nasale fluide.",
      preparation: "Scanner pré-opératoire des sinus, consultation d'anesthésie."
    },
    {
      id: "7", name: "Rhinoplastie esthétique", slug: "rhinoplastie-esthetique",
      category: "Rhinoplastie",
      description: "Remodelage du nez pour en modifier la forme et la taille.",
      details: "Chirurgie de la pyramide nasale visant à harmoniser le profil, la pointe et la largeur du nez.",
      recovery: "Attelle nasale 10 jours, ecchymoses possibles, résultat définitif après 12 mois.",
      risks: ["Saignements", "Asymétrie", "Insatisfaction esthétique"],
      timeline: [
        { day: "J+1", event: "Retrait des mèches nasales." },
        { day: "J+10", event: "Retrait de l'attelle et des fils." },
        { day: "M+12", event: "Résultat final visible." }
      ],
      anesthesia: "Générale", location: "Clinique / GHRMSA Mulhouse", stay: "Ambulatoire",
      fee: 2500, feeMax: 4500, isReimbursed: false,
      faq: [
        { question: "La rhinoplastie laisse-t-elle des cicatrices ?", answer: "La voie ouverte laisse une fine cicatrice de 3-4 mm à la base de la columelle, quasi imperceptible après cicatrisation." },
        { question: "Quand voit-on le résultat final d'une rhinoplastie ?", answer: "Le résultat définitif est visible à 12-18 mois post-opératoire." },
        { question: "Peut-on associer rhinoplastie et septoplastie ?", answer: "Oui, cette association (rhinoseptoplastie) est fréquente et permet de corriger à la fois l'esthétique et la fonction." }
      ],
      relatedSymptoms: ["nez-bouche-devie"],
      indications: ["Dos nasal bosselé ou convexe", "Pointe nasale élargie ou tombante", "Insatisfaction esthétique"],
      outcome: "Nez harmonieux et équilibré avec le visage.",
      preparation: "Consultation pré-opératoire avec photos et simulation morphologique."
    },
    {
      id: "8", name: "Rhinoseptoplastie", slug: "rhinoseptoplastie",
      category: "Rhinoplastie",
      description: "Correction de la forme du nez et de la cloison nasale.",
      details: "Association d'une rhinoplastie esthétique et d'une septoplastie pour améliorer à la fois le profil et la respiration.",
      recovery: "Attelle 10 jours, reprise respiratoire progressive, résultat à 12 mois.",
      risks: ["Saignements", "Asymétrie", "Gêne respiratoire transitoire"],
      timeline: [
        { day: "J+10", event: "Retrait de l'attelle." },
        { day: "M+3", event: "Amélioration respiratoire nette." }
      ],
      anesthesia: "Générale", location: "Clinique / GHRMSA Mulhouse", stay: "Ambulatoire",
      fee: 3000, feeMax: 5000, isReimbursed: false,
      faq: [
        { question: "Quelle est la différence entre rhinoplastie et rhinoseptoplastie ?", answer: "La rhinoplastie corrige uniquement la forme externe. La rhinoseptoplastie associe correction esthétique et réaxage de la cloison." },
        { question: "La rhinoseptoplastie modifie-t-elle la voix ?", answer: "Une modification légère du timbre vocal est possible." },
        { question: "Combien de temps dure l'arrêt de travail ?", answer: "7 à 14 jours selon l'activité." }
      ],
      relatedSymptoms: ["nez-bouche-devie"],
      indications: ["Déformation esthétique du nez avec obstruction nasale", "Déviation de la cloison nasale"],
      outcome: "Amélioration simultanée de la respiration et de l'harmonie du nez.",
      preparation: "Consultation pré-opératoire, scanner facial."
    },
    {
      id: "10", name: "Rhinoplastie médicale", slug: "rhinoplastie-medicale",
      category: "Rhinoplastie",
      description: "Modifier la forme du nez sans chirurgie (acide hyaluronique).",
      details: "Injections d'acide hyaluronique pour corriger temporairement un dos bombé ou une pointe peu définie.",
      recovery: "Socialement présentable immédiatement, légers œdèmes 24-48h.",
      risks: ["Hématome", "Effet temporaire (6-18 mois)", "Nécrose (rarissime)"],
      timeline: [
        { day: "J+0", event: "Acte en consultation, sans arrêt." },
        { day: "M+6", event: "Contrôle et éventuelle retouche." }
      ],
      anesthesia: "Locale (sans anesthésie)", location: "Cabinet de consultation", stay: "Immédiat",
      fee: 350, feeMax: 600, isReimbursed: false,
      faq: [
        { question: "La rhinoplastie médicale est-elle définitive ?", answer: "Non, l'acide hyaluronique se résorbe en 6 à 18 mois." },
        { question: "Quels sont les risques ?", answer: "Rares : rougeur, gonflement ou bleu au point d'injection (24-48h)." },
        { question: "Peut-elle remplacer une rhinoplastie chirurgicale ?", answer: "Elle corrige les bosses modérées mais ne peut pas réduire la taille du nez." }
      ],
      relatedSymptoms: ["nez-bouche-devie"],
      indications: ["Bosse nasale modérée", "Pointe du nez tombante", "Patient souhaitant éviter la chirurgie"],
      outcome: "Amélioration visible et naturelle sans chirurgie ni arrêt de travail.",
      preparation: "Consultation pré-opératoire avec photos."
    },
    {
      id: "11", name: "Blépharoplastie", slug: "blepharoplastie",
      category: "Chirurgie Esthétique",
      description: "Chirurgie des paupières pour rajeunir le regard.",
      details: "Retrait de l'excès de peau et/ou de graisse des paupières supérieures et/ou inférieures.",
      recovery: "Gonflement et bleus 10 à 15 jours, lunettes de soleil recommandées.",
      risks: ["Hématome", "Syndrome sec oculaire", "Cicatrices visibles (rares)"],
      timeline: [
        { day: "J+7", event: "Retrait des fils." },
        { day: "M+1", event: "Maquillage possible." }
      ],
      anesthesia: "Générale", location: "Clinique du Diaconat", stay: "Ambulatoire",
      fee: 1800, feeMax: 3000, isReimbursed: false,
      faq: [
        { question: "La blépharoplastie laisse-t-elle des cicatrices visibles ?", answer: "Les incisions sont dissimulées dans les plis naturels des paupières." },
        { question: "Quand reprendre le travail après une blépharoplastie ?", answer: "Un arrêt de 7 à 10 jours est généralement suffisant." },
        { question: "Est-elle prise en charge par la Sécurité Sociale ?", answer: "Uniquement si l'excès de peau gêne le champ visuel." }
      ],
      relatedSymptoms: [],
      indications: ["Excès de peau des paupières", "Poches sous les yeux", "Paupières tombantes"],
      outcome: "Regard rajeuni et reposé.",
      preparation: "Bilan ophtalmologique pré-opératoire, photos."
    },
    {
      id: "14", name: "Lipofilling du visage", slug: "lipofilling-visage",
      category: "Chirurgie Esthétique",
      description: "Restauration naturelle des volumes par votre propre graisse.",
      details: "Prélèvement et réinjection de graisse pour combler les joues, les tempes ou les lèvres.",
      recovery: "Œdèmes et ecchymoses 1 à 2 semaines, résultat définitif à 3 mois.",
      risks: ["Résorption partielle", "Irrégularités", "Infection"],
      timeline: [
        { day: "J+7", event: "Dégonflement initial." },
        { day: "M+3", event: "Volume définitif." }
      ],
      anesthesia: "Générale", location: "Clinique du Diaconat", stay: "Ambulatoire",
      fee: 2500, feeMax: 4000, isReimbursed: false,
      faq: [
        { question: "Le lipofilling est-il définitif ?", answer: "Environ 30 à 50% du volume se résorbe dans les 3 premiers mois, le reste est acquis définitivement." },
        { question: "D'où provient la graisse utilisée ?", answer: "Généralement prélevée au niveau du ventre ou des cuisses." },
        { question: "Est-il douloureux ?", answer: "Gonflement et ecchymoses pendant 7 à 10 jours, gêne minime." }
      ],
      relatedSymptoms: [],
      indications: ["Perte de volume des joues ou des tempes", "Creux sous les yeux", "Asymétrie des volumes du visage"],
      outcome: "Restauration harmonieuse des volumes du visage.",
      preparation: "Photos pré-opératoires, bilan sanguin, consultation d'anesthésie."
    },
    {
      id: "12", name: "Otoplastie", slug: "otoplastie",
      category: "Chirurgie Esthétique",
      description: "Correction des oreilles décollées.",
      details: "Remodelage du cartilage auriculaire pour rapprocher les oreilles du crâne.",
      recovery: "Bandage compressif quelques jours, douleurs minimes.",
      risks: ["Hématome", "Asymétrie", "Récidive du décollement"],
      timeline: [
        { day: "J+8", event: "Retrait des fils." },
        { day: "M+1", event: "Reprise du sport." }
      ],
      anesthesia: "Générale", location: "Clinique du Diaconat", stay: "Ambulatoire",
      fee: 2000, feeMax: 3500, isReimbursed: false,
      faq: [
        { question: "À partir de quel âge peut-on opérer des oreilles décollées ?", answer: "La cartilagine auriculaire atteint sa taille adulte vers 6-7 ans." },
        { question: "L'otoplastie est-elle douloureuse ?", answer: "Les suites sont très peu douloureuses." },
        { question: "Le résultat est-il définitif ?", answer: "Oui, le résultat est stable dans le temps." }
      ],
      relatedSymptoms: [],
      indications: ["Oreilles décollées de plus de 20 mm", "Asymétrie des oreilles", "Complexe esthétique"],
      outcome: "Oreilles repositionnées harmonieusement.",
      preparation: "Photos pré-opératoires, bilan sanguin."
    },
    {
      id: "13", name: "Génioplastie (menton)", slug: "genioplastie",
      category: "Chirurgie Esthétique",
      description: "Chirurgie pour modifier l'aspect du menton.",
      details: "Avancement, recul ou augmentation du menton par ostéotomie ou prothèse pour équilibrer le profil.",
      recovery: "Gonflement 7 à 10 jours, alimentation molle 1 semaine.",
      risks: ["Asymétrie", "Sensibilité labiale temporaire", "Infection"],
      timeline: [
        { day: "J+7", event: "Contrôle et début d'alimentation normale." },
        { day: "M+2", event: "Résultat stabilisé." }
      ],
      anesthesia: "Générale", location: "Clinique du Diaconat", stay: "Ambulatoire",
      fee: 2000, feeMax: 3500, isReimbursed: false,
      faq: [
        { question: "Génioplastie ou implant de menton : quelle est la meilleure option ?", answer: "La génioplastie par ostéotomie est plus naturelle et sans corps étranger." },
        { question: "La génioplastie modifie-t-elle le profil ?", answer: "Oui, c'est le but principal : rééquilibrer le profil facial." },
        { question: "Quelles sont les suites ?", answer: "Gonflement du menton et de la lèvre inférieure pendant 7 à 10 jours." }
      ],
      relatedSymptoms: [],
      indications: ["Menton fuyant (rétrognathisme)", "Menton asymétrique", "Déséquilibre du profil facial"],
      outcome: "Menton harmonieux et profil équilibré.",
      preparation: "Bilan radiologique (Cone Beam), simulation 3D."
    },
    {
      id: "15", name: "Exérèse de lésions cutanées", slug: "exerese-cutanee",
      category: "Dermatochirurgie",
      description: "Retrait de lésions cutanées avec reconstruction immédiate.",
      details: "Traitement chirurgical des cancers de la peau (carcinomes) ou des nævus atypiques.",
      recovery: "Soins locaux simples, retrait des fils sous 8 à 10 jours.",
      risks: ["Infection", "Cicatrice hypertrophique", "Récidive locale"],
      timeline: [
        { day: "J+10", event: "Retrait des fils." },
        { day: "M+1", event: "Surveillance cicatricielle." }
      ],
      anesthesia: "Locale", location: "Cabinet de consultation", stay: "Immédiat",
      isReimbursed: true,
      faq: [
        { question: "Faut-il faire analyser la lésion retirée ?", answer: "Oui, systématiquement. Toute lésion est envoyée en analyse anatomopathologique." },
        { question: "Quelles cicatrices après une exérèse cutanée ?", answer: "Le Dr Jullian utilise des techniques de microchirurgie pour minimiser la cicatrice." },
        { question: "Combien de temps dure l'arrêt de travail ?", answer: "Généralement 2 à 5 jours selon la taille de la lésion." }
      ],
      relatedSymptoms: ["grain-de-beaute-suspect", "aphtes-ulceres-buccaux", "cicatrice-cheloide", "bosse-sous-peau-visage", "papillome-verrue-bouche", "epulis-gencive-grossesse"],
      indications: ["Nævus suspect ou carcinome basocellulaire", "Lésion cutanée évolutive", "Exérèse à visée diagnostique"],
      outcome: "Exérèse complète avec analyse histologique.",
      preparation: "Examen clinique et photographie de la lésion."
    },
    {
      id: "16", name: "Reconstruction par lambeau local", slug: "lambeau-local",
      category: "Dermatochirurgie",
      description: "Réparation des pertes de substance cutanée du visage.",
      details: "Déplacement de peau saine voisine pour reconstruire après exérèse de lésions étendues.",
      recovery: "Pansements plusieurs jours, retrait des fils à 10-14 jours.",
      risks: ["Souffrance du lambeau", "Cicatrice", "Infection"],
      timeline: [{ day: "J+10", event: "Surveillance de la vitalité du lambeau." }],
      anesthesia: "Locale", location: "Cabinet de consultation", stay: "Immédiat",
      isReimbursed: true,
      faq: [
        { question: "Qu'est-ce qu'un lambeau local du visage ?", answer: "C'est une technique qui utilise la peau voisine saine pour combler une perte de substance." },
        { question: "Combien de temps faut-il pour cicatriser ?", answer: "La cicatrisation est complète en 2 à 3 semaines." },
        { question: "Le lambeau laisse-t-il des cicatrices ?", answer: "Des cicatrices planes dans les plis naturels du visage." }
      ],
      relatedSymptoms: ["cicatrice-cheloide"],
      indications: ["Pertes de substance étendues", "Reconstruction nasale, palpébrale ou labiale"],
      outcome: "Reconstruction esthétique et fonctionnelle harmonieuse.",
      preparation: "Examen clinique, photos, repérage pré-opératoire."
    },
    {
      id: "17", name: "Greffe de peau", slug: "greffe-de-peau",
      category: "Dermatochirurgie",
      description: "Transfert de peau pour couvrir une zone opérée.",
      details: "Greffe de peau fine ou totale pour restaurer la continuité cutanée après traumatisme ou exérèse.",
      recovery: "Pansement occlusif 7 à 10 jours, cicatrisation progressive.",
      risks: ["Mauvaise prise de la greffe", "Coloration différente", "Infection"],
      timeline: [{ day: "J+10", event: "Contrôle de la prise de greffe." }],
      anesthesia: "Locale", location: "Cabinet de consultation", stay: "Immédiat",
      isReimbursed: true,
      faq: [
        { question: "D'où provient la peau utilisée ?", answer: "Prélevée sur le patient lui-même (autogreffe), généralement derrière l'oreille." },
        { question: "La greffe sera-t-elle de la même couleur ?", answer: "La couleur s'harmonise progressivement sur 6 à 12 mois." },
        { question: "Combien de temps la greffe met-elle à prendre ?", answer: "La prise de greffe est évaluée à 7-10 jours." }
      ],
      relatedSymptoms: ["cicatrice-cheloide"],
      indications: ["Perte de substance étendue", "Brûlure ou traumatisme du visage"],
      outcome: "Restoration de la continuité cutanée.",
      preparation: "Examen clinique, photos, évaluation du site donneur."
    }
  ],
  hours: [
    { day: "Lun — Jeu", open: "08h30 – 16h30" },
    { day: "Vendredi", open: "08h30 – 12h00" }
  ],
  advocacy: {
    mission: "Garantir un parcours de soin sans anxiété grâce à une information claire, une technologie de pointe et un suivi hospitalier rigoureux.",
    tips: [
      { id: "t1", title: "Avant l'intervention", content: "Préparez votre dossier complet pour éviter tout stress administratif." },
      { id: "t2", title: "Après l'intervention", content: "Suivez scrupuleusement le protocole de froid pour réduire le gonflement de 50%." }
    ]
  },
  posts: [
    {
      id: "p1", title: "Le parcours de la chirurgie orthognathique au GHRMSA", slug: "parcours-orthognathique",
      category: "intervention", featured_image_url: "/planning-3d.webp",
      reading_time_minutes: 6, published_at: "2026-06-01"
    },
    {
      id: "p2", title: "Extraction des dents de sagesse : 5 conseils pour une cicatrisation optimale", slug: "conseils-dents-de-sagesse",
      category: "conseil", featured_image_url: "/cabinet.webp",
      reading_time_minutes: 4, published_at: "2026-05-20"
    },
    {
      id: "p3", title: "L'apport de la planification numérique 3D en chirurgie faciale", slug: "precision-3d",
      category: "cas_clinique", featured_image_url: "/planning-3d.webp",
      reading_time_minutes: 5, published_at: "2026-05-15"
    }
  ]
};
