import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { LanguageToggle } from "@/components/language-toggle";
import type { Locale } from "@/lib/i18n";
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
  nav: {
    products: string;
    contact: string;
  };
  languageLabel: string;
};

type BrandPanelProps = {
  badges: ReadonlyArray<string>;
  eyebrow: string;
  description: string;
};

type ProductCardProps = {
  product: Product;
  viewDetailLabel: string;
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
    galaxy: {
      project: "project",
      subtask: "subtask",
      orbitQueue: "Orbit queue",
      session: "Session",
      sessionDescription: "Running inside the same project map.",
    },
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
    galaxy: {
      project: "프로젝트",
      subtask: "하위 태스크",
      orbitQueue: "궤도 큐",
      session: "세션",
      sessionDescription: "같은 프로젝트 맵 안에서 이어집니다.",
    },
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

export function SiteHeader({ locale, nav, languageLabel }: SiteHeaderProps) {
  const productsHref = "/#products" as Route;
  const contactHref = "/#contact" as Route;

  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 pb-4 pt-6 sm:px-8 lg:px-10">
      <Link href="/" className="pixel-card flex items-center gap-3 px-4 py-3">
        <span className="font-pixel text-sm uppercase tracking-[0.2em] text-accent-primary">
          CCS
        </span>
        <span className="text-xs uppercase tracking-[0.22em] text-text-secondary">
          Cogi Code Studio
        </span>
      </Link>
      <div className="flex flex-wrap items-center justify-end gap-2">
        <nav className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-text-secondary">
          <Link className="pixel-chip" href={productsHref}>
            {nav.products}
          </Link>
          <Link className="pixel-chip" href={contactHref}>
            {nav.contact}
          </Link>
        </nav>
        <LanguageToggle
          label={languageLabel}
          locale={locale}
        />
      </div>
    </header>
  );
}

export function SiteFooter({ contactLabel = "Contact" }: { contactLabel?: string }) {
  return (
    <footer className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 pb-8 pt-6 text-sm text-text-muted sm:px-8 lg:px-10">
      <p>© {new Date().getFullYear()} Cogi Code Studio.</p>
      <a className="hover:text-text-primary" href={`mailto:${studioEmail}`}>
        {contactLabel}
      </a>
    </footer>
  );
}

export function PixelBadge({ children, tone = "default" }: PixelBadgeProps) {
  return (
    <span
      className={`pixel-chip ${
        tone === "warm"
          ? "border-accent-secondary/50 bg-surface-accent-strong text-text-primary"
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
      className={`pixel-button ${tone === "ghost" ? "pixel-button--ghost" : ""}`}
      href={href}
    >
      {children}
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
    <div className="space-y-3">
      <p className="font-display text-xs uppercase tracking-[0.28em] text-accent-primary">
        {eyebrow}
      </p>
      <h2
        className={`max-w-3xl text-3xl leading-tight text-text-primary sm:text-4xl ${
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(232,154,71,0.18),_transparent_45%)]" />
        <div className="pixel-grid absolute inset-0 opacity-45" />
        <Image
          src="/ccs.png"
          alt="Cogi Code Studio logo"
          width={1536}
          height={1024}
          priority
          className="relative z-10 h-auto w-full"
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

export function ProductCard({
  product,
  viewDetailLabel,
}: ProductCardProps) {
  const productHref = `/products/${product.slug}` as Route;
  const titleLines = getProductCardTitleLines(product.name);

  return (
    <article className="pixel-card product-rail__item flex h-full snap-start flex-col justify-between gap-5 p-5">
      <div className="min-w-0 space-y-4">
        <div className="flex flex-wrap gap-2">
          <PixelBadge tone="warm">{product.platform}</PixelBadge>
          <PixelBadge>{product.status}</PixelBadge>
        </div>
        <div className="space-y-2">
          <p className="font-display text-xs uppercase tracking-[0.24em] text-accent-primary">
            {product.category}
          </p>
          <h3 className="font-pixel text-2xl leading-[1.1] tracking-[0.05em] text-text-primary sm:text-3xl">
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

export function ProductMockup({
  locale = "en",
  slug,
  compact = false,
}: {
  locale?: Locale;
  slug: ProductSlug;
  compact?: boolean;
}) {
  if (slug === "galaxy-pomodoro") {
    return <GalaxyMockup compact={compact} locale={locale} />;
  }

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
      <div className="flex items-center justify-between border-b-2 border-border-hairline bg-surface-muted px-4 py-3">
        <div className="flex gap-2">
          <span className="h-3 w-3 bg-corgi-orange" />
          <span className="h-3 w-3 bg-corgi-gold" />
          <span className="h-3 w-3 bg-corgi-cream/70" />
        </div>
        <p className="font-pixel text-[0.65rem] uppercase tracking-[0.16em] text-text-muted">
          {title}
        </p>
      </div>
      {children}
    </div>
  );
}

function GalaxyMockup({
  compact,
  locale,
}: {
  compact: boolean;
  locale: Locale;
}) {
  const copy = mockupCopy[locale].galaxy;

  return (
    <WindowShell title="Galaxy Pomodoro">
      <div className="grid gap-4 p-4">
        <div
          className={`relative overflow-hidden border-2 border-corgi-cream/12 bg-[radial-gradient(circle_at_top,_rgba(232,154,71,0.22),_transparent_42%),linear-gradient(180deg,#191525_0%,#23202f_100%)] ${
            compact ? "h-56" : "h-72"
          }`}
        >
          <div className="pixel-grid absolute inset-0 opacity-25" />
          <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 bg-corgi-gold shadow-[0_0_0_4px_rgba(255,241,218,0.12)]" />
          <div className="absolute left-1/2 top-1/2 h-[7.5rem] w-[7.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-corgi-cream/30 sm:h-36 sm:w-36" />
          <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-corgi-cream/18 sm:h-56 sm:w-56" />
          <div className="absolute left-[20%] top-[30%] h-5 w-5 bg-corgi-cream" />
          <div className="absolute right-[22%] top-[42%] h-4 w-4 bg-corgi-orange" />
          <div className="absolute bottom-[22%] left-[36%] h-3 w-3 bg-corgi-cream/80" />
          <div className="absolute right-[28%] top-[20%] font-display text-[0.6rem] uppercase tracking-[0.18em] text-corgi-cream/70">
            {copy.project}
          </div>
          <div className="absolute left-[14%] top-[20%] font-display text-[0.6rem] uppercase tracking-[0.18em] text-corgi-cream/60">
            {copy.subtask}
          </div>
          <div className="absolute bottom-[12%] right-[12%] flex items-center gap-2 bg-corgi-ink/72 px-3 py-2 font-display text-[0.65rem] uppercase tracking-[0.16em] text-corgi-gold">
            <span className="h-2 w-2 bg-corgi-gold" />
            <span className="font-pixel">25:00</span>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-[1.15fr_0.85fr]">
          <div className="pixel-window bg-panel-soft p-4">
            <p className="mb-3 font-display text-[0.65rem] uppercase tracking-[0.18em] text-accent-primary">
              {copy.orbitQueue}
            </p>
            <div className="space-y-2">
              <div className="h-3 w-5/6 bg-corgi-cream/80" />
              <div className="h-3 w-3/4 bg-corgi-cream/40" />
              <div className="h-3 w-2/3 bg-corgi-cream/25" />
            </div>
          </div>
          <div className="pixel-window bg-surface-accent p-4">
            <p className="mb-3 font-display text-[0.65rem] uppercase tracking-[0.18em] text-accent-primary">
              {copy.session}
            </p>
            <div className="font-pixel text-2xl text-text-primary">03</div>
            <p className="mt-2 text-sm leading-7 text-text-secondary">
              {copy.sessionDescription}
            </p>
          </div>
        </div>
      </div>
    </WindowShell>
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
            <div className="overflow-hidden border-2 border-corgi-cream/12 bg-[#111010] p-3">
              <div className="mb-3 flex items-center justify-between text-[0.65rem] uppercase tracking-[0.18em] text-corgi-cream/64">
                <span className="font-display">{copy.onlyThisApp}</span>
                <span className="font-display text-corgi-gold">{copy.armed}</span>
              </div>
              <div className="space-y-3">
                <div className="h-6 w-2/3 bg-corgi-gold" />
                <div className="h-20 w-full bg-[linear-gradient(135deg,rgba(255,241,218,0.15),transparent),linear-gradient(180deg,#2f2722_0%,#171717_100%)]" />
                <div className="h-3 w-5/6 bg-corgi-cream/40" />
                <div className="h-3 w-3/5 bg-corgi-cream/28" />
              </div>
            </div>
            <div className="space-y-3">
              <div className="pixel-window bg-surface-accent p-4">
                <p className="mb-2 font-display text-[0.65rem] uppercase tracking-[0.18em] text-accent-primary">
                  {copy.macro}
                </p>
                <div className="space-y-2 text-sm leading-7 text-text-secondary">
                  {copy.steps.map((step) => (
                    <p key={step}>{step}</p>
                  ))}
                </div>
              </div>
              <div className="pixel-window bg-panel-soft p-4">
                <p className="font-display text-[0.65rem] uppercase tracking-[0.18em] text-accent-primary">
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
