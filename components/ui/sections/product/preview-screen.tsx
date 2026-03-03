"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ProgramsScreen } from "./screens/programs";
import { DiveScreen } from "./screens/dive";
import { ResultsScreen } from "./screens/results";
import { PreviewKey, TFn } from "./types";

export const PreviewScreen = ({ t, view }: { t: TFn; view: PreviewKey }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={view}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {view === "programs" && <ProgramsScreen t={t} />}
        {view === "dive" && <DiveScreen t={t} />}
        {view === "results" && <ResultsScreen t={t} />}
      </motion.div>
    </AnimatePresence>
  );
};
