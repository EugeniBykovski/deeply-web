"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type Props = {
  nav: { Icon: LucideIcon; label: string }[];
};

export const PhoneBottomNav = ({ nav }: Props) => {
  return (
    <div className="absolute inset-x-0 bottom-16 z-10 px-6">
      <div className="relative h-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
        <motion.div
          className="absolute left-1 top-1 h-10 w-[23%] rounded-xl bg-emerald-400/14 ring-1 ring-emerald-200/10"
          animate={{ x: ["0%", "105%", "210%", "315%", "0%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative grid h-full grid-cols-4 place-items-center text-white/60">
          {nav.map(({ Icon, label }, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <Icon className="h-4 w-4" />
              <span className="text-[9px] leading-none">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
