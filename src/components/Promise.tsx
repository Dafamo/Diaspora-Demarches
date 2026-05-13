"use client";

import { motion } from "framer-motion";
import { Quote, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";

export function Promise() {
  const t = useTranslations("promise");
  return (
    <section className="section">
      <div className="container-tight grid gap-6 md:grid-cols-2">
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="card relative bg-primary text-white"
        >
          <Quote
            aria-hidden
            className="absolute right-6 top-6 text-white/20"
            size={48}
          />
          <span className="eyebrow !text-accent-hover">{t("title")}</span>
          <p className="mt-3 font-display text-xl leading-relaxed md:text-2xl">
            &ldquo;{t("quote")}&rdquo;
          </p>
        </motion.blockquote>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="card flex flex-col"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-success/15 text-success">
              <ShieldCheck size={22} aria-hidden />
            </span>
            <h3 className="font-display text-xl font-semibold text-primary">
              {t("guaranteeTitle")}
            </h3>
          </div>
          <p className="mt-5 text-text-primary md:text-lg">{t("guarantee")}</p>
        </motion.div>
      </div>
    </section>
  );
}
