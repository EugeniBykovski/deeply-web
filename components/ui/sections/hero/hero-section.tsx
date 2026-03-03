"use client";

import { motion } from "framer-motion";
import { LandingSection } from "../section";
import { Separator } from "@/components/ui/separator";
import { HeroLeft } from "./hero-left";
import { PhoneMock } from "./phone/phone-mock";

type Props = { t: (k: string) => string };

export const HeroSection = ({ t }: Props) => {
  return (
    <LandingSection id="hero" className="pt-10 md:pt-16">
      <div className="relative overflow-hidden rounded-[44px] border border-white/10 bg-white/5 backdrop-blur-2xl">
        <motion.div
          className="pointer-events-none absolute -inset-16 opacity-40 blur-2xl"
          animate={{ x: [0, 24, 0], y: [0, -18, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(900px 520px at 20% 20%, rgba(16,185,129,0.10), transparent 60%), radial-gradient(900px 520px at 80% 30%, rgba(45,212,191,0.10), transparent 62%)",
          }}
        />
        <div className="relative grid gap-10 p-8 md:grid-cols-2 md:p-12">
          <HeroLeft t={t} />
          <div className="flex items-center justify-center">
            <PhoneMock t={t} />
          </div>
        </div>
      </div>
      <Separator className="my-12 bg-white/10" />
    </LandingSection>
  );
};
