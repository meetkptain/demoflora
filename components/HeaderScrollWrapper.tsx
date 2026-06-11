'use client';

import React from 'react';

export default function HeaderScrollWrapper({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[100] border-b transition-all duration-500 ${
        isScrolled
          ? 'border-[#E8DFD1]/80 bg-[#FAF9F6] shadow-[0_10px_40px_rgba(0,0,0,0.03)]'
          : 'border-[#E8DFD1]/40 bg-[#FAF9F6]'
      }`}
    >
      {children}
    </header>
  );
}
