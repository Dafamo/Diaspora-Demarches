import type { AnswerMap } from "./quiz-scoring";

const ANSWERS_KEY = "dd_quiz_answers_v1";
const CONTACT_KEY = "dd_quiz_contact_v1";
const RESULT_KEY = "dd_quiz_result_v1";

export type ContactInfo = {
  firstname: string;
  lastname?: string;
  email: string;
  phone: string;
  origin: string;
  nationality?: string;
  department?: string;
  rgpd: boolean;
};

export function saveAnswers(answers: AnswerMap) {
  if (typeof window === "undefined") return;
  localStorage.setItem(ANSWERS_KEY, JSON.stringify(answers));
}

export function loadAnswers(): AnswerMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(ANSWERS_KEY);
    return raw ? (JSON.parse(raw) as AnswerMap) : {};
  } catch {
    return {};
  }
}

export function clearAnswers() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(ANSWERS_KEY);
}

export function saveContact(c: ContactInfo) {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(CONTACT_KEY, JSON.stringify(c));
}

export function loadContact(): ContactInfo | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(CONTACT_KEY);
    return raw ? (JSON.parse(raw) as ContactInfo) : null;
  } catch {
    return null;
  }
}

export function saveResultPayload(payload: unknown) {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(RESULT_KEY, JSON.stringify(payload));
}

export function loadResultPayload<T = unknown>(): T | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(RESULT_KEY);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

export function clearQuizSession() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(ANSWERS_KEY);
  sessionStorage.removeItem(CONTACT_KEY);
  sessionStorage.removeItem(RESULT_KEY);
}
