import type { Metadata } from "next";
import ServiceDetail from "../../components/ServiceDetail";

export const metadata: Metadata = {
  title: "Custom Mobile Applications",
  description:
    "Bespoke iOS and Android apps for UK businesses that want stronger customer loyalty and systems that work with their website.",
};

export default function CustomMobileApplicationsPage() {
  return (
    <ServiceDetail
      eyebrow="Mobile Apps"
      title={
        <>
          Custom mobile applications{" "}
          <span className="text-blue-300">built for loyalty and growth</span>
        </>
      }
      description="Bespoke iOS and Android apps for growing small businesses — modern, fast, secure, and integrated with the systems you already use."
      crumbLabel="Custom Mobile Applications"
      introTitle="Apps that work with your website, not against it"
      intro={[
        "A custom mobile app is useful when repeat customers, bookings, accounts, or loyalty matter. We build high-quality apps that feel native, stay fast, and connect to your website and business tools.",
        "The aim is not an app for the sake of an app. The aim is a better customer experience: easier bookings, clearer communication, and a reason to come back.",
        "For service businesses, that often means pairing a high-performance website with a focused app that handles the journeys your clients use most.",
      ]}
      benefits={[
        {
          title: "Native-feeling quality",
          description:
            "Clean interfaces and fast interactions that feel considered, not bolted on to a website theme.",
        },
        {
          title: "Connected systems",
          description:
            "Keep customer data, bookings, and content in sync across your website, app, and internal tools.",
        },
        {
          title: "Built for retention",
          description:
            "Designed around repeat use: accounts, notifications, bookings, and journeys that bring people back.",
        },
      ]}
      ctaTitle="Is a custom app the right next step?"
      ctaDescription="If you already have demand and want a better way to keep customers coming back, we can help you scope a focused mobile product."
      imageSrc="/heroes/hero-mobile-apps.png"
      bodyImageSrc="/body/body-mobile-apps.png"
    />
  );
}
