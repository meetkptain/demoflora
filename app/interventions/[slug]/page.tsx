import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, ShieldCheck, Euro, Info, Syringe, MapPin, Activity, HelpCircle, Stethoscope, ArrowRight } from 'lucide-react';
import { floraContext, floraData, symptomData } from '@/lib/constants';
import MedicalHeader from '@/components/MedicalHeader';
import MedicalFooter from '@/components/MedicalFooter';
import ServiceFAQ from '@/components/ServiceFAQ';
import { formatTextWithGlossary } from '@/lib/utils';
import type { MedicalSymptom } from '@/lib/types';
import { seo } from '@/lib/seo';
import { getProcedureBodyLocation, CATEGORY_SLUGS, formatPriceRange } from '@/lib/categories';
import { truncateMeta, ogImage, canonical, buildBreadcrumb, buildMedicalWebPage } from '@/lib/utils-seo';

const BASE_URL = seo.baseUrl;

// Génération des pages statiques pour chaque service
export async function generateStaticParams() {
  return floraData.services
    .filter((s) => s.category !== 'Consultation')
    .map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = floraData.services.find((s) => s.slug === slug);

  if (!service) {
    return { title: 'Intervention non trouvée' };
  }

  const rawDesc = `${service.name} par le Dr Flora Jullian au GHRMSA Mulhouse. ${service.description} Indications, tarifs, suites attendues et prise en charge.`;
  const description = truncateMeta(rawDesc, 110, 160);

  return {
    title: `${service.name} — Dr Flora Jullian, Mulhouse`,
    description,
    alternates: {
      canonical: canonical(`/interventions/${slug}`),
    },
    openGraph: {
      title: `${service.name} — Dr Flora Jullian`,
      description,
      images: ogImage(),
      type: 'article',
      locale: 'fr_FR',
    },
  };
}

export default async function InterventionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = floraData.services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedSymptomObjects: MedicalSymptom[] = service.relatedSymptoms
    ?.map((rs) => symptomData.find((s) => s.slug === rs))
    .filter((s): s is MedicalSymptom => s !== undefined) ?? [];

  const catSlug = service.category
    ? CATEGORY_SLUGS[service.category] || service.category.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-')
    : '';

  const graphSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalProcedure',
        '@id': `${BASE_URL}/interventions/${service.slug}#procedure`,
        name: service.name,
        description: service.description,
        procedureType: 'https://schema.org/SurgicalProcedure',
        evidenceLevel: 'https://schema.org/EvidenceLevelA',
        study: { '@type': 'MedicalStudy', name: 'Société Française de Chirurgie Maxillo-Faciale', url: 'https://www.sfscmfco.fr' },
        bodyLocation: getProcedureBodyLocation(service.category),
        relevantSpecialty: { '@type': 'MedicalSpecialty', name: 'Chirurgie Maxillo-Faciale' },
        howPerformed: service.details,
        followup: service.recovery,
        outcome: service.outcome,
        preparation: service.preparation,
        anesthesia: service.anesthesia,
        possibleComplication: service.risks?.map((r) => r.split(' (')[0]) ?? [],
        performingPhysician: {
          '@type': 'Physician',
          '@id': `${BASE_URL}/#physician`,
          name: 'Dr Flora Jullian',
          url: `${BASE_URL}/`,
          image: `${BASE_URL}/drjullian.png`,
          medicalSpecialty: 'Chirurgie Maxillo-Faciale',
          hospitalAffiliation: { '@type': 'Hospital', name: 'GHRMSA Mulhouse' }
        },
        audience: { '@type': 'MedicalAudience', name: 'Patient' },
        dateModified: new Date().toISOString().split('T')[0]
      },
      ...(service.faq ? [{
        '@type': 'FAQPage',
        '@id': `${BASE_URL}/interventions/${service.slug}#faq`,
        mainEntityOfPage: `${BASE_URL}/interventions/${service.slug}`,
        mainEntity: service.faq.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer }
        }))
      }] : []),
      {
        '@type': 'BreadcrumbList',
        '@id': `${BASE_URL}/interventions/${service.slug}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Interventions', item: `${BASE_URL}/interventions` },
          ...(service.category ? [{ '@type': 'ListItem', position: 3, name: service.category, item: `${BASE_URL}/interventions#${catSlug}` }] : []),
          { '@type': 'ListItem', position: service.category ? 4 : 3, name: service.name, item: `${BASE_URL}/interventions/${service.slug}` }
        ]
      },
      {
        '@type': 'MedicalWebPage',
        '@id': `${BASE_URL}/interventions/${service.slug}#webpage`,
        url: `${BASE_URL}/interventions/${service.slug}`,
        name: `${service.name} — Dr Flora Jullian, Mulhouse`,
        description: service.description,
        about: { '@id': `${BASE_URL}/#physician` },
        dateModified: new Date().toISOString().split('T')[0],
        relevantSpecialty: { '@type': 'MedicalSpecialty', name: 'Chirurgie Maxillo-Faciale' }
      }
    ]
  };

  return (
    <main className="theme-medical">
      <MedicalHeader context={floraContext} data={floraData} />
      <div className="relative min-h-screen overflow-hidden bg-[#FAF9F6] text-[#2F2A24]">
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] bg-precision-grid" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 pt-32 pb-32">
        <nav className="mb-10 flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest">
          <Link href="/" className="text-[#A67A3D] hover:text-[#0891B2] transition-colors">Accueil</Link>
          <span className="text-[#C5A065]/40">/</span>
          <Link href="/interventions" className="text-[#A67A3D] hover:text-[#0891B2] transition-colors">Interventions</Link>
          {service.category && (
            <>
              <span className="text-[#C5A065]/40">/</span>
              <Link href={`/interventions#${CATEGORY_SLUGS[service.category] || catSlug}`} className="text-[#A67A3D] hover:text-[#0891B2] transition-colors">{service.category}</Link>
            </>
          )}
          <span className="text-[#C5A065]/40">/</span>
          <span className="text-[#241F1A]/60 truncate max-w-[200px]">{service.name}</span>
        </nav>

        <header className="mb-14">
          {service.category && (
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#C5A065]/20 bg-[#C5A065]/5 px-5 py-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#A67A3D]">{service.category}</span>
            </div>
          )}
          <h1 className="font-lora text-[clamp(36px,6vw,64px)] font-medium leading-[1] tracking-[-0.02em] text-[#241F1A]">
            {service.name}
          </h1>

          {/* Badges logistiques */}
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="inline-flex items-center gap-3 rounded-2xl border border-[#E8DFD1] bg-white px-4 py-2.5 shadow-sm">
              <Syringe className="h-4.5 w-4.5 text-[#0891B2]" />
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#A67A3D]">Anesthésie</span>
                <span className="text-[11px] font-bold text-[#241F1A]">{service.anesthesia || "Locale ou Générale"}</span>
              </div>
            </div>
            <div className="inline-flex items-center gap-3 rounded-2xl border border-[#E8DFD1] bg-white px-4 py-2.5 shadow-sm">
              <MapPin className="h-4.5 w-4.5 text-[#0891B2]" />
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#A67A3D]">Lieu de l&apos;acte</span>
                <span className="text-[11px] font-bold text-[#241F1A]">{service.location || "Cabinet / Hôpital"}</span>
              </div>
            </div>
            <div className="inline-flex items-center gap-3 rounded-2xl border border-[#E8DFD1] bg-white px-4 py-2.5 shadow-sm">
              <Activity className="h-4.5 w-4.5 text-[#0891B2]" />
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#A67A3D]">Hospitalisation</span>
                <span className="text-[11px] font-bold text-[#241F1A]">{service.stay || "Ambulatoire"}</span>
              </div>
            </div>
          </div>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#423C35]">{formatTextWithGlossary(service.description)}</p>
        </header>

        <div className="space-y-12">
          {service.details && (
            <section className="rounded-[2rem] border border-[#E8DFD1] bg-white p-8 md:p-10">
              <h2 className="font-lora text-2xl font-medium text-[#241F1A] mb-4">Ce que c&apos;est</h2>
              <p className="text-[#423C35] leading-relaxed">{formatTextWithGlossary(service.details)}</p>
            </section>
          )}

          <section className="rounded-[2rem] border border-[#0891B2]/15 bg-[#0891B2]/[0.04] p-8 md:p-10">
            <div className="flex items-center gap-3 text-[#0891B2]">
              <Clock className="h-5 w-5" />
              <h2 className="font-lora text-2xl font-medium">Les suites attendues</h2>
            </div>
            <p className="mt-4 text-[#3F5A63] leading-relaxed">{formatTextWithGlossary(service.recovery)}</p>
          </section>

          {service.timeline && service.timeline.length > 0 && (
            <section>
              <h2 className="font-lora text-2xl font-medium text-[#241F1A] mb-6">Calendrier de récupération</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {service.timeline.map((item, index) => (
                  <div key={index} className="rounded-2xl border border-[#E8DFD1] bg-white p-6 shadow-sm">
                    <span className="font-lora text-xl font-bold text-[#A67A3D] block mb-2">{item.day}</span>
                    <p className="text-sm text-[#423C35] leading-relaxed">{formatTextWithGlossary(item.event)}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {service.risks && service.risks.length > 0 && (
            <section className="rounded-[2rem] border border-[#E8DFD1] bg-[#FAF9F6]/40 p-8 md:p-10 space-y-6">
              <div className="flex items-center gap-3 text-[#A67A3D]">
                <Info className="h-5 w-5" />
                <h2 className="font-lora text-2xl font-medium">Informations de vigilance</h2>
              </div>
              <p className="text-sm text-[#423C35] leading-relaxed">
                Conformément aux recommandations de déontologie, nous vous présentons les éléments de vigilance liés à cette intervention. Ils demeurent très rares et font l&apos;objet d&apos;une prévention systématique.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {service.risks.map((risk, index) => {
                  const parts = risk.split(' (');
                  const title = parts[0];
                  const desc = parts[1] ? parts[1].replace(')', '') : '';
                  return (
                    <div key={index} className="rounded-2xl border border-[#E8DFD1] bg-white p-6 shadow-sm space-y-2">
                      <h4 className="font-semibold text-sm text-[#241F1A]">{title}</h4>
                      {desc && <p className="text-xs text-[#A67A3D] leading-relaxed">{desc}</p>}
                    </div>
                  );
                })}
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E8DFD1] space-y-3 shadow-sm">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#0891B2] block">Votre rôle actif dans la récupération</span>
                <p className="text-xs text-[#423C35] leading-relaxed">
                  L&apos;application assidue de glace (cryothérapie) et le respect rigoureux du protocole post-opératoire (alimentation semi-liquide tiède/froide, repos) permettent de réduire le gonflement et d&apos;accélérer la cicatrisation de plus de 50%.
                </p>
              </div>
            </section>
          )}

          <section className="rounded-[2rem] border border-[#E8DFD1] bg-white p-8 md:p-10">
            <div className="flex items-center gap-3 text-[#A67A3D]">
              <Euro className="h-5 w-5" />
              <h2 className="font-lora text-2xl font-medium">Tarifs et prise en charge</h2>
            </div>
            <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#A67A3D]">Honoraires estimatifs</p>
                <p className="mt-1 font-lora text-2xl text-[#241F1A]">{formatPriceRange(service)}</p>
              </div>
              <div
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
                  service.isReimbursed ? 'bg-[#0891B2]/10 text-[#0891B2]' : 'bg-[#E8DFD1] text-[#423C35]'
                }`}
              >
                <ShieldCheck className="h-4 w-4" />
                {service.isReimbursed ? 'Remboursable (Sécu / Mutuelle)' : 'Non remboursable'}
              </div>
            </div>
          </section>

          {/* Pour qui ? */}
          {service.indications && service.indications.length > 0 && (
            <section className="rounded-[2rem] border border-[#E8DFD1] bg-white p-8 md:p-10">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0891B2]/5 text-[#0891B2]">
                  <Stethoscope className="h-5 w-5" />
                </div>
                <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-[#423C35]">Pour qui cette intervention ?</h2>
              </div>
              <ul className="space-y-3">
                {service.indications.map((ind, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-[#423C35]">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0891B2]" />
                    {ind}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Résultat attendu */}
          {service.outcome && (
            <section className="rounded-[2rem] border border-[#C5A065]/20 bg-[#FAF5EC] p-8 md:p-10">
              <h2 className="font-lora text-2xl font-medium text-[#241F1A] mb-4">Résultat attendu</h2>
              <p className="text-[#423C35] leading-relaxed">{service.outcome}</p>
            </section>
          )}

          {/* FAQ */}
          {service.faq && service.faq.length > 0 && (
            <section>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C5A065]/8 text-[#A67A3D]">
                  <HelpCircle className="h-5 w-5" />
                </div>
                <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-[#423C35]">Questions fréquentes</h2>
              </div>
              <ServiceFAQ faq={service.faq} />
            </section>
          )}

          {/* Symptômes associés */}
          {relatedSymptomObjects.length > 0 && (
            <section>
              <h2 className="mb-5 text-sm font-bold uppercase tracking-[0.15em] text-[#423C35]">Symptômes associés</h2>
              <div className="flex flex-wrap gap-3">
                {relatedSymptomObjects.map((rs) => (
                  <Link
                    key={rs.slug}
                    href={`/symptomes/${rs.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-[#E8DFD1] bg-white px-5 py-2.5 text-[11px] font-semibold text-[#423C35] transition-all hover:border-[#0891B2]/30 hover:bg-[#0891B2]/5 hover:text-[#0891B2]"
                  >
                    {rs.title}
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Auteur */}
        <section className="mt-14 rounded-[2rem] border border-[#E8DFD1] bg-white p-6 flex items-center gap-6 shadow-sm">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-[#FAF6F0] shrink-0">
            <Image src="/drjullian.webp" alt="Dr Flora Jullian" width={64} height={64} className="object-cover" />
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#A67A3D]">Auteur</p>
            <p className="font-lora text-xl font-medium text-[#241F1A]">Dr Flora Jullian</p>
            <p className="text-xs text-[#423C35]">Chirurgien Maxillo-Facial &amp; Stomatologue — GHRMSA Mulhouse</p>
            <Link href="/a-propos" className="text-[11px] font-bold uppercase tracking-wider text-[#0891B2] hover:underline mt-1 inline-block">
              En savoir +
            </Link>
          </div>
        </section>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/tarifs"
            className="inline-flex items-center justify-center rounded-full border border-[#E8DFD1] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#423C35] transition-colors hover:bg-white"
          >
            Voir les tarifs
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#241F1A] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#0891B2]"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </div>
      </div>
      {/* Données structurées (@graph) */}
      <script
        id={`schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
      />
      <MedicalFooter context={floraContext} data={floraData} />
    </main>
  );
}
