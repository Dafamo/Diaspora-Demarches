import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { CalcomEmbed } from "@/components/CalcomEmbed";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.contact" });
  return {
    title: t("title"),
    description: t("subtitle"),
    alternates: { canonical: `/${locale}/contact` },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.contact");
  const tFooter = await getTranslations("footer");

  return (
    <>
      <Navbar />
      <main id="main">
        <PageHeader eyebrow="Contact" title={t("title")} subtitle={t("subtitle")} />
        <section className="section pt-0">
          <div className="container-tight grid gap-8 lg:grid-cols-[1fr_1.4fr]">
            <div className="card h-fit">
              <h2 className="font-display text-lg font-semibold text-primary">
                {t("emailLabel")}
              </h2>
              <a
                href={`mailto:${tFooter("email")}`}
                className="mt-2 inline-flex items-center gap-2 text-text-primary hover:text-primary"
              >
                <Mail size={18} aria-hidden /> {tFooter("email")}
              </a>
              <h2 className="mt-6 font-display text-lg font-semibold text-primary">
                {t("phoneLabel")}
              </h2>
              <a
                href={`tel:+33${tFooter("phone").replace(/\s/g, "").slice(1)}`}
                className="mt-2 inline-flex items-center gap-2 text-text-primary hover:text-primary"
              >
                <Phone size={18} aria-hidden /> {tFooter("phone")}
              </a>
            </div>
            <div>
              <h2 className="mb-4 font-display text-lg font-semibold text-primary">
                {t("bookTitle")}
              </h2>
              <CalcomEmbed />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
