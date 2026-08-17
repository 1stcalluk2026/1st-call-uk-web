import type { Metadata } from "next";
import ServiceDetail from "../../components/ServiceDetail";

export const metadata: Metadata = {
  title: "Website Audits",
  description:
    "A practical website audit covering speed, security, UX, SEO, and conversion — with a clear plan for what to fix first.",
};

export default function WebsiteAuditsPage() {
  return (
    <ServiceDetail
      eyebrow="Website Audits"
      title={
        <>
          Website health audit{" "}
          <span className="text-blue-300">for speed, trust and conversions</span>
        </>
      }
      description="Uncover what is holding back speed, security, and conversions — including template bloat and weak user journeys — then fix it in the right order."
      crumbLabel="Website Audits"
      introTitle="Why perform a website health audit?"
      intro={[
        "A website health audit is a structured review of your site's speed, security posture, user experience, SEO foundations, and conversion path. It shows why visitors are not enquiring and what to fix first.",
        "Most underperforming websites carry hidden drag — slow load times from template bloat, unclear messaging, weak calls-to-action, or fragile security. An audit turns those problems into a practical, prioritised improvement plan.",
        "This is often the right starting point if you are not ready for a full rebuild, or if you want a clear commercial case before investing in one.",
      ]}
      benefits={[
        {
          title: "Speed & Technical Performance",
          description:
            "Identify what is slowing the site down and which fixes will have the biggest impact on load time and user experience.",
        },
        {
          title: "Trust, UX and Conversion",
          description:
            "Review messaging, proof, forms, and calls-to-action so visitors can understand the offer and take the next step.",
        },
        {
          title: "SEO and Structure",
          description:
            "Check page hierarchy, metadata, internal links, and technical foundations that support visibility over time.",
        },
      ]}
      ctaTitle="Start with a clear picture of what to fix"
      ctaDescription="Share your website URL and the enquiries you want more of. We will outline a high-performance improvement plan."
      imageSrc="/heroes/hero-website-audits.png"
      bodyImageSrc="/body/body-website-audits.png"
    />
  );
}
