"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  PauseCircle,
  XCircle,
  Calendar,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/cn";
import type { ScoreResult } from "@/lib/quiz-scoring";
import { categoryColor, categoryLabel } from "@/lib/quiz-scoring";
import { ScoreGauge } from "./ScoreGauge";

const CALCOM_URL = "https://cal.com/stephane-oabaev/diaspora-demarches";

type Props = {
  result: ScoreResult;
  firstname: string;
};

export function ResultCard({ result, firstname }: Props) {
  const colors = categoryColor(result.category);
  const { category, score, strengths, weaknesses } = result;

  const Icon =
    category === "solide"
      ? CheckCircle2
      : category === "possible"
        ? AlertTriangle
        : category === "faible"
          ? PauseCircle
          : XCircle;

  const title =
    category === "solide"
      ? "Excellent ! Votre dossier est solide."
      : category === "possible"
        ? "Votre dossier est possible mais incertain."
        : category === "faible"
          ? "Votre dossier n'est pas encore prêt."
          : "Ce service n'est pas adapté à votre situation.";

  const intro =
    category === "solide"
      ? "C'est une excellente nouvelle : d'après vos réponses, votre dossier réunit toutes les conditions favorables pour aboutir. Votre situation est conforme aux critères de régularisation et vous disposez de l'essentiel des preuves nécessaires."
      : category === "possible"
        ? "Votre dossier présente de réelles bases pour une démarche de régularisation. Cependant, plusieurs fragilités identifiées dans vos réponses pourraient compliquer son acceptation par la préfecture."
        : category === "faible"
          ? "Je veux être totalement honnête avec vous : à ce stade, votre dossier présente trop de fragilités pour avoir des chances raisonnables d'aboutir. Votre situation n'est pas figée — elle peut évoluer favorablement dans les prochains mois."
          : "Je vais être direct avec vous, par respect : votre situation actuelle ne réunit pas les conditions nécessaires pour engager une démarche de régularisation classique.";

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden rounded-3xl border border-border bg-white shadow-soft"
    >
      <div className={cn("flex items-center gap-3 px-6 py-4 md:px-10", colors.bg)}>
        <Icon className={cn("shrink-0", colors.text)} size={28} aria-hidden />
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
            {categoryLabel(category)}
          </p>
          <h1 className={cn("font-display text-xl font-bold md:text-2xl", colors.text)}>
            {title}
          </h1>
        </div>
      </div>

      <div className="px-6 py-8 md:px-10 md:py-10">
        <div className="grid items-center gap-8 md:grid-cols-[auto_1fr]">
          <ScoreGauge score={score} category={category} />
          <div>
            <p className="text-base text-text-primary md:text-lg">
              Bonjour <span className="font-semibold">{firstname}</span>,
            </p>
            <p className="mt-2 text-text-secondary">{intro}</p>
          </div>
        </div>

        {strengths.length > 0 ? (
          <div className="mt-8">
            <h2 className="font-display text-lg font-semibold text-primary">
              Points forts identifiés
            </h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {strengths.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-primary">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-success" aria-hidden />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {weaknesses.length > 0 ? (
          <div className="mt-6">
            <h2 className="font-display text-lg font-semibold text-primary">
              Points à renforcer
            </h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {weaknesses.map((w, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-primary">
                  <AlertTriangle
                    size={16}
                    className="mt-0.5 shrink-0 text-accent"
                    aria-hidden
                  />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <DecisionPanel category={category} />

        <p className="mt-6 text-xs text-text-secondary">
          Vous recevrez aussi votre rapport complet par email dans les prochaines
          minutes.
        </p>
      </div>
    </motion.section>
  );
}

function DecisionPanel({ category }: { category: ScoreResult["category"] }) {
  if (category === "solide") {
    return (
      <div className="mt-8 rounded-2xl border border-success/30 bg-success/5 p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-success">
          Ma décision
        </p>
        <h3 className="mt-1 font-display text-xl font-semibold text-primary">
          J&apos;accepte de vous accompagner.
        </h3>
        <p className="mt-3 text-text-primary">
          Votre dossier est solide. Je vous propose mon Programme Régularisation
          au tarif plein de <strong>697 €</strong>, avec la{" "}
          <strong>Garantie de Conformité</strong> incluse. Réservons ensemble
          un rendez-vous de 30 minutes en visio : je vous y confirmerai la
          voie de régularisation la plus pertinente et nous démarrerons votre
          dossier si vous le souhaitez.
        </p>
        <ul className="mt-4 space-y-1.5 text-sm text-text-primary">
          <li className="flex items-start gap-2">
            <ShieldCheck size={16} className="mt-0.5 shrink-0 text-success" aria-hidden />
            Tarif plein : 697 €, paiement unique
          </li>
          <li className="flex items-start gap-2">
            <ShieldCheck size={16} className="mt-0.5 shrink-0 text-success" aria-hidden />
            Livraison du dossier complet en 14 jours
          </li>
          <li className="flex items-start gap-2">
            <ShieldCheck size={16} className="mt-0.5 shrink-0 text-success" aria-hidden />
            Garantie de Conformité applicable
          </li>
        </ul>
        <a
          href={CALCOM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-6"
        >
          <Calendar size={18} aria-hidden />
          Mon calendrier
          <ArrowRight size={16} aria-hidden />
        </a>
      </div>
    );
  }

  if (category === "possible") {
    return (
      <div className="mt-8 rounded-2xl border border-yellow-300/60 bg-yellow-50 p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-yellow-700">
          Ma décision
        </p>
        <h3 className="mt-1 font-display text-xl font-semibold text-primary">
          J&apos;accepte de vous accompagner, en toute transparence sur les risques.
        </h3>
        <p className="mt-3 text-text-primary">
          Votre dossier a de réelles chances mais reste incertain à cause des
          points faibles identifiés ci-dessus. Je peux vous accompagner si vous
          acceptez ces risques en toute connaissance de cause. Lors de notre
          échange en visio, je vous expliquerai en détail comment maximiser
          vos chances — et vous déciderez en toute autonomie.
        </p>
        <ul className="mt-4 space-y-1.5 text-sm text-text-primary">
          <li className="flex items-start gap-2">
            <ShieldCheck size={16} className="mt-0.5 shrink-0 text-yellow-700" aria-hidden />
            Tarif plein : 697 €, paiement unique
          </li>
          <li className="flex items-start gap-2">
            <ShieldCheck size={16} className="mt-0.5 shrink-0 text-yellow-700" aria-hidden />
            Une décharge spécifique sur les fragilités identifiées vous sera
            proposée à la signature au démarrage de la mission
          </li>
          <li className="flex items-start gap-2">
            <ShieldCheck size={16} className="mt-0.5 shrink-0 text-yellow-700" aria-hidden />
            Garantie de Conformité incluse
          </li>
        </ul>
        <a
          href={CALCOM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-6"
        >
          <Calendar size={18} aria-hidden />
          Mon calendrier
          <ArrowRight size={16} aria-hidden />
        </a>
      </div>
    );
  }

  if (category === "faible") {
    return (
      <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/5 p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
          Ma décision
        </p>
        <h3 className="mt-1 font-display text-xl font-semibold text-primary">
          Je ne peux pas vous accompagner aujourd&apos;hui.
        </h3>
        <p className="mt-3 text-text-primary">
          Votre dossier présente trop de fragilités à ce stade pour que je
          puisse vous accompagner sereinement. Plutôt que de prendre votre
          argent pour une démarche qui n&apos;aboutirait pas, je préfère être
          honnête avec vous.
        </p>
        <p className="mt-3 font-medium text-text-primary">
          Comment renforcer votre dossier dans les prochains mois&nbsp;:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-text-primary">
          <li>Stabiliser un emploi déclaré (idéalement plus de 12 mois)</li>
          <li>Rassembler des justificatifs de présence pour chaque année</li>
          <li>
            Renforcer votre intégration : cours de français, engagement
            associatif, vie sociale prouvable
          </li>
          <li>Régulariser votre situation fiscale si nécessaire</li>
        </ul>
        <p className="mt-4 text-sm text-text-secondary">
          En attendant, des structures gratuites peuvent vous accompagner&nbsp;:
          la <strong>Cimade</strong>, le <strong>GISTI</strong>, ou un avocat en
          droit des étrangers si votre situation relève du contentieux.
        </p>
        <p className="mt-4 rounded-xl bg-white/70 p-4 text-sm font-medium text-primary">
          Refaites le test dans 6 à 12 mois&nbsp;: si votre score progresse, je
          serai ravi de vous accompagner à ce moment-là.
        </p>
      </div>
    );
  }

  // non-viable
  return (
    <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-6">
      <p className="text-xs font-semibold uppercase tracking-wider text-red-700">
        Ma décision
      </p>
      <h3 className="mt-1 font-display text-xl font-semibold text-primary">
        Je ne peux pas vous accompagner sur ce dossier.
      </h3>
      <p className="mt-3 text-text-primary">
        Les conditions ne sont pas réunies pour engager une démarche de
        régularisation classique. Je préfère vous le dire clairement, par
        respect&nbsp;: je ne vais pas vous facturer un accompagnement qui
        n&apos;aboutirait pas.
      </p>
      <p className="mt-3 text-text-primary">
        Cela ne veut pas dire que rien n&apos;est possible. Certaines situations
        nécessitent l&apos;expertise d&apos;un avocat ou d&apos;une association
        spécialisée. Voici les structures qui peuvent vous orienter
        gratuitement&nbsp;:
      </p>
      <ul className="mt-4 space-y-2 text-sm text-text-primary">
        <li>
          <strong>La Cimade</strong> — accompagnement juridique gratuit·{" "}
          <a
            href="tel:+33144186050"
            className="text-primary underline underline-offset-2"
          >
            01 44 18 60 50
          </a>
        </li>
        <li>
          <strong>Le GISTI</strong> — informations juridiques·{" "}
          <a
            href="tel:+33143148484"
            className="text-primary underline underline-offset-2"
          >
            01 43 14 84 84
          </a>
        </li>
        <li>
          <strong>ADDE</strong> — réseau d&apos;avocats en droit des étrangers·{" "}
          <a
            href="https://adde.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-2"
          >
            adde.fr
          </a>
        </li>
      </ul>
      <p className="mt-4 text-sm text-text-secondary">
        Bon courage dans votre parcours. Si votre situation évolue dans le
        temps, le test reste à votre disposition.
      </p>
    </div>
  );
}
