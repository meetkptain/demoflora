

import React from 'react';
import { ChevronLeft, ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react';
import PatientTimeline from '@/components/PatientTimeline';
import { SiteContext } from "@/lib/types";
import { MedicalData } from "@/lib/types";

export default function ParcoursPage({ context, data }: { context: SiteContext; data: MedicalData }) {
  return (
    <div className="theme-medical">
      <div className="relative min-h-screen bg-[#FAF9F6] text-[#2F2A24] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] bg-precision-grid" />
        <div className="pointer-events-none absolute inset-0 z-0 bg-noise opacity-[0.4]" />

        <section className="relative pt-40 pb-24 px-6 z-10 border-b border-[#E8DFD1]/60">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#C5A065]/20 bg-[#C5A065]/5 px-5 py-2 text-[#A67A3D]">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Accompagnement</span>
            </div>
            <h1 className="font-lora text-[clamp(48px,8vw,96px)] font-medium leading-[0.9] tracking-tight text-[#241F1A]">Votre Parcours <br /> <span className="opacity-40 italic">de Soins</span></h1>
            <p className="text-xl text-[#5A534A] max-w-2xl mx-auto leading-relaxed">
              De la première consultation au suivi post-opératoire, nous vous accompagnons à chaque étape pour une prise en charge sereine et sécurisée.
            </p>
          </div>
        </section>

        <section className="relative z-10 max-w-7xl mx-auto px-6 py-32 space-y-48">
          
          <div className="max-w-5xl mx-auto space-y-24">
             <div className="text-center space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A67A3D]">Méthodologie</span>
                <h2 className="font-lora text-4xl font-medium text-[#241F1A]">Une organisation hospitalière rigoureuse</h2>
             </div>
             
             <div className="rounded-[3rem] border border-[#E8DFD1] bg-white p-12 shadow-sm">
                <PatientTimeline />
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
             <div className="space-y-8">
                <div className="flex items-center gap-4"><div className="h-px w-12 bg-[#0891B2]/40"/><span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0891B2]">Praticité</span></div>
                <h2 className="font-lora text-4xl font-medium text-[#241F1A]">Documents utiles</h2>
                <p className="text-sm text-[#5A534A] leading-relaxed">
                  Pour votre première consultation, pensez à apporter les documents suivants afin de faciliter votre prise en charge :
                </p>
                <ul className="space-y-4">
                  {[
                    "Courrier de votre médecin ou dentiste",
                    "Radiographies et examens récents",
                    "Carte Vitale à jour",
                    "Liste de vos traitements en cours"
                  ].map((doc, i) => (
                    <li key={i} className="flex gap-4 items-center text-sm text-[#241F1A]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C5A065]" />
                      {doc}
                    </li>
                  ))}
                </ul>
             </div>
             <div className="p-12 rounded-[3rem] bg-[#FAF6F0] border border-[#E8DFD1] space-y-8">
                <div className="flex items-center gap-4 text-[#A67A3D]"><Clock /><h4 className="text-[10px] font-bold uppercase tracking-widest">Temps d&apos;attente</h4></div>
                <p className="text-sm text-[#5A534A] leading-relaxed italic">
                  "En milieu hospitalier, les urgences chirurgicales peuvent parfois impacter les horaires de consultation. Nous vous remercions par avance pour votre compréhension."
                </p>
                <div className="pt-4 border-t border-[#E8DFD1]">
                  <div className="flex items-center gap-4 text-[#0891B2] mb-4"><MapPin /><h4 className="text-[10px] font-bold uppercase tracking-widest">Lieu de RDV</h4></div>
                  <p className="text-sm text-[#241F1A] font-medium">{context.contact.address}</p>
                </div>
             </div>
          </div>

          <div className="bg-[#241F1A] rounded-[4rem] p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
                <div className="w-full h-full bg-precision-grid" />
            </div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="font-lora text-5xl font-medium leading-tight text-white">Prêt à débuter <br /> votre parcours ?</h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  Notre secrétariat est à votre disposition pour planifier votre première consultation et répondre à vos questions administratives.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <a href={`tel:${context.contact.phone}`} className="flex items-center justify-between gap-4 rounded-full bg-white px-10 py-6 text-xs font-bold uppercase tracking-[0.2em] text-[#241F1A] transition-all hover:bg-[#C5A065] hover:text-white">
                  Contacter le secrétariat <ArrowRight className="h-5 w-5" />
                </a>
                <div className="flex items-center gap-4 px-4 text-[#C5A065]">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Accréditation GHRMSA Mulhouse</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
