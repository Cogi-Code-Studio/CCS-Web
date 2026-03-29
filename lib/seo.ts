import type { Product, ProductSlug } from "@/lib/products";

export const siteName = "Cogi Code Studio";
export const siteDescription =
  "Cogi Code Studio makes convenient and delightful software that removes everyday friction with personality, warmth, and a little play.";
export const siteKeywords = [
  "Cogi Code Studio",
  "indie software studio",
  "Apple apps",
  "macOS apps",
  "productivity app",
  "Galaxy Pomodoro",
  "Capture In Picture",
  "pixel art landing page",
] as const;

export function getSiteUrl() {
  const explicitUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const vercelUrl = process.env.VERCEL_URL;

  if (explicitUrl) {
    return explicitUrl;
  }

  if (vercelProductionUrl) {
    return `https://${vercelProductionUrl}`;
  }

  if (vercelUrl) {
    return `https://${vercelUrl}`;
  }

  return "http://localhost:3000";
}

export function getAbsoluteUrl(path = "/") {
  return new URL(path, getSiteUrl()).toString();
}

export function getProductPath(slug: ProductSlug) {
  return `/products/${slug}`;
}

export function getProductCategory(product: Product) {
  if (product.slug === "galaxy-pomodoro") {
    return "ProductivityApplication";
  }

  return "UtilitiesApplication";
}

export function getProductStructuredData(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    applicationCategory: getProductCategory(product),
    operatingSystem: product.platform,
    description: product.cardDescription,
    url: getAbsoluteUrl(getProductPath(product.slug)),
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: getSiteUrl(),
    },
  };
}
