"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Clock, Star } from "lucide-react";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/cn";
import { SERVICES } from "@/lib/services-data";

export function ServiceGrid() {
  return (
    <section className="section">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow">Nos prestations</span>
          <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
            Un accompagnement adapté à chaque démarche
          </h2>
          <p className="mt-3 text-text-secondary">
            5 prestations claires, à tarif fixe, livrées 100% digitalement. Pas
            sûr de votre éligibilité&nbsp;? Commencez par le test gratuit.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className={cn(
                "relative flex h-full flex-col rounded-2xl border bg-white p-5 shadow-soft transition-transform hover:-translate-y-1",
                s.featured
                  ? "border-accent/40 ring-2 ring-accent/20"
                  : "border-border"
              )}
            >
              {s.featured ? (
                <span className="absolute -top-3 left-4 inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow-soft">
                  <Star size={10} fill="currentColor" aria-hidden />
                  Produit phare
                </span>
              ) : null}

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                  {s.tagline}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold leading-snug text-primary">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {s.description}
                </p>
              </div>

              <div className="mt-4 flex items-baseline justify-between gap-2 border-y border-border py-3">
                <span className="font-display text-2xl font-bold text-primary">
                  {s.price}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-text-secondary">
                  <Clock size={12} aria-hidden /> {s.delay}
                </span>
              </div>

              <p className="mt-3 text-xs italic text-text-secondary">
                {s.audience}
              </p>

              <ul className="mt-3 space-y-2 text-xs text-text-primary">
                {s.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <Check
                      size={13}
                      strokeWidth={3}
                      className="mt-0.5 shrink-0 text-success"
                      aria-hidden
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex-1" />
              <Link
                href="/quiz"
                className={cn(
                  "mt-2 inline-flex w-full items-center justify-center gap-1.5 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5",
                  s.featured
                    ? "bg-accent text-white shadow-lg shadow-accent/20 hover:bg-accent-hover hover:shadow-xl"
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                )}
              >
                Vérifier mon éligibilité
                <ArrowRight size={14} aria-hidden />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
