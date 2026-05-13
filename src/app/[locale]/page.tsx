import { setRequestLocale } from "next-intl/server";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { PainPoints } from "@/components/PainPoints";
import { Solution } from "@/components/Solution";
import { ProcessSteps } from "@/components/ProcessSteps";
import { WhatWeDo } from "@/components/WhatWeDo";
import { Promise as PromiseSection } from "@/components/Promise";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { QuizTeaser } from "@/components/QuizTeaser";

export default async function HomePage({
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
        <Hero />
        <PainPoints />
        <QuizTeaser />
        <Solution />
        <ProcessSteps />
        <WhatWeDo />
        <PromiseSection />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
