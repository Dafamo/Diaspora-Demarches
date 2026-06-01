import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { WhyUs } from "@/components/services/WhyUs";
import { LegalDisclaimer } from "@/components/services/LegalDisclaimer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      "Nos Services — Diaspora Démarches | Régularisation, Naturalisation, Renouvellement de titre",
    description:
      "Découvrez nos prestations d'accompagnement administratif : régularisation (697 €), naturalisation, renouvellement de titre, regroupement familial, recours gracieux. SASU déclarée, livraison en 7 à 21 jours.",
    alternates: { canonical: `/${locale}/services` },
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main id="main">
        <ServicesHero />
        <ServiceGrid />
        <WhyUs />
        <CTASection />
        <LegalDisclaimer />
      </main>
      <Footer />
    </>
  );
}
