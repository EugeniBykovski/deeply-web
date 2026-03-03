"use client";

import { AnimatePresence, motion } from "framer-motion";

type Props = {
  t: (k: string) => string;
  idx: number;
  current: { depth: string; rate: string; phaseKey: string };
};

export const PhoneDepthCard = ({ t, idx, current }: Props) => {
  return (
    <div className="mt-4 md:mt-6 rounded-3xl border border-white/10 bg-white/6 p-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[12px] text-white/60">
            {t("hero.phone.depthTitle")}
          </div>

          <div className="mt-1 flex items-end gap-2">
            <div className="text-xl font-semibold text-white/90">
              <AnimatePresence mode="wait">
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="inline-block"
                >
                  {current.depth}
                </motion.span>
              </AnimatePresence>
              <span className="text-white/55">m</span>
            </div>

            <div className="text-[12px] text-white/55">
              <AnimatePresence mode="wait">
                <motion.span
                  key={`${idx}-phase`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="inline-block"
                >
                  {t(current.phaseKey)}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="relative h-14 w-4 overflow-hidden rounded-full bg-white/8 ring-1 ring-white/10">
          <motion.div
            className="absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-emerald-200/80 shadow-[0_0_18px_rgba(52,211,153,0.45)]"
            animate={{ top: ["12%", "68%", "52%", "36%", "12%"] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-x-0 bottom-0 h-10 bg-[linear-gradient(to_top,rgba(16,185,129,0.16),transparent)]" />
        </div>
      </div>

      <div className="hidden mt-3 md:flex items-center justify-between text-[12px] text-white/55">
        <span>{t("hero.phone.rateLabel")}</span>
        <AnimatePresence mode="wait">
          <motion.span
            key={`${idx}-rate`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="tabular-nums text-white/70"
          >
            {current.rate} {t("hero.phone.rateUnit")}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};
