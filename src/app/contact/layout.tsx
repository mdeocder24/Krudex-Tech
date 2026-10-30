import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Ask about SaaS products, Google Ads, digital marketing, or student training. We reply within one business day.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
