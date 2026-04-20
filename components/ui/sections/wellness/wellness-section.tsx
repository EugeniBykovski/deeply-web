"use client";

import { Brain, Heart, MapPin, Repeat2, Sparkles } from "lucide-react";
import { LandingSection } from "../section";
import { Separator } from "../../separator";

type TFn = (k: string) => string;

const POINTS = [
  { id: "p1", Icon: Brain },
  { id: "p2", Icon: Heart },
  { id: "p3", Icon: Repeat2 },
  { id: "p4", Icon: MapPin },
] as const;

export const WellnessSection = ({ t }: { t: TFn }) => {
  return (
    <LandingSection id="wellness">
      <div className="relative overflow-hidden rounded-[32px] md:rounded-[44px] border border-white/10 bg-white/5 backdrop-blur-2xl">
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-24 opacity-45 blur-3xl"
          style={{
            background:
              "radial-gradient(1100px 700px at 10% 50%, rgba(23,58,53,0.28), transparent 56%), " +
              "radial-gradient(900px 600px at 90% 10%, rgba(16,185,129,0.12), transparent 58%), " +
              "radial-gradient(800px 500px at 55% 90%, rgba(26,59,66,0.22), transparent 60%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />

        <div className="relative p-6 md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-16">
            <div className="md:max-w-[380px]">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                <Sparkles className="h-4 w-4 text-emerald-200/90" />
                {t("wellness.badge")}
              </div>

              <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
                {t("wellness.title")}
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-white/65">
                {t("wellness.subtitle")}
              </p>

              <div className="mt-8 rounded-2xl border border-amber-200/10 bg-amber-400/5 p-5">
                <div className="text-xs font-semibold text-amber-200/65 mb-1">
                  {t("wellness.note.title")}
                </div>
                <div className="text-xs leading-relaxed text-white/50">
                  {t("wellness.note.text")}
                </div>
              </div>
            </div>

            <div className="flex-1 grid gap-4 sm:grid-cols-2">
              {POINTS.map(({ id, Icon }) => (
                <div
                  key={id}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                >
                  <div className="pointer-events-none absolute -inset-10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: "radial-gradient(300px 200px at 30% 20%, rgba(16,185,129,0.14), transparent 60%)" }}
                  />
                  <div className="relative">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-400/12 ring-1 ring-emerald-200/12 mb-3">
                      <Icon className="h-5 w-5 text-emerald-200/80" />
                    </div>
                    <div className="text-sm font-semibold text-white/90">
                      {t(`wellness.points.${id}.title`)}
                    </div>
                    <div className="mt-1.5 text-sm leading-relaxed text-white/58">
                      {t(`wellness.points.${id}.text`)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-12 bg-white/10" />
    </LandingSection>
  );
};
