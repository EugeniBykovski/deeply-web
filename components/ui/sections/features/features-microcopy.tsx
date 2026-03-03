"use client";

import { TFn } from "./types";

export const FeaturesMicrocopy = ({ t }: { t: TFn }) => {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-12">
      <div className="md:col-span-7 rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
        <div className="text-xs text-white/60">
          {t("features.micro.kicker")}
        </div>
        <div className="mt-1 text-lg font-semibold text-white/90">
          {t("features.micro.title")}
        </div>
        <div className="mt-3 text-sm leading-relaxed text-white/60">
          {t("features.micro.text")}
        </div>
      </div>

      <div className="md:col-span-5 rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
        <div className="text-xs text-white/60">
          {t("features.checklist.kicker")}
        </div>
        <div className="mt-1 text-lg font-semibold text-white/90">
          {t("features.checklist.title")}
        </div>

        <div className="mt-4 space-y-2 text-sm text-white/60">
          {[
            "features.checklist.i1",
            "features.checklist.i2",
            "features.checklist.i3",
            "features.checklist.i4",
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
