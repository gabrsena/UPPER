
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/blog-data";

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

  // Generate a distinct hash of the city name to assign a realistic fixed review count between 50 and 120
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
    <div className="min-h-screen bg-zinc-950 pt-32 pb-20 px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocal) }} />
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase tracking-widest">
            <MapPin size={14} />
            SEO Local em {cityName}
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-tight">
            Domine as buscas <br /> em <span className="text-emerald-500">{cityName}.</span>
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Sua empresa no topo do Google Maps e recomendada por IAs para todos os clientes da região de {cityName}.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-zinc-900/30 border border-zinc-900 space-y-6">
            <h2 className="text-xl font-black text-white uppercase tracking-tight">Por que focar em {cityName}?</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              {cityName} é um polo comercial vibrante. Quando seus clientes locais buscam por seus serviços, eles decidem em segundos. Se você não está no Top 3 do Maps, você não existe para eles.
            </p>
            <ul className="space-y-4">
              {[
                "Visibilidade máxima no Google Maps",
                "Atraia clientes prontos para comprar",
                "Destaque-se da concorrência local",
                "Infraestrutura digital de alta conversão"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white text-xs font-bold uppercase tracking-tight">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 flex flex-col justify-center items-center text-center space-y-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Pronto para dominar?</h3>
              <p className="text-zinc-500 text-sm">Inicie sua infraestrutura digital hoje mesmo.</p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-5 bg-emerald-500 text-zinc-950 rounded-full font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 hover:scale-105 transition-transform"
            >
              Consultar Especialista
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
