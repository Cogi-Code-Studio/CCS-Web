import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { siteCopy } from "@/lib/i18n";
import { getCurrentLocale } from "@/lib/i18n.server";

export default async function NotFound() {
  const locale = await getCurrentLocale();
  const copy = siteCopy[locale];

  return (
    <>
      <SiteHeader
        languageLabel={copy.header.languageLabel}
        locale={locale}
        nav={copy.header.nav}
      />
      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 items-center px-6 py-16 sm:px-8 lg:px-10">
        <section className="pixel-card mx-auto max-w-3xl space-y-6 p-8 text-center lg:p-12">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-accent-primary">
            404
          </p>
          <h1 className="text-4xl leading-tight text-text-primary sm:text-5xl">
            {copy.notFound.title}
          </h1>
          <p className="text-lg leading-8 text-text-secondary">
            {copy.notFound.description}
          </p>
          <div className="flex justify-center">
            <Link className="pixel-button" href="/">
              {copy.buttons.returnHome}
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter contactLabel={copy.buttons.contact} />
    </>
  );
}
