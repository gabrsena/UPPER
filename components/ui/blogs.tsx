import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Article {
    category: string;
    description: string;
    image: string;
    publishDate: string;
    readMoreLink: string;
    title: string;
    status: 'published' | 'under_construction';
}

interface BlogsProps {
    articles: Article[];
    caption?: string;
    heading?: string;
}

export default function Blogs({
    articles,
    caption = "CONTEÚDO ESTRATÉGICO",
    heading = "Blog Articles"
}: BlogsProps) {
    return (
        <section className="bg-transparent px-4 py-12 sm:py-16 md:py-20">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8 text-center sm:mb-12">
                    <p className="mb-3 font-bold text-emerald-500 text-[10px] uppercase tracking-[0.5em] sm:mb-4">
                        {caption}
                    </p>
                    <h2 className="font-black text-3xl text-white uppercase tracking-tighter sm:text-4xl md:text-5xl">
                        {heading}
                    </h2>
                </div>
                <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article, index) => (
                        <Link
                            href={article.status === 'published' ? article.readMoreLink : '#'}
                            className={`group flex flex-col border border-zinc-900 bg-zinc-900/10 shadow-none backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/20 hover:bg-zinc-900/20 ${article.status === 'under_construction' ? 'cursor-default' : 'cursor-pointer'}`}
                            key={index}
                        >
                            <div className="relative mb-4 sm:mb-6 overflow-hidden">
                                <Image
                                    alt={article.title}
                                    className="aspect-square h-64 w-full object-cover sm:h-72 md:h-80 transition-transform duration-700 group-hover:scale-105"
                                    height={1080}
                                    src={article.image || "/placeholder.svg"}
                                    width={1920}
                                />
                                <p
                                    className="absolute top-0 left-0 bg-white/95 px-3 py-1 font-black text-[10px] text-black uppercase tracking-widest backdrop-blur-sm dark:bg-zinc-950/95 dark:text-emerald-500"
                                >
                                    #{article.category}
                                </p>
                            </div>
                            <div className="px-5 pb-5 sm:px-6 sm:pb-6 flex-1 flex flex-col">
                                <h3 className="mb-3 font-black text-xl text-white uppercase tracking-tight group-hover:text-emerald-500 transition-colors">
                                    {article.title}
                                </h3>
                                <p className="mb-6 text-zinc-500 text-sm leading-relaxed line-clamp-3">
                                    {article.description}
                                </p>

                                <div className="mt-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-zinc-900 pt-5">
                                    <div
                                        className="group-link relative flex items-center font-black text-[10px] text-white uppercase tracking-widest transition-colors hover:text-emerald-500"
                                    >
                                        <span className="mr-3 overflow-hidden rounded-none border border-zinc-800 p-2 transition-colors duration-300 ease-in group-hover:bg-emerald-500 group-hover:text-black group-hover:border-emerald-500 relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10">
                                            <ArrowRight className="h-4 w-4 translate-x-0 opacity-100 transition-all duration-500 ease-in group-hover:translate-x-8 group-hover:opacity-0" />
                                            <ArrowRight className="absolute h-4 w-4 -translate-x-8 opacity-0 transition-all duration-500 ease-in group-hover:translate-x-0 group-hover:opacity-100" />
                                        </span>
                                        {article.status === 'under_construction' ? 'Em Construção' : 'Ler mais'}
                                    </div>
                                    <span className="flex items-center gap-2 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                                        {article.publishDate}
                                        <span className="w-8 border-zinc-800 border-t sm:w-12" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
