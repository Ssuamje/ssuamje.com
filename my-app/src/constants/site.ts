// 사이트 관련 상수들

interface Award {
  category: {
    ko: string;
    en: string;
  };
  description: {
    ko: string;
    en: string;
  };
  date: string;
  newsLink?: string;
  projectLink?: string;
}

export const TECH_STACK = {
  languages: ["Kotlin", "TypeScript", "Java"],
  platforms: ["Server (Spring Boot, Nest.js, Express)", "Android Native (Kotlin)", "Back-Office (Next.js)"],
  infra: ["Cloud Resources", "Containers", "CI-CD", "Monitoring"]
} as const;

export const AWARDS: Award[] = [
  {
    category: {
      ko: "스마일게이트 해커톤 - Infinithon 2025 대상",
      en: "Smilegate Hackathon - Infinithon 2025 Grand Prize"
    },
    description: {
      ko: "팀장 및 기획 역할로 개발자 안구건조증 문제 해결을 위한 AI 기반 눈깜빡임 감지 알림 서비스 개발하여 우승",
      en: "Won by developing AI-based blink detection alert service to solve developer's dry eye problems as team leader and project planner"
    },
    date: "2025-08-10",
    newsLink: "https://newsroom.smilegate.com/bbs/board.php?bo_table=news&wr_id=2037",
    projectLink: "https://github.com/Ssuamje/infinithon-3-3s--cut--choc"
  },
  {
    category: {
      ko: "과학기술통신정보부장관상 수상",
      en: "Minister of Science and ICT Award"
    },
    description: {
      ko: "Cabi 프로젝트로 사물함 가용률을 20% 미만에서 95% 이상으로 향상시켜 수상",
      en: "Awarded for improving locker availability from under 20% to over 95% with Cabi project"
    },
    date: "2022-12-14",
    projectLink: "https://github.com/innovationacademy-kr/Cabi"
  }
] as const;

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/Ssuamje",
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/ssuamje",
    icon: "linkedin"
  },
  // {
  //   name: "Instagram",
  //   url: "https://instagram.com",
  //   icon: "instagram"
  // }
] as const;
