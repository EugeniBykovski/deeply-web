"use client";

import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { useClientTranslation } from "@/hooks/use-client-translation";
import { Namespaces } from "@/lib/i18n";
import { LandingBackground } from "./background";
import { LandingHeader } from "./header";
import { Footer } from "./footer";
import { HeroSection } from "./hero";
import { ContactsSection } from "./contacts/contacts-section";
import { FeaturesSection } from "./features/features-section";
import { PricingSection } from "./pricing/pricing-section";
import { ProductSection } from "./product";

export const LandingPage = () => {
  const { t } = useClientTranslation(Namespaces.landing);

  return (
    <div
      id="top"
      className="relative flex flex-col w-full min-h-screen lg:h-screen"
    >
      <LandingBackground />
      <LandingHeader
        rightSlot={<LanguageSwitcher />}
        labels={{
          product: t("nav.product"),
          features: t("nav.features"),
          pricing: t("nav.pricing"),
          contacts: t("nav.contacts"),
        }}
      />
      <main className="relative pt-6 px-4 md:px-0">
        <HeroSection t={t} />
        <ProductSection t={t} />
        <FeaturesSection t={t} />
        <PricingSection t={t} />
        <ContactsSection t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
};
