
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  preload: true,
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
      { url: '/favicon.png' },
    ],
    apple: [
      { url: '/favicon.png' },
    ],
  },
  openGraph: {
    type: "website",
    title: "UPPER | SEO Local & Automação WhatsApp em Sorocaba",
    description: "Domine o Google Maps em Sorocaba, Votorantim e Itu. Transforme buscas em clientes reais com SEO Local e Automação de WhatsApp.",
    images: ["https://upper-agency-sorocaba.vercel.app/og-image.jpg"],
    locale: "pt_BR",
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
      <body className={`${sora.variable} font-sans antialiased bg-zinc-950 text-zinc-400 selection:bg-emerald-500/30 selection:text-emerald-400`}>
        {children}
      </body>
    </html>
  );
}
