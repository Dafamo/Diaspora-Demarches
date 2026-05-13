import {
  CalendarCheck,
  ClipboardList,
  CreditCard,
  FileUp,
  PackageCheck,
} from "lucide-react";
import { useTranslations } from "next-intl";

const icons = [CalendarCheck, ClipboardList, CreditCard, FileUp, PackageCheck];

type Step = { title: string; description: string };

export function ProcessSteps() {
  const t = useTranslations("process");
  const steps = t.raw("steps") as Step[];

  return (
    <section id="comment-ca-marche" className="section">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Le parcours</span>
          <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-text-secondary">{t("subtitle")}</p>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => {
            const Icon = icons[i] ?? CalendarCheck;
            return (
              <li
                key={i}
                className="card relative flex h-full flex-col"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-white font-display font-semibold">
                    {i + 1}
                  </span>
                  <Icon className="text-accent" size={22} aria-hidden />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
