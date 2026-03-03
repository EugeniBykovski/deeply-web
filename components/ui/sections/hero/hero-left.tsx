"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MiniSignal } from "./hero-mini-signal";
import { KpiCard } from "./hero-kpi-card";

type Props = { t: (k: string) => string };

export const HeroLeft = ({ t }: Props) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
        <Sparkles className="h-4 w-4 text-emerald-200/90" />
        {t("hero.badge")}
      </div>
      <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
        <span className="text-white">{t("hero.title")}</span>
      </h1>
      <p className="mt-4 max-w-xl text-base text-white/70 md:text-lg">
        {t("hero.subtitle")}
      </p>
      <div className="mt-6 grid gap-3 text-sm text-white/70 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
          <div className="font-medium text-white/85">
            {t("hero.point1Title")}
          </div>
          <div className="text-white/60">{t("hero.point1Text")}</div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
          <div className="font-medium text-white/85">
            {t("hero.point2Title")}
          </div>
          <div className="text-white/60">{t("hero.point2Text")}</div>
        </div>
        <MiniSignal t={t} />
        <KpiCard t={t} Icon={Waves} leftValue="7" rightValue="92%" />
      </div>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button asChild className="rounded-2xl py-6">
          <Link href="#product" className="inline-flex items-center gap-2">
            {t("hero.ctaPrimary")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <Button
          asChild
          variant="secondary"
          className="rounded-2xl bg-white/10 py-6 text-white hover:bg-white/15"
        >
          <Link href="#features" className="inline-flex items-center gap-2">
            <Play className="h-4 w-4" />
            {t("hero.ctaSecondary")}
          </Link>
        </Button>
      </div>
      <div className="mt-6 flex items-center justify-center gap-5 text-sm text-white/50 md:justify-start">
        <span className="hidden md:block">{t("hero.note")}</span>
        <motion.a
          href="#"
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center rounded-full px-6 py-2 transition-all bg-emerald-200/90 hover:bg-emerald-200"
          aria-label={t("hero.storeAlt")}
        >
          <Image
            src="/img/store-image.svg"
            alt={t("hero.storeAlt")}
            width={80}
            height={20}
          />
        </motion.a>
      </div>
    </div>
  );
};
