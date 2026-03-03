"use client";

import { useMemo } from "react";
import { Sparkles } from "lucide-react";
import { TFn } from "./types";

export const HowItWorks = ({ t }: { t: TFn }) => {
  const steps = useMemo(
    () => [
      {
        n: "01",
        title: t("product.how.step1.title"),
        text: t("product.how.step1.text"),
      },
      {
        n: "02",
        title: t("product.how.step2.title"),
        text: t("product.how.step2.text"),
      },
      {
        n: "03",
        title: t("product.how.step3.title"),
        text: t("product.how.step3.text"),
      },
    ],
    [t],
  );

  return (
    <div className="mt-10 rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-xs text-white/60">{t("product.how.kicker")}</div>
          <div className="mt-1 text-lg font-semibold text-white/90">
            {t("product.how.title")}
          </div>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
          <Sparkles className="h-4 w-4 text-emerald-200/90" />
          {t("product.how.tag")}
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.n}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs text-white/55">{s.n}</div>
                <div className="mt-1 text-sm font-semibold text-white/90">
                  {s.title}
                </div>
                <div className="mt-2 text-sm text-white/60">{s.text}</div>
              </div>
              <div className="h-9 w-9 rounded-2xl bg-emerald-400/12 ring-1 ring-emerald-200/10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
