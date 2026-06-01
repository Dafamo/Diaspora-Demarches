export type Service = {
  slug: string;
  title: string;
  price: string;
  delay: string;
  tagline: string;
  description: string;
  audience: string;
  bullets: string[];
  featured?: boolean;
};

export const SERVICES: Service[] = [
  {
    slug: "recours",
    title: "Recours gracieux & hiérarchique",
    price: "350 €",
    delay: "7 jours",
    tagline: "Contester un refus",
    description:
      "Constitution d'un recours écrit et argumenté contre un refus préfectoral.",
    audience: "Pour vous si vous venez de recevoir un refus de la préfecture.",
    bullets: [
      "Analyse du refus et de ses motifs",
      "Rédaction du recours gracieux ou hiérarchique",
      "Pièces justificatives organisées",
      "Trame d'argumentation personnalisée",
    ],
  },
  {
    slug: "renouvellement",
    title: "Renouvellement de titre de séjour",
    price: "450 €",
    delay: "14 jours",
    tagline: "Conserver vos droits",
    description:
      "Dossier complet de renouvellement, prêt à déposer en préfecture.",
    audience:
      "Pour vous si vous êtes déjà titulaire d'un titre arrivant à échéance.",
    bullets: [
      "Liste personnalisée des pièces à fournir",
      "CERFA renseignés et vérifiés",
      "Lettre d'accompagnement rédigée",
      "Préparation à la prise de rendez-vous en ligne",
    ],
  },
  {
    slug: "regularisation",
    title: "Régularisation",
    price: "697 €",
    delay: "14 jours",
    tagline: "Notre programme phare",
    description:
      "Dossier complet de régularisation, livré digitalement et prêt à déposer.",
    audience:
      "Pour vous si vous vivez en France depuis 5 ans ou plus sans titre de séjour.",
    bullets: [
      "Diagnostic vidéo personnel de votre situation",
      "Plan d'action écrit étape par étape",
      "Liste personnalisée des pièces à rassembler",
      "Courriers, emails et CERFA rédigés sur mesure",
      "Trame du récit pour la préfecture",
      "Tutoriel vidéo + audio + écrit pour chaque étape",
      "3 révisions incluses · Garantie de Conformité",
    ],
    featured: true,
  },
  {
    slug: "regroupement",
    title: "Regroupement familial",
    price: "800 €",
    delay: "21 jours",
    tagline: "Faire venir vos proches",
    description:
      "Dossier complet de demande de regroupement familial auprès de l'OFII.",
    audience:
      "Pour vous si vous souhaitez faire venir votre conjoint(e) ou vos enfants en France.",
    bullets: [
      "Constitution du dossier OFII",
      "Justificatifs de ressources et de logement",
      "CERFA et formulaires renseignés",
      "Trame de la lettre de motivation",
      "Préparation à la visite OFII",
    ],
  },
  {
    slug: "naturalisation",
    title: "Naturalisation",
    price: "950 €",
    delay: "21 jours",
    tagline: "Devenir Français",
    description:
      "Dossier complet de demande de naturalisation par décret.",
    audience:
      "Pour vous si vous résidez régulièrement en France depuis 5 ans et souhaitez la nationalité.",
    bullets: [
      "Vérification des conditions d'éligibilité",
      "Liste des pièces et CERFA complets",
      "Rédaction du parcours d'assimilation",
      "Préparation à l'entretien d'assimilation",
      "Trame du récit de vie personnalisée",
    ],
  },
];
