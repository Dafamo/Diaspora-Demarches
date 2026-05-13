"use client";

import { motion } from "framer-motion";

export function QuizProgress({ current, total }: { current: number; total: number }) {
  const pct = Math.round(((current + 1) / total) * 100);
  return (
    <div className="sticky top-16 z-30 -mx-5 mb-6 border-b border-border bg-background/85 px-5 py-3 backdrop-blur sm:-mx-8 sm:px-8 md:top-20">
      <div className="container-tight flex items-center justify-between gap-4">
        <span className="text-xs font-medium text-text-secondary">
          Question {current + 1} sur {total}
        </span>
        <span className="text-xs font-semibold text-primary">{pct}%</span>
      </div>
      <div className="container-tight mt-2">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
          <motion.div
            className="h-full rounded-full bg-accent"
            initial={false}
            animate={{ width: `${pct}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          />
        </div>
      </div>
    </div>
  );
}
