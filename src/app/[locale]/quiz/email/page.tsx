"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, ShieldCheck } from "lucide-react";
import { useRouter, Link } from "@/i18n/routing";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  loadAnswers,
  saveContact,
  saveResultPayload,
  type ContactInfo,
} from "@/lib/quiz-storage";
import { calculateScore } from "@/lib/quiz-scoring";

const ORIGINS = [
  "TikTok",
  "Instagram",
  "YouTube",
  "Facebook",
  "Recommandation",
  "Google",
  "Église",
  "Autre",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+0-9 ()\-.]{7,}$/;

export default function QuizEmailPage() {
  const router = useRouter();
  const [form, setForm] = useState<ContactInfo>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    origin: "",
    rgpd: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasAnswers, setHasAnswers] = useState(true);

  useEffect(() => {
    const a = loadAnswers();
    if (Object.keys(a).length === 0) setHasAnswers(false);
  }, []);

  if (!hasAnswers) {
    return (
      <>
        <Navbar />
        <main id="main" className="section">
          <div className="container-tight max-w-xl text-center">
            <h1 className="font-display text-2xl font-bold text-primary">
              Quiz non démarré
            </h1>
            <p className="mt-3 text-text-secondary">
              Commencez par répondre aux 20 questions du quiz d&apos;éligibilité.
            </p>
            <Link href="/quiz" className="btn-primary mt-6">
              Commencer le test
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const update = <K extends keyof ContactInfo>(key: K, value: ContactInfo[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.firstname.trim()) return setError("Votre prénom est requis.");
    if (!EMAIL_RE.test(form.email)) return setError("Email invalide.");
    if (!PHONE_RE.test(form.phone)) return setError("Numéro WhatsApp invalide.");
    if (!form.origin) return setError("Indiquez comment vous nous avez connu.");
    if (!form.rgpd) return setError("Merci d'accepter le traitement des données.");

    setSubmitting(true);

    const answers = loadAnswers();
    const nationality =
      typeof answers[18] === "string" ? (answers[18] as string) : undefined;
    const department =
      typeof answers[19] === "string" ? (answers[19] as string) : undefined;

    const contactWithMeta: ContactInfo = {
      ...form,
      nationality,
      department,
    };

    const result = calculateScore(answers);

    saveContact(contactWithMeta);
    saveResultPayload({ result, firstname: form.firstname, contact: contactWithMeta });

    // best-effort server submit
    try {
      await fetch("/api/quiz/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers, contact: contactWithMeta, result }),
      });
    } catch {
      /* swallow — résultat affiché localement de toute façon */
    }

    router.push("/quiz/resultat");
  };

  return (
    <>
      <Navbar />
      <main id="main" className="section">
        <div className="container-tight max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">Dernière étape</span>
            <h1 className="font-display text-3xl font-bold text-primary md:text-4xl">
              Votre score est prêt
            </h1>
            <p className="mt-3 text-text-secondary">
              Entrez vos coordonnées pour découvrir votre score d&apos;éligibilité
              et recevoir votre rapport personnalisé par email.
            </p>

            <form onSubmit={submit} className="card mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Prénom *">
                  <input
                    required
                    type="text"
                    value={form.firstname}
                    onChange={(e) => update("firstname", e.target.value)}
                    className="input"
                    autoComplete="given-name"
                  />
                </Field>
                <Field label="Nom (optionnel)">
                  <input
                    type="text"
                    value={form.lastname ?? ""}
                    onChange={(e) => update("lastname", e.target.value)}
                    className="input"
                    autoComplete="family-name"
                  />
                </Field>
              </div>

              <Field label="Email *">
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="input"
                  autoComplete="email"
                />
              </Field>

              <Field label="Téléphone WhatsApp *">
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="input"
                  placeholder="+33 6 12 34 56 78"
                  autoComplete="tel"
                />
              </Field>

              <Field label="Comment avez-vous connu Diaspora Démarches&nbsp;? *">
                <select
                  required
                  value={form.origin}
                  onChange={(e) => update("origin", e.target.value)}
                  className="input"
                >
                  <option value="" disabled>
                    — Choisissez —
                  </option>
                  {ORIGINS.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </Field>

              <label className="flex items-start gap-3 text-sm text-text-secondary">
                <input
                  type="checkbox"
                  required
                  checked={form.rgpd}
                  onChange={(e) => update("rgpd", e.target.checked)}
                  className="mt-1 h-5 w-5 rounded border-border accent-accent"
                />
                <span>
                  J&apos;accepte que mes données soient traitées selon la{" "}
                  <Link
                    href="/confidentialite"
                    className="text-primary underline underline-offset-2"
                  >
                    Politique de confidentialité
                  </Link>
                  .
                </span>
              </label>

              {error ? (
                <p
                  role="alert"
                  className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700"
                >
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? (
                  <Loader2 className="animate-spin" size={18} aria-hidden />
                ) : null}
                Voir mon score
                {!submitting && <ArrowRight size={16} aria-hidden />}
              </button>

              <p className="inline-flex items-center gap-2 text-xs text-text-secondary">
                <ShieldCheck size={14} className="text-success" aria-hidden />
                Vos données sont chiffrées et ne sont jamais transmises à des
                tiers.
              </p>
            </form>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span
        className="mb-1 block text-sm font-medium text-text-primary"
        dangerouslySetInnerHTML={{ __html: label }}
      />
      {children}
    </label>
  );
}
