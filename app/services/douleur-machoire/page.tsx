'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronLeft, Clock, Activity, ArrowRight, CheckCircle2, HeartPulse, Stethoscope, Calendar } from 'lucide-react';
import MedicalHeader from '@/components/MedicalHeader';
import MedicalFooter from '@/components/MedicalFooter';
import MedicalFAQ from '@/components/MedicalFAQ';
import { floraContext, floraData } from '@/lib/constants';

export default function DouleurMachoirePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Traitement des troubles de l'articulation temporo-mandibulaire (ATM)",
      "procedureType": "MedicalTherapy",
      "description": "Diagnostic et traitement des douleurs de la mâchoire, craquements et blocages articulaires.",
      "preparation": "Consultation spécialisée avec examen clinique de la posture et de l'occlusion.",
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
          "name": "Douleur Mâchoire",
          "item": "https://dr-flora-jullian.fr/services/douleur-machoire"
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
                <div className="inline-flex items-center gap-3 rounded-full border border-[#C5A065]/20 bg-[#C5A065]/5 px-5 py-2 text-[#A67A3D]">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Pathologie Articulaire & Musculaire</span>
                </div>
                <h1 className="font-lora text-[clamp(48px,7vw,92px)] font-medium leading-[0.95] tracking-tight text-[#241F1A]">
                  Troubles de la <br /> <span className="opacity-60 italic">Mâchoire à Mulhouse (ATM)</span>
                </h1>
                <p className="text-xl text-[#5A534A] max-w-2xl leading-relaxed">
                  Diagnostic précis et prise en charge globale des dysfonctionnements temporo-mandibulaires en Alsace pour retrouver un confort durable au GHRMSA Mulhouse.
                </p>
              </div>
              <div className="lg:col-span-4 pb-4">
                <div className="p-8 rounded-[2.5rem] border border-[#E8DFD1] bg-white shadow-xl shadow-[#C5A065]/5 space-y-6">
                  <div className="flex items-center gap-3 text-[#0891B2]">
                    <Activity className="w-5 h-5" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Diagnostic Expert</span>
                  </div>
                  <p className="text-sm text-[#5A534A] leading-relaxed">
                    Une évaluation clinique minutieuse est la clé pour identifier l&apos;origine de vos douleurs maxillaires.
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
          
          {/* COMPRENDRE LE TROUBLE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-[#0891B2]/40"/>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0891B2]">Symptomatologie</span>
              </div>
              <h2 className="font-lora text-5xl font-medium leading-[1.1] text-[#241F1A]">Identifier les <br /> dysfonctionnements</h2>
              <p className="text-lg text-[#5A534A] leading-relaxed">
                Les troubles de l&apos;articulation temporo-mandibulaire (ATM) touchent une grande partie de la population et se manifestent de manières variées.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Douleurs', 'Craquements', 'Blocages', 'Bruxisme'].map(s => (
                  <div key={s} className="p-4 rounded-2xl border border-[#E8DFD1] bg-white flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#0891B2]" />
                    <span className="text-[10px] font-bold text-[#241F1A] uppercase tracking-wide">{s}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-7 space-y-12">
              <div className="prose prose-stone max-w-none text-[#5A534A]">
                <h3 className="font-lora text-3xl text-[#241F1A] mb-6">Une origine souvent multifactorielle</h3>
                <p className="text-base leading-relaxed mb-6">
                  Les douleurs de la mâchoire peuvent provenir des muscles masticateurs, de l&apos;articulation elle-même (disque, cartilage) ou d&apos;un problème d&apos;occlusion dentaire. Le stress, les mauvaises postures ou des antécédents de traumatisme facial sont souvent des facteurs aggravants.
                </p>
                <div className="bg-[#FAF6F0] p-10 rounded-[2.5rem] border border-[#E8DFD1] my-10 space-y-6">
                  <h4 className="font-lora text-xl text-[#241F1A]">Notre démarche diagnostique</h4>
                  <ul className="space-y-4 list-none p-0">
                    <li className="flex gap-4">
                      <span className="text-[#A67A3D] font-bold">01.</span>
                      <p className="text-sm">Examen clinique postural et palpation des muscles et articulations.</p>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-[#A67A3D] font-bold">02.</span>
                      <p className="text-sm">Analyse de la dynamique mandibulaire et de l&apos;occlusion.</p>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-[#A67A3D] font-bold">03.</span>
                      <p className="text-sm">Imagerie spécialisée si nécessaire (IRM, Scanner ou Cone Beam).</p>
                    </li>
                  </ul>
                </div>
                <h3 className="font-lora text-3xl text-[#241F1A] mb-6">Options Thérapeutiques</h3>
                <p className="text-base leading-relaxed">
                  Le traitement est progressif et privilégie toujours les méthodes les moins invasives en première intention :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="p-8 rounded-3xl border border-[#E8DFD1] space-y-3">
                    <h5 className="font-bold text-[#241F1A] uppercase text-xs tracking-widest">Traitements conservateurs</h5>
                    <p className="text-xs text-[#5A534A]">Gouttières occlusales, rééducation maxillo-faciale spécialisée, gestion du stress.</p>
                  </div>
                  <div className="p-8 rounded-3xl border border-[#E8DFD1] space-y-3">
                    <h5 className="font-bold text-[#241F1A] uppercase text-xs tracking-widest">Interventions ciblées</h5>
                    <p className="text-xs text-[#5A534A]">Injections de toxine botulique (muscles), arthrocentèse (lavage articulaire).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* APPROCHE PLURIDISCIPLINAIRE */}
          <section className="py-24 px-12 rounded-[3rem] bg-[#241F1A] text-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <HeartPulse className="w-12 h-12 text-[#C5A065] mx-auto" />
              <h2 className="font-lora text-4xl font-medium">Une prise en charge coordonnée</h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
                Nous travaillons en réseau avec des kinésithérapeutes spécialisés, des ostéopathes et des orthodontistes pour vous offrir la solution la plus complète.
              </p>
              <div className="pt-8">
                <a href={`tel:${floraContext.contact.phone}`} className="inline-flex items-center gap-4 rounded-full bg-white px-10 py-6 text-xs font-bold uppercase tracking-[0.2em] text-[#241F1A] transition-all hover:bg-[#C5A065] hover:text-white">
                  Consulter pour un diagnostic
                </a>
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
