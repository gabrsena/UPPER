
import { posts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import { Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

// Helper to generate slugs from titles
const getSlug = (title: string) => title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]/g, "");

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: getSlug(post.title),
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => getSlug(p.title) === slug);

  if (!post || post.status !== "published") {
    notFound();
  }

  return (
    <article className="min-h-screen bg-zinc-950 pt-32 pb-20 px-8">
      <div className="max-w-3xl mx-auto space-y-12">
        <Link 
          href="/blog"
          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-500 hover:text-white transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Voltar para o blog
        </Link>

        <header className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">{post.category}</span>
            <span className="w-1 h-1 rounded-full bg-zinc-800"></span>
            <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-zinc-500">
              <Clock size={12} />
              {post.readTime}
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight">
            {post.title}
          </h1>
          <p className="text-zinc-500 text-lg font-medium italic">
            Publicado em {post.date} por Upper Agency
          </p>
        </header>

        <div className="markdown-body">
          <Markdown>{post.content || ""}</Markdown>
        </div>
      </div>
    </article>
  );
}
