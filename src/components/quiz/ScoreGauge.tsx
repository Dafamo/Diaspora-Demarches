"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import type { Category } from "@/lib/quiz-scoring";
import { categoryColor } from "@/lib/quiz-scoring";

export function ScoreGauge({
  score,
  category,
}: {
  score: number;
  category: Category;
}) {
  const colors = categoryColor(category);
  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative mx-auto grid h-44 w-44 place-items-center">
      <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="currentColor"
          strokeWidth="10"
          className="text-border"
        />
        <motion.circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          className={cn(colors.text)}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute text-center">
        <motion.span
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="block font-display text-5xl font-bold text-primary"
        >
          {score}
        </motion.span>
        <span className="text-xs font-medium uppercase tracking-wider text-text-secondary">
          / 100
        </span>
      </div>
    </div>
  );
}
