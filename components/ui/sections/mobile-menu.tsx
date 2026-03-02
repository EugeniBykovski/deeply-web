"use client";

import { landingNav, type LandingSectionId } from "@/constants/nav";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ChevronRight, Menu, Sparkles } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

type Props = {
  labels: Record<LandingSectionId, string>;
};

export function MobileMenu({ labels }: Props) {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open menu"
            className="group relative h-10 w-10 rounded-xl bg-white/10 ring-1 ring-white/10 backdrop-blur-xl
                       transition-all hover:bg-white/15 hover:ring-white/20"
          >
            <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 blur-md transition-opacity duration-200 group-hover:opacity-100 bg-[radial-gradient(60px_40px_at_50%_0%,rgba(255,255,255,0.16),transparent_70%)]" />
            <Menu className="relative h-5 w-5 text-white/85" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-[86vw] max-w-[360px] border-l border-white/10 bg-[#0B1C1D]/80 backdrop-blur-2xl"
        >
          <VisuallyHidden>
            <SheetTitle>Navigation</SheetTitle>
          </VisuallyHidden>

          <div className="flex items-center gap-2 pb-4">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/8 ring-1 ring-white/10">
              <Sparkles className="h-5 w-5 text-emerald-200/90" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white/90">Deeply</div>
              <div className="text-xs text-white/55">
                Breathe • Dive • Progress
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-white/10" />

          <nav className="mt-5 space-y-2">
            {landingNav.map((item) => (
              <SheetClose asChild key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3
                             text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  <span className="text-sm font-medium">{labels[item.id]}</span>
                  <ChevronRight className="h-4 w-4 opacity-50 transition group-hover:translate-x-0.5 group-hover:opacity-80" />
                </a>
              </SheetClose>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
