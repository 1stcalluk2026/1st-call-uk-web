import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    className: "card-1",
    src: "/stack/web-design.jpg",
    alt: "A dark, gold-lit design studio with a custom website on screen",
    eyebrow: "Web design",
    headline: "Look like the firm clients already want to hire",
    line: "Custom websites for UK service businesses — clearer positioning, a stronger first impression, and more of the right enquiries.",
    href: "/our-services/web-design",
    cta: "Explore web design",
  },
  {
    className: "card-2",
    src: "/stack/mobile-app.jpg",
    alt: "A premium studio desk with a phone and tablet showing a business app",
    eyebrow: "Mobile Application",
    headline: "An app they keep — not another website they bounce from",
    line: "Bespoke iOS and Android apps from Nottingham — bookings, accounts, and loyalty that work with your website, not against it.",
    href: "/our-services/custom-mobile-applications",
    cta: "Explore mobile apps",
  },
  {
    className: "card-3",
    src: "/stack/enquiries.jpg",
    alt: "A quiet professional-services reception set up for consultations",
    eyebrow: "SEO and enquiries",
    headline: "Traffic without enquiries is just expensive noise",
    line: "SEO-first structure and conversion paths that turn visitors into qualified conversations — not vanity metrics.",
    href: "/book",
    cta: "Book a consultation",
  },
] as const;

export default function HomeStack() {
  return (
    <div className="stack">
      {cards.map((card) => (
        <section key={card.className} className={`card ${card.className}`}>
          <div className="relative flex min-h-[32rem] items-center overflow-hidden py-16 md:min-h-[100vh] md:py-24">
            <Image
              src={card.src}
              alt={card.alt}
              fill
              sizes="100vw"
              quality={75}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e2e68]/90 via-[#2d459c]/75 to-[#1e2e68]/85" />

            <div className="relative z-10 w-full px-6 md:px-10">
              <div className="mx-auto max-w-5xl text-center text-white">
                <p className="mb-5 inline-flex rounded-full border border-[#f5c23c]/50 bg-[#1e2e68]/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#f5c23c] shadow-lg md:text-sm">
                  {card.eyebrow}
                </p>
                <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">
                  {card.headline}
                </h2>
                <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-100 md:text-2xl">
                  {card.line}
                </p>
                <div className="mt-10">
                  <Link
                    href={card.href}
                    className="inline-block rounded-full bg-[#f5c23c] px-10 py-4 text-lg font-bold text-[#1e2e68] shadow-xl transition hover:bg-white"
                  >
                    {card.cta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
