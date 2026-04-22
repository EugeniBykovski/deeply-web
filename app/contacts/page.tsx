"use client";

import Link from "next/link";
import { ArrowLeft, Mail, Phone, ArrowUpRight } from "lucide-react";
import { useClientTranslation } from "@/hooks/use-client-translation";
import { EMAIL, PHONE } from "@/constants/nav";

export default function ContactsPage() {
  const { t, ready } = useClientTranslation();

  if (!ready) {
    return <div className="min-h-screen bg-[#0B1C1D]" />;
  }

  const subject = encodeURIComponent(t("contacts.email.subject"));
  const body = encodeURIComponent(t("contacts.email.body"));
  const mailHref = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  const telHref = `tel:${PHONE.replace(/\s/g, "")}`;

  return (
    <div className="min-h-screen bg-[#0B1C1D] text-white">
      <div className="border-b border-white/5">
        <div className="mx-auto max-w-3xl px-4 py-4 flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
        </div>
      </div>

      <main className="mx-auto max-w-3xl px-4 py-14 pb-24">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50 mb-5">
            {t("contacts.badge")}
          </div>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("contacts.title")}
          </h1>
          <p className="mt-3 text-white/55 text-sm leading-relaxed max-w-xl">
            {t("contacts.subtitle")}
          </p>
        </div>

        <div className="space-y-4">
          {/* Email */}
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
            <div className="pointer-events-none absolute -inset-16 opacity-30 blur-3xl"
              style={{ background: "radial-gradient(600px 400px at 20% 20%, rgba(16,185,129,0.18), transparent 60%)" }} />
            <div className="relative flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="text-xs text-white/50 mb-1">{t("contacts.card.kicker")}</div>
                <div className="text-lg font-semibold text-white/90">{EMAIL}</div>
                <div className="mt-2 text-sm text-white/60 max-w-sm">
                  {t("contacts.card.text")}
                </div>
                <a
                  href={mailHref}
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-200/90 px-4 py-2.5 text-sm font-semibold text-[#061415] transition hover:bg-emerald-200"
                >
                  {t("contacts.card.cta")}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <div className="mt-3 text-xs text-white/40">{t("contacts.card.micro")}</div>
              </div>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/12 ring-1 ring-emerald-200/15">
                <Mail className="h-5 w-5 text-emerald-200/90" />
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
            <div className="relative flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="text-xs text-white/50 mb-1">{t("contacts.phone.kicker")}</div>
                <div className="text-lg font-semibold text-white/90">{PHONE}</div>
                <div className="mt-2 text-sm text-white/60">
                  {t("contacts.phone.text")}
                </div>
                <a
                  href={telHref}
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  Call us
                  <Phone className="h-4 w-4" />
                </a>
              </div>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/6 ring-1 ring-white/10">
                <Phone className="h-5 w-5 text-white/60" />
              </div>
            </div>
          </div>

          {/* Topics */}
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
            <div className="text-xs text-white/50 mb-1">{t("contacts.expect.kicker")}</div>
            <div className="text-base font-semibold text-white/90 mb-4">{t("contacts.expect.title")}</div>
            <div className="space-y-2.5 text-sm text-white/65">
              {["contacts.expect.i1", "contacts.expect.i2", "contacts.expect.i3"].map((k) => (
                <div key={k} className="flex items-start gap-2.5">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-200/60" />
                  <span>{t(k)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
