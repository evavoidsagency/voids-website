import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostPage } from "@/components/pages/BlogPostPage";
import { getBlogPost, getBlogSlugs } from "@/lib/content/blog-posts";

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title.en,
    description: post.excerpt.en,
    keywords: [post.tag.en],
    alternates: {
      canonical: `/en/blog/${slug}`,
      languages: { nl: `/blog/${slug}`, en: `/en/blog/${slug}` },
    },
    openGraph: {
      title: post.title.en,
      description: post.excerpt.en,
      type: "article",
      url: `/en/blog/${slug}`,
      locale: "en_US",
      images: [{ url: post.photo }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title.en,
      description: post.excerpt.en,
      images: [post.photo],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getBlogPost(slug)) notFound();
  return <BlogPostPage lang="en" slug={slug} />;
}
