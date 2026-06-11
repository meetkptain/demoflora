'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  { question: "Comment se déroule la première consultation au GHRMSA ?", answer: "Diagnostic approfondi au pôle hospitalier, analyse imagerie et définition de la stratégie chirurgicale." },
  { question: "Dents de sagesse : est-ce douloureux ?", answer: "Intervention sous anesthésie hospitalière sécurisée, protocoles antalgiques modernes pour un confort total." },
  { question: "Où se déroulent les interventions ?", answer: "Exclusivement au bloc opératoire du GHRMSA pour une sécurité anesthésique et chirurgicale maximale." }
];

export default function MedicalFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  return (
    <section id="faq" className="px-6 py-32 bg-[#FAF9F6]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="space-y-6">
          <div className="flex items-center gap-4"><div className="h-px w-12 bg-[#C5A065]/40"/><span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A67A3D]">FAQ</span></div>
          <h2 className="font-lora text-4xl font-medium text-[#241F1A]">Questions fréquentes</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className={`rounded-[2rem] border transition-all ${openIndex === i ? 'bg-white border-[#C5A065]/30 shadow-xl' : 'border-[#E8DFD1]/60'}`}>
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between p-8 text-left">
                <span className="font-lora text-lg font-medium text-[#241F1A]">{f.question}</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && <div className="px-8 pb-8 text-sm text-[#5A534A] leading-relaxed">{f.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
