import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "GroZix – Transform Your Business with High-Converting Digital Solutions",
  description: "GroZix is a digital solutions agency specializing in UX/UI design, WordPress development, and AI-powered SEO strategies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`} suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
