'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronLeft, Clock, AlertTriangle, ArrowRight, CheckCircle2, ShieldCheck, Stethoscope, Calendar } from 'lucide-react';
import MedicalHeader from '@/components/MedicalHeader';
import MedicalFooter from '@/components/MedicalFooter';
import MedicalFAQ from '@/components/MedicalFAQ';
import PatientTimeline from '@/components/PatientTimeline';
import { floraContext, floraData } from '@/lib/constants';

export default function DentsDeSagessePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Extraction des dents de sagesse",
      "procedureType": "SurgicalProcedure",
      "description": "Avulsion chirurgicale des dents de sagesse réalisée en milieu hospitalier pour prévenir complications et douleurs.",
      "preparation": "Consultation pré-opératoire avec analyse radiographique.",
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
          "name": "Dents de sagesse",
          "item": "https://dr-flora-jullian.fr/services/dents-de-sagesse"
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
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Bloc Opératoire Hospitalier</span>
                </div>
                <h1 className="font-lora text-[clamp(48px,7vw,92px)] font-medium leading-[0.95] tracking-tight text-[#241F1A]">
                  Extraction des <br /> <span className="opacity-60 italic">Dents de Sagesse à Mulhouse</span>
                </h1>
                <p className="text-xl text-[#5A534A] max-w-2xl leading-relaxed">
                  Avulsion chirurgicale sécurisée réalisée exclusivement en milieu hospitalier au GHRMSA Mulhouse pour une sécurité optimale en Alsace.
                </p>
              </div>
              <div className="lg:col-span-4 pb-4">
                <div className="p-8 rounded-[2.5rem] border border-[#E8DFD1] bg-white shadow-xl shadow-[#C5A065]/5 space-y-6">
                  <div className="flex items-center gap-3 text-[#A67A3D]">
                    <ShieldCheck className="w-5 h-5" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Sécurité Maximale</span>
                  </div>
                  <p className="text-sm text-[#5A534A] leading-relaxed">
                    Toutes nos interventions sont réalisées dans le respect strict des protocoles d&apos;hygiène hospitaliers.
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
          
          {/* L'INDICATION */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-[#C5A065]/40"/>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A67A3D]">Pourquoi intervenir ?</span>
              </div>
              <h2 className="font-lora text-5xl font-medium leading-[1.1] text-[#241F1A]">Préserver votre <br /> santé bucco-dentaire</h2>
              <p className="text-lg text-[#5A534A] leading-relaxed">
                L&apos;extraction des dents de sagesse est souvent nécessaire pour prévenir des complications futures ou résoudre des problèmes existants.
              </p>
              <div className="p-8 rounded-3xl bg-[#FAF6F0] border border-[#EA4335]/20 space-y-4">
                  <div className="flex items-center gap-3 text-[#EA4335]">
                    <AlertTriangle className="h-5 w-5" />
                    <span className="text-[11px] font-black uppercase tracking-widest">Signes d&apos;alerte</span>
                  </div>
                  <p className="text-sm text-[#5A534A]">Douleurs, gonflements, difficultés d&apos;ouverture buccale ou infections à répétition sont des motifs de consultation urgente.</p>
              </div>
            </div>
            
            <div className="lg:col-span-7 space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-10 rounded-[2.5rem] bg-white border border-[#E8DFD1] space-y-6 hover:border-[#0891B2]/30 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-[#0891B2]/5 flex items-center justify-center text-[#0891B2]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h4 className="font-lora text-2xl text-[#241F1A]">Prévention</h4>
                  <p className="text-sm text-[#5A534A] leading-relaxed">
                    Éviter le déplacement des autres dents, la formation de kystes ou l&apos;atteinte des racines des dents adjacentes.
                  </p>
                </div>
                <div className="p-10 rounded-[2.5rem] bg-white border border-[#E8DFD1] space-y-6 hover:border-[#0891B2]/30 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-[#0891B2]/5 flex items-center justify-center text-[#0891B2]">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <h4 className="font-lora text-2xl text-[#241F1A]">Soin</h4>
                  <p className="text-sm text-[#5A534A] leading-relaxed">
                    Traiter les infections (péricoronarites), les caries inaccessibles ou les douleurs chroniques.
                  </p>
                </div>
              </div>

              <div className="prose prose-stone max-w-none text-[#5A534A] pt-8">
                <h3 className="font-lora text-3xl text-[#241F1A] mb-6">Le protocole chirurgical</h3>
                <p className="text-base leading-relaxed mb-6">
                  L&apos;intervention se déroule au GHRMSA Mulhouse. Elle peut être réalisée sous anesthésie locale ou sous anesthésie générale (en ambulatoire), selon la complexité du cas et le souhait du patient.
                </p>
                <div className="space-y-6 my-10">
                  {[
                    { title: "Consultation Pré-opératoire", desc: "Analyse radiographique (panoramique ou Cone Beam 3D) et explication du protocole." },
                    { title: "L&apos;Intervention", desc: "Geste précis et rapide réalisé dans des conditions de stérilité hospitalière." },
                    { title: "Suivi Post-opératoire", desc: "Contrôle de la cicatrisation et conseils personnalisés pour une récupération rapide." }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-6 items-start border-l border-[#E8DFD1] pl-8 py-2">
                      <span className="text-[10px] font-black text-[#C5A065] opacity-40">0{i+1}</span>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-[#241F1A] uppercase tracking-wider">{step.title}</h4>
                        <p className="text-sm text-[#5A534A]">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CONSEILS POST-OP */}
          <section className="p-12 md:p-20 rounded-[3rem] bg-[#241F1A] text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
              <div className="w-full h-full bg-precision-grid" />
            </div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C5A065]">Récupération</span>
                <h2 className="font-lora text-4xl font-medium leading-tight">Conseils pour une <br /> cicatrisation sereine</h2>
                <p className="text-white/70 text-lg leading-relaxed">
                  La réussite de l&apos;intervention dépend également des soins que vous apporterez en post-opératoire.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A065]">Alimentation</h4>
                  <p className="text-xs text-white/60">Privilégiez les aliments mous et tièdes/froids les premiers jours.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A065]">Hygiène</h4>
                  <p className="text-xs text-white/60">Brossage doux et bains de bouche selon la prescription.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A065]">Repos</h4>
                  <p className="text-xs text-white/60">Évitez les efforts physiques intenses pendant 48 heures.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A065]">Tabac</h4>
                  <p className="text-xs text-white/60">Arrêt impératif pour éviter tout risque d&apos;alvéolite.</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ DÉDIÉE */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0891B2]">Informations Pratiques</span>
                <h2 className="font-lora text-4xl font-medium text-[#241F1A]">Questions Fréquentes</h2>
            </div>
            <MedicalFAQ />
          </div>

        </section>
      </div>

      <MedicalFooter context={floraContext} data={floraData} />
    </main>
  );
}
