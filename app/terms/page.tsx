"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useClientTranslation } from "@/hooks/use-client-translation";

const EFFECTIVE_DATE = "April 19, 2026";

const SECTION_KEYS = [
  "s1", "s2", "s3", "s4", "s5", "s6", "s7",
  "s8", "s9", "s10", "s11", "s12", "s13", "s14",
] as const;

export default function TermsPage() {
  const { t, ready } = useClientTranslation();

  if (!ready) {
    return (
      <div className="min-h-screen bg-[#0B1C1D]" />
    );
  }

  return (
    <div className="min-h-screen bg-[#0B1C1D] text-white">
      <div className="border-b border-white/5">
        <div className="mx-auto max-w-3xl px-4 py-4 flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("legal.back")}
          </Link>
        </div>
      </div>

      <main className="mx-auto max-w-3xl px-4 py-14 pb-24">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50 mb-5">
            {t("legal.badge")}
          </div>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("legal.terms.title")}
          </h1>
          <p className="mt-3 text-white/50 text-sm">
            {t("legal.effective")} {EFFECTIVE_DATE}
          </p>
          <p className="mt-4 text-white/60 leading-relaxed">
            {t("legal.terms.intro")}
          </p>
        </div>

        {/* Table of contents */}
        <nav className="mb-12 rounded-2xl border border-white/8 bg-white/3 px-6 py-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">
            {t("legal.toc")}
          </p>
          <ol className="space-y-1.5">
            {SECTION_KEYS.map((key) => (
              <li key={key}>
                <a
                  href={`#${key}`}
                  className="text-sm text-white/55 hover:text-white transition-colors"
                >
                  {t(`legal.terms.${key}.title`)}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Sections */}
        <div className="space-y-10">
          {SECTION_KEYS.map((key) => (
            <section key={key} id={key} className="scroll-mt-8">
              <h2 className="text-lg font-semibold mb-3 text-white">
                {t(`legal.terms.${key}.title`)}
              </h2>
              <div className="text-white/65 leading-relaxed whitespace-pre-line text-[0.9375rem]">
                {t(`legal.terms.${key}.body`)}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-white/40">
          <span>{t("legal.copyright")}</span>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white transition-colors">
              {t("legal.privacyLink")}
            </Link>
            <Link href="/" className="hover:text-white transition-colors">
              {t("legal.homeLink")}
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
