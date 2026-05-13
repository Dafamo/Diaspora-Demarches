"use client";

import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import type { ScoreResult } from "@/lib/quiz-scoring";

export function RedFlagBanner({ flags }: { flags: ScoreResult["redFlags"] }) {
  if (flags.length === 0) return null;

  const messages: Record<string, string> = {
    no_id:
      "Sans passeport ni pièce d'identité, aucune démarche n'est possible. Commencez par contacter votre consulat.",
    recent_oqtf:
      "Une OQTF de moins d'1 an nécessite l'intervention d'un avocat en droit des étrangers. Voici les contacts à privilégier :",
    serious_record:
      "Votre situation nécessite l'avis d'un avocat avant toute démarche. Voici les contacts à privilégier :",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="card mb-6 border-2 border-red-200 bg-red-50"
      role="alert"
    >
      <div className="flex items-start gap-3">
        <AlertTriangle className="mt-0.5 shrink-0 text-red-600" size={22} aria-hidden />
        <div>
          <h3 className="font-display text-lg font-semibold text-red-700">
            Situation à signaler
          </h3>
          <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-red-700">
            {flags.map((f) => (
              <li key={f}>{messages[f]}</li>
            ))}
          </ul>
          <div className="mt-3 flex flex-wrap gap-2 text-sm">
            <a
              href="tel:+33144186050"
              className="rounded-lg bg-white px-3 py-1.5 font-medium text-red-700 ring-1 ring-red-200 hover:bg-red-50"
            >
              Cimade : 01 44 18 60 50
            </a>
            <a
              href="tel:+33143148484"
              className="rounded-lg bg-white px-3 py-1.5 font-medium text-red-700 ring-1 ring-red-200 hover:bg-red-50"
            >
              GISTI : 01 43 14 84 84
            </a>
            <a
              href="https://adde.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-3 py-1.5 font-medium text-red-700 ring-1 ring-red-200 hover:bg-red-50"
            >
              ADDE — avocats spécialisés
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
