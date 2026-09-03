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
  "Capture In Picture",
  "indie Apple software",
] as const;
export const brandLogoPath = "/brand/cogi-logo.png";
export const defaultShareImagePath = brandLogoPath;
export const defaultShareImageAlt =
  "Cogi Code Studio corgi logo on a warm rust background.";

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

export function getProductMetadataImage(product: Product) {
  return getAbsoluteUrl(product.iconSrc ?? defaultShareImagePath);
}

export function getProductMetadataImageAlt(product: Product) {
  return product.iconAlt ?? defaultShareImageAlt;
}

export function getProductCategory() {
  return "UtilitiesApplication";
}

export function getProductStructuredData(product: Product) {
  const downloadUrl = product.heroActions?.find((action) =>
    /^https?:\/\//.test(action.href),
  )?.href;
  const sameAs = [...(product.heroActions ?? []), ...(product.contactActions ?? [])]
    .map((action) => action.href)
    .filter((href) => /^https?:\/\//.test(href));

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    applicationCategory: getProductCategory(),
    operatingSystem: product.platform,
    description: product.cardDescription,
    url: getAbsoluteUrl(getProductPath(product.slug)),
    image: getProductMetadataImage(product),
    ...(downloadUrl ? { downloadUrl } : {}),
    ...(sameAs.length ? { sameAs } : {}),
    ...(/free|무료/i.test(product.pricingNote ?? "")
      ? { isAccessibleForFree: true }
      : {}),
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: getSiteUrl(),
    },
  };
}
