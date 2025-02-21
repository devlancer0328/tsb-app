import { Inter, Merriweather } from "next/font/google";
import dynamic from "next/dynamic";
import { LoadingProvider } from "@/components/ui/loading-context";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const Header = dynamic(
  () => import("@/components/layout/header").then((mod) => mod.Header),
  {
    ssr: false,
  }
);

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
