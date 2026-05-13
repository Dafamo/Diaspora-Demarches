import type { ReactNode } from "react";

export function PageHeader({
  title,
  subtitle,
  eyebrow,
  children,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  children?: ReactNode;
}) {
  return (
    <section className="pt-12 pb-10 md:pt-20 md:pb-14">
      <div className="container-tight max-w-3xl">
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h1 className="font-display text-4xl font-bold text-primary md:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 text-base text-text-secondary md:text-lg">
            {subtitle}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
