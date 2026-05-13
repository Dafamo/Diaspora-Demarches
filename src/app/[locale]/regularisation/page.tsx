import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Solution } from "@/components/Solution";
import { WhatWeDo } from "@/components/WhatWeDo";
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
  const t = await getTranslations({ locale, namespace: "pages.regularisation" });
  return {
    title: t("title"),
    description: t("subtitle"),
    alternates: { canonical: `/${locale}/regularisation` },
  };
}

export default async function RegularisationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.regularisation");

  return (
    <>
      <Navbar />
      <main id="main">
        <PageHeader
          eyebrow="Service"
          title={t("title")}
          subtitle={t("subtitle")}
        />
        <Solution />
        <WhatWeDo />
        <PromiseSection />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
