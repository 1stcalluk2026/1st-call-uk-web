import { Resend } from "resend";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  SITE_NAME,
  SITE_URL,
  TEST_NOTIFY_EMAIL,
} from "./site";

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

function companyFooterHtml() {
  return `<tr>
    <td style="padding:20px 24px;background:#f8fafc;border-top:1px solid #e5e7eb;text-align:center;font-size:13px;line-height:1.7;color:#4b5563;">
      <strong style="color:#2d459c;">${escapeHtml(SITE_NAME)}</strong><br />
      ${escapeHtml(CONTACT_ADDRESS)}<br />
      <a href="mailto:${CONTACT_EMAIL}" style="color:#2d459c;text-decoration:none;">${CONTACT_EMAIL}</a>
      &nbsp;·&nbsp;
      <a href="tel:${CONTACT_PHONE_HREF}" style="color:#2d459c;text-decoration:none;">${CONTACT_PHONE}</a><br />
      <a href="${SITE_URL}" style="color:#6b7280;text-decoration:none;">${SITE_URL.replace("https://", "")}</a>
    </td>
  </tr>`;
}

function emailShell(title: string, body: string) {
  return `<!DOCTYPE html>
<html lang="en">
<body style="margin:0;padding:24px;background:#f8fafc;font-family:Arial,Helvetica,sans-serif;color:#111827;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden;">
    <tr>
      <td style="background:#2d459c;padding:20px 24px;color:#ffffff;">
        <p style="margin:0;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;opacity:0.85;">${escapeHtml(SITE_NAME)}</p>
        <h1 style="margin:8px 0 0;font-size:20px;">${escapeHtml(title)}</h1>
      </td>
    </tr>
    <tr>
      <td style="padding:24px;">${body}</td>
    </tr>
    ${companyFooterHtml()}
  </table>
</body>
</html>`;
}

export async function sendEnquiryEmails(payload: EnquiryPayload) {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    throw new Error("Email is not configured.");
  }

  const notifyEmail = process.env.ENQUIRY_NOTIFY_EMAIL || TEST_NOTIFY_EMAIL;
  const toEmail = process.env.ENQUIRY_TO_EMAIL || CONTACT_EMAIL;
  const fromEmail =
    process.env.ENQUIRY_FROM_EMAIL || `${SITE_NAME} <${CONTACT_EMAIL}>`;

  const isBook = payload.variant === "book";
  const kind = isBook ? "Consultation request" : "Website enquiry";
  const adminSubject = `${kind} from ${payload.name}`;

  const adminText = [
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
    "",
    SITE_NAME,
    CONTACT_ADDRESS,
    CONTACT_EMAIL,
    CONTACT_PHONE,
  ]
    .filter((line) => line !== "")
    .join("\n");

  const adminHtml = emailShell(
    kind,
    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${row("Name", payload.name)}
      ${row("Email", payload.email)}
      ${row("Phone", payload.phone)}
      ${row("Company", payload.company)}
      ${row("Service", payload.service)}
      ${row("Found us", payload.source)}
    </table>
    <p style="margin:20px 0 8px;font-size:13px;color:#6b7280;">Message</p>
    <p style="margin:0;white-space:pre-wrap;line-height:1.6;">${escapeHtml(payload.message)}</p>`,
  );

  const confirmHtml = emailShell(
    "We received your message",
    `<p style="margin:0 0 16px;font-size:16px;">Hi ${escapeHtml(payload.name)},</p>
    <p style="margin:0 0 16px;line-height:1.6;">Thank you for contacting <strong>${escapeHtml(SITE_NAME)}</strong>. We have received your ${isBook ? "consultation request" : "enquiry"} and will reply within <strong>24 hours on UK business days</strong>.</p>
    <p style="margin:0 0 8px;font-size:13px;color:#6b7280;">Your message</p>
    <p style="margin:0;white-space:pre-wrap;line-height:1.6;background:#f8fafc;border-left:4px solid #2d459c;padding:12px 16px;">${escapeHtml(payload.message)}</p>`,
  );

  const resend = new Resend(resendKey);

  const admin = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    bcc: notifyEmail,
    replyTo: payload.email,
    subject: adminSubject,
    text: adminText,
    html: adminHtml,
  });

  if (admin.error) {
    throw new Error(admin.error.message || "Unable to notify the 1st Call UK team.");
  }

  const confirmation = await resend.emails.send({
    from: fromEmail,
    to: payload.email,
    replyTo: CONTACT_EMAIL,
    subject: `Confirmation: we received your ${isBook ? "consultation request" : "enquiry"}`,
    text: [
      `Hi ${payload.name},`,
      "",
      `Thank you for contacting ${SITE_NAME}. We have received your ${isBook ? "consultation request" : "enquiry"} and will reply within 24 hours on UK business days.`,
      "",
      payload.message,
      "",
      SITE_NAME,
      CONTACT_ADDRESS,
      CONTACT_EMAIL,
      CONTACT_PHONE,
    ].join("\n"),
    html: confirmHtml,
  });

  if (confirmation.error) {
    throw new Error(confirmation.error.message || "Unable to send your confirmation email.");
  }
}
