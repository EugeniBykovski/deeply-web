"use client";

import { TFn } from "./types";

export const FeaturesPillars = ({ t }: { t: TFn }) => {
  const items = [
    { k: "features.pillars.p1" },
    { k: "features.pillars.p2" },
    { k: "features.pillars.p3" },
  ] as const;

  return (
    <div className="mt-8 rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
      <div className="text-xs text-white/60">
        {t("features.pillars.kicker")}
      </div>
      <div className="mt-1 text-lg font-semibold text-white/90">
        {t("features.pillars.title")}
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.k}
            className="rounded-3xl border border-white/10 bg-white/5 p-5"
          >
            <div className="text-sm font-semibold text-white/90">
              {t(`${it.k}.title`)}
            </div>
            <div className="mt-2 text-sm text-white/60">
              {t(`${it.k}.text`)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
