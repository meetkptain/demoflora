export const runtime = 'edge';

import React from 'react';
import { floraData, floraContext } from '@/lib/constants';
import MedicalHeader from '@/components/MedicalHeader';
import MedicalFooter from '@/components/MedicalFooter';
import PrintButton from '@/components/PrintButton';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';

const getArticleContent = (slug: string) => {
  switch (slug) {
    case 'parcours-orthognathique':
      return {
        subtitle: "De la première consultation à la stabilisation post-opératoire",
        content: (
          <div className="space-y-8">
            <p className="text-xl font-lora text-[#4A4A4A] leading-relaxed italic border-l-4 border-[#8C7355] pl-6">
              La chirurgie orthognathique n'est pas un acte isolé, mais l'aboutissement d'une collaboration étroite entre le chirurgien maxillo-facial et l'orthodontiste.
            </p>
            <section className="space-y-4">
              <h2 className="text-2xl font-lora text-[#1A1A1A]">1. La Phase Préparatoire</h2>
              <p>Cette étape dure généralement 12 à 18 mois. L'orthodontiste aligne les dents sur chaque mâchoire de manière indépendante pour préparer le geste chirurgical. Une simulation 3D est réalisée pour définir les objectifs précis du déplacement osseux.</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-lora text-[#1A1A1A]">2. L'Intervention Chirurgicale</h2>
              <p>L'opération se déroule sous anesthésie générale, au GHRMSA. Elle consiste à repositionner les bases osseuses. Les incisions sont exclusivement réalisées à l'intérieur de la bouche, ne laissant aucune cicatrice visible sur le visage.</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-lora text-[#1A1A1A]">3. La Récupération</h2>
              <p>Une hospitalisation de 2 à 3 jours est nécessaire. La reprise d'une alimentation normale est progressive. Le bénéfice fonctionnel (mastication, respiration) et esthétique est immédiat, bien que l'oedème mette quelques semaines à se résorber totalement.</p>
            </section>
          </div>
        )
      };
    case 'conseils-dents-de-sagesse':
      return {
        subtitle: "Maximiser votre confort et accélérer la guérison",
        content: (
          <div className="space-y-8">
            <p className="text-xl font-lora text-[#4A4A4A] leading-relaxed italic border-l-4 border-[#8C7355] pl-6">
              L'avulsion des dents de sagesse est une intervention fréquente dont les suites peuvent être grandement simplifiées par le respect de consignes simples.
            </p>
            <section className="space-y-4">
              <h2 className="text-2xl font-lora text-[#1A1A1A]">I. La gestion du froid</h2>
              <p>Appliquez des poches de glace sur les joues pendant les 48 premières heures. Le froid limite l'inflammation et réduit significativement le gonflement post-opératoire.</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-lora text-[#1A1A1A]">II. L'alimentation adaptée</h2>
              <p>Privilégiez les aliments mous et tièdes ou froids (glaces, yaourts, purées tiédies). Évitez tout aliment petit et dur (riz, semoule, pépins) qui pourrait se loger dans les zones de cicatrisation.</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-lora text-[#1A1A1A]">III. L'hygiène bucco-dentaire</h2>
              <p>Ne faites pas de bains de bouche vigoureux le premier jour pour laisser le caillot se stabiliser. Reprenez un brossage doux avec une brosse à dents post-opératoire dès le lendemain.</p>
            </section>
          </div>
        )
      };
    case 'precision-3d':
      return {
        subtitle: "La technologie au service de la sécurité chirurgicale",
        content: (
          <div className="space-y-8">
            <p className="text-xl font-lora text-[#4A4A4A] leading-relaxed italic border-l-4 border-[#8C7355] pl-6">
              Grâce à la planification virtuelle, nous pouvons désormais "opérer avant l'opération", garantissant une précision millimétrique.
            </p>
            <section className="space-y-4">
              <h2 className="text-2xl font-lora text-[#1A1A1A]">La modélisation numérique</h2>
              <p>À partir d'un scanner 3D du patient, nous reconstruisons virtuellement l'anatomie faciale. Cela permet de simuler différents scénarios chirurgicaux et de choisir celui offrant le meilleur équilibre fonctionnel.</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-lora text-[#1A1A1A]">Guides de coupe sur mesure</h2>
              <p>L'impression 3D permet de créer des guides chirurgicaux personnalisés. Ces instruments, stérilisés et utilisés au bloc, reportent exactement la planification virtuelle sur le patient.</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-lora text-[#1A1A1A]">Résultats prévisibles</h2>
              <p>Cette approche réduit le temps opératoire et augmente la prévisibilité des résultats, particulièrement dans les cas complexes de dysmorphoses faciales ou de reconstructions post-traumatiques.</p>
            </section>
          </div>
        )
      };
    default:
      return {
        subtitle: "Information médicale",
        content: <p>Contenu en cours de rédaction.</p>
      };
  }
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = floraData.posts?.find(p => p.slug === slug);
  const article = getArticleContent(slug);

  if (!post) return <div className="min-h-screen flex items-center justify-center font-lora">Article non trouvé</div>;

  return (
    <main className="min-h-screen bg-[#FDFCFB] relative">
      <div className="absolute inset-0 bg-precision-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />

      <MedicalHeader context={floraContext} data={floraData} />

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
            <span className="inline-block px-3 py-1 bg-[#8C7355] text-white text-[10px] uppercase tracking-[0.2em] font-medium mb-6">
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
                <button className="hover:text-[#8C7355] transition-colors"><Share2 className="w-4 h-4" /></button>
                <PrintButton />
              </div>
            </div>
          </header>

          <div className="aspect-[21/9] mb-16 overflow-hidden rounded-sm border border-[#E8DFD1]">
            <img 
              src={post.featured_image_url} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-[#4A4A4A] leading-relaxed">
            {article.content}
          </div>
          
          <footer className="mt-20 pt-10 border-t border-[#E8DFD1]">
            <div className="bg-white p-8 border border-[#E8DFD1] flex items-center gap-6">
              <img src="/drjullian.png" alt="Dr Flora Jullian" className="w-20 h-20 rounded-full object-cover grayscale" />
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
