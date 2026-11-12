import { NextResponse } from "next/server";
import * as nodemailer from "nodemailer";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body" },
      { status: 400 }
    );
  }

  // Honeypot: real visitors never see or fill this field.
  if (clean(body.website, 200)) {
    return NextResponse.json({ success: true });
  }

  // Header fields must stay single-line.
  const firstName = clean(body.firstName, 100).replace(/[\r\n]+/g, " ");
  const lastName = clean(body.lastName, 100).replace(/[\r\n]+/g, " ");
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 50);
  const organization = clean(body.organization, 200);
  const topic = clean(body.topic, 100).replace(/[\r\n]+/g, " ");
  const message = clean(body.message, 5000);

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json(
      { success: false, error: "Missing required fields" },
      { status: 400 }
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { success: false, error: "Invalid email address" },
      { status: 400 }
    );
  }

  if (body.privacyAccepted !== true) {
    return NextResponse.json(
      { success: false, error: "Privacy policy must be accepted" },
      { status: 400 }
    );
  }

  if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
    console.error("Contact form: MAIL_USER / MAIL_PASS are not configured");
    return NextResponse.json(
      { success: false, error: "Email is not configured" },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      replyTo: email,
      subject: `Contact from ${firstName} ${lastName}${topic ? ` — ${topic}` : ""}`,
      text: `
From: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || "Not provided"}
Organization: ${organization || "Not provided"}
Topic: ${topic || "Not provided"}

Message:
${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(`${firstName} ${lastName}`)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <p><strong>Organization:</strong> ${escapeHtml(organization || "Not provided")}</p>
        <p><strong>Topic:</strong> ${escapeHtml(topic || "Not provided")}</p>
        <h3>Message:</h3>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email sending error:", err);
    return NextResponse.json(
      { success: false, error: "Email failed to send" },
      { status: 500 }
    );
  }
}
