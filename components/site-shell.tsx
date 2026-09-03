import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { LanguageToggle } from "@/components/language-toggle";
import { siteCopy, type Locale } from "@/lib/i18n";
import { studioEmail, type Product, type ProductSlug } from "@/lib/products";

type PixelBadgeProps = {
  children: ReactNode;
  tone?: "default" | "warm";
};

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  titleClassName?: string;
};

type PixelButtonProps = {
  href: string;
  children: ReactNode;
  tone?: "solid" | "ghost";
};

type SiteHeaderProps = {
  locale: Locale;
  languageLabel: string;
};

type BrandPanelProps = {
  badges: ReadonlyArray<string>;
  eyebrow: string;
  description: string;
};

type HeroVisualProps = {
  locale: Locale;
  products: ReadonlyArray<Product>;
};

type StudioMarqueeProps = {
  items: ReadonlyArray<string>;
};

type ProductCardProps = {
  product: Product;
  viewDetailLabel: string;
};

type ProductIconProps = {
  product: Product;
  size?: "card" | "hero" | "showcase";
  priority?: boolean;
};

function getProductCardTitleLines(name: string) {
  if (name.includes(" ")) {
    const words = name.split(" ");

    if (words.length <= 2) {
      return words;
    }

    return [words.slice(0, -1).join(" "), words.at(-1) ?? ""];
  }

  const tokens = name.match(/[A-Z][a-z0-9]*/g);

  if (!tokens || tokens.length < 2) {
    return [name];
  }

  if (tokens.length === 2) {
    return tokens;
  }

  return [tokens.slice(0, -1).join(""), tokens.at(-1) ?? ""];
}

const mockupCopy = {
  en: {
    capture: {
      finder: "Finder",
      selectedApp: "Selected App",
      terminal: "Terminal",
      onlyThisApp: "Only this app",
      armed: "Armed",
      macro: "Macro",
      steps: ["Pick app", "Start capture", "Repeat workflow"],
      cleanerDemos: "Cleaner demos",
      description: "Show the window that matters and skip the desktop noise.",
    },
  },
  ko: {
    capture: {
      finder: "Finder",
      selectedApp: "선택된 앱",
      terminal: "터미널",
      onlyThisApp: "이 앱만",
      armed: "준비 완료",
      macro: "매크로",
      steps: ["앱 선택", "캡처 시작", "워크플로 반복"],
      cleanerDemos: "더 깔끔한 데모",
      description: "중요한 창만 보여주고 데스크톱의 잡음을 덜어냅니다.",
    },
  },
} as const;

export function SiteHeader({ locale, languageLabel }: SiteHeaderProps) {
  const nav = siteCopy[locale].header.nav;
  const productsHref = "/#products" as Route;
  const contactHref = "/#contact" as Route;

  return (
    <header className="sticky top-0 z-30 mx-auto flex w-full max-w-[86rem] items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-10">
      <div className="flex min-w-0 items-center gap-2 rounded-full border border-border-muted bg-background/70 p-1.5 shadow-[0_1rem_3rem_rgba(0,0,0,0.24)] backdrop-blur-xl">
        <Link
          href="/"
          className="inline-flex shrink-0 items-center gap-3 rounded-full bg-surface-muted py-2 pl-2 pr-4"
        >
          <Image
            src="/brand/cogi-logo.png"
            alt="Cogi Code Studio logo"
            width={1254}
            height={1254}
            priority
            className="h-9 w-9 rounded-full object-cover"
          />
          <span className="hidden text-xs font-bold uppercase tracking-[0.12em] text-text-secondary sm:inline">
            Cogi Code Studio
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          <Link
            className="rounded-full px-4 py-3 text-xs font-bold uppercase tracking-[0.08em] text-text-secondary transition hover:bg-surface-muted hover:text-text-primary"
            href={productsHref}
          >
            {nav.products}
          </Link>
          <Link
            className="rounded-full px-4 py-3 text-xs font-bold uppercase tracking-[0.08em] text-text-secondary transition hover:bg-surface-muted hover:text-text-primary"
            href={contactHref}
          >
            {nav.contact}
          </Link>
        </nav>
      </div>
      <LanguageToggle
        label={languageLabel}
        locale={locale}
      />
    </header>
  );
}

export function SiteFooter({
  contactLabel = "Contact",
  privacyLabel = "Privacy",
}: {
  contactLabel?: string;
  privacyLabel?: string;
}) {
  const privacyHref = "/privacy" as Route;

  return (
    <footer className="mx-auto flex w-full max-w-[86rem] flex-col gap-5 px-4 pb-10 pt-8 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
      <p className="font-medium">© {new Date().getFullYear()} Cogi Code Studio.</p>
      <nav className="flex flex-wrap items-center gap-4">
        <Link className="transition hover:text-text-primary" href={privacyHref}>
          {privacyLabel}
        </Link>
        <a className="transition hover:text-text-primary" href={`mailto:${studioEmail}`}>
          {contactLabel}
        </a>
      </nav>
    </footer>
  );
}

export function PixelBadge({ children, tone = "default" }: PixelBadgeProps) {
  return (
    <span
      className={`pixel-chip ${
        tone === "warm"
          ? "border-accent-primary/45 bg-surface-accent-strong text-text-primary"
          : ""
      }`}
    >
      {children}
    </span>
  );
}

export function PixelButton({
  href,
  children,
  tone = "solid",
}: PixelButtonProps) {
  return (
    <a
      className={`group pixel-button ${tone === "ghost" ? "pixel-button--ghost" : ""}`}
      href={href}
    >
      <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
        {children}
      </span>
    </a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div className="space-y-4">
      <p className="text-xs font-black uppercase tracking-[0.12em] text-accent-primary">
        {eyebrow}
      </p>
      <h2
        className={`max-w-4xl text-4xl font-black leading-[0.95] text-text-primary sm:text-5xl lg:text-6xl ${
          titleClassName ?? ""
        }`}
      >
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export function BrandPanel({ badges, eyebrow, description }: BrandPanelProps) {
  return (
    <div className="pixel-card space-y-5 p-4 sm:p-6">
      <div className="flex flex-wrap gap-2">
        <PixelBadge tone="warm">{badges[0]}</PixelBadge>
        <PixelBadge>{badges[1]}</PixelBadge>
      </div>
      <div className="pixel-window relative overflow-hidden p-3">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,165,28,0.22),transparent_45%)]" />
        <div className="pixel-grid absolute inset-0 opacity-45" />
        <Image
          src="/brand/cogi-logo.png"
          alt="Cogi Code Studio logo"
          width={1254}
          height={1254}
          priority
          className="relative z-10 h-auto w-full rounded-[1rem]"
        />
      </div>
      <div className="space-y-3">
        <p className="font-display text-xs uppercase tracking-[0.24em] text-accent-primary">
          {eyebrow}
        </p>
        <p className="text-sm leading-7 text-text-secondary">{description}</p>
      </div>
    </div>
  );
}

export function HeroVisual({ locale, products }: HeroVisualProps) {
  const [primary, secondary] = products;
  const productCount = String(products.length).padStart(2, "0");
  const visualCopy =
    locale === "ko"
      ? {
          appleFirst: "Apple 중심",
          indieTools: "인디 툴",
          shippingProducts: "출시/공개 제품",
        }
      : {
          appleFirst: "Apple-first",
          indieTools: "Indie tools",
          shippingProducts:
            products.length === 1 ? "shipping product" : "shipping products",
        };

  return (
    <div className="relative min-h-[28rem] overflow-hidden rounded-[2.25rem] border border-border-muted bg-[radial-gradient(circle_at_50%_28%,rgba(244,165,28,0.24),transparent_34%),linear-gradient(160deg,rgba(255,220,152,0.12),rgba(247,244,239,0.03))] p-5 shadow-[0_2rem_5rem_rgba(0,0,0,0.32)] sm:min-h-[34rem] sm:p-7">
      <div className="hero-orbit absolute left-1/2 top-1/2 h-[23rem] w-[23rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-accent-primary/30 sm:h-[30rem] sm:w-[30rem]" />
      <div className="hero-orbit absolute left-1/2 top-1/2 h-[15rem] w-[15rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border-muted [animation-duration:58s] sm:h-[20rem] sm:w-[20rem]" />
      <div className="pixel-grid absolute inset-0 opacity-25" />

      <div className="relative z-10 flex h-full min-h-[25rem] flex-col justify-between sm:min-h-[30rem]">
        <div className="flex flex-wrap gap-2">
          <PixelBadge tone="warm">{visualCopy.appleFirst}</PixelBadge>
          <PixelBadge>{visualCopy.indieTools}</PixelBadge>
        </div>

        <div className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-96 sm:w-96">
          <div className="absolute h-44 w-44 rounded-full bg-accent-primary/20 blur-3xl" />
          {primary ? (
            <div className="hero-float absolute left-2 top-5 w-32 rotate-[-10deg] sm:left-3 sm:top-8 sm:w-40">
              <ProductIcon priority product={primary} size="hero" />
            </div>
          ) : null}
          {secondary ? (
            <div className="hero-float absolute bottom-5 right-2 w-28 rotate-[9deg] [animation-delay:800ms] sm:bottom-8 sm:right-4 sm:w-36">
              <ProductIcon priority product={secondary} size="hero" />
            </div>
          ) : null}
          <div className="rounded-[2rem] border border-border-muted bg-background/72 p-3 text-center shadow-[0_1rem_3rem_rgba(0,0,0,0.26)] backdrop-blur-xl">
            <Image
              src="/brand/cogi-logo.png"
              alt="Cogi Code Studio logo"
              width={1254}
              height={1254}
              priority
              className="mx-auto h-28 w-28 rounded-[1.5rem] object-cover sm:h-32 sm:w-32"
            />
            <p className="text-[0.65rem] font-black uppercase tracking-[0.12em] text-accent-primary">
              Cogi Code Studio
            </p>
            <p className="mt-2 text-3xl font-black leading-none text-text-primary">
              {productCount}
            </p>
            <p className="mt-1 text-xs font-semibold text-text-muted">
              {visualCopy.shippingProducts}
            </p>
          </div>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          {products.slice(0, 2).map((product) => (
            <Link
              key={product.slug}
              className="rounded-3xl border border-border-hairline bg-background/45 p-4 transition hover:border-accent-primary/35 hover:bg-background/70"
              href={`/products/${product.slug}` as Route}
            >
              <p className="text-xs font-black uppercase tracking-[0.1em] text-accent-primary">
                {product.stage}
              </p>
              <p className="mt-2 text-lg font-black leading-tight text-text-primary">
                {product.name}
              </p>
              <p className="mt-1 text-sm leading-6 text-text-secondary">
                {product.category}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function StudioMarquee({ items }: StudioMarqueeProps) {
  const marqueeItems = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-border-hairline py-5 text-text-primary">
      <div className="studio-marquee gap-4">
        {marqueeItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-4 text-3xl font-black uppercase leading-none tracking-[0.02em] text-text-primary/80 sm:text-5xl"
          >
            {item}
            <span className="h-3 w-3 rounded-full bg-accent-primary" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function ProductCard({
  product,
  viewDetailLabel,
}: ProductCardProps) {
  const productHref = `/products/${product.slug}` as Route;
  const titleLines = getProductCardTitleLines(product.name);

  return (
    <article className="pixel-card product-rail__item group flex h-full snap-start flex-col justify-between gap-6 p-5 sm:p-6">
      <div className="min-w-0 space-y-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            <PixelBadge tone="warm">{product.platform}</PixelBadge>
            <PixelBadge>{product.status}</PixelBadge>
          </div>
          <ProductIcon product={product} />
        </div>
        <div className="space-y-2">
          <p className="text-xs font-black uppercase tracking-[0.1em] text-accent-primary">
            {product.category}
          </p>
          <h3 className="text-3xl font-black leading-[0.98] text-text-primary sm:text-4xl">
            {titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h3>
          <p className="text-sm leading-7 text-text-secondary sm:text-base">
            {product.tagline}
          </p>
        </div>
      </div>
      <Link className="pixel-button w-full justify-center" href={productHref}>
        {viewDetailLabel}
      </Link>
    </article>
  );
}

export function ProductIcon({
  product,
  size = "card",
  priority = false,
}: ProductIconProps) {
  if (!product.iconSrc) {
    return null;
  }

  const frameClassName =
    size === "showcase"
      ? "w-full max-w-[20rem] p-4 sm:max-w-[24rem] sm:p-5 lg:max-w-[28rem]"
      : size === "hero"
        ? "w-full p-2.5"
        : "w-20 p-2 sm:w-24 sm:p-2.5";

  const imageSizes =
    size === "showcase"
      ? "(min-width: 1024px) 416px, (min-width: 640px) 384px, calc(100vw - 64px)"
      : size === "hero"
        ? "(min-width: 640px) 112px, 96px"
        : "80px";
  const imageClassName =
    size === "showcase"
      ? "rounded-[1.45rem] sm:rounded-[1.7rem]"
      : size === "hero"
        ? "rounded-[1rem]"
        : "rounded-[0.9rem] sm:rounded-[1rem]";

  return (
    <div
      className={`pixel-window relative shrink-0 overflow-hidden border-corgi-cream/15 bg-[radial-gradient(circle_at_top,rgba(244,165,28,0.24),transparent_55%),linear-gradient(180deg,#432117_0%,#21110d_100%)] ${frameClassName}`}
    >
      <div className="pixel-grid absolute inset-0 opacity-35" />
      <Image
        src={product.iconSrc}
        alt={product.iconAlt ?? `${product.name} icon`}
        width={1024}
        height={1024}
        priority={priority}
        sizes={imageSizes}
        className={`relative z-10 h-auto w-full ${imageClassName}`}
      />
    </div>
  );
}

export function ProductMockup({
  locale = "en",
  compact = false,
}: {
  locale?: Locale;
  slug: ProductSlug;
  compact?: boolean;
}) {
  return <CaptureMockup compact={compact} locale={locale} />;
}

function WindowShell({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="pixel-card w-full overflow-hidden">
      <div className="flex items-center justify-between border-b border-border-hairline bg-surface-muted px-4 py-3">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-corgi-orange" />
          <span className="h-3 w-3 rounded-full bg-corgi-gold" />
          <span className="h-3 w-3 rounded-full bg-corgi-cream/70" />
        </div>
        <p className="text-[0.65rem] font-black uppercase tracking-[0.12em] text-text-muted">
          {title}
        </p>
      </div>
      {children}
    </div>
  );
}

function CaptureMockup({
  compact,
  locale,
}: {
  compact: boolean;
  locale: Locale;
}) {
  const copy = mockupCopy[locale].capture;

  return (
    <WindowShell title="Capture In Picture">
      <div className="grid gap-4 p-4">
        <div className="pixel-window bg-panel-soft p-3">
          <div className="mb-3 flex flex-wrap gap-2">
            <span className="pixel-chip border-corgi-cream/22">{copy.finder}</span>
            <span className="pixel-chip border-corgi-gold/35 bg-corgi-gold/10 text-corgi-cream">
              {copy.selectedApp}
            </span>
            <span className="pixel-chip border-corgi-cream/22">{copy.terminal}</span>
          </div>
          <div
            className={`grid gap-3 ${
              compact ? "grid-cols-1" : "grid-cols-[1.1fr_0.9fr]"
            }`}
          >
            <div className="overflow-hidden rounded-[1.25rem] border border-corgi-cream/12 bg-[#111010] p-3">
              <div className="mb-3 flex items-center justify-between text-[0.65rem] uppercase tracking-[0.18em] text-corgi-cream/64">
                <span className="font-bold">{copy.onlyThisApp}</span>
                <span className="font-bold text-corgi-gold">{copy.armed}</span>
              </div>
              <div className="space-y-3">
                <div className="h-6 w-2/3 rounded-full bg-corgi-gold" />
                <div className="h-20 w-full rounded-2xl bg-[linear-gradient(135deg,rgba(255,241,218,0.15),transparent),linear-gradient(180deg,#2f2722_0%,#171717_100%)]" />
                <div className="h-3 w-5/6 rounded-full bg-corgi-cream/40" />
                <div className="h-3 w-3/5 rounded-full bg-corgi-cream/28" />
              </div>
            </div>
            <div className="space-y-3">
              <div className="pixel-window bg-surface-accent p-4">
                <p className="mb-2 text-[0.65rem] font-black uppercase tracking-[0.12em] text-accent-primary">
                  {copy.macro}
                </p>
                <div className="space-y-2 text-sm leading-7 text-text-secondary">
                  {copy.steps.map((step) => (
                    <p key={step}>{step}</p>
                  ))}
                </div>
              </div>
              <div className="pixel-window bg-panel-soft p-4">
                <p className="text-[0.65rem] font-black uppercase tracking-[0.12em] text-accent-primary">
                  {copy.cleanerDemos}
                </p>
                <p className="mt-2 text-sm leading-7 text-text-secondary">
                  {copy.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WindowShell>
  );
}
