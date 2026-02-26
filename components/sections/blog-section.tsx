
import React from "react";
import { Clock, BookOpen, ArrowRight } from "lucide-react";
import { ShimmerWord } from "@/components/ui/shimmer-word";
import { posts } from "@/lib/blog-data";
import Link from "next/link";

const getSlug = (title: string) => title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]/g, "");

export const BlogSection = () => {
  // Get only the last 3 posts
  const latestPosts = posts.slice(-3).reverse();

  return (
    <section id="blog" className="py-24 md:py-32 px-8 bg-zinc-900/10 border-y border-zinc-900 relative overflow-hidden scroll-mt-20">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 block">Conteúdo Estratégico</span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight">
              Blog <br/><ShimmerWord>Upper.</ShimmerWord>
            </h2>
            <p className="text-zinc-500 text-sm md:text-base font-medium max-w-xl leading-relaxed">
              Insights sobre SEO Local, IA e Automação para dominar o seu mercado regional.
            </p>
          </div>
          <Link 
            href="/blog"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-zinc-900 border border-zinc-800 text-white text-[10px] font-black uppercase tracking-widest hover:border-emerald-500/50 transition-all duration-300"
          >
            Ver todos os artigos
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {latestPosts.map((post, i) => (
            <Link 
              key={post.id}
              href={post.status === 'published' ? `/blog/${getSlug(post.title)}` : '#'}
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
                  {post.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {post.excerpt}
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
    </section>
  );
};
