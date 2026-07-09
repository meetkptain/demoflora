import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import MedicalHeader from '@/components/MedicalHeader';
import MedicalFooter from '@/components/MedicalFooter';
import { floraContext, floraData } from '@/lib/constants';
import { seo } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Dr Flora Jullian - Chirurgien Maxillo-Facial & Stomatologue | Présentation',
  description: 'Présentation du Dr Flora Jullian, chirurgien maxillo-facial au GHRMSA Mulhouse. Expertise en chirurgie orthognathique, esthétique et reconstructrice.',
  alternates: {
    canonical: `${seo.baseUrl}/a-propos`,
  },
};

export default function AboutPage() {
  const doctor = floraData.doctors[0];

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': `${seo.baseUrl}/a-propos#page`,
        url: `${seo.baseUrl}/a-propos`,
        name: `Dr Flora Jullian - Chirurgien Maxillo-Facial & Stomatologue | Présentation`,
        description: 'Présentation du Dr Flora Jullian, chirurgien maxillo-facial au GHRMSA Mulhouse.',
        about: { '@id': `${seo.baseUrl}/#physician` },
        dateModified: new Date().toISOString().split('T')[0],
      },
      {
        '@type': 'Physician',
        '@id': `${seo.baseUrl}/#physician`,
        hasCredential: doctor.qualifications?.map((q) => ({
          '@type': 'EducationalOccupationalCredential',
          name: q,
        })) ?? [],
        alumniOf: [
          { '@type': 'CollegeOrUniversity', name: 'Faculté Lyon-Sud' },
          { '@type': 'CollegeOrUniversity', name: 'Université de Strasbourg' },
        ],
      },
    ],
  };

  return (
    <main className="theme-medical">
      <MedicalHeader context={floraContext} data={floraData} />
      <div className="relative min-h-screen overflow-hidden bg-[#FAF9F6] text-[#2F2A24]">
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] bg-precision-grid" />

        <section className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-4">
              <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-[#C5A065]/20 shadow-xl">
                <Image src={doctor.photoUrl || "/drjullian.webp"} alt={doctor.fullname} fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover" />
              </div>
            </div>
            <div className="md:col-span-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-[#C5A065]/40" />
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#A67A3D]">Praticienne</span>
              </div>
              <h1 className="font-lora text-[clamp(40px,6vw,72px)] font-medium leading-[0.95] tracking-[-0.02em] text-[#241F1A]">{doctor.fullname}</h1>
              <p className="mt-4 text-xl text-[#A67A3D] font-medium">{doctor.title}</p>
              <p className="mt-6 text-lg leading-relaxed text-[#423C35] max-w-2xl">{floraData.slogan}</p>
              <div className="mt-8">
                <Link href="/contact" className="inline-flex items-center gap-3 rounded-full bg-[#241F1A] px-8 py-5 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#0891B2] shadow-lg">
                  Prendre rendez-vous
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-[2rem] border border-[#E8DFD1] bg-white p-8 md:p-10">
            <h2 className="font-lora text-2xl font-medium text-[#241F1A] mb-8">Parcours & Formation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#A67A3D] mb-4">Qualifications</h3>
                <ul className="space-y-3 text-[#423C35]">
                  {doctor.qualifications?.map((qual, i) => (
                    <li key={i} className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#C5A065]/60" />{qual}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#A67A3D] mb-4">Expérience</h3>
                <ul className="space-y-3 text-[#423C35]">
                  {doctor.experience?.map((exp, i) => (
                    <li key={i} className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#C5A065]/60" />{exp}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-[2rem] border border-[#C5A065]/15 bg-[#C5A065]/[0.04] p-8 md:p-10">
            <h2 className="font-lora text-2xl font-medium text-[#241F1A] mb-6">Ma Philosophie</h2>
            <blockquote className="italic text-lg text-[#423C35] border-l-4 border-[#C5A065] pl-6 py-2 leading-relaxed">
              &quot;La chirurgie maxillo-faciale est à la croisée des chemins entre la fonction et l&apos;esthétique. Mon objectif est de restaurer l&apos;harmonie du visage tout en préservant ou en améliorant les fonctions vitales que sont la respiration, la mastication et l&apos;élocution.&quot;
            </blockquote>
          </div>
        </section>

        <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
          <div className="rounded-[2rem] border border-[#E8DFD1] bg-white p-8 md:p-10">
            <h2 className="font-lora text-2xl font-medium text-[#241F1A] mb-6">Lieux d&apos;exercice</h2>
            <div className="bg-[#FAF6F0] p-6 rounded-2xl border border-[#C5A065]/15">
              <h3 className="font-bold text-[#241F1A] mb-2">GHRMSA - Hôpital Émile Muller</h3>
              <p className="text-[#423C35] mb-4">Service de Chirurgie Maxillo-Faciale et Stomatologie<br />20 Avenue du Docteur René Laennec, 68100 Mulhouse</p>
              <p className="text-sm text-[#A67A3D] italic">Interventions chirurgicales lourdes et hospitalisations.</p>
            </div>
          </div>
        </section>
      </div>
      <script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <MedicalFooter context={floraContext} data={floraData} />
    </main>
  );
}
