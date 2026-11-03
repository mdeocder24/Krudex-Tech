import type { Triage } from '@/lib/ai/triage';

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

/** True when the team notification email is set up (Resend key + recipient). */
export function notifyConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_NOTIFY_EMAIL);
}

/**
 * Emails the team about a new inquiry through Resend's HTTP API.
 *
 * Optional: does nothing unless RESEND_API_KEY and CONTACT_NOTIFY_EMAIL are set.
 * CONTACT_FROM_EMAIL must be an address on a domain verified in Resend;
 * it defaults to Resend's shared test sender.
 */
export async function notifyNewInquiry(inquiry: InquiryNotice, triage: Triage | null = null): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_NOTIFY_EMAIL;
  if (!apiKey || !to) return;

  const from = process.env.CONTACT_FROM_EMAIL || 'Krudex Website <onboarding@resend.dev>';

  const rows: Array<[string, string | null]> = [
    ['Name', inquiry.name],
    ['Email', inquiry.email],
    ['Company', inquiry.company],
    ['Needs', inquiry.scope],
    ['Timeline', inquiry.timeline],
    ['Details', inquiry.details],
    ['Inquiry ID', inquiry.id],
  ];

  // AI triage (optional): summary, labels, next step and a draft reply.
  const triageRows: Array<[string, string | null]> = triage
    ? [
        ['AI summary', triage.summary],
        ['Category', triage.category],
        ['Urgency', triage.urgency],
        ['Fit', triage.fit],
        ['Next step', triage.nextStep],
        ['Draft reply', triage.draftReply],
      ]
    : [];

  const table = (list: Array<[string, string | null]>) =>
    `<table cellpadding="6">${list
    .map(
      ([label, value]) =>
        `<tr><td valign="top"><strong>${label}</strong></td><td style="white-space:pre-wrap">${escapeHtml(
          value || '—'
        )}</td></tr>`
    )
    .join('')}</table>`;

  const html = `<h2>New website inquiry</h2>${table(rows)}${
    triageRows.length ? `<h3>AI triage (check before relying on it)</h3>${table(triageRows)}` : ''
  }`;

  const text = [...rows, ...triageRows].map(([label, value]) => `${label}: ${value || '—'}`).join('\n');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: to.split(',').map((s) => s.trim()).filter(Boolean),
      reply_to: inquiry.email,
      subject: `${triage?.urgency === 'high' ? '[High] ' : ''}${triage?.fit === 'spam' ? '[Likely spam] ' : ''}New inquiry: ${oneLine(inquiry.name)}${inquiry.scope ? ` (${oneLine(inquiry.scope)})` : ''}`,
      html,
      text,
    }),
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Resend HTTP ${res.status}: ${await res.text()}`);
  }
}
