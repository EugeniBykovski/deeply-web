"use client";

import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";

type Props = { t: (k: string) => string };

export const MiniSignal = ({ t }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs text-white/60">{t("hero.signal.label")}</div>
          <div className="mt-0.5 text-sm font-medium text-white/85">
            {t("hero.signal.title")}
          </div>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-400/15 ring-1 ring-emerald-200/15">
          <BarChart3 className="h-4.5 w-4.5 text-emerald-200/90" />
        </div>
      </div>
      <div className="mt-3 h-10 w-full overflow-hidden rounded-xl bg-white/4 ring-1 ring-white/10">
        <motion.div
          className="h-full w-[140%] opacity-90"
          animate={{ x: ["-20%", "0%", "-20%"] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(16,185,129,0.18) 20%, rgba(45,212,191,0.16) 50%, rgba(16,185,129,0.18) 80%, transparent 100%)",
          }}
        />
      </div>
    </div>
  );
};
