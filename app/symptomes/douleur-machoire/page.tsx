'use client';

import React from 'react';
import { ChevronLeft, AlertTriangle, ArrowRight, Info, HelpCircle } from 'lucide-react';
import MedicalHeader from '@/components/MedicalHeader';
import MedicalFooter from '@/components/MedicalFooter';
import { floraContext, floraData } from '@/lib/constants';

export default function SymptomeDouleurMachoire() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Douleur à la mâchoire",
      "description": "Douleurs, craquements ou blocages au niveau de l'articulation temporo-mandibulaire (ATM).",
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Traitement des troubles de l'ATM"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Gouttière occlusale"
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
          "name": "Douleur Mâchoire",
          "item": "https://dr-flora-jullian.fr/symptomes/douleur-machoire"
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
              <div className="inline-flex items-center gap-3 rounded-full border border-[#EA4335]/20 bg-[#EA4335]/5 px-5 py-2 text-[#EA4335]">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Symptôme</span>
              </div>
              <h1 className="font-lora text-[clamp(40px,6vw,72px)] font-medium leading-[1] text-[#241F1A]">Douleur à la mâchoire à Mulhouse : <br /> <span className="opacity-60 italic">que faire ?</span></h1>
              <p className="text-xl text-[#5A534A] max-w-2xl leading-relaxed">
                Une douleur à la mâchoire peut être handicapante au quotidien. Comprendre son origine est la première étape vers le soulagement au cabinet du Dr Jullian à Mulhouse.
              </p>
            </div>
          </div>
        </section>

        <section className="relative z-10 max-w-5xl mx-auto px-6 py-24 space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="p-10 rounded-[3rem] border border-[#E8DFD1] bg-white space-y-6">
              <div className="flex items-center gap-3 text-[#0891B2]">
                <HelpCircle className="w-6 h-6" />
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#241F1A]">Causes Possibles</h3>
              </div>
              <ul className="space-y-4 text-sm text-[#5A534A]">
                <li className="flex gap-3"><span>•</span> Stress ou anxiété (bruxisme)</li>
                <li className="flex gap-3"><span>•</span> <a href="/services/douleur-machoire" className="text-[#0891B2] hover:underline">Troubles de l&apos;articulation (ATM)</a></li>
                <li className="flex gap-3"><span>•</span> Problème dentaire ou dent de sagesse</li>
                <li className="flex gap-3"><span>•</span> Traumatisme ancien ou récent</li>
              </ul>
            </div>

            <div className="p-10 rounded-[3rem] border border-[#EA4335]/20 bg-[#FAF6F0] space-y-6">
              <div className="flex items-center gap-3 text-[#EA4335]">
                <AlertTriangle className="w-6 h-6" />
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#241F1A]">Quand consulter ?</h3>
              </div>
              <p className="text-sm text-[#5A534A] leading-relaxed">
                Il est recommandé de prendre rendez-vous si :
              </p>
              <ul className="space-y-3 text-xs text-[#5A534A] font-medium">
                <li className="flex gap-2"><span>-</span> La douleur persiste plus d&apos;une semaine</li>
                <li className="flex gap-2"><span>-</span> Votre mâchoire se bloque ou "claque"</li>
                <li className="flex gap-2"><span>-</span> Vous avez des difficultés à ouvrir la bouche</li>
                <li className="flex gap-2"><span>-</span> La douleur irradie vers l&apos;oreille ou le cou</li>
                <li className="flex gap-2"><span>-</span> Un décalage des mâchoires est suspecté (nécessitant potentiellement une <a href="/services/orthognathie" className="text-[#0891B2] hover:underline">chirurgie orthognathique</a>)</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#241F1A] rounded-[3rem] p-12 text-white text-center space-y-8">
            <h2 className="font-lora text-3xl font-medium">Besoin d&apos;un diagnostic expert ?</h2>
            <p className="text-white/70 max-w-xl mx-auto">
              Le Dr Flora Jullian, spécialisée en chirurgie maxillo-faciale, peut identifier l&apos;origine précise de votre douleur.
            </p>
            <div className="pt-4">
              <a href="/services/douleur-machoire" className="inline-flex items-center gap-3 rounded-full bg-[#C5A065] px-10 py-5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-[#241F1A]">
                Découvrir la prise en charge <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </div>

      <MedicalFooter context={floraContext} data={floraData} />
    </main>
  );
}
