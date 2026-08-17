import type { Metadata } from "next";
import IndustryDetail from "../../components/IndustryDetail";

export const metadata: Metadata = {
  title: "Construction Website Design",
  description:
    "Lead generation websites for UK construction companies and tradespeople that need stronger credibility and more quote-ready enquiries.",
};

export default function BuildingServicesPage() {
  return (
    <IndustryDetail
      eyebrow="Construction & Trades"
      title={
        <>
          Construction websites that{" "}
          <span className="text-blue-300">win more quote requests</span>
        </>
      }
      description="Lead generation websites for construction companies and tradespeople that need stronger credibility and more quote-ready enquiries."
      crumbLabel="Construction and Trades"
      introTitle="Proof, reliability, and a faster path to a quote"
      intro={[
        "Construction and trade clients look for evidence: recent work, reliability, local presence, and a business that looks organised enough to deliver. A weak website makes even a strong company look smaller than it is.",
        "We build fast, robust sites that showcase capability, explain services clearly, and make requesting a quote straightforward on mobile.",
      ]}
      points={[
        {
          title: "Work that does the selling",
          description:
            "Project-led layouts that show what you deliver, where you work, and why customers should shortlist you.",
        },
        {
          title: "Mobile-first enquiries",
          description:
            "Fast pages and simple quote journeys for people searching from a phone on site or at home.",
        },
        {
          title: "Local credibility",
          description:
            "Clear service areas, contact details, and trust signals that help nearby clients choose you.",
        },
      ]}
      faqs={[
        {
          q: "Do we need a large portfolio before a new website?",
          a: "No. A smaller set of strong projects, clear services, and a professional enquiry path is usually more effective than a crowded gallery.",
        },
        {
          q: "Can you rebuild an existing trade website?",
          a: "Yes. Many construction businesses start with an audit if the current site is slow, outdated, or not generating quote requests.",
        },
      ]}
      imageSrc="/heroes/hero-construction.png"
      bodyImageSrc="/body/body-construction.png"
    />
  );
}
