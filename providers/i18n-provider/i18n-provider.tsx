"use client";

import { I18nextProvider } from "react-i18next";
// Import the configured instance (with bundled EN/RU resources) so that
// translations are available on every route including direct loads of
// /privacy and /terms. Previously this imported the raw "i18next" package
// which was never initialised on those routes, causing blank pages on refresh.
import i18n from "@/lib/i18n";

interface I18nProviderProps {
  children: React.ReactNode;
}

export default function I18nProvider({ children }: I18nProviderProps) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
