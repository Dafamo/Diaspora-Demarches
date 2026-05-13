import { Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border bg-white">
      <div className="container-tight py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 font-display text-lg font-bold text-primary">
              <span
                aria-hidden
                className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-white"
              >
                DD
              </span>
              <span>Diaspora Démarches</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-text-secondary">
              {t("tagline")}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
              {t("columns.brand")}
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary">
                  {t("links.home")}
                </Link>
              </li>
              <li>
                <Link href="/comment-ca-marche" className="hover:text-primary">
                  {t("links.howItWorks")}
                </Link>
              </li>
              <li>
                <Link href="/regularisation" className="hover:text-primary">
                  {t("links.regularisation")}
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:text-primary">
                  {t("links.about")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
              {t("columns.service")}
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:text-primary">
                  {t("links.diagnostic")}
                </Link>
              </li>
              <li>
                <Link href="/regularisation" className="hover:text-primary">
                  {t("links.pricing")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  {t("links.contactPage")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
              {t("columns.legal")}
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/cgv" className="hover:text-primary">
                  {t("links.cgv")}
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-primary">
                  {t("links.mentions")}
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="hover:text-primary">
                  {t("links.privacy")}
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-primary">
                  {t("links.cookies")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 grid gap-4 border-t border-border pt-8 sm:flex sm:flex-wrap sm:items-center sm:gap-6">
          <a
            href={`mailto:${t("email")}`}
            className="inline-flex items-center gap-2 text-sm text-text-primary hover:text-primary"
          >
            <Mail size={16} aria-hidden /> {t("email")}
          </a>
          <a
            href={`tel:+33${t("phone").replace(/\s/g, "").slice(1)}`}
            className="inline-flex items-center gap-2 text-sm text-text-primary hover:text-primary"
          >
            <Phone size={16} aria-hidden /> {t("phone")}
          </a>
        </div>

        <p className="mt-8 text-xs leading-relaxed text-text-secondary">
          {t("legalMention")}
        </p>
        <p className="mt-4 text-xs text-text-secondary">{t("copyright")}</p>
      </div>
    </footer>
  );
}
