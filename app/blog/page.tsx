import { Metadata } from "next";
import { WHATSAPP_URL } from "@/lib/constants";
import { posts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog | SEO Local, IA e Automação | Upper",
};
import { ArrowRight, ArrowLeft } from "lucide-react";
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
        "item": "https://www.upperagency.com.br"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://www.upperagency.com.br/blog"
      }
    ]
  };

  return (
    <div className="bg-zinc-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <Navbar />
      <div data-hero className="min-h-screen bg-zinc-950 pt-32 pb-20 px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-500 hover:text-white transition-colors group"
              >
                <ArrowLeft size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
                Voltar para Home
              </Link>
              <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                Blog <span className="text-emerald-500">Upper.</span>
              </h1>
              <p className="text-zinc-500 text-sm md:text-lg font-medium max-w-xl">
                Conteúdo estratégico sobre SEO Local, IA e Automação para dominar o seu mercado regional.
              </p>
            </div>
          </div>

          <Blogs
            articles={posts.map(post => ({
              category: post.category,
              description: post.excerpt,
              image: post.imageUrl || "/placeholder.svg",
              publishDate: post.date,
              readMoreLink: post.status === 'published' ? `/blog/${post.slug}` : '#',
              title: post.title,
              status: post.status
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
