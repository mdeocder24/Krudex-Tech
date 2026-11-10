import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import JsonLd from "@/components/JsonLd";
import WhatsAppFab from "@/components/ui/WhatsAppFab";
import { GoogleTagHead, GoogleTagNoscript } from "@/components/GoogleTagManager";
import QuickAnswers from "@/components/QuickAnswers";
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

const SITE_TITLE = "Krudex Global | Website, Web App & SaaS Development, Digital Marketing";
const SITE_DESCRIPTION =
  "Krudex Global builds websites, web apps, mobile apps and SaaS products, and runs Google Ads and digital marketing to bring customers. Hyderabad, India, working worldwide. Also student training in AI/ML and full stack development.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  title: {
    default: SITE_TITLE,
    template: "%s | Krudex Global",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "website development",
    "web app development",
    "SaaS development",
    "SaaS product development",
    "mobile app development",
    "custom software development",
    "web development company Hyderabad",
    "app development company India",
    "Next.js development",
    "AI integration",
    "UI UX design",
    "Google Ads agency",
    "digital marketing agency",
    "SEO services",
    "social media marketing",
    "full stack development training",
    "AI ML training Hyderabad",
    "Krudex Global",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_IN",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
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
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${plusJakartaSans.variable} ${dmSerifDisplay.variable} dark`}>
      <head>
        <GoogleTagHead />
      </head>
      <body suppressHydrationWarning className="min-h-svh bg-krudex-black text-krudex-text antialiased overflow-x-hidden">
        <GoogleTagNoscript />
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
        <QuickAnswers />
      </body>
    </html>
  );
}
