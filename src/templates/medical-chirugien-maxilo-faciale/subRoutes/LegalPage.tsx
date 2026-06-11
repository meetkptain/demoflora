

import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { SiteContext } from "@/lib/types";
import { MedicalData } from "@/lib/types";

export default function LegalPage({ context, data }: { context: SiteContext; data: MedicalData }) {
  return (
    <div className="theme-medical">
      <div className="relative min-h-screen bg-[#FAF9F6] text-[#2F2A24] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] bg-precision-grid" />
        <div className="pointer-events-none absolute inset-0 z-0 bg-noise opacity-[0.4]" />

        <section className="relative pt-40 pb-24 px-6 z-10 border-b border-[#E8DFD1]/60">
          <div className="max-w-4xl mx-auto">
            <nav className="mb-12">
              <a href={`/${context.slug}`} className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#A67A3D] hover:text-[#241F1A]">
                <ChevronLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                Retour
              </a>
            </nav>
            <h1 className="font-lora text-6xl font-medium tracking-tight text-[#241F1A]">Mentions <span className="opacity-40 italic">Légales</span></h1>
          </div>
        </section>

        <section className="relative z-10 max-w-4xl mx-auto px-6 py-24">
          <div className="prose prose-stone max-w-none text-[#5A534A] space-y-16">
            
            <div className="space-y-6">
              <h2 className="font-lora text-3xl text-[#241F1A] border-b border-[#E8DFD1] pb-4">1. Présentation du site</h2>
              <p className="text-sm leading-relaxed">
                En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
              </p>
              <ul className="text-sm space-y-2">
                <li><strong>Propriétaire :</strong> {context.businessName} - {context.contact.address}</li>
                <li><strong>RPPS :</strong> {data.rppsNumber}</li>
                <li><strong>Responsable publication :</strong> {context.businessName}</li>
                <li><strong>Hébergeur :</strong> Vercel Inc. – 340 S Lemon Ave #4133 Walnut, CA 91789, USA</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="font-lora text-3xl text-[#241F1A] border-b border-[#E8DFD1] pb-4">2. Conditions générales d’utilisation</h2>
              <p className="text-sm leading-relaxed">
                L’utilisation du site implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="font-lora text-3xl text-[#241F1A] border-b border-[#E8DFD1] pb-4">3. Protection des données personnelles (RGPD)</h2>
              <p className="text-sm leading-relaxed">
                Les informations recueillies via le secrétariat téléphonique ou lors des consultations font l'objet d'un traitement informatique destiné à la gestion de votre dossier médical. Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.
              </p>
              <p className="text-sm leading-relaxed">
                Pour toute demande relative à vos données personnelles, vous pouvez contacter le secrétariat à l'adresse email suivante : {context.contact.email}.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="font-lora text-3xl text-[#241F1A] border-b border-[#E8DFD1] pb-4">4. Transparence Tarifaire (Secteur 2)</h2>
              <p className="text-sm leading-relaxed">
                Le {context.businessName} exerce en <strong>Secteur 2 avec adhésion à l'OPTAM</strong> (Option Pratique Tarifaire Maîtrisée). Des dépassements d'honoraires maîtrisés peuvent être pratiqués. 
              </p>
              <p className="text-sm leading-relaxed">
                Conformément à la législation, un <strong>devis pré-opératoire détaillé</strong> vous sera systématiquement remis avant toute intervention chirurgicale, afin que vous puissiez interroger votre mutuelle complémentaire sur les modalités de prise en charge. Les tarifs des consultations de suivi ou d'urgence sont affichés en salle d'attente.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="font-lora text-3xl text-[#241F1A] border-b border-[#E8DFD1] pb-4">5. Déontologie médicale</h2>
              <p className="text-sm leading-relaxed">
                Ce site est destiné à l'information du public. Il ne remplace en aucun cas une consultation médicale. Le {context.businessName} s'engage à respecter les principes du Code de Déontologie Médicale et les recommandations de l'Ordre National des Médecins concernant l'information sur le web.
              </p>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}
