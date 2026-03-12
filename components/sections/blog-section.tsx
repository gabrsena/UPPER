import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { posts } from "@/lib/blog-data";
import Blogs from "@/components/ui/blogs";

export const BlogSection = ({ limit = 3, filterSlug, cityName, citySlug }: { limit?: number; filterSlug?: string; cityName?: string; citySlug?: string; }) => {
  // Filter and limit posts
  let displayPosts = [...posts].sort((a, b) => b.id - a.id);

  if (citySlug) {
    if (citySlug === "sorocaba") {
      // Show only the specific article for Sorocaba
      displayPosts = displayPosts.filter(post => post.slug === "como-anunciar-meu-negocio-local-em-sorocaba");
    } else {
      // For all other cities, show nothing (placeholder will trigger in Blogs component)
      displayPosts = [];
    }
  } else if (filterSlug) {
    displayPosts = displayPosts.filter(post => post.slug === filterSlug);
  } else {
    // Exclude city-specific articles from general listings (Home/Blog)
    displayPosts = displayPosts.filter(post => !post.city);
  } 
  
  // Apply limit if provided (for both city pages and main blog summary sections)
  if (limit) {
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
    readMoreLink: post.status === 'published' ? `/blog/${post.slug}` : '#',
    title: getReplacedText(post.title),
    status: post.status
  }));

  return (
    <div id="blog" className="scroll-mt-20 pt-12 bg-[#fdfaf3]">
      <div className="max-w-6xl mx-auto px-8 mb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#2d2d2d]/10 pb-5">
          <div className="space-y-4">
            <span className="text-[10px] font-sketch font-black uppercase tracking-[0.5em] text-[#2d2d2d]/40 block">Blog Upper.</span>
            <h2 className="text-3xl md:text-5xl font-marker tracking-tighter text-[#1a1a1a] leading-tight uppercase">
              {cityName ? `Conteúdo em ${cityName}` : `Inteligência de Mercado`}
            </h2>
          </div>
          {(!citySlug || citySlug === "sorocaba") && (
            <Link
              href={citySlug === "sorocaba" ? `/cidade/sorocaba/blog` : "/blog"}
              className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-[#2d2d2d] text-[#2d2d2d] bg-white text-[10px] font-sketch font-black uppercase tracking-[0.2em] transition-all duration-300 active:scale-95 btn-retro"
            >
              Ver todos os artigos
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
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
