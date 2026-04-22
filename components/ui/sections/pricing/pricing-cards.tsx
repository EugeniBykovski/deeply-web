"use client";

import { PricingCard } from "./pricing-card";
import { Plan, TFn } from "./types";

export const PricingCards = ({ t, plans }: { t: TFn; plans: Plan[] }) => {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
      {plans.map((p) => (
        <PricingCard key={p.id} t={t} plan={p} />
      ))}
    </div>
  );
};
