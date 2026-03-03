"use client";

import { TFn } from "./types";

export const PricingCompare = ({ t }: { t: TFn }) => {
  const rows = [
    { k: "pricing.compare.r1" },
    { k: "pricing.compare.r2" },
    { k: "pricing.compare.r3" },
    { k: "pricing.compare.r4" },
  ] as const;

  return (
    <div className="mt-8 rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
      <div className="text-xs text-white/60">{t("pricing.compare.kicker")}</div>
      <div className="mt-1 text-lg font-semibold text-white/90">
        {t("pricing.compare.title")}
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {rows.map((r) => (
          <div
            key={r.k}
            className="rounded-3xl border border-white/10 bg-white/5 p-5"
          >
            <div className="text-sm font-semibold text-white/90">
              {t(`${r.k}.title`)}
            </div>
            <div className="mt-2 text-sm text-white/60">{t(`${r.k}.text`)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
