'use client';

import React, { useState } from 'react';
import { Calculator, ChevronDown, Shield, Info } from 'lucide-react';
import { MedicalData } from '../lib/types';
import { CATEGORY_ORDER } from '../lib/categories';

interface Props {
  data: MedicalData;
  initialSlug?: string;
}

interface SimProcedure {
  name: string;
  slug: string;
  fee: number;
  brss: number;
  isReimbursed: boolean;
  category: string;
}

const MUTUELLE_LABELS: Record<number, string> = {
  0: 'Sans mutuelle',
  100: 'Basique (100%)',
  150: 'Intermédiaire',
  200: 'Renforcée (200%)',
  300: 'Premium (300%)',
};

function getMutuelleLabel(pct: number): string {
  if (MUTUELLE_LABELS[pct]) return MUTUELLE_LABELS[pct];
  if (pct < 100) return `${pct}%`;
  return `${pct}%`;
}

export default function FeeSimulator({ data, initialSlug }: Props) {
  const procedures: SimProcedure[] = data.services
    .filter((s) => s.fee != null && s.fee > 0)
    .map((s) => ({
      name: s.name,
      slug: s.slug,
      fee: s.fee!,
      brss: s.brss ?? 0,
      isReimbursed: s.isReimbursed ?? false,
      category: s.category ?? '',
    }));

  const consultation = procedures.find((p) => p.slug === 'consultation') ?? procedures[0];

  const allCategories = ['Consultation', ...CATEGORY_ORDER];
  const grouped = allCategories.reduce<Record<string, SimProcedure[]>>((acc, cat) => {
    const items = procedures.filter((p) => p.category === cat);
    if (items.length > 0) acc[cat] = items;
    return acc;
  }, {});

  const initial = initialSlug
    ? procedures.find((p) => p.slug === initialSlug) ?? consultation
    : consultation;

  const [selected, setSelected] = useState<SimProcedure>(initial);
  const [mutuellePct, setMutuellePct] = useState(100);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const secuAmount = selected.isReimbursed ? Math.round(selected.brss * 0.7) : 0;
  const totalMutuelleCoverage = selected.isReimbursed ? Math.round(selected.brss * (mutuellePct / 100)) : 0;
  const mutuelleAmount = Math.max(0, totalMutuelleCoverage - secuAmount);
  const totalCovered = secuAmount + mutuelleAmount;
  const resteFinal = Math.max(0, selected.fee - totalCovered);

  return (
    <div id="simulateur" className="scroll-mt-[130px] max-w-2xl mx-auto p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] border border-[#E8DFD1] bg-white shadow-sm space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0891B2]/10">
          <Calculator className="h-5 w-5 text-[#0891B2]" />
        </div>
        <div>
          <h3 className="font-lora text-lg sm:text-xl text-[#241F1A]">Estimation de remboursement</h3>
          <p className="text-[11px] text-[#9B8B77] mt-0.5">Sélectionnez un acte pour estimer votre reste à charge</p>
        </div>
      </div>

      {/* Procedure selector dropdown */}
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="w-full flex items-center justify-between gap-3 rounded-2xl border border-[#E8DFD1] bg-[#FAF9F6] px-5 py-4 text-left transition-all hover:border-[#C5A065]/60"
        >
          <div className="min-w-0">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-[#A67A3D] mb-0.5">
              {selected.category === '_consultation' ? 'Consultation' : selected.category}
            </span>
            <span className="block text-sm font-semibold text-[#241F1A] truncate">{selected.name}</span>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-sm font-bold text-[#241F1A]">{selected.fee.toLocaleString('fr-FR')} €</span>
            <ChevronDown className={`h-4 w-4 text-[#A67A3D] transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
          </div>
        </button>

        {dropdownOpen && (
          <>
            <div className="fixed inset-0 z-30" onClick={() => setDropdownOpen(false)} />
            <div className="absolute left-0 right-0 top-full z-40 mt-2 max-h-80 overflow-y-auto rounded-2xl border border-[#E8DFD1] bg-white shadow-xl">
              {/* Grouped by category */}
              {allCategories.map((cat) => {
                const items = grouped[cat];
                if (!items) return null;
                return (
                  <div key={cat}>
                    <div className="px-5 pt-3 pb-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#A67A3D]">{cat}</span>
                    </div>
                    {items.map((p) => (
                      <button
                        key={p.slug}
                        onClick={() => { setSelected(p); setDropdownOpen(false); }}
                        className={`w-full text-left px-5 py-2.5 text-sm transition-colors hover:bg-[#FAF9F6] ${selected.slug === p.slug ? 'bg-[#0891B2]/5 text-[#0891B2] font-semibold' : 'text-[#241F1A]'}`}
                      >
                        <span className="flex items-center justify-between gap-2">
                          <span className="truncate">{p.name}</span>
                          <span className="flex items-center gap-2 flex-shrink-0">
                            {p.isReimbursed && (
                              <Shield className="h-3 w-3 text-[#0891B2]" />
                            )}
                            <span className="text-xs text-[#9B8B77]">{p.fee.toLocaleString('fr-FR')} €</span>
                          </span>
                        </span>
                      </button>
                    ))}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>

      {/* Reimbursement status badge */}
      <div className="flex items-center gap-2">
        {selected.isReimbursed ? (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0891B2]/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#0891B2]">
            <Shield className="h-3 w-3" />
            Prise en charge Sécu + Mutuelle
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E8DFD1] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#423C35]">
            Non remboursé — 100% à votre charge
          </span>
        )}
      </div>

      {/* Mutuelle slider — only for reimbursed procedures */}
      {selected.isReimbursed && selected.brss > 0 && (
        <div className="space-y-3 rounded-2xl border border-[#E8DFD1]/60 bg-[#FAF9F6] p-5">
          <label className="flex justify-between text-xs text-[#423C35]">
            <span className="font-medium">Niveau de mutuelle</span>
            <span className="font-bold text-[#241F1A]">{getMutuelleLabel(mutuellePct)}</span>
          </label>
          <input
            type="range"
            min={0}
            max={300}
            step={50}
            value={mutuellePct}
            onChange={(e) => setMutuellePct(Number(e.target.value))}
            className="w-full accent-[#0891B2]"
          />
          <div className="flex justify-between text-[10px] text-[#9B8B77]">
            <span>Sans</span>
            <span>100%</span>
            <span>200%</span>
            <span>300%</span>
          </div>
        </div>
      )}

      {/* Breakdown */}
      <div className="pt-4 border-t border-[#E8DFD1] space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-[#423C35]">Honoraires (à partir de)</span>
          <span className="font-bold text-[#241F1A]">{selected.fee.toLocaleString('fr-FR')} €</span>
        </div>

        {selected.isReimbursed && selected.brss > 0 && (
          <>
            <div className="flex justify-between text-sm">
              <span className="text-[#423C35]">Sécu (70% du BRSS de {selected.brss} €)</span>
              <span className="text-[#0891B2] font-bold">− {secuAmount} €</span>
            </div>
            {mutuellePct > 0 && mutuelleAmount > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-[#423C35]">Complément mutuelle</span>
                <span className="text-[#0891B2] font-bold">− {mutuelleAmount} €</span>
              </div>
            )}
            {selected.fee > selected.brss && (
              <div className="flex justify-between text-sm text-[#9B8B77]">
                <span>Dépassement (Secteur 2 — OPTAM)</span>
                <span>{(selected.fee - selected.brss).toLocaleString('fr-FR')} €</span>
              </div>
            )}
          </>
        )}

        <div className="flex justify-between text-sm pt-3 border-t border-[#E8DFD1]/60">
          <span className="text-[#241F1A] font-bold">Reste à charge estimé</span>
          <span className={`text-lg font-bold ${resteFinal === 0 ? 'text-[#0891B2]' : 'text-[#A67A3D]'}`}>
            {resteFinal.toLocaleString('fr-FR')} €
          </span>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="flex gap-3 rounded-xl bg-[#0891B2]/[0.04] border border-[#0891B2]/10 p-4">
        <Info className="h-4 w-4 text-[#0891B2] flex-shrink-0 mt-0.5" />
        <p className="text-[11px] text-[#3F5A63] leading-relaxed">
          <strong>{data.conventionnement}</strong> — Le Dr Flora Jullian applique des dépassements
          d&apos;honoraires maîtrisés (OPTAM), partiellement remboursés par les mutuelles.
          Estimation indicative : un devis personnalisé vous est remis lors de la consultation.
        </p>
      </div>
    </div>
  );
}
