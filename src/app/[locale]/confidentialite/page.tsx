import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { LegalLayout } from "@/components/LegalLayout";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.privacy" });
  return {
    title: t("title"),
    description: "Politique de confidentialité de Diaspora Démarches.",
    alternates: { canonical: `/${locale}/confidentialite` },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.privacy");

  return (
    <LegalLayout title={t("title")} updated={t("updated")}>
      <h2>Responsable du traitement</h2>
      <p>
        AARON ENTERPRISES — hello@diasporademarches.com.
      </p>

      <h2>Données collectées</h2>
      <ul>
        <li>Identité et coordonnées (nom, prénom, email, téléphone).</li>
        <li>Données nécessaires à la constitution du dossier de régularisation.</li>
        <li>Données techniques (logs, statistiques de navigation anonymisées).</li>
      </ul>

      <h2>Finalités</h2>
      <ul>
        <li>Exécution de la prestation d&apos;accompagnement administratif.</li>
        <li>Communication avec le Client (email, téléphone).</li>
        <li>Conformité aux obligations légales et comptables.</li>
      </ul>

      <h2>Base légale</h2>
      <p>
        Exécution contractuelle, obligation légale, intérêt légitime du
        responsable du traitement.
      </p>

      <h2>Durée de conservation</h2>
      <p>
        Données client&nbsp;: 10&nbsp;ans après la fin de la mission, pour
        conformité légale et comptable. Données prospect&nbsp;: 3&nbsp;ans
        après le dernier contact.
      </p>

      <h2>Vos droits</h2>
      <p>
        Conformément au RGPD et à la loi Informatique et Libertés, vous
        disposez d&apos;un droit d&apos;accès, de rectification, de
        suppression, d&apos;opposition, de portabilité et de limitation.
        Exercez-les à hello@diasporademarches.com. Vous pouvez introduire une
        réclamation auprès de la CNIL.
      </p>

      <h2>Sécurité</h2>
      <p>
        Vos données sont chiffrées en transit (TLS) et au repos. Elles ne sont
        jamais transmises à des tiers à des fins commerciales.
      </p>
    </LegalLayout>
  );
}
