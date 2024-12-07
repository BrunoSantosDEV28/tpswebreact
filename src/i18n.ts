import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: "pt",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    resources: {
      pt: {
        translation: require("./locales/pt.json"),
      },
      es: {
        translation: require("./locales/es.json"),
      },
      en: {
        translation: require("./locales/en.json"),
      },
    },
  });

export default i18n;
