import React from 'react';
import { Stethoscope, Clock } from 'lucide-react';
import { SiteContext } from '../lib/types';
import MobileMenu from './MobileMenu';
import HeaderScrollWrapper from './HeaderScrollWrapper';

interface Props {
  context: SiteContext;
  data?: any;
}

export default function MedicalHeader({ context }: Props) {
  const navItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Expertise', href: '/#expertise' },
    { label: 'Symptômes', href: '/#symptomes' },
    { label: 'À Propos', href: '/a-propos' },
    { label: 'Journal', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <HeaderScrollWrapper>
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
              <span className="mt-0.5 block text-[9px] font-bold uppercase tracking-[0.2em] text-[#A67A3D]">
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

        <MobileMenu context={context} navItems={navItems} />
      </div>
    </HeaderScrollWrapper>
  );
}
