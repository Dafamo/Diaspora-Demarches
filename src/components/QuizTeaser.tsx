"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Timer } from "lucide-react";
import { Link } from "@/i18n/routing";

export function QuizTeaser() {
  return (
    <section className="section">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative grid items-center gap-8 overflow-hidden rounded-3xl border border-border bg-white p-7 shadow-soft md:grid-cols-2 md:p-12"
        >
          <div>
            <span className="eyebrow">Pas sûr d&apos;être éligible&nbsp;?</span>
            <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
              Faites le test d&apos;éligibilité gratuit en 7 minutes
            </h2>
            <p className="mt-4 text-text-secondary md:text-lg">
              20 questions, un score sur 100 et des recommandations
              personnalisées selon votre profil — sans transmettre le moindre
              document.
            </p>
            <ul className="mt-5 space-y-2">
              {[
                "100% gratuit et anonyme jusqu'à la fin",
                "Résultat immédiat avec actions à mener",
                "Aucun document à fournir",
              ].map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 text-sm text-text-primary"
                >
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-success"
                    aria-hidden
                  />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/quiz" className="btn-primary">
                Commencer le test gratuit
                <ArrowRight size={18} aria-hidden />
              </Link>
              <span className="inline-flex items-center gap-2 text-sm text-text-secondary">
                <Timer size={16} aria-hidden /> ~7 min
              </span>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl md:aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80"
              alt="Personne remplissant un formulaire administratif"
              fill
              sizes="(min-width: 768px) 400px, 100vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
