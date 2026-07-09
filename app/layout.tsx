import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { seo } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr Flora Jullian - Chirurgien Maxillo-Facial à Mulhouse",
  description: "Cabinet de Chirurgie Maxillo-Faciale & Stomatologie du Dr Flora Jullian au GHRMSA Mulhouse. Expertise en chirurgie orthognathique, dents de sagesse et troubles de la mâchoire.",
  alternates: {
    canonical: seo.baseUrl,
  },
  icons: {
    icon: site.doctor.photoUrl,
    apple: site.doctor.photoUrl,
  },
  openGraph: {
    title: "Dr Flora Jullian - Chirurgien Maxillo-Facial",
    description: "Expertise en chirurgie orthognathique et stomatologie au GHRMSA Mulhouse.",
    url: seo.baseUrl,
    siteName: site.businessName,
    images: [{
      url: `${seo.baseUrl}${seo.defaultOgImage}`,
      width: seo.defaultOgWidth,
      height: seo.defaultOgHeight,
      alt: `Portrait du ${site.businessName}`,
    }],
    locale: seo.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.businessName} - Chirurgien Maxillo-Facial à Mulhouse`,
    description: "Cabinet de Chirurgie Maxillo-Faciale & Stomatologie au GHRMSA Mulhouse.",
    images: [`${seo.baseUrl}${seo.defaultOgImage}`],
  },
  robots: seo.robots,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const today = new Date().toISOString().split('T')[0];

  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physician",
        "@id": `${seo.baseUrl}/#physician`,
        name: site.businessName,
        description: "Chirurgien Maxillo-Facial et Stomatologue au GHRMSA Mulhouse. Expertise en chirurgie orthognathique, dents de sagesse et traumatologie faciale.",
        image: `${seo.baseUrl}${seo.defaultOgImage}`,
        medicalSpecialty: "MaxillofacialSurgery",
        telephone: site.contact.phone,
        email: site.contact.email,
        url: seo.baseUrl,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.city,
          postalCode: site.address.postalCode,
          addressRegion: site.address.region,
          addressCountry: site.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.geo.lat,
          longitude: site.geo.lng,
        },
        hospitalAffiliation: {
          "@type": "Hospital",
          name: site.hospital.name,
          address: site.hospital.address,
        },
        priceRange: "$$",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
            opens: "08:30",
            closes: "16:30",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Friday",
            opens: "08:30",
            closes: "12:00",
          },
        ],
        sameAs: seo.sameAs,
        knowsAbout: seo.knowsAbout,
      },
      {
        "@type": "WebSite",
        "@id": `${seo.baseUrl}/#website`,
        name: `${site.businessName} - Chirurgien Maxillo-Facial`,
        url: seo.baseUrl,
        description: "Cabinet de Chirurgie Maxillo-Faciale & Stomatologie au GHRMSA Mulhouse.",
        dateModified: today,
      },
      {
        "@type": "SpeakableSpecification",
        "@id": `${seo.baseUrl}/#speakable`,
        cssSelector: ["h1", "h2", ".faq-question"],
      },
    ],
  };

  return (
    <html lang={seo.lang} className={`theme-medical scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="alternate" type="application/rss+xml" title="Dr Flora Jullian — Blog" href={`${seo.baseUrl}/blog/rss.xml`} />
      </head>
      <body className="antialiased bg-[#FAF9F6] text-[#44403C]">
        <script
          id="graph-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
