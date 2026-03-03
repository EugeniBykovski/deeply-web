export type TFn = (k: string) => string;

export type FeatureCardId = "card1" | "card2" | "card3" | "card4";

export type FeatureCardConfig = {
  id: FeatureCardId;
  Icon: React.ElementType;
  title: string;
  desc: string;
  accent: string;
};
