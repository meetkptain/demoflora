import React from 'react';
import Image from 'next/image';
import { ChevronLeft, Clock, AlertTriangle, ArrowRight } from 'lucide-react';
import { SiteContext, MedicalData } from '../lib/types';

interface Props {
  slug: string;
  context: SiteContext;
  data?: MedicalData | null;
}

export default function DentsDeSagessePage({ slug, context }: Props) {
  return (
    <div className="relative min-h-screen bg-[#FAF9F6] text-[#2F2A24] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] bg-precision-grid" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-noise opacity-[0.4]" />

      <section className="relative pt-32 pb-24 px-6 border-b border-[#E8DFD1]/60 z-10">
        <div className="max-w-5xl mx-auto">
          <a href="#" className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#A67A3D] hover:text-[#241F1A] mb-12">
            <ChevronLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            Retour au pôle clinique
          </a>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-end">
            <div className="lg:col-span-8 space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#C5A065]/20 bg-[#C5A065]/5 px-5 py-2 text-[#A67A3D]">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Expertise Hospitalière</span>
              </div>
              <h1 className="font-lora text-[clamp(40px,6vw,72px)] font-medium leading-[1] text-[#241F1A]">Extraction des <br /> dents de sagesse</h1>
              <p className="text-lg text-[#5A534A] max-w-xl leading-relaxed">Avulsion chirurgicale réalisée exclusivement en milieu hospitalier sécurisé (GHRMSA).</p>
            </div>
            <div className="lg:col-span-4">
              <a href={`tel:${context.contact.phone}`} className="group flex items-center justify-between w-full rounded-full bg-[#241F1A] px-10 py-6 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#0891B2]">
                RDV Secrétariat <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 max-w-5xl mx-auto px-6 py-32 space-y-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-4"><div className="h-px w-12 bg-[#C5A065]/40"/><span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A67A3D]">Indication</span></div>
            <h2 className="font-lora text-4xl font-medium text-[#241F1A]">Pourquoi les extraire ?</h2>
            <p className="text-sm text-[#5A534A]">Prévention des infections et kystes. Intervention sécurisée au sein du plateau technique du GHRMSA Mulhouse.</p>
          </div>
          <div className="lg:col-span-7 p-10 rounded-[3rem] border border-[#E8DFD1] bg-white space-y-8 shadow-sm">
              <div className="flex items-center gap-3"><Clock className="text-[#0891B2]" /><h3 className="text-[10px] font-bold uppercase tracking-widest text-[#241F1A]">Protocole Hospitalier</h3></div>
              <div className="space-y-6">
                <div className="flex gap-4"><span className="text-[10px] font-black text-[#C5A065] opacity-40">01</span><div className="space-y-1"><h4 className="text-sm font-bold text-[#241F1A] uppercase tracking-wider">Planification</h4><p className="text-xs text-[#5A534A]">Analyse 3D au pôle hospitalier.</p></div></div>
                <div className="flex gap-4"><span className="text-[10px] font-black text-[#C5A065] opacity-40">02</span><div className="space-y-1"><h4 className="text-sm font-bold text-[#241F1A] uppercase tracking-wider">Anesthésie</h4><p className="text-xs text-[#5A534A]">Milieu hospitalier sécurisé.</p></div></div>
              </div>
          </div>
        </div>

        <div className="p-10 rounded-[3rem] border border-[#E8DFD1] bg-[#FAF6F0] space-y-6">
          <div className="flex items-center gap-3 text-[#EA4335]"><AlertTriangle /><h3 className="text-[10px] font-bold uppercase tracking-widest">Signaux d&apos;alerte</h3></div>
          <p className="text-xs text-[#5A534A]">En cas de douleur non calmée ou saignement, contactez le secrétariat au {context.contact.phone}.</p>
        </div>
      </section>
    </div>
  );
}
