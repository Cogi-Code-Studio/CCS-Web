import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { getCurrentLocale } from "@/lib/i18n.server";
import {
  getAbsoluteUrl,
  getSiteUrl,
  siteDescription,
  siteKeywords,
  siteName,
} from "@/lib/seo";
import "./globals.css";

const monoFont = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  alternates: {
    canonical: "/",
  },
  category: "technology",
  referrer: "origin-when-cross-origin",
  creator: siteName,
  publisher: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    siteName,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: getAbsoluteUrl("/opengraph-image.png"),
        width: 1536,
        height: 1024,
        alt: "Cogi Code Studio pixel logo on a dark navy background.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [getAbsoluteUrl("/twitter-image.png")],
  },
  keywords: [...siteKeywords],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getCurrentLocale();

  return (
    <html
      lang={locale}
      className={`${monoFont.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
