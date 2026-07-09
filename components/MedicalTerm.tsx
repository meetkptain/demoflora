'use client';

import React, { useState, useEffect } from 'react';
import { HelpCircle, X } from 'lucide-react';
import { medicalGlossary } from '@/lib/constants';

interface Props {
  termKey: string;
  children: React.ReactNode;
}

export default function MedicalTerm({ termKey, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const data = medicalGlossary[termKey];

  if (!data) {
    return <>{children}</>;
  }

  return (
    <>
      <span
        onClick={(e) => {
          if (isMobile) {
            e.preventDefault();
            e.stopPropagation();
            setIsOpen(true);
          }
        }}
        className="relative inline-flex items-center gap-0.5 border-b border-dashed border-[#A67A3D]/60 hover:border-[#0891B2] text-[#241F1A] cursor-help transition-colors group/term font-medium"
      >
        {children}
        <HelpCircle className="w-3 h-3 text-[#A67A3D]/80 group-hover/term:text-[#0891B2] transition-colors" />

        {/* Desktop Tooltip (visible only on hover on md+) */}
        {!isMobile && (
          <span className="pointer-events-none absolute bottom-full left-1/2 z-[150] mb-3 w-72 -translate-x-1/2 rounded-2xl border border-[#E8DFD1] bg-white p-4 text-left shadow-xl opacity-0 transition-opacity duration-200 group-hover/term:opacity-100 group-hover/term:pointer-events-auto">
            <span className="block font-lora text-sm font-bold text-[#241F1A] mb-1">{data.title}</span>
            <span className="block text-[11px] leading-relaxed text-[#423C35] font-normal">{data.definition}</span>
            <span className="absolute left-1/2 top-full h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border-r border-b border-[#E8DFD1] bg-white" />
          </span>
        )}
      </span>

      {/* Mobile Bottom Sheet Drawer */}
      {isMobile && isOpen && (
        <>
          {/* Backdrop Overlay */}
          <div
            onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
            className="fixed inset-0 z-[200] bg-black/40 backdrop-blur-xs transition-opacity duration-300"
          />
          {/* Bottom Sheet Panel */}
          <div className="fixed bottom-0 left-0 right-0 z-[210] rounded-t-[2.5rem] border-t border-[#E8DFD1] bg-white px-8 pt-10 pb-12 shadow-2xl transition-transform duration-300 translate-y-0">
            <div className="mx-auto mb-6 h-1.5 w-12 rounded-full bg-[#E8DFD1]" />
            <div className="flex items-start justify-between">
              <div className="space-y-2 text-left">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#A67A3D]">Lexique Patient</span>
                <h3 className="font-lora text-2xl font-medium text-[#241F1A]">{data.title}</h3>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FAF9F6] border border-[#E8DFD1] text-[#241F1A] hover:bg-[#0891B2]/10"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-[#423C35] text-left font-normal">
              {data.definition}
            </p>
          </div>
        </>
      )}
    </>
  );
}
