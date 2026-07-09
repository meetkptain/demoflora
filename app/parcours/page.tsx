import { Metadata } from 'next';
import { ChevronLeft, ArrowRight, ShieldCheck, Clock, MapPin, FileText, Apple, Activity, Download } from 'lucide-react';
import MedicalHeader from '@/components/MedicalHeader';
import MedicalFooter from '@/components/MedicalFooter';
import PatientTimeline from '@/components/PatientTimeline';
import { seo } from '@/lib/seo';
import { floraContext, floraData } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Votre Parcours de Soins - Dr Flora Jullian',
  description: 'De la première consultation au suivi post-opératoire, découvrez le parcours de soins complet au GHRMSA Mulhouse avec le Dr Flora Jullian.',
  alternates: {
    canonical: `${seo.baseUrl}/parcours`,
  },
};

export default function ParcoursPage() {
  const parcoursSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HowTo',
        '@id': `${seo.baseUrl}/parcours#howto`,
        name: 'Parcours de soins en chirurgie maxillo-faciale',
        description: 'De la première consultation au suivi post-opératoire, le parcours de soins complet au GHRMSA Mulhouse avec le Dr Flora Jullian.',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Première consultation', text: 'Consultation initiale avec bilan clinique et radiologique, définition du plan de traitement.' },
          { '@type': 'HowToStep', position: 2, name: 'Bilan pré-opératoire', text: 'Examens complémentaires (Cone Beam 3D, bilan sanguin, consultation d\'anesthésie).' },
          { '@type': 'HowToStep', position: 3, name: 'Intervention chirurgicale', text: 'Prise en charge au bloc opératoire du GHRMSA sous anesthésie générale ou locale.' },
          { '@type': 'HowToStep', position: 4, name: 'Suivi post-opératoire', text: 'Surveillance clinique, soins locaux et consultations de contrôle jusqu\'à la guérison complète.' },
        ],
        totalTime: 'P2M',
      },
      {
        '@type': 'MedicalWebPage',
        '@id': `${seo.baseUrl}/parcours#webpage`,
        url: `${seo.baseUrl}/parcours`,
        name: 'Votre Parcours de Soins - Dr Flora Jullian',
        description: 'De la première consultation au suivi post-opératoire, découvrez le parcours de soins complet au GHRMSA Mulhouse.',
        about: { '@id': `${seo.baseUrl}/#physician` },
        dateModified: new Date().toISOString().split('T')[0],
      },
    ],
  };

  return (
    <main className="theme-medical">
      <MedicalHeader context={floraContext} data={floraData} />
      
      <div className="relative min-h-screen bg-[#FAF9F6] text-[#2F2A24] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] bg-precision-grid" />
        <div className="pointer-events-none absolute inset-0 z-0 bg-noise opacity-[0.4]" />

        <section className="relative pt-40 pb-24 px-6 z-10 border-b border-[#E8DFD1]/60">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#C5A065]/20 bg-[#C5A065]/5 px-5 py-2 text-[#A67A3D]">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em]">Accompagnement</span>
            </div>
            <h1 className="font-lora text-[clamp(48px,8vw,96px)] font-medium leading-[0.9] tracking-tight text-[#241F1A]">Votre Parcours <br /> <span className="opacity-40 italic">de Soins</span></h1>
            <p className="text-xl text-[#423C35] max-w-2xl mx-auto leading-relaxed">
              De la première consultation au suivi post-opératoire, nous vous accompagnons à chaque étape pour une prise en charge sereine et sécurisée.
            </p>
          </div>
        </section>

        <section className="relative z-10 max-w-7xl mx-auto px-6 py-32 space-y-48">
          
          <div className="max-w-5xl mx-auto space-y-24">
             <div className="text-center space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#A67A3D]">Méthodologie</span>
                <h2 className="font-lora text-4xl font-medium text-[#241F1A]">Une organisation hospitalière rigoureuse</h2>
             </div>
             
             <div className="rounded-[3rem] border border-[#E8DFD1] bg-white p-12 shadow-sm">
                <PatientTimeline />
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
             <div className="space-y-8">
                <div className="flex items-center gap-4"><div className="h-px w-12 bg-[#0891B2]/40"/><span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0891B2]">Praticité</span></div>
                <h2 className="font-lora text-4xl font-medium text-[#241F1A]">Documents utiles</h2>
                <p className="text-sm text-[#423C35] leading-relaxed">
                  Pour votre première consultation, pensez à apporter les documents suivants afin de faciliter votre prise en charge :
                </p>
                <ul className="space-y-4">
                  {[
                    "Courrier de votre médecin ou dentiste",
                    "Radiographies et examens récents",
                    "Carte Vitale à jour",
                    "Liste de vos traitements en cours"
                  ].map((doc, i) => (
                    <li key={i} className="flex gap-4 items-center text-sm text-[#241F1A]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C5A065]" />
                      {doc}
                    </li>
                  ))}
                </ul>
             </div>
             <div className="p-12 rounded-[3rem] bg-[#FAF6F0] border border-[#E8DFD1] space-y-8">
                <div className="flex items-center gap-4 text-[#A67A3D]"><Clock /><h4 className="text-[11px] font-bold uppercase tracking-widest">Temps d&apos;attente</h4></div>
                <p className="text-sm text-[#423C35] leading-relaxed italic">
                  "En milieu hospitalier, les urgences chirurgicales peuvent parfois impacter les horaires de consultation. Nous vous remercions par avance pour votre compréhension."
                </p>
                <div className="pt-4 border-t border-[#E8DFD1]">
                  <div className="flex items-center gap-4 text-[#0891B2] mb-4"><MapPin /><h4 className="text-[11px] font-bold uppercase tracking-widest">Lieu de RDV</h4></div>
                  <p className="text-sm text-[#241F1A] font-medium">{floraContext.contact.address}</p>
                </div>
             </div>
          </div>

          {/* ADVOCACY SECTION: PRE & POST OP GUIDANCE */}
          <div className="max-w-6xl mx-auto space-y-32">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div className="space-y-12">
                   <div className="space-y-6">
                      <h2 className="font-lora text-4xl text-[#241F1A]">1. Checklist Pré-Opératoire</h2>
                      <p className="text-base text-[#423C35]">Réduire le stress administratif pour se concentrer sur le soin.</p>
                   </div>
                   <div className="space-y-4">
                      {[
                        { t: "Dossier Médical", d: "Courrier d'adressage, radiographies (panoramique), bilans sanguins." },
                        { t: "Administratif", d: "Carte vitale à jour, attestation de mutuelle, pièce d'identité. Notre secrétariat s'occupe de télétransmettre vos demandes de prise en charge." },
                        { t: "Logistique", d: "Prévoir un accompagnateur pour la sortie (obligatoire si anesthésie générale)." }
                      ].map((item, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-white border border-[#E8DFD1] flex gap-6">
                           <div className="w-10 h-10 rounded-full bg-[#0891B2]/5 flex items-center justify-center text-[#0891B2] shrink-0 font-bold text-xs">{i+1}</div>
                           <div className="space-y-1">
                              <h4 className="font-bold text-[#241F1A] text-sm">{item.t}</h4>
                              <p className="text-xs text-[#423C35] leading-relaxed">{item.d}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="space-y-12">
                   <div className="space-y-6">
                      <h2 className="font-lora text-4xl text-[#241F1A]">2. Rassurance Post-Opératoire</h2>
                      <p className="text-base text-[#423C35]">Anticiper les suites pour une cicatrisation sereine.</p>
                   </div>
                   <div className="space-y-6">
                      <div className="p-8 rounded-[2.5rem] bg-[#241F1A] text-white space-y-6 relative overflow-hidden">
                         <div className="relative z-10 space-y-4">
                            <h4 className="font-lora text-2xl">La règle d'or : Le Froid</h4>
                            <p className="text-sm text-white/70 leading-relaxed">
                               L'application de glace est votre meilleur allié. 20 minutes par heure pendant les premières 48h réduit significativement l'œdème et la douleur.
                            </p>
                         </div>
                         <div className="absolute top-0 right-0 w-32 h-32 bg-[#0891B2]/20 blur-3xl rounded-full -mr-16 -mt-16" />
                      </div>
                      <div className="p-8 rounded-[2.5rem] border border-[#C5A065]/20 bg-[#C5A065]/5 space-y-4">
                         <h4 className="font-bold text-[#A67A3D] text-xs uppercase tracking-widest">Alimentation</h4>
                         <p className="text-sm text-[#423C35] leading-relaxed">
                            Privilégiez le froid et le mou (glaces, yaourts, purées tiédies). Évitez le piquant, l'acide et les aliments à petits grains (riz, semoule).
                         </p>
                      </div>
                   </div>
                </div>
              </div>

              {/* ESPACE PATIENT / DOCUMENTS */}
              <div className="space-y-12">
                 <div className="space-y-6 text-center max-w-2xl mx-auto">
                    <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#0891B2]">Espace Patient</div>
                    <h2 className="font-lora text-4xl font-medium tracking-tight text-[#241F1A]">Documents &amp; Fiches Pratiques</h2>
                    <p className="text-base text-[#423C35] leading-relaxed">
                       Téléchargez ou consultez les documents de référence indispensables à la préparation et au suivi de votre chirurgie.
                    </p>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      {
                        title: "Consentement Éclairé",
                        desc: "Document d'information légal et obligatoire de la Société Française de CMFCO à signer avant votre geste chirurgical.",
                        btn: "Télécharger (PDF)",
                        href: "https://www.sfscmfco.fr",
                        icon: <FileText className="w-6 h-6 text-[#0891B2]" />
                      },
                      {
                        title: "Guide Alimentation Post-Op",
                        desc: "Conseils et astuces de nutrition pour la première semaine : recettes froides et mixées adaptées à la cicatrisation.",
                        btn: "Consulter la fiche",
                        href: "/blog/conseils-dents-de-sagesse",
                        icon: <Apple className="w-6 h-6 text-[#0891B2]" />
                      },
                      {
                        title: "Protocole Glace & Œdème",
                        desc: "Cycles d'application de cryothérapie faciale à domicile pour minimiser les gonflements et optimiser la guérison.",
                        btn: "Consulter le protocole",
                        href: "/interventions/dents-de-sagesse",
                        icon: <Activity className="w-6 h-6 text-[#0891B2]" />
                      },
                      {
                        title: "Devis & Mutuelle",
                        desc: "Formulaire administratif type pour transmettre le devis d'honoraires à votre mutuelle et valider vos remboursements.",
                        btn: "Préparer mes démarches",
                        href: "/tarifs",
                        icon: <FileText className="w-6 h-6 text-[#0891B2]" />
                      }
                    ].map((doc, idx) => (
                      <div key={idx} className="p-8 rounded-[2.5rem] border border-[#E8DFD1] bg-white hover:border-[#0891B2]/30 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between gap-6 group">
                        <div className="flex gap-6 items-start">
                          <div className="w-12 h-12 rounded-2xl bg-[#0891B2]/5 flex items-center justify-center shrink-0">
                            {doc.icon}
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-lora text-xl text-[#241F1A] font-medium">{doc.title}</h4>
                            <p className="text-xs text-[#423C35] leading-relaxed">{doc.desc}</p>
                          </div>
                        </div>
                        <div className="border-t border-[#E8DFD1]/60 pt-5 flex justify-between items-center">
                          <span className="text-[11px] font-bold uppercase tracking-widest text-[#A67A3D] group-hover:text-[#0891B2] transition-colors">{doc.btn}</span>
                          <a 
                            href={doc.href} 
                            target={doc.href.startsWith('http') ? "_blank" : undefined}
                            rel={doc.href.startsWith('http') ? "noopener noreferrer" : undefined}
                            className="w-10 h-10 rounded-full bg-[#FAF9F6] border border-[#E8DFD1] flex items-center justify-center text-[#A67A3D] group-hover:bg-[#0891B2] group-hover:text-white group-hover:border-transparent transition-all duration-300"
                          >
                            <Download className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>

             {/* CLINICAL ASSURANCE */}
             <div className="p-12 md:p-20 rounded-[4rem] bg-[#FAF6F0] border border-[#C5A065]/30 text-center space-y-10">
                <div className="max-w-2xl mx-auto space-y-6">
                   <h2 className="font-lora text-4xl text-[#241F1A]">Un accompagnement continu</h2>
                   <p className="text-[#423C35] leading-relaxed">
                     L'équipe du GHRMSA reste à votre écoute après votre intervention. En cas de doute ou de symptôme inhabituel, n'hésitez pas à contacter le secrétariat. Votre sécurité et votre confort sont nos priorités absolues.
                   </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                   <a href={`tel:${floraContext.contact.phone}`} className="px-10 py-5 bg-[#C5A065] text-white rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-[#A67A3D] transition-all flex items-center justify-center gap-3">
                      <ShieldCheck className="w-4 h-4" /> Appeler pour un conseil
                   </a>
                </div>
             </div>
          </div>

          <div className="bg-[#241F1A] rounded-[4rem] p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
                <div className="w-full h-full bg-precision-grid" />
            </div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="font-lora text-5xl font-medium leading-tight text-white">Prêt à débuter <br /> votre parcours ?</h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  Notre secrétariat est à votre disposition pour planifier votre première consultation et répondre à vos questions administratives.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <a href={`tel:${floraContext.contact.phone}`} className="flex items-center justify-between gap-4 rounded-full bg-white px-10 py-6 text-xs font-bold uppercase tracking-[0.2em] text-[#241F1A] transition-all hover:bg-[#C5A065] hover:text-white">
                  Contacter le secrétariat <ArrowRight className="h-5 w-5" />
                </a>
                <div className="flex items-center gap-4 px-4 text-[#C5A065]">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="text-[11px] font-bold uppercase tracking-widest">Accréditation GHRMSA Mulhouse</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <script
        id="parcours-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(parcoursSchema) }}
      />
      <MedicalFooter context={floraContext} data={floraData} />
    </main>
  );
}
