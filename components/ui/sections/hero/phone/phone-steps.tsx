"use client";

import { steps } from "@/constants/nav";

type Props = { t: (k: string) => string };

export const PhoneSteps = ({ t }: Props) => {
  return (
    <div className="mt-5 space-y-2">
      {steps.map((k) => (
        <div
          key={k}
          className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
        >
          <div className="text-[12px] text-white/80">{t(k)}</div>
          <div className="h-2.5 w-2.5 rounded-full bg-white/25" />
        </div>
      ))}
    </div>
  );
};
