import { NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { src } = await req.json();

    if (!src) {
      return NextResponse.json({ success: true });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: `Landing page visit from src: ${src}`,
      text: `Someone visited the landing page with src="${src}".\n\nURL: zondahealth.com?src=${src}\nTime: ${new Date().toISOString()}`,
      html: `
        <h2>Landing Page Visit</h2>
        <p><strong>Source:</strong> ${src}</p>
        <p><strong>URL:</strong> zondahealth.com?src=${src}</p>
        <p><strong>Time:</strong> ${new Date().toISOString()}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: true });
  }
}
