import { Check, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

export function Solution() {
  const t = useTranslations("solution");
  const tCommon = useTranslations("common");
  const benefits = t.raw("benefits") as string[];

  return (
    <section id="programme" className="section bg-white">
      <div className="container-tight">
        <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-background p-7 shadow-soft md:p-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="eyebrow">Programme phare</span>
              <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
                {t("title")}
              </h2>
              <p className="mt-3 inline-flex items-center gap-2 text-text-secondary">
                <Clock size={16} aria-hidden /> {t("subtitle")}
              </p>
            </div>
            <div className="rounded-2xl bg-accent px-6 py-3 font-display text-2xl font-bold text-white shadow-lg shadow-accent/30">
              {t("price")}
            </div>
          </div>

          <div className="mt-8 border-t border-border pt-8">
            <h3 className="font-display text-lg font-semibold text-text-primary">
              {t("benefitsTitle")}
            </h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-text-primary">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-success/15 text-success">
                    <Check size={14} strokeWidth={3} aria-hidden />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-text-secondary">
              Paiement unique · Livraison digitale · 3 révisions incluses
            </p>
            <a
              href={tCommon("calcomUrl")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {tCommon("ctaPrimary")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
