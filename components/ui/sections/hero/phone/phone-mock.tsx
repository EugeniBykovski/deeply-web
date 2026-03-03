"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { BarChart3, Compass, Home, UserRound } from "lucide-react";
import { PhoneScreen } from "./phone-screen";
import { SEQUENCE } from "@/constants/nav";

type Props = { t: (k: string) => string };

export const PhoneMock = ({ t }: Props) => {
  const [idx, setIdx] = useState(0);
  const current = SEQUENCE[idx];

  useEffect(() => {
    const id = setInterval(
      () => setIdx((v) => (v + 1) % SEQUENCE.length),
      2200,
    );
    return () => clearInterval(id);
  }, []);

  const nav = useMemo(
    () => [
      { Icon: Home, label: t("hero.phone.nav.home") },
      { Icon: Compass, label: t("hero.phone.nav.dives") },
      { Icon: BarChart3, label: t("hero.phone.nav.progress") },
      { Icon: UserRound, label: t("hero.phone.nav.profile") },
    ],
    [t],
  );

  return (
    <div className="relative mx-auto w-[280px] sm:w-[320px] md:w-[360px]">
      <div className="pointer-events-none absolute -inset-10 rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,0.20),transparent_70%)] blur-2xl" />
      <div className="pointer-events-none absolute -inset-8 rounded-full bg-[radial-gradient(closest-side,rgba(45,212,191,0.14),transparent_72%)] blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 12, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        <div
          className="absolute inset-0"
          style={{ inset: "1% 4.6% 1.2% 4.6%" }}
        >
          <PhoneScreen t={t} idx={idx} current={current} nav={nav} />
        </div>

        <Image
          src="/img/phone.png"
          alt={t("hero.phone.previewAlt")}
          width={900}
          height={1800}
          priority
          className="relative h-auto w-full select-none"
        />
      </motion.div>
    </div>
  );
};
