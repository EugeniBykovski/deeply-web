"use client";

import { useMemo } from "react";
import {
  BarChart3,
  Compass,
  ShieldCheck,
  Sparkles,
  TimerReset,
  Waves,
} from "lucide-react";
import { LandingSection } from "../section";
import type { FeatureCardConfig, TFn } from "./types";
import { FeatureCard } from "./feature-card";
import { HowItWorks } from "./how-it-works";
import { ProductShowcase } from "./product-showcase";
import { Separator } from "../../separator";

type Props = { t: TFn };

export const ProductSection = ({ t }: Props) => {
  const cards = useMemo<FeatureCardConfig[]>(
    () => [
      {
        id: "card1",
        Icon: Compass,
        title: t("product.cards.card1.title"),
        desc: t("product.cards.card1.text"),
        accent: "rgba(16,185,129,0.22)",
      },
      {
        id: "card2",
        Icon: TimerReset,
        title: t("product.cards.card2.title"),
        desc: t("product.cards.card2.text"),
        accent: "rgba(45,212,191,0.18)",
      },
      {
        id: "card3",
        Icon: ShieldCheck,
        title: t("product.cards.card3.title"),
        desc: t("product.cards.card3.text"),
        accent: "rgba(255,255,255,0.14)",
      },
      {
        id: "card4",
        Icon: BarChart3,
        title: t("product.cards.card4.title"),
        desc: t("product.cards.card4.text"),
        accent: "rgba(26,59,66,0.25)",
      },
    ],
    [t],
  );

  return (
    <LandingSection id="product">
      <div className="relative overflow-hidden rounded-[32px] md:rounded-[44px] border border-white/10 bg-white/5 backdrop-blur-2xl">
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-24 opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(1200px 700px at 12% 10%, rgba(23,58,53,0.24), transparent 58%), " +
              "radial-gradient(1200px 700px at 88% 25%, rgba(26,59,66,0.22), transparent 60%), " +
              "radial-gradient(800px 600px at 50% 90%, rgba(16,185,129,0.10), transparent 62%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent"
        />

        <div className="relative grid gap-8 p-6 md:gap-10 md:grid-cols-12 md:p-12">
          <div className="md:col-span-5">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <Sparkles className="h-4 w-4 text-emerald-200/90" />
              {t("product.badge")}
            </div>

            <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
              {t("product.title")}
            </h2>

            <p className="mt-3 text-white/70">{t("product.subtitle")}</p>

            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {t("product.description")}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {cards.map((c) => (
                <FeatureCard
                  key={c.id}
                  Icon={c.Icon}
                  title={c.title}
                  desc={c.desc}
                  accent={c.accent}
                />
              ))}
            </div>

            <div className="mt-8 rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
              <div className="flex items-center gap-2 text-sm font-semibold text-white/90">
                <Waves className="h-5 w-5 text-emerald-200/90" />
                {t("product.forWho.title")}
              </div>
              <div className="mt-3 space-y-2 text-sm text-white/60">
                {[
                  "product.forWho.line1",
                  "product.forWho.line2",
                  "product.forWho.line3",
                ].map((k) => (
                  <div key={k} className="flex items-start gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-200/60" />
                    <span>{t(k)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <ProductShowcase t={t} />
            <HowItWorks t={t} />
          </div>
        </div>
      </div>

      <Separator className="my-12 bg-white/10" />
    </LandingSection>
  );
};
