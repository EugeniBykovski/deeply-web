"use client";

import { LandingSection } from "../section";
import { ContactCard } from "./contact-card";
import { ContactsHeader } from "./contacts-header";
import type { TFn } from "./types";

export const ContactsSection = ({ t }: { t: TFn }) => {
  return (
    <LandingSection id="contacts">
      <div className="relative overflow-hidden rounded-[44px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl md:p-12">
        <div className="pointer-events-none absolute -inset-24 opacity-35 blur-3xl [background:radial-gradient(1100px_620px_at_20%_20%,rgba(26,59,66,0.20),transparent_60%),radial-gradient(1100px_620px_at_85%_30%,rgba(23,58,53,0.16),transparent_62%)]" />
        <div className="relative">
          <ContactsHeader t={t} />
          <ContactCard t={t} />
        </div>
      </div>
    </LandingSection>
  );
};
