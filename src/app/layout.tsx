import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
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
    <html lang="en" className={`${inter.variable} ${playfair.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-krudex-black text-krudex-text antialiased selection:bg-krudex-green selection:text-krudex-black">
        {children}
      </body>
    </html>
  );
}
