"use client";

import { motion } from "framer-motion";
import { TimerReset, Waves } from "lucide-react";
import { TFn } from "../types";

export const DiveScreen = ({ t }: { t: TFn }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs text-white/60">
            {t("product.preview.dive.kicker")}
          </div>
          <div className="mt-1 text-lg font-semibold text-white/90">
            {t("product.preview.dive.title")}
          </div>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/6 ring-1 ring-white/10">
          <Waves className="h-5 w-5 text-white/75" />
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/6 p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-white/60">
              {t("product.preview.dive.timer.label")}
            </div>
            <div className="mt-1 flex items-end gap-2">
              <div className="text-2xl font-semibold text-white/90">01:12</div>
              <div className="text-xs text-white/50">
                {t("product.preview.dive.timer.total")}
              </div>
            </div>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400/14 ring-1 ring-emerald-200/10">
            <TimerReset className="h-5 w-5 text-emerald-200/90" />
          </div>
        </div>

        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-emerald-300/60"
            animate={{ width: ["42%", "62%", "56%"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>

      <div className="space-y-2">
        {[
          "product.preview.dive.step1",
          "product.preview.dive.step2",
          "product.preview.dive.step3",
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

      <div className="rounded-3xl border border-white/10 bg-white/6 p-4">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-white/85">
            {t("product.preview.dive.hint.title")}
          </div>
          <div className="text-xs text-white/55">
            {t("product.preview.dive.hint.tag")}
          </div>
        </div>
        <div className="mt-2 text-xs text-white/60">
          {t("product.preview.dive.hint.text")}
        </div>
      </div>
    </div>
  );
};
