"use client";

import { Timer } from "lucide-react";

type Props = { t: (k: string) => string };

export const PhoneTimerCard = ({ t }: Props) => {
  return (
    <div className="mt-3 rounded-3xl border border-white/10 bg-white/6 p-3 backdrop-blur-xl sm:mt-5 sm:p-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[12px] text-white/60">
            {t("hero.phone.timerLabel")}
          </div>
          <div className="mt-1 flex items-end gap-2">
            <div className="text-2xl font-semibold">01:12</div>
            <div className="text-[12px] text-white/50">
              {t("hero.phone.timerTotal")}
            </div>
          </div>
        </div>
        <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400/15 ring-1 ring-emerald-200/15">
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background:
                "conic-gradient(from 120deg, rgba(16,185,129,0.0), rgba(16,185,129,0.25), rgba(45,212,191,0.0))",
              maskImage:
                "radial-gradient(circle at center, transparent 52%, black 56%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, transparent 52%, black 56%)",
            }}
          />
          <Timer className="relative h-5 w-5 text-emerald-200/90" />
        </div>
      </div>
      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-emerald-300/60"
          style={{ width: "56%" }}
        />
      </div>
    </div>
  );
};
