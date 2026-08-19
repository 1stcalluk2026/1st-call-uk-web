import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "../components/CtaBand";
import FadeIn from "../components/FadeIn";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Selected website work for UK service businesses that needed stronger credibility, clearer messaging, and more qualified enquiries.",
};

const projects = [
  {
    title: "Immigration advisory website",
    sector: "Professional services",
    summary:
      "A trust-led rebuild for an immigration-focused firm. The new site made services easier to understand, reduced friction on first contact, and presented the practice as a more established operation.",
    results: ["Clearer service journeys", "Stronger authority design", "Shorter path to enquiry"],
  },
  {
    title: "Financial services platform",
    sector: "Finance",
    summary:
      "A calm, professional website for a financial business that needed to look credible before the first conversation. Messaging, proof, and enquiry flow were rebuilt around how clients actually choose an adviser.",
    results: ["Higher-trust first impression", "Cleaner service structure", "Better mobile enquiry rate"],
  },
  {
    title: "Trade and construction site",
    sector: "Construction",
    summary:
      "A fast, proof-led website for a trade business that was losing quote requests to slower, dated pages. Recent work, local credibility, and a simple quote journey became the centre of the site.",
    results: ["Faster load times", "Clearer project proof", "More quote-ready enquiries"],
  },
  {
    title: "Service-business audit to rebuild",
    sector: "Growth audit",
    summary:
      "Not every project starts with a full rebuild. This engagement began with a website health audit, then moved into a focused rebuild once the conversion and performance issues were clear.",
    results: ["Prioritised improvement plan", "Conversion-led architecture", "Modern technical foundation"],
  },
];

export default function OurWorkPage() {
  return (
    <FadeIn>
      <div className="min-h-screen bg-white text-gray-900">
        <PageHero
          eyebrow="Our Work"
          title={
            <>
              Websites built to{" "}
              <span className="text-blue-300">win better enquiries</span>
            </>
          }
          description="Selected work for UK service businesses that needed a more credible first impression, clearer messaging, and a website that actually generates leads."
          imageSrc="/heroes/hero-our-work.png"
          imageAlt="Selected website work from 1st Call UK Web & Digital"
        />

        <section className="px-6 py-20 md:px-10">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#2d459c]">
              Work shaped around real commercial problems
            </h2>
            <p className="text-lg text-gray-600">
              The common thread is not a visual style. It is a website that makes the
              business easier to trust, easier to understand, and easier to contact.
            </p>
          </div>
          <article className="mx-auto mb-16 grid max-w-6xl overflow-hidden rounded-3xl border border-gray-100 bg-[#f8f9fc] shadow-lg md:grid-cols-2">
            <div className="relative min-h-[280px] md:min-h-[420px]">
              <Image
                src="/work/wild-hearts-collective.jpg"
                alt="Wild Hearts Collective aerial and pole studio website"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="flex flex-col justify-center px-8 py-10 md:px-10 md:py-12">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#2d459c]">
                Featured case study
              </p>
              <h3 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
                Wild Hearts Collective
              </h3>
              <p className="mb-4 leading-relaxed text-slate-600">
                A full e-commerce website with integrated class booking for{" "}
                <strong className="text-slate-800">Wild Hearts Collective</strong> — an inclusive
                pole and aerial studio in Mansfield. Clients can browse classes, pay online, and
                book in one journey.
              </p>
              <p className="mb-8 leading-relaxed text-slate-600">
                The live site has been widely admired, including by the client. It is a fast,
                modern build that turns visitors into bookings rather than leaving them to chase
                a diary on social media.
              </p>
              <div className="mb-8 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white px-4 py-4 shadow-sm">
                  <p className="font-bold text-[#2d459c]">E-commerce</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Online payments
                  </p>
                </div>
                <div className="rounded-xl bg-white px-4 py-4 shadow-sm">
                  <p className="font-bold text-[#2d459c]">Live booking</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Classes &amp; courses
                  </p>
                </div>
              </div>
              <a
                href="http://wildheartscollective.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#1e2e68] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#2d459c]"
              >
                Visit live site →
              </a>
            </div>
          </article>

          <div className="relative mx-auto mb-16 h-[360px] max-w-6xl overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/body/body-our-work.png"
              alt="Selected website work for UK service businesses"
              fill
              className="object-cover"
            />
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm"
              >
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#2d459c]">
                  {project.sector}
                </p>
                <h3 className="mb-4 text-2xl font-bold text-[#2d459c]">{project.title}</h3>
                <p className="mb-6 leading-relaxed text-gray-700">{project.summary}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {project.results.map((result) => (
                    <li key={result} className="flex items-start">
                      <span className="mr-2 text-[#f5c23c]">✔</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 px-6 py-20 md:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-[#2d459c]">
              Want work like this for your business?
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              We can review your current website, identify what is hurting trust and
              conversions, and recommend whether an audit or a custom rebuild is the
              right next step.
            </p>
            <Link
              href="/contact?intent=audit"
              className="inline-block rounded-full bg-[#2d459c] px-10 py-4 font-bold text-white transition hover:bg-[#1e2e68]"
            >
              Request a Website Audit
            </Link>
          </div>
        </section>

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
