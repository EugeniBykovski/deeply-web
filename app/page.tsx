"use client";

import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { useClientTranslation } from "@/hooks/use-client-translation";
import { Namespaces } from "@/lib/i18n";

export default function Home() {
  const { t } = useClientTranslation(Namespaces.landing);

  return (
    <div className="flex flex-col w-full min-h-screen lg:h-screen lg:overflow-hidden">
      <header className="bg-zinc-800/80 text-white p-4 flex items-center shadow-2xl shadow-zinc-800 justify-between sticky top-0 z-10">
        HEADER
        <LanguageSwitcher />
      </header>
      <main> {t("title.landing")}</main>
      <footer className="flex items-center justify-center p-6 bg-zinc-800/30">
        FOOTER
      </footer>
    </div>
  );
}
