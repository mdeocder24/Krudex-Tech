/**
 * Sample document for the "Try it" AI demo on /services. Fictional company,
 * clearly labelled as a sample in the UI, so nothing here is a real policy.
 */
export const DEMO_DOCUMENT_TITLE = 'Northwind Cloud: Plans, Billing & Support (sample)';

export const DEMO_DOCUMENT = `Northwind Cloud - Plans, Billing & Support Policy (SAMPLE DOCUMENT)

1. Plans
Northwind Cloud offers three plans. Starter is for individuals and includes 1 project, 10 GB of storage and community support. Team includes up to 10 projects, 200 GB of storage, role-based access control and email support. Enterprise includes unlimited projects, 2 TB of storage, single sign-on (SSO), audit logs and a dedicated account manager.

2. Billing
Plans are billed monthly or annually. Annual billing is discounted by two months compared with paying monthly. Invoices are issued on the first day of each billing period and are payable within 14 days. Customers can upgrade at any time; the price difference is pro-rated for the rest of the billing period. Downgrades take effect at the start of the next billing period.

3. Refunds
Monthly plans are not refundable once a billing period has started. Annual plans can be refunded in full within 30 days of purchase. After 30 days, annual plans are refunded pro-rata for whole unused months, minus any discount already applied.

4. Support
Community support is available to all customers through the public forum. Team customers receive email support with a first response within one business day. Enterprise customers receive priority support with a first response within 4 hours, 24 hours a day, 7 days a week, plus a named account manager.

5. Uptime
Northwind Cloud targets 99.9% monthly uptime for Team and Enterprise plans. If uptime falls below 99.9% in a calendar month, Enterprise customers can claim a service credit of 10% of that month's fee. Claims must be made within 30 days of the end of the affected month.

6. Data and security
All data is encrypted in transit and at rest. Customers can export their data at any time in JSON or CSV format. When an account is closed, data is retained for 30 days to allow recovery, and is then permanently deleted.`;

export const DEMO_SUGGESTIONS = [
  'Can I get a refund on an annual plan?',
  'How fast does Enterprise support respond?',
  'What happens to my data if I close my account?',
] as const;
