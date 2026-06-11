'use client';

import React, { useState } from 'react';
import { Calculator, Info } from 'lucide-react';

const procedures = [
  { name: "Première Consultation", fee: 80, brss: 23 },
  { name: "Extraction Dents de Sagesse", fee: 350, brss: 150 },
  { name: "Chirurgie Orthognathique", fee: 2500, brss: 600 }
];

export default function FeeSimulator() {
  const [selected, setSelected] = useState(procedures[0]);
  return (
    <div className="max-w-2xl mx-auto p-10 rounded-[3rem] border border-[#E8DFD1] bg-white shadow-sm space-y-8">
      <div className="flex items-center gap-4"><Calculator className="text-[#0891B2]"/><h3 className="font-lora text-xl text-[#241F1A]">Simulateur de remboursement</h3></div>
      <div className="space-y-4">
        {procedures.map(p => (
          <button key={p.name} onClick={() => setSelected(p)} className={`w-full p-6 rounded-2xl border text-left transition-all ${selected.name === p.name ? 'border-[#0891B2] bg-[#0891B2]/5' : 'border-[#E8DFD1]'}`}>
            <span className="font-bold text-sm text-[#241F1A]">{p.name}</span>
          </button>
        ))}
      </div>
      <div className="pt-6 border-t border-[#E8DFD1]">
        <div className="flex justify-between text-sm"><span className="text-[#5A534A]">Honoraires PH :</span><span className="font-bold text-[#241F1A]">{selected.fee} €</span></div>
        <div className="flex justify-between text-sm mt-2"><span className="text-[#5A534A]">Base Sécu :</span><span className="text-[#0891B2] font-bold">{selected.brss} €</span></div>
        <p className="text-[10px] text-[#9B8B77] mt-6 italic">Conventionné Secteur 2 (Honoraires Libres) - Adhérent OPTAM.</p>
      </div>
    </div>
  );
}
