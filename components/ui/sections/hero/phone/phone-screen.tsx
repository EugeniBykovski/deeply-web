"use client";

import { BarChart3, Compass, Home, Shield, UserRound, Waves } from "lucide-react";
import { PhoneTimerCard } from "./phone-timer-card";
import { PhoneSteps } from "./phone-steps";
import { PhoneDepthCard } from "./phone-depth-card";
import { PhoneBottomNav } from "./phone-bottom-nav";

type Props = { t: (k: string) => string };

export const PhoneScreen = ({ t }: Props) => {
  const nav = [
    { Icon: Home, label: t("hero.phone.nav.home") },
    { Icon: Compass, label: t("hero.phone.nav.dives") },
    { Icon: BarChart3, label: t("hero.phone.nav.progress") },
    { Icon: UserRound, label: t("hero.phone.nav.profile") },
  ];

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[44px] bg-[#061415]">
      <div
        aria-hidden
        className="absolute -inset-16 opacity-70 blur-2xl"
        style={{
          background:
            "radial-gradient(520px 320px at 20% 20%, rgba(23,58,53,0.70), transparent 60%), radial-gradient(520px 360px at 80% 40%, rgba(26,59,66,0.70), transparent 62%)",
        }}
      />
      <div className="relative z-10 px-4 pt-12 sm:px-5 sm:pt-20">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/75">
            <Waves className="h-3.5 w-3.5 text-emerald-200/90" />
            {t("hero.phone.mode")}
          </div>
          <div className="inline-flex items-center gap-2 text-[11px] text-white/55">
            <Shield className="h-3.5 w-3.5" />
            {t("hero.phone.safe")}
          </div>
        </div>
        <div className="mt-4 text-white">
          <div className="text-[13px] text-white/70">{t("hero.phone.title")}</div>
          <div className="text-[18px] font-semibold">{t("hero.phone.subtitle")}</div>
        </div>
        <PhoneTimerCard t={t} />
        <PhoneSteps t={t} />
        <PhoneDepthCard t={t} />
        <div className="hidden md:block mt-5 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-[12px] text-white/65">
          {t("hero.phone.hint")}
        </div>
      </div>
      <PhoneBottomNav nav={nav} />
      <div className="absolute inset-x-0 bottom-4 z-10 flex items-center justify-center">
        <div className="h-1.5 w-20 rounded-full bg-white/15" />
      </div>
    </div>
  );
};
