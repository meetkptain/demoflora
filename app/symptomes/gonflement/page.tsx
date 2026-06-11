import React from 'react';
import { ChevronLeft, AlertTriangle, ArrowRight, ShieldAlert, HeartPulse } from 'lucide-react';
import MedicalHeader from '@/components/MedicalHeader';
import MedicalFooter from '@/components/MedicalFooter';
import { floraContext, floraData } from '@/lib/constants';

export default function SymptomeGonflement() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Gonflement facial",
      "description": "Oedème ou gonflement du visage pouvant être d'origine dentaire, salivaire ou post-traumatique.",
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Traitement des infections maxillo-faciales"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Drainage d'abcès"
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
          "name": "Gonflement",
          "item": "https://dr-flora-jullian.fr/symptomes/gonflement"
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

        <section className="relative pt-40 pb-24 px-6 z-10">
          <div className="max-w-5xl mx-auto">
            <nav className="mb-12">
              <a href="/" className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#A67A3D] hover:text-[#241F1A]">
                <ChevronLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                Retour
              </a>
            </nav>
            
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#EA4335]/20 bg-[#EA4335]/5 px-5 py-2 text-[#EA4335]">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Symptôme</span>
              </div>
              <h1 className="font-lora text-[clamp(40px,6vw,72px)] font-medium leading-[1] text-[#241F1A]">Gonflement du visage à Mulhouse : <br /> <span className="opacity-60 italic">les bons réflexes</span></h1>
              <p className="text-xl text-[#5A534A] max-w-2xl leading-relaxed">
                Un gonflement du visage nécessite une attention particulière. Le Dr Jullian vous reçoit au GHRMSA de Mulhouse pour écarter tout risque infectieux en Alsace.
              </p>
            </div>
          </div>
        </section>

        <section className="relative z-10 max-w-5xl mx-auto px-6 py-24 space-y-32">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-center gap-4"><div className="h-px w-12 bg-[#EA4335]/40"/><span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#EA4335]">Urgence</span></div>
              <h2 className="font-lora text-4xl font-medium text-[#241F1A]">Quand s&apos;inquiéter ?</h2>
              <p className="text-sm text-[#5A534A]">Certains signes associés au gonflement indiquent une urgence médicale immédiate.</p>
            </div>
            <div className="lg:col-span-7 p-10 rounded-[3rem] border border-[#EA4335]/30 bg-white space-y-8 shadow-xl shadow-[#EA4335]/5">
                <div className="flex items-center gap-3 text-[#EA4335]"><ShieldAlert className="w-6 h-6" /><h3 className="text-[10px] font-bold uppercase tracking-widest text-[#241F1A]">Signes de Gravité</h3></div>
                <div className="space-y-6">
                  <div className="flex gap-4 border-l-2 border-[#EA4335]/20 pl-6 py-2"><div className="space-y-1"><h4 className="text-sm font-bold text-[#241F1A]">Difficulté respiratoire</h4><p className="text-xs text-[#5A534A]">Appelez immédiatement le 15.</p></div></div>
                  <div className="flex gap-4 border-l-2 border-[#EA4335]/20 pl-6 py-2"><div className="space-y-1"><h4 className="text-sm font-bold text-[#241F1A]">Forte fièvre</h4><p className="text-xs text-[#5A534A]">Signe d&apos;une infection sévère (cellulite).</p></div></div>
                  <div className="flex gap-4 border-l-2 border-[#EA4335]/20 pl-6 py-2"><div className="space-y-1"><h4 className="text-sm font-bold text-[#241F1A]">Difficulté à avaler</h4><p className="text-xs text-[#5A534A]">Nécessite une prise en charge hospitalière rapide.</p></div></div>
                </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[2.5rem] border border-[#E8DFD1] bg-white space-y-4">
              <h4 className="font-lora text-lg text-[#241F1A]">Origine Dentaire</h4>
              <p className="text-xs text-[#5A534A]">Abcès, infection d&apos;une <a href="/services/dents-de-sagesse" className="text-[#0891B2] hover:underline">dent de sagesse</a>. C&apos;est la cause la plus fréquente.</p>
            </div>
            <div className="p-8 rounded-[2.5rem] border border-[#E8DFD1] bg-white space-y-4">
              <h4 className="font-lora text-lg text-[#241F1A]">Glandes Salivaires</h4>
              <p className="text-xs text-[#5A534A]">Obstruction d&apos;un canal par un calcul (lithiase) ou infection (parotidite).</p>
            </div>
            <div className="p-8 rounded-[2.5rem] border border-[#E8DFD1] bg-white space-y-4">
              <h4 className="font-lora text-lg text-[#241F1A]">Post-opératoire</h4>
              <p className="text-xs text-[#5A534A]">Un oedème modéré est normal après une chirurgie, mais doit être surveillé.</p>
            </div>
          </div>

          <div className="bg-[#FAF6F0] rounded-[3rem] p-12 border border-[#E8DFD1] flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-3 text-[#0891B2]"><HeartPulse /><h3 className="text-[10px] font-bold uppercase tracking-widest text-[#241F1A]">Prise en charge spécialisée</h3></div>
              <h2 className="font-lora text-3xl font-medium text-[#241F1A]">Une expertise hospitalière indispensable</h2>
              <p className="text-sm text-[#5A534A] leading-relaxed">
                Le Dr Flora Jullian assure le diagnostic et le traitement des <a href="/services/chirurgie-maxillo-faciale" className="text-[#0891B2] hover:underline">infections maxillo-faciales complexes</a> au sein du plateau technique sécurisé du GHRMSA Mulhouse.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a href={`tel:${floraContext.contact.phone}`} className="flex items-center gap-4 rounded-full bg-[#241F1A] px-10 py-6 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#0891B2]">
                Contacter le secrétariat
              </a>
            </div>
          </div>
        </section>
      </div>

      <MedicalFooter context={floraContext} data={floraData} />
    </main>
  );
}
