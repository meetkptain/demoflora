import React from 'react';
import Image from 'next/image';
import { Clock, ArrowLeft, Calendar, User, ChevronRight, FileText, Phone } from 'lucide-react';
import { SiteContext } from '../lib/types';

export default async function BlogRenderer({ slug, context }: { slug: string, context: SiteContext }) {
  return (
    <div className="relative min-h-screen bg-[#FAF9F6] overflow-hidden">
      <div className="relative py-32 px-6">
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] bg-precision-grid" />
        <div className="pointer-events-none absolute inset-0 z-0 bg-noise opacity-[0.4]" />

        <div className="max-w-6xl mx-auto space-y-24 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex justify-center items-center gap-4"><div className="h-px w-12 bg-[#C5A065]/40"/><span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A67A3D]">Blog & Savoir</span></div>
            <h1 className="font-lora text-[clamp(40px,6vw,72px)] font-medium text-[#241F1A]">Actualités & Fiches</h1>
            <p className="text-lg text-[#5A534A]">Conseils thérapeutiques et explications chirurgicales du Dr. Flora Jullian.</p>
          </div>
          <div className="rounded-[3rem] border border-dashed border-[#E8DFD1] p-24 bg-white/50">
             <p className="text-sm font-bold uppercase tracking-widest text-[#9B8B77]">Module de contenu autonome prêt</p>
          </div>
        </div>
      </div>
    </div>
  );
}
