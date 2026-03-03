"use client";

import {
  BarChart3,
  Compass,
  ShieldCheck,
  SlidersHorizontal,
  TimerReset,
  Waves,
} from "lucide-react";
import { FeatureCard } from "./feature-card";
import { TFn } from "./types";
import { FEATURES } from "@/constants/nav";

const ICONS = {
  programs: <Compass className="h-5 w-5 text-white/80" />,
  liveSession: <Waves className="h-5 w-5 text-white/80" />,
  co2o2: <TimerReset className="h-5 w-5 text-white/80" />,
  progress: <BarChart3 className="h-5 w-5 text-white/80" />,
  safety: <ShieldCheck className="h-5 w-5 text-white/80" />,
  personalization: <SlidersHorizontal className="h-5 w-5 text-white/80" />,
} as const;

const ACCENTS = {
  programs: "rgba(16,185,129,0.18)",
  liveSession: "rgba(45,212,191,0.16)",
  co2o2: "rgba(26,59,66,0.22)",
  progress: "rgba(16,185,129,0.14)",
  safety: "rgba(255,255,255,0.12)",
  personalization: "rgba(45,212,191,0.12)",
} as const;

export const FeaturesGrid = ({ t }: { t: TFn }) => {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-12">
      {FEATURES.map((f) => (
        <div
          key={f.id}
          className={[
            "md:col-span-6",
            f.id === "liveSession" ? "md:col-span-4" : "",
            f.id === "safety" ? "md:col-span-5" : "",
          ].join(" ")}
        >
          <FeatureCard
            t={t}
            item={f}
            icon={ICONS[f.id]}
            accent={ACCENTS[f.id]}
          />
        </div>
      ))}
    </div>
  );
};
