"use client";

import { Separator } from "../../separator";
import { LandingSection } from "../section";
import { FeaturesGrid } from "./features-grid";
import { FeaturesHeader } from "./features-header";
import { FeaturesMicrocopy } from "./features-microcopy";
import { FeaturesPillars } from "./features-pillars";
import type { TFn } from "./types";

export const FeaturesSection = ({ t }: { t: TFn }) => {
  return (
    <LandingSection id="features">
      <div className="relative overflow-hidden rounded-[44px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl md:p-12">
        <div className="pointer-events-none absolute -inset-24 opacity-35 blur-3xl [background:radial-gradient(1100px_620px_at_20%_20%,rgba(26,59,66,0.22),transparent_60%),radial-gradient(1100px_620px_at_85%_30%,rgba(23,58,53,0.18),transparent_62%)]" />

        <div className="relative">
          <FeaturesHeader t={t} />
          <FeaturesGrid t={t} />
          <FeaturesPillars t={t} />
          <FeaturesMicrocopy t={t} />
        </div>
      </div>

      <Separator className="my-12 bg-white/10" />
    </LandingSection>
  );
};
