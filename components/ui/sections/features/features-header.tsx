"use client";

import { Sparkles } from "lucide-react";
import { TFn } from "./types";

export const FeaturesHeader = ({ t }: { t: TFn }) => {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
          <Sparkles className="h-4 w-4 text-emerald-200/90" />
          {t("features.badge")}
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
          {t("features.title")}
        </h2>
        <p className="mt-3 max-w-2xl text-white/70">{t("features.subtitle")}</p>
      </div>

      <div className="mt-3 w-full md:mt-0 md:w-[360px]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-2xl">
          <div className="text-xs text-white/60">
            {t("features.side.kicker")}
          </div>
          <div className="mt-1 text-sm font-semibold text-white/90">
            {t("features.side.title")}
          </div>
          <div className="mt-2 text-sm text-white/60">
            {t("features.side.text")}
          </div>
        </div>
      </div>
    </div>
  );
};
