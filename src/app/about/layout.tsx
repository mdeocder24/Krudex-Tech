import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "An engineering firm in Hyderabad building SaaS products across software, AI, and design.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
