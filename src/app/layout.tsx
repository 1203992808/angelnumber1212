import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "1212 Angel Number - Explore Its Divine Guidance in Your Life",
  description: "Discover the deeper meaning of angel number 1212 in love, career, wealth, and spiritual life. Get personalized readings and guidance.",
  keywords: "1212, angel number, numerology, spiritual growth, personal development, love relationships, career development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="flex flex-col min-h-screen font-sans bg-gradient-to-b from-dark-950 to-primary-950">
        <div className="fixed inset-0 bg-[url('/noise-pattern.png')] opacity-[0.03] pointer-events-none z-0"></div>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
