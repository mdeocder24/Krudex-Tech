import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import StudioBackground from "@/components/StudioBackground";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans-primary",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading-primary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Krudex Technologies | SaaS Engineering, Digital Marketing & Student Training",
    template: "%s | Krudex Technologies",
  },
  description: "Krudex Technologies designs and engineers production SaaS platforms, scales customer acquisition with digital marketing, and trains students with active industry practitioners in collaboration with NovaSkill Hub.",
  openGraph: {
    title: "Krudex Technologies | SaaS Engineering, Digital Marketing & Student Training",
    description: "We build high-scale SaaS products, run performance Google Ads, and train engineering students with active industry mentors.",
    siteName: "Krudex Technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${plusJakartaSans.variable} ${outfit.variable} dark`}>
      <body suppressHydrationWarning className="min-h-screen bg-[#080608] text-krudex-text antialiased overflow-x-hidden selection:bg-krudex-accent/30 selection:text-white">
        {/* Layered Architectural Studio Background */}
        <StudioBackground />

        {/* Subtle Top Scroll Progress */}
        <ScrollProgressBar />

        <SmoothScroll>
          <main className="relative z-10">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
