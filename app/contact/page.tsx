'use client';

import React from 'react';
import { ChevronLeft, MapPin, Phone, Mail, Clock, ArrowRight, Car, Bus, Train, ExternalLink, Calendar } from 'lucide-react';
import MedicalHeader from '@/components/MedicalHeader';
import MedicalFooter from '@/components/MedicalFooter';
import { floraContext, floraData } from '@/lib/constants';

export default function ContactPage() {
  return (
    <main className="theme-medical">
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
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Plan d&apos;accès & Contact</span>
                </div>
                <h1 className="font-lora text-[clamp(48px,6vw,84px)] font-medium leading-[0.95] tracking-tight text-[#241F1A]">
                  Nous <span className="opacity-60 italic">contacter</span>
                </h1>
                <p className="text-xl text-[#5A534A] max-w-2xl leading-relaxed">
                  Le cabinet du Dr Flora Jullian est situé au sein du GHRMSA Mulhouse. Notre secrétariat est à votre disposition pour toute demande de rendez-vous ou renseignement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT CARDS */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 rounded-[2.5rem] bg-white border border-[#E8DFD1] space-y-8 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-[#0891B2]/5 flex items-center justify-center text-[#0891B2]">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C5A065]">Téléphone</h4>
                <p className="text-2xl font-lora text-[#241F1A]">{floraContext.contact.phone}</p>
                <p className="text-xs text-[#5A534A]">Secrétariat ORL / Maxillo-Faciale</p>
              </div>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-white border border-[#E8DFD1] space-y-8 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-[#C5A065]/5 flex items-center justify-center text-[#C5A065]">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C5A065]">Email</h4>
                <p className="text-xl font-lora text-[#241F1A] break-all">{floraContext.contact.email}</p>
                <p className="text-xs text-[#5A534A]">Pour l&apos;envoi de documents médicaux</p>
              </div>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-[#241F1A] text-white space-y-8 shadow-2xl">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-[#C5A065]">
                <Clock className="w-6 h-6" />
              </div>
              <div className="space-y-4">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C5A065]">Heures de Secrétariat</h4>
                <div className="space-y-3">
                  {floraData.hours.map((h, i) => (
                    <div key={i} className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                      <span className="text-white/60">{h.day}</span>
                      <span className="font-medium">{h.open}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAP & ACCESS */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 pb-48">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7 space-y-8">
              <div className="aspect-video w-full rounded-[3rem] bg-[#E8DFD1]/30 border border-[#E8DFD1] relative overflow-hidden group">
                {/* Placeholder for map */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-[#A67A3D] space-y-4">
                    <MapPin className="w-12 h-12 opacity-20 group-hover:scale-110 transition-transform duration-700" />
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Module Carte Interactif</p>
                </div>
                {/* Mock map UI */}
                <div className="absolute bottom-8 left-8 p-6 rounded-2xl bg-white shadow-xl border border-[#E8DFD1] max-w-xs space-y-4">
                    <p className="text-xs font-bold text-[#241F1A] leading-relaxed">{floraContext.contact.address}</p>
                    <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(floraContext.contact.address)}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#0891B2] hover:underline"
                    >
                        Ouvrir dans Google Maps <ExternalLink className="w-3 h-3" />
                    </a>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { icon: <Car className="w-5 h-5" />, title: "Voiture", desc: "Parking P1 et P2 réservés aux consultants (GHRMSA)." },
                  { icon: <Bus className="w-5 h-5" />, title: "Bus", desc: "Lignes C5 et 16, arrêt 'Hôpital Emile Muller'." },
                  { icon: <Train className="w-5 h-5" />, title: "Tram", desc: "Ligne 1, arrêt 'Gare' puis liaison bus." }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white border border-[#E8DFD1] space-y-3">
                    <div className="text-[#A67A3D]">{item.icon}</div>
                    <h5 className="font-bold text-[#241F1A] uppercase tracking-wider text-[10px]">{item.title}</h5>
                    <p className="text-[11px] text-[#5A534A] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-[#C5A065]/40"/>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A67A3D]">Venir au cabinet</span>
                </div>
                <h2 className="font-lora text-4xl font-medium text-[#241F1A]">Précisions sur <br /> la localisation</h2>
                <div className="prose prose-stone text-[#5A534A] space-y-6">
                  <p className="text-base leading-relaxed">
                    Le secrétariat est situé au <strong>Rez-de-Chaussée</strong> du bâtiment principal (Hôpital Emile Muller). 
                  </p>
                  <p className="text-base leading-relaxed">
                    Suivez la signalétique &quot;Consultations ORL et Maxillo-Faciale&quot; dès l&apos;entrée principale. Un accueil est à votre disposition dans le hall pour vous orienter si nécessaire.
                  </p>
                </div>
              </div>

              <div className="p-10 rounded-[2.5rem] bg-[#FAF6F0] border border-[#C5A065]/20 space-y-8">
                <div className="flex items-center gap-4 text-[#A67A3D]">
                  <Calendar className="w-6 h-6" />
                  <h4 className="font-bold uppercase tracking-[0.1em] text-xs">Prendre rendez-vous</h4>
                </div>
                <p className="text-sm text-[#5A534A] leading-relaxed">
                  Pour une première consultation, merci de vous munir de votre carte vitale, de votre courrier d&apos;adressage ainsi que de vos examens radiologiques (Panoramique dentaire, Scanner ou Cone Beam).
                </p>
                <a href={`tel:${floraContext.contact.phone}`} className="group flex items-center justify-between w-full rounded-full bg-[#241F1A] px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#0891B2]">
                  Appeler maintenant <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <MedicalFooter context={floraContext} data={floraData} />
    </main>
  );
}
