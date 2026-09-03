import {
  HeroVisual,
  PixelBadge,
  PixelButton,
  ProductCard,
  SectionHeading,
  SiteFooter,
  SiteHeader,
  StudioMarquee,
} from "@/components/site-shell";
import { siteCopy } from "@/lib/i18n";
import { getCurrentLocale } from "@/lib/i18n.server";
import { getProducts, studioEmail } from "@/lib/products";
import {
  brandLogoPath,
  getAbsoluteUrl,
  siteDescription,
  siteName,
} from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: siteName,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
};

export default async function Home() {
  const locale = await getCurrentLocale();
  const copy = siteCopy[locale];
  const products = getProducts(locale);
  const marqueeItems =
    locale === "ko"
      ? ["작은 툴", "Apple 중심", "불편은 덜고", "감성은 더하고"]
      : ["Small tools", "Apple-first", "Less friction", "More feeling"];
  const organizationStructuredData = {
    "@type": "Organization",
    name: siteName,
    url: getAbsoluteUrl("/"),
    logo: getAbsoluteUrl(brandLogoPath),
    image: getAbsoluteUrl(brandLogoPath),
  };
  const websiteStructuredData = {
    "@type": "WebSite",
    name: siteName,
    url: getAbsoluteUrl("/"),
    description: siteDescription,
  };
  const itemListStructuredData = {
    "@type": "ItemList",
    name: "Cogi Code Studio Products",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: getAbsoluteUrl(`/products/${product.slug}`),
      name: product.name,
    })),
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              organizationStructuredData,
              websiteStructuredData,
              itemListStructuredData,
            ],
          }).replace(/</g, "\\u003c"),
        }}
        type="application/ld+json"
      />
      <SiteHeader
        languageLabel={copy.header.languageLabel}
        locale={locale}
      />
      <main className="relative z-10 mx-auto flex w-full max-w-[86rem] flex-1 flex-col gap-24 px-4 pb-20 sm:px-6 lg:px-10">
        <section className="grid gap-10 pt-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(24rem,0.95fr)] lg:items-center">
          <div className="space-y-9">
            <div className="flex flex-wrap gap-2">
              <PixelBadge tone="warm">{copy.hero.badges[0]}</PixelBadge>
              <PixelBadge>{copy.hero.badges[1]}</PixelBadge>
              <PixelBadge>{copy.hero.badges[2]}</PixelBadge>
            </div>
            <div className="space-y-6">
              <p className="text-xs font-black uppercase tracking-[0.12em] text-accent-primary">
                {copy.hero.eyebrow}
              </p>
              <h1 className="max-w-5xl text-[clamp(4.25rem,12vw,10rem)] font-black leading-[0.82] text-text-primary">
                Cogi Code Studio
                <span className="mt-5 block max-w-4xl text-[clamp(2.25rem,5.4vw,5.8rem)] leading-[0.9] text-accent-primary">
                  {copy.hero.accent}
                </span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-text-secondary sm:text-xl sm:leading-9">
                {copy.hero.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <PixelButton href="#products">{copy.buttons.seeProducts}</PixelButton>
              <PixelButton href="#contact" tone="ghost">
                {copy.buttons.contact}
              </PixelButton>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {copy.highlights.map((highlight) => (
                <div key={highlight.title} className="pixel-card p-5">
                  <p className="text-[0.65rem] font-black uppercase tracking-[0.1em] text-accent-primary">
                    {highlight.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <HeroVisual locale={locale} products={products} />
        </section>

        <StudioMarquee
          items={marqueeItems}
        />

        <section id="products" className="space-y-8 scroll-mt-10">
          <SectionHeading
            eyebrow={copy.products.eyebrow}
            title={copy.products.title}
            description={copy.products.description}
          />
          <div className="product-rail -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
            {products.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
                viewDetailLabel={copy.buttons.viewDetail}
              />
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-10 space-y-5">
          <SectionHeading
            eyebrow={copy.contact.eyebrow}
            title={copy.contact.title}
            description={copy.contact.description}
          />
          <div className="flex flex-wrap gap-3">
            <PixelButton href={`mailto:${studioEmail}`}>
              {copy.buttons.sayHello}
            </PixelButton>
            <span className="pixel-button pixel-button--ghost">
              {copy.buttons.comingSoon}
            </span>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-text-secondary">
            {copy.contact.statusDescription}
          </p>
        </section>
      </main>
      <SiteFooter
        contactLabel={copy.buttons.contact}
        privacyLabel={copy.footer.privacy}
      />
    </>
  );
}
