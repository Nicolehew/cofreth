import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, company, email, phone, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Cofreth Website <noreply@cofreth.com.my>',
      to: ['business@cofreth.com.my', 'cofreth@cofreth.com.my'],
      replyTo: email,
      subject: `New Enquiry from ${name}${company ? ` (${company})` : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1B3A2D; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #6BBD45; margin: 0; font-size: 20px;">New Website Enquiry</h1>
            <p style="color: #ffffff; margin: 4px 0 0; font-size: 13px;">Received from cofreth.com.my contact form</p>
          </div>
          <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px; width: 130px; vertical-align: top;">Full Name</td>
                <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 600;">${name}</td>
              </tr>
              ${company ? `<tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Company</td>
                <td style="padding: 8px 0; color: #111827; font-size: 14px;">${company}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #1B3A2D; font-size: 14px;">${email}</a></td>
              </tr>
              ${phone ? `<tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Phone</td>
                <td style="padding: 8px 0; color: #111827; font-size: 14px;">${phone}</td>
              </tr>` : ''}
              ${service ? `<tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Service</td>
                <td style="padding: 8px 0;">
                  <span style="background: #6BBD45; color: white; padding: 2px 10px; border-radius: 999px; font-size: 12px; font-weight: 600;">${service}</span>
                </td>
              </tr>` : ''}
              <tr>
                <td colspan="2" style="padding-top: 16px; border-top: 1px solid #e5e7eb;">
                  <p style="color: #6b7280; font-size: 13px; margin: 0 0 8px;">Message</p>
                  <p style="color: #111827; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
                </td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e7eb;">
              <a href="mailto:${email}" style="background: #1B3A2D; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-size: 13px; font-weight: 600;">Reply to ${name}</a>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
