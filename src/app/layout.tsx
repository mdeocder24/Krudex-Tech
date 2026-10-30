import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";


const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans-primary",
  subsets: ["latin"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-serif-primary",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Krudex Technologies | SaaS Products, Digital Marketing & Student Training",
    template: "%s | Krudex Technologies",
  },
  description: "Krudex Technologies builds SaaS products, runs Google Ads and digital marketing, and trains students with industry experts in collaboration with NovaSkill Hub.",
  openGraph: {
    title: "Krudex Technologies | SaaS Products, Digital Marketing & Student Training",
    description: "We build SaaS products, run Google Ads and digital marketing, and train students with industry experts in collaboration with NovaSkill Hub.",
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
    <html lang="en" suppressHydrationWarning className={`${plusJakartaSans.variable} ${dmSerifDisplay.variable} dark`}>
      <body suppressHydrationWarning className="min-h-screen bg-krudex-black text-krudex-text antialiased overflow-x-hidden">

        <SmoothScroll>
          <main className="relative">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
