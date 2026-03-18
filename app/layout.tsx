
import type { Metadata } from "next";
import { Sora, Architects_Daughter, Patrick_Hand, Permanent_Marker, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const architectsDaughter = Architects_Daughter({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sketch",
  display: "swap",
});

const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marker",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sua Empresa no Topo do Google e da IA | Upper",
  description: "Apareça no topo do Google Maps em Sorocaba com SEO Local + Automação WhatsApp 24h. A UPPER estrutura sua presença digital para converter buscas em clientes reais. Atendimento em Sorocaba, Votorantim e Itu.",
  keywords: ["SEO Local Sorocaba", "Google Empresas", "Google Maps", "Automação WhatsApp", "Infraestrutura Digital", "Visibilidade Local", "GEO"],
  authors: [{ name: "UPPER." }],
  alternates: {
    canonical: "https://www.upperagency.com.br/",
  },
  icons: {
    icon: [
      { url: '/favicon.svg' },
    ],
    apple: [
      { url: '/favicon.svg' },
    ],
  },
  openGraph: {
    type: "website",
    siteName: "Upper Agency",
    title: "Sua Empresa no Topo do Google e da IA | Upper",
    description: "Domine o Google Maps em Sorocaba, Votorantim e Itu. Transforme buscas em clientes reais com SEO Local e Automação de WhatsApp.",
    url: "https://www.upperagency.com.br/",
    images: [
      {
        url: "https://upper-agency-sorocaba.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Upper Agency — Infraestrutura Digital",
      }
    ],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sua Empresa no Topo do Google e da IA | Upper",
    description: "Domine o Google Maps em Sorocaba, Votorantim e Itu. Transforme buscas em clientes reais com SEO Local e Automação de WhatsApp.",
    images: ["https://upper-agency-sorocaba.vercel.app/og-image.jpg"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${sora.variable} ${inter.variable} ${architectsDaughter.variable} ${patrickHand.variable} ${permanentMarker.variable} font-sans antialiased bg-[#efe5d5] text-[#2d2d2d] selection:bg-[#a8d8ea] selection:text-[#2d2d2d]`}>
        {/* SVG UI Filters (Sketchy Borders) */}
        <svg style={{ visibility: 'hidden', position: 'absolute' }} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="sketch-filter">
              <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="1" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
            </filter>
            <filter id="pen-filter">
              <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="1" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
            </filter>
          </defs>
        </svg>
        {children}
      </body>
    </html>
  );
}
