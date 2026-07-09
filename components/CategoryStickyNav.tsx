'use client';

import { useState, useEffect, useRef } from 'react';

interface CategoryNavProps {
  categories: { id: string; label: string; count?: number }[];
}

export default function CategoryStickyNav({ categories }: CategoryNavProps) {
  const [activeId, setActiveId] = useState('');
  const [visible, setVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = categories.map(c => document.getElementById(c.id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const heroEnd = sections[0]?.offsetTop ?? 600;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    sections.forEach(s => observer.observe(s));

    const handleScroll = () => {
      setVisible(window.scrollY > heroEnd - 200);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [categories]);

  useEffect(() => {
    if (!activeId || !scrollRef.current) return;
    const container = scrollRef.current;
    const btn = container.querySelector(`[data-cat="${activeId}"]`) as HTMLElement | null;
    if (!btn) return;
    const scrollTarget = btn.offsetLeft - container.offsetWidth / 2 + btn.offsetWidth / 2;
    container.scrollTo({ left: scrollTarget, behavior: 'smooth' });
  }, [activeId]);

  if (!visible) return null;

  return (
    <div className="sticky top-[73px] z-20 border-b border-[#E8DFD1]/60 bg-[#FAF9F6]/90 backdrop-blur-md transition-opacity duration-300">
      <div
        ref={scrollRef}
        className="mx-auto max-w-7xl px-6 py-3 flex overflow-x-auto gap-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {categories.map((cat) => {
          const isActive = activeId === cat.id;
          return (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              data-cat={cat.id}
              className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-[11px] font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap shrink-0 ${
                isActive
                  ? 'border-[#241F1A] bg-[#241F1A] text-white shadow-md'
                  : 'border-[#E8DFD1] bg-white text-[#423C35] hover:border-[#C5A065]/60 hover:bg-[#FAF5EC]'
              }`}
            >
              {cat.label}
              {cat.count != null && (
                <span className={`rounded-full px-1.5 text-[11px] font-bold ${isActive ? 'bg-white/20 text-white' : 'bg-[#F2EBDD] text-[#A67A3D]'}`}>
                  {cat.count}
                </span>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}
