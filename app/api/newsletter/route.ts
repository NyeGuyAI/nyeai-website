import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    // Validation
    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const contactEmail = process.env.CONTACT_EMAIL || "garrett@nyeai.tech";

    // Send notification email to you
    const { data, error } = await resend.emails.send({
      from: "NyeAI Newsletter <onboarding@resend.dev>",
      to: contactEmail,
      subject: "📧 New Subscriber | NyeAI Newsletter",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #a855f7 0%, #d946ef 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 20px; border: 1px solid #e0e0e0; border-top: none; }
              .email { font-size: 18px; font-weight: bold; color: #a855f7; padding: 15px; background: white; border-radius: 4px; margin: 15px 0; text-align: center; }
              .footer { text-align: center; margin-top: 20px; color: #777; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">🎉 New Newsletter Subscriber!</h2>
              </div>
              <div class="content">
                <p>Someone just signed up for your newsletter:</p>
                <div class="email">${email}</div>
                <p style="color: #666; font-size: 14px;">
                  <strong>Next steps:</strong><br>
                  • Add this email to your mailing list<br>
                  • Send a welcome email<br>
                  • Consider adding them to your CRM
                </p>
              </div>
              <div class="footer">
                <p>This notification was sent from the NyeAI newsletter signup form</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to process signup" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Successfully subscribed to newsletter" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter signup error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
