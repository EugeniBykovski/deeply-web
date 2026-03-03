"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type Props = {
  t: (k: string) => string;
  Icon: LucideIcon;
  leftValue: string;
  rightValue: string;
};

export const KpiCard = ({ t, Icon, leftValue, rightValue }: Props) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs text-white/60">{t("hero.kpi.label")}</div>
          <div className="mt-0.5 text-sm font-medium text-white/85">
            {t("hero.kpi.title")}
          </div>
        </div>
        <motion.div
          className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white/6 ring-1 ring-white/10"
          animate={{ rotate: [0, 6, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon className="h-4.5 w-4.5 text-white/70" />
        </motion.div>
      </div>
      <div className="mt-3 flex items-center gap-3">
        <div className="flex-1">
          <div className="text-xs text-white/55">{t("hero.kpi.streak")}</div>
          <div className="text-lg font-semibold text-white/90">{leftValue}</div>
        </div>
        <div className="h-9 w-px bg-white/10" />
        <div className="flex-1">
          <div className="text-xs text-white/55">{t("hero.kpi.calm")}</div>
          <div className="text-lg font-semibold text-white/90">
            {rightValue}
          </div>
        </div>
      </div>
    </div>
  );
};
