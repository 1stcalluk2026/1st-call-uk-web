import type { Metadata } from "next";
import ServiceDetail from "../../components/ServiceDetail";

export const metadata: Metadata = {
  title: "AI Search Optimisation",
  description:
    "AI search optimisation (GEO) for UK service businesses: structured data, answer-ready content, and visibility in AI search engines.",
};

export default function AiSearchOptimisationPage() {
  return (
    <ServiceDetail
      eyebrow="AI Search (GEO)"
      title={
        <>
          AI search optimisation{" "}
          <span className="text-blue-300">so your business can be cited</span>
        </>
      }
      description="Get found in AI search engines with structured data, answer-ready content, and a website that is easy for people and machines to understand."
      crumbLabel="AI Search Optimisation"
      introTitle="Make your business easy for AI tools to recommend"
      intro={[
        "Clients are no longer only searching on Google. They ask ChatGPT, Perplexity, and Google AI Overviews who to trust. If your service pages are vague or unstructured, those tools are more likely to quote a competitor.",
        "GEO — generative engine optimisation — is the work of making your business easy to understand and cite. That includes schema, clear service pages, FAQs, and content that matches the questions your clients actually ask.",
        "It sits on top of a strong website, not instead of one. Fast pages, clear offers, and trustworthy messaging still come first.",
      ]}
      benefits={[
        {
          title: "GEO foundations",
          description:
            "JSON-LD schema, answer-ready copy, and entity-clear service pages that AI engines can quote accurately.",
        },
        {
          title: "Content systems",
          description:
            "Topic clusters, briefs, and on-page structure so publishing stays useful rather than one-off.",
        },
        {
          title: "Lead-focused tools",
          description:
            "Interactive assessments and clearer CTAs that turn anonymous traffic into qualified conversations.",
        },
      ]}
      ctaTitle="Want your services to show up in AI search?"
      ctaDescription="We can review your current site and outline the GEO, content, and technical work most likely to help."
      imageSrc="/heroes/hero-ai-search.png"
      bodyImageSrc="/body/body-ai-search.png"
    />
  );
}
