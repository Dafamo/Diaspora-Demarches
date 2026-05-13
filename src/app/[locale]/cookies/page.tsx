import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { LegalLayout } from "@/components/LegalLayout";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.cookies" });
  return {
    title: t("title"),
    description: "Politique cookies de Diaspora Démarches.",
    alternates: { canonical: `/${locale}/cookies` },
  };
}

export default async function CookiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.cookies");

  return (
    <LegalLayout title={t("title")} updated={t("updated")}>
      <h2>Qu&apos;est-ce qu&apos;un cookie&nbsp;?</h2>
      <p>
        Un cookie est un petit fichier déposé sur votre terminal lors de la
        visite d&apos;un site. Il permet de mémoriser des informations
        relatives à votre navigation.
      </p>

      <h2>Cookies utilisés</h2>
      <ul>
        <li>
          <strong>Cookies essentiels</strong>&nbsp;: nécessaires au
          fonctionnement du site (sécurité, langue). Aucune action de votre
          part n&apos;est requise.
        </li>
        <li>
          <strong>Mesure d&apos;audience</strong>&nbsp;: Vercel Analytics
          (anonymisé, sans cookie persistant). Google Analytics&nbsp;4
          n&apos;est activé qu&apos;avec votre consentement.
        </li>
      </ul>

      <h2>Gérer vos préférences</h2>
      <p>
        Vous pouvez à tout moment paramétrer les cookies depuis votre
        navigateur. Pour toute question&nbsp;: hello@diasporademarches.com.
      </p>
    </LegalLayout>
  );
}
