import type { Metadata } from "next";
import Link from "next/link";
import {
  SectionHeading,
  SiteFooter,
  SiteHeader,
} from "@/components/site-shell";
import { siteCopy } from "@/lib/i18n";
import { getCurrentLocale } from "@/lib/i18n.server";
import { studioEmail } from "@/lib/products";
import { getAbsoluteUrl, siteName } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Cogi Code Studio currently handles personal information on the website and through direct contact.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: `Privacy Policy | ${siteName}`,
    description:
      "How Cogi Code Studio currently handles personal information on the website and through direct contact.",
    type: "website",
    url: getAbsoluteUrl("/privacy"),
    siteName,
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
    title: `Privacy Policy | ${siteName}`,
    description:
      "How Cogi Code Studio currently handles personal information on the website and through direct contact.",
    images: [getAbsoluteUrl("/twitter-image.png")],
  },
};

export default async function PrivacyPage() {
  const locale = await getCurrentLocale();
  const copy = siteCopy[locale];

  return (
    <>
      <SiteHeader
        languageLabel={copy.header.languageLabel}
        locale={locale}
        nav={copy.header.nav}
      />
      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-6 pb-20 sm:px-8 lg:px-10">
        <Link className="pixel-chip w-fit" href="/">
          {copy.buttons.returnHome}
        </Link>

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:items-start">
          <div className="space-y-6">
            <SectionHeading
              eyebrow={copy.privacy.eyebrow}
              title={copy.privacy.title}
              description={copy.privacy.description}
              titleClassName="font-pixel leading-[1.15] tracking-[0.05em]"
            />
            <span className="pixel-chip w-fit">{copy.privacy.updatedAt}</span>
          </div>
          <div className="pixel-card p-6 lg:p-8">
            <p className="font-display text-[0.65rem] uppercase tracking-[0.2em] text-accent-primary">
              {copy.privacy.summaryTitle}
            </p>
            <p className="mt-4 text-base leading-8 text-text-secondary">
              {copy.privacy.summary}
            </p>
          </div>
        </section>

        <section className="grid gap-4">
          {copy.privacy.sections.map((section) => (
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
            title={copy.privacy.contactTitle}
            description={copy.privacy.contactDescription}
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
