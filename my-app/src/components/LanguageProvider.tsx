"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {NextIntlClientProvider} from 'next-intl';
import {detectBrowserLanguage, type Locale} from '@/i18n/config';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>('ko');
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    // 로컬 스토리지에서 저장된 언어 확인
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && (savedLocale === 'ko' || savedLocale === 'en')) {
      setLocaleState(savedLocale);
    } else {
      // 저장된 언어가 없으면 브라우저 언어 감지
      const detectedLocale = detectBrowserLanguage();
      setLocaleState(detectedLocale);
    }
  }, []);

  useEffect(() => {
    // 언어가 변경될 때마다 메시지 파일 로드
    const loadMessages = async () => {
      const messageModule = await import(`../messages/${locale}.json`);
      setMessages(messageModule.default);
    };
    loadMessages();
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  const value = {
    locale,
    setLocale,
  };

  if (!messages) {
    return <div>Loading...</div>;
  }

  return (
    <LanguageContext.Provider value={value}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}