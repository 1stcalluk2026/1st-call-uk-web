import { Resend } from "resend";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  SITE_NAME,
  SITE_URL,
} from "./site";
import {
  detailRow,
  escapeHtml,
  renderEmailLayout,
  type EmailSiteConfig,
} from "./email-layout";
import { staffBccEmail, staffFromEmail, staffToEmail } from "./staff-notify";

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

const site: EmailSiteConfig = {
  siteName: SITE_NAME,
  siteUrl: SITE_URL,
  contactEmail: CONTACT_EMAIL,
  contactPhone: CONTACT_PHONE,
  contactPhoneHref: CONTACT_PHONE_HREF,
  contactAddress: CONTACT_ADDRESS,
  tagline: "Web & Digital",
};

export async function sendEnquiryEmails(payload: EnquiryPayload) {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    throw new Error("Email is not configured.");
  }

  const toEmail = staffToEmail();
  const fromEmail = staffFromEmail(SITE_NAME);
  const bccEmail = staffBccEmail(toEmail);

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

  const adminHtml = renderEmailLayout({
    site,
    title: kind,
    preheader: `${kind} from ${payload.name} on 1stcalluk.website`,
    bodyHtml: `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
      ${detailRow("Name", payload.name)}
      ${detailRow("Email", payload.email)}
      ${detailRow("Phone", payload.phone)}
      ${detailRow("Company", payload.company)}
      ${detailRow("Service", payload.service)}
      ${detailRow("Found us", payload.source)}
    </table>
    <p style="margin:20px 0 8px;font-size:13px;color:#64748b;">Message</p>
    <p style="margin:0;white-space:pre-wrap;line-height:1.6;background:#f8fafc;border-left:4px solid #2d459c;padding:12px 16px;color:#0f172a;">${escapeHtml(payload.message)}</p>`,
  });

  const confirmHtml = renderEmailLayout({
    site,
    title: "We received your message",
    preheader: `Thank you for contacting ${SITE_NAME}`,
    bodyHtml: `<p style="margin:0 0 16px;font-size:16px;color:#0f172a;">Hi ${escapeHtml(payload.name)},</p>
    <p style="margin:0 0 16px;line-height:1.6;">Thank you for contacting <strong style="color:#0f172a;">${escapeHtml(SITE_NAME)}</strong>. We have received your ${isBook ? "consultation request" : "enquiry"} and will reply within <strong style="color:#0f172a;">24 hours on UK business days</strong>.</p>
    <p style="margin:0 0 8px;font-size:13px;color:#64748b;">Your message</p>
    <p style="margin:0;white-space:pre-wrap;line-height:1.6;background:#f8fafc;border-left:4px solid #2d459c;padding:12px 16px;color:#0f172a;">${escapeHtml(payload.message)}</p>`,
  });

  const resend = new Resend(resendKey);

  const admin = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    bcc: bccEmail,
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
