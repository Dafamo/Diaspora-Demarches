"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/routing";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ResultCard } from "@/components/quiz/ResultCard";
import { RedFlagBanner } from "@/components/quiz/RedFlagBanner";
import { CTASection } from "@/components/CTASection";
import {
  clearAnswers,
  loadResultPayload,
} from "@/lib/quiz-storage";
import type { ScoreResult } from "@/lib/quiz-scoring";

type Payload = {
  result: ScoreResult;
  firstname: string;
};

export default function QuizResultPage() {
  const [payload, setPayload] = useState<Payload | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const p = loadResultPayload<Payload>();
    setPayload(p);
    setLoaded(true);
    if (p) {
      // Quiz consumed — purge persisted answers
      clearAnswers();
    }
  }, []);

  if (!loaded) {
    return (
      <>
        <Navbar />
        <main id="main" className="section">
          <div className="container-tight max-w-3xl">
            <div className="card animate-pulse">
              <div className="h-8 w-1/2 rounded bg-border" />
              <div className="mt-6 h-40 rounded bg-border" />
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!payload) {
    return (
      <>
        <Navbar />
        <main id="main" className="section">
          <div className="container-tight max-w-xl text-center">
            <h1 className="font-display text-2xl font-bold text-primary">
              Résultat indisponible
            </h1>
            <p className="mt-3 text-text-secondary">
              Nous n&apos;avons pas trouvé votre résultat (session expirée ou
              navigation directe). Recommencez le test pour découvrir votre score.
            </p>
            <Link href="/quiz" className="btn-primary mt-6">
              Refaire le test
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main id="main" className="section">
        <div className="container-tight max-w-3xl">
          <RedFlagBanner flags={payload.result.redFlags} />
          <ResultCard result={payload.result} firstname={payload.firstname} />
        </div>
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
