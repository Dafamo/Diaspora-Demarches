import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { ArrowRight, CheckCircle2, Clock, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Quiz d'éligibilité — Test gratuit en 7 minutes",
    description:
      "Découvrez gratuitement votre score d'éligibilité à la régularisation. 20 questions, résultat immédiat, recommandations personnalisées.",
    alternates: { canonical: `/${locale}/quiz` },
  };
}

const bullets = [
  "100% gratuit et anonyme jusqu'à la fin",
  "20 questions simples",
  "Résultat immédiat avec recommandations personnalisées",
  "Aucun document à fournir maintenant",
];

export default async function QuizIntroPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main id="main">
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-[26rem] w-[26rem] rounded-full bg-primary/10 blur-3xl" />
          </div>
          <div className="container-tight grid items-center gap-10 pt-14 pb-16 md:pt-20 md:pb-24 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <span className="eyebrow">Test d'éligibilité</span>
              <h1 className="font-display text-4xl font-bold leading-tight text-primary sm:text-5xl md:text-6xl">
                Êtes-vous éligible à la régularisation&nbsp;?
              </h1>
              <p className="mt-5 max-w-xl text-lg text-text-secondary">
                Faites le test gratuit en 7 minutes. Découvrez votre score
                d&apos;éligibilité et les étapes à suivre, adaptées à votre
                situation.
              </p>

              <ul className="mt-6 space-y-2">
                {bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-text-primary"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-success"
                      aria-hidden
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <Link href="/quiz/questions" className="btn-primary">
                  Commencer le test <ArrowRight size={18} aria-hidden />
                </Link>
                <span className="inline-flex items-center gap-2 text-sm text-text-secondary">
                  <Clock size={16} aria-hidden /> Environ 7 minutes
                </span>
              </div>

              <p className="mt-6 inline-flex items-center gap-2 text-sm text-text-secondary">
                <ShieldCheck size={16} className="text-success" aria-hidden />
                Vos réponses restent sur votre appareil tant que vous ne validez pas.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80"
                  alt="Calculatrice et documents administratifs sur un bureau"
                  fill
                  priority
                  sizes="(min-width: 1024px) 480px, 80vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-4 rounded-2xl border border-border bg-white p-4 shadow-soft">
                <p className="text-xs uppercase tracking-wider text-text-secondary">
                  Score sur
                </p>
                <p className="font-display text-2xl font-bold text-primary">100 points</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
