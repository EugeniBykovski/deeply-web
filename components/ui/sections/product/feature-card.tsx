"use client";

import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export const FeatureCard = ({
  Icon,
  title,
  desc,
  accent,
}: {
  Icon: React.ElementType;
  title: string;
  desc: string;
  accent: string;
}) => {
  return (
    <motion.div
      variants={item}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl"
    >
      <div
        className="pointer-events-none absolute -inset-10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(420px 220px at 30% 20%, ${accent}, transparent 60%)`,
        }}
      />
      <div className="relative flex items-start gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/6 ring-1 ring-white/10">
          <Icon className="h-5 w-5 text-white/80" />
        </div>
        <div className="min-w-0">
          <div className="text-sm font-semibold text-white/90">{title}</div>
          <div className="mt-1 text-sm text-white/60">{desc}</div>
        </div>
      </div>
    </motion.div>
  );
};
