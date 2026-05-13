import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { PageHeader } from "./PageHeader";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHeader eyebrow="Légal" title={title} subtitle={updated} />
        <section className="section pt-0">
          <div className="container-tight max-w-3xl">
            <article className="prose-legal card text-text-primary">
              {children}
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
