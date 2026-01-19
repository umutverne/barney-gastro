import type { Metadata } from "next";
import { Inter, Playfair_Display, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Barney Gastro Pub | Craft Beer & Fine Food - İzmir Buca",
  description: "Barney Gastro Pub - İzmir Buca'da eşsiz lezzetler, 20+ craft bira çeşidi, canlı müzik ve unutulmaz anlar. Premium gastro pub deneyimi için bizi ziyaret edin.",
  keywords: ["gastro pub", "craft beer", "restaurant", "bar", "cocktails", "izmir", "buca", "canlı müzik", "burger", "pizza"],
  authors: [{ name: "Barney Gastro Pub" }],
  creator: "Barney Gastro Pub",
  publisher: "Barney Gastro Pub",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL("https://barneygastro.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Barney Gastro Pub | İzmir'in En İyi Gastro Pub'ı",
    description: "Craft biralar, gurme lezzetler, canlı müzik ve unutulmaz anlar için buluşma noktanız. İzmir Buca'da premium gastro pub deneyimi.",
    type: "website",
    locale: "tr_TR",
    siteName: "Barney Gastro Pub",
    url: "https://barneygastro.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barney Gastro Pub | Craft Beer & Fine Food",
    description: "İzmir Buca'da craft biralar, gurme lezzetler ve canlı müzik.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Barney Gastro Pub",
  "image": "https://barneygastro.com/og-image.jpg",
  "url": "https://barneygastro.com",
  "telephone": "+905015352939",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Menderes, 106. Sk. No:13",
    "addressLocality": "Buca",
    "addressRegion": "İzmir",
    "postalCode": "35390",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 38.3885863,
    "longitude": 27.1717773
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "12:00",
    "closes": "02:00"
  },
  "servesCuisine": ["Turkish", "International", "Pub Food"],
  "priceRange": "$$",
  "acceptsReservations": "True",
  "menu": "https://barneygastro.com/menu",
  "sameAs": [
    "https://www.instagram.com/barneygastro/"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${bebas.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
