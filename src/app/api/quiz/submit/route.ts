import { NextResponse } from "next/server";
import { QUIZ_QUESTIONS } from "@/lib/quiz-data";
import type { AnswerMap, ScoreResult } from "@/lib/quiz-scoring";
import type { ContactInfo } from "@/lib/quiz-storage";

type Body = {
  answers: AnswerMap;
  contact: ContactInfo;
  result: ScoreResult;
};

const RESEND_ENDPOINT = "https://api.resend.com/emails";

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildAnswersTable(answers: AnswerMap): string {
  return QUIZ_QUESTIONS.map((q) => {
    const a = answers[q.id];
    let label = "—";
    if (q.type === "radio" && typeof a === "number") {
      label = q.options[a]?.label ?? "—";
    } else if (typeof a === "string") {
      label = a;
    }
    return `<tr><td style="padding:6px 12px;border-bottom:1px solid #E8E0D5"><strong>Q${q.id}.</strong> ${escapeHtml(q.shortLabel)}</td><td style="padding:6px 12px;border-bottom:1px solid #E8E0D5">${escapeHtml(label)}</td></tr>`;
  }).join("");
}

async function sendResend(payload: {
  from: string;
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  const res = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: payload.from,
      to: [payload.to],
      subject: payload.subject,
      html: payload.html,
      reply_to: payload.replyTo,
    }),
  });
  return res.ok;
}

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const { answers, contact, result } = body;
  if (!contact?.email || !result?.score === undefined) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  const FROM = process.env.QUIZ_FROM_EMAIL || "Diaspora Démarches <hello@diasporademarches.com>";
  const ADMIN = process.env.QUIZ_ADMIN_EMAIL || "hello@diasporademarches.com";

  const showCalendar = result.category === "solide" || result.category === "possible";

  const decisionLine =
    result.category === "solide"
      ? "Ma décision : j'accepte de vous accompagner. Votre dossier est solide et présente toutes les conditions favorables."
      : result.category === "possible"
        ? "Ma décision : j'accepte de vous accompagner, à condition que vous acceptiez les risques identifiés en toute connaissance de cause."
        : result.category === "faible"
          ? "Ma décision : je ne peux pas vous accompagner aujourd'hui. Renforcez votre dossier dans les prochains mois et refaites le test dans 6 à 12 mois."
          : "Ma décision : je ne peux pas vous accompagner sur ce dossier. Les conditions ne sont pas réunies pour une démarche classique.";

  const prospectHtml = `
    <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:auto;color:#1A1A1A">
      <h1 style="color:#1F3864">Votre score d'éligibilité : ${result.score}/100</h1>
      <p>Bonjour ${escapeHtml(contact.firstname)},</p>
      <p>Merci d'avoir pris le temps de passer notre quiz d'éligibilité.</p>
      <p><strong>Score :</strong> ${result.score}/100<br/>
      <strong>Catégorie :</strong> ${escapeHtml(result.category)}</p>
      <p>${escapeHtml(decisionLine)}</p>
      ${
        showCalendar
          ? `<p><a href="https://cal.eu/diaspora-demarches" style="display:inline-block;padding:12px 20px;background:#C8753A;color:#fff;border-radius:12px;text-decoration:none">Réserver mon rendez-vous gratuit</a></p>`
          : `<p>Structures gratuites recommandées : <a href="https://www.lacimade.org/">Cimade</a> · <a href="https://www.gisti.org/">GISTI</a> · <a href="https://adde.fr/">ADDE (avocats)</a>.</p>`
      }
      <p>À très bientôt,<br/>Stéphane WATAT — Fondateur, Diaspora Démarches<br/>
      hello@diasporademarches.com — 07 56 83 62 64</p>
    </div>
  `;

  const adminHtml = `
    <div style="font-family:Inter,Arial,sans-serif;max-width:680px;margin:auto;color:#1A1A1A">
      <h2 style="color:#1F3864">🟢 Nouveau lead : ${escapeHtml(contact.firstname)} ${escapeHtml(contact.lastname ?? "")} — Score ${result.score}/100</h2>
      <table style="width:100%;border-collapse:collapse;margin:16px 0">
        <tr><td><strong>Email</strong></td><td>${escapeHtml(contact.email)}</td></tr>
        <tr><td><strong>WhatsApp</strong></td><td>${escapeHtml(contact.phone)}</td></tr>
        <tr><td><strong>Nationalité</strong></td><td>${escapeHtml(contact.nationality ?? "—")}</td></tr>
        <tr><td><strong>Département</strong></td><td>${escapeHtml(contact.department ?? "—")}</td></tr>
        <tr><td><strong>Origine</strong></td><td>${escapeHtml(contact.origin)}</td></tr>
        <tr><td><strong>Catégorie</strong></td><td>${escapeHtml(result.category)}</td></tr>
        <tr><td><strong>Red flags</strong></td><td>${result.redFlags.join(", ") || "—"}</td></tr>
      </table>
      <h3>Réponses détaillées</h3>
      <table style="width:100%;border-collapse:collapse;font-size:13px">
        ${buildAnswersTable(answers)}
      </table>
    </div>
  `;

  const prospectSent = await sendResend({
    from: FROM,
    to: contact.email,
    subject: `Votre score d'éligibilité Diaspora Démarches : ${result.score}/100`,
    html: prospectHtml,
    replyTo: ADMIN,
  });

  const adminSent = await sendResend({
    from: FROM,
    to: ADMIN,
    subject: `🟢 Nouveau lead — ${contact.firstname} ${contact.lastname ?? ""} — Score ${result.score}/100`,
    html: adminHtml,
    replyTo: contact.email,
  });

  // Optional webhook for Google Sheet sync — fires & forgets
  const webhook = process.env.QUIZ_SHEET_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contact, result, answers, at: new Date().toISOString() }),
      });
    } catch {
      /* swallow */
    }
  }

  if (!process.env.RESEND_API_KEY) {
    // No backend configured — log to server console for now.
    console.log("[quiz/submit] No RESEND_API_KEY set. Lead captured locally only:", {
      score: result.score,
      category: result.category,
      email: contact.email,
    });
  }

  return NextResponse.json({
    ok: true,
    emailed: { prospect: prospectSent === true, admin: adminSent === true },
  });
}
