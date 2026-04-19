import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Deeply Terms of Service — read our usage policies and user agreement.",
};

const EFFECTIVE_DATE = "April 19, 2026";
const CONTACT_EMAIL = "bykovskieug@gmail.com";

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    body: `By downloading, installing, or using the Deeply application ("App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.

These Terms constitute a legally binding agreement between you ("User") and Deeply ("we," "us," or "our"). We reserve the right to update these Terms at any time. Continued use of the App after changes constitutes acceptance of the revised Terms.`,
  },
  {
    id: "eligibility",
    title: "2. Eligibility",
    body: `You must be at least 16 years of age to use Deeply. By using the App you represent and warrant that you meet this age requirement and have the legal capacity to enter into a binding agreement.

Freediving and breath-hold training carry inherent physical risks. You confirm that you are in good health and have consulted a physician before undertaking any breath-hold training program. Users with cardiovascular conditions, respiratory conditions, or other relevant medical issues should seek professional medical advice before use.`,
  },
  {
    id: "account",
    title: "3. User Account",
    body: `You may create an account using Apple Sign-In or another supported method. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.

You agree to:
• Provide accurate and current information
• Notify us immediately of any unauthorized access to your account
• Not share your account with any third party
• Not create more than one account per person

We reserve the right to suspend or terminate accounts that violate these Terms.`,
  },
  {
    id: "subscription",
    title: "4. Subscriptions and Payments",
    body: `Deeply offers a free tier and a Pro subscription ("Deeply Pro") that unlocks additional features including advanced training programs, expanded insights, and personalization tools.

Subscription billing is processed through Apple App Store. By subscribing you agree to Apple's payment terms. Subscriptions auto-renew unless cancelled at least 24 hours before the end of the current billing period.

You may manage or cancel your subscription at any time through your Apple ID account settings. Refunds are subject to Apple's refund policy. We do not issue refunds directly.

All prices are shown in USD and are subject to change with reasonable notice.`,
  },
  {
    id: "license",
    title: "5. License to Use",
    body: `Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to download and use the App on iOS devices you own or control, solely for your personal, non-commercial purposes.

You may not:
• Copy, modify, or distribute the App or its content
• Reverse-engineer, decompile, or disassemble any part of the App
• Use the App for commercial purposes without prior written consent
• Remove or obscure any proprietary notices within the App
• Use automated means to access the App or extract data`,
  },
  {
    id: "health",
    title: "6. Health and Safety Disclaimer",
    body: `DEEPLY IS NOT A MEDICAL PRODUCT. The App provides guidance for breath-hold and freediving training for informational and fitness purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment.

Breath-hold diving and freediving carry serious risks including hypoxia, shallow water blackout, and drowning. Always:
• Train with a buddy — never practice breath-holding alone in water
• Train in a safe, controlled environment
• Follow established safety protocols
• Stop immediately if you feel discomfort, dizziness, or pain
• Consult a certified freediving instructor for in-water training

We expressly disclaim any liability for injury, harm, or death resulting from use of the App or participation in activities described within it.`,
  },
  {
    id: "content",
    title: "7. User Content",
    body: `You may submit training data, session logs, and feedback through the App ("User Content"). By submitting User Content, you grant us a worldwide, royalty-free, non-exclusive license to use, store, and analyze that content to provide and improve the App.

You retain ownership of your User Content. We will not sell your personal training data to third parties. Aggregated and anonymized data may be used for research and product improvement.

You agree not to submit content that is unlawful, harmful, or infringes third-party rights.`,
  },
  {
    id: "prohibited",
    title: "8. Prohibited Conduct",
    body: `You agree not to:
• Use the App in any way that violates applicable law or regulation
• Interfere with or disrupt the App's infrastructure or servers
• Attempt to gain unauthorized access to any part of the App
• Use the App to transmit spam, malware, or harmful code
• Impersonate any person or entity
• Collect or harvest data from other users without consent
• Use the App to train others commercially without a coach license agreement with us`,
  },
  {
    id: "ip",
    title: "9. Intellectual Property",
    body: `All content within the App — including text, graphics, training programs, algorithms, sounds, and software — is owned by Deeply or its licensors and is protected by copyright, trademark, and other intellectual property laws.

The Deeply name, logo, and product marks are trademarks of Deeply. You may not use our marks without prior written permission.`,
  },
  {
    id: "termination",
    title: "10. Termination",
    body: `We may suspend or terminate your access to the App at any time, with or without cause, with or without notice. You may delete your account at any time via Settings → Delete Account within the App.

Upon termination, your license to use the App ends immediately. Provisions of these Terms that by their nature should survive termination will survive, including Sections 6, 9, 11, and 12.`,
  },
  {
    id: "warranty",
    title: "11. Disclaimer of Warranties",
    body: `THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.

We do not warrant that the App will be uninterrupted, error-free, or free of viruses. We make no warranty regarding the accuracy or completeness of any training content.`,
  },
  {
    id: "liability",
    title: "12. Limitation of Liability",
    body: `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, DEEPLY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE APP.

OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING UNDER THESE TERMS SHALL NOT EXCEED THE AMOUNT YOU PAID TO DEEPLY IN THE TWELVE MONTHS PRECEDING THE CLAIM, OR $10, WHICHEVER IS GREATER.`,
  },
  {
    id: "governing",
    title: "13. Governing Law",
    body: `These Terms are governed by and construed in accordance with applicable law. Any disputes arising under these Terms shall be resolved through binding arbitration, except where prohibited by law, with proceedings conducted in English.

If any provision of these Terms is found unenforceable, the remaining provisions will remain in full force.`,
  },
  {
    id: "contact",
    title: "14. Contact",
    body: `If you have questions about these Terms, please contact us at:\n\n${CONTACT_EMAIL}`,
  },
];

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="mt-3 text-white/50 text-sm">
            Effective date: {EFFECTIVE_DATE}
          </p>
          <p className="mt-4 text-white/60 leading-relaxed">
            Please read these Terms of Service carefully before using Deeply.
            These Terms govern your access to and use of the App and all
            associated services.
          </p>
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
              <div className="text-white/65 leading-relaxed whitespace-pre-line text-[0.9375rem]">
                {s.body}
              </div>
            </section>
          ))}
        </div>

        {/* Footer strip */}
        <div className="mt-16 pt-8 border-t border-white/8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-white/40">
          <span>© 2026 Deeply. All rights reserved.</span>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
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
