export type QuestionFlag = "no_id" | "recent_oqtf" | "serious_record";

export type QuestionOption = {
  label: string;
  points: number;
  flag?: QuestionFlag;
  /** Used to derive textual strengths/weaknesses on the result page. */
  strength?: string;
  weakness?: string;
};

export type Question =
  | {
      id: number;
      shortLabel: string;
      text: string;
      hint?: string;
      type: "radio";
      options: QuestionOption[];
      maxPoints: number;
      category: "presence" | "work" | "family" | "documents" | "integration" | "history" | "context";
    }
  | {
      id: number;
      shortLabel: string;
      text: string;
      hint?: string;
      type: "text";
      maxPoints: 0;
      category: "context";
    }
  | {
      id: number;
      shortLabel: string;
      text: string;
      hint?: string;
      type: "select";
      options: { label: string; value: string }[];
      maxPoints: 0;
      category: "context";
    };

export const FRENCH_DEPARTMENTS: { code: string; name: string }[] = [
  { code: "01", name: "Ain" }, { code: "02", name: "Aisne" }, { code: "03", name: "Allier" },
  { code: "04", name: "Alpes-de-Haute-Provence" }, { code: "05", name: "Hautes-Alpes" },
  { code: "06", name: "Alpes-Maritimes" }, { code: "07", name: "Ardèche" },
  { code: "08", name: "Ardennes" }, { code: "09", name: "Ariège" }, { code: "10", name: "Aube" },
  { code: "11", name: "Aude" }, { code: "12", name: "Aveyron" },
  { code: "13", name: "Bouches-du-Rhône" }, { code: "14", name: "Calvados" },
  { code: "15", name: "Cantal" }, { code: "16", name: "Charente" },
  { code: "17", name: "Charente-Maritime" }, { code: "18", name: "Cher" },
  { code: "19", name: "Corrèze" }, { code: "2A", name: "Corse-du-Sud" },
  { code: "2B", name: "Haute-Corse" }, { code: "21", name: "Côte-d'Or" },
  { code: "22", name: "Côtes-d'Armor" }, { code: "23", name: "Creuse" },
  { code: "24", name: "Dordogne" }, { code: "25", name: "Doubs" }, { code: "26", name: "Drôme" },
  { code: "27", name: "Eure" }, { code: "28", name: "Eure-et-Loir" },
  { code: "29", name: "Finistère" }, { code: "30", name: "Gard" },
  { code: "31", name: "Haute-Garonne" }, { code: "32", name: "Gers" }, { code: "33", name: "Gironde" },
  { code: "34", name: "Hérault" }, { code: "35", name: "Ille-et-Vilaine" },
  { code: "36", name: "Indre" }, { code: "37", name: "Indre-et-Loire" },
  { code: "38", name: "Isère" }, { code: "39", name: "Jura" }, { code: "40", name: "Landes" },
  { code: "41", name: "Loir-et-Cher" }, { code: "42", name: "Loire" },
  { code: "43", name: "Haute-Loire" }, { code: "44", name: "Loire-Atlantique" },
  { code: "45", name: "Loiret" }, { code: "46", name: "Lot" }, { code: "47", name: "Lot-et-Garonne" },
  { code: "48", name: "Lozère" }, { code: "49", name: "Maine-et-Loire" },
  { code: "50", name: "Manche" }, { code: "51", name: "Marne" }, { code: "52", name: "Haute-Marne" },
  { code: "53", name: "Mayenne" }, { code: "54", name: "Meurthe-et-Moselle" },
  { code: "55", name: "Meuse" }, { code: "56", name: "Morbihan" }, { code: "57", name: "Moselle" },
  { code: "58", name: "Nièvre" }, { code: "59", name: "Nord" }, { code: "60", name: "Oise" },
  { code: "61", name: "Orne" }, { code: "62", name: "Pas-de-Calais" },
  { code: "63", name: "Puy-de-Dôme" }, { code: "64", name: "Pyrénées-Atlantiques" },
  { code: "65", name: "Hautes-Pyrénées" }, { code: "66", name: "Pyrénées-Orientales" },
  { code: "67", name: "Bas-Rhin" }, { code: "68", name: "Haut-Rhin" }, { code: "69", name: "Rhône" },
  { code: "70", name: "Haute-Saône" }, { code: "71", name: "Saône-et-Loire" },
  { code: "72", name: "Sarthe" }, { code: "73", name: "Savoie" },
  { code: "74", name: "Haute-Savoie" }, { code: "75", name: "Paris" },
  { code: "76", name: "Seine-Maritime" }, { code: "77", name: "Seine-et-Marne" },
  { code: "78", name: "Yvelines" }, { code: "79", name: "Deux-Sèvres" },
  { code: "80", name: "Somme" }, { code: "81", name: "Tarn" }, { code: "82", name: "Tarn-et-Garonne" },
  { code: "83", name: "Var" }, { code: "84", name: "Vaucluse" }, { code: "85", name: "Vendée" },
  { code: "86", name: "Vienne" }, { code: "87", name: "Haute-Vienne" }, { code: "88", name: "Vosges" },
  { code: "89", name: "Yonne" }, { code: "90", name: "Territoire de Belfort" },
  { code: "91", name: "Essonne" }, { code: "92", name: "Hauts-de-Seine" },
  { code: "93", name: "Seine-Saint-Denis" }, { code: "94", name: "Val-de-Marne" },
  { code: "95", name: "Val-d'Oise" }, { code: "971", name: "Guadeloupe" },
  { code: "972", name: "Martinique" }, { code: "973", name: "Guyane" },
  { code: "974", name: "La Réunion" }, { code: "976", name: "Mayotte" },
];

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    shortLabel: "Présence en France",
    text: "Depuis combien d'années vivez-vous en France de manière continue ?",
    type: "radio",
    category: "presence",
    maxPoints: 15,
    options: [
      { label: "Moins d'1 an", points: 0, weakness: "Présence en France inférieure à 1 an" },
      { label: "1 à 3 ans", points: 3, weakness: "Présence en France insuffisante (1-3 ans)" },
      { label: "3 à 5 ans", points: 7, weakness: "Présence en France juste sous le seuil habituel" },
      { label: "5 à 7 ans", points: 11, strength: "5 à 7 ans de présence en France" },
      { label: "7 à 10 ans", points: 13, strength: "7 à 10 ans de présence en France" },
      { label: "Plus de 10 ans", points: 15, strength: "Plus de 10 ans de présence en France" },
    ],
  },
  {
    id: 2,
    shortLabel: "Preuves de présence",
    text: "Pouvez-vous fournir au moins 2 justificatifs par année de présence en France ?",
    hint: "Factures, attestations médicales, scolaires, fiscales, bancaires, etc.",
    type: "radio",
    category: "presence",
    maxPoints: 10,
    options: [
      { label: "Oui, pour toutes les années", points: 10, strength: "Preuves de présence solides pour chaque année" },
      { label: "Oui, pour la majorité des années", points: 7, strength: "Preuves de présence pour la majorité des années" },
      { label: "Oui, mais pour quelques années seulement", points: 3, weakness: "Preuves de présence partielles" },
      { label: "Non, très peu de justificatifs", points: 0, weakness: "Très peu de justificatifs de présence" },
    ],
  },
  {
    id: 3,
    shortLabel: "Travail actuel",
    text: "Avez-vous une activité professionnelle en France ?",
    type: "radio",
    category: "work",
    maxPoints: 15,
    options: [
      { label: "Oui, CDI déclaré", points: 15, strength: "CDI déclaré" },
      { label: "Oui, CDD ou intérim déclaré", points: 12, strength: "CDD ou intérim déclaré" },
      { label: "Oui, mais non déclaré (au noir)", points: 8, weakness: "Travail non déclaré : à régulariser pour renforcer le dossier" },
      { label: "Oui, indépendant ou freelance", points: 10, strength: "Activité indépendante" },
      { label: "Non, je ne travaille pas", points: 0, weakness: "Pas d'activité professionnelle déclarée" },
    ],
  },
  {
    id: 4,
    shortLabel: "Ancienneté de l'emploi",
    text: "Si vous travaillez : depuis combien de mois ?",
    type: "radio",
    category: "work",
    maxPoints: 5,
    options: [
      { label: "Plus de 24 mois", points: 5, strength: "Plus de 24 mois d'ancienneté" },
      { label: "12 à 24 mois", points: 3, strength: "12 à 24 mois d'ancienneté" },
      { label: "6 à 12 mois", points: 2 },
      { label: "Moins de 6 mois ou je ne travaille pas", points: 0 },
    ],
  },
  {
    id: 5,
    shortLabel: "Bulletins de salaire",
    text: "Pouvez-vous fournir vos bulletins de salaire ?",
    type: "radio",
    category: "work",
    maxPoints: 5,
    options: [
      { label: "Oui, 24 mois ou plus", points: 5, strength: "24+ mois de bulletins de salaire" },
      { label: "Oui, 12 à 24 mois", points: 3, strength: "12 à 24 mois de bulletins de salaire" },
      { label: "Oui, mais moins de 12 mois", points: 1 },
      { label: "Non, pas de bulletins de salaire", points: 0, weakness: "Aucun bulletin de salaire" },
    ],
  },
  {
    id: 6,
    shortLabel: "Conjoint(e)",
    text: "Êtes-vous en couple ? Quel est le statut de votre conjoint(e) ?",
    type: "radio",
    category: "family",
    maxPoints: 10,
    options: [
      { label: "Marié(e) à un(e) Français(e)", points: 10, strength: "Mariage avec un(e) Français(e)" },
      { label: "PACS avec un(e) Français(e)", points: 8, strength: "PACS avec un(e) Français(e)" },
      { label: "Marié(e) à un(e) titulaire de titre de séjour", points: 6, strength: "Conjoint(e) titulaire d'un titre de séjour" },
      { label: "Concubinage avec preuves de vie commune", points: 4, strength: "Vie commune prouvée" },
      { label: "Célibataire ou pas de couple en France", points: 0 },
    ],
  },
  {
    id: 7,
    shortLabel: "Enfants en France",
    text: "Avez-vous des enfants en France ?",
    type: "radio",
    category: "family",
    maxPoints: 10,
    options: [
      { label: "Oui, au moins un enfant français", points: 10, strength: "Au moins un enfant français" },
      { label: "Oui, enfants scolarisés depuis plus de 3 ans", points: 8, strength: "Enfants scolarisés depuis plus de 3 ans" },
      { label: "Oui, enfants scolarisés depuis 1-3 ans", points: 5, strength: "Enfants scolarisés (1-3 ans)" },
      { label: "Oui, enfants en bas âge non scolarisés", points: 3 },
      { label: "Non, pas d'enfants en France", points: 0 },
    ],
  },
  {
    id: 8,
    shortLabel: "Documents d'identité",
    text: "Avez-vous votre passeport (en cours ou périmé) ou pièce d'identité de votre pays d'origine ?",
    type: "radio",
    category: "documents",
    maxPoints: 10,
    options: [
      { label: "Oui, passeport en cours de validité", points: 10, strength: "Passeport en cours de validité" },
      { label: "Oui, passeport périmé", points: 7, strength: "Passeport périmé (renouvelable)" },
      { label: "Oui, autre pièce d'identité (carte nationale)", points: 5 },
      { label: "Non, aucun document d'identité", points: 0, flag: "no_id", weakness: "Aucun document d'identité — démarche impossible sans" },
    ],
  },
  {
    id: 9,
    shortLabel: "Acte de naissance",
    text: "Avez-vous votre acte de naissance ?",
    type: "radio",
    category: "documents",
    maxPoints: 5,
    options: [
      { label: "Oui, récent (moins de 6 mois)", points: 5, strength: "Acte de naissance récent" },
      { label: "Oui, ancien mais traduisible", points: 3 },
      { label: "Non, mais je peux l'obtenir", points: 2 },
      { label: "Non, impossible de l'obtenir", points: 0, weakness: "Acte de naissance impossible à obtenir" },
    ],
  },
  {
    id: 10,
    shortLabel: "Justificatif de domicile",
    text: "Avez-vous un justificatif de domicile à votre nom de moins de 3 mois ?",
    hint: "Facture, quittance, attestation d'hébergement",
    type: "radio",
    category: "documents",
    maxPoints: 5,
    options: [
      { label: "Oui, à mon nom (bail, factures)", points: 5, strength: "Justificatif de domicile à votre nom" },
      { label: "Oui, attestation d'hébergement", points: 3, strength: "Attestation d'hébergement disponible" },
      { label: "Non, mais je peux l'obtenir rapidement", points: 2 },
      { label: "Non, situation instable", points: 0, weakness: "Situation de logement instable" },
    ],
  },
  {
    id: 11,
    shortLabel: "Niveau de français",
    text: "Comment évaluez-vous votre niveau de français ?",
    type: "radio",
    category: "integration",
    maxPoints: 5,
    options: [
      { label: "Excellent (lu, écrit, parlé couramment)", points: 5, strength: "Excellent niveau de français" },
      { label: "Bon (je me débrouille bien)", points: 4, strength: "Bon niveau de français" },
      { label: "Moyen (je comprends, j'ai des difficultés à écrire)", points: 2, weakness: "Niveau de français à renforcer" },
      { label: "Débutant ou faible", points: 0, weakness: "Niveau de français insuffisant" },
    ],
  },
  {
    id: 12,
    shortLabel: "Intégration sociale",
    text: "Avez-vous une vie sociale en France (associations, sport, religion, culture) ?",
    type: "radio",
    category: "integration",
    maxPoints: 5,
    options: [
      { label: "Oui, engagement actif et prouvable", points: 5, strength: "Engagement associatif prouvable" },
      { label: "Oui, participation régulière", points: 3, strength: "Vie sociale en France" },
      { label: "Oui, mais pas vraiment actif", points: 1 },
      { label: "Non, pas vraiment", points: 0, weakness: "Peu d'éléments d'intégration sociale" },
    ],
  },
  {
    id: 13,
    shortLabel: "Avis d'imposition",
    text: "Avez-vous un avis d'imposition (même de non-imposition) en France ?",
    type: "radio",
    category: "integration",
    maxPoints: 3,
    options: [
      { label: "Oui, chaque année depuis mon arrivée", points: 3, strength: "Avis d'imposition chaque année" },
      { label: "Oui, mais quelques années seulement", points: 2 },
      { label: "Oui, un ou deux ans", points: 1 },
      { label: "Non, jamais", points: 0, weakness: "Aucun avis d'imposition" },
    ],
  },
  {
    id: 14,
    shortLabel: "OQTF",
    text: "Avez-vous déjà reçu une OQTF (Obligation de Quitter le Territoire Français) ?",
    type: "radio",
    category: "history",
    maxPoints: 15,
    options: [
      { label: "Non, jamais", points: 15, strength: "Aucune OQTF" },
      { label: "Oui, mais il y a plus de 3 ans", points: 10 },
      { label: "Oui, il y a 1 à 3 ans", points: 5, weakness: "OQTF reçue il y a 1 à 3 ans" },
      { label: "Oui, il y a moins d'1 an", points: 0, flag: "recent_oqtf", weakness: "OQTF récente — avocat indispensable" },
    ],
  },
  {
    id: 15,
    shortLabel: "Casier judiciaire",
    text: "Avez-vous un casier judiciaire vierge en France ?",
    type: "radio",
    category: "history",
    maxPoints: 5,
    options: [
      { label: "Oui, totalement vierge", points: 5, strength: "Casier judiciaire vierge" },
      { label: "Une petite infraction ancienne sans condamnation", points: 3 },
      { label: "Condamnation mineure", points: 1, weakness: "Condamnation mineure au casier" },
      { label: "Condamnation sérieuse", points: 0, flag: "serious_record", weakness: "Condamnation sérieuse — avocat requis" },
    ],
  },
  {
    id: 16,
    shortLabel: "Mode d'entrée",
    text: "Comment êtes-vous entré(e) en France ?",
    type: "radio",
    category: "history",
    maxPoints: 5,
    options: [
      { label: "Avec un visa (étudiant, touriste, travail, autre)", points: 5, strength: "Entrée régulière avec visa" },
      { label: "Sans visa mais via un pays Schengen", points: 3 },
      { label: "Sans visa, entrée non régulière", points: 2 },
      { label: "Je préfère ne pas répondre", points: 1 },
    ],
  },
  {
    id: 17,
    shortLabel: "Démarches antérieures",
    text: "Avez-vous déjà entamé des démarches de régularisation auparavant ?",
    type: "radio",
    category: "history",
    maxPoints: 3,
    options: [
      { label: "Non, c'est ma première démarche", points: 3, strength: "Première démarche de régularisation" },
      { label: "Oui, démarche en cours sans réponse", points: 2 },
      { label: "Oui, refusée(s) sans recours", points: 1, weakness: "Refus(s) administratif(s) antérieur(s)" },
      { label: "Oui, refusée(s) avec recours échoué(s)", points: 0, weakness: "Recours antérieur(s) échoué(s)" },
    ],
  },
  {
    id: 18,
    shortLabel: "Nationalité",
    text: "Quelle est votre nationalité ?",
    hint: "Utilisé pour personnaliser le rapport (champ libre).",
    type: "text",
    category: "context",
    maxPoints: 0,
  },
  {
    id: 19,
    shortLabel: "Département",
    text: "Dans quel département vivez-vous ?",
    type: "select",
    category: "context",
    maxPoints: 0,
    options: FRENCH_DEPARTMENTS.map((d) => ({
      label: `${d.code} — ${d.name}`,
      value: d.code,
    })),
  },
  {
    id: 20,
    shortLabel: "Urgence",
    text: "Quel est votre niveau d'urgence pour cette démarche ?",
    type: "radio",
    category: "context",
    maxPoints: 3,
    options: [
      { label: "Très urgent (sous 1 mois)", points: 3 },
      { label: "Urgent (sous 3 mois)", points: 2 },
      { label: "Modéré (3-6 mois)", points: 1 },
      { label: "Pas d'urgence particulière", points: 0 },
    ],
  },
];

export const MAX_RAW_POINTS = QUIZ_QUESTIONS.reduce(
  (sum, q) => sum + (q.maxPoints ?? 0),
  0
);
