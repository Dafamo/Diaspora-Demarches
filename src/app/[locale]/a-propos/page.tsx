import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.about" });
  return {
    title: t("title"),
    description: t("intro"),
    alternates: { canonical: `/${locale}/a-propos` },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.about");

  return (
    <>
      <Navbar />
      <main id="main">
        <PageHeader eyebrow="Notre histoire" title={t("title")} subtitle={t("intro")} />
        <section className="section pt-0">
          <div className="container-tight max-w-3xl">
            <div className="card">
              <p className="text-base leading-relaxed text-text-primary md:text-lg">
                {t("body")}
              </p>
            </div>
          </div>
        </section>
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
