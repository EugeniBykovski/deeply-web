"use client";

type Props = { t: (k: string) => string };

export const PhoneDepthCard = ({ t }: Props) => {
  return (
    <div className="mt-3 rounded-3xl border border-white/10 bg-white/6 p-4 sm:mt-4 md:mt-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[12px] text-white/60">
            {t("hero.phone.depthTitle")}
          </div>
          <div className="mt-1 flex items-end gap-2">
            <div className="text-xl font-semibold text-white/90">
              <span>-8.1</span>
              <span className="text-white/55">m</span>
            </div>
            <div className="text-[12px] text-white/55">
              {t("hero.phone.phase.hold")}
            </div>
          </div>
        </div>

        <div className="relative h-10 w-4 overflow-hidden rounded-full bg-white/8 ring-1 ring-white/10 sm:h-14">
          <div
            className="absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-emerald-200/80 shadow-[0_0_18px_rgba(52,211,153,0.45)]"
            style={{ top: "36%" }}
          />
          <div className="absolute inset-x-0 bottom-0 h-10 bg-[linear-gradient(to_top,rgba(16,185,129,0.16),transparent)]" />
        </div>
      </div>

      <div className="hidden mt-3 md:flex items-center justify-between text-[12px] text-white/55">
        <span>{t("hero.phone.rateLabel")}</span>
        <span className="tabular-nums text-white/70">
          0.7 {t("hero.phone.rateUnit")}
        </span>
      </div>
    </div>
  );
};
