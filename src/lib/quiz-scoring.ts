import { QUIZ_QUESTIONS, MAX_RAW_POINTS, type QuestionFlag } from "./quiz-data";

export type AnswerMap = Record<number, number | string>;

export type Category = "solide" | "possible" | "faible" | "non-viable";

export type ScoreResult = {
  score: number;
  rawPoints: number;
  maxRawPoints: number;
  category: Category;
  redFlags: QuestionFlag[];
  strengths: string[];
  weaknesses: string[];
  recommendedAction: "calcom" | "associations" | "avocat";
};

export function calculateScore(answers: AnswerMap): ScoreResult {
  let raw = 0;
  const redFlags: QuestionFlag[] = [];
  const strengths: string[] = [];
  const weaknesses: string[] = [];

  for (const q of QUIZ_QUESTIONS) {
    const answer = answers[q.id];
    if (q.type === "radio" && typeof answer === "number") {
      const opt = q.options[answer];
      if (!opt) continue;
      raw += opt.points;
      if (opt.flag) redFlags.push(opt.flag);
      if (opt.strength) strengths.push(opt.strength);
      if (opt.weakness) weaknesses.push(opt.weakness);
    }
  }

  const score = Math.round((raw / MAX_RAW_POINTS) * 100);

  let category: Category;
  if (score >= 80) category = "solide";
  else if (score >= 60) category = "possible";
  else if (score >= 40) category = "faible";
  else category = "non-viable";

  let recommendedAction: ScoreResult["recommendedAction"];
  if (redFlags.includes("recent_oqtf") || redFlags.includes("serious_record")) {
    recommendedAction = "avocat";
  } else if (category === "solide" || category === "possible") {
    recommendedAction = "calcom";
  } else {
    recommendedAction = "associations";
  }

  return {
    score,
    rawPoints: raw,
    maxRawPoints: MAX_RAW_POINTS,
    category,
    redFlags,
    strengths: strengths.slice(0, 6),
    weaknesses: weaknesses.slice(0, 6),
    recommendedAction,
  };
}

export function categoryLabel(c: Category): string {
  return {
    solide: "Dossier solide",
    possible: "Possible mais incertain",
    faible: "Dossier à renforcer",
    "non-viable": "Service non adapté",
  }[c];
}

export function categoryColor(c: Category): { bg: string; text: string; ring: string; bar: string } {
  return {
    solide: {
      bg: "bg-success/10",
      text: "text-success",
      ring: "ring-success/30",
      bar: "bg-success",
    },
    possible: {
      bg: "bg-yellow-100",
      text: "text-yellow-700",
      ring: "ring-yellow-400/30",
      bar: "bg-yellow-400",
    },
    faible: {
      bg: "bg-accent/10",
      text: "text-accent",
      ring: "ring-accent/30",
      bar: "bg-accent",
    },
    "non-viable": {
      bg: "bg-red-100",
      text: "text-red-700",
      ring: "ring-red-400/30",
      bar: "bg-red-500",
    },
  }[c];
}
