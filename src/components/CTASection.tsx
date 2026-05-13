import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function CTASection() {
  const t = useTranslations("ctaFinal");
  const tCommon = useTranslations("common");

  return (
    <section className="section">
      <div className="container-tight">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-8 text-center text-white md:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              {t("title")}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/85 md:text-lg">
              {t("subtitle")}
            </p>
            <a
              href={tCommon("calcomUrl")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-7"
            >
              {t("button")} <ArrowRight size={18} aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
