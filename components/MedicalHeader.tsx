'use client';

import React from 'react';
import { Stethoscope, Clock, FileText, Menu, X } from 'lucide-react';
import { SiteContext } from '../lib/types';

interface Props {
  context: SiteContext;
  data?: any;
}

export default function MedicalHeader({ context }: Props) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileOpen] = React.useState(false);
  const slug = context.slug;

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Expertise', href: '/#expertise' },
    { label: 'Symptômes', href: '/#symptomes' },
    { label: 'À Propos', href: '/a-propos' },
    { label: 'Journal', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-[100] border-b transition-all duration-500 ${
        isScrolled
          ? 'border-[#E8DFD1]/80 bg-[#FAF9F6] shadow-[0_10px_40px_rgba(0,0,0,0.03)]'
          : 'border-[#E8DFD1]/40 bg-[#FAF9F6]'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <div className="flex items-center gap-3">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#C5A065]/30 bg-[#C5A065]/8 text-[#A67A3D] shadow-sm">
              <Stethoscope className="h-5 w-5" />
            </div>
            <div>
              <span className="block font-lora text-base font-semibold leading-tight tracking-wide text-[#241F1A]">
                {context.businessName}
              </span>
              <span className="mt-0.5 block text-[9px] font-bold uppercase tracking-[0.28em] text-[#A67A3D]">
                Chirurgien Maxillo-Facial — Unité Hospitalière Mulhouse
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#5A534A] hover:text-[#241F1A] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-8">
          <a href={`tel:${context.contact.phone}`} className="group flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0891B2]/5 text-[#0891B2] transition-colors group-hover:bg-[#0891B2] group-hover:text-white border border-[#0891B2]/10">
              <Clock className="h-4 w-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#A67A3D]">Secrétariat</span>
              <span className="text-sm font-bold text-[#241F1A]">{context.contact.phone}</span>
            </div>
          </a>
        </div>

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
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FAF9F6] border-t border-[#E8DFD1]/60 p-6 space-y-6">
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
    </header>
  );
}
