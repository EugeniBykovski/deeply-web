import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/landing.json";
import ru from "./locales/ru/landing.json";

export enum Namespaces {
  landing = "landing",
  app = "app",
}
export type LocaleCode = "en" | "ru";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      [Namespaces.landing]: en,
    },
    ru: {
      [Namespaces.landing]: ru,
    },
  },
  lng:
    (typeof window !== "undefined" && localStorage.getItem("appLang")) || "ru",
  fallbackLng: "ru",
  defaultNS: Namespaces.landing,
  ns: Object.values(Namespaces),
  interpolation: {
    escapeValue: false,
  },
  debug: process.env.NODE_ENV !== "production",
});

export default i18n;
