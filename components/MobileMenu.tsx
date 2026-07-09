'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Clock, FileText, Star } from 'lucide-react';
import { SiteContext } from '../lib/types';

interface Props {
  context: SiteContext;
  navItems: { label: string; href: string }[];
}

export default function MobileMenu({ context, navItems }: Props) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <div className="flex items-center gap-3">
        <a
          href={`tel:${context.contact.phone}`}
          className="inline-flex items-center gap-2 rounded-full bg-[#241F1A] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#0891B2] shadow-lg shadow-[#0891B2]/10 lg:hidden"
        >
          <Clock className="h-3.5 w-3.5" />
          Appeler
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="p-2 text-[#241F1A] lg:hidden"
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 top-[72px] z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className={`absolute top-[72px] left-0 w-full lg:hidden bg-[#FAF9F6] border-b border-[#E8DFD1]/60 p-6 space-y-6 shadow-xl z-50 transition-all duration-300 origin-top ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
      >
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm font-bold uppercase tracking-widest text-[#241F1A] border-b border-[#E8DFD1]/30 pb-4"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="space-y-4 pt-4">
          <a href={`tel:${context.contact.phone}`} className="flex items-center gap-4 text-[#241F1A]">
            <Clock className="h-5 w-5 text-[#0891B2]" />
            <span className="text-sm font-bold">{context.contact.phone}</span>
          </a>
          <a href={`mailto:${context.contact.email}`} className="flex items-center gap-4 text-[#241F1A]">
            <FileText className="h-5 w-5 text-[#C5A065]" />
            <span className="text-sm font-bold">{context.contact.email}</span>
          </a>
          <div className="pt-2">
            <a
              href="https://g.page/r/CLINIQUE_FLORA/review"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 rounded-full border border-[#E8DFD1] bg-white px-3.5 py-2 text-[11px] font-bold uppercase tracking-wider text-[#423C35] transition-all"
            >
              <span className="flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#FAF9F6] text-[10px] font-black text-[#4285F4] border border-[#E8DFD1]">G</span>
              <span>Avis Google</span>
              <span className="flex items-center gap-0.5 text-[#A67A3D] font-bold">
                4.9
                <Star className="h-3 w-3 fill-current text-[#A67A3D]" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
