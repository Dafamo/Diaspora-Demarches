"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("hero");
  const tCommon = useTranslations("common");

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-[26rem] w-[26rem] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container-tight pt-16 pb-20 md:pt-24 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="eyebrow inline-flex items-center gap-2">
            <Sparkles size={14} aria-hidden /> Spécialiste régularisation
          </span>
          <h1 className="font-display text-4xl font-bold leading-tight text-primary sm:text-5xl md:text-6xl">
            {t("title")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-text-secondary md:text-lg">
            {t("subtitle")}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={tCommon("calcomUrl")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              {t("primary")} <ArrowRight size={18} aria-hidden />
            </a>
            <a href="#comment-ca-marche" className="btn-secondary w-full sm:w-auto">
              {t("secondary")}
            </a>
          </div>
          <p className="mt-6 inline-flex items-center gap-2 text-sm text-text-secondary">
            <ShieldCheck size={16} className="text-success" aria-hidden />
            Diagnostic gratuit · Sans engagement · 100% confidentiel
          </p>
        </motion.div>
      </div>
    </section>
  );
}
