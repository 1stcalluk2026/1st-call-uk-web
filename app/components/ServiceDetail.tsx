import Image from "next/image";
import Breadcrumb from "./Breadcrumb";
import CtaBand from "./CtaBand";
import FadeIn from "./FadeIn";
import PageHero from "./PageHero";

type ServiceDetailProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  crumbLabel: string;
  introTitle: string;
  intro: string[];
  benefits: { title: string; description: string }[];
  process?: { title: string; description: string }[];
  ctaTitle: string;
  ctaDescription: string;
  imageSrc: string;
  bodyImageSrc: string;
};

export default function ServiceDetail({
  eyebrow,
  title,
  description,
  crumbLabel,
  introTitle,
  intro,
  benefits,
  process,
  ctaTitle,
  ctaDescription,
  imageSrc,
  bodyImageSrc,
}: ServiceDetailProps) {
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
            { href: "/our-services", label: "Services" },
            { label: crumbLabel },
          ]}
        />

        <section className="px-6 py-20 md:px-10">
          <div className="mx-auto grid max-w-7xl items-start gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-8 text-4xl font-bold text-[#2d459c]">{introTitle}</h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                {intro.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="relative h-[360px] w-full overflow-hidden rounded-3xl shadow-2xl md:h-[420px]">
              <Image
                src={bodyImageSrc}
                alt={crumbLabel}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-gray-50 px-6 py-20 md:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
            {benefits.map((item) => (
              <div key={item.title} className="rounded-3xl bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-2xl font-bold text-[#2d459c]">{item.title}</h3>
                <p className="leading-relaxed text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {process ? (
          <section className="px-6 py-20 md:px-10">
            <div className="mx-auto mb-16 max-w-5xl text-center">
              <h2 className="mb-6 text-4xl font-bold text-[#2d459c]">How we work</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                A structured process keeps the project focused, collaborative, and useful from the first conversation through to launch.
              </p>
            </div>
            <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
              {process.map((step, index) => (
                <div key={step.title} className="border-l-4 border-[#2d459c] p-6">
                  <p className="mb-2 text-sm font-bold text-[#f5c23c]">0{index + 1}</p>
                  <h3 className="mb-3 text-xl font-bold text-[#2d459c]">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-700">{step.description}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <CtaBand title={ctaTitle} description={ctaDescription} />
      </div>
    </FadeIn>
  );
}
