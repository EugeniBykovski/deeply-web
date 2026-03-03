"use client";

import { TFn } from "../product/types";
import { FeatureItem } from "./types";

export const FeatureCard = ({
  t,
  item,
  icon,
  accent,
}: {
  t: TFn;
  item: FeatureItem;
  icon: React.ReactNode;
  accent: string;
}) => {
  return (
    <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
      <div
        className="pointer-events-none absolute -inset-16 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(520px 240px at 20% 15%, ${accent}, transparent 60%)`,
        }}
      />

      <div className="relative flex items-start gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/6 ring-1 ring-white/10">
          {icon}
        </div>

        <div className="min-w-0">
          <div className="text-sm font-semibold text-white/90">
            {t(item.titleKey)}
          </div>
          <div className="mt-1 text-sm text-white/60">{t(item.textKey)}</div>
        </div>
      </div>

      <div className="relative mt-5 space-y-2">
        {item.bulletsKeys.map((k) => (
          <div key={k} className="flex items-start gap-2 text-sm text-white/60">
            <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-emerald-200/60" />
            <span>{t(k)}</span>
          </div>
        ))}
      </div>

      <div className="relative mt-5 h-px w-full bg-white/10" />

      <div className="relative mt-4 flex flex-wrap gap-2">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/65">
          {t("features.tags.stepByStep")}
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/65">
          {t("features.tags.calmPace")}
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/65">
          {t("features.tags.progress")}
        </span>
      </div>
    </div>
  );
};
