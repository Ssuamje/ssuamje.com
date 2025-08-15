"use client";

export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sanan",
    "jobTitle": "Software Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "HUSTLERS Corp"
    },
    "url": "https://ssuamje.com",
    "sameAs": [
      "https://github.com/Ssuamje",
      "https://linkedin.com/in/ssuamje"
    ],
    "knowsAbout": [
      "Kotlin",
      "TypeScript", 
      "Java",
      "Android Development",
      "Backend Development",
      "Frontend Development"
    ],
    "description": "끊임없이 소통하는 개발자 Sanan입니다. 문제들과 리소스를 함께 논의하고, 중요한 문제부터 함께 도전하는 것을 좋아합니다."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}