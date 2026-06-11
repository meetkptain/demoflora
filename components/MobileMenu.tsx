'use client';

import React from 'react';
import { Menu, X, Clock, FileText } from 'lucide-react';
import { SiteContext } from '../lib/types';

interface Props {
  context: SiteContext;
  navItems: { label: string; href: string }[];
}

export default function MobileMenu({ context, navItems }: Props) {
  const [mobileMenuOpen, setMobileOpen] = React.useState(false);

  return (
    <>
      <div className="flex items-center gap-3">
        <a
          href={`tel:${context.contact.phone}`}
          className="inline-flex items-center gap-2 rounded-full bg-[#241F1A] px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#0891B2] shadow-lg shadow-[#0891B2]/10 lg:hidden"
        >
          <Clock className="h-3.5 w-3.5" />
          Appeler
        </a>
        
        <button 
          onClick={() => setMobileOpen(!mobileMenuOpen)}
          className="p-2 text-[#241F1A] xl:hidden"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-[80px] left-0 w-full xl:hidden bg-[#FAF9F6] border-b border-[#E8DFD1]/60 p-6 space-y-6 shadow-xl z-50">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-bold uppercase tracking-widest text-[#241F1A] border-b border-[#E8DFD1]/30 pb-4"
              >
                {item.label}
              </a>
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
          </div>
        </div>
      )}
    </>
  );
}
