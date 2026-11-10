import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website, Web App & SaaS Development Services",
  description:
    "Website development, web app development, SaaS product development, mobile apps, AI integration, UI/UX design, Google Ads and digital marketing from Krudex Global, Hyderabad.",
  keywords: [
    "website development services",
    "web app development services",
    "SaaS development services",
    "mobile app development services",
    "Google Ads services",
    "digital marketing services",
    "SEO services",
  ],
  alternates: { canonical: "/services" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
