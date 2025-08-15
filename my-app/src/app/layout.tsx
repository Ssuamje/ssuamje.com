import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { LanguageProvider } from "@/components/LanguageProvider";
import LanguageToggle from "@/components/ui/LanguageToggle";
import JsonLd from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Sanan's Bio",
    template: "%s | Sanan"
  },
  description: "끊임없이 소통하는 개발자 Sanan입니다.",
  keywords: ["개발자", "Developer", "Kotlin", "TypeScript", "Java", "Android", "Backend", "Frontend", "Tech Lead"],
  authors: [{ name: "Sanan", url: "https://ssuamje.com" }],
  creator: "Sanan",
  publisher: "Sanan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://ssuamje.com",
    siteName: "Sanan - Developer Portfolio",
    title: "Sanan's Bio",
    description: "끊임없이 소통하는 개발자 Sanan입니다.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sanan - Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanan's Bio",
    description: "끊임없이 소통하는 개발자 Sanan입니다.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "google-site-verification-code", // Google Search Console에서 발급받은 코드
  },
  alternates: {
    canonical: "https://ssuamje.com",
    languages: {
      "ko-KR": "https://ssuamje.com",
      "en-US": "https://ssuamje.com/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <ThemeProvider>
        <body className={inter.className}>
          <LanguageProvider>
            {children}
            <LanguageToggle />
            <JsonLd />
          </LanguageProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
