'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronLeft, Clock, Activity, ArrowRight, CheckCircle2, Info, Stethoscope, Calendar } from 'lucide-react';
import MedicalHeader from '@/components/MedicalHeader';
import MedicalFooter from '@/components/MedicalFooter';
import MedicalFAQ from '@/components/MedicalFAQ';
import PatientTimeline from '@/components/PatientTimeline';
import { floraContext, floraData } from '@/lib/constants';

export default function OrthognathiePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Chirurgie Orthognathique",
      "procedureType": "SurgicalProcedure",
      "description": "Correction chirurgicale des décalages des mâchoires (prognathie, rétrognathie) pour restaurer l'équilibre fonctionnel et esthétique.",
      "preparation": "Consultation spécialisée et bilan orthodontique préalable.",
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
          "name": "Chirurgie Orthognathique",
          "item": "https://dr-flora-jullian.fr/services/orthognathie"
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
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Chirurgie Correctrice des Mâchoires</span>
                </div>
                <h1 className="font-lora text-[clamp(48px,7vw,92px)] font-medium leading-[0.95] tracking-tight text-[#241F1A]">
                  Chirurgie <br /> <span className="opacity-60 italic">Orthognathique à Mulhouse</span>
                </h1>
                <p className="text-xl text-[#5A534A] max-w-2xl leading-relaxed">
                  Restauration de l&apos;équilibre fonctionnel et de l&apos;harmonie faciale par la correction chirurgicale des décalages des mâchoires en Alsace. Une expertise de pointe au GHRMSA Mulhouse.
                </p>
              </div>
              <div className="lg:col-span-4 pb-4">
                <div className="p-8 rounded-[2.5rem] border border-[#E8DFD1] bg-white shadow-xl shadow-[#C5A065]/5 space-y-6">
                  <div className="flex items-center gap-3 text-[#0891B2]">
                    <Calendar className="w-5 h-5" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Consultation Spécialisée</span>
                  </div>
                  <p className="text-sm text-[#5A534A] leading-relaxed">
                    Le Dr Flora Jullian vous reçoit en consultation au GHRMSA de Mulhouse pour évaluer votre besoin chirurgical.
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
          
          {/* L'APPROCHE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-[#C5A065]/40"/>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A67A3D]">L&apos;Approche</span>
              </div>
              <h2 className="font-lora text-5xl font-medium leading-[1.1] text-[#241F1A]">Une synergie <br /> Ortho-Chirurgicale</h2>
              <p className="text-lg text-[#5A534A] leading-relaxed">
                La chirurgie orthognathique n&apos;est jamais une intervention isolée. Elle s&apos;inscrit dans un parcours de soins global, en collaboration étroite avec votre orthodontiste en Alsace.
              </p>
              <div className="space-y-6 pt-4">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 h-5 w-5 rounded-full bg-[#0891B2]/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-[#0891B2]" />
                  </div>
                  <p className="text-sm text-[#5A534A] leading-relaxed"><span className="font-bold text-[#241F1A]">Équilibre fonctionnel :</span> Amélioration de la mastication, de la respiration et de l&apos;élocution.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="mt-1 h-5 w-5 rounded-full bg-[#0891B2]/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-[#0891B2]" />
                  </div>
                  <p className="text-sm text-[#5A534A] leading-relaxed"><span className="font-bold text-[#241F1A]">Esthétique faciale :</span> Restauration d&apos;un profil harmonieux et d&apos;un sourire équilibré.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="mt-1 h-5 w-5 rounded-full bg-[#0891B2]/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-[#0891B2]" />
                  </div>
                  <p className="text-sm text-[#5A534A] leading-relaxed"><span className="font-bold text-[#241F1A]">Santé à long terme :</span> Prévention de l&apos;usure dentaire prématurée et des troubles de l&apos;ATM.</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7 space-y-12">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[3rem] border border-[#E8DFD1] shadow-2xl">
                <Image src="/planning-3d.png" alt="Planification 3D Chirurgie Orthognathique à Mulhouse" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241F1A]/40 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                  <div className="text-white">
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">Technologie</span>
                    <p className="text-xl font-lora">Planification Numérique 3D</p>
                  </div>
                </div>
              </div>
              
              <div className="prose prose-stone max-w-none text-[#5A534A]">
                <h3 className="font-lora text-3xl text-[#241F1A] mb-6">Pourquoi une intervention ?</h3>
                <p className="text-base leading-relaxed mb-6">
                  De nombreux patients présentent un décalage entre la mâchoire supérieure (maxillaire) et la mâchoire inférieure (mandibule). Lorsque ce décalage est trop important pour être corrigé par le seul déplacement des dents, une intervention chirurgicale devient nécessaire.
                </p>
                <p className="text-base leading-relaxed mb-8">
                  Ces anomalies peuvent se manifester par un menton trop en avant (prognathie), trop en arrière (rétrognathie), une béance dentaire (les dents ne se touchent pas) ou une asymétrie faciale. Au-delà de l&apos;aspect esthétique, ces situations entraînent souvent une gêne fonctionnelle majeure.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                  <div className="p-10 rounded-[2.5rem] bg-white border border-[#E8DFD1] space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#C5A065]/5 flex items-center justify-center text-[#A67A3D]">
                      <Activity className="w-6 h-6" />
                    </div>
                    <h4 className="font-lora text-xl text-[#241F1A]">Signes Cliniques</h4>
                    <ul className="text-sm space-y-3 list-none p-0">
                      <li className="flex gap-2"><span>•</span> Difficulté de mastication</li>
                      <li className="flex gap-2"><span>•</span> Respiration buccale</li>
                      <li className="flex gap-2"><span>•</span> Apnées du sommeil</li>
                      <li className="flex gap-2"><span>•</span> Fatigue articulaire</li>
                    </ul>
                  </div>
                  <div className="p-10 rounded-[2.5rem] bg-[#241F1A] text-white space-y-4 shadow-xl">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#C5A065]">
                      <Stethoscope className="w-6 h-6" />
                    </div>
                    <h4 className="font-lora text-xl">L&apos;Intervention</h4>
                    <p className="text-xs opacity-70 leading-relaxed">
                      Réalisée sous anesthésie générale, l&apos;intervention est entièrement faite par l&apos;intérieur de la bouche. Aucune cicatrice n&apos;est visible sur le visage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PARCOURS DE SOINS */}
          <section className="relative py-24 border-y border-[#E8DFD1]/60 bg-[#F2EBDD]/20 -mx-6 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A67A3D]">Chronologie</span>
                <h2 className="font-lora text-4xl font-medium text-[#241F1A]">Le Parcours Patient</h2>
              </div>
              <PatientTimeline />
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
