import type { Metadata } from "next";
import ServiceDetail from "../../components/ServiceDetail";

export const metadata: Metadata = {
  title: "Digital Marketing",
  description:
    "SEO, content, and visibility support for UK service businesses that want more of the right enquiries — not just more traffic.",
};

export default function DigitalMarketingPage() {
  return (
    <ServiceDetail
      eyebrow="Digital Marketing"
      title={
        <>
          Digital marketing{" "}
          <span className="text-blue-300">that supports real enquiries</span>
        </>
      }
      description="SEO, content, and visibility work built around a website that can convert. The aim is better-qualified leads, not vanity traffic."
      crumbLabel="Digital Marketing"
      introTitle="Visibility only works if the website can convert"
      intro={[
        "Digital marketing is wasted on a slow, unclear, or untrustworthy website. We focus on the combination: stronger visibility and a site that can turn that attention into enquiries.",
        "That usually means technical SEO, useful content around your services, and pages that answer the questions your clients are already asking.",
        "For service businesses, the right marketing is specific. It should attract people who need your offer, not just more anonymous visits.",
      ]}
      benefits={[
        {
          title: "SEO-first structure",
          description:
            "Clean information architecture, metadata, and internal links designed around the services you actually sell.",
        },
        {
          title: "Content that supports sales",
          description:
            "Guides, FAQs, and service pages that help people understand the offer and feel ready to get in touch.",
        },
        {
          title: "Measurement that matters",
          description:
            "Track enquiries and key journeys, not just page views, so you can see what is actually working.",
        },
      ]}
      ctaTitle="Want more of the right people finding you?"
      ctaDescription="We can review your current visibility, content, and website conversion path before recommending the next step."
      imageSrc="/heroes/hero-digital-marketing.png"
      bodyImageSrc="/body/body-digital-marketing.png"
    />
  );
}
