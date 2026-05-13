"use client";

import { motion } from "framer-motion";
import { AlertCircle, FileWarning, Lock } from "lucide-react";
import { useTranslations } from "next-intl";

const icons = [AlertCircle, FileWarning, Lock];

export function PainPoints() {
  const t = useTranslations("painPoints");
  const items = t.raw("items") as string[];

  return (
    <section className="section">
      <div className="container-tight">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center font-display text-3xl font-bold text-primary md:text-4xl"
        >
          {t("title")}
        </motion.h2>
        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3">
          {items.map((item, i) => {
            const Icon = icons[i] ?? AlertCircle;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card transition-transform hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Icon size={22} aria-hidden />
                </div>
                <p className="mt-5 text-base text-text-primary md:text-lg">{item}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
