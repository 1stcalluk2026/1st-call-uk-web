import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "../components/CtaBand";
import FadeIn from "../components/FadeIn";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Premium custom websites and digital systems for UK service businesses. Web design, custom development, audits, mobile apps, and AI search optimisation from Nottingham.",
};

const servicePills = [
  { href: "/our-services/web-design", label: "High-Performance Websites" },
  { href: "/our-services/custom-web-development", label: "Custom Web Development" },
  { href: "/our-services/custom-mobile-applications", label: "Custom Mobile Applications" },
  { href: "/our-services/website-audits", label: "Website Audits" },
  { href: "/our-services/ai-search-optimisation", label: "AI Search (GEO)" },
];

const industryLinks = [
  { href: "/industries/financial-services", label: "Financial Services" },
  { href: "/industries/immigration-services", label: "Immigration Lawyers" },
  { href: "/industries/building-services", label: "Construction & Trades" },
  { href: "/industries", label: "All Industries" },
];

const serviceCards = [
  {
    title: "High-Performance Custom Websites",
    description:
      "Premium custom-built websites designed for trust, clarity, and conversion. Ideal for small businesses that need a stronger first impression and a clearer path to enquiry — without template bloat.",
    points: [
      "Conversion-focused messaging and structure",
      "Lightning-fast, mobile-ready performance",
      "Stronger trust and credibility signals",
    ],
    href: "/book?service=High-Performance%20Website%20Development",
    cta: "Discuss Custom Website Needs",
  },
  {
    title: "Custom Web Development",
    description:
      "Bespoke systems engineered from scratch for businesses that need more flexibility, better performance, and builds shaped around how they actually sell and operate.",
    points: [
      "Tailored functionality and e-commerce",
      "No template bloat",
      "Built around your goals and user journey",
    ],
    href: "/book?service=Custom%20Web%20Development",
    cta: "Discuss Custom Development",
  },
  {
    title: "Custom Mobile Applications",
    description:
      "High-quality mobile apps built to increase customer loyalty and sync seamlessly with your business systems — so your website and app work as one.",
    points: [
      "Native-feeling, high-quality experiences",
      "Seamless sync with your website and tools",
      "Built for retention and growth",
    ],
    href: "/our-services/custom-mobile-applications",
    cta: "Explore Mobile Apps",
  },
  {
    title: "Website Audits and Improvement Plans",
    description:
      "A practical review of your current website to identify what is hurting speed, security, trust, or conversions — and what to fix first.",
    points: [
      "Speed, security, and UX review",
      "Performance and SEO checks",
      "Clear next-step recommendations",
    ],
    href: "/our-services/website-audits",
    cta: "Explore Website Audits",
  },
  {
    title: "AI Search Optimisation (GEO)",
    description:
      "Get cited by AI engines with structured data, answer-ready content, interactive lead magnets, and analytics that prove progress.",
    points: [
      "GEO schema and llms.txt foundations",
      "Content briefs and publish systems",
      "Scorecards and tools that capture leads",
    ],
    href: "/our-services/ai-search-optimisation",
    cta: "Explore AI Search Services",
  },
  {
    title: "Next.js Development",
    description:
      "Modern, high-performance websites engineered with Next.js for speed, security, and long-term maintainability — built for businesses that need more than a template.",
    points: [
      "Fast, secure, future-proof builds",
      "Stronger search and Core Web Vitals",
      "Easier to grow as the business grows",
    ],
    href: "/our-services/nextjs-development",
    cta: "Explore Next.js Development",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery and audit",
    description:
      "We review your business, your current site, your competitors, and the kind of enquiries you want more of.",
  },
  {
    step: "02",
    title: "Structure and messaging",
    description:
      "We shape the page structure, user journey, and messaging so visitors can quickly understand what you do and why they should trust you.",
  },
  {
    step: "03",
    title: "Design and development",
    description:
      "We design and build a fast, custom website with clean structure, strong mobile usability, and conversion-focused detail.",
  },
  {
    step: "04",
    title: "Launch and refinement",
    description:
      "We launch the site, test key journeys, and refine based on real-world use so the website continues to support growth.",
  },
];

export default function ServicesPage() {
  return (
    <FadeIn>
      <div className="min-h-screen bg-white text-gray-900">
        <PageHero
          eyebrow="Services"
          title={
            <>
              Premium custom websites and{" "}
              <span className="text-blue-300">digital systems for growth</span>
            </>
          }
          description="Modern, fast, conversion-focused websites for UK small businesses — engineered from scratch with rock-solid security and no template bloat."
          imageSrc="/heroes/hero-services.png"
          imageAlt="High-performance custom websites and digital services for UK businesses"
        />

        <section className="bg-gradient-to-b from-[#f9fafb] to-[#f1f5f9] px-6 py-24 md:px-10">
          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
            <div>
              <span className="mb-3 block text-sm font-bold uppercase tracking-widest text-[#2d459c]">
                Engineered for Results
              </span>
              <h2 className="mb-6 text-4xl font-bold text-[#2d459c] md:text-5xl">
                Strategic solutions rooted in technical excellence
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                At 1st Call UK Web &amp; Digital, we don&apos;t just design good-looking
                websites. We build fast, reliable, and conversion-focused platforms that
                support how you actually sell, deliver, and communicate as a business —
                custom-engineered without template bloat.
              </p>
              <p className="leading-relaxed text-gray-600">
                By combining clean, professional layouts with strong technical SEO and
                high-performance engineering, we create websites that feel effortless to use,
                load quickly on any device, and act as a dependable source of new enquiries.
              </p>
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/body/body-services.png"
                alt="High-performance custom websites and strategic digital systems"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#f9fafb] to-[#f1f5f9] px-6 py-20 md:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 flex flex-col items-center">
              <h2 className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-[#2d459c]/70">
                Core Services
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {servicePills.map((pill) => (
                  <Link
                    key={pill.href}
                    href={pill.href}
                    className="rounded-full border border-[#2d459c]/15 bg-[#2d459c]/5 px-8 py-4 text-sm font-bold text-[#2d459c] shadow-sm transition hover:bg-[#2d459c] hover:text-white hover:shadow-xl"
                  >
                    {pill.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-[#1e2e68]/70">
                Industry Pages
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {industryLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full border border-[#1e2e68]/15 bg-[#1e2e68]/5 px-8 py-4 text-sm font-bold text-[#1e2e68] shadow-sm transition hover:bg-[#1e2e68] hover:text-white hover:shadow-xl"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-24 md:px-10">
          <div className="mx-auto mb-16 max-w-6xl text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#2d459c]">
              Services designed around trust, speed, and conversion
            </h2>
            <p className="mx-auto max-w-3xl text-gray-600">
              The goal is not just to launch a better-looking website. The goal is to give
              your business a premium digital presence that helps the right people trust you
              faster and get in touch more easily.
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            {serviceCards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition hover:shadow-xl"
              >
                <h3 className="mb-4 text-2xl font-bold text-[#2d459c]">{card.title}</h3>
                <p className="mb-6 leading-relaxed text-gray-600">{card.description}</p>
                <div className="mb-8 space-y-2">
                  {card.points.map((point) => (
                    <p key={point} className="text-xs font-bold uppercase tracking-wide text-[#1e2e68]">
                      {point}
                    </p>
                  ))}
                </div>
                <Link href={card.href} className="font-semibold text-[#2d459c] hover:text-[#1e2e68]">
                  {card.cta} →
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-gray-100 bg-gray-50 px-6 py-24 md:px-10">
          <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
            <div>
              <span className="mb-3 block text-sm font-bold uppercase tracking-widest text-[#2d459c]">
                Why this approach works
              </span>
              <h2 className="mb-6 text-3xl font-bold text-[#2d459c] md:text-4xl">
                Built to support both rankings and real enquiries
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                A strong business website needs more than attractive design. It needs clear
                messaging, strong structure, fast performance, and a smoother path from first
                visit to first contact.
              </p>
              <p className="mb-6 leading-relaxed text-gray-700">
                We build custom websites with mobile usability, technical SEO, and user
                experience in mind from the start. That means fewer compromises, better
                performance, and a site that is easier to grow over time.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Performance-first builds",
                    desc: "Lean builds, responsive layouts, and a cleaner technical setup help your site feel faster and work better.",
                  },
                  {
                    title: "SEO-ready foundations",
                    desc: "Better structure, clearer hierarchy, and technical best practices support stronger visibility over time.",
                  },
                  {
                    title: "Mobile-focused usability",
                    desc: "Your website should be easy to understand and easy to act on across every device.",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <p className="font-bold text-[#2d459c]">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-gray-100 bg-white p-10 shadow-xl">
              <p className="mb-6 text-center text-xl font-bold text-[#2d459c]">
                What a stronger website should improve
              </p>
              <div className="space-y-6">
                {[
                  { label: "Clarity of offer", value: "Stronger" },
                  { label: "Trust and credibility", value: "Higher" },
                  { label: "Mobile experience", value: "Smoother" },
                  { label: "Lead generation path", value: "Clearer" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="mb-2 flex justify-between text-sm font-semibold">
                      <span className="text-gray-700">{stat.label}</span>
                      <span className="text-[#2d459c]">{stat.value}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                      <div className="h-full w-full rounded-full bg-[#2d459c]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-24 md:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-20 text-center">
              <h2 className="mb-4 text-4xl font-bold text-[#2d459c]">
                A clear process from first conversation to launch
              </h2>
              <p className="mx-auto max-w-2xl text-gray-600">
                A straightforward process helps keep projects focused, collaborative, and
                commercially useful from the start.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-4">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm"
                >
                  <div className="mb-4 text-3xl font-bold text-[#f5c23c]">{step.step}</div>
                  <p className="mb-3 text-xl font-bold text-[#2d459c]">{step.title}</p>
                  <p className="text-sm leading-relaxed text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-gray-100 bg-gray-50 px-6 py-24 md:px-10">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#2d459c] md:text-4xl">
                Services FAQ
              </h2>
              <p className="text-gray-600">
                A few common questions about how projects are approached.
              </p>
            </div>
            <div className="space-y-6">
              {[
                {
                  q: "Do you build custom websites or use templates?",
                  a: "We build premium custom websites engineered from scratch around your business goals, messaging, and user journey — without template bloat. That usually leads to a cleaner, faster, and more effective result than forcing a business into a generic platform.",
                },
                {
                  q: "Can you improve an existing website instead of replacing it?",
                  a: "Yes. Some businesses need a full rebuild, while others benefit more from a focused audit, structural improvements, or performance work on the existing site.",
                },
                {
                  q: "Is a custom high-performance build right for every website?",
                  a: "It is a strong fit when speed, security, flexibility, and conversion matter. The right solution depends on your business goals, content needs, and how the site will be managed day to day.",
                },
              ].map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-[#2d459c]">
                    <span>{faq.q}</span>
                    <span className="text-xl transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CtaBand title="Start with the right service for your business" />
      </div>
    </FadeIn>
  );
}
