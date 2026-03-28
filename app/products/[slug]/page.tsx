import type { Metadata } from "next";
import type { Route } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  PixelBadge,
  PixelButton,
  ProductMockup,
  SectionHeading,
  SiteFooter,
  SiteHeader,
} from "@/components/site-shell";
import { siteCopy } from "@/lib/i18n";
import { getCurrentLocale } from "@/lib/i18n.server";
import {
  getProductBySlug,
  getProducts,
  getProductSlugs,
  studioEmail,
} from "@/lib/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug, "en");

  if (!product) {
    return {};
  }

  return {
    title: product.name,
    description: product.cardDescription,
    openGraph: {
      title: `${product.name} | Cogi Code Studio`,
      description: product.cardDescription,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Cogi Code Studio`,
      description: product.cardDescription,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const locale = await getCurrentLocale();
  const copy = siteCopy[locale];
  const product = getProductBySlug(slug, locale);
  const productsHref = "/#products" as Route;

  if (!product) {
    notFound();
  }

  const otherProducts = getProducts(locale).filter(
    (entry) => entry.slug !== product.slug,
  );

  return (
    <>
      <SiteHeader
        languageLabel={copy.header.languageLabel}
        locale={locale}
        nav={copy.header.nav}
      />
      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-6 pb-20 sm:px-8 lg:px-10">
        <Link className="pixel-chip w-fit" href={productsHref}>
          {copy.buttons.backToProducts}
        </Link>

        <section className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:items-start">
          <div className="space-y-7">
            <div className="flex flex-wrap gap-2">
              <PixelBadge tone="warm">{product.platform}</PixelBadge>
              <PixelBadge>{product.status}</PixelBadge>
              <PixelBadge>{product.stage}</PixelBadge>
            </div>
            <div className="space-y-5">
              <div className="space-y-3">
                <p className="font-pixel text-xl tracking-[0.08em] text-accent-primary sm:text-2xl">
                  {product.name}
                </p>
                <p className="text-xs uppercase tracking-[0.28em] text-text-secondary">
                  {product.category}
                </p>
              </div>
              <h1 className="font-display max-w-4xl text-5xl leading-[1.08] text-text-primary sm:text-6xl">
                {product.heroTitle}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-text-secondary">
                {product.overview}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="pixel-button pixel-button--disabled">
                {product.ctaLabel}
              </span>
              <PixelButton href={`mailto:${studioEmail}`} tone="ghost">
                {copy.buttons.sayHello}
              </PixelButton>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {product.statusNotes.map((note) => (
                <div key={note} className="pixel-card p-4">
                  <p className="font-display text-[0.65rem] uppercase tracking-[0.2em] text-accent-primary">
                    {copy.detail.statusCardLabel}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">
                    {note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <ProductMockup locale={locale} slug={product.slug} />
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[minmax(260px,0.85fr)_minmax(0,1.15fr)]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow={copy.detail.overviewEyebrow}
              title={product.name}
              description={product.cardDescription}
              titleClassName="font-pixel text-2xl leading-[1.25] tracking-[0.06em] sm:text-3xl"
            />
            <div className="pixel-card space-y-4 p-6">
              <p className="font-display text-[0.65rem] uppercase tracking-[0.2em] text-accent-primary">
                {copy.detail.quickFacts}
              </p>
              <div className="grid gap-3">
                <div className="pixel-window bg-surface-subtle p-4">
                  <p className="font-display text-[0.65rem] uppercase tracking-[0.18em] text-accent-primary">
                    {copy.detail.platform}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">
                    {product.platform}
                  </p>
                </div>
                <div className="pixel-window bg-surface-subtle p-4">
                  <p className="font-display text-[0.65rem] uppercase tracking-[0.18em] text-accent-primary">
                    {copy.detail.status}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">
                    {product.status}
                  </p>
                </div>
                <div className="pixel-window bg-surface-subtle p-4">
                  <p className="font-display text-[0.65rem] uppercase tracking-[0.18em] text-accent-primary">
                    {copy.detail.pricing}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">
                    {copy.detail.pricingDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {product.features.map((feature) => (
              <article key={feature.title} className="pixel-card p-6">
                <p className="font-display text-[0.65rem] uppercase tracking-[0.2em] text-accent-primary">
                  {copy.detail.feature}
                </p>
                <h2 className="mt-4 text-2xl leading-tight text-text-primary">
                  {feature.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-text-secondary">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.85fr)]">
          <div className="pixel-card p-6 lg:p-8">
            <SectionHeading
              eyebrow={copy.detail.statusSection.eyebrow}
              title={copy.detail.statusSection.title}
              description={copy.detail.statusSection.description}
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {product.statusNotes.map((note) => (
                <div key={note} className="pixel-window bg-surface-subtle p-4">
                  <p className="text-sm leading-7 text-text-secondary">{note}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="pixel-card p-6 lg:p-8">
            <SectionHeading
              eyebrow={copy.detail.contactSection.eyebrow}
              title={copy.detail.contactSection.title}
              description={product.contactPrompt}
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <PixelButton href={`mailto:${studioEmail}`}>
                {copy.buttons.emailCogi}
              </PixelButton>
              <span className="pixel-button pixel-button--ghost">
                {copy.buttons.appStoreSoon}
              </span>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow={copy.detail.relatedSection.eyebrow}
            title={copy.detail.relatedSection.title}
            description={copy.detail.relatedSection.description}
          />
          <div className="grid gap-6 md:grid-cols-2">
            {otherProducts.map((entry) => {
              const detailHref = `/products/${entry.slug}` as Route;

              return (
                <article key={entry.slug} className="pixel-card p-6">
                  <p className="font-display text-[0.65rem] uppercase tracking-[0.2em] text-accent-primary">
                    {entry.category}
                  </p>
                  <h2 className="mt-4 font-pixel text-2xl leading-[1.25] tracking-[0.06em] text-text-primary sm:text-3xl">
                    {entry.name}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-text-secondary">
                    {entry.cardDescription}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link className="pixel-button" href={detailHref}>
                      {copy.buttons.viewDetail}
                    </Link>
                    <span className="pixel-button pixel-button--ghost">
                      {entry.status}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
      <SiteFooter contactLabel={copy.buttons.contact} />
    </>
  );
}
