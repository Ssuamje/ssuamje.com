"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function ProjectCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef<number>();
  const scrollPositionRef = useRef(0);
  const isUserScrollingRef = useRef(false);

  // 스크롤 이벤트 처리
  const handleScroll = useCallback(() => {
    if (!carouselRef.current) return;
    
    isUserScrollingRef.current = true;
    const scrollLeft = carouselRef.current.scrollLeft;
    const cardWidth = 320 + 24;
    const originalLength = projects.length * cardWidth;
    
    // 무한 스크롤 처리
    if (scrollLeft <= 0) {
      carouselRef.current.scrollLeft = originalLength;
    } else if (scrollLeft >= originalLength * 2) {
      carouselRef.current.scrollLeft = originalLength;
    }
    
    // 사용자 스크롤 후 자동 스크롤 재시작을 위한 타이머
    clearTimeout(window.userScrollTimeout);
    window.userScrollTimeout = setTimeout(() => {
      isUserScrollingRef.current = false;
      if (!isHovered) {
        startAutoScrollRef.current();
      }
    }, 1000);
  }, []);

  // 자동 스크롤 애니메이션
  const startAutoScroll = useCallback(() => {
    if (!carouselRef.current || isHovered || isUserScrollingRef.current) return;

    const animate = () => {
      if (!carouselRef.current || isHovered || isUserScrollingRef.current) return;

      carouselRef.current.scrollLeft += 1; // 스크롤 속도
      
      const cardWidth = 320 + 24;
      const originalLength = projects.length * cardWidth;
      
      // 무한 스크롤 경계 처리
      if (carouselRef.current.scrollLeft >= originalLength * 2) {
        carouselRef.current.scrollLeft = originalLength;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
  }, [isHovered]);

  // startAutoScroll을 useEffect 의존성에서 제거하기 위해 useCallback 의존성 수정
  const startAutoScrollRef = useRef(startAutoScroll);
  startAutoScrollRef.current = startAutoScroll;

  // 자동 스크롤 중지
  const stopAutoScroll = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = undefined;
    }
  }, []);

  // 마우스 호버 이벤트 - 즉시 적용
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    stopAutoScroll();
  }, [stopAutoScroll]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    startAutoScroll();
  }, [startAutoScroll]);

  // 터치 이벤트 (모바일 지원)
  const handleTouchStart = useCallback(() => {
    setIsHovered(true);
    stopAutoScroll();
  }, [stopAutoScroll]);

  const handleTouchEnd = useCallback(() => {
    setTimeout(() => {
      setIsHovered(false);
      if (!isUserScrollingRef.current) {
        startAutoScrollRef.current();
      }
    }, 1000);
  }, []);

  // 초기 스크롤 위치 설정 (중간에서 시작)
  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = 320 + 24;
      const originalLength = projects.length * cardWidth;
      carouselRef.current.scrollLeft = originalLength; // 첫 번째 복사본에서 시작
    }
  }, []);

  useEffect(() => {
    if (!isHovered && !isUserScrollingRef.current) {
      startAutoScrollRef.current();
    }

    return () => {
      stopAutoScroll();
    };
  }, [isHovered, stopAutoScroll]);

  // 스크롤 이벤트 리스너 등록
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.addEventListener('scroll', handleScroll);

    return () => {
      carousel.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // 프로젝트를 여러 번 복사하여 무한 스크롤 효과 생성
  // 충분한 길이로 복사하여 부드러운 무한 스크롤 구현
  // 원본을 3번 복사하여 매끄러운 전환 보장
  const repeatedProjects = Array.from({ length: 3 }, () => projects).flat();

  return (
    <div className="relative w-full">
      {/* 스크롤 가능한 컨테이너 */}
      <div 
        ref={carouselRef}
        className="flex space-x-6 overflow-x-auto scrollbar-hide"
        style={{ 
          scrollBehavior: 'auto'
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {repeatedProjects.map((project, index) => (
          <Link 
            key={`${project.id}-${index}`} 
            href={`/projects/${project.name}`}
            className="flex-shrink-0 w-80"
          >
            <Card className="h-64 bg-gradient-to-br border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group overflow-hidden">
              <div className="relative h-full">
                {/* 프로젝트 이미지 */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-6xl text-white/20 font-bold">
                    {project.title.charAt(0)}
                  </div>
                </div>
                
                {/* 오버레이 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* 프로젝트 정보 */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>
                
                {/* 호버 효과 */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-white text-lg font-semibold mb-2">
                      자세히 보기
                    </div>
                    <div className="text-white/80 text-sm">
                      클릭하여 프로젝트 상세 정보 확인
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
      
      {/* 양쪽 끝 페이드 효과 */}
      <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
    </div>
  );
}
