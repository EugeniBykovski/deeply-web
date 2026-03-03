"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { PreviewKey, TFn } from "./types";

export const PreviewTabs = ({
  t,
  active,
  onChange,
}: {
  t: TFn;
  active: PreviewKey;
  onChange: (k: PreviewKey) => void;
}) => {
  const tabs = useMemo(
    () => [
      { k: "programs" as const, label: t("product.preview.tabs.programs") },
      { k: "dive" as const, label: t("product.preview.tabs.dive") },
      { k: "results" as const, label: t("product.preview.tabs.results") },
    ],
    [t],
  );

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
      {tabs.map((tab) => (
        <button
          key={tab.k}
          type="button"
          onClick={() => onChange(tab.k)}
          className="relative rounded-full px-3 py-1.5 text-xs text-white/70 transition hover:text-white"
        >
          {active === tab.k && (
            <motion.span
              layoutId="productPreviewTab"
              className="absolute inset-0 rounded-full bg-white/10"
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
            />
          )}
          <span className="relative">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};
