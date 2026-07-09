import { Metadata } from 'next';
import { seo } from '@/lib/seo';
import { ogImage } from '@/lib/utils-seo';

export const metadata: Metadata = {
  title: 'Vos symptômes — Dr Flora Jullian, Mulhouse',
  description: 'Identifiez votre gêne, comprenez son origine et découvrez la prise en charge proposée par le Dr Flora Jullian, chirurgien maxillo-facial à Mulhouse. 50 symptômes traités.',
  alternates: {
    canonical: `${seo.baseUrl}/symptomes`,
  },
  openGraph: {
    title: 'Vos symptômes — Dr Flora Jullian',
    description: 'Identifiez votre gêne, comprenez son origine et découvrez la prise en charge proposée par le Dr Flora Jullian, chirurgien maxillo-facial à Mulhouse.',
    images: ogImage(),
    type: 'website',
    locale: seo.locale,
  },
  robots: { index: true, follow: true },
};

export default function SymptomesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
