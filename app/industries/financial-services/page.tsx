import type { Metadata } from "next";
import IndustryDetail from "../../components/IndustryDetail";

export const metadata: Metadata = {
  title: "Financial Services Web Design",
  description:
    "High-trust website design for UK mortgage brokers, accountants, and financial advisers who need a more professional route to enquiry.",
};

export default function FinancialServicesPage() {
  return (
    <IndustryDetail
      eyebrow="Financial Services"
      title={
        <>
          Financial services web design for{" "}
          <span className="text-blue-300">corporate-sector trust</span>
        </>
      }
      description="High-trust, secure, and professional web platforms for UK mortgage brokers, accountants, and financial advisers."
      crumbLabel="Financial Services"
      introTitle="Websites that make professional advice easier to choose"
      intro={[
        "Financial clients are buying trust. They need to understand the service, feel the firm is credible, and know what happens next. A slow, vague, or overly salesy website quietly loses those people.",
        "We build financial-services websites around clarity, compliance-minded presentation, and a calm path to enquiry. The aim is a site that looks like the professional operation behind it.",
      ]}
      points={[
        {
          title: "Authority first",
          description:
            "Professional layouts, proof, and service explanations that help visitors feel they are dealing with a serious firm.",
        },
        {
          title: "Clear next steps",
          description:
            "Enquiry journeys designed for advice-led businesses, not generic contact forms buried in the footer.",
        },
        {
          title: "Secure foundations",
          description:
            "Fast, modern builds with a cleaner technical setup than typical template platforms.",
        },
      ]}
      faqs={[
        {
          q: "Do you work with regulated firms?",
          a: "Yes. We focus on presentation, structure, and enquiry flow. Compliance wording and approvals stay with your firm; we design the site so that information is easy to present clearly.",
        },
        {
          q: "Can you improve an existing finance website?",
          a: "Yes. Many firms start with an audit if the current site looks dated, loads slowly, or is not converting visitors into meetings.",
        },
      ]}
      imageSrc="/heroes/hero-financial.png"
      bodyImageSrc="/body/body-financial.png"
    />
  );
}
