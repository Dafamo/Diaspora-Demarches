"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-[26rem] w-[26rem] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container-tight grid items-center gap-10 pt-14 pb-16 md:pt-20 md:pb-24 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <span className="eyebrow inline-flex items-center gap-2">
            <Sparkles size={14} aria-hidden /> Spécialiste régularisation
          </span>
          <h1 className="font-display text-4xl font-bold leading-tight text-primary sm:text-5xl md:text-6xl">
            {t("title")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-text-secondary md:text-lg lg:mx-0">
            {t("subtitle")}
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start">
            <Link href="/quiz" className="btn-primary w-full sm:w-auto">
              Faire le test d&apos;éligibilité gratuit
              <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
          <p className="mt-6 inline-flex items-center gap-2 text-sm text-text-secondary">
            <ShieldCheck size={16} className="text-success" aria-hidden />
            Gratuit · 7 minutes · Sans engagement · 100% confidentiel
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80"
              alt="Personne signant des documents administratifs"
              fill
              priority
              sizes="(min-width: 1024px) 480px, (min-width: 640px) 80vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-border bg-white p-4 shadow-soft sm:block">
            <p className="text-xs uppercase tracking-wider text-text-secondary">
              Délai annoncé
            </p>
            <p className="font-display text-2xl font-bold text-primary">14 jours</p>
          </div>
          <div className="absolute -top-4 -right-4 hidden rounded-2xl border border-border bg-white p-4 shadow-soft sm:block">
            <p className="text-xs uppercase tracking-wider text-text-secondary">
              Programme
            </p>
            <p className="font-display text-2xl font-bold text-accent">697 €</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
