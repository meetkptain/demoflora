import React from 'react';
import Image from 'next/image';
import { ChevronLeft, GraduationCap, Award, Building2, Heart, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SiteContext } from "@/lib/types";
import { MedicalData } from "@/lib/types";

export default function AproposPage({ context, data }: { context: SiteContext; data: MedicalData }) {
  const doctor = data.doctors[0];

  return (
    <div className="theme-medical">
      <div className="relative min-h-screen bg-[#FAF9F6] text-[#2F2A24] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] bg-precision-grid" />
        <div className="pointer-events-none absolute inset-0 z-0 bg-noise opacity-[0.4]" />

        {/* HERO SECTION */}
        <section className="relative pt-40 pb-24 px-6 border-b border-[#E8DFD1]/60 z-10">
          <div className="max-w-7xl mx-auto">
            <nav className="mb-12">
              <a href={`/${context.slug}`} className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#A67A3D] hover:text-[#241F1A] transition-colors">
                <ChevronLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                Retour à l&apos;accueil
              </a>
            </nav>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 rounded-full border border-[#C5A065]/20 bg-[#C5A065]/5 px-5 py-2 text-[#A67A3D]">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Portrait & Vision</span>
                </div>
                <h1 className="font-lora text-[clamp(48px,5vw,72px)] font-medium leading-[0.95] tracking-tight text-[#241F1A]">
                  Dr {doctor.fullname.split(' ').pop()}
                </h1>
                <p className="text-2xl font-lora italic text-[#5A534A] leading-relaxed">
                  &quot;L&apos;excellence chirurgicale au service de l&apos;humain, alliant technicité hospitalière et proximité libérale.&quot;
                </p>
                <p className="text-lg text-[#5A534A] leading-relaxed max-w-xl">
                  Praticienne hospitalière au GHRMSA Mulhouse, le Dr {doctor.fullname.split(' ').pop()} consacre son expertise à la chirurgie du visage, avec une spécialisation en reconstruction et chirurgie orthognathique.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-[#E8DFD1] shadow-2xl relative z-10">
                  <Image
                    src={doctor.photoUrl || "/drjullian.png"}
                    alt={doctor.fullname}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#C5A065]/5 rounded-full blur-3xl -z-0" />
                <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#0891B2]/5 rounded-full blur-3xl -z-0" />
              </div>
            </div>
          </div>
        </section>

        {/* PARCOURS & FORMATION */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4 space-y-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-[#C5A065]/40"/>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A67A3D]">Expertise</span>
                </div>
                <h2 className="font-lora text-4xl font-medium text-[#241F1A]">Formation Académique</h2>
              </div>
              
              <div className="space-y-8">
                {doctor.qualifications?.map((qual, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#E8DFD1] flex items-center justify-center text-[#A67A3D] shrink-0">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <p className="text-sm font-medium text-[#5A534A] leading-relaxed pt-2">
                      {qual}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-10 rounded-[2.5rem] bg-[#241F1A] text-white space-y-6">
                <Award className="w-10 h-10 text-[#C5A065]" />
                <h4 className="font-lora text-2xl">RPPS</h4>
                <p className="text-sm text-white/60 tracking-widest">{data.rppsNumber}</p>
                <div className="h-px w-full bg-white/10" />
                <p className="text-xs leading-relaxed text-white/70 italic">
                  Inscrite au tableau de l&apos;Ordre des Médecins en tant que spécialiste en Chirurgie Maxillo-Faciale et Stomatologie.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-16">
              <div className="prose prose-stone max-w-none text-[#5A534A]">
                <h3 className="font-lora text-3xl text-[#241F1A] mb-8">Un parcours d&apos;excellence hospitalière</h3>
                <p className="text-lg leading-relaxed mb-8">
                  Après avoir effectué son internat et son assistanat au sein des Hôpitaux Universitaires de Strasbourg, le Dr {doctor.fullname.split(' ').pop()} a rejoint le Groupe Hospitalier de la Région de Mulhouse et Sud-Alsace (GHRMSA) en tant que Praticienne Hospitalière.
                </p>
                <p className="text-lg leading-relaxed mb-12">
                  Cette double appartenance au monde hospitalier et à l&apos;exercice libéral lui permet d&apos;offrir à ses patients le meilleur des deux mondes : la sécurité et le plateau technique de pointe d&apos;un grand centre hospitalier, alliés à la disponibilité et au suivi personnalisé d&apos;un cabinet spécialisé.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-6 p-8 rounded-3xl bg-white border border-[#E8DFD1]">
                    <Building2 className="w-8 h-8 text-[#0891B2]" />
                    <h4 className="font-lora text-xl text-[#241F1A]">GHRMSA Mulhouse</h4>
                    <p className="text-sm leading-relaxed">
                      Responsable de l&apos;activité de chirurgie maxillo-faciale, elle y assure les interventions complexes et les gardes de traumatologie faciale.
                    </p>
                  </div>
                  <div className="space-y-6 p-8 rounded-3xl bg-white border border-[#E8DFD1]">
                    <Heart className="w-8 h-8 text-[#EA4335]" />
                    <h4 className="font-lora text-xl text-[#241F1A]">Engagement Patient</h4>
                    <p className="text-sm leading-relaxed">
                      Une approche centrée sur l&apos;écoute, l&apos;explication pédagogique et l&apos;accompagnement à chaque étape du parcours de soin.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                <h3 className="font-lora text-3xl text-[#241F1A]">Sa Vision Médicale</h3>
                <div className="grid grid-cols-1 gap-6">
                  {[
                    { 
                      title: "La Précision 3D", 
                      desc: "L'intégration des nouvelles technologies (planification numérique, guides chirurgicaux personnalisés) pour une précision chirurgicale optimale." 
                    },
                    { 
                      title: "La Sécurité Hospitalière", 
                      desc: "Le choix délibéré de réaliser toutes les interventions au bloc opératoire hospitalier pour une sécurité anesthésique et sanitaire maximale." 
                    },
                    { 
                      title: "L'Équilibre Fonctionnel", 
                      desc: "Ne jamais dissocier l'esthétique de la fonction. Une belle face est avant tout une face qui fonctionne parfaitement." 
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-8 items-center p-8 rounded-[2rem] bg-[#FAF6F0] border border-[#C5A065]/10 group hover:border-[#C5A065]/30 transition-all">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#C5A065] shrink-0 shadow-sm">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-[#241F1A] uppercase tracking-wider text-xs">{item.title}</h4>
                        <p className="text-sm text-[#5A534A] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="pb-32 px-6">
          <div className="max-w-7xl mx-auto p-12 md:p-24 rounded-[3.5rem] bg-[#FAF6F0] border border-[#E8DFD1] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
              <div className="w-full h-full bg-precision-grid" />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
              <div className="space-y-8 max-w-xl text-center md:text-left">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A67A3D]">Consultation</span>
                <h2 className="font-lora text-4xl md:text-5xl font-medium text-[#241F1A]">Rencontrer le <br /> Dr {doctor.fullname.split(' ').pop()}</h2>
                <p className="text-[#5A534A] text-lg">
                  Le cabinet vous accueille pour un premier bilan complet et une analyse personnalisée de votre situation.
                </p>
              </div>
              <div className="flex flex-col gap-4 shrink-0 w-full md:w-auto">
                <a href={`tel:${context.contact.phone}`} className="group flex items-center justify-center gap-4 rounded-full bg-[#241F1A] px-10 py-6 text-[11px] font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-[#0891B2]">
                  Prendre RDV <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
