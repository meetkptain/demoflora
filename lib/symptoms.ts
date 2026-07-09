import { MedicalSymptom } from './types';

export const symptomData: MedicalSymptom[] = [
  // ── S1 ──────────────────────────────────────────────────────
  {
    id: "s1",
    slug: "douleur-machoire",
    title: "Douleur à la mâchoire",
    headline: "que faire ?",
    urgencyLevel: "soon",
    category: "machoire-atm",
    metaDescription: "Douleurs, craquements ou blocages au niveau de la mâchoire : comprendre les causes et quand consulter un chirurgien maxillo-facial à Mulhouse.",
    intro: "Une douleur à la mâchoire peut être handicapante au quotidien. Comprendre son origine est la première étape vers le soulagement. Le Dr Flora Jullian, chirurgien maxillo-facial au GHRMSA Mulhouse, établit un diagnostic précis et propose une prise en charge adaptée.",
    causes: [
      "Stress ou anxiété (bruxisme nocturne)",
      "Troubles de l'Articulation Temporo-Mandibulaire (ATM)",
      "Dent de sagesse en cours d'éruption ou infectée",
      "Traumatisme ancien ou récent du massif facial"
    ],
    consultSigns: [
      "La douleur persiste plus d'une semaine",
      "Votre mâchoire se bloque ou émet des claquements",
      "Difficultés à ouvrir ou fermer la bouche",
      "La douleur irradie vers l'oreille, le cou ou la tempe",
      "Asymétrie ou décalage des mâchoires suspecté"
    ],
    faq: [
      { question: "Une douleur à la mâchoire peut-elle être une urgence ?", answer: "Si la douleur est accompagnée d'un gonflement rapide du visage, de fièvre ou d'une difficulté à avaler ou à respirer, il s'agit d'une urgence : consultez immédiatement aux urgences du GHRMSA. Environ 30% de la population adulte souffre de douleurs temporo-mandibulaires au cours de sa vie." },
      { question: "Le bruxisme peut-il provoquer une douleur à la mâchoire ?", answer: "Oui. Le bruxisme (grincement nocturne des dents) est l'une des causes les plus fréquentes de douleurs diffuses à la mâchoire et aux tempes. Une gouttière occlusale peut soulager les symptômes en attendant la prise en charge de la cause." },
      { question: "Quel médecin consulter pour une douleur à la mâchoire ?", answer: "Le chirurgien maxillo-facial est le spécialiste de référence pour toute pathologie osseuse ou articulaire de la mâchoire. Le Dr Flora Jullian consulte au GHRMSA de Mulhouse et au cabinet de la Clinique du Diaconat." }
    ],
    relatedSymptoms: ["ouverture-bouche", "gonflement", "oreille-atm"],
    relatedIntervention: {
      slug: "osteotomie-bimaxillaire",
      label: "Voir les interventions associées",
      description: "Le Dr Flora Jullian identifie l'origine précise de votre douleur et propose la prise en charge chirurgicale ou fonctionnelle adaptée."
    }
  },
  // ── S2 ──────────────────────────────────────────────────────
  {
    id: "s2",
    slug: "gonflement",
    title: "Gonflement du visage",
    headline: "comment réagir ?",
    urgencyLevel: "urgent",
    category: "visage-trauma",
    metaDescription: "Gonflement du visage soudain ou progressif : infection, kyste, traumatisme ? Les bons réflexes et la prise en charge rapide par le Dr Flora Jullian à Mulhouse.",
    intro: "Un gonflement facial peut signaler une infection dentaire diffuse, un traumatisme ou une lésion kystique. Certaines formes progressent en quelques heures et nécessitent une prise en charge urgente.",
    causes: [
      "Infection dentaire ou abcès péri-apical",
      "Cellulite cervico-faciale (infection diffuse des tissus mous)",
      "Traumatisme ou fracture des os du visage",
      "Kyste mandibulaire ou maxillaire en poussée infectieuse"
    ],
    consultSigns: [
      "Le gonflement progresse rapidement en moins de 24h",
      "Fièvre associée (> 38,5°C)",
      "Peau rouge, chaude et tendue",
      "Difficultés à avaler ou à respirer",
      "Apparition d'un ganglion sous la mâchoire"
    ],
    faq: [
      { question: "Un gonflement du visage est-il toujours grave ?", answer: "Non, mais il faut toujours l'évaluer. Dans 80% des cas, un gonflement facial est d'origine dentaire infectieuse. Une infection peut passer de locale à généralisée en moins de 24h — la cellulite cervico-faciale engage le pronostic vital." },
      { question: "Faut-il aller aux urgences pour un gonflement du visage ?", answer: "Si le gonflement est rapide, accompagné de fièvre, d'une gêne respiratoire ou d'une difficulté à avaler : oui, directement aux urgences. Dans les autres cas, une consultation maxillo-faciale urgente dans la semaine est recommandée." },
      { question: "Comment soulager un gonflement du visage en attendant la consultation ?", answer: "Appliquez du froid enveloppé dans un linge (jamais directement sur la peau), prenez un antalgique de type paracétamol, et évitez tout anti-inflammatoire sans avis médical. N'essayez jamais de percer vous-même un abcès." }
    ],
    relatedSymptoms: ["douleur-machoire", "glande-salivaire-douloureuse", "noeud-machoire"],
    relatedIntervention: {
      slug: "kystes-maxillaires",
      label: "Voir la prise en charge chirurgicale",
      description: "Le Dr Jullian traite l'ensemble des infections et lésions kystiques des mâchoires au GHRMSA Mulhouse."
    }
  },
  // ── S3 ──────────────────────────────────────────────────────
  {
    id: "s3",
    slug: "dents-de-sagesse-poussent",
    title: "Dents de sagesse qui poussent",
    headline: "faut-il les enlever ?",
    urgencyLevel: "soon",
    category: "dents-gencives",
    metaDescription: "Douleurs en fond de bouche, gencives gonflées, dents de sagesse incluses ou infectées : comprendre les signes et quand consulter pour une avulsion à Mulhouse.",
    intro: "La poussée des dents de sagesse est l'une des causes les plus fréquentes de douleurs buccales chez les jeunes adultes. Toutes ne nécessitent pas d'extraction, mais une évaluation clinique et radiologique est indispensable.",
    causes: [
      "Manque de place sur l'arcade dentaire (dent incluse ou semi-incluse)",
      "Position anormale (dent horizontale, mésioversée)",
      "Infection de la gencive autour de la dent (péricoronarite)",
      "Pression exercée sur les dents adjacentes"
    ],
    consultSigns: [
      "Douleurs persistantes en fond de bouche depuis plus de 3 jours",
      "Gencive gonflée, rouge ou qui saigne",
      "Mauvaise haleine ou goût amer persistant",
      "Difficulté à ouvrir la bouche ou à mâcher",
      "Douleur irradiant vers l'oreille ou la gorge"
    ],
    faq: [
      { question: "À quel âge les dents de sagesse poussent-elles ?", answer: "Les dents de sagesse font généralement leur apparition entre 17 et 25 ans, bien que certaines puissent rester bloquées (incluses) et ne jamais percer la gencive. Une radio panoramique confirme leur position." },
      { question: "L'extraction des dents de sagesse est-elle douloureuse ?", answer: "L'intervention se réalise sous anesthésie locale ou générale selon la complexité. Les suites post-opératoires (gonflement, gêne) durent en général 3 à 5 jours et sont efficacement contrôlées par un protocole antalgique." },
      { question: "Doit-on enlever les 4 dents de sagesse en même temps ?", answer: "Pas nécessairement. Le Dr Jullian évalue chaque dent individuellement selon son accessibilité et votre situation. Une intervention bilatérale (deux côtés) le même jour est souvent proposée pour limiter les suites." }
    ],
    relatedSymptoms: ["ouverture-bouche", "douleur-machoire", "saignement-buccal"],
    relatedIntervention: {
      slug: "dents-de-sagesse",
      label: "Découvrir l'avulsion des dents de sagesse",
      description: "Le Dr Jullian réalise l'extraction des dents de sagesse sous anesthésie locale ou générale selon votre situation."
    }
  },
  // ── S4 ──────────────────────────────────────────────────────
  {
    id: "s4",
    slug: "ouverture-bouche",
    title: "Difficulté à ouvrir la bouche",
    headline: "trismus : quelles causes ?",
    urgencyLevel: "soon",
    category: "machoire-atm",
    metaDescription: "Trismus, blocage ou limitation douloureuse de l'ouverture buccale : causes fréquentes et prise en charge par un chirurgien maxillo-facial à Mulhouse.",
    intro: "Le trismus — ou limitation d'ouverture buccale — peut avoir de nombreuses causes, de la simple contracture musculaire à l'infection profonde. Un bilan clinique permet d'en préciser l'origine et d'adapter le traitement.",
    causes: [
      "Contracture musculaire d'origine fonctionnelle (bruxisme, stress)",
      "Infection ou abcès autour d'une dent de sagesse (péricoronarite)",
      "Pathologie de l'Articulation Temporo-Mandibulaire (ATM)",
      "Séquelle d'un traumatisme facial ou d'une fracture ancienne"
    ],
    consultSigns: [
      "Ouverture buccale inférieure à 2–3 cm",
      "Blocage apparu brutalement sans cause évidente",
      "Douleurs à l'ouverture ou à la fermeture de la bouche",
      "Symptôme persistant depuis plus de 48 heures"
    ],
    faq: [
      { question: "Le trismus est-il dangereux ?", answer: "Seul, non. Mais un trismus accompagné de fièvre et d'un gonflement du visage peut signer une infection profonde du cou — une urgence chirurgicale. Dans ce cas, consultez immédiatement." },
      { question: "Comment traiter un trismus rapidement ?", answer: "Le traitement dépend de la cause. Si c'est une contracture musculaire, la kinésithérapie et les myorelaxants suffisent souvent. Si c'est une infection dentaire, l'extraction ou le drainage de l'abcès s'impose en priorité." },
      { question: "Le trismus peut-il partir seul ?", answer: "Un trismus d'origine musculaire peut s'améliorer spontanément avec du repos et de la chaleur. Un trismus infectieux, lui, ne se résout jamais sans traitement et peut s'aggraver rapidement. Ne pas attendre plus de 48h." }
    ],
    relatedSymptoms: ["douleur-machoire", "dents-de-sagesse-poussent", "gonflement"],
    relatedIntervention: {
      slug: "dents-de-sagesse",
      label: "Voir les interventions associées",
      description: "Un trismus lié à une dent de sagesse infectée se résout le plus souvent après son extraction."
    }
  },
  // ── S5 ──────────────────────────────────────────────────────
  {
    id: "s5",
    slug: "traumatisme-facial",
    title: "Choc ou traumatisme facial",
    headline: "conduite à tenir",
    urgencyLevel: "urgent",
    category: "visage-trauma",
    metaDescription: "Fracture de la mâchoire, du nez ou des os du visage après un choc : conduite à tenir et prise en charge d'urgence par le Dr Flora Jullian, Mulhouse.",
    intro: "Tout choc facial doit être évalué rapidement par un chirurgien maxillo-facial pour écarter une fracture osseuse, un hématome ou une lésion des dents. Au GHRMSA Mulhouse, le Dr Jullian assure cette prise en charge en urgence.",
    causes: [
      "Accident de la route ou de sport",
      "Chute avec impact direct sur le visage",
      "Agression physique",
      "Accident de travail impliquant le massif facial"
    ],
    consultSigns: [
      "Douleurs osseuses au toucher du visage ou de la mâchoire",
      "Asymétrie visible ou déformation du relief facial",
      "Mauvaise occlusion dentaire après le choc",
      "Saignement de nez persistant",
      "Troubles de la vision (diplopie) ou engourdissement du visage"
    ],
    faq: [
      { question: "Comment savoir si le nez est fracturé après un choc ?", answer: "Une douleur à la palpation de l'arête nasale, un saignement, un gonflement rapide et une déviation visible du nez sont évocateurs d'une fracture. Une radio ou un scanner confirme le diagnostic. La réduction doit se faire dans les 10 jours." },
      { question: "Une fracture de la mâchoire est-elle toujours visible ?", answer: "Non. Certaines fractures condyliennes (de l'articulation) sont peu déplacées et la douleur reste modérée. La mauvaise occlusion dentaire après un choc est le signe clinique le plus fiable et justifie un bilan radiologique." },
      { question: "Que faire immédiatement après un choc au visage ?", answer: "Appliquez du froid, ne manipulez pas les dents déplacées, ne faites pas de prise d'aspirine (anticoagulant), et consultez dans les 24–48 heures aux urgences maxillo-faciales du GHRMSA ou en consultation spécialisée." }
    ],
    relatedSymptoms: ["nez-fracture", "gonflement", "decalage-machoires"],
      relatedIntervention: {
        slug: "fracture-pommette",
        label: "Voir le traitement des fractures faciales",
        description: "Le Dr Jullian prend en charge les traumatismes du massif facial au GHRMSA Mulhouse, des fractures simples aux reconstructions complexes."
      },
  },
  // ── S6 ──────────────────────────────────────────────────────
  {
    id: "s6",
    slug: "nez-bouche-devie",
    title: "Nez bouché ou dévié",
    headline: "quand opérer ?",
    urgencyLevel: "programmed",
    category: "visage-trauma",
    metaDescription: "Obstruction nasale chronique, cloison déviée, ronflements ou apnée du sommeil : causes et chirurgie correctrice (septoplastie) par le Dr Flora Jullian à Mulhouse.",
    intro: "Une obstruction nasale chronique ou une asymétrie du nez peut provenir d'une déviation de la cloison nasale, souvent d'origine traumatique ou congénitale. La septoplastie est la seule solution durable lorsque les traitements médicaux échouent.",
    causes: [
      "Déviation de la cloison nasale (septale), congénitale ou post-traumatique",
      "Hypertrophie des cornets (obstructon des fosses nasales)",
      "Fracture du nez mal consolidée",
      "Valve nasale étroite ou collabée à l'inspiration"
    ],
    consultSigns: [
      "Difficultés respiratoires nasales au repos ou à l'effort",
      "Sprays et antiallergiques insuffisants",
      "Ronflements sévères ou apnée du sommeil diagnostiquée",
      "Déviation esthétiquement gênante après un choc"
    ],
    faq: [
      { question: "Quelle est la différence entre une septoplastie et une rhinoplastie ?", answer: "La septoplastie corrige la cloison nasale interne pour améliorer la respiration — c'est un acte fonctionnel remboursé par l'Assurance Maladie. La rhinoplastie remodèle la forme externe du nez pour des raisons esthétiques. Les deux peuvent être combinées." },
      { question: "La septoplastie laisse-t-elle des cicatrices visibles ?", answer: "Non. L'intervention se réalise entièrement par voie endonasale (à l'intérieur des narines). Il n'y a aucune cicatrice externe visible." },
      { question: "Combien de temps dure la convalescence après une septoplastie ?", answer: "Une semaine d'arrêt de travail est généralement suffisante. Les mèches nasales (si posées) sont retirées 24 à 48h après l'intervention. Le résultat respiratoire définitif s'apprécie à 3 mois, une fois l'œdème totalement résorbé." }
    ],
    relatedSymptoms: ["nez-fracture", "traumatisme-facial"],
    relatedIntervention: {
      slug: "septoplastie",
      label: "Découvrir la Septoplastie",
      description: "La septoplastie permet de redresser la cloison nasale pour restaurer une ventilation fluide et naturelle."
    }
  },
  // ── S7 ──────────────────────────────────────────────────────
  {
    id: "s7",
    slug: "decalage-machoires",
    title: "Décalage des mâchoires",
    headline: "est-ce opérable ?",
    urgencyLevel: "programmed",
    category: "machoire-atm",
    metaDescription: "Menton en retrait, mâchoire en avant, asymétrie faciale ou mauvais articulé : la chirurgie orthognathique à Mulhouse corrige ces décalages. Dr Flora Jullian.",
    intro: "Un décalage des mâchoires — visible sur le profil ou ressenti à l'occlusion dentaire — peut être corrigé par chirurgie orthognathique. Cette intervention restaure à la fois la fonction masticatoire et l'harmonie du visage.",
    causes: [
      "Anomalie de croissance du maxillaire ou de la mandibule (hypoplasie, hyperplasie)",
      "Traitement orthodontique ne pouvant pas compenser le décalage osseux",
      "Facteur génétique ou héréditaire",
      "Séquelle d'une chirurgie ou d'un traumatisme"
    ],
    consultSigns: [
      "Menton très en retrait (rétrognathie) ou très proéminent (prognathisme)",
      "Dents du haut et du bas qui ne se rejoignent plus normalement",
      "Douleurs ATM chroniques liées à votre occlusion",
      "L'orthodontiste vous a orienté vers un chirurgien"
    ],
    faq: [
      { question: "La chirurgie orthognathique est-elle remboursée par la Sécurité Sociale ?", answer: "Oui, lorsqu'elle est réalisée pour indication fonctionnelle avérée (occlusion, respiration, douleur ATM). Le Dr Jullian, secteur 2 OPTAM, pratique les dépassements d'honoraires opposables, partiellement pris en charge par les mutuelles." },
      { question: "Faut-il un traitement orthodontique avant la chirurgie ?", answer: "Oui, dans la grande majorité des cas. Un alignement orthodontique pré-opératoire de 12 à 18 mois prépare les arcades dentaires pour que le chirurgien puisse les repositionner dans une occlusion idéale." },
      { question: "À quel âge peut-on réaliser une chirurgie orthognathique ?", answer: "La chirurgie est réalisée après la fin de la croissance osseuse, généralement entre 17 et 18 ans pour les femmes, 18 à 20 ans pour les hommes. Il n'y a pas d'âge maximum, mais les risques augmentent avec les comorbidités." }
    ],
    relatedSymptoms: ["douleur-machoire", "ouverture-bouche"],
    relatedIntervention: {
      slug: "chirurgie-asymetries-faciales",
      label: "Découvrir la Chirurgie Orthognathique",
      description: "La chirurgie orthognathique réaligne les mâchoires pour corriger l'occlusion et l'harmonie faciale."
    }
  },
  // ── S8 ──────────────────────────────────────────────────────
  {
    id: "s8",
    slug: "grain-de-beaute-suspect",
    title: "Grain de beauté ou tache suspecte",
    headline: "quand s'inquiéter ?",
    urgencyLevel: "soon",
    category: "chirurgie-cutanee",
    metaDescription: "Lésion cutanée suspecte sur le visage, grain de beauté qui évolue, nodule ou tache : quand consulter un chirurgien pour une exérèse et analyse à Mulhouse.",
    intro: "Toute lésion cutanée du visage qui change d'aspect, saigne spontanément ou ne cicatrise pas doit être évaluée rapidement. Le chirurgien maxillo-facial réalise l'exérèse avec analyse anatomopathologique systématique.",
    causes: [
      "Carcinome basocellulaire (cancer cutané le plus fréquent, lié au soleil)",
      "Carcinome épidermoïde (kératose actinique évoluée)",
      "Mélanome (pigmentation anormale d'un grain de beauté)",
      "Kératose séborrhéique bénigne (aspect croûteux)"
    ],
    consultSigns: [
      "La lésion change de forme, de bord, de couleur ou de taille",
      "Elle saigne sans raison ou ne cicatrise pas après 3 semaines",
      "Un nodule ferme apparaît sous la peau du visage",
      "La lésion démange ou brûle de façon persistante"
    ],
    faq: [
      { question: "Quelle est la règle ABCDE pour surveiller un grain de beauté ?", answer: "A : Asymétrie ; B : Bords irréguliers ; C : Couleurs multiples (brun, noir, rouge) ; D : Diamètre supérieur à 6mm ; E : Évolution récente. Le carcinome basocellulaire est le cancer le plus fréquent en France (80 000 nouveaux cas/an). Si l'un de ces critères est présent, consultez sans attendre." },
      { question: "L'exérèse d'une lésion cutanée est-elle douloureuse ?", answer: "Non. Elle se réalise sous anesthésie locale au cabinet ou au bloc opératoire selon la taille. La cicatrisation dure 2 à 3 semaines. Le résultat de l'analyse anatomopathologique est disponible sous 2 à 3 semaines." },
      { question: "Le chirurgien maxillo-facial s'occupe-t-il des cancers de la peau du visage ?", answer: "Oui. La chirurgie cutanée du visage (exérèse de carcinomes, mélanomes, reconstruction après exérèse) fait partie du champ de compétence du chirurgien maxillo-facial, en lien avec l'onco-dermatologue." }
    ],
    relatedSymptoms: ["cicatrice-cheloide"],
    relatedIntervention: {
      slug: "exerese-cutanee",
      label: "Découvrir l'Exérèse Cutanée",
      description: "Le Dr Jullian réalise l'exérèse des lésions suspectes du visage avec analyse anatomopathologique systématique."
    }
  },
  // ── S9 ──────────────────────────────────────────────────────
  {
    id: "s9",
    slug: "perte-dents",
    title: "Perte de dents ou manque d'os",
    headline: "quelles solutions ?",
    urgencyLevel: "programmed",
    category: "dents-gencives",
    metaDescription: "Perte de dents, os maxillaire insuffisant pour des implants, résorption osseuse : les greffes osseuses pré-implantaires réalisées par le Dr Flora Jullian à Mulhouse.",
    intro: "L'absence prolongée de dents entraîne une résorption progressive de l'os maxillaire qui rend la pose d'implants impossible sans reconstruction préalable. La greffe osseuse restaure ce volume osseux.",
    causes: [
      "Avulsion dentaire ancienne sans remplacement rapide",
      "Parodontite sévère (destruction osseuse par infection chronique)",
      "Traumatisme avec perte de la dent et de l'os alvéolaire",
      "Agénésie dentaire (absence congénitale d'une ou plusieurs dents)"
    ],
    consultSigns: [
      "Votre dentiste ou implantologue signale un volume osseux insuffisant",
      "Vos prothèses amovibles sont de moins en moins stables",
      "Un implant a été mis en échec et retiré",
      "Vous souhaitez des implants mais le volume osseux est insuffisant"
    ],
    faq: [
      { question: "Qu'est-ce qu'une greffe osseuse pré-implantaire ?", answer: "C'est une intervention qui consiste à apporter de l'os (prélevé sur vous-même, sur un donneur ou synthétique) pour reconstruire le volume osseux perdu. Cet os régénère et se solidifie en 4 à 6 mois, permettant ensuite la pose d'implants." },
      { question: "La greffe osseuse est-elle remboursée ?", answer: "Partiellement. L'acte chirurgical est pris en charge par l'Assurance Maladie pour les greffes d'indication médicale. Les matériaux de greffe et les implants peuvent faire l'objet de restes à charge, selon la mutuelle." },
      { question: "Est-il possible de poser des implants sans greffe osseuse ?", answer: "Dans certains cas, oui. Des techniques spécifiques (implants à ancrage zygomatique, implants courts, mise en charge immédiate) peuvent contourner le manque osseux. Le bilan scanner 3D détermine la meilleure stratégie." }
    ],
    relatedSymptoms: ["gonflement"],
    relatedIntervention: {
      slug: "greffe-osseuse-pre-implantaire",
      label: "Découvrir la Greffe Osseuse",
      description: "La greffe osseuse pré-implantaire reconstitue le volume osseux nécessaire à la pose d'implants solides et durables."
    }
  },
  // ── S10 ─────────────────────────────────────────────────────
  {
    id: "s10",
    slug: "glande-salivaire-douloureuse",
    title: "Glande salivaire douloureuse",
    headline: "d'où vient la douleur ?",
    urgencyLevel: "soon",
    category: "glandes-cou",
    metaDescription: "Gonflement douloureux sous la mâchoire ou devant l'oreille aux repas : calcul salivaire, infection ou tumeur ? Prise en charge par le Dr Flora Jullian à Mulhouse.",
    intro: "Un gonflement douloureux qui survient systématiquement au début des repas, principalement sous la mâchoire, est très évocateur d'un calcul obstruant le canal salivaire. Un diagnostic rapide évite des complications infectieuses.",
    causes: [
      "Calcul salivaire (lithiase) obstruant le canal de Wharton (sous la langue) ou de Sténon (devant l'oreille)",
      "Infection bactérienne de la glande (sialadénite aiguë)",
      "Tumeur bénigne ou maligne de la parotide ou de la glande sous-mandibulaire",
      "Syndrome de Sjögren (maladie auto-immune des glandes salivaires)"
    ],
    consultSigns: [
      "Gonflement douloureux systématiquement en début de repas",
      "Boule visible et palpable sous la mâchoire ou devant l'oreille",
      "Pus ou goût amer sortant d'un orifice dans la bouche",
      "Gonflement permanent qui ne se résorbe plus"
    ],
    faq: [
      { question: "Comment éliminer un calcul salivaire naturellement ?", answer: "Boire beaucoup d'eau et stimuler la salive (citron, bonbons acidulés) peut aider à expulser un petit calcul. Pour les calculs plus importants, une intervention endoscopique (sialendoscopie) ou chirurgicale est nécessaire." },
      { question: "La douleur devant l'oreille vient-elle toujours de la mâchoire ?", answer: "Non. Elle peut venir de la glande parotide (devant l'oreille), de l'Articulation Temporo-Mandibulaire (ATM), ou d'une névralgie auriculotemporale. Seul un examen clinique et une imagerie permettent de faire la distinction." },
      { question: "Faut-il enlever la glande salivaire si elle est infectée ?", answer: "Pas forcément. Une infection aiguë se traite d'abord par antibiotiques. Si des calculs récidivants sont responsables ou en cas de pathologie tumorale, l'ablation de la glande (parotidectomie ou sous-mandibulectomie) peut être indiquée." }
    ],
    relatedSymptoms: ["gonflement", "noeud-machoire"],
      relatedIntervention: {
        slug: "exerese-cutanee",
        label: "Exérèse des tumeurs salivaires",
        description: "Le Dr Jullian réalise le bilan et le traitement chirurgical des pathologies des glandes salivaires, de la simple lithiase à la tumeur."
      },
  },
  // ── S11 ─────────────────────────────────────────────────────
  {
    id: "s11",
    slug: "aphtes-ulceres-buccaux",
    title: "Aphtes ou ulcères buccaux récidivants",
    headline: "bénin ou à surveiller ?",
    urgencyLevel: "soon",
    category: "dents-gencives",
    metaDescription: "Aphtes récidivants, ulcère buccal persistant ou lésion blanche de la bouche : quand la simple plaie devient préoccupante. Consultation maxillo-faciale à Mulhouse.",
    intro: "La majorité des aphtes sont bénins et guérissent spontanément. Mais un ulcère buccal qui persiste plus de 3 semaines ou qui récidive à la même localisation doit impérativement être examiné par un spécialiste — il peut s'agir d'un carcinome oral débutant.",
    causes: [
      "Aphte commun (origine immunologique, stress, carence en fer ou B12)",
      "Traumatisme local (prothèse mal ajustée, coupure)",
      "Virus Herpès simplex de type 1 (bouton de fièvre, herpès buccal)",
      "Carcinome épidermoïde de la cavité buccale (à éliminer en priorité)"
    ],
    consultSigns: [
      "Un aphte ou ulcère ne cicatrise pas après 3 semaines",
      "Lésion blanche (leucoplasie) ou rouge (érythroplasie) persistante",
      "Ulcère indolore à bords indurés (durcis au toucher)",
      "Aphtes récidivants plus de 4 fois par an au même endroit"
    ],
    faq: [
      { question: "Comment différencier un aphte bénin d'un ulcère cancéreux ?", answer: "L'aphte bénin est douloureux, à fond blanc-jaune, à bords réguliers, et disparaît en 7 à 14 jours. L'ulcère cancéreux est souvent indolore, à bords irréguliers et durcis, ne cicatrise pas et peut être accompagné d'un ganglion sous la mâchoire. Tout ulcère persistant au-delà de 3 semaines impose une biopsie." },
      { question: "Faut-il biopsier un aphte récidivant ?", answer: "Si l'aphte revient toujours au même endroit, si il est associé à une plaque blanche ou rouge, ou s'il ne guérit pas, oui. La biopsie est un acte simple réalisé sous anesthésie locale et donne un résultat définitif en 2 à 3 semaines." },
      { question: "Quels soins appliquer sur un aphte pour soulager la douleur ?", answer: "Un bain de bouche à la chlorhexidine, un gel anesthésiant local (lidocaïne) ou du triamcinolone en pâte peuvent soulager rapidement. Évitez les aliments acides ou épicés et les traumatismes locaux. Ne forcez jamais une lésion à cicatriser." }
    ],
    relatedSymptoms: ["grain-de-beaute-suspect"],
    relatedIntervention: {
      slug: "exerese-cutanee",
      label: "Biopsie et exérèse des lésions buccales",
      description: "Le Dr Jullian peut réaliser une biopsie ou une exérèse de toute lésion buccale suspecte pour analyse histologique."
    }
  },
  // ── S12 ─────────────────────────────────────────────────────
  {
    id: "s12",
    slug: "kyste-gencive-bouche",
    title: "Kyste sur la gencive ou la mâchoire",
    headline: "faut-il opérer ?",
    urgencyLevel: "soon",
    category: "dents-gencives",
    metaDescription: "Kyste dentaire, kyste de la mâchoire ou gencive gonflée sans douleur : causes, évolution et traitement chirurgical par le Dr Flora Jullian à Mulhouse.",
    intro: "Un kyste de la mâchoire ou de la gencive est souvent découvert fortuitement sur une radiographie. Sans traitement, il continue de croître silencieusement et peut fragiliser l'os ou se surinfect. L'exérèse chirurgicale est le seul traitement définitif.",
    causes: [
      "Kyste radiculaire (autour de la racine d'une dent mortifiée)",
      "Kyste folliculaire (autour d'une dent incluse, souvent de sagesse)",
      "Kyste résiduel (après une extraction incomplète)",
      "Kyste gingival (bulle liquidienne sur la gencive, le plus souvent bénin)"
    ],
    consultSigns: [
      "Gonflement indolore et progressif de la joue ou de la gencive",
      "Découverte d'une clarté (zone sombre) sur une radio dentaire",
      "Dent qui se déplace sans raison",
      "Gonflement soudainement douloureux (surinfection)"
    ],
    faq: [
      { question: "Un kyste de la mâchoire peut-il disparaître seul ?", answer: "Non. Un kyste ne régresse pas spontanément. Il croît lentement, souvent sans douleur, jusqu'à fragiliser l'os ou se surinfecter. Le diagnostic et le traitement chirurgical précoces évitent les complications (fracture, destruction osseuse)." },
      { question: "L'exérèse d'un kyste de la mâchoire laisse-t-elle des séquelles ?", answer: "Pour les petits kystes, l'intervention se fait sous anesthésie locale en ambulatoire sans suites importantes. Pour les kystes volumineux, une hospitalisation d'une journée peut être nécessaire avec une reconstruction osseuse associée." },
      { question: "Peut-on garder la dent à côté du kyste ?", answer: "Cela dépend de la nature du kyste et de la vitalité de la dent. Si la dent est mortifiée et responsable du kyste, un traitement canalaire peut parfois suffire à en arrêter la croissance. Le chirurgien décide au cas par cas." }
    ],
    relatedSymptoms: ["gonflement", "dents-de-sagesse-poussent"],
    relatedIntervention: {
      slug: "kystes-maxillaires",
      label: "Découvrir l'exérèse de kyste",
      description: "Le Dr Jullian réalise l'exérèse des kystes maxillo-mandibulaires sous anesthésie locale ou générale, avec bilan radio 3D préalable."
    }
  },
  // ── S13 ─────────────────────────────────────────────────────
  {
    id: "s13",
    slug: "nez-fracture",
    title: "Nez cassé ou fracturé",
    headline: "quand opérer ?",
    urgencyLevel: "urgent",
    category: "visage-trauma",
    metaDescription: "Nez fracturé après un choc : saignement, gonflement, déviation du nez — conduite à tenir et délai d'intervention. Dr Flora Jullian, chirurgien à Mulhouse.",
    intro: "Une fracture du nez est l'une des fractures du massif facial les plus fréquentes, souvent liée à un sport, une chute ou une agression. Elle doit être prise en charge dans un délai précis pour éviter une consolidation en mauvaise position.",
    causes: [
      "Choc direct sur le nez (sport, chute, agression)",
      "Accident de la route ou de vélo",
      "Traumatisme facial lors d'une activité professionnelle"
    ],
    consultSigns: [
      "Douleur vive à la palpation de l'arête nasale",
      "Saignement de nez après un choc",
      "Gonflement rapide et ecchymose autour du nez et des yeux",
      "Déviation visible du nez de profil ou de face",
      "Difficultés respiratoires nasales après le traumatisme"
    ],
    faq: [
      { question: "Dans quel délai faut-il opérer un nez fracturé ?", answer: "La réduction d'une fracture nasale doit idéalement se faire dans les 5 à 10 jours suivant le traumatisme, une fois l'œdème partiellement résorbé. Passé ce délai, il faut attendre 3 à 6 mois la consolidation complète avant toute correction secondaire." },
      { question: "La réduction d'un nez fracturé se fait-elle sous anesthésie générale ?", answer: "Chez l'adulte, une réduction sous anesthésie générale courte est souvent préférée pour plus de précision et de confort. Certaines fractures peu déplacées peuvent être réduites sous anesthésie locale au cabinet." },
      { question: "Une fracture du nez laisse-t-elle toujours une séquelle ?", answer: "Si elle est traitée rapidement et correctement, non. Traitée tardivement ou insuffisamment, elle peut laisser une déviation résiduelle de la cloison (septum) nécessitant une septoplastie secondaire, voire une rhinoplastie de correction." }
    ],
    relatedSymptoms: ["nez-bouche-devie", "traumatisme-facial"],
      relatedIntervention: {
        slug: "septoplastie",
        label: "Réduction de fracture nasale et septoplastie",
        description: "Le Dr Jullian réalise la réduction des fractures du nez sous anesthésie, associée si nécessaire à une septoplastie correctrice."
      },
  },
  // ── S14 ─────────────────────────────────────────────────────
  {
    id: "s14",
    slug: "oreille-atm",
    title: "Douleur à l'oreille liée à la mâchoire",
    headline: "ATM ou otite ?",
    urgencyLevel: "soon",
    category: "machoire-atm",
    metaDescription: "Douleur à l'oreille sans infection, acouphènes, craquements : l'Articulation Temporo-Mandibulaire (ATM) est souvent en cause. Consultation à Mulhouse.",
    intro: "Une douleur qui semble venir de l'oreille mais sans signe d'otite — aucun écoulement, pas de fièvre — est fréquemment d'origine maxillo-faciale : l'Articulation Temporo-Mandibulaire (ATM), juste en avant du conduit auditif, peut irradier vers l'oreille.",
    causes: [
      "Dysfonction de l'Articulation Temporo-Mandibulaire (SADAM)",
      "Bruxisme nocturne (usure et inflammation articulaire)",
      "Arthrose condylienne (dégénérescence articulaire)",
      "Fracture ou traumatisme du condyle mandibulaire"
    ],
    consultSigns: [
      "Douleur à l'oreille associée à des craquements à l'ouverture de la bouche",
      "Bilan ORL normal mais douleur persistante",
      "Acouphènes ou sensation d'oreille bouchée sans cause infectieuse",
      "Aggravation de la douleur au stress ou au réveil"
    ],
    faq: [
      { question: "Comment savoir si ma douleur d'oreille vient de la mâchoire ?", answer: "Si votre médecin ORL a écarté une otite, une perforation ou un problème auditif et que la douleur est associée à des craquements à l'ouverture de la bouche ou à des douleurs à la mastication, l'ATM est la cause la plus probable. Un examen maxillo-facial confirme le diagnostic." },
      { question: "Comment traiter une douleur d'oreille d'origine ATM ?", answer: "La prise en charge est pluridisciplinaire : gouttière occlusale nocturne, kinésithérapie maxillo-faciale, gestion du stress. Dans les cas réfractaires, une infiltration intra-articulaire ou une arthroscopie ATM peut être proposée." },
      { question: "Les acouphènes peuvent-ils être causés par la mâchoire ?", answer: "Oui. Les acouphènes somatiques d'origine ATM sont bien décrits : ils apparaissent ou s'aggravent lors de mouvements de la mâchoire ou de la tête. Ils répondent souvent au traitement de l'ATM, contrairement aux acouphènes cochléaires." }
    ],
    relatedSymptoms: ["douleur-machoire", "ouverture-bouche"],
    relatedIntervention: {
      slug: "osteotomie-bimaxillaire",
      label: "Voir les prises en charge ATM",
      description: "Le Dr Jullian évalue et traite les pathologies de l'ATM, en lien avec les chirurgies de repositionnement maxillaire si nécessaire."
    }
  },
  // ── S15 ─────────────────────────────────────────────────────
  {
    id: "s15",
    slug: "noeud-machoire",
    title: "Ganglion ou boule sous la mâchoire",
    headline: "faut-il s'inquiéter ?",
    urgencyLevel: "soon",
    category: "glandes-cou",
    metaDescription: "Boule ou ganglion palpable sous la mâchoire ou dans le cou : infection, kyste ou adénopathie ? Quand consulter un chirurgien maxillo-facial à Mulhouse.",
    intro: "La découverte d'une boule sous la mâchoire est souvent anxiogène. Dans la grande majorité des cas, il s'agit d'un ganglion réactionnel (infection dentaire, angine) ou d'un kyste. Mais une adénopathie persistante doit être explorée.",
    causes: [
      "Ganglion réactionnel à une infection bucco-dentaire (dent, angine)",
      "Kyste du tractus thyréoglosse ou kyste branchiogène",
      "Calcul de la glande salivaire sous-mandibulaire",
      "Adénopathie tumorale (lymphome, métastase — à exclure)"
    ],
    consultSigns: [
      "Ganglion persistent depuis plus de 4 semaines",
      "Ganglion ferme, adhérant aux tissus profonds ou augmentant de volume",
      "Associé à une fatigue inexpliquée, sueurs nocturnes ou perte de poids",
      "Découverte de plusieurs ganglions dans différentes régions"
    ],
    faq: [
      { question: "Quand un ganglion sous la mâchoire est-il inquiétant ?", answer: "Un ganglion présent depuis plus de 4 à 6 semaines sans cause infectieuse évidente, dur, indolore ou augmentant de taille doit faire l'objet d'un bilan (échographie, analyse de sang, voire biopsie). Il ne faut pas attendre." },
      { question: "Un kyste sous la mâchoire peut-il être confondu avec un ganglion ?", answer: "Oui. Un kyste est généralement mou, bien délimité et non douloureux. Un ganglion est ferme, souvent sensible lors d'une infection. L'échographie distingue facilement les deux et oriente vers la prise en charge adaptée." },
      { question: "Quel médecin consulter pour une boule sous la mâchoire ?", answer: "Le chirurgien maxillo-facial ou l'ORL sont les spécialistes de premier recours pour les adénopathies cervicales et les masses des glandes salivaires. Une biopsie ganglionnaire ou une exérèse diagnostique peut être réalisée en ambulatoire." }
    ],
    relatedSymptoms: ["glande-salivaire-douloureuse", "gonflement"],
      relatedIntervention: {
        slug: "exerese-cutanee",
        label: "Exérèse des lésions ganglionnaires et kystiques cervicales",
        description: "Le Dr Jullian pratique l'exérèse diagnostique et curative des ganglions, kystes et tumeurs bénignes de la région cervicale."
      },
  },
  // ── S16 ─────────────────────────────────────────────────────
  {
    id: "s16",
    slug: "saignement-buccal",
    title: "Saignement buccal ou après extraction",
    headline: "quand s'alarmer ?",
    urgencyLevel: "soon",
    category: "dents-gencives",
    metaDescription: "Saignement buccal persistant ou après extraction dentaire : conduite à tenir et prise en charge par le Dr Flora Jullian, chirurgien maxillo-facial à Mulhouse.",
    intro: "Un saignement buccal après une extraction dentaire est normal dans les premières heures. Mais un saignement qui ne cède pas après 30 minutes de compression, ou un saignement spontané et inexpliqué, nécessite une évaluation médicale.",
    causes: [
      "Saignement post-extractionnel (normal < 30 min, anormal au-delà)",
      "Gingivite ou parodontite sévère (gencives fragilisées)",
      "Trouble de la coagulation (anticoagulants, hémophilie)",
      "Traumatisme buccal ou lésion tumorale (à exclure)"
    ],
    consultSigns: [
      "Saignement post-extraction ne s'arrêtant pas après 30 min de compression",
      "Saignement spontané des gencives sans traumatisme",
      "Caillot de sang important dans la cavité buccale",
      "Prise d'anticoagulants ou d'antiagrégants plaquettaires"
    ],
    faq: [
      { question: "Que faire en cas de saignement après une extraction dentaire ?", answer: "Mordez fermement sur une compresse stérile pendant 20 à 30 minutes sans la soulever. Évitez de cracher, de boire à la paille, et de rincer la bouche énergiquement les premières 24 heures. Si le saignement ne cède pas, appelez votre chirurgien." },
      { question: "Les gencives qui saignent au brossage sont-elles normales ?", answer: "Non. Des gencives saines ne saignent pas au brossage. C'est le signe d'une gingivite (inflammation) souvent due à la plaque bactérienne. Sans traitement, elle peut évoluer vers une parodontite avec destruction de l'os de soutien des dents." },
      { question: "Peut-on prendre de l'aspirine après une extraction dentaire ?", answer: "Non. L'aspirine est un anticoagulant qui fluidifie le sang et augmente le risque de saignement prolongé. Préférez le paracétamol pour soulager la douleur. Si vous êtes sous traitement anticoagulant, signalez-le impérativement avant l'intervention." }
    ],
    relatedSymptoms: ["dents-de-sagesse-poussent", "gonflement"],
    relatedIntervention: {
      slug: "dents-de-sagesse",
      label: "Préparer une extraction en sécurité",
      description: "Le Dr Jullian informe ses patients de tous les soins post-opératoires pour éviter complications et saignements prolongés."
    }
  },
  // ── S17 ─────────────────────────────────────────────────────
  {
    id: "s17",
    slug: "mobilite-dentaire",
    title: "Dents qui bougent ou qui se déplacent",
    headline: "est-ce réversible ?",
    urgencyLevel: "soon",
    category: "dents-gencives",
    metaDescription: "Mobilité dentaire, dent qui bouge ou s'écarte : parodontite, traumatisme ou kyste ? Prise en charge maxillo-faciale par le Dr Flora Jullian à Mulhouse.",
    intro: "Une dent adulte qui bouge est toujours un signal d'alarme. Contrairement aux dents de lait, les dents permanentes ne sont pas censées bouger. Une consultation rapide permet de préserver la dent si la cause est traitée à temps.",
    causes: [
      "Parodontite sévère (destruction progressive de l'os autour de la dent)",
      "Traumatisme dentaire (dent luxée ou subluxée après un choc)",
      "Kyste ou tumeur de la mâchoire repoussant la dent",
      "Résorption radiculaire (lyse de la racine)"
    ],
    consultSigns: [
      "Une ou plusieurs dents bougent lorsque vous appuyez dessus",
      "Espace nouveau entre deux dents qui s'élargit progressivement",
      "Dent déplacée après un choc au visage",
      "Gencive rétractée laissant apparaître la racine de la dent"
    ],
    faq: [
      { question: "Peut-on sauver une dent qui bouge ?", answer: "Tout dépend de la cause. Si c'est une parodontite, un traitement parodontal intensif peut stabiliser la situation et préserver la dent. Si c'est un traumatisme, une contention (attelle) permet la cicatrisation ligamentaire. Plus le diagnostic est précoce, meilleur est le pronostic." },
      { question: "La parodontite peut-elle être traitée chirurgicalement ?", answer: "Oui. Lorsque le traitement non chirurgical (détartrage profond) est insuffisant, des actes de chirurgie parodontale (assainissement osseux, greffes gingivales) peuvent régénérer les tissus de soutien de la dent." },
      { question: "Que faire si une dent est tombée suite à un choc ?", answer: "Si la dent est complète et propre, replacez-la immédiatement dans son alvéole et consultez dans l'heure. Si ce n'est pas possible, conservez-la dans du lait ou sous la langue, jamais à sec ni dans de l'eau. Chaque minute compte pour la réimplantation." }
    ],
    relatedSymptoms: ["traumatisme-facial", "gonflement"],
    relatedIntervention: {
      slug: "greffe-osseuse-pre-implantaire",
      label: "Solutions implantaires après perte dentaire",
      description: "Lorsque la dent ne peut être conservée, le Dr Jullian propose une reconstruction implantaire avec greffe osseuse si nécessaire."
    }
  },
  // ── S18 ─────────────────────────────────────────────────────
  {
    id: "s18",
    slug: "cicatrice-cheloide",
    title: "Cicatrice hypertrophique ou chéloïde",
    headline: "comment la corriger ?",
    urgencyLevel: "programmed",
    category: "chirurgie-cutanee",
    metaDescription: "Cicatrice rouge, épaisse ou envahissante sur le visage après une chirurgie ou un traumatisme : traitements et correction chirurgicale à Mulhouse.",
    intro: "Une cicatrice hypertrophique ou chéloïde sur le visage peut être source de gêne esthétique et fonctionnelle. Plusieurs options thérapeutiques existent, de l'infiltration de corticoïdes à la révision chirurgicale.",
    causes: [
      "Prédisposition génétique (peaux mates, antécédents familiaux)",
      "Mauvaise orientation de la cicatrice par rapport aux lignes de tension de la peau",
      "Infection ou inflammation pendant la cicatrisation",
      "Traumatisme ou chirurgie avec tension excessive sur les berges"
    ],
    consultSigns: [
      "Cicatrice rouge, épaissie ou débordant les berges de la plaie initiale",
      "Cicatrice douloureuse ou qui démange de façon persistante",
      "Cicatrice rétractile gênant la mobilité (paupière, lèvre, cou)",
      "Insatisfaction esthétique significative liée à une cicatrice sur le visage"
    ],
    faq: [
      { question: "Quelle est la différence entre une cicatrice hypertrophique et une chéloïde ?", answer: "La cicatrice hypertrophique reste dans les limites de la plaie initiale et peut régresser avec le temps. La chéloïde, elle, envahit les tissus sains autour de la cicatrice et ne régresse pas spontanément. Les deux se traitent différemment." },
      { question: "Les infiltrations de corticoïdes effacent-elles une chéloïde ?", answer: "Elles l'aplatissent et la ramollissent significativement, mais ne l'effacent pas complètement. Plusieurs séances (toutes les 4 à 6 semaines) sont nécessaires. La combinaison avec la chirurgie de révision donne les meilleurs résultats." },
      { question: "Peut-on opérer une chéloïde sur le visage ?", answer: "Oui, mais avec précautions. Une révision chirurgicale seule expose à un risque de récidive. Elle est donc toujours associée à un traitement adjuvant (corticoïdes, silicone, radiothérapie superficielle ciblée) pour limiter la récidive." }
    ],
    relatedSymptoms: ["grain-de-beaute-suspect", "traumatisme-facial"],
    relatedIntervention: {
      slug: "exerese-cutanee",
      label: "Révision et correction de cicatrices faciales",
      description: "Le Dr Jullian réalise la révision des cicatrices inesthétiques et chéloïdes du visage avec un protocole anti-récidive."
    }
  },
  // ── S19 ─────────────────────────────────────────────────────
  {
    id: "s19",
    slug: "oedeme-levre-langue",
    title: "Lèvre ou langue qui gonfle",
    headline: "urgence ou allergie ?",
    urgencyLevel: "urgent",
    category: "visage-trauma",
    metaDescription: "Gonflement soudain de la lèvre, de la langue ou de la bouche : allergie, angioœdème ou infection ? Conduite à tenir et prise en charge urgente à Mulhouse.",
    intro: "Un gonflement brutal de la lèvre ou de la langue peut être une urgence vitale (anaphylaxie, angioœdème héréditaire). Il peut aussi être d'origine infectieuse, traumatique ou allergique. Chaque cas doit être évalué rapidement.",
    causes: [
      "Réaction allergique (alimentaire, médicamenteuse, venin d'insecte)",
      "Angioœdème héréditaire (déficit en inhibiteur de la C1-estérase)",
      "Infection bactérienne du plancher buccal (cellulite sublingual — urgence)",
      "Traumatisme, morsure ou corps étranger"
    ],
    consultSigns: [
      "Gonflement brutal de la lèvre, de la langue ou du plancher buccal",
      "Difficultés à respirer, à avaler ou à parler",
      "Gonflement associé à de l'urticaire, des rougeurs ou une baisse de tension",
      "Récidive sans cause allergique identifiée"
    ],
    faq: [
      { question: "Un gonflement de la lèvre est-il toujours une allergie ?", answer: "Non. Si le gonflement est unilatéral, progressif et non accompagné d'urticaire ni de démangeaisons, une origine infectieuse (abcès dentaire, cellulite) ou un angioœdème héréditaire sont à envisager. L'allergie se manifeste plutôt par un gonflement bilatéral et symétrique." },
      { question: "Que faire en cas de gonflement brutal de la langue ?", answer: "Si le gonflement gêne la respiration ou la déglutition : appelez le 15 (SAMU) immédiatement et, si vous avez un auto-injecteur d'adrénaline (stylo EpiPen), utilisez-le sans attendre. Ne pas allonger la personne si elle est consciente et debout." },
      { question: "L'angioœdème héréditaire se traite-t-il chirurgicalement ?", answer: "Non, c'est une maladie génétique traitée médicalement (inhibiteur de C1-estérase en urgence, prophylaxie). Le chirurgien maxillo-facial peut intervenir si un gonflement compressif du plancher buccal ou une complication infectieuse nécessite un drainage." }
    ],
    relatedSymptoms: ["gonflement", "traumatisme-facial"],
      relatedIntervention: {
        slug: "exerese-cutanee",
        label: "Prise en charge des urgences buccales",
        description: "En cas d'infection ou d'abcès responsable d'un gonflement, le Dr Jullian réalise le drainage chirurgical nécessaire en urgence."
      },
  },
  // ── S20 ─────────────────────────────────────────────────────
  {
    id: "s20",
    slug: "fracture-dent",
    title: "Dent cassée ou fracturée",
    headline: "que faire dans l'heure ?",
    urgencyLevel: "urgent",
    category: "dents-gencives",
    metaDescription: "Dent cassée, fracturée ou expulsée après un choc : conduite à tenir dans l'heure et prise en charge traumatologique à Mulhouse par le Dr Flora Jullian.",
    intro: "Une dent fracturée ou expulsée après un traumatisme nécessite une prise en charge dans l'heure. La rapidité de la réaction conditionne directement le pronostic de conservation de la dent.",
    causes: [
      "Choc direct sur la bouche (sport, chute, accident)",
      "Morsure d'un aliment dur sur une dent fragilisée (cariée, dévitalisée)",
      "Traumatisme accidentel chez l'enfant ou l'adulte jeune",
      "Fracture de prothèse dentaire avec lésion de la dent support"
    ],
    consultSigns: [
      "Dent entièrement expulsée de son alvéole",
      "Fragment dentaire cassé avec douleur vive ou saignement",
      "Dent luxée ou déplacée de sa position initiale",
      "Douleur intense au froid, au chaud ou à la pression"
    ],
    faq: [
      { question: "Que faire si une dent est complètement tombée après un choc ?", answer: "Ramassez-la par la couronne (jamais par la racine), rincez-la délicatement à l'eau sans frotter, et replacez-la immédiatement dans son alvéole. Si impossible, conservez-la dans du lait ou sous la langue. Consultez dans les 30 minutes : chaque minute compte pour la survie de la dent." },
      { question: "Une dent cassée doit-elle toujours être extraite ?", answer: "Non. Si la fracture ne touche que l'émail ou la dentine, elle peut souvent être réparée par collage ou couronne. Si la fracture atteint la racine sous la gencive, l'extraction est malheureusement inévitable. Le scanner dentaire précise l'étendue de la fracture." },
      { question: "Faut-il se rendre aux urgences pour une dent cassée ?", answer: "Si le traumatisme est associé à une perte de conscience, à un saignement abondant, à une fracture osseuse du mâchoire ou à une douleur oculaire : oui, urgences immédiates. Pour une dent cassée isolée, consultez votre dentiste ou un chirurgien maxillo-facial en urgence dans la journée." }
    ],
    relatedSymptoms: ["traumatisme-facial", "mobilite-dentaire", "saignement-buccal"],
      relatedIntervention: {
        slug: "dents-de-sagesse",
        label: "Extraction et reconstruction dentaire",
        description: "Le Dr Jullian prend en charge les dents fracturées non conservables et propose les solutions de reconstruction implantaire adaptées."
      },
  },
  // ── S21 ─────────────────────────────────────────────────────
  {
    id: "s21",
    slug: "bruxisme-grincement-dents",
    title: "Bruxisme et grincement des dents",
    headline: "comment s'en débarrasser ?",
    urgencyLevel: "soon",
    category: "machoire-atm",
    metaDescription: "Bruxisme nocturne, grincement ou serrement des dents : symptômes, conséquences sur la mâchoire et les dents, et traitements à Mulhouse par le Dr Flora Jullian.",
    intro: "Le bruxisme — grincement ou serrement involontaire des dents, surtout la nuit — est très répandu et souvent ignoré. Ses conséquences sur les dents, la mâchoire et les muscles sont cependant significatives si on ne le traite pas.",
    causes: [
      "Stress chronique ou anxiété (cause principale)",
      "Malocclusion dentaire (articulé dentaire imparfait)",
      "Trouble du sommeil (apnée du sommeil associée)",
      "Effets secondaires de certains médicaments (antidépresseurs)"
    ],
    consultSigns: [
      "Douleurs des tempes ou de la mâchoire au réveil",
      "Dents usées, plates ou sensibles au froid/chaud",
      "Votre partenaire entend des grincements la nuit",
      "Maux de tête matinaux fréquents",
      "Fissures ou éclats de vos dents ou couronnes"
    ],
    faq: [
      { question: "Comment savoir si je fais du bruxisme ?", answer: "Les signes les plus parlants sont des douleurs musculaires au réveil (tempes, mâchoire), des dents usées visibles sur les bords, et des maux de tête matinaux. Votre dentiste ou chirurgien maxillo-facial peut confirmer le diagnostic par examen clinique et analyse de l'usure dentaire." },
      { question: "La gouttière anti-bruxisme suffit-elle à tout traiter ?", answer: "La gouttière nocturne protège vos dents de l'usure mais ne traite pas la cause du bruxisme. Elle doit être accompagnée d'une prise en charge de la cause : gestion du stress, rééducation fonctionnelle, et si nécessaire, traitement de l'ATM sous-jacent." },
      { question: "Le bruxisme peut-il endommager irrémédiablement les dents ?", answer: "Oui, si non traité. Un bruxisme sévère peut abraser complètement l'émail, fissurer des dents jusqu'à la racine, et détruire des prothèses dentaires coûteuses. La prise en charge précoce limite considérablement les dégâts." }
    ],
    relatedSymptoms: ["douleur-machoire", "oreille-atm", "ouverture-bouche"],
    relatedIntervention: {
      slug: "osteotomie-bimaxillaire",
      label: "Prise en charge de l'ATM",
      description: "Le Dr Jullian évalue l'impact du bruxisme sur votre mâchoire et propose la gouttière et la prise en charge adaptée."
    }
  },
  // ── S22 ─────────────────────────────────────────────────────
  {
    id: "s22",
    slug: "alveolite-apres-extraction",
    title: "Alvéolite après une extraction",
    headline: "douleur qui ne passe pas ?",
    urgencyLevel: "soon",
    category: "dents-gencives",
    metaDescription: "Douleur intense après extraction dentaire, alvéole à vif, mauvaise odeur : l'alvéolite est une complication fréquente et facile à traiter. Consultation à Mulhouse.",
    intro: "L'alvéolite est la complication post-extractionnelle la plus fréquente. Elle survient 2 à 5 jours après l'extraction lorsque le caillot sanguin qui protège l'alvéole se dissout prématurément, exposant l'os à vif.",
    causes: [
      "Dissolution prématurée du caillot sanguin (tabac, bain de bouche trop énergique)",
      "Infection bactérienne de l'alvéole",
      "Extraction traumatique ou difficile",
      "Terrain à risque (immunodépression, diabète)"
    ],
    consultSigns: [
      "Douleur intense irradiant vers l'oreille, 2 à 5 jours après l'extraction",
      "Alvéole visible et vide (pas de caillot, os visible)",
      "Mauvaise odeur ou goût âcre depuis l'alvéole",
      "La douleur n'est pas soulagée par les antalgiques habituels"
    ],
    faq: [
      { question: "Comment reconnaître une alvéolite ?", answer: "Une douleur qui s'intensifie 2 à 5 jours après une extraction (au lieu de diminuer), accompagnée d'une mauvaise odeur et d'une alvéole qui semble vide (sans caillot), est le tableau typique de l'alvéolite. C'est une complication bénigne mais très douloureuse qui nécessite une consultation rapide." },
      { question: "L'alvéolite guérit-elle seule ?", answer: "Non, ou très lentement. Sans traitement, elle peut durer 2 à 4 semaines avec des douleurs importantes. Le traitement au cabinet (irrigation + pansement alvéolaire antiseptique et cicatrisant) soulage rapidement et accélère la guérison." },
      { question: "Comment prévenir l'alvéolite après une extraction ?", answer: "Évitez absolument de fumer les 72 premières heures. Ne rincez pas la bouche les premières 24h et ne sucez pas l'alvéole. Évitez les boissons chaudes et l'alimentation dure. Respectez scrupuleusement les consignes post-opératoires du Dr Jullian." }
    ],
    relatedSymptoms: ["saignement-buccal", "dents-de-sagesse-poussent"],
    relatedIntervention: {
      slug: "dents-de-sagesse",
      label: "Informations post-extraction",
      description: "Le Dr Jullian remet à chaque patient des consignes post-opératoires détaillées pour éviter l'alvéolite et autres complications."
    }
  },
  // ── S23 ─────────────────────────────────────────────────────
  {
    id: "s23",
    slug: "fistule-bouton-gencive",
    title: "Bouton ou fistule sur la gencive",
    headline: "kyste ou abcès ?",
    urgencyLevel: "soon",
    category: "dents-gencives",
    metaDescription: "Bouton blanc ou rouge sur la gencive, fistule dentaire, boule indolore ou douloureuse : causes et traitement par le Dr Flora Jullian, chirurgien à Mulhouse.",
    intro: "Un bouton sur la gencive — qu'il soit blanc, rouge, dur ou mou — peut avoir plusieurs origines : fistule d'abcès dentaire, kyste gingival, fibrome ou tumeur. Un examen clinique permet de distinguer le bénin du préoccupant.",
    causes: [
      "Fistule d'un abcès dentaire (le bouton 'draine' le pus)",
      "Kyste gingival (accumulation liquidienne sous la muqueuse)",
      "Fibrome gingival réactionnel (irritation chronique par prothèse)",
      "Épulis (tumeur bénigne de la gencive, souvent pendant la grossesse)"
    ],
    consultSigns: [
      "Bouton sur la gencive persistant depuis plus de 2 semaines",
      "Fistule qui libère du pus ou un liquide salé spontanément",
      "Bouton indolore mais qui grossit progressivement",
      "Rougeur, chaleur ou pulsation autour du bouton"
    ],
    faq: [
      { question: "Un bouton sur la gencive est-il toujours lié à une dent ?", answer: "Souvent oui. Une fistule gingivale est presque toujours la 'sortie' d'un abcès dentaire chronique (dent mortifiée, kyste à l'apex de la racine). Mais il peut aussi s'agir d'une lésion indépendante de la dent. Une radio et un examen clinique tranchent." },
      { question: "Peut-on percer soi-même un bouton sur la gencive ?", answer: "Non. Ne percez jamais vous-même une fistule ou un abcès. Le pus est chargé de bactéries qui peuvent se propager aux tissus profonds. Consultez pour un traitement adapté : drainage chirurgical, traitement canalaire ou extraction selon la cause." },
      { question: "Une fistule dentaire peut-elle disparaître seule ?", answer: "La fistule peut sembler disparaître si elle draine et se referme temporairement. Mais la cause — l'abcès sous-jacent — reste en place et la fistule récidive. Sans traitement de la dent responsable, le problème persiste indéfiniment et s'aggrave." }
    ],
    relatedSymptoms: ["kyste-gencive-bouche", "gonflement", "saignement-buccal"],
    relatedIntervention: {
      slug: "kystes-maxillaires",
      label: "Exérèse et traitement des kystes gingivaux",
      description: "Le Dr Jullian réalise l'exérèse des fistules et kystes gingivaux avec analyse anatomopathologique systématique."
    }
  },
  // ── S24 ─────────────────────────────────────────────────────
  {
    id: "s24",
    slug: "sinusite-dentaire",
    title: "Sinusite d'origine dentaire",
    headline: "sinus ou dent ?",
    urgencyLevel: "soon",
    category: "dents-gencives",
    metaDescription: "Sinusite maxillaire chronique liée à une dent, pression sous l'œil, nez bouché d'un seul côté : la sinusite dentaire et sa prise en charge à Mulhouse.",
    intro: "La sinusite maxillaire d'origine dentaire est souvent méconnue et diagnostiquée tardivement. Les racines des molaires supérieures sont parfois en contact direct avec le sinus maxillaire. Une infection dentaire peut alors infecter le sinus — et inversement.",
    causes: [
      "Infection apicale d'une molaire ou prémolaire supérieure",
      "Kyste dentaire refoulant dans le sinus maxillaire",
      "Communication bucco-sinusienne après extraction",
      "Corps étranger endo-sinusien (dépassement de ciment, fragment radiculaire)"
    ],
    consultSigns: [
      "Sinusite 'unilatérale' résistant aux antibiotiques",
      "Pression ou douleur sous l'œil du côté d'une dent douloureuse",
      "Écoulement nasal purulent d'un seul côté",
      "Mauvaise haleine inexpliquée associée à une gêne dentaire"
    ],
    faq: [
      { question: "Comment différencier une sinusite dentaire d'une sinusite classique ?", answer: "La sinusite dentaire est presque toujours unilatérale (un seul côté), associée à une douleur dentaire dans le secteur des prémolaires/molaires supérieures, et résistante aux traitements habituels. Un scanner facial confirme le diagnostic en montrant l'origine dentaire." },
      { question: "Faut-il extraire la dent pour soigner la sinusite dentaire ?", answer: "Pas toujours. Si la dent est vitale et récupérable, un retraitement canalaire peut éliminer l'infection et guérir le sinus. Si la dent est compromise (kyste important, fracture), l'extraction reste souvent la solution la plus efficace et durable." },
      { question: "Le chirurgien maxillo-facial traite-t-il la sinusite dentaire ?", answer: "Oui. Le chirurgien maxillo-facial est le spécialiste de jonction entre chirurgie dentaire et ORL. Il coordonne l'extraction ou le traitement de la dent responsable et, si nécessaire, le drainage endoscopique du sinus en collaboration avec l'ORL." }
    ],
    relatedSymptoms: ["nez-bouche-devie", "gonflement", "fistule-bouton-gencive"],
    relatedIntervention: {
      slug: "kystes-maxillaires",
      label: "Prise en charge des pathologies dentaires et sinusiennes",
      description: "Le Dr Jullian prend en charge les sinusites d'origine dentaire : extraction, kyste, communication bucco-sinusienne."
    }
  },
  // ── S25 ─────────────────────────────────────────────────────
  {
    id: "s25",
    slug: "luxation-machoire",
    title: "Mâchoire décrochée ou luxée",
    headline: "que faire immédiatement ?",
    urgencyLevel: "urgent",
    category: "machoire-atm",
    metaDescription: "Mâchoire bloquée ouverte, luxation de la mandibule après un bâillement ou un choc : conduite à tenir et réduction par le Dr Flora Jullian à Mulhouse.",
    intro: "La luxation de la mâchoire — ou luxation mandibulaire — survient lorsque le condyle mandibulaire sort de son logement articulaire. La bouche reste alors bloquée en position ouverte, dans l'impossibilité de se refermer. C'est une urgence fonctionnelle.",
    causes: [
      "Bâillement excessif ou bouche ouverte trop longtemps",
      "Choc sur la mâchoire en position ouverte",
      "Pathologie de l'ATM favorisant l'hyperlaxité",
      "Récidive chez les patients avec luxations antérieures"
    ],
    consultSigns: [
      "Bouche bloquée en position ouverte, impossible à refermer",
      "Douleur intense au niveau des joues et des oreilles",
      "Bavage et difficulté à parler ou avaler",
      "Déformation visible de la mâchoire (asymétrie)"
    ],
    faq: [
      { question: "Peut-on réduire une luxation de mâchoire soi-même ?", answer: "Ne tentez pas de réduire vous-même la luxation en forçant. Rendez-vous rapidement aux urgences ou chez un chirurgien maxillo-facial. La réduction (remise en place) se fait sous anesthésie locale ou sédation légère par une manœuvre précise qui dure quelques secondes." },
      { question: "La luxation de mâchoire peut-elle récidiver ?", answer: "Oui, surtout si l'ATM est hyperlaxe. Des luxations récidivantes peuvent nécessiter une plication chirurgicale (resserrement de la capsule articulaire) ou des injections sclérosantes pour stabiliser l'articulation." },
      { question: "Combien de temps dure la récupération après une luxation ?", answer: "Après réduction, quelques jours de régime mou et d'évitement des bâillements excessifs suffisent. Pour les luxations récidivantes, une rééducation de l'ATM avec un kinésithérapeute spécialisé est recommandée." }
    ],
    relatedSymptoms: ["ouverture-bouche", "douleur-machoire", "oreille-atm"],
    relatedIntervention: {
      slug: "osteotomie-bimaxillaire",
      label: "Prise en charge de l'ATM et des luxations récidivantes",
      description: "Pour les luxations récidivantes, le Dr Jullian propose une prise en charge chirurgicale de stabilisation de l'articulation."
    }
  },
  // ── S26 ─────────────────────────────────────────────────────
  {
    id: "s26",
    slug: "nevralgie-trijumeau-douleur-electrique",
    title: "Névralgie du trijumeau",
    headline: "douleur électrique au visage ?",
    urgencyLevel: "soon",
    category: "machoire-atm",
    metaDescription: "Douleur électrique fulgurante au visage, névralgie du trijumeau ou névralgie faciale : diagnostic différentiel et prise en charge à Mulhouse.",
    intro: "La névralgie du trijumeau est l'une des douleurs les plus intenses connues en médecine : des décharges électriques fulgurantes sur le visage, déclenchées par des gestes anodins. Elle est souvent diagnostiquée tardivement car confondue avec une douleur dentaire.",
    causes: [
      "Compression du nerf trijumeau par un vaisseau sanguin (cause principale)",
      "Sclérose en plaques (démyélinisation du nerf)",
      "Tumeur comprimant le nerf (rare)",
      "Neuropathie post-herpétique (zona du nerf trijumeau)"
    ],
    consultSigns: [
      "Décharges électriques intenses et brèves sur un côté du visage",
      "Douleur déclenchée par le toucher, la mastication, le sourire ou le vent",
      "Douleur strictement unilatérale, jamais des deux côtés à la fois",
      "Périodes douloureuses entrecoupées d'accalmies"
    ],
    faq: [
      { question: "Comment différencier une névralgie du trijumeau d'une douleur dentaire ?", answer: "La névralgie du trijumeau est une douleur électrique, fulgurante, de quelques secondes, déclenchée par des triggers (toucher, parole, vent). La douleur dentaire est plus sourde, permanente, liée à la percussion de la dent. Un bilan dentaire et un IRM cérébral distinguent formellement les deux." },
      { question: "La névralgie du trijumeau se guérit-elle ?", answer: "Elle se traite. Les médicaments antiépileptiques (carbamazépine) soulagent dans 70% des cas. Lorsqu'ils sont inefficaces ou mal tolérés, des gestes chirurgicaux comme la décompression microvasculaire ou la radiochirurgie (Gamma Knife) donnent d'excellents résultats." },
      { question: "Faut-il consulter un chirurgien maxillo-facial pour une névralgie ?", answer: "En première intention, oui : pour éliminer une cause dentaire ou ORL. Le chirurgien maxillo-facial coordonne ensuite avec le neurologue. Si une cause vasculaire est identifiée à l'IRM, le neurochirurgien prend le relais pour la décompression." }
    ],
    relatedSymptoms: ["douleur-machoire", "oreille-atm"],
    relatedIntervention: {
      slug: "osteotomie-bimaxillaire",
      label: "Bilan des douleurs faciales chroniques",
      description: "Le Dr Jullian réalise le bilan des douleurs faciales atypiques pour en préciser l'origine avant orientation spécialisée."
    }
  },
  // ── S27 ─────────────────────────────────────────────────────
  {
    id: "s27",
    slug: "gencive-qui-recule",
    title: "Gencive qui recule",
    headline: "récession gingivale : que faire ?",
    urgencyLevel: "soon",
    category: "dents-gencives",
    metaDescription: "Gencive qui descend, racine de dent visible, sensibilité au froid : récession gingivale et solutions chirurgicales (greffe de gencive) à Mulhouse.",
    intro: "La récession gingivale — gencive qui 'descend' et expose la racine de la dent — est fréquente et souvent évolutive. Au-delà de la gêne esthétique, elle expose la racine à la carie et à la sensibilité. Une greffe gingivale peut corriger et stabiliser la situation.",
    causes: [
      "Brossage trop vigoureux (abrasion mécanique de la gencive)",
      "Parodontite chronique (inflammation et destruction gingivale)",
      "Mauvaise position dentaire ou malocclusion",
      "Piercings linguaux ou labiaux traumatisant la gencive"
    ],
    consultSigns: [
      "Racine de la dent visible (dent qui paraît plus longue)",
      "Sensibilité intense au froid, au chaud ou au brossage",
      "Gencive fine ou transparente avec veine visible",
      "Progression de la récession observée sur plusieurs mois"
    ],
    faq: [
      { question: "La gencive peut-elle repousser naturellement ?", answer: "Non. Une fois rétractée, la gencive ne régénère pas spontanément. Seul un acte chirurgical (greffe gingivale par lambeau ou greffe de conjonctif) peut recouvrir la racine exposée. En revanche, stopper la cause (brossage adapté, traitement parodontal) arrête la progression." },
      { question: "La greffe de gencive est-elle douloureuse ?", answer: "L'intervention se réalise sous anesthésie locale. Les suites sont modérées (gêne, sensibilité au site donneur — souvent le palais) pendant 7 à 10 jours. Le résultat esthétique et fonctionnel est généralement excellent et durable." },
      { question: "Quel chirurgien réalise les greffes de gencive ?", answer: "Le chirurgien maxillo-facial ou le parodontologiste. Le Dr Jullian réalise ces actes de chirurgie parodontale reconstructrice dans le cadre de sa pratique de chirurgie buccale au GHRMSA et en cabinet." }
    ],
    relatedSymptoms: ["mobilite-dentaire", "saignement-buccal"],
    relatedIntervention: {
      slug: "greffe-osseuse-pre-implantaire",
      label: "Chirurgie parodontale et reconstructrice",
      description: "Le Dr Jullian réalise les greffes gingivales et les chirurgies parodontales de reconstruction pour stabiliser les récessions."
    }
  },
  // ── S28 ─────────────────────────────────────────────────────
  {
    id: "s28",
    slug: "engourdissement-visage-levre",
    title: "Engourdissement du visage ou des lèvres",
    headline: "paresthésie : cause nerveuse ?",
    urgencyLevel: "soon",
    category: "visage-trauma",
    metaDescription: "Lèvre engourdie, joue sans sensibilité, fourmillements du visage : causes nerveuses maxillo-faciales et conduite à tenir. Dr Flora Jullian à Mulhouse.",
    intro: "Un engourdissement ou des fourmillements persistants sur le visage — lèvre, menton, joue — peut traduire une atteinte d'un nerf facial ou dentaire. L'origine peut être post-chirurgicale, traumatique, infectieuse ou, plus rarement, tumorale.",
    causes: [
      "Lésion du nerf alvéolaire inférieur après extraction ou chirurgie",
      "Traumatisme facial ayant contusionné ou sectionné un nerf",
      "Kyste ou tumeur comprimant un nerf mandibulaire ou maxillaire",
      "Engourdissement post-injection anesthésique persistant (rare)"
    ],
    consultSigns: [
      "Engourdissement de la lèvre inférieure ou du menton depuis plus de 3 semaines",
      "Fourmillements persistants d'un côté du visage après un geste chirurgical",
      "Anesthésie partielle associée à une douleur en éclair",
      "Apparition d'un engourdissement sans cause évidente"
    ],
    faq: [
      { question: "L'engourdissement de la lèvre après une extraction est-il normal ?", answer: "Oui, transitoirement. Une légère paresthésie après extraction d'une dent de sagesse inférieure peut durer quelques jours. Si elle persiste au-delà de 3 semaines, une consultation de contrôle est indispensable pour évaluer l'état du nerf alvéolaire inférieur." },
      { question: "Le nerf peut-il se régénérer après une lésion chirurgicale ?", answer: "Oui, dans la majorité des cas. Les nerfs périphériques se régénèrent à une vitesse de 1 mm par jour. Une paresthésie post-chirurgicale régresse souvent en 3 à 6 mois. Des traitements (vitamines B, kinésithérapie) peuvent accélérer la récupération." },
      { question: "Quand un engourdissement du visage est-il une urgence ?", answer: "Si l'engourdissement est d'apparition brutale, s'il touche les deux côtés du visage, s'il est accompagné de troubles de la parole, de la vision ou de la marche : c'est une urgence neurologique (AVC possible) — appelez le 15 immédiatement." }
    ],
    relatedSymptoms: ["traumatisme-facial", "douleur-machoire", "nevralgie-trijumeau-douleur-electrique"],
      relatedIntervention: {
        slug: "dents-de-sagesse",
        label: "Bilan des paresthésies faciales",
        description: "Le Dr Jullian évalue les causes maxillo-faciales des engourdissements du visage et assure le suivi post-opératoire des nerfs sensitifs."
      },
  },
  // ── S29 ─────────────────────────────────────────────────────
  {
    id: "s29",
    slug: "canine-incluse-dent-qui-ne-pousse-pas",
    title: "Canine incluse ou dent qui ne pousse pas",
    headline: "peut-on la récupérer ?",
    urgencyLevel: "programmed",
    category: "dents-gencives",
    metaDescription: "Canine incluse, dent retenue ou dent qui ne pousse pas : diagnostic, traction orthodontique et chirurgie d'aide à l'éruption par le Dr Flora Jullian à Mulhouse.",
    intro: "La canine maxillaire est la dent la plus souvent incluse après les dents de sagesse. Découverte sur une radio de contrôle ou lors d'un suivi orthodontique, une canine incluse peut souvent être récupérée grâce à un traitement combiné orthodontie-chirurgie.",
    causes: [
      "Manque de place sur l'arcade dentaire (dent de lait non tombée, encombrement)",
      "Obstacle sur le trajet d'éruption (odontome, kyste)",
      "Anomalie de position de la dent dans l'os",
      "Dent surnuméraire bloquant l'éruption normale"
    ],
    consultSigns: [
      "Dent de lait encore présente après 13-14 ans (canine)",
      "Absence d'une dent sur l'arcade sans autre explication",
      "Découverte fortuite sur une radio panoramique",
      "Dent absente côté d'une bosse visible sur la gencive"
    ],
    faq: [
      { question: "Une canine incluse doit-elle toujours être opérée ?", answer: "Pas forcément extraite. Si la canine est en bonne position et que l'espace est disponible, une aide chirurgicale à l'éruption (dégagement + attachement orthodontique) permet de la 'tirer' sur l'arcade. L'extraction n'est envisagée qu'en cas d'angle ou position défavorable." },
      { question: "À quel âge faut-il traiter une canine incluse ?", answer: "Le plus tôt possible, idéalement entre 12 et 18 ans. Plus la dent est traitée jeune, plus les chances de succès de la traction orthodontique sont élevées. Passé 25 ans, la canine devient ankylosée (collée à l'os) et l'extraction est souvent inévitable." },
      { question: "Combien de temps dure le traitement d'une canine incluse ?", answer: "Le traitement combiné chirurgie + orthodontie dure en moyenne 18 à 24 mois. La mise en place de l'attachement est un acte chirurgical simple réalisé sous anesthésie locale. La traction progressive par l'orthodontiste dure ensuite 12 à 18 mois." }
    ],
    relatedSymptoms: ["dents-de-sagesse-poussent", "kyste-gencive-bouche"],
    relatedIntervention: {
      slug: "dents-de-sagesse",
      label: "Chirurgie d'aide à l'éruption dentaire",
      description: "Le Dr Jullian réalise les interventions d'aide à l'éruption des dents incluses et les extractions lorsque nécessaire."
    }
  },
  // ── S30 ─────────────────────────────────────────────────────
  {
    id: "s30",
    slug: "secheresse-buccale",
    title: "Sécheresse buccale (xérostomie)",
    headline: "toujours la bouche sèche ?",
    urgencyLevel: "programmed",
    category: "glandes-cou",
    metaDescription: "Bouche constamment sèche, difficultés à avaler : xérostomie, ses causes et sa prise en charge par le Dr Flora Jullian, chirurgien maxillo-facial à Mulhouse.",
    intro: "La sécheresse buccale ou xérostomie — manque de salive — est inconfortable mais aussi dangereuse pour les dents. La salive protège les dents de la carie et la muqueuse de l'infection. Sa diminution a donc des conséquences directes sur la santé buccale.",
    causes: [
      "Effets secondaires de médicaments (antidépresseurs, antihistaminiques, diurétiques)",
      "Syndrome de Sjögren (maladie auto-immune des glandes salivaires)",
      "Radiothérapie de la tête et du cou",
      "Déshydratation, anxiété, tabac"
    ],
    consultSigns: [
      "Bouche sèche permanente, surtout la nuit et au réveil",
      "Difficultés à mâcher, avaler ou parler",
      "Caries multiples et inexpliquées malgré une bonne hygiène",
      "Candidose buccale (plaques blanches) récidivante"
    ],
    faq: [
      { question: "La sécheresse buccale endommage-t-elle les dents ?", answer: "Oui. La salive est un agent de protection essentiel : elle neutralise les acides, reminéralise l'émail et limite les bactéries. En son absence, le risque de caries (surtout cervicales) et d'infections fongiques buccales est multiplié par 5 à 10." },
      { question: "Quels sont les traitements de la xérostomie ?", answer: "Les substituts salivaires (sprays, gels) améliorent le confort. Si les glandes sont encore partiellement fonctionnelles, des stimulants salivaires (pilocarpine, acupuncture) augmentent la sécrétion. Le traitement de la cause reste prioritaire (ajustement médicamenteux si possible)." },
      { question: "Le chirurgien maxillo-facial traite-t-il la sécheresse buccale ?", answer: "Il en fait le diagnostic étiologique, notamment en cas de suspicion de syndrome de Sjögren ou de pathologie des glandes salivaires. Il coordonne avec le rhumatologue et propose les mesures de protection dentaire adaptées." }
    ],
    relatedSymptoms: ["glande-salivaire-douloureuse", "aphtes-ulceres-buccaux"],
      relatedIntervention: {
        slug: "exerese-cutanee",
        label: "Bilan des glandes salivaires",
        description: "Le Dr Jullian réalise le diagnostic étiologique de la xérostomie et la prise en charge des pathologies salivaires associées."
      },
  },
  // ── S31 ─────────────────────────────────────────────────────
  {
    id: "s31",
    slug: "douleur-apres-extraction",
    title: "Douleur après une extraction dentaire",
    headline: "normale ou complication ?",
    urgencyLevel: "soon",
    category: "dents-gencives",
    metaDescription: "Douleur après extraction dentaire : normale les 3 premiers jours ou signe de complication ? Conduite à tenir et quand rappeler le chirurgien à Mulhouse.",
    intro: "Une douleur post-extractionnelle est normale et attendue dans les 48 à 72 premières heures. Au-delà, si la douleur s'intensifie au lieu de régresser, il peut s'agir d'une alvéolite, d'une infection ou d'un fragment radiculaire — autant de situations qui nécessitent une consultation.",
    causes: [
      "Douleur normale de cicatrisation (inflammation physiologique)",
      "Alvéolite (dissolution prématurée du caillot — voir symptôme dédié)",
      "Infection ou abcès secondaire de l'alvéole",
      "Fragment dentaire ou osseux résiduel"
    ],
    consultSigns: [
      "Douleur s'intensifiant après le 3e jour (au lieu de diminuer)",
      "Douleur non contrôlée par le paracétamol recommandé",
      "Gonflement qui augmente ou fièvre apparaissant après l'intervention",
      "Mauvaise odeur persistante depuis l'alvéole"
    ],
    faq: [
      { question: "Combien de temps dure la douleur normale après une extraction ?", answer: "La douleur est maximale dans les 6 à 12 premières heures, puis diminue progressivement sur 2 à 3 jours. Une gêne résiduelle peut persister jusqu'à une semaine pour les extractions complexes. Si la douleur augmente après le 3e jour, consultez." },
      { question: "Peut-on prendre des anti-inflammatoires après une extraction ?", answer: "Avec précaution. Les anti-inflammatoires (ibuprofène) sont efficaces mais doivent être prescrits par le chirurgien. Pris sans avis médical, ils peuvent masquer une infection et augmenter le risque de saignement. Le paracétamol reste l'antalgique de première intention." },
      { question: "Quand rappeler le chirurgien après une extraction ?", answer: "Contactez le cabinet si : la douleur s'intensifie après 72h, si un saignement ne cède pas après 30 min de compression, si de la fièvre apparaît (> 38°C), ou si un gonflement augmente rapidement. Ces signes nécessitent une consultation sans délai." }
    ],
    relatedSymptoms: ["alveolite-apres-extraction", "saignement-buccal", "gonflement"],
    relatedIntervention: {
      slug: "dents-de-sagesse",
      label: "Soins post-extractionnels",
      description: "Le Dr Jullian accompagne chaque patient avec un protocole post-opératoire clair pour éviter les complications."
    }
  },
  // ── S32 ─────────────────────────────────────────────────────
  {
    id: "s32",
    slug: "bosse-sous-peau-visage",
    title: "Bosse ou lipome sous la peau du visage",
    headline: "bénin ou à analyser ?",
    urgencyLevel: "soon",
    category: "chirurgie-cutanee",
    metaDescription: "Lipome, kyste sébacé ou nodule sous la peau du visage ou du cou : différencier bénin du préoccupant. Exérèse chirurgicale par le Dr Flora Jullian à Mulhouse.",
    intro: "Une bosse sous la peau du visage ou du cou — molle, mobile, indolore — est souvent un lipome ou un kyste sébacé, tous deux bénins. Mais toute masse qui durcit, grossit rapidement ou adhère aux tissus doit être analysée par un spécialiste.",
    causes: [
      "Lipome (amas bénin de cellules graisseuses — le plus fréquent)",
      "Kyste sébacé (kyste du follicule pileux)",
      "Kyste épidermoïde ou dermoïde",
      "Adénome pléomorphe de la parotide (tumeur bénigne salivaire)"
    ],
    consultSigns: [
      "Masse sous-cutanée présente depuis plus de 4 semaines",
      "Bosse qui grossit progressivement",
      "Masse dure, irrégulière ou adhérente à la peau ou aux plans profonds",
      "Bosse douloureuse, rouge ou chaude (infection ou inflammation)"
    ],
    faq: [
      { question: "Un lipome du visage est-il dangereux ?", answer: "Non. Le lipome est une tumeur bénigne, sans risque de transformation cancéreuse. Il peut cependant grossir et devenir gênant esthétiquement ou fonctionnellement. L'exérèse chirurgicale sous anesthésie locale reste le seul traitement définitif." },
      { question: "Comment différencier un lipome d'un kyste sébacé ?", answer: "Le lipome est mou, bien délimité, sans point central, et glisse facilement sous le doigt. Le kyste sébacé a souvent un petit orifice (comédon) en surface et peut se surinfector. L'échographie confirme la nature de la masse en cas de doute." },
      { question: "L'exérèse d'un lipome laisse-t-elle une cicatrice visible ?", answer: "La cicatrice est proportionnelle à la taille de la lésion. Pour les petits lipomes, une incision de quelques millimètres suffit. Sur le visage, les incisions sont orientées dans les lignes de relaxation cutanée pour une cicatrice discrète et bien camouflée." }
    ],
    relatedSymptoms: ["noeud-machoire", "cicatrice-cheloide", "grain-de-beaute-suspect"],
    relatedIntervention: {
      slug: "exerese-cutanee",
      label: "Exérèse des lésions cutanées bénignes",
      description: "Le Dr Jullian réalise l'exérèse des lipomes, kystes et masses sous-cutanées du visage avec analyse anatomopathologique."
    }
  },
  // ── S33 ─────────────────────────────────────────────────────
  {
    id: "s33",
    slug: "plaie-visage-suture",
    title: "Plaie du visage nécessitant une suture",
    headline: "quand aller aux urgences ?",
    urgencyLevel: "urgent",
    category: "visage-trauma",
    metaDescription: "Plaie du visage après un choc, une chute ou une morsure : quand suturer, comment éviter une cicatrice disgracieuse, prise en charge urgente par le Dr Flora Jullian à Mulhouse.",
    intro: "Le visage est une zone hautement vascularisée. Une plaie peut saigner abondamment même si elle est superficielle. La prise en charge par un chirurgien maxillo-facial garantit une suture précise qui minimise la cicatrice visible.",
    causes: [
      "Chute avec impact facial (sol, meuble, vélo)",
      "Accident de la voie publique",
      "Morsure (humaine, animale)",
      "Coupure accidentelle (verre, outil, couteau)"
    ],
    consultSigns: [
      "Plaie béante (bords qui s'écartent) nécessitant une suture",
      "Plaie profonde avec tissu graisseux visible",
      "Plaie de plus de 2 cm ou traversant la lèvre, l'oreille ou la paupière",
      "Morsure animale (risque de rage — vaccination antirabique à évaluer)"
    ],
    faq: [
      { question: "Combien de temps après une plaie peut-on encore suturer ?", answer: "Idéalement dans les 6 heures sur le visage (délai de suture primaire). Jusqu'à 24 heures pour les plaies peu contaminées du visage, grâce à la très bonne vascularisation. Au-delà, on préfère une cicatrisation dirigée ou une suture secondaire à 5 jours." },
      { question: "Vaut-il mieux des agrafes ou des fils pour le visage ?", answer: "Sur le visage, on utilise toujours des fils de suture fins (non résorbables ou résorbables selon la localisation) pour un résultat esthétique optimal. Les agrafes ne sont jamais utilisées sur le visage car elles laissent des marques permanentes." },
      { question: "Comment éviter une cicatrice après une plaie du visage ?", answer: "La qualité de la suture initiale est déterminante. Ensuite : protéger la cicatrice du soleil (SPF50+) pendant 1 an, appliquer un gel siliconé dès que la plaie est fermée, et masser la cicatrice. Le Dr Jullian peut proposer une révision si la cicatrice est inesthétique." }
    ],
    relatedSymptoms: ["traumatisme-facial", "cicatrice-cheloide", "gonflement"],
      relatedIntervention: {
        slug: "exerese-cutanee",
        label: "Suture esthétique et révision de cicatrice",
        description: "Le Dr Jullian réalise la suture des plaies du visage selon des techniques microchirurgicales pour minimiser la cicatrice."
      },
  },
  // ── S34 ─────────────────────────────────────────────────────
  {
    id: "s34",
    slug: "dent-de-lait-adulte",
    title: "Dent de lait encore présente à l'âge adulte",
    headline: "la garder ou l'enlever ?",
    urgencyLevel: "programmed",
    category: "dents-gencives",
    metaDescription: "Dent de lait persistante chez l'adulte, absence de la dent définitive correspondante : que faire ? Chirurgie et implant à Mulhouse, Dr Flora Jullian.",
    intro: "Conserver une dent de lait à l'âge adulte peut sembler anodin, mais c'est souvent le signe d'une dent définitive absente (agénésie) ou incluse. La dent de lait finit par tomber seule — et laisser un espace difficile à combler sans greffe osseuse.",
    causes: [
      "Agénésie de la dent définitive sous-jacente (absence congénitale)",
      "Dent définitive incluse ou retenue par un obstacle",
      "Anklyose de la dent de lait (collée à l'os)",
      "Anomalie de position de la dent définitive"
    ],
    consultSigns: [
      "Dent de lait toujours présente après 15 ans",
      "Dent qui paraît plus petite que ses voisines définitives",
      "Infra-occlusie (dent de lait 'enfoncée' par rapport au niveau de l'arcade)",
      "Radio panoramique montrant l'absence de la dent définitive"
    ],
    faq: [
      { question: "Faut-il extraire une dent de lait persistante chez l'adulte ?", answer: "Pas forcément immédiatement. Si la dent de lait est stable, bien positionnée et non ankylosée, on peut la conserver plusieurs années. La décision dépend du pronostic à long terme : une dent de lait a une durée de vie limitée et la planification du remplacement (implant, bridge) doit être anticipée." },
      { question: "Peut-on poser un implant à la place d'une dent de lait extraite ?", answer: "Oui, c'est souvent la meilleure solution. Mais l'implant ne peut être posé qu'après la fin de la croissance osseuse (18 ans environ). Avant, un bridge collé provisoire ou une prothèse amovible maintient l'espace. Le Dr Jullian coordonne ce plan avec l'orthodontiste et le prothésiste." },
      { question: "L'absence congénitale de dent (agénésie) est-elle fréquente ?", answer: "Oui. L'agénésie des prémolaires (dents entre canines et molaires) est l'une des anomalies dentaires les plus fréquentes, touchant 5 à 8% de la population. L'incisive latérale supérieure est aussi souvent absente. Un bilan orthodontique précoce permet de planifier la prise en charge." }
    ],
    relatedSymptoms: ["canine-incluse-dent-qui-ne-pousse-pas", "perte-dents"],
    relatedIntervention: {
      slug: "greffe-osseuse-pre-implantaire",
      label: "Implant et reconstruction après perte de dent de lait",
      description: "Le Dr Jullian planifie la pose d'implant et la greffe osseuse si nécessaire après l'extraction d'une dent de lait persistante."
    }
  },
  // ── S35 ─────────────────────────────────────────────────────
  {
    id: "s35",
    slug: "communication-bucco-sinusienne",
    title: "Communication bucco-sinusienne",
    headline: "que faire après une extraction ?",
    urgencyLevel: "soon",
    category: "dents-gencives",
    metaDescription: "Communication bucco-sinusienne après extraction d'une molaire supérieure : symptômes, risques et fermeture chirurgicale par le Dr Flora Jullian à Mulhouse.",
    intro: "La communication bucco-sinusienne (CBS) est une ouverture anormale entre la bouche et le sinus maxillaire, le plus souvent après extraction d'une molaire supérieure dont la racine était en contact direct avec le sinus. Elle peut rester asymptomatique ou entraîner une sinusite si elle n'est pas traitée rapidement.",
    causes: [
      "Extraction d'une molaire ou prémolaire supérieure avec racine proche du sinus",
      "Ablation d'un kyste dental refoulant dans le sinus",
      "Traumatisme du massif facial",
      "Complication d'une avulsion difficile (racine poussée dans le sinus)"
    ],
    consultSigns: [
      "Passage d'air ou de liquide entre la bouche et le nez lors de la déglutition",
      "Voix nasonnée après une extraction de dent du haut",
      "Nez qui coule d'un côté après une extraction maxillaire",
      "Sinusite unilatérale dans les semaines suivant une extraction"
    ],
    faq: [
      { question: "Une communication bucco-sinusienne se ferme-t-elle seule ?", answer: "Les petites CBS (moins de 2 mm) peuvent se fermer spontanément si elles sont traitées immédiatement (obturation provisoire, antibiotiques, consignes). Au-delà de 72 heures ou pour une ouverture plus grande, une fermeture chirurgicale par lambeau est nécessaire." },
      { question: "Quelles précautions prendre après une CBS ?", answer: "Ne jamais se moucher en forçant, ne pas fumer, éviter les boissons à la paille et les efforts violents. Ces gestes augmentent la pression dans le sinus et peuvent agrandir ou infecter la communication. Consultez votre chirurgien dès que vous suspectez une CBS." },
      { question: "La fermeture chirurgicale d'une CBS est-elle complexe ?", answer: "Non, pour les CBS fraîches et non infectées. Elle se réalise sous anesthésie locale en consultation, par un lambeau muqueux qui recouvre et ferme l'ouverture. Pour les CBS chroniques compliquées d'une sinusite, une intervention associée ORL (méatotomie) peut être nécessaire." }
    ],
    relatedSymptoms: ["sinusite-dentaire", "douleur-apres-extraction", "nez-bouche-devie"],
    relatedIntervention: {
      slug: "kystes-maxillaires",
      label: "Fermeture de communication bucco-sinusienne",
      description: "Le Dr Jullian prend en charge la fermeture chirurgicale des communications bucco-sinusiennes et les sinusites dentaires associées."
    }
  },
  // ── S36 ─────────────────────────────────────────────────────
  {
    id: "s36",
    slug: "abces-dentaire",
    title: "Abcès dentaire",
    headline: "douleur, gonflement : urgence ?",
    urgencyLevel: "urgent",
    category: "dents-gencives",
    metaDescription: "Abcès dentaire : douleur pulsatile, gonflement de la joue, fièvre. Conduite à tenir et prise en charge d'urgence par le Dr Flora Jullian à Mulhouse.",
    intro: "L'abcès dentaire est une infection bactérienne localisée autour d'une racine ou dans la gencive. Il peut rester localisé ou, en quelques heures, se propager aux tissus profonds du visage et du cou. La prise en charge rapide est indispensable.",
    causes: [
      "Carie profonde non traitée atteignant la pulpe dentaire",
      "Fracture dentaire laissant entrer les bactéries",
      "Parodontite sévère avec poche infectée profonde",
      "Dent mortifiée (dévitalisée ou sans traitement canalaire)"
    ],
    consultSigns: [
      "Douleur pulsatile intense, non soulagée par les antalgiques habituels",
      "Gonflement de la joue ou du plancher buccal",
      "Fièvre au-dessus de 38°C associée à la douleur dentaire",
      "Difficultés à avaler ou à respirer (signe d'extension)"
    ],
    faq: [
      { question: "Peut-on soigner un abcès dentaire avec des antibiotiques seuls ?", answer: "Non. Les antibiotiques réduisent l'infection mais ne traitent pas sa cause. Sans drainage (chirurgie ou traitement canalaire), l'abcès récidivera. Les antibiotiques sont indispensables en cas de diffusion de l'infection, mais ils ne remplacent pas le geste chirurgical." },
      { question: "Un abcès dentaire peut-il être dangereux ?", answer: "Oui, s'il n'est pas traité rapidement. L'infection peut se propager aux tissus mous du cou (cellulite cervico-faciale), comprimer les voies aériennes, ou diffuser par voie sanguine (septicémie). La fièvre + le gonflement = urgence chirurgicale." },
      { question: "Que faire en attendant le rendez-vous pour un abcès dentaire ?", answer: "Prenez du paracétamol (jamais d'aspirine qui fluidifie le sang). N'appliquez pas de chaleur. N'essayez pas de percer l'abcès vous-même. Si un gonflement rapide, une fièvre ou une difficulté à avaler apparaît, consultez directement aux urgences du GHRMSA." }
    ],
    relatedSymptoms: ["gonflement", "cellulite-cervico-faciale", "fistule-bouton-gencive"],
    relatedIntervention: {
      slug: "dents-de-sagesse",
      label: "Drainage et traitement de l'abcès",
      description: "Le Dr Jullian prend en charge les abcès dentaires par drainage chirurgical et, si nécessaire, extraction de la dent responsable."
    }
  },
  // ── S37 ─────────────────────────────────────────────────────
  {
    id: "s37",
    slug: "dent-sensible-froid-chaud",
    title: "Dent sensible au froid ou au chaud",
    headline: "hypersensibilité ou carie ?",
    urgencyLevel: "soon",
    category: "dents-gencives",
    metaDescription: "Dent qui fait mal au froid, au chaud, au sucre ou à l'air : hypersensibilité dentinaire ou carie profonde ? Diagnostic et prise en charge à Mulhouse.",
    intro: "Une dent sensible au froid, au chaud ou au sucre est l'un des motifs de consultation dentaire les plus fréquents. Elle peut signaler une simple hypersensibilité dentinaire bénigne ou, à l'opposé, une carie profonde menaçant la pulpe — la distinction est cruciale.",
    causes: [
      "Hypersensibilité dentinaire (émail usé, gencive rétractée exposant la dentine)",
      "Carie profonde atteignant la dentine ou la pulpe",
      "Fissure ou fracture dentaire incomplète",
      "Traitement de blanchiment récent (sensibilité temporaire)"
    ],
    consultSigns: [
      "Douleur vive et brève au contact du froid, du chaud ou du sucré",
      "Douleur spontanée, nocturne ou pulsatile (signe de pulpite)",
      "Sensibilité à la pression sur la dent lors de la mastication",
      "Sensation persistante plusieurs secondes après le contact thermique"
    ],
    faq: [
      { question: "Quelle est la différence entre une dent sensible et une pulpite ?", answer: "L'hypersensibilité dentinaire provoque une douleur brève (quelques secondes) au froid ou au chaud qui cède rapidement. La pulpite (inflammation de la pulpe) génère une douleur qui persiste plus de 30 secondes après le stimulus, devient spontanée et souvent nocturne : c'est le signe qu'un traitement canalaire est nécessaire." },
      { question: "Un dentifrice anti-sensibilités peut-il régler le problème ?", answer: "Pour les hypersensibilités légères liées à l'émail usé ou à une légère récession gingivale, oui. Mais si la douleur est forte, spontanée ou nocturne, consultez : un dentifrice ne traite pas une carie profonde ni une pulpite débutante." },
      { question: "Faut-il dévitaliser une dent sensible ?", answer: "Seulement si la pulpe est irrémédiablement atteinte (pulpite irréversible, nécrose). Pour la plupart des hypersensibilités, un traitement moins invasif (désensibilisation, scellement des tubules, restauration) suffit. Le Dr Jullian évalue la vitalité de la dent avant de décider." }
    ],
    relatedSymptoms: ["gencive-qui-recule", "fracture-dent", "alveolite-apres-extraction"],
    relatedIntervention: {
      slug: "dents-de-sagesse",
      label: "Consultation de chirurgie buccale",
      description: "Le Dr Jullian évalue les douleurs dentaires complexes et coordonne la prise en charge adaptée."
    }
  },
  // ── S38 ─────────────────────────────────────────────────────
  {
    id: "s38",
    slug: "mauvaise-haleine",
    title: "Mauvaise haleine chronique",
    headline: "halitose : d'où vient-elle ?",
    urgencyLevel: "programmed",
    category: "dents-gencives",
    metaDescription: "Mauvaise haleine persistante malgré l'hygiène : halitose buccale, sinusienne ou digestive ? Causes et solutions à Mulhouse, Dr Flora Jullian.",
    intro: "L'halitose — mauvaise haleine chronique — est une gêne sociale significative qui touche 25 % de la population. Dans 90 % des cas, l'origine est buccale : dépôts bactériens sur la langue, parodontite, caries ou prothèses mal ajustées.",
    causes: [
      "Dépôt bactérien sur la langue (cause n°1)",
      "Parodontite chronique (poches infectées autour des dents)",
      "Caries ou nécrose pulpaire non traitées",
      "Sécheresse buccale réduisant l'auto-nettoyage salivaire"
    ],
    consultSigns: [
      "Haleine désagréable persistante malgré brossage et bain de bouche",
      "Goût amer ou métallique permanent dans la bouche",
      "Entourage qui signale l'haleine de manière répétée",
      "Gencives qui saignent associées à l'halitose"
    ],
    faq: [
      { question: "Comment savoir si j'ai une mauvaise haleine ?", answer: "Léchez l'intérieur de votre poignet, attendez 10 secondes et sentez. Ou utilisez un halimètre (appareil de mesure des composés soufrés volatils). La consultation d'un spécialiste reste le moyen le plus fiable pour identifier la cause précise et mesurer l'intensité réelle." },
      { question: "Les bains de bouche éliminent-ils l'halitose ?", answer: "Temporairement. Ils masquent l'haleine mais ne traitent pas la cause. Seul le traitement de la cause (parodontite, nettoyage professionnel de la langue, soins dentaires) peut éliminer durablement l'halitose. Un bain de bouche sans traitement cause = masque sans solution." },
      { question: "L'estomac peut-il être la cause d'une mauvaise haleine ?", answer: "Rarement (moins de 5% des cas). L'origine gastrique est souvent suspectée mais rarement confirmée. Avant de consulter un gastro-entérologue, il est indispensable d'avoir éliminé une cause buccale — ce qui résout le problème dans la grande majorité des cas." }
    ],
    relatedSymptoms: ["secheresse-buccale", "gencive-qui-recule", "fistule-bouton-gencive"],
    relatedIntervention: {
      slug: "dents-de-sagesse",
      label: "Bilan de chirurgie buccale",
      description: "Le Dr Jullian évalue les causes chirurgicales de l'halitose (parodontite, kystes, dents mortifiées) et propose la prise en charge adaptée."
    }
  },
  // ── S39 ─────────────────────────────────────────────────────
  {
    id: "s39",
    slug: "cellulite-cervico-faciale",
    title: "Cellulite cervico-faciale",
    headline: "infection diffuse du visage : urgence absolue",
    urgencyLevel: "urgent",
    category: "visage-trauma",
    metaDescription: "Gonflement massif du visage ou du cou, fièvre, difficultés à avaler ou à respirer : la cellulite cervico-faciale est une urgence vitale. GHRMSA Mulhouse.",
    intro: "La cellulite cervico-faciale est une infection bactérienne qui se propage rapidement aux espaces profonds du visage et du cou. Issue d'une infection dentaire non traitée, elle peut menacer les voies aériennes en quelques heures. C'est une urgence chirurgicale absolue.",
    causes: [
      "Infection dentaire diffusant aux tissus profonds (abcès non drainé)",
      "Infection de la dent de sagesse (péricoronarite évoluée)",
      "Fracture dentaire ou osseuse infectée",
      "Complication de soins dentaires chez un patient immunodéprimé"
    ],
    consultSigns: [
      "Gonflement massif et rapide d'une joue, du plancher buccal ou du cou",
      "Fièvre élevée (> 39°C) associée au gonflement",
      "Difficultés à avaler (dysphagie) ou à ouvrir la bouche (trismus)",
      "Difficultés respiratoires ou voix étouffée"
    ],
    faq: [
      { question: "La cellulite cervico-faciale est-elle vraiment une urgence ?", answer: "Oui, absolument. Sans traitement chirurgical urgent (drainage des espaces infectés + antibiothérapie IV), l'infection peut comprimer les voies aériennes, descendre au médiastin (médiastinite) ou provoquer une septicémie fulminante. Le pronostic vital peut être engagé en 24 à 48 heures." },
      { question: "Comment se traite une cellulite cervico-faciale ?", answer: "Hospitalisation en urgence, antibiothérapie intraveineuse à large spectre, drainage chirurgical des collections purulentes sous anesthésie générale, et traitement de la dent causale. La surveillance en réanimation peut être nécessaire pour les formes étendues." },
      { question: "Quels patients sont à risque de cellulite cervico-faciale grave ?", answer: "Les patients diabétiques, immunodéprimés (chimiothérapie, corticoïdes au long cours, VIH), les personnes obèses ou en mauvais état général. Chez eux, une simple douleur dentaire avec gonflement doit déclencher une consultation urgente sans attendre." }
    ],
    relatedSymptoms: ["gonflement", "abces-dentaire", "oedeme-levre-langue"],
      relatedIntervention: {
        slug: "dents-de-sagesse",
        label: "Drainage chirurgical d'urgence",
        description: "Le Dr Jullian prend en charge en urgence au GHRMSA les cellulites cervico-faciales par drainage chirurgical et antibiothérapie IV."
      },
  },
  // ── S40 ─────────────────────────────────────────────────────
  {
    id: "s40",
    slug: "fracture-pommette",
    title: "Pommette enfoncée ou fracturée",
    headline: "fracture du zygoma : que faire ?",
    urgencyLevel: "urgent",
    category: "visage-trauma",
    metaDescription: "Pommette enfoncée après un choc, fracture du zygoma ou de l'arcade zygomatique : conduite à tenir et prise en charge chirurgicale à Mulhouse.",
    intro: "La fracture du zygoma (os de la pommette) est l'une des fractures de la face les plus fréquentes après la fracture du nez. Elle peut passer inaperçue les premières heures en raison de l'œdème, puis être évidente une fois le gonflement résorbé.",
    causes: [
      "Coup direct sur la pommette (sport, agression, chute)",
      "Accident de la route ou de moto",
      "Impact lors d'une activité professionnelle"
    ],
    consultSigns: [
      "Asymétrie visible du relief facial (pommette 'plate' ou enfoncée)",
      "Douleur à la palpation de la pommette et de l'arcade",
      "Engourdissement de la joue ou de la lèvre supérieure (nerf infra-orbitaire)",
      "Difficultés à ouvrir la bouche complètement"
    ],
    faq: [
      { question: "Une fracture de pommette se voit-elle sur une radio simple ?", answer: "Partiellement. La radio de face (crâne face) peut montrer une opacité sinusienne ou une déformation. Mais le scanner facial (TDM) reste le gold standard : il précise le degré de déplacement de la fracture et guide la décision thérapeutique (chirurgie ou surveillance)." },
      { question: "Toutes les fractures du zygoma doivent-elles être opérées ?", answer: "Non. Les fractures sans déplacement peuvent être surveillées sans chirurgie. En revanche, les fractures avec enfoncement de la pommette, trouble de l'ouverture buccale, ou syndrome infra-orbitaire (engourdissement de la joue) nécessitent une réduction chirurgicale." },
      { question: "Quel est le délai pour opérer une fracture de pommette ?", answer: "La réduction est idéalement réalisée dans les 7 à 10 jours, une fois l'œdème partiellement résorbé. Au-delà de 3 semaines, la fracture commence à se consolider en mauvaise position, rendant la chirurgie plus complexe." }
    ],
    relatedSymptoms: ["traumatisme-facial", "fracture-orbite", "engourdissement-visage-levre"],
      relatedIntervention: {
        slug: "lambeau-local",
        label: "Réparation des fractures du massif facial",
        description: "Le Dr Jullian réalise la réduction chirurgicale et l'ostéosynthèse des fractures du zygoma et du plancher de l'orbite."
      },
  },
  // ── S41 ─────────────────────────────────────────────────────
  {
    id: "s41",
    slug: "peri-implantite",
    title: "Douleur ou infection autour d'un implant",
    headline: "péri-implantite : peut-on sauver l'implant ?",
    urgencyLevel: "soon",
    category: "dents-gencives",
    metaDescription: "Douleur, gonflement ou pus autour d'un implant dentaire : la péri-implantite, ses causes, son traitement conservateur ou chirurgical et quand consulter le Dr Flora Jullian à Mulhouse.",
    intro: "La péri-implantite est l'infection des tissus entourant un implant dentaire. Comparable à la parodontite autour des dents naturelles, elle détruit progressivement l'os qui maintient l'implant. Sans traitement précoce, elle peut mener à la perte de l'implant.",
    causes: [
      "Hygiène insuffisante autour de l'implant (plaque bactérienne)",
      "Tabac (facteur de risque majeur de péri-implantite)",
      "Surcharge occlusale (implant mal positionné ou prothèse mal ajustée)",
      "Antécédents de parodontite non traitée"
    ],
    consultSigns: [
      "Gencive rouge, gonflée ou saignant au brossage autour de l'implant",
      "Pus sortant du sillon péri-implantaire",
      "Douleur à la pression ou à la mastication au niveau de l'implant",
      "Implant qui bouge légèrement à la pression (signe tardif)"
    ],
    faq: [
      { question: "Comment prévenir la péri-implantite ?", answer: "Brossage biquotidien + fil dentaire ou brosse interdentaire autour de l'implant, visite de contrôle semestrielle chez le chirurgien et l'hygiéniste dentaire, arrêt du tabac. Un implant entretenu dure 20 ans et plus ; négligé, il peut être perdu en quelques années." },
      { question: "La péri-implantite peut-elle être traitée sans retirer l'implant ?", answer: "Oui, si elle est diagnostiquée tôt. Le traitement non chirurgical (décontamination, laser, aéropolissage) ou chirurgical (lambeau de débridement, greffe osseuse) peut sauver l'implant. En cas de destruction osseuse avancée, le retrait de l'implant reste parfois inévitable." },
      { question: "Combien de temps après la pose d'un implant peut survenir une péri-implantite ?", answer: "La péri-implantite précoce (dans les 3 premiers mois) est liée à une infection au moment de la pose. La forme tardive (après 1 à 5 ans) est la plus fréquente et résulte d'une hygiène insuffisante cumulée dans le temps." }
    ],
    relatedSymptoms: ["perte-dents", "gencive-qui-recule", "mobilite-dentaire"],
    relatedIntervention: {
      slug: "greffe-osseuse-pre-implantaire",
      label: "Traitement et reconstruction péri-implantaire",
      description: "Le Dr Jullian traite les péri-implantites et propose une greffe osseuse si l'os péri-implantaire a été détruit."
    }
  },
  // ── S42 ─────────────────────────────────────────────────────
  {
    id: "s42",
    slug: "paralysie-faciale",
    title: "Paralysie faciale",
    headline: "bouche de travers : urgence ou non ?",
    urgencyLevel: "soon",
    category: "visage-trauma",
    metaDescription: "Paralysie faciale périphérique, visage asymétrique soudain, œil qui ne ferme plus : causes neurologiques, traumatiques ou tumorales et prise en charge rapide par le Dr Flora Jullian à Mulhouse.",
    intro: "Une paralysie faciale se manifeste par une asymétrie soudaine du visage — commissure labiale tombante, œil qui ne ferme plus, joue pendante. Elle peut être d'origine centrale (AVC) ou périphérique (nerf facial). Le délai de prise en charge est déterminant.",
    causes: [
      "Paralysie de Bell (cause idiopathique la plus fréquente, souvent virale)",
      "Zona du genou (syndrome de Ramsay Hunt)",
      "Traumatisme du nerf facial (chirurgie parotidienne, fracture du rocher)",
      "Tumeur de la parotide comprimant le nerf facial"
    ],
    consultSigns: [
      "Asymétrie faciale brutale d'un côté (coin de la bouche, œil, front)",
      "Incapacité à fermer l'œil complètement (lagophtalmie)",
      "Difficulté à sourire, siffler, gonfler les joues d'un côté",
      "Douleur derrière l'oreille précédant la paralysie (signe de Bell)"
    ],
    faq: [
      { question: "Comment différencier une paralysie faciale d'un AVC ?", answer: "Dans la paralysie périphérique (nerf facial), le front est aussi atteint du côté paralysé (le patient ne peut pas plisser le front). Dans l'AVC (central), le front est épargné car les fibres du front ont une double innervation. En cas de doute, appelez le 15 immédiatement — l'AVC ne peut pas attendre." },
      { question: "La paralysie de Bell guérit-elle spontanément ?", answer: "Oui, dans 70 à 80% des cas, en 3 à 6 semaines. Un traitement précoce par corticoïdes (dans les 72 premières heures) améliore le pronostic. La protection de l'œil (collyre, pansement nocturne) est indispensable pour éviter une kératite par exposition." },
      { question: "Le chirurgien maxillo-facial traite-t-il la paralysie faciale ?", answer: "Il en est souvent l'un des premiers interlocuteurs, surtout si la cause est une tumeur de la parotide ou un traumatisme facial. Il coordonne avec le neurologue et l'ORL. Pour les paralysies séquellaires définitives, des techniques chirurgicales de réanimation faciale (plasties) peuvent améliorer la symétrie." }
    ],
    relatedSymptoms: ["engourdissement-visage-levre", "noeud-machoire", "traumatisme-facial"],
      relatedIntervention: {
        slug: "exerese-cutanee",
        label: "Bilan des paralysies faciales",
        description: "Le Dr Jullian évalue les causes maxillo-faciales des paralysies faciales et coordonne la prise en charge avec le neurologue."
      },
  },
  // ── S43 ─────────────────────────────────────────────────────
  {
    id: "s43",
    slug: "frein-langue-court",
    title: "Frein de langue court (ankyloglossie)",
    headline: "la langue est-elle bloquée ?",
    urgencyLevel: "programmed",
    category: "dents-gencives",
    metaDescription: "Frein de langue trop court chez le bébé ou l'adulte : troubles de l'allaitement, de l'élocution, de la déglutition. Frénotomie à Mulhouse, Dr Flora Jullian.",
    intro: "L'ankyloglossie — frein de langue trop court — peut gêner l'allaitement chez le nourrisson, l'élocution chez l'enfant, et entraîner des douleurs posturales chez l'adulte. La frénotomie (section du frein) est un acte simple et efficace.",
    causes: [
      "Anomalie congénitale du frein lingual (origine génétique)",
      "Frein normal mais cicatrisé en position restrictive après traumatisme",
      "Association à d'autres anomalies des freins (labial, jugal)"
    ],
    consultSigns: [
      "Nourrisson ayant du mal à téter efficacement (allaitement douloureux pour la mère)",
      "Enfant ayant des difficultés d'élocution (zézaiement, difficulté à prononcer 'l', 'r', 't')",
      "Langue incapable de monter au palais ou de dépasser les lèvres",
      "Adulte avec douleurs cervicales, posturales ou de mâchoire liées à une tension linguale"
    ],
    faq: [
      { question: "À quel âge faut-il opérer un frein de langue court ?", answer: "Chez le nourrisson allaité, dès les premières semaines si l'allaitement est compromis. Chez l'enfant, entre 4 et 6 ans en association avec une orthophonie. Chez l'adulte, à tout âge : le résultat reste excellent et la récupération est très rapide." },
      { question: "La frénotomie est-elle douloureuse ?", answer: "Non. Chez le nourrisson, elle se réalise sans anesthésie en quelques secondes au cabinet. Chez l'enfant ou l'adulte, une anesthésie locale suffit. La guérison est rapide (2 à 5 jours). Une rééducation orthophonique post-opératoire est souvent recommandée." },
      { question: "Le frein de langue peut-il se reformer après la section ?", answer: "Rarement, si la cicatrisation crée des adhérences. C'est pourquoi des exercices de mobilisation de la langue sont prescrits après l'intervention pour éviter la reformation du frein et optimiser le résultat fonctionnel." }
    ],
    relatedSymptoms: ["ouverture-bouche", "douleur-machoire"],
    relatedIntervention: {
      slug: "dents-de-sagesse",
      label: "Frénotomie linguale",
      description: "Le Dr Jullian réalise la section du frein de langue (frénotomie) sous anesthésie locale chez l'enfant et l'adulte."
    }
  },
  // ── S44 ─────────────────────────────────────────────────────
  {
    id: "s44",
    slug: "fracture-orbite",
    title: "Fracture du plancher de l'orbite",
    headline: "oeil enfoncé après un choc ?",
    urgencyLevel: "urgent",
    category: "visage-trauma",
    metaDescription: "Fracture du plancher de l'orbite après un choc sur l'œil : diplopie, enophtalmie, oeil enfoncé. Prise en charge urgente à Mulhouse, Dr Flora Jullian.",
    intro: "La fracture du plancher de l'orbite (blow-out) survient lors d'un choc direct sur l'œil ou la pommette. La paroi osseuse cède sous la pression et peut emprisonner les muscles oculaires, provoquant une vision double. Une prise en charge rapide préserve la vision.",
    causes: [
      "Balle de sport projetée directement sur l'œil (squash, tennis, balle de handball)",
      "Coup de poing ou choc direct sur l'orbite",
      "Accident de voiture (déploiement d'airbag, impact tableau de bord)",
      "Chute sur un objet à angle vif"
    ],
    consultSigns: [
      "Vision double (diplopie) après un choc à l'œil",
      "Œil qui semble plus enfoncé que l'autre (enophtalmie)",
      "Engourdissement de la paupière inférieure ou de la joue",
      "Limitation du regard vers le haut ou le bas (muscle coincé)"
    ],
    faq: [
      { question: "La diplopie après un choc à l'œil est-elle grave ?", answer: "Oui, elle doit être explorée en urgence. Elle peut signer un muscle oculaire incarcéré dans la fracture — sans drainage rapide, le muscle peut nécroser. Une consultation aux urgences ophtalmologiques ou maxillo-faciales dans les 24 à 48 heures est impérative." },
      { question: "Toutes les fractures de l'orbite doivent-elles être opérées ?", answer: "Non. Les fractures sans diplopie, sans enfoncement visible et sans incarcération musculaire peuvent être traitées médicalement (anti-œdémateux, antibiotiques). La chirurgie (reconstruction du plancher par implant ou greffon) est indiquée en cas de diplopie persistante ou d'enophtalmie significative." },
      { question: "Quand opérer une fracture du plancher de l'orbite ?", answer: "La décision se prend dans les 2 semaines suivant le traumatisme. L'urgence absolue existe en cas de muscle incarcéré avec nausées et bradycardie (réflexe oculo-cardiaque — surtout chez l'enfant). Sinon, une chirurgie semi-urgente (5-10 jours) après résorption de l'œdème donne les meilleurs résultats." }
    ],
    relatedSymptoms: ["traumatisme-facial", "fracture-pommette", "engourdissement-visage-levre"],
      relatedIntervention: {
        slug: "lambeau-local",
        label: "Reconstruction du plancher de l'orbite",
        description: "Le Dr Jullian traite chirurgicalement les fractures du plancher de l'orbite par reconstruction avec implant ou greffon osseux."
      },
  },
  // ── S45 ─────────────────────────────────────────────────────
  {
    id: "s45",
    slug: "papillome-verrue-bouche",
    title: "Papillome ou verrue dans la bouche",
    headline: "lésion bénigne ou à surveiller ?",
    urgencyLevel: "soon",
    category: "dents-gencives",
    metaDescription: "Papillome buccal ou verrue dans la bouche ou sur les lèvres : infection au virus HPV, quand l'exérèse avec analyse histologique est indiquée. Consultation maxillo-faciale à Mulhouse.",
    intro: "Le papillome buccal est une lésion verruqueuse bénigne causée par le virus HPV (Human Papillomavirus). Bien que généralement bénin, tout papillome buccal doit être examiné et retiré pour analyse anatomopathologique afin d'exclure une dysplasie ou un carcinome associé.",
    causes: [
      "Infection par le virus HPV (types 6 et 11 principalement pour les formes bénignes)",
      "Transmission par contact direct (buccal, sexuel)",
      "Immunodépression favorisant la multiplication des lésions",
      "Traumatisme local favorisant l'implantation virale"
    ],
    consultSigns: [
      "Excroissance verruqueuse rose, blanche ou grisâtre dans la bouche",
      "Lésion sur les lèvres, le palais, la langue ou les gencives",
      "Papillome qui grossit progressivement",
      "Lésion multiple ou récidivante après exérèse"
    ],
    faq: [
      { question: "Le papillome buccal est-il contagieux ?", answer: "Oui. Le virus HPV se transmet par contact muqueux direct. Le risque de transmission dépend du type de HPV, de l'état immunitaire et de l'intégrité des muqueuses. L'exérèse de la lésion réduit, sans l'éliminer totalement, le risque de transmission." },
      { question: "Faut-il toujours opérer un papillome buccal ?", answer: "Oui, dans la quasi-totalité des cas. L'exérèse permet le diagnostic histologique (pour exclure un HPV à haut risque oncogène ou une dysplasie associée) et supprime le réservoir viral. Certains papillomes superficiels peuvent régresser spontanément, mais la surveillance active est indispensable." },
      { question: "La vaccination HPV protège-t-elle des papillomes buccaux ?", answer: "Partiellement. La vaccination (Gardasil) protège contre les HPV 6, 11, 16 et 18. Elle réduit le risque de papillomes anogénitaux et de certains cancers oropharyngés liés à l'HPV. Elle est recommandée avant l'exposition (11-19 ans) mais bénéfique à tout âge selon les recommandations actuelles." }
    ],
    relatedSymptoms: ["aphtes-ulceres-buccaux", "grain-de-beaute-suspect"],
    relatedIntervention: {
      slug: "exerese-cutanee",
      label: "Exérèse des papillomes buccaux",
      description: "Le Dr Jullian réalise l'exérèse des papillomes et lésions verruqueuses buccales avec analyse anatomopathologique systématique."
    }
  },
  // ── S46 ─────────────────────────────────────────────────────
  {
    id: "s46",
    slug: "epulis-gencive-grossesse",
    title: "Gencive gonflée pendant la grossesse",
    headline: "épulis gravidique : faut-il opérer ?",
    urgencyLevel: "soon",
    category: "dents-gencives",
    metaDescription: "Gencive qui gonfle pendant la grossesse, boule rouge qui saigne : épulis gravidique, gingivite gestationnelle et prise en charge à Mulhouse.",
    intro: "La grossesse entraîne des modifications hormonales qui augmentent la sensibilité des gencives aux bactéries. La gingivite gravidique est quasi universelle. Dans certains cas, une boule rouge et saignante apparaît sur la gencive : c'est l'épulis gravidique, bénigne mais parfois gênante.",
    causes: [
      "Augmentation de la progestérone et des œstrogènes (hyperperméabilité vasculaire gingivale)",
      "Réponse exagérée de la gencive à la plaque dentaire",
      "Carences nutritionnelles fréquentes pendant la grossesse (vitamine C, fer)",
      "Hygiène bucco-dentaire parfois négligée en cas de nausées"
    ],
    consultSigns: [
      "Gencives rouges, gonflées, douloureuses ou saignant au brossage",
      "Boule rouge et saignante sur la gencive entre deux dents (épulis)",
      "Douleur lors de la mastication gênant l'alimentation",
      "Gonflement gingival extensif depuis le début de la grossesse"
    ],
    faq: [
      { question: "L'épulis de grossesse disparaît-elle après l'accouchement ?", answer: "Souvent, oui. La grande majorité des épulis gravidiques régressent spontanément après l'accouchement sous l'effet du retour hormonal. Mais si la lésion persiste, s'ulcère ou gêne significativement, une exérèse chirurgicale simple peut être réalisée après l'accouchement." },
      { question: "Peut-on soigner ses dents pendant la grossesse ?", answer: "Oui, et c'est même recommandé. Le 2e trimestre est la période idéale pour les soins dentaires non urgents. Les anesthésiques locaux utilisés en dentisterie sont sans danger. Prévenez toujours votre chirurgien de votre grossesse pour adapter la prise en charge." },
      { question: "La gingivite de grossesse peut-elle nuire à l'enfant ?", answer: "Oui, potentiellement. Des études associent une parodontite non traitée pendant la grossesse à un risque accru de prématurité et de faible poids de naissance. C'est une raison supplémentaire de consulter un dentiste ou chirurgien buccal dès le début de la grossesse." }
    ],
    relatedSymptoms: ["saignement-buccal", "gencive-qui-recule"],
    relatedIntervention: {
      slug: "exerese-cutanee",
      label: "Exérèse de l'épulis gravidique",
      description: "Le Dr Jullian réalise l'exérèse des épulis persistent après l'accouchement sous anesthésie locale."
    }
  },
  // ── S47 ─────────────────────────────────────────────────────
  {
    id: "s47",
    slug: "malocclusion-occlusion-dentaire",
    title: "Mauvais articulé dentaire (malocclusion)",
    headline: "dents mal alignées : orthodontie ou chirurgie ?",
    urgencyLevel: "programmed",
    category: "machoire-atm",
    metaDescription: "Malocclusion dentaire, dents qui se chevauchent, béance antérieure ou classe III : quand l'orthodontie seule ne suffit pas. Chirurgie orthognathique à Mulhouse.",
    intro: "La malocclusion désigne un mauvais rapport entre les dents du haut et du bas. Elle peut être corrigée par orthodontie seule dans les cas mineurs, ou nécessiter une chirurgie orthognathique lorsque l'origine est osseuse. Le diagnostic précoce améliore le pronostic.",
    causes: [
      "Décalage osseux entre le maxillaire et la mandibule (origine squelettique)",
      "Encombrement dentaire sur arcade trop étroite",
      "Habitudes délétères prolongées (succion du pouce, interposition linguale)",
      "Perte dentaire entraînant des migrations des dents adjacentes"
    ],
    consultSigns: [
      "Dents du bas en avant des dents du haut (classe III, prognathisme)",
      "Espace entre les incisives supérieures et inférieures (béance antérieure)",
      "Dents qui se chevauchent fortement malgré un traitement orthodontique",
      "Douleurs ATM chroniques liées à l'occlusion"
    ],
    faq: [
      { question: "Comment savoir si ma malocclusion nécessite une chirurgie ?", answer: "Si votre orthodontiste a atteint les limites de ce que l'orthodontie seule peut corriger, il vous orientera vers un chirurgien maxillo-facial. En règle générale, un décalage osseux squelettique (classe III ou II sévère) ou une béance importante dépassent les capacités de l'orthodontie seule." },
      { question: "La malocclusion peut-elle causer des douleurs ailleurs qu'aux dents ?", answer: "Oui. Une malocclusion non traitée peut entraîner des douleurs ATM chroniques, des maux de tête, des douleurs cervicales et un bruxisme secondaire. Elle peut aussi affecter la phonation (élocution) et la déglutition." },
      { question: "À partir de quel âge peut-on traiter une malocclusion par chirurgie ?", answer: "La chirurgie orthognathique est réalisée après la fin de la croissance osseuse : 17-18 ans chez la fille, 18-20 ans chez le garçon. Un traitement interceptif (orthopédie dento-faciale) peut être débuté beaucoup plus tôt pour limiter l'aggravation." }
    ],
    relatedSymptoms: ["decalage-machoires", "bruxisme-grincement-dents", "douleur-machoire"],
    relatedIntervention: {
      slug: "osteotomie-bimaxillaire",
      label: "Chirurgie orthognathique",
      description: "Le Dr Jullian réalise les ostéotomies maxillaires et mandibulaires pour corriger les malocclusions d'origine squelettique."
    }
  },
  // ── S48 ─────────────────────────────────────────────────────
  {
    id: "s48",
    slug: "douleur-deglutition",
    title: "Douleur en avalant",
    headline: "odynophagie : quand consulter ?",
    urgencyLevel: "soon",
    category: "glandes-cou",
    metaDescription: "Douleur en avalant (odynophagie) ou difficulté à déglutir, sensation de boule dans la gorge : causes ORL, infectieuses, salivaires ou tumorales. Consultation maxillo-faciale à Mulhouse.",
    intro: "Une douleur en avalant (odynophagie) ou une sensation de corps étranger dans la gorge peut avoir de nombreuses origines — de l'angine banale à un problème cervical ou une pathologie des glandes salivaires. Certaines causes sont bénignes, d'autres nécessitent une exploration rapide.",
    causes: [
      "Infection ORL : angine, laryngite, abcès péri-amygdalien",
      "Calcul ou infection d'une glande salivaire comprimant le carrefour",
      "Corps étranger coincé (arête de poisson, fragment osseux)",
      "Tumeur du pharynx ou de l'hypopharynx (à exclure si symptôme persistant)"
    ],
    consultSigns: [
      "Douleur à la déglutition présente depuis plus de 10 jours malgré les antibiotiques",
      "Douleur unilatérale à la déglutition (un seul côté de la gorge)",
      "Voix étouffée ou voix de 'patate chaude'",
      "Difficulté à avaler la salive (dysphagie aux liquides)"
    ],
    faq: [
      { question: "La douleur en avalant est-elle toujours liée à une angine ?", answer: "Non. Une douleur persistante unilatérale à la déglutition, sans fièvre, sans amélioration sous antibiotiques, doit faire rechercher un abcès péri-amygdalien, un calcul salivaire ou une lésion du pharynx. Une consultation ORL ou maxillo-faciale s'impose." },
      { question: "Qu'est-ce qu'un abcès péri-amygdalien ?", answer: "C'est une collection purulente entre l'amygdale et la paroi du pharynx. Il provoque une douleur intense et unilatérale, une voix couverte, une difficulté à ouvrir la bouche et à avaler. Il nécessite un drainage chirurgical en urgence sous anesthésie locale ou générale." },
      { question: "Quand une douleur en avalant devient-elle une urgence ?", answer: "Si vous avez du mal à avaler votre salive, si vous bachez, si votre voix devient étouffée ou si vous avez du mal à respirer : consultez immédiatement aux urgences. Ce peut être le signe d'un abcès compressif ou d'un œdème laryngé menaçant les voies aériennes." }
    ],
    relatedSymptoms: ["glande-salivaire-douloureuse", "noeud-machoire", "gonflement"],
      relatedIntervention: {
        slug: "exerese-cutanee",
        label: "Bilan des douleurs pharyngées",
        description: "Le Dr Jullian évalue les causes maxillo-faciales des douleurs à la déglutition : pathologies salivaires, kystes cervicaux."
      },
  },
  // ── S49 ─────────────────────────────────────────────────────
  {
    id: "s49",
    slug: "dent-fissuree-fendue",
    title: "Dent fissurée ou fendue",
    headline: "peut-on la sauver ?",
    urgencyLevel: "soon",
    category: "dents-gencives",
    metaDescription: "Dent fissurée ou fendue, douleur à la morsure, sensibilité persistante au froid : syndrome de la dent fissurée, diagnostic clinique et radiologique, traitement conservateur ou extraction à Mulhouse.",
    intro: "Le syndrome de la dent fissurée est souvent difficile à diagnostiquer : douleur vive à la morsure sur un aliment dur, sensibilité au froid, sans lésion visible à l'œil nu. Pourtant, non traitée, une fissure peut évoluer vers une fracture complète ou une nécrose pulpaire.",
    causes: [
      "Bruxisme chronique (usure et fissuration des dents)",
      "Trauma occlusionnel (morsure d'un aliment très dur)",
      "Dent dévitalisée fragilisée (perte d'élasticité de la dentine)",
      "Restauration volumineuse (amalgame, composite) fragilisant la dent"
    ],
    consultSigns: [
      "Douleur vive et brève à la morsure sur un côté précis",
      "Sensibilité au froid qui persiste quelques secondes",
      "Douleur difficile à localiser précisément par le patient",
      "Inconfort intermittent depuis plusieurs semaines sans cause évidente"
    ],
    faq: [
      { question: "Comment diagnostiquer une dent fissurée ?", answer: "Le diagnostic est clinique : test au morceau de caoutchouc (mordre dessus reproduit la douleur), transillumination (lumière traversant la dent révèle la fissure) et teinte colorante. La radio dentaire est souvent normale car les fissures ne sont pas toujours visibles en 2D." },
      { question: "Une dent fissurée peut-elle être restaurée ?", answer: "Cela dépend de l'étendue de la fissure. Une fissure superficielle peut être collée et protégée par une couronne. Une fracture atteignant la racine sous la gencive rend souvent l'extraction inévitable. Le pronostic est bien meilleur si la fissure est prise en charge tôt." },
      { question: "Comment prévenir les fissures dentaires ?", answer: "Port d'une gouttière nocturne si vous souffrez de bruxisme. Évitez de croquer des aliments très durs (glaçons, bonbons durs, graines). Protégez les dents dévitalisées par une couronne rapidement après le traitement canalaire — elles sont 3 fois plus vulnérables aux fractures." }
    ],
    relatedSymptoms: ["fracture-dent", "bruxisme-grincement-dents", "dent-sensible-froid-chaud"],
    relatedIntervention: {
      slug: "dents-de-sagesse",
      label: "Extraction et reconstruction dentaire",
      description: "Le Dr Jullian évalue le pronostic de la dent fissurée et propose la conservation ou l'extraction selon l'étendue de la fracture."
    }
  },
  // ── S50 ─────────────────────────────────────────────────────
  {
    id: "s50",
    slug: "fracture-condyle-mandibulaire",
    title: "Fracture du condyle mandibulaire",
    headline: "douleur ATM après un choc ?",
    urgencyLevel: "urgent",
    category: "machoire-atm",
    metaDescription: "Fracture du condyle mandibulaire après un traumatisme du menton : douleur de l'ATM, malocclusion post-traumatique, traitement orthopédique ou chirurgical par le Dr Flora Jullian à Mulhouse.",
    intro: "La fracture condylienne est une fracture de l'extrémité supérieure de la mandibule, au niveau de l'Articulation Temporo-Mandibulaire. Fréquente lors des chocs mentonniers, elle peut passer inaperçue si peu déplacée. Une mauvaise occlusion dentaire après un choc en est le signe cardinal.",
    causes: [
      "Choc mentonnier direct (chute sur le menton, coup)",
      "Transmission par choc indirect (fracture parasymphysaire controlatérale)",
      "Accident de la route ou de sport à fort impact"
    ],
    consultSigns: [
      "Douleur devant l'oreille et impossibilité d'ouvrir normalement la bouche après un choc",
      "Déviation de la mâchoire lors de l'ouverture (vers le côté fracturé)",
      "Mauvaise occlusion dentaire apparue après le traumatisme",
      "Craquements douloureux à l'articulation après un choc"
    ],
    faq: [
      { question: "Toutes les fractures condyliennes doivent-elles être opérées ?", answer: "Non. Les fractures peu déplacées ou non déplacées peuvent être traitées orthopédiquement (blocage intermaxillaire ou régime alimentaire mou, kinésithérapie). Les fractures déplacées ou luxées, notamment chez l'adulte, nécessitent souvent une réduction chirurgicale à ciel ouvert pour restaurer une occlusion normale." },
      { question: "Quel est le risque d'une fracture condylienne non traitée ?", answer: "Chez l'enfant, une fracture condylienne non traitée peut perturber la croissance du condyle et entraîner une asymétrie faciale progressive, voire un blocage de la croissance mandibulaire. Chez l'adulte, une malocclusion secondaire et des douleurs ATM chroniques sont possibles." },
      { question: "Combien de temps dure la guérison après une fracture condylienne ?", answer: "En traitement orthopédique (blocage), 3 à 6 semaines de blocage sont suivies de 4 à 6 semaines de kinésithérapie. En chirurgie, la consolidation est plus rapide (4 à 6 semaines) car le condyle est repositionné et stabilisé par ostéosynthèse." }
    ],
    relatedSymptoms: ["traumatisme-facial", "oreille-atm", "ouverture-bouche"],
      relatedIntervention: {
        slug: "osteotomie-bimaxillaire",
        label: "Traitement des fractures condyliennes",
        description: "Le Dr Jullian traite les fractures du condyle mandibulaire par traitement orthopédique ou chirurgie d'ostéosynthèse au GHRMSA Mulhouse."
      },
  }

];
