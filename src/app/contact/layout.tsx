import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us what you're building. We reply within one business day.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
