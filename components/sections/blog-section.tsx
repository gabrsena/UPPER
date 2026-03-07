import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { posts } from "@/lib/blog-data";
import Blogs from "@/components/ui/blogs";

export const BlogSection = ({ limit = 3, filterSlug, cityName, citySlug }: { limit?: number; filterSlug?: string; cityName?: string; citySlug?: string; }) => {
  // Filter and limit posts
  let displayPosts = [...posts].reverse();

  if (filterSlug) {
    displayPosts = displayPosts.filter(post => post.slug === filterSlug);
  } else if (limit) {
    displayPosts = displayPosts.slice(0, limit);
  }

  const getReplacedText = (text: string) => {
    if (!cityName) return text;
    return text.replace(/Sorocaba/g, cityName).replace(/sorocaba/gi, cityName);
  };

  const mappedArticles = displayPosts.map(post => ({
    category: post.category,
    description: getReplacedText(post.excerpt),
    image: post.imageUrl || "/placeholder.svg",
    publishDate: post.date,
    readMoreLink: post.status === 'published' ? (citySlug ? `/blog/${post.slug}-em-${citySlug}` : `/blog/${post.slug}`) : '#',
    title: getReplacedText(post.title),
    status: post.status
  }));

  return (
    <div id="blog" className="scroll-mt-20 pt-16">
      <div className="max-w-6xl mx-auto px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-zinc-900 pb-8">
          <div className="space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 block">Blog Upper.</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-tight uppercase">
              Conteúdo {cityName ? `em ${cityName}` : `Estratégico`}
            </h2>
          </div>
          <Link
            href={citySlug ? `/cidade/${citySlug}/blog` : "/blog"}
            className="group inline-flex items-center gap-3 px-8 py-4 border border-zinc-800 text-white text-[10px] font-black uppercase tracking-[0.2em] hover:border-emerald-500/50 transition-all duration-300 active:scale-95"
          >
            Ver todos os artigos
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <Blogs
        articles={mappedArticles}
        caption=""
        heading=""
      />
    </div>
  );
};
