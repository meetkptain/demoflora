'use client';

import React from 'react';
import MedicalHeader from '@/components/MedicalHeader';
import MedicalPublicPage from '@/components/MedicalPublicPage';
import MedicalFooter from '@/components/MedicalFooter';
import { floraContext, floraData } from '@/lib/constants';

export default function FloraStandaloneDemo() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": floraContext.businessName,
    "image": `https://dr-flora-jullian.fr${floraContext.theme.heroImageUrl}`,
    "medicalSpecialty": "MaxillofacialSurgery",
    "telephone": floraContext.contact.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "20 Avenue du Docteur René Laennec",
      "addressLocality": "Mulhouse",
      "postalCode": "68100",
      "addressCountry": "FR"
    },
    "hospitalAffiliation": {
      "@type": "Hospital",
      "name": "GHRMSA Mulhouse"
    },
    "identifier": floraData.rppsNumber,
    "openingHours": [
      "Mo-Th 08:30-16:30",
      "Fr 08:30-12:00"
    ]
  };

  return (
    <main className="theme-medical">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MedicalHeader context={floraContext} data={floraData} />
      <MedicalPublicPage context={floraContext} data={floraData} />
      <MedicalFooter context={floraContext} data={floraData} />
    </main>
  );
}
