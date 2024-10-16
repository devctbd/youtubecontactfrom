import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, message, subject } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailerOptions = {
    from: process.env.SMTP_EMAIL,
    to: process.env.SMTP_EMAIL,
    subject: ` website submission ${subject}`,
    replyTo: `${email}`,
    text: `Name: ${name} \n Email: ${email} \n Message: ${message}`,
  };

  try {
    await transporter.sendMail(mailerOptions);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
