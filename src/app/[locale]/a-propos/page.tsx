import type { Metadata } from "next";
import Image from "next/image";
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
          <div className="container-tight grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-soft">
              <Image
                src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80"
                alt="Vue de Paris depuis la Tour Eiffel"
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
              />
            </div>
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
