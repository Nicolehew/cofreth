import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

/* ── Rate limiting: max 5 submissions per IP per 10 minutes ── */
const rateMap = new Map<string, { count: number; reset: number }>();
function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.reset) {
    rateMap.set(ip, { count: 1, reset: now + 10 * 60 * 1000 });
    return false;
  }
  if (entry.count >= 5) return true;
  entry.count++;
  return false;
}

/* ── Escape HTML to prevent XSS in email body ── */
function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    const body = await req.json();
    const name    = typeof body.name    === 'string' ? body.name.slice(0, 100).trim()    : '';
    const company = typeof body.company === 'string' ? body.company.slice(0, 100).trim() : '';
    const email   = typeof body.email   === 'string' ? body.email.slice(0, 254).trim()   : '';
    const phone   = typeof body.phone   === 'string' ? body.phone.slice(0, 30).trim()    : '';
    const service = typeof body.service === 'string' ? body.service.slice(0, 100).trim() : '';
    const message = typeof body.message === 'string' ? body.message.slice(0, 2000).trim(): '';

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Cofreth Website <noreply@cofreth.com.my>',
      to: ['business@cofreth.com.my', 'cofreth@cofreth.com.my'],
      replyTo: email,
      subject: `New Enquiry from ${esc(name)}${company ? ` (${esc(company)})` : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; width: 100%;">
          <div style="background: #1B3A2D; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #6BBD45; margin: 0; font-size: 20px;">New Website Enquiry</h1>
            <p style="color: #ffffff; margin: 4px 0 0; font-size: 13px;">Received from cofreth.com.my contact form</p>
          </div>
          <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; box-sizing: border-box;">

            <div style="margin-bottom: 16px;">
              <p style="margin: 0 0 4px; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Full Name</p>
              <p style="margin: 0; color: #111827; font-size: 15px; font-weight: 600; word-break: break-word;">${esc(name)}</p>
            </div>

            ${company ? `<div style="margin-bottom: 16px;">
              <p style="margin: 0 0 4px; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Company</p>
              <p style="margin: 0; color: #111827; font-size: 15px; word-break: break-word;">${esc(company)}</p>
            </div>` : ''}

            <div style="margin-bottom: 16px;">
              <p style="margin: 0 0 4px; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Email</p>
              <a href="mailto:${esc(email)}" style="color: #1B3A2D; font-size: 15px; word-break: break-all; text-decoration: none;">${esc(email)}</a>
            </div>

            ${phone ? `<div style="margin-bottom: 16px;">
              <p style="margin: 0 0 4px; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Phone</p>
              <p style="margin: 0; color: #111827; font-size: 15px; word-break: break-word;">${esc(phone)}</p>
            </div>` : ''}

            ${service ? `<div style="margin-bottom: 16px;">
              <p style="margin: 0 0 4px; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Service</p>
              <span style="display: inline-block; background: #6BBD45; color: white; padding: 3px 12px; border-radius: 999px; font-size: 13px; font-weight: 600;">${esc(service)}</span>
            </div>` : ''}

            <div style="margin-bottom: 16px; padding-top: 16px; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 4px; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
              <p style="margin: 0; color: #111827; font-size: 15px; line-height: 1.6; white-space: pre-wrap; word-break: break-word;">${esc(message)}</p>
            </div>

            <div style="padding-top: 16px; border-top: 1px solid #e5e7eb;">
              <a href="mailto:${esc(email)}" style="display: inline-block; background: #1B3A2D; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 600;">Reply to ${esc(name)}</a>
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
