"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { TFn } from "./types";
import { EMAIL } from "@/constants/nav";

export const ContactCard = ({ t }: { t: TFn }) => {
  const subject = encodeURIComponent(t("contacts.email.subject"));
  const body = encodeURIComponent(t("contacts.email.body"));
  const href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

  return (
    <div className="mt-8 grid gap-4 md:grid-cols-12">
      <div className="md:col-span-7 rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs text-white/60">
              {t("contacts.card.kicker")}
            </div>
            <div className="mt-1 text-lg font-semibold text-white/90">
              {t("contacts.card.title")}
            </div>
            <div className="mt-2 text-sm text-white/60">
              {t("contacts.card.text")}
            </div>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400/12 ring-1 ring-emerald-200/15">
            <Mail className="h-5 w-5 text-emerald-200/90" />
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={href}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-200/90 px-4 py-3 text-sm font-semibold text-[#061415] transition hover:bg-emerald-200"
          >
            {t("contacts.card.cta")}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-4 text-xs text-white/50">
          {t("contacts.card.micro")}
        </div>
      </div>

      <div className="md:col-span-5 rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
        <div className="text-xs text-white/60">
          {t("contacts.expect.kicker")}
        </div>
        <div className="mt-1 text-lg font-semibold text-white/90">
          {t("contacts.expect.title")}
        </div>

        <div className="mt-4 space-y-2 text-sm text-white/60">
          {[
            "contacts.expect.i1",
            "contacts.expect.i2",
            "contacts.expect.i3",
          ].map((k) => (
            <div key={k} className="flex items-start gap-2">
              <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-emerald-200/60" />
              <span>{t(k)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
