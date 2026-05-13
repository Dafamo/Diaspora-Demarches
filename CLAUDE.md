# Contexte projet — Diaspora Démarches

Ce fichier sert de mémoire pour les futures sessions Claude Code afin de
reprendre le travail sans réexpliquer tout le contexte.

## Activité

Diaspora Démarches accompagne la diaspora africaine francophone (32-45 ans)
résidant en France depuis 5 à 8 ans sans titre de séjour, dans la constitution
de leur dossier de régularisation. Service 100% digital, 0 déplacement.

- **Produit principal** : Programme Régularisation à **697 €**.
- **Délai** : 14 jours après réception complète des documents.
- **Diagnostic gratuit** en visio via Cal.com :
  https://cal.com/stephane-oabaev/diaspora-demarches
- **Email pro** : hello@diasporademarches.com (hébergé chez Hostinger).
- **Téléphone** : 07 56 83 62 64.

**Mention légale clé** : éditeur AARON ENTERPRISES, SASU, capital 150 €,
SIREN 882 844 327, 11 rue Auguste Comte, 92170 Vanves. TVA non applicable
(art. 293 B CGI). Service d'accompagnement administratif uniquement —
**ne fournit aucun conseil juridique** au sens de la loi du 31 décembre 1971.

## Stack

- Next.js 15 App Router + TypeScript strict
- Tailwind CSS 3 (config dans `tailwind.config.ts`)
- next-intl (locales : fr, be, ch, lu, ca — seule `fr` est remplie ;
  les autres redirigent vers le contenu FR via le fallback dans
  `src/i18n/request.ts`)
- framer-motion (animations subtiles côté Hero)
- lucide-react (icônes)
- Vercel Analytics activé ; GA4 prêt via `NEXT_PUBLIC_GA_ID`

## Identité visuelle

| Token             | Couleur     |
| ----------------- | ----------- |
| `primary`         | `#1F3864`   |
| `primary-hover`   | `#2E5A9E`   |
| `accent`          | `#C8753A`   |
| `accent-hover`    | `#E89858`   |
| `success`         | `#4FB6A1`   |
| `background`      | `#FAF7F2`   |
| `text-primary`    | `#1A1A1A`   |
| `text-secondary`  | `#4A4A4A`   |
| `border`          | `#E8E0D5`   |

- Titres : **Poppins** (500/600/700)
- Corps : **Inter** (400/500/600)
- Coins arrondis (`rounded-xl` / `rounded-2xl`), ombres douces (`shadow-soft`)
- CTA primaires sur `bg-accent`, hover `bg-accent-hover`, micro-translate y

## Structure clé

- `src/app/[locale]/page.tsx` — Homepage (toutes les sections)
- `src/app/[locale]/regularisation/page.tsx` — Page service
- `src/app/[locale]/comment-ca-marche/page.tsx` — Processus
- `src/app/[locale]/a-propos/page.tsx` — À propos
- `src/app/[locale]/contact/page.tsx` — Cal.com embed
- Pages légales : `cgv`, `mentions-legales`, `confidentialite`, `cookies`
- Composants UI dans `src/components/`
- Tous les textes : `messages/fr.json`

## i18n — points importants

- `LanguageSwitcher` existe mais **n'est pas affiché** (commenté en attendant).
- Pour activer une locale (ex. /be) :
  1. Remplir `messages/be.json` (même schéma que `fr.json`).
  2. Dans `src/i18n/request.ts`, mettre `const messagesLocale = locale;`.
  3. Importer et afficher `LanguageSwitcher` dans `Navbar`.

## Déploiement

- Repo GitHub `dafamo/diaspora-demarches`.
- Hébergement **Vercel** (Hobby gratuit), connecté à GitHub, déploiement auto à
  chaque push.
- Domaine **diasporademarches.com** chez Hostinger :
  - `A @` → `76.76.21.21`
  - `CNAME www` → `cname.vercel-dns.com`
  - **NE PAS toucher** aux MX / SPF / DKIM / DMARC (email hello@…).

## Conventions

- Toujours utiliser `Link` depuis `@/i18n/routing` pour les liens internes
  (préserve la locale automatiquement).
- Toujours utiliser `useTranslations` côté composants, ou `getTranslations` côté
  serveur.
- Pour ajouter une page : créer `src/app/[locale]/<slug>/page.tsx`,
  appeler `setRequestLocale(locale)` en tête de composant async, et ajouter
  la metadata via `generateMetadata`.
- Ajouter la nouvelle route dans `src/app/sitemap.ts` (variable `paths`).

## Roadmap (prompts prêts)

1. **Blog** (`/blog`, MDX, OG dynamiques, catégories : Régularisation,
   Naturalisation, Asile, Actualités, Conseils pratiques).
2. **Espace client** (NextAuth magic link, dashboard, upload, messagerie).
3. **Activer locale BE** (puis CH, LU, CA).

## Tests rapides

```bash
npm run typecheck
npm run build
npm run dev
```
