import { Metadata } from 'next';
import Link from 'next/link';
import MedicalHeader from '@/components/MedicalHeader';
import MedicalFooter from '@/components/MedicalFooter';
import FeeSimulator from '@/components/FeeSimulator';
import { seo } from '@/lib/seo';
import { floraContext, floraData } from '@/lib/constants';
import { CATEGORY_ORDER } from '@/lib/categories';
import { Shield, ArrowRight, ArrowDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tarifs des interventions - Dr Flora Jullian',
  description: 'Consultez les tarifs indicatifs des interventions de chirurgie maxillo-faciale et esthétique du Dr Flora Jullian, avec prise en charge Sécurité Sociale.',
  alternates: {
    canonical: `${seo.baseUrl}/tarifs`,
  },
};

function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const categories = CATEGORY_ORDER.filter((cat) =>
  floraData.services.some((s) => s.category === cat)
);

export default function PricingPage() {
  const pricingSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        '@id': `${seo.baseUrl}/tarifs#list`,
        name: 'Tarifs des interventions - Dr Flora Jullian',
        description: 'Honoraires indicatifs des interventions de chirurgie maxillo-faciale',
        itemListElement: floraData.services.map((s, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: `${seo.baseUrl}/interventions/${s.slug}`,
          item: {
            '@type': 'MedicalProcedure',
            name: s.name,
            offers: {
              '@type': 'Offer',
              price: s.fee?.toString() ?? undefined,
              priceCurrency: 'EUR',
              description: s.priceRange ?? 'Sur devis',
              eligibleQuantity: { '@type': 'QuantitativeValue', value: 1 },
            },
          },
        })),
      },
      {
        '@type': 'MedicalWebPage',
        '@id': `${seo.baseUrl}/tarifs#webpage`,
        url: `${seo.baseUrl}/tarifs`,
        name: 'Tarifs des interventions - Dr Flora Jullian',
        description: 'Consultez les tarifs indicatifs des interventions de chirurgie maxillo-faciale et esthétique du Dr Flora Jullian.',
        about: { '@id': `${seo.baseUrl}/#physician` },
        dateModified: new Date().toISOString().split('T')[0],
      },
    ],
  };

  return (
    <main className="theme-medical">
      <MedicalHeader context={floraContext} data={floraData} />
      <div className="relative min-h-screen overflow-hidden bg-[#FAF9F6] text-[#2F2A24]">
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] bg-precision-grid" />

        {/* ── Hero ── */}
        <section className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-[#C5A065]/40" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#A67A3D]">Transparence</span>
            </div>
            <h1 className="font-lora text-[clamp(40px,6vw,72px)] font-medium leading-[0.95] tracking-[-0.02em] text-[#241F1A]">
              Tarifs & Honoraires
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#423C35]">
              Transparence et clarté sont essentielles à notre relation de confiance. Retrouvez ci-dessous une estimation des honoraires pour les principales interventions.
            </p>
          </div>
        </section>

        {/* ── Sticky category nav ── */}
        <nav className="sticky top-[73px] z-20 border-b border-[#E8DFD1]/60 bg-[#FAF9F6]/90 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-2 sm:py-3">
            <div className="flex overflow-x-auto gap-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {categories.map((cat) => (
                <a
                  key={cat}
                  href={`#${slugify(cat)}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#E8DFD1] bg-white px-3 sm:px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#423C35] transition-all whitespace-nowrap shrink-0 hover:border-[#C5A065]/60 hover:bg-[#FAF5EC]"
                >
                  {cat}
                </a>
              ))}
              <a
                href="#simulateur"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#0891B2]/30 bg-[#0891B2]/5 px-3 sm:px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#0891B2] transition-all whitespace-nowrap shrink-0 hover:bg-[#0891B2]/10"
              >
                Simulateur
                <ArrowDown className="h-3 w-3" />
              </a>
            </div>
          </div>
        </nav>

        {/* ── Categories + tables ── */}
        <section className="relative z-10 mx-auto max-w-6xl px-6 py-12 space-y-12">
          {categories.map((catName) => {
            const servicesInCategory = floraData.services.filter(s => s.category === catName);
            return (
              <div
                key={catName}
                id={slugify(catName)}
                className="scroll-mt-[130px] rounded-[2rem] border border-[#E8DFD1] bg-white p-6 sm:p-8 md:p-10"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-6">
                  <h2 className="font-lora text-xl sm:text-2xl font-medium text-[#241F1A]">{catName}</h2>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#9B8B77]">
                    {servicesInCategory.length} acte{servicesInCategory.length > 1 ? 's' : ''}
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-[#E8DFD1]">
                        <th className="py-3 text-[11px] font-bold uppercase tracking-widest text-[#A67A3D]">Intervention</th>
                        <th className="py-3 text-[11px] font-bold uppercase tracking-widest text-[#A67A3D] text-center hidden sm:table-cell">Prise en charge</th>
                        <th className="py-3 text-[11px] font-bold uppercase tracking-widest text-[#A67A3D] text-right">Honoraires</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8DFD1]/60">
                      {servicesInCategory.map((service) => (
                        <tr key={service.slug} className="hover:bg-[#FAF6F0] transition-colors">
                          <td className="py-4">
                            <Link href={`/interventions/${service.slug}`} className="text-sm text-[#241F1A] font-medium hover:text-[#0891B2] hover:underline">
                              {service.name}
                            </Link>
                          </td>
                          <td className="py-4 text-center hidden sm:table-cell">
                            {service.isReimbursed ? (
                              <span className="inline-flex items-center gap-1 rounded-full bg-[#0891B2]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0891B2]">
                                <Shield className="h-2.5 w-2.5" />
                                Sécu
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 rounded-full bg-[#E8DFD1]/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#9B8B77]">
                                Non remb.
                              </span>
                            )}
                          </td>
                          <td className="py-4 text-right">
                            <span className="text-sm text-[#423C35] font-medium">{service.priceRange || 'Sur devis'}</span>
                            {service.fee != null && (
                              <a
                                href="#simulateur"
                                className="ml-2 hidden md:inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#0891B2] hover:underline"
                              >
                                Simuler
                              </a>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}

          {/* ── Simulateur ── */}
          <div className="max-w-2xl mx-auto py-8">
            <FeeSimulator data={floraData} />
          </div>

          {/* ── Disclaimer ── */}
          <div className="rounded-[2rem] border border-[#0891B2]/15 bg-[#0891B2]/[0.04] p-8 md:p-10 text-center">
            <p className="text-[#3F5A63] leading-relaxed max-w-2xl mx-auto">
              <strong>Note importante :</strong> Ces tarifs sont donnés à titre indicatif. Un devis précis et personnalisé vous sera remis lors de votre première consultation après examen clinique.
            </p>
          </div>
        </section>

        {/* ── CTA bas de page ── */}
        <section className="relative z-10 border-t border-[#E8DFD1]/60 bg-[#F2EBDD]/30 px-6 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-lora text-[clamp(28px,4vw,44px)] font-medium text-[#241F1A]">Une question sur les tarifs ?</h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#423C35]">Le secrétariat du GHRMSA vous renseigne sur la prise en charge de votre intervention.</p>
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
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-[#C5A065]/30 bg-white px-8 py-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#A67A3D] transition-all duration-500 hover:bg-[#C5A065]/5"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </section>
      </div>
      <script
        id="tarifs-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      <MedicalFooter context={floraContext} data={floraData} />
    </main>
  );
}
