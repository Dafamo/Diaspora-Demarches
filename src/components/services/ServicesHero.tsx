"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "@/i18n/routing";

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 -left-20 h-[26rem] w-[26rem] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[26rem] w-[26rem] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container-tight grid items-center gap-10 pt-14 pb-12 md:pt-20 md:pb-16 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <span className="eyebrow inline-flex items-center gap-2">
            <Sparkles size={14} aria-hidden /> 5 prestations · tarifs fixes
          </span>
          <h1 className="font-display text-4xl font-bold leading-tight text-primary sm:text-5xl md:text-6xl">
            Nos services d&apos;accompagnement administratif
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-text-secondary lg:mx-0">
            Recours, renouvellement, régularisation, regroupement familial,
            naturalisation. Une expertise dédiée à la diaspora africaine en
            France, 100% digitale, à tarifs accessibles.
          </p>

          <div className="mt-7 rounded-2xl border border-accent/30 bg-accent/5 p-4 md:p-6">
            <p className="text-sm font-semibold text-accent">
              Pas sûr du service adapté à votre situation&nbsp;?
            </p>
            <p className="mt-1 text-sm text-text-primary">
              Notre test d&apos;éligibilité gratuit vous dit en 7 minutes
              laquelle de ces 5 prestations correspond à votre profil.
            </p>
            <Link href="/quiz" className="btn-primary mt-4">
              Démarrer le test gratuit
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=80"
              alt="Documents et stylo prêts pour signature"
              fill
              priority
              sizes="(min-width: 1024px) 480px, 80vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-border bg-white p-4 shadow-soft sm:block">
            <p className="text-xs uppercase tracking-wider text-text-secondary">
              À partir de
            </p>
            <p className="font-display text-2xl font-bold text-primary">350 €</p>
          </div>
          <div className="absolute -top-4 -right-4 hidden rounded-2xl border border-border bg-white p-4 shadow-soft sm:block">
            <p className="text-xs uppercase tracking-wider text-text-secondary">
              Délai
            </p>
            <p className="font-display text-2xl font-bold text-accent">7-21 j</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
