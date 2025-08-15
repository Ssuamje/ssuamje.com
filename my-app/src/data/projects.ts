export interface Project {
  id: string;
  name: string;
  title: {
    ko: string;
    en: string;
  };
  shortDescription: {
    ko: string;
    en: string;
  };
  fullDescription: {
    ko: string;
    en: string;
  };
  tech: string[];
  features: {
    ko: string[];
    en: string[];
  };
  github: string;
  demo: string;
  image: string;
  color: string;
  startDate: string;
  endDate?: string;
  priority: number; // 1-5 (5가 가장 높은 우선순위)
}

export const projects: Project[] = [
  {
    id: "cabi",
    name: "cabi",
    title: {
      ko: "Cabi",
      en: "Cabi"
    },
    shortDescription: {
      ko: "사용자 친화적인 인터페이스를 제공하는 현대적인 웹 애플리케이션",
      en: "Modern web application providing user-friendly interface"
    },
    fullDescription: {
      ko: "카비 프로젝트는 React와 TypeScript를 사용하여 개발되었으며, 사용자 친화적인 인터페이스를 제공합니다. 반응형 웹 디자인과 실시간 데이터 동기화를 통해 최적의 사용자 경험을 제공합니다.",
      en: "The Cabi project is developed using React and TypeScript, providing a user-friendly interface. It delivers optimal user experience through responsive web design and real-time data synchronization."
    },
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    features: {
      ko: [
        "반응형 웹 디자인",
        "사용자 인증 시스템",
        "실시간 데이터 동기화",
        "모바일 최적화"
      ],
      en: [
        "Responsive Web Design",
        "User Authentication System",
        "Real-time Data Synchronization",
        "Mobile Optimization"
      ]
    },
    github: "https://github.com/yourusername/cabi",
    demo: "https://cabi-demo.com",
    image: "/images/cabi-preview.png",
    color: "from-blue-500 to-purple-600",
    startDate: "2024-01-15",
    endDate: "2024-06-30",
    priority: 1
  },
  {
    id: "shared-diary",
    name: "shared-diary",
    title: {
      ko: "Shared Diary",
      en: "Shared Diary"
    },
    shortDescription: {
      ko: "사용자들이 일기를 공유하고 소통할 수 있는 플랫폼",
      en: "Platform where users can share diaries and communicate"
    },
    fullDescription: {
      ko: "공유 일기 프로젝트는 Next.js와 Prisma를 사용하여 개발된 풀스택 웹 애플리케이션입니다. 사용자들이 일기를 공유하고 소통할 수 있는 플랫폼으로, 댓글과 좋아요 시스템을 통해 커뮤니티를 형성합니다.",
      en: "The Shared Diary project is a full-stack web application developed using Next.js and Prisma. It's a platform where users can share diaries and communicate, forming a community through comment and like systems."
    },
    tech: ["Next.js", "Prisma", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    features: {
      ko: [
        "일기 작성 및 편집",
        "사용자 간 일기 공유",
        "댓글 및 좋아요 시스템",
        "검색 및 필터링"
      ],
      en: [
        "Diary Writing and Editing",
        "Diary Sharing Between Users",
        "Comment and Like System",
        "Search and Filtering"
      ]
    },
    github: "https://github.com/yourusername/shared-diary",
    demo: "https://shared-diary-demo.com",
    image: "/images/shared-diary-preview.png",
    color: "from-green-500 to-teal-600",
    startDate: "2024-07-01",
    endDate: "2024-12-15",
    priority: 2
  },
  {
    id: "turning",
    name: "turning",
    title: {
      ko: "Turning",
      en: "Turning"
    },
    shortDescription: {
      ko: "혁신적인 사용자 경험과 최적화된 성능을 제공하는 웹 애플리케이션",
      en: "Web application providing innovative user experience and optimized performance"
    },
    fullDescription: {
      ko: "터닝 프로젝트는 React와 Node.js를 기반으로 한 혁신적인 웹 애플리케이션입니다. 사용자 경험을 중시하는 디자인과 최적화된 성능을 제공하며, 대화형 인터페이스와 데이터 시각화 기능을 통해 차별화된 서비스를 제공합니다.",
      en: "The Turning project is an innovative web application based on React and Node.js. It provides user-centric design and optimized performance, offering differentiated services through interactive interfaces and data visualization features."
    },
    tech: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
    features: {
      ko: [
        "대화형 사용자 인터페이스",
        "데이터 시각화",
        "API 통합",
        "성능 최적화"
      ],
      en: [
        "Interactive User Interface",
        "Data Visualization",
        "API Integration",
        "Performance Optimization"
      ]
    },
    github: "https://github.com/yourusername/turning",
    demo: "https://turning-demo.com",
    image: "/images/turning-preview.png",
    color: "from-orange-500 to-red-600",
    startDate: "2024-10-01",
    priority: 3
  }
];

// 중요도 우선, 그 다음 최신 시작 순으로 정렬된 프로젝트 배열
export const getSortedProjects = (): Project[] => {
  return [...projects].sort((a, b) => {
    // 1. 중요도로 먼저 정렬 (높은 순)
    if (a.priority !== b.priority) {
      return b.priority - a.priority;
    }
    
    // 2. 중요도가 같으면 시작 날짜로 정렬 (최신 순)
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });
};

export const getProjectByName = (name: string): Project | undefined => {
  return projects.find(project => project.name === name);
};
