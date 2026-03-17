import { Metadata } from "next";
import { posts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog | SEO Local, IA e Automação | Upper",
};

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Blogs from "@/components/ui/blogs";

export default function BlogListPage() {
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
        "name": "Blog",
        "item": "https://www.upperagency.com.br/blog",
      },
    ],
  };

  return (
    <div className="bg-[#efe5d5]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <Navbar />

      <div data-hero className="min-h-screen bg-[#efe5d5] pt-32 pb-20 px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#2d2d2d 1px, transparent 1px)", backgroundSize: "30px 30px" }}
        />

        <div className="max-w-6xl mx-auto space-y-16 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-[10px] font-sketch font-black uppercase tracking-[0.3em] text-[#2d2d2d]/50 hover:text-[#1a1a1a] transition-colors group"
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                Voltar para Home
              </Link>

              <h1 className="text-4xl md:text-7xl font-bold text-[#1a1a1a] tracking-tight leading-tight">
                Blog <span className="pen-text">Upper.</span>
              </h1>

              <p className="text-[#2d2d2d]/65 text-sm md:text-lg font-hand italic max-w-xl leading-relaxed">
                Conteúdo estratégico sobre SEO Local, IA e Automação para dominar o seu mercado regional.
              </p>
            </div>
          </div>

          <Blogs
            articles={[...posts]
              .filter(post => !post.city)
              .sort((a, b) => b.id - a.id)
              .map((post) => ({
                category: post.category,
                description: post.excerpt,
                image: post.imageUrl || "/placeholder.svg",
                publishDate: post.date,
                readMoreLink: post.status === "published" ? `/blog/${post.slug}` : "#",
                title: post.title,
                status: post.status,
              }))}
            caption="TODOS OS ARTIGOS"
            heading="Explore Nosso Blog"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
