"use client";

import Link from "next/link";
import { Check, Crown } from "lucide-react";
import { Plan, TFn } from "./types";

export const PricingCard = ({ t, plan }: { t: TFn; plan: Plan }) => {
  const isPro = plan.id === "pro";

  return (
    <div
      className={[
        "group relative overflow-hidden rounded-[32px] border backdrop-blur-2xl",
        plan.highlight
          ? "border-emerald-200/20 bg-white/7 ring-1 ring-emerald-200/15"
          : "border-white/10 bg-white/5",
      ].join(" ")}
    >
      <div
        className={[
          "pointer-events-none absolute -inset-24 opacity-35 blur-3xl",
          plan.highlight ? "opacity-55" : "opacity-35",
        ].join(" ")}
        style={{
          background: plan.highlight
            ? "radial-gradient(800px 420px at 20% 20%, rgba(16,185,129,0.22), transparent 60%), radial-gradient(800px 420px at 85% 30%, rgba(45,212,191,0.16), transparent 62%)"
            : "radial-gradient(800px 420px at 25% 25%, rgba(26,59,66,0.20), transparent 60%), radial-gradient(800px 420px at 85% 35%, rgba(23,58,53,0.14), transparent 62%)",
        }}
      />

      <div className="relative p-6 md:p-7">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="text-sm font-semibold text-white/90">
                {t(plan.titleKey)}
              </div>
              {plan.badgeKey && (
                <span
                  className={[
                    "rounded-full border px-2.5 py-1 text-[11px]",
                    isPro
                      ? "border-emerald-200/20 bg-emerald-400/10 text-emerald-100/90"
                      : "border-white/10 bg-white/5 text-white/70",
                  ].join(" ")}
                >
                  {t(plan.badgeKey)}
                </span>
              )}
            </div>
            <div className="mt-2 text-sm text-white/60">
              {t(plan.subtitleKey)}
            </div>
          </div>

          <div
            className={[
              "flex h-11 w-11 items-center justify-center rounded-2xl ring-1",
              isPro
                ? "bg-emerald-400/12 ring-emerald-200/15"
                : "bg-white/6 ring-white/10",
            ].join(" ")}
          >
            {isPro ? (
              <Crown className="h-5 w-5 text-emerald-200/90" />
            ) : (
              <Crown className="h-5 w-5 text-white/50" />
            )}
          </div>
        </div>

        <div className="mt-5 flex items-end gap-2">
          <div className="text-4xl font-semibold tracking-tight text-white">
            {plan.price}
          </div>
          <div className="pb-1 text-sm text-white/55">
            {t(plan.priceNoteKey)}
          </div>
        </div>

        <div className="mt-5 h-px w-full bg-white/10" />

        <div className="mt-5 space-y-2.5">
          {plan.featuresKeys.map((k) => (
            <div
              key={k}
              className="flex items-start gap-2 text-sm text-white/65"
            >
              <span
                className={[
                  "mt-[3px] inline-flex h-5 w-5 items-center justify-center rounded-full",
                  isPro
                    ? "bg-emerald-400/14 text-emerald-200/90"
                    : "bg-white/7 text-white/70",
                ].join(" ")}
              >
                <Check className="h-3.5 w-3.5" />
              </span>
              <span>{t(k)}</span>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <Link
            href={isPro ? "#contacts" : "#product"}
            className={[
              "inline-flex w-full items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold transition",
              isPro
                ? "bg-emerald-200/90 text-[#061415] hover:bg-emerald-200"
                : "bg-white/10 text-white hover:bg-white/15",
            ].join(" ")}
          >
            {t(plan.ctaKey)}
          </Link>

          <div className="mt-3 text-center text-xs text-white/50">
            {isPro
              ? t("pricing.plans.pro.micro")
              : t("pricing.plans.free.micro")}
          </div>
        </div>
      </div>
    </div>
  );
};
