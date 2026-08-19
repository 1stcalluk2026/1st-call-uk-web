"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Who do you work best with?",
    a: "We work best with UK service businesses that rely on trust, clarity, and enquiries to win work. That includes legal, financial, immigration, construction, trade, and other service-led businesses that need a stronger website presence.",
  },
  {
    q: "Can you improve an existing website?",
    a: "Yes. If your current website feels slow, unclear, outdated, or is not bringing in the right enquiries, we can audit it, improve it, or rebuild it into a faster, clearer, and more effective lead generation website.",
  },
  {
    q: "Do you build custom websites or use templates?",
    a: "We focus on custom website design and development built around your business goals, messaging, and user journey. The aim is to create a website that feels credible, performs well, and supports long-term growth.",
  },
  {
    q: "What if I am not ready for a full website project?",
    a: "That is completely fine. Many businesses start with a website audit to understand what is hurting trust, visibility, and conversions before deciding on a larger rebuild.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most website projects take between 3 and 6 weeks depending on the scope, number of pages, and feedback turnaround.",
  },
] as const;

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="overflow-x-hidden bg-white px-6 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-4xl font-bold text-[#2d459c]">
          Frequently asked questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq.q} className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-sm">
              <button
                type="button"
                aria-expanded={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left font-bold text-[#2d459c] hover:bg-gray-100"
              >
                {faq.q}
                <span className="text-2xl">{openIndex === index ? "-" : "+"}</span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ${
                  openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-gray-600">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
