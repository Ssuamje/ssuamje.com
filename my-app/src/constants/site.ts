// 사이트 관련 상수들

export const SITE_CONFIG = {
  name: "Ssuamje.dev",
  title: "끊임없이 소통하는 개발자 안상제입니다",
  description: "문제들과 리소스를 함께 논의하고, 중요한 문제부터 함께 도전하는 것을 좋아합니다.",
  author: "안상제",
  role: "프론트엔드 개발자",
  email: "contact@ssuamje.com",
  github: "https://github.com/ssuamje",
  linkedin: "https://linkedin.com/in/ssuamje",
  instagram: "https://instagram.com/ssuamje"
} as const;

export const TECH_STACK = [
  "React", "Next.js", "TypeScript", 
  "Tailwind CSS", "Node.js", "Prisma"
] as const;

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: "linkedin"
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: "instagram"
  }
] as const;
