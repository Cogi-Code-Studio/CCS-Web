import {
  BrandPanel,
  PixelBadge,
  PixelButton,
  ProductCard,
  SectionHeading,
  SiteFooter,
  SiteHeader,
} from "@/components/site-shell";
import { siteCopy } from "@/lib/i18n";
import { getCurrentLocale } from "@/lib/i18n.server";
import { getProducts, studioEmail } from "@/lib/products";

export default async function Home() {
  const locale = await getCurrentLocale();
  const copy = siteCopy[locale];
  const products = getProducts(locale);

  return (
    <>
      <SiteHeader
        languageLabel={copy.header.languageLabel}
        locale={locale}
        nav={copy.header.nav}
      />
      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col gap-20 px-6 pb-20 sm:px-8 lg:px-10">
        <section className="grid gap-10 pt-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:items-start">
          <div className="space-y-8">
            <div className="flex flex-wrap gap-2">
              <PixelBadge tone="warm">{copy.hero.badges[0]}</PixelBadge>
              <PixelBadge>{copy.hero.badges[1]}</PixelBadge>
              <PixelBadge>{copy.hero.badges[2]}</PixelBadge>
            </div>
            <div className="space-y-5">
              <p className="font-display text-xs uppercase tracking-[0.28em] text-accent-primary">
                {copy.hero.eyebrow}
              </p>
              <h1 className="font-display max-w-4xl text-5xl leading-[1.08] text-text-primary sm:text-6xl">
                {copy.hero.title}
                <span className="mt-3 block text-accent-primary">
                  {copy.hero.accent}
                </span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-text-secondary">
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
                  <p className="font-display text-[0.65rem] uppercase tracking-[0.2em] text-accent-primary">
                    {highlight.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <BrandPanel
            badges={copy.brandPanel.badges}
            description={copy.brandPanel.description}
            eyebrow={copy.brandPanel.eyebrow}
          />
        </section>

        <section id="products" className="space-y-8 scroll-mt-10">
          <SectionHeading
            eyebrow={copy.products.eyebrow}
            title={copy.products.title}
            description={copy.products.description}
            titleClassName="font-pixel leading-[1.15] tracking-[0.05em]"
          />
          <div className="product-rail -mx-6 px-6 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0">
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
            titleClassName="font-pixel leading-[1.15] tracking-[0.05em]"
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
      <SiteFooter contactLabel={copy.buttons.contact} />
    </>
  );
}
