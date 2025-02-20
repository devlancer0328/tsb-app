import { Inter, Merriweather } from "next/font/google";
import { LoadingProvider } from "@/components/ui/loading-context";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
});

export const metadata = {
  title: "The Secret Ballot",
  description: "Professional Election Services for Homeowner Associations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="font-sans">
        <LoadingProvider>
          <Header />
          <main className="min-h-screen pt-[60px]">{children}</main>
          <Footer />
          <ScrollToTop />
          <Toaster />
        </LoadingProvider>
      </body>
    </html>
  );
}
