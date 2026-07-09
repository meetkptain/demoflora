import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { symptomData } from '@/lib/constants';
import SymptomePageClient from './SymptomePageClient';
import { seo } from '@/lib/seo';
import { getSymptomBodyLocation, getIcd10 } from '@/lib/categories';
import { buildMedicalWebPage } from '@/lib/utils-seo';

const BASE_URL = seo.baseUrl;

// ─────────────────────────────────────────────────────────────
// SEO : génération des métadonnées
// ─────────────────────────────────────────────────────────────
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const symptom = symptomData.find((s) => s.slug === slug);
  if (!symptom) return { title: 'Symptôme non trouvé' };
  return {
    title: `${symptom.title} — ${symptom.headline} | Dr Flora Jullian, Mulhouse`,
    description: symptom.metaDescription,
    openGraph: {
      title: `${symptom.title} | Dr Flora Jullian`,
      description: symptom.metaDescription,
      images: [{ url: `${BASE_URL}/drjullian.png`, width: 800, height: 800, alt: `Dr Flora Jullian — ${symptom.title}` }],
      type: 'article',
      locale: 'fr_FR',
    },
    alternates: {
      canonical: `${BASE_URL}/symptomes/${slug}`,
    },
  };
}

// ─────────────────────────────────────────────────────────────
// Routes statiques : pré-génère les 50 pages
// ─────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return symptomData.map((s) => ({ slug: s.slug }));
}

// ─────────────────────────────────────────────────────────────
// Page (Server component — schemas only, UI delegated to client)
// ─────────────────────────────────────────────────────────────
export default async function SymptomePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const symptom = symptomData.find((s) => s.slug === slug);
  if (!symptom) notFound();

  const possibleTreatment = symptom.relatedIntervention
    ? {
        '@type': 'MedicalProcedure',
        name: symptomData.find((s) => s.slug === symptom.relatedIntervention!.slug)?.title ?? symptom.relatedIntervention.label,
        url: `${BASE_URL}/interventions/${symptom.relatedIntervention.slug}`,
      }
    : undefined;

  // ── @graph : MedicalCondition + FAQPage + BreadcrumbList + MedicalWebPage ──
  const graphSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalCondition',
        '@id': `${BASE_URL}/symptomes/${slug}#condition`,
        name: symptom.title,
        description: symptom.intro,
        signOrSymptom: symptom.causes.map((c) => ({ '@type': 'MedicalSymptom', name: c })),
        bodyLocation: { '@type': 'AnatomicalStructure', name: getSymptomBodyLocation(symptom.category) },
        ...(getIcd10(symptom.category) ? { code: { '@type': 'MedicalCode', code: getIcd10(symptom.category)!, codingSystem: 'ICD-10' } } : {}),
        ...(possibleTreatment ? { possibleTreatment } : {}),
        relevantSpecialty: {
          '@type': 'MedicalSpecialty',
          name: 'Chirurgie Maxillo-Faciale',
        },
        recognizingAuthority: {
          '@type': 'MedicalOrganization',
          name: 'Dr Flora Jullian — GHRMSA Mulhouse',
          url: seo.baseUrl,
        },
        study: { '@type': 'MedicalStudy', name: 'Société Française de Chirurgie Maxillo-Faciale', url: 'https://www.sfscmfco.fr' },
        dateModified: new Date().toISOString().split('T')[0],
      },
      {
        '@type': 'FAQPage',
        '@id': `${BASE_URL}/symptomes/${slug}#faq`,
        mainEntityOfPage: `${BASE_URL}/symptomes/${slug}`,
        mainEntity: symptom.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${BASE_URL}/symptomes/${slug}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Symptômes', item: `${BASE_URL}/symptomes` },
          { '@type': 'ListItem', position: 3, name: symptom.title, item: `${BASE_URL}/symptomes/${slug}` }
        ]
      },
      {
        '@type': 'MedicalWebPage',
        '@id': `${BASE_URL}/symptomes/${slug}#webpage`,
        url: `${BASE_URL}/symptomes/${slug}`,
        name: `${symptom.title} — ${symptom.headline} | Dr Flora Jullian, Mulhouse`,
        description: symptom.metaDescription,
        about: { '@id': `${BASE_URL}/#physician` },
        dateModified: new Date().toISOString().split('T')[0],
        relevantSpecialty: { '@type': 'MedicalSpecialty', name: 'Chirurgie Maxillo-Faciale' }
      }
    ]
  };

  return (
    <>
      {/* Données structurées schema.org (@graph) */}
      <script
        id={`schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
      />
      {/* Rendu interactif (FAQ accordéon, badge urgence) */}
      <SymptomePageClient slug={slug} />
    </>
  );
}
