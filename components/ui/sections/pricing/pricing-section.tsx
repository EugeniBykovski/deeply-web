"use client";

import { PLANS } from "@/constants/nav";
import { Separator } from "../../separator";
import { LandingSection } from "../section";
import { PricingCards } from "./pricing-cards";
import { PricingCompare } from "./pricing-compare";
import { PricingHeader } from "./pricing-header";
import type { TFn } from "./types";

export const PricingSection = ({ t }: { t: TFn }) => {
  return (
    <LandingSection id="pricing">
      <div className="relative overflow-hidden rounded-[44px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl md:p-12">
        <div className="pointer-events-none absolute -inset-24 opacity-35 blur-3xl [background:radial-gradient(1100px_620px_at_20%_20%,rgba(23,58,53,0.18),transparent_60%),radial-gradient(1100px_620px_at_85%_30%,rgba(26,59,66,0.20),transparent_62%)]" />

        <div className="relative">
          <PricingHeader t={t} />
          <PricingCards t={t} plans={PLANS} />
          <PricingCompare t={t} />
        </div>
      </div>

      <Separator className="my-12 bg-white/10" />
    </LandingSection>
  );
};
