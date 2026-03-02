"use client";

import { FOOTER_COLUMNS, LEGAL, SOCIALS } from "@/constants/nav";
import { motion } from "framer-motion";
import Link from "next/link";

export const Footer = ({ t }: { t: (k: string) => string }) => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative mt-14 border-t border-white/5 backdrop-blur-xs"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 justify-items-center gap-x-10 gap-y-10 py-14 md:grid-cols-5 md:justify-items-stretch">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.titleKey} className="w-full max-w-[220px] text-left">
              <h3 className="text-sm font-semibold tracking-wide text-white/90">
                {t(col.titleKey)}
              </h3>

              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.labelKey}>
                    <Link
                      href={l.href}
                      className="group inline-flex items-center justify-start gap-2 text-sm text-white/60 transition hover:text-white"
                    >
                      <span className="relative">
                        {t(l.labelKey)}
                        <span className="absolute -bottom-[2px] left-0 h-px w-0 bg-white/35 transition-all duration-200 group-hover:w-full" />
                      </span>
                      <span className="opacity-0 transition-opacity duration-200 group-hover:opacity-100 text-white/35">
                        ↗
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="h-px w-full bg-white/10" />
        <div className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-white/55 flex justify-center ">
            {t("footer.copyrightLine")}
          </div>

          <div className="flex flex-col gap-4 items-center md:items-end">
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:justify-end">
              {LEGAL.map((l) => (
                <Link
                  key={l.labelKey}
                  href={l.href}
                  className="text-sm text-white/55 transition hover:text-white"
                >
                  {t(l.labelKey)}
                </Link>
              ))}
            </div>
            <div className="flex items-center justify-center gap-2 md:justify-end">
              {SOCIALS.map(({ key, href, labelKey, Icon }) => (
                <motion.div
                  key={key}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={href}
                    aria-label={t(labelKey)}
                    className="group relative inline-flex h-10 w-10 items-center justify-center rounded-xl
                   bg-white/10 ring-1 ring-white/10
                   transition-all duration-200
                   hover:bg-white/10 hover:ring-white/20
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  >
                    <Icon className="relative h-[20px] w-[20px] text-white/80 transition-colors duration-200 group-hover:text-white" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
