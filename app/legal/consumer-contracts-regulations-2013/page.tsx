import type { Metadata } from "next";
import LegalPage from "../../components/LegalPage";

export const metadata: Metadata = {
  title: "Consumer Contracts Regulations 2013",
  description:
    "Information about the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013 as they apply to 1st Call UK Web & Digital.",
};

export default function ConsumerContractsPage() {
  return (
    <LegalPage
      title="Consumer Contracts Regulations 2013"
      subtitle="Your cancellation rights and key information when buying services at a distance."
    >
      <h2 className="mb-4 text-2xl font-semibold text-[#2d459c]">About these regulations</h2>
      <p className="mb-6 leading-7">
        If you are a consumer buying services from us at a distance, the Consumer Contracts
        (Information, Cancellation and Additional Charges) Regulations 2013 may give you
        the right to cancel within 14 days.
      </p>
      <h2 className="mb-4 mt-10 text-2xl font-semibold text-[#2d459c]">Bespoke digital work</h2>
      <p className="mb-6 leading-7">
        Custom website design, development, and related digital services are usually
        tailored to your business. If you ask us to start work during the cancellation
        period, you may lose the right to cancel once performance has begun, in line with
        the regulations and any written agreement.
      </p>
      <h2 className="mb-4 mt-10 text-2xl font-semibold text-[#2d459c]">How to cancel</h2>
      <p className="mb-6 leading-7">
        If a cancellation right applies, email info@1stcalluk.com with a clear statement
        that you wish to cancel, including your name and the project or enquiry reference.
      </p>
      <h2 className="mb-4 mt-10 text-2xl font-semibold text-[#2d459c]">Our details</h2>
      <p className="leading-7">
        1st Call UK Web &amp; Digital
        <br />
        The Old Coach House, 25 Noel Street, Nottingham NG7 6AQ
        <br />
        Email: info@1stcalluk.com
        <br />
        Telephone: 0115 845 0000
      </p>
    </LegalPage>
  );
}
