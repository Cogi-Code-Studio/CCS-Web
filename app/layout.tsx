import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { getCurrentLocale } from "@/lib/i18n.server";
import "./globals.css";

const monoFont = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cogi Code Studio",
    template: "%s | Cogi Code Studio",
  },
  description:
    "Tiny software for everyday friction, made with a little more feeling.",
  applicationName: "Cogi Code Studio",
  openGraph: {
    title: "Cogi Code Studio",
    description:
      "Tiny software for everyday friction, made with a little more feeling.",
    siteName: "Cogi Code Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cogi Code Studio",
    description:
      "Tiny software for everyday friction, made with a little more feeling.",
  },
  keywords: [
    "Cogi Code Studio",
    "indie software",
    "Apple apps",
    "Galaxy Pomodoro",
    "Capture In Picture",
    "retro pixel landing page",
  ],
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
