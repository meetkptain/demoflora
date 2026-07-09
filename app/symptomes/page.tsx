'use client';

import { useState, useMemo, useRef } from 'react';
import Link from 'next/link';
import { ChevronRight, ArrowRight, Search, Zap, Clock, Calendar, X, ArrowUpDown } from 'lucide-react';
import MedicalHeader from '@/components/MedicalHeader';
import MedicalFooter from '@/components/MedicalFooter';
import { floraContext, floraData, symptomData } from '@/lib/constants';
import type { MedicalSymptom } from '@/lib/types';
import { SYMPTOM_CATEGORIES, sortByPriority } from '@/lib/categories';
import { seo } from '@/lib/seo';

const URGENCY_ORDER = { urgent: 0, soon: 1, programmed: 2 } as const;
const PAGE_SIZE = 20;

type SortKey = 'default' | 'urgency' | 'alpha';

function UrgencyPill({ level }: { level: MedicalSymptom['urgencyLevel'] }) {
  const config = {
    urgent:     { icon: Zap,      label: 'Urgent',       cls: 'bg-red-50 text-red-700 border-red-200' },
    soon:       { icon: Clock,    label: 'Sous 7 j.',    cls: 'bg-amber-50 text-amber-700 border-amber-200' },
    programmed: { icon: Calendar, label: 'Programmé',    cls: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  };
  const c = config[level];
  const Icon = c.icon;
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider ${c.cls}`}>
      <Icon className="h-2.5 w-2.5" />
      {c.label}
    </span>
  );
}

export default function SymptomesIndexPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState<SortKey>('default');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const gridRef = useRef<HTMLElement>(null);

  const scrollToGrid = () => {
    if (gridRef.current) {
      const top = gridRef.current.offsetTop - 140;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    }
  };

  const filtered = useMemo(() => {
    let results = symptomData.filter((s) => {
      const matchCat = activeCategory === 'all' || s.category === activeCategory;
      const q = search.toLowerCase().trim();
      const matchSearch = !q ||
        s.title.toLowerCase().includes(q) ||
        s.intro.toLowerCase().includes(q) ||
        s.causes.some((c) => c.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });

    if (sortKey === 'urgency') {
      results = [...results].sort((a, b) => URGENCY_ORDER[a.urgencyLevel] - URGENCY_ORDER[b.urgencyLevel]);
    } else if (sortKey === 'alpha') {
      results = [...results].sort((a, b) => a.title.localeCompare(b.title, 'fr'));
    } else {
      results = sortByPriority(results);
    }

    return results;
  }, [activeCategory, search, sortKey]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleFilterChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(PAGE_SIZE);
    scrollToGrid();
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setVisibleCount(PAGE_SIZE);
  };

  const handleSortChange = (key: SortKey) => {
    setSortKey(key);
    scrollToGrid();
  };

  const listingSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${seo.baseUrl}/symptomes`,
        name: 'Vos symptômes — Dr Flora Jullian, Mulhouse',
        description: 'Identifiez votre gêne, comprenez son origine et découvrez la prise en charge proposée par le Dr Flora Jullian.',
        isPartOf: { '@id': `${seo.baseUrl}/` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${seo.baseUrl}/symptomes#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${seo.baseUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'Symptômes', item: `${seo.baseUrl}/symptomes` },
        ],
      },
      {
        '@type': 'ItemList',
        itemListElement: symptomData.map((s, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: `${seo.baseUrl}/symptomes/${s.slug}`,
          name: s.title,
        })),
      },
    ],
  };

  return (
    <>
      <script
        id="listing-schema-symptomes"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listingSchema) }}
      />
    <main className="theme-medical">
      <MedicalHeader context={floraContext} data={floraData} />
      <div className="relative min-h-screen overflow-hidden bg-[#FAF9F6] text-[#2F2A24]">
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] bg-precision-grid" />

        {/* ── Hero ── */}
        <section className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-[#C5A065]/40" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#A67A3D]">Symptômes</span>
            </div>
            <h1 className="font-lora text-[clamp(44px,7vw,84px)] font-medium leading-[0.9] tracking-[-0.03em] text-[#241F1A]">
              Vos symptômes
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#423C35]">
              Identifiez votre gêne, comprenez son origine et découvrez la prise en charge
              proposée par le Dr Flora Jullian, chirurgien maxillo-facial à Mulhouse.
            </p>
          </div>
        </section>

        {/* ── Barre de recherche + filtres sticky ── */}
        <div className="sticky top-[73px] z-20 border-b border-[#E8DFD1]/60 bg-[#FAF9F6]/90 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-2 sm:py-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">

            {/* Recherche */}
            <div className="relative flex-shrink-0 sm:w-64">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#A67A3D]/60" />
              <input
                type="search"
                placeholder="Rechercher un symptôme…"
                value={search}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full rounded-full border border-[#E8DFD1] bg-white py-2 sm:py-2.5 pl-10 pr-9 text-sm text-[#2F2A24] placeholder-[#A67A3D]/50 outline-none focus:border-[#C5A065] focus:ring-1 focus:ring-[#C5A065]/30 transition"
              />
              {search && (
                <button
                  onClick={() => handleSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A67A3D]/60 hover:text-[#A67A3D]"
                  aria-label="Effacer la recherche"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            {/* Filtres catégorie — scroll horizontal en mobile */}
            <div className="flex overflow-x-auto gap-2 pb-1 sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap">
              {SYMPTOM_CATEGORIES.map((cat) => {
                const count = cat.id === 'all'
                  ? symptomData.length
                  : symptomData.filter((s) => s.category === cat.id).length;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleFilterChange(cat.id)}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 sm:px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'border-[#241F1A] bg-[#241F1A] text-white shadow-md'
                        : 'border-[#E8DFD1] bg-white text-[#423C35] hover:border-[#C5A065]/60 hover:bg-[#FAF5EC]'
                    }`}
                  >
                    <span>{cat.emoji}</span>
                    {cat.label}
                    <span className={`rounded-full px-1.5 py-0 text-[11px] font-bold ${isActive ? 'bg-white/20 text-white' : 'bg-[#F2EBDD] text-[#A67A3D]'}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Grille de résultats ── */}
        <section ref={gridRef} className="relative z-10 mx-auto max-w-7xl px-6 py-10 pb-24">

          {/* Compteur + tri + reset */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-[#423C35]/70">
              {filtered.length === 0
                ? 'Aucun résultat'
                : `${filtered.length} symptôme${filtered.length > 1 ? 's' : ''} trouvé${filtered.length > 1 ? 's' : ''}`}
            </p>
            <div className="flex items-center gap-4">
              {/* Tri */}
              <div className="relative flex items-center gap-2">
                <ArrowUpDown className="h-3.5 w-3.5 text-[#A67A3D]/60" />
                <div className="relative">
                  <select
                    value={sortKey}
                    onChange={(e) => handleSortChange(e.target.value as SortKey)}
                    className="appearance-none rounded-full border border-[#E8DFD1] bg-white py-1.5 pl-3 pr-7 text-[11px] font-bold uppercase tracking-wider text-[#423C35] outline-none focus:border-[#C5A065] cursor-pointer"
                  >
                    <option value="default">Par défaut</option>
                    <option value="urgency">Par urgence</option>
                    <option value="alpha">Alphabétique</option>
                  </select>
                  <ChevronRight className="pointer-events-none absolute right-2.5 top-1/2 h-3 w-3 -translate-y-1/2 rotate-90 text-[#A67A3D]/60" />
                </div>
              </div>
              {/* Reset */}
              {(search || activeCategory !== 'all') && (
                <button
                  onClick={() => { handleSearchChange(''); setActiveCategory('all'); }}
                  className="text-[11px] font-bold uppercase tracking-wider text-[#A67A3D] hover:text-[#0891B2] transition"
                >
                  Réinitialiser
                </button>
              )}
            </div>
          </div>

          {/* Aucun résultat */}
          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="font-lora text-2xl text-[#241F1A]">Aucun symptôme trouvé</p>
              <p className="mt-3 text-sm text-[#423C35]/70">Essayez un autre mot-clé ou réinitialisez les filtres.</p>
              <button
                onClick={() => { handleSearchChange(''); setActiveCategory('all'); }}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#241F1A] px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-white hover:bg-[#0891B2] transition"
              >
                Voir tous les symptômes
              </button>
            </div>
          )}

          {/* Grille — 2 cols mobile, 2 sm, 3 lg, 4 xl */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
            {visible.map((s) => (
              <Link
                key={s.slug}
                href={`/symptomes/${s.slug}`}
                className="group flex flex-col rounded-xl sm:rounded-2xl border border-[#E8DFD1] bg-white p-4 sm:p-6 transition-all duration-300 hover:border-[#C5A065]/50 hover:shadow-xl hover:-translate-y-0.5"
              >
                {/* Urgence */}
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <UrgencyPill level={s.urgencyLevel} />
                  <span className="text-sm leading-none hidden sm:block">
                    {SYMPTOM_CATEGORIES.find((c) => c.id === s.category)?.emoji ?? ''}
                  </span>
                </div>

                {/* Titre */}
                <h2 className="font-lora text-sm sm:text-lg font-medium leading-snug text-[#241F1A] transition-colors group-hover:text-[#0891B2] line-clamp-2">
                  {s.title}
                </h2>
                <p className="mt-0.5 text-xs italic text-[#A67A3D] line-clamp-1 hidden sm:block">{s.headline}</p>

                {/* Intro — hidden on mobile, shown on sm+ */}
                <p className="mt-2 sm:mt-3 line-clamp-2 text-xs leading-relaxed text-[#423C35]/80 hidden sm:block">
                  {s.intro}
                </p>

                {/* Footer */}
                <div className="mt-3 sm:mt-4 flex items-center justify-between border-t border-[#E8DFD1]/60 pt-3 sm:pt-4">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#A67A3D]">
                    Voir
                  </span>
                  <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#FAF9F6] text-[#A67A3D] transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-[#0891B2] group-hover:text-white">
                    <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Load more */}
          {hasMore && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                className="inline-flex items-center gap-3 rounded-full border border-[#E8DFD1] bg-white px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#423C35] transition-all hover:bg-[#FAF9F6] hover:border-[#0891B2]/30 hover:text-[#0891B2]"
              >
                Voir plus de symptômes ({filtered.length - visibleCount} restants)
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </section>

        {/* ── CTA bas de page ── */}
        <section className="relative z-10 border-t border-[#E8DFD1]/60 bg-[#F2EBDD]/30 px-6 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-lora text-[clamp(28px,4vw,44px)] font-medium text-[#241F1A]">
              Vous ne trouvez pas votre symptôme ?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#423C35]">
              Le Dr Flora Jullian prend en charge l&apos;ensemble des pathologies maxillo-faciales.
              Le secrétariat du GHRMSA vous oriente vers la consultation adaptée.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`tel:${floraContext.contact.phone}`}
                className="inline-flex items-center gap-3 rounded-full bg-[#241F1A] px-8 py-5 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#0891B2] shadow-lg md:hidden"
              >
                Contacter le secrétariat
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-3 rounded-full bg-[#241F1A] px-8 py-5 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#0891B2] shadow-lg"
              >
                Contacter le secrétariat
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/interventions"
                className="inline-flex items-center gap-3 rounded-full border border-[#C5A065]/30 bg-white px-8 py-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#A67A3D] transition-all duration-500 hover:bg-[#C5A065]/5"
              >
                Voir les interventions
              </Link>
            </div>
          </div>
        </section>
      </div>

      <MedicalFooter context={floraContext} data={floraData} />
    </main>
    </>
  );
}
