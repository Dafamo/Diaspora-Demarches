import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale =
    requested && (routing.locales as readonly string[]).includes(requested)
      ? requested
      : routing.defaultLocale;

  // For non-FR locales the structure exists but content falls back to FR.
  const messagesLocale = locale === "fr" ? "fr" : "fr";

  return {
    locale,
    messages: (await import(`../../messages/${messagesLocale}.json`)).default,
  };
});
