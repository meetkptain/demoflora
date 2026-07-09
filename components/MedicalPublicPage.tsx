import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Clock, 
  MapPin, 
  ChevronRight, 
  User, 
  FileText, 
  Stethoscope, 
  ArrowRight, 
  ShieldCheck,
  AlertTriangle,
  Heart,
  Bone,
  Sparkles,
  Scissors,
  Zap,
  Calendar
} from 'lucide-react';
import { SiteContext, MedicalData, MedicalService, MedicalHour, MedicalSymptom } from '../lib/types';

// Standalone Components
import EeatTrustGrid from './EeatTrustGrid';
import ReviewCarousel from './ReviewCarousel';
import StickyContact from './StickyContact';
import { site } from '@/lib/site';
import { symptomData } from '@/lib/constants';
import { CATEGORY_ORDER, sortByPriority } from '@/lib/categories';

interface Props {
  context: SiteContext;
  data?: MedicalData | null;
}

export default function MedicalPublicPage({ context, data }: Props) {
  const medical = data;

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
                  <span className="text-[11px] font-bold uppercase tracking-[0.3em]">Praticienne Hospitalière</span>
                </div>
                <div className="inline-flex items-center gap-3 rounded-full border border-[#0891B2]/20 bg-[#0891B2]/5 px-5 py-2 text-[#0891B2]">
                  <span className="text-[11px] font-bold uppercase tracking-[0.3em]">GHRMSA Mulhouse</span>
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
                <p className="max-w-md text-lg leading-relaxed text-[#423C35]">
                  Chirurgien maxillo-facial de référence au GHRMSA. Une prise en charge d&apos;excellence au sein d&apos;un plateau technique hospitalier de pointe.
                </p>
              </div>

              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <a href={`tel:${context.contact.phone}`} className="group flex items-center gap-4 rounded-full bg-[#241F1A] px-10 py-6 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#0891B2] shadow-xl md:hidden">
                  Contacter le secrétariat
                  <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1" />
                </a>
                <Link href="/contact" className="group hidden md:flex items-center gap-4 rounded-full bg-[#241F1A] px-10 py-6 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#0891B2] shadow-xl">
                  Contacter le secrétariat
                  <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
                <div className="space-y-1">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-[#A67A3D]">Parcours Hospitalier</div>
                  <div className="text-[11px] text-[#423C35] leading-relaxed italic">Consultations privées à l'hôpital</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-8 rounded-[3rem] bg-[#C5A065]/5 blur-3xl" />
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3rem] border border-[#E8DFD1] shadow-2xl">
                <Image src="/drjullian.webp" alt="Dr Flora Jullian" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
              </div>
              <div className="absolute -left-12 bottom-12 hidden lg:block rounded-3xl border border-white/20 bg-white/40 p-6 backdrop-blur-xl shadow-xl">
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A67A3D] mb-2">Structure hospitalière</div>
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
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#A67A3D]">Expertise</span>
          </div>
          <h2 className="font-lora text-[clamp(32px,5vw,64px)] font-medium leading-[1.1] tracking-[-0.02em] text-[#241F1A]">
            Domaines de spécialité & interventions
          </h2>
          {(() => { const sv = medical.services ?? []; const total = sv.length; const cats = [...new Set(sv.map(s => s.category).filter(Boolean))].length; return (
          <p className="mt-4 text-sm text-[#423C35]">
            {total} interventions chirurgicales réparties en {cats} spécialités
          </p>); })()}
        </div>

        {(() => {
          const CATEGORY_ICONS: Record<string, React.ReactNode> = {
            'Chirurgie Orthognathique': <Bone className="h-6 w-6" />,
            'Chirurgie Stomatologique': <Stethoscope className="h-6 w-6" />,
            'Rhinoplastie': <Sparkles className="h-6 w-6" />,
            'Chirurgie Esthétique': <Heart className="h-6 w-6" />,
            'Dermatochirurgie': <Scissors className="h-6 w-6" />,
          };
          const CATEGORY_DESC: Record<string, string> = {
            'Chirurgie Orthognathique': "Correction chirurgicale des décalages des mâchoires pour rétablir une fonction masticatoire et une harmonie du visage.",
            'Chirurgie Stomatologique': "Avulsion des dents de sagesse, canines incluses, kystes des mâchoires et greffes osseuses pré-implantaires.",
            'Rhinoplastie': "Chirurgie esthétique et fonctionnelle du nez, septoplastie (déviation de cloison) et rhinoplastie médicale par injections.",
            'Chirurgie Esthétique': "Chirurgie plastique de la face, rajeunissement du regard (blépharoplastie), lip lift et otoplastie.",
            'Dermatochirurgie': "Prise en charge chirurgicale et reconstructrice des tumeurs cutanées (carcinomes, naevus) du visage.",
          };
          const services = medical.services ?? [];
          const categories = CATEGORY_ORDER.filter(cat => services.some(s => s.category === cat));
          return (
            <>
              <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
                {categories.map((cat) => {
                  const count = services.filter(s => s.category === cat).length;
                  const slug = cat.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-');
                  return (
                    <Link
                      key={cat}
                      href={`/interventions#${slug}`}
                      className="w-[85vw] sm:w-[320px] shrink-0 snap-start md:w-auto md:shrink md:snap-none group relative overflow-hidden rounded-[2rem] border border-[#E8DFD1] bg-white p-8 transition-all duration-500 hover:border-[#0891B2]/30 hover:shadow-2xl flex flex-col justify-between"
                    >
                      <div className="space-y-6">
                        <div className="flex justify-between items-start">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#0891B2]/10 bg-[#0891B2]/5 text-[#0891B2]">
                            {CATEGORY_ICONS[cat] || <Bone className="h-6 w-6" />}
                          </div>
                          <span className="rounded-full bg-[#FAF9F6] border border-[#E8DFD1] px-3 py-1 text-[11px] font-black uppercase tracking-widest text-[#A67A3D]">
                            {count} acte{count > 1 ? 's' : ''}
                          </span>
                        </div>
                        <div className="space-y-3">
                          <h3 className="font-lora text-2xl font-medium text-[#241F1A] transition-colors group-hover:text-[#0891B2]">{cat}</h3>
                          <p className="text-xs leading-relaxed text-[#423C35]">{CATEGORY_DESC[cat] || ''}</p>
                        </div>
                      </div>
                      <div className="mt-10 flex items-center justify-between border-t border-[#E8DFD1]/50 pt-5">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-[#0891B2]/80">Voir les interventions</span>
                        <ChevronRight className="h-4 w-4 text-[#0891B2] transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div className="mt-10 text-center">
                <Link href="/interventions" className="inline-flex items-center gap-3 rounded-full border border-[#E8DFD1] bg-white px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#423C35] transition-all hover:bg-[#FAF9F6] hover:border-[#0891B2]/30 hover:text-[#0891B2]">
                  Voir toutes les interventions
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </>
          );
        })()}
      </section>

      {/* SYMPTOMES */}
      <section id="symptomes" className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:py-48 bg-[#FAF9F6]">
        <div className="mx-auto mb-20 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#C5A065]/40" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#A67A3D]">Aide au diagnostic</span>
          </div>
          <h2 className="font-lora text-[clamp(32px,5vw,64px)] font-medium leading-[1.1] tracking-[-0.02em] text-[#241F1A]">
            Quand consulter ?<br />
            <span className="italic opacity-60">Symptômes fréquents</span>
          </h2>
        </div>

        {(() => {
          const SYMPTOM_ICONS: Record<string, React.ReactNode> = {
            'dents-de-sagesse-poussent': <Stethoscope className="h-5 w-5" />,
            'douleur-machoire': <AlertTriangle className="h-5 w-5" />,
            'nez-bouche-devie': <User className="h-5 w-5" />,
            'decalage-machoires': <Bone className="h-5 w-5" />,
            'gonflement': <AlertTriangle className="h-5 w-5" />,
            'abces-dentaire': <ShieldCheck className="h-5 w-5" />,
          };
          const sorted = sortByPriority(symptomData).slice(0, 6);
          return (
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#FAF9F6] to-transparent z-10 md:hidden" />
              <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
                {sorted.map((item) => {
                  const urgencyConfig = {
                    urgent: { icon: Zap, label: 'Urgent', cls: 'bg-red-50 text-red-700 border-red-200', borderCls: 'border-red-200/50' },
                    soon: { icon: Clock, label: 'Sous 7 jours', cls: 'bg-amber-50 text-amber-700 border-amber-200', borderCls: 'border-amber-200/50' },
                    programmed: { icon: Calendar, label: 'Programmé', cls: 'bg-emerald-50 text-emerald-700 border-emerald-200', borderCls: 'border-emerald-200/50' },
                  }[item.urgencyLevel];
                  const UrgencyIcon = urgencyConfig.icon;
                  const icon = SYMPTOM_ICONS[item.slug];
                  return (
                    <Link
                      key={item.slug}
                      href={`/symptomes/${item.slug}`}
                      className={`w-[85vw] sm:w-[320px] shrink-0 snap-start md:w-auto md:shrink md:snap-none group relative overflow-hidden rounded-[2.5rem] border bg-white p-6 md:p-8 transition-all duration-500 hover:shadow-2xl flex flex-col justify-between ${urgencyConfig.borderCls}`}
                    >
                      <div className="space-y-4">
                        <div className="flex items-start justify-between gap-3">
                          <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${urgencyConfig.cls}`}>
                            <UrgencyIcon className="h-3 w-3" />
                            {urgencyConfig.label}
                          </span>
                        </div>
                        <div className="flex items-start gap-4">
                          {icon && (
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#E8DFD1] bg-[#FAF9F6] text-[#A67A3D]">
                              {icon}
                            </div>
                          )}
                          <div className="space-y-2 min-w-0 flex-1">
                            <h3 className="font-lora text-xl font-medium text-[#241F1A] transition-colors group-hover:text-[#0891B2]">
                              {item.title}
                            </h3>
                            <p className="text-xs leading-relaxed text-[#423C35] line-clamp-2">
                              {item.intro}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 flex items-center justify-between border-t border-[#E8DFD1]/50 pt-5">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-[#A67A3D] group-hover:text-[#0891B2]">En savoir plus</span>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FAF9F6] transition-transform group-hover:translate-x-1 group-hover:bg-[#0891B2]/10">
                          <ChevronRight className="h-4 w-4 text-[#A67A3D] group-hover:text-[#0891B2]" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })()}
        <div className="mt-10 text-center">
          <Link href="/symptomes" className="inline-flex items-center gap-3 rounded-full border border-[#E8DFD1] bg-white px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#423C35] transition-all hover:bg-[#FAF9F6] hover:border-[#0891B2]/30 hover:text-[#0891B2]">
            Explorer nos {symptomData.length} fiches symptômes
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* STATS CLÉS */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32 border-y border-[#E8DFD1]/60">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {site.stats.map((s) => (
            <div key={s.label} className="text-center">
              <span className="font-lora text-4xl md:text-5xl font-medium text-[#A67A3D]">{s.number}</span>
              <p className="mt-2 text-xs md:text-sm text-[#423C35] leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <ReviewCarousel />

      {/* 3D PLANNING SHOWCASE */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-36 bg-transparent">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-[#0891B2]/40" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0891B2]">Technologie & Précision</span>
            </div>
            <h2 className="font-lora text-[clamp(32px,4.5vw,56px)] font-medium leading-[1.1] text-[#241F1A]">
              Planification Numérique 3D
            </h2>
            <p className="text-base leading-relaxed text-[#423C35]">
              Pour les interventions complexes (ostéotomie bimaxillaire, reconstruction maxillo-faciale), le Dr Flora Jullian utilise des simulations virtuelles 3D assistées par ordinateur. Ce protocole de haute précision permet de préparer virtuellement les gestes opératoires et de personnaliser des guides de coupe imprimés en 3D sur-mesure.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-widest text-[#A67A3D]">Simulation virtuelle</div>
                <p className="text-xs text-[#423C35] leading-relaxed">Prévisualisation millimétrique des déplacements osseux pour une harmonie parfaite.</p>
              </div>
              <div className="space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-widest text-[#A67A3D]">Sécurité chirurgicale</div>
                <p className="text-xs text-[#423C35] leading-relaxed">Réduction significative du temps opératoire et amélioration de la cicatrisation.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-[#0891B2]/5 blur-2xl" />
            <div className="relative aspect-video w-full overflow-hidden rounded-[2.5rem] border border-[#E8DFD1]">
              <Image src="/planning-3d.webp" alt="Planification numérique 3D — simulation virtuelle des gestes opératoires" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section id="parcours" className="relative z-10 border-y border-[#E8DFD1]/60 bg-[#F2EBDD]/30 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl text-center space-y-8">
          <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#A67A3D]">Protocole & Accompagnement</div>
          <h2 className="font-lora text-4xl font-medium tracking-tight text-[#241F1A]">Votre parcours de soins</h2>
          <p className="max-w-xl mx-auto text-base text-[#423C35] leading-relaxed">
            De la première consultation pré-opératoire au suivi de cicatrisation personnalisé, découvrez les étapes de votre prise en charge chirurgicale.
          </p>
          <div className="pt-4">
            <Link href="/parcours" className="inline-flex items-center gap-3 rounded-full bg-[#241F1A] px-8 py-5 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#0891B2] shadow-lg">
              Découvrir le parcours patient
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PRATICIEN */}
      <section id="praticien" className="relative z-10 px-6 py-32 md:py-64">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-24 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[3rem] border border-[#E8DFD1] shadow-2xl">
                <Image src="/drjullian.webp" alt="Dr Flora Jullian" fill sizes="(max-width: 768px) 100vw, 300px" className="object-cover" />
                <div className="absolute top-12 right-12 rounded-full border border-white/20 bg-white/40 px-6 py-6 backdrop-blur-xl shadow-xl flex flex-col items-center">
                  <span className="font-lora text-3xl font-bold text-[#241F1A]">10+</span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#A67A3D]">Années d'expertise</span>
                </div>
              </div>
              <div className="mt-8 lg:absolute lg:mt-0 lg:-bottom-16 lg:-right-16 max-w-sm rounded-[2.5rem] border border-[#E8DFD1] bg-white p-10 shadow-2xl shadow-[#C5A065]/10">
                  <p className="font-lora text-xl italic leading-relaxed text-[#241F1A]">"La précision chirurgicale n'est rien sans une écoute attentive et une humanité profonde."</p>
                  <div className="mt-6 h-px w-12 bg-[#C5A065]/40" />
                  <div className="mt-4 text-[11px] font-bold uppercase tracking-widest text-[#A67A3D]">Dr Flora Jullian</div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-16">
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="h-px w-12 bg-[#C5A065]/40" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#A67A3D]">Expertise Clinique</span>
                  </div>
                  <div className="space-y-4">
                    <h2 className="font-lora text-[clamp(40px,5vw,72px)] font-medium leading-[1] text-[#241F1A]">{medical.doctors[0].fullname}</h2>
                    <p className="text-2xl font-medium text-[#0891B2]/80">Praticienne Hospitalière au GHRMSA</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
                  <div className="space-y-6">
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#A67A3D]">Diplômes & Formations</h4>
                    <ul className="space-y-4 text-sm leading-relaxed text-[#423C35]">
                      <li className="border-l border-[#E8DFD1] pl-4">D.I.U. Chirurgie Orthognathique</li>
                      <li className="border-l border-[#E8DFD1] pl-4">D.U. Chirurgie Plastique Face</li>
                      <li className="border-l border-[#E8DFD1] pl-4">D.U. Microchirurgie</li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#A67A3D]">Parcours Hospitalier</h4>
                    <ul className="space-y-4 text-sm leading-relaxed text-[#423C35]">
                      <li className="border-l border-[#E8DFD1] pl-4">PH au GHRMSA (Mulhouse)</li>
                      <li className="border-l border-[#E8DFD1] pl-4">Hôpitaux de Strasbourg</li>
                    </ul>
                  </div>
                </div>
                <EeatTrustGrid rppsNumber="10101603602" conventionnement="Secteur 2 (OPTAM)" />
                <div className="pt-8">
                  <a href={`tel:${context.contact.phone}`} className="inline-flex items-center gap-4 rounded-full bg-[#241F1A] px-8 py-5 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#C5A065] shadow-lg">
                    Prendre rendez-vous
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* TARIFS PROMOCARD */}
      <section id="tarifs" className="relative z-10 border-t border-[#E8DFD1]/60 bg-transparent px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl text-center space-y-8">
          <div className="flex items-center justify-center gap-4 text-[#0891B2]">
            <div className="h-px w-12 bg-[#0891B2]/40" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em]">Transparence tarifaire</span>
          </div>
          <h2 className="font-lora text-4xl font-medium text-[#241F1A]">Tarifs et Remboursements</h2>
          <p className="max-w-xl mx-auto text-base text-[#423C35] leading-relaxed">
            Consultez notre simulateur de remboursement interactif et le tableau indicatif des honoraires pour préparer sereinement votre consultation.
          </p>
          <div className="pt-4">
            <Link href="/tarifs" className="inline-flex items-center gap-3 rounded-full bg-[#241F1A] px-8 py-5 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#0891B2] shadow-lg">
              Estimer mes remboursements
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="infos-pratiques" className="relative z-10 border-t border-[#E8DFD1]/60 bg-transparent px-6 py-32 md:py-48">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5 space-y-16">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-[#0891B2]">
                  <div className="h-px w-12 bg-[#0891B2]/40" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.3em]">Venir au cabinet</span>
                </div>
                <h2 className="font-lora text-5xl font-medium text-[#241F1A]">Pôle de Consultation</h2>
              </div>
              <div className="space-y-12">
                <div className="flex items-start gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0891B2]/5 text-[#0891B2]"><MapPin /></div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-widest text-[#A67A3D]">Unité de Consultation</div>
                      <div className="text-xl font-medium text-[#241F1A]">20 Avenue du Dr René Laennec, 68100 Mulhouse</div>
                    </div>
                </div>
                <div className="p-8 rounded-3xl bg-[#FAF6F0] border border-[#EA4335]/20 space-y-4">
                    <div className="flex items-center gap-3 text-[#EA4335]">
                      <AlertTriangle className="h-5 w-5" />
                      <span className="text-[11px] font-black uppercase tracking-widest">Urgence Médicale</span>
                    </div>
                    <p className="text-sm text-[#423C35]">En cas de <strong>traumatisme facial récent</strong>, contactez le <strong>15</strong> ou les <strong>Urgences du GHRMSA</strong>.</p>
                </div>

                <div className="pt-4">
                  <Link href="/parcours" className="group inline-flex items-center gap-4 rounded-2xl border border-[#C5A065]/20 bg-white px-8 py-6 text-[11px] font-bold uppercase tracking-widest text-[#A67A3D] transition-all hover:bg-[#C5A065]/5">
                    <FileText className="h-4 w-4" />
                    Consulter les étapes de votre parcours
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <div className="h-[300px] sm:h-[400px] lg:h-[500px] rounded-[3rem] overflow-hidden border border-[#E8DFD1]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.2891660161405!2d7.3117367!3d47.7370351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47919be8f94676e1%3A0xa19cbefc4c01d4a0!2s20%20Av.%20du%20Docteur%20Ren%C3%A9%20Laennec%2C%2068100%20Mulhouse!5e0!3m2!1sfr!2sfr!4v1717800000000!5m2!1sfr!2sfr"
                  className="h-full w-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cabinet Dr Flora Jullian — 20 Avenue du Dr René Laennec, Mulhouse"
                />
              </div>
              <div className="text-center">
                <Link href="/contact" className="group inline-flex items-center gap-3 rounded-full border border-[#C5A065]/30 bg-white px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#A67A3D] transition-all hover:bg-[#C5A065]/5">
                  Voir toutes les coordonnées
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ZONE D'INTERVENTION */}
      <section className="relative z-10 border-t border-[#E8DFD1]/60 bg-white/50 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-[#A67A3D]/30" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#A67A3D]">Zone d&apos;intervention</span>
            <div className="h-px w-12 bg-[#A67A3D]/30" />
          </div>
          <h2 className="font-lora text-4xl md:text-5xl font-medium text-[#241F1A]">Secteur de soins</h2>
          <p className="text-base md:text-lg text-[#423C35] max-w-2xl mx-auto leading-relaxed">
            Le Dr Flora Jullian exerce au <strong>GHRMSA Mulhouse</strong> et prend en charge les patients
            de tout le <strong>Grand Est</strong> : Mulhouse, Colmar, Belfort, Altkirch, Saint-Louis,
            ainsi que les régions frontalières de <strong>Bâle (Suisse)</strong> et du sud de l&apos;<strong>Allemagne</strong>.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${context.contact.phone}`} className="inline-flex items-center gap-3 rounded-full bg-[#241F1A] px-8 py-5 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#0891B2] shadow-lg md:hidden">
              Prendre rendez-vous
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link href="/contact" className="hidden md:inline-flex items-center gap-3 rounded-full bg-[#241F1A] px-8 py-5 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#0891B2] shadow-lg">
              Prendre rendez-vous
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <StickyContact phone={context.contact.phone} email={context.contact.email} />
    </div>
  );
}
