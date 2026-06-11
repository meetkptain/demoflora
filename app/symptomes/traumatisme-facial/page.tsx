'use client';

import React from 'react';
import { ChevronLeft, AlertCircle, Phone, Clock, ArrowRight, ShieldAlert, Heart, Stethoscope, Landmark } from 'lucide-react';
import MedicalHeader from '@/components/MedicalHeader';
import MedicalFooter from '@/components/MedicalFooter';
import MedicalFAQ from '@/components/MedicalFAQ';
import { floraContext, floraData } from '@/lib/constants';

export default function TraumatismeFacialPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Traumatisme facial",
      "description": "Blessures et fractures du visage (mâchoire, nez, pommettes) suite à un accident ou un choc.",
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Chirurgie reconstructrice faciale"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Ostéosynthèse des fractures faciales"
        }
      ]
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
          "name": "Symptômes",
          "item": "https://dr-flora-jullian.fr/symptomes"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Traumatisme Facial",
          "item": "https://dr-flora-jullian.fr/symptomes/traumatisme-facial"
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
                <div className="inline-flex items-center gap-3 rounded-full border border-[#EA4335]/20 bg-[#EA4335]/5 px-5 py-2 text-[#EA4335]">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Urgence Traumatologique</span>
                </div>
                <h1 className="font-lora text-[clamp(40px,6vw,80px)] font-medium leading-[0.95] tracking-tight text-[#241F1A]">
                  Choc ou <br /> <span className="opacity-60 italic">Traumatisme Facial</span>
                </h1>
                <p className="text-xl text-[#5A534A] max-w-2xl leading-relaxed">
                  Un accident facial est une source d&apos;inquiétude majeure. Une prise en charge spécialisée immédiate est la clé pour restaurer la fonction et l&apos;esthétique.
                </p>
              </div>
              <div className="lg:col-span-4 pb-4">
                <div className="p-10 rounded-[2.5rem] bg-[#EA4335] text-white shadow-2xl shadow-[#EA4335]/20 space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 blur-3xl" />
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-6 h-6" />
                    <span className="text-[11px] font-black uppercase tracking-[0.2em]">Protocole d&apos;Urgence</span>
                  </div>
                  <h3 className="font-lora text-2xl leading-tight">En cas d&apos;accident grave, contactez les secours.</h3>
                  <a href="tel:15" className="flex items-center justify-center gap-3 w-full rounded-full bg-white px-8 py-5 text-[11px] font-black uppercase tracking-[0.2em] text-[#EA4335] transition-all hover:scale-[1.02]">
                    <Phone className="w-4 h-4" /> Appeler le 15
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT SECTIONS */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 py-32 space-y-48">
          
          {/* L'EXPERTISE HOSPITALIÈRE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-[#C5A065]/40"/>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A67A3D]">Sécurité & Plateau Technique</span>
              </div>
              <h2 className="font-lora text-5xl font-medium leading-[1.1] text-[#241F1A]">Une expertise <br /> de pointe au GHRMSA</h2>
              <p className="text-lg text-[#5A534A] leading-relaxed">
                Le Dr Flora Jullian assure la prise en charge des traumatismes faciaux au sein du plateau technique hospitalier. Son expertise en <a href="/services/chirurgie-maxillo-faciale" className="text-[#0891B2] hover:underline">chirurgie maxillo-faciale</a> garantit un accès immédiat à l&apos;imagerie (Scanner) et au bloc opératoire si nécessaire.
              </p>
              <div className="space-y-4 pt-4">
                {[
                  "Fractures de la mâchoire (mandibule)",
                  "Fractures de la pommette (os malaire)",
                  "Traumatismes dentaires et alvéolaires",
                  "Plaies du visage et sutures esthétiques"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E8DFD1]">
                    <ShieldAlert className="w-5 h-5 text-[#A67A3D]" />
                    <span className="text-sm font-medium text-[#241F1A]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-7 bg-[#FAF6F0] rounded-[3rem] p-12 md:p-20 space-y-12">
              <div className="prose prose-stone max-w-none text-[#5A534A]">
                <h3 className="font-lora text-3xl text-[#241F1A] mb-8">Les étapes de la prise en charge</h3>
                <div className="space-y-12">
                  {[
                    {
                      title: "Évaluation Initiale",
                      desc: "Examen clinique rigoureux pour rechercher des troubles de l'articulé dentaire, de la mobilité oculaire ou de la sensibilité nerveuse."
                    },
                    {
                      title: "Bilan Radiologique",
                      desc: "Réalisation en urgence d'un scanner facial 3D pour localiser précisément les traits de fracture."
                    },
                    {
                      title: "Geste Chirurgical",
                      desc: "Réduction des fractures et fixation par plaques et vis en titane (ostéosynthèse) si le déplacement le justifie."
                    },
                    {
                      title: "Suivi Post-traumatique",
                      desc: "Surveillance étroite de la consolidation osseuse et de la récupération fonctionnelle à long terme."
                    }
                  ].map((step, i) => (
                    <div key={i} className="relative pl-12">
                      <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white border border-[#C5A065] flex items-center justify-center text-[10px] font-bold text-[#A67A3D]">
                        0{i+1}
                      </div>
                      <h4 className="font-bold text-[#241F1A] uppercase tracking-wider text-xs mb-2">{step.title}</h4>
                      <p className="text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RASSURER LE PATIENT */}
          <section className="p-12 md:p-24 rounded-[3.5rem] bg-[#241F1A] text-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
              <div className="w-full h-full bg-precision-grid" />
            </div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C5A065]">Accompagnement</span>
                <h2 className="font-lora text-4xl md:text-5xl font-medium leading-tight text-white">Minimiser les séquelles, <br /> restaurer la confiance</h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  Notre priorité est de vous redonner votre visage d&apos;avant l&apos;accident. Grâce aux techniques de chirurgie mini-invasive, les cicatrices sont souvent invisibles (dissimulées dans la bouche ou les plis naturels).
                </p>
                <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
                        <Heart className="w-4 h-4 text-[#EA4335]" />
                        <span className="text-xs font-bold uppercase tracking-widest">Soin Bienveillant</span>
                    </div>
                    <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
                        <Stethoscope className="w-4 h-4 text-[#0891B2]" />
                        <span className="text-xs font-bold uppercase tracking-widest">Expertise Hospitalière</span>
                    </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Fracture Mandibule", link: "/services/chirurgie-maxillo-faciale" },
                  { title: "Chirurgie Osseuse", link: "/services/chirurgie-maxillo-faciale" },
                  { title: "Orthognathie Post-trauma", link: "/services/orthognathie" },
                  { title: "Suivi Spécialisé", link: "/contact" }
                ].map((link, i) => (
                  <a key={i} href={link.link} className="p-8 rounded-3xl bg-white/5 border border-white/10 group hover:bg-white hover:text-[#241F1A] transition-all duration-500">
                    <h4 className="font-lora text-xl mb-4">{link.title}</h4>
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                      Consulter <ArrowRight className="w-3 h-3" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ DÉDIÉE */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0891B2]">Informations Pratiques</span>
                <h2 className="font-lora text-4xl font-medium text-[#241F1A]">Questions Fréquentes sur les Traumatismes</h2>
            </div>
            <MedicalFAQ />
          </div>

          {/* INTERNAL LINKING */}
          <div className="max-w-3xl mx-auto text-center space-y-8 py-12 border-t border-[#E8DFD1]">
            <Landmark className="w-12 h-12 text-[#A67A3D] mx-auto opacity-40" />
            <h3 className="font-lora text-3xl text-[#241F1A]">Continuité des soins</h3>
            <p className="text-[#5A534A] leading-relaxed">
              Pour des informations plus générales sur les interventions chirurgicales du visage, vous pouvez consulter notre page dédiée à la <a href="/services/chirurgie-maxillo-faciale" className="text-[#0891B2] font-medium hover:underline">Chirurgie Maxillo-Faciale globale</a>.
            </p>
          </div>

        </section>
      </div>

      <MedicalFooter context={floraContext} data={floraData} />
    </main>
  );
}
