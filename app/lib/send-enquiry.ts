import { Resend } from "resend";
import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from "./site";

export type EnquiryPayload = {
  variant: "contact" | "book";
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  source: string;
  message: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string): string {
  if (!value) return "";
  return `<tr>
    <td style="padding:8px 0;border-bottom:1px solid #e5e7eb;width:140px;color:#6b7280;font-size:13px;">${escapeHtml(label)}</td>
    <td style="padding:8px 0;border-bottom:1px solid #e5e7eb;font-size:14px;color:#111827;">${escapeHtml(value)}</td>
  </tr>`;
}

export async function sendEnquiryEmails(payload: EnquiryPayload) {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    throw new Error("Email is not configured.");
  }

  const notifyEmail = "getu4ever@gmail.com";
  const toEmail = CONTACT_EMAIL;
  const fromEmail = `${SITE_NAME} <info@1stcalluk.com>`;

  const isBook = payload.variant === "book";
  const kind = isBook ? "Consultation request" : "Website enquiry";
  const subject = `${kind} from ${payload.name}`;

  const text = [
    kind,
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    payload.phone ? `Phone: ${payload.phone}` : "",
    payload.company ? `Company: ${payload.company}` : "",
    `Service: ${payload.service}`,
    payload.source ? `How they found us: ${payload.source}` : "",
    "",
    payload.message,
    "",
    `Submitted on ${SITE_URL}${isBook ? "/book" : "/contact"}`,
  ]
    .filter((line) => line !== "")
    .join("\n");

  const html = `<!DOCTYPE html>
<html lang="en">
<body style="margin:0;padding:24px;background:#f8fafc;font-family:Arial,Helvetica,sans-serif;color:#111827;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden;">
    <tr>
      <td style="background:#2d459c;padding:20px 24px;color:#ffffff;">
        <p style="margin:0;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;opacity:0.85;">${SITE_NAME}</p>
        <h1 style="margin:8px 0 0;font-size:20px;">${escapeHtml(kind)}</h1>
      </td>
    </tr>
    <tr>
      <td style="padding:24px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          ${row("Name", payload.name)}
          ${row("Email", payload.email)}
          ${row("Phone", payload.phone)}
          ${row("Company", payload.company)}
          ${row("Service", payload.service)}
          ${row("Found us", payload.source)}
        </table>
        <p style="margin:20px 0 8px;font-size:13px;color:#6b7280;">Message</p>
        <p style="margin:0;white-space:pre-wrap;line-height:1.6;">${escapeHtml(payload.message)}</p>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const resend = new Resend(resendKey);
  const shared = {
    from: fromEmail,
    replyTo: payload.email,
    text,
    html,
  };

  const sends = [
    resend.emails.send({
      ...shared,
      to: toEmail,
      subject,
    }),
  ];

  if (notifyEmail !== toEmail) {
    sends.push(
      resend.emails.send({
        ...shared,
        to: notifyEmail,
        subject: `[Test copy] ${subject}`,
      }),
    );
  }

  const results = await Promise.all(sends);
  const errors = results.map((result) => result.error).filter(Boolean);

  if (errors.length === results.length) {
    throw new Error(errors[0]?.message || "Unable to send the enquiry.");
  }

  if (errors.length) {
    console.error("Enquiry email partial failure:", errors[0]?.message);
  }
}
