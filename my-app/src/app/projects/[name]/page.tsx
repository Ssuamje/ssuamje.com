"use client";

import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { getProjectByName, type Project } from "@/data/projects";
import { useLanguage } from "@/components/LanguageProvider";
import { useTranslations } from "next-intl";

interface ProjectPageProps {
  params: {
    name: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectByName(params.name);
  const { locale } = useLanguage();
  const t = useTranslations('projectDetail');
  
  if (!project) {
    notFound();
  }

  // 현재 언어에 맞는 프로젝트 데이터 반환
  const getLocalizedProject = (project: Project) => ({
    ...project,
    title: project.title[locale],
    shortDescription: project.shortDescription[locale],
    fullDescription: project.fullDescription[locale],
    features: project.features[locale],
  });

  const localizedProject = getLocalizedProject(project);

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        {/* 뒤로가기 버튼 */}
        <Link 
          href="/"
          className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t('backToHome')}</span>
        </Link>

        {/* 프로젝트 헤더 */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">{localizedProject.title}</h1>
          <div className="mb-4">
            <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
              {project.startDate} {project.endDate ? `~ ${project.endDate}` : `~ ${t('ongoing')}`}
            </span>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">{localizedProject.fullDescription}</p>
        </div>

        {/* 프로젝트 카드 */}
        <Card className="bg-black border-0 shadow-2xl mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl text-white">{t('projectInfo')}</CardTitle>
              <div className="flex space-x-3">
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    <span>{t('github')}</span>
                  </a>
                )}
                {project.demo && (
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>{t('liveDemo')}</span>
                  </a>
                )}
                {project.playStore && (
                  <a 
                    href={project.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg text-white transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>{t('playStore')}</span>
                  </a>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 기술 스택 */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">{t('techStack')}</h3>
              <div className="space-y-4">
                {project.tech.server && project.tech.server.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">{t('server')}</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.server.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-2 bg-blue-700 rounded-lg text-sm font-medium text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {project.tech.client && project.tech.client.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">{t('client')}</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.client.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-2 bg-green-700 rounded-lg text-sm font-medium text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {project.tech.infra && project.tech.infra.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">{t('infra')}</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.infra.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-2 bg-purple-700 rounded-lg text-sm font-medium text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 주요 기능 */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">{t('keyFeatures')}</h3>
              <ul className="space-y-2">
                {localizedProject.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 text-gray-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
