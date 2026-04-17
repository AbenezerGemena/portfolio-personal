import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abenezer Gemena | Mobile App & Fullstack Developer",
  description:
    "Portfolio of Abenezer Gemena — a Mobile App & Fullstack Developer building scalable mobile and web applications with Flutter, Node.js, and modern web technologies.",
  keywords: [
    "Flutter",
    "Fullstack Developer",
    "Mobile Developer",
    "Node.js",
    "React",
    "Next.js",
    "Abenezer Gemena",
    "Ethiopia",
  ],
  authors: [{ name: "Abenezer Gemena" }],
  openGraph: {
    title: "Abenezer Gemena | Mobile App & Fullstack Developer",
    description:
      "Portfolio of Abenezer Gemena  building scalable mobile and web apps with Flutter and modern web technologies.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
