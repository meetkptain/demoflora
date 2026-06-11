'use client';

import React from 'react';
import { Shield, MapPin, Phone, Mail } from 'lucide-react';
import { SiteContext } from '../lib/types';

interface Props {
  context: SiteContext;
  data?: any;
}

export default function MedicalFooter({ context }: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="text-xs py-24 px-6 border-t transition-all duration-300 bg-[#241F1A] text-[#FAF9F6]/60 border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Column 1 — Praticien */}
        <div className="space-y-6">
          <div className="space-y-4">
            <span className="font-semibold block text-sm font-lora text-[#FAF9F6] tracking-wide">
              {context.businessName}
            </span>
            <span className="block text-[#C5A065] text-[10px] font-bold uppercase tracking-[0.2em]">Praticienne Hospitalière</span>
            <div className="space-y-2 pt-2">
              <span className="block font-mono text-[#FAF9F6]/30 uppercase tracking-tighter">N° RPPS : 10101603602</span>
            </div>
          </div>
          <div className="space-y-4 pt-4 border-t border-white/5">
            <span className="font-bold block uppercase text-[10px] tracking-widest text-[#C5A065]">Plan du site</span>
            <ul className="space-y-2 text-[9px] font-bold uppercase tracking-widest">
              <li><a href="/parcours" className="hover:text-[#FAF9F6] transition-colors">Parcours de soins</a></li>
              <li><a href="/a-propos" className="hover:text-[#FAF9F6] transition-colors">À Propos</a></li>
              <li><a href="/blog" className="hover:text-[#FAF9F6] transition-colors">Journal Clinique</a></li>
              <li><a href="/contact" className="hover:text-[#FAF9F6] transition-colors">Contact & Accès</a></li>
            </ul>
          </div>
        </div>

        {/* Column 2 — Localisation */}
        <div className="space-y-4">
          <span className="font-bold block uppercase text-[10px] tracking-widest text-[#C5A065]">
            Localisation Hospitalière
          </span>
          <div className="space-y-4">
            <span className="flex items-start gap-3 text-[#FAF9F6]/70 leading-relaxed">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#0891B2]/50" />
              <span>GHRMSA Mulhouse<br />20 Avenue du Docteur René Laennec<br />68100 Mulhouse</span>
            </span>
          </div>
        </div>

        {/* Column 3 — Contact Direct */}
        <div className="space-y-4">
          <span className="font-bold block uppercase text-[10px] tracking-widest text-[#C5A065]">
            Secrétariat
          </span>
          <div className="space-y-3">
            <a href={`tel:${context.contact.phone}`} className="flex items-center gap-3 text-[#FAF9F6]/80 hover:text-white transition-colors group">
              <Phone className="w-4 h-4 text-[#0891B2]/50 group-hover:text-[#0891B2]" />
              <span className="font-bold">{context.contact.phone}</span>
            </a>
            <a href={`mailto:${context.contact.email}`} className="flex items-center gap-3 text-[#FAF9F6]/80 hover:text-white transition-colors group">
              <Mail className="w-4 h-4 text-[#0891B2]/50 group-hover:text-[#0891B2]" />
              <span>{context.contact.email}</span>
            </a>
          </div>
        </div>

        {/* Column 4 — Horaires */}
        <div className="space-y-4">
          <span className="font-bold block uppercase text-[10px] tracking-widest text-[#C5A065]">
            Horaires de consultation
          </span>
          <ul className="space-y-2">
            <li className="flex justify-between text-[#FAF9F6]/50">
              <span>Lun — Jeu</span>
              <span className="text-[#FAF9F6]/80 font-medium">08h30 – 16h30</span>
            </li>
            <li className="flex justify-between text-[#FAF9F6]/50">
              <span>Vendredi</span>
              <span className="text-[#FAF9F6]/80 font-medium">08h30 – 12h00</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4 border-white/5 text-[#FAF9F6]/20">
        <span>© {year} {context.businessName} — Tous droits réservés</span>
        <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
          <a href="/legal" className="hover:text-[#FAF9F6]/40 transition-colors">Mentions Légales</a>
          <span>Inscrit à l'Ordre des Médecins</span>
          <span>Données protégées RGPD</span>
        </div>
      </div>
    </footer>
  );
}
