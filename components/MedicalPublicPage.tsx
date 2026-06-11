'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Clock, 
  MapPin, 
  Award, 
  ChevronRight, 
  User, 
  FileText, 
  Stethoscope, 
  ArrowRight, 
  ShieldCheck,
  AlertTriangle,
  Heart 
} from 'lucide-react';
import { SiteContext, MedicalData, MedicalService, MedicalHour } from '../lib/types';

// Standalone Components (Copied locally) lo
import EeatTrustGrid from './EeatTrustGrid';
import PatientTimeline from './PatientTimeline';
import FeeSimulator from './FeeSimulator';
import ReviewCarousel from './ReviewCarousel';
import MedicalFAQ from './MedicalFAQ';
import RecentArticles from './RecentArticles';

interface Props {
  context: SiteContext;
  data?: MedicalData | null;
}

export default function MedicalPublicPage({ context, data }: Props) {
  const medical = data;
  const [showStickyBtn, setShowStickyBtn] = React.useState(false);

  const [isSecretariatOpen, setIsSecretariatOpen] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setShowStickyBtn(scrollPos > 450);
    };

    const checkOpenStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Dimanche, 1 = Lundi, ..., 5 = Vendredi, 6 = Samedi
      const hour = now.getHours();
      const minute = now.getMinutes();
      const currentTime = hour * 60 + minute;

      if (day >= 1 && day <= 4) { // Lun - Jeu
        setIsSecretariatOpen(currentTime >= 8 * 60 + 30 && currentTime < 16 * 60 + 30);
      } else if (day === 5) { // Vendredi
        setIsSecretariatOpen(currentTime >= 8 * 60 + 30 && currentTime < 12 * 60);
      } else { // Week-end
        setIsSecretariatOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000); // Check every minute

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  if (!medical) return null;

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#FAF9F6] text-[#2F2A24] transition-colors duration-300">
      {/* Editorial Grid & Noise Background */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] bg-precision-grid" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-noise opacity-[0.4]" />

      {/* HERO: Hybrid Split Premium */}
      <section id="hero" className="relative z-10 border-b border-[#E8DFD1]/60 bg-transparent pt-32 pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 z-20 space-y-12">
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-3 rounded-full border border-[#C5A065]/20 bg-[#C5A065]/5 px-5 py-2 text-[#A67A3D]">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Praticienne Hospitalière</span>
                </div>
                <div className="inline-flex items-center gap-3 rounded-full border border-[#0891B2]/20 bg-[#0891B2]/5 px-5 py-2 text-[#0891B2]">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em]">GHRMSA Mulhouse</span>
                </div>
              </div>

              <div className="relative">
                <h1 className="font-lora text-[clamp(48px,8.5vw,90px)] font-medium leading-[0.85] tracking-[-0.04em] text-[#241F1A]">
                  <span className="block italic opacity-40 text-[0.4em] tracking-[0.2em] uppercase font-sans mb-4">Expertise Hospitalière & Libérale</span>
                  <span className="block">{context.businessName.split(' ')[0]}</span>
                  <span className="block opacity-60 ml-[0.1em]">{context.businessName.split(' ').slice(1).join(' ')}</span>
                </h1>
              </div>

              <div className="flex flex-col gap-10 md:flex-row md:items-center lg:max-w-2xl">
                <p className="max-w-md text-lg leading-relaxed text-[#5A534A]">
                  Chirurgien maxillo-facial de référence au GHRMSA. Une prise en charge d&apos;excellence au sein d&apos;un plateau technique hospitalier de pointe.
                </p>
                <div className="h-px flex-1 bg-[#E8DFD1]/80 hidden md:block" />
                <div className="flex items-center gap-6 text-right">
                    <div className="text-[9px] font-bold uppercase tracking-widest text-[#A67A3D]">RPPS</div>
                    <div className="text-sm font-semibold">10101603602</div>
                </div>
              </div>

              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <a href={`tel:${context.contact.phone}`} className="group flex items-center gap-4 rounded-full bg-[#241F1A] px-10 py-6 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#0891B2] shadow-xl">
                  Contacter le secrétariat
                  <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1" />
                </a>
                <div className="space-y-1">
                  <div className="text-[9px] font-bold uppercase tracking-widest text-[#A67A3D]">Parcours Hospitalier</div>
                  <div className="text-[10px] text-[#5A534A] leading-relaxed italic">Consultations privées à l'hôpital</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-8 rounded-[3rem] bg-[#C5A065]/5 blur-3xl" />
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3rem] border border-[#E8DFD1] shadow-2xl">
                <Image src="/drjullian.png" alt="Dr Flora Jullian" fill className="object-cover" priority />
              </div>
              <div className="absolute -left-12 bottom-12 hidden lg:block rounded-3xl border border-white/20 bg-white/40 p-6 backdrop-blur-xl shadow-xl">
                <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#A67A3D] mb-2">Structure hospitalière</div>
                <div className="text-sm font-semibold text-[#241F1A]">GHRMSA Mulhouse</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="expertise" className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:py-48">
        <div className="mx-auto mb-16 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#C5A065]/40" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A67A3D]">Expertise</span>
          </div>
          <h2 className="font-lora text-[clamp(32px,5vw,64px)] font-medium leading-[1.1] tracking-[-0.02em] text-[#241F1A]">
            Domaines de spécialité & interventions
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {medical.services.map((service, idx) => (
            <a href={`/services/${service.slug}`} key={service.id} className="group relative overflow-hidden rounded-[2rem] border border-[#E8DFD1] bg-white p-8 transition-all duration-500 hover:border-[#C5A065]/30 hover:shadow-2xl flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#0891B2]/10 bg-[#0891B2]/5 text-[#0891B2]">
                  <Stethoscope className="h-6 w-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-lora text-2xl font-medium text-[#241F1A] transition-colors group-hover:text-[#0891B2]">{service.name}</h3>
                  <p className="text-sm leading-relaxed text-[#5A534A]">{service.description}</p>
                </div>
              </div>
              <div className="mt-12 flex items-center justify-between border-t border-[#E8DFD1]/50 pt-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#0891B2]/80">Découvrir l'intervention</span>
                <ChevronRight className="h-4 w-4 text-[#0891B2] transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* SYMPTOMES */}
      <section id="symptomes" className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:py-48 bg-[#FAF9F6]">
        <div className="mx-auto mb-20 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#C5A065]/40" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A67A3D]">Aide au diagnostic</span>
          </div>
          <h2 className="font-lora text-[clamp(32px,5vw,64px)] font-medium leading-[1.1] tracking-[-0.02em] text-[#241F1A]">
            Quand consulter ?<br />
            <span className="italic opacity-60">Symptômes fréquents</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              title: "Douleur à la mâchoire",
              description: "Craquements, blocages ou douleurs persistantes lors de la mastication.",
              link: "/symptomes/douleur-machoire",
              icon: <AlertTriangle className="h-6 w-6" />
            },
            {
              title: "Gonflement du visage",
              description: "Apparition d'un oedème, d'une rougeur ou d'une tension anormale.",
              link: "/symptomes/gonflement",
              icon: <ShieldCheck className="h-6 w-6" />
            },
            {
              title: "Dents de sagesse qui poussent",
              description: "Douleurs en fond de bouche, gencives inflammées ou chevauchement dentaire.",
              link: "/symptomes/dents-de-sagesse-poussent",
              icon: <Stethoscope className="h-6 w-6" />
            }
          ].map((item, idx) => (
            <a 
              href={item.link} 
              key={idx} 
              className="group relative overflow-hidden rounded-[2.5rem] border border-[#E8DFD1] bg-white p-10 transition-all duration-500 hover:border-[#C5A065]/30 hover:shadow-2xl flex flex-col justify-between"
            >
              <div className="space-y-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C5A065]/10 bg-[#C5A065]/5 text-[#A67A3D] transition-colors group-hover:bg-[#0891B2]/5 group-hover:text-[#0891B2]">
                  {item.icon}
                </div>
                <div className="space-y-4">
                  <h3 className="font-lora text-2xl font-medium text-[#241F1A] transition-colors group-hover:text-[#0891B2]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#5A534A]">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="mt-12 flex items-center justify-between border-t border-[#E8DFD1]/50 pt-8">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#A67A3D] group-hover:text-[#0891B2]">Consulter</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FAF9F6] transition-transform group-hover:translate-x-1 group-hover:bg-[#0891B2]/10">
                  <ChevronRight className="h-4 w-4 text-[#A67A3D] group-hover:text-[#0891B2]" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <ReviewCarousel />

      <section id="parcours" className="relative z-10 border-y border-[#E8DFD1]/60 bg-[#F2EBDD]/30 px-6 py-32 md:py-48">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#A67A3D]">Protocole</div>
            <h2 className="mt-4 font-lora text-4xl font-medium tracking-tight text-[#241F1A]">Votre parcours de soins à Mulhouse</h2>
          </div>
          <div className="rounded-[3rem] border border-[#E8DFD1] bg-white p-8 shadow-sm md:p-12">
            <PatientTimeline />
          </div>
        </div>
      </section>

      <RecentArticles data={medical} />

      <MedicalFAQ />

      {/* PRATICIEN */}
      <section id="praticien" className="relative z-10 px-6 py-32 md:py-64">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-24 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[3rem] border border-[#E8DFD1] shadow-2xl">
                <Image src="/drjullian.png" alt="Dr Flora Jullian" fill className="object-cover" />
                <div className="absolute top-12 right-12 rounded-full border border-white/20 bg-white/40 px-6 py-6 backdrop-blur-xl shadow-xl flex flex-col items-center">
                  <span className="font-lora text-3xl font-bold text-[#241F1A]">10+</span>
                  <span className="text-[8px] font-bold uppercase tracking-widest text-[#A67A3D]">Années d'expertise</span>
                </div>
              </div>
              <div className="absolute -bottom-16 -right-16 hidden xl:block max-w-sm rounded-[2.5rem] border border-[#E8DFD1] bg-white p-10 shadow-2xl shadow-[#C5A065]/10">
                  <p className="font-lora text-xl italic leading-relaxed text-[#241F1A]">"La précision chirurgicale n'est rien sans une écoute attentive et une humanité profonde."</p>
                  <div className="mt-6 h-px w-12 bg-[#C5A065]/40" />
                  <div className="mt-4 text-[10px] font-bold uppercase tracking-widest text-[#A67A3D]">Signature du Praticien</div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-16">
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="h-px w-12 bg-[#C5A065]/40" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A67A3D]">Expertise Clinique</span>
                  </div>
                  <div className="space-y-4">
                    <h2 className="font-lora text-[clamp(40px,5vw,72px)] font-medium leading-[1] text-[#241F1A]">{medical.doctors[0].fullname}</h2>
                    <p className="text-2xl font-medium text-[#0891B2]/80">Praticienne Hospitalière au GHRMSA</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
                  <div className="space-y-6">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#A67A3D]">Diplômes & Formations</h4>
                    <ul className="space-y-4 text-sm leading-relaxed text-[#5A534A]">
                      <li className="border-l border-[#E8DFD1] pl-4">D.I.U. Chirurgie Orthognathique</li>
                      <li className="border-l border-[#E8DFD1] pl-4">D.U. Chirurgie Plastique Face</li>
                      <li className="border-l border-[#E8DFD1] pl-4">D.U. Microchirurgie</li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#A67A3D]">Parcours Hospitalier</h4>
                    <ul className="space-y-4 text-sm leading-relaxed text-[#5A534A]">
                      <li className="border-l border-[#E8DFD1] pl-4">PH au GHRMSA (Mulhouse)</li>
                      <li className="border-l border-[#E8DFD1] pl-4">Hôpitaux de Strasbourg</li>
                    </ul>
                  </div>
                </div>
                <EeatTrustGrid rppsNumber="10101603602" conventionnement="Secteur 2 (OPTAM)" />
                <div className="pt-8">
                  <a href={`tel:${context.contact.phone}`} className="inline-flex items-center gap-4 rounded-full bg-[#241F1A] px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#C5A065] shadow-lg">
                    Prendre rendez-vous
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCES */}
      <section id="infos-pratiques" className="relative z-10 border-t border-[#E8DFD1]/60 bg-transparent px-6 py-32 md:py-48">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5 space-y-16">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-[#0891B2]">
                  <div className="h-px w-12 bg-[#0891B2]/40" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Venir au cabinet</span>
                </div>
                <h2 className="font-lora text-5xl font-medium text-[#241F1A]">Pôle de Consultation</h2>
              </div>
              <div className="space-y-12">
                <div className="flex items-start gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0891B2]/5 text-[#0891B2]"><MapPin /></div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-[#A67A3D]">Unité de Consultation</div>
                      <div className="text-xl font-medium text-[#241F1A]">20 Avenue du Dr René Laennec, 68100 Mulhouse</div>
                    </div>
                </div>
                <div className="p-8 rounded-3xl bg-[#FAF6F0] border border-[#EA4335]/20 space-y-4">
                    <div className="flex items-center gap-3 text-[#EA4335]">
                      <AlertTriangle className="h-5 w-5" />
                      <span className="text-[11px] font-black uppercase tracking-widest">Urgence Médicale</span>
                    </div>
                    <p className="text-sm text-[#5A534A]">En cas de <strong>traumatisme facial récent</strong>, contactez le <strong>15</strong> ou les <strong>Urgences du GHRMSA</strong>.</p>
                </div>

                <div className="pt-4">
                  <a href="/parcours" className="group inline-flex items-center gap-4 rounded-2xl border border-[#C5A065]/20 bg-white px-8 py-6 text-[10px] font-bold uppercase tracking-widest text-[#A67A3D] transition-all hover:bg-[#C5A065]/5">
                    <FileText className="h-4 w-4" />
                    Consulter les étapes de votre parcours
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 h-[500px] rounded-[3rem] bg-[#F6F1E9] border border-[#E8DFD1] flex items-center justify-center">
                <p className="font-lora text-xl text-[#A67A3D]">Carte Google Maps Interactive</p>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY CONTACT */}
      {showStickyBtn && (
        <div className="fixed bottom-6 left-6 right-6 z-[110] md:hidden">
          <div className={`flex items-center gap-3 rounded-full p-2 backdrop-blur-md shadow-2xl ${isSecretariatOpen ? 'bg-[#241F1A]/95' : 'bg-[#EA4335]/95'}`}>
            <a href={`tel:${isSecretariatOpen ? context.contact.phone : '15'}`} className="flex-1 flex items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#241F1A]">
              {isSecretariatOpen ? (
                <>
                  <Clock className="h-4 w-4" /> Appeler Secrétariat
                </>
              ) : (
                <>
                  <AlertTriangle className="h-4 w-4 text-[#EA4335]" /> URGENCE : Appeler le 15
                </>
              )}
            </a>
            <a href={`mailto:${context.contact.email}`} className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
              <FileText className="h-5 w-5" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
