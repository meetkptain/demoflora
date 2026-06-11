import React from 'react';
import { ChevronLeft, AlertTriangle, Clock, ArrowRight, ShieldCheck, Info, HeartPulse, PhoneCall } from 'lucide-react';
import MedicalHeader from '@/components/MedicalHeader';
import MedicalFooter from '@/components/MedicalFooter';
import MedicalFAQ from '@/components/MedicalFAQ';
import { floraContext, floraData } from '@/lib/constants';

export default function OuvertureBouchePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Difficulté d'ouverture de la bouche (Trismus)",
      "description": "Limitation de l'ouverture buccale, souvent liée à une contraction involontaire des muscles masticateurs (trismus).",
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Traitement antibiotique des infections dentaires"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Rééducation maxillo-faciale"
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
          "name": "Ouverture Bouche",
          "item": "https://dr-flora-jullian.fr/symptomes/ouverture-bouche"
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
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Symptôme & Diagnostic</span>
                </div>
                <h1 className="font-lora text-[clamp(40px,6vw,80px)] font-medium leading-[0.95] tracking-tight text-[#241F1A]">
                  Difficulté d&apos;ouverture <br /> <span className="opacity-60 italic">de la bouche (Trismus)</span>
                </h1>
                <p className="text-xl text-[#5A534A] max-w-2xl leading-relaxed">
                  Une ouverture buccale limitée ou douloureuse peut avoir plusieurs origines. Comprendre les causes et identifier les signes d&apos;urgence est essentiel.
                </p>
              </div>
              <div className="lg:col-span-4 pb-4">
                <div className="p-8 rounded-[2.5rem] border border-[#E8DFD1] bg-white shadow-xl shadow-[#EA4335]/5 space-y-6">
                  <div className="flex items-center gap-3 text-[#EA4335]">
                    <AlertTriangle className="w-5 h-5" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Signes d&apos;Alerte</span>
                  </div>
                  <p className="text-sm text-[#5A534A] leading-relaxed">
                    Si la limitation s&apos;accompagne de fièvre ou d&apos;un gonflement important, une consultation rapide est nécessaire.
                  </p>
                  <a href={`tel:${floraContext.contact.phone}`} className="group flex items-center justify-between w-full rounded-full bg-[#241F1A] px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#EA4335]">
                    Nous contacter <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT SECTIONS */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 py-32 space-y-40">
          
          {/* COMPRENDRE LE TRISMUS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-[#C5A065]/40"/>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A67A3D]">Anatomie & Fonction</span>
              </div>
              <h2 className="font-lora text-5xl font-medium leading-[1.1] text-[#241F1A]">Qu&apos;est-ce que <br /> le trismus ?</h2>
              <p className="text-lg text-[#5A534A] leading-relaxed">
                Le trismus est une contraction involontaire et prolongée des muscles masticateurs, empêchant l&apos;ouverture normale de la bouche.
              </p>
              <div className="p-8 rounded-3xl bg-[#FAF6F0] border border-[#C5A065]/20 space-y-6">
                <div className="flex items-center gap-3 text-[#A67A3D]">
                  <Info className="h-5 w-5" />
                  <span className="text-[11px] font-black uppercase tracking-widest">Le saviez-vous ?</span>
                </div>
                <p className="text-sm text-[#5A534A] italic leading-relaxed">
                  &quot;Une ouverture buccale normale se situe généralement entre 40 et 50 mm, soit environ la largeur de trois doigts superposés.&quot;
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-7 space-y-16">
              <div className="prose prose-stone max-w-none text-[#5A534A]">
                <h3 className="font-lora text-3xl text-[#241F1A] mb-8">Les causes fréquentes</h3>
                <p className="text-base leading-relaxed mb-10">
                  La limitation de l&apos;ouverture buccale n&apos;est pas une maladie en soi, mais le symptôme d&apos;une pathologie sous-jacente. Elle peut apparaître de manière brutale ou progressive.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {[
                    { 
                      title: "Origine Dentaire", 
                      desc: <>Infection d&apos;une <a href="/services/dents-de-sagesse" className="text-[#0891B2] hover:underline">dent de sagesse</a> (péricoronarite) ou abcès dentaire profond.</> 
                    },
                    { 
                      title: "Origine Articulaire", 
                      desc: <>Dysfonctionnement de l&apos;<a href="/services/douleur-machoire" className="text-[#0891B2] hover:underline">articulation temporo-mandibulaire (ATM)</a>, luxation du ménisque.</> 
                    },
                    { 
                      title: "Traumatisme", 
                      desc: <>Fracture de la mâchoire ou choc direct sur l&apos;articulation (nécessitant une prise en charge en <a href="/services/chirurgie-maxillo-faciale" className="text-[#0891B2] hover:underline">chirurgie maxillo-faciale</a>).</> 
                    },
                    { 
                      title: "Post-opératoire", 
                      desc: "Réaction inflammatoire normale après une chirurgie buccale complexe." 
                    }
                  ].map((item, i) => (
                    <div key={i} className="p-8 rounded-[2rem] bg-white border border-[#E8DFD1] space-y-4">
                      <h4 className="font-lora text-xl text-[#241F1A]">{item.title}</h4>
                      <div className="text-sm leading-relaxed text-[#5A534A]">{item.desc}</div>
                    </div>
                  ))}
                </div>

                <h3 className="font-lora text-3xl text-[#241F1A] mb-8">Quand s&apos;inquiéter ?</h3>
                <p className="text-base leading-relaxed mb-6">
                  Si le trismus est souvent bénin et lié à une inflammation, certains signes doivent vous conduire à consulter un spécialiste maxillo-facial sans attendre :
                </p>
                <ul className="space-y-4 mb-12">
                  {[
                    "Difficulté à avaler (dysphagie) ou à respirer.",
                    "Gonflement important du visage ou du cou.",
                    "Fièvre associée et frissons.",
                    "Trismus suite à un traumatisme ou un choc facial.",
                    "Apparition brutale sans cause dentaire évidente."
                  ].map((li, i) => (
                    <li key={i} className="flex gap-4 items-start text-sm">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#EA4335] shrink-0" />
                      {li}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-10 rounded-[2.5rem] bg-[#241F1A] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#EA4335]/20 rounded-full blur-[80px]" />
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-4 text-[#EA4335]">
                    <PhoneCall className="w-6 h-6" />
                    <h4 className="font-bold uppercase tracking-widest text-xs">Urgence Médicale</h4>
                  </div>
                  <h3 className="font-lora text-2xl">En cas de gonflement rapide sous la mâchoire ou dans le cou, appelez immédiatement le 15.</h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    Une infection dentaire peut parfois diffuser vers les tissus mous du cou (cellulite), ce qui nécessite une prise en charge hospitalière d&apos;urgence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* PRISE EN CHARGE */}
          <section className="space-y-20">
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0891B2]">Diagnostic & Traitement</span>
              <h2 className="font-lora text-4xl font-medium text-[#241F1A]">Comment traitons-nous le trismus ?</h2>
              <p className="text-[#5A534A] leading-relaxed">
                Le traitement dépend exclusivement de la cause. Une analyse précise par le Dr Jullian permettra de définir le protocole adapté.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  icon: <ShieldCheck className="w-6 h-6" />, 
                  title: "Éliminer l'Infection", 
                  desc: "Prescription d'antibiotiques et traitement de la dent causale si nécessaire." 
                },
                { 
                  icon: <HeartPulse className="w-6 h-6" />, 
                  title: "Soulager la Douleur", 
                  desc: "Antalgiques et relaxants musculaires pour lever la contracture." 
                },
                { 
                  icon: <Clock className="w-6 h-6" />, 
                  title: "Rééducation", 
                  desc: "Exercices d'ouverture progressive ou kinésithérapie maxillo-faciale." 
                }
              ].map((card, i) => (
                <div key={i} className="p-10 rounded-[2.5rem] bg-white border border-[#E8DFD1] space-y-6 hover:border-[#0891B2]/30 transition-colors group">
                  <div className="w-14 h-14 rounded-2xl bg-[#0891B2]/5 flex items-center justify-center text-[#0891B2] group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <h4 className="font-lora text-2xl text-[#241F1A]">{card.title}</h4>
                  <p className="text-sm text-[#5A534A] leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A67A3D]">Foire aux questions</span>
                <h2 className="font-lora text-4xl font-medium text-[#241F1A]">Questions courantes</h2>
            </div>
            <MedicalFAQ />
          </div>

        </section>
      </div>

      <MedicalFooter context={floraContext} data={floraData} />
    </main>
  );
}
