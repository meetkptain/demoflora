'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, AlertCircle, Stethoscope, ArrowRight, PhoneCall, ChevronRight, ChevronDown, Clock, Zap, Calendar, HelpCircle } from 'lucide-react';
import { symptomData, floraContext } from '@/lib/constants';
import { formatTextWithGlossary } from '@/lib/utils';
import MedicalHeader from '@/components/MedicalHeader';

// ─────────────────────────────────────────────────────────────
// Helper : Badge urgence
// ─────────────────────────────────────────────────────────────
function UrgencyBadge({ level }: { level: 'programmed' | 'soon' | 'urgent' }) {
  const config = {
    urgent: {
      icon: Zap,
      label: 'Urgence — Consultez rapidement',
      bg: 'bg-red-50 border-red-200',
      text: 'text-red-700',
      dot: 'bg-red-500',
      iconColor: 'text-red-600',
    },
    soon: {
      icon: Clock,
      label: 'Consultation conseillée sous 7 jours',
      bg: 'bg-amber-50 border-amber-200',
      text: 'text-amber-800',
      dot: 'bg-amber-500',
      iconColor: 'text-amber-600',
    },
    programmed: {
      icon: Calendar,
      label: 'Consultation programmée — non urgente',
      bg: 'bg-emerald-50 border-emerald-200',
      text: 'text-emerald-800',
      dot: 'bg-emerald-500',
      iconColor: 'text-emerald-600',
    },
  };
  const c = config[level];
  const Icon = c.icon;
  return (
    <div className={`inline-flex items-center gap-2.5 rounded-full border px-4 py-2 ${c.bg}`}>
      <span className={`h-2 w-2 rounded-full ${c.dot} animate-pulse`} />
      <Icon className={`h-3.5 w-3.5 ${c.iconColor}`} />
      <span className={`text-[11px] font-bold uppercase tracking-[0.15em] ${c.text}`}>{c.label}</span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Helper : FAQ accordéon (client component)
// ─────────────────────────────────────────────────────────────
function FaqAccordion({ faq }: { faq: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faq.map((item, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-2xl border border-[#E8DFD1] bg-white transition-all"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
            aria-expanded={open === i}
          >
            <span className="text-sm font-semibold text-[#241F1A] leading-snug">{item.question}</span>
            <ChevronDown
              className={`h-4 w-4 flex-shrink-0 text-[#A67A3D] transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
            />
          </button>
          <div
            className={`transition-all duration-300 ease-in-out ${open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
          >
            <p className="px-6 pb-5 text-sm leading-relaxed text-[#423C35]">{formatTextWithGlossary(item.answer)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Page (Client component — SSG handled via generateStaticParams in wrapper)
// ─────────────────────────────────────────────────────────────
export default function SymptomePageClient({ slug }: { slug: string }) {
  const symptom = symptomData.find((s) => s.slug === slug);
  if (!symptom) return null;

  const relatedSymptomObjects = symptom.relatedSymptoms
    ?.map((rs) => symptomData.find((s) => s.slug === rs))
    .filter(Boolean) ?? [];

  return (
    <main className="theme-medical">
      <MedicalHeader context={floraContext} />

      <div className="relative min-h-screen overflow-hidden bg-[#FAF9F6] text-[#2F2A24]">
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] bg-precision-grid" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 pt-32 pb-32">

          {/* ── Retour ── */}
          <nav className="mb-10">
            <Link
              href="/symptomes"
              className="inline-flex items-center gap-2 rounded-full border border-[#E8DFD1] bg-white px-5 py-3 text-[11px] font-bold uppercase tracking-widest text-[#A67A3D] shadow-sm transition-all hover:bg-[#FAF9F6] hover:text-[#0891B2]"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Tous les symptômes
            </Link>
          </nav>

          {/* ── Header ── */}
          <header className="mb-14">
            <div className="mb-5">
              <UrgencyBadge level={symptom.urgencyLevel} />
            </div>
            <h1 className="font-lora text-[clamp(36px,6vw,68px)] font-medium leading-[1.05] tracking-[-0.03em] text-[#241F1A]">
              {symptom.title}
            </h1>
            <p className="mt-2 font-lora text-xl italic text-[#A67A3D]">
              {symptom.headline}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#423C35]">
              {formatTextWithGlossary(symptom.intro)}
            </p>
          </header>

          {/* ── Grille Causes / Quand consulter ── */}
          <div className="mb-10 grid gap-6 md:grid-cols-2">
            <section className="rounded-[2rem] border border-[#E8DFD1] bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0891B2]/5 text-[#0891B2]">
                  <Stethoscope className="h-5 w-5" />
                </div>
                <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-[#423C35]">Causes possibles</h2>
              </div>
              <ul className="space-y-3">
                {symptom.causes.map((cause, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-[#423C35]">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0891B2]" />
                    {formatTextWithGlossary(cause)}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[2rem] border border-[#FDECEA] bg-[#FFF8F6] p-8 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8563A]/8 text-[#C44025]">
                  <AlertCircle className="h-5 w-5" />
                </div>
                <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-[#423C35]">Quand consulter ?</h2>
              </div>
              <ul className="space-y-3">
                {symptom.consultSigns.map((sign, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-[#423C35]">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C44025]" />
                    {sign}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* ── FAQ ── */}
          {symptom.faq && symptom.faq.length > 0 && (
            <section className="mb-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C5A065]/8 text-[#A67A3D]">
                  <HelpCircle className="h-5 w-5" />
                </div>
                <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-[#423C35]">Questions fréquentes</h2>
              </div>
              <FaqAccordion faq={symptom.faq} />
            </section>
          )}

          {/* ── Voir aussi ── */}
          {relatedSymptomObjects.length > 0 && (
            <section className="mb-10">
              <h2 className="mb-5 text-sm font-bold uppercase tracking-[0.15em] text-[#423C35]">Voir aussi</h2>
              <div className="flex flex-wrap gap-3">
                {relatedSymptomObjects.map((rs) => rs && (
                  <Link
                    key={rs.slug}
                    href={`/symptomes/${rs.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-[#E8DFD1] bg-white px-5 py-2.5 text-[11px] font-semibold text-[#423C35] transition-all hover:border-[#0891B2]/30 hover:bg-[#0891B2]/5 hover:text-[#0891B2]"
                  >
                    {rs.title}
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* ── Intervention liée ── */}
          {symptom.relatedIntervention && (
            <section className="mb-8 rounded-[2rem] border border-[#C5A065]/20 bg-gradient-to-r from-[#FAF5EC] to-white p-8">
              <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.3em] text-[#A67A3D]">
                Intervention associée
              </p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#423C35]">
                {formatTextWithGlossary(symptom.relatedIntervention.description)}
              </p>
              <Link
                href={`/interventions/${symptom.relatedIntervention.slug}`}
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#C5A065]/30 bg-white px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-[#A67A3D] transition-all hover:bg-[#0891B2] hover:border-[#0891B2] hover:text-white"
              >
                {symptom.relatedIntervention.label}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </section>
          )}

          {/* ── CTA Rendez-vous ── */}
          <section className="rounded-[2rem] border border-[#E8DFD1]/60 bg-[#241F1A] px-8 py-10 text-white">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10">
                  <PhoneCall className="h-6 w-6 text-[#C5A065]" />
                </div>
                <div>
                  <p className="font-lora text-xl font-medium">Prendre rendez-vous</p>
                  <p className="mt-1 text-sm text-white/60">Consultez le Dr Flora Jullian au GHRMSA Mulhouse</p>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-[#C5A065] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#241F1A] transition-all hover:bg-white"
              >
                Contacter le cabinet
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
