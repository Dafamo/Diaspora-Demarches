# Diaspora Démarches

Site web officiel de **Diaspora Démarches** — accompagnement administratif spécialisé
pour la diaspora africaine en France. Programme Régularisation à 697 €, livré en
14 jours, 100% digital.

## Stack

- **Next.js 15** (App Router) + **TypeScript** (strict mode)
- **Tailwind CSS 3** avec palette personnalisée (primary, accent, success…)
- **next-intl** pour l'i18n (fr / be / ch / lu / ca — seul `fr` est rempli)
- **framer-motion** pour les animations
- **lucide-react** pour les icônes
- **Vercel Analytics** intégré

## Lancer le site en local

```bash
npm install
npm run dev
```

Le site est servi sur [http://localhost:3000](http://localhost:3000). La page d'accueil
redirige automatiquement vers `/fr`.

## Scripts disponibles

| Script             | Description                                 |
| ------------------ | ------------------------------------------- |
| `npm run dev`      | Lance le serveur de développement           |
| `npm run build`    | Build de production                         |
| `npm run start`    | Lance le serveur en mode production         |
| `npm run typecheck`| Vérifie les types TypeScript (`tsc`)        |
| `npm run lint`     | Lint Next.js (si configuré)                 |

## Déployer une mise à jour

Le déploiement Vercel est connecté au repo GitHub. Chaque push sur la branche
principale déclenche un build et une mise en ligne automatique.

```bash
git add .
git commit -m "Mise à jour : …"
git push
```

Les Pull Requests bénéficient automatiquement de **Preview Deployments** Vercel.

## Structure du projet

```
.
├── messages/                 # Fichiers de traduction par locale
│   ├── fr.json               # 🇫🇷 Texte complet du site
│   ├── be.json               # 🇧🇪 (vide — fallback FR)
│   ├── ch.json               # 🇨🇭 (vide — fallback FR)
│   ├── lu.json               # 🇱🇺 (vide — fallback FR)
│   └── ca.json               # 🇨🇦 (vide — fallback FR)
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout (pass-through)
│   │   ├── globals.css             # Styles + utilities Tailwind
│   │   ├── robots.ts               # /robots.txt
│   │   ├── sitemap.ts              # /sitemap.xml
│   │   └── [locale]/
│   │       ├── layout.tsx          # <html> + <NextIntlClientProvider>
│   │       ├── page.tsx            # Homepage
│   │       ├── regularisation/
│   │       ├── comment-ca-marche/
│   │       ├── a-propos/
│   │       ├── contact/
│   │       ├── cgv/
│   │       ├── mentions-legales/
│   │       ├── confidentialite/
│   │       └── cookies/
│   ├── components/                 # Composants UI
│   ├── i18n/
│   │   ├── routing.ts              # Config des locales + helpers Link/Router
│   │   └── request.ts              # Charge les messages côté serveur
│   ├── lib/
│   │   └── cn.ts                   # Helper clsx + tailwind-merge
│   └── middleware.ts               # Middleware next-intl
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

## Modifier les textes

Tous les textes du site sont centralisés dans **`messages/fr.json`**.
Édite ce fichier, sauvegarde, et le serveur Next.js rafraîchit la page
automatiquement en mode `dev`.

Exemple : pour changer le titre de la Hero, modifie la clé `hero.title`.

## Ajouter une nouvelle locale (BE, CH, LU, CA…)

1. **Remplir le fichier `messages/<locale>.json`** avec la traduction complète
   (même structure que `fr.json`).
2. Dans **`src/i18n/request.ts`**, remplacer la ligne
   `const messagesLocale = locale === "fr" ? "fr" : "fr";`
   par `const messagesLocale = locale;` pour activer le chargement par locale.
3. **Activer le sélecteur de pays** dans la Navbar : importer `LanguageSwitcher`
   depuis `@/components/LanguageSwitcher` et l'afficher.
4. Adapter les références légales locales si nécessaire (CESEDA → loi belge…).

Les locales sont déclarées dans `src/i18n/routing.ts` :
`["fr", "be", "ch", "lu", "ca"]`.

## Variables d'environnement

| Variable              | Usage                                |
| --------------------- | ------------------------------------ |
| `NEXT_PUBLIC_GA_ID`   | Google Analytics 4 (optionnel)       |

Aucune variable n'est requise pour faire tourner le site.

## Performances & accessibilité

- Images : `next/image` (à utiliser quand des images seront ajoutées)
- Fonts : `next/font` Google (Inter + Poppins) sans layout shift
- Score Lighthouse cible : Performance > 95, SEO 100, Accessibilité 100
- Skip-to-content, ARIA labels, touch targets ≥ 44px

## Déploiement initial (mémo)

Voir le guide complet dans `CLAUDE.md`. En résumé :

1. Repo GitHub `diasporademarches` privé.
2. Import dans Vercel → détection automatique Next.js → Deploy.
3. Vercel → Settings → Domains → ajouter `diasporademarches.com`.
4. Chez Hostinger DNS : ajouter `A @ 76.76.21.21` et `CNAME www → cname.vercel-dns.com`.
5. **Ne pas toucher** aux entrées MX / SPF / DKIM / DMARC (email pro).
