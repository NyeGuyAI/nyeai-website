import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NyeAI | AI Solutions & Training for Small Business",
  description: "Expert AI training, automation, and implementation services for small and local businesses. Transform your business with practical AI solutions.",
  keywords: ["AI solutions", "AI training", "business automation", "AI consulting", "small business AI"],
  openGraph: {
    title: "NyeAI | AI Solutions & Training for Small Business",
    description: "Transform your business with expert AI training and automation services",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main className="pt-16 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
