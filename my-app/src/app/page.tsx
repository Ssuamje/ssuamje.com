import Header from "@/components/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Instagram } from "lucide-react";
import ProjectCarousel from "@/components/main/ProjectCarousel";
import { SITE_CONFIG, TECH_STACK, SOCIAL_LINKS } from "@/constants/site";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-background">
      <Header />
      
      {/* 메인 카드 */}
      <Card className="w-full max-w-4xl mx-auto rounded-2xl border-0 shadow-2xl bg-black">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-3xl font-bold text-gray-50 mb-2">
            {SITE_CONFIG.title}
          </CardTitle>
          <CardDescription className="text-xl text-gray-50">
            {SITE_CONFIG.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-8">
          {/* 소개 섹션 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-50">About Me</h2>
            <div className="space-y-3 text-gray-50 leading-relaxed">
              <p>
                React, Next.js, TypeScript를 주로 사용하여 현대적이고 반응형 웹 애플리케이션을 개발하고 있습니다. 
                깔끔한 코드와 직관적인 사용자 인터페이스를 만드는 것에 열정을 가지고 있으며, 
                새로운 기술을 배우고 적용하는 것을 즐깁니다.
              </p>
              <p>
                현재는 프론트엔드 개발에 집중하고 있지만, 백엔드 기술에도 관심이 많아 
                풀스택 개발자로 성장하고자 노력하고 있습니다. 
                사용자 중심의 디자인과 최적화된 성능을 추구하며, 
                지속적으로 개선하는 개발 문화를 만들어가고 있습니다.
              </p>
            </div>
          </div>

          {/* 프로젝트 섹션 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-50">Projects</h2>
            <ProjectCarousel />
          </div>

          {/* 기술 스택 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-50">Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {TECH_STACK.map((tech) => (
                <div key={tech} className="px-4 py-2 bg-gray-600 rounded-lg text-center text-sm font-medium text-gray-50">
                  {tech}
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
