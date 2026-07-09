import React from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { floraData } from '@/lib/constants';
import { reviews } from '@/lib/reviews';
import { seo } from '@/lib/seo';

export default function ReviewCarousel() {
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@graph': reviews.map(r => ({
      '@type': 'Review',
      '@id': `${seo.baseUrl}/#review-${r.id}`,
      author: { '@type': 'Person', name: r.author },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: r.text,
      datePublished: r.date,
      itemReviewed: { '@type': 'Physician', '@id': `${seo.baseUrl}/#physician` }
    }))
  };

  return (
    <div className="w-full overflow-hidden bg-white/40 py-32 border-y border-[#E8DFD1]/60">
      <script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <div className="mx-auto max-w-7xl px-6 mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-[#A67A3D]">
            <div className="h-px w-12 bg-[#C5A065]/40" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em]">Confiance & Réassurance</span>
          </div>
          <h2 className="font-lora text-[clamp(32px,5vw,56px)] font-medium text-[#241F1A]">Ils partagent leur expérience</h2>
          <p className="max-w-xl text-sm leading-relaxed text-[#423C35]">
            Quelques témoignages de patients accompagnés au sein du GHRMSA Mulhouse.
          </p>
        </div>
        <div className="flex flex-col gap-3 rounded-2xl border border-[#E8DFD1] bg-white p-6 shadow-sm">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#A67A3D]">Expertise vérifiée</span>
          <ul className="space-y-1.5 text-sm text-[#423C35]">
            <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 flex-none text-[#0891B2]" /> Chirurgien Maxillo-Facial &amp; Stomatologue</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 flex-none text-[#0891B2]" /> {floraData.conventionnement}</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 flex-none text-[#0891B2]" /> N&deg; RPPS {floraData.rppsNumber}</li>
          </ul>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee group-hover:[animation-play-state:paused] flex gap-6 md:gap-12 whitespace-nowrap py-12 motion-reduce:animate-none motion-reduce:overflow-x-auto motion-reduce:snap-x motion-reduce:snap-mandatory motion-reduce:[scrollbar-width:none] motion-reduce:[&::-webkit-scrollbar]:hidden">
          {reviews.map((review) => (
            <div key={review.id} className="inline-block w-[85vw] md:w-[420px] whitespace-normal rounded-[2.5rem] border border-[#E8DFD1] bg-white p-8 md:p-10 shadow-sm transition-all duration-500 hover:shadow-2xl motion-reduce:shrink-0 motion-reduce:snap-start">
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#FAF9F6] border border-[#E8DFD1] flex items-center justify-center text-xs font-bold text-[#A67A3D]">{review.initials}</div>
                  <div>
                    <span className="text-sm font-bold text-[#241F1A]">{review.author}</span>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-[#A67A3D]">Témoignage patient</div>
                  </div>
                </div>
              </div>
              <p className="font-sans text-sm md:text-base leading-relaxed text-[#4A443D]">&quot;{review.text}&quot;</p>
              <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                <span>Témoignage</span>
                <span className="font-medium lowercase">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="animate-marquee group-hover:[animation-play-state:paused] flex gap-6 md:gap-12 whitespace-nowrap py-12 motion-reduce:hidden" aria-hidden="true">
          {reviews.map((review) => (
            <div key={review.id} className="inline-block w-[85vw] md:w-[420px] whitespace-normal rounded-[2.5rem] border border-[#E8DFD1] bg-white p-8 md:p-10 shadow-sm transition-all duration-500 hover:shadow-2xl">
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#FAF9F6] border border-[#E8DFD1] flex items-center justify-center text-xs font-bold text-[#A67A3D]">{review.initials}</div>
                  <div>
                    <span className="text-sm font-bold text-[#241F1A]">{review.author}</span>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-[#A67A3D]">Témoignage patient</div>
                  </div>
                </div>
              </div>
              <p className="font-sans text-sm md:text-base leading-relaxed text-[#4A443D]">&quot;{review.text}&quot;</p>
              <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                <span>Témoignage</span>
                <span className="font-medium lowercase">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
        <Link href="/contact" className="group flex items-center gap-3 rounded-full border border-[#C5A065]/30 bg-white px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#A67A3D] transition-all hover:bg-[#C5A065]/5">
          Prendre rendez-vous
        </Link>
        <a
          href="https://g.page/r/CLINIQUE_FLORA/review"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-full border border-[#0891B2]/30 bg-white px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0891B2] transition-all hover:bg-[#0891B2]/5"
        >
          Partager votre avis sur Google
        </a>
      </div>
    </div>
  );
}
