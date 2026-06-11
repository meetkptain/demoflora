import React from 'react';
import { Star, CheckCircle2, ExternalLink } from 'lucide-react';

const reviews = [
  { id: '1', author: 'Sophie M.', initials: 'SM', text: "Une prise en charge d'une humanité rare. Le Dr Jullian a su me rassurer sur une intervention complexe avec une précision remarquable.", date: 'Mai 2026' },
  { id: '2', author: 'Jean-Christophe L.', initials: 'JL', text: "Résultat au-delà de mes espérances pour ma chirurgie orthognathique. Le suivi post-opératoire est exemplaire.", date: 'Avril 2026' },
  { id: '3', author: 'Amélie D.', initials: 'AD', text: "Pôle de consultation magnifique, calme et apaisant. On sent l'expertise hospitalière dès l'accueil.", date: 'Juin 2026' },
  { id: '4', author: 'Marc O.', initials: 'MO', text: "Extraction de dents de sagesse sans aucune douleur au GHRMSA. Les consignes étaient claires, récupération rapide.", date: 'Février 2026' }
];

export default function ReviewCarousel() {
  return (
    <div className="w-full overflow-hidden bg-white/40 py-32 border-y border-[#E8DFD1]/60">
      <div className="mx-auto max-w-7xl px-6 mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-[#A67A3D]">
            <div className="h-px w-12 bg-[#C5A065]/40" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Confiance & Rassurance</span>
          </div>
          <h2 className="font-lora text-[clamp(32px,5vw,56px)] font-medium text-[#241F1A]">L'expérience de nos patients</h2>
        </div>
        <div className="flex items-center gap-6 rounded-2xl border border-[#E8DFD1] bg-white p-6 shadow-sm">
          <div className="flex flex-col">
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-[#C5A065] text-[#C5A065]" />)}
            </div>
            <span className="text-xl font-bold text-[#241F1A]">4.9/5</span>
          </div>
          <div className="h-10 w-px bg-[#E8DFD1]" />
          <div className="flex flex-col justify-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#A67A3D]">Basé sur</span>
            <span className="text-sm font-semibold text-[#5A534A]">120+ avis Google</span>
          </div>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee flex gap-6 md:gap-12 whitespace-nowrap py-12">
          {[...reviews, ...reviews].map((review, idx) => (
            <div key={`${review.id}-${idx}`} className="inline-block w-[85vw] md:w-[420px] whitespace-normal rounded-[2.5rem] border border-[#E8DFD1] bg-white p-8 md:p-10 shadow-sm transition-all duration-500 hover:shadow-2xl">
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#FAF9F6] border border-[#E8DFD1] flex items-center justify-center text-xs font-bold text-[#A67A3D]">{review.initials}</div>
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-[#C5A065] text-[#C5A065]" />)}
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-[#241F1A]">{review.author}</span>
                        <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[8px] font-bold text-emerald-700 border border-emerald-100">
                          <CheckCircle2 className="h-2 w-2" /> Vérifié
                        </div>
                    </div>
                  </div>
                </div>
                <div className="flex h-6 w-6 shrink-0"><svg viewBox="0 0 24 24" className="h-full w-full"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c1.61-3.21 3.57-7.24 3.57-11.24z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg></div>
              </div>
              <p className="font-sans text-sm md:text-base leading-relaxed text-[#4A443D]">"{review.text}"</p>
              <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <span>Google Maps</span>
                <span className="font-medium lowercase">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
        <button className="group flex items-center gap-3 rounded-full border border-[#E8DFD1] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#241F1A] transition-all hover:bg-[#FAF9F6]">
          Consulter tous les avis <ExternalLink className="h-3 w-3" />
        </button>
        <button className="group flex items-center gap-3 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A67A3D]">
          Laissez votre témoignage
        </button>
      </div>
    </div>
  );
}
