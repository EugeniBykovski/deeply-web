import { FeatureItem } from "@/components/ui/sections/features/types";
import { Plan } from "@/components/ui/sections/pricing/types";
import { Instagram, Music2 } from "lucide-react";

export type LandingSectionId = "product" | "features" | "pricing" | "contacts";

export const landingNav: { id: LandingSectionId }[] = [
  { id: "product" },
  { id: "features" },
  { id: "pricing" },
  { id: "contacts" },
];

export type FooterLinkKey = string;

export const FOOTER_COLUMNS = [
  {
    titleKey: "footer.columns.product.title",
    links: [
      { labelKey: "footer.columns.product.dives", href: "#product" },
      { labelKey: "footer.columns.product.integrations", href: "#" },
      { labelKey: "footer.columns.product.features", href: "#features" },
      { labelKey: "footer.columns.product.templates", href: "#" },
      { labelKey: "footer.columns.product.compare", href: "#" },
      { labelKey: "footer.columns.product.security", href: "#" },
    ],
  },
  {
    titleKey: "footer.columns.solutions.title",
    links: [
      { labelKey: "footer.columns.solutions.beginners", href: "#" },
      { labelKey: "footer.columns.solutions.advanced", href: "#" },
      { labelKey: "footer.columns.solutions.coaches", href: "#" },
      { labelKey: "footer.columns.solutions.teams", href: "#" },
      { labelKey: "footer.columns.solutions.partners", href: "#" },
    ],
  },
  {
    titleKey: "footer.columns.company.title",
    links: [
      { labelKey: "footer.columns.company.partnerships", href: "#" },
      { labelKey: "footer.columns.company.contacts", href: "#contacts" },
    ],
  },
  {
    titleKey: "footer.columns.resources.title",
    links: [
      { labelKey: "footer.columns.resources.gettingStarted", href: "#" },
      { labelKey: "footer.columns.resources.examples", href: "#" },
      { labelKey: "footer.columns.resources.faq", href: "#" },
    ],
  },
  {
    titleKey: "footer.columns.getInTouch.title",
    links: [
      { labelKey: "footer.columns.getInTouch.support", href: "#contacts" },
      { labelKey: "footer.columns.getInTouch.helpCenter", href: "#" },
      { labelKey: "footer.columns.getInTouch.forPartners", href: "#" },
    ],
  },
] as const;

export const LEGAL = [
  { labelKey: "footer.legal.security", href: "#" },
  { labelKey: "footer.legal.privacy", href: "#" },
  { labelKey: "footer.legal.terms", href: "#" },
  { labelKey: "footer.legal.accessibility", href: "#" },
] as const;

export const SOCIALS = [
  {
    key: "instagram",
    labelKey: "footer.socials.instagram",
    Icon: Instagram,
    href: "#",
  },
  {
    key: "tiktok",
    labelKey: "footer.socials.tiktok",
    Icon: Music2,
    href: "#",
  },
] as const;

export const SEQUENCE = [
  { depth: "-4.2", rate: "0.6", phaseKey: "hero.phone.phase.relax" },
  { depth: "-6.8", rate: "0.8", phaseKey: "hero.phone.phase.descent" },
  { depth: "-8.1", rate: "0.7", phaseKey: "hero.phone.phase.hold" },
  { depth: "-7.4", rate: "0.5", phaseKey: "hero.phone.phase.ascent" },
] as const;

export const steps = [
  "hero.phone.step1",
  "hero.phone.step2",
  "hero.phone.step3",
] as const;

export const container = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
};

export type PreviewKey = "programs" | "dive" | "results";
export const ORDER: PreviewKey[] = ["programs", "dive", "results"];

export const FEATURES: FeatureItem[] = [
  {
    id: "programs",
    titleKey: "features.items.programs.title",
    textKey: "features.items.programs.text",
    bulletsKeys: [
      "features.items.programs.b1",
      "features.items.programs.b2",
      "features.items.programs.b3",
    ],
  },
  {
    id: "liveSession",
    titleKey: "features.items.liveSession.title",
    textKey: "features.items.liveSession.text",
    bulletsKeys: [
      "features.items.liveSession.b1",
      "features.items.liveSession.b2",
      "features.items.liveSession.b3",
    ],
  },
  {
    id: "co2o2",
    titleKey: "features.items.co2o2.title",
    textKey: "features.items.co2o2.text",
    bulletsKeys: [
      "features.items.co2o2.b1",
      "features.items.co2o2.b2",
      "features.items.co2o2.b3",
    ],
  },
  {
    id: "progress",
    titleKey: "features.items.progress.title",
    textKey: "features.items.progress.text",
    bulletsKeys: [
      "features.items.progress.b1",
      "features.items.progress.b2",
      "features.items.progress.b3",
    ],
  },
  {
    id: "safety",
    titleKey: "features.items.safety.title",
    textKey: "features.items.safety.text",
    bulletsKeys: [
      "features.items.safety.b1",
      "features.items.safety.b2",
      "features.items.safety.b3",
    ],
  },
  {
    id: "personalization",
    titleKey: "features.items.personalization.title",
    textKey: "features.items.personalization.text",
    bulletsKeys: [
      "features.items.personalization.b1",
      "features.items.personalization.b2",
      "features.items.personalization.b3",
    ],
  },
];

export const PLANS: Plan[] = [
  {
    id: "free",
    titleKey: "pricing.plans.free.title",
    subtitleKey: "pricing.plans.free.subtitle",
    price: "$0",
    priceNoteKey: "pricing.plans.free.note",
    ctaKey: "pricing.plans.free.cta",
    featuresKeys: [
      "pricing.plans.free.f1",
      "pricing.plans.free.f2",
      "pricing.plans.free.f3",
      "pricing.plans.free.f4",
      "pricing.plans.free.f5",
    ],
    badgeKey: "pricing.plans.free.badge",
  },
  {
    id: "pro",
    titleKey: "pricing.plans.pro.title",
    subtitleKey: "pricing.plans.pro.subtitle",
    price: "$5.99",
    priceNoteKey: "pricing.plans.pro.note",
    ctaKey: "pricing.plans.pro.cta",
    featuresKeys: [
      "pricing.plans.pro.f1",
      "pricing.plans.pro.f2",
      "pricing.plans.pro.f3",
      "pricing.plans.pro.f4",
      "pricing.plans.pro.f5",
    ],
    badgeKey: "pricing.plans.pro.badge",
    highlight: true,
  },
];

export const EMAIL = "bykovskieug@gmail.com";
