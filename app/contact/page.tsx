import type { Metadata } from "next";
import EnquiryForm from "../components/EnquiryForm";
import FadeIn from "../components/FadeIn";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact 1st Call UK Web & Digital in Nottingham to discuss a custom website, audit, or digital project.",
};

type Props = {
  searchParams: Promise<{ intent?: string }>;
};

export default async function ContactPage({ searchParams }: Props) {
  const { intent } = await searchParams;
  const auditIntent = intent === "audit";

  return (
    <FadeIn>
      <div className="min-h-screen overflow-x-hidden bg-white text-gray-900">
        <PageHero
          eyebrow="Contact"
          title={
            <>
              Let&apos;s build your{" "}
              <span className="text-blue-300">high-performance digital solution</span>
            </>
          }
          description="Get in touch to discuss a modern custom website, audit, or digital system designed to drive growth — with clear advice and high-quality engineering."
          imageSrc="/heroes/hero-contact.png"
          imageAlt="Contact 1st Call UK Web & Digital"
        />

        <section className="px-6 py-20 md:px-10">
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
            <EnquiryForm variant="contact" auditIntent={auditIntent} />
            <div className="flex flex-col gap-6">
              <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#2d459c]">
                  Contact
                </p>
                <h2 className="mb-3 text-2xl font-bold text-[#2d459c]">Email us</h2>
                <p className="mb-4 leading-relaxed text-gray-700">
                  Prefer email? Reach the team directly and we&apos;ll get back to you on UK
                  business days.
                </p>
                <a
                  href="mailto:info@1stcalluk.com"
                  className="block font-medium text-[#2d459c] transition hover:text-[#1e2e68]"
                >
                  info@1stcalluk.com
                </a>
                <p className="mt-4 text-sm text-gray-500">
                  The Old Coach House, 25 Noel Street, Nottingham NG7 6AQ
                </p>
                <a
                  href="tel:+441158450000"
                  className="mt-2 block text-sm font-medium text-[#2d459c]"
                >
                  0115 845 0000
                </a>
              </div>
              <div className="flex-1 overflow-hidden rounded-3xl border border-gray-100 shadow-lg">
                <iframe
                  title="1st Call UK Web & Digital — Nottingham"
                  src="https://www.google.com/maps?q=The+Old+Coach+House,+25+Noel+Street,+Nottingham+NG7+6AQ&z=15&output=embed"
                  className="h-full min-h-[380px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </FadeIn>
  );
}
