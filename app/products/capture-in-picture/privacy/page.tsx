import type { Metadata } from "next";
import Link from "next/link";
import {
  SectionHeading,
  SiteFooter,
  SiteHeader,
} from "@/components/site-shell";
import { siteCopy } from "@/lib/i18n";
import { getCurrentLocale } from "@/lib/i18n.server";
import {
  captureInPicturePrivacyPath,
  getCaptureInPicturePrivacy,
} from "@/lib/product-privacy";
import { getProductBySlug, studioEmail } from "@/lib/products";
import {
  defaultShareImageAlt,
  defaultShareImagePath,
  getAbsoluteUrl,
  getProductMetadataImage,
  getProductMetadataImageAlt,
  siteName,
} from "@/lib/seo";

const captureInPicture = getProductBySlug("capture-in-picture", "en");
const metadataImage = captureInPicture
  ? getProductMetadataImage(captureInPicture)
  : getAbsoluteUrl(defaultShareImagePath);
const metadataImageAlt = captureInPicture
  ? getProductMetadataImageAlt(captureInPicture)
  : defaultShareImageAlt;

export const metadata: Metadata = {
  title: "Capture In Picture Privacy Policy",
  description:
    "Public privacy policy for the Capture In Picture macOS app.",
  keywords: [
    "Capture In Picture privacy policy",
    "Capture In Picture",
    "macOS privacy policy",
    "window capture app privacy",
  ],
  alternates: {
    canonical: captureInPicturePrivacyPath,
  },
  openGraph: {
    title: `Capture In Picture Privacy Policy | ${siteName}`,
    description: "Public privacy policy for the Capture In Picture macOS app.",
    type: "website",
    url: getAbsoluteUrl(captureInPicturePrivacyPath),
    siteName,
    images: [
      {
        url: metadataImage,
        width: 1024,
        height: 1024,
        alt: metadataImageAlt,
      },
    ],
  },
  twitter: {
    card: captureInPicture?.iconSrc ? "summary" : "summary_large_image",
    title: `Capture In Picture Privacy Policy | ${siteName}`,
    description: "Public privacy policy for the Capture In Picture macOS app.",
    images: [metadataImage],
  },
  ...(captureInPicture?.iconSrc
    ? {
        icons: {
          icon: [
            {
              url: captureInPicture.iconSrc,
              type: "image/png",
              sizes: "1024x1024",
            },
          ],
          apple: [
            {
              url: captureInPicture.iconSrc,
              type: "image/png",
              sizes: "1024x1024",
            },
          ],
        },
      }
    : {}),
};

export default async function CaptureInPicturePrivacyPage() {
  const locale = await getCurrentLocale();
  const copy = siteCopy[locale];
  const policy = getCaptureInPicturePrivacy(locale);

  return (
    <>
      <SiteHeader
        languageLabel={copy.header.languageLabel}
        locale={locale}
      />
      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-6 pb-20 sm:px-8 lg:px-10">
        <Link className="pixel-chip w-fit" href="/products/capture-in-picture">
          {policy.breadcrumbLabel}
        </Link>

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:items-start">
          <div className="space-y-6">
            <SectionHeading
              eyebrow={policy.eyebrow}
              title={policy.title}
              description={policy.description}
              titleClassName="font-pixel leading-[1.15] tracking-[0.05em]"
            />
            <span className="pixel-chip w-fit">{policy.updatedAt}</span>
          </div>
          <div className="pixel-card p-6 lg:p-8">
            <p className="font-display text-[0.65rem] uppercase tracking-[0.2em] text-accent-primary">
              {policy.summaryTitle}
            </p>
            <p className="mt-4 text-base leading-8 text-text-secondary">
              {policy.summary}
            </p>
          </div>
        </section>

        <section className="grid gap-4">
          {policy.sections.map((section) => (
            <article key={section.title} className="pixel-card p-6 lg:p-8">
              <h2 className="font-pixel text-2xl leading-[1.2] tracking-[0.04em] text-text-primary sm:text-3xl">
                {section.title}
              </h2>
              <div className="mt-5 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="max-w-4xl text-base leading-8 text-text-secondary"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="pixel-card p-6 lg:p-8">
          <SectionHeading
            eyebrow={copy.contact.eyebrow}
            title={policy.contactTitle}
            description={policy.contactDescription}
            titleClassName="font-pixel leading-[1.15] tracking-[0.05em]"
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="pixel-button" href={`mailto:${studioEmail}`}>
              {copy.buttons.emailCogi}
            </a>
          </div>
        </section>
      </main>
      <SiteFooter
        contactLabel={copy.buttons.contact}
        privacyLabel={copy.footer.privacy}
      />
    </>
  );
}
