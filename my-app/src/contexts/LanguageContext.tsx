"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'ko' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 브라우저 언어 감지
const detectBrowserLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';
  
  const browserLang = navigator.language.toLowerCase();
  return browserLang.startsWith('ko') ? 'ko' : 'en';
};

// 번역 데이터
const translations = {
  ko: {
    // 프로젝트 관련
    'project.view_details': '자세히 보기',
    'project.click_for_details': '클릭하여 프로젝트 상세 정보 확인',
    
    // 일반
    'language.korean': '한국어',
    'language.english': 'English',
  },
  en: {
    // 프로젝트 관련
    'project.view_details': 'View Details',
    'project.click_for_details': 'Click to view project details',
    
    // 일반
    'language.korean': '한국어',
    'language.english': 'English',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // 로컬 스토리지에서 저장된 언어 확인
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'ko' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
    } else {
      // 저장된 언어가 없으면 브라우저 언어 감지
      const detectedLanguage = detectBrowserLanguage();
      setLanguageState(detectedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string, fallback?: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || fallback || key;
  };

  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
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