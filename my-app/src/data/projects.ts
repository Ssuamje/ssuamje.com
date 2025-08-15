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
  tech: {
    server?: string[];
    client?: string[];
    infra?: string[];
  };
  features: {
    ko: string[];
    en: string[];
  };
  github: string;
  demo: string;
  playStore?: string; // 선택적 Play Store URL
  image: string;
  localImage?: string; // 선택적 로컬 이미지 경로 (public 폴더 기준)
  imageUrl?: string; // 선택적 외부 이미지 URL
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
      ko: "42Seoul 교육생들을 위한 사물함 대여 및 관리 시스템",
      en: "Locker rental and management system for 42Seoul students"
    },
    fullDescription: {
      ko: "42Seoul 교육생들의 사물함 대여 및 관리를 위한 웹 애플리케이션입니다. 백엔드 리드로 참여하여 Java Spring 기반의 서버 개발, 핵심 기능 구현, 트러블 슈팅 및 기술 문서화를 담당했습니다. RESTful API 설계, 데이터베이스 최적화, 그리고 실시간 사물함 상태 관리 시스템을 구축했습니다.",
      en: "A web application for locker rental and management for 42Seoul students. As the backend lead, I was responsible for Java Spring-based server development, core feature implementation, troubleshooting, and technical documentation. I built RESTful API design, database optimization, and real-time locker status management system."
    },
    tech: {
      server: ["Java", "Spring Boot", "JPA", "MariaDB", "Grafana", "Prometheus"],
      infra: ["AWS - EC2, CodeDeploy", "Github Actions"]
    },
    features: {
      ko: [
        "사물함 실시간 상태 관리",
        "사용자 인증 및 권한 관리",
        "대여/반납 시스템",
        "관리자 대시보드",
        "사용 통계 및 분석",
        "알림 시스템"
      ],
      en: [
        "Real-time Locker Status Management",
        "User Authentication & Authorization",
        "Rental/Return System",
        "Admin Dashboard",
        "Usage Statistics & Analytics",
        "Notification System"
      ]
    },
    github: "https://github.com/innovationacademy-kr/Cabi",
    demo: "",
    image: "/images/cabi-preview.png",
    localImage: "/images/projects/cabi_thumbnail.png",
    imageUrl: "https://camo.githubusercontent.com/f91e4e9d5de76842540f42f2490c2255fa475e0356d45777fd027cdd0e2504a9/68747470733a2f2f6769746875622d70726f64756374696f6e2d757365722d61737365742d3632313064662e73332e616d617a6f6e6177732e636f6d2f31333237383935352f3237383535343136312d38336266656438332d653134382d343465352d383338392d6234393539383732356365342e706e67",
    color: "from-blue-500 to-purple-600",
    startDate: "2024-01-15",
    endDate: "2024-06-30",
    priority: 5
  },
  {
    id: "shared-diary",
    name: "shared-diary",
    title: {
      ko: "공유일기",
      en: "Shared Diary"
    },
    shortDescription: {
      ko: "일상을 공유하고 소통하는 iOS 모바일 일기 애플리케이션",
      en: "iOS mobile diary application for sharing daily life and communication"
    },
    fullDescription: {
      ko: "공유일기는 사용자들이 일상을 기록하고 서로 소통할 수 있는 iOS 모바일 애플리케이션입니다. Kotlin Spring Boot 기반의 백엔드 전체와 실시간 알림 서버 개발을 담당했으며, MariaDB를 활용한 안정적인 데이터 관리와 Grafana-Prometheus를 통한 모니터링 시스템을 구축했습니다. 현재 App Store에서 서비스 중입니다.",
      en: "Shared Diary is an iOS mobile application where users can record their daily lives and communicate with each other. I was responsible for the entire Kotlin Spring Boot-based backend development and real-time notification server, building stable data management with MariaDB and monitoring systems using Grafana-Prometheus. Currently available on the App Store."
    },
    tech: {
      server: ["Kotlin", "Spring Boot","MariaDB", "FCM"],
      infra: [ "AWS - S3, CodeDeploy, RDS", "Grafana", "Prometheus"]
    },
    features: {
      ko: [
        "Kotlin Spring Boot 백엔드 서버",
        "MariaDB 데이터베이스 설계",
        "실시간 푸시 알림 시스템",
        "Grafana-Prometheus 모니터링",
        "사용자 인증 및 보안",
        "RESTful API 설계"
      ],
      en: [
        "Kotlin Spring Boot Backend Server",
        "MariaDB Database Design", 
        "Real-time Push Notification System",
        "Grafana-Prometheus Monitoring",
        "User Authentication & Security",
        "RESTful API Design"
      ]
    },
    github: "",
    demo: "https://apps.apple.com/kr/app/%EA%B3%B5%EC%9C%A0%EC%9D%BC%EA%B8%B0/id6474495000",
    image: "/images/shared-diary-preview.png",
    imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/51/2a/2a/512a2af6-d2a7-3eb7-451c-eb19bc26695b/AppIcon-0-0-1x_U007ephone-0-0-sRGB-85-220.png/434x0w.webp",
    color: "from-green-500 to-teal-600",
    startDate: "2024-07-01",
    endDate: "2024-12-15",
    priority: 4
  },
  {
    id: "turning",
    name: "turning",
    title: {
      ko: "터닝",
      en: "Turning"
    },
    shortDescription: {
      ko: "앱 잠금, 폰 잠금, 공부 집중 타이머를 제공하는 스크린타임 관리 앱",
      en: "Screen time management app providing app lock, phone lock, and study focus timer"
    },
    fullDescription: {
      ko: "터닝은 한국 스크린타임 관리 분야 1위 앱으로, iOS와 Android에서 서비스되고 있습니다. 안드로이드 개발을 주력으로 담당했으며, iOS의 Screen Time API와 동일한 기능을 안드로이드에서 자체 구현하는 핵심 로직을 개발했습니다. 또한 백엔드 서버 개발도 함께 담당했습니다.",
      en: "Turning is Korea's #1 screen time management app, available on both iOS and Android. I primarily handled Android development and created core logic that implements functionality equivalent to iOS's Screen Time API natively on Android. I also contributed to backend server development."
    },
    tech: {
      server: ["Nest.js", "Mongo DB -> PostgreSQL"],
      client: ["Kotlin", "Android Native", "Realm", "Accessibility Service"],
      infra: ["AWS", "K8S", "GitOps"]
    },
    features: {
      ko: [
        "커스텀 스크린타임 추적 시스템",
        "앱 사용량 분석 및 제한",
        "실시간 앱 잠금 기능",
        "공부 집중 타이머",
        "사용 패턴 데이터 시각화",
        "백그라운드 서비스 최적화"
      ],
      en: [
        "Custom Screen Time Tracking System",
        "App Usage Analysis & Restrictions",
        "Real-time App Lock Feature",
        "Study Focus Timer",
        "Usage Pattern Data Visualization",
        "Background Service Optimization"
      ]
    },
    github: "",
    demo: "https://apps.apple.com/kr/app/%ED%84%B0%EB%8B%9D-%EC%95%B1-%EC%9E%A0%EA%B8%88-%ED%8F%B0-%EC%9E%A0%EA%B8%88-%EA%B3%B5%EB%B6%80-%EC%A7%91%EC%A4%91-%ED%83%80%EC%9D%B4%EB%A8%B8-%EB%A3%A8%ED%8B%B4/id6449270376",
    playStore: "https://play.google.com/store/apps/details?id=com.hustlers.turning&hl=ko",
    image: "/images/turning-preview.png",
    imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/86/a1/df/86a1df8b-ac34-d3c0-faf1-2757b5e0275a/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/434x0w.webp",
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
