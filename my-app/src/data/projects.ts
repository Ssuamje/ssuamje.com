export interface Project {
  id: string;
  name: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tech: string[];
  features: string[];
  github: string;
  demo: string;
  image: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: "cabi",
    name: "cabi",
    title: "Cabi",
    shortDescription: "사용자 친화적인 인터페이스를 제공하는 현대적인 웹 애플리케이션",
    fullDescription: "카비 프로젝트는 React와 TypeScript를 사용하여 개발되었으며, 사용자 친화적인 인터페이스를 제공합니다. 반응형 웹 디자인과 실시간 데이터 동기화를 통해 최적의 사용자 경험을 제공합니다.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    features: [
      "반응형 웹 디자인",
      "사용자 인증 시스템",
      "실시간 데이터 동기화",
      "모바일 최적화"
    ],
    github: "https://github.com/yourusername/cabi",
    demo: "https://cabi-demo.com",
    image: "/images/cabi-preview.png",
    color: "from-blue-500 to-purple-600"
  },
  {
    id: "shared-diary",
    name: "shared-diary",
    title: "Shared Diary",
    shortDescription: "사용자들이 일기를 공유하고 소통할 수 있는 플랫폼",
    fullDescription: "공유 일기 프로젝트는 Next.js와 Prisma를 사용하여 개발된 풀스택 웹 애플리케이션입니다. 사용자들이 일기를 공유하고 소통할 수 있는 플랫폼으로, 댓글과 좋아요 시스템을 통해 커뮤니티를 형성합니다.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    features: [
      "일기 작성 및 편집",
      "사용자 간 일기 공유",
      "댓글 및 좋아요 시스템",
      "검색 및 필터링"
    ],
    github: "https://github.com/yourusername/shared-diary",
    demo: "https://shared-diary-demo.com",
    image: "/images/shared-diary-preview.png",
    color: "from-green-500 to-teal-600"
  },
  {
    id: "turning",
    name: "turning",
    title: "Turning",
    shortDescription: "혁신적인 사용자 경험과 최적화된 성능을 제공하는 웹 애플리케이션",
    fullDescription: "터닝 프로젝트는 React와 Node.js를 기반으로 한 혁신적인 웹 애플리케이션입니다. 사용자 경험을 중시하는 디자인과 최적화된 성능을 제공하며, 대화형 인터페이스와 데이터 시각화 기능을 통해 차별화된 서비스를 제공합니다.",
    tech: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
    features: [
      "대화형 사용자 인터페이스",
      "데이터 시각화",
      "API 통합",
      "성능 최적화"
    ],
    github: "https://github.com/yourusername/turning",
    demo: "https://turning-demo.com",
    image: "/images/turning-preview.png",
    color: "from-orange-500 to-red-600"
  }
];

export const getProjectByName = (name: string): Project | undefined => {
  return projects.find(project => project.name === name);
};
