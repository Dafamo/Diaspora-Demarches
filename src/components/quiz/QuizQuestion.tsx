"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Question } from "@/lib/quiz-data";

type Props = {
  question: Question;
  value: number | string | undefined;
  onAnswer: (value: number | string) => void;
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
};

export function QuizQuestion({
  question,
  value,
  onAnswer,
  onNext,
  onPrev,
  isFirst,
  isLast,
}: Props) {
  const [textValue, setTextValue] = useState(typeof value === "string" ? value : "");
  const [selectValue, setSelectValue] = useState(
    typeof value === "string" ? value : ""
  );

  useEffect(() => {
    setTextValue(typeof value === "string" ? value : "");
    setSelectValue(typeof value === "string" ? value : "");
  }, [question.id, value]);

  const canContinue =
    question.type === "radio"
      ? typeof value === "number"
      : question.type === "text"
        ? textValue.trim().length > 0
        : selectValue.length > 0;

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="card"
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-accent">
        Question {question.id}
      </p>
      <h2 className="mt-1 font-display text-2xl font-semibold leading-tight text-primary md:text-3xl">
        {question.text}
      </h2>
      {question.hint ? (
        <p className="mt-2 text-sm text-text-secondary">{question.hint}</p>
      ) : null}

      <div className="mt-6">
        {question.type === "radio" ? (
          <ul className="space-y-2.5">
            {question.options.map((opt, i) => {
              const selected = value === i;
              return (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => {
                      onAnswer(i);
                      // auto-advance after a short delay
                      window.setTimeout(() => onNext(), 450);
                    }}
                    className={cn(
                      "group flex w-full items-center gap-3 rounded-xl border-2 px-4 py-3.5 text-left transition-all",
                      "border-border bg-white hover:border-primary/60 hover:bg-primary/[0.03]",
                      selected && "!border-accent !bg-accent/5 ring-2 ring-accent/30"
                    )}
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "grid h-7 w-7 shrink-0 place-items-center rounded-lg border-2 text-xs font-semibold",
                        selected
                          ? "border-accent bg-accent text-white"
                          : "border-border bg-background text-text-secondary group-hover:border-primary/40"
                      )}
                    >
                      {selected ? (
                        <Check size={14} strokeWidth={3} />
                      ) : (
                        String.fromCharCode(65 + i)
                      )}
                    </span>
                    <span className="text-text-primary">{opt.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        ) : null}

        {question.type === "text" ? (
          <input
            type="text"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            onBlur={() => textValue && onAnswer(textValue)}
            placeholder="Votre réponse…"
            className="w-full rounded-xl border-2 border-border bg-white px-4 py-3 text-text-primary outline-none transition-colors focus:border-accent"
          />
        ) : null}

        {question.type === "select" ? (
          <select
            value={selectValue}
            onChange={(e) => {
              setSelectValue(e.target.value);
              onAnswer(e.target.value);
            }}
            className="w-full rounded-xl border-2 border-border bg-white px-4 py-3 text-text-primary outline-none transition-colors focus:border-accent"
          >
            <option value="" disabled>
              — Sélectionnez votre département —
            </option>
            {question.options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        ) : null}
      </div>

      <div className="mt-7 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onPrev}
          disabled={isFirst}
          className="btn-ghost disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ArrowLeft size={16} aria-hidden /> Précédent
        </button>

        {question.type !== "radio" ? (
          <button
            type="button"
            onClick={() => {
              if (question.type === "text" && textValue) onAnswer(textValue);
              if (question.type === "select" && selectValue) onAnswer(selectValue);
              onNext();
            }}
            disabled={!canContinue}
            className="btn-primary disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLast ? "Voir mon score" : "Suivant"}
            <ArrowRight size={16} aria-hidden />
          </button>
        ) : (
          <button
            type="button"
            onClick={onNext}
            disabled={!canContinue}
            className="btn-ghost disabled:cursor-not-allowed disabled:opacity-40"
          >
            Passer <ArrowRight size={16} aria-hidden />
          </button>
        )}
      </div>
    </motion.div>
  );
}
