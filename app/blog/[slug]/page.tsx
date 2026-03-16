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
  const post = posts.find((p) => p.slug === slug);

  if (!post) return { title: "Blog | Upper" };

  return {
    title: `${post.title} | Upper`,
    alternates: {
      canonical: `https://www.upperagency.com.br/blog/${slug}`,
    }
  };
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post || post.status !== "published") {
    notFound();
  }

  const rawContent = typeof post.content === "function" ? post.content("sorocaba") : post.content || "";

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    author: {
      "@type": "Organization",
      name: "Upper Agency",
    },
    publisher: {
      "@type": "Organization",
      name: "Upper Agency",
    },
    datePublished: post.date,
    description: post.excerpt,
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.upperagency.com.br",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.upperagency.com.br/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://www.upperagency.com.br/blog/${slug}`,
      },
    ],
  };

  return (
    <div className="bg-[#fdfaf3]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <Navbar />

      <article className="min-h-screen bg-[#fdfaf3] pt-32 pb-20 px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#2d2d2d 1px, transparent 1px)", backgroundSize: "30px 30px" }}
        />

        <div className="max-w-3xl mx-auto space-y-12 relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[10px] font-sketch font-black uppercase tracking-[0.3em] text-[#2d2d2d]/50 hover:text-[#1a1a1a] transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Voltar para o blog
          </Link>

          <header data-hero className="space-y-6">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-[10px] font-sketch font-black uppercase tracking-[0.3em] text-[#2d2d2d]/60 bg-[#d4f1f4]/70 px-2 py-1 sketch-border">
                {post.category}
              </span>
              <span className="w-1 h-1 rounded-full bg-[#2d2d2d]/25"></span>
              <div className="flex items-center gap-1.5 text-[10px] font-sketch font-black uppercase tracking-[0.2em] text-[#2d2d2d]/45">
                <Clock size={12} />
                {post.readTime}
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl text-[#1a1a1a] uppercase tracking-tighter leading-tight">
              {post.title}
            </h1>

            <p className="text-[#2d2d2d]/60 text-lg font-hand italic">
              Publicado em {post.date} por Upper Agency
            </p>
          </header>

          <div className="markdown-body">
            <Markdown
              components={{
                img: ({ src, alt, ...props }) => (
                  <span className="blog-img-wrapper">
                    <img src={src} alt={alt} {...props} />
                  </span>
                ),
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
                      return <VideoEmbed videoId={videoId} title={typeof children === "string" ? children : "Assistir Vídeo"} />;
                    }
                  }

                  const isInternal = url.startsWith("/") || url.startsWith("#") || url.includes("upperagency.com.br");

                  return (
                    <a
                      href={href}
                      className="text-[#1a1a1a] font-bold hover:text-[#2d2d2d] hover:underline decoration-[#f9d5e5] underline-offset-4 transition-all"
                      target={isInternal ? "_self" : "_blank"}
                      rel={isInternal ? "" : "noopener noreferrer"}
                    >
                      {children}
                    </a>
                  );
                },
              }}
            >
              {rawContent || ""}
            </Markdown>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
