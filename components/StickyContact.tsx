'use client';

import React, { useState, useEffect } from 'react';
import { Clock, AlertTriangle, FileText } from 'lucide-react';

interface Props {
  phone: string;
  email: string;
}

export default function StickyContact({ phone, email }: Props) {
  const [showStickyBtn, setShowStickyBtn] = useState(false);
  const [isSecretariatOpen, setIsSecretariatOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setShowStickyBtn(scrollPos > 450);
    };

    const checkOpenStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Dimanche, 1 = Lundi, ..., 5 = Vendredi, 6 = Samedi
      const hour = now.getHours();
      const minute = now.getMinutes();
      const currentTime = hour * 60 + minute;

      if (day >= 1 && day <= 4) { // Lun - Jeu
        setIsSecretariatOpen(currentTime >= 8 * 60 + 30 && currentTime < 16 * 60 + 30);
      } else if (day === 5) { // Vendredi
        setIsSecretariatOpen(currentTime >= 8 * 60 + 30 && currentTime < 12 * 60);
      } else { // Week-end
        setIsSecretariatOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000); // Check every minute

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  if (!showStickyBtn) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-[110] md:hidden">
      <div className={`flex items-center gap-3 rounded-full p-2 backdrop-blur-md shadow-2xl ${isSecretariatOpen ? 'bg-[#241F1A]/95' : 'bg-[#EA4335]/95'}`}>
        <a href={`tel:${isSecretariatOpen ? phone : '15'}`} className="flex-1 flex items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#241F1A]">
          {isSecretariatOpen ? (
            <>
              <Clock className="h-4 w-4" /> Appeler Secrétariat
            </>
          ) : (
            <>
              <AlertTriangle className="h-4 w-4 text-[#EA4335]" /> URGENCE : Appeler le 15
            </>
          )}
        </a>
        <a href={`mailto:${email}`} className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
          <FileText className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
