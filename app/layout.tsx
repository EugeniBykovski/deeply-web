import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B1C1D",
};

export const metadata: Metadata = {
  title: {
    default: "Deeply — breathe, dive, progress",
    template: "%s • Deeply",
  },
  description:
    "Deeply — приложение для тренировок задержки дыхания и фридайвинга: погружения по шагам, прогресс, безопасность и мотивация.",
  icons: {
    icon: [{ url: "/img/logo.ico", type: "image/ico" }],
    apple: [{ url: "/img/logo.ico" }],
    shortcut: [{ url: "/img/logo.ico" }],
  },
  applicationName: "Deeply",
  metadataBase: new URL("https://deeply.app"),
  openGraph: {
    title: "Deeply — breathe, dive, progress",
    description:
      "Тренировки задержки дыхания и фридайвинга: погружения по шагам, прогресс и безопасность.",
    type: "website",
    images: [{ url: "/img/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deeply — breathe, dive, progress",
    description:
      "Тренировки задержки дыхания и фридайвинга: погружения по шагам, прогресс и безопасность.",
    images: ["/img/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0B1C1D] text-white min-h-screen flex flex-col`}
      >
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
