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
import Head from "next/head";

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
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Tijapay" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body
        className={`${ibmPlexSans.variable} ${sourceSans3.variable} ${montserrat.variable} ${openSans.variable} antialiased relative overflow-x-hidden`}
      >
        <Navbar />
        <main className="min-h-screen relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
