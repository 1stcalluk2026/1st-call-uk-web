import { NextResponse } from "next/server";
import { sendEnquiryEmails } from "../../lib/send-enquiry";
import { forwardPortalEnquiry } from "../../lib/forward-portal-enquiry";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type EnquiryBody = {
  variant?: string;
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  source?: string;
  message?: string;
  website?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as EnquiryBody;

    if (body.website) {
      return NextResponse.json({ success: true });
    }

    const variant = body.variant === "book" ? "book" : "contact";
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const company = String(body.company || "").trim();
    const service = String(body.service || "").trim();
    const source = String(body.source || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Name, email, service, and message are required." },
        { status: 400 },
      );
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (variant === "book" && (!company || !phone)) {
      return NextResponse.json(
        { error: "Company and phone are required for a consultation request." },
        { status: 400 },
      );
    }

    if (variant === "contact" && !source) {
      return NextResponse.json(
        { error: "Please tell us how you found us." },
        { status: 400 },
      );
    }

    await sendEnquiryEmails({
      variant,
      name,
      email,
      phone,
      company,
      service,
      source,
      message,
    });

    await forwardPortalEnquiry({
      service: "web",
      sourceSite: "1stcalluk.website",
      sourceKind: variant,
      sourceChannel: source || null,
      name,
      email,
      phone,
      company,
      message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to send the enquiry.";
    console.error("Enquiry API error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
