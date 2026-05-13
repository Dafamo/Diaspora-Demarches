import { Star } from "lucide-react";

export function Testimonials() {
  // Structure prête : remplir avec de vrais témoignages une fois disponibles.
  const testimonials: Array<{ name: string; role: string; quote: string }> = [];

  if (testimonials.length === 0) return null;

  return (
    <section className="section bg-white">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Ils nous font confiance</span>
          <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
            Témoignages
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={i} className="card">
              <div className="flex gap-1 text-accent" aria-hidden>
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={16} fill="currentColor" />
                ))}
              </div>
              <blockquote className="mt-4 text-text-primary">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-text-secondary">
                {t.name} · {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
