import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "../../components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How 1st Call UK Web & Digital uses cookies on its website.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      subtitle="How we use cookies, what each category does, and how you can manage your preferences."
    >
      <p className="mb-8 text-sm text-gray-500">Last updated: 17 August 2026</p>
      <h2 className="mb-4 text-2xl font-semibold text-[#2d459c]">Introduction</h2>
      <p className="mb-6 leading-7">
        This Cookie Policy explains how 1st Call UK Web &amp; Digital (“we”, “our”, “us”)
        uses cookies and similar technologies on 1stcalluk.website. It should be read
        alongside our{" "}
        <Link href="/legal/gdpr-data-privacy-notice" className="font-semibold text-[#2d459c] underline">
          GDPR Privacy Notice
        </Link>
        . We use cookies in line with UK GDPR and the Privacy and Electronic Communications
        Regulations (PECR).
      </p>
      <h2 className="mb-4 mt-10 text-2xl font-semibold text-[#2d459c]">What are cookies?</h2>
      <p className="mb-6 leading-7">
        Cookies are small text files stored on your device when you visit a website. They
        help the site work properly, remember preferences, and provide insight into how
        pages are used.
      </p>
      <h2 className="mb-4 mt-10 text-2xl font-semibold text-[#2d459c]">How we use cookies</h2>
      <p className="mb-6 leading-7">
        We use cookies to keep core site features working and, where you allow it, to
        understand how the site is used. Necessary cookies are required for the website to
        function. Analytics cookies only run if you choose to allow them in your browser
        settings.
      </p>
      <h2 className="mb-4 mt-10 text-2xl font-semibold text-[#2d459c]">Managing cookies</h2>
      <p className="leading-7">
        You can control cookies through your browser settings. Blocking some cookies may
        affect how the website works. For questions, contact info@1stcalluk.dev.
      </p>
    </LegalPage>
  );
}
