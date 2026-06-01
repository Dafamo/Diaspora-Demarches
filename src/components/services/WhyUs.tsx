"use client";

import { motion } from "framer-motion";
import { Globe2, Laptop, ShieldCheck, Wallet } from "lucide-react";

const PILLARS = [
  {
    icon: Globe2,
    title: "Spécialiste diaspora",
    description:
      "Service dédié à la diaspora africaine en France : codes, parcours et difficultés que nous comprenons en profondeur.",
  },
  {
    icon: Laptop,
    title: "100% digital",
    description:
      "0 déplacement. Tout se passe en visio et par email. Vous gagnez du temps et restez maître de votre planning.",
  },
  {
    icon: Wallet,
    title: "Tarifs accessibles",
    description:
      "À partir de 350 €, contre 1 500 à 2 500 € chez un avocat. Paiement unique, transparent, sans surprise.",
  },
  {
    icon: ShieldCheck,
    title: "Garantie de Conformité",
    description:
      "Si votre dossier est rejeté pour une erreur de notre part, nous reprenons le travail gratuitement.",
  },
];

export function WhyUs() {
  return (
    <section className="section bg-white">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow">Pourquoi nous</span>
          <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
            4 raisons de nous faire confiance
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="card transition-transform hover:-translate-y-1"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={22} aria-hidden />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-primary">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {p.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
