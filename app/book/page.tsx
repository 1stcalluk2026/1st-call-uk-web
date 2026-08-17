import type { Metadata } from "next";
import EnquiryForm from "../components/EnquiryForm";
import FadeIn from "../components/FadeIn";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Book a consultation with 1st Call UK Web & Digital to discuss a custom website, audit, or growth-focused digital project.",
};

const SERVICE_OPTIONS = [
  "High-Performance Website Development",
  "Custom Web Development",
  "Next.js Development",
  "Custom Mobile Application",
  "Website Performance & Growth Audit",
  "AI Search Optimisation (GEO)",
  "Digital Marketing",
];

type Props = {
  searchParams: Promise<{ service?: string }>;
};

export default async function BookPage({ searchParams }: Props) {
  const { service } = await searchParams;
  const defaultService = SERVICE_OPTIONS.includes(service || "")
    ? service
    : undefined;

  return (
    <FadeIn>
      <div className="min-h-screen bg-white text-gray-900">
        <PageHero
          eyebrow="Consultation"
          title={
            <>
              Book a conversation about{" "}
              <span className="text-blue-300">the right next step</span>
            </>
          }
          description="Tell us about your business, your current website, and the enquiries you want more of. We will come back with clear advice — not a hard sell."
          imageSrc="/heroes/hero-book.png"
          imageAlt="Book a consultation with 1st Call UK Web & Digital"
        />
        <section className="px-6 py-20 md:px-10">
          <div className="mx-auto max-w-2xl">
            <EnquiryForm variant="book" defaultService={defaultService} />
          </div>
        </section>
      </div>
    </FadeIn>
  );
}
