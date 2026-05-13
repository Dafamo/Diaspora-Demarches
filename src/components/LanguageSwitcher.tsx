"use client";

// Composant créé mais NON affiché pour l'instant.
// Active-le dans la Navbar quand les autres locales seront prêtes.

import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter, routing } from "@/i18n/routing";
import type { Locale } from "@/i18n/routing";

const labels: Record<Locale, string> = {
  fr: "France",
  be: "Belgique",
  ch: "Suisse",
  lu: "Luxembourg",
  ca: "Canada",
};

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  return (
    <label className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-3 py-2 text-sm">
      <Globe size={16} aria-hidden className="text-text-secondary" />
      <span className="sr-only">Choisir un pays</span>
      <select
        value={locale}
        onChange={(e) => {
          router.replace(pathname, { locale: e.target.value as Locale });
        }}
        className="bg-transparent text-text-primary outline-none"
      >
        {routing.locales.map((l) => (
          <option key={l} value={l}>
            {labels[l]}
          </option>
        ))}
      </select>
    </label>
  );
}
