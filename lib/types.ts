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
}

export interface MedicalDoctor {
  id?: string;
  fullname: string;
  title: string;
  photoUrl?: string | null;
  qualifications?: string[];
  experience?: string[];
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
  posts?: any[];
}
