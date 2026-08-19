import { NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { src, path } = await req.json();

    if (!src) {
      return NextResponse.json({ success: true });
    }

    const visitedPath = typeof path === 'string' && path.length > 0 ? path : '/';

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
      subject: `Visit from src: ${src}`,
      text: `Someone visited the site with src="${src}".\n\nPath: ${visitedPath}\nURL: zondahealth.com${visitedPath}\nTime: ${new Date().toISOString()}`,
      html: `
        <h2>Site Visit</h2>
        <p><strong>Source:</strong> ${src}</p>
        <p><strong>Path:</strong> ${visitedPath}</p>
        <p><strong>URL:</strong> zondahealth.com${visitedPath}</p>
        <p><strong>Time:</strong> ${new Date().toISOString()}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: true });
  }
}
