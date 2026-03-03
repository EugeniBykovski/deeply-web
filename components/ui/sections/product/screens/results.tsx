"use client";

import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";
import { TFn } from "../types";

export const ResultsScreen = ({ t }: { t: TFn }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs text-white/60">
            {t("product.preview.results.kicker")}
          </div>
          <div className="mt-1 text-lg font-semibold text-white/90">
            {t("product.preview.results.title")}
          </div>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/6 ring-1 ring-white/10">
          <BarChart3 className="h-5 w-5 text-white/75" />
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/6 p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-white/60">
              {t("product.preview.results.metric1.label")}
            </div>
            <div className="mt-1 text-2xl font-semibold text-white/90">
              +18%
            </div>
          </div>
          <div className="text-xs text-white/55">
            {t("product.preview.results.metric1.tag")}
          </div>
        </div>

        <div className="mt-3 h-12 w-full overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
          <svg viewBox="0 0 300 60" className="h-full w-full">
            <path
              d="M0 40 C 30 38, 50 22, 76 24 C 98 26, 115 44, 140 40 C 165 36, 175 18, 205 22 C 230 26, 245 44, 270 40 C 286 38, 294 34, 300 32"
              stroke="rgba(255,255,255,0.20)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            <motion.path
              d="M0 40 C 30 38, 50 22, 76 24 C 98 26, 115 44, 140 40 C 165 36, 175 18, 205 22 C 230 26, 245 44, 270 40 C 286 38, 294 34, 300 32"
              stroke="rgba(16,185,129,0.45)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              strokeDasharray="16 10"
              animate={{ strokeDashoffset: [0, -52] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
          <div className="text-xs text-white/60">
            {t("product.preview.results.metric2.label")}
          </div>
          <div className="mt-1 text-lg font-semibold text-white/90">7</div>
          <div className="mt-1 text-xs text-white/55">
            {t("product.preview.results.metric2.text")}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
          <div className="text-xs text-white/60">
            {t("product.preview.results.metric3.label")}
          </div>
          <div className="mt-1 text-lg font-semibold text-white/90">92%</div>
          <div className="mt-1 text-xs text-white/55">
            {t("product.preview.results.metric3.text")}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/6 p-4">
        <div className="text-sm font-medium text-white/85">
          {t("product.preview.results.note.title")}
        </div>
        <div className="mt-1 text-xs text-white/60">
          {t("product.preview.results.note.text")}
        </div>
      </div>
    </div>
  );
};
