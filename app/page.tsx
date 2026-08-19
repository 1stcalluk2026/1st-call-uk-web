import CtaBand from "./components/CtaBand";
import FadeIn from "./components/FadeIn";
import HomeFaq from "./components/HomeFaq";
import HomeStack from "./components/HomeStack";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <FadeIn>
        {/* HERO */}
        <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden overflow-x-hidden text-white pt-20 pb-16 md:pt-18 md:pb-20">
          <Image
            src="/home-banner.png"
            alt="Web design for UK service businesses"
            fill
            priority
            className="object-cover brightness-[0.55]"
            sizes="100vw"
            quality={82}
            style={{ objectPosition: "center" }}
          />

          <div className="absolute inset-0 bg-gradient-to-br from-[#2d459c]/80 via-[#2d459c]/50 to-[#1e2e68]/60" />

          <div className="relative z-20 w-full px-6 md:px-10">
            <div className="mx-auto max-w-5xl text-center">
              <p className="mb-5 inline-flex rounded-full border border-blue-200/60 bg-[#2d459c]/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-100 shadow-lg backdrop-blur-md md:text-sm">
                Web design for UK service businesses
              </p>

              <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
                High-performance websites built to turn
                <span className="text-blue-300"> more visitors into qualified enquiries</span>
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-100 md:text-2xl">
                Custom web design and development for businesses that need clearer messaging,
                stronger credibility, faster load times, and a better flow of leads.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/book"
                  className="inline-block rounded-full bg-[#2d459c] px-10 py-4 text-lg font-bold text-white shadow-xl transition hover:bg-[#1e2e68]"
                >
                  Book a Consultation
                </Link>

                <Link
                  href="/contact"
                  className="inline-block rounded-full border border-white/30 bg-white/10 px-10 py-4 text-lg font-bold text-white transition hover:bg-white/20"
                >
                  Request a Website Audit
                </Link>
              </div>

              <p className="mx-auto mt-6 max-w-2xl text-sm text-gray-200">
                Built for service businesses that want a website to look credible, load fast,
                and help the right people get in touch.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        {/* POSITIONING */}
        <section className="overflow-x-hidden px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
            <div>
              <h2 className="mb-8 text-4xl font-bold leading-tight text-[#2d459c] md:text-5xl">
                If your website is not generating enquiries,
                <br />
                it is not doing its job
              </h2>

              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                Many UK service businesses have a traffic problem, but most have a conversion problem. 
                We focus on building <strong>high-performance websites</strong> that do more than just exist—they are engineered to turn <strong>more visitors into qualified enquiries</strong>.
              </p>

              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                Slow page speeds, vague messaging, and outdated design are quietly costing you leads. 
                Even when people are interested in your services, a lack of clarity stops them from taking action. 
                We transform these barriers into a seamless journey that builds trust and authority.
              </p>

              <p className="text-lg leading-relaxed text-gray-700">
                1st Call UK designs custom <strong>websites</strong> for service businesses that need better positioning, stronger trust signals, and a clearer path from a first visit to a <strong>qualified enquiry</strong>. 
                Stop losing potential clients to performance issues and start converting your traffic into real business growth.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full h-80 relative rounded-3xl shadow-2xl overflow-hidden">
  <Image
    src="/body-home01.png"
    alt="Website design showcase for 1st Call UK"
    fill
    className="object-cover"
  />
</div>
              <p className="text-center text-sm text-gray-500">
                Fast, modern websites designed around trust, clarity, and lead generation
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      <HomeStack />

      <FadeIn>
        {/* STATS */}
        <section className="overflow-x-hidden bg-[#2d459c] py-16 text-white">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4">
            <div>
              <div className="text-5xl font-bold text-blue-200">98+</div>
              <p className="mt-2">PageSpeed scores on core pages</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-200">3-6</div>
              <p className="mt-2">Weeks for most website projects</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-200">100%</div>
              <p className="mt-2">Custom-built, no template bloat</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-200">UK</div>
              <p className="mt-2">Focused on service-led businesses</p>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-gray-50 px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-[#2d459c] md:text-5xl">
                Website services built around growth
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                From full website builds to audits and performance improvements, the focus is
                always the same: a stronger website that helps your business win more of the
                right enquiries.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Web Design", href: "/our-services/web-design" },
                { label: "Custom Web Development", href: "/our-services/custom-web-development" },
                { label: "Next.js Development", href: "/our-services/nextjs-development" },
                { label: "Website Audits", href: "/our-services/website-audits" },
              ].map((service) => (
                <div key={service.label} className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
                  <h3 className="mb-4 text-2xl font-bold text-[#2d459c]">{service.label}</h3>
                  <p className="mb-6 leading-relaxed text-gray-700">
                    Professional solutions for service businesses that need a stronger first impression and better conversion.
                  </p>
                  <Link href={service.href} className="font-semibold text-[#2d459c] hover:text-[#1e2e68]">
                    Learn more
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* WHY US */}
<section className="bg-white px-6 py-20 md:px-10 md:py-24">
  <div className="mx-auto max-w-5xl">
    <div className="mb-12 text-center">
      <h2 className="mb-4 text-4xl font-bold text-[#2d459c] md:text-5xl">
        The 1st Call UK Advantage
      </h2>
      <p className="mx-auto max-w-3xl text-lg text-gray-600">
        We don't just build websites; we engineer digital platforms designed to build 
        immediate trust and convert casual visitors into qualified enquiries.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-3">
      {[
        { title: "Precision Positioning", desc: "We clarify your value proposition so visitors instantly understand why your service is the perfect fit." },
        { title: "Authority Design", desc: "Professional, high-performance layouts that make your business look like the industry leader it is." },
        { title: "Conversion-Led Architecture", desc: "Every element is placed to remove friction and guide your visitors directly to the enquiry button." }
      ].map((item, i) => (
        <div key={i} className="rounded-3xl border border-gray-100 bg-gray-50 p-8 shadow-sm">
          <h3 className="mb-4 text-2xl font-bold text-[#2d459c]">{item.title}</h3>
          <p className="leading-relaxed text-gray-700">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* SPECIALISATIONS */}
<section className="bg-gray-50 px-6 py-20 md:px-10 md:py-24">
  <div className="mx-auto max-w-6xl">
    <div className="mb-12 text-center">
      <h2 className="mb-4 text-4xl font-bold text-[#2d459c] md:text-5xl">
        Engineered for Service Growth
      </h2>
      <p className="mx-auto max-w-3xl text-lg text-gray-600">
        We understand the specific mechanics of service-based sales. We build custom 
        journeys that align with how your clients actually want to buy.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {[
        { title: "Professional Services", desc: "Sites built for firms that need to project absolute integrity, clarity, and competence." },
        { title: "Legal & Immigration", desc: "Authority-driven design that reduces complexity and builds confidence for sensitive decision-making." },
        { title: "Trade & Construction", desc: "Robust, fast-loading portfolios that highlight your capability and drive quote requests." }
      ].map((item, i) => (
        <div key={i} className="rounded-3xl border border-gray-200 bg-white p-8 transition hover:shadow-lg">
          <h3 className="mb-3 text-2xl font-bold text-[#2d459c]">{item.title}</h3>
          <p className="text-gray-700">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* PERFORMANCE PROOF */}
<section className="bg-white px-6 py-20 md:px-10 md:py-24">
  <div className="mx-auto max-w-6xl">
    <div className="mb-14 text-center">
      <h2 className="mb-4 text-4xl font-bold text-[#2d459c]">
        Built to Outperform
      </h2>
      <p className="mx-auto max-w-3xl text-lg text-gray-600">
        A website should be your hardest-working employee. We focus on the technical 
        foundation that guarantees speed, visibility, and lasting performance.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-3">
      {[
        { title: "Modern Tech Stacks", desc: "Utilising headless architecture for lightning-fast speeds and superior security." },
        { title: "SEO-First Structure", desc: "Clean code and structured data designed to help your business get found by the right people." },
        { title: "Engagement Focus", desc: "User-centric design patterns that turn passive traffic into active, qualified enquiries." }
      ].map((item, i) => (
        <div key={i} className="rounded-3xl border border-gray-200 bg-gray-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#2d459c]">{item.title}</h3>
          <p className="mb-6 leading-relaxed text-gray-700">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* TESTIMONIALS */}
<section className="bg-gray-50 px-6 py-20 md:px-10 md:py-24">
  <div className="mx-auto max-w-6xl">
    <h2 className="mb-14 text-center text-4xl font-bold text-[#2d459c]">
      Delivering Results for UK Businesses
    </h2>
    <div className="grid gap-8 md:grid-cols-3">
      {[
        { quote: "The transition to a custom build was the best decision for our enquiry flow. It feels like a premium operation now.", client: "UK Immigration Lead" },
        { quote: "Professional, sharp, and fast. The new site acts as a proper sales engine for our service offerings.", client: "Financial Services Director" },
        { quote: "1st Call UK Web turned our outdated site into a modern asset that actually generates leads while we sleep.", client: "Trade Business Owner" }
      ].map((item, i) => (
        <div key={i} className="rounded-3xl border-t-4 border-[#2d459c] bg-white p-8 shadow-md">
          <p className="mb-6 italic text-gray-600">"{item.quote}"</p>
          <p className="font-bold text-[#2d459c]">— {item.client}</p>
        </div>
      ))}
    </div>
  </div>
</section>



        <HomeFaq />

        <CtaBand title="Let's look at why visitors are not getting in touch" />
      </FadeIn>
    </div>
  );
}