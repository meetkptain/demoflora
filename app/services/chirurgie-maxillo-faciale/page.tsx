import React from 'react';
import { ChevronLeft, ArrowRight, ShieldCheck, Activity, Brain, Heart, Stethoscope, Microscope, Beaker, Users, Calendar, Clock, MapPin } from 'lucide-react';
import MedicalHeader from '@/components/MedicalHeader';
import MedicalFooter from '@/components/MedicalFooter';
import MedicalFAQ from '@/components/MedicalFAQ';
import EeatTrustGrid from '@/components/EeatTrustGrid';
import { floraContext, floraData } from '@/lib/constants';

export default function ChirurgieMaxilloFacialePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Chirurgie Maxillo-Faciale et Stomatologie",
      "procedureType": "SurgicalProcedure",
      "description": "Spécialité chirurgicale traitant les pathologies du visage, de la bouche, des dents et des mâchoires.",
      "preparation": "Consultation spécialisée au GHRMSA Mulhouse.",
      "provider": {
        "@type": "Physician",
        "name": "Dr Flora Jullian",
        "url": "https://dr-flora-jullian.fr"
      },
      "location": {
        "@type": "Hospital",
        "name": "GHRMSA Mulhouse - Hôpital Emile Muller",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "20 Avenue du Docteur René Laennec",
          "addressLocality": "Mulhouse",
          "postalCode": "68100",
          "addressCountry": "FR"
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Accueil",
          "item": "https://dr-flora-jullian.fr"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://dr-flora-jullian.fr/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Chirurgie Maxillo-Faciale",
          "item": "https://dr-flora-jullian.fr/services/chirurgie-maxillo-faciale"
        }
      ]
    }
  ];

  return (
    <main className="theme-medical">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MedicalHeader context={floraContext} data={floraData} />
      
      <div className="relative min-h-screen bg-[#FAF9F6] text-[#2F2A24] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] bg-precision-grid" />
        <div className="pointer-events-none absolute inset-0 z-0 bg-noise opacity-[0.4]" />

        {/* HERO SECTION */}
        <section className="relative pt-40 pb-24 px-6 border-b border-[#E8DFD1]/60 z-10">
          <div className="max-w-7xl mx-auto">
            <nav className="mb-12">
              <a href="/" className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#A67A3D] hover:text-[#241F1A] transition-colors">
                <ChevronLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                Retour à l&apos;accueil
              </a>
            </nav>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:items-end">
              <div className="lg:col-span-8 space-y-8">
                <div className="inline-flex items-center gap-3 rounded-full border border-[#0891B2]/20 bg-[#0891B2]/5 px-5 py-2 text-[#0891B2]">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Spécialité Hospitalière de Référence</span>
                </div>
                <h1 className="font-lora text-[clamp(48px,6vw,84px)] font-medium leading-[0.95] tracking-tight text-[#241F1A]">
                  Chirurgie <br /> <span className="opacity-60 italic">Maxillo-Faciale à Mulhouse</span>
                </h1>
                <p className="text-xl text-[#5A534A] max-w-2xl leading-relaxed">
                  L&apos;excellence de la chirurgie osseuse et reconstructrice du visage en Alsace. Une expertise pointue pour les traumatismes et la reconstruction faciale au sein du GHRMSA Mulhouse.
                </p>
              </div>
              <div className="lg:col-span-4 pb-4">
                <div className="p-8 rounded-[2.5rem] border border-[#E8DFD1] bg-white shadow-xl shadow-[#C5A065]/5 space-y-6">
                  <div className="flex items-center gap-3 text-[#A67A3D]">
                    <ShieldCheck className="w-5 h-5" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Plateau Technique CHU</span>
                  </div>
                  <p className="text-sm text-[#5A534A] leading-relaxed">
                    Prise en charge multidisciplinaire garantissant une sécurité et une précision chirurgicale de haut niveau.
                  </p>
                  <a href={`tel:${floraContext.contact.phone}`} className="group flex items-center justify-between w-full rounded-full bg-[#241F1A] px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#0891B2]">
                    Prendre RDV <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT SECTIONS */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 py-32 space-y-48">
          
          {/* DEFINITION & EXPERTISE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-[#C5A065]/40"/>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A67A3D]">Qu&apos;est-ce que la CMF ?</span>
              </div>
              <h2 className="font-lora text-5xl font-medium leading-[1.1] text-[#241F1A]">L&apos;intersection de la fonction et de l&apos;esthétique</h2>
              <p className="text-lg text-[#5A534A] leading-relaxed">
                La chirurgie maxillo-faciale est une spécialité chirurgicale issue de la stomatologie, traitant les pathologies des mâchoires, du visage, de la bouche, des dents et de la face.
              </p>
              <div className="p-10 rounded-[2.5rem] bg-[#FAF6F0] border border-[#A67A3D]/10 space-y-6">
                <div className="flex items-center gap-4 text-[#A67A3D]">
                  <Activity className="h-6 w-6" />
                  <h4 className="font-bold uppercase tracking-[0.1em] text-xs">Champs d&apos;intervention</h4>
                </div>
                <ul className="space-y-4">
                  {['Traumatologie faciale', 'Chirurgie orthognathique', 'Pathologies des glandes salivaires', 'Infections cervico-faciales'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-[#5A534A]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C5A065]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-7 prose prose-stone max-w-none text-[#5A534A]">
              <h3 className="font-lora text-3xl text-[#241F1A] mb-8">Une spécialité chirurgicale d&apos;exception</h3>
              <p className="text-base leading-relaxed mb-8 text-justify">
                Le chirurgien maxillo-facial est le spécialiste exclusif de la face, aussi bien dans ses composantes cutanées (peau) que structurelles (os). Son champ d&apos;action est vaste et s&apos;étend de la simple extraction dentaire complexe à la reconstruction totale du visage après un accident ou un cancer. Au sein du cabinet du Dr Flora Jullian, nous privilégions une approche qui allie la rigueur scientifique de l&apos;enseignement hospitalier à une attention personnalisée pour chaque patient.
              </p>
              
              <h4 className="font-lora text-2xl text-[#241F1A] mt-12 mb-6">La Traumatologie Faciale : Une urgence de précision</h4>
              <p className="text-base leading-relaxed mb-6 text-justify">
                Les traumatismes faciaux, qu&apos;ils soient dus à des accidents de la route, des chutes, des accidents de sport ou des agressions, nécessitent une prise en charge immédiate et experte. Le Dr Jullian intervient sur les fractures des mâchoires (mandibule et maxillaire), de l&apos;os malaire (pommette), du nez et des orbites. L&apos;objectif est double : rétablir la fonction (occlusion dentaire, vision, respiration) et minimiser les séquelles esthétiques.
              </p>
              <p className="text-base leading-relaxed mb-8 text-justify">
                Pour plus de détails sur la conduite à tenir en cas d&apos;accident, consultez notre page dédiée aux <a href="/symptomes/traumatisme-facial" className="text-[#0891B2] hover:underline">traumatismes faciaux</a>.
              </p>

              <h4 className="font-lora text-2xl text-[#241F1A] mt-12 mb-6">La Chirurgie Osseuse et Reconstruction</h4>
              <p className="text-base leading-relaxed mb-6 text-justify">
                La reconstruction faciale est au cœur de notre expertise. Elle s&apos;adresse aux patients présentant des pertes de substance osseuse ou cutanée, qu&apos;elles soient congénitales ou acquises. Grâce à l&apos;utilisation de techniques de pointe comme la planification 3D assistée par ordinateur, nous pouvons aujourd&apos;hui réaliser des interventions d&apos;une précision millimétrique, garantissant des résultats plus prévisibles et des suites opératoires plus simples.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                <div className="p-8 rounded-3xl bg-white border border-[#E8DFD1] hover:border-[#0891B2]/20 transition-all duration-500">
                  <div className="w-12 h-12 rounded-2xl bg-[#0891B2]/5 flex items-center justify-center text-[#0891B2] mb-6">
                    <Microscope className="w-6 h-6" />
                  </div>
                  <h5 className="font-lora text-xl text-[#241F1A] mb-3">Diagnostic 3D</h5>
                  <p className="text-sm leading-relaxed">Utilisation systématique du Cone Beam pour une analyse spatiale parfaite des structures.</p>
                </div>
                <div className="p-8 rounded-3xl bg-white border border-[#E8DFD1] hover:border-[#0891B2]/20 transition-all duration-500">
                  <div className="w-12 h-12 rounded-2xl bg-[#0891B2]/5 flex items-center justify-center text-[#0891B2] mb-6">
                    <Beaker className="w-6 h-6" />
                  </div>
                  <h5 className="font-lora text-xl text-[#241F1A] mb-3">Innovation</h5>
                  <p className="text-sm leading-relaxed">Protocoles chirurgicaux de pointe issus de la recherche clinique hospitalière.</p>
                </div>
              </div>

              <h4 className="font-lora text-2xl text-[#241F1A] mt-12 mb-6">L&apos;Orthognathie : Redessiner l&apos;équilibre</h4>
              <p className="text-base leading-relaxed mb-8 text-justify">
                La chirurgie orthognathique vise à corriger les dysmorphies dento-maxillo-faciales, c&apos;est-à-dire les décalages entre la mâchoire supérieure et la mâchoire inférieure. Ces décalages peuvent entraîner des problèmes de mastication, de respiration (apnées du sommeil), des douleurs articulaires et une gêne esthétique. En collaboration avec votre orthodontiste, le Dr Jullian planifie et réalise le repositionnement des mâchoires pour un équilibre fonctionnel et une harmonie faciale retrouvée. 
                <a href="/services/orthognathie" className="ml-2 text-[#0891B2] hover:underline inline-flex items-center gap-1">En savoir plus <ArrowRight className="w-3 h-3"/></a>
              </p>
            </div>
          </div>

          {/* TRUST SECTION */}
          <div className="space-y-20">
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A67A3D]">Engagement & Qualité</span>
              <h2 className="font-lora text-4xl md:text-5xl font-medium text-[#241F1A]">Pourquoi choisir une prise en charge hospitalière ?</h2>
              <p className="text-[#5A534A] leading-relaxed">
                Le GHRMSA Mulhouse offre un environnement sécurisé avec accès à un plateau technique complet, une réanimation et une surveillance continue 24h/24.
              </p>
            </div>
            <EeatTrustGrid />
          </div>

          {/* FAQ */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0891B2]">Questions Fréquentes</span>
                <h2 className="font-lora text-4xl font-medium text-[#241F1A]">Tout savoir sur l&apos;intervention</h2>
            </div>
            <MedicalFAQ />
          </div>

          {/* CALL TO ACTION */}
          <section className="p-12 md:p-24 rounded-[3.5rem] bg-[#241F1A] text-white overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
              <div className="w-full h-full bg-precision-grid" />
            </div>
            <div className="relative z-10 flex flex-col items-center text-center space-y-12">
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#C5A065]">Première Consultation</span>
                <h2 className="font-lora text-4xl md:text-6xl font-medium leading-[1.1]">Établir votre <br /> plan de traitement</h2>
              </div>
              <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
                Chaque cas est unique. Lors de votre rendez-vous, nous réaliserons un examen clinique complet pour vous proposer la solution la plus adaptée.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg">
                <a href={`tel:${floraContext.contact.phone}`} className="flex-1 group flex items-center justify-center gap-4 rounded-full bg-[#C5A065] px-10 py-6 text-[11px] font-black uppercase tracking-[0.2em] text-[#241F1A] transition-all hover:bg-white hover:scale-[1.02]">
                  Appeler le cabinet <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </section>

        </section>
      </div>

      <MedicalFooter context={floraContext} data={floraData} />
    </main>
  );
}
