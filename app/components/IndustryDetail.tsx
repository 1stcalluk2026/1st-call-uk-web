import Image from "next/image";
import Breadcrumb from "./Breadcrumb";
import CtaBand from "./CtaBand";
import FadeIn from "./FadeIn";
import PageHero from "./PageHero";

type IndustryDetailProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  crumbLabel: string;
  introTitle: string;
  intro: string[];
  points: { title: string; description: string }[];
  faqs?: { q: string; a: string }[];
  imageSrc: string;
  bodyImageSrc: string;
};

export default function IndustryDetail({
  eyebrow,
  title,
  description,
  crumbLabel,
  introTitle,
  intro,
  points,
  faqs,
  imageSrc,
  bodyImageSrc,
}: IndustryDetailProps) {
  return (
    <FadeIn>
      <div className="min-h-screen bg-white text-gray-900">
        <PageHero
          eyebrow={eyebrow}
          title={title}
          description={description}
          imageSrc={imageSrc}
          imageAlt={crumbLabel}
        />
        <Breadcrumb
          items={[
            { href: "/", label: "Home" },
            { href: "/industries", label: "Industries" },
            { label: crumbLabel },
          ]}
        />
        <section className="px-6 py-20 md:px-10">
          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-[#2d459c]">{introTitle}</h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                {intro.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="relative h-[380px] w-full overflow-hidden rounded-3xl shadow-2xl">
              <Image src={bodyImageSrc} alt={crumbLabel} fill className="object-cover" />
            </div>
          </div>
        </section>
        <section className="bg-gray-50 px-6 py-20 md:px-10">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            {points.map((point) => (
              <div key={point.title} className="rounded-3xl bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-2xl font-bold text-[#2d459c]">{point.title}</h3>
                <p className="leading-relaxed text-gray-700">{point.description}</p>
              </div>
            ))}
          </div>
        </section>
        {faqs ? (
          <section className="px-6 py-20 md:px-10">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-10 text-center text-3xl font-bold text-[#2d459c]">
                Common questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <details
                    key={faq.q}
                    className="group rounded-2xl border border-gray-100 bg-gray-50 p-6"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-[#2d459c]">
                      {faq.q}
                      <span className="text-xl transition group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        ) : null}
        <CtaBand title={`Need a website that fits ${crumbLabel.toLowerCase()}?`} />
      </div>
    </FadeIn>
  );
}
