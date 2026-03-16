import { Metadata } from "next";
import { posts } from "@/lib/blog-data";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Blogs from "@/components/ui/blogs";

export async function generateStaticParams() {
  const cities = ["sorocaba", "votorantim", "itu", "salto", "itapetininga", "boituva", "porto-feliz"];
  return cities.map((city) => ({ city }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const cityName = city.charAt(0).toUpperCase() + city.slice(1).replace("-", " ");

  return {
    title: `Blog de SEO Local, IA e Automação em ${cityName} | Upper`,
    description: `Conteúdo estratégico sobre SEO Local, IA e Automação para transformar o seu negócio em ${cityName}.`,
  };
}

export default async function CityBlogListPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const cityName = city.charAt(0).toUpperCase() + city.slice(1).replace("-", " ");

  const getReplacedText = (text: string) => text.replace(/Sorocaba/g, cityName).replace(/sorocaba/gi, cityName);

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.upperagency.com.br",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": cityName,
        "item": `https://www.upperagency.com.br/cidade/${city}`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Blog",
        "item": `https://www.upperagency.com.br/cidade/${city}/blog`,
      },
    ],
  };

  // Filter posts:
  // ONLY show posts specifically tagged for this city
  const displayPosts = posts.filter(p => p.city === city).sort((a, b) => b.id - a.id);

  return (
    <div className="bg-[#fdfaf3]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <Navbar />

      <div data-hero className="min-h-screen bg-[#fdfaf3] pt-32 pb-20 px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#2d2d2d 1px, transparent 1px)", backgroundSize: "30px 30px" }}
        />

        <div className="max-w-6xl mx-auto space-y-16 relative z-10">
          <div className="space-y-4">
            <Link
              href={`/cidade/${city}`}
              className="inline-flex items-center gap-2 text-[10px] font-sketch font-black uppercase tracking-[0.3em] text-[#2d2d2d]/50 hover:text-[#1a1a1a] transition-colors group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Voltar para a página de {cityName}
            </Link>

            <h1 className="text-4xl md:text-7xl font-bold text-[#1a1a1a] tracking-tight leading-tight">
              Blog Upper
              <span className="block text-2xl md:text-4xl mt-2 text-[#2d2d2d]/65 pen-text">em {cityName}</span>
            </h1>

            <p className="text-[#2d2d2d]/65 text-sm md:text-lg font-hand italic max-w-xl leading-relaxed">
              Conteúdo estratégico sobre SEO Local, IA e Automação para escalar o seu negócio em {cityName}.
            </p>
          </div>

          <Blogs
            articles={displayPosts.map((post) => ({
              category: post.category,
              description: getReplacedText(post.excerpt),
              image: post.imageUrl || "/placeholder.svg",
              publishDate: post.date,
              // If it's city-specific, the slug is already canonical for that post.
              // If it's global, we use the -em-city suffix for the programmatic view.
              readMoreLink: post.status === "published" ? `/blog/${post.slug}` : "#",
              title: post.city ? post.title : getReplacedText(post.title),
              status: post.status,
            }))}
            caption={`CONTEÚDO ESTRATÉGICO EM ${cityName.toUpperCase()}`}
            heading={`Explore o Blog em ${cityName}`}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
