import type { Metadata } from "next";
import IndustryDetail from "../../components/IndustryDetail";

export const metadata: Metadata = {
  title: "Immigration Website Design",
  description:
    "Authority-driven websites for UK immigration lawyers and advisers that reduce complexity and make it easier for clients to get in touch.",
};

export default function ImmigrationServicesPage() {
  return (
    <IndustryDetail
      eyebrow="Immigration"
      title={
        <>
          Immigration websites that{" "}
          <span className="text-blue-300">build confidence faster</span>
        </>
      }
      description="Website design for immigration-focused firms that need to build authority, reduce confusion, and make it easier for clients to get in touch."
      crumbLabel="Immigration Services"
      introTitle="Reduce complexity. Increase trust."
      intro={[
        "Immigration clients are often anxious, time-sensitive, and trying to understand a complex process. The website should make the firm feel clear, capable, and easy to approach.",
        "We design immigration websites around service clarity, strong trust signals, and a short path from first visit to first conversation. Backed by the wider 1st Call UK group, we understand this sector from the inside.",
      ]}
      points={[
        {
          title: "Service clarity",
          description:
            "Pages structured around the questions clients actually ask, not internal legal categories they cannot decode.",
        },
        {
          title: "Authority design",
          description:
            "Professional layouts and proof that make the firm feel established, careful, and credible.",
        },
        {
          title: "Easier first contact",
          description:
            "Calls-to-action and enquiry journeys that reduce friction when someone is ready to talk.",
        },
      ]}
      faqs={[
        {
          q: "Can the site handle multiple service lines?",
          a: "Yes. We typically organise visa, settlement, appeals, and business immigration into clear journeys so visitors can find the right starting point quickly.",
        },
        {
          q: "Do you also work with related professional services?",
          a: "Yes. Immigration, legal, and advisory firms share the same need for trust, clarity, and a professional first impression.",
        },
      ]}
      imageSrc="/heroes/hero-immigration.png"
      bodyImageSrc="/body/body-immigration.png"
    />
  );
}
