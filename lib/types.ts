export interface SiteContext {
  businessName: string;
  slug: string;
  contact: {
    address: string;
    phone: string;
    email: string;
  };
  theme: {
    heroImageUrl?: string;
    logoUrl?: string;
  };
}

export interface MedicalService {
  id: string;
  name: string;
  slug: string;
  description: string;
  category?: string;
  details?: string;
  recovery?: string;
  risks?: string[];
  timeline?: { day: string; event: string }[];
  feeMax?: number;
  isReimbursed?: boolean;
  anesthesia?: string;
  location?: string;
  stay?: string;
  fee?: number;
  brss?: number;
  faq?: { question: string; answer: string }[];
  relatedSymptoms?: string[];
  indications?: string[];
  outcome?: string;
  preparation?: string;
}

export interface MedicalSymptom {
  id: string;
  slug: string;
  title: string;
  headline: string;
  metaDescription: string;
  intro: string;
  causes: string[];
  consultSigns: string[];
  urgencyLevel: 'programmed' | 'soon' | 'urgent';
  category: 'dents-gencives' | 'machoire-atm' | 'visage-trauma' | 'chirurgie-cutanee' | 'glandes-cou';
  faq: { question: string; answer: string }[];
  relatedSymptoms?: string[];
  relatedIntervention?: {
    slug: string;
    label: string;
    description: string;
  };
}

export interface MedicalDoctor {
  id?: string;
  fullname: string;
  title: string;
  photoUrl?: string | null;
  qualifications?: string[];
  experience?: string[];
}

export interface MedicalPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  featured_image_url: string;
  reading_time_minutes: number;
  published_at: string;
}

export interface MedicalHour {
  day: string;
  open?: string;
  close?: string;
  closed?: boolean;
}

export interface MedicalData {
  rppsNumber?: string;
  conventionnement?: string;
  slogan?: string;
  doctors: MedicalDoctor[];
  services: MedicalService[];
  hours: MedicalHour[];
  advocacy?: {
    mission: string;
    tips: { id: string; title: string; content: string; }[];
  };
  posts?: MedicalPost[];
}
