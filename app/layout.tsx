import type React from "react";
import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import Icon from "@/app/icon.ico";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "The Secret Ballot",
  description: "Professional election services for Homeowner Associations",
  icons: {
    icon: Icon.src,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen pt-[60px]">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

import "./globals.css";
