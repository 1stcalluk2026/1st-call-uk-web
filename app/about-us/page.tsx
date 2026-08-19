import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "../components/CtaBand";
import FadeIn from "../components/FadeIn";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "1st Call UK Web & Digital is a Nottingham-based technical partner for UK service businesses that need fast, custom websites built for enquiries.",
};

export default function AboutPage() {
  return (
    <FadeIn>
      <div className="min-h-screen bg-white text-gray-900">
        <PageHero
          eyebrow="About"
          title={
            <>
              About <span className="text-blue-300">1st Call UK Web & Digital</span>
            </>
          }
          description="A high-performance technical partner for ambitious small businesses — building modern, lightning-fast websites, conversion-focused platforms, and custom digital systems from the ground up."
          imageSrc="/heroes/hero-about.png"
          imageAlt="About 1st Call UK Web & Digital"
        />

        <section className="px-6 py-20 md:px-10">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-[#2d459c] md:text-4xl">
              Built for ambitious small businesses ready to move beyond templates
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Restrictive, slow website templates hold growing businesses back. At 1st Call UK
              Web &amp; Digital, we build 100% custom digital assets from scratch — so your
              online presence delivers optimal speed, stronger conversion, and long-term
              business value. We are not a standard web design agency; we are the technical
              partner ambitious small businesses turn to when they need systems that scale
              with them.
            </p>
          </div>
        </section>

        <section className="px-6 py-20 md:px-10">
          <div className="mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-[#2d459c] md:text-4xl">
                Our <span className="text-[#1e2e68]">Story</span>
              </h2>
              <p className="mb-6 leading-relaxed text-gray-700">
                <strong>1st Call UK Web &amp; Digital</strong> was built around a simple idea:
                ambitious small businesses deserve a high-performance technical partner — not
                another agency selling slow templates, vague strategy, or jargon that gets in
                the way.
              </p>
              <p className="mb-6 leading-relaxed text-gray-700">
                Too many businesses are held back by template platforms that feel limited,
                load slowly, and break when plugins conflict. We set out to change that by
                building custom digital assets from scratch — modern, lightning-fast, and
                focused on conversion from day one.
              </p>
              <p className="mb-6 leading-relaxed text-gray-700">
                Based in Nottingham and backed by the 1st Call UK group, we help service
                businesses look more credible, convert more visitors, and grow with websites
                that actually do their job.
              </p>
              <Link
                href="/book"
                className="inline-block rounded-full bg-[#2d459c] px-6 py-3 font-semibold text-white shadow-md transition hover:bg-[#1e2e68]"
              >
                Book a Free Consultation
              </Link>
            </div>
            <div className="relative h-[360px] w-full overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/body/body-about-story.png"
                alt="1st Call UK Web & Digital — custom websites for ambitious small businesses"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#f9fafb] to-[#f1f5f9] px-6 py-20 md:px-10">
          <div className="mx-auto grid max-w-7xl items-start gap-12 md:grid-cols-2">
            <div className="relative order-2 h-[360px] w-full overflow-hidden rounded-3xl shadow-lg md:order-1">
              <Image
                src="/body/body-about-what-we-do.png"
                alt="Custom websites, audits, and digital systems that work together"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="mb-4 text-3xl font-bold text-[#2d459c] md:text-4xl">
                What <span className="text-[#1e2e68]">We Do</span>
              </h2>
              <p className="mb-6 leading-relaxed text-gray-700">
                We design and engineer custom digital assets that help small businesses look
                credible and perform better online. That means lightning-fast speeds that keep
                visitors from bouncing, modern secure content systems that are easy to use,
                and clear journeys that guide people toward enquiry.
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>High-performing websites:</strong> 100% custom-built for speed,
                  clarity, and conversion across phones, tablets, and desktops.
                </li>
                <li>
                  <strong>Custom web development:</strong> systems shaped around how you sell
                  and operate, without template bloat.
                </li>
                <li>
                  <strong>Website audits:</strong> practical reviews of performance, trust,
                  SEO, and conversion.
                </li>
                <li>
                  <strong>AI search optimisation:</strong> structured content and schema so
                  your business is easier to find and cite.
                </li>
              </ul>
              <Link
                href="/our-services"
                className="inline-block rounded-full bg-[#1e2e68] px-6 py-3 font-semibold text-white shadow-md transition hover:bg-[#2d459c]"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-10">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="mb-10 text-3xl font-bold text-[#2d459c] md:text-4xl">
              Our <span className="text-[#1e2e68]">Values</span>
            </h2>
            <div className="grid gap-10 md:grid-cols-3">
              {[
                {
                  title: "Clarity",
                  desc: "Visitors should quickly understand what you do, who you help, and why your business is the right fit. We value clear messaging and content systems that are easy for your team to use.",
                },
                {
                  title: "Transparency",
                  desc: "Honest advice, clear pricing, and straightforward communication. No hidden extras, no inflated promises, and no unstable template plugins that break without warning.",
                },
                {
                  title: "Performance",
                  desc: "Lightning-fast speeds keep visitors from bouncing. Custom code keeps systems safer and more robust. We focus on practical decisions that improve trust, conversion, and long-term value.",
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="rounded-3xl bg-gray-50 p-8 text-left shadow-sm transition hover:shadow-lg"
                >
                  <h3 className="mb-2 text-xl font-bold text-[#2d459c]">{value.title}</h3>
                  <p className="leading-relaxed text-gray-700">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBand title="Ready for digital systems that help your business scale?" />
      </div>
    </FadeIn>
  );
}
