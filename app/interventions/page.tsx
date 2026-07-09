import { Metadata } from 'next';
import Link from 'next/link';
import { Bone, Cross, Wind, Sparkles, Scissors, ChevronRight, Clock, ArrowRight } from 'lucide-react';
import MedicalHeader from '@/components/MedicalHeader';
import MedicalFooter from '@/components/MedicalFooter';
import CategoryStickyNav from '@/components/CategoryStickyNav';
import { floraContext, floraData } from '@/lib/constants';
import type { MedicalService } from '@/lib/types';
import { formatTextWithGlossary } from '@/lib/utils';
import { seo } from '@/lib/seo';
import { CATEGORY_META, CATEGORY_ORDER, slugify } from '@/lib/categories';

const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Bone: Bone,
  Cross: Cross,
  Wind: Wind,
  Sparkles: Sparkles,
  Scissors: Scissors,
};

export const metadata: Metadata = {
  title: 'Mes Interventions - Dr Flora Jullian',
  description: 'Chirurgie orthognathique, stomatologique, rhinoplastie, esthétique du visage et dermatochirurgie : découvrez les interventions du Dr Flora Jullian, classées par catégorie, avec pour chacune une explication claire et les suites attendues.',
  alternates: {
    canonical: `${seo.baseUrl}/interventions`,
  },
  openGraph: {
    title: 'Mes Interventions — Dr Flora Jullian',
    description: 'Chirurgie orthognathique, stomatologique, rhinoplastie, esthétique du visage et dermatochirurgie au GHRMSA Mulhouse.',
    images: [{ url: `${seo.baseUrl}/drjullian.webp`, width: 800, height: 800, alt: 'Dr Flora Jullian — Interventions' }],
    type: 'website',
    locale: 'fr_FR',
  },
  robots: { index: true, follow: true },
};

function groupByCategory(services: MedicalService[]): { category: string; items: MedicalService[] }[] {
  const map = new Map<string, MedicalService[]>();
  for (const s of services) {
    const cat = s.category ?? 'Autres';
    if (!map.has(cat)) map.set(cat, []);
    map.get(cat)!.push(s);
  }
  return CATEGORY_ORDER
    .filter((c) => map.has(c))
    .map((c) => ({ category: c, items: map.get(c)! }))
    .concat(
      // Catégories non listées explicitement (sécurité)
      Array.from(map.keys())
        .filter((c) => !CATEGORY_ORDER.includes(c))
        .map((c) => ({ category: c, items: map.get(c)! }))
    );
}

export default function InterventionsPage() {
  const groups = groupByCategory(floraData.services);

  const services = floraData.services;
  const listingSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${seo.baseUrl}/interventions`,
        name: 'Mes Interventions — Dr Flora Jullian, Mulhouse',
        description: 'Chirurgie orthognathique, stomatologique, rhinoplastie, esthétique du visage et dermatochirurgie au GHRMSA Mulhouse.',
        isPartOf: { '@id': `${seo.baseUrl}/` },
      },
      {
        '@type': 'ItemList',
        itemListElement: services.map((s, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: `${seo.baseUrl}/interventions/${s.slug}`,
          name: s.name,
        })),
      },
    ],
  };

  return (
    <>
      <script
        id="listing-schema-interventions"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listingSchema) }}
      />
    <main className="theme-medical">
      <MedicalHeader context={floraContext} data={floraData} />
      <div className="relative min-h-screen overflow-hidden bg-[#FAF9F6] text-[#2F2A24]">
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] bg-precision-grid" />

      {/* HERO */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 md:pb-28">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#C5A065]/40" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#A67A3D]">Expertise</span>
          </div>
          <h1 className="font-lora text-[clamp(44px,7vw,84px)] font-medium leading-[0.9] tracking-[-0.03em] text-[#241F1A]">
            Mes interventions
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#423C35]">
            {floraContext.businessName}, chirurgien maxillo-facial &amp; stomatologue au GHRMSA Mulhouse.
            Retrouvez l&apos;ensemble de mes interventions, classées par catégorie, avec pour chacune
            une explication claire et les suites attendues.
          </p>
        </div>
      </section>

      {/* STICKY NAV */}
      <CategoryStickyNav
        categories={groups.map((g) => ({ id: slugify(g.category), label: g.category, count: g.items.length }))}
      />

      {/* CATÉGORIES */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-32 space-y-28">
        {groups.map(({ category, items }) => {
          const meta = CATEGORY_META[category];
          const IconName = meta?.icon ?? 'Sparkles';
          const Icon = CATEGORY_ICONS[IconName] ?? Sparkles;
          return (
            <section key={category} id={slugify(category)} className="scroll-mt-[130px]">
              <div className="mb-12 max-w-3xl">
                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C5A065]/15 bg-[#C5A065]/5 text-[#A67A3D]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="font-lora text-[clamp(28px,4vw,48px)] font-medium leading-tight tracking-[-0.02em] text-[#241F1A]">
                    {category}
                  </h2>
                </div>
                {meta?.subtitle && (
                  <p className="mt-5 pl-[4.5rem] text-base leading-relaxed text-[#423C35]">{meta.subtitle}</p>
                )}
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {items.map((service) => (
                  <Link
                    key={service.id}
                    href={`/interventions/${service.slug}`}
                    className="group flex flex-col rounded-[2rem] border border-[#E8DFD1] bg-white p-5 sm:p-8 transition-all duration-500 hover:border-[#C5A065]/40 hover:shadow-2xl"
                  >
                    <h3 className="font-lora text-2xl font-medium text-[#241F1A] transition-colors group-hover:text-[#0891B2]">
                      {service.name}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-[#423C35]">
                      {formatTextWithGlossary(service.description)}
                    </p>

                    {/* Suites attendues */}
                    <div className="mt-6 rounded-2xl border border-[#0891B2]/10 bg-[#0891B2]/[0.04] p-4">
                      <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0891B2]">
                        <Clock className="h-3.5 w-3.5" />
                        Suites attendues
                      </div>
                      <p className="mt-2 text-[13px] leading-relaxed text-[#3F5A63] line-clamp-2">{formatTextWithGlossary(service.recovery)}</p>
                    </div>

                    <div className="mt-auto pt-6 flex items-center justify-between border-t border-[#E8DFD1]/60 pt-5">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#A67A3D]">
                        Voir l&apos;intervention
                      </span>
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FAF9F6] text-[#A67A3D] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#0891B2] group-hover:text-white"
                        aria-hidden="true"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <section className="relative z-10 border-t border-[#E8DFD1]/60 bg-[#F2EBDD]/30 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-lora text-[clamp(28px,4vw,44px)] font-medium text-[#241F1A]">
            Une question sur une intervention ?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#423C35]">
            Le secrétariat du GHRMSA vous accompagne pour tout renseignement ou prise de rendez-vous.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${floraContext.contact.phone}`}
              className="inline-flex items-center gap-3 rounded-full bg-[#241F1A] px-8 py-5 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#0891B2] shadow-lg md:hidden"
            >
              Contacter le secrétariat
              <ChevronRight className="h-4 w-4" />
            </a>
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-3 rounded-full bg-[#241F1A] px-8 py-5 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#0891B2] shadow-lg"
            >
              Contacter le secrétariat
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="/symptomes"
              className="inline-flex items-center gap-3 rounded-full border border-[#C5A065]/30 bg-white px-8 py-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#A67A3D] transition-all duration-500 hover:bg-[#C5A065]/5"
            >
              Identifier vos symptômes
              <ArrowRight className="h-4 w-4" />
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
