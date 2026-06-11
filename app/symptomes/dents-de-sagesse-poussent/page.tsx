'use client';

import React from 'react';
import { ChevronLeft, Info, ArrowRight, HelpCircle, CheckCircle2 } from 'lucide-react';
import MedicalHeader from '@/components/MedicalHeader';
import MedicalFooter from '@/components/MedicalFooter';
import { floraContext, floraData } from '@/lib/constants';

export default function SymptomeDentsDeSagessePoussent() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Pousse des dents de sagesse",
      "description": "Symptômes liés à l'éruption des dents de sagesse : douleurs, gonflements ou déplacements dentaires.",
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Extraction des dents de sagesse"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Bilan radiologique panoramique"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Accueil",
          "item": "https://dr-flora-jullian.fr"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Symptômes",
          "item": "https://dr-flora-jullian.fr/symptomes"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dents de sagesse qui poussent",
          "item": "https://dr-flora-jullian.fr/symptomes/dents-de-sagesse-poussent"
        }
      ]
    }
  ];

  return (
    <main className="theme-medical">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MedicalHeader context={floraContext} data={floraData} />
      
      <div className="relative min-h-screen bg-[#FAF9F6] text-[#2F2A24] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] bg-precision-grid" />
        <div className="pointer-events-none absolute inset-0 z-0 bg-noise opacity-[0.4]" />

        <section className="relative pt-40 pb-24 px-6 z-10">
          <div className="max-w-5xl mx-auto">
            <nav className="mb-12">
              <a href="/" className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#A67A3D] hover:text-[#241F1A]">
                <ChevronLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                Retour
              </a>
            </nav>
            
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#0891B2]/20 bg-[#0891B2]/5 px-5 py-2 text-[#0891B2]">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Évolution Dentaire</span>
              </div>
              <h1 className="font-lora text-[clamp(40px,6vw,72px)] font-medium leading-[1] text-[#241F1A]">Mes dents de sagesse <br /> <span className="opacity-60 italic">poussent à Mulhouse : que surveiller ?</span></h1>
              <p className="text-xl text-[#5A534A] max-w-2xl leading-relaxed">
                L&apos;éruption des dents de sagesse s&apos;accompagne souvent d&apos;interrogations. Le Dr Jullian vous accompagne au GHRMSA de Mulhouse pour un bilan complet.
              </p>
            </div>
          </div>
        </section>

        <section className="relative z-10 max-w-5xl mx-auto px-6 py-24 space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="font-lora text-4xl font-medium text-[#241F1A]">Signes fréquents</h2>
              <div className="space-y-4">
                {[
                  "Gêne ou tension au fond de la mâchoire",
                  "Léger gonflement de la gencive",
                  "Sensibilité à la mastication",
                  "Impression que les autres dents se déplacent"
                ].map((s, i) => (
                  <div key={i} className="flex gap-4 items-center p-4 rounded-2xl bg-white border border-[#E8DFD1]">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A065]" />
                    <span className="text-sm text-[#5A534A]">{s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-10 rounded-[3rem] border border-[#E8DFD1] bg-[#FAF6F0] space-y-6">
              <div className="flex items-center gap-3 text-[#241F1A]"><HelpCircle className="w-6 h-6" /><h3 className="text-[10px] font-bold uppercase tracking-widest">Le bon moment ?</h3></div>
              <p className="text-sm text-[#5A534A] leading-relaxed">
                L&apos;extraction n&apos;est pas systématique. Elle est recommandée lorsque la place est insuffisante, qu&apos;une infection survient ou pour protéger le résultat d&apos;un traitement orthodontique.
              </p>
              <div className="pt-4">
                <a href="/services/dents-de-sagesse" className="text-[10px] font-bold uppercase tracking-widest text-[#0891B2] flex items-center gap-2 hover:gap-3 transition-all">
                  Voir le protocole d&apos;extraction <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="p-12 rounded-[3rem] border border-[#E8DFD1] bg-white space-y-12">
             <div className="max-w-2xl mx-auto text-center space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A67A3D]">Recommandation</span>
                <h3 className="font-lora text-3xl font-medium text-[#241F1A]">Le bilan radiologique</h3>
                <p className="text-sm text-[#5A534A]">
                  Seule une radiographie panoramique dentaire permet de visualiser la position des dents de sagesse et de décider de la conduite à tenir.
                </p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#0891B2]/5 flex items-center justify-center flex-shrink-0 text-[#0891B2]">1</div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-sm text-[#241F1A]">Consulter votre dentiste</h4>
                    <p className="text-xs text-[#5A534A]">Pour un premier examen de contrôle et la prescription d&apos;une radio.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#0891B2]/5 flex items-center justify-center flex-shrink-0 text-[#0891B2]">2</div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-sm text-[#241F1A]">Prendre RDV avec le Chirurgien</h4>
                    <p className="text-xs text-[#5A534A]">Si une <a href="/services/dents-de-sagesse" className="text-[#0891B2] hover:underline">extraction</a> est envisagée, pour planifier l&apos;intervention en milieu hospitalier.</p>
                  </div>
                </div>
             </div>
          </div>

          <div className="text-center pt-12">
             <a href={`tel:${floraContext.contact.phone}`} className="inline-flex items-center gap-4 rounded-full bg-[#241F1A] px-12 py-6 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#0891B2] shadow-xl">
               Prendre RDV pour un bilan
             </a>
          </div>
        </section>
      </div>

      <MedicalFooter context={floraContext} data={floraData} />
    </main>
  );
}
