import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const paths = [
  "",
  "/regularisation",
  "/comment-ca-marche",
  "/a-propos",
  "/contact",
  "/cgv",
  "/mentions-legales",
  "/confidentialite",
  "/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://diasporademarches.com";
  const lastModified = new Date();

  return routing.locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${base}/${locale}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    }))
  );
}
