import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/custom/Footer";
import Navbar from "@/components/custom/Navbar";
import {
  IBM_Plex_Sans,
  Source_Sans_3,
  Montserrat,
  Open_Sans,
} from "next/font/google";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-source-sans-3",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], // Regular and Bold
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"], // Regular and Bold
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tijapay",
  description: "All payments consolidated in one place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.variable} ${sourceSans3.variable} ${montserrat.variable} ${openSans.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
