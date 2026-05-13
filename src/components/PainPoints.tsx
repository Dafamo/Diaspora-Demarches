import { AlertCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export function PainPoints() {
  const t = useTranslations("painPoints");
  const items = t.raw("items") as string[];

  return (
    <section className="section">
      <div className="container-tight">
        <h2 className="text-center font-display text-3xl font-bold text-primary md:text-4xl">
          {t("title")}
        </h2>
        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3">
          {items.map((item, i) => (
            <div key={i} className="card transition-transform hover:-translate-y-1">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
                <AlertCircle size={22} aria-hidden />
              </div>
              <p className="mt-5 text-base text-text-primary md:text-lg">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
