import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Promise as PromiseSection } from "@/components/Promise";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.howItWorks" });
  return {
    title: t("title"),
    description: t("subtitle"),
    alternates: { canonical: `/${locale}/comment-ca-marche` },
  };
}

export default async function HowItWorksPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.howItWorks");

  return (
    <>
      <Navbar />
      <main id="main">
        <PageHeader
          eyebrow="Méthode"
          title={t("title")}
          subtitle={t("subtitle")}
        />
        <ProcessSteps />
        <PromiseSection />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
