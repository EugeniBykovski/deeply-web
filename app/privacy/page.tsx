import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Deeply Privacy Policy — how we collect, use, and protect your data.",
};

const EFFECTIVE_DATE = "April 19, 2026";
const CONTACT_EMAIL = "bykovskieug@gmail.com";

const sections = [
  {
    id: "intro",
    title: "1. Introduction",
    body: `Deeply ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and what choices you have.

This Policy applies to the Deeply iOS application and any related services. By using the App you agree to the practices described here.`,
  },
  {
    id: "collect",
    title: "2. Information We Collect",
    subsections: [
      {
        title: "2.1 Account Information",
        body: `When you sign in with Apple, we receive:
• A unique identifier from Apple (used as your User ID)
• Your email address (only if you choose to share it via Apple Sign-In)
• Display name (optional)

We do not collect or store your Apple ID password.`,
      },
      {
        title: "2.2 Training Data",
        body: `When you use the App, we collect the data you generate:
• Session logs (date, duration, hold times, program type)
• Depth and descent metrics (if entered or tracked)
• Streak and progress records
• Goals and program preferences

This data is used solely to provide your training experience and progress history.`,
      },
      {
        title: "2.3 Subscription and Payment Data",
        body: `Payments are processed entirely by Apple App Store. We do not collect or store credit card numbers or payment details.

We receive from RevenueCat (our subscription management provider):
• Subscription status (active, expired, cancelled)
• Subscription tier (Free / Pro)
• Expiry date of your subscription

We do not receive your full payment method details.`,
      },
      {
        title: "2.4 Technical and Usage Data",
        body: `We may automatically collect:
• Device type and iOS version
• App version
• Crash reports and error logs
• Feature usage patterns (anonymized)
• General region / locale

This data helps us diagnose issues and improve the App. It is not linked to your identity without your consent.`,
      },
    ],
  },
  {
    id: "use",
    title: "3. How We Use Your Information",
    body: `We use your information to:
• Create and manage your account
• Deliver, personalize, and improve your training experience
• Process and manage your subscription
• Send important service notifications (e.g., account changes)
• Analyze aggregated, anonymized usage patterns to improve the product
• Respond to support requests
• Comply with legal obligations

We do not use your personal data for advertising. We do not sell your personal data to third parties.`,
  },
  {
    id: "sharing",
    title: "4. Information Sharing",
    body: `We share your data only with:

RevenueCat — subscription status management. RevenueCat processes your subscription lifecycle. Their privacy policy: revenuecat.com/privacy

Apple — authentication and payment infrastructure. Apple's privacy policy applies to data they collect.

Infrastructure providers — we use cloud hosting services (database and API servers) that store your data on our behalf, under strict data processing agreements.

Legal compliance — we may disclose your data if required by law, subpoena, or governmental authority.

We do not share your training data with advertisers, data brokers, or analytics companies without your explicit consent.`,
  },
  {
    id: "retention",
    title: "5. Data Retention",
    body: `We retain your account and training data for as long as your account is active or as needed to provide services.

If you delete your account via Settings → Delete Account, we permanently delete your personal data within 30 days, except where required by law to retain certain records.

Anonymized, aggregated data (e.g., average session duration across all users) may be retained indefinitely as it cannot be used to identify you.`,
  },
  {
    id: "security",
    title: "6. Security",
    body: `We take reasonable technical and organizational measures to protect your data:
• HTTPS / TLS encryption for all data in transit
• Encrypted storage for authentication tokens (iOS SecureStore)
• Access controls limiting who can access production data
• Regular security reviews

No method of transmission or storage is 100% secure. We cannot guarantee absolute security, but we maintain industry-standard practices and respond promptly to any identified vulnerabilities.`,
  },
  {
    id: "rights",
    title: "7. Your Rights",
    body: `Depending on your location, you may have the following rights regarding your personal data:

Access — request a copy of the personal data we hold about you.
Correction — request that inaccurate data be corrected.
Deletion — request deletion of your personal data (you can also do this directly via Settings → Delete Account).
Portability — request your training data in a machine-readable format.
Restriction — request that we limit how we use your data.
Objection — object to certain processing activities.

To exercise any of these rights, contact us at ${CONTACT_EMAIL}. We will respond within 30 days.`,
  },
  {
    id: "children",
    title: "8. Children's Privacy",
    body: `The App is not directed to children under the age of 16. We do not knowingly collect personal information from children under 16. If we become aware that a child under 16 has provided personal data, we will delete it promptly.

If you believe a child has provided us with personal information, please contact us at ${CONTACT_EMAIL}.`,
  },
  {
    id: "thirdparty",
    title: "9. Third-Party Services",
    body: `The App integrates the following third-party services, each with their own privacy policies:

• Apple Sign-In — authentication
• Apple App Store — payment processing
• RevenueCat — subscription lifecycle management
• Prisma / PostgreSQL (via cloud provider) — data storage

We are not responsible for the privacy practices of these third parties. We encourage you to review their policies.`,
  },
  {
    id: "international",
    title: "10. International Data Transfers",
    body: `Your data may be processed in countries other than your own. Where we transfer data internationally, we ensure appropriate safeguards are in place, such as standard contractual clauses or equivalent protections required by applicable law.`,
  },
  {
    id: "changes",
    title: "11. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. We will notify you of significant changes via in-app notification or email. The "Effective date" at the top of this Policy reflects the most recent revision.

Your continued use of the App after changes take effect constitutes acceptance of the revised Policy.`,
  },
  {
    id: "contact",
    title: "12. Contact Us",
    body: `For any privacy-related questions, requests, or concerns, please contact us at:\n\n${CONTACT_EMAIL}\n\nWe aim to respond to all privacy inquiries within 30 days.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0B1C1D] text-white">
      {/* Top bar */}
      <div className="border-b border-white/5">
        <div className="mx-auto max-w-3xl px-4 py-4 flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Deeply
          </Link>
        </div>
      </div>

      <main className="mx-auto max-w-3xl px-4 py-14 pb-24">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50 mb-5">
            Legal
          </div>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-white/50 text-sm">
            Effective date: {EFFECTIVE_DATE}
          </p>
          <p className="mt-4 text-white/60 leading-relaxed">
            Your privacy matters to us. This Policy explains clearly and
            concisely what data Deeply collects, why we collect it, and how you
            can control it.
          </p>
        </div>

        {/* Quick summary box */}
        <div className="mb-12 rounded-2xl border border-emerald-500/15 bg-emerald-500/5 px-6 py-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400/70 mb-3">
            TL;DR
          </p>
          <ul className="space-y-2 text-sm text-white/65">
            <li className="flex gap-2">
              <span className="text-emerald-400 shrink-0">✓</span>
              We collect only what's needed to run the app.
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-400 shrink-0">✓</span>
              We never sell your personal data.
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-400 shrink-0">✓</span>
              You can delete your account and all data at any time.
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-400 shrink-0">✓</span>
              Payments are handled by Apple — we never see your card details.
            </li>
          </ul>
        </div>

        {/* Table of contents */}
        <nav className="mb-12 rounded-2xl border border-white/8 bg-white/3 px-6 py-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">
            Contents
          </p>
          <ol className="space-y-1.5">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-sm text-white/55 hover:text-white transition-colors"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-8">
              <h2 className="text-lg font-semibold mb-3 text-white">
                {s.title}
              </h2>
              {"subsections" in s && s.subsections ? (
                <div className="space-y-6">
                  {s.subsections.map((sub) => (
                    <div key={sub.title}>
                      <h3 className="text-sm font-semibold text-white/80 mb-2">
                        {sub.title}
                      </h3>
                      <p className="text-white/65 leading-relaxed whitespace-pre-line text-[0.9375rem]">
                        {sub.body}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-white/65 leading-relaxed whitespace-pre-line text-[0.9375rem]">
                  {"body" in s ? s.body : ""}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Footer strip */}
        <div className="mt-16 pt-8 border-t border-white/8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-white/40">
          <span>© 2026 Deeply. All rights reserved.</span>
          <div className="flex gap-5">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
