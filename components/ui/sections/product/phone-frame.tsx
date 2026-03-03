"use client";

export const PhoneFrame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative mx-auto w-full max-w-[440px]">
      <div className="pointer-events-none absolute -inset-10 rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,0.14),transparent_70%)] blur-2xl" />
      <div className="pointer-events-none absolute -inset-12 rounded-full bg-[radial-gradient(closest-side,rgba(45,212,191,0.10),transparent_72%)] blur-3xl" />

      <div className="relative overflow-hidden rounded-[44px] border border-white/10 bg-[#061415] shadow-[0_30px_90px_-60px_rgba(0,0,0,0.9)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_520px_at_20%_20%,rgba(23,58,53,0.45),transparent_60%),radial-gradient(900px_520px_at_85%_35%,rgba(26,59,66,0.42),transparent_62%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(540px_100px_at_50%_0%,rgba(255,255,255,0.12),transparent_70%)]" />

        <div className="absolute left-1/2 top-3 z-20 h-6 w-28 -translate-x-1/2 rounded-full bg-black/35 ring-1 ring-white/10" />
        <div className="relative z-10 p-6">{children}</div>

        <div className="absolute inset-x-0 bottom-4 z-10 flex items-center justify-center">
          <div className="h-1.5 w-20 rounded-full bg-white/12" />
        </div>
      </div>
    </div>
  );
};
