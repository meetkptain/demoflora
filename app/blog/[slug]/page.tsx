import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';
import { floraData, floraContext } from '@/lib/constants';
import MedicalHeader from '@/components/MedicalHeader';
import MedicalFooter from '@/components/MedicalFooter';
import PrintButton from '@/components/PrintButton';
import ShareButton from '@/components/ShareButton';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { seo } from '@/lib/seo';
import { blogContent } from '@/lib/blog-content';
import { buildBreadcrumb } from '@/lib/utils-seo';

const BASE_URL = seo.baseUrl;

const SUBTITLE_MAP: Record<string, string> =
  Object.fromEntries(Object.entries(blogContent).map(([k, v]) => [k, v.subtitle]));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = floraData.posts?.find(p => p.slug === slug);
  if (!post) return { title: 'Article non trouvé' };
  const desc = `Article du Dr Flora Jullian : ${post.title}. ${SUBTITLE_MAP[slug] || 'Information médicale'} — Chirurgien maxillo-facial au GHRMSA Mulhouse.`;
  return {
    title: `${post.title} | Dr Flora Jullian, Mulhouse`,
    description: desc,
    alternates: { canonical: `${BASE_URL}/blog/${slug}` },
    openGraph: {
      title: `${post.title} — Dr Flora Jullian`,
      description: desc,
      type: 'article',
      publishedTime: post.published_at,
      images: [{ url: `${BASE_URL}${post.featured_image_url}` }],
    },
  };
}

export async function generateStaticParams() {
  return (floraData.posts ?? []).map((post) => ({
    slug: post.slug,
  }));
}

const getArticleContent = (slug: string) => {
  const article = blogContent[slug];
  if (!article) {
    return {
      subtitle: "Information médicale",
      content: <p>Contenu en cours de rédaction.</p>
    };
  }
  return {
    subtitle: article.subtitle,
    content: (
      <div className="space-y-8">
        <p className="text-xl font-lora text-[#4A4A4A] leading-relaxed italic border-l-4 border-[#8C7355] pl-6">
          {article.sections[0]?.text ? article.sections[0].text.split('.')[0] + '.' : ''}
        </p>
        {article.sections.map((section, i) => (
          <section key={i} className="space-y-4">
            <h2 className="text-2xl font-lora text-[#1A1A1A]">{section.title}</h2>
            <p>{section.text}</p>
          </section>
        ))}
      </div>
    )
  };
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = floraData.posts?.find(p => p.slug === slug);
  const article = getArticleContent(slug);

  if (!post) return <div className="min-h-screen flex items-center justify-center font-lora">Article non trouvé</div>;

  const blogSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${BASE_URL}/blog/${slug}#post`,
        headline: post.title,
        description: article.subtitle,
        author: {
          '@type': 'Person',
          '@id': `${BASE_URL}/#physician`,
          name: 'Dr Flora Jullian',
          url: `${BASE_URL}/`,
          medicalSpecialty: 'Chirurgie Maxillo-Faciale',
        },
        publisher: {
          '@type': 'Person',
          '@id': `${BASE_URL}/#physician`,
          name: 'Dr Flora Jullian',
        },
        datePublished: post.published_at,
        dateModified: new Date().toISOString().split('T')[0],
        image: `${BASE_URL}${post.featured_image_url}`,
        mainEntityOfPage: `${BASE_URL}/blog/${slug}`,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${BASE_URL}/blog/${slug}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: `${BASE_URL}/blog/${slug}` },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#FDFCFB] relative">
      <div className="absolute inset-0 bg-precision-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />

      <MedicalHeader context={floraContext} data={floraData} />

      <script
        id={`blog-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <article className="relative pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-[11px] text-[#8C7355] uppercase tracking-[0.2em] font-medium mb-12 hover:opacity-70 transition-opacity"
          >
            <ArrowLeft className="w-3 h-3" />
            Retour aux articles
          </Link>

          <header className="mb-16">
            <span className="inline-block px-3 py-1 bg-[#8C7355] text-white text-[11px] uppercase tracking-[0.2em] font-medium mb-6">
              {post.category.replace('_', ' ')}
            </span>
            <h1 className="text-4xl md:text-6xl font-lora text-[#1A1A1A] leading-tight mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-[#8C7355] font-medium mb-8">
              {article.subtitle}
            </p>
            
            <div className="flex flex-wrap items-center gap-8 py-8 border-y border-[#E8DFD1] text-[11px] text-[#4A4A4A] uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#8C7355]" />
                Publié le {new Date(post.published_at).toLocaleDateString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#8C7355]" />
                {post.reading_time_minutes} min de lecture
              </span>
              <div className="flex-grow" />
              <div className="flex items-center gap-4">
                <ShareButton title={post.title} url={`${BASE_URL}/blog/${slug}`} />
                <PrintButton />
              </div>
            </div>
          </header>

          <div className="aspect-[21/9] mb-16 overflow-hidden rounded-sm border border-[#E8DFD1] relative">
            <Image 
              src={post.featured_image_url} 
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-[#4A4A4A] leading-relaxed">
            {article.content}
          </div>

          {/* Intervention associée */}
          {['parcours-orthognathique', 'conseils-dents-de-sagesse', 'precision-3d'].includes(slug) && (
            <div className="mt-16 p-8 rounded-[2rem] border border-[#0891B2]/10 bg-[#0891B2]/[0.02] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#0891B2]">Intervention associée</span>
                <h4 className="font-lora text-xl text-[#241F1A]">
                  {slug === 'conseils-dents-de-sagesse' ? "Avulsion des dents de sagesse" : "Ostéotomie bimaxillaire"}
                </h4>
                <p className="text-xs text-[#423C35] leading-relaxed">
                  Consultez notre fiche détaillée sur le déroulement, les tarifs et la prise en charge de cette intervention.
                </p>
              </div>
              <Link
                href={slug === 'conseils-dents-de-sagesse' ? "/interventions/dents-de-sagesse" : "/interventions/osteotomie-bimaxillaire"}
                className="inline-flex items-center gap-2 rounded-full bg-[#241F1A] px-5 py-3 text-[11px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#0891B2] shrink-0"
              >
                Voir l&apos;intervention
              </Link>
            </div>
          )}
          
          <footer className="mt-20 pt-10 border-t border-[#E8DFD1]">
            <div className="bg-white p-8 border border-[#E8DFD1] flex items-center gap-6">
              <Image src="/drjullian.webp" alt="Dr Flora Jullian, chirurgien maxillo-facial au GHRMSA Mulhouse" width={80} height={80} className="w-20 h-20 rounded-full object-cover grayscale" />
              <div>
                <p className="text-sm uppercase tracking-widest text-[#8C7355] font-medium mb-1">L'Auteur</p>
                <h4 className="font-lora text-xl text-[#1A1A1A]">Dr Flora Jullian</h4>
                <p className="text-sm text-[#4A4A4A]">Chirurgien Maxillo-Facial & Stomatologue, spécialisée en chirurgie orthognathique et reconstructrice.</p>
              </div>
            </div>
          </footer>
        </div>
      </article>

      <MedicalFooter context={floraContext} data={floraData} />
    </main>
  );
}
