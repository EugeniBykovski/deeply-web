"use client";

import { useEffect, useState } from "react";
import { landingNav, type LandingSectionId } from "@/constants/nav";
import { MobileMenu } from "./mobile-menu";
import Image from "next/image";

type Props = {
  rightSlot?: React.ReactNode;
  labels: Record<LandingSectionId, string>;
};

export const LandingHeader = ({ rightSlot, labels }: Props) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <header
        className={[
          "relative w-full max-w-7xl",
          "rounded-3xl border border-white/5",
          "backdrop-blur-md",
          "transition-all duration-300",
          scrolled
            ? "bg-[#0B1C1D]/55 shadow-[0_18px_60px_-22px_rgba(0,0,0,0.85)]"
            : "bg-[#0B1C1D]/45 shadow-[0_12px_50px_-28px_rgba(0,0,0,0.75)]",
        ].join(" ")}
      >
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(900px_260px_at_50%_0%,rgba(255,255,255,0),transparent_65%)] shadow-xl" />
        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-zinc-600/5" />

        <div className="relative mx-auto flex h-18 items-center gap-4 px-6">
          <a
            href="#top"
            className="flex items-center cursor-pointer p-2 bg-(--second-main-color)/20 rounded-full ring-1 ring-(--second-main-color)/50 transition-all hover:bg-(--main-color)/50"
          >
            <div className="relative h-9 w-9">
              <Image
                src="/img/sea.png"
                alt="Deeply"
                fill
                sizes="36px"
                priority
                className="rounded-md object-contain opacity-90"
              />
            </div>
          </a>
          <nav className="hidden flex-1 items-center justify-center md:flex">
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
              {landingNav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="group relative rounded-full px-4 py-2 text-sm text-white/80 transition hover:text-white"
                >
                  <span className="relative z-10">{labels[item.id]}</span>
                  <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </nav>

          <div className="ml-auto flex items-center gap-6">
            {rightSlot}
            <MobileMenu labels={labels} />
          </div>
        </div>
      </header>
    </div>
  );
};
