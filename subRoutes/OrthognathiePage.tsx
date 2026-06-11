import React from 'react';
import Image from 'next/image';
import { ChevronLeft, Clock, Activity, ArrowRight } from 'lucide-react';
import { SiteContext, MedicalData } from '../lib/types';

interface Props {
  slug: string;
  context: SiteContext;
  data?: MedicalData | null;
}

export default function OrthognathiePage({ slug, context }: Props) {
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
                <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Chirurgie Correctrice</span>
              </div>
              <h1 className="font-lora text-[clamp(40px,6vw,72px)] font-medium leading-[1] text-[#241F1A]">Chirurgie <br /> Orthognathique</h1>
              <p className="text-lg text-[#5A534A] max-w-xl leading-relaxed">Restauration de l&apos;équilibre fonctionnel et de l&apos;harmonie faciale par la correction des décalages de mâchoires.</p>
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
            <div className="flex items-center gap-4"><div className="h-px w-12 bg-[#C5A065]/40"/><span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A67A3D]">Expertise Hospitalière</span></div>
            <h2 className="font-lora text-4xl font-medium text-[#241F1A]">Une approche globale</h2>
            <p className="text-sm text-[#5A534A]">Correction des anomalies de position des mâchoires au sein du GHRMSA Mulhouse.</p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
             <div className="p-8 rounded-[2.5rem] border border-[#E8DFD1] bg-white space-y-4">
                <h4 className="font-lora text-lg font-medium">Bénéfices Fonctionnels</h4>
                <ul className="space-y-2 text-xs text-[#5A534A]">
                  <li>• Mastication efficace</li>
                  <li>• Respiration améliorée</li>
                </ul>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
