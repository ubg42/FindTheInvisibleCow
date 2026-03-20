import { LanguageKey } from "../i18n";
import track from "./track";

function autoLocale(): LanguageKey {
  const defaultLocale = LanguageKey.en;

  try {
    const { languages } = navigator;

    // Close matches
    for (let i = 0; i < languages.length; i += 1) {
      const result = Object.values(LanguageKey).find(
        l => languages[i].substr(0, 2) === l.substr(0, 2),
      );
      if (result) {
        track("Locale", "Auto", "Close", result, { nonInteraction: true });
        return result;
      }
    }
  } catch (e) {
    track("Locale", "Auto", "Error", defaultLocale, { nonInteraction: true });
    return defaultLocale;
  }

  track("Locale", "Auto", "Error", defaultLocale, { nonInteraction: true });
  return defaultLocale;
}

export default autoLocale;
