import type { Metadata } from "next";
import "./globals.css";
import { floraContext } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Dr Flora Jullian - Chirurgien Maxillo-Facial à Mulhouse",
  description: "Cabinet de Chirurgie Maxillo-Faciale & Stomatologie du Dr Flora Jullian au GHRMSA Mulhouse. Expertise en chirurgie orthognathique, dents de sagesse et troubles de la mâchoire.",
  icons: {
    icon: '/drjullian.png', // Fallback as favicon
    apple: '/drjullian.png',
  },
  openGraph: {
    title: "Dr Flora Jullian - Chirurgien Maxillo-Facial",
    description: "Expertise en chirurgie orthognathique et stomatologie au GHRMSA Mulhouse.",
    url: "https://dr-flora-jullian.fr",
    siteName: "Dr Flora Jullian",
    images: [
      {
        url: "https://dr-flora-jullian.fr/drjullian.png",
        width: 800,
        height: 600,
        alt: "Portrait du Dr Flora Jullian",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr Flora Jullian - Chirurgien Maxillo-Facial à Mulhouse",
    description: "Cabinet de Chirurgie Maxillo-Faciale & Stomatologie au GHRMSA Mulhouse.",
    images: ["https://dr-flora-jullian.fr/drjullian.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": floraContext.businessName,
    "description": "Chirurgien Maxillo-Facial et Stomatologue au GHRMSA Mulhouse. Expertise en chirurgie orthognathique, dents de sagesse et traumatologie faciale.",
    "image": `https://dr-flora-jullian.fr${floraContext.theme.heroImageUrl}`,
    "medicalSpecialty": "MaxillofacialSurgery",
    "telephone": floraContext.contact.phone,
    "email": floraContext.contact.email,
    "url": "https://dr-flora-jullian.fr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "20 Avenue du Docteur René Laennec",
      "addressLocality": "Mulhouse",
      "postalCode": "68100",
      "addressRegion": "Grand Est",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.725,
      "longitude": 7.324
    },
    "hospitalAffiliation": {
      "@type": "Hospital",
      "name": "GHRMSA - Hôpital Emile Muller Mulhouse",
      "address": "20 Avenue du Docteur René Laennec, 68100 Mulhouse"
    },
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "08:30",
        "closes": "16:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "08:30",
        "closes": "12:00"
      }
    ],
    "sameAs": [
      "https://www.ghrmsa.fr",
      "https://www.conseil-national.medecin.fr"
    ],
    "knowsAbout": [
      "Chirurgie Orthognathique",
      "Dents de sagesse",
      "Traumatologie faciale",
      "Stomatologie",
      "Chirurgie maxillo-faciale"
    ]
  };

  return (
    <html lang="fr" className="theme-medical scroll-smooth">
      <body className="antialiased bg-[#FAF9F6] text-[#44403C]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
