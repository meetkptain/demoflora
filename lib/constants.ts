import { SiteContext, MedicalData } from './types';

export const floraContext: SiteContext = {
  businessName: "Dr Flora Jullian",
  slug: "dr-flora-jullian",
  contact: { 
    address: "20 Avenue du Docteur René Laennec, 68100 Mulhouse", 
    phone: "03 89 64 62 00",
    email: "secr-orl@ghrmsa.fr"
  },
  theme: { heroImageUrl: "/drjullian.png" }
};

export const floraData: MedicalData = {
  rppsNumber: "10101603602",
  conventionnement: "Secteur 2 (Adhérent OPTAM)",
  slogan: "Chirurgien Maxillo-Facial de référence au GHRMSA. Expertise hospitalière & libérale à Mulhouse.",
  doctors: [{
    fullname: "Dr Flora Jullian",
    title: "Chirurgien Maxillo-Facial & Stomatologue",
    photoUrl: "/drjullian.png",
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
    { id: "1", name: "Chirurgie Orthognathique", slug: "orthognathie", description: "Correction des décalages de mâchoires pour un équilibre fonctionnel et esthétique." },
    { id: "2", name: "Dents de sagesse", slug: "dents-de-sagesse", description: "Avulsion chirurgicale sécurisée réalisée exclusivement en milieu hospitalier." },
    { id: "3", name: "Troubles de la Mâchoire", slug: "douleur-machoire", description: "Diagnostic et prise en charge des dysfonctionnements temporo-mandibulaires (ATM)." },
    { id: "4", name: "Chirurgie Maxillo-Faciale", slug: "chirurgie-maxillo-faciale", description: "Prise en charge des traumatismes, reconstructions et pathologies osseuses de la face." }
  ],
  hours: [
    { day: "Lun — Jeu", open: "08h30 – 16h30" },
    { day: "Vendredi", open: "08h30 – 12h00" }
  ],
  advocacy: {
    mission: "Garantir un parcours de soin sans anxiété grâce à une information claire, une technologie de pointe et un suivi hospitalier rigoureux.",
    tips: [
      { id: "t1", title: "Avant l'intervention", content: "Préparez votre dossier complet pour éviter tout stress administratif le jour J." },
      { id: "t2", title: "Après l'intervention", content: "Suivez scrupuleusement le protocole de froid pour réduire le gonflement de 50%." }
    ]
  },
  posts: [
    {
      id: "p1",
      title: "Le parcours de la chirurgie orthognathique au GHRMSA",
      slug: "parcours-orthognathique",
      category: "intervention",
      featured_image_url: "/planning-3d.png",
      reading_time_minutes: 6,
      published_at: "2026-06-01"
    },
    {
      id: "p2",
      title: "Extraction des dents de sagesse : 5 conseils pour une cicatrisation optimale",
      slug: "conseils-dents-de-sagesse",
      category: "conseil",
      featured_image_url: "/cabinet.png",
      reading_time_minutes: 4,
      published_at: "2026-05-20"
    },
    {
      id: "p3",
      title: "L'apport de la planification numérique 3D en chirurgie faciale",
      slug: "precision-3d",
      category: "cas_clinique",
      featured_image_url: "/planning-3d.png",
      reading_time_minutes: 5,
      published_at: "2026-05-15"
    }
  ]
};
