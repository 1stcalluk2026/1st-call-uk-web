import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2d459c] text-white py-14 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 items-start">
        {/* Column 1 — Intro */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="text-xl font-bold">We Build It Right</h3>
          <p className="text-gray-100 leading-relaxed text-sm">
            At 1st Call UK Web &amp; Digital, your growth is our build spec.
            <br /><br />
            Fast, modern, well-engineered websites — built on a clear process, with no jargon and no surprises.
          </p>
          <p className="text-gray-300 text-xs mt-2">Built by — 1st Call UK Web &amp; Digital</p>
        </div>

        {/* Columns 2 + 3 */}
        <div className="md:col-span-2 space-y-10">
          <div>
            <p className="text-gray-200 text-sm mb-4 text-center md:text-left">Visit our sister companies:</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {[
                { href: "https://www.1stcalluk.com/", label: "1st Call UK Immigration" },
                { href: "https://www.1stcalluk.financial", label: "1st Call UK Financial" },
                { href: "https://www.1stcalluk.co.uk/", label: "1st Call UK Group" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-3 flex items-center justify-center w-[180px] h-[100px] text-[#2d459c] font-semibold text-center text-sm"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-4">Our Advantages</h3>
              <ul className="space-y-2 text-gray-100 text-sm">
                {["Free initial site review", "Fixed-scope, fixed-fee quotes", "Modern, future-proof frameworks", "Transparent communication", "Backed by Nottingham group"].map((text, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#f5c23c] mr-2">✔</span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-100 text-sm">
                <li><Link href="/legal/consumer-contracts-regulations-2013" className="hover:text-[#f5c23c]">Consumer Contracts Regulations</Link></li>
                <li><Link href="/legal/disclaimer" className="hover:text-[#f5c23c]">Disclaimer</Link></li>
                <li><Link href="/legal/gdpr-data-privacy-notice" className="hover:text-[#f5c23c]">GDPR Privacy Notice</Link></li>
                <li><Link href="/legal/cookie-policy" className="hover:text-[#f5c23c]">Cookie Policy</Link></li>
                <li><Link href="/legal/terms-of-website-use" className="hover:text-[#f5c23c]">Terms of Use</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Column 4 — Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-100 text-sm leading-relaxed">📍 The Old Coach House, 25 Noel Street, Nottingham NG7 6AQ</p>
          <div className="mt-5 flex flex-col gap-3">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@1stcalluk.dev" target="_blank" rel="noopener noreferrer" className="bg-white text-[#2d459c] font-bold py-2 px-5 rounded-md hover:bg-gray-100 flex items-center justify-center transition">✉ Email</a>
            <a href="tel:+441158450000" className="bg-white text-[#2d459c] font-bold py-2 px-5 rounded-md hover:bg-gray-100 flex items-center justify-center transition">☎ Call</a>
          </div>
        </div>
      </div>
    </footer>
  );
}