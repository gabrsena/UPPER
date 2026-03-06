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
    <div id="blog" className="scroll-mt-20">
      <Blogs
        articles={mappedArticles}
        caption={`CONTEÚDO ESTRATÉGICO ${cityName ? `EM ${cityName.toUpperCase()}` : ''}`}
        heading="Blog Upper."
      />

      <div className="flex justify-center pb-20 -mt-8">
        <Link
          href={citySlug ? `/cidade/${citySlug}/blog` : "/blog"}
          className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-zinc-900 border border-zinc-800 text-white text-[11px] font-black uppercase tracking-[0.2em] hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
        >
          Ver todos os artigos
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
