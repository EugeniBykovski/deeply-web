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
  { labelKey: "footer.legal.cookies", href: "#" },
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
