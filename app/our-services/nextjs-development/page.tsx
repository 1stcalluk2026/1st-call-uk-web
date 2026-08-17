import type { Metadata } from "next";
import ServiceDetail from "../../components/ServiceDetail";

export const metadata: Metadata = {
  title: "Next.js Development",
  description:
    "Next.js website development for UK businesses that need speed, security, search visibility, and a conversion-focused experience.",
};

export default function NextjsDevelopmentPage() {
  return (
    <ServiceDetail
      eyebrow="Next.js"
      title={
        <>
          High-performance website engineering{" "}
          <span className="text-blue-300">fast, secure and built to scale</span>
        </>
      }
      description="Premium custom-built websites engineered for businesses that need lightning-fast speeds, rock-solid security, strong search visibility, and a conversion-focused experience."
      crumbLabel="Next.js Development"
      introTitle="Why high-performance engineering?"
      intro={[
        "We engineer websites that load quickly, stay secure under pressure, and scale as you grow. Pages are delivered for maximum speed — so visitors get a premium experience, conversions improve, and search engines favour your content over slower, template-heavy alternatives.",
        "Next.js is a strong fit for service businesses that want modern performance without the maintenance drag of bloated CMS stacks. It supports fast pages, clean routing, and a technical foundation that is easier to grow.",
        "The result is not just a nicer frontend. It is a site that feels sharper, ranks more cleanly, and is simpler to keep improving.",
      ]}
      benefits={[
        {
          title: "Speed as a default",
          description:
            "Lean rendering, image optimisation, and a modern stack that supports stronger Core Web Vitals.",
        },
        {
          title: "Security and stability",
          description:
            "Fewer plugins, cleaner architecture, and a more robust setup than typical template platforms.",
        },
        {
          title: "Built to grow",
          description:
            "Add pages, content systems, and features over time without rebuilding the whole site from scratch.",
        },
      ]}
      ctaTitle="Need a faster, more future-proof website?"
      ctaDescription="If your current stack is holding you back, we can plan a Next.js build around your services, content, and enquiry flow."
      imageSrc="/heroes/hero-nextjs.png"
      bodyImageSrc="/body/body-nextjs.png"
    />
  );
}
