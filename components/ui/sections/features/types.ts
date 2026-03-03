export type TFn = (k: string) => string;

export type FeatureId =
  | "programs"
  | "liveSession"
  | "co2o2"
  | "progress"
  | "safety"
  | "personalization";

export type FeatureItem = {
  id: FeatureId;
  titleKey: string;
  textKey: string;
  bulletsKeys: string[];
};
