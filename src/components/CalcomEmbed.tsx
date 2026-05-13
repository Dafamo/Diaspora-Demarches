"use client";

import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";

export function CalcomEmbed() {
  const tCommon = useTranslations("common");
  const url = tCommon("calcomUrl");

  return (
    <div className="card overflow-hidden p-0">
      <div className="aspect-[4/5] w-full sm:aspect-[3/2]">
        <iframe
          src={`${url}?embed=1`}
          title="Réserver un diagnostic gratuit"
          loading="lazy"
          className="h-full w-full"
          allow="camera; microphone; autoplay; encrypted-media; fullscreen"
        />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border p-4">
        <p className="text-sm text-text-secondary">
          Vous ne voyez pas le calendrier ?
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg text-sm font-medium text-primary hover:underline"
        >
          Ouvrir Cal.com dans un nouvel onglet
          <ExternalLink size={14} aria-hidden />
        </a>
      </div>
    </div>
  );
}
