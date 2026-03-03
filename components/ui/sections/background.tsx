"use client";

import { useEffect, useMemo, useRef } from "react";

export const LandingBackground = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  const cfg = useMemo(
    () => ({
      maxRotate: 1,
      maxTranslate: 1,
      lerp: 0.07,
      scrollDrift: 0.1,
    }),
    [],
  );

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const reduceMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    if (reduceMotion) return;

    let raf = 0;

    let targetRX = 0;
    let targetRY = 0;
    let targetTX = 0;
    let targetTY = 0;

    let curRX = 0;
    let curRY = 0;
    let curTX = 0;
    let curTY = 0;

    let targetPX = 50;
    let targetPY = 35;
    let curPX = 50;
    let curPY = 35;

    const clamp = (v: number, a: number, b: number) =>
      Math.max(a, Math.min(b, v));
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const onMove = (e: PointerEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      const dx = (x - 0.5) * 2;
      const dy = (y - 0.5) * 2;

      targetRY = clamp(dx * cfg.maxRotate, -cfg.maxRotate, cfg.maxRotate);
      targetRX = clamp(-dy * cfg.maxRotate, -cfg.maxRotate, cfg.maxRotate);

      targetTX = clamp(
        dx * cfg.maxTranslate,
        -cfg.maxTranslate,
        cfg.maxTranslate,
      );
      targetTY = clamp(
        dy * cfg.maxTranslate,
        -cfg.maxTranslate,
        cfg.maxTranslate,
      );

      targetPX = clamp(x * 100, 0, 100);
      targetPY = clamp(y * 100, 0, 100);
    };

    const onLeave = () => {
      targetRX = 0;
      targetRY = 0;
      targetTX = 0;
      targetTY = 0;
      targetPX = 50;
      targetPY = 35;
    };

    const tick = () => {
      curRX = lerp(curRX, targetRX, cfg.lerp);
      curRY = lerp(curRY, targetRY, cfg.lerp);
      curTX = lerp(curTX, targetTX, cfg.lerp);
      curTY = lerp(curTY, targetTY, cfg.lerp);

      curPX = lerp(curPX, targetPX, cfg.lerp);
      curPY = lerp(curPY, targetPY, cfg.lerp);

      const scrollY = window.scrollY || 0;
      const drift = clamp(scrollY * cfg.scrollDrift, 0, 320);

      el.style.setProperty("--rx", `${curRX.toFixed(3)}deg`);
      el.style.setProperty("--ry", `${curRY.toFixed(3)}deg`);
      el.style.setProperty("--cx", `${curTX.toFixed(3)}px`);
      el.style.setProperty("--cy", `${(curTY + drift * 0.35).toFixed(3)}px`);

      el.style.setProperty("--px", `${curPX.toFixed(2)}%`);
      el.style.setProperty("--py", `${curPY.toFixed(2)}%`);

      el.style.setProperty("--x0", `${(curTX * 0.1).toFixed(3)}px`);
      el.style.setProperty(
        "--y0",
        `${(curTY * 0.1 + drift * 0.08).toFixed(3)}px`,
      );

      el.style.setProperty("--x1", `${(curTX * 0.22).toFixed(3)}px`);
      el.style.setProperty(
        "--y1",
        `${(curTY * 0.22 + drift * 0.14).toFixed(3)}px`,
      );

      el.style.setProperty("--x2", `${(curTX * 0.44).toFixed(3)}px`);
      el.style.setProperty(
        "--y2",
        `${(curTY * 0.44 + drift * 0.2).toFixed(3)}px`,
      );

      el.style.setProperty("--x3", `${(curTX * 0.72).toFixed(3)}px`);
      el.style.setProperty(
        "--y3",
        `${(curTY * 0.72 + drift * 0.26).toFixed(3)}px`,
      );

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [cfg]);

  return (
    <div
      ref={rootRef}
      aria-hidden
      className={[
        "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
        "[--rx:0deg] [--ry:0deg] [--cx:0px] [--cy:0px]",
        "[--px:50%] [--py:35%]",
        "[--x0:0px] [--y0:0px] [--x1:0px] [--y1:0px] [--x2:0px] [--y2:0px] [--x3:0px] [--y3:0px]",
      ].join(" ")}
    >
      <div
        className="absolute inset-0 [perspective:1200px]"
        style={{ transform: "translate3d(var(--cx), var(--cy), 0)" }}
      >
        <div
          className="absolute inset-0 transform-gpu will-change-transform"
          style={{ transform: "rotateX(var(--rx)) rotateY(var(--ry))" }}
        >
          <div
            className="absolute -top-44 left-[-18rem] h-[640px] w-[900px] rounded-full blur-[110px] opacity-60"
            style={{
              transform:
                "translate3d(var(--x0), var(--y0), -120px) rotate(8deg)",
              background:
                "radial-gradient(circle at 30% 30%, rgba(23,58,53,0.70), transparent 60%)",
              animation: "blobFloat1 18s ease-in-out infinite",
            }}
          />
          <div
            className="absolute top-[10%] right-[-22rem] h-[680px] w-[980px] rounded-full blur-[120px] opacity-55"
            style={{
              transform:
                "translate3d(var(--x1), var(--y1), -90px) rotate(-10deg)",
              background:
                "radial-gradient(circle at 40% 35%, rgba(26,59,66,0.75), transparent 62%)",
              animation: "blobFloat2 22s ease-in-out infinite",
            }}
          />
          <div
            className="absolute bottom-[-26rem] left-[10%] h-[760px] w-[1100px] rounded-full blur-[130px] opacity-50"
            style={{
              transform:
                "translate3d(var(--x2), var(--y2), -70px) rotate(14deg)",
              background:
                "radial-gradient(circle at 50% 50%, rgba(16,185,129,0.18), transparent 62%)",
              animation: "blobFloat3 26s ease-in-out infinite",
            }}
          />

          <div
            className="absolute left-1/2 top-[-120px] h-[420px] w-[1400px] -translate-x-1/2 rounded-full blur-[90px] opacity-45"
            style={{
              transform:
                "translate3d(var(--x1), var(--y1), -40px) rotate(6deg)",
              background:
                "conic-gradient(from 180deg at 50% 50%, rgba(45,212,191,0.10), rgba(23,58,53,0.40), rgba(26,59,66,0.35), rgba(45,212,191,0.10))",
              animation: "auroraShift 16s ease-in-out infinite",
            }}
          />

          <div className="absolute inset-0 mix-blend-screen opacity-[0.65] [background-image:radial-gradient(900px_900px_at_var(--px)_var(--py),rgba(255,255,255,0.18),transparent_62%)]" />
          <div className="absolute inset-0 opacity-[0.55] [background-image:radial-gradient(1000px_1000px_at_var(--px)_var(--py),rgba(16,185,129,0.14),transparent_60%)]" />

          <div
            className="absolute inset-0 opacity-[0.10]"
            style={{
              transform: "translate3d(var(--x3), var(--y3), 18px)",
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.16]"
            style={{
              transform: "translate3d(var(--x3), var(--y3), 26px)",
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.40) 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1C1D]/05 via-[#071416]/35 to-[#020707]/85" />
          <div className="absolute inset-0 bg-[radial-gradient(1100px_700px_at_50%_120%,rgba(23,58,53,0.22),transparent_62%)]" />

          <div className="absolute inset-0 opacity-[0.10] mix-blend-soft-light [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22%3E%3Cfilter id=%22n%22 x=%220%22 y=%220%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22160%22 height=%22160%22 filter=%22url(%23n)%22 opacity=%220.55%22/%3E%3C/svg%3E')]" />

          <style jsx>{`
            @keyframes blobFloat1 {
              0%,
              100% {
                transform: translate3d(var(--x0), var(--y0), -120px)
                  rotate(8deg) scale(1);
              }
              50% {
                transform: translate3d(
                    calc(var(--x0) + 18px),
                    calc(var(--y0) - 22px),
                    -120px
                  )
                  rotate(12deg) scale(1.05);
              }
            }
            @keyframes blobFloat2 {
              0%,
              100% {
                transform: translate3d(var(--x1), var(--y1), -90px)
                  rotate(-10deg) scale(1);
              }
              50% {
                transform: translate3d(
                    calc(var(--x1) - 26px),
                    calc(var(--y1) + 18px),
                    -90px
                  )
                  rotate(-6deg) scale(1.06);
              }
            }
            @keyframes blobFloat3 {
              0%,
              100% {
                transform: translate3d(var(--x2), var(--y2), -70px)
                  rotate(14deg) scale(1);
              }
              50% {
                transform: translate3d(
                    calc(var(--x2) + 22px),
                    calc(var(--y2) + 28px),
                    -70px
                  )
                  rotate(10deg) scale(1.08);
              }
            }
            @keyframes auroraShift {
              0%,
              100% {
                filter: hue-rotate(0deg) saturate(1.1);
                transform: translate3d(var(--x1), var(--y1), -40px) rotate(6deg)
                  scale(1);
              }
              50% {
                filter: hue-rotate(-10deg) saturate(1.25);
                transform: translate3d(
                    calc(var(--x1) + 20px),
                    calc(var(--y1) - 10px),
                    -40px
                  )
                  rotate(10deg) scale(1.03);
              }
            }
            @media (prefers-reduced-motion: reduce) {
              * {
                animation: none !important;
              }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};
