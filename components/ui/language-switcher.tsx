"use client";

import { FC, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const languages = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
];

export const LanguageSwitcher: FC = () => {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [current, setCurrent] = useState("ru");

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("appLang") || i18n.language || "ru";
    setCurrent(savedLang);
  }, []);

  const handleClick = (code: string) => {
    if (code === current) return;
    i18n.changeLanguage(code);
    localStorage.setItem("appLang", code);
    setCurrent(code);
  };

  if (!mounted) return null;

  return (
    <div
      className="inline-flex bg-zinc-800/50 p-1 rounded-full gap-2 backdrop-blur-md shadow-inner"
      aria-label="Language switcher"
    >
      {languages.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => handleClick(code)}
          className={cn(
            "px-3 py-1 rounded-full text-sm font-medium transition cursor-pointer",
            current === code
              ? "bg-(--main-color) text-zinc-200 shadow-md"
              : "text-white/70 hover:text-white hover:bg-zinc-700/30",
          )}
          aria-pressed={current === code}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
