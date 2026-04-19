"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useClientTranslation } from "@/hooks/use-client-translation";

const EFFECTIVE_DATE = "April 19, 2026";

const SIMPLE_SECTIONS = [
  "s1", "s3", "s4", "s5", "s6", "s7",
  "s8", "s9", "s10", "s11", "s12",
] as const;

const ALL_SECTION_KEYS = [
  "s1", "s2", "s3", "s4", "s5", "s6",
  "s7", "s8", "s9", "s10", "s11", "s12",
] as const;

const S2_SUBS = ["sub1", "sub2", "sub3", "sub4"] as const;

export default function PrivacyPage() {
  const { t, ready } = useClientTranslation();

  if (!ready) {
    return <div className="min-h-screen bg-[#0B1C1D]" />;
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
            {t("legal.privacy.title")}
          </h1>
          <p className="mt-3 text-white/50 text-sm">
            {t("legal.effective")} {EFFECTIVE_DATE}
          </p>
          <p className="mt-4 text-white/60 leading-relaxed">
            {t("legal.privacy.intro")}
          </p>
        </div>

        {/* TL;DR box */}
        <div className="mb-12 rounded-2xl border border-emerald-500/15 bg-emerald-500/5 px-6 py-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400/70 mb-3">
            {t("legal.privacy.tldr.label")}
          </p>
          <ul className="space-y-2 text-sm text-white/65">
            {(["i1", "i2", "i3", "i4"] as const).map((k) => (
              <li key={k} className="flex gap-2">
                <span className="text-emerald-400 shrink-0">✓</span>
                {t(`legal.privacy.tldr.${k}`)}
              </li>
            ))}
          </ul>
        </div>

        {/* Table of contents */}
        <nav className="mb-12 rounded-2xl border border-white/8 bg-white/3 px-6 py-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">
            {t("legal.toc")}
          </p>
          <ol className="space-y-1.5">
            {ALL_SECTION_KEYS.map((key) => (
              <li key={key}>
                <a
                  href={`#${key}`}
                  className="text-sm text-white/55 hover:text-white transition-colors"
                >
                  {t(`legal.privacy.${key}.title`)}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Sections */}
        <div className="space-y-10">
          {/* s1 */}
          <section id="s1" className="scroll-mt-8">
            <h2 className="text-lg font-semibold mb-3 text-white">
              {t("legal.privacy.s1.title")}
            </h2>
            <div className="text-white/65 leading-relaxed whitespace-pre-line text-[0.9375rem]">
              {t("legal.privacy.s1.body")}
            </div>
          </section>

          {/* s2 — subsections */}
          <section id="s2" className="scroll-mt-8">
            <h2 className="text-lg font-semibold mb-4 text-white">
              {t("legal.privacy.s2.title")}
            </h2>
            <div className="space-y-6">
              {S2_SUBS.map((sub) => (
                <div key={sub}>
                  <h3 className="text-sm font-semibold text-white/80 mb-2">
                    {t(`legal.privacy.s2.${sub}.title`)}
                  </h3>
                  <p className="text-white/65 leading-relaxed whitespace-pre-line text-[0.9375rem]">
                    {t(`legal.privacy.s2.${sub}.body`)}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* s3–s12 */}
          {SIMPLE_SECTIONS.map((key) => (
            <section key={key} id={key} className="scroll-mt-8">
              <h2 className="text-lg font-semibold mb-3 text-white">
                {t(`legal.privacy.${key}.title`)}
              </h2>
              <div className="text-white/65 leading-relaxed whitespace-pre-line text-[0.9375rem]">
                {t(`legal.privacy.${key}.body`)}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-white/40">
          <span>{t("legal.copyright")}</span>
          <div className="flex gap-5">
            <Link href="/terms" className="hover:text-white transition-colors">
              {t("legal.termsLink")}
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
