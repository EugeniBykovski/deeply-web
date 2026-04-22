"use client";

import { Check, Crown, Sparkles, Tag } from "lucide-react";
import Link from "next/link";
import { smoothScrollTo } from "@/lib/scroll";
import { Plan, TFn } from "./types";

export const PricingCard = ({ t, plan }: { t: TFn; plan: Plan }) => {
  const isHighlight = !!plan.highlight;
  const isFree = plan.id === "free";

  return (
    <div
      className={[
        "group relative overflow-hidden rounded-[32px] border backdrop-blur-2xl",
        isHighlight
          ? "border-emerald-200/20 bg-white/7 ring-1 ring-emerald-200/15"
          : isFree
          ? "border-white/8 bg-white/3"
          : "border-white/10 bg-white/5",
      ].join(" ")}
    >
      <div
        className="pointer-events-none absolute -inset-24 blur-3xl"
        style={{
          opacity: isHighlight ? 0.55 : 0.25,
          background: isHighlight
            ? "radial-gradient(800px 420px at 20% 20%, rgba(16,185,129,0.22), transparent 60%), radial-gradient(800px 420px at 85% 30%, rgba(45,212,191,0.16), transparent 62%)"
            : "radial-gradient(800px 420px at 25% 25%, rgba(26,59,66,0.20), transparent 60%), radial-gradient(800px 420px at 85% 35%, rgba(23,58,53,0.14), transparent 62%)",
        }}
      />

      <div className="relative p-6 md:p-7">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <div className="text-sm font-semibold text-white/90">
                {t(plan.titleKey)}
              </div>
              {plan.badgeKey && (
                <span
                  className={[
                    "rounded-full border px-2.5 py-1 text-[11px]",
                    isHighlight
                      ? "border-emerald-200/20 bg-emerald-400/10 text-emerald-100/90"
                      : isFree
                      ? "border-white/10 bg-white/5 text-white/55"
                      : "border-white/10 bg-white/5 text-white/70",
                  ].join(" ")}
                >
                  {t(plan.badgeKey)}
                </span>
              )}
              {plan.savingsKey && (
                <span className="inline-flex items-center gap-1 rounded-full border border-amber-300/20 bg-amber-400/10 px-2.5 py-1 text-[11px] text-amber-200/85">
                  <Tag className="h-2.5 w-2.5" />
                  {t(plan.savingsKey)}
                </span>
              )}
            </div>
            <div className="mt-2 text-sm text-white/60">
              {t(plan.subtitleKey)}
            </div>
          </div>

          <div
            className={[
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ring-1",
              isHighlight
                ? "bg-emerald-400/12 ring-emerald-200/15"
                : isFree
                ? "bg-white/5 ring-white/8"
                : "bg-white/6 ring-white/10",
            ].join(" ")}
          >
            {isFree ? (
              <Sparkles className="h-5 w-5 text-white/40" />
            ) : (
              <Crown
                className={[
                  "h-5 w-5",
                  isHighlight ? "text-emerald-200/90" : "text-white/50",
                ].join(" ")}
              />
            )}
          </div>
        </div>

        <div className="mt-5 flex items-end gap-2">
          <div className={["text-4xl font-semibold tracking-tight", isFree ? "text-white/70" : "text-white"].join(" ")}>
            {plan.price}
          </div>
          <div className="pb-1 text-sm text-white/55">
            {t(plan.priceNoteKey)}
          </div>
        </div>

        <div className="mt-5 h-px w-full bg-white/10" />

        <div className="mt-5 space-y-2.5">
          {plan.featuresKeys.map((k) => (
            <div key={k} className="flex items-start gap-2 text-sm text-white/65">
              <span
                className={[
                  "mt-[3px] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                  isHighlight
                    ? "bg-emerald-400/14 text-emerald-200/90"
                    : "bg-white/7 text-white/60",
                ].join(" ")}
              >
                <Check className="h-3.5 w-3.5" />
              </span>
              <span>{t(k)}</span>
            </div>
          ))}
        </div>

        <div className="mt-6">
          {isFree ? (
            <Link
              href="https://apps.apple.com/app/deeply"
              className="inline-flex w-full items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold transition bg-white/8 text-white/80 hover:bg-white/12"
            >
              {t(plan.ctaKey)}
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => smoothScrollTo("contacts")}
              className={[
                "inline-flex w-full items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold transition",
                isHighlight
                  ? "bg-emerald-200/90 text-[#061415] hover:bg-emerald-200"
                  : "bg-white/10 text-white hover:bg-white/15",
              ].join(" ")}
            >
              {t(plan.ctaKey)}
            </button>
          )}

          <div className="mt-3 text-center text-xs text-white/50">
            {t(`pricing.plans.${plan.id}.micro`)}
          </div>
        </div>
      </div>
    </div>
  );
};
