import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "SaaS and web platforms, mobile apps, AI integration, UI/UX design, Google Ads, and digital marketing — what Krudex builds and grows for you.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
