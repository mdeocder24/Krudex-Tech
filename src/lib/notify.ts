import { Resend } from 'resend';

export interface InquiryNotice {
  id: string;
  name: string;
  email: string;
  company: string | null;
  scope: string | null;
  timeline: string | null;
  details: string | null;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Strip CR/LF so visitor input can never inject extra email headers via the subject.
function oneLine(value: string): string {
  return value.replace(/[\r\n]+/g, ' ').slice(0, 120);
}

function buildClientConfirmationHtml(inquiry: InquiryNotice): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>We received your inquiry</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0f19; color: #e2e8f0; margin: 0; padding: 24px; }
    .card { max-width: 580px; margin: 0 auto; background-color: #111827; border: 1px solid #1e293b; border-radius: 12px; padding: 32px; box-sizing: border-box; }
    .header { border-bottom: 1px solid #1e293b; padding-bottom: 20px; margin-bottom: 24px; }
    .title { color: #3b82f6; font-size: 22px; font-weight: 700; margin: 0; letter-spacing: -0.02em; }
    .greeting { font-size: 16px; color: #f8fafc; margin-bottom: 16px; font-weight: 600; }
    .message { font-size: 14px; line-height: 1.6; color: #cbd5e1; margin-bottom: 24px; }
    .summary-box { background-color: #1e293b; border-radius: 8px; padding: 18px; margin-bottom: 24px; }
    .summary-title { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #94a3b8; margin-bottom: 12px; }
    .summary-row { font-size: 14px; margin-bottom: 8px; line-height: 1.5; }
    .summary-label { color: #94a3b8; font-weight: 500; }
    .summary-value { color: #f8fafc; font-weight: 500; }
    .footer { font-size: 12px; color: #64748b; border-top: 1px solid #1e293b; padding-top: 20px; line-height: 1.6; }
    .cta-button { display: inline-block; background-color: #2563eb; color: #ffffff !important; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-weight: 600; font-size: 14px; margin-top: 12px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1 class="title">Krudex Global</h1>
    </div>
    <div class="greeting">Hi ${escapeHtml(inquiry.name)},</div>
    <div class="message">
      Thank you for reaching out to <strong>Krudex Global</strong>. We have received your project inquiry and our engineering team is reviewing your requirements.
      <br><br>
      A member of our team will follow up with you within <strong>24 business hours</strong>.
    </div>
    <div class="summary-box">
      <div class="summary-title">Summary of Your Inquiry</div>
      ${inquiry.scope ? `<div class="summary-row"><span class="summary-label">Scope:</span> <span class="summary-value">${escapeHtml(inquiry.scope)}</span></div>` : ''}
      ${inquiry.timeline ? `<div class="summary-row"><span class="summary-label">Timeline:</span> <span class="summary-value">${escapeHtml(inquiry.timeline)}</span></div>` : ''}
      ${inquiry.company ? `<div class="summary-row"><span class="summary-label">Company:</span> <span class="summary-value">${escapeHtml(inquiry.company)}</span></div>` : ''}
      ${inquiry.details ? `<div class="summary-row" style="margin-top: 10px;"><span class="summary-label">Details:</span><br><span style="color:#cbd5e1; white-space:pre-wrap; font-size:13px;">${escapeHtml(inquiry.details)}</span></div>` : ''}
    </div>
    <div class="message">
      If you have immediate questions or additional information to share, simply reply directly to this email or message us on WhatsApp:
      <br>
      <a href="https://wa.me/917207363444" class="cta-button">Message Us on WhatsApp</a>
    </div>
    <div class="footer">
      Krudex Global &bull; Next-Gen Software & Digital Engineering<br>
      Inquiry Reference: ${escapeHtml(inquiry.id)}
    </div>
  </div>
</body>
</html>
  `.trim();
}

/**
 * Emails the team about a new inquiry and sends an automated confirmation to the client.
 *
 * Requirements:
 * - RESEND_API_KEY: Resend API token.
 * - CONTACT_NOTIFY_EMAIL: Inbox receiving the team notification.
 * - CONTACT_FROM_EMAIL: Sender address on a domain verified in Resend (required for emailing clients).
 */
export async function notifyNewInquiry(inquiry: InquiryNotice): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_NOTIFY_EMAIL?.trim();
  if (!apiKey || !to) return;

  const resend = new Resend(apiKey);
  const from = process.env.CONTACT_FROM_EMAIL?.trim() || 'Krudex Website <onboarding@resend.dev>';

  // 1. Send Internal Team Notification
  const rows: Array<[string, string | null]> = [
    ['Name', inquiry.name],
    ['Email', inquiry.email],
    ['Company', inquiry.company],
    ['Needs', inquiry.scope],
    ['Timeline', inquiry.timeline],
    ['Details', inquiry.details],
    ['Inquiry ID', inquiry.id],
  ];

  const teamHtml = `<h2>New website inquiry</h2><table cellpadding="6">${rows
    .map(
      ([label, value]) =>
        `<tr><td valign="top"><strong>${label}</strong></td><td style="white-space:pre-wrap">${escapeHtml(
          value || '—'
        )}</td></tr>`
    )
    .join('')}</table>`;

  const teamText = rows.map(([label, value]) => `${label}: ${value || '—'}`).join('\n');

  const { error: teamError } = await resend.emails.send({
    from,
    to: to.split(',').map((s) => s.trim()).filter(Boolean),
    replyTo: inquiry.email,
    subject: `New inquiry: ${oneLine(inquiry.name)}${inquiry.scope ? ` (${oneLine(inquiry.scope)})` : ''}`,
    html: teamHtml,
    text: teamText,
  });

  if (teamError) {
    throw new Error(`Resend Error (Team Notification): ${teamError.message}`);
  }

  // 2. Send Automated Confirmation Email to Visitor/Client
  // Only attempts when using a custom verified domain, as Resend's onboarding@resend.dev sandbox
  // strictly rejects external client recipients.
  if (!from.includes('onboarding@resend.dev')) {
    try {
      const clientHtml = buildClientConfirmationHtml(inquiry);
      const clientText = `Hi ${inquiry.name},\n\nThank you for contacting Krudex Global! We have received your inquiry and our team is currently reviewing your project requirements.\n\nA member of our team will follow up with you within 24 business hours.\n\nSummary of Your Inquiry:\n- Scope: ${inquiry.scope || '—'}\n- Timeline: ${inquiry.timeline || '—'}\n- Company: ${inquiry.company || '—'}\n- Details: ${inquiry.details || '—'}\n\nIf you have immediate questions, simply reply directly to this email or message us on WhatsApp at +91 72073 63444.\n\nWarm regards,\nThe Krudex Global Team\nRef: ${inquiry.id}`;

      const { error: clientError } = await resend.emails.send({
        from,
        to: inquiry.email,
        replyTo: to.split(',')[0]?.trim() || from,
        subject: `We received your inquiry — Krudex Global`,
        html: clientHtml,
        text: clientText,
      });

      if (clientError) {
        console.warn('Visitor confirmation email error:', clientError.message);
      }
    } catch (clientErr) {
      console.warn(
        'Visitor confirmation dispatch failed:',
        clientErr instanceof Error ? clientErr.message : clientErr
      );
    }
  } else {
    console.info(
      'Visitor confirmation email skipped: using sandbox sender (onboarding@resend.dev). Set a verified CONTACT_FROM_EMAIL to activate.'
    );
  }
}
