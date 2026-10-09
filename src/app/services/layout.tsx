import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "SaaS and web platforms, mobile apps, AI integration, and UI/UX design — what Krudex builds for you.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
