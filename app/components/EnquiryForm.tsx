"use client";

import { useState } from "react";
import Link from "next/link";
import { CONTACT_EMAIL } from "../lib/site";

const SERVICES = [
  "High-Performance Website Development",
  "Custom Web Development",
  "Next.js Development",
  "Custom Mobile Application",
  "Website Performance & Growth Audit",
  "AI Search Optimisation (GEO)",
  "Digital Marketing",
];

type EnquiryFormProps = {
  variant?: "contact" | "book";
  defaultService?: string;
  auditIntent?: boolean;
};

export default function EnquiryForm({
  variant = "contact",
  defaultService = "",
  auditIntent = false,
}: EnquiryFormProps) {
  const [status, setStatus] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [source, setSource] = useState("");
  const [otherSource, setOtherSource] = useState("");

  const isBook = variant === "book";
  const heading = auditIntent
    ? "Request Your Audit"
    : isBook
      ? "Book a Consultation"
      : "Start Your Project Enquiry";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const company = String(data.get("company") || "");
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "");
    const website = String(data.get("website") || "");
    const heard = source === "Other" ? otherSource : source;

    if (source === "Other" && !otherSource.trim()) {
      setStatus("Please specify how you heard about us.");
      return;
    }

    setSending(true);
    setStatus("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          variant: isBook ? "book" : "contact",
          name,
          email,
          phone,
          company,
          service,
          source: heard,
          message,
          website,
        }),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message.");
      }

      setSent(true);
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : `Unable to send your message. Please email ${CONTACT_EMAIL}.`,
      );
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-xl md:p-12">
        <h2 className="text-2xl font-bold text-[#2d459c]">Message sent</h2>
        <p className="mt-4 text-gray-600">
          Thank you. We have received your {isBook ? "consultation request" : "enquiry"} and
          will reply to you at the email you provided. We typically respond within 24 hours on
          UK business days. If you need us sooner, email {CONTACT_EMAIL}.
        </p>
        <Link
          href={isBook ? "/contact" : "/book"}
          className="mt-8 inline-block rounded-full bg-[#2d459c] px-8 py-3 font-bold text-white transition hover:bg-[#1e2e68]"
        >
          {isBook ? "Prefer to send a message instead?" : "Prefer to book a call instead?"}
        </Link>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl md:p-12">
      <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#2d459c]">
        {auditIntent
          ? "Website performance and growth audit"
          : "Bespoke websites. Clear advice. No jargon."}
      </p>
      <h2 className="mb-6 text-3xl font-bold text-[#2d459c]">{heading}</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="hidden" aria-hidden="true">
          <label htmlFor="enquiry-website">Website</label>
          <input id="enquiry-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
        <div>
          <label htmlFor="enquiry-name" className="mb-1 block font-medium text-gray-700">
            Full Name
          </label>
          <input
            id="enquiry-name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-[#2d459c]"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="enquiry-email" className="mb-1 block font-medium text-gray-700">
            Email Address
          </label>
          <input
            id="enquiry-email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-[#2d459c]"
            placeholder="Enter your email"
          />
        </div>
        {isBook ? (
          <div>
            <label htmlFor="enquiry-company" className="mb-1 block font-medium text-gray-700">
              Company
            </label>
            <input
              id="enquiry-company"
              name="company"
              type="text"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-[#2d459c]"
              placeholder="Business or organisation name"
            />
          </div>
        ) : null}
        <div>
          <label htmlFor="enquiry-phone" className="mb-1 block font-medium text-gray-700">
            Phone Number {isBook ? "" : "(Optional)"}
          </label>
          <input
            id="enquiry-phone"
            name="phone"
            type="tel"
            required={isBook}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-[#2d459c]"
            placeholder="Enter your phone"
          />
        </div>
        <div>
          <label htmlFor="enquiry-service" className="mb-1 block font-medium text-gray-700">
            Service of Interest
          </label>
          <select
            id="enquiry-service"
            name="service"
            required
            defaultValue={
              defaultService || (auditIntent ? "Website Performance & Growth Audit" : "")
            }
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#2d459c]"
          >
            <option value="">Select a service</option>
            {SERVICES.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
        {!isBook ? (
          <>
            <div>
              <label htmlFor="enquiry-source" className="mb-1 block font-medium text-gray-700">
                How did you find us?
              </label>
              <select
                id="enquiry-source"
                required
                value={source}
                onChange={(event) => setSource(event.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#2d459c]"
              >
                <option value="">Select an option</option>
                <option value="Online Search">Online / Digital Search</option>
                <option value="Social Media">Social Media</option>
                <option value="Referral">Referral / Word of Mouth</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {source === "Other" ? (
              <input
                type="text"
                required
                value={otherSource}
                onChange={(event) => setOtherSource(event.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3"
                placeholder="Please specify"
              />
            ) : null}
          </>
        ) : null}
        <div>
          <label htmlFor="enquiry-message" className="mb-1 block font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="enquiry-message"
            name="message"
            required
            rows={4}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-[#2d459c]"
            placeholder={
              auditIntent
                ? "Share your website URL and what you want more of (calls, form fills, quote requests)..."
                : "Tell us about your goals for a custom website, audit, or digital project..."
            }
          />
        </div>
        <button
          type="submit"
          disabled={sending}
          className="w-full rounded-lg bg-[#2d459c] py-4 font-bold text-white shadow-md transition hover:bg-[#1e2e68] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {sending
            ? "Sending..."
            : auditIntent
            ? "Request My Performance Audit"
            : isBook
              ? "Request a Consultation"
              : "Request a Custom Project Quote"}
        </button>
        {status ? (
          <p className="text-center text-sm text-red-600" role="alert">
            {status}
          </p>
        ) : null}
        <p className="text-center text-xs text-gray-500">
          Typical response within 24 hours on UK business days.
        </p>
      </form>
    </div>
  );
}
