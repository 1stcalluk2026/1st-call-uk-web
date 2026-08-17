import type { Metadata } from "next";
import ServiceDetail from "../../components/ServiceDetail";

export const metadata: Metadata = {
  title: "Custom Web Development",
  description:
    "Bespoke web development for UK businesses that need more flexibility, better performance, and systems shaped around how they sell.",
};

export default function CustomWebDevelopmentPage() {
  return (
    <ServiceDetail
      eyebrow="Custom Development"
      title={
        <>
          Custom web development{" "}
          <span className="text-blue-300">engineered for your business</span>
        </>
      }
      description="Move beyond off-the-shelf platforms. We engineer high-performance, custom-coded digital systems from scratch — tailored to your workflows, without template bloat."
      crumbLabel="Custom Web Development"
      introTitle="Engineered for your specific needs"
      intro={[
        "Standard platforms often carry unnecessary bloat that slows the site down and limits what you can do. We specialise in crafting custom systems around the way your business actually sells, delivers, and operates.",
        "That can include enquiry workflows, client portals, e-commerce, booking journeys, or integrations with the tools you already use. The point is not more features. The point is the right features, built cleanly.",
        "Because we write custom code rather than stacking fragile plugins, the result is usually faster, safer, and easier to grow than a template-heavy build.",
      ]}
      benefits={[
        {
          title: "Tailored Functionality",
          description:
            "Builds shaped around your sales process, operations, and customer journey — not a generic theme.",
        },
        {
          title: "No Template Bloat",
          description:
            "Leaner code, fewer plugins, and a cleaner technical foundation for speed and reliability.",
        },
        {
          title: "Ready to Integrate",
          description:
            "Connect CRMs, booking tools, payments, and internal systems so the website works as part of the business.",
        },
      ]}
      process={[
        {
          title: "Scope the system",
          description: "We define what the website must do, who it is for, and which journeys matter most.",
        },
        {
          title: "Architecture",
          description: "We plan the structure, data, and integrations before a line of production code is written.",
        },
        {
          title: "Build and test",
          description: "We develop in stages, test key journeys, and keep the result maintainable.",
        },
        {
          title: "Launch and iterate",
          description: "After launch, we refine based on real use so the system keeps supporting growth.",
        },
      ]}
      ctaTitle="Need a system that templates cannot handle?"
      ctaDescription="If your current platform is slowing you down, we can help you plan a custom build that fits the way you work."
      imageSrc="/heroes/hero-custom-web-development.png"
      bodyImageSrc="/body/body-custom-web-development.png"
    />
  );
}
