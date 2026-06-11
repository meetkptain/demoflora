'use client';

import React from 'react';
import { ShieldCheck, Award, FileText, CheckCircle } from 'lucide-react';

interface Props {
  rppsNumber?: string;
  conventionnement?: string;
}

export default function EeatTrustGrid({ rppsNumber, conventionnement }: Props) {
  const items = [
    {
      id: '1',
      title: 'Expertise RPPS',
      subtitle: rppsNumber || '10101603602',
      icon: Award,
    },
    {
      id: '2',
      title: 'Conventionnement',
      subtitle: conventionnement || 'Secteur 2 (OPTAM)',
      icon: ShieldCheck,
    },
    {
      id: '3',
      title: 'Secret Médical',
      subtitle: 'Protection des données de santé',
      icon: FileText,
    },
    {
      id: '4',
      title: 'GHRMSA',
      subtitle: 'Pôle Hospitalier Mulhouse',
      icon: CheckCircle,
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((item) => (
        <div key={item.id} className="p-5 rounded-2xl border border-[#E8DFD1] bg-[#FAF9F6] space-y-2">
          <item.icon className="h-5 w-5 text-[#0891B2]" />
          <div>
            <div className="text-[9px] font-bold uppercase tracking-widest text-[#A67A3D]">{item.title}</div>
            <div className="text-[11px] font-bold text-[#241F1A] leading-tight">{item.subtitle}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
