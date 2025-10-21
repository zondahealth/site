import { NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const {
    firstName,
    lastName,
    email,
    phone,
    organization,
    message,
    privacyAccepted,
  } = await req.json();

  // Validate required fields
  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json(
      { success: false, error: 'Missing required fields' },
      { status: 400 }
    );
  }

  // Validate privacy acceptance
  if (!privacyAccepted) {
    return NextResponse.json(
      { success: false, error: 'Privacy policy must be accepted' },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail', // or 'SendGrid', 'Outlook', etc.
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: `Contact from ${firstName} ${lastName}`,
      text: `
From: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Organization: ${organization || 'Not provided'}

Message:
${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Organization:</strong> ${organization || 'Not provided'}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Email sending error:', err);
    return NextResponse.json(
      { success: false, error: 'Email failed to send' },
      { status: 500 }
    );
  }
}
