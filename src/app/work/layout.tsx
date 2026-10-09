import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected products Krudex has shipped, with the outcomes they delivered.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
