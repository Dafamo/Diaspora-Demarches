import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { LegalLayout } from "@/components/LegalLayout";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.mentions" });
  return {
    title: t("title"),
    description: "Mentions légales du site Diaspora Démarches.",
    alternates: { canonical: `/${locale}/mentions-legales` },
  };
}

export default async function MentionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.mentions");

  return (
    <LegalLayout title={t("title")} updated={t("updated")}>
      <h2>Éditeur</h2>
      <p>
        Le site diasporademarches.com est édité par AARON ENTERPRISES, SASU au
        capital de 150&nbsp;€, immatriculée au RCS sous le SIREN
        882&nbsp;844&nbsp;327, dont le siège social est situé 11 rue Auguste
        Comte, 92170 Vanves. TVA non applicable, article 293&nbsp;B du CGI.
      </p>
      <p>
        Directeur de la publication&nbsp;: Stéphane Oabaev.
        <br />
        Email&nbsp;: hello@diasporademarches.com — Téléphone&nbsp;: 07&nbsp;56&nbsp;83&nbsp;62&nbsp;64
      </p>

      <h2>Hébergeur</h2>
      <p>
        Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis.
        <br />
        Site web&nbsp;: vercel.com
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus du site (textes, logos, images, code) est
        protégé par le droit de la propriété intellectuelle. Toute
        reproduction sans autorisation expresse est interdite.
      </p>

      <h2>Activité</h2>
      <p>
        Service d&apos;accompagnement administratif. Ne fournit aucun conseil
        juridique au sens de la loi n°&nbsp;71-1130 du 31 décembre 1971.
      </p>
    </LegalLayout>
  );
}
