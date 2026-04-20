"use client";

import {
  BarChart3,
  Clock,
  Compass,
  Layers,
  ShieldCheck,
  TimerReset,
  TrendingUp,
  Waves,
} from "lucide-react";
import { TFn } from "./types";

export const ProductShowcase = ({ t }: { t: TFn }) => {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#061415] shadow-[0_30px_90px_-60px_rgba(0,0,0,0.85)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_520px_at_20%_20%,rgba(23,58,53,0.50),transparent_60%),radial-gradient(900px_520px_at_85%_35%,rgba(26,59,66,0.45),transparent_62%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(600px_130px_at_50%_0%,rgba(45,212,191,0.07),transparent_70%)]" />
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-[260px] w-[500px] -translate-x-1/2 rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(closest-side, rgba(16,185,129,0.18), transparent)" }} />

      <div className="relative space-y-5 p-7">
        <div className="flex items-center justify-between border-b border-white/8 pb-5">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-white/35">Deeply App</div>
            <div className="mt-1 text-xl font-semibold text-white/90">
              {t("product.preview.title")}
            </div>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400/15 ring-1 ring-emerald-200/15">
            <Waves className="h-5 w-5 text-emerald-200/80" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { label: t("product.preview.tabs.programs"), value: "12+", Icon: Layers },
            { label: t("product.preview.dive.timer.label"), value: "2:30", Icon: Clock },
            { label: t("product.preview.results.metric1.label"), value: "+18%", Icon: TrendingUp },
          ].map(({ label, value, Icon }) => (
            <div key={label} className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-4">
              <Icon className="mb-2 h-4 w-4 text-emerald-200/55" />
              <div className="text-lg font-semibold text-white/88">{value}</div>
              <div className="mt-0.5 text-center text-[10px] leading-tight text-white/45">{label}</div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/4 p-5">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Compass className="h-4 w-4 text-emerald-200/60" />
              <span className="text-sm font-semibold text-white/80">
                {t("product.preview.programs.builder.title")}
              </span>
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-white/45">
              {t("product.preview.programs.builder.tag")}
            </span>
          </div>
          <div className="space-y-2.5">
            {[
              { n: "01", text: t("product.preview.programs.builder.step1"), Icon: Waves },
              { n: "02", text: t("product.preview.programs.builder.step2"), Icon: ShieldCheck },
              { n: "03", text: t("product.preview.programs.builder.step3"), Icon: TimerReset },
            ].map(({ n, text, Icon }) => (
              <div key={n} className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/4 px-4 py-2.5">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-200/15 text-[10px] font-semibold text-emerald-200/65">
                  {n}
                </span>
                <Icon className="h-3.5 w-3.5 shrink-0 text-white/30" />
                <span className="text-xs text-white/60">{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/4 p-4">
            <div className="mb-3 flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-emerald-200/60" />
              <span className="text-xs font-medium text-white/70">
                {t("product.preview.results.metric1.label")}
              </span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/8">
              <div
                className="h-full w-[72%] rounded-full"
                style={{ background: "linear-gradient(90deg, rgba(16,185,129,0.65), rgba(45,212,191,0.75))" }}
              />
            </div>
            <div className="mt-2 text-[10px] text-white/38">
              {t("product.preview.results.metric1.tag")}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/4 p-4">
            <div className="mb-1 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-200/60" />
              <span className="text-xs font-medium text-white/70">
                {t("product.preview.results.metric3.label")}
              </span>
            </div>
            <div className="mt-2 text-2xl font-semibold text-white/85">94%</div>
            <div className="text-[10px] text-white/38">
              {t("product.preview.results.metric3.text")}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-emerald-200/10 bg-emerald-400/5 px-5 py-4">
          <div className="mb-1 text-xs font-semibold text-emerald-200/65">
            {t("product.preview.results.note.title")}
          </div>
          <div className="text-xs leading-relaxed text-white/50">
            {t("product.preview.results.note.text")}
          </div>
        </div>
      </div>
    </div>
  );
};
