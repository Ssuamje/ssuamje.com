import { notFound } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { getProjectByName } from "@/data/projects";

interface ProjectPageProps {
  params: {
    name: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectByName(params.name);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        {/* 뒤로가기 버튼 */}
        <Link 
          href="/"
          className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>홈으로 돌아가기</span>
        </Link>

        {/* 프로젝트 헤더 */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
          <p className="text-xl text-gray-300 leading-relaxed">{project.fullDescription}</p>
        </div>

        {/* 프로젝트 카드 */}
        <Card className="bg-black border-0 shadow-2xl mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl text-white">프로젝트 정보</CardTitle>
              <div className="flex space-x-3">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-colors duration-200"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a 
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 기술 스택 */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">사용 기술</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-2 bg-gray-700 rounded-lg text-sm font-medium text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 주요 기능 */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">주요 기능</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
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
