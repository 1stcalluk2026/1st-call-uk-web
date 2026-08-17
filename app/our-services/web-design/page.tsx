import type { Metadata } from "next";
import ServiceDetail from "../../components/ServiceDetail";

export const metadata: Metadata = {
  title: "Web Design",
  description:
    "High-performance custom websites for UK service businesses. Built for growth, speed, trust, and more qualified enquiries.",
};

export default function WebDesignPage() {
  return (
    <ServiceDetail
      eyebrow="Web Design"
      title={
        <>
          High-performance custom websites{" "}
          <span className="text-blue-300">built for growth, speed and trust</span>
        </>
      }
      description="Premium custom-built websites for small businesses — modern, fast, and conversion-focused — engineered from scratch without template bloat."
      crumbLabel="High-Performance Web Design"
      introTitle="Custom websites that go beyond visual appeal"
      intro={[
        "At 1st Call UK Web & Digital, every website is a bespoke system — not a cosmetic exercise. We engineer high-performance sites with a clear strategic purpose: communicate value, build trust, guide user behaviour, and support measurable business objectives.",
        "Your website is often the first meaningful interaction a potential customer has with your brand. In seconds, visitors decide whether they trust your business, understand your offer, and feel confident enough to engage further.",
        "Our approach combines strategic planning, user-centred design, and rock-solid engineering. Whether you are refreshing an outdated site or starting from scratch, every decision is aligned with your sales process and long-term positioning.",
      ]}
      benefits={[
        {
          title: "Conversion-Focused Design",
          description:
            "Layouts, content structure, and user flows are planned around your business goals — whether that is lead generation, enquiries, bookings, or product sales.",
        },
        {
          title: "Speed, Security & Accessibility",
          description:
            "Fast load times, stronger security, mobile optimisation, and accessibility best practices are built into every project.",
        },
        {
          title: "Built to Scale",
          description:
            "Your website is engineered to grow with your business. From polished service sites to advanced digital systems, every build is designed for long-term performance.",
        },
      ]}
      process={[
        {
          title: "Discovery & Planning",
          description:
            "We start by understanding your business, audience, competitors, and objectives, so the website has a clear commercial job.",
        },
        {
          title: "Design & UX",
          description:
            "Visual concepts and user journeys are crafted for clarity, engagement, and intuitive navigation across every device.",
        },
        {
          title: "Development",
          description:
            "Clean, modern engineering brings the design to life — focusing on speed, security, and long-term maintainability.",
        },
        {
          title: "Launch & Support",
          description:
            "Thorough testing precedes launch, followed by guidance and optional ongoing support so the site keeps performing.",
        },
      ]}
      ctaTitle="Ready to build a high-performance website?"
      ctaDescription="If your current site is not generating the right enquiries, the next step is a focused conversation about a custom rebuild or a practical improvement plan."
      imageSrc="/heroes/hero-web-design.png"
      bodyImageSrc="/body/body-web-design.png"
    />
  );
}
