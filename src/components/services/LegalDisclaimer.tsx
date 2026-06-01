import { Scale } from "lucide-react";

export function LegalDisclaimer() {
  return (
    <section className="section pt-0">
      <div className="container-tight max-w-4xl">
        <div className="rounded-2xl border border-border bg-white/60 p-6 text-sm leading-relaxed text-text-secondary md:p-8">
          <div className="mb-4 flex items-center gap-2 font-display text-base font-semibold text-primary">
            <Scale size={18} aria-hidden /> Informations légales importantes
          </div>
          <p>
            <strong>Éditeur</strong>&nbsp;: AARON ENTERPRISES, SASU au capital
            de 150&nbsp;€, immatriculée au RCS sous le SIREN
            882&nbsp;844&nbsp;327, dont le siège social est situé 11 rue Auguste
            Comte, 92170 Vanves. TVA non applicable, article 293&nbsp;B du CGI.
          </p>
          <p className="mt-3">
            <strong>Nature des prestations</strong>&nbsp;: Diaspora Démarches
            propose un service d&apos;accompagnement administratif rédactionnel
            (constitution de dossiers, rédaction de courriers, formulaires
            CERFA, trames de récits). Conformément à la loi
            n°&nbsp;71-1130 du 31&nbsp;décembre 1971 portant réforme de
            certaines professions judiciaires et juridiques,{" "}
            <strong>nous ne fournissons aucun conseil juridique</strong>.
            Toute question relevant du conseil juridique ou du contentieux
            (recours contentieux, audience, défense devant une juridiction)
            est orientée vers un avocat partenaire.
          </p>
          <p className="mt-3">
            <strong>Obligation de moyens</strong>&nbsp;: nos prestations sont
            soumises à une obligation de moyens et non de résultat. La décision
            finale d&apos;octroi ou de refus d&apos;un titre de séjour,
            d&apos;une naturalisation ou de toute autre démarche appartient
            exclusivement à l&apos;administration française compétente
            (préfecture, OFII, ministère). Aucun prestataire — y compris un
            avocat — ne peut garantir l&apos;obtention d&apos;un titre.
          </p>
          <p className="mt-3">
            <strong>Garantie de Conformité</strong>&nbsp;: si votre dossier est
            rejeté par l&apos;administration en raison d&apos;une pièce
            manquante ou d&apos;une erreur imputable à Diaspora Démarches,
            nous reprenons gratuitement le travail pour la nouvelle
            soumission. Cette garantie ne couvre pas la décision de fond de
            l&apos;administration.
          </p>
        </div>
      </div>
    </section>
  );
}
