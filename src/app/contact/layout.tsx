import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Ask about SaaS products, Google Ads, digital marketing, or student training. We reply within one business day.",
  alternates: { canonical: "/contact" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      {children}
    </>
  );
}
