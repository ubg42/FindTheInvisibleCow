import React, { useCallback, useContext, useMemo, useState } from "react";
import i18n, { Language, LanguageKey } from "../i18n";
import autoLocale from "../lib/autoLocale";
import track from "../lib/track";

type Context = {
  key: LanguageKey;
  language: Language;
  set: (key: LanguageKey) => void;
};

const I18nContext = React.createContext<Context>({
  key: LanguageKey.en,
  language: i18n.en,
  set: () => {},
});

interface I18nProviderProps {
  children?: React.ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const [key, setKey] = useState<LanguageKey>(autoLocale());

  return (
    <I18nContext.Provider
      value={useMemo(
        () => ({
          key,
          language: i18n[key],
          set(key) {
            setKey(key);
            track("Locale", "Manual", "Set", key);
          },
        }),
        [key],
      )}
    >
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = (): Context => useContext(I18nContext);

export const useT = (): ((
  strKey: string,
  replace?: { [key: string]: string | number },
) => string) => {
  const { language } = useI18n();
  return useCallback(
    (strKey, replace) => {
      let str =
        getProperty(strKey, language) ?? getProperty(strKey, i18n.en) ?? "";

      if (replace !== undefined) {
        Object.entries(replace).forEach(([key, value]) => {
          str = str.replace(`%{${key}}`, value.toString());
        });
      }

      return str;
    },
    [language],
  );
};

function getProperty(key: string, language: Language): string | null {
  const parts = key.split(".");

  const s = parts.reduce((acc: any, k) => {
    if (acc.hasOwnProperty(k)) {
      return acc[k];
    } else {
      throw new Error("Invalid path");
    }
  }, language);

  if (s === null || typeof s === "string") {
    return s;
  }
  throw new Error("Invalid path");
}
