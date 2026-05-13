import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { LegalLayout } from "@/components/LegalLayout";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.cgv" });
  return {
    title: t("title"),
    description: "Conditions Générales de Vente de Diaspora Démarches.",
    alternates: { canonical: `/${locale}/cgv` },
  };
}

export default async function CGVPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.cgv");

  return (
    <LegalLayout title={t("title")} updated={t("updated")}>
      <h2>1. Objet</h2>
      <p>
        Les présentes Conditions Générales de Vente (CGV) régissent les
        relations contractuelles entre AARON ENTERPRISES, SASU au capital de
        150 €, immatriculée au RCS sous le SIREN 882 844 327, dont le siège
        social est situé 11 rue Auguste Comte, 92170 Vanves (ci-après «&nbsp;le
        Prestataire&nbsp;»), et toute personne physique ou morale souscrivant
        au service Diaspora Démarches (ci-après «&nbsp;le Client&nbsp;»).
      </p>

      <h2>2. Description du service</h2>
      <p>
        Le Prestataire propose un service d&apos;accompagnement administratif à
        distance dédié à la constitution de dossiers de régularisation. Le
        service inclut un diagnostic en visio, la liste personnalisée des
        pièces, la rédaction des courriers, emails et CERFA, ainsi que la
        trame du récit destiné à la préfecture. Le service est exclusivement
        digital et ne comporte aucun déplacement.
      </p>
      <p>
        Le Prestataire ne fournit aucun conseil juridique au sens de la loi
        n°&nbsp;71-1130 du 31 décembre 1971. Pour toute question relevant du
        conseil juridique ou du contentieux, le Client est orienté vers un
        avocat.
      </p>

      <h2>3. Tarif et modalités de paiement</h2>
      <p>
        Le Programme Régularisation est proposé au tarif de 697&nbsp;€,
        payable en une seule fois par virement bancaire avant le démarrage de
        la prestation. TVA non applicable, article 293&nbsp;B du CGI.
      </p>

      <h2>4. Délais</h2>
      <p>
        Le livrable final est transmis dans un délai de 14&nbsp;jours
        calendaires à compter de la réception complète des documents demandés
        au Client. Le Client dispose de 30&nbsp;jours pour transmettre
        l&apos;ensemble des pièces.
      </p>

      <h2>5. Sélection des dossiers</h2>
      <p>
        Le Prestataire se réserve le droit de refuser tout dossier qu&apos;il
        estime insuffisamment solide à l&apos;issue du diagnostic gratuit.
        Dans ce cas, aucune somme n&apos;est due.
      </p>

      <h2>6. Garantie de Conformité</h2>
      <p>
        Si le dossier livré est rejeté par la préfecture en raison d&apos;une
        pièce manquante ou d&apos;une erreur imputable au Prestataire,
        celui-ci accompagne gratuitement le Client pour la nouvelle
        soumission. La garantie ne couvre pas la décision finale de
        l&apos;administration.
      </p>

      <h2>7. Droit de rétractation</h2>
      <p>
        Conformément aux articles L.221-18 et suivants du Code de la
        consommation, le Client dispose d&apos;un délai de 14&nbsp;jours pour
        se rétracter. La prestation pouvant débuter pendant ce délai à la
        demande expresse du Client, ce dernier perd son droit de rétractation
        dès lors que la prestation est entièrement exécutée.
      </p>

      <h2>8. Responsabilité</h2>
      <p>
        Le Prestataire est soumis à une obligation de moyens. Il ne saurait
        être tenu responsable de la décision rendue par la préfecture ou par
        toute autorité administrative.
      </p>

      <h2>9. Données personnelles</h2>
      <p>
        Les données collectées sont traitées conformément à la Politique de
        confidentialité accessible sur le site.
      </p>

      <h2>10. Droit applicable</h2>
      <p>
        Les présentes CGV sont soumises au droit français. Tout litige relève
        des tribunaux compétents du ressort de Paris.
      </p>
    </LegalLayout>
  );
}
