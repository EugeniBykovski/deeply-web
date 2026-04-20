export type TFn = (k: string) => string;

export type PlanId = "weekly" | "monthly" | "yearly";

export type Plan = {
  id: PlanId;
  titleKey: string;
  subtitleKey: string;
  price: string;
  priceNoteKey: string;
  ctaKey: string;
  highlight?: boolean;
  featuresKeys: string[];
  badgeKey?: string;
  savingsKey?: string;
};
