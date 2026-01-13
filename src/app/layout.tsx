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
  title: "Barney Gastro Pub | Craft Beer & Fine Food",
  description: "Barney Gastro Pub - Eşsiz lezzetler, craft biralar ve unutulmaz anlar. Premium gastro pub deneyimi.",
  keywords: ["gastro pub", "craft beer", "restaurant", "bar", "cocktails", "istanbul"],
  openGraph: {
    title: "Barney Gastro Pub",
    description: "Craft biralar, gurme lezzetler ve unutulmaz anlar",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} ${bebas.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
