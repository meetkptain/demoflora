import { Metadata } from 'next';
import { seo } from './seo';

export function truncateMeta(text: string, min = 110, max = 160): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const last = cut.lastIndexOf(' ');
  return last > min ? cut.slice(0, last) + '…' : cut;
}

export function ogImage(path?: string) {
  return [{
    url: `${seo.baseUrl}${path || seo.defaultOgImage}`,
    width: seo.defaultOgWidth,
    height: seo.defaultOgHeight,
  }];
}

export function canonical(path: string): string {
  return `${seo.baseUrl}${path}`;
}

export function baseMetadata(title: string, description: string, path: string, ogOverrides?: Partial<Metadata['openGraph']>): Metadata {
  return {
    title,
    description,
    alternates: { canonical: canonical(path) },
    openGraph: {
      title,
      description,
      images: ogImage(),
      type: 'website',
      locale: seo.locale,
      ...ogOverrides,
    },
    robots: seo.robots,
  };
}

export function buildBreadcrumb(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${seo.baseUrl}${items[items.length - 1].url}#breadcrumb`,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${seo.baseUrl}${item.url}`,
    })),
  };
}

export function buildMedicalWebPage(url: string, name: string, description: string) {
  return {
    '@type': 'MedicalWebPage',
    '@id': `${seo.baseUrl}${url}#webpage`,
    url: `${seo.baseUrl}${url}`,
    name,
    description,
    about: { '@id': `${seo.baseUrl}/#physician` },
    dateModified: new Date().toISOString().split('T')[0],
    relevantSpecialty: { '@type': 'MedicalSpecialty', name: 'Chirurgie Maxillo-Faciale' },
  };
}
