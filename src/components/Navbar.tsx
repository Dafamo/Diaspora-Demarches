"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/cn";

const navItems = [
  { href: "/", key: "home" },
  { href: "/regularisation", key: "regularisation" },
  { href: "/comment-ca-marche", key: "howItWorks" },
  { href: "/a-propos", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const tCommon = useTranslations("common");
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container-tight flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-lg font-bold text-primary"
          aria-label="Diaspora Démarches — Accueil"
        >
          <span
            aria-hidden
            className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-white"
          >
            DD
          </span>
          <span className="hidden sm:inline">Diaspora Démarches</span>
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Navigation principale"
        >
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-border/40 hover:text-text-primary"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={tCommon("calcomUrl")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-primary !py-2.5 !text-sm !min-h-[44px]"
          >
            {t("diagnosticCta")}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-lg text-primary md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "md:hidden overflow-hidden border-t border-border/60 transition-[max-height] duration-300 ease-out",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        <nav className="container-tight flex flex-col gap-1 py-4" aria-label="Navigation mobile">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-text-primary hover:bg-border/40"
            >
              {t(item.key)}
            </Link>
          ))}
          <a
            href={tCommon("calcomUrl")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-2"
          >
            {t("diagnosticCta")}
          </a>
        </nav>
      </div>
    </header>
  );
}
