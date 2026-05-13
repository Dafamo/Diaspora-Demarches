"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/cn";

type Item = { q: string; a: string };

export function FAQ() {
  const t = useTranslations("faq");
  const items = t.raw("items") as Item[];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
            {t("title")}
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-border bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
                >
                  <span className="font-display text-base font-semibold text-primary md:text-lg">
                    {item.q}
                  </span>
                  <ChevronDown
                    aria-hidden
                    size={20}
                    className={cn(
                      "shrink-0 text-text-secondary transition-transform duration-300",
                      isOpen && "rotate-180 text-accent"
                    )}
                  />
                </button>
                <div
                  id={`faq-${i}`}
                  className={cn(
                    "grid overflow-hidden transition-all duration-300",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="min-h-0">
                    <p className="px-5 pb-5 text-text-secondary md:px-6 md:pb-6">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
