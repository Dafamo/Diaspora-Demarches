"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "@/i18n/routing";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { QuizProgress } from "@/components/quiz/QuizProgress";
import { QuizQuestion } from "@/components/quiz/QuizQuestion";
import { QUIZ_QUESTIONS } from "@/lib/quiz-data";
import {
  loadAnswers,
  saveAnswers,
} from "@/lib/quiz-storage";
import type { AnswerMap } from "@/lib/quiz-scoring";

export default function QuizQuestionsPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [current, setCurrent] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const loaded = loadAnswers();
    setAnswers(loaded);
    // resume at first unanswered question (or last index if all answered)
    const firstUnanswered = QUIZ_QUESTIONS.findIndex(
      (q) => loaded[q.id] === undefined
    );
    setCurrent(firstUnanswered === -1 ? QUIZ_QUESTIONS.length - 1 : firstUnanswered);
    setReady(true);
  }, []);

  if (!ready) {
    return (
      <>
        <Navbar />
        <main id="main" className="section">
          <div className="container-tight max-w-2xl">
            <div className="card animate-pulse">
              <div className="h-6 w-1/3 rounded bg-border" />
              <div className="mt-3 h-8 w-3/4 rounded bg-border" />
              <div className="mt-6 space-y-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-12 rounded-xl bg-border/60" />
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const question = QUIZ_QUESTIONS[current];
  const isFirst = current === 0;
  const isLast = current === QUIZ_QUESTIONS.length - 1;

  const handleAnswer = (value: number | string) => {
    const next = { ...answers, [question.id]: value };
    setAnswers(next);
    saveAnswers(next);
  };

  const handleNext = () => {
    if (isLast) {
      router.push("/quiz/email");
      return;
    }
    setCurrent((c) => c + 1);
  };

  const handlePrev = () => {
    if (isFirst) return;
    setCurrent((c) => c - 1);
  };

  return (
    <>
      <Navbar />
      <main id="main" className="pb-20">
        <QuizProgress current={current} total={QUIZ_QUESTIONS.length} />
        <div className="container-tight max-w-2xl">
          <AnimatePresence mode="wait">
            <QuizQuestion
              key={question.id}
              question={question}
              value={answers[question.id]}
              onAnswer={handleAnswer}
              onNext={handleNext}
              onPrev={handlePrev}
              isFirst={isFirst}
              isLast={isLast}
            />
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </>
  );
}
