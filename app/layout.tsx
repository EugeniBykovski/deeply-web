import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import I18nProvider from "@/providers/i18n-provider/i18n-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Deeply — breathe, dive, progress",
    template: "%s • Deeply",
  },
  description:
    "Deeply — приложение для тренировок задержки дыхания и фридайвинга: погружения по шагам, прогресс, безопасность и мотивация.",
  icons: {
    icon: [{ url: "/img/sea.png", type: "image/png" }],
    apple: [{ url: "/img/sea.png" }],
    shortcut: [{ url: "/img/sea.png" }],
  },
  applicationName: "Deeply",
  themeColor: "#0B1C1D",
  metadataBase: new URL("https://deeply.app"),
  openGraph: {
    title: "Deeply — breathe, dive, progress",
    description:
      "Тренировки задержки дыхания и фридайвинга: погружения по шагам, прогресс и безопасность.",
    type: "website",
    images: [{ url: "/img/sea.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deeply — breathe, dive, progress",
    description:
      "Тренировки задержки дыхания и фридайвинга: погружения по шагам, прогресс и безопасность.",
    images: ["/img/sea.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0B1C1D] text-white min-h-screen flex flex-col`}
      >
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
