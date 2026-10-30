import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Training",
  description: "Student training led by industry experts, offered by Krudex Technologies in collaboration with NovaSkill Hub.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
