import { Check, X } from "lucide-react";
import { useTranslations } from "next-intl";

export function WhatWeDo() {
  const t = useTranslations("whatWeDo");
  const dos = t.raw("do") as string[];
  const donts = t.raw("dont") as string[];

  return (
    <section className="section bg-white">
      <div className="container-tight grid gap-6 md:grid-cols-2">
        <div className="card border-success/30">
          <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-primary">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-success/15 text-success">
              <Check size={18} strokeWidth={3} aria-hidden />
            </span>
            {t("doTitle")}
          </h3>
          <ul className="mt-5 space-y-3">
            {dos.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-text-primary">
                <Check
                  size={18}
                  strokeWidth={3}
                  className="mt-1 shrink-0 text-success"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card border-accent/30">
          <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-primary">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent/15 text-accent">
              <X size={18} strokeWidth={3} aria-hidden />
            </span>
            {t("dontTitle")}
          </h3>
          <ul className="mt-5 space-y-3">
            {donts.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-text-primary">
                <X
                  size={18}
                  strokeWidth={3}
                  className="mt-1 shrink-0 text-accent"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
