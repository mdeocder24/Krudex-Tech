import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Training",
  description: "Student training led by industry experts, offered by Krudex Global in collaboration with NovaSkill Hub.",
  alternates: { canonical: "/training" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
