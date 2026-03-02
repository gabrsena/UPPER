import { posts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import { Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Metadata } from "next";

export async function generateStaticParams() {
  const cities = ["sorocaba", "votorantim", "itu", "salto", "itapetininga", "boituva", "porto-feliz"];
  const params: { city: string, slug: string }[] = [];

  for (const city of cities) {
    for (const post of posts) {
      if (post.status === "published") {
        params.push({ city, slug: post.slug });
      }
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ city: string, slug: string }> }): Promise<Metadata> {
  const { city, slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  const cityName = city.charAt(0).toUpperCase() + city.slice(1).replace("-", " ");

  if (!post) return { title: "Blog | Upper" };

  return {
    title: `${post.title.replace(/Sorocaba/g, cityName).replace(/sorocaba/gi, cityName)} | Upper`,
    description: post.excerpt.replace(/Sorocaba/g, cityName).replace(/sorocaba/gi, cityName)
  };
}

export default async function CityBlogPostPage({ params }: { params: Promise<{ city: string, slug: string }> }) {
  const { city, slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post || post.status !== "published") {
    notFound();
  }

  const cityName = city.charAt(0).toUpperCase() + city.slice(1).replace("-", " ");

  const getReplacedText = (text: string) => {
    return text.replace(/Sorocaba/g, cityName).replace(/sorocaba/gi, cityName);
  };

  const replacedTitle = getReplacedText(post.title);
  const replacedExcerpt = getReplacedText(post.excerpt);
  const replacedContent = getReplacedText(post.content || "");

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": replacedTitle,
    "author": {
      "@type": "Organization",
      "name": "Upper Agency"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Upper Agency"
    },
    "datePublished": post.date,
    "description": replacedExcerpt
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
        "item": `https://www.upperagency.com.br/cidade/${city}#blog`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": replacedTitle,
        "item": `https://www.upperagency.com.br/cidade/${city}/blog/${slug}`
      }
    ]
  };

  return (
    <div className="bg-zinc-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <Navbar />
      <article className="min-h-screen bg-zinc-950 pt-32 pb-20 px-8">
        <div className="max-w-3xl mx-auto space-y-12">
          <Link
            href={`/cidade/${city}#blog`}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-500 hover:text-white transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Voltar para a página de {cityName}
          </Link>

          <header data-hero className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">{post.category}</span>
              <span className="w-1 h-1 rounded-full bg-zinc-800"></span>
              <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-zinc-500">
                <Clock size={12} />
                {post.readTime}
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight">
              {replacedTitle}
            </h1>
            <p className="text-zinc-500 text-lg font-medium italic">
              Publicado em {post.date} por Upper Agency {cityName}
            </p>
          </header>

          <div className="markdown-body">
            <Markdown>{replacedContent}</Markdown>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
