"use client";

import Header from "@/components/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Instagram, ExternalLink, Newspaper } from "lucide-react";
import ProjectCarousel from "@/components/main/ProjectCarousel";
import { TECH_STACK, AWARDS, SOCIAL_LINKS } from "@/constants/site";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/components/LanguageProvider";

export default function Home() {
  const t = useTranslations('home');
  const { locale } = useLanguage();
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-background">
      <Header />
      
      {/* 메인 카드 */}
      <Card className="w-full max-w-4xl mx-auto rounded-2xl border-0 shadow-2xl bg-black">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-3xl font-bold text-gray-50 mb-2">
            {t('title')}
          </CardTitle>
          <CardDescription className="text-xl text-gray-50">
            {t('description')}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-8">
          {/* 소개 섹션 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-50">{t('aboutMe')}</h2>
            <div className="space-y-3 text-gray-50 leading-relaxed">
              <p>
                {t('aboutDescription1')}
              </p>
              <p>
                {t('aboutDescription2')}
              </p>
            </div>
          </div>

          {/* 프로젝트 섹션 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-50">{t('projects')}</h2>
            <ProjectCarousel />
          </div>

          {/* 기술 스택 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-50">{t('techStack')}</h2>
            <div className="space-y-4">
              {/* Languages */}
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-2">{t('languages')}</h3>
                <div className="flex flex-wrap gap-2">
                  {TECH_STACK.languages.map((tech) => (
                    <div key={tech} className="px-3 py-2 bg-blue-700 rounded-lg text-sm font-medium text-white">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Platforms */}
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-2">{t('platforms')}</h3>
                <div className="flex flex-wrap gap-2">
                  {TECH_STACK.platforms.map((tech) => (
                    <div key={tech} className="px-3 py-2 bg-green-700 rounded-lg text-sm font-medium text-white">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Infrastructure */}
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-2">{t('infra')}</h3>
                <div className="flex flex-wrap gap-2">
                  {TECH_STACK.infra.map((tech) => (
                    <div key={tech} className="px-3 py-2 bg-purple-700 rounded-lg text-sm font-medium text-white">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 대외활동 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-50">{t('awards')}</h2>
            <div className="space-y-3">
              {AWARDS.map((award, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-gray-800 rounded-lg">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <h3 className="text-lg font-medium text-white">
                          {award.category[locale]}
                        </h3>
                        <p className="text-xs text-gray-400 mt-1">{award.date}</p>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        {award.newsLink && (
                          <a
                            href={award.newsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1 px-2 py-1 bg-blue-600 hover:bg-blue-500 rounded text-xs text-white transition-colors duration-200"
                          >
                            <Newspaper className="w-3 h-3" />
                            <span>{t('news')}</span>
                          </a>
                        )}
                        {award.projectLink && (
                          <a
                            href={award.projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1 px-2 py-1 bg-green-600 hover:bg-green-500 rounded text-xs text-white transition-colors duration-200"
                          >
                            <ExternalLink className="w-3 h-3" />
                            <span>{t('project')}</span>
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">
                      {award.description[locale]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 소셜 미디어 링크 */}
          <div className="space-y-4">
            <div className="flex justify-center space-x-6">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon === "github" ? Github : 
                           social.icon === "linkedin" ? Linkedin : Instagram;
                
                return (
                  <a 
                    key={social.name}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-600 hover:bg-gray-500 rounded-full transition-colors duration-200 group"
                  >
                    <Icon className="w-6 h-6 text-gray-50 group-hover:text-white transition-colors duration-200" />
                  </a>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
