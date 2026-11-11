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

/**
 * Emails the team about a new inquiry using the official Resend SDK.
 *
 * Optional: does nothing unless RESEND_API_KEY and CONTACT_NOTIFY_EMAIL are set.
 * CONTACT_FROM_EMAIL must be an address on a domain verified in Resend;
 * it defaults to Resend's shared test sender.
 */
export async function notifyNewInquiry(inquiry: InquiryNotice): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_NOTIFY_EMAIL?.trim();
  if (!apiKey || !to) return;

  const resend = new Resend(apiKey);
  const from = process.env.CONTACT_FROM_EMAIL?.trim() || 'Krudex Website <onboarding@resend.dev>';

  const rows: Array<[string, string | null]> = [
    ['Name', inquiry.name],
    ['Email', inquiry.email],
    ['Company', inquiry.company],
    ['Needs', inquiry.scope],
    ['Timeline', inquiry.timeline],
    ['Details', inquiry.details],
    ['Inquiry ID', inquiry.id],
  ];

  const html = `<h2>New website inquiry</h2><table cellpadding="6">${rows
    .map(
      ([label, value]) =>
        `<tr><td valign="top"><strong>${label}</strong></td><td style="white-space:pre-wrap">${escapeHtml(
          value || '—'
        )}</td></tr>`
    )
    .join('')}</table>`;

  const text = rows.map(([label, value]) => `${label}: ${value || '—'}`).join('\n');

  const { error } = await resend.emails.send({
    from,
    to: to.split(',').map((s) => s.trim()).filter(Boolean),
    replyTo: inquiry.email,
    subject: `New inquiry: ${oneLine(inquiry.name)}${inquiry.scope ? ` (${oneLine(inquiry.scope)})` : ''}`,
    html,
    text,
  });

  if (error) {
    throw new Error(`Resend Error: ${error.message}`);
  }
}
