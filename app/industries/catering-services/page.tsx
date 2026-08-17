import type { Metadata } from "next";
import IndustryDetail from "../../components/IndustryDetail";

export const metadata: Metadata = {
  title: "Catering Website Design",
  description:
    "Websites for UK catering and hospitality businesses that need a stronger first impression and a clearer booking or enquiry path.",
};

export default function CateringServicesPage() {
  return (
    <IndustryDetail
      eyebrow="Catering"
      title={
        <>
          Catering websites that{" "}
          <span className="text-blue-300">turn interest into bookings</span>
        </>
      }
      description="Websites for catering and hospitality businesses that need a stronger first impression and a clearer booking or enquiry path."
      crumbLabel="Catering Services"
      introTitle="Make the offer appetising and the next step obvious"
      intro={[
        "Catering clients decide quickly. They want to see the quality, understand the offer, and know how to book. If the site is slow, cluttered, or vague, they move on.",
        "We design catering websites around menus, occasions, proof, and a simple enquiry or booking journey — especially on mobile.",
      ]}
      points={[
        {
          title: "Appetite and clarity",
          description:
            "Strong photography, clear packages, and service explanations that help people choose with confidence.",
        },
        {
          title: "Booking-led structure",
          description:
            "Pages organised around events, menus, and enquiries rather than generic brochure copy.",
        },
        {
          title: "Fast on every device",
          description:
            "A high-performance build so images look premium without making the site feel heavy.",
        },
      ]}
      imageSrc="/heroes/hero-catering.png"
      bodyImageSrc="/body/body-catering.png"
    />
  );
}
