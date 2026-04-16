import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Sidebar from "./components/Sidebar"; 
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Web Solutions & Digital Marketing Agency",
    template: "%s | Web Solutions & Digital Marketing",
  },
  description:
    "We provide Website Development, SEO Services, Google Ads, Social Media Marketing, GMB Optimization, WhatsApp API & complete digital growth solutions.",
  keywords: [
    "SEO services",
    "digital marketing agency",
    "website development",
    "google ads management",
    "social media marketing",
    "GMB optimization",
    "WhatsApp API",
    "content creation",
  ],
  authors: [{ name: "Web Solutions Agency" }],
  openGraph: {
    title: "Web Solutions & Digital Marketing Agency",
    description: "Grow your business with SEO, Ads, and Website Development services.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className="bg-[#0b1220] text-white">

  <Sidebar />

  {/* THIS FIXES NAV HEIGHT SPACE */}
  <div className=" min-h-screen flex flex-col">

    <main className="flex-1 w-full">
      {children}
    </main>

    <Footer />

  </div>

</body>
    </html>
  );
}