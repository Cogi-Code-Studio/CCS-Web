import type { MetadataRoute } from "next";
import { getProductSlugs } from "@/lib/products";
import { getAbsoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: getAbsoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...getProductSlugs().map((slug) => ({
      url: getAbsoluteUrl(`/products/${slug}`),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
