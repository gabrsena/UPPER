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
    const hasHeader = Boolean(caption?.trim() || heading?.trim());

    return (
        <section className={`bg-transparent px-4 ${hasHeader ? "py-12 sm:py-16 md:py-20" : "pt-0 pb-6"}`}>
            <div className="mx-auto max-w-7xl">
                {hasHeader && (
                    <div className="mb-12 text-center sm:mb-16">
                        <p className="mb-3 font-sketch font-bold text-[#2d2d2d]/60 text-[10px] uppercase tracking-[0.5em] sm:mb-4">
                            {caption}
                        </p>
                        <h2 className="font-marker text-3xl text-[#1a1a1a] uppercase tracking-tighter sm:text-4xl md:text-5xl pen-text">
                            {heading}
                        </h2>
                    </div>
                )}
                <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article, index) => (
                        <Link
                            href={article.status === 'published' ? article.readMoreLink : '#'}
                            className={`group flex flex-col sketch-border bg-white shadow-[8px_8px_0px_#2d2d2d] transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_#2d2d2d] ${article.status === 'under_construction' ? 'cursor-default' : 'cursor-pointer'} ${index % 2 === 0 ? 'rotate-[-1deg]' : 'rotate-[1deg]'}`}
                            key={index}
                        >
                            <div className="relative mb-4 sm:mb-6 overflow-hidden p-3 origin-center">
                                <div className="blog-img-wrapper listing-card-wrapper aspect-square w-full bg-[#1a1a1a]">
                                    <Image
                                        alt={article.title}
                                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        height={1080}
                                        src={article.image || "/placeholder.svg"}
                                        width={1920}
                                    />
                                </div>
                                <p
                                    className="absolute top-4 left-4 bg-[#f6eec7] px-3 py-1 font-marker text-[10px] text-[#2d2d2d] uppercase tracking-widest sketch-border z-10"
                                >
                                    #{article.category}
                                </p>
                            </div>
                            <div className="px-5 pb-5 sm:px-6 sm:pb-6 flex-1 flex flex-col">
                                <h3 className="mb-3 font-marker text-xl text-[#1a1a1a] uppercase tracking-tight group-hover:underline decoration-wavy decoration-[#f9d5e5] underline-offset-4 transition-all">
                                    {article.title}
                                </h3>
                                <p className="mb-6 text-[#2d2d2d]/70 text-sm font-hand leading-relaxed line-clamp-3 italic">
                                    {article.description}
                                </p>

                                <div className="mt-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-[#2d2d2d]/10 pt-5">
                                    <div
                                        className="group-link relative flex items-center font-marker text-[11px] text-[#2d2d2d] uppercase tracking-widest transition-colors hover:text-black"
                                    >
                                        <span className="mr-3 overflow-hidden rounded-none border-2 border-[#2d2d2d] p-2 transition-colors duration-300 ease-in group-hover:bg-[#d4f1f4] relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10">
                                            <ArrowRight className="h-4 w-4 translate-x-0 opacity-100 transition-all duration-500 ease-in group-hover:translate-x-8 group-hover:opacity-0" />
                                            <ArrowRight className="absolute h-4 w-4 -translate-x-8 opacity-0 transition-all duration-500 ease-in group-hover:translate-x-0 group-hover:opacity-100" />
                                        </span>
                                        {article.status === 'under_construction' ? 'Em Construção' : 'Ler mais'}
                                    </div>
                                    <span className="flex items-center gap-2 text-[10px] font-sketch text-[#2d2d2d]/40 uppercase tracking-widest">
                                        {article.publishDate}
                                        <span className="w-8 border-[#2d2d2d]/10 border-t sm:w-12" />
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
