import React from "react";
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
    </div>
  );
};
