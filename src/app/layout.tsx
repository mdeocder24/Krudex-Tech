import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import JsonLd from "@/components/JsonLd";
import WhatsAppFab from "@/components/ui/WhatsAppFab";
import AIAssistant from "@/components/ai/AIAssistant";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structured-data";


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
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  title: {
    default: "Krudex Global | SaaS Products, Digital Marketing & Student Training",
    template: "%s | Krudex Global",
  },
  description: "Krudex Global builds SaaS products, runs Google Ads and digital marketing, and trains students with industry experts in collaboration with NovaSkill Hub.",
  openGraph: {
    title: "Krudex Global | SaaS Products, Digital Marketing & Student Training",
    description: "We build SaaS products, run Google Ads and digital marketing, and train students with industry experts in collaboration with NovaSkill Hub.",
    siteName: SITE_NAME,
    type: "website",
    locale: "en_IN",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krudex Global | SaaS Products, Digital Marketing & Student Training",
    description: "We build SaaS products, run Google Ads and digital marketing, and train students with industry experts in collaboration with NovaSkill Hub.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Paint under the notch / Dynamic Island; content is padded back with env(safe-area-inset-*).
  viewportFit: "cover",
  // Android Chrome: the on-screen keyboard shrinks the layout like iOS does.
  interactiveWidget: "resizes-content",
  // Site is dark-only; matches the navbar background.
  themeColor: "#0A0908",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${plusJakartaSans.variable} ${dmSerifDisplay.variable} dark`}>
      <body suppressHydrationWarning className="min-h-svh bg-krudex-black text-krudex-text antialiased overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-krudex-accent focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-krudex-black"
        >
          Skip to content
        </a>
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />

        <SmoothScroll>
          <div id="main-content" className="relative">
            {children}
          </div>
        </SmoothScroll>
        <WhatsAppFab />
        <AIAssistant />
      </body>
    </html>
  );
}
