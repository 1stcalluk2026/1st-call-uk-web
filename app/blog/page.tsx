import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "../components/CtaBand";
import FadeIn from "../components/FadeIn";
import PageHero from "../components/PageHero";
import { blogPosts } from "../lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical guides on web design, SEO, conversion, and AI search for UK service businesses that want more qualified enquiries.",
};

export default function BlogPage() {
  return (
    <FadeIn>
      <div className="min-h-screen bg-white text-gray-900">
        <PageHero
          eyebrow="Blog"
          title={
            <>
              1st Call UK <span className="text-blue-300">Blog</span>
            </>
          }
          description="Practical guides on web design, SEO, and conversion for UK service businesses that want more qualified enquiries."
          imageSrc="/heroes/hero-blog.png"
          imageAlt="1st Call UK Web & Digital blog"
        />

        <section className="px-6 py-16 md:px-10">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md transition hover:shadow-xl"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h2 className="mb-2 text-xl font-bold text-[#2d459c]">{post.title}</h2>
                  <p className="mb-4 text-gray-600">{post.subtitle}</p>
                  <p className="mb-4 text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-semibold text-[#2d459c] hover:text-[#1e2e68]"
                  >
                    Read article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <CtaBand
          title="Want this thinking applied to your website?"
          description="Book a consultation or request a website audit and we will tell you what is hurting trust, visibility, and conversions."
          secondaryHref="/contact?intent=audit"
          secondaryLabel="Request a Website Audit"
        />
      </div>
    </FadeIn>
  );
}
