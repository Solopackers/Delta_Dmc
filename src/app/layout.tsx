import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Delta DMC - B2B Travel Agency",
  description: "Premium domestic and international tour packages for travel agencies",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex flex-col min-h-screen bg-[#f4f7f0]">
        <Header />
        <main className="flex-grow pt-16">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
        <WhatsAppButton phoneNumber="+916364375670" />
      </body>
    </html>
  );
}
