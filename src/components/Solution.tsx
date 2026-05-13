"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, Clock } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function Solution() {
  const t = useTranslations("solution");
  const benefits = t.raw("benefits") as string[];

  return (
    <section id="programme" className="section bg-white">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto grid max-w-5xl gap-8 rounded-3xl border border-border bg-background p-7 shadow-soft md:p-10 lg:grid-cols-[1fr_1.2fr] lg:items-center"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80"
              alt="Documents administratifs et stylo prêts à être signés"
              fill
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-white/95 px-4 py-3 shadow-soft backdrop-blur">
              <div>
                <p className="text-xs uppercase tracking-wider text-text-secondary">
                  Programme phare
                </p>
                <p className="font-display text-lg font-semibold text-primary">
                  Régularisation
                </p>
              </div>
              <span className="rounded-lg bg-accent px-3 py-1.5 font-display text-base font-bold text-white">
                {t("price")}
              </span>
            </div>
          </div>

          <div>
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
            </div>

            <div className="mt-6 border-t border-border pt-6">
              <h3 className="font-display text-lg font-semibold text-text-primary">
                {t("benefitsTitle")}
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {benefits.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.35, delay: i * 0.04 }}
                    className="flex items-start gap-3 text-text-primary"
                  >
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-success/15 text-success">
                      <Check size={14} strokeWidth={3} aria-hidden />
                    </span>
                    <span>{b}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="mt-7 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-text-secondary">
                Paiement unique · Livraison digitale · 3 révisions incluses
              </p>
              <Link href="/quiz" className="btn-primary">
                Faire le test d&apos;éligibilité gratuit
                <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
