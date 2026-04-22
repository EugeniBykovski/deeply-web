"use client";

import Image from "next/image";

type Props = { t: (k: string) => string };

export const PhoneMock = ({ t }: Props) => {
  return (
    <div className="relative mx-auto w-[min(280px,75vw)] sm:w-[320px] md:w-[360px]">
      <div className="pointer-events-none absolute -inset-10 rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,0.20),transparent_70%)] blur-2xl" />
      <div className="pointer-events-none absolute -inset-8 rounded-full bg-[radial-gradient(closest-side,rgba(45,212,191,0.14),transparent_72%)] blur-3xl" />

      <div className="relative">
        {/* Real app screenshot fills the screen area behind the phone frame */}
        <div
          className="absolute overflow-hidden"
          style={{ inset: "1% 4.6% 1.2% 4.6%" }}
        >
          <Image
            src="/img/iphone-1.jpg"
            alt={t("hero.phone.previewAlt")}
            fill
            sizes="(max-width: 480px) 75vw, (max-width: 768px) 320px, 360px"
            className="object-cover object-top select-none"
            priority
          />
        </div>

        {/* Phone frame overlay — sits on top of the screenshot */}
        <Image
          src="/img/phone.png"
          alt=""
          aria-hidden
          width={900}
          height={1800}
          priority
          sizes="(max-width: 480px) 75vw, (max-width: 768px) 320px, 360px"
          className="relative h-auto w-full select-none pointer-events-none"
        />
      </div>
    </div>
  );
};
