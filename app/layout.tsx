import type { Metadata } from "next";
import { DM_Sans, Fredoka } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";

import "./globals.css";

/**
 * Fredoka for display, DM Sans for everything else. Self-hosted by next/font,
 * so there is no render-blocking request to Google and no layout shift.
 */
const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Refpaw | Furry Ref Sheets, Icons & Stickers by Real Artists",
    template: "%s | Refpaw",
  },
  description:
    "Hand-drawn fursona ref sheets, icons and sticker packs from artists you can name. SFW only. No AI. Approve the sketch before color starts.",
  openGraph: {
    type: "website",
    siteName: "Refpaw",
    images: ["/branding/social-cover-1200x630.png"],
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicon-180.png",
  },
};

export const viewport = { themeColor: "#ffffff" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fredoka.variable} ${dmSans.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
