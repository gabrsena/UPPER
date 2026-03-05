import { Metadata } from "next";
import { WHATSAPP_URL } from "@/lib/constants";
import { posts } from "@/lib/blog-data";
import { Clock, BookOpen, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export async function generateStaticParams() {
  const cities = [
    "sorocaba",
    "votorantim",
    "itu",
    "salto",
    "itapetininga",
    "boituva",
    "porto-feliz"
  ];
  return cities.map((city) => ({
    city,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const cityName = city.charAt(0).toUpperCase() + city.slice(1).replace("-", " ");

  return {
    title: `Blog de SEO Local, IA e Automação em ${cityName} | Upper`,
    description: `Conteúdo estratégico sobre SEO Local, IA e Automação para transformar o seu negócio em ${cityName}.`
  };
}

export default async function CityBlogListPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const cityName = city.charAt(0).toUpperCase() + city.slice(1).replace("-", " ");

  const getReplacedText = (text: string) => {
    return text.replace(/Sorocaba/g, cityName).replace(/sorocaba/gi, cityName);
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.upperagency.com.br"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": cityName,
        "item": `https://www.upperagency.com.br/cidade/${city}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Blog",
        "item": `https://www.upperagency.com.br/cidade/${city}/blog`
      }
    ]
  };

  const displayPosts = [...posts].reverse();

  return (
    <div className="bg-zinc-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <Navbar />
      <div data-hero className="min-h-screen bg-zinc-950 pt-32 pb-20 px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <Link
                href={`/cidade/${city}`}
                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-500 hover:text-white transition-colors group"
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                Voltar para a página de {cityName}
              </Link>
              <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                Blog <span className="text-emerald-500">Upper</span>
                <span className="block text-2xl md:text-4xl mt-2 text-zinc-400">em {cityName}</span>
              </h1>
              <p className="text-zinc-500 text-sm md:text-lg font-medium max-w-xl">
                Conteúdo estratégico sobre SEO Local, IA e Automação para escalar o seu negócio em {cityName}.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {displayPosts.map((post) => (
              <Link
                key={post.id}
                href={post.status === 'published' ? `/blog/${post.slug}-em-${city}` : '#'}
                className={`group relative h-full flex flex-col bg-zinc-900/30 border border-zinc-900 rounded-3xl p-8 hover:border-emerald-500/30 transition-all duration-500 overflow-hidden ${post.status === 'under_construction' ? 'cursor-default' : 'cursor-pointer'}`}
              >
                <div className="absolute top-0 right-0 p-4">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 text-[8px] font-black uppercase text-zinc-500 tracking-widest">
                    <Clock size={10} />
                    {post.date}
                  </div>
                </div>

                <div className="space-y-6 flex-1 pt-4">
                  <div className="text-[10px] font-black uppercase text-emerald-500 tracking-widest">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-emerald-500 transition-colors">
                    {getReplacedText(post.title)}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {getReplacedText(post.excerpt)}
                  </p>
                </div>

                <div className="mt-10 flex items-center justify-between border-t border-zinc-900 pt-6">
                  <span className="text-[9px] font-black uppercase tracking-widest text-emerald-500 group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                    {post.status === 'under_construction' ? 'Em Construção' : 'Ler Artigo'}
                    <ArrowRight size={12} />
                  </span>
                  <BookOpen size={16} className="text-zinc-800 group-hover:text-emerald-500/20 transition-colors" />
                </div>

                <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
