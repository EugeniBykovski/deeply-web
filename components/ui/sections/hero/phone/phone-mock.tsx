"use client";

import Image from "next/image";
import { PhoneScreen } from "./phone-screen";

type Props = { t: (k: string) => string };

export const PhoneMock = ({ t }: Props) => {
  return (
    <div className="relative mx-auto w-[min(280px,75vw)] sm:w-[320px] md:w-[360px]">
      <div className="pointer-events-none absolute -inset-10 rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,0.20),transparent_70%)] blur-2xl" />
      <div className="pointer-events-none absolute -inset-8 rounded-full bg-[radial-gradient(closest-side,rgba(45,212,191,0.14),transparent_72%)] blur-3xl" />

      <div className="relative">
        <div
          className="absolute inset-0"
          style={{ inset: "1% 4.6% 1.2% 4.6%" }}
        >
          <PhoneScreen t={t} />
        </div>

        <Image
          src="/img/phone.png"
          alt={t("hero.phone.previewAlt")}
          width={900}
          height={1800}
          priority
          sizes="(max-width: 480px) 75vw, (max-width: 768px) 320px, 360px"
          className="relative h-auto w-full select-none"
        />
      </div>
    </div>
  );
};
