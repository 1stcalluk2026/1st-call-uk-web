import type { Metadata } from "next";
import LegalPage from "../../components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Website Use",
  description: "Terms of website use for 1st Call UK Web & Digital.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Website Use"
      subtitle="Please review the conditions that apply when using this website and our services."
    >
      <h2 className="mb-4 text-2xl font-semibold text-[#2d459c]">Agreement</h2>
      <p className="mb-6 leading-7">
        By accessing or using this website, you agree to these terms. If you do not agree,
        you must discontinue use immediately.
      </p>
      <h2 className="mb-4 mt-10 text-2xl font-semibold text-[#2d459c]">Use of services</h2>
      <p className="mb-6 leading-7">
        You may not misuse our services, engage in harmful activity, or attempt to copy or
        distribute our intellectual property without permission.
      </p>
      <h2 className="mb-4 mt-10 text-2xl font-semibold text-[#2d459c]">Payments and billing</h2>
      <p className="mb-6 leading-7">
        Project fees, payment schedules, and scope are agreed in writing before work
        begins. Work starts only after the agreed payment confirmation, unless otherwise
        stated in a proposal.
      </p>
      <h2 className="mb-4 mt-10 text-2xl font-semibold text-[#2d459c]">Intellectual property</h2>
      <p className="mb-6 leading-7">
        Designs, content, graphics, and digital materials created by 1st Call UK Web &amp;
        Digital remain our intellectual property until any agreed transfer is completed.
      </p>
      <h2 className="mb-4 mt-10 text-2xl font-semibold text-[#2d459c]">Limitation of liability</h2>
      <p className="mb-6 leading-7">
        1st Call UK Web &amp; Digital is not liable for damages arising from misuse of our
        services, third-party issues, hosting problems, or website downtime.
      </p>
      <h2 className="mb-4 mt-10 text-2xl font-semibold text-[#2d459c]">Contact</h2>
      <p className="leading-7">
        1st Call UK Web &amp; Digital
        <br />
        The Old Coach House, 25 Noel Street, Nottingham NG7 6AQ
        <br />
        Email: info@1stcalluk.dev
      </p>
    </LegalPage>
  );
}
