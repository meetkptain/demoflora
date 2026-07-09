'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ServiceFAQ({ faq }: { faq: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faq.map((item, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-2xl border border-[#E8DFD1] bg-white transition-all"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
            aria-expanded={open === i}
          >
            <span className="text-sm font-semibold text-[#241F1A] leading-snug">{item.question}</span>
            <ChevronDown
              className={`h-4 w-4 flex-shrink-0 text-[#A67A3D] transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
            />
          </button>
          <div
            className={`transition-all duration-300 ease-in-out ${open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
          >
            <p className="px-6 pb-5 text-sm leading-relaxed text-[#423C35]">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
