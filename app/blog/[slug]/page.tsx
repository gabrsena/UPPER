
import { posts, getCityFromSlug, getBaseSlug } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import { Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { VideoEmbed } from "@/components/ui/video-embed";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  const city = getCityFromSlug(slug);
  const baseSlug = getBaseSlug(slug);
  const post = posts.find((p) => p.slug === baseSlug);

  if (!post) return { title: "Blog | Upper" };

  if (city) {
    const cityName = city.charAt(0).toUpperCase() + city.slice(1).replace("-", " ");
    return { title: `${post.title} em ${cityName} | Upper` };
  }

  return { title: `${post.title} | Upper` };
}

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

  const params: { slug: string }[] = [];

  for (const post of posts) {
    // Generate base params
    params.push({ slug: post.slug });

    // Generate city-specific permutations
    for (const city of cities) {
      params.push({ slug: `${post.slug}-em-${city}` });
    }
  }

  return params;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const city = getCityFromSlug(slug);
  const baseSlug = getBaseSlug(slug);
  const post = posts.find((p) => p.slug === baseSlug);

  if (!post || post.status !== "published") {
    notFound();
  }

  const cityName = city ? city.charAt(0).toUpperCase() + city.slice(1).replace("-", " ") : "";

  const getReplacedText = (text: string) => {
    if (!city) return text;
    return text.replace(/Sorocaba/g, cityName).replace(/sorocaba/gi, cityName);
  };

  const replacedTitle = getReplacedText(post.title);
  const replacedExcerpt = getReplacedText(post.excerpt);

  const rawContent = typeof post.content === 'function' ? post.content(city || "sorocaba") : (post.content || "");
  const replacedContent = city ? getReplacedText(rawContent) : rawContent;

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": city ? `${replacedTitle} em ${cityName}` : replacedTitle,
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
      ...(city ? [{
        "@type": "ListItem" as const,
        "position": 2,
        "name": cityName,
        "item": `https://www.upperagency.com.br/cidade/${city}`
      }] : []),
      {
        "@type": "ListItem",
        "position": city ? 3 : 2,
        "name": "Blog",
        "item": city ? `https://www.upperagency.com.br/cidade/${city}#blog` : "https://www.upperagency.com.br/blog"
      },
      {
        "@type": "ListItem",
        "position": city ? 4 : 3,
        "name": city ? `${replacedTitle} em ${cityName}` : replacedTitle,
        "item": `https://www.upperagency.com.br/blog/${slug}`
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
            href="/blog"
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-500 hover:text-white transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Voltar para o blog
          </Link>

          <header data-hero className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">{post.category} {city ? `- ${cityName}` : ""}</span>
              <span className="w-1 h-1 rounded-full bg-zinc-800"></span>
              <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-zinc-500">
                <Clock size={12} />
                {post.readTime}
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight">
              {replacedTitle} {city ? `em ${cityName}` : ""}
            </h1>
            <p className="text-zinc-500 text-lg font-medium italic">
              {city ? `Estratégias para ${cityName} publicadas em ${post.date}` : `Publicado em ${post.date} por Upper Agency`}
            </p>
          </header>

          <div className="markdown-body">
            <Markdown
              components={{
                a: ({ href, children }) => {
                  const url = href || "";
                  const isYoutube = url.includes("youtube.com/watch") || url.includes("youtu.be/");

                  if (isYoutube) {
                    let videoId = "";
                    if (url.includes("youtube.com/watch")) {
                      videoId = new URL(url).searchParams.get("v") || "";
                    } else if (url.includes("youtu.be/")) {
                      videoId = url.split("youtu.be/")[1]?.split("?")[0] || "";
                    }

                    if (videoId) {
                      return <VideoEmbed videoId={videoId} title={typeof children === 'string' ? children : "Assistir Vídeo"} />;
                    }
                  }

                  // Check if it's an internal link
                  const isInternal = url.startsWith("/") || url.startsWith("#") || url.includes("upperagency.com.br");

                  return (
                    <a
                      href={href}
                      className="text-emerald-500 font-bold hover:text-emerald-400 hover:underline decoration-emerald-500/30 underline-offset-4 transition-all"
                      target={isInternal ? "_self" : "_blank"}
                      rel={isInternal ? "" : "noopener noreferrer"}
                    >
                      {children}
                    </a>
                  );
                }
              }}
            >
              {replacedContent || ""}
            </Markdown>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
