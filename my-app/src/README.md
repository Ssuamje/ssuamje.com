# Ssuamje.dev 프로젝트 구조

## 📁 디렉토리 구조

```
src/
├── app/                    # Next.js 13+ App Router
│   ├── globals.css        # 전역 스타일
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 메인 페이지
│   └── projects/          # 프로젝트 상세 페이지
│       └── [name]/        # 동적 라우팅
│           └── page.tsx
├── components/             # 재사용 가능한 컴포넌트
│   ├── ui/                # 기본 UI 컴포넌트 (shadcn/ui)
│   ├── header/            # 헤더 관련 컴포넌트
│   ├── main/              # 메인 페이지 컴포넌트
│   │   └── ProjectCarousel.tsx  # 자동 흐르는 프로젝트 캐러셀
│   └── provider/          # 컨텍스트 프로바이더
├── constants/              # 상수 정의
│   └── site.ts            # 사이트 관련 상수
├── data/                   # 데이터 정의
│   └── projects.ts        # 프로젝트 데이터 및 타입
└── lib/                    # 유틸리티 함수
    ├── utils.ts            # 일반 유틸리티
    └── animations.ts       # 애니메이션 관련 유틸리티
```

## 🎯 주요 기능

### 1. 자동 흐르는 프로젝트 캐러셀
- `ProjectCarousel` 컴포넌트로 구현
- 오른쪽에서 왼쪽으로 자동 스크롤
- 무한 루프 애니메이션
- 호버 효과 및 링크 기능

### 2. 프로젝트 상세 페이지
- 동적 라우팅 (`/projects/{name}`)
- 각 프로젝트별 상세 정보
- GitHub 및 Live Demo 링크

### 3. 다크 모드 테마
- 항상 다크 모드로 고정
- 커스텀 배경색 (`#121315`)

## 🔧 기술 스택

- **Framework**: Next.js 13+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animation**: CSS Transitions + requestAnimationFrame

## 📱 반응형 디자인

- 모바일 우선 접근법
- Tailwind CSS의 반응형 클래스 활용
- 모든 화면 크기에서 최적화된 경험

## 🚀 성능 최적화

- 컴포넌트 분리로 번들 크기 최적화
- 이미지 최적화 (Next.js Image 컴포넌트)
- 애니메이션 성능 최적화 (requestAnimationFrame)
- CSS 변수를 활용한 테마 시스템
