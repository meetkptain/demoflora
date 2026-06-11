'use client';

import React from 'react';
import { Printer } from 'lucide-react';

export default function PrintButton() {
  return (
    <button 
      className="hover:text-[#8C7355] transition-colors" 
      onClick={() => typeof window !== 'undefined' && window.print()}
      title="Imprimer l'article"
    >
      <Printer className="w-4 h-4" />
    </button>
  );
}
