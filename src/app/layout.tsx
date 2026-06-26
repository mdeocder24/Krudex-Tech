import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import GlobalCanvas from "@/components/GlobalCanvas";

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
  title: "Krudex Technologies | We Build Digital Products That Perform",
  description: "Krudex Technologies delivers full-stack engineering, AI integration, and precision design for startups and enterprises that need results, not promises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${dmSerifDisplay.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-transparent text-krudex-text antialiased selection:bg-krudex-blue selection:text-krudex-black cursor-none">
        <CustomCursor />
        <GlobalCanvas />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
