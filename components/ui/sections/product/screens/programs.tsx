"use client";

import {
  BarChart3,
  Compass,
  Layers,
  ShieldCheck,
  TimerReset,
} from "lucide-react";
import { TFn } from "../types";

export const ProgramsScreen = ({ t }: { t: TFn }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs text-white/60">
            {t("product.preview.programs.kicker")}
          </div>
          <div className="mt-1 text-lg font-semibold text-white/90">
            {t("product.preview.programs.title")}
          </div>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/6 ring-1 ring-white/10">
          <Layers className="h-5 w-5 text-white/75" />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {[
          { k: "product.preview.programs.card1", icon: Compass },
          { k: "product.preview.programs.card2", icon: TimerReset },
          { k: "product.preview.programs.card3", icon: ShieldCheck },
          { k: "product.preview.programs.card4", icon: BarChart3 },
        ].map(({ k, icon: Icon }) => (
          <div
            key={k}
            className="rounded-3xl border border-white/10 bg-white/5 p-4"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-400/12 ring-1 ring-emerald-200/10">
                <Icon className="h-4.5 w-4.5 text-emerald-200/90" />
              </div>
              <div className="text-sm font-medium text-white/85">
                {t(`${k}.title`)}
              </div>
            </div>
            <div className="mt-2 text-xs text-white/60">{t(`${k}.text`)}</div>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/6 p-4">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-white/85">
            {t("product.preview.programs.builder.title")}
          </div>
          <div className="text-xs text-white/55">
            {t("product.preview.programs.builder.tag")}
          </div>
        </div>

        <div className="mt-3 space-y-2">
          {[
            "product.preview.programs.builder.step1",
            "product.preview.programs.builder.step2",
            "product.preview.programs.builder.step3",
          ].map((k) => (
            <div
              key={k}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
            >
              <span className="text-xs text-white/75">{t(k)}</span>
              <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
