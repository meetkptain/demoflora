import Link from 'next/link';
import MedicalHeader from '@/components/MedicalHeader';
import MedicalFooter from '@/components/MedicalFooter';
import { floraContext, floraData } from '@/lib/constants';

export default function NotFound() {
  return (
    <main className="theme-medical">
      <MedicalHeader context={floraContext} data={floraData} />
      <div className="relative min-h-[70vh] flex items-center justify-center bg-[#FAF9F6] text-[#2F2A24] px-6">
        <div className="text-center space-y-8 max-w-lg">
          <h1 className="font-lora text-[clamp(48px,8vw,96px)] font-medium leading-none text-[#241F1A]">404</h1>
          <p className="text-lg text-[#423C35] leading-relaxed">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-full bg-[#241F1A] px-8 py-5 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#0891B2] shadow-lg"
            >
              Retour à l'accueil
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full border border-[#C5A065]/30 bg-white px-8 py-5 text-xs font-bold uppercase tracking-[0.2em] text-[#A67A3D] transition-all hover:bg-[#C5A065]/5"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
      <MedicalFooter context={floraContext} data={floraData} />
    </main>
  );
}
