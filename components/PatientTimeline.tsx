'use client';

import React, { useState } from 'react';
import { Calendar, Activity, Heart, ShieldCheck } from 'lucide-react';

export default function PatientTimeline() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      number: 1,
      title: "1. Diagnostic & Planification",
      shortDesc: "L'expertise clinique et numérique.",
      icon: Calendar,
      fullDesc: "Tout commence par une consultation approfondie au GHRMSA. Munis de votre courrier de liaison, nous analysons votre pathologie via une planification 3D de pointe."
    },
    {
      number: 2,
      title: "2. Précision Chirurgicale",
      shortDesc: "L'acte technique en milieu hospitalier.",
      icon: Activity,
      fullDesc: "L'intervention se déroule au bloc opératoire du GHRMSA. Vous bénéficiez de la sécurité maximale d'une structure hospitalière de référence."
    },
    {
      number: 3,
      title: "3. Continuité de Soins",
      shortDesc: "La rassurance d'un suivi expert.",
      icon: Heart,
      fullDesc: "Le parcours ne s'arrête pas à la sortie du bloc. Un protocole de récupération personnalisé vous est remis et des rendez-vous de contrôle réguliers valident la cicatrisation."
    }
  ];

  const currentStepData = steps.find(s => s.number === activeStep) || steps[0];

  return (
    <div className="w-full space-y-12">
      <div className="relative hidden md:flex justify-between items-center max-w-2xl mx-auto px-4">
        <div className="absolute top-1/2 left-0 right-0 h-[1px] -translate-y-1/2 z-0 bg-[#E8DFD1]/60" />
        <div 
          className="absolute top-1/2 left-0 h-[1px] -translate-y-1/2 bg-[#C5A065] transition-all duration-700 z-0"
          style={{ width: `${((activeStep - 1) / (steps.length - 1)) * 100}%` }}
        />
        {steps.map((step) => (
          <button key={step.number} onClick={() => setActiveStep(step.number)} className="relative z-10 focus:outline-none cursor-pointer">
            <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${activeStep === step.number ? 'bg-white border-[#C5A065] text-[#241F1A] scale-110 shadow-xl' : activeStep > step.number ? 'bg-[#FAF9F6] border-[#C5A065]/40 text-[#C5A065]' : 'bg-white border-[#E8DFD1] text-[#9B8B77]'}`}>
              <step.icon className="w-5 h-5" />
            </div>
            <span className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 text-[11px] font-black uppercase tracking-[0.2em] whitespace-nowrap ${activeStep === step.number ? 'text-[#241F1A]' : 'text-[#9B8B77]'}`}>
              {step.number === 1 ? 'Expertise' : step.number === 2 ? 'Précision' : 'Suivi'}
            </span>
          </button>
        ))}
      </div>
      <div className="max-w-4xl mx-auto rounded-[3rem] border border-[#E8DFD1] p-10 bg-white shadow-sm">
          <div className="flex flex-col md:flex-row gap-10 items-start text-left">
            <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#E8DFD1] text-[#A67A3D]">
              <currentStepData.icon className="w-8 h-8" />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-medium font-lora text-[#241F1A]">{currentStepData.title}</h3>
              <p className="text-base text-[#423C35] leading-relaxed">{currentStepData.fullDesc}</p>
              <div className="flex items-center gap-2 text-[11px] font-black text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
                <ShieldCheck className="w-3.5 h-3.5" /> Sécurité GHRMSA
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
