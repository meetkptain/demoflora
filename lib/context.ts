import { site } from './site';

export interface SiteContext {
  businessName: string;
  slug: string;
  contact: {
    address: string;
    phone: string;
    email: string;
  };
  theme: {
    heroImageUrl: string;
  };
}

export const floraContext: SiteContext = {
  businessName: site.businessName,
  slug: site.slug,
  contact: {
    address: site.hospital.address,
    phone: site.contact.phone,
    email: site.contact.email,
  },
  theme: {
    heroImageUrl: site.doctor.photoUrl,
  },
};
