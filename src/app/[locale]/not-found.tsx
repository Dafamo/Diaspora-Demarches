import { Link } from "@/i18n/routing";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main" className="section">
        <div className="container-tight max-w-2xl text-center">
          <span className="eyebrow">Erreur 404</span>
          <h1 className="font-display text-4xl font-bold text-primary md:text-5xl">
            Page introuvable
          </h1>
          <p className="mt-4 text-text-secondary">
            La page que vous cherchez n&apos;existe pas ou a été déplacée.
          </p>
          <Link href="/" className="btn-primary mt-8">
            Retour à l&apos;accueil
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
