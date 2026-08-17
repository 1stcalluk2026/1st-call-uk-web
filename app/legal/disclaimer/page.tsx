import type { Metadata } from "next";
import LegalPage from "../../components/LegalPage";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Website disclaimer for 1st Call UK Web & Digital.",
};

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      subtitle="Important information regarding accuracy, reliability, and use of our website content."
    >
      <h2 className="mb-4 text-2xl font-semibold text-[#2d459c]">General Information</h2>
      <p className="mb-6 leading-7">
        The information presented on this website is intended for general guidance only. We
        do not guarantee accuracy, completeness, or suitability for a particular purpose.
      </p>
      <h2 className="mb-4 mt-10 text-2xl font-semibold text-[#2d459c]">No Professional Advice</h2>
      <p className="mb-6 leading-7">
        Nothing published on this website constitutes legal, financial, or professional
        advice. You should always seek independent guidance before making decisions.
      </p>
      <h2 className="mb-4 mt-10 text-2xl font-semibold text-[#2d459c]">External Links</h2>
      <p className="mb-6 leading-7">
        We may include links to third-party websites. 1st Call UK Web &amp; Digital is not
        responsible for the content or reliability of external websites.
      </p>
      <h2 className="mb-4 mt-10 text-2xl font-semibold text-[#2d459c]">Limitation of Responsibility</h2>
      <p className="leading-7">
        1st Call UK Web &amp; Digital is not liable for any losses or damages arising from
        the use of our website or any third-party services or information.
      </p>
    </LegalPage>
  );
}
