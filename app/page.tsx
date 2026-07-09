import React from 'react';
import { Metadata } from 'next';
import MedicalHeader from '@/components/MedicalHeader';
import MedicalPublicPage from '@/components/MedicalPublicPage';
import MedicalFooter from '@/components/MedicalFooter';
import { floraContext, floraData } from '@/lib/constants';
import { seo } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Dr Flora Jullian - Chirurgien Maxillo-Facial & Stomatologue | GHRMSA Mulhouse',
  description: 'Cabinet de chirurgie maxillo-faciale du Dr Flora Jullian au GHRMSA Mulhouse. Expertise en chirurgie orthognathique, dents de sagesse, rhinoplastie, esthétique faciale et dermatochirurgie. Praticienne hospitalière, secteur 2 OPTAM.',
  alternates: {
    canonical: seo.baseUrl,
  },
};

export default function FloraStandaloneDemo() {
  return (
    <main className="theme-medical">
      <MedicalHeader context={floraContext} data={floraData} />
      <MedicalPublicPage context={floraContext} data={floraData} />
      <MedicalFooter context={floraContext} data={floraData} />
    </main>
  );
}
