import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";

export function CTASection() {
  return (
    <section className="section">
      <div className="container-tight">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-8 text-center text-white md:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Prêt à transformer votre situation&nbsp;?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/85 md:text-lg">
              Découvrez en 7 minutes si votre dossier est éligible.
              Sans engagement. 100% confidentiel.
            </p>
            <Link href="/quiz" className="btn-primary mt-7">
              Faire le test d&apos;éligibilité gratuit
              <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
