import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "../../components/LegalPage";

export const metadata: Metadata = {
  title: "GDPR Data Privacy Notice",
  description: "How 1st Call UK Web & Digital collects, protects, and uses personal information.",
};

export default function PrivacyNoticePage() {
  return (
    <LegalPage
      title="GDPR Data Privacy Notice"
      subtitle="How 1st Call UK Web & Digital collects, protects, and uses your personal information."
    >
      <h2 className="mb-4 text-2xl font-semibold text-[#2d459c]">Introduction</h2>
      <p className="mb-6 leading-7">
        This notice explains how 1st Call UK Web &amp; Digital (“we”, “our”, “us”) collects,
        uses, and protects your personal information when you visit our website or enquire
        about our services.
      </p>
      <h2 className="mb-4 mt-10 text-2xl font-semibold text-[#2d459c]">Information we collect</h2>
      <p className="mb-6 leading-7">
        We may collect your name, email address, phone number, business details, and
        enquiry form data when you submit information through our website or email us.
      </p>
      <h2 className="mb-4 mt-10 text-2xl font-semibold text-[#2d459c]">How we use your information</h2>
      <p className="mb-6 leading-7">
        We use your information to respond to enquiries, provide services, communicate with
        you, and improve the website. We do not sell personal data.
      </p>
      <h2 className="mb-4 mt-10 text-2xl font-semibold text-[#2d459c]">Cookies and analytics</h2>
      <p className="mb-6 leading-7">
        See our{" "}
        <Link href="/legal/cookie-policy" className="font-semibold text-[#2d459c] underline">
          Cookie Policy
        </Link>{" "}
        for details of how cookies are used.
      </p>
      <h2 className="mb-4 mt-10 text-2xl font-semibold text-[#2d459c]">Your rights</h2>
      <p className="mb-6 leading-7">
        You have the right to request access, correction, or deletion of your personal
        information in accordance with UK GDPR.
      </p>
      <h2 className="mb-4 mt-10 text-2xl font-semibold text-[#2d459c]">Contact</h2>
      <p className="leading-7">
        1st Call UK Web &amp; Digital
        <br />
        The Old Coach House, 25 Noel Street, Nottingham NG7 6AQ
        <br />
        Email: info@1stcalluk.dev
        <br />
        Telephone: 0115 845 0000
      </p>
    </LegalPage>
  );
}
