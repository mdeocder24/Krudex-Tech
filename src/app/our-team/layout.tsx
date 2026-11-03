import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team",
  description: "The senior engineers and designers behind Krudex Technologies.",
  alternates: { canonical: "/our-team" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
