import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "An engineering firm in Hyderabad building SaaS products, running Google Ads and digital marketing, and training students with industry experts in collaboration with NovaSkill Hub.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
