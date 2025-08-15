"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { useTranslations } from 'next-intl';
import { type Locale } from '@/i18n/config';
import { Globe } from 'lucide-react';

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();
  const t = useTranslations('language');
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = (newLocale: Locale) => {
    setLocale(newLocale);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* 언어 옵션 메뉴 */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 bg-card border border-border rounded-lg shadow-lg p-2 min-w-[120px]">
            <button
              onClick={() => toggleLanguage('ko')}
              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                locale === 'ko' 
                  ? 'bg-accent text-accent-foreground' 
                  : 'hover:bg-accent/50 text-foreground'
              }`}
            >
              {t('korean')}
            </button>
            <button
              onClick={() => toggleLanguage('en')}
              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                locale === 'en' 
                  ? 'bg-accent text-accent-foreground' 
                  : 'hover:bg-accent/50 text-foreground'
              }`}
            >
              {t('english')}
            </button>
          </div>
        )}
        
        {/* 플로팅 버튼 */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary text-primary-foreground w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center border-2 border-border/20"
          aria-label="Change language"
        >
          <Globe className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}