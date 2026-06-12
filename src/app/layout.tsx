import type { Metadata } from "next";
import { Cormorant_Garamond, Italiana, Lora, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Preloader from "@/shared/components/Preloader";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  weight: "400",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Singh Saab | Fine Dining & Multi-Cuisine | Jamshedpur",
  description: "Experience premium multi-cuisine fine dining at The Singh Saab in Mango, Jamshedpur. Indulge in signature Chinese starters, warm soups, tandoori classics, and comforting Continental appetizers in a sophisticated, noir-inspired luxury setting.",
  keywords: ["The Singh Saab", "Singh Saab Jamshedpur", "Fine Dining Jamshedpur", "Multi-cuisine Restaurant Mango", "Best Chinese Food Jamshedpur", "Celebration restaurant Jamshedpur"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${italiana.variable} ${lora.variable} ${hanken.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#0F0F0F] text-[#F5F0E1] selection:bg-[#D4AF37] selection:text-[#0A0A0A]">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
