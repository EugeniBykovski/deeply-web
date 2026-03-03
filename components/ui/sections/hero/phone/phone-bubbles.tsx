"use client";

import { motion } from "framer-motion";

export const PhoneBubbles = () => {
  return (
    <>
      <motion.div
        aria-hidden
        className="absolute left-[18%] top-[78%] h-2.5 w-2.5 rounded-full bg-white/20"
        animate={{ y: [0, -80], opacity: [0, 0.6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute left-[28%] top-[84%] h-1.5 w-1.5 rounded-full bg-white/20"
        animate={{ y: [0, -70], opacity: [0, 0.5, 0] }}
        transition={{
          duration: 3.6,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.8,
        }}
      />
      <motion.div
        aria-hidden
        className="absolute left-[40%] top-[82%] h-2 w-2 rounded-full bg-white/20"
        animate={{ y: [0, -90], opacity: [0, 0.55, 0] }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: "easeOut",
          delay: 1.4,
        }}
      />
    </>
  );
};
