"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  PauseCircle,
  XCircle,
  MessageCircle,
  Calendar,
  Mail,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/cn";
import type { ScoreResult } from "@/lib/quiz-scoring";
import { categoryColor, categoryLabel } from "@/lib/quiz-scoring";
import { ScoreGauge } from "./ScoreGauge";

const CALCOM_URL = "https://cal.com/stephane-oabaev/diaspora-demarches";

function whatsappLink(score: number) {
  const msg = `Bonjour, je viens de passer le quiz et j'ai obtenu un score de ${score}/100`;
  return `https://wa.me/33756836264?text=${encodeURIComponent(msg)}`;
}

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
      ? "D'après vos réponses, votre dossier de régularisation présente toutes les conditions favorables pour aboutir."
      : category === "possible"
        ? "D'après vos réponses, votre dossier présente des points forts mais aussi des fragilités qui pourraient compliquer votre démarche."
        : category === "faible"
          ? "Je vais être totalement honnête avec vous : votre dossier présente trop de fragilités à ce stade pour avoir des chances raisonnables d'aboutir."
          : "Je dois être honnête avec vous : votre situation actuelle ne réunit pas les conditions nécessaires pour engager une démarche de régularisation classique.";

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

        <div className="mt-8 border-t border-border pt-6">
          <CTAs category={category} score={score} />
        </div>

        <p className="mt-6 text-xs text-text-secondary">
          Vous recevrez aussi votre rapport complet par email dans les prochaines
          minutes.
        </p>
      </div>
    </motion.section>
  );
}

function CTAs({ category, score }: { category: ScoreResult["category"]; score: number }) {
  if (category === "solide" || category === "possible") {
    return (
      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href={CALCOM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          <Calendar size={18} aria-hidden />
          Réserver mon rendez-vous
          <ArrowRight size={16} aria-hidden />
        </a>
        <a
          href={whatsappLink(score)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          <MessageCircle size={18} aria-hidden />
          Me contacter par WhatsApp
        </a>
      </div>
    );
  }

  if (category === "faible") {
    return (
      <div className="grid gap-3 sm:grid-cols-3">
        <a
          href="https://www.lacimade.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary !text-sm"
        >
          Voir les associations
          <ExternalLink size={14} aria-hidden />
        </a>
        <a
          href={`mailto:hello@diasporademarches.com?subject=Newsletter%20conseils%20mensuels`}
          className="btn-secondary !text-sm"
        >
          <Mail size={16} aria-hidden /> Conseils mensuels
        </a>
        <a
          href={whatsappLink(score)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary !text-sm"
        >
          <MessageCircle size={16} aria-hidden /> Revenir dans 6-12 mois
        </a>
      </div>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <a
        href="https://www.lacimade.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary !text-sm"
      >
        Cimade <ExternalLink size={14} aria-hidden />
      </a>
      <a
        href="https://www.gisti.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary !text-sm"
      >
        GISTI <ExternalLink size={14} aria-hidden />
      </a>
      <a
        href="https://adde.fr/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary !text-sm"
      >
        ADDE — avocats <ExternalLink size={14} aria-hidden />
      </a>
      <a
        href={`mailto:hello@diasporademarches.com?subject=Newsletter%20gratuite`}
        className="btn-secondary !text-sm"
      >
        <Mail size={14} aria-hidden /> Newsletter
      </a>
    </div>
  );
}
