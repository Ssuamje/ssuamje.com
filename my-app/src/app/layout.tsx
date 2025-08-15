import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { LanguageProvider } from "@/components/LanguageProvider";
import LanguageToggle from "@/components/ui/LanguageToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanan의 Blog",
  description: "내가 맹글은 블로그",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem={true}
        storageKey="theme"
        disableTransitionOnChange={true}
      >
        <body className={inter.className}>
          <LanguageProvider>
            {children}
            <LanguageToggle />
          </LanguageProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
