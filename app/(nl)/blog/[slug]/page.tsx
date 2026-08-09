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
    title: post.title.nl,
    description: post.excerpt.nl,
    keywords: [post.tag.nl],
    alternates: {
      canonical: `/blog/${slug}`,
      languages: { nl: `/blog/${slug}`, en: `/en/blog/${slug}` },
    },
    openGraph: {
      title: post.title.nl,
      description: post.excerpt.nl,
      type: "article",
      url: `/blog/${slug}`,
      locale: "nl_NL",
      images: [{ url: post.photo }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title.nl,
      description: post.excerpt.nl,
      images: [post.photo],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getBlogPost(slug)) notFound();
  return <BlogPostPage lang="nl" slug={slug} />;
}
