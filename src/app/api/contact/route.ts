import { NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .trim()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          success: false,
          error: "Email service is not configured.",
        },
        {
          status: 500,
        },
      );
    }

    const recipientEmail = process.env.CONTACT_TO_EMAIL;

    if (!recipientEmail) {
      return NextResponse.json(
        {
          success: false,
          error: "Contact recipient is not configured.",
        },
        {
          status: 500,
        },
      );
    }

    const body = await request.json();

    const { name, email, phone, company, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Name, email, and message are required.",
        },
        {
          status: 400,
        },
      );
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [recipientEmail],
      subject: `New Inquiry from ${escapeHtml(name)}`,
      html: `
        <h2>New Website Inquiry</h2>

        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company)}</p>
        <p><strong>Service:</strong> ${escapeHtml(service)}</p>

        <hr />

        <p>${escapeHtml(message)}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Contact form submission failed:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to send your message right now.",
      },
      {
        status: 500,
      },
    );
  }
}
