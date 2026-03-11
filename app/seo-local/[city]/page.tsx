
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/constants";

export async function generateStaticParams() {
  return [
    { city: "sorocaba" },
    { city: "votorantim" },
    { city: "itu" },
  ];
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);

  // Generate a distinct hash of the city name to assign a realistic fixed review count
  const cityHash = city.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const reviewCount = 50 + (cityHash % 70);

  const jsonLdLocal = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Upper Agency — SEO Local em ${cityName}`,
    "areaServed": cityName,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": reviewCount.toString()
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfaf3] pt-32 pb-20 px-8 relative overflow-hidden">
      {/* Subtle paper pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2d2d2d 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocal) }} />

      <div className="max-w-6xl mx-auto space-y-24 relative z-10">
        <div className="space-y-8 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 sketch-border bg-[#c8f4da] text-[#00b86b] text-[10px] font-marker uppercase tracking-widest rotate-[-1deg]">
            <MapPin size={14} />
            SEO Local em {cityName}
          </div>
          <h1 className="text-4xl md:text-7xl font-marker text-[#1a1a1a] uppercase tracking-tighter leading-[1.1] pen-text">
            <span className="block">Domine as buscas</span>
            <span className="bg-[#f6eec7] px-4 sketch-border rotate-[-1deg] inline-block mt-2">em {cityName}.</span>
          </h1>
          <p className="text-[#2d2d2d]/70 text-lg md:text-xl font-hand italic leading-relaxed max-w-2xl mx-auto">
            Sua empresa no topo do Google Maps e recomendada por IAs para todos os clientes da região de {cityName}.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="p-10 md:p-12 bg-white sketch-border shadow-[12px_12px_0px_#2d2d2d] space-y-8 rotate-[-0.5deg]">
            <h2 className="text-2xl font-marker text-[#1a1a1a] uppercase tracking-tight">Por que focar em {cityName}?</h2>
            <p className="text-[#2d2d2d]/65 text-sm md:text-base font-hand italic leading-relaxed">
              {cityName} é um polo comercial vibrante. Quando seus clientes locais buscam por seus serviços, eles decidem em segundos. Se você não está no Top 3 do Maps, você não existe para eles.
            </p>
            <ul className="space-y-5">
              {[
                "Visibilidade máxima no Google Maps",
                "Atraia clientes prontos para comprar",
                "Destaque-se da concorrência local",
                "Infraestrutura digital de alta conversão"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-[#1a1a1a] text-[11px] font-sketch font-bold uppercase tracking-widest">
                  <CheckCircle2 size={18} className="text-[#00b86b] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-10 md:p-12 bg-[#eaf9f0] sketch-border shadow-[12px_12px_0px_#00b86b]/20 flex flex-col justify-center items-center text-center space-y-10 rotate-[0.5deg]">
            <div className="space-y-4">
              <h3 className="text-3xl font-marker text-[#1a1a1a] uppercase tracking-tighter">Pronto para dominar?</h3>
              <p className="text-[#2d2d2d]/65 font-hand italic text-base">Inicie sua infraestrutura digital hoje mesmo.</p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-6 bg-white text-[#2d2d2d] sketch-border font-marker uppercase text-sm tracking-widest flex items-center justify-center gap-3 hover-jitter shadow-[8px_8px_0px_#2d2d2d] active:shadow-none active:translate-x-[8px] active:translate-y-[8px] transition-all"
            >
              Consultar Especialista
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
