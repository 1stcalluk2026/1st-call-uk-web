import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "../components/CtaBand";
import FadeIn from "../components/FadeIn";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Industry-focused websites for UK service businesses in finance, immigration, construction, catering, and professional services.",
};

const industries = [
  {
    href: "/industries/financial-services",
    label: "Financial Services",
    description:
      "Web design for financial businesses that need clarity, trust, and a more professional route to enquiry.",
  },
  {
    href: "/industries/immigration-services",
    label: "Immigration Lawyers",
    description:
      "Website design for immigration-focused firms that need to build authority, reduce confusion, and make it easier for clients to get in touch.",
  },
  {
    href: "/industries/building-services",
    label: "Construction and Trades",
    description:
      "Lead generation websites for construction companies and tradespeople that need stronger credibility and more quote-ready enquiries.",
  },
  {
    href: "/industries/catering-services",
    label: "Catering Services",
    description:
      "Websites for catering and hospitality businesses that need a stronger first impression and a clearer booking or enquiry path.",
  },
];

export default function IndustriesPage() {
  return (
    <FadeIn>
      <div className="min-h-screen bg-white text-gray-900">
        <PageHero
          eyebrow="Industries"
          title="Industry-focused websites for service businesses"
          description="Websites shaped around stronger credibility, clearer messaging, and better lead generation in the sectors where trust matters most."
          imageSrc="/heroes/hero-industries.png"
          imageAlt="Industry-focused web design for UK service businesses"
        />

        <section className="bg-gradient-to-b from-[#f9fafb] to-[#f1f5f9] px-6 py-24 md:px-10">
          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
            <div>
              <span className="mb-3 block text-sm font-bold uppercase tracking-widest text-[#2d459c]">
                Who we help
              </span>
              <h2 className="mb-6 text-4xl font-bold text-[#2d459c] md:text-5xl">
                Websites shaped around how your industry wins trust
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                The best service-business websites are not generic. They reflect what matters
                in your market, what clients need to see, and what helps them feel ready to
                take the next step.
              </p>
              <p className="leading-relaxed text-gray-600">
                The structure, tone, and proof that works for a law firm is different from
                what works for a construction company or a mortgage broker.
              </p>
            </div>
            <div className="relative h-[380px] w-full overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/body/body-industries.png"
                alt="Industry-focused websites for UK service businesses"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold text-[#2d459c]">Industry pages</h2>
              <p className="mx-auto max-w-3xl text-gray-600">
                Explore the sectors where trust, clarity, and enquiry quality matter most.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {industries.map((industry) => (
                <article
                  key={industry.href}
                  className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition hover:shadow-xl"
                >
                  <h3 className="mb-4 text-2xl font-bold text-[#2d459c]">{industry.label}</h3>
                  <p className="mb-6 leading-relaxed text-gray-600">{industry.description}</p>
                  <Link href={industry.href} className="font-semibold text-[#2d459c] hover:text-[#1e2e68]">
                    View {industry.label} →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 px-6 py-24 md:px-10">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            {[
              {
                title: "Trust matters more in some sectors",
                description:
                  "For legal, financial, and advisory businesses, the website often shapes the first impression before any conversation happens.",
              },
              {
                title: "Different industries ask different questions",
                description:
                  "A construction client looks for proof, reliability, and local credibility. A legal or financial client looks for clarity, professionalism, and reassurance.",
              },
              {
                title: "The best websites reflect how clients choose",
                description:
                  "Industry-specific messaging, page structure, and calls-to-action help the website feel more relevant and more persuasive.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-2xl font-bold text-[#2d459c]">{item.title}</h3>
                <p className="leading-relaxed text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <CtaBand
          title="Need a website that fits your sector?"
          description="Tell us about your business and the enquiries you want more of. We will recommend the right starting point."
          secondaryHref="/our-services"
          secondaryLabel="View Services"
        />
      </div>
    </FadeIn>
  );
}
