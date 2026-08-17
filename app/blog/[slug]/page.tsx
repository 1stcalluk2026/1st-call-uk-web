import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumb from "../../components/Breadcrumb";
import CtaBand from "../../components/CtaBand";
import FadeIn from "../../components/FadeIn";
import { blogPosts, getBlogPost } from "../../lib/blog-posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article" };
  return {
    title: post.title,
    description: post.subtitle,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <FadeIn>
      <div className="min-h-screen bg-white text-gray-900">
        <section className="bg-[#2d459c] px-6 py-24 text-white md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-blue-100">
              Blog
            </p>
            <h1 className="text-4xl font-extrabold md:text-5xl">{post.title}</h1>
            <p className="mt-6 text-lg text-blue-100">{post.subtitle}</p>
          </div>
        </section>
        <Breadcrumb
          items={[
            { href: "/", label: "Home" },
            { href: "/blog", label: "Blog" },
            { label: post.title },
          ]}
        />
        <article className="prose mx-auto max-w-3xl px-6 py-16 md:px-10">
          <div className="relative mb-10 h-72 w-full overflow-hidden rounded-3xl shadow-lg">
            <Image src={post.image} alt={post.title} fill className="object-cover" sizes="768px" />
          </div>
          <p className="text-sm text-gray-500">
            {new Date(post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          {post.content.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </article>
        <CtaBand
          title="If your website should be bringing in better enquiries, start there"
          primaryLabel="Book an assessment"
          secondaryHref="/contact"
          secondaryLabel="Request a review"
        />
      </div>
    </FadeIn>
  );
}
